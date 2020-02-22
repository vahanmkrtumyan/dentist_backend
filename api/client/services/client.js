"use strict";

module.exports = {
  create: async data => {
    try {
      return await strapi.query("client").create(data);
    } catch (e) {
      console.log(e);
    }
  },

  update: async (client, data) => {
    try {
      let createdClient = await strapi
        .query("client")
        .update({ id: client }, data);
      return createdClient;
    } catch (e) {
      console.log(e);
    }
  },

  delete: async client => {
    try {
      let deletedClient = await strapi.query("client").delete({ id: client });
      return deletedClient;
    } catch (e) {
      console.log(e);
    }
  }
};
