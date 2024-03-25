import Proptypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./ShowMore.module.css";

// CSS STYLES
const { showMore } = styles;

const ShowMore = ({ link }) => {
  return (
    <Link to={link} className={showMore}>
      <p>Show More</p>
      <img loading="lazy" src="/icons/rightArrow.png" alt="arrow" />
    </Link>
  );
};

ShowMore.propTypes = {
  link: Proptypes.string.isRequired,
};

export default ShowMore;
