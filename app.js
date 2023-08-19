const express = require("express");

const app = express();

app.use("/api/auth", authRouter);

app.get("/");
app.patch("/");
app.post("/create");
app.post("/close");

// отримати всі товари
// створити новий чек
// додати / вилучити / змінити кількість товару в чеку (можна одним методом, а можна декількома, на вибір)
// закрити чек

module.exports = app;
