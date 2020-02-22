"use strict";
const { convertRestQueryParams } = require("strapi-utils");

module.exports = {
  create: async ctx => {
    let { firstName, lastName } = ctx.request.body;

    if (!(firstName && lastName)) {
      return ctx.send("Wrong data provided");
    }

    let client = await strapi.services.client.create(ctx.request.body);
    console.log(client);
    ctx.send(client);
  },

  update: async ctx => {
    if (ctx.request && ctx.request.header && ctx.request.header.authorization) {
      let data = ctx.request.body;

      if (!data) {
        return ctx.send("Wrong data provided");
      }

      try {
        const client = data.client;
        delete data.client;
        console.log({ client, data });
        let createdClient = await strapi.services.client.update(client, data);
        ctx.send(createdClient);
      } catch (err) {
        console.log(err);

        return handleErrors(ctx, err, "unauthorized");
      }
    }
  },

  delete: async ctx => {
    // if (ctx.request && ctx.request.header && ctx.request.header.authorization) {
    //   let data = ctx.request.body;
    //   if (!data) {
    //     return ctx.send("Wrong data provided");
    //   }
    //   try {
    //     const client = data.client;
    //     delete data.client;
    //     console.log({ client, data });
    //     let createdClient = await strapi.services.client.update(client, data);
    //     ctx.send(createdClient);
    //   } catch (err) {
    //     console.log(err);
    //     return handleErrors(ctx, err, "unauthorized");
    //   }
    // }
  }
};
