import express from "express";
import router from "./router";
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors());
app.use("/api/universities/", router);

const port = 3333;

app.listen(port, () => {
  try {
    console.log(`Server is running on port ${port}!`)
  } catch (error) {
    console.error(error)
  }
})

