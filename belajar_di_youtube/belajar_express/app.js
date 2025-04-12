const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
const categoriesRouter = require("./routes/categories");
const morgan = require("morgan");
const AuthRouter = require("./routes/AuthRouter");
const cookieParse = require("cookie-parser"); // memanggil coockie parser
const { errorHandler, notFound } = require("./middleware/errorMiddleware");

dotenv.config();

// middleware
app.use(express.json());
app.use(cookieParse());
app.use(morgan("dev"));
app.use(cors());

// routing
app.use("/api/v1/categories", categoriesRouter);
app.use("/api/v1/auth", AuthRouter);

// error handling
app.use(notFound);
app.use(errorHandler);

// listen web
const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
