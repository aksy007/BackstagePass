import { memo } from "react";
import { FiMessageCircle } from "react-icons/fi";
import EmojiWithNumber from "../Common/EmojiWithNumber";
import styles from "./PostFooter.module.css";
import { DEFAULT_ENGAGEMENT } from "../../constants/defaults";

const PostFooter = ({
  emojis = DEFAULT_ENGAGEMENT.emojis,
  likes = DEFAULT_ENGAGEMENT.likes,
  comments = DEFAULT_ENGAGEMENT.comments,
  showEmojiIcon = true,
}) => {
  return (
    <div className={styles.footer}>
      <div className={styles.footerLeft}>
        <EmojiWithNumber emojis={emojis} number={likes} />
        {showEmojiIcon && <span className={styles.emojiIcon}>😊</span>}
        <FiMessageCircle className={styles.commentIcon} />
      </div>
      <div className={styles.footerRight}>
        <span className={styles.commentsCount}>{comments} Comments</span>
      </div>
    </div>
  );
};

export default memo(PostFooter);
