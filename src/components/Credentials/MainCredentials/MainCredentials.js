import Background from "./Background/Background";
import RecentLogins from "./RecentLogins/RecentLogins";
import Verification from "./Verification/Verification";

const MainCredentials = () => {
  return (
    <Background>
      <RecentLogins />
      <Verification />
    </Background>
  );
};

export default MainCredentials;
