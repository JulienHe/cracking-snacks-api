require("dotenv").config();
module.exports = {
  upload: {
    config: {
      provider: "@strapi-community/strapi-provider-upload-google-cloud-storage",
      providerOptions: {
        bucketName: "cracking-snacks",
        publicFiles: true,
        uniform: true,
        serviceAccount: {
          type: "service_account",
          project_id: "vocal-partition-333715",
          private_key_id: process.env.PRIVATE_KEY_ID,
          private_key: process.env.PRIVATE_GCP,
          client_email:
            "crackin-snacks@vocal-partition-333715.iam.gserviceaccount.com",
          client_id: "100045114607376465483",
          auth_uri: "https://accounts.google.com/o/oauth2/auth",
          token_uri: "https://oauth2.googleapis.com/token",
          auth_provider_x509_cert_url:
            "https://www.googleapis.com/oauth2/v1/certs",
          client_x509_cert_url:
            "https://www.googleapis.com/robot/v1/metadata/x509/crackin-snacks%40vocal-partition-333715.iam.gserviceaccount.com",
        },
        baseUrl: "https://assets.crackingsnacks.com",
        basePath: "",
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
