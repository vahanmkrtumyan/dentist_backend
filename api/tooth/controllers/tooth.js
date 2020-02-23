"use strict";

/**
 * Read the documentation (https://strapi.io/documentation/3.0.0-beta.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  create: async ctx => {
    let { number, client } = ctx.request.body;

    if (!(number && client)) {
      return ctx.send("Wrong data provided");
    }

    let tooth = await strapi.services.tooth.create(ctx.request.body);
    console.log(tooth);
    ctx.send(tooth);
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
