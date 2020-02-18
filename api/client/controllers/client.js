"use strict";

module.exports = {
  create: async ctx => {
    let { username, password, email } = ctx.request.body;
    let data = {
      name,
      surname,
      phone,
      birthdate
    };

    if (!(name && surname && phone && birthdate)) {
      return ctx.send("Wrong data provided");
    }

    let user = await strapi.services.client.create(data);
    ctx.send(data);
  }
};
