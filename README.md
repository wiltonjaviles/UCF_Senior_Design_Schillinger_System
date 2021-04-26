
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
        <li><a href="#deploying-changes-to-the-website">Deploying Changes to the Website</a></li>
        <li><a href="#nginx-web-server">Nginx Web Server</a></li>
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

* [React](https://reactjs.org/)
* [React-Bootstrap](https://react-bootstrap.github.io/)
* [React-Router-DOM](https://reactrouter.com/web/guides/quick-start)


<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple example steps.

### Prerequisites

It is recommended you use Visual Studio Code as a team to streamline the work and have access to a built-in terminal.

Visual Studio Code supports:

1. Live, collaborative, environments via Live Share that will allow your team to work together in real-time.

2. Version Control (git) built-in to handles diffs, staging files, commits, etc. 

3. An integrated terminal.

* [Visual Studio Code](https://code.visualstudio.com/)
* [VSCode Live Share](https://code.visualstudio.com/learn/collaboration/live-share)
* [VSCode Terminal](https://code.visualstudio.com/docs/editor/integrated-terminal)
* [VSCode Version Control - Git](https://code.visualstudio.com/docs/editor/versioncontrol)

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

### How to Access Digital Ocean & Setup SSH

Please refer to Section 6 in the the Team 1 Final Design Document. This section details how to setup access to the Digital Ocean Droplet both via browser and SSH, Droplet Functionality, and the file structure of the API.

### Running Local Development 

Use these commands in the root folder: "UCF_Senior_Design_Schillinger_System"

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
  
### Deploying Changes to the Website

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

### Nginx Web Server
The webserver is configured to always redirect to https. E.g., www.learnschillinger.com -> https://learnschillinger.com
1. Location of Nginx Configuration (filename: learnschillinger.com)
  ```
  /etc/nginx/sites-available
  ```
2. Location of Certificate
  ```
  /etc/letsencrypt/live/learnschillinger.com
  ```
3. Start Web Service
  ```sh
  sudo service nginx start
  ```
4. Stop Web Services
  ```sh
  sudo service nginx stop
  ```
5. Reload Web Services (safe way to reload nginx- tests new config file changes and keeps the site live if an error occurs)
  ```sh
  sudo service nginx reload
  ```
6. Restart Web Services (last case resort)
  ```sh
  sudo service nginx restart
  ```
7. Test Config Files and Validate Accuracy
  ```sh
  sudo nginx -t
  ```
8. Dislay Tail of Error Log
  ```sh
  sudo tail -f
  ```
9. Status of Web Services
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
Branch `<src>` is the branch with the code you want to merge (usually master or your branch when you're ready to merge your changes into master).
Branch `<dest>` is the branch where you want the code to be merged with (your branch or master when you're ready to merge your changes into master)

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

Michael Duke - luckystarnova@gmail.com.

Kathryn Wyrick - kathryn.m.wyrick@gmail.com

<!-- ACKNOWLEDGEMENTS -->
## Acknowledgements
* [Img Shields](https://shields.io)
* [Choose an Open Source License](https://choosealicense.com)
* [Nodemon](https://nodemon.io/)
* [Dotenv](https://www.npmjs.com/package/dotenv)
* [anime.js](https://animejs.com/)
* [JSXGraph](https://jsxgraph.uni-bayreuth.de/wp/index.html)
* [SpeechSynthesis API](https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis)
* [abcjs] (https://www.abcjs.net/)
* [abc] (http://abcnotation.com/wiki/abc:standard:v2.1)




<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[product-screenshot]: images/screenshot.png
