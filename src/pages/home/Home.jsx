import "./style.scss";
import { HeroBanner, Trending, Popular, TopRated } from "./";
const Home = () => {
  return (
    <div className="homePage">
      <HeroBanner />
      <Trending />
      <Popular />
      <TopRated />
    </div>
  );
};
export default Home;
