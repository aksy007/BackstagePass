import { useState } from "react";
import styles from "./Avatar.module.css";
import { DEFAULT_AVATAR_PLACEHOLDER } from "../../constants/defaults";

const Avatar = ({ src, alt, size = "md", className = "", ...props }) => {
  const [imgSrc, setImgSrc] = useState(src);
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    if (!hasError) {
      setHasError(true);
      setImgSrc(DEFAULT_AVATAR_PLACEHOLDER);
    }
  };

  // Use src prop directly, fallback to imgSrc state if error occurred
  const displaySrc = hasError ? imgSrc : src || imgSrc;

  return (
    <div
      className={`${styles.avatar} ${styles[size]} ${className}`}
      aria-label={alt}
      {...props}
    >
      <img src={displaySrc} alt={alt} loading="lazy" onError={handleError} />
    </div>
  );
};

export default Avatar;
