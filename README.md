# FeadMeApp

### Explore foods from around the globe <br>
<p>
My idea was to build a recipe app, where you can search for recipes and save your favorites.
To make it both a little smoother and more fun to save recipes in the mobile, while I have a dynamic shopping list in the same app. And to be able to easily connect recipesto the calendar in the mobile to plan food and purchases before events / birthdays / holidays or just for oneself in everyday life.
<p>

 <img src="/FeadmeApp-screenshot.png" width="350" title="hover text">

## Table of contents

- [General info](#general-info)
- [Technologies](#technologies)
- [Setup](#setup)

## General info

<p align="left">
FeadMeApp is a degree project for my education as a Frontend Developer at the Media Institute. The project's frontend is built in React, the backend in Node.js and MySQL. The database is built in PhpMyAdmin. The Backend server is hosting on Heroku and the frontEnd is deployed at githubPages. 
<br>
 Right now I'm using the "themealdb" API to get recipe search results. But I also start collecting my own recipes and build my own API. These recipes are presented under "categories on the Home page". The database with these recipes is currently hard-coded in separate files under the Backend folder
</p>


## API
<p>
I am using the free version of https://www.themealdb.com/.... Right now I am using this API because there was a free version that has no limit of searches which fits well because this is "only" a school project. in the future if I choose to develop this project I will make it possible to use several different APIs so the search result will be greater
<p>

## Technologies

Project is created with:

- react version: "^17.0.2", 
- sass version: "^1.49.9",
- expres version: "^4.17.3",
- mysql2 version: "^2.3.3",

- WHY REACT:  React library brings fast and dynamic websites using JavaScript. React felt for me from the beginnig easy to understand, easily integrable UI components that reduce my time and provide a responsive user interface for website, web app and mobile app.
With the assistance of features such as Virtual DOMs, JSX, impressive state management, and reusable components independent of each other, React was an easy choice for me! 



## Setup

To run this project, install it locally using npm:

### backend

```
$ cd ./backend
$ npm install
$ heroku restart or  node server.js 
```

### frontend

```
$ cd ./frontend
$ npm install
$ npm run deploy  or npm start
```
