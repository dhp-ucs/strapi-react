/**
 * global router
 */

import { factories } from "@strapi/strapi";

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
export default factories.createCoreRouter("api::global.global", {
  config: {
    find: {
      middlewares: ["api::global.global-populate"],
    },
  },
});
