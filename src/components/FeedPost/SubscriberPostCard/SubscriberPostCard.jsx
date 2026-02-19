import { memo } from "react";
import clsx from "clsx";
import ConfettiHeader from "../../Confetti/ConfettiHeader";
import PinnedHeader from "../PinnedHeader/PinnedHeader";
import PostHeader from "../PostHeader/PostHeader";
import PostContent from "../PostContent/PostContent";
import PostMedia from "../PostMedia/PostMedia";
import PostFooter from "../PostFooter/PostFooter";
import styles from "./SubscriberPostCard.module.css";
import { DEFAULT_ENGAGEMENT } from "../../../constants/defaults";

const SubscriberPostCard = ({
  post,
  showConfetti = true,
  showPinned = false,
  isNested = false,
  engagement = DEFAULT_ENGAGEMENT,
}) => {
  return (
    <article
      className={clsx(styles.subscriberPostCard, {
        [styles.nested]: isNested,
      })}
    >
      {showConfetti && <ConfettiHeader text="Your Submission" />}
      <div
        className={clsx(styles.cardContent, {
          [styles.noConfetti]: !showConfetti,
        })}
      >
        {showPinned && <PinnedHeader />}
        <PostHeader user={post.user} timestamp={post.timestamp} />
        <PostContent content={post.content} />
        <PostMedia media={post.media} />
        <PostFooter
          emojis={engagement.emojis}
          likes={engagement.likes}
          comments={engagement.comments}
        />
      </div>
    </article>
  );
};

export default memo(SubscriberPostCard);
