import Intro from "../components/intro";
import Runfeed from "../components/runfeed";
import PlayItNow from "../components/playitnow";

function Home() {
  return (
    <div className="home">
      <Intro />
      <Runfeed />
      <PlayItNow />
    </div>
  );
}

export default Home;
