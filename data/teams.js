import fs from 'fs';

const ENCODING = 'utf-8';
const data = [];
const gens = fs.readdirSync(__dirname + './../teams', ENCODING);

gens.forEach(folder => {
    const generation = {
        "name": folder,
        "teams": []
    };

    const teams = fs.readdirSync(__dirname + './../teams/' + folder, ENCODING);
    teams.forEach(filename => {
        generation.teams.push(JSON.parse(fs.readFileSync(__dirname + './../teams/' + folder + '/' + filename, ENCODING)));
    });

    data.push(generation);
});

export default data;