const doppler = require("../../../doppler-secret.js");

(async () => {
  const secrets = await doppler.getSecrets();
  module.exports = {
    upload: {
      config: {
        provider:
          "@strapi-community/strapi-provider-upload-google-cloud-storage",
        providerOptions: {
          bucketName: "assets.crackingsnacks.com",
          publicFiles: true,
          uniform: true,
          baseUrl: "https://assets.crackingsnacks.com",
          basePath: "",
          serviceAccount: {
            type: secrets.GCP_TYPE,
            project_id: secrets.GCP_PROJECT_ID,
            private_key_id: secrets.PRIVATE_KEY_ID,
            private_key: secrets.PRIVATE_GCP,
            client_email: secrets.GCP_CLIENT_EMAIL,
            client_id: secrets.GCP_CLIENT_ID,
            auth_uri: secrets.GCP_AUTH_URI,
            token_uri: secrets.GCP_TOKEN_URI,
            auth_provider_x509_cert_url:
              secrets.GCP_AUTH_PROVIDER_X509_CERT_URL,
            client_x509_cert_url: secrets.GCP_CLIENT_X509_CERT_URL,
          },
        },
      },
    },
    graphql: {
      config: {
        endpoint: "/graphql",
        shadowCRUD: true,
        playgroundAlways: false,
        depthLimit: 7,
        amountLimit: 100,
        apolloServer: {
          tracing: false,
        },
      },
    },
  };
})();
