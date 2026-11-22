const characters = [
  {
    id: "women-enma",
    name: "Women Enma",
    tribe: "Brave",
    gender: "female",
    saga: "13th anniversary",
    rank: "UZ++",
    hp0: 1980,
    hp10: 2376,
    atk0: 1850,
    atk10: 2220,
    image: "Uz++/Womenenma.png",
    centerSkill: {
      hpPercent: 7,
      atkPercent: 7,
      affects: {
        tribes: ["Brave"]
      }
    },
    unity: {
      percent: 28
    }
  },
  {
    id: "u-robonyan-ma",
    name: "U robonyan MA",
    tribe: "Tough",
    gender: "male",
    saga: "100 Tales",
    rank: "UZ++",
    hp0: 1992,
    hp10: 2390,
    atk0: 1838,
    atk10: 2206,
    image: "Uz++/Urobonyanma.png",
    centerSkill: {
      hpPercent: 7,
      atkPercent: 7,
      affects: {
        tribes: ["Tough"]
      }
    },
    unity: {
      percent: 28
    }
  },
  {
    id: "kirito",
    name: "Kirito",
    tribe: "Tough",
    gender: "male",
    saga: "Sword Art Online",
    rank: "UZ++",
    hp0: 1902,
    hp10: 2282,
    atk0: 1928,
    atk10: 2314,
    image: "Uz++/Kirito.png",
    centerSkill: {
      hpPercent: 7,
      atkPercent: 7,
      affects: {
        tribes: ["Tough"]
      }
    },
    unity: {
      percent: 28
    }
  },
  {
    id: "Summer-themed-leisure-mika",
    name: "Summer-Themed Leisure Mika",
    tribe: "Mysterious",
    gender: "female",
    saga: "100 Tales",
    rank: "UZ++",
    hp0: 1882,
    hp10: 2258,
    atk0: 1948,
    atk10: 2338,
    image: "Uz++/Summerthemedleisuremika.png",
    centerSkill: {
      hpPercent: 7,
      atkPercent: 7,
      affects: {
        tribes: ["Mysterious"]
      }
    }
  },
  {
    id: "chirpster",
    name: "Chirpster",
    tribe: "Charming",
    gender: "male",
    saga: "Youma",
    rank: "UZ++",
    hp0: 2047,
    hp10: 2456,
    atk0: 2070,
    atk10: 2484,
    image: "Uz++/Chirpster.png",
    centerSkill: {
      hpPercent: 7,
      atkPercent: 7,
      affects: {
        tribes: ["Charming"]
      }
    },
    unity: {
      percent: 28
    }
  },
  {
    id: "chizuru-mizuhara",
    name: "Chizuru Mizuhara",
    tribe: "Charming",
    gender: "female",
    saga: "Rent a Girlfriend",
    rank: "UZ++",
    hp0: 1996,
    hp10: 2395,
    atk0: 1864,
    atk10: 2237,
    image: "Uz++/Chizurumizuhara.png",
    centerSkill: {
      hpPercent: 1,
      atkPercent: 13,
      affects: {
        tribes: ["Charming"]
      }
    },
    unity: {
      percent: 28
    }
  },
  {
    id: "vacation-maiden-elzemekia",
    name: "Vacation Maiden Elzemekia",
    tribe: "Charming",
    gender: "female",
    saga: "Nyanbo",
    rank: "UZ++",
    hp0: 1956,
    hp10: 2347,
    atk0: 1951,
    atk10: 2341,
    image: "Uz++/Vacationmaidenelzemekia.png",
    centerSkill: {
      hpPercent: 6,
      atkPercent: 8,
      affects: {
        tribes: ["Charming"]
      }
    },
    unity: {
      percent: 28
    }
  },
  {
    id: "yotsuba-summer-memory",
    name: "Yotsuba Summer Memory",
    tribe: "Heartful",
    gender: "female",
    saga: "The Quintessential Quintuplets",
    rank: "UZ++",
    hp0: 1979,
    hp10: 2375,
    atk0: 1851,
    atk10: 2221,
    image: "Uz++/Yotsubasummermemory.png",
    centerSkill: {
      hpPercent: 7,
      atkPercent: 7,
      affects: {
        tribes: ["Heartful"]
      }
    },
    unity: {
      percent: 28
    }
  },
  {
    id: "nino-summer-memory",
    name: "Nino Summer Memory",
    tribe: "Eerie",
    gender: "female",
    saga: "The Quintessential Quintuplets",
    rank: "UZ++",
    hp0: 1829,
    hp10: 2195,
    atk0: 2001,
    atk10: 2401,
    image: "Uz++/Ninosummermemory.png",
    centerSkill: {
      hpPercent: 7,
      atkPercent: 7,
      affects: {
        tribes: ["Eerie"]
      }
    },
    unity: {
      percent: 28
    }
  },
  {
    id: "ichika-summer-memory",
    name: "Ichika Summer Memory",
    tribe: "Mysterious",
    gender: "female",
    saga: "The Quintessential Quintuplets",
    rank: "UZ++",
    hp0: 1929,
    hp10: 2315,
    atk0: 1901,
    atk10: 2281,
    image: "Uz++/Ichikasummermemory.png",
    centerSkill: {
      hpPercent: 7,
      atkPercent: 7,
      affects: {
        tribes: ["Mysterious"]
      }
    },
    unity: {
      percent: 28
    }
  },
  {
    id: "itsuki-summer-memory",
    name: "Itsuki Summer Memory",
    tribe: "Brave",
    gender: "female",
    saga: "The Quintessential Quintuplets",
    rank: "UZ++",
    hp0: 1937,
    hp10: 2324,
    atk0: 1893,
    atk10: 2272,
    image: "Uz++/Itsukisummermemory.png",
    centerSkill: {
      hpPercent: 7,
      atkPercent: 7,
      affects: {
        tribes: ["Brave"]
      }
    },
    unity: {
      percent: 28
    }
  },
  {
    id: "miku-summer-memory",
    name: "Miku Summer Memory",
    tribe: "Shady",
    gender: "female",
    saga: "The Quintessential Quintuplets",
    rank: "UZ++",
    hp0: 1912,
    hp10: 2294,
    atk0: 1918,
    atk10: 2302,
    image: "Uz++/Mikusummermemory.png",
    centerSkill: {
      hpPercent: 7,
      atkPercent: 7,
      affects: {
        tribes: ["Shady"]
      }
    },
    unity: {
      percent: 28
    }
  },
  {
    id: "mera-shishino-yog",
    name: "Mera Shishino YOG",
    tribe: "Brave",
    gender: "female",
    saga: "Idol Royale",
    rank: "UZ++",
    hp0: 1897,
    hp10: 2276,
    atk0: 1933,
    atk10: 2320,
    image: "Uz++/Merashishinoyog.png",
    centerSkill: {
      hpPercent: 3,
      atkPercent: 9,
      affects: {
        genders: ["female"]
      }
    }
  },
  {
    id: "dame-demona",
    name: "Dame Demona",
    tribe: "Shady",
    gender: "female",
    saga: "",
    rank: "UZ++",
    hp0: 2156,
    hp10: 2587,
    atk0: 1951,
    atk10: 2341,
    image: "Uz++/Damedemona.png",
    centerSkill: {
      hpPercent: 6,
      atkPercent: 8,
      affects: {
        tribes: ["Shady"]
      }
    },
    unity: {
      percent: 28
    }
  },
  {
    id: "shirakami-fubuki-autumn",
    name: "Shirakami Fubuki (Autumn)",
    tribe: "Mysterious",
    gender: "female",
    saga: "Hololive",
    rank: "UZ++",
    hp0: 1877,
    hp10: 2252,
    atk0: 1953,
    atk10: 2344,
    image: "Uz++/Shirakamifubuki(autumn).png",
    centerSkill: {
      hpPercent: 3,
      atkPercent: 11,
      affects: {
        tribes: ["Mysterious"]
      }
    }
  },
  {
    id: "jacky-lantern",
    name: "Jacky Lantern",
    tribe: "Charming",
    gender: "male",
    saga: "100 Tales",
    rank: "UZ++",
    hp0: 1905,
    hp10: 2286,
    atk0: 1925,
    atk10: 2310,
    image: "Uz++/Jackylantern.png",
    centerSkill: {
      hpPercent: 1,
      atkPercent: 18,
      affects: {
        sagas: ["100 Tales"]
      }
    }
  },
  {
    id: "shinra-kusakabe",
    name: "Shinra Kusakabe",
    tribe: "Tough",
    gender: "male",
    saga: "Fire Force",
    rank: "UZ++",
    hp0: 1978,
    hp10: 2374,
    atk0: 1852,
    atk10: 2222,
    image: "Uz++/Shinrakusakabe.png",
    centerSkill: {
      hpPercent: 13,
      atkPercent: 1,
      affects: {
        tribes: ["Tough"]
      }
    }
  },
  {
    id: "happy-halloween-mika",
    name: "Happy Halloween Mika",
    tribe: "Mysterious",
    gender: "female",
    saga: "",
    rank: "UZ++",
    hp0: 1905,
    hp10: 2286,
    atk0: 2002,
    atk10: 2402,
    image: "Uz++/Happyhalloweenmika.png",
    centerSkill: {
      hpPercent: 2,
      atkPercent: 10,
      affects: {
        genders: ["female"]
      }
    }
  },
  {
    id: "block-enma",
    name: "Block Enma",
    tribe: "Enma",
    gender: "male",
    saga: "Block",
    rank: "UZ++",
    hp0: 2029,
    hp10: 2435,
    atk0: 2184,
    atk10: 2621,
    image: "Uz++/Blockenma.png",
    centerSkill: {
      hpPercent: 1,
      atkPercent: 13,
      affects: {
        tribes: ["Enma"]
      }
    }
  },
  {
    id: "super-limit-broken-mckraken",
    name: "Super Limit Broken McKraken",
    tribe: "Slippery",
    gender: "male",
    saga: "",
    rank: "UZ++",
    hp0: 1907,
    hp10: 2288,
    atk0: 1923,
    atk10: 2308,
    image: "Uz++/Superlimitbrokenmckraken.png",
    centerSkill: {
      hpPercent: 9,
      atkPercent: 5,
      affects: {
        tribes: ["Slippery"]
      }
    }
  },
  {
    id: "icaros",
    name: "IcaroS",
    tribe: "Tough",
    gender: "male",
    saga: "",
    rank: "UZ++",
    hp0: 2076,
    hp10: 2491,
    atk0: 2041,
    atk10: 2449,
    image: "Uz++/Icaros.png",
    centerSkill: {
      hpPercent: 6,
      atkPercent: 8,
      affects: {
        tribes: ["Tough"]
      }
    }
  },
  {
    id: "auspicius-enma",
    name: "Auspicious Enma",
    tribe: "Enma",
    gender: "male",
    saga: "12th anniversary",
    rank: "UZ+",
    hp0: 1699,
    hp10: 2039,
    atk0: 1631,
    atk10: 1957,
    image: "Uz+/Auspiciusenma.png",
    centerSkill: {
      hpPercent: 0,
      atkPercent: 13,
      affects: {
        tribes: ["Enma"]
      }
    }
  },
  {
    id: "mera-shishino",
    name: "Mera Shishino",
    tribe: "Brave",
    gender: "female",
    saga: "Idol Royale",
    rank: "UZ+",
    hp0: 1629,
    hp10: 1955,
    atk0: 1701,
    atk10: 2041,
    image: "Uz+/Merashishino.png",
    centerSkill: {
      hpPercent: 3,
      atkPercent: 5,
      affects: {
        genders: ["female"]
      }
    }
  },
  {
    id: "golden-claws",
    name: "Golden Claws",
    tribe: "Charming",
    gender: "male",
    saga: "Youma",
    rank: "UZ+",
    hp0: 1771,
    hp10: 2125,
    atk0: 1809,
    atk10: 2171,
    image: "Uz+/Goldenclaws.png",
    centerSkill: {
      hpPercent: 7,
      atkPercent: 3,
      affects: {
        tribes: ["Charming"]
      }
    }
  },
  {
    id: "ichika-happy-valentine",
    name: "Ichika Happy Valentine",
    tribe: "Mysterious",
    gender: "female",
    saga: "The Quintessential Quintuplets",
    rank: "UZ+",
    hp0: 1687,
    hp10: 2024,
    atk0: 1643,
    atk10: 1972,
    image: "Uz+/Ichikahappyvalentine.png",
    centerSkill: {
      hpPercent: 12,
      atkPercent: 8,
      affects: {
        sagas: ["The Quintessential Quintuplets"]
      }
    }
  },
  {
    id: "nino-happy-valentine",
    name: "Nino Happy Valentine",
    tribe: "Eerie",
    gender: "female",
    saga: "The Quintessential Quintuplets",
    rank: "UZ+",
    hp0: 1666,
    hp10: 1999,
    atk0: 1664,
    atk10: 1997,
    image: "Uz+/Ninohappyvalentine.png",
    centerSkill: {
      hpPercent: 8,
      atkPercent: 12,
      affects: {
        sagas: ["The Quintessential Quintuplets"]
      }
    }
  },
  {
    id: "miku-happy-valentine",
    name: "Miku Happy Valentine",
    tribe: "Shady",
    gender: "female",
    saga: "The Quintessential Quintuplets",
    rank: "UZ+",
    hp0: 1589,
    hp10: 1907,
    atk0: 1741,
    atk10: 2089,
    image: "Uz+/Mikuhappyvalentine.png",
    centerSkill: {
      hpPercent: 10,
      atkPercent: 10,
      affects: {
        sagas: ["The Quintessential Quintuplets"]
      }
    }
  },
  {
    id: "yotsuba-happy-valentine",
    name: "Yotsuba Happy Valentine",
    tribe: "Heartful",
    gender: "female",
    saga: "The Quintessential Quintuplets",
    rank: "UZ+",
    hp0: 1697,
    hp10: 2036,
    atk0: 1633,
    atk10: 1960,
    image: "Uz+/Yotsubahappyvalentine.png",
    centerSkill: {
      hpPercent: 14,
      atkPercent: 6,
      affects: {
        sagas: ["The Quintessential Quintuplets"]
      }
    }
  },
  {
    id: "itsuki-happy-valentine",
    name: "Itsuki Happy Valentine",
    tribe: "Brave",
    gender: "female",
    saga: "The Quintessential Quintuplets",
    rank: "UZ+",
    hp0: 1667,
    hp10: 2000,
    atk0: 1663,
    atk10: 1996,
    image: "Uz+/Itsukihappyvalentine.png",
    centerSkill: {
      hpPercent: 6,
      atkPercent: 14,
      affects: {
        sagas: ["The Quintessential Quintuplets"]
      }
    }
  },
  {
    id: "meteorite-asu",
    name: "Meteorite Asu",
    tribe: "Eerie",
    gender: "male",
    saga: "Galaxy Watch",
    rank: "UZ+",
    hp0: 1668,
    hp10: 2002,
    atk0: 1662,
    atk10: 1994,
    image: "Uz+/Meteoriteasu.png",
    centerSkill: {
      hpPercent: 4,
      atkPercent: 6,
      affects: {
        tribes: ["Eerie"]
      }
    }
  },
  {
    id: "neko-elzemekia",
    name: "Neko Elzemekia",
    tribe: "Heartful",
    gender: "female",
    saga: "Nyanbo",
    rank: "UZ+",
    hp0: 1666,
    hp10: 1999,
    atk0: 1731,
    atk10: 2077,
    image: "Uz+/Nekoelzemekia.png",
    centerSkill: {
      hpPercent: 5,
      atkPercent: 5,
      affects: {
        tribes: ["Heartful"]
      }
    },
    unity: {
      percent: 26
    }
  },
  {
    id: "usada-pekora",
    name: "Usada Pekora",
    tribe: "Heartful",
    gender: "female",
    saga: "Hololive",
    rank: "UZ+",
    hp0: 1564,
    hp10: 1877,
    atk0: 1766,
    atk10: 2119,
    image: "Uz+/Usadapekora.png",
    centerSkill: {
      hpPercent: 10,
      atkPercent: 5,
      affects: {
        sagas: ["Hololive"]
      }
    },
    unity: {
      percent: 26
    }
  },
  {
    id: "hibari-akane",
    name: "Hibari Akane",
    tribe: "Mysterious",
    gender: "female",
    saga: "Idol Royale",
    rank: "UZ+",
    hp0: 1649,
    hp10: 1979,
    atk0: 1681,
    atk10: 2017,
    image: "Uz+/Hibariakana.png",
    centerSkill: {
      hpPercent: 5,
      atkPercent: 3,
      affects: {
        genders: ["female"]
      }
    }
  },
  {
    id: "swirlious-gold",
    name: "Swirlious Gold",
    tribe: "Charming",
    gender: "male",
    saga: "Youma",
    rank: "UZ+",
    hp0: 1849,
    hp10: 2219,
    atk0: 1835,
    atk10: 2202,
    image: "Uz+/Swirliousgold.png",
    centerSkill: {
      hpPercent: 3,
      atkPercent: 7,
      affects: {
        tribes: ["Charming"]
      }
    }
  },
  {
    id: "komaki-komami-(2nd outfit)",
    name: "Komaki Komami (2nd Outfit)",
    tribe: "Charming",
    gender: "female",
    saga: "Idol Royale",
    rank: "UZ+",
    hp0: 1677,
    hp10: 2012,
    atk0: 1653,
    atk10: 1984,
    image: "Uz+/Komakikomami(2ndoutfit).png",
    centerSkill: {
      hpPercent: 4,
      atkPercent: 4,
      affects: {
        genders: ["female"]
      }
    }
  },
  {
    id: "moon-asu",
    name: "Moon Asu",
    tribe: "Mysterious",
    gender: "male",
    saga: "Galaxy Watch",
    rank: "UZ+",
    hp0: 1667,
    hp10: 2000,
    atk0: 1663,
    atk10: 1996,
    image: "Uz+/Moonasu.png",
    centerSkill: {
      hpPercent: 7,
      atkPercent: 8,
      affects: {
        sagas: ["Galaxy Watch"]
      }
    }
  },
  {
    id: "ginga-emperor-usapyon",
    name: "Ginga Emperor Usapyon",
    tribe: "Shady",
    gender: "male",
    saga: "Nyanbo",
    rank: "UZ+",
    hp0: 1621,
    hp10: 1945,
    atk0: 1776,
    atk10: 2131,
    image: "Uz+/Gingaemperorusapyon.png",
    centerSkill: {
      hpPercent: 6,
      atkPercent: 4,
      affects: {
        tribes: ["Shady"]
      }
    }
  },
  {
    id: "hyakumantenbara-salome",
    name: "Hyakumantenbara Salome",
    tribe: "Mysterious",
    gender: "female",
    saga: "Nijisanji",
    rank: "UZ+",
    hp0: 1601,
    hp10: 1921,
    atk0: 1729,
    atk10: 2075,
    image: "Uz+/Hyakumantenbarasalome.png",
    centerSkill: {
      hpPercent: 8,
      atkPercent: 2,
      affects: {
        tribes: ["Mysterious"]
      }
    }
  },
  {
    id: "mamorina",
    name: "Mamorina",
    tribe: "Charming",
    gender: "female",
    saga: "100 Tales",
    rank: "UZ+",
    hp0: 1704,
    hp10: 2045,
    atk0: 1626,
    atk10: 1951,
    image: "Uz+/Mamorina.png",
    centerSkill: {
      hpPercent: 9,
      atkPercent: 1,
      affects: {
        tribes: ["Charming"]
      }
    }
  },
  {
    id: "yokaiju",
    name: "Yokaiju",
    tribe: "Tough",
    gender: "male",
    saga: "Youma",
    rank: "UZ+",
    hp0: 1780,
    hp10: 2136,
    atk0: 1800,
    atk10: 2160,
    image: "Uz+/Yokaiju.png",
    centerSkill: {
      hpPercent: 7,
      atkPercent: 3,
      affects: {
        tribes: ["Tough"]
      }
    }
  },
  {
    id: "wedding-megumin",
    name: "Wedding Megumin",
    tribe: "Brave",
    gender: "female",
    saga: "Konosuba",
    rank: "UZ+",
    hp0: 1640,
    hp10: 1968,
    atk0: 1758,
    atk10: 2110,
    image: "Uz+/Weddingmegumin.png",
    centerSkill: {
      hpPercent: 7,
      atkPercent: 13,
      affects: {
        sagas: ["Konosuba"]
      }
    }
  },
  {
    id: "supernova-asu",
    name: "Supernova Asu",
    tribe: "Heartful",
    gender: "male",
    saga: "Galaxy Watch",
    rank: "UZ+",
    hp0: 1687,
    hp10: 2024,
    atk0: 1643,
    atk10: 1972,
    image: "Uz+/Supernovaasu.png",
    centerSkill: {
      hpPercent: 7,
      atkPercent: 3,
      affects: {
        tribes: ["Heartful"]
      }
    }
  },
  {
    id: "orihime-mika",
    name: "Orihime Mika",
    tribe: "Mysterious",
    gender: "female",
    saga: "Nyanbo",
    rank: "UZ+",
    hp0: 1726,
    hp10: 2071,
    atk0: 1676,
    atk10: 2011,
    image: "Uz+/Orihimemika.png",
    centerSkill: {
      hpPercent: 4,
      atkPercent: 6,
      affects: {
        tribes: ["Mysterious"]
      }
    }
  },
  {
    id: "12-super-gods-jibanyan",
    name: "12 Super Gods Jibanyan",
    tribe: "Tough",
    gender: "male",
    saga: "12th anniversary",
    rank: "UZ+",
    hp0: 1672,
    hp10: 2006,
    atk0: 1658,
    atk10: 1990,
    image: "Uz+/12supergodsjibanyan.png",
    centerSkill: {
      hpPercent: 8,
      atkPercent: 2,
      affects: {
        tribes: ["Tough"]
      }
    },
    unity: {
      percent: 26
    }
  },
  {
    id: "young-bourgeoisG",
    name: "Young BourgeoisG",
    tribe: "Heartful",
    gender: "male",
    saga: "100 Tales",
    rank: "UZ+",
    hp0: 1635,
    hp10: 1962,
    atk0: 1695,
    atk10: 2034,
    image: "Uz+/Youngbourgeoisg.png",
    centerSkill: {
      hpPercent: 9,
      atkPercent: 6,
      affects: {
        sagas: ["100 Tales"]
      }
    }
  },
  {
    id: "headasteam",
    name: "Headasteam",
    tribe: "Heartful",
    gender: "male",
    saga: "Youma",
    rank: "UZ+",
    hp0: 1810,
    hp10: 2172,
    atk0: 1770,
    atk10: 2124,
    image: "Uz+/Headasteam.png",
    centerSkill: {
      hpPercent: 3,
      atkPercent: 7,
      affects: {
        tribes: ["Heartful"]
      }
    }
  },
  {
    id: "master-roxy",
    name: "Master Roxy",
    tribe: "Slippery",
    gender: "female",
    saga: "Mushoku Tensei",
    rank: "UZ+",
    hp0: 1630,
    hp10: 1956,
    atk0: 1700,
    atk10: 2040,
    image: "Uz+/Masterroxy.png",
    centerSkill: {
      hpPercent: 8,
      atkPercent: 2,
      affects: {
        tribes: ["Slippery"]
      }
    },
    unity: {
      percent: 26
    }
  },
  {
    id: "ancient-enma",
    name: "Ancient Enma",
    tribe: "Enma",
    gender: "male",
    saga: "100 Tales",
    rank: "UZ+",
    hp0: 1565,
    hp10: 1878,
    atk0: 1765,
    atk10: 2118,
    image: "Uz+/Ancientenma.png",
    centerSkill: {
      hpPercent: 6,
      atkPercent: 4,
      affects: {
        tribes: ["Enma"]
      }
    }
  },
  {
    id: "Dame-dedtime",
    name: "Dame Dedtime",
    tribe: "Shady",
    gender: "female",
    saga: "Nyanbo",
    rank: "UZ+",
    hp0: 1756,
    hp10: 2107,
    atk0: 1641,
    atk10: 1969,
    image: "Uz+/Damededtime.png",
    centerSkill: {
      hpPercent: 7,
      atkPercent: 7,
      affects: {
        tribes: ["Shady"]
      }
    },
    unity: {
      percent: 26
    }
  },
  {
    id: "demon-lord-rimuru",
    name: "Demon Lord Rimuru",
    tribe: "Eerie",
    gender: "male",
    saga: "Tensura",
    rank: "UZ+",
    hp0: 1600,
    hp10: 1920,
    atk0: 1730,
    atk10: 2076,
    image: "Uz+/Demonlordrimuru.png",
    centerSkill: {
      hpPercent: 5,
      atkPercent: 5,
      affects: {
        tribes: ["Eerie"]
      }
    },
    unity: {
      percent: 26
    }
  },
  {
    id: "mikazuki",
    name: "Mikazuki",
    tribe: "Charming",
    gender: "female",
    saga: "Galaxy Watch",
    rank: "UZ+",
    hp0: 1683,
    hp10: 2020,
    atk0: 1647,
    atk10: 1976,
    image: "Uz+/Mikazuki.png",
    centerSkill: {
      hpPercent: 6,
      atkPercent: 2,
      affects: {
        genders: ["female"]
      }
    }
  },
  {
    id: "retinado",
    name: "Retinado",
    tribe: "Eerie",
    gender: "male",
    saga: "Youma",
    rank: "UZ+",
    hp0: 1739,
    hp10: 2087,
    atk0: 1841,
    atk10: 2209,
    image: "Uz+/Retinado.png",
    centerSkill: {
      hpPercent: 3,
      atkPercent: 7,
      affects: {
        tribes: ["Eerie"]
      }
    }
  },
  {
    id: "sport-day-blizzaria",
    name: "Sport Day Blizzaria",
    tribe: "Charming",
    gender: "female",
    saga: "100 Tales",
    rank: "UZ+",
    hp0: 1631,
    hp10: 1957,
    atk0: 1699,
    atk10: 2039,
    image: "Uz+/Sportdayblizzaria.png",
    centerSkill: {
      hpPercent: 2,
      atkPercent: 6,
      affects: {
        genders: ["female"]
      }
    },
    femaleUnity: {
      hpPercent: 24,
      atkPercent: 18
    }
  },
  {
    id: "halloween-marine",
    name: "Halloween Marine",
    tribe: "Slippery",
    gender: "female",
    saga: "Hololive",
    rank: "UZ+",
    hp0: 1628,
    hp10: 1954,
    atk0: 1648,
    atk10: 1978,
    image: "Uz+/Halloweenmarine.png",
    centerSkill: {
      hpPercent: 5,
      atkPercent: 5,
      affects: {
        tribes: ["Slippery"]
      }
    },
    unity: {
      percent: 26
    }
  },
  {
    id: "punipuni-kakusei-katie",
    name: "Puni Puni Kakusei Katie",
    tribe: "Charming",
    gender: "female",
    saga: "Nyanbo",
    rank: "UZ+",
    hp0: 1697,
    hp10: 2036,
    atk0: 1700,
    atk10: 2040,
    image: "Uz+/Punipunikakuseikatei.png",
    centerSkill: {
      hpPercent: 5,
      atkPercent: 5,
      affects: {
        tribes: ["Charming"]
      }
    }
  },
  {
    id: "king-jibanyan",
    name: "King Jibanyan",
    tribe: "Charming",
    gender: "male",
    saga: "10th puni anniversary",
    rank: "UZ+",
    hp0: 1660,
    hp10: 1992,
    atk0: 1670,
    atk10: 2004,
    image: "Uz+/Kingjibanyan.png",
    centerSkill: {
      hpPercent: 1,
      atkPercent: 9,
      affects: {
        tribes: ["Charming"]
      }
    },
    unity: {
      percent: 26
    }
  },
  {
    id: "parade-enma",
    name: "Parade Enma",
    tribe: "Enma",
    gender: "male",
    saga: "10th puni anniversary",
    rank: "UZ+",
    hp0: 1670,
    hp10: 2004,
    atk0: 1660,
    atk10: 1992,
    image: "Uz+/Paradeenma.png",
    centerSkill: {
      hpPercent: 5,
      atkPercent: 5,
      affects: {
        tribes: ["Enma"]
      }
    }
  },
  {
    id: "king-komasan",
    name: "King Komasan",
    tribe: "Charming",
    gender: "male",
    saga: "10th puni anniversary",
    rank: "UZ+",
    hp0: 1680,
    hp10: 2016,
    atk0: 1716,
    atk10: 2059,
    image: "Uz+/Kingkomasan.png",
    centerSkill: {
      hpPercent: 5,
      atkPercent: 5,
      affects: {
        tribes: ["Charming"]
      }
    }
  },
  {
    id: "puni-king",
    name: "Puni King",
    tribe: "Brave",
    gender: "male",
    saga: "10th puni anniversary",
    rank: "UZ+",
    hp0: 1647,
    hp10: 1976,
    atk0: 1683,
    atk10: 2020,
    image: "Uz+/Puniking.png",
    centerSkill: {
      hpPercent: 5,
      atkPercent: 5,
      affects: {
        tribes: ["Brave"]
      }
    },
    unity: {
      percent: 26
    }
  },
  {
    id: "zazel-tentacles",
    name: "Zazel (tentacles)",
    tribe: "Slippery",
    gender: "male",
    saga: "Youma",
    rank: "UZ+",
    hp0: 1831,
    hp10: 2197,
    atk0: 1749,
    atk10: 2099,
    image: "Uz+/Zazel(tentacles).png",
    centerSkill: {
      hpPercent: 9,
      atkPercent: 1,
      affects: {
        tribes: ["Slippery"]
      }
    }
  },
  {
    id: "frieren",
    name: "Frieren",
    tribe: "Slippery",
    gender: "female",
    saga: "Frieren Beyond Journeys End",
    rank: "UZ+",
    hp0: 1672,
    hp10: 2006,
    atk0: 1658,
    atk10: 1990,
    image: "Uz+/Frieren.png",
    centerSkill: {
      hpPercent: 7,
      atkPercent: 3,
      affects: {
        tribes: ["Slippery"]
      }
    }
  },
  {
    id: "himmel",
    name: "Himmel",
    tribe: "Brave",
    gender: "male",
    saga: "Frieren Beyond Journeys End",
    rank: "UZ+",
    hp0: 1671,
    hp10: 2005,
    atk0: 1659,
    atk10: 1991,
    image: "Uz+/Himmel.png",
    centerSkill: {
      hpPercent: 4,
      atkPercent: 6,
      affects: {
        tribes: ["Brave"]
      }
    },
    unity: {
      percent: 26
    }
  },
  {
    id: "super-puni-king",
    name: "Super Puni King",
    tribe: "Tough",
    gender: "male",
    saga: "10th puni anniversary",
    rank: "UZ+",
    hp0: 1650,
    hp10: 1980,
    atk0: 1680,
    atk10: 2016,
    image: "Uz+/Superpuniking.png",
    centerSkill: {
      hpPercent: 6,
      atkPercent: 4,
      affects: {
        tribes: ["Tough"]
      }
    },
    unity: {
      percent: 26
    }
  },
  {
    id: "World-Dedtime",
    name: "World Dedtime",
    tribe: "Shady",
    gender: "female",
    saga: "10th puni anniversary",
    rank: "UZ+",
    hp0: 1624,
    hp10: 1949,
    atk0: 1704,
    atk10: 2045,
    image: "Uz+/Worlddedtime.png",
    centerSkill: {
      hpPercent: 9,
      atkPercent: 1,
      affects: {
        tribes: ["Shady"]
      }
    }
  },
  {
    id: "Yabusame-Zazel",
    name: "Yabusame Zazel",
    tribe: "Shady",
    gender: "male",
    saga: "Nyanbo",
    rank: "UZ+",
    hp0: 1632,
    hp10: 1958,
    atk0: 1765,
    atk10: 2118,
    image: "Uz+/Yabusamezazel.png",
    centerSkill: {
      hpPercent: 4,
      atkPercent: 6,
      affects: {
        tribes: ["Shady"]
      }
    },
    unity: {
      percent: 26
    }
  },
  {
    id: "destin-billows",
    name: "Destin Billows",
    tribe: "Brave",
    gender: "male",
    saga: "Inazuma Eleven",
    rank: "UZ+",
    hp0: 1697,
    hp10: 2036,
    atk0: 1633,
    atk10: 1960,
    image: "Uz+/Destinbillows.png",
    centerSkill: {
      hpPercent: 14,
      atkPercent: 6,
      affects: {
        sagas: ["Inazuma Eleven"]
      }
    }
  },
  {
    id: "harper-evans",
    name: "Harper Evans",
    tribe: "Tough",
    gender: "male",
    saga: "Inazuma Eleven",
    rank: "UZ+",
    hp0: 1707,
    hp10: 2048,
    atk0: 1688,
    atk10: 2026,
    image: "Uz+/Harperevans.png",
    centerSkill: {
      hpPercent: 5,
      atkPercent: 5,
      affects: {
        tribes: ["Tough"]
      }
    }
  },
  {
    id: "mera-shishino-(3rd outfit)",
    name: "Mera Shishino (3rd outfit)",
    tribe: "Brave",
    gender: "female",
    saga: "Idol Royale",
    rank: "UZ+",
    hp0: 1665,
    hp10: 1998,
    atk0: 1665,
    atk10: 1998,
    image: "Uz+/Merashishino(3rdoutfit).png",
    centerSkill: {
      hpPercent: 2,
      atkPercent: 6,
      affects: {
        genders: ["female"]
      }
    },
    unity: {
      hpPercent: 26,
      atkPercent: 30,
      condition: {
        saga: "Idol Royale"
      }
    }
  },
  {
    id: "ashuramii",
    name: "AshuRamii",
    tribe: "Tough",
    gender: "female",
    saga: "Idol Royale",
    rank: "UZ+",
    hp0: 1652,
    hp10: 1982,
    atk0: 1678,
    atk10: 2014,
    image: "Uz+/Ashuramii.png",
    centerSkill: {
      hpPercent: 1,
      atkPercent: 7,
      affects: {
        genders: ["female"]
      }
    }
  },
  {
    id: "massiface",
    name: "Massiface",
    tribe: "Tough",
    gender: "male",
    saga: "Youma",
    rank: "UZ+",
    hp0: 1863,
    hp10: 2236,
    atk0: 1717,
    atk10: 2060,
    image: "Uz+/Massiface.png",
    centerSkill: {
      hpPercent: 4,
      atkPercent: 6,
      affects: {
        tribes: ["Tough"]
      }
    }
  },
  {
    id: "lelouch",
    name: "Lelouch",
    tribe: "Shady",
    gender: "male",
    saga: "Code Geass",
    rank: "UZ+",
    hp0: 1692,
    hp10: 2030,
    atk0: 1638,
    atk10: 1966,
    image: "Uz+/Lelouch.png",
    centerSkill: {
      hpPercent: 3,
      atkPercent: 7,
      affects: {
        tribes: ["Shady"]
      }
    }
  },
  {
    id: "suzaku",
    name: "Suzaku",
    tribe: "Brave",
    gender: "male",
    saga: "Code Geass",
    rank: "UZ+",
    hp0: 1669,
    hp10: 2003,
    atk0: 1661,
    atk10: 1993,
    image: "Uz+/Suzaku.png",
    centerSkill: {
      hpPercent: 6,
      atkPercent: 4,
      affects: {
        tribes: ["Brave"]
      }
    },
    unity: {
      percent: 26
    }
  },
  {
    id: "valentine-mika",
    name: "Valentine Mika",
    tribe: "Heartful",
    gender: "female",
    saga: "Nyanbo",
    rank: "UZ+",
    hp0: 1730,
    hp10: 2076,
    atk0: 1667,
    atk10: 2000,
    image: "Uz+/Valentinemika.png",
    centerSkill: {
      hpPercent: 4,
      atkPercent: 6,
      affects: {
        tribes: ["Heartful"]
      }
    },
    unity: {
      percent: 26
    }
  },
  {
    id: "valentine-orochi",
    name: "Valentine Orochi",
    tribe: "Slippery",
    gender: "male",
    saga: "100 Tales",
    rank: "UZ+",
    hp0: 1663,
    hp10: 1996,
    atk0: 1667,
    atk10: 2000,
    image: "Uz+/Valentineorochi.png",
    centerSkill: {
      hpPercent: 6,
      atkPercent: 4,
      affects: {
        tribes: ["Slippery"]
      }
    },
    unity: {
      hpPercent: 26,
      atkPercent: 30,
      condition: {
        saga: "100 Tales"
      }
    }
  },
  {
    id: "ukoi-tanone",
    name: "Ukoi Tanone",
    tribe: "Eerie",
    gender: "female",
    saga: "100 Tales",
    rank: "UZ+",
    hp0: 1648,
    hp10: 1978,
    atk0: 1682,
    atk10: 2018,
    image: "Uz+/Ukoitanone.png",
    centerSkill: {
      hpPercent: 6,
      atkPercent: 4,
      affects: {
        tribes: ["Eerie"]
      }
    }
  },
  {
    id: "bloodybattleprixmika",
    name: "Bloody Battle Grand Prix Mika",
    tribe: "Brave",
    gender: "female",
    saga: "Bloody Popularity Poll",
    rank: "UZ+",
    hp0: 1643,
    hp10: 1972,
    atk0: 1687,
    atk10: 2024,
    image: "Uz+/Bloodybattlegrandprixmika.png",
    centerSkill: {
      hpPercent: 7,
      atkPercent: 5,
      affects: {
        tribes: ["Brave"]
      }
    },
    femaleUnity: {
      hpPercent: 24,
      atkPercent: 18
    }
  },
  {
    id: "great-bloody-battle-god-snottle",
    name: "God Evil Mike Snottle",
    tribe: "Mysterious",
    gender: "male",
    saga: "Bloody Popularity Poll",
    rank: "UZ+",
    hp0: 1696,
    hp10: 2035,
    atk0: 1634,
    atk10: 1961,
    image: "Uz+/Godevilmikesnottle.png",
    centerSkill: {
      hpPercent: 7,
      atkPercent: 5,
      affects: {
        tribes: ["Mysterious"]
      }
    }
  },
  {
    id: "yohko-komashura",
    name: "Yohko Komashura",
    tribe: "Mysterious",
    gender: "male",
    saga: "Color Legend",
    rank: "UZ+",
    hp0: 1939,
    hp10: 2327,
    atk0: 1641,
    atk10: 1969,
    image: "Uz+/Yohkokomasura.png",
    centerSkill: {
      hpPercent: 5,
      atkPercent: 10,
      affects: {
        tribes: ["Mysterious"]
      }
    },
    sameTeamUnity: {
      percent: 26
    }
  },
  {
    id: "mera-shishino-(4thoutfit)",
    name: "Mera Shishino (4th Outfit)",
    tribe: "Brave",
    gender: "female",
    saga: "Idol Royale",
    rank: "UZ+",
    hp0: 1591,
    hp10: 1909,
    atk0: 1739,
    atk10: 2087,
    image: "Uz+/Merashishino(4thoutfit).png",
    centerSkill: {
      hpPercent: 4,
      atkPercent: 6,
      affects: {
        genders: ["female"]
      }
    },
    unity: {
      hpPercent: 26,
      atkPercent: 30,
      condition: {
        saga: "Idol Royale"
      }
    }
  },
  {
    id: "genbu-norika",
    name: "Genbu Norika",
    tribe: "Slippery",
    gender: "female",
    saga: "Idol Royale",
    rank: "UZ+",
    hp0: 1652,
    hp10: 1982,
    atk0: 1678,
    atk10: 2014,
    image: "Uz+/Genbunorika.png",
    centerSkill: {
      hpPercent: 7,
      atkPercent: 5,
      affects: {
        tribes: ["Slippery"]
      }
    }
  },
  {
    id: "agent-x",
    name: "Agent X",
    tribe: "Eerie",
    gender: "male",
    saga: "Youma",
    rank: "UZ+",
    hp0: 1817,
    hp10: 2180,
    atk0: 1763,
    atk10: 2116,
    image: "Uz+/Agentx.png",
    centerSkill: {
      hpPercent: 4,
      atkPercent: 8,
      affects: {
        tribes: ["Eerie"]
      }
    }
  },
  {
    id: "nekomata-okayu-(school)",
    name: "Nekomata Okayu (School)",
    tribe: "Mysterious",
    gender: "female",
    saga: "Hololive",
    rank: "UZ+",
    hp0: 1567,
    hp10: 1880,
    atk0: 1763,
    atk10: 2116,
    image: "Uz+/Nekomataokayu(school).png",
    centerSkill: {
      hpPercent: 8,
      atkPercent: 7,
      affects: {
        sagas: ["Hololive"]
      }
    },
    unity: {
      hpPercent: 26,
      atkPercent: 30,
      condition: {
        saga: "Hololive"
      }
    }
  },
  {
    id: "houshou-marine-(school)",
    name: "Houshou Marine (school)",
    tribe: "Eerie",
    gender: "female",
    saga: "Hololive",
    rank: "UZ+",
    hp0: 1648,
    hp10: 1978,
    atk0: 1682,
    atk10: 2018,
    image: "Uz+/Houshoumarine(school).png",
    centerSkill: {
      hpPercent: 6,
      atkPercent: 6,
      affects: {
        tribes: ["Eerie"]
      }
    }
  },
  {
    id: "tsunomaki-watame-(school)",
    name: "Tsunomaki Watame (School)",
    tribe: "Charming",
    gender: "female",
    saga: "Hololive",
    rank: "UZ+",
    hp0: 1631,
    hp10: 1957,
    atk0: 1699,
    atk10: 2039,
    image: "Uz+/Tsunomakiwatame(school).png",
    centerSkill: {
      hpPercent: 5,
      atkPercent: 7,
      affects: {
        tribes: ["Charming"]
      }
    }
  },
  {
    id: "j-power-transform",
    name: "J Power Transform",
    tribe: "Brave",
    gender: "male",
    saga: "100 Tales",
    rank: "UZ+",
    hp0: 1632,
    hp10: 1958,
    atk0: 1698,
    atk10: 2038,
    image: "Uz+/Jpowertransform.png",
    centerSkill: {
      hpPercent: 12,
      atkPercent: 5,
      affects: {
        sagas: ["100 Tales"]
      }
    }
  },
  {
    id: "nyanjpt",
    name: "Nyanjpt",
    tribe: "Charming",
    gender: "male",
    saga: "100 Tales",
    rank: "UZ+",
    hp0: 1680,
    hp10: 2016,
    atk0: 1650,
    atk10: 1980,
    image: "Uz+/Nyanjpt.png",
    centerSkill: {
      hpPercent: 10,
      atkPercent: 7,
      affects: {
        sagas: ["100 Tales"]
      }
    },
    unity: {
      percent: 26
    }
  },
  {
    id: "red-flash-boushinyan",
    name: "Red Flash Boushinyan",
    tribe: "Brave",
    gender: "male",
    saga: "Color Legend",
    rank: "UZ+",
    hp0: 1892,
    hp10: 2270,
    atk0: 1688,
    atk10: 2026,
    image: "Uz+/Redflashboushinyan.png",
    centerSkill: {
      hpPercent: 5,
      atkPercent: 8,
      affects: {
        tribes: ["Brave"]
      }
    },
    sameTeamUnity: {
      percent: 32
    }
  },
  {
    id: "chansin",
    name: "Chansin (you losed xd)",
    tribe: "Brave",
    gender: "male",
    saga: "Gambler Coin",
    rank: "UZ+",
    hp0: 1815,
    hp10: 2178,
    atk0: 1515,
    atk10: 1818,
    image: "Uz+/Chansin(youlosedxd).png",
    centerSkill: {
      hpPercent: 11,
      atkPercent: 1,
      affects: {
        tribes: ["Brave"]
      }
    }
  },
  {
    id: "victory-last-girakoma",
    name: "Victory Last Girakoma",
    tribe: "Mysterious",
    gender: "male",
    saga: "Gambler Coin",
    rank: "UZ+",
    hp0: 1602,
    hp10: 1922,
    atk0: 1795,
    atk10: 2154,
    image: "Uz+/Victorylastgirakoma.png",
    centerSkill: {
      hpPercent: 1,
      atkPercent: 11,
      affects: {
        tribes: ["Mysterious"]
      }
    },
    unity: {
      percent: 26
    }
  },
  {
    id: "armed-mecha-orochi",
    name: "Armed Mecha Orochi",
    tribe: "Tough",
    gender: "male",
    saga: "100 Tales",
    rank: "UZ+",
    hp0: 1659,
    hp10: 1991,
    atk0: 1671,
    atk10: 2005,
    image: "Uz+/Armedmechaorochi.png",
    centerSkill: {
      hpPercent: 7,
      atkPercent: 5,
      affects: {
        tribes: ["Tough"]
      }
    }
  },
  {
    id: "black-gold-dianyan",
    name: "Black Gold Dianyan",
    tribe: "Brave",
    gender: "male",
    saga: "Nyanbo",
    rank: "UZ+",
    hp0: 1728,
    hp10: 2074,
    atk0: 1699,
    atk10: 2039,
    image: "Uz+/Blackgolddianyan.png",
    centerSkill: {
      hpPercent: 4,
      atkPercent: 8,
      affects: {
        tribes: ["Brave"]
      }
    }
  },
  {
    id: "shadow",
    name: "Shadow",
    tribe: "Shady",
    gender: "male",
    saga: "The Eminence in Shadow",
    rank: "UZ+",
    hp0: 1665,
    hp10: 1998,
    atk0: 1665,
    atk10: 1998,
    image: "Uz+/Shadow.png",
    centerSkill: {
      hpPercent: 7,
      atkPercent: 5,
      affects: {
        tribes: ["Shady"]
      }
    },
    unity: {
      percent: 26
    }
  },
  {
    id: "alpha",
    name: "Alpha",
    tribe: "Slippery",
    gender: "female",
    saga: "The Eminence in Shadow",
    rank: "UZ+",
    hp0: 1679,
    hp10: 2015,
    atk0: 1651,
    atk10: 1981,
    image: "Uz+/Alpha.png",
    centerSkill: {
      hpPercent: 6,
      atkPercent: 6,
      affects: {
        tribes: ["Slippery"]
      }
    }
  },
  {
    id: "beta",
    name: "Beta",
    tribe: "Charming",
    gender: "female",
    saga: "The Eminence in Shadow",
    rank: "UZ+",
    hp0: 1648,
    hp10: 1978,
    atk0: 1682,
    atk10: 2018,
    image: "Uz+/Beta.png",
    centerSkill: {
      hpPercent: 6,
      atkPercent: 6,
      affects: {
        tribes: ["Charming"]
      }
    },
    unity: {
      percent: 26
    }
  },
  {
    id: "delta",
    name: "Delta",
    tribe: "Tough",
    gender: "female",
    saga: "The Eminence in Shadow",
    rank: "UZ+",
    hp0: 1679,
    hp10: 2015,
    atk0: 1651,
    atk10: 1981,
    image: "Uz+/Delta.png",
    centerSkill: {
      hpPercent: 6,
      atkPercent: 6,
      affects: {
        tribes: ["Tough"]
      }
    }
  },
  {
    id: "mera-shishino-(final-outfit)",
    name: "Mera Shishino (Final Outfit)",
    tribe: "Brave",
    gender: "female",
    saga: "Idol Royale",
    rank: "UZ+",
    hp0: 1656,
    hp10: 1987,
    atk0: 1674,
    atk10: 2009,
    image: "Uz+/Merashishino(finaloutfit).png",
    centerSkill: {
      hpPercent: 6,
      atkPercent: 6,
      affects: {
        tribes: ["Brave"]
      }
    }
  },
  {
    id: "kessoku-inori",
    name: "Kessoku Inori",
    tribe: "Heartful",
    gender: "female",
    saga: "Medalist",
    rank: "UZ+",
    hp0: 1675,
    hp10: 2010,
    atk0: 1655,
    atk10: 1986,
    image: "Uz+/Kessokuinori.png",
    centerSkill: {
      hpPercent: 2,
      atkPercent: 10,
      affects: {
        tribes: ["Heartful"]
      }
    },
    unity: {
      percent: 26
    }
  },
  {
    id: "fudo-ouka",
    name: "Fudo Ouka",
    tribe: "Enma",
    gender: "female",
    saga: "Idol Royale",
    rank: "UZ+",
    hp0: 1628,
    hp10: 1954,
    atk0: 1702,
    atk10: 2042,
    image: "Uz+/Fudoouka.png",
    centerSkill: {
      hpPercent: 8,
      atkPercent: 4,
      affects: {
        tribes: ["Enma"]
      }
    },
    unity: {
      percent: 26
    }
  },
  {
    id: "azure-storm-slurpent",
    name: "Azure Storm Slurpent",
    tribe: "Slippery",
    gender: "male",
    saga: "Color Legend",
    rank: "UZ+",
    hp0: 1906,
    hp10: 2287,
    atk0: 1674,
    atk10: 2009,
    image: "Uz+/Azurestormslurpent.png",
    centerSkill: {
      hpPercent: 6,
      atkPercent: 9,
      affects: {
        tribes: ["Slippery"]
      }
    },
    sameTeamUnity: {
      percent: 32
    }
  },
  {
    id: "todoroki-reona-(shine-outfit)",
    name: "Todoroki Reona (Shine Outfit)",
    tribe: "Tough",
    gender: "female",
    saga: "Idol Royale",
    rank: "UZ+",
    hp0: 1676,
    hp10: 2011,
    atk0: 1654,
    atk10: 1985,
    image: "Uz+/Todorokireona(shineoutfit).png",
    centerSkill: {
      hpPercent: 3,
      atkPercent: 7,
      affects: {
        genders: ["female"]
      }
    }
  },
  {
    id: "junkernaut",
    name: "Junkernaut",
    tribe: "Tough",
    gender: "male",
    saga: "Youma",
    rank: "UZ+",
    hp0: 1828,
    hp10: 2194,
    atk0: 1752,
    atk10: 2102,
    image: "Uz+/Junkernaut.png",
    centerSkill: {
      hpPercent: 5,
      atkPercent: 7,
      affects: {
        tribes: ["Tough"]
      }
    },
    unity: {
      percent: 26
    }
  },
  {
    id: "wedding-emilia",
    name: "Wedding Emilia",
    tribe: "Heartful",
    gender: "female",
    saga: "Re:Zero",
    rank: "UZ+",
    hp0: 1576,
    hp10: 1891,
    atk0: 1754,
    atk10: 2105,
    image: "Uz+/Weddingemilia.png",
    centerSkill: {
      hpPercent: 7,
      atkPercent: 5,
      affects: {
        tribes: ["Heartful"]
      }
    },
    unity: {
      percent: 26
    }
  },
  {
    id: "wedding-rem",
    name: "Wedding Rem",
    tribe: "Tough",
    gender: "female",
    saga: "Re:Zero",
    rank: "UZ+",
    hp0: 1673,
    hp10: 2008,
    atk0: 1657,
    atk10: 1988,
    image: "Uz+/Weddingrem.png",
    centerSkill: {
      hpPercent: 4,
      atkPercent: 8,
      affects: {
        tribes: ["Tough"]
      }
    }
  },
  {
    id: "wedding-beatrice",
    name: "Wedding Beatrice",
    tribe: "Mysterious",
    gender: "female",
    saga: "Re:Zero",
    rank: "UZ+",
    hp0: 1672,
    hp10: 2006,
    atk0: 1658,
    atk10: 1990,
    image: "Uz+/Weddingbeatrice.png",
    centerSkill: {
      hpPercent: 7,
      atkPercent: 5,
      affects: {
        tribes: ["Mysterious"]
      }
    }
  },
  {
    id: "super-awakened-emilia",
    name: "Super Awakened Emilia",
    tribe: "Heartful",
    gender: "female",
    saga: "Re:Zero",
    rank: "UZ+",
    hp0: 1672,
    hp10: 2006,
    atk0: 1658,
    atk10: 1990,
    image: "Uz+/Superawakenedemilia.png",
    centerSkill: {
      hpPercent: 6,
      atkPercent: 4,
      affects: {
        tribes: ["Heartful"]
      }
    }
  },
  {
    id: "super-awakened-rem",
    name: "Super Awakened Rem",
    tribe: "Tough",
    gender: "female",
    saga: "Re:Zero",
    rank: "UZ+",
    hp0: 1618,
    hp10: 1942,
    atk0: 1712,
    atk10: 2054,
    image: "Uz+/Superawakenedrem.png",
    centerSkill: {
      hpPercent: 3,
      atkPercent: 7,
      affects: {
        tribes: ["Tough"]
      }
    }
  },
  {
    id: "super-awakened-beatrice",
    name: "Super Awakened Beatrice",
    tribe: "Mysterious",
    gender: "female",
    saga: "Re:Zero",
    rank: "UZ+",
    hp0: 1672,
    hp10: 2006,
    atk0: 1658,
    atk10: 1990,
    image: "Uz+/Superawakenedbeatrice.png",
    centerSkill: {
      hpPercent: 5,
      atkPercent: 5,
      affects: {
        tribes: ["Mysterious"]
      }
    }
  },
  {
    id: "heaven-olight",
    name: "Heaven O'Light",
    tribe: "Heartful",
    gender: "male",
    saga: "100 Tales",
    rank: "UZ+",
    hp0: 1687,
    hp10: 2024,
    atk0: 1643,
    atk10: 1972,
    image: "Uz+/Heavenolight.png",
    centerSkill: {
      hpPercent: 7,
      atkPercent: 10,
      affects: {
        tribes: ["Heartful"]
      }
    }
  },
  {
    id: "blood-rain-hareonna-(shadow)",
    name: "Blood Rain Hareonna (Shadow)",
    tribe: "Eerie",
    gender: "female",
    saga: "100 Tales",
    rank: "UZ+",
    hp0: 1699,
    hp10: 2039,
    atk0: 1631,
    atk10: 1957,
    image: "Uz+/Bloodrainhareonna(shadow).png",
    centerSkill: {
      hpPercent: 11,
      atkPercent: 6,
      affects: {
        sagas: ["100 Tales"]
      }
    }
  },
  {
    id: "green-tree-elderbloom",
    name: "Green Tree Elderbloom",
    tribe: "Heartful",
    gender: "male",
    saga: "Color Legend",
    rank: "UZ+",
    hp0: 1925,
    hp10: 2310,
    atk0: 1655,
    atk10: 1986,
    image: "Uz+/Greentreeelderbloom.png",
    centerSkill: {
      hpPercent: 5,
      atkPercent: 10,
      affects: {
        tribes: ["Heartful"]
      }
    },
    sameTeamUnity: {
      percent: 32
    }
  },
  {
    id: "hareonna",
    name: "Hareonna",
    tribe: "Charming",
    gender: "female",
    saga: "100 Tales",
    rank: "UZ+",
    hp0: 1656,
    hp10: 1987,
    atk0: 1674,
    atk10: 2009,
    image: "Uz+/Hareonna.png",
    centerSkill: {
      hpPercent: 7,
      atkPercent: 5,
      affects: {
        tribes: ["Charming"]
      }
    }
  },
  {
    id: "hibari-akane-(hydrangea-outfit)",
    name: "Hibari Akane (Hydrangea Outfit)",
    tribe: "Mysterious",
    gender: "female",
    saga: "Nyanbo",
    rank: "UZ+",
    hp0: 1734,
    hp10: 2081,
    atk0: 1663,
    atk10: 1996,
    image: "Uz+/Hibariakana(hydrangeaoutfit).png",
    centerSkill: {
      hpPercent: 6,
      atkPercent: 6,
      affects: {
        tribes: ["Mysterious"]
      }
    },
    unity: {
      percent: 26
    }
  },
  {
    id: "warrior-orochi",
    name: "Warrior Orochi",
    tribe: "Slippery",
    gender: "male",
    saga: "13th anniversary",
    rank: "UZ+",
    hp0: 1562,
    hp10: 1874,
    atk0: 1768,
    atk10: 2122,
    image: "Uz+/Warriororochi.png",
    centerSkill: {
      hpPercent: 5,
      atkPercent: 7,
      affects: {
        tribes: ["Slippery"]
      }
    }
  },
  {
    id: "demon-lord-kuubou",
    name: "Demon Lord Kuubou",
    tribe: "Eerie",
    gender: "male",
    saga: "13th anniversary",
    rank: "UZ+",
    hp0: 1632,
    hp10: 1958,
    atk0: 1698,
    atk10: 2038,
    image: "Uz+/Demonlordkuubou.png",
    centerSkill: {
      hpPercent: 7,
      atkPercent: 5,
      affects: {
        tribes: ["Eerie"]
      }
    }
  },
  {
    id: "horse-girl-bunny-mint",
    name: "Horse Girl Bunny Mint",
    tribe: "Mysterious",
    gender: "female",
    saga: "100 Tales",
    rank: "UZ+",
    hp0: 1689,
    hp10: 2027,
    atk0: 1641,
    atk10: 1969,
    image: "Uz+/Horsegirlbunnymint.png",
    centerSkill: {
      hpPercent: 5,
      atkPercent: 7,
      affects: {
        tribes: ["Mysterious"]
      }
    }
  },
  {
    id: "hunting-outfit-otohime",
    name: "Hunting Outfit Otohime",
    tribe: "Charming",
    gender: "female",
    saga: "100 Tales",
    rank: "UZ+",
    hp0: 1645,
    hp10: 1974,
    atk0: 1685,
    atk10: 2022,
    image: "Uz+/Huntingoutfitotohime.png",
    centerSkill: {
      hpPercent: 8,
      atkPercent: 4,
      affects: {
        tribes: ["Charming"]
      }
    }
  },
  {
    id: "horse-girl-jaen",
    name: "Horse Girl Jaen",
    tribe: "Enma",
    gender: "female",
    saga: "100 Tales",
    rank: "UZ+",
    hp0: 1606,
    hp10: 1927,
    atk0: 1724,
    atk10: 2069,
    image: "Uz+/Horsegirljaen.png",
    centerSkill: {
      hpPercent: 6,
      atkPercent: 6,
      affects: {
        tribes: ["Enma"]
      }
    }
  },
  {
    id: "asuna",
    name: "Asuna",
    tribe: "Tough",
    gender: "female",
    saga: "Sword Art Online",
    rank: "UZ+",
    hp0: 1635,
    hp10: 1962,
    atk0: 1695,
    atk10: 2034,
    image: "Uz+/Asuna.png",
    centerSkill: {
      hpPercent: 3,
      atkPercent: 9,
      affects: {
        tribes: ["Tough"]
      }
    }
  },
  {
    id: "sinnon",
    name: "Sinon",
    tribe: "Mysterious",
    gender: "female",
    saga: "Sword Art Online",
    rank: "UZ+",
    hp0: 1627,
    hp10: 1952,
    atk0: 1703,
    atk10: 2044,
    image: "Uz+/Sinnon.png",
    centerSkill: {
      hpPercent: 9,
      atkPercent: 3,
      affects: {
        tribes: ["Mysterious"]
      }
    }
  },
  {
    id: "limit-broken-sighborg-y",
    name: "Limit Broken Sighborg Y",
    tribe: "Tough",
    gender: "male",
    saga: "100 Tales",
    rank: "UZ+",
    hp0: 1680,
    hp10: 2016,
    atk0: 1650,
    atk10: 1980,
    image: "Uz+/Limitbrokensighborgy.png",
    centerSkill: {
      hpPercent: 13,
      atkPercent: 4,
      affects: {
        tribes: ["Tough"]
      }
    },
    unity: {
      percent: 26
    }
  },
  {
    id: "summer-vacation-blizzaria",
    name: "Summer Vacation Blizzaria",
    tribe: "Charming",
    gender: "female",
    saga: "100 Tales",
    rank: "UZ+",
    hp0: 1697,
    hp10: 2036,
    atk0: 1633,
    atk10: 1960,
    image: "Uz+/Summervacationblizzaria.png",
    centerSkill: {
      hpPercent: 9,
      atkPercent: 3,
      affects: {
        tribes: ["Charming"]
      }
    }
  },
  {
    id: "ichika-swimsuit",
    name: "Ichika Swimsuit",
    tribe: "Mysterious",
    gender: "female",
    saga: "The Quintessential Quintuplets",
    rank: "UZ+",
    hp0: 1654,
    hp10: 1985,
    atk0: 1676,
    atk10: 2011,
    image: "Uz+2/Ichikanakano(swimsuit).png",
    centerSkill: {
      hpPercent: 7,
      atkPercent: 15,
      affects: {
        sagas: ["The Quintessential Quintuplets"]
      }
    },
    femaleUnity: {
      hpPercent: 24,
      atkPercent: 18
    }
  },
  {
    id: "nino-swimsuit",
    name: "Nino Swimsuit",
    tribe: "Eerie",
    gender: "female",
    saga: "The Quintessential Quintuplets",
    rank: "UZ+",
    hp0: 1554,
    hp10: 1865,
    atk0: 1776,
    atk10: 2131,
    image: "Uz+2/Ninonakano(swimsuit).png",
    centerSkill: {
      hpPercent: 7,
      atkPercent: 15,
      affects: {
        sagas: ["The Quintessential Quintuplets"]
      }
    },
    femaleUnity: {
      hpPercent: 24,
      atkPercent: 18
    }
  },
  {
    id: "miku-swimsuit",
    name: "Miku Swimsuit",
    tribe: "Shady",
    gender: "female",
    saga: "The Quintessential Quintuplets",
    rank: "UZ+",
    hp0: 1637,
    hp10: 1964,
    atk0: 1693,
    atk10: 2032,
    image: "Uz+2/Mikunakano(swimsuit).png",
    centerSkill: {
      hpPercent: 7,
      atkPercent: 15,
      affects: {
        sagas: ["The Quintessential Quintuplets"]
      }
    },
    femaleUnity: {
      hpPercent: 24,
      atkPercent: 18
    }
  },
  {
    id: "yotsuba-swimsuit",
    name: "Yotsuba Swimsuit",
    tribe: "Heartful",
    gender: "female",
    saga: "The Quintessential Quintuplets",
    rank: "UZ+",
    hp0: 1655,
    hp10: 1986,
    atk0: 1675,
    atk10: 2010,
    image: "Uz+2/Yotsubanakano(swimsuit).png",
    centerSkill: {
      hpPercent: 7,
      atkPercent: 15,
      affects: {
        sagas: ["The Quintessential Quintuplets"]
      }
    },
    femaleUnity: {
      hpPercent: 24,
      atkPercent: 18
    }
  },
  {
    id: "itsuki-swimsuit",
    name: "Itsuki Swimsuit",
    tribe: "Brave",
    gender: "female",
    saga: "The Quintessential Quintuplets",
    rank: "UZ+",
    hp0: 1662,
    hp10: 1994,
    atk0: 1668,
    atk10: 2002,
    image: "Uz+2/Itsukinakano(swimsuit).png",
    centerSkill: {
      hpPercent: 7,
      atkPercent: 15,
      affects: {
        sagas: ["The Quintessential Quintuplets"]
      }
    },
    femaleUnity: {
      hpPercent: 24,
      atkPercent: 18
    }
  },
  {
    id: "super-awakened-ichika-happy-wedding",
    name: "Super Awakened Ichika Happy Wedding",
    tribe: "Mysterious",
    gender: "female",
    saga: "The Quintessential Quintuplets",
    rank: "UZ+",
    hp0: 1602,
    hp10: 1922,
    atk0: 1728,
    atk10: 2074,
    image: "Uz+2/Superawakenedichika(happywedding).png",
    centerSkill: {
      hpPercent: 5,
      atkPercent: 5,
      affects: {
        tribes: ["Mysterious"]
      }
    }
  },
  {
    id: "super-awakened-nino-happy-wedding",
    name: "Super Awakened Nino Happy Wedding",
    tribe: "Eerie",
    gender: "female",
    saga: "The Quintessential Quintuplets",
    rank: "UZ+",
    hp0: 1702,
    hp10: 2042,
    atk0: 1628,
    atk10: 1954,
    image: "Uz+2/Superawakenednino(happywedding).png",
    centerSkill: {
      hpPercent: 5,
      atkPercent: 5,
      affects: {
        tribes: ["Eerie"]
      }
    }
  },
  {
    id: "super-awakened-miku-happy-wedding",
    name: "Super Awakened Miku Happy Wedding",
    tribe: "Shady",
    gender: "female",
    saga: "The Quintessential Quintuplets",
    rank: "UZ+",
    hp0: 1704,
    hp10: 2045,
    atk0: 1626,
    atk10: 1951,
    image: "Uz+2/Superawakenedmiku(happywedding).png",
    centerSkill: {
      hpPercent: 5,
      atkPercent: 5,
      affects: {
        tribes: ["Shady"]
      }
    }
  },
  {
    id: "super-awakened-yotsuba-happy-wedding",
    name: "Super Awakened Yotsuba Happy Wedding",
    tribe: "Heartful",
    gender: "female",
    saga: "The Quintessential Quintuplets",
    rank: "UZ+",
    hp0: 1661,
    hp10: 1993,
    atk0: 1669,
    atk10: 2003,
    image: "Uz+2/Superawakenedyotsuba(happywedding).png",
    centerSkill: {
      hpPercent: 5,
      atkPercent: 5,
      affects: {
        tribes: ["Heartful"]
      }
    }
  },
  {
    id: "super-awakened-itsuki-happy-wedding",
    name: "Super Awakened Itsuki Happy Wedding",
    tribe: "Brave",
    gender: "female",
    saga: "The Quintessential Quintuplets",
    rank: "UZ+",
    hp0: 1685,
    hp10: 2022,
    atk0: 1645,
    atk10: 1974,
    image: "Uz+2/Superawakeneditsuki(happywedding).png",
    centerSkill: {
      hpPercent: 5,
      atkPercent: 5,
      affects: {
        tribes: ["Brave"]
      }
    }
  },
  {
    id: "hog-snow-white",
    name: "HOG Snow White",
    tribe: "Mysterious",
    gender: "female",
    saga: "",
    rank: "UZ+",
    hp0: 1661,
    hp10: 1993,
    atk0: 1669,
    atk10: 2003,
    image: "Uz+2/Hogsnowwhite.png",
    centerSkill: {
      hpPercent: 4,
      atkPercent: 8,
      affects: {
        tribes: ["Mysterious"]
      }
    }
  },
  {
    id: "yog-eterna-queen",
    name: "YOG Eterna Queen",
    tribe: "Eerie",
    gender: "female",
    saga: "",
    rank: "UZ+",
    hp0: 1678,
    hp10: 2014,
    atk0: 1652,
    atk10: 1982,
    image: "Uz+2/Yogeternaqueen.png",
    centerSkill: {
      hpPercent: 8,
      atkPercent: 4,
      affects: {
        tribes: ["Eerie"]
      }
    }
  },
  {
    id: "hog-cinderella",
    name: "HOG Cinderella",
    tribe: "Heartful",
    gender: "female",
    saga: "100 Tales",
    rank: "UZ+",
    hp0: 1699,
    hp10: 2039,
    atk0: 1631,
    atk10: 1957,
    image: "Uz+2/Hogcinderella.png",
    centerSkill: {
      hpPercent: 6,
      atkPercent: 11,
      affects: {
        sagas: ["100 Tales"]
      }
    }
  },
  {
    id: "houshou-marine-autumn",
    name: "Houshou Marine (Autumn)",
    tribe: "Eerie",
    gender: "female",
    saga: "Hololive",
    rank: "UZ+",
    hp0: 1660,
    hp10: 1992,
    atk0: 1670,
    atk10: 2004,
    image: "Uz+2/Houshoumarine(autumn).png",
    centerSkill: {
      hpPercent: 5,
      atkPercent: 7,
      affects: {
        tribes: ["Eerie"]
      }
    }
  },
  {
    id: "shirogane-noel-autumn",
    name: "Shirogane Noel (Autumn)",
    tribe: "Heartful",
    gender: "female",
    saga: "Hololive",
    rank: "UZ+",
    hp0: 1646,
    hp10: 1975,
    atk0: 1684,
    atk10: 2021,
    image: "Uz+2/Shiroganenoel(autumn).png",
    centerSkill: {
      hpPercent: 5,
      atkPercent: 7,
      affects: {
        tribes: ["Heartful"]
      }
    }
  },
  {
    id: "oozora-subaru-autumn",
    name: "Oozora Subaru (Autumn)",
    tribe: "Brave",
    gender: "female",
    saga: "Hololive",
    rank: "UZ+",
    hp0: 1698,
    hp10: 2038,
    atk0: 1632,
    atk10: 1958,
    image: "Uz+2/Oozorasubaru(autumn).png",
    centerSkill: {
      hpPercent: 8,
      atkPercent: 4,
      affects: {
        tribes: ["Brave"]
      }
    }
  },
  {
    id: "vampire-nanda",
    name: "Vampire Nanda",
    tribe: "Slippery",
    gender: "male",
    saga: "",
    rank: "UZ+",
    hp0: 1572,
    hp10: 1886,
    atk0: 1758,
    atk10: 2110,
    image: "Uz+2/Vampirenanda.png",
    centerSkill: {
      hpPercent: 4,
      atkPercent: 8,
      affects: {
        tribes: ["Slippery"]
      }
    }
  },
  {
    id: "wolf-girl-blizzaria",
    name: "Wolf Girl Blizzaria",
    tribe: "Charming",
    gender: "female",
    saga: "",
    rank: "UZ+",
    hp0: 1700,
    hp10: 2040,
    atk0: 1630,
    atk10: 1956,
    image: "Uz+2/Wolfgirlblizzaria.png",
    centerSkill: {
      hpPercent: 4,
      atkPercent: 6,
      affects: {
        genders: ["female"]
      }
    }
  },
  {
    id: "witch-mermadonna",
    name: "Witch Mermadonna",
    tribe: "Heartful",
    gender: "female",
    saga: "",
    rank: "UZ+",
    hp0: 1691,
    hp10: 2029,
    atk0: 1639,
    atk10: 1967,
    image: "Uz+2/Witchmermadonna.png",
    centerSkill: {
      hpPercent: 8,
      atkPercent: 4,
      affects: {
        tribes: ["Heartful"]
      }
    }
  },
  {
    id: "blocking",
    name: "Blocking",
    tribe: "Tough",
    gender: "male",
    saga: "Block",
    rank: "UZ+",
    hp0: 1766,
    hp10: 2119,
    atk0: 1731,
    atk10: 2077,
    image: "Uz+2/Blocking.png",
    centerSkill: {
      hpPercent: 10,
      atkPercent: 2,
      affects: {
        tribes: ["Tough"]
      }
    }
  },
  {
    id: "block-jibanyan",
    name: "Block Jibanyan",
    tribe: "Charming",
    gender: "male",
    saga: "Block",
    rank: "UZ+",
    hp0: 1666,
    hp10: 1999,
    atk0: 1831,
    atk10: 2197,
    image: "Uz+2/Blockjibanyan.png",
    centerSkill: {
      hpPercent: 10,
      atkPercent: 2,
      affects: {
        tribes: ["Charming"]
      }
    }
  },
  {
    id: "block-punigami",
    name: "Block Punigami",
    tribe: "Charming",
    gender: "female",
    saga: "Block",
    rank: "UZ+",
    hp0: 1748,
    hp10: 2098,
    atk0: 1749,
    atk10: 2099,
    image: "Uz+2/Blockpunigami.png",
    centerSkill: {
      hpPercent: 11,
      atkPercent: 1,
      affects: {
        tribes: ["Charming"]
      }
    }
  },
  {
    id: "limit-broken-rinne",
    name: "Limit Broken Rinne",
    tribe: "Enma",
    gender: "male",
    saga: "100 Tales",
    rank: "UZ+",
    hp0: 1677,
    hp10: 2012,
    atk0: 1653,
    atk10: 1984,
    image: "Uz+2/Limitbrokenrinne.png",
    centerSkill: {
      hpPercent: 5,
      atkPercent: 12,
      affects: {
        sagas: ["100 Tales"]
      }
    },
    unity: {
      percent: 26
    }
  },
  {
    id: "limit-broken-gogogo-gf",
    name: "Limit Broken Gogogo GF",
    tribe: "Shady",
    gender: "male",
    saga: "",
    rank: "UZ+",
    hp0: 1674,
    hp10: 2009,
    atk0: 1656,
    atk10: 1987,
    image: "Uz+2/Limitbrokengogogogf.png",
    centerSkill: {
      hpPercent: 6,
      atkPercent: 6,
      affects: {
        tribes: ["Shady"]
      }
    }
  },
  {
    id: "cross-enma",
    name: "Cross Enma",
    tribe: "Enma",
    gender: "male",
    saga: "10th anniversary event",
    rank: "UZ",
    hp0: 1447,
    hp10: 1736,
    atk0: 1441,
    atk10: 1729,
    image: "Uz/Crossenma.png"
  },
  {
    id: "shuka-fes",
    name: "Shuka FES",
    tribe: "Charming",
    gender: "female",
    saga: "Shuka Festival",
    rank: "UZ",
    hp0: 1476,
    hp10: 1771,
    atk0: 1423,
    atk10: 1708,
    image: "Uz/Shukafes.png"
  },
  {
    id: "youma-choujin-ken",
    name: "Youma Choujin Ken",
    tribe: "Brave",
    gender: "male",
    saga: "Youmajin",
    rank: "UZ",
    hp0: 1476,
    hp10: 1771,
    atk0: 1424,
    atk10: 1709,
    image: "Uz/Youmachoujinken.png"
  },
  {
    id: "zouchouten-kegare",
    name: "Zouchouten Kegare",
    tribe: "Slippery",
    gender: "male",
    saga: "Puni God Darkness",
    rank: "UZ",
    hp0: 1478,
    hp10: 1774,
    atk0: 1422,
    atk10: 1706,
    image: "Uz/Zouchoutenkegare.png"
  },
  {
    id: "beachside-setsuna",
    name: "Beachside Setsuna",
    tribe: "Heartful",
    gender: "female",
    saga: "Nyanbo",
    rank: "UZ",
    hp0: 1468,
    hp10: 1762,
    atk0: 1470,
    atk10: 1764,
    image: "Uz/Beachsidesetsuna.png"
  },
  {
    id: "houshou-marine-swimsuit",
    name: "Houshou Marine Swimsuit",
    tribe: "Eerie",
    gender: "female",
    saga: "Hololive",
    rank: "UZ",
    hp0: 1484,
    hp10: 1781,
    atk0: 1416,
    atk10: 1699,
    image: "Uz/Houshoumarineswimsuit.png"
  },
  {
    id: "natsuka-(midsummer)",
    name: "Natsuka Midsummer Awakening",
    tribe: "Charming",
    gender: "female",
    saga: "Midsummer Awakening",
    rank: "UZ",
    hp0: 1480,
    hp10: 1776,
    atk0: 1420,
    atk10: 1704,
    image: "Uz/Natsukamidsummerawakening.png"
  },
  {
    id: "jaen-(gyattma)",
    name: "Jaen (GYATTMA)",
    tribe: "Enma",
    gender: "female",
    saga: "8th Puni Anniversary",
    rank: "UZ",
    hp0: 1486,
    hp10: 1783,
    atk0: 1414,
    atk10: 1697,
    image: "Uz/Jaen(gyattma).png"
  },
  {
    id: "hanazakari-fukuri-yuu",
    name: "Hanazakari Fukuri Yuu",
    tribe: "Slippery",
    gender: "female",
    saga: "Dragonslayer",
    rank: "UZ",
    hp0: 1477,
    hp10: 1772,
    atk0: 1423,
    atk10: 1708,
    image: "Uz/Hanazakarifukuriyuu.png"
  },
  {
    id: "halloween-fumihime",
    name: "Halloween Fumihime",
    tribe: "Charming",
    gender: "female",
    saga: "Nyanbo",
    rank: "UZ",
    hp0: 1467,
    hp10: 1760,
    atk0: 1471,
    atk10: 1765,
    image: "Uz/Halloweenfumihime.png"
  },
  {
    id: "itsuki-happy-wedding",
    name: "Itsuki (Happy Wedding)",
    tribe: "Brave",
    gender: "female",
    saga: "The Quintessential Quintuplets",
    rank: "UZ",
    hp0: 1479,
    hp10: 1775,
    atk0: 1421,
    atk10: 1705,
    image: "Uz/Itsuki(happywedding).png"
  },
  {
    id: "ichika-happy-wedding",
    name: "Ichika (Happy Wedding)",
    tribe: "Mysterious",
    gender: "female",
    saga: "The Quintessential Quintuplets",
    rank: "UZ",
    hp0: 1485,
    hp10: 1782,
    atk0: 1415,
    atk10: 1698,
    image: "Uz/Ichika(happywedding).png"
  },
  {
    id: "nino-happy-wedding",
    name: "Nino (Happy Wedding)",
    tribe: "Eerie",
    gender: "female",
    saga: "The Quintessential Quintuplets",
    rank: "UZ",
    hp0: 1475,
    hp10: 1770,
    atk0: 1425,
    atk10: 1710,
    image: "Uz/Nino(happywedding).png"
  },
  {
    id: "yotsuba-happy-wedding",
    name: "Yotsuba (Happy Wedding)",
    tribe: "Heartful",
    gender: "female",
    saga: "The Quintessential Quintuplets",
    rank: "UZ",
    hp0: 1476,
    hp10: 1771,
    atk0: 1424,
    atk10: 1709,
    image: "Uz/Yotsuba(happywedding).png"
  },
  {
    id: "miku-happy-wedding",
    name: "Miku (Happy Wedding)",
    tribe: "Shady",
    gender: "female",
    saga: "The Quintessential Quintuplets",
    rank: "UZ",
    hp0: 1477,
    hp10: 1772,
    atk0: 1423,
    atk10: 1708,
    image: "Uz/Miku(happywedding).png"
  },
  {
    id: "ren-(tamonten)",
    name: "Ren (Tamonten)",
    tribe: "Tough",
    gender: "male",
    saga: "Puni God Darkness",
    rank: "UZ",
    hp0: 1487,
    hp10: 1784,
    atk0: 1413,
    atk10: 1696,
    image: "Uz/Ren(tamonten).png"
  },
  {
    id: "ryuuta-land-of-ashes",
    name: "Ryuuta (Land of Ashes)",
    tribe: "Mysterious",
    gender: "male",
    saga: "Dragonslayer",
    rank: "UZ",
    hp0: 1474,
    hp10: 1769,
    atk0: 1426,
    atk10: 1711,
    image: "Uz/Ryuuta(landofashes).png"
  },
  {
    id: "natsuyomi-santa",
    name: "Natsuyomi Santa",
    tribe: "Heartful",
    gender: "female",
    saga: "Christmas 2023",
    rank: "UZ",
    hp0: 1478,
    hp10: 1774,
    atk0: 1422,
    atk10: 1706,
    image: "Uz/Natsuyomisanta.png",
    unity: {
      percent: 24
    }
  },
  {
    id: "fes-elzemekia",
    name: "FES Elzemekia",
    tribe: "Charming",
    gender: "female",
    saga: "Nyanbo",
    rank: "UZ",
    hp0: 1485,
    hp10: 1782,
    atk0: 1453,
    atk10: 1744,
    image: "Uz/Feselzemekia.png",
    unity: {
      percent: 24
    }
  },
  {
    id: "shirakami-fubuki-cyber",
    name: "Shirakami Fubuki Cyber",
    tribe: "Charming",
    gender: "female",
    saga: "Hololive",
    rank: "UZ",
    hp0: 1480,
    hp10: 1776,
    atk0: 1420,
    atk10: 1704,
    image: "Uz/Shirakamifubukicyber.png"
  },
  {
    id: "youmajin-ken-(gear-5-kenma)",
    name: "Youmajin Ken (Gear 5 Kenma)",
    tribe: "Brave",
    gender: "male",
    saga: "Youmajin",
    rank: "UZ",
    hp0: 1480,
    hp10: 1776,
    atk0: 1420,
    atk10: 1704,
    image: "Uz/Youmajinken(gear5kenma).png",
    unity: {
      percent: 24
    }
  },
  {
    id: "100-demon-king-enma",
    name: "100 Demon King Enma",
    tribe: "Enma",
    gender: "male",
    saga: "100 Months Anniversary",
    rank: "UZ",
    hp0: 1465,
    hp10: 1758,
    atk0: 1435,
    atk10: 1722,
    image: "Uz/100demonkingenma.png"
  },
  {
    id: "ren-(guardian-king)",
    name: "Ren (Guardian King)",
    tribe: "Charming",
    gender: "male",
    saga: "Puni God Darkness",
    rank: "UZ",
    hp0: 1437,
    hp10: 1724,
    atk0: 1463,
    atk10: 1756,
    image: "Uz/Ren(guardianking).png"
  },
  {
    id: "doll-princess-fukuri-yuu",
    name: "Doll Princess Fukuri Yuu",
    tribe: "Heartful",
    gender: "female",
    saga: "Puni God Darkness",
    rank: "UZ",
    hp0: 1491,
    hp10: 1789,
    atk0: 1447,
    atk10: 1736,
    image: "Uz/Dollprincessfukuriyuu.png"
  },
  {
    id: "mikey",
    name: "Mikey",
    tribe: "Shady",
    gender: "male",
    saga: "Tokyo Revengers",
    rank: "UZ",
    hp0: 1450,
    hp10: 1740,
    atk0: 1450,
    atk10: 1740,
    image: "Uz/Mikey.png"
  },
  {
    id: "ryuuta-(ryuusen)",
    name: "Ryuuta (Ryuusen)",
    tribe: "Slippery",
    gender: "male",
    saga: "Dragonslayer",
    rank: "UZ",
    hp0: 1479,
    hp10: 1775,
    atk0: 1421,
    atk10: 1705,
    image: "Uz/Ryuuta(ryuusen).png"
  },
  {
    id: "future-ren",
    name: "Future Ren",
    tribe: "Tough",
    gender: "male",
    saga: "Puni God Darkness",
    rank: "UZ",
    hp0: 1461,
    hp10: 1753,
    atk0: 1439,
    atk10: 1727,
    image: "Uz/Futureren.png"
  },
  {
    id: "punigami-kegare",
    name: "Punigami Kegare",
    tribe: "Shady",
    gender: "male",
    saga: "Puni God Darkness",
    rank: "UZ",
    hp0: 1506,
    hp10: 1807,
    atk0: 1394,
    atk10: 1673,
    image: "Uz/Punigamikegare.png"
  },
  {
    id: "ren-tenshin",
    name: "Ren Tenshin",
    tribe: "Charming",
    gender: "male",
    saga: "Puni God Darkness",
    rank: "UZ",
    hp0: 1405,
    hp10: 1686,
    atk0: 1495,
    atk10: 1794,
    image: "Uz/Rentenshin.png"
  },
  {
    id: "punigami-kegare-(doomsday)",
    name: "Punigami Kegare (Doomsday)",
    tribe: "Shady",
    gender: "male",
    saga: "Puni God Darkness",
    rank: "UZ",
    hp0: 1490,
    hp10: 1788,
    atk0: 1410,
    atk10: 1692,
    image: "Uz/Punigamikegare(doomsday).png"
  },
  {
    id: "fudoboy-gold",
    name: "Fudoboy Gold",
    tribe: "Enma",
    gender: "male",
    saga: "Nyanbo",
    rank: "UZ",
    hp0: 1457,
    hp10: 1748,
    atk0: 1481,
    atk10: 1777,
    image: "Uz/Fudoboygold.png"
  },
  {
    id: "megumin",
    name: "Megumin",
    tribe: "Brave",
    gender: "female",
    saga: "Konosuba",
    rank: "UZ",
    hp0: 1387,
    hp10: 1664,
    atk0: 1513,
    atk10: 1816,
    image: "Uz/Megumin.png"
  },
  {
    id: "aqua",
    name: "Aqua",
    tribe: "Mysterious",
    gender: "female",
    saga: "Konosuba",
    rank: "UZ",
    hp0: 1466,
    hp10: 1759,
    atk0: 1434,
    atk10: 1721,
    image: "Uz/Aqua.png"
  },
  {
    id: "mercury-asu",
    name: "Mercury Asu",
    tribe: "Slippery",
    gender: "male",
    saga: "Galaxy Watch",
    rank: "UZ",
    hp0: 1517,
    hp10: 1820,
    atk0: 1383,
    atk10: 1660,
    image: "Uz/Mercuryasu.png"
  },
  {
    id: "death-mercury",
    name: "Death Mercury",
    tribe: "Slippery",
    gender: "male",
    saga: "Galaxy Watch",
    rank: "UZ",
    hp0: 1389,
    hp10: 1667,
    atk0: 1511,
    atk10: 1813,
    image: "Uz/Deathmercury.png"
  },
  {
    id: "kalimera",
    name: "Kalimera",
    tribe: "Mysterious",
    gender: "male",
    saga: "Score Attack Shop",
    rank: "UZ",
    hp0: 1412,
    hp10: 1694,
    atk0: 1488,
    atk10: 1786,
    image: "Uz/Kalimera.png"
  },
  {
    id: "bridal-jaen",
    name: "Bridal Jaen",
    tribe: "Enma",
    gender: "female",
    saga: "Wedding Wars",
    rank: "UZ",
    hp0: 1391,
    hp10: 1669,
    atk0: 1509,
    atk10: 1811,
    image: "Uz/Bridaljaen.png"
  },
  {
    id: "kokoro-dame-dedtime",
    name: "Kokoro Dame Dedtime",
    tribe: "Shady",
    gender: "female",
    saga: "Wedding Wars",
    rank: "UZ",
    hp0: 1483,
    hp10: 1780,
    atk0: 1417,
    atk10: 1700,
    image: "Uz/Kokorodamededtime.png"
  },
  {
    id: "mars-asu",
    name: "Mars Asu",
    tribe: "Brave",
    gender: "male",
    saga: "Galaxy Watch",
    rank: "UZ",
    hp0: 1388,
    hp10: 1666,
    atk0: 1512,
    atk10: 1814,
    image: "Uz/Marsasu.png"
  },
  {
    id: "death-asu",
    name: "Death Asu",
    tribe: "Brave",
    gender: "male",
    saga: "Galaxy Watch",
    rank: "UZ",
    hp0: 1485,
    hp10: 1782,
    atk0: 1415,
    atk10: 1698,
    image: "Uz/Deathasu.png"
  },
  {
    id: "hikoboshi-fudouma",
    name: "Hikoboshi Fudouma",
    tribe: "Enma",
    gender: "male",
    saga: "Nyanbo",
    rank: "UZ",
    hp0: 1615,
    hp10: 1938,
    atk0: 1323,
    atk10: 1588,
    image: "Uz/Hikoboshifudouma.png"
  },
  {
    id: "hell-arachnus",
    name: "Hell Arachnus",
    tribe: "Eerie",
    gender: "male",
    saga: "11th anniversary",
    rank: "UZ",
    hp0: 1433,
    hp10: 1720,
    atk0: 1467,
    atk10: 1760,
    image: "Uz/Hellarachnus.png"
  },
  {
    id: "hell-toadal",
    name: "Hell Toadal",
    tribe: "Tough",
    gender: "male",
    saga: "11th anniversary",
    rank: "UZ",
    hp0: 1497,
    hp10: 1796,
    atk0: 1403,
    atk10: 1684,
    image: "Uz/Helltoadal.png"
  },
  {
    id: "sacred-treasure-awoken-ryuuta",
    name: "Sacred Treasure Ryuuta",
    tribe: "Eerie",
    gender: "male",
    saga: "Dragonslayer",
    rank: "UZ",
    hp0: 1425,
    hp10: 1710,
    atk0: 1475,
    atk10: 1770,
    image: "Uz/Sacredtreasureryuuta.png"
  },
  {
    id: "jingi",
    name: "Jingi",
    tribe: "Eerie",
    gender: "female",
    saga: "Dragonslayer",
    rank: "UZ",
    hp0: 1503,
    hp10: 1804,
    atk0: 1397,
    atk10: 1676,
    image: "Uz/Jingi.png"
  },
  {
    id: "rimuru-tempest",
    name: "Rimuru Tempest",
    tribe: "Mysterious",
    gender: "male",
    saga: "Tensura",
    rank: "UZ",
    hp0: 1410,
    hp10: 1692,
    atk0: 1490,
    atk10: 1788,
    image: "Uz/Rimurutempest.png"
  },
  {
    id: "milim",
    name: "Tyrant of Destruction Milim",
    tribe: "Charming",
    gender: "female",
    saga: "Tensura",
    rank: "UZ",
    hp0: 1455,
    hp10: 1746,
    atk0: 1445,
    atk10: 1734,
    image: "Uz/Tyrantofdestructionmilim.png"
  },
  {
    id: "jupiter-asu",
    name: "Jupiter Asu",
    tribe: "Tough",
    gender: "male",
    saga: "Galaxy Watch",
    rank: "UZ",
    hp0: 1449,
    hp10: 1739,
    atk0: 1451,
    atk10: 1741,
    image: "Uz/Jupiterasu.png"
  },
  {
    id: "death-jupiter",
    name: "Death Jupiter",
    tribe: "Tough",
    gender: "male",
    saga: "Galaxy Watch",
    rank: "UZ",
    hp0: 1402,
    hp10: 1682,
    atk0: 1498,
    atk10: 1798,
    image: "Uz/Deathjupiter.png"
  },
  {
    id: "beachside-natsuyomi",
    name: "Beachside Natsuyomi",
    tribe: "Mysterious",
    gender: "female",
    saga: "Nyanbo",
    rank: "UZ",
    hp0: 1465,
    hp10: 1758,
    atk0: 1473,
    atk10: 1768,
    image: "Uz/Beachsidenatsuyomi.png"
  },
  {
    id: "hoshimachi-suisei",
    name: "Hoshimachi Suisei",
    tribe: "Shady",
    gender: "female",
    saga: "Hololive",
    rank: "UZ",
    hp0: 1452,
    hp10: 1742,
    atk0: 1448,
    atk10: 1738,
    image: "Uz/Hoshimachisuisei.png"
  },
  {
    id: "nekomata-okayu",
    name: "Nekomata Okayu",
    tribe: "Mysterious",
    gender: "female",
    saga: "Hololive",
    rank: "UZ",
    hp0: 1474,
    hp10: 1769,
    atk0: 1426,
    atk10: 1711,
    image: "Uz/Nekomataokayu.png",
    unity: {
      percent: 24
    }
  },
  {
    id: "komaki-komami",
    name: "Komaki Komami",
    tribe: "Charming",
    gender: "female",
    saga: "Idol Royale",
    rank: "UZ",
    hp0: 1455,
    hp10: 1746,
    atk0: 1445,
    atk10: 1734,
    image: "Uz/Komakikomami.png",
    unity: {
      percent: 24
    }
  },
  {
    id: "the-best-ageha",
    name: "The Best Ageha",
    tribe: "Heartful",
    gender: "female",
    saga: "Idol Royale",
    rank: "UZ",
    hp0: 1451,
    hp10: 1741,
    atk0: 1449,
    atk10: 1739,
    image: "Uz/Thebestageha.png"
  },
  {
    id: "moximous-k",
    name: "Moximous K",
    tribe: "Brave",
    gender: "male",
    saga: "Five Great Wicked Incidents",
    rank: "UZ",
    hp0: 1445,
    hp10: 1734,
    atk0: 1455,
    atk10: 1746,
    image: "Uz/Moximousk.png"
  },
  {
    id: "clone-black-dragon",
    name: "Clone Black Dragon",
    tribe: "Eerie",
    gender: "male",
    saga: "Dragonslayer",
    rank: "UZ",
    hp0: 1392,
    hp10: 1670,
    atk0: 1508,
    atk10: 1810,
    image: "Uz/Cloneblackdragon.png"
  },
  {
    id: "light-wings-omatsu",
    name: "Light Wings Omatsu",
    tribe: "Heartful",
    gender: "female",
    saga: "Dragonslayer",
    rank: "UZ",
    hp0: 1478,
    hp10: 1774,
    atk0: 1422,
    atk10: 1706,
    image: "Uz/Lightwingsomatsu.png"
  },
  {
    id: "seiryuu-(star-dragon)",
    name: "Seiryuu (Star Dragon)",
    tribe: "Slippery",
    gender: "male",
    saga: "Dragonslayer",
    rank: "UZ",
    hp0: 1462,
    hp10: 1754,
    atk0: 1438,
    atk10: 1726,
    image: "Uz/Seiryuu(stardragon).png",
    unity: {
      percent: 24
    }
  },
  {
    id: "8-armed-goddess",
    name: "8 Armed Goddess",
    tribe: "Slippery",
    gender: "female",
    saga: "Dragonslayer",
    rank: "UZ",
    hp0: 1491,
    hp10: 1789,
    atk0: 1409,
    atk10: 1691,
    image: "Uz/8armedgoddess.png"
  },
  {
    id: "halloween-jaen",
    name: "Halloween Jaen",
    tribe: "Shady",
    gender: "female",
    saga: "Nyanbo",
    rank: "UZ",
    hp0: 1420,
    hp10: 1704,
    atk0: 1518,
    atk10: 1822,
    image: "Uz/Halloweenjaen.png"
  },
  {
    id: "miss-contest-punigami",
    name: "Miss Contest Punigami",
    tribe: "Charming",
    gender: "female",
    saga: "9th Puni Anniversary",
    rank: "UZ",
    hp0: 1415,
    hp10: 1698,
    atk0: 1485,
    atk10: 1782,
    image: "Uz/Misscontestpunigami.png",
    femaleUnity: {
      hpPercent: 20,
      atkPercent: 15
    }
  },
  {
    id: "miss-contest-elzemekia",
    name: "Miss Contest Elzemekia",
    tribe: "Charming",
    gender: "female",
    saga: "9th Puni Anniversary",
    rank: "UZ",
    hp0: 1488,
    hp10: 1786,
    atk0: 1412,
    atk10: 1694,
    image: "Uz/Misscontestelzemekia.png"
  },
  {
    id: "skulk",
    name: "Skulk",
    tribe: "Eerie",
    gender: "male",
    saga: "Youma",
    rank: "UZ",
    hp0: 1690,
    hp10: 2028,
    atk0: 1425,
    atk10: 1710,
    image: "Uz/Skulk.png"
  },
  {
    id: "miss-contest-mika",
    name: "Miss Contest Mika",
    tribe: "Mysterious",
    gender: "female",
    saga: "9th Puni Anniversary",
    rank: "UZ",
    hp0: 1486,
    hp10: 1783,
    atk0: 1414,
    atk10: 1697,
    image: "Uz/Misscontestmika.png"
  },
  {
    id: "Black-Hole-Asu",
    name: "Black Hole Asu",
    tribe: "Shady",
    gender: "male",
    saga: "Galaxy Watch",
    rank: "UZ",
    hp0: 1404,
    hp10: 1685,
    atk0: 1496,
    atk10: 1795,
    image: "Uz/Blackholeasu.png",
    unity: {
      percent: 24
    }
  },
  {
    id: "death-black",
    name: "Death Black",
    tribe: "Shady",
    gender: "male",
    saga: "Galaxy Watch",
    rank: "UZ",
    hp0: 1470,
    hp10: 1764,
    atk0: 1430,
    atk10: 1716,
    image: "Uz/Deathblack.png"
  },
  {
    id: "black-hole-kaira",
    name: "Black Hole Kaira",
    tribe: "Enma",
    gender: "male",
    saga: "Galaxy Watch",
    rank: "UZ",
    hp0: 1452,
    hp10: 1742,
    atk0: 1448,
    atk10: 1738,
    image: "Uz/Blackholekaira.png"
  },
  {
    id: "princess-snow-specthare",
    name: "Princess Snow Specthare",
    tribe: "Mysterious",
    gender: "female",
    saga: "Snow Palace Park",
    rank: "UZ",
    hp0: 1471,
    hp10: 1765,
    atk0: 1429,
    atk10: 1715,
    image: "Uz/Princesssnowspecthare.png"
  },
  {
    id: "princess-blizzaria",
    name: "Princess Blizzaria",
    tribe: "Charming",
    gender: "female",
    saga: "Snow Palace Park",
    rank: "UZ",
    hp0: 1410,
    hp10: 1692,
    atk0: 1490,
    atk10: 1788,
    image: "Uz/Princessblizzaria.png"
  },
  {
    id: "princess-smogmella",
    name: "Princess Smogmella",
    tribe: "Mysterious",
    gender: "female",
    saga: "Snow Palace Park",
    rank: "UZ",
    hp0: 1489,
    hp10: 1787,
    atk0: 1411,
    atk10: 1693,
    image: "Uz/Princesssmogmella.png"
  },
  {
    id: "rem",
    name: "Rem",
    tribe: "Tough",
    gender: "female",
    saga: "Re:Zero",
    rank: "UZ",
    hp0: 1415,
    hp10: 1698,
    atk0: 1485,
    atk10: 1782,
    image: "Uz/Rem.png"
  },
  {
    id: "beatrice",
    name: "Beatrice",
    tribe: "Mysterious",
    gender: "female",
    saga: "Re:Zero",
    rank: "UZ",
    hp0: 1484,
    hp10: 1781,
    atk0: 1416,
    atk10: 1699,
    image: "Uz/Beatrice.png"
  },
  {
    id: "emilia",
    name: "Emilia",
    tribe: "Heartful",
    gender: "female",
    saga: "Re:Zero",
    rank: "UZ",
    hp0: 1456,
    hp10: 1747,
    atk0: 1444,
    atk10: 1733,
    image: "Uz/Emilia.png"
  },
  {
    id: "infinipea",
    name: "Infinipea",
    tribe: "Mysterious",
    gender: "female",
    saga: "Youma",
    rank: "UZ",
    hp0: 1526,
    hp10: 1831,
    atk0: 1589,
    atk10: 1907,
    image: "Uz/Infinipea.png"
  },
  {
    id: "santa-rem",
    name: "Santa Rem",
    tribe: "Charming",
    gender: "female",
    saga: "Re:Zero",
    rank: "UZ",
    hp0: 1449,
    hp10: 1739,
    atk0: 1451,
    atk10: 1741,
    image: "Uz/Santarem.png"
  },
  {
    id: "snake-king-kaira",
    name: "Snake King Kaira",
    tribe: "Slippery",
    gender: "male",
    saga: "Nyanbo",
    rank: "UZ",
    hp0: 1488,
    hp10: 1786,
    atk0: 1450,
    atk10: 1740,
    image: "Uz/Snakekingkaira.png",
    unity: {
      percent: 24
    }
  },
  {
    id: "plus-kj",
    name: "Plus KJ",
    tribe: "Brave",
    gender: "male",
    saga: "Yo! Yo! Shin Enma!",
    rank: "UZ",
    hp0: 1455,
    hp10: 1746,
    atk0: 1445,
    atk10: 1734,
    image: "Uz/Pluskj.png"
  },
  {
    id: "plus-komasan",
    name: "Plus Komasan",
    tribe: "Tough",
    gender: "male",
    saga: "Yo! Yo! Shin Enma!",
    rank: "UZ",
    hp0: 1466,
    hp10: 1759,
    atk0: 1434,
    atk10: 1721,
    image: "Uz/Pluskomasan.png"
  },
  {
    id: "plus-jibanyan",
    name: "Plus Jibanyan",
    tribe: "Heartful",
    gender: "male",
    saga: "Yo! Yo! Shin Enma!",
    rank: "UZ",
    hp0: 1453,
    hp10: 1744,
    atk0: 1447,
    atk10: 1736,
    image: "Uz/Plusjibanyan.png"
  },
  {
    id: "kyuuoh-miyabi",
    name: "Kyuuoh Miyabi",
    tribe: "Shady",
    gender: "female",
    saga: "Idol Royale",
    rank: "UZ",
    hp0: 1456,
    hp10: 1747,
    atk0: 1444,
    atk10: 1733,
    image: "Uz/Kyuuohmiyabi.png",
    unity: {
      percent: 24
    }
  },
  {
    id: "kenmochi-saya",
    name: "Kenmochi Saya",
    tribe: "Brave",
    gender: "female",
    saga: "Idol Royale",
    rank: "UZ",
    hp0: 1464,
    hp10: 1757,
    atk0: 1436,
    atk10: 1723,
    image: "Uz/Kenmochisaya.png"
  },
  {
    id: "orochi-chikage",
    name: "Orochi Chikage",
    tribe: "Slippery",
    gender: "female",
    saga: "Idol Royale",
    rank: "UZ",
    hp0: 1440,
    hp10: 1728,
    atk0: 1460,
    atk10: 1752,
    image: "Uz/Orochichikage.png"
  },
  {
    id: "ichika-valentine",
    name: "Ichika Valentine",
    tribe: "Mysterious",
    gender: "female",
    saga: "The Quintessential Quintuplets",
    rank: "UZ",
    hp0: 1469,
    hp10: 1763,
    atk0: 1431,
    atk10: 1717,
    image: "Uz/Ichika(valentine).png"
  },
  {
    id: "nino-valentine",
    name: "Nino Valentine",
    tribe: "Eerie",
    gender: "female",
    saga: "The Quintessential Quintuplets",
    rank: "UZ",
    hp0: 1467,
    hp10: 1760,
    atk0: 1433,
    atk10: 1720,
    image: "Uz/Nino(valentine).png"
  },
  {
    id: "miku-valentine",
    name: "Miku Valentine",
    tribe: "Shady",
    gender: "female",
    saga: "The Quintessential Quintuplets",
    rank: "UZ",
    hp0: 1486,
    hp10: 1783,
    atk0: 1414,
    atk10: 1697,
    image: "Uz/Miku(valentine).png"
  },
  {
    id: "yotsuba-valentine",
    name: "Yotsuba Valentine",
    tribe: "Heartful",
    gender: "female",
    saga: "The Quintessential Quintuplets",
    rank: "UZ",
    hp0: 1468,
    hp10: 1762,
    atk0: 1432,
    atk10: 1718,
    image: "Uz/Yotsuba(valentine).png"
  },
  {
    id: "itsuki-valentine",
    name: "Itsuki Valentine",
    tribe: "Brave",
    gender: "female",
    saga: "The Quintessential Quintuplets",
    rank: "UZ",
    hp0: 1452,
    hp10: 1742,
    atk0: 1448,
    atk10: 1738,
    image: "Uz/Itsuki(valentine).png"
  },
  {
    id: "bunny-mangetsu",
    name: "Mangetsu",
    tribe: "Shady",
    gender: "female",
    saga: "Galaxy Watch",
    rank: "UZ",
    hp0: 1386,
    hp10: 1663,
    atk0: 1514,
    atk10: 1817,
    image: "Uz/Bunnymangetsu.png"
  },
  {
    id: "bunny-hangetsu",
    name: "Hangetsu",
    tribe: "Tough",
    gender: "female",
    saga: "Galaxy Watch",
    rank: "UZ",
    hp0: 1477,
    hp10: 1772,
    atk0: 1423,
    atk10: 1708,
    image: "Uz/Bunnyhangetsu.png"
  },
  {
    id: "bunny-mikazuki",
    name: "Mikazuki",
    tribe: "Slippery",
    gender: "female",
    saga: "Galaxy Watch",
    rank: "UZ",
    hp0: 1389,
    hp10: 1667,
    atk0: 1511,
    atk10: 1813,
    image: "Uz/Bunnymikazuki.png"
  },
  {
    id: "subaru-(easter)",
    name: "Subaru (Easter)",
    tribe: "Brave",
    gender: "female",
    saga: "Hololive",
    rank: "UZ",
    hp0: 1447,
    hp10: 1736,
    atk0: 1453,
    atk10: 1744,
    image: "Uz/Oozorasubaru(easter).png",
    unity: {
      percent: 24
    }
  },
  {
    id: "fubuki-(easter)",
    name: "Fubuki (Easter)",
    tribe: "Mysterious",
    gender: "female",
    saga: "Hololive",
    rank: "UZ",
    hp0: 1441,
    hp10: 1729,
    atk0: 1459,
    atk10: 1751,
    image: "Uz/Shirakamifubuki(easter).png"
  },
  {
    id: "watame-(easter)",
    name: "Watame (Easter)",
    tribe: "Charming",
    gender: "female",
    saga: "Hololive",
    rank: "UZ",
    hp0: 1452,
    hp10: 1742,
    atk0: 1448,
    atk10: 1738,
    image: "Uz/Tsunomakiwatame(easter).png"
  },
  {
    id: "okumo-itoko",
    name: "Okumo Itoko",
    tribe: "Eerie",
    gender: "female",
    saga: "Idol Royale",
    rank: "UZ",
    hp0: 1453,
    hp10: 1744,
    atk0: 1447,
    atk10: 1736,
    image: "Uz/Okumoitoko.png"
  },
  {
    id: "kinaku-himena",
    name: "Kinaku Himena",
    tribe: "Shady",
    gender: "female",
    saga: "Idol Royale",
    rank: "UZ",
    hp0: 1449,
    hp10: 1739,
    atk0: 1451,
    atk10: 1741,
    image: "Uz/Kinakuhimena.png"
  },
  {
    id: "mimi-ubayama",
    name: "Mimi Ubayama",
    tribe: "Eerie",
    gender: "female",
    saga: "Idol Royale",
    rank: "UZ",
    hp0: 1449,
    hp10: 1739,
    atk0: 1451,
    atk10: 1741,
    image: "Uz/Mimiubayama.png"
  },
  {
    id: "mera-shishino-(2ndoutfit)",
    name: "Mera Shishino (2nd Outfit)",
    tribe: "Brave",
    gender: "female",
    saga: "Idol Royale",
    rank: "UZ",
    hp0: 1504,
    hp10: 1805,
    atk0: 1394,
    atk10: 1673,
    image: "Uz/Merashishino(2ndoutfit).png",
    unity: {
      percent: 24
    }
  },
  {
    id: "hibari-akane-(2ndoutfit)",
    name: "Hibari Akane (2nd Outfit)",
    tribe: "Mysterious",
    gender: "female",
    saga: "Idol Royale",
    rank: "UZ",
    hp0: 1452,
    hp10: 1742,
    atk0: 1448,
    atk10: 1738,
    image: "Uz/Hibariakane(2ndoutfit).png",
    unity: {
      percent: 24
    }
  },
  {
    id: "ohira-vanilla",
    name: "Ohira Vanilla",
    tribe: "Mysterious",
    gender: "female",
    saga: "Idol Royale",
    rank: "UZ",
    hp0: 1442,
    hp10: 1730,
    atk0: 1458,
    atk10: 1750,
    image: "Uz/Ohiravanilla.png"
  },
  {
    id: "kougetsu-(false-moon)",
    name: "Kougetsu (False Moon)",
    tribe: "Shady",
    gender: "female",
    saga: "Galaxy Watch",
    rank: "UZ",
    hp0: 1439,
    hp10: 1727,
    atk0: 1461,
    atk10: 1753,
    image: "Uz/Kougetsu(falsemoon).png"
  },
  {
    id: "moon-emperor-mangetsu",
    name: "Moon Emperor Mangetsu",
    tribe: "Tough",
    gender: "female",
    saga: "Galaxy Watch",
    rank: "UZ",
    hp0: 1415,
    hp10: 1698,
    atk0: 1485,
    atk10: 1782,
    image: "Uz2/Moonemperormangetsu.png"
  },
  {
    id: "moon-yoshitsune",
    name: "Moon Yoshitsune",
    tribe: "Mysterious",
    gender: "male",
    saga: "Galaxy Watch",
    rank: "UZ",
    hp0: 1447,
    hp10: 1736,
    atk0: 1453,
    atk10: 1744,
    image: "Uz2/Moonyoshitsune.png"
  },
  {
    id: "yashiro-kizuku",
    name: "Yashiro Kizuku",
    tribe: "Shady",
    gender: "male",
    saga: "Nijisanji",
    rank: "UZ",
    hp0: 1401,
    hp10: 1681,
    atk0: 1499,
    atk10: 1799,
    image: "Uz2/Yashirokizuku.png",
    unity: {
      percent: 24
    }
  },
  {
    id: "hoshikawa-sara",
    name: "Hoshikawa Sara",
    tribe: "Charming",
    gender: "female",
    saga: "Nijisanji",
    rank: "UZ",
    hp0: 1436,
    hp10: 1723,
    atk0: 1464,
    atk10: 1757,
    image: "Uz2/Hoshikawasara.png"
  },
  {
    id: "shiina-yuika",
    name: "Shiina Yuika",
    tribe: "Slippery",
    gender: "female",
    saga: "Nijisanji",
    rank: "UZ",
    hp0: 1420,
    hp10: 1704,
    atk0: 1480,
    atk10: 1776,
    image: "Uz2/Shiinayuika.png"
  },
  {
    id: "flower-nanda",
    name: "Flower Nanda",
    tribe: "Slippery",
    gender: "male",
    saga: "100 Tales",
    rank: "UZ",
    hp0: 1443,
    hp10: 1732,
    atk0: 1457,
    atk10: 1748,
    image: "Uz2/Flowernanda.png"
  },
  {
    id: "future-boushinyan",
    name: "Future Boushinyan",
    tribe: "Brave",
    gender: "male",
    saga: "100 Tales",
    rank: "UZ",
    hp0: 1401,
    hp10: 1681,
    atk0: 1499,
    atk10: 1799,
    image: "Uz2/Flowersummerfuturebushinyan.png"
  },
  {
    id: "flower-summer-hanasakamaru",
    name: "Flower-chan Hanasakamaru",
    tribe: "Heartful",
    gender: "male",
    saga: "100 Tales",
    rank: "UZ",
    hp0: 1425,
    hp10: 1710,
    atk0: 1475,
    atk10: 1770,
    image: "Uz2/Flowersummerhanasakamaru.png"
  },
  {
    id: "wedding-aqua",
    name: "Wedding Aqua",
    tribe: "Mysterious",
    gender: "female",
    saga: "Konosuba",
    rank: "UZ",
    hp0: 1499,
    hp10: 1799,
    atk0: 1401,
    atk10: 1681,
    image: "Uz2/Weddingaqua.png"
  },
  {
    id: "wedding-yunyun",
    name: "Wedding YunYun",
    tribe: "Brave",
    gender: "female",
    saga: "Konosuba",
    rank: "UZ",
    hp0: 1470,
    hp10: 1764,
    atk0: 1430,
    atk10: 1716,
    image: "Uz2/Weddingyunyun.png"
  },
  {
    id: "wedding-darkness",
    name: "Wedding Darkness",
    tribe: "Tough",
    gender: "female",
    saga: "Konosuba",
    rank: "UZ",
    hp0: 1502,
    hp10: 1802,
    atk0: 1398,
    atk10: 1678,
    image: "Uz2/Weddingdarkness.png"
  },
  {
    id: "spirit-of-the-moon-twilight",
    name: "Spirit of the Moon Twilight",
    tribe: "Tough",
    gender: "male",
    saga: "Moon People",
    rank: "UZ",
    hp0: 1472,
    hp10: 1766,
    atk0: 1428,
    atk10: 1714,
    image: "Uz2/Spiritofthemoontwilight.png"
  },
  {
    id: "spirit-of-the-sun-dawn",
    name: "Spirit of the Sun Dawn",
    tribe: "Brave",
    gender: "female",
    saga: "Moon People",
    rank: "UZ",
    hp0: 1469,
    hp10: 1763,
    atk0: 1431,
    atk10: 1717,
    image: "Uz2/Spiritofthesundawn.png"
  },
  {
    id: "mika-of-the-sun",
    name: "Mika of the Sun",
    tribe: "Mysterious",
    gender: "female",
    saga: "Moon People",
    rank: "UZ",
    hp0: 1478,
    hp10: 1774,
    atk0: 1422,
    atk10: 1706,
    image: "Uz2/Mikaofthesun.png"
  },
  {
    id: "zodiac-god",
    name: "Zodiac God",
    tribe: "Heartful",
    gender: "male",
    saga: "12 Super Gods",
    rank: "UZ",
    hp0: 1400,
    hp10: 1680,
    atk0: 1500,
    atk10: 1800,
    image: "Uz2/Zodiacgod.png"
  },
  {
    id: "snake-representative-venoct",
    name: "Snake Representative Venoct",
    tribe: "Slippery",
    gender: "male",
    saga: "12 Super Gods",
    rank: "UZ",
    hp0: 1460,
    hp10: 1752,
    atk0: 1440,
    atk10: 1728,
    image: "Uz2/Snakerepresentativevenoct.png"
  },
  {
    id: "fox-representative-kyubi",
    name: "Fox Representative Kyubi",
    tribe: "Mysterious",
    gender: "male",
    saga: "12 Super Gods",
    rank: "UZ",
    hp0: 1395,
    hp10: 1674,
    atk0: 1505,
    atk10: 1806,
    image: "Uz2/Foxrepresentativekyubi.png"
  },
  {
    id: "lady-sakuchan",
    name: "Lady Sakuchan",
    tribe: "Eerie",
    gender: "female",
    saga: "Lady",
    rank: "UZ",
    hp0: 1466,
    hp10: 1759,
    atk0: 1434,
    atk10: 1721,
    image: "Uz2/Ladysakuchan.png"
  },
  {
    id: "lady-smogmella",
    name: "Lady Smogmella",
    tribe: "Mysterious",
    gender: "female",
    saga: "Lady",
    rank: "UZ",
    hp0: 1391,
    hp10: 1669,
    atk0: 1509,
    atk10: 1811,
    image: "Uz2/Ladysmogmella.png"
  },
  {
    id: "lady-benzaiten",
    name: "Lady Benzaiten",
    tribe: "Charming",
    gender: "female",
    saga: "Lady",
    rank: "UZ",
    hp0: 1459,
    hp10: 1751,
    atk0: 1441,
    atk10: 1729,
    image: "Uz2/Ladybenzaiten.png"
  },
  {
    id: "sylphiette",
    name: "Sylphiette",
    tribe: "Heartful",
    gender: "female",
    saga: "Mushoku Tensei",
    rank: "UZ",
    hp0: 1446,
    hp10: 1735,
    atk0: 1454,
    atk10: 1745,
    image: "Uz2/Sylphiette.png"
  },
  {
    id: "red-hair-swordsman-eris",
    name: "Red Hair Swordsman Eris",
    tribe: "Tough",
    gender: "female",
    saga: "Mushoku Tensei",
    rank: "UZ",
    hp0: 1496,
    hp10: 1795,
    atk0: 1404,
    atk10: 1685,
    image: "Uz2/Redhairswordsmaneris.png"
  },
  {
    id: "adventurer-rudeus",
    name: "Adventurer Rudeus",
    tribe: "Shady",
    gender: "male",
    saga: "Mushoku Tensei",
    rank: "UZ",
    hp0: 1412,
    hp10: 1694,
    atk0: 1488,
    atk10: 1786,
    image: "Uz2/Adventurerrudeus.png"
  },
  {
    id: "ruten",
    name: "Ruten",
    tribe: "Enma",
    gender: "male",
    saga: "",
    rank: "UZ",
    hp0: 1434,
    hp10: 1721,
    atk0: 1466,
    atk10: 1759,
    image: "Uz2/Ruten.png"
  },
  {
    id: "melek",
    name: "Melek",
    tribe: "Enma",
    gender: "male",
    saga: "",
    rank: "UZ",
    hp0: 1379,
    hp10: 1655,
    atk0: 1521,
    atk10: 1825,
    image: "Uz2/Melek.png"
  },
  {
    id: "formal-attire-jaen",
    name: "Formal Attire Jaen",
    tribe: "Enma",
    gender: "female",
    saga: "",
    rank: "UZ",
    hp0: 1446,
    hp10: 1735,
    atk0: 1454,
    atk10: 1745,
    image: "Uz2/Formalattirejaen.png"
  },
  {
    id: "diabolo",
    name: "Diabolo",
    tribe: "Shady",
    gender: "male",
    saga: "Tensura",
    rank: "UZ",
    hp0: 1495,
    hp10: 1794,
    atk0: 1405,
    atk10: 1686,
    image: "Uz2/Diabolo.png"
  },
  {
    id: "dragon-armor-milim",
    name: "Dragon Armor Milim",
    tribe: "Slippery",
    gender: "female",
    saga: "Tensura",
    rank: "UZ",
    hp0: 1390,
    hp10: 1668,
    atk0: 1510,
    atk10: 1812,
    image: "Uz2/Dragonarmormilim.png"
  },
  {
    id: "rimuru-raphael",
    name: "Rimuru (Raphael)",
    tribe: "Mysterious",
    gender: "male",
    saga: "Tensura",
    rank: "UZ",
    hp0: 1382,
    hp10: 1658,
    atk0: 1518,
    atk10: 1822,
    image: "Uz2/Rimuru(raphael).png"
  },
  {
    id: "shingetsu",
    name: "Shingetsu",
    tribe: "Heartful",
    gender: "female",
    saga: "Moon People",
    rank: "UZ",
    hp0: 1475,
    hp10: 1770,
    atk0: 1425,
    atk10: 1710,
    image: "Uz2/Shingetsu.png"
  },
  {
    id: "hangetsu-child",
    name: "Hangetsu (Child)",
    tribe: "Tough",
    gender: "female",
    saga: "Moon People",
    rank: "UZ",
    hp0: 1393,
    hp10: 1672,
    atk0: 1507,
    atk10: 1808,
    image: "Uz2/Hangetsu(child).png"
  },
  {
    id: "mangetsu-child",
    name: "Mangetsu (Child)",
    tribe: "Shady",
    gender: "female",
    saga: "Moon People",
    rank: "UZ",
    hp0: 1464,
    hp10: 1757,
    atk0: 1436,
    atk10: 1723,
    image: "Uz2/Mangetsu(child).png"
  },
  {
    id: "sports-day-mera-shishino",
    name: "Sports Day Mera Shishino",
    tribe: "Brave",
    gender: "female",
    saga: "Idol Royale",
    rank: "UZ",
    hp0: 1443,
    hp10: 1732,
    atk0: 1457,
    atk10: 1748,
    image: "Uz2/Sportsdaymerashishino.png"
  },
  {
    id: "sports-day-rubeus-j",
    name: "Sports Day Rubeus J",
    tribe: "Charming",
    gender: "male",
    saga: "",
    rank: "UZ",
    hp0: 1490,
    hp10: 1788,
    atk0: 1410,
    atk10: 1692,
    image: "Uz2/Sportsdayrubeusj.png"
  },
  {
    id: "cheerleader-tidus",
    name: "Cheerleader Tidus",
    tribe: "Heartful",
    gender: "male",
    saga: "",
    rank: "UZ",
    hp0: 1405,
    hp10: 1686,
    atk0: 1495,
    atk10: 1794,
    image: "Uz2/Cheerleadertidus.png"
  },
  {
    id: "laplus-darkness-halloween",
    name: "Laplus Darkness (Halloween)",
    tribe: "Eerie",
    gender: "female",
    saga: "Hololive",
    rank: "UZ",
    hp0: 1465,
    hp10: 1758,
    atk0: 1435,
    atk10: 1722,
    image: "Uz2/Laplusdarkness(halloween).png"
  },
  {
    id: "nakiri-ayame-halloween",
    name: "Nakiri Ayame (Halloween)",
    tribe: "Charming",
    gender: "female",
    saga: "Hololive",
    rank: "UZ",
    hp0: 1441,
    hp10: 1729,
    atk0: 1459,
    atk10: 1751,
    image: "Uz2/Nakiriayame(halloween).png"
  },
  {
    id: "shirogane-noel-halloween",
    name: "Shirogane Noel (Halloween)",
    tribe: "Heartful",
    gender: "female",
    saga: "Hololive",
    rank: "UZ",
    hp0: 1459,
    hp10: 1751,
    atk0: 1441,
    atk10: 1729,
    image: "Uz2/Shiroganenoel(halloween).png"
  },
  {
    id: "puniwo-ubaune",
    name: "Puniwo Ubaune",
    tribe: "Shady",
    gender: "female",
    saga: "",
    rank: "UZ",
    hp0: 1403,
    hp10: 1684,
    atk0: 1497,
    atk10: 1796,
    image: "Uz2/Puniwoubaune.png"
  },
  {
    id: "parade-blizzaria",
    name: "Parade Blizzaria",
    tribe: "Charming",
    gender: "female",
    saga: "",
    rank: "UZ",
    hp0: 1467,
    hp10: 1760,
    atk0: 1433,
    atk10: 1720,
    image: "Uz2/Paradeblizzaria.png"
  },
  {
    id: "puniokan",
    name: "PuniOkan",
    tribe: "Mysterious",
    gender: "female",
    saga: "",
    rank: "UZ",
    hp0: 1484,
    hp10: 1781,
    atk0: 1416,
    atk10: 1699,
    image: "Uz2/Puniokan.png"
  },
  {
    id: "king-fudoumyou",
    name: "King Fudoumyou",
    tribe: "Enma",
    gender: "male",
    saga: "King",
    rank: "UZ",
    hp0: 1439,
    hp10: 1727,
    atk0: 1461,
    atk10: 1753,
    image: "Uz2/Kingfudoumyou.png"
  },
  {
    id: "king-benimaru",
    name: "King Benimaru",
    tribe: "Brave",
    gender: "male",
    saga: "King",
    rank: "UZ",
    hp0: 1457,
    hp10: 1748,
    atk0: 1443,
    atk10: 1732,
    image: "Uz2/Kingbenimaru.png"
  },
  {
    id: "houkai-unkeen",
    name: "Houkai (Unkeen)",
    tribe: "Eerie",
    gender: "male",
    saga: "",
    rank: "UZ",
    hp0: 1393,
    hp10: 1672,
    atk0: 1507,
    atk10: 1808,
    image: "Uz2/Houkai(unkeen).png"
  },
  {
    id: "fern",
    name: "Fern",
    tribe: "Charming",
    gender: "female",
    saga: "Frieren",
    rank: "UZ",
    hp0: 1477,
    hp10: 1772,
    atk0: 1423,
    atk10: 1708,
    image: "Uz2/Fern.png"
  },
  {
    id: "stark",
    name: "Stark",
    tribe: "Tough",
    gender: "male",
    saga: "Frieren",
    rank: "UZ",
    hp0: 1384,
    hp10: 1661,
    atk0: 1516,
    atk10: 1819,
    image: "Uz2/Stark.png"
  },
  {
    id: "aura",
    name: "Aura",
    tribe: "Eerie",
    gender: "female",
    saga: "Frieren",
    rank: "UZ",
    hp0: 1456,
    hp10: 1747,
    atk0: 1444,
    atk10: 1733,
    image: "Uz2/Aura.png"
  },
  {
    id: "king-darknyan",
    name: "King Darknyan",
    tribe: "Eerie",
    gender: "male",
    saga: "King",
    rank: "UZ",
    hp0: 1451,
    hp10: 1741,
    atk0: 1449,
    atk10: 1739,
    image: "Uz2/Kingdarknyan.png"
  },
  {
    id: "king-buchinyan",
    name: "King Buchinyan",
    tribe: "Charming",
    gender: "male",
    saga: "King",
    rank: "UZ",
    hp0: 1465,
    hp10: 1758,
    atk0: 1435,
    atk10: 1722,
    image: "Uz2/Kingbuchinyan.png"
  },
  {
    id: "king-usapyon",
    name: "King USApyon",
    tribe: "Shady",
    gender: "male",
    saga: "King",
    rank: "UZ",
    hp0: 1447,
    hp10: 1736,
    atk0: 1453,
    atk10: 1744,
    image: "Uz2/Kingusapyon.png"
  },
  {
    id: "sakurazaki",
    name: "Sakurazaki",
    tribe: "Tough",
    gender: "male",
    saga: "Inazuma Eleven",
    rank: "UZ",
    hp0: 1414,
    hp10: 1697,
    atk0: 1486,
    atk10: 1783,
    image: "Uz2/Sakurazaki.png"
  },
  {
    id: "kisoji",
    name: "Kisoji",
    tribe: "Heartful",
    gender: "male",
    saga: "Inazuma Eleven",
    rank: "UZ",
    hp0: 1473,
    hp10: 1768,
    atk0: 1423,
    atk10: 1708,
    image: "Uz2/Kisoji.png"
  },
  {
    id: "raika",
    name: "Raika",
    tribe: "Charming",
    gender: "female",
    saga: "Inazuma Eleven",
    rank: "UZ",
    hp0: 1485,
    hp10: 1782,
    atk0: 1415,
    atk10: 1698,
    image: "Uz2/Raika.png"
  },
  {
    id: "fubuki-shado",
    name: "Fubuki Shado",
    tribe: "Charming",
    gender: "female",
    saga: "",
    rank: "UZ",
    hp0: 1457,
    hp10: 1748,
    atk0: 1443,
    atk10: 1732,
    image: "Uz2/Fubukishado.png"
  },
  {
    id: "enra-eira",
    name: "Enra Eira",
    tribe: "Mysterious",
    gender: "female",
    saga: "",
    rank: "UZ",
    hp0: 1450,
    hp10: 1740,
    atk0: 1450,
    atk10: 1740,
    image: "Uz2/Enraeira.png"
  },
  {
    id: "hibari-akane-3rd-outfit",
    name: "Hibari Akane (3rd Outfit)",
    tribe: "Mysterious",
    gender: "female",
    saga: "Idol Royale",
    rank: "UZ",
    hp0: 1386,
    hp10: 1663,
    atk0: 1514,
    atk10: 1817,
    image: "Uz2/Hibariakane(3rdoutfit).png"
  },
  {
    id: "kozuki-kallen",
    name: "Kozuki Kallen",
    tribe: "Eerie",
    gender: "female",
    saga: "Code Geass",
    rank: "UZ",
    hp0: 1381,
    hp10: 1657,
    atk0: 1519,
    atk10: 1823,
    image: "Uz2/Kozukikallen.png"
  },
  {
    id: "c-c",
    name: "C.C.",
    tribe: "Mysterious",
    gender: "female",
    saga: "Code Geass",
    rank: "UZ",
    hp0: 1451,
    hp10: 1741,
    atk0: 1449,
    atk10: 1739,
    image: "Uz2/Cc.png"
  },
  {
    id: "nunnally-lamperouge",
    name: "Nunnally Lamperouge",
    tribe: "Heartful",
    gender: "female",
    saga: "Code Geass",
    rank: "UZ",
    hp0: 1469,
    hp10: 1763,
    atk0: 1431,
    atk10: 1717,
    image: "Uz2/Nunnallylamperouge.png"
  },
  {
    id: "milk-chocolate-lover-arachnus",
    name: "Milk Chocolate Lover Arachnus",
    tribe: "Eerie",
    gender: "male",
    saga: "Valentine",
    rank: "UZ",
    hp0: 1453,
    hp10: 1744,
    atk0: 1447,
    atk10: 1736,
    image: "Uz2/Milkchocolateloverarachnus.png"
  },
  {
    id: "bitter-chocolate-lover-toadal-dude",
    name: "Bitter Chocolate Lover Toadal Dude",
    tribe: "Tough",
    gender: "male",
    saga: "Valentine",
    rank: "UZ",
    hp0: 1395,
    hp10: 1674,
    atk0: 1505,
    atk10: 1806,
    image: "Uz2/Bitterchocolatelovertoadaldude.png"
  },
  {
    id: "valentine-bunny-eat",
    name: "Valentine Bunny Eat",
    tribe: "Mysterious",
    gender: "female",
    saga: "Valentine",
    rank: "UZ",
    hp0: 1393,
    hp10: 1672,
    atk0: 1507,
    atk10: 1808,
    image: "Uz2/Valentinebunnyeat.png"
  },
  {
    id: "great-bloody-battle-jibanyan",
    name: "Great Bloody Battle Jibanyan",
    tribe: "Charming",
    gender: "male",
    saga: "Great Bloody Battle",
    rank: "UZ",
    hp0: 1487,
    hp10: 1784,
    atk0: 1413,
    atk10: 1696,
    image: "Uz2/Greatbloodybattlejibanyan.png"
  },
  {
    id: "great-bloody-battle-kenma",
    name: "Great Bloody Battle Kenma",
    tribe: "Brave",
    gender: "male",
    saga: "Great Bloody Battle",
    rank: "UZ",
    hp0: 1472,
    hp10: 1766,
    atk0: 1428,
    atk10: 1714,
    image: "Uz2/Greatbloodybattlekenma.png"
  },
  {
    id: "great-bloody-battle-elzemekia",
    name: "Great Bloody Battle Elzemekia",
    tribe: "Charming",
    gender: "female",
    saga: "Great Bloody Battle",
    rank: "UZ",
    hp0: 1482,
    hp10: 1778,
    atk0: 1418,
    atk10: 1702,
    image: "Uz2/Greatbloodybattleelzemekia.png"
  },
  {
    id: "hibari-akane-4th-outfit",
    name: "Hibari Akane (4th Outfit)",
    tribe: "Mysterious",
    gender: "female",
    saga: "Idol Royale",
    rank: "UZ",
    hp0: 1501,
    hp10: 1801,
    atk0: 1399,
    atk10: 1679,
    image: "Uz2/Hibariakane(4thoutfit).png"
  },
  {
    id: "han-dora",
    name: "Han Dora",
    tribe: "Charming",
    gender: "female",
    saga: "",
    rank: "UZ",
    hp0: 1486,
    hp10: 1783,
    atk0: 1414,
    atk10: 1697,
    image: "Uz2/Handora.png"
  },
  {
    id: "byakuya-tora-tora",
    name: "Byakuya Tora Tora",
    tribe: "Brave",
    gender: "female",
    saga: "",
    rank: "UZ",
    hp0: 1398,
    hp10: 1678,
    atk0: 1502,
    atk10: 1802,
    image: "Uz2/Byakuyatoratora.png"
  },
  {
    id: "tokino-sora-school",
    name: "Tokino Sora (School)",
    tribe: "Charming",
    gender: "female",
    saga: "Hololive",
    rank: "UZ",
    hp0: 1449,
    hp10: 1739,
    atk0: 1451,
    atk10: 1741,
    image: "Uz2/Tokinosora(school).png"
  },
  {
    id: "hakui-koyori-school",
    name: "Hakui Koyori (School)",
    tribe: "Mysterious",
    gender: "female",
    saga: "Hololive",
    rank: "UZ",
    hp0: 1378,
    hp10: 1654,
    atk0: 1522,
    atk10: 1826,
    image: "Uz2/Hakuikoyori(school).png"
  },
  {
    id: "komapilot",
    name: "Komapilot",
    tribe: "Charming",
    gender: "male",
    saga: "",
    rank: "UZ",
    hp0: 1471,
    hp10: 1765,
    atk0: 1429,
    atk10: 1715,
    image: "Uz2/Komapilot.png"
  },
  {
    id: "jirogem",
    name: "JiroGem",
    tribe: "Charming",
    gender: "male",
    saga: "",
    rank: "UZ",
    hp0: 1483,
    hp10: 1780,
    atk0: 1417,
    atk10: 1700,
    image: "Uz2/Jirogem.png"
  },
  {
    id: "zeta",
    name: "Zeta",
    tribe: "Brave",
    gender: "female",
    saga: "The Eminence in Shadow",
    rank: "UZ",
    hp0: 1470,
    hp10: 1764,
    atk0: 1430,
    atk10: 1716,
    image: "Uz2/Zeta.png"
  },
  {
    id: "epsilon",
    name: "Epsilon",
    tribe: "Shady",
    gender: "female",
    saga: "The Eminence in Shadow",
    rank: "UZ",
    hp0: 1462,
    hp10: 1754,
    atk0: 1438,
    atk10: 1726,
    image: "Uz2/Epsilon.png"
  },
  {
    id: "awoken-alexia-midgar",
    name: "Awoken Alexia Midgar",
    tribe: "Heartful",
    gender: "female",
    saga: "The Eminence in Shadow",
    rank: "UZ",
    hp0: 1402,
    hp10: 1682,
    atk0: 1498,
    atk10: 1798,
    image: "Uz2/Awokenalexiamidgar.png"
  },
  {
    id: "todoroki-reona-dark-outfit",
    name: "Todoroki Reona (Dark Outfit)",
    tribe: "Tough",
    gender: "female",
    saga: "Idol Royale",
    rank: "UZ",
    hp0: 1478,
    hp10: 1774,
    atk0: 1422,
    atk10: 1706,
    image: "Uz2/Todorokireona(darkoutfit).png"
  },
  {
    id: "komaki-komami-dark-outfit",
    name: "Komaki Komami (Dark Outfit)",
    tribe: "Charming",
    gender: "female",
    saga: "Idol Royale",
    rank: "UZ",
    hp0: 1478,
    hp10: 1774,
    atk0: 1422,
    atk10: 1706,
    image: "Uz2/Komakikomami(darkoutfit).png"
  },
  {
    id: "wedding-ram",
    name: "Wedding Ram",
    tribe: "Mysterious",
    gender: "female",
    saga: "Re:Zero",
    rank: "UZ",
    hp0: 1462,
    hp10: 1754,
    atk0: 1438,
    atk10: 1726,
    image: "Uz2/Weddingram.png"
  },
  {
    id: "otto",
    name: "Otto",
    tribe: "Heartful",
    gender: "male",
    saga: "Re:Zero",
    rank: "UZ",
    hp0: 1403,
    hp10: 1684,
    atk0: 1497,
    atk10: 1796,
    image: "Uz2/Otto.png"
  },
  {
    id: "dark-cutie-snow-spect-hare",
    name: "Dark Cutie Snow Spect Hare",
    tribe: "Mysterious",
    gender: "female",
    saga: "Dark Cutie",
    rank: "UZ",
    hp0: 1385,
    hp10: 1662,
    atk0: 1515,
    atk10: 1818,
    image: "Uz2/Darkcutiesnowspecthare.png"
  },
  {
    id: "dark-cutie-camelia",
    name: "Dark Cutie Camelia",
    tribe: "Brave",
    gender: "female",
    saga: "Dark Cutie",
    rank: "UZ",
    hp0: 1461,
    hp10: 1753,
    atk0: 1439,
    atk10: 1727,
    image: "Uz2/Darkcutiecamelia.png"
  },
  {
    id: "sage-blizzaria",
    name: "Sage Blizzaria",
    tribe: "Charming",
    gender: "female",
    saga: "",
    rank: "UZ",
    hp0: 1390,
    hp10: 1668,
    atk0: 1510,
    atk10: 1812,
    image: "Uz2/Sageblizzaria.png"
  },
  {
    id: "magician-kyubi",
    name: "Magician Kyubi",
    tribe: "Mysterious",
    gender: "male",
    saga: "",
    rank: "UZ",
    hp0: 1463,
    hp10: 1756,
    atk0: 1437,
    atk10: 1724,
    image: "Uz2/Magiciankyubi.png"
  },
  {
    id: "playful-jibanyan",
    name: "Playful Jibanyan",
    tribe: "Charming",
    gender: "male",
    saga: "",
    rank: "UZ",
    hp0: 1407,
    hp10: 1688,
    atk0: 1493,
    atk10: 1792,
    image: "Uz2/Playfuljibanyan.png"
  },
  {
    id: "yabusame-racer-mezu",
    name: "Yabusame Racer Mezu",
    tribe: "Brave",
    gender: "male",
    saga: "Yabusame",
    rank: "UZ",
    hp0: 1457,
    hp10: 1748,
    atk0: 1443,
    atk10: 1732,
    image: "Uz2/Yabusameracermezu.png"
  },
  {
    id: "yabusame-racer-kirin",
    name: "Yabusame Racer Kirin",
    tribe: "Heartful",
    gender: "male",
    saga: "Yabusame",
    rank: "UZ",
    hp0: 1400,
    hp10: 1680,
    atk0: 1500,
    atk10: 1800,
    image: "Uz2/Yabusameracerkirin.png"
  },
  {
    id: "leafa-alo",
    name: "Leafa (ALO)",
    tribe: "Heartful",
    gender: "female",
    saga: "Sword Art Online",
    rank: "UZ",
    hp0: 1446,
    hp10: 1735,
    atk0: 1454,
    atk10: 1745,
    image: "Uz2/Leafa(alo).png"
  },
  {
    id: "yuuki-alo",
    name: "Yuuki (ALO)",
    tribe: "Brave",
    gender: "female",
    saga: "Sword Art Online",
    rank: "UZ",
    hp0: 1488,
    hp10: 1786,
    atk0: 1412,
    atk10: 1694,
    image: "Uz2/Yuuki(alo).png"
  },
  {
    id: "alice-uw",
    name: "Alice (UW)",
    tribe: "Tough",
    gender: "female",
    saga: "Sword Art Online",
    rank: "UZ",
    hp0: 1459,
    hp10: 1751,
    atk0: 1441,
    atk10: 1729,
    image: "Uz2/Alice(uw).png"
  },
  {
    id: "summer-leisure",
    name: "Summer Leisure",
    tribe: "Slippery",
    gender: "female",
    saga: "",
    rank: "UZ",
    hp0: 1479,
    hp10: 1775,
    atk0: 1421,
    atk10: 1705,
    image: "Uz2/Summerleisure.png"
  },
  {
    id: "pool-lifeguard-sergeant-burly",
    name: "Pool Lifeguard Sergeant Burly",
    tribe: "Brave",
    gender: "male",
    saga: "",
    rank: "UZ",
    hp0: 1461,
    hp10: 1753,
    atk0: 1439,
    atk10: 1727,
    image: "Uz2/Poollifeguardsergeantburly.png"
  },
  {
    id: "summer-vacation-bunny-mint",
    name: "Summer Vacation Bunny Mint",
    tribe: "Mysterious",
    gender: "female",
    saga: "",
    rank: "UZ",
    hp0: 1423,
    hp10: 1708,
    atk0: 1477,
    atk10: 1772,
    image: "Uz2/Summervacationbunnymint.png"
  },
  {
    id: "yog-blizzaria",
    name: "YOG Blizzaria",
    tribe: "Charming",
    gender: "female",
    saga: "",
    rank: "UZ",
    hp0: 1460,
    hp10: 1752,
    atk0: 1440,
    atk10: 1728,
    image: "Uz2/Yogblizzaria.png"
  },
  {
    id: "hog-sleepy-beauty",
    name: "HOG Sleepy Beauty",
    tribe: "Charming",
    gender: "female",
    saga: "",
    rank: "UZ",
    hp0: 1405,
    hp10: 1686,
    atk0: 1495,
    atk10: 1794,
    image: "Uz2/Hogsleepybeauty.png"
  },
  {
    id: "idol-otaku-jibanyan",
    name: "Idol Otaku Jibanyan",
    tribe: "Charming",
    gender: "male",
    saga: "",
    rank: "UZ",
    hp0: 1453,
    hp10: 1744,
    atk0: 1447,
    atk10: 1736,
    image: "Uz2/Idolotakujibanyan.png"
  },
  {
    id: "yukihana-lamy",
    name: "Yukihana Lamy",
    tribe: "Heartful",
    gender: "female",
    saga: "Hololive",
    rank: "UZ",
    hp0: 1404,
    hp10: 1685,
    atk0: 1496,
    atk10: 1795,
    image: "Uz2/Yukihanalamy.png"
  },
  {
    id: "natsuiro-matsuri",
    name: "Natsuiro Matsuri",
    tribe: "Shady",
    gender: "female",
    saga: "Hololive",
    rank: "UZ",
    hp0: 1453,
    hp10: 1744,
    atk0: 1447,
    atk10: 1736,
    image: "Uz2/Natsuiromatsuri.png"
  },
  {
    id: "fuwawa-abyssgard",
    name: "Fuwawa Abyssgard",
    tribe: "Charming",
    gender: "female",
    saga: "Hololive",
    rank: "UZ",
    hp0: 1455,
    hp10: 1746,
    atk0: 1445,
    atk10: 1734,
    image: "Uz2/Fuwawaabyssgard.png"
  },
  {
    id: "mococo-abyssgard",
    name: "Mococo Abyssgard",
    tribe: "Charming",
    gender: "female",
    saga: "Hololive",
    rank: "UZ",
    hp0: 1436,
    hp10: 1723,
    atk0: 1464,
    atk10: 1757,
    image: "Uz2/Mococoabyssgard.png"
  },
  {
    id: "frankenchismo",
    name: "Frankenchismo",
    tribe: "Brave",
    gender: "male",
    saga: "",
    rank: "UZ",
    hp0: 1399,
    hp10: 1679,
    atk0: 1501,
    atk10: 1801,
    image: "Uz2/Frankenchismo.png"
  },
  {
    id: "majin-casanuva",
    name: "Majin Casanuva",
    tribe: "Mysterious",
    gender: "male",
    saga: "",
    rank: "UZ",
    hp0: 1449,
    hp10: 1739,
    atk0: 1451,
    atk10: 1741,
    image: "Uz3/Majincasanuva.png"
  },
  {
    id: "shinigami-whirlweasel",
    name: "Shinigami Whirlweasel",
    tribe: "Charming",
    gender: "male",
    saga: "",
    rank: "UZ",
    hp0: 1459,
    hp10: 1751,
    atk0: 1441,
    atk10: 1729,
    image: "Uz3/Shinigamiwhirlweasel.png"
  },
  {
    id: "block-venoct",
    name: "Block Venoct",
    tribe: "Slippery",
    gender: "male",
    saga: "Block",
    rank: "UZ",
    hp0: 1480,
    hp10: 1776,
    atk0: 1565,
    atk10: 1878,
    image: "Uz3/Blockvenoct.png"
  },
  {
    id: "block-kyubi",
    name: "Block Kyubi",
    tribe: "Mysterious",
    gender: "male",
    saga: "Block",
    rank: "UZ",
    hp0: 1535,
    hp10: 1842,
    atk0: 1510,
    atk10: 1812,
    image: "Uz3/Blockkyubi.png"
  },
  {
    id: "block-komasan",
    name: "Block Komasan",
    tribe: "Charming",
    gender: "male",
    saga: "Block",
    rank: "UZ",
    hp0: 1529,
    hp10: 1835,
    atk0: 1516,
    atk10: 1819,
    image: "Uz3/Blockkomasan.png"
  },
  {
    id: "limit-broken-tokiwo-ubaune",
    name: "Limit Broken Tokiwo Ubaune",
    tribe: "Shady",
    gender: "female",
    saga: "",
    rank: "UZ",
    hp0: 1458,
    hp10: 1750,
    atk0: 1442,
    atk10: 1730,
    image: "Uz3/Limitbrokentokiwoubaune.png"
  },
  {
    id: "limit-broken-mitsumata-nozuchi",
    name: "Limit Broken Mitsumata Nozuchi",
    tribe: "Slippery",
    gender: "male",
    saga: "",
    rank: "UZ",
    hp0: 1403,
    hp10: 1684,
    atk0: 1497,
    atk10: 1796,
    image: "Uz3/Limitbrokenmitsumatanozuchi.png"
  },
  {
    id: "limit-broken-red-j",
    name: "Limit Broken Red J",
    tribe: "Charming",
    gender: "male",
    saga: "",
    rank: "UZ",
    hp0: 1452,
    hp10: 1742,
    atk0: 1448,
    atk10: 1738,
    image: "Uz3/Limitbrokenredj.png"
  }
];

