module.exports = {
  upload: {
    config: {
      provider: "@strapi-community/strapi-provider-upload-google-cloud-storage",
      providerOptions: {
        bucketName: "cracking-snacks",
        publicFiles: true,
        uniform: false,
        baseUrl: "https://assets.crackingsnacks.com",
      },
    },
  },
};
