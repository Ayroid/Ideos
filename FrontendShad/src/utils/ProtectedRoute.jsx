import { useEffect, useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";

const SERVER_URL = import.meta.env.VITE_SERVER_URL;
const verifyTokenURL = `${SERVER_URL}/user/verify`;
const refreshTokenURL = `${SERVER_URL}/user/refresh`;

const ProtectedRoute = ({ path, children }) => {
  const [verified, setVerified] = useState(false);
  const [loading, setLoading] = useState(true);

  const signUpPageRequested = path === "/auth";

  const refreshToken = async () => {
    try {
      const refreshToken = localStorage.getItem("refreshToken");

      const response = await axios.post(refreshTokenURL, null, {
        headers: {
          Authorization: refreshToken,
        },
      });

      if (response.status === 200) {
        const newToken = response.data.accessToken;
        localStorage.setItem("accessToken", response.data.accessToken);
        return newToken;
      }
    } catch (error) {
      return false;
    }
  };

  useEffect(() => {
    const verifyToken = async () => {
      try {
        let accessToken = localStorage.getItem("accessToken");
        const refreshToken = localStorage.getItem("refreshToken");

        if (refreshToken == null && accessToken == null) {
          setVerified(false);
          return;
        }

        if (accessToken == null) {
          accessToken = await refreshToken().then((ans) => {
            if (!ans) {
              setVerified(false);
            } else {
              setVerified(true);
            }
          });
        }

        const response = await axios.post(verifyTokenURL, null, {
          headers: {
            Authorization: accessToken,
          },
        });

        if (response.status === 200) {
          setVerified(true);
        }
      } catch (error) {
        console.log("Token Invalid!");
        await refreshToken().then((ans) => {
          if (ans) {
            setVerified(true);
          } else {
            setVerified(false);
          }
        });
      } finally {
        setLoading(false);
      }
    };
    verifyToken();
  });

  if (!loading) {
    if (signUpPageRequested && verified) {
      return <Navigate to="/" />;
    } else if (!signUpPageRequested && !verified) {
      return <Navigate to="/auth" />;
    } else {
      return children;
    }
  }
};

// ---------------------------- PROPS ----------------------------

ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
  path: PropTypes.string.isRequired,
};

// ---------------------------- EXPORT ----------------------------

export default ProtectedRoute;
