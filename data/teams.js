const fs = require('fs');
const ENCODING = 'utf-8';

const data = [];
const gens = fs.readdirSync(__dirname + './../teams');

gens.forEach((folder, i) => {
    const generation = {
        "name": folder,
        "teams": []
    };

    const teams = fs.readdirSync(__dirname + './../teams/' + folder);
    teams.forEach(filename => {
        generation.teams.push(JSON.parse(fs.readFileSync(__dirname + './../teams/' + folder + '/' + filename)));
    });

    data.push(generation);
});

module.exports = data;