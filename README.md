# react-fullstack-boilerplate

a MERN stack boilerplate with both frontend (REACT), backend (Express, Node) with REST API, and Database (MongoDB) including user authentication and private/admin routes meant to give You a head-start for your next project.

#### Get Started

Download/Clone this Github repository.\
In the project root folder, create a `.env` file and create the following Environment Variables:

- NODE_ENV=development
- PORT=5000
- MONGO_URI= (your mongoDB URI)
- JWT_SECRET= (your JWT secret; can be anything)

From your terminal run the following commands consecutively:

1. `npm install`
2. `cd frontend/`
3. `npm install`
4. `cd ..`
5. `npm run dev`
6. Now You can go to localhost:3000

#### Available Scripts

Once You're done setting up the above steps, You will have the following scripts available for use.\
**NOTE that all these scripts should be run from the root folder of the project.**

##### `npm run dev`

This is the command that You will run most of the times.\
Runs both the server and the client in the development mode and watches it.\
Open http://localhost:3000 to view it in the browser.\
The page will reload when You save any changes.\
You will also see all lint errors in the console.

##### `npm run server`

Runs the server in the development mode and watches it.\
Open http://localhost:5000 to view it in the browser.\
The page will reload if You make edits.\
You will also see any lint errors in the console.

##### `npm run client`

Runs the client in the development mode and watches it.\
Open http://localhost:3000 to view it in the browser.\
The page will reload if You make edits.\
You will also see any lint errors in the console.

##### `npm run data-import`

Will destroy then add some sample users data of: Admin, John, & Jane After You connect to your DB.

##### `npm run data-destroy`

Will destroy the sample users data.
