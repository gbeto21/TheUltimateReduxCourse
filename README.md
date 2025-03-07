# ⚛️ The Ultimate Redux Course
Repo from the Udemy Course [The Ultimate Redux Course](https://www.udemy.com/course/the-ultimate-redux-course-state-management-library).

This course teaches you **"vanilla" Redux**, **Redux tool kit** and **React Redux** using two projects.

The <u>first project</u> is a simple web page that  doesn't show too much on the web site, but under the hood uses a javascript file that uses Redux.

The <u>second</u> project is a To Do React App that gets the todos from a small back end 

## Installing dependencies
You'll need to install the dependencies for each project, from the root foolder run the following commands:

To install the dependencies of the first project
```bash
npm i
```
To install the dependencies of the second project
```bash
cd todo-app/ && npm i
```
To install the dependencies of the backend project
```bash
cd src/backend && npm i
```

## Running the projects
### Backend
From the root project run:
```bash
cd src/backend/ && node server.js
```
Command line output:

![backend output](image.png)

This will run the backend on port **5000**.

### Fist project
From the root project run:
```bash
npm run start
```
Command line output:
![first project output](image-1.png)

This will run the first project on port **3000**.

#### 📝 Note
Depending on which section of the course you're running you may or may not need the backend running.

If you're runing this project in a commit <u>older</u> than [this commit](https://github.com/gbeto21/TheUltimateReduxCourse/commit/c2666f3d5860813d270d0f20833074227fd96371) (where the backend is introduced) you man not need the backend. Other whise, you need the backend project running.

### Second project
From the root project run:
```bash
cd todo-app/ && npm run dev
```
Command line output:

![second project output](image-2.png)

This will run the second project on port **5173**.

## Redux Dev tools extension
The 2 frontend projects work with the Redux Dev tool extension.

![Redux Dev Tools Extension](image-3.png)