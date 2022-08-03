'use strict';

/**
 * whatsapp-phone service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::whatsapp-phone.whatsapp-phone');
