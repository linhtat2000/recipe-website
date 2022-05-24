import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";

import "./RecipePage.scss";

const RecipePage = () => {
  return (
    <>
      <Navbar />
      <Header />
      <div className="recipePage">
        <div className="left">
          <h1>Recipe</h1>
        </div>
        <div className="right">
          <div className="top">
            <div className="search">search bar</div>
            <div className="sort">sort button</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RecipePage;
