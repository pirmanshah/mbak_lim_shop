const env = require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();

const router = require("./routes/index");
const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(cors());
app.use("/api", router);

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT} 🚀`);
});
