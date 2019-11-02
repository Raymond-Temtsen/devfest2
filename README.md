# devfest2
# Getting Started With Node.js, Building your first node application.
 ## What is Node.js ?
 ![node](https://res.cloudinary.com/raymondtemtsen/image/upload/v1572681399/1200px-Node.js_logo.svg_njbdvj.png)
 *It is a JavaScript runtime enevironment for server side. Node.js is built on Chromes's V8 JavaScript engine.*
 ## Creating Our First Node Application
 ### Requirements
 1. Knowledge of JavaScript
 2. Install Node (+NPM)
3. A text Editor
4. A Browser
# Steps
## Step 1
First we create a project folder **(firstNode)**
$ mkdir firstNode
## Step 2
Now we create the a package.json file which is the manifest file of the application. It contains key information about the application. The package.json file is the heart of the application. 

firstNode$ **npm init**

An npm shell will be come up and ask you to fill some fields such as the package name, author, git repo, version, e.t.c
Below is the package.json file for our project

`{
  "name": "firstnode",
  "version": "1.0.0",
  "description": "A Test Application",
  "main": "server.js",
  "scripts": {
    "start": "node server"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/Raymond-Temtsen/devfest2.git"
  },
  "author": "raymondTemtsen",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/Raymond-Temtsen/devfest2/issues"
  },
  "homepage": "https://github.com/Raymond-Temtsen/devfest2#readme"
}`

## Step 3
In the Package.json file above, we named the entry point of the application as **server.js**, so we will created and server.js file in the project directory.
Next, we will install express which is a node.js module.

firstNode $ npm install express --save

 ## Step 4
 Next, in the sever.js file, we will bring in express and store the **express()** method from express in a constant variable **app**

`const express = require('express');
const app = express();`

Next, we will create a variable that contains the port we want the application to listen at.

`const port = 4000 ;`

Now we create a response for a get request using the **get()** method from express.

`app.get('/',(req,res)=>{ res.send('Hello World, This Is Our Application')});`

## Step 5
In order for our application to listen and respond to this get request, we will use the **listen()** method from express.

`app.listen(port, ()=>{console.log(`server is currently listening at port ${port}`)})`

Finally, we run the server by using **node server** command in the terminal, then visit **localhost:4000** in the browser.

# Congrats, you've built and tested your first node application!
#### NOTE: if you download the project from this repo, remember to run **npm install** in order to download the modules used in the project
