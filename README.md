
<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->



<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://www.learnschillinger.com">
    <img src="schillinger-system/public/logo512.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">UCF Senior Design: Learn Schillinger</h3>

  <p align="center">
    A fun and interactive way to learn the Schillinger System!
    <br />
    <a href=""><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://www.learnschillinger.com">View Site</a>
    ·
    <a href="https://github.com/wiltonjaviles/UCF_Senior_Design_Schillinger_System/issues">Report Bug</a>
    ·
    <a href="https://github.com/wiltonjaviles/UCF_Senior_Design_Schillinger_System/issues">Request Feature</a>
  </p>
</p>



<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li>
      <a href="#usage">Usage</a>
      <ul>
        <li><a href="#running-local-development">Running Local Development</a></li>
        <li><a href="#deploying-changes-to-the-web-server">Deploying Changes to the Web server</a></li>
        <li><a href="#nginx-web-service-commands">Nginx Web Service Commands</a></li>
      </ul>
    </li>
    <li>
      <a href="#contributing">Contributing</a>
      <ul>
        <li><a href="#how-to-merge-two-branches">How to Merge Two Branches</a></li>
        <li><a href="#more-git-resources">More Git Resources</a></li>
      </ul>
    </li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgements">Acknowledgements</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

This project, once completed, will provide a comprehensive Schillinger System learning tool for musicians and software developers that can be used to create computer-assisted musical composition software. Since Schillinger never finished refining his ideas for the System it fell into obscurity after his death. This project aims bring his system back to the forefront of musical composition. It could also provide substantial guidance for composers and software developers to implement Schillinger’s ideas, which has never been done before. 

In addition to the applications in composition software, this project will provide easy access to Schillinger’s system for people who simply want to learn music theory. Since it is more math-based than the traditional system, Schillinger’s System may be easier for some people to understand.

There is also a small chance that because our project revives interest in Schillinger’s System of Musical Composition, in time it could replace the existing system of composing music.  A clear understanding of his ideas could result in a shift in how music is written to his system.


### Built With

This section should list any major frameworks that you built your project using. Leave any add-ons/plugins for the acknowledgements section. Here are a few examples.
* [React](https://reactjs.org/)
* [React-Bootstrap](https://react-bootstrap.github.io/)


<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple example steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/wiltonjaviles/UCF_Senior_Design_Schillinger_System.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Contact the previous <a href="#contact">Team</a> or Leinecker about .env files.
4. Contact the previous <a href="#contact">Team</a> or Leinecker about DigitalOcean & MongoDB Atlas Access.

<!-- USAGE EXAMPLES -->
## Usage

### Running Local Development

1. Launch the Client && the Server - Front-End on port 3000 | Back-End on port 5000.
  ```sh
  npm run dev
  ```
2. Launch the Client - Front-End on port 3000.
  ```sh
  npm run client
  ```
3. Launch the Server - Back-End on port 5000.
  ```sh
  npm run server
  ```
4. Kill all Processes
  ```sh
  ctrl + c
  ```
  
### Deploying Changes to the Web Server

1. Change to the production folder
  ```sh
  cd /var/www/learnschillinger/UCF_Senior_Design_Schillinger_System
  ```
2. Pull most recent changes.
  ```sh
  git pull
  ```
3. Change to the front-end folder.
  ```sh
  cd schillinger-system
  ```
4. Build the most recent changes.
  ```sh
  npm run build
  ```

### Nginx Web Service Commands
1. Start Web Service
  ```sh
  sudo service nginx start
  ```
2. Stop Web Services
  ```sh
  sudo service nginx stop
  ```
3. Reload Web Services (safe way to reload nginx- tests new config file changes and keeps the site live if an error occurs)
  ```sh
  sudo service nginx reload
  ```
4. Restart Web Services (last case resort)
  ```sh
  sudo service nginx restart
  ```
5. Test Config Files and Validate Accuracy
  ```sh
  sudo nginx -t
  ```
6. Dislay Tail of Error Log
  ```sh
  sudo tail -f
  ```
7. Status of Web Services
  ```sh
  sudo systemctl status nginx
  ```

<!-- CONTRIBUTING -->
## Contributing

1. Clone the project.
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request / Merge to Master

<!-- HOW TO MERGE TWO BRANCHES -->
### How to Merge Two Branches
Branch **<src>** is the branch with the code you want to merge (usually master or your branch when you're ready to merge your changes into master)
Branch **<dest>** is the branch where you want the code to be merged with (your branch or master when you're ready to merge your changes into master)

1. Pull the latest changes in the src branch
````
git checkout <src>
git pull
````

2. Merge those changes into your dest branch
````
git checkout <dest>
git merge <src>
git push
````

### More Git Resources
<a href="https://training.github.com/downloads/github-git-cheat-sheet.pdf">Git Cheat Sheet</a>

<a href="http://git-school.github.io/visualizing-git/">Visualizing Git</a>

<!-- LICENSE -->
## License


<!-- CONTACT -->
## Contact

**Sponsor**

Dr. Leinecker - richard.leinecker@ucf.edu

**Team 1**

Michael Alaniz - [@mikey_alaniz](https://twitter.com/mikey_alaniz) - michael.yeah@pm.me
Wilton Aviles - wiltonjaviles@gmail.com
Michael Duke - 
Kathryn Wyrick - 

<!-- ACKNOWLEDGEMENTS -->
## Acknowledgements
* [Img Shields](https://shields.io)
* [Choose an Open Source License](https://choosealicense.com)
* [Nodemon](https://nodemon.io/)
* [Dotenv](https://www.npmjs.com/package/dotenv)
* [anime.js](https://animejs.com/)
* [JSXGraph](https://jsxgraph.uni-bayreuth.de/wp/index.html)





<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[product-screenshot]: images/screenshot.png
