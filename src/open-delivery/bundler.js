const fs = require('fs');
const path = require('path');

const main = require('./main.json');
const components = require('./components.json');

const bundled = {
    ...main,
    ...components
};

if (!bundled.paths) {
    bundled.paths = {};
}

const jsonPaths = fs.readdirSync(path.join(__dirname, 'paths'), { recursive: true }).filter(file => file.endsWith('.json'));
for (const jsonPath of jsonPaths) {
    const jsonPathContent = fs.readFileSync(path.join(__dirname, 'paths', jsonPath), 'utf8');
    const jsonPathObject = JSON.parse(jsonPathContent);
    bundled.paths[jsonPathObject.path] = jsonPathObject.methods;
}

fs.writeFileSync(path.join(__dirname, '..', '..', 'api-open-delivery', 'openapi.json'), JSON.stringify(bundled, null, 2));