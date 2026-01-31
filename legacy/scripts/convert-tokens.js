/* global require, __dirname */
const fs = require('fs');
const path = require('path');

const tokensPath = path.join(__dirname, '..', 'design-systems');
const outputPath = path.join(__dirname, '..', 'tokens.css');

function extractTokens(obj, prefix = '') {
    let variables = {};
    for (const key in obj) {
        if (key === '$value' && obj.hex) {
            variables[prefix.slice(0, -1)] = obj.hex;
        } else if (typeof obj[key] === 'object' && obj[key] !== null) {
            if (key === '$value' && obj[key].hex) {
                variables[prefix.slice(0, -1)] = obj[key].hex;
            } else if (key !== '$extensions' && key !== '$type') {
                Object.assign(variables, extractTokens(obj[key], `${prefix}${key}-`));
            }
        }
    }
    return variables;
}

function generateCSS() {
    const lightTokens = JSON.parse(fs.readFileSync(path.join(tokensPath, 'Light.tokens.json'), 'utf8'));
    const darkTokens = JSON.parse(fs.readFileSync(path.join(tokensPath, 'Dark.tokens.json'), 'utf8'));

    const lightVars = extractTokens(lightTokens);
    const darkVars = extractTokens(darkTokens);

    let css = ':root {\n';
    for (const [name, value] of Object.entries(lightVars)) {
        css += `    --${name}: ${value};\n`;
    }
    css += '}\n\n';

    css += '[data-theme="light"] {\n';
    for (const [name, value] of Object.entries(lightVars)) {
        css += `    --${name}: ${value};\n`;
    }
    css += '}\n\n';

    css += '[data-theme="dark"] {\n';
    for (const [name, value] of Object.entries(darkVars)) {
        css += `    --${name}: ${value};\n`;
    }
    css += '}\n';

    fs.writeFileSync(outputPath, css);
    console.log('tokens.css generated successfully!');
}

generateCSS();