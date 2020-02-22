"use strict";
const shortid = require("shortid");
// require("dotenv").config({ path: "../.env" });

module.exports = {
  create: async data => {
    let dentist = { ...data };
    dentist.externalId = shortid.generate();
    console.log({ dentist });
    try {
      let createdDentist = await strapi.query("dentist").create(dentist);
      return createdDentist;
    } catch (e) {
      console.log(e);
    }
  },

  update: async (id, data) => {
    try {
      let createdDentist = await strapi
        .query("dentist")
        .update({ user: id }, data);
      return createdDentist;
    } catch (e) {
      console.log(e);
    }
  }
};
