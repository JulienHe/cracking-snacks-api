require("dotenv").config();
module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: process.env.PGHOST,
      database: process.env.PGDATABASE,
      user: process.env.PGUSER,
      password: process.env.PGPASSWORD,
    },
  },
});
