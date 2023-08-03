module.exports = {
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-image",
    "gatsby-image",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    "gatsby-transformer-remark",
    {
      resolve: "gatsby-source-contentful",
      options: {
        spaceId: "282whmdgkryj",
        accessToken: "53K79j9fCBI65Eca4oFktNpW4wiTJgLuS310wI2ee7A",
      },
    },
  ],
};
