const path = require('path');
const buildOpenapi = require('../utils');

buildOpenapi(
    path.join(__dirname, 'main.json'),
    path.join(__dirname, 'components.json'),
    path.join(__dirname, 'paths'),
    path.join(__dirname, 'webhooks'),
    path.join(__dirname, '..', '..', 'api-open-delivery', 'openapi.json')
);