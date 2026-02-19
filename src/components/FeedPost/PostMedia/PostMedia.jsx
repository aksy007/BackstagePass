import { memo, useState } from "react";
import styles from "./PostMedia.module.css";

const PostMedia = ({ media }) => {
  const [imgSrc, setImgSrc] = useState(media?.url || media?.thumbnail);
  const [hasError, setHasError] = useState(false);

  if (!media) return null;

  const handleError = () => {
    if (!hasError && media.thumbnail && imgSrc !== media.thumbnail) {
      setHasError(true);
      setImgSrc(media.thumbnail);
    }
  };

  return (
    <div className={styles.mediaSection}>
      <img src={imgSrc} alt="Post media" loading="lazy" onError={handleError} />
    </div>
  );
};

export default memo(PostMedia);
