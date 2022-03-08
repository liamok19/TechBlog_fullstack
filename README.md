# TechBlog_fullstack

[![License: MIT](https://img.shields.io/apm/l/vim-mode?color=orange&style=for-the-badge.svg)](https://opensource.org/licenses/MIT)

## Table of contents
- [Description](#description)
- [Strategy](#strategy)
- [Usage](#usage)
- [License](#license)
- [Questions](#questions)

## Description
# What is the app for?
Build a CMS-style blog site similar to a Wordpress site, where developers can publish their blog posts and comment on other developers’ posts as well. The site built from scratch and deployed to Heroku. The app will follow the MVC paradigm in its architectural structure, using Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication.

```md
AS A developer who writes about tech
I WANT a CMS-style blog site
SO THAT I can publish articles, blog posts, and my thoughts and opinions
```

## Strategy 
| Steps | Instructions | 
| ------------- |:-------------:| 
| Installation Requirements: npm i inquirer, npm run seed, dotenv and MySQL | INP |
| Applying relevant files to gitignore | INP |
| WHEN I visit the site for the first time. THEN I am presented with the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage and the dashboard; and the option to log in | INP | 
| WHEN I click on the homepage option. THEN I am taken to the homepage | INP | 
| WHEN I click on any other links in the navigation. THEN I am prompted to either sign up or sign in | INP |
| WHEN I choose to sign up. THEN I am prompted to create a username and password | INP |
| WHEN I click on the sign-up button. THEN my user credentials are saved and I am logged into the site | INP |
| WHEN I revisit the site at a later time and choose to sign in. THEN I am prompted to enter my username and password | INP |
| WHEN I am signed in to the site. THEN I see navigation links for the homepage, the dashboard, and the option to log out | INP |
| WHEN I click on the homepage option in the navigation. THEN I am taken to the homepage and presented with existing blog posts that include the post title and the date created | INP |
| WHEN I click on an existing blog post. THEN I am presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment | INP |
| WHEN I enter a comment and click on the submit button while signed in. THEN the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created| INP |
| WHEN I click on the dashboard option in the navigation. THEN I am taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post | INP |
| WHEN I click on the button to add a new blog post. THEN I am prompted to enter both a title and contents for my blog post | INP |
| WHEN I click on the button to create a new blog post. THEN the title and contents of my post are saved and I am taken back to an updated dashboard with my new blog post | INP |
| WHEN I click on one of my existing posts in the dashboard. THEN I am able to delete or update my post and taken back to an updated dashboard | INP |
| WHEN I click on the logout option in the navigation. THEN I am signed out of the site | INP |
| WHEN I am idle on the site for more than a set time. THEN I am able to view comments but I am prompted to log in again before I can add, update, or delete comments | INP |


## Final Look
# Usage
<img src='./assets/liamO_ecommerce_BACKEND.gif' alt="Ecommerce_backend" >

## License
This project is available under the MIT license. Visit [License: MIT](https://opensource.org/licenses/MIT) for full license text

## Contribute
To contribute to Team Profile Generator, clone this repo locally and commit your code on a separate branch.


## Contact
Git profile: https://github.com/liamok19
Email: liamokane19@gmail.com