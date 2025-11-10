const fs = require('fs');
const path = require('path');

function buildOpenapi(mainFile, componentsFile, pathsFolder, webhooksFolder, outputFile) {
    const main = JSON.parse(fs.readFileSync(mainFile, 'utf8'));
    const components = JSON.parse(fs.readFileSync(componentsFile, 'utf8'));

    const bundled = {
        ...main,
        ...components
    };

    if (!bundled.paths) {
        bundled.paths = {};
    }

    const jsonPaths = fs.readdirSync(pathsFolder, { recursive: true }).filter(file => file.endsWith('.json'));
    for (const jsonPath of jsonPaths) {
        const jsonPathContent = fs.readFileSync(path.join(pathsFolder, jsonPath), 'utf8');
        const jsonPathObject = JSON.parse(jsonPathContent);
        bundled.paths[jsonPathObject.path] = jsonPathObject.methods;
    }
    
    const jsonWebhooks = fs.readdirSync(webhooksFolder, { recursive: true }).filter(file => file.endsWith('.json'));
    for (const jsonWebhook of jsonWebhooks) {
        const jsonWebhookContent = fs.readFileSync(path.join(webhooksFolder, jsonWebhook), 'utf8');
        const jsonWebhookObject = JSON.parse(jsonWebhookContent);
        
        if ('schemas' in jsonWebhookObject) {
            if (!bundled.components.schemas) {
                bundled.components.schemas = {};
            }
            for (const schema in jsonWebhookObject.schemas) {
                bundled.components.schemas[schema] = jsonWebhookObject.schemas[schema];
            }
        }

        if ('events' in jsonWebhookObject) {
            if (!bundled.webhooks) {
                bundled.webhooks = {};
            }
        }
        for (const event in jsonWebhookObject.events) {
            bundled.webhooks[event] = jsonWebhookObject.events[event];
        }
    }

    fs.writeFileSync(outputFile, JSON.stringify(bundled, null, 2));
}

module.exports = buildOpenapi;