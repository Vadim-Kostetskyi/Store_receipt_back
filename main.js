const { openConnection } = require("./db");
const { closeConnection } = require("./db");
const Goods = require("./models/goodsModel");
const Receipt = require("./models/receiptModel");

const bootstrap = async () => {
  try {
    await openConnection();

    console.log("Server connect");

    await closeConnection();
  } catch (error) {
    console.log(123);
    console.log(error);
  }
};

const qwe = async () => {
  const jane = await Receipt.create();
  console.log(111);
  console.log(jane.toJSON());
  console.log(JSON.stringify(jane, null, 2));
};

// qwe();

bootstrap();

// Goods.sync()
//   .then((result) => console.log(result))
//   .catch((err) => console.log(err));
