require("dotenv").config();
const port = process.env.PORT || 5000;
const express = require("express");
const app = express();
const usersRoutes = require("./routes/users"); // memanggil folder routes/users
const middlewareLogRequest = require("./middleware/logs");

app.use(middlewareLogRequest);
app.use(express.json());

app.use("/users", usersRoutes); // memanggil route

app.listen(port, () => {
  console.log(`server berhasil di running di port http://localhost:${port}`);
});
