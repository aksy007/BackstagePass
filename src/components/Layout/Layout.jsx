import TopBar from "./TopBar";
import MainHeader from "./MainHeader";
import styles from "./Layout.module.css";

const Layout = ({
  children,
  user,
  challengeInfo,
  onBackClick,
  onInfoClick,
}) => {
  return (
    <div className={styles.layout}>
      <div className={styles.headerSection}>
        <TopBar user={user} />
        <MainHeader
          challengeInfo={challengeInfo}
          onBackClick={onBackClick}
          onInfoClick={onInfoClick}
        />
      </div>
      <div className={styles.contentWrapper}>{children}</div>
    </div>
  );
};

export default Layout;
