import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import fileUpload from 'express-fileupload';
import dotenv from "dotenv";
dotenv.config();

const app = express();

//to link router files on app.js
import userRouter from './routes/user.router.js';
import blogRouter from './routes/blog.router.js';
import commentRouter from './routes/comment.router.js';
import connectDB from "./models/connection.js";
await connectDB();
//to load to cors function resolve cors problem
app.use(
  cors({
    origin: "*",
  })
);

//to binary resource 
app.use(fileUpload());

//to load the configurations of body parse
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({"extended":true}));


//aplication level middilewre check base url
app.use("/user",userRouter);
app.use("/addblog",blogRouter);
app.use("/blog",blogRouter);
app.use('/api/comments', commentRouter);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});