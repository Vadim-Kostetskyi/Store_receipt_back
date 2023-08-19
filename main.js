import { openConnection, closeConnection } from "./db";

const bootstrap = async () => {
  try {
    await openConnection();

    console.log("Server connect");

    await closeConnection();
  } catch (error) {
    console.log(error);
  }
};

bootstrap();
