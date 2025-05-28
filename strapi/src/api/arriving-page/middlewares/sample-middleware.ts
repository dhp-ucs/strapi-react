/**
 * `sample-middleware` middleware
 */

import type { Core } from '@strapi/strapi';

const populate = {
  blocks: {
    
  }
}
export default (config, { strapi }: { strapi: Core.Strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    strapi.log.info('In sample-middleware middleware.');
    ctx.query.populate = populate
    await next();
  };
};
