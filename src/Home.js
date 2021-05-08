import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import AppsIcon from "@material-ui/icons/Apps";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { Avatar } from "@material-ui/core";
import Search from "./Search";

function Home() {
  return (
    <div className="home">
      <div className="home__header">
        <div className="home__headerLeft">
          <Link to="/about">
            <b>About</b>
          </Link>
          <Link to="/store">
            <b>Store</b>
          </Link>
          {/* Link */}
          {/* Link */}
        </div>
        <div className="home__headerRight">
          <Link to="/gmail">
            <b>E-mail</b>
          </Link>
          <Link to="/images">
            <b>Images</b>
          </Link>
          <AppsIcon />
          <Avatar />
        </div>
      </div>

      <div className="home__body">
        <img src="https://www.thefpsreview.com/wp-content/uploads/2019/07/palemoon.png.webp" />
      </div>
      <div className="home__inputContainer">
        <Search />
      </div>
    </div>
  );
}

export default Home;
