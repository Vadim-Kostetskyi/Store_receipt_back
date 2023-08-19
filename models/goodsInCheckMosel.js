const { Sequelize } = require("sequelize");
const sequelize = new Sequelize("sqlite::memory:");

const GoodsInCheck = sequelize.define("goodsInCheck", {
  receipt_id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
  },
  product_id: {
    type: Sequelize.INTEGER,
  },
  quantity: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  price: {
    type: Sequelize.FLOAT,
    allowNull: false,
  },
});

module.exports = GoodsInCheck;

// Товар в чеку
// receipt_id - ідентифікатор чеку
// product_id - ідентифікатор товару
// quantity - кількість товару в чеку
// price - ціна на момент продажу
