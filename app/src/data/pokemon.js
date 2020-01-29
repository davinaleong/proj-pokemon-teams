const pokemon = [
    {
        "name": "Aerodactyl",
        "types": ["Rock", "Flying"],
        "images": {
            "animated": "aerodactyl.gif",
            "sprite": "aerodactyl.png",
            "icon": "aerodactyl-icon.png"
        }
    }, {
        "name": "Pikachu",
        "types": ["Electric"],
        "images": {
            "animated": "pikachu.gif",
            "sprite": "pikachu.png",
            "icon": "pikachu-icon.png"
        }
    }, {
        "name": "Venusaur",
        "types": ["Grass", "Poison"],
        "images": {
            "animated": "venusaur.gif",
            "sprite": "venusaur.png",
            "icon": "venusaur-icon.png"
        }
    }, {
        "name": "Blastoise",
        "types": ["Water"],
        "images": {
            "animated": "blastoise.gif",
            "sprite": "blastoise.png",
            "icon": "blastoise-icon.png"
        }
    }, {
        "name": "Charizard",
        "types": ["Fire", "Flying"],
        "images": {
            "animated": "charizard.gif",
            "sprite": "charizard.png",
            "icon": "charizard-icon.png",
        },
        "megas": [
            {
                "name": "X",
                "types": ["Fire", "Dragon"],
                "images": {
                    "animated": "charizard_mega_x.gif",
                    "sprite": "charizard_mega_x.png"
                }
            }, {
                "name": "Y",
                "types": ["Fire", "Flying"],
                "images": {
                    "animated": "charizard_mega_y.gif",
                    "sprite": "charizard_mega_y_.png"
                }
            }
        ]
    }, {
        "name": "Clefable",
        "types": ["Fairy"],
        "images": {
            "animated": "clefable.gif",
            "sprite": "clefable.png",
            "icon": "clefable-icon.png"
        }
    }, {
        "name": "Raichu",
        "types": ["Electric"],
        "images": {
            "animated": "raichu.gif",
            "sprite": "raichu.png",
            "icon": "raichu-icon.png",
        }
    }, {
        "name": "Raichu (Alolan)",
        "types": ["Electric", "Psychic"],
        "images": {
            "animated": "raichu_alola.gif",
            "sprite": "raichu_alola.png",
            "icon": "raichu_alola.png"
        },
    }, {
        "name": "Primarina",
        "types": ["Water", "Fairy"],
        "images": {
            "animated": "primarina.gif",
            "sprite": "primarina.png",
            "icon": "primarina-icon.png"
        }
    }, {
        "name": "Muk (Alolan)",
        "types": ["Poison", "Dark"],
        "images": {
            "animated": "muk_alola.gif",
            "sprite": "muk_alola.png",
            "icon": "muk-icon.png"
        }
    }, {
        "name": "Garchomp",
        "types": ["Dragon", "Ground"],
        "images": {
            "animated": "garchomp.gif",
            "sprite": "garchomp.png",
            "icon": "garchomp-icon.png"
        }
    }, {
        "name": "Magmortar",
        "types": ["Fire"],
        "images": {
            "animated": "magmortar.gif",
            "sprite": "magmortar.png",
            "icon": "magmortar-icon.png"
        }
    }, {
        "name": "Lucario",
        "types": ["Fighting", "Steel"],
        "images": {
            "animated": "lucario.gif",
            "sprite": "lucario.png",
            "icon": "lucario-icon.png",
        },
        "megas": [
            {
                "name": "mega",
                "types": ["Fighting", "Steel"],
                "images": {
                    "animated": "lucario_mega.gif",
                    "sprite": "lucario_mega.png"
                }
            }
        ]
    }, {
        "name": "Archeops",
        "types": ["Rock", "Flying"],
        "images": {
            "animated": "archeops.gif",
            "sprite": "archeops.png",
            "icon": "archeops-icon.png"
        }
    }, {
        "name": "Magnezone",
        "types": ["Electric", "Steel"],
        "images": {
            "animated": "magnezone.gif",
            "sprite": "magnezone.png",
            "icon": "magnezone-icon.png"
        }
    }, {
        "name": "Marowak (Alolan)",
        "types": ["Fire", "Ghost"],
        "images": {
            "animated": "marowak_alola.gif",
            "sprite": "marowak_alola.png",
            "icon": "marowak_alola-icon.png"
        }
    }, {
        "name": "Dhelmise",
        "types": ["Grass", "Ghost"],
        "images": {
            "animated": "dhelmise.gif",
            "sprite": "dhelmise.png",
            "icon": "dhelmise-icon.png"
        }
    }, {
        "name": "Beedrill",
        "types": ["Bug", "Poison"],
        "images": {
            "animated": "beedrill.gif",
            "sprite": "beedrill.png",
            "icon": "beedrill-icon.png"
        },
        "megas": [
            {
                "name": "mega",
                "types": ["Bug", "Poison"],
                "images": {
                    "animated": "beedrill_mega.gif",
                    "sprite": "beedrill_mega.png"
                }
            }
        ]
    }, {
        "name": "Ferrothorn",
        "types": ["Grass", "Steel"],
        "images": {
            "animated": "ferrothorn.gif",
            "sprite": "ferrothorn.png",
            "icon": "ferrothorn-icon.png"
        }
    }, {
        "name": "Tentacruel",
        "types": ["Water", "Poison"],
        "images": {
            "animated": "tentacruel.gif",
            "sprite": "tentacruel.png",
            "icon": "tentacruel-icon.png"
        }
    }, {
        "name": "Hydreigon",
        "types": ["Dark", "Dragon"],
        "images": {
            "animated": "hydreigon.gif",
            "sprite": "hydreigon.png",
            "icon": "hydreigon-icon.png"
        }
    }, {
        "name": "Heatran",
        "types": ["Fire", "Steel"],
        "images": {
            "animated": "heatran.gif",
            "sprite": "heatran.png",
            "icon": "heatran-icon.png"
        }
    }, {
        "name": "Forretress",
        "types": ["Bug", "Steel"],
        "images": {
            "animated": "forretress.gif",
            "sprite": "forretress.png",
            "icon": "forretress-icon.png"
        }
    }, {
        "name": "Scizor",
        "types": ["Bug", "Steel"],
        "images": {
            "animated": "scizor.gif",
            "sprite": "scizor.png",
            "icon": "scizor-icon.png"
        },
        "megas": [
            {
                "name": "mega",
                "types": ["Bug", "Steel"],
                "images": {
                    "animated": "scizor_mega.gif",
                    "sprite": "scizor_mega.png"
                }
            }
        ]
    }, {
        "name": "Volcarona",
        "types": ["Bug", "Fire"],
        "images": {
            "animated": "volcarona.gif",
            "sprite": "volcarona.png",
            "icon": "volcarona-icon.png"
        }
    }, {
        "name": "Buzzwole",
        "types": ["Bug", "Fighting"],
        "images": {
            "animated": "buzzwole.gif",
            "sprite": "buzzwole.png",
            "icon": "buzzwole-icon.png"
        }
    }, {
        "name": "Vikavolt",
        "types": ["Bug", "Electric"],
        "images": {
            "animated": "vikavolt.gif",
            "sprite": "vikavolt.png",
            "icon": "vikavolt-icon.png"
        }
    }, {
        "name": "Golisopod",
        "types": ["Bug", "Water"],
        "images": {
            "animated": "golisopod.gif",
            "sprite": "golisopod.png",
            "icon": "golisopod-icon.png"
        }
    }
];

export default pokemon;