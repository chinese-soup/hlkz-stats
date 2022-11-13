import ContentLoader from "react-content-loader";

const ProfileImage = (props) => (
  <ContentLoader
    speed={2}
    width={184}
    height={184}
    viewBox="0 0 184 184"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="92" cy="92" r="92" />
  </ContentLoader>
);

export default ProfileImage;
