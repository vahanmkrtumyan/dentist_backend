"use strict";
const shortid = require("shortid");
const jwt = require("jsonwebtoken");
const _ = require("lodash/core");
require("dotenv").config({ path: "../.env" });

module.exports = {
  signup: async data => {
    let dentist = { ...data };
    dentist.externalId = shortid.generate();
    dentist.password = await strapi.admin.services.auth.hashPassword(
      data.password
    );
    console.log({ dentist });
    try {
      let createdDentist = await strapi.query("dentist").create(dentist);
      let token = jwt.sign(
        _.pick(createdDentist, [
          "username",
          "externalId",
          "email",
          "active",
          "balance"
        ]),
        "process.env.JWT_KEY"
      );
      return token;
    } catch (e) {
      console.log(e);
    }
  }
};
