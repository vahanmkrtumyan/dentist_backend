"use strict";

module.exports = {
  create: async user => {
    try {
      strapi.query("user").create({ user });
    } catch (e) {
      console.log(e);
    }
  }
};
