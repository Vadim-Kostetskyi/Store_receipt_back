const env = require("./env.config");

const db = new Sequelize({
  host: env.DB_HOSTNAME,
  dialect: env.DB_TYPE,
  define: {
    timestamps: false,
  },
});

export default db;

export const openConnection = () => {
  return db.authenticate();
};

export const closeConnection = () => {
  return db.close();
};
