import { memo, useMemo } from "react";
import SubscriberPostCard from "./SubscriberPostCard";
import Avatar from "../Common/Avatar";
import styles from "./FeedPostCard.module.css";
import {
  DEFAULT_PARTICIPANTS,
  DEFAULT_USER_AVATARS,
} from "../../constants/defaults";

const FeedPostCard = ({
  posts = [],
  participants = DEFAULT_PARTICIPANTS,
  userAvatars = DEFAULT_USER_AVATARS,
}) => {
  // Memoize avatars to prevent recreation
  const memoizedAvatars = useMemo(() => userAvatars, [userAvatars]);

  return (
    <article className={styles.feedPostCard}>
      {/* Header Section */}
      <div className={styles.headerSection}>
        <div className={styles.headerText}>
          <span>See what other</span>
          <div className={styles.avatarGroup}>
            {memoizedAvatars.map((avatar, index) => (
              <div
                key={index}
                style={{ zIndex: memoizedAvatars.length - index }}
              >
                <Avatar src={avatar} alt={`User ${index + 1}`} size="sm" />
              </div>
            ))}
          </div>
          <span>created</span>
        </div>
        <div className={styles.participantsCount}>
          {participants}+ participants already completed
        </div>
      </div>

      {/* List of Subscriber Post Cards */}
      <div className={styles.postsList}>
        {posts.map((post, index) => (
          <SubscriberPostCard
            key={post.id}
            post={post}
            showConfetti={false}
            showPinned={index === 0}
            isNested={true}
          />
        ))}
      </div>
    </article>
  );
};

export default memo(FeedPostCard);
