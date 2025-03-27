const express = require("express");
 const dotenv = require("dotenv");
 const cors = require("cors");
 const bodyParser = require("body-parser");
 const connectDB = require("./config/db");
 const authRoutes = require("./routes/auth.routes");
 const userRoutes = require("./routes/user.routes");
 
 dotenv.config();
 connectDB();
 
 const app = express();
 
 app.use(cors());
 app.use(bodyParser.json());
 
 app.use("/auth", authRoutes);
 app.use("/users", userRoutes);
 
 const PORT = process.env.PORT || 5000;
 app.listen(PORT, () => console.log(`Server uding on port ${PORT}`));