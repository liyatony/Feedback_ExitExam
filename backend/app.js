require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const feedbackRoutes = require("./routes/FeedbackRoutes");

const app = express();

app.use(cors({
  origin: "*"  
}));
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

app.use("/api/feedback", feedbackRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("Server running on port " + PORT));
