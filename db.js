const env = require("./env.config");
const Sequelize = require("sequelize");

const db = new Sequelize("products", "root", env.DB_PASSWORD, {
  host: env.DB_HOSTNAME,
  dialect: env.DB_TYPE,
  // storage: "C:/ProgramData/MySQL/MySQL Server 8.0/Data/",
  define: {
    timestamps: false,
  },
});

module.exports = {
  db,
  openConnection: () => {
    return db.authenticate();
  },
  closeConnection: () => {
    return db.close();
  },
};
