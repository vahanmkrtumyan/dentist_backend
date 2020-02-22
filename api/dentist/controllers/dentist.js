"use strict";

module.exports = {
  create: async ctx => {
    let { user, active, balance } = ctx.request.body;
    let data = {
      user,
      active,
      balance
    };

    if (!(user && active && balance)) {
      return ctx.send("Wrong data provided");
    }

    let dentist = await strapi.services.dentist.create(data);
    console.log(dentist);
    ctx.send(dentist);
  },

  update: async ctx => {
    if (ctx.request && ctx.request.header && ctx.request.header.authorization) {
      let body = ctx.request.body;

      if (!body) {
        return ctx.send("Wrong data provided");
      }

      try {
        const user = await strapi.plugins[
          "users-permissions"
        ].services.jwt.getToken(ctx);
        const { id } = user;
        let dentist = await strapi.services.dentist.update(id, body);
        ctx.send(dentist);
      } catch (err) {
        console.log(err);

        return handleErrors(ctx, err, "unauthorized");
      }
    }
  }
};
