const doppler = require("../../../doppler-secret.js");
(async () => {
  const secrets = await doppler.getSecrets();
  console.log(secrets);
  module.exports = {
    connection: {
      client: "postgres",
      connection: {
        host: secrets.PGHOST,
        database: secrets.PGDATABASE,
        user: secrets.PGUSER,
        password: secrets.PGPASSWORD,
      },
    },
  };
})();
