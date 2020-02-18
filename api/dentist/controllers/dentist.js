"use strict";

module.exports = {
  create: async ctx => {
    let { username, password, email } = ctx.request.body;
    let data = {
      username,
      password,
      email
    };

    if (!(username && password && email)) {
      return ctx.send("Wrong data provided");
    }

    let dentist = await strapi.services.dentist.signup(data);
    console.log(dentist)
    ctx.send(dentist);
  }
};
