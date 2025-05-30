/**
 * `global-populate` middleware
 */

import type { Core } from "@strapi/strapi";
const populate = {
  banner: {
    populate: {
      link: true,
    },
  },
  header: {
    populate: {
      logo: {
        populate: {
          image: {
            fields: ["alternativeText", "url"],
          },
        },
      },
    },
  },
  footer: {
    populate: {
      logo: {
        populate: {
          image: {
            fields: ["alternativeText", "url"],
          },
        },
      },
      navItems: true,
      socialLinks: {
        populate: {
          image: {
            fields: ["alternativeText", "url"],
          },
        },
      },
    },
  },
};
export default (config, { strapi }: { strapi: Core.Strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    ctx.query.populate = populate;
    strapi.log.info("In global-populate middleware.");

    await next();
  };
};
