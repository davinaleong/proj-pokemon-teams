const moves = [
    {
        "name": "Air Slash",
        "type": "Flying"
    }, {
        "name": "Bounce",
        "type": "Flying"
    }, {
        "name": "Brave Bird",
        "type": "Flying"
    }, {
        "name": "Bug Bite",
        "type": "Bug"
    }, {
        "name": "Bug Buzz",
        "type": "Bug"
    }, {
        "name": "Bulk Up",
        "type": "Fighting"
    }, {
        "name": "Bullet Punch",
        "type": "Steel"
    }, {
        "name": "Calm Mind",
        "type": "Psychic"
    }, {
        "name": "Crunch",
        "type": "Dark"
    }, {
        "name": "Dark Pulse",
        "type": "Dark"
    }, {
        "name": "Draco Meteor",
        "type": "Dragon"
    }, {
        "name": "Dragon Dance",
        "type": "Dragon"
    }, {
        "name": "Dragon Pulse",
        "type": "Dragon"
    }, {
        "name": "Dragon Rush",
        "type": "Dragon"
    }, {
        "name": "Drill Run",
        "type": "Ground"
    }, {
        "name": "Dual Chop",
        "type": "Dragon"
    }, {
        "name": "Earth Power",
        "type": "Ground"
    }, {
        "name": "Earthquake",
        "type": "Ground"
    }, {
        "name": "Energy Ball",
        "type": "Grass"
    }, {
        "name": "Fire Blast",
        "type": "Fire"
    }, {
        "name": "Flamethrower",
        "type": "Fire"
    }, {
        "name": "Flash Cannon",
        "type": "Steel"
    }, {
        "name": "Focus Blast",
        "type": "Fighting"
    }, {
        "name": "Giga Drain",
        "type": "Grass"
    }, {
        "name": "Grass Knot",
        "type": "Grass"
    }, {
        "name": "Gunk Shot",
        "type": "Poison"
    }, {
        "name": "Gyro Ball",
        "type": "Steel"
    }, {
        "name": "Haze",
        "type": "Ice"
    }, {
        "name": "Hydro Pump",
        "type": "Water"
    }, {
        "name": "Ice Beam",
        "type": "Ice"
    }, {
        "name": "Ice Shard",
        "type": "Ice"
    }, {
        "name": "Icicle Crash",
        "type": "Ice"
    }, {
        "name": "Infestation",
        "type": "Bug"
    }, {
        "name": "Iron Head",
        "type": "Steel"
    }, {
        "name": "Knock Off",
        "type": "Dark"
    }, {
        "name": "Leech Life",
        "type": "Bug"
    }, {
        "name": "Leech Seed",
        "type": "Grass"
    }, {
        "name": "Liquidation",
        "type": "Water"
    }, {
        "name": "Magma Storm",
        "type": "Fire"
    }, {
        "name": "Moonblast",
        "type": "Fairy"
    }, {
        "name": "Night Slash",
        "type": "Dark"
    }, {
        "name": "Outrage",
        "type": "Dragon"
    }, {
        "name": "Petal Blizzard",
        "type": "Grass"
    }, {
        "name": "Poison Jab",
        "type": "Poison"
    }, {
        "name": "Power Whip",
        "type": "Grass"
    }, {
        "name": "Pursuit",
        "type": "Dark"
    }, {
        "name": "Quiver Dance",
        "type": "Bug"
    }, {
        "name": "Rain Dance",
        "type": "Water"
    }, {
        "name": "Rapid Spin",
        "type": "Normal"
    }, {
        "name": "Refresh",
        "type": "Normal"
    }, {
        "name": "Rest",
        "type": "Psychic"
    }, {
        "name": "Roost",
        "type": "Flying"
    }, {
        "name": "Scald",
        "type": "Water"
    }, {
        "name": "Shadow Ball",
        "type": "Ghost"
    }, {
        "name": "Sleep Talk",
        "type": "Normal"
    }, {
        "name": "Sludge Bomb",
        "type": "Poison"
    }, {
        "name": "Solar Beam",
        "type": "Grass"
    }, {
        "name": "Spikes",
        "type": "Ground"
    }, {
        "name": "Stealth Rocks",
        "type": "Rock"
    }, {
        "name": "Steel Wing",
        "type": "Steel"
    }, {
        "name": "Stone Edge",
        "type": "Rock"
    }, {
        "name": "Stored Power",
        "type": "Psychic"
    }, {
        "name": "Sucker Punch",
        "type": "Dark"
    }, {
        "name": "Superpower",
        "type": "Fighting"
    }, {
        "name": "Surf",
        "type": "Water"
    }, {
        "name": "Swords Dance",
        "type": "Normal"
    }, {
        "name": "Thunder",
        "type": "Electric"
    }, {
        "name": "Thunderbolt",
        "type": "Electric"
    }, {
        "name": "Toxic",
        "type": "Poison"
    }, {
        "name": "U-Turn",
        "type": "Bug"
    }, {
        "name": "Volt Switch",
        "type": "Electric"
    }, {
        "name": "Volt Tackle",
        "type": "Electric"
    }, {
        "name": "Water Shuriken",
        "type": "Water"
    }, {
        "name": "Will-O-Wisp",
        "type": "Fire"
    }, {
        "name": "X-Scissor",
        "type": "Bug"
    }, {
        "name": "Hidden Power (Bug)",
        "type": "Bug"
    }, {
        "name": "Hidden Power (Dark)",
        "type": "Dark"
    }, {
        "name": "Hidden Power (Dragon)",
        "type": "Dragon"
    }, {
        "name": "Hidden Power (Electric)",
        "type": "Electric"
    }, {
        "name": "Hidden Power (Fairy)",
        "type": "Fairy"
    }, {
        "name": "Hidden Power (Fighting)",
        "type": "Fighting"
    }, {
        "name": "Hidden Power (Fire)",
        "type": "Fire"
    }, {
        "name": "Hidden Power (Flying)",
        "type": "Flying"
    }, {
        "name": "Hidden Power (Ghost)",
        "type": "Ghost"
    }, {
        "name": "Hidden Power (Grass)",
        "type": "Grass"
    }, {
        "name": "Hidden Power (Ground)",
        "type": "Ground"
    }, {
        "name": "Hidden Power (Ice)",
        "type": "Ice"
    }, {
        "name": "Hidden Power (Normal)",
        "type": "Normal"
    }, {
        "name": "Hidden Power (Poison)",
        "type": "Poison"
    }, {
        "name": "Hidden Power (Psychic)",
        "type": "Psychic"
    }, {
        "name": "Hidden Power (Rock)",
        "type": "Rock"
    }, {
        "name": "Hidden Power (Steel)",
        "type": "Steel"
    }, {
        "name": "Hidden Power (Water)",
        "type": "Water"
    }, {
        "name": "Dazzling Gleam",
        "type": "Fairy"
    }, {
        "name": "Flare Blitz",
        "type": "Fire"
    }, {
        "name": "Shadow Bone",
        "type": "Ghost"
    }, {
        "name": "Bonemerang",
        "type": "Ground"
    }, {
        "name": "Stealth Rocks",
        "type": "Rock"
    }, {
        "name": "Aura Sphere",
        "type": "Fighting"
    }, {
        "name": "Extreme Speed",
        "type": "Normal"
    }, {
        "name": "Phantom Force",
        "type": "Ghost"
    }, {
        "name": "Dragon Claw",
        "type": "Dragon"
    }, {
        "name": "Shadow Claw",
        "type": "Ghost"
    }, {
        "name": "Anchor Shot",
        "type": "Steel"
    }
];

export default moves;