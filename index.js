// const adventurer = {
//     name: "Robin",
//     health: 10,
//     inventory: ["sword", "potion", "artifact"],
//     companion: {
//         name: "Leo",
//         type: "Cat",
//         companion2: {
//             name: "Frank",
//             type: "Flea",
//             belongings: ["small hat", "sunglasses"]
//         }
//     }
//     }

//     console.log(adventurer.name) //access "Robin"
//     console.log(adventurer.companion.name) //access "Leo"

//     adventurer.companion.foreach((item) => {
//         console.log(item)
//     });

    const adventurer = {
        name: "Robin",
        health: 10,
        inventory: ["sword", "potion", "artifact"],
        companion: {
          name: "Leo",
          type: "Cat",
        },
        roll(mod = 0) {
          const result = Math.floor(Math.random() * 20) + 1 + mod;
          console.log(`${this.name} rolled a ${result}.`);
        },
      };

    
      adventurer.inventory.forEach((item) => {
        console.log(item);
      });


      adventurer.companion.companion2 = {
        name: "Frank",
        type: "Flea",
        belongings: ["hat", "sunglasses"],
      };


      console.log(adventurer);
      adventurer.roll();
// Part 2:
      class Character {
        constructor (name) {
          this.name = name;
          this.health = 100;
          this.inventory = [];
        } roll(mod = 0) {
            const result = Math.floor(Math.random() * 20) + 1 + mod;
            console.log(`${this.name} rolled a ${result}.`);
          }
      };

const robin = new Character("Robin");
robin.inventory = ["sword", "potion", "artifact"];
robin.companion = new Character("Leo");
robin.companion.type = "Cat";
robin.companion.companion = new Character("Frank");
robin.companion.companion.type = "Flea";
robin.companion.companion.inventory = ["small hat", "sunglasses"];

console.log(robin.companion.companion.inventory)

// Part 3:
class Adventurer extends Character {
    constructor (name, role) {
      super(name);
      // Adventurers have specialized roles.
      this.role = role;
      // Every adventurer starts with a bed and 50 gold coins.
      this.inventory.push("bedroll", "50 gold coins");
    }
    // Adventurers have the ability to scout ahead of them.
    scout () {
      console.log(`${this.name} is scouting ahead...`);
      super.roll();
    }
  };

  

  class Companion {
    constructor (name, type, belongings) {
        this.name = name;
        this.type = type;
        this.belongings = [];
    }
  }