const normalize = v => String(v ?? "").trim().toLowerCase();

const allSame = (team, prop, value) => {
  const members = (team || []).filter(Boolean);
  if (!members.length) return false;
  const target = normalize(value ?? members[0][prop]);
  return members.every(m => normalize(m[prop]) === target);
};

const UNITY_TYPES = {
  unity: {},
  femaleunity: { gender: "female" },
  sameteamunity: { sameTribe: true },
  sameteamunit: { sameTribe: true },
  sameteamunits: { sameTribe: true }
};

function getUnity(character) {
  if (!character) return null;
  for (const key of Object.keys(character)) {
    const type = UNITY_TYPES[key.toLowerCase()];
    if (type) return { ...character[key], condition: { ...type, ...character[key].condition } };
  }
  return null;
}

function isUnityActive(character, team) {
  const unity = getUnity(character);
  if (!unity) return false;
  const { sameTribe, saga } = unity.condition;
  if (sameTribe && !allSame(team, "tribe")) return false;
  if (saga && !allSame(team, "saga", saga)) return false;
  return true;
}

function unityAffects(character, member) {
  const unity = getUnity(character);
  if (!unity) return false;
  const { gender } = unity.condition;
  return !gender || !member || normalize(member.gender) === normalize(gender);
}

function getUnityBonus(character, team, member) {
  if (!isUnityActive(character, team) || !unityAffects(character, member)) return { hpPercent: 0, atkPercent: 0 };
  const { percent = 0, hpPercent = percent, atkPercent = percent } = getUnity(character);
  return { hpPercent, atkPercent };
}

function getUnityPercent(character, team, member) {
  if (!isUnityActive(character, team) || !unityAffects(character, member)) return 0;
  return getUnity(character).percent ?? 0;
}

