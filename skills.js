// Skills de cada yokai (texto original en inglés de The Puni Spreadsheet, por Sallitine).
// Clave = id de character.js; valor = líneas "Soultimate: …", "Skill 1: …", "Center Skill: …".
const SKILLS = {
 "women-enma": [
  "Soultimate: All popper + Inflates 4 puni",
  "Skill 1: Brave Tribe unity +28%",
  "Skill 2a: Starts battle with 95% of her own soult gauge filled",
  "Skill 2b: 500% Poppuni Pop damage bonus",
  "Center Skill: Brave units +7% HP and +7% Attack"
 ],
 "u-robonyan-ma": [
  "Soultimate: Mass Erasing of Puni (Extreme Popper)",
  "Skill 1: Starts battle with 95% of his own soult gauge filled",
  "Skill 2a: He gets leftover gauge after using his soult (50%)",
  "Skill 2b: Revives with 1250 HP",
  "Center Skill: Tough units +7% HP and +7% Attack"
 ],
 "chirpster": [
  "Soultimate: All Popper + Super Fever",
  "Skill 1: His soult gauge gets filled by 95% when entering fever",
  "Skill 2: Charming Tribe unity +28%",
  "Center Skill: Charming units +7% HP and +7% Attack"
 ],
 "kirito": [
  "Soultimate: Mass Erasing of Puni (Extreme Popper) + 100 Combo Popper if used with a G soult (size 26 requirement)",
  "Skill 1: His soult gauge gets filled by 95% when entering fever",
  "Skill 2a: Tough Tribe unity +28%",
  "Skill 2b: Revives with 1250 HP",
  "Center Skill: Tough units +6% HP and +8% Attack"
 ],
 "Summer-themed-leisure-mika": [
  "Soultimate: All Popper + Deals more damage if combo is 100+",
  "Skill 1: Her soult gauge gets filled by 95% when entering fever",
  "Skill 2: Increases the fever guage when linking by 2.4",
  "Center Skill: Mysterious units +7% HP and +7% Attack"
 ],
 "chizuru-mizuhara": [
  "Soultimate: All popper + Inflates 4 puni",
  "Skill 1: Charming Tribe unity +28%",
  "Skill 2: Large puni can be dropped again (21% chance)",
  "Center Skill: Charming units +1% HP and +13% Attack"
 ],
 "vacation-maiden-elzemekia": [
  "Soultimate: Mass Erasing of Puni (Extreme Popper)",
  "Skill 1: Charming Tribe unity +28%",
  "Skill 2: In fever she gains: (1) 21% ATK buff (2) Heals 700hp once. (3) Raises her soult filling effects by 75%",
  "Center Skill: Charming units +6% HP and +8% Attack"
 ],
 "ichika-summer-memory": [
  "Soultimate: All Popper + Soultimate gauge filler",
  "Skill 1: Large puni can be dropped again (21% chance)",
  "Skill 2: Mysterious Tribe unity +28%",
  "Center Skill: Mysterious units +7% HP and +7% Attack"
 ],
 "nino-summer-memory": [
  "Soultimate: Mass Erasing of Puni (Extreme Popper)",
  "Skill 1: Starts battle with 95% of her own soult gauge filled",
  "Skill 2: Eerie Tribe unity +28%",
  "Center Skill: Eerie units +7% HP and +7% Attack"
 ],
 "miku-summer-memory": [
  "Soultimate: All Popper + Super Fever",
  "Skill 1: Increases the fever guage when linking by 2.4",
  "Skill 2: Shady Tribe unity +28%",
  "Center Skill: Shady units +7% HP and +7% Attack"
 ],
 "yotsuba-summer-memory": [
  "Soultimate: All popper + Inflates 4 puni",
  "Skill 1: Own Puni has the chance to drop inflated 30% (Drop Big)",
  "Skill 2: Heartful Tribe unity +28%",
  "Center Skill: Heartful units +7% HP and +7% Attack"
 ],
 "itsuki-summer-memory": [
  "Soultimate: All Popper + All Rearrange",
  "Skill 1: Her soult gauge gets filled by 95% when entering fever",
  "Skill 2: Brave Tribe unity +28%",
  "Center Skill: Brave units +7% HP and +7% Attack"
 ],
 "mera-shishino-yog": [
  "Soultimate: Tap Inflate",
  "Skill 1: Large puni has a 75% chance to fill her own soult gauge",
  "Skill 2: Large puni can be dropped again (21% chance)",
  "Center Skill: Female units +3% HP and +9% Attack"
 ],
 "dame-demona": [
  "Soultimate: All Popper + Deals more damage if combo is 100+",
  "Skill 1: Shady Tribe unity +28%",
  "Skill 2: Own Puni has the chance to drop inflated 30% (Drop Big)",
  "Center Skill: Shady units +6% HP and +8% Attack"
 ],
 "shirakami-fubuki-autumn": [
  "Soultimate: Opens a rhythm game session on the field, Depending on performance then deals mega colossal damage towards the enemy",
  "Skill 1: Own Puni has the chance to drop inflated 30% (Drop Big)",
  "Skill 2a: All Hololive units get 30% HP and 26% Attack",
  "Skill 2b: 500% golf damage bonus",
  "Center Skill: Mysterious units +3% HP and +11% Attack"
 ],
 "jacky-lantern": [
  "Soultimate: All Popper + Super Fever",
  "Skill 1: Her soult gauge gets filled by 95% when entering fever",
  "Skill 2: Increases the fever guage when linking by 2.4",
  "Center Skill: 100 stories units +1% HP and +18% Attack"
 ],
 "shinra-kusakabe": [
  "Soultimate: All popper + Inflates 4 puni",
  "Skill 1: Starts battle with 95% of his own soult gauge filled",
  "Skill 2: Increases the fever guage when linking by 2.4",
  "Center Skill: Tough units +13% HP and +1% Attack"
 ],
 "happy-halloween-mika": [
  "Soultimate: Mass Erasing of Puni (Extreme Popper)",
  "Skill 1: Females recieve 28% HP and 19% ATK",
  "Skill 2: 50% Crit dmg based on dmg above 3k (40% chance)",
  "Center Skill: Female units +2% HP and +10% Attack"
 ],
 "block-enma": [
  "Soultimate: All popper + Inflates 4 puni",
  "Skill 1: Drops only as a size 6 kachi block (requires 20-14 taps to break) when broken gives 20% soult guage.",
  "Skill 2: Starts battle with 95% of his own soult gauge filled",
  "Center Skill: Enma units +1% HP and +13% Attack"
 ],
 "super-limit-broken-mckraken": [
  "Soultimate: All Popper + Super Fever",
  "Skill 1: Revives with 1250 HP",
  "Skill 2: Increases the fever guage when linking by 2.4",
  "Center Skill: Slippery units +9% HP and +5% Attack"
 ],
 "icaros": [
  "Soultimate:",
  "Skill 1: His soult gauge gets filled by 95% when entering fever",
  "Skill 2: 50% Crit dmg based on dmg above 3k (40% chance)",
  "Center Skill: Tough units +6% HP and +8% Attack"
 ],
 "auspicius-enma": [
  "Soultimate: All Popper + Soultimate Filler",
  "Skill 1: Own Puni has the chance to drop inflated 30% (Drop Big)",
  "Skill 2a: His soult gauge gets filled by 95% when entering fever",
  "Skill 2b: 500% golf damage bonus",
  "Center Skill: If this unit is in the center slot, he will provide the entire team with a 13% attack boost."
 ],
 "mera-shishino": [
  "Soultimate: All Popper + Deals more damage if combo is 100+",
  "Skill 1: Own Puni has the chance to drop inflated 30% (Drop Big)",
  "Skill 2: Large puni has a 70% chance to fill her own soult gauge",
  "Center Skill: If this unit is in the center slot, she will provide all females on the team with a 3% hp and 5% attack boost."
 ],
 "golden-claws": [
  "Soultimate: Mass Erasing of Puni (Extreme Popper)",
  "Skill 1: Starts the battle with a preorganized board (Full team)",
  "Skill 2: His soult gauge gets filled by 95% when entering fever",
  "Center Skill: If this unit is in the center slot, he will provide all charming units on the team with a 7% hp and 3% attack boost."
 ],
 "ichika-happy-valentine": [
  "Soultimate: All Popper + All Rearrange",
  "Skill 1: Increases the fever guage when linking by 2.4",
  "Skill 2: Starts battle with 95% of her own soult gauge filled",
  "Center Skill: Quintessential Quintuplets units get 12% hp and 8% attack boost."
 ],
 "nino-happy-valentine": [
  "Soultimate: All Popper + Accumulates per use",
  "Skill 1: Large puni can be dropped again (19% chance)",
  "Skill 2: Large puni has a 70% chance to fill her own soult gauge",
  "Center Skill: Quintessential Quintuplets units get 8% hp and 12% attack boost."
 ],
 "miku-happy-valentine": [
  "Soultimate: Mass Erasing of Puni (Extreme Popper)",
  "Skill 1: Adds addtional +3 size when linking any of her puni (100%)",
  "Skill 2: she gets leftover gauge after using her soult (46%)",
  "Center Skill: Quintessential Quintuplets units get 10% hp and 10% attack boost."
 ],
 "yotsuba-happy-valentine": [
  "Soultimate: All Popper + Super Fever",
  "Skill 1: Revives with 1040 HP",
  "Skill 2: Her soult gauge gets filled by 95% when entering fever",
  "Center Skill: Quintessential Quintuplets units get 14% hp and 6% attack boost."
 ],
 "itsuki-happy-valentine": [
  "Soultimate: All Popper + Soultimate gauge filler",
  "Skill 1: Using other soults has a 88% chance to fill her soult by 20%",
  "Skill 2: Own Puni has the chance to drop inflated 30% (Drop Big)",
  "Center Skill: Quintessential Quintuplets units get 6% hp and 14% attack boost."
 ],
 "meteorite-asu": [
  "Soultimate: All Popper + Soultimate gauge filler",
  "Skill 1: Large puni can be dropped again (19% chance)",
  "Skill 2: His soult gauge gets filled by 95% when entering fever",
  "Center Skill: eerie units get 4% hp and 6% attack."
 ],
 "neko-elzemekia": [
  "Soultimate: All Popper + Deals more damage if combo is 100+",
  "Skill 1: Heartful tribe unity +26%",
  "Skill 2: Her soult gauge gets filled by 95% when entering fever",
  "Center Skill: Heartful units get 5% Hp and 5% attack boost."
 ],
 "usada-pekora": [
  "Soultimate: Mass Erasing of Puni (Extreme Popper)",
  "Skill 1: Increases the fever guage when linking by 2.4",
  "Skill 2a: gains a 500% damage bonus only towards ohajiki",
  "Skill 2b: Her soult gauge gets filled by 95% when entering fever",
  "Center Skill: If this unit is in the center slot, .All Hololive units get 10% Hp and 5% attack boost."
 ],
 "hibari-akane": [
  "Soultimate: Tap Inflate",
  "Skill 1: Large puni has a 70% chance to fill her own soult gauge",
  "Skill 2: Large puni can be dropped again (19% chance)",
  "Center Skill: If this unit is in the center slot, All Female units get 5% Hp and 3% attack boost."
 ],
 "swirlious-gold": [
  "Soultimate: All Popper + Deals more damage if combo is 100+",
  "Skill 1: Starts battle with 99% of his own soult gauge filled",
  "Skill 2: Increases the fever guage when linking by 2.4",
  "Center Skill: If this unit is in the center slot, he will provide all charming units on the team with a 3% hp and 7% attack boost."
 ],
 "komaki-komami-(2nd outfit)": [
  "Soultimate: All Popper + Super Fever",
  "Skill 1: Large puni has a 70% chance to fill her own soult gauge",
  "Skill 2: Her soult gauge gets filled by 95% when entering fever",
  "Center Skill: If this unit is in the center slot, .All Female units get 4% HP and 4% attack."
 ],
 "moon-asu": [
  "Soultimate: All Popper + Super Fever",
  "Skill 1: Increases the fever guage when linking by 2.4",
  "Skill 2: All Ginga watch units get 26% HP and 30% Attack",
  "Center Skill: Ginga Watch Series units get 7% HP and 8% attack"
 ],
 "ginga-emperor-usapyon": [
  "Soultimate: All Popper + Soultimate gauge filler",
  "Skill 1: Starts the battle with a preorganized board (3 units)",
  "Skill 2: Using his soult there is a 20% chance for big puni to fall",
  "Center Skill: Shady units get 6% HP and 4% attack"
 ],
 "hyakumantenbara-salome": [
  "Soultimate: Mass Erasing of Puni (Extreme Popper)",
  "Skill 1: Adds addtional +3 size when linking any of her puni (100%)",
  "Skill 2a: Starts battle with 95% of her own soult gauge filled",
  "Skill 2b: gains a 500% damage bonus only towards ohajiki",
  "Center Skill: Mysterious units get 8% HP and 2% attack"
 ],
 "mamorina": [
  "Soultimate: All Popper + Soultimate gauge filler",
  "Skill 1: Large puni of her own has a 65% chance to fill other soults",
  "Skill 2: Sometimes can reduce damage by 90%",
  "Center Skill: Charming units get 9% HP and 1% attack"
 ],
 "yokaiju": [
  "Soultimate: All popper + Inflates 4 puni",
  "Skill 1: Starts battle with 95% of his own soult gauge filled",
  "Skill 2: Size 6 or above has a 60% chance to fill fever guage",
  "Center Skill: Tough units get 7% HP and 3% attack"
 ],
 "wedding-megumin": [
  "Soultimate: All Popper + Super Fever",
  "Skill 1: Her soult gauge gets filled by 95% when entering fever",
  "Skill 2a: Konosuba Units get 24% HP and 32% Atk",
  "Skill 2b: Increases the range when linking by 4.0",
  "Center Skill: Konosuba units get 7% HP and 13% attack"
 ],
 "supernova-asu": [
  "Soultimate: All popper + Inflates 4 puni",
  "Skill 1: His soult gauge gets filled by 95% when entering fever",
  "Skill 2: Large puni can be dropped again (19% chance)",
  "Center Skill: Heartful units get 7% hp and 3% attack."
 ],
 "orihime-mika": [
  "Soultimate: All Popper + Deals more damage if combo is 100+",
  "Skill 1: Adds addtional +3 size when linking any of her puni (100%)",
  "Skill 2: Linking her puni fills her soult gauge by a massive amount",
  "Center Skill: Mysterious units get 4% HP and 6% attack"
 ],
 "12-super-gods-jibanyan": [
  "Soultimate: All Popper + Soultimate gauge filler",
  "Skill 1: Starts battle with 95% of his own soult gauge filled",
  "Skill 2: Tough Tribe unity +26%",
  "Center Skill: Tough units get 8% HP and 2% attack"
 ],
 "young-bourgeoisG": [
  "Soultimate: Tap Inflate",
  "Skill 1: Starts battle with 95% of his own soult gauge filled",
  "Skill 2: Increases the fever guage when linking by 2.4",
  "Center Skill: 100 Stories units get 9% HP and 6% attack"
 ],
 "headasteam": [
  "Soultimate: All Popper + Super Fever",
  "Skill 1: Deals more dmg based on hp (80% damage bonus that is linear towards current hp so 100% hp is 0% and 50% is 40%)New!",
  "Skill 2: 95% Soult guage fills when taking damage (100% chance)",
  "Center Skill: Heartful units get 3% HP and 7% attack"
 ],
 "master-roxy": [
  "Soultimate: All Popper + Deals more damage if combo is 100+",
  "Skill 1: Own Puni has the chance to drop inflated 30% (Drop Big)",
  "Skill 2: Slippery Tribe unity +26%",
  "Center Skill: Slippery units get 8% HP and 2% attack"
 ],
 "ancient-enma": [
  "Soultimate: Mass Erasing of Puni (Extreme Popper)",
  "Skill 1: Starts battle with 95% of his own soult gauge filled",
  "Skill 2: Revives with 1040 HP",
  "Center Skill: Enma units get 6% HP and 4% attack"
 ],
 "Dame-dedtime": [
  "Soultimate: All popper + Inflates 4 puni",
  "Skill 1: Own Puni has the chance to drop inflated 30% (Drop Big)",
  "Skill 2: Shady Tribe unity +26%",
  "Center Skill: Shady units get 5% HP and 5% attack"
 ],
 "demon-lord-rimuru": [
  "Soultimate: Mass Erasing of Puni (Extreme Popper)",
  "Skill 1: Own Puni has the chance to drop inflated 30% (Drop Big)",
  "Skill 2a: he gets leftover gauge after using his soult (46%)",
  "Skill 2b: Eerie Tribe unity +26%",
  "Center Skill: Eerie units get 5% HP and 5% attack"
 ],
 "mikazuki": [
  "Soultimate: All popper + Inflates 4 puni",
  "Skill 1: Starts battle with 95% of her own soult gauge filled",
  "Skill 2: Revives with 1040 HP",
  "Center Skill: female units get 6% HP and 2% attack"
 ],
 "retinado": [
  "Soultimate: All popper + Inflates 4 puni",
  "Skill 1: Starts battle with 95% of his own soult gauge filled",
  "Skill 2: Starts the battle with 95% fever gauge",
  "Center Skill: eerie units get 3% HP and 7% attack"
 ],
 "sport-day-blizzaria": [
  "Soultimate: All Popper + Deals more damage if combo is 100+",
  "Skill 1: Increases the fever guage when linking by 2.4",
  "Skill 2a: Her soult gauge gets filled by 95% when entering fever",
  "Skill 2b: Females recieve 24% HP and 18% ATK",
  "Center Skill: Female units get 2% HP and 6% attack"
 ],
 "halloween-marine": [
  "Soultimate: All Popper + Soultimate gauge filler",
  "Skill 1: Slippery Tribe unity +26%",
  "Skill 2: 50% Crit dmg based on dmg above 3k (40% chance)",
  "Center Skill: Slippery units get 5% HP and 5% attack"
 ],
 "punipuni-kakusei-katie": [
  "Soultimate: All Popper + Super Fever",
  "Skill 1: Increases the fever guage when linking by 2.4",
  "Skill 2: In fever she gains: (1) 25% ATK buff (2) Heals 700hp once. (3) Own Puni has the chance to drop inflated 30% (Drop Big)",
  "Center Skill: Charming units get 5% HP and 5% attack"
 ],
 "king-jibanyan": [
  "Soultimate: Deals 20% of the enemy CURRENT HP (600k max) and deals an additional attack that pops the entire board (AOE)",
  "Skill 1: Starts battle with 95% of his own soult gauge filled",
  "Skill 2a: Charming Tribe unity +26%",
  "Skill 2b: he gets leftover gauge after using his soult (46%)",
  "Center Skill: Charming units get 1% HP and 9% attack"
 ],
 "parade-enma": [
  "Soultimate: All Popper + Super Fever",
  "Skill 1: Revives with 1040 HP",
  "Skill 2a: Adds addtional +3 size when linking any of his puni(100%)",
  "Skill 2b: Starts the battle with a 10 second stun upon the enemy",
  "Center Skill: Enma units get 5% HP and 5% attack"
 ],
 "king-komasan": [
  "Soultimate: All Popper + Soultimate gauge filler",
  "Skill 1: Starts battle with 95% of his own soult gauge filled",
  "Skill 2a: Puni can fall inflated only during the start of the battle",
  "Skill 2b: Large puni can be dropped again (19% chance)",
  "Center Skill: Charming units get 5% HP and 5% attack"
 ],
 "puni-king": [
  "Soultimate: Tap Inflate",
  "Skill 1: Large puni has a 70% chance to fill his own soult gauge",
  "Skill 2a: Increases the fever guage when linking by 2.4",
  "Skill 2b: Brave Tribe unity +26%",
  "Center Skill: Brave units get 5% HP and 5% attack"
 ],
 "zazel-tentacles": [
  "Soultimate: Mass Erasing of Puni (Extreme Popper)",
  "Skill 1: Using his soult there is a 20% chance for big puni to fall",
  "Skill 2: Revives with 1040 HP",
  "Center Skill: Slippery units get 9% HP and 1% attack"
 ],
 "frieren": [
  "Soultimate: All popper + Inflates 4 puni",
  "Skill 1: Large puni can be dropped again (19% chance)",
  "Skill 2a: Adds addtional +3 size when linking any of her puni (100%)",
  "Skill 2b: 500% golf damage bonus",
  "Center Skill: Slippery units get 7% HP and 3% attack"
 ],
 "himmel": [
  "Soultimate: All Popper + Soultimate gauge filler",
  "Skill 1: Starts battle with 95% of his own soult gauge filled",
  "Skill 2a: Brave Tribe unity +26%",
  "Skill 2b: His soult gauge gets filled by 95% when entering fever",
  "Skill 2c: In fever he gains: (1) 20% ATK buff (2) Heals 700hp once. (3) Raises his soult filling effects by 70%",
  "Center Skill: Brave units get 4% HP and 6% attack"
 ],
 "super-puni-king": [
  "Soultimate: All Popper + Super Fever",
  "Skill 1: Large puni has a 70% chance to fill his own soult gauge",
  "Skill 2a: His soult gauge gets filled by 95% when entering fever",
  "Skill 2b: Tough Tribe unity +26%",
  "Center Skill: Tough units get 6% HP and 4% attack"
 ],
 "World-Dedtime": [
  "Soultimate: All Popper + Deals more damage if combo is 100+",
  "Skill 1: Own Puni has the chance to drop inflated 30% (Drop Big)",
  "Skill 2: Size 4 or above has a 80% chance to boost dmg by 2%(40% max)",
  "Center Skill: Shady units get 9% HP and 1% attack"
 ],
 "Yabusame-Zazel": [
  "Soultimate: Mass Erasing of Puni (Extreme Popper)",
  "Skill 1: Shady Tribe unity +26%",
  "Skill 2: His soult gauge gets filled by 95% when entering fever",
  "Center Skill: Shady units get 4% HP and 6% attack"
 ],
 "destin-billows": [
  "Soultimate: All popper + Inflates 4 puni",
  "Skill 1: Adds addtional +3 size when linking any of his puni (100%)",
  "Skill 2a: Starts battle with 95% of his own soult gauge filled",
  "Skill 2b: Large puni can be dropped again (19% chance)",
  "Center Skill: Inazuma Eleven units get 14% HP and 6% attack"
 ],
 "harper-evans": [
  "Soultimate: All popper (does more damage if he pops more puni of himself)",
  "Skill 1: His soult gauge gets filled by 95% when entering fever",
  "Skill 2a: Revives with 1040 HP",
  "Skill 2b: gains a 500% damage bonus only towards ohajiki",
  "Center Skill: Tough units get 5% HP and 5% attack"
 ],
 "mera-shishino-(3rd outfit)": [
  "Soultimate: All Popper + Soultimate gauge filler",
  "Skill 1: Starts battle with 95% of her own soult gauge filled",
  "Skill 2a: Large puni of her own has a 65% chance to fill other soults",
  "Skill 2b: All Idol Royale units get 26% HP and 30% Attack",
  "Center Skill: Female units get 2% HP and 6% attack"
 ],
 "ashuramii": [
  "Soultimate: All Popper + Super Fever",
  "Skill 1: Deals more dmg based on hp (85% damage bonus that is linear towards current hp so 100% hp is 80% and 50% is 42.5%",
  "Skill 2: In fever she gains: (1) 20.5% ATK buff (2) Heals 700hp once. (3) Raises her soult filling effects by 70%",
  "Center Skill: Female units get 1% HP and 7% attack"
 ],
 "massiface": [
  "Soultimate: All Popper + Deals more damage if combo is 100+",
  "Skill 1: Tough Tribe unity +26%",
  "Skill 2: Reduce appearence rate by 1.15",
  "Center Skill: Tough units get 4% HP and 6% attack"
 ],
 "lelouch": [
  "Soultimate: All popper + Enables co-linking to any puni for 3.3 seconds (size 14 soult guage requirement / 19 for Gsoult)",
  "Skill 1: Large puni can be dropped again (19% chance)",
  "Skill 2a: His soult gauge gets filled by 95% when entering fever",
  "Skill 2b: 500% golf damage bonus",
  "Center Skill: Shady units get 3% HP and 7% attack"
 ],
 "suzaku": [
  "Soultimate: All popper + Inflates 4 puni",
  "Skill 1: Revives with 1040 HP",
  "Skill 2: Brave Tribe unity +26%",
  "Center Skill: Brave units get 6% HP and 4% attack"
 ],
 "valentine-mika": [
  "Soultimate: All Popper + Soultimate gauge filler",
  "Skill 1: Heartful tribe unity +26%",
  "Skill 2: Using her soult there is a 20% chance for big puni to fall",
  "Center Skill: Heartful units get 4% HP and 6% attack"
 ],
 "valentine-orochi": [
  "Soultimate: All popper + Inflates 4 puni",
  "Skill 1: Starts battle with 95% of his own soult gauge filled",
  "Skill 2a: Revives with 1040 HP",
  "Skill 2b: All 100 stories units get 26% HP and 30% Attack",
  "Center Skill: Slippery units get 6% HP and 4% attack"
 ],
 "ukoi-tanone": [
  "Soultimate: All Popper + Super Fever",
  "Skill 1: Her soult gauge gets filled by 95% when entering fever",
  "Skill 2: Increases the fever guage when linking by 2.4",
  "Center Skill: Eerie units get 6% HP and 4% attack"
 ],
 "bloodybattleprixmika": [
  "Soultimate: All Popper + Super Fever",
  "Skill 1: Increases the fever guage when linking by 2.4",
  "Skill 2a: Females recieve 24% HP and 18% ATK",
  "Skill 2b: Deals more dmg based on hp (75% damage bonus that is linear towards current hp so 100% hp is 0% and 50% is 37.5%)",
  "Center Skill: Brave units get 7% HP and 5% attack"
 ],
 "great-bloody-battle-god-snottle": [
  "Soultimate: All popper + Inflates 4 puni",
  "Skill 1: Puni can fall inflated only during the start of the battle",
  "Skill 2: Large puni can be dropped again (19% chance)",
  "Center Skill: Mysterious units get 7% HP and 5% attack"
 ],
 "yohko-komashura": [
  "Soultimate: All Popper + Super Fever",
  "Skill 1: If all members of the team are of the same tribe grants a 32% unity bonus (Literally run mysterious or this skill is not working)",
  "Skill 2: Revives with 1040 HP",
  "Center Skill: Mysterious units get 5% HP and 10% attack"
 ],
 "mera-shishino-(4thoutfit)": [
  "Soultimate: Mass Erasing of Puni (Extreme Popper)",
  "Skill 1: Starts battle with 95% of her own soult gauge filled",
  "Skill 2: All Idol Royale units get 26% HP and 30% Attack",
  "Center Skill: Female units get 4% HP and 6% attack"
 ],
 "genbu-norika": [
  "Soultimate: Tap Inflate",
  "Skill 1: Large puni has a 70% chance to fill her own soult gauge",
  "Skill 2: Reduce appearence rate by 1.15",
  "Center Skill: Slippery units get 7% HP and 5%attack"
 ],
 "agent-x": [
  "Soultimate: All Popper + Soultimate gauge filler",
  "Skill 1: +5 Ypoints (cannot stack)",
  "Skill 2: gains a 500% damage bonus only towards ohajiki",
  "Center Skill: Eerie units get 4% HP and 8% attack"
 ],
 "nekomata-okayu-(school)": [
  "Soultimate: Mass Erasing of Puni (Extreme Popper)",
  "Skill 1: Starts battle with 95% of her own soult gauge filled",
  "Skill 2: All Hololive units get 26% HP and 30% Attack",
  "Center Skill: Hololive units get 8% HP and 7% attack"
 ],
 "houshou-marine-(school)": [
  "Soultimate: All Popper + Deals more damage if combo is 100+",
  "Skill 1: Revives with 1040 HP",
  "Skill 2a: Continously heals 500 Hp after 5 seconds up to 10 times",
  "Skill 2b: Her soult gauge gets filled by 95% when entering fever",
  "Center Skill: Eerie units get 6% HP and 6% attack"
 ],
 "tsunomaki-watame-(school)": [
  "Soultimate: Selects 3 puni and pops",
  "Skill 1: Increases the fever guage when linking by 2.4",
  "Skill 2a: Linking own 4 chain has a 70% to give +1 around area",
  "Skill 2b: gains a 500% damage bonus only towards ohajiki",
  "Center Skill: Charming units get 5% HP and 7% attack"
 ],
 "j-power-transform": [
  "Soultimate: All Popper + Deals more damage if combo is 100+",
  "Skill 1: His soult gauge gets filled by 95% when entering fever",
  "Skill 2: Adds addtional +3 size when linking any of his puni (100%)",
  "Center Skill: 100 stories units get 12% HP and 5% attack"
 ],
 "nyanjpt": [
  "Soultimate: All popper + Inflates 4 puni",
  "Skill 1: He gets leftover gauge after using his soult (46%)",
  "Skill 2a: Charming Tribe unity +26%",
  "Skill 2b: Starts battle with 95% of his own soult gauge filled",
  "Center Skill: 100 stories units get 10% HP and 7% attack"
 ],
 "red-flash-boushinyan": [
  "Soultimate: All Popper + Super Fever",
  "Skill 1: If all members of the team are of the same tribe grants a 32% unity bonus (Literally run brave or this skill is not working)",
  "Skill 2: Linking his puni fills his soult gauge by a massive amount",
  "Center Skill: Brave units get 5% HP and 8% attack"
 ],
 "chansin": [
  "Soultimate: All Popper + chance to crit",
  "Skill 1: Own Puni has the chance to drop inflated 10% (Drop Big but he can drop from size 2-6)",
  "Skill 2: Size 6 or above has a 80% chance to boost dmg by 3%(45% max)",
  "Center Skill: Brave units get 11% HP and 1% attack"
 ],
 "victory-last-girakoma": [
  "Soultimate: Link Popper + Soultimate gauge filler",
  "Skill 1: Mysterious Tribe unity +26%",
  "Skill 2: In fever he gains: (1) 20.5% ATK buff (2) Heals 700hp once. (3) Raises his soult filling effects by 70%",
  "Center Skill: Mysterious units get 1% HP and 11% attack"
 ],
 "armed-mecha-orochi": [
  "Soultimate: All Popper + Super Fever",
  "Skill 1: In fever he gains: (1) 20.5% ATK buff (2) Heals 700hp once. (3) Raises his soult filling effects by 70%",
  "Skill 2: Revives with 1040 HP",
  "Center Skill: Tough units get 7% HP and 5% attack"
 ],
 "black-gold-dianyan": [
  "Soultimate: All Popper + Soultimate gauge filler",
  "Skill 1: Starts the battle with a preorganized board (3 units)",
  "Skill 2: Increases the fever guage when linking by 2.4",
  "Center Skill: Brave units get 4% HP and 8% attack"
 ],
 "shadow": [
  "Soultimate: All Popper that deals more damage the more you tap at the beginning of the soult",
  "Skill 1: Starts battle with 95% of his own soult gauge filled",
  "Skill 2a: Increases the fever guage when linking by 2.4",
  "Skill 2b: ShadyTribe unity +26%",
  "Center Skill: Shady units get 7% HP and 5% attack"
 ],
 "alpha": [
  "Soultimate: All popper + Inflates 4 puni",
  "Skill 1: Puni can fall inflated only during the start of the battle",
  "Skill 2: Own Puni has the chance to drop inflated 30% (Drop Big)",
  "Center Skill: Slippery units get 6% HP and 6% attack"
 ],
 "beta": [
  "Soultimate: Tap Inflate",
  "Skill 1: Own Puni has the chance to drop inflated 30% (Drop Big)",
  "Skill 2a: Charming Tribe unity +26%",
  "Skill 2b: 500% golf damage bonus",
  "Center Skill: Charming units get 6% HP and 6% attack"
 ],
 "delta": [
  "Soultimate: All popper + Inflates 4 puni",
  "Skill 1: Large puni can be dropped again (19% chance)",
  "Skill 2: Revives with 1040 HP",
  "Center Skill: Tough units get 6% HP and 6% attack"
 ],
 "mera-shishino-(final-outfit)": [
  "Soultimate: All Popper + Super Fever",
  "Skill 1: In fever she gains: (1) 24% ATK buff (2) Heals 680hp once. (3) Own Puni has the chance to drop inflated 30% (Drop Big)",
  "Skill 2a: Revives with 1040 HP",
  "Skill 2b: Continously heals 500 Hp after 5 seconds up to 10 times",
  "Center Skill: Brave units get 6% HP and 6% attack"
 ],
 "kessoku-inori": [
  "Soultimate: All Popper + Soultimate gauge filler",
  "Skill 1: Large puni can be dropped again (19% chance)",
  "Skill 2: Heartful tribe unity +26%",
  "Center Skill: Heartful units get 2% HP and 10% attack"
 ],
 "fudo-ouka": [
  "Soultimate: All Popper + Deals more damage if combo is 100+",
  "Skill 1: Her soult gauge gets filled by 95% when entering fever",
  "Skill 2a: ENMA tribe unity +26% (This is not a joke)",
  "Skill 2b: Starts battle with 95% of her own soult gauge filled",
  "Center Skill: Enma units get 8% HP and 4% attack"
 ],
 "azure-storm-slurpent": [
  "Soultimate: All Popper + Super Fever",
  "Skill 1: If all members of the team are of the same tribe grants a 32% unity bonus (Literally run slippery or this skill is not working)",
  "Skill 2: In fever he gains: (1) 20.5% ATK buff (2) Heals 700hp once. (3) Raises his soult filling effects by 70%",
  "Center Skill: Slippery units get 6% HP and 9% attack"
 ],
 "todoroki-reona-(shine-outfit)": [
  "Soultimate: All popper + Inflates 4 puni",
  "Skill 1: Adds addtional +3 size when linking any of her puni (100%)",
  "Skill 2: Large puni can be dropped again (19% chance)",
  "Center Skill: Female units get 3% HP and 7% attack"
 ],
 "junkernaut": [
  "Soultimate: Mass Erasing of Puni (Extreme Popper)",
  "Skill 1: Tough Tribe unity +26%",
  "Skill 2: He gets leftover gauge after using his soult (46%)",
  "Center Skill: Tough units get 5% HP and 7% attack"
 ],
 "wedding-emilia": [
  "Soultimate: Mass Erasing of Puni (Extreme Popper)",
  "Skill 1: Adds addtional +3 size when linking any of her puni (100%)",
  "Skill 2a: She gets leftover gauge after using her soult (46%)",
  "Skill 2b: Heartful tribe unity +26%",
  "Center Skill: Heartful units get 7% HP and 5% attack"
 ],
 "wedding-rem": [
  "Soultimate: All popper + Inflates 4 puni",
  "Skill 1: Starts battle with 95% of her own soult gauge filled",
  "Skill 2: Revives with 1040 HP",
  "Center Skill: Tough units get 4% HP and 8% attack"
 ],
 "wedding-beatrice": [
  "Soultimate: All Popper + Soultimate gauge filler",
  "Skill 1: Her soult gauge gets filled by 95% when entering fever",
  "Skill 2: Own Puni has the chance to drop inflated 30% (Drop Big)",
  "Center Skill: Mysterious units get 7% HP and 5% attack"
 ],
 "super-awakened-emilia": [
  "Soultimate: All Popper + Soultimate gauge filler",
  "Skill 1: Her soult gauge gets filled by 95% when entering fever",
  "Skill 2: All Rezero units get 26% HP and 30% Attack",
  "Center Skill: Heartful units get 6% HP and 4% attack"
 ],
 "super-awakened-rem": [
  "Soultimate: All Popper + Transform/Power Up",
  "Skill 1: Size 4 or above has a 80% chance to boost dmg by 2%(40% max)",
  "Skill 2: All Rezero units get 26% HP and 30% Attack",
  "Center Skill: Tough units get 3% HP and 7% attack"
 ],
 "super-awakened-beatrice": [
  "Soultimate: Selects 3 puni and pops",
  "Skill 1: Deals more dmg based on hp (85% damage bonus that is linear towards current hp so 100% hp is 80% and 50% is 42.5%",
  "Skill 2: All Rezero units get 26% HP and 30% Attack",
  "Center Skill: Mysterious units get 5% HP and 5% attack"
 ],
 "heaven-olight": [
  "Soultimate: All popper + Enables co-linking to any puni for 3.3 seconds",
  "Skill 1: Starts battle with 95% of his own soult gauge filled",
  "Skill 2: All 100 stories units get 26% HP and 30% Attack",
  "Center Skill: 100 stories units get 7% HP and 10% attack"
 ],
 "blood-rain-hareonna-(shadow)": [
  "Soultimate: All popper + Inflates 4 puni",
  "Skill 1: She gets leftover gauge after using her soult (46%)",
  "Skill 2: Her soult gauge gets filled by 95% when entering fever",
  "Center Skill: 100 stories units get 11% HP and 6% attack"
 ],
 "green-tree-elderbloom": [
  "Soultimate: All Popper + Super Fever",
  "Skill 1: If all members of the team are of the same tribe grants a 32% unity bonus (Literally run heartful or this skill is not working)",
  "Skill 2: His soult gauge gets filled by 95% when entering fever",
  "Center Skill: Heartful units get 5% HP and 10% attack"
 ],
 "hareonna": [
  "Soultimate: Tap Inflate",
  "Skill 1: Increases the fever guage when linking by 2.4",
  "Skill 2: Revives with 1040 HP",
  "Center Skill: Charming units get 7% HP and 5% attack"
 ],
 "hibari-akane-(hydrangea-outfit)": [
  "Soultimate: Deals 20% of the enemy CURRENT HP (600k max) and deals an additional attack that pops the entire board (AOE)",
  "Skill 1: Her soult gauge gets filled by 95% when entering fever",
  "Skill 2: Mysterious Tribe unity +26%",
  "Center Skill: Mysterious units get 6% HP and 6% attack"
 ],
 "warrior-orochi": [
  "Soultimate: Mass Erasing of Puni (Extreme Popper)",
  "Skill 1: Increases the fever guage when linking by 2.4",
  "Skill 2: Own Puni has the chance to drop inflated 30% (Drop Big)",
  "Center Skill: Slippery units get 5% HP and 7% attack"
 ],
 "demon-lord-kuubou": [
  "Soultimate: Tap Inflate",
  "Skill 1: His soult gauge gets filled by 95% when entering fever",
  "Skill 2: Increases the fever guage when linking by 2.4",
  "Center Skill: Eerie units get 7% HP and 5% attack"
 ],
 "horse-girl-bunny-mint": [
  "Soultimate: All popper + Inflates 4 puni",
  "Skill 1: Large puni can be dropped again (19% chance)",
  "Skill 2: Large puni has a 70% chance to fill her own soult gauge",
  "Center Skill: Mysterious units get 5% HP and 7% attack"
 ],
 "hunting-outfit-otohime": [
  "Soultimate: All Popper + Deals more damage if combo is 100+",
  "Skill 1: Her soult gauge gets filled by 95% when entering fever",
  "Skill 2: Own Puni has the chance to drop inflated 30% (Drop Big)",
  "Center Skill: Charming units get 8% HP and 4% attack"
 ],
 "horse-girl-jaen": [
  "Soultimate: Tap Inflate",
  "Skill 1: Size 4 or above has a 80% chance to boost dmg by 2%(40% max)",
  "Skill 2: Large puni of her own has a 65% chance to fill other soults",
  "Center Skill: Enma units get 6% HP and 6% attack"
 ],
 "asuna": [
  "Soultimate: All popper + Deals more damage if soult is used after another soult",
  "Skill 1: Using other soults has a 90% chance to fill her soult by 25%",
  "Skill 2a: Linking her puni fills her soult gauge by a massive amount",
  "Skill 2b: Large puni has a 100% chance to fill her own soult gauge",
  "Center Skill: Tough units 3% HP and 9% Attack"
 ],
 "sinnon": [
  "Soultimate: All Popper + Aim line with scope to deal more damage",
  "Skill 1: Increases the fever guage when linking by 2.4",
  "Skill 2a: gains a 500% damage bonus only towards ohajiki",
  "Skill 2b: Starts battle with 95% of her own soult gauge filled",
  "Center Skill: Mysterious units get 9% HP and 3% attack"
 ],
 "limit-broken-sighborg-y": [
  "Soultimate: All Popper + Super Fever",
  "Skill 1: Deals more dmg based on hp (85% damage bonus that is linear towards current hp so 100% hp is 80% and 50% is 42.5%",
  "Skill 2: Tough Tribe unity +26%",
  "Center Skill: 100 stories units get 13% HP and 4% attack"
 ],
 "summer-vacation-blizzaria": [
  "Soultimate: All Popper + Soultimate gauge filler",
  "Skill 1: Using other soults has a 88% chance to fill her soult by 20%",
  "Skill 2: Adds addtional +3 size when linking any of her puni (100%)",
  "Center Skill: Charming units get 9% HP and 3% attack"
 ],
 "ichika-swimsuit": [
  "Soultimate: All Popper + Soultimate gauge filler",
  "Skill 1: Large puni can be dropped again (19% chance)",
  "Skill 2: Females recieve 24% HP and 18% ATK",
  "Center Skill: Quintessential Quintuplets units get 7% HP and 15% attack"
 ],
 "nino-swimsuit": [
  "Soultimate: Mass Erasing of Puni (Extreme Popper)",
  "Skill 1: Starts battle with 95% of her own soult gauge filled",
  "Skill 2: Females recieve 24% HP and 18% ATK",
  "Center Skill: Quintessential Quintuplets units get 7% HP and 15% attack"
 ],
 "miku-swimsuit": [
  "Soultimate: All Popper + Super Fever",
  "Skill 1: Increases the fever guage when linking by 2.4",
  "Skill 2: Females recieve 24% HP and 18% ATK",
  "Center Skill: Quintessential Quintuplets units get 7% HP and 15% attack"
 ],
 "yotsuba-swimsuit": [
  "Soultimate: All popper + Inflates 4 puni",
  "Skill 1: Own Puni has the chance to drop inflated 30% (Drop Big)",
  "Skill 2: Females recieve 24% HP and 18% ATK",
  "Center Skill: Quintessential Quintuplets units get 7% HP and 15% attack"
 ],
 "itsuki-swimsuit": [
  "Soultimate: All Popper + All Rearrange",
  "Skill 1: Her soult gauge gets filled by 95% when entering fever",
  "Skill 2: Females recieve 24% HP and 18% ATK",
  "Center Skill: Quintessential Quintuplets units get 7% HP and 15% attack"
 ],
 "super-awakened-ichika-happy-wedding": [
  "Soultimate: Mass Erasing of Puni (Extreme Popper)",
  "Skill 1: Own Puni has the chance to drop inflated 30% (Drop Big)",
  "Skill 2: Deals more dmg based on hp (75% damage bonus that is linear towards current hp so 100% hp is 0% and 50% is 37.5%)",
  "Center Skill: Mysterious units get 5% HP and 5% attack"
 ],
 "super-awakened-nino-happy-wedding": [
  "Soultimate: All Popper + Soultimate gauge filler",
  "Skill 1: Starts battle with 95% of her own soult gauge filled",
  "Skill 2: She gets leftover gauge after using her soult (46%)",
  "Center Skill: Eerie units get 5% HP and 5% attack"
 ],
 "super-awakened-miku-happy-wedding": [
  "Soultimate: All Popper + All Rearrange",
  "Skill 1: Adds addtional +3 size when linking any of her puni (100%)",
  "Skill 2: Her soult gauge gets filled by 95% when entering fever",
  "Center Skill: Shady units get 5% HP and 5% attack"
 ],
 "super-awakened-yotsuba-happy-wedding": [
  "Soultimate: Selects 3 puni",
  "Skill 1: Large puni of her own has a 65% chance to fill other soults",
  "Skill 2: Increases the fever guage when linking by 2.4",
  "Center Skill: Heartful units get 5% HP and 5% attack"
 ],
 "super-awakened-itsuki-happy-wedding": [
  "Soultimate: All Popper + Super Fever",
  "Skill 1: Large puni can be dropped again (19% chance)",
  "Skill 2: In fever she gains: (1) 24% ATK buff (2) Heals 650hp once. (3) Own Puni has the chance to drop inflated 30% (Drop Big)",
  "Center Skill: Brave units get 5% HP and 5% attack"
 ],
 "hog-snow-white": [
  "Soultimate: All Popper + Super Fever",
  "Skill 1: Her soult gauge gets filled by 95% when entering fever",
  "Skill 2: Increases the fever guage when linking by 2.4",
  "Center Skill: Mysterious units get 4% HP and 8% attack"
 ],
 "yog-eterna-queen": [
  "Soultimate: All popper + Inflates 4 puni",
  "Skill 1: Starts battle with 95% of her own soult gauge filled",
  "Skill 2: Revives with 1040 HP",
  "Center Skill: Eerie units get 8% HP and 4% attack"
 ],
 "hog-cinderella": [
  "Soultimate: Attack Booster + Inflate an area of 4 puni",
  "Skill 1: Large puni of her own has a 65% chance to fill other soults",
  "Skill 2: Adds addtional +3 size when linking any of her puni (100%)",
  "Center Skill: 100 stories units get 6% HP and 11% attack"
 ],
 "houshou-marine-autumn": [
  "Soultimate: All Popper + Super Fever",
  "Skill 1: Increases the fever guage when linking by 2.4",
  "Skill 2: In fever she gains: (1) 20.5% ATK buff (2) Heals 700hp once. (3) Raises her soult filling effects by 70%",
  "Center Skill: Eerie units get 5% HP and 7% attack"
 ],
 "shirogane-noel-autumn": [
  "Soultimate: Tap Inflate",
  "Skill 1: Large puni has a 70% chance to fill her own soult gauge",
  "Skill 2: Her soult gauge gets filled by 95% when entering fever",
  "Center Skill: Heartful units get 5% HP and 7% attack"
 ],
 "oozora-subaru-autumn": [
  "Soultimate: Attack Booster + Inflate an area of 4 puni",
  "Skill 1: Large puni can be dropped again (19% chance)",
  "Skill 2: Large puni of her own has a 65% chance to fill other soults",
  "Center Skill: Brave units get 8% HP and 4% attack"
 ],
 "vampire-nanda": [
  "Soultimate: Mass Erasing of Puni (Extreme Popper)",
  "Skill 1: Adds addtional +3 size when linking any of his puni (100%)",
  "Skill 2: Starts battle with 95% of his own soult gauge filled",
  "Center Skill: Slippery units get 4% HP and 8% attack"
 ],
 "wolf-girl-blizzaria": [
  "Soultimate: All popper (does more damage if she pops more puni of herself)",
  "Skill 1: Increases the range when linking by 4.0",
  "Skill 2: Linking own 4 chain has a 70% to give +1 around area",
  "Center Skill: Female units get 4% HP and 6% attack"
 ],
 "witch-mermadonna": [
  "Soultimate: Attack Booster + Inflate an area of 4 puni",
  "Skill 1: Increases the fever guage when linking by 2.4",
  "Skill 2: Large puni of her own has a 65% chance to fill other soults",
  "Center Skill: Heartful units get 8% HP and 4% attack"
 ],
 "blocking": [
  "Soultimate: All Popper + Soultimate gauge filler",
  "Skill 1: Drops only as a size 6 kachi block (requires 20-14 taps to break) when broken gives 20% soult guage.",
  "Skill 2a: Deals more dmg based on hp (85% damage bonus that is linear towards current hp so 100% hp is 80% and 50% is 42.5%",
  "Skill 2b: 500% Poppuni Pop damage bonus",
  "Center Skill: Tough units get 10% HP and 2% attack"
 ],
 "block-jibanyan": [
  "Soultimate: Mass Erasing of Puni (Extreme Popper)",
  "Skill 1: Drops only as a size 6 kachi block (requires 20-14 taps to break) when broken gives 20% soult guage.",
  "Skill 2: Revives with 1040 HP",
  "Center Skill: Charming units get 10% HP and 2% attack"
 ],
 "block-punigami": [
  "Soultimate: All Popper + Super Fever",
  "Skill 1: Drops only as a size 6 kachi block (requires 20-14 taps to break) when broken gives 20% soult guage.",
  "Skill 2: Her soult gauge gets filled by 95% when entering fever",
  "Center Skill: Charming units get 11% HP and 1% attack"
 ],
 "limit-broken-rinne": [
  "Soultimate: All popper + Inflates 4 puni",
  "Skill 1: His soult gauge gets filled by 95% when entering fever",
  "Skill 2: ENMA tribe unity +26% (This is not a joke once again)",
  "Center Skill: 100 stories units get 5% HP and 12% attack"
 ],
 "limit-broken-gogogo-gf": [
  "Soultimate: All Popper + Soultimate gauge filler",
  "Skill 1: Adds addtional +3 size when linking any of his puni (100%)",
  "Skill 2: Large puni of his own has a 65% chance to fill other soults",
  "Center Skill: Shady units get 6% HP and 6% attack"
 ],
 "cross-enma": [
  "Soultimate: Mass Erasing of Puni (Extreme Popper)",
  "Skill 1: Puni can fall inflated only during the start of the battle",
  "Skill 2a: gains a 500% damage bonus only towards ohajiki",
  "Skill 2b: 40% score bonus in normal sa"
 ],
 "shuka-fes": [
  "Soultimate: All Popper + Super Fever",
  "Skill 1: Her soult guage gets filled by 95% when entering fever",
  "Skill 2: Increases the fever guage when linking by 2.4"
 ],
 "youma-choujin-ken": [
  "Soultimate: All Popper + Soultimate Filler",
  "Skill 1: Adds addtional +3 size when linking any of his puni (100%)",
  "Skill 2: Increases the range when linking by 4.0"
 ],
 "zouchouten-kegare": [
  "Soultimate: All Popper + Super Fever",
  "Skill 1: Increases the fever guage when linking by 2.4",
  "Skill 2: His soult guage gets filled by 95% when entering fever"
 ],
 "beachside-setsuna": [
  "Soultimate: All Popper + Soultimate Filler",
  "Skill 1: Starts the battle with a preorganized board (2 units)",
  "Skill 2: Increases the fever guage when linking by 2.4"
 ],
 "houshou-marine-swimsuit": [
  "Soultimate: Mass Erasing of Puni (Extreme Popper)",
  "Skill 1: she gets leftover gauge after using her soult (42%)",
  "Skill 2: Starts battle with 95% of her own soult gauge filled"
 ],
 "natsuka-(midsummer)": [
  "Soultimate: All Popper + Accumulates per use",
  "Skill 1: Large puni can be dropped again (17% chance)",
  "Skill 2: Revives with 865 HP"
 ],
 "jaen-(gyattma)": [
  "Soultimate: Mass Erasing of Puni (Extreme Popper)",
  "Skill 1: Starts battle with 95% of her own soult gauge filled",
  "Skill 2: Large puni can be dropped again (17% chance)"
 ],
 "hanazakari-fukuri-yuu": [
  "Soultimate: Selects two (AOE)",
  "Skill 1: Own Puni has the chance to drop inflated 30% (Drop Big)",
  "Skill 2: Revives with 865 HP"
 ],
 "halloween-fumihime": [
  "Soultimate: Mass Erasing of Puni (Extreme Popper)",
  "Skill 1: She gets leftover gauge after using his soult (42%)",
  "Skill 2: Her soult guage gets filled by 95% when entering fever"
 ],
 "itsuki-happy-wedding": [
  "Soultimate: All Popper + Super Fever",
  "Skill 1: She gets leftover gauge after using her soult (42%)",
  "Skill 2: Increases the fever guage when linking by 2.4"
 ],
 "ichika-happy-wedding": [
  "Soultimate: Mass Erasing of Puni (Extreme Popper)",
  "Skill 1: Increases the range when linking by 4.0",
  "Skill 2: Starts battle with 95% of her own soult gauge filled"
 ],
 "nino-happy-wedding": [
  "Soultimate: All Popper + Soultimate gauge filler",
  "Skill 1: Her soult gauge gets filled by 95% when entering fever",
  "Skill 2: Adds addtional +3 size when linking any of his puni (100%)"
 ],
 "yotsuba-happy-wedding": [
  "Soultimate: Selects two kind of puni and pops only that",
  "Skill 1: Own Puni has the chance to drop inflated 30% (Drop Big)",
  "Skill 2: Large puni has a 70% chance to fill her own soult gauge"
 ],
 "miku-happy-wedding": [
  "Soultimate: All Popper + All Rearrange",
  "Skill 1: Using other soults has a 88% chance to fill her soult by 20%",
  "Skill 2: Large puni can be dropped again (17% chance)"
 ],
 "ren-(tamonten)": [
  "Soultimate: Mass Erasing of Puni (Extreme Popper)",
  "Skill 1: Increases the fever gauge when linking by 2.4",
  "Skill 2: His soult gauge gets filled by 95% when entering fever"
 ],
 "ryuuta-land-of-ashes": [
  "Soultimate: All Popper + Team Soult Filler",
  "Skill 1: His soult gauge gets filled by 95% when entering fever",
  "Skill 2: Using other soults has a 88% chance to fill his soult by 20%"
 ],
 "natsuyomi-santa": [
  "Soultimate: All Popper + Super Fever",
  "Skill 1: Her soult guage gets filled by 95% when entering fever",
  "Skill 2: Heartful tribe unity +24%"
 ],
 "fes-elzemekia": [
  "Soultimate: All Popper + Team Soult Filler",
  "Skill 1: Starts battle with 95% of her own soult gauge filled",
  "Skill 2: Charming tribe unity +24%"
 ],
 "shirakami-fubuki-cyber": [
  "Soultimate: All Popper + Team Soult Filler",
  "Skill 1: Large puni can be dropped again (17% chance)",
  "Skill 2a: Revives with 865 HP",
  "Skill 2b: 500% golf damage bonus"
 ],
 "youmajin-ken-(gear-5-kenma)": [
  "Soultimate: Mass Erasing of Puni (Extreme Popper) + AOE",
  "Skill 1: His soult guage gets filled by 95% when entering fever",
  "Skill 2: Brave tribe unity +24%"
 ],
 "100-demon-king-enma": [
  "Soultimate: All Popper + Super Fever",
  "Skill 1: His soult guage gets filled by 95% when entering fever",
  "Skill 2: Revives with 865 HP"
 ],
 "ren-(guardian-king)": [
  "Soultimate: All popper + Inflates 4 puni (aoe)",
  "Skill 1: he gets leftover gauge after using his soult (42%)",
  "Skill 2: Using other soults has a 88% chance to fill his soult by 20%"
 ],
 "doll-princess-fukuri-yuu": [
  "Soultimate: Mass Erasing of Puni (Extreme Popper)",
  "Skill 1: Starts battle with 95% of her own soult gauge filled",
  "Skill 2: Using her soult there is a 12% chance for big puni to fall"
 ],
 "mikey": [
  "Soultimate: All Popper + Team Soult Filler",
  "Skill 1: His soult gauge gets filled by 95% when entering fever",
  "Skill 2: he gets leftover gauge after using his soult (42%)"
 ],
 "ryuuta-(ryuusen)": [
  "Soultimate: Mass Erasing of Puni (Extreme Popper)",
  "Skill 1: Starts battle with 95% of his own soult gauge filled",
  "Skill 2: Large puni can be dropped again (17% chance)"
 ],
 "future-ren": [
  "Soultimate: All Popper + Super Fever",
  "Skill 1: Tough Tribe unity +24%",
  "Skill 2: His soult guage gets filled by 95% when entering fever"
 ],
 "punigami-kegare": [
  "Soultimate: Mass Erasing of Puni (Extreme Popper)",
  "Skill 1: Starts battle with 95% of his own soult gauge filled",
  "Skill 2: Bonus ball fall 21% (PSA: Unlocking will cuck him a bit)"
 ],
 "ren-tenshin": [
  "Soultimate: Tap Inflate",
  "Skill 1: Adds addtional +3 size when linking any of his puni (100%)",
  "Skill 2: Large puni has a 70% chance to fill his own soult gauge"
 ],
 "punigami-kegare-(doomsday)": [
  "Soultimate: Attack Booster + Inflate an area of 4 puni",
  "Skill 1: His soult guage gets filled by 95% when entering fever",
  "Skill 2: Large puni can be dropped again (17% chance)"
 ],
 "fudoboy-gold": [
  "Soultimate: All Popper + Team Soult Filler",
  "Skill 1: Puni can fall inflated only during the start of the battle",
  "Skill 2: 50% Crit dmg based on dmg above 3k (40% chance)"
 ],
 "megumin": [
  "Soultimate: EXPLOSION!!! (charge attack)",
  "Skill 1: Revives with 865 HP",
  "Skill 2a: gains a 500% damage bonus only towards ohajiki",
  "Skill 2b: Increases the range when linking by 4.0"
 ],
 "aqua": [
  "Soultimate: All Popper + Super Fever",
  "Skill 1: Increases the fever guage when linking by 2.4",
  "Skill 2: In fever she gains: (1) 20% ATK buff (2) Heals 700hp once. (3) Raises her soult filling effects by 70%"
 ],
 "mercury-asu": [
  "Soultimate: All popper + Inflates 4 puni",
  "Skill 1: Size 4 or above has a 75% chance to boost dmg by 2% (40% max)",
  "Skill 2: Large puni can be dropped again (17% chance)"
 ],
 "death-mercury": [
  "Soultimate: All Popper + Soultimate gauge filler",
  "Skill 1: His soult gauge gets filled by 95% when entering fever",
  "Skill 2: Own Puni has the chance to drop inflated 30% (Drop Big)"
 ],
 "kalimera": [
  "Soultimate: All Popper + 8 bonus balls",
  "Skill 1: 70% chance to Increase the radius of bonus ball inflate",
  "Skill 2: none"
 ],
 "bridal-jaen": [
  "Soultimate: All Popper + Super Fever",
  "Skill 1: Her soult guage gets filled by 95% when entering fever",
  "Skill 2: Females recieve 20% HP and 15% ATK"
 ],
 "kokoro-dame-dedtime": [
  "Soultimate: Tap Inflate",
  "Skill 1: Starts battle with 95% of her own soult gauge filled",
  "Skill 2: Increases the range when linking by 4.0"
 ],
 "mars-asu": [
  "Soultimate: Tap Inflate",
  "Skill 1: Large puni can be dropped again (17% chance)",
  "Skill 2: Starts battle with 95% of his own soult gauge filled"
 ],
 "death-asu": [
  "Soultimate: Attack Booster + Inflate an area of 4 puni",
  "Skill 1: Adds addtional +3 size when linking any of his puni (100%)",
  "Skill 2: Large puni of his own has a 65% chance to fill other soults"
 ],
 "hikoboshi-fudouma": [
  "Soultimate: All Popper + All Rearrange",
  "Skill 1: Using his soult there is a 20% chance for big puni to fall",
  "Skill 2: Size 6 of his puni has a 50% chance to proc 2 second stun"
 ],
 "hell-arachnus": [
  "Soultimate: All Popper + Team Soult Filler",
  "Skill 1: Large puni can be dropped again (17% chance)",
  "Skill 2a: Starts battle with 95% of his own soult gauge filled",
  "Skill 2b: Eerie Tribe unity +24% / Skill 2c: Bonus ball fall 21%"
 ],
 "hell-toadal": [
  "Soultimate: Attack Booster + Inflate an area of 4 puni",
  "Skill 1: Increases the range when linking by 4.0",
  "Skill 2: Large puni of his own has a 65% chance to fill other soults"
 ],
 "sacred-treasure-awoken-ryuuta": [
  "Soultimate: Tap Inflate",
  "Skill 1: Large puni of his own has a 65% chance to fill other soults",
  "Skill 2: Large puni can be dropped again (17% chance)"
 ],
 "jingi": [
  "Soultimate: All Popper + Super Fever",
  "Skill 1: he gets leftover gauge after using his soult (42%)",
  "Skill 2: His soult gauge gets filled by 95% when entering fever"
 ],
 "rimuru-tempest": [
  "Soultimate: All Popper + Consumes spheres (dmg+)",
  "Skill 1: Linking own 4 chain has a 65% to give +1 around area(new)",
  "Skill 2a: Bonus balls 21%",
  "Skill 2b: gains a 500% damage bonus only towards ohajiki"
 ],
 "milim": [
  "Soultimate: All Popper + Accumulates per use",
  "Skill 1: Large puni has a 70% chance to fill her own soult gauge",
  "Skill 2: Starts battle with 95% of his own soult gauge filled"
 ],
 "jupiter-asu": [
  "Soultimate: All Popper + Soultimate gauge filler",
  "Skill 1: he gets leftover gauge after using his soult (42%)",
  "Skill 2: Starts battle with 95% of his own soult gauge filled"
 ],
 "death-jupiter": [
  "Soultimate: Tap Inflate",
  "Skill 1: Large puni has a 70% chance to fill his own soult gauge",
  "Skill 2: His soult guage gets filled by 95% when entering fever"
 ],
 "beachside-natsuyomi": [
  "Soultimate: All popper + Inflates 4 puni",
  "Skill 1: Linking her puni fills her soult gauge by a massive amount",
  "Skill 2: Starts the battle with a preorganized board (2 units)"
 ],
 "hoshimachi-suisei": [
  "Soultimate: All Popper + Super Fever",
  "Skill 1: Increases the fever gauge when linking by 2.4",
  "Skill 2a: Her soult gauge gets filled by 95% when entering fever",
  "Skill 2b: Hololive units +30%Hp & 26% Atk"
 ],
 "nekomata-okayu": [
  "Soultimate: All Popper + Team Soult Filler",
  "Skill 1: Starts battle with 95% of her own soult gauge filled",
  "Skill 2: Mysterious tribe unity +24%"
 ],
 "komaki-komami": [
  "Soultimate: All popper + Inflates 4 puni",
  "Skill 1: Large puni can be dropped again (17% chance)",
  "Skill 2: Charming tribe unity +24%"
 ],
 "the-best-ageha": [
  "Soultimate: All Popper + Super Fever",
  "Skill 1: Starts battle with 95% of her own soult gauge filled",
  "Skill 2: In fever she gains: (1) 25% ATK buff (2) Heals 400hp once. (3) Raises link range by 3x"
 ],
 "moximous-k": [
  "Soultimate: All Popper + Heal 820",
  "Skill 1: Using his soult there is a 20% chance for big puni to fall",
  "Skill 2: Size 4 or above has a 75% chance to boost dmg by 2% (40% max)"
 ],
 "clone-black-dragon": [
  "Soultimate: All Popper + Deals more damage if combo is 100+",
  "Skill 1: His soult gauge gets filled by 95% when entering fever",
  "Skill 2: Dragon Slayer units + 28% Hp & Atk"
 ],
 "light-wings-omatsu": [
  "Soultimate: Mass Erasing of Puni (Extreme Popper)",
  "Skill 1: Large puni of her own has a 65% chance to fill other soults",
  "Skill 2: Large puni can be dropped again (17% chance)"
 ],
 "seiryuu-(star-dragon)": [
  "Soultimate: All Popper + Super Fever",
  "Skill 1: Large puni has a 70% chance to fill his own soult gauge",
  "Skill 2: Slippery tribe unity +24%"
 ],
 "8-armed-goddess": [
  "Soultimate: Attack Booster + Inflate an area of 4 puni",
  "Skill 1: Revives with 865 HP",
  "Skill 2: Starts battle with 95% of her own soult gauge filled"
 ],
 "halloween-jaen": [
  "Soultimate: EXPLOSION but SPOOKY!!! (charge attack)",
  "Skill 1: Sometimes can reduce damage by 90%",
  "Skill 2: Using her soult has a 57% chance to heal 14% MAX HP"
 ],
 "miss-contest-punigami": [
  "Soultimate: Tap Inflate",
  "Skill 1: Starts battle with 95% of her own soult gauge filled",
  "Skill 2a: Females recieve 20% HP and 15% ATK",
  "Skill 2b: gains a 500% damage bonus only towards ohajiki"
 ],
 "miss-contest-elzemekia": [
  "Soultimate: Attack Booster + Inflate an area of 4 puni",
  "Skill 1: Increases the fever guage when linking by 2.4",
  "Skill 2: Adds addtional +3 size when linking any of her puni (100%)"
 ],
 "skulk": [
  "Soultimate: All Popper + Inflates the 4 largest/random",
  "Skill 1: Large puni has a 100% chance to fill his own soult gauge",
  "Skill 2: Increases the range when linking by 4.0"
 ],
 "miss-contest-mika": [
  "Soultimate: Mass Erasing of Puni (Extreme Popper)",
  "Skill 1: Own Puni has the chance to drop inflated 30% (Drop Big)",
  "Skill 2: Her soult gauge gets filled by 95% when entering fever"
 ],
 "Black-Hole-Asu": [
  "Soultimate: Tap Inflate",
  "Skill 1: Shady Unity +24%",
  "Skill 2: Revives with 865 HP"
 ],
 "death-black": [
  "Soultimate: All Popper + Soultimate gauge filler",
  "Skill 1: Increases the range when linking by 4.0",
  "Skill 2: Large puni can be dropped again (17% chance)"
 ],
 "black-hole-kaira": [
  "Soultimate: All Popper + Inflates the 4 largest/random",
  "Skill 1: Starts battle with 95% of his own soult gauge filled",
  "Skill 2: Large puni of his own has a 65% chance to fill other soults"
 ],
 "princess-snow-specthare": [
  "Soultimate: All Popper + Super Fever",
  "Skill 1: Her soult gauge gets filled by 95% when entering fever",
  "Skill 2: Deals more dmg based on hp (80% damage bonus that is linear towards current hp so 100% hp is 80% and 50% is 40%)"
 ],
 "princess-blizzaria": [
  "Soultimate: All Popper + Deals more damage if combo is 100+",
  "Skill 1: Starts battle with 95% of her own soult gauge filled",
  "Skill 2: Own Puni has the chance to drop inflated 30% (Drop Big)"
 ],
 "princess-smogmella": [
  "Soultimate: Attack Booster + Inflate an area of 4 puni",
  "Skill 1: Increases the fever guage when linking by 2.4",
  "Skill 2: Large puni of her own has a 65% chance to fill other soults"
 ],
 "rem": [
  "Soultimate: All Popper + Transform/Power Up",
  "Skill 1: Large puni can be dropped again (17% chance)",
  "Skill 2a: gains a 500% damage bonus only towards ohajiki",
  "Skill 2b: Revives with 865 HP"
 ],
 "beatrice": [
  "Soultimate: Selects 3 puni",
  "Skill 1: Increases the fever gauge when linking by 2.4",
  "Skill 2: Adds addtional +3 size when linking any of her puni (100%)"
 ],
 "emilia": [
  "Soultimate: All Popper + Soultimate gauge filler",
  "Skill 1: Large puni has a 70% chance to fill her own soult gauge",
  "Skill 2: she gets leftover gauge after using her soult (42%)"
 ],
 "infinipea": [
  "Soultimate: Tap Inflate",
  "Skill 1: Popping his size 5 or more has a 66% chance to heal 380 hp",
  "Skill 2: Using his soult there is a 20% chance for big puni to fall"
 ],
 "santa-rem": [
  "Soultimate: All Popper + Super Fever",
  "Skill 1: Sometimes can reduce damage by 90%",
  "Skill 2: Linking own 4 chain has a 65% to give +1 around area"
 ],
 "snake-king-kaira": [
  "Soultimate: Mass Erasing of Puni (Extreme Popper)",
  "Skill 1: Slippery tribe unity +24%",
  "Skill 2: His soult gauge gets filled by 95% when entering fever"
 ],
 "plus-kj": [
  "Soultimate: All Popper + Super Fever",
  "Skill 1: Large puni has a 70% chance to fill his own soult gauge",
  "Skill 2: Large puni can be dropped again (17% chance)"
 ],
 "plus-komasan": [
  "Soultimate: All Popper + All Rearranger",
  "Skill 1: Linking own 4 chain has a 65% to give +1 around area",
  "Skill 2: Increases the fever gauge when linking by 2.4"
 ],
 "plus-jibanyan": [
  "Soultimate: All Popper + Inflates the 4 largest/random",
  "Skill 1: Starts battle with 95% of his own soult gauge filled",
  "Skill 2: Popping size 6 or more has a 66% chance to heal 380 hp"
 ],
 "kyuuoh-miyabi": [
  "Soultimate: All Popper + Super Fever",
  "Skill 1: Adds addtional +3 size when linking any of her puni (100%)",
  "Skill 2: Shady Unity +24%"
 ],
 "kenmochi-saya": [
  "Soultimate: All Popper + All Rearranger",
  "Skill 1: Increases the fever gauge when linking by 2.4",
  "Skill 2: Revives with 865 HP"
 ],
 "orochi-chikage": [
  "Soultimate: All Popper + Soultimate gauge filler",
  "Skill 1: Large puni can be dropped again (17% chance)",
  "Skill 2: Starts battle with 95% of her own soult gauge filled"
 ],
 "ichika-valentine": [
  "Soultimate: All Popper + All Rearrange",
  "Skill 1: Increases the fever guage when linking by 2.4",
  "Skill 2: Starts battle with 95% of her own soult gauge filled"
 ],
 "nino-valentine": [
  "Soultimate: All Popper + Accumulates per use",
  "Skill 1: Large puni can be dropped again (17% chance)",
  "Skill 2: Large puni has a 70% chance to fill her own soult gauge"
 ],
 "miku-valentine": [
  "Soultimate: Mass Erasing of Puni (Extreme Popper)",
  "Skill 1: Adds addtional +3 size when linking any of her puni (100%)",
  "Skill 2: she gets leftover gauge after using her soult (46%)"
 ],
 "yotsuba-valentine": [
  "Soultimate: All Popper + Super Fever",
  "Skill 1: Revives with 865 HP",
  "Skill 2: Her soult gauge gets filled by 95% when entering fever"
 ],
 "itsuki-valentine": [
  "Soultimate: All Popper + Soultimate gauge filler",
  "Skill 1: Using other soults has a 88% chance to fill her soult by 20%",
  "Skill 2: Own Puni has the chance to drop inflated 30% (Drop Big)"
 ],
 "bunny-mangetsu": [
  "Soultimate: All Popper + Deals more damage if combo is 100+",
  "Skill 1: Using other soults has a 88% chance to fill her soult by 20%",
  "Skill 2: she gets leftover gauge after using her soult (42%)"
 ],
 "bunny-hangetsu": [
  "Soultimate: All Popper + Inflates the 4 largest/random",
  "Skill 1: Popping size 6 or more has a 66% chance to heal 380 hp",
  "Skill 2: Own Puni has the chance to drop inflated 30% (Drop Big)"
 ],
 "bunny-mikazuki": [
  "Soultimate: Tap Inflate",
  "Skill 1: Large puni has a 70% chance to fill her own soult gauge",
  "Skill 2: Starts battle with 95% of her own soult gauge filled"
 ],
 "subaru-(easter)": [
  "Soultimate: All Popper + chance to crit",
  "Skill 1: Own Puni has the chance to drop inflated 30% (Drop Big)",
  "Skill 2: Brave tribe unity +24%"
 ],
 "fubuki-(easter)": [
  "Soultimate: All Popper + Inflates the 4 largest/random",
  "Skill 1: Large puni can be dropped again (17% chance)",
  "Skill 2: Starts battle with 95% of her own soult gauge filled"
 ],
 "watame-(easter)": [
  "Soultimate: All Popper + Soultimate gauge filler",
  "Skill 1: Linking own 4 chain has a 65% to give +1 around area",
  "Skill 2: Deals more dmg based on hp (80% damage bonus that is linear towards current hp so 100% hp is 80% and 50% is 40%)"
 ],
 "okumo-itoko": [
  "Soultimate: All Popper + Super Fever",
  "Skill 1: Revives with 865 HP",
  "Skill 2: Increases the fever guage when linking by 2.4"
 ],
 "kinaku-himena": [
  "Soultimate: All Popper + chance to crit",
  "Skill 1: Starts battle with 95% of her own soult gauge filled",
  "Skill 2: Own Puni has the chance to drop inflated 30% (Drop Big)"
 ],
 "mimi-ubayama": [
  "Soultimate: All Popper + Inflates the 4 largest/random",
  "Skill 1: Using other soults has a 88% chance to fill her soult by 20%",
  "Skill 2: Size 4 or above has a 75% chance to boost dmg by 2% (40% max)"
 ],
 "mera-shishino-(2ndoutfit)": [
  "Soultimate: Mass Erasing of Puni (Extreme Popper)",
  "Skill 1: she gets leftover gauge after using her soult (42%)",
  "Skill 2: Brave tribe unity +24%"
 ],
 "hibari-akane-(2ndoutfit)": [
  "Soultimate: All Popper + Soultimate gauge filler",
  "Skill 1: Large puni of her own has a 65% chance to fill other soults",
  "Skill 2: Mysterious tribe unity +24%"
 ],
 "ohira-vanilla": [
  "Soultimate: All Popper + Heal 460",
  "Skill 1: Popping her size 6 or more has a 66% chance to heal 380 hp",
  "Skill 2: Revives with 865 HP"
 ],
 "kougetsu-(false-moon)": [
  "Soultimate: All Popper + Inflates the 4 largest/random",
  "Skill 1: Starts battle with 95% of her own soult gauge filled",
  "Skill 2: Own Puni has the chance to drop inflated 30% (Drop Big)"
 ],
 "moon-emperor-mangetsu": [
  "Soultimate: All Popper + Deals more damage if combo is 100+",
  "Skill 1: Large puni can be dropped again (17% chance)",
  "Skill 2: she gets leftover gauge after using her soult (42%)"
 ],
 "moon-yoshitsune": [
  "Soultimate: All Popper + chance to crit",
  "Skill 1: His soult gauge gets filled by 95% when entering fever",
  "Skill 2: Increases the range when linking by 4.0"
 ],
 "yashiro-kizuku": [
  "Soultimate: All Popper + Deals more damage if combo is 128+",
  "Skill 1: Large puni can be dropped again (17% chance)",
  "Skill 2: Shady Unity +24%"
 ],
 "hoshikawa-sara": [
  "Soultimate: All Popper + Inflates the 4 largest/random",
  "Skill 1: Increases the range when linking by 4.0",
  "Skill 2: Own Puni has the chance to drop inflated 30% (Drop Big)"
 ],
 "shiina-yuika": [
  "Soultimate: All Popper + chance to crit",
  "Skill 1: Her soult gauge gets filled by 95% when entering fever",
  "Skill 2: Deals more dmg based on hp (80% damage bonus that is linear towards current hp so 100% hp is 80% and 50% is 40%)"
 ],
 "flower-nanda": [
  "Soultimate: All Popper + Super Fever",
  "Skill 1: His soult gauge gets filled by 95% when entering fever",
  "Skill 2: All 100 stories units get 28% HP and 28% Attack"
 ],
 "future-boushinyan": [
  "Soultimate: Inflate 5 largest/Random puni and pops it",
  "Skill 1: Reduces Ball Inspirit duration by 12 seconds",
  "Skill 2: he gets leftover gauge after using his soult (42%)"
 ],
 "flower-summer-hanasakamaru": [
  "Soultimate: Tap Inflate",
  "Skill 1: Large puni can be dropped again (17% chance)",
  "Skill 2: Adds addtional +3 size when linking any of his puni (100%)"
 ],
 "wedding-aqua": [
  "Soultimate: All Popper + Accumulates per use",
  "Skill 1: she gets leftover gauge after using her soult (42%)",
  "Skill 2a: 500% golf damage bonus",
  "Skill 2b: Deals more dmg based on hp (80% damage bonus that is linear towards current hp so 100% hp is 80% and 50% is 40%)"
 ],
 "wedding-yunyun": [
  "Soultimate: Attack Booster + Inflate an area of 4 puni",
  "Skill 1: Starts battle with 95% of her own soult gauge filled",
  "Skill 2: Large puni can be dropped again (17% chance)"
 ],
 "wedding-darkness": [
  "Soultimate: All Popper + Soultimate gauge filler",
  "Skill 1: Using other soults has a 88% chance to fill her soult by 20%",
  "Skill 2: Revives with 865 HP"
 ],
 "spirit-of-the-moon-twilight": [
  "Soultimate: Attack Booster + Inflate an area of 4 puni",
  "Skill 1: Large puni of his own has a 65% chance to fill other soults",
  "Skill 2: Increases the fever guage when linking by 2.4"
 ],
 "spirit-of-the-sun-dawn": [
  "Soultimate: Selects 3 puni",
  "Skill 1: Starts battle with 95% of his own soult gauge filled",
  "Skill 2: Reduces Poison inspirit duration by 12 seconds."
 ],
 "mika-of-the-sun": [
  "Soultimate: All Popper + Inflates the 4 largest/random",
  "Skill 1: Sometimes can reduce damage by 90%",
  "Skill 2: Soult guage fills when taking damage (100% chance)"
 ],
 "zodiac-god": [
  "Soultimate: All Popper + Deals more damage if combo is 100+",
  "Skill 1: Increases the range when linking by 4.0",
  "Skill 2: In fever she gains: (1) 20% ATK buff (2) Heals 700hp once. (3) Raises her soult filling effects by 70%"
 ],
 "snake-representative-venoct": [
  "Soultimate: All Popper + Inflates the 4 largest/random",
  "Skill 1: Deals more dmg based on hp (80% damage bonus that is linear towards current hp so 100% hp is 80% and 50% is 40%",
  "Skill 2: His soult gauge gets filled by 95% when entering fever"
 ],
 "fox-representative-kyubi": [
  "Soultimate: Tap Inflate",
  "Skill 1: Adds addtional +3 size when linking any of his puni (100%)",
  "Skill 2: Large puni of his own has a 65% chance to fill other soults"
 ],
 "lady-sakuchan": [
  "Soultimate: Selects 3 puni",
  "Skill 1: Revives with 865 HP",
  "Skill 2: Eerie Tribe unity +24%"
 ],
 "lady-smogmella": [
  "Soultimate: All Popper + Deals more damage if combo is 100+",
  "Skill 1: Own Puni has the chance to drop inflated 30% (Drop Big)",
  "Skill 2: Size 4 or above has a 75% chance to boost dmg by 2% (40% max)"
 ],
 "lady-benzaiten": [
  "Soultimate: All Popper + All Rearrange",
  "Skill 1: Her soult gauge gets filled by 95% when entering fever",
  "Skill 2: Increases the fever guage when linking by 2.4"
 ],
 "sylphiette": [
  "Soultimate: All Popper + Soultimate gauge filler",
  "Skill 1: Revives with 865 HP",
  "Skill 2: Adds addtional +3 size when linking any of her puni (100%)"
 ],
 "red-hair-swordsman-eris": [
  "Soultimate: Mass Erasing of Puni (Extreme Popper)",
  "Skill 1: Starts battle with 95% of her own soult gauge filled",
  "Skill 2a: gains a 500% damage bonus only towards ohajiki",
  "Skill 2b: she gets leftover gauge after using her soult (42%)"
 ],
 "adventurer-rudeus": [
  "Soultimate: Tap Inflate",
  "Skill 1: Large puni can be dropped again (17% chance)",
  "Skill 2: Increases the fever guage when linking by 2.4"
 ],
 "ruten": [
  "Soultimate: All Popper + Soultimate gauge filler",
  "Skill 1: Large puni can be dropped again (17% chance)",
  "Skill 2: All 100 stories units get 28% HP and 28% Attack"
 ],
 "melek": [
  "Soultimate: All Popper + Deals more damage if combo is 100+",
  "Skill 1: Own Puni has the chance to drop inflated 30% (Drop Big)",
  "Skill 2: Large puni has a 70% chance to fill his own soult gauge"
 ],
 "formal-attire-jaen": [
  "Soultimate: All Popper + Super Fever",
  "Skill 1: Her soult gauge gets filled by 95% when entering fever",
  "Skill 2: Increases the fever guage when linking by 2.4"
 ],
 "diabolo": [
  "Soultimate: All Popper + Accumulates per use",
  "Skill 1: Starts battle with 95% of his own soult gauge filled",
  "Skill 2a: gains a 500% damage bonus only towards ohajiki",
  "Skill 2b: Soult guage fills when taking damage (100% chance)"
 ],
 "dragon-armor-milim": [
  "Soultimate: Tap Inflate",
  "Skill 1: Increases the range when linking by 4.0",
  "Skill 2: Large puni has a 70% chance to fill her own soult gauge"
 ],
 "rimuru-raphael": [
  "Soultimate: All Popper + Deals more damage if combo is 100+",
  "Skill 1: Size 4 or above has a 75% chance to boost dmg by 2% (40% max)",
  "Skill 2: Adds addtional +3 size when linking any of his puni (100%)"
 ],
 "shingetsu": [
  "Soultimate: Attack Booster + Inflate an area of 4 puni",
  "Skill 1: Large puni of her own has a 65% chance to fill other soults",
  "Skill 2: Large puni can be dropped again (17% chance)"
 ],
 "hangetsu-child": [
  "Soultimate: Tap Inflate",
  "Skill 1: Reduces Poison inspirit duration by 12 seconds.",
  "Skill 2: Large puni has a 70% chance to fill her own soult gauge"
 ],
 "mangetsu-child": [
  "Soultimate: Selects 3 puni",
  "Skill 1: Own Puni has the chance to drop inflated 30% (Drop Big)",
  "Skill 2: All Ginga watch units get 28% HP and 28% Attack"
 ],
 "sports-day-mera-shishino": [
  "Soultimate: All Popper + chance to crit",
  "Skill 1: Starts battle with 95% of her own soult gauge filled",
  "Skill 2: Deals more dmg based on hp (80% damage bonus that is linear towards current hp so 100% hp is 80% and 50% is 40%)"
 ],
 "sports-day-rubeus-j": [
  "Soultimate: Mass Erasing of Puni (Extreme Popper)",
  "Skill 1: Revives with 865 HP",
  "Skill 2: Adds addtional +3 size when linking any of his puni (100%)"
 ],
 "cheerleader-tidus": [
  "Soultimate: Tap Inflate",
  "Skill 1: Large puni can be dropped again (17% chance)",
  "Skill 2: Size 4 or above has a 75% chance to boost dmg by 2% (40% max)"
 ],
 "laplus-darkness-halloween": [
  "Soultimate: All Popper + Super Fever",
  "Skill 1: Her soult gauge gets filled by 95% when entering fever",
  "Skill 2: Eerie Tribe unity +24%"
 ],
 "nakiri-ayame-halloween": [
  "Soultimate: All Popper + chance to crit",
  "Skill 1: Adds addtional +3 size when linking any of her puni (100%)",
  "Skill 2: Size 4 or above has a 75% chance to boost dmg by 2% (40% max)"
 ],
 "shirogane-noel-halloween": [
  "Soultimate: All Popper + Inflates the 4 largest/random",
  "Skill 1: Revives with 865 HP",
  "Skill 2a: Reduces Poison inspirit duration by 12 seconds.",
  "Skill 2b: Reduces Ball Inspirit duration by 12 seconds"
 ],
 "puniwo-ubaune": [
  "Soultimate: Tap Inflate",
  "Skill 1: Large puni has a 70% chance to fill her own soult gauge",
  "Skill 2: Large puni can be dropped again (17% chance)"
 ],
 "parade-blizzaria": [
  "Soultimate: All Popper + All Rearrange",
  "Skill 1: Linking own 4 chain has a 65% to give +1 around area",
  "Skill 2: Reduces Ball Inspirit duration by 12 seconds"
 ],
 "puniokan": [
  "Soultimate: Attack Booster + Inflate an area of 4 puni",
  "Skill 1: Own Puni has the chance to drop inflated 30% (Drop Big)",
  "Skill 2: Reduce appearence rate by 1.15"
 ],
 "king-fudoumyou": [
  "Soultimate: All Popper + chance to crit",
  "Skill 1: Deals more dmg based on hp (70% damage bonus that is linear towards current hp so 100% hp is 0% and 50% is 35%)",
  "Skill 2: Increases the range when linking by 4.0"
 ],
 "king-benimaru": [
  "Soultimate: All Popper + Inflates the 4 largest/random",
  "Skill 1: he gets leftover gauge after using his soult (42%)",
  "Skill 2: Revives with 865 HP"
 ],
 "houkai-unkeen": [
  "Soultimate: All Popper + Deals more damage if combo is 100+",
  "Skill 1: Own Puni has the chance to drop inflated 30% (Drop Big)",
  "Skill 2: His soult gauge gets filled by 95% when entering fever"
 ],
 "fern": [
  "Soultimate: Mass Erasing of Puni (Extreme Popper)",
  "Skill 1: Her soult gauge gets filled by 95% when entering fever",
  "Skill 2: Revives with 865 HP"
 ],
 "stark": [
  "Soultimate: All Popper + Deals more damage if combo is 100+",
  "Skill 1: Size 4 or above has a 75% chance to boost dmg by 2% (40% max)",
  "Skill 2: Own Puni has the chance to drop inflated 30% (Drop Big)"
 ],
 "aura": [
  "Soultimate: All Popper + All Rearrange",
  "Skill 1: Increases the fever guage when linking by 2.4",
  "Skill 2: Linking own 4 chain has a 65% to give +1 around area"
 ],
 "king-darknyan": [
  "Soultimate: All Popper + Inflates the 4 largest/random",
  "Skill 1: Starts battle with 95% of his own soult gauge filled",
  "Skill 2: Revives with 865 HP"
 ],
 "king-buchinyan": [
  "Soultimate: Selects 3 puni",
  "Skill 1: Reduce appearence rate by 1.15",
  "Skill 2: Large puni has a 70% chance to fill his own soult gauge"
 ],
 "king-usapyon": [
  "Soultimate: All Popper + Soultimate gauge filler",
  "Skill 1: Deals more dmg based on hp (80% damage bonus that is linear towards current hp so 100% hp is 80% and 50% is 40%)",
  "Skill 2: Large puni can be dropped again (17% chance)"
 ],
 "sakurazaki": [
  "Soultimate: All Popper + Deals more damage if combo is 100+",
  "Skill 1: Large puni has a 70% chance to fill his own soult gauge",
  "Skill 2: Own Puni has the chance to drop inflated 30% (Drop Big)"
 ],
 "kisoji": [
  "Soultimate: All Popper + Soultimate gauge filler",
  "Skill 1: Using other soults has a 88% chance to fill his soult by 20%",
  "Skill 2: Linking own 4 chain has a 65% to give +1 around area"
 ],
 "raika": [
  "Soultimate: All Popper + Super Fever",
  "Skill 1: Increases the fever guage when linking by 2.4",
  "Skill 2: In fever she gains: (1) 22% ATK buff (2) Heals 600hp once. (3) Own Puni has the chance to drop inflated 28% (Drop Big)"
 ],
 "fubuki-shado": [
  "Soultimate: Selects 3 puni",
  "Skill 1: Revives with 865 HP",
  "Skill 2: Reduces Poison Inspirit duration by 12 seconds"
 ],
 "enra-eira": [
  "Soultimate: All Popper + All Rearrange",
  "Skill 1: Linking own 4 chain has a 65% to give +1 around area",
  "Skill 2: Size 4 or above has a 75% chance to boost dmg by 2% (40% max)"
 ],
 "hibari-akane-3rd-outfit": [
  "Soultimate: Inflate 5 largest/Random puni and pops it",
  "Skill 1: Her soult gauge gets filled by 95% when entering fever",
  "Skill 2: Using other soults has a 88% chance to fill her soult by 20%"
 ],
 "kozuki-kallen": [
  "Soultimate: All Popper + Deals more damage if combo is 100+",
  "Skill 1: Adds addtional +3 size when linking any of her puni (100%)",
  "Skill 2: Size 4 or above has a 75% chance to boost dmg by 2% (40% max)"
 ],
 "c-c": [
  "Soultimate: All Popper + Super Fever",
  "Skill 1: Reduces Ball Inspirit duration by 12 seconds",
  "Skill 2: Increases the fever guage when linking by 2.4"
 ],
 "nunnally-lamperouge": [
  "Soultimate: Attack Booster + Inflate an area of 4 puni",
  "Skill 1: Starts battle with 95% of her own soult gauge filled",
  "Skill 2: Using other soults has a 88% chance to fill her soult by 20%"
 ],
 "milk-chocolate-lover-arachnus": [
  "Soultimate: All Popper + 3 bonus ball maker",
  "Skill 1: Deals more dmg based on hp (80% damage bonus that is linear towards current hp so 100% hp is 80% and 50% is 40%)",
  "Skill 2: Reduces Ball Inspirit duration by 12 seconds"
 ],
 "bitter-chocolate-lover-toadal-dude": [
  "Soultimate: Selects 3 puni",
  "Skill 1: Adds addtional +3 size when linking any of his puni (100%)",
  "Skill 2: Sometimes can reduce damage by 90%"
 ],
 "valentine-bunny-eat": [
  "Soultimate: All Popper + Consumes spheres (dmg+)",
  "Skill 1: Large puni can be dropped again (17% chance)",
  "Skill 2: Reduce appearence rate by 1.15"
 ],
 "great-bloody-battle-jibanyan": [
  "Soultimate: Selects 3 puni",
  "Skill 1: Starts battle with 95% of his own soult gauge filled",
  "Skill 2: Own Puni has the chance to drop inflated 30% (Drop Big)"
 ],
 "great-bloody-battle-kenma": [
  "Soultimate: All Popper + Soultimate gauge filler",
  "Skill 1: Large puni has a 70% chance to fill his own soult gauge",
  "Skill 2: he gets leftover gauge after using his soult (42%)"
 ],
 "great-bloody-battle-elzemekia": [
  "Soultimate: All popper (does more damage if she pops more puni of herself)",
  "Skill 1: Increases appearence rate by 1.9",
  "Skill 2: Her soult gauge gets filled by 95% when entering fever"
 ],
 "hibari-akane-4th-outfit": [
  "Soultimate: Attack Booster + Inflate an area of 4 puni",
  "Skill 1: Large puni can be dropped again (17% chance)",
  "Skill 2: Large puni of her own has a 65% chance to fill other soults"
 ],
 "han-dora": [
  "Soultimate: Selects 3 puni",
  "Skill 1: Reduces Poison Inspirit duration by 12 seconds",
  "Skill 2: Increases the fever guage when linking by 2.4"
 ],
 "byakuya-tora-tora": [
  "Soultimate: All Popper + Deals more damage if combo is 100+",
  "Skill 1: Own Puni has the chance to drop inflated 30% (Drop Big)",
  "Skill 2: Size 4 or above has a 75% chance to boost dmg by 2% (40% max)"
 ],
 "tokino-sora-school": [
  "Soultimate: All Popper + Inflates the 4 largest/random",
  "Skill 1: Own Puni has the chance to drop inflated 30% (Drop Big)",
  "Skill 2: Large puni can be dropped again (17% chance)"
 ],
 "hakui-koyori-school": [
  "Soultimate: All Popper + Stunner",
  "Skill 1: Deals more dmg based on hp (80% damage bonus that is linear towards current hp so 100% hp is 80% and 50% is 40%)",
  "Skill 2: Reduces Ball Inspirit duration by 12 seconds"
 ],
 "komapilot": [
  "Soultimate: Selects 3 puni",
  "Skill 1: Large puni can be dropped again (17% chance)",
  "Skill 2: Reduces Ball Inspirit duration by 12 seconds"
 ],
 "jirogem": [
  "Soultimate: Attack Booster + Inflate an area of 4 puni",
  "Skill 1: Increases the fever guage when linking by 2.4",
  "Skill 2: Reduces Poison Inspirit duration by 12 seconds"
 ],
 "zeta": [
  "Soultimate: Selects 3 puni",
  "Skill 1: Her soult gauge gets filled by 95% when entering fever",
  "Skill 2: Increases the range when linking by 4.0"
 ],
 "epsilon": [
  "Soultimate: All Popper + All Rearrange",
  "Skill 1: Adds addtional +3 size when linking any of her puni (100%)",
  "Skill 2: Reduces ball Inspirit duration by 12 seconds"
 ],
 "awoken-alexia-midgar": [
  "Soultimate: Vertical Popper + 3 Bonus balls",
  "Skill 1: she gets leftover gauge after using her soult (42%)",
  "Skill 2: Reduces Poison Inspirit duration by 12 seconds"
 ],
 "todoroki-reona-dark-outfit": [
  "Soultimate: All Popper + All Rearrange",
  "Skill 1: Reduces ball Inspirit duration by 12 seconds",
  "Skill 2: Reduce appearence rate by 1.15"
 ],
 "komaki-komami-dark-outfit": [
  "Soultimate: All popper (does more damage if she pops more puni of herself)",
  "Skill 1: Deals more dmg based on hp (80% damage bonus that is linear towards current hp so 100% hp is 80% and 50% is 40%)",
  "Skill 2: Popping size 6 or more has a 66% chance to heal 380 hp"
 ],
 "wedding-ram": [
  "Soultimate: All popper + Enables co-linking to any puni for 3.3 seconds",
  "Skill 1: Large puni can be dropped again (17% chance)",
  "Skill 2: Large puni has a 70% chance to fill her own soult gauge"
 ],
 "otto": [
  "Soultimate: All Popper + All Rearrange",
  "Skill 1: Linking own 4 chain has a 65% to give +1 around area",
  "Skill 2: Reduces Ball Inspirit duration by 12 seconds"
 ],
 "dark-cutie-snow-spect-hare": [
  "Soultimate: All Popper + Stunner",
  "Skill 1: Adds addtional +3 size when linking any of her puni (100%)",
  "Skill 2: Reduces Ball Inspirit duration by 12 seconds"
 ],
 "dark-cutie-camelia": [
  "Soultimate: All Popper + All Rearrange",
  "Skill 1: Deals more dmg based on hp (80% damage bonus that is linear towards current hp so 100% hp is 80% and 50% is 40%)",
  "Skill 2: Reduces Poison Inspirit duration by 12 seconds"
 ],
 "sage-blizzaria": [
  "Soultimate: All Popper + Deals more damage if combo is 100+",
  "Skill 1: Deals more dmg based on hp (80% damage bonus that is linear towards current hp so 100% hp is 80% and 50% is 40%)",
  "Skill 2: she gets leftover gauge after using her soult (42%)"
 ],
 "magician-kyubi": [
  "Soultimate: Selects 3 puni",
  "Skill 1: Linking own 4 chain has a 65% to give +1 around area",
  "Skill 2: Large puni can be dropped again (17% chance)"
 ],
 "playful-jibanyan": [
  "Soultimate: Vertical Popper + 3 Bonus balls",
  "Skill 1: Adds addtional +3 size when linking any of his puni (100%)",
  "Skill 2: Large puni has a 70% chance to fill his own soult gauge"
 ],
 "yabusame-racer-mezu": [
  "Soultimate: All Popper + All Rearrange",
  "Skill 1: Using other soults has a 88% chance to fill his soult by 20%",
  "Skill 2: Increases the fever guage when linking by 2.4"
 ],
 "yabusame-racer-kirin": [
  "Soultimate: All Popper + Stunner",
  "Skill 1: Soult guage fills when taking damage (100% chance)",
  "Skill 2: Reduce appearence rate by 1.15"
 ],
 "leafa-alo": [
  "Soultimate: All Popper + Inflates the 4 largest/random",
  "Skill 1: Large puni can be dropped again (17% chance)",
  "Skill 2: Heartful tribe unity +24%"
 ],
 "yuuki-alo": [
  "Soultimate: Mass Erasing of Puni (Extreme Popper)",
  "Skill 1: Deals more dmg based on hp (80% damage bonus that is linear towards current hp so 100% hp is 80% and 50% is 40%)",
  "Skill 2: Starts battle with 95% of her own soult gauge filled"
 ],
 "alice-uw": [
  "Soultimate: All Popper + Super Fever",
  "Skill 1: Her soult gauge gets filled by 95% when entering fever",
  "Skill 2: Increases the fever guage when linking by 2.4"
 ],
 "summer-leisure": [
  "Soultimate: All Popper + All Rearrange",
  "Skill 1: Own Puni has the chance to drop inflated 30% (Drop Big)",
  "Skill 2: Revives with 865 HP"
 ],
 "pool-lifeguard-sergeant-burly": [
  "Soultimate: All Popper + chance to crit",
  "Skill 1: Starts battle with 95% of his own soult gauge filled",
  "Skill 2: Increases the range when linking by 4.0"
 ],
 "summer-vacation-bunny-mint": [
  "Soultimate: All Popper + 3 Bonus balls",
  "Skill 1: 70% chance to Increase the radius of bonus ball inflate",
  "Skill 2: Large puni can be dropped again (17% chance)"
 ],
 "yog-blizzaria": [
  "Soultimate: All Popper + All Rearrange",
  "Skill 1: Using other soults has a 88% chance to fill her soult by 20%",
  "Skill 2: Soult guage fills when taking damage (100% chance)"
 ],
 "hog-sleepy-beauty": [
  "Soultimate: Vertical Popper + 3 Bonus balls",
  "Skill 1: 70% chance to Increase the radius of bonus ball inflate",
  "Skill 2: Increases the range when linking by 4.0"
 ],
 "idol-otaku-jibanyan": [
  "Soultimate: All Popper + Soultimate gauge filler",
  "Skill 1: he gets leftover gauge after using his soult (42%)",
  "Skill 2: Popping size 6 or more has a 66% chance to heal 380 hp"
 ],
 "yukihana-lamy": [
  "Soultimate: Vertical Popper + 3 Bonus balls",
  "Skill 1: Starts battle with 95% of her own soult gauge filled",
  "Skill 2: Adds addtional +3 size when linking any of her puni (100%)"
 ],
 "natsuiro-matsuri": [
  "Soultimate: All Popper + Inflates the 4 largest/random",
  "Skill 1: Revives with 865 HP",
  "Skill 2: Using other soults has a 88% chance to fill her soult by 20%"
 ],
 "fuwawa-abyssgard": [
  "Soultimate: All Popper + All Rearrange",
  "Skill 1: Can link with Mococo Abyssguard",
  "Skill 2: Reduces Poison Inspirit duration by 12 seconds"
 ],
 "mococo-abyssgard": [
  "Soultimate: All Popper + chance to crit",
  "Skill 1: Can link with Fuwawa Abyssguard",
  "Skill 2: Reduces Ball Inspirit duration by 12 seconds"
 ],
 "frankenchismo": [
  "Soultimate: Vertical Popper + 3 Bonus balls",
  "Skill 1: Sometimes can reduce damage by 90%",
  "Skill 2: Own Puni has the chance to drop inflated 30% (Drop Big)"
 ],
 "majin-casanuva": [
  "Soultimate: Center Popper + Heal 460",
  "Skill 1: Revives with 865 HP",
  "Skill 2: Reduces Ball Inspirit duration by 12 seconds"
 ],
 "shinigami-whirlweasel": [
  "Soultimate: All Popper + All Rearrange",
  "Skill 1: Large puni has a 70% chance to fill her own soult gauge",
  "Skill 2: Reduces Poison Inspirit duration by 12 seconds"
 ],
 "block-venoct": [
  "Soultimate: Vertical Popper + 3 Bonus balls",
  "Skill 1: Drops only as a size 6 kachi block (requires 20-14 taps to break) when broken gives 20% soult guage.",
  "Skill 2: he gets leftover gauge after using his soult (42%)"
 ],
 "block-kyubi": [
  "Soultimate: All Popper + All Rearrange",
  "Skill 1: Drops only as a size 6 kachi block (requires 20-14 taps to break) when broken gives 20% soult guage.",
  "Skill 2: Sometimes can reduce damage by 90%"
 ],
 "block-komasan": [
  "Soultimate: Center Popper + Heal 460",
  "Skill 1: Drops only as a size 6 kachi block (requires 20-14 taps to break) when broken gives 20% soult guage.",
  "Skill 2: Reduces Ball Inspirit duration by 12 seconds"
 ],
 "limit-broken-tokiwo-ubaune": [
  "Soultimate: All Popper + All Rearrange",
  "Skill 1: Linking own 4 chain has a 65% to give +1 around area",
  "Skill 2: Reduces Ball Inspirit duration by 12 seconds"
 ],
 "limit-broken-mitsumata-nozuchi": [
  "Soultimate: Horizontal Popper + 3 Bonus balls",
  "Skill 1: 70% chance to Increase the radius of bonus ball inflate",
  "Skill 2: Reduces Poison Inspirit duration by 12 seconds"
 ],
 "limit-broken-red-j": [
  "Soultimate: Center Popper + Heal 460",
  "Skill 1: Increases the range when linking by 4.0",
  "Skill 2: he gets leftover gauge after using his soult (42%)"
 ]
};
