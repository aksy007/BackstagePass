import { memo } from "react";
import styles from "./PostContent.module.css";

const PostContent = ({ content }) => {
  return <div className={styles.summary}>{content}</div>;
};

export default memo(PostContent);
