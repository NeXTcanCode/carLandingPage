import React from "react";
import styles from "./Background.module.css";
import video1 from "../../assets/video1.mp4";
import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";

const Background = ({ playStatus, heroCount }) => {
  if (playStatus) {
    return (
      <video
        className={`${styles.background} ${styles.fadeIn}`}
        autoPlay
        muted
        loop
      >
        <source src={video1} type="video/mp4" />
      </video>
    );
  } else if (heroCount === 0) {
    return (
      <img
        src={image1}
        className={`${styles.background} ${styles.fadeIn}`}
        alt="image1"
      />
    );
  } else if (heroCount === 1) {
    return (
      <img
        src={image2}
        className={`${styles.background} ${styles.fadeIn}`}
        alt="image2"
      />
    );
  } else if (heroCount === 2) {
    return (
      <img
        src={image3}
        className={`${styles.background} ${styles.fadeIn}`}
        alt="image2"
      />
    );
  }
};

export default Background;
