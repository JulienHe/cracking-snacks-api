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
          private_key_id: "1d9538a89bdd063691ae90998abc96f21a8ad57a",
          private_key:
            "-----BEGIN PRIVATE KEY-----\nMIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQCaayx+d04ekFqC\nPE9jW6HDgJvDc2jk09WNyokLWzPlQq4HeEIUZ9VgjYKFYarXRRZ93iw2y3v2RbGj\nD0hJ6Xc3WvDhyvL8SC4VrtvXHaJxJPvTBwhatUxwTC2xMOw66NwwCfI5m1IrndJG\nuQiyR5cJ7pmYgk0wOAKKtn1uJNUn14048hAQBvVgeUcatYHNV+gUST6+3KUxwmvB\nAsSouzcDkw4iQXJWvWh4Scc7Efyjdlpszeh8slR1AxI2vDCnroPpcEPfjjZpBpR1\nylzxU/OeGE8EH83/lczJJkpr2AdfMjSkLqKLohmFCHB3DvxRhDCQcYgjRTRkw3nl\nNNmjFx8/AgMBAAECggEAJ2ds2bKxDQySBATGz1hdHYnOdaAYJrhFmOKTeQHjar/K\nr95IonNimDpUEZw8H6WiGSleB/eB4PSk4TKvpCi+wrHioQOMYMM8e0z9DVYjExM4\nbX+wapEz+b3+tOYCif/M3DdVh8yyOa4Sr/hclz28dYzcxfWOI91PDL2HoVklyX4K\nlQh2mwSvkT5Wn0ZnqepIYnypPjn69re2qOclHgWI3ALvA7keol6v7VfhjU9KYjJz\n/UCInQtnggAGMkQDK9qVxsBJPo9eCcI9dyEodze9eKoQMpBJvLPolE94PF0y2Dzh\nZLbEtGfxDTtfrVh7dsxi7oRWrkC8ltNqHYYnc/JLsQKBgQDQn3HWDcnu//y3rgxf\n+AMrsnNFrnxQE6mNtq8kE9CXgYkWOVQMpYScV7uZw+yNQrEP1NuEu84ADL61jTsc\nK0zFc9J4ivgm2rHsomBGXhMt2UFtZqVUZTNDJnMGF0MB1wfDA8xAosMl4fE5eGHj\npwcDjzeSt76Z/u1IKGE/HugP7wKBgQC9fH/jQIdtWoKjtpTlbIEGPu7vuGQr/Xk3\nba9X+Wjt96blWrsquBkJa0x0hXQq88wELK1UoNBrzoXMv8IxVeD3EfgkFl+h45NY\nYV6RTrGiUUe/cjn4kuHBpq32ST9o15weGRlhfGupYklHxsb8GOoAyij8qMIdVvr8\ny+iFpIKVsQKBgQDAGGCgYbfzmsBffSKl5188CCe+HMkYjtJLy8/+30PtjXfl/8mV\nj37I2rvB/Ta+Z49T7YJn+OnY/+NGlpG8AV7CXUCKgCO42xyDsIwHny33xJlLG/3V\n9Q07opa9IAQyGIZsGf4j8frQ0fflHCS+kxiRPXlFXm1hrOtdytioX1P8/wKBgQCO\npzs0oDEUv65YiC2Cp3RfemOx77TidVqbwyTd63P2q5pnUy5Tk/OtZq1Rj+MMLyzp\n+6SmcMdYUkvjAH63W7sY5ttUd8+ZdlZIlE14wbDzzZNhayJ/pDz36H9RSoXFbYUo\nF6dHAD+hbtBSjDDkO/F3lLrUtEwngINGbFDqxBZXkQKBgQC4v6GvYgF7Fu2d+wlt\nOFTv+jnp8ieWzZ7jXHHac7CGOsOpTneOHidLJa2HCR6JBJgctl7/GV19XURHoBsD\nm+hwfWCjG0F34G9Wr+fKRz8k0tc3cWSvFue/J2EI6vpWRn3pJIrREDyq1M+Qn5hY\nDJYub1bRBplRbnEGu0fE7TptOA==\n-----END PRIVATE KEY-----\n",
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
