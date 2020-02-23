"use strict";
const { convertRestQueryParams } = require("strapi-utils");

module.exports = {
  create: async ctx => {
    let { firstName, lastName, dentist } = ctx.request.body;

    if (!(firstName && lastName && dentist)) {
      return ctx.send("Wrong data provided");
    }

    let client = await strapi.services.client.create(ctx.request.body);
    console.log(client);
    ctx.send(client);
  },

  update: async ctx => {
    if (ctx.request && ctx.request.header && ctx.request.header.authorization) {
      let data = ctx.request.body;

      let { address } = ctx.request.body;

      if (!data) {
        return ctx.send("Wrong data provided");
      }

      try {
        const client = ctx.params.id;
        console.log({ address });
        let createdClient = await strapi.services.client.update(client, data);
        ctx.send(createdClient);
      } catch (err) {
        console.log(err);

        return handleErrors(ctx, err, "unauthorized");
      }
    }
  },

  delete: async ctx => {
    if (ctx.request && ctx.request.header && ctx.request.header.authorization) {
      try {
        const client = ctx.params.id;
        let deletedClient = await strapi.services.client.delete(client);
        ctx.send(deletedClient);
      } catch (err) {
        console.log(err);

        return handleErrors(ctx, err, "unauthorized");
      }
    }
  }
};
