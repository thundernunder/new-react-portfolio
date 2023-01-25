import React from "react";
import Project from "./Project";
import GoatCars from "../Assets/img/goatcars2.PNG"; 
import BreakHub from "../Assets/img/breakhub2.PNG";
import Play2Day from "../Assets/img/play2day2.PNG"

const projects = [
    {
        id:1, 
        title: 'GOAT Cars', 
        languages: 'CSS, Javascript', 
        node_packages: 'express, express-handlebars, express-session, sequelize, mysql2, socket.io', 
        image: GoatCars,
        alt: "GOATcars",
        description: "A social media platform for classic car enthusiasts. Users create profiles to display images of classic cars they own, while also interacting with other users on the platform through following, liking, and commenting on user-to-user content. Auction and merchandise purchasing functionality is present as well! I was repsonsible for the full-stack execution of the merchandise section.", 
        repository: "https://github.com/Young-Chhay/GOAT-CARs", 
        live_link: "https://limitless-inlet-80360.herokuapp.com/",
    },

    {
        id:1, 
        title: 'BreakHub', 
        languages: 'CSS, Javascript', 
        node_packages: 'N/A', 
        image: BreakHub,
        alt: "BreakHub",
        description: "BreakHub is a customized virtual break room for killing time efficiently. Procrastinators unite. Whether you are a working professional, student, or want to keep on task for things around the house, BreakHub gives you the break you need and gets you back on task when the time is right. Set your custom timer to determine how long your break needs to be, and use the app to help you get back on task once break is over.", 
        repository: "https://github.com/aurorayihe/BreakHub_theThunderCats", 
        live_link: "https://aurorayihe.github.io/BreakHub_theThunderCats/",
    },

    {
        id:2, 
        title: 'Play2day', 
        languages: 'Javascript', 
        node_packages: 'sequelize, mysql2, express, dotenv', 
        image: Play2Day,
        description: "Whether it's to keep a competitve edge, stay in shape, or connect with friends, many people love playing sports recreationally, even if they can't play professionally. The problem is there are not many options focused on helping people organize pickup games in an easy way. Play2Day aims to fill this need by creating a space where users can connect with friends and members of their community by easily organizing pickup sports game. Get out there and Play2Day!", 
        repository: "https://github.com/Young-Chhay/Play2Day",
        live_link: "https://gentle-fortress-88764.herokuapp.com/", 
    }, 
];

function Portfolio() {
    return (
      <div>
        <p className="content is-medium">Portfolio</p>
        <hr />
  
        <Project projects={projects} />
      </div>
    );
  }
  
  export default Portfolio;