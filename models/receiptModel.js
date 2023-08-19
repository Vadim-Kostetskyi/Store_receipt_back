const { Sequelize } = require("sequelize");
const sequelize = new Sequelize("sqlite::memory:");

const Receipt = sequelize.define("receipt", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  number: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  closeDate: {
    type: Sequelize.DATE,
  },
  total: {
    type: Sequelize.FLOAT,
    allowNull: false,
  },
});

module.exports = Receipt;

// Чек
// id - ідентифікатор чеку
// number - номер чеку (послідовний)
// date - дата закриття чеку
// total - загальна сума чеку
