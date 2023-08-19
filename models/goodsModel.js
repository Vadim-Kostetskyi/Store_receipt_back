const { Sequelize } = require("sequelize");
const sequelize = new Sequelize("sqlite::memory:");

const Goods = sequelize.define("goods", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  price: {
    type: Sequelize.FLOAT,
    allowNull: false,
  },
});

module.exports = Goods;

// Товар
// id - ідентифікатор товару
// name - найменування товару
// price - ціна
