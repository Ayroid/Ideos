import { useToast } from "@/components/ui/use-toast";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { authSchema } from "@/schemas/authSchema";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { SERVER_URL } from "@/config";

import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateNavigation } from "@/redux/slices/activeNavigationSlice";

const AuthPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(authSchema),
  });

  const onSubmit = (data) => {
    axios
      .post(`${SERVER_URL}/user/login`, data)
      .then((res) => {
        localStorage.setItem("accessToken", res.data.accessToken);
        localStorage.setItem("refreshToken", res.data.refreshToken);
        dispatch(updateNavigation("home"));
        toast({
          title: "Success!",
          description: "Logged in successfully",
        });
        navigate("/");
      })
      .catch((err) => {
        if (err.response.status === 404) {
          toast({
            title: "Error",
            description: "User not found",
          });
          // navigate("/auth/login");
        }
        if (err.response.status === 401) {
          toast({
            title: "Error",
            description: "Invalid credentials",
          });
        }
      });
  };

  return (
    <div className="p-4 rounded-lg shadow-md w-96">
      <Card>
        <CardHeader>
          <CardTitle className="flex self-center text-3xl font-bold text-center my-2">
            Login
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <Input
                type="text"
                placeholder="Username"
                {...register("username")}
              />
              {errors.username && (
                <p className="text-red-600 text-sm">
                  {errors.username.message}
                </p>
              )}
            </div>
            <div>
              <Input
                type="password"
                placeholder="Password"
                {...register("password")}
              />
              {errors.password && (
                <p className="text-red-600 text-sm">
                  {errors.password.message}
                </p>
              )}
            </div>
            <Button type="submit" className="w-full">
              Login
            </Button>
          </form>
        </CardContent>
        <CardFooter>
          <p className="text-sm text-slate-400 font-semibold">
            New to Ideos? <span className="text-slate-200">Sign Up</span>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default AuthPage;
