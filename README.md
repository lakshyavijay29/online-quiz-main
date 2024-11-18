<h1 align='center'>Project Documentation</h1>

## Project Title
**_Online-Quiz-Platform_**
## Project Overview
This is an `online platform` for hosting quizzes, tests, and assessments. The platform will provide a user-friendly interface for quiz questions, answers, and user submissions. It will also include features for quiz management, scoring, and result tracking. The implementation will involve building a front-end using HTML, CSS, and JavaScript, and using a backend framework like Express.js or Flask to handle the server-side functionality.
### Project Team
* Kavin Manoharan
* Aman Kumar
* Lakshya Vijay
### Project Technologies
* MongoDB
* Express JS
* Node JS
* ReactJS

### Project Setup
>Do the following steps:

* STEP 1: Clone or download the project.
* STEP 2: Go inside the backend folder and make a .env file.
* STEP 3: Paste the following inside the .env file:
```
MONGO URI = "mongodb+srv :// techplement:techplement@cluster0.fymoz6o.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

# for mongo_uri: Please contact me!

PORT = 5000
JWT SECRET = "techplement"
```
* STEP 4: Now run the backend part `npm install` followed by `npm start`.
* STEP 5: Now go inside the frontend folder and run `npm install` followed by `npm start`.

>You are ready to go!
### Project Resources/ Reference
* Resources
1. https://redux.js.org/api/api-reference
2. https://ant.design/components/overview
3. https://github.com/facebook/create-react-app
4. https://github.com/dcodeIO/bcrypt.js
5. https://www.npmjs.com/package/jsonwebtoken
* References
1. [Mern Essential Training 2024](https://github.com/LinkedInLearning/mern-essential-training-3806111)
2. [React Quiz Form](https://github.com/wingkwong/react-quiz-form)
3. [QuizApp by Maikelek](https://github.com/Maikelek/QuizApp)

### Project Risks
* Make sure to create the .env file carefully using the given instructions. In case the `.env` file is not built correctly, the interface will not allow the login of any user.
* This project uses MongoDB `shared` (free-tier) cloud database.
* Subject to the `bcryptjs` [security concerns](https://github.com/dcodeIO/bcrypt.js?tab=readme-ov-file#security-considerations).

>Thank you!
