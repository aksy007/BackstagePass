import { memo } from "react";
import SubscriberPostCard from "../FeedPost/SubscriberPostCard";
import FeedPostCard from "../FeedPost/FeedPostCard";
import styles from "./MainContent.module.css";
import { DEFAULT_PARTICIPANTS } from "../../constants/defaults";

const MainContent = ({
  subscriberPost,
  feedPosts,
  participants = DEFAULT_PARTICIPANTS,
}) => {
  return (
    <main className={styles.mainContent}>
      {subscriberPost && (
        <SubscriberPostCard post={subscriberPost} showConfetti={true} />
      )}
      <FeedPostCard posts={feedPosts} participants={participants} />
    </main>
  );
};

export default memo(MainContent);
