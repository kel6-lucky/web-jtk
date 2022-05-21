# CMS Website

Content Management System used by Administrator, Contributor, and Editor in managing data on the website portal

<!-- GETTING STARTED -->
## Getting Started

This will give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### 📢 Prerequisites

Make sure you have installed all of the following prerequisites on your development machine:
* Git - [Download & Install Git](https://git-scm.com/downloads). OSX and Linux machines typically have this already installed.
* Node.js - [Download & Install Node.js](https://nodejs.org/en/download/) and the yarn package manager, it is recommended to install yarn globally.
	```bash
	$ npm install --global yarn
	```

### 🎉 Installation

 - Create an `.env` file with the following contents:
	> DATABASE_URI=mongodb+srv://admin:Admin2022@webjtk.jqla1.mongodb.net/webjtk?retryWrites=true&w=majority

 - Project setup
	```bash
	$ yarn install
	```	
 - Compiles and minifies for production
	```bash
	$ yarn build
	```	
 -  Compiles and hot-reloads for development 
	```bash
	$ yarn develop
	```	

### ✨ Acknowledgments
Helpful resources:
 - [Strapi Documentation](https://strapi.io/resource-center)
 - [Strapi and Mongo](https://www.mongodb.com/developer/how-to/strapi-headless-cms-with-atlas/)
