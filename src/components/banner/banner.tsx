import Search from "../search/search";

export default function Banner() {
  return (
    <div className="banner">
      <p className="banner__greeting">WELCOME TO CRYPTOBIT</p>
      <p className="banner__text">Browse the Best Digital Products!</p>
      <Search />
    </div>
  )
};
