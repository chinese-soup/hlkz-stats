import ContentLoader from "react-content-loader";

const FeedLoader = (props) => (
  <ContentLoader
    speed={2}
    width={400}
    height={250}
    viewBox="0 0 400 250"
    backgroundColor="#c0bfbc"
    foregroundColor="#f6f5f4"
    {...props}
  >
    <rect x="5" y="25" rx="3" ry="3" width="52" height="6" />
    <rect x="25" y="5" rx="3" ry="3" width="300" height="6" />
    <circle cx="10" cy="7" r="7" />
    <rect x="5" y="75" rx="3" ry="3" width="52" height="6" />
    <rect x="25" y="55" rx="3" ry="3" width="300" height="6" />
    <rect x="5" y="125" rx="3" ry="3" width="52" height="6" />
    <rect x="25" y="105" rx="3" ry="3" width="300" height="6" />
    <circle cx="10" cy="107" r="7" />
    <rect x="5" y="175" rx="3" ry="3" width="52" height="6" />
    <circle cx="10" cy="157" r="7" />
    <rect x="5" y="225" rx="3" ry="3" width="52" height="6" />
    <rect x="25" y="205" rx="3" ry="3" width="300" height="6" />
    <circle cx="10" cy="207" r="7" />
    <circle cx="10" cy="57" r="7" />
    <rect x="25" y="155" rx="3" ry="3" width="300" height="6" />
  </ContentLoader>
);

export default FeedLoader;
