"use strict";

/**
 * Read the documentation (https://strapi.io/documentation/3.0.0-beta.x/concepts/services.html#core-services)
 * to customize this service
 */

module.exports = {
  create: async data => {
    let tooth = { ...data };
    console.log({ tooth });
    try {
      let createdTooth = await strapi.query("tooth").create(tooth);
      return createdTooth;
    } catch (e) {
      console.log(e);
    }
  }
};
