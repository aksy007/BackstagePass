import Layout from "./components/Layout/Layout";
import Sidebar from "./components/Sidebar/Sidebar";
import MainContent from "./components/MainContent/MainContent";
import {
  user,
  challengeInfo,
  subscriberPost,
  feedPosts,
} from "./data/mockData";

function App() {
  const handleBackClick = () => {
    // Handle back navigation
    console.log("Back clicked");
  };

  const handleInfoClick = () => {
    // Handle info icon click
    console.log("Info clicked");
  };

  return (
    <Layout
      user={user}
      challengeInfo={challengeInfo}
      onBackClick={handleBackClick}
      onInfoClick={handleInfoClick}
    >
      <Sidebar challengeDays={9} streak={2} />
      <MainContent subscriberPost={subscriberPost} feedPosts={feedPosts} />
    </Layout>
  );
}

export default App;
