// const prompt = require("prompt-sync");

class Animal {
  constructor(name, gender) {
    if (this.constructor === Animal) {
      throw new Error("This class cannot be implemented")
    }
    this.name = name;
    this.gender = gender;
  }

  name = "Animals have different names";
  gender = "Animals can either be a male or female";

  eat() {
    throw new Error("Please implement this method in the inherited classes")
  }
  reproduce() {
    throw new Error("Please implement this method in the inherited classes")
  }
  growth() {
    throw new Error("Please implement this method in the inherited classes")
  }
  breathe() {
    throw new Error("Please implement this method in the inherited classes")
  }
}

class Invertebrate extends Animal {
  #isMulticellular;
  #hasExoskeleton;
  #hasNoCellWall;
  constructor(params) {
    super(params.name, params.gender);
    this.#isMulticellular = true;
    this.#hasExoskeleton = true;
    this.#hasNoCellWall = true;
  }
  properties () {
    if (this.#isMulticellular) {
      console.log("Invertebrates are multicellular");
    }
    if (this.#hasExoskeleton) {
      console.log("Invertebrates have exoskeletons");
    }
    if (this.#hasNoCellWall) {
      console.log("Invertebrates have no cell wall");
    }
  }

  eat(){
    console.log("anthropods eat by biting mostly");
  }

  move() {
    console.log(
      "Invertebrates move by either pushing their body or for those that have legs, walk"
    );
  }
}
const invertebrate = new Invertebrate({name: 'Invertebrate', gender: 'Any'});
invertebrate.move();
invertebrate.properties();
invertebrate.eat();

class Vertebrate extends Animal {
  #isUnicellular;
  #hasEndoskeleton;
  #hasACellWall;
  constructor(params) {
    super(params.name, params.gender);
    
    this.#isUnicellular = true;
    this.#hasEndoskeleton = true;
    this.#hasACellWall = true;
  }
  eat() {
    console.log("Vertebrates eat mainly by chewing");
  }

  

  properties() {
    if (this.#isUnicellular) {
      console.log("All vertebrates are unicellular");
    }
    if (this.#hasEndoskeleton) {
      console.log("All vertebrates have endoskeleton");
    }
  }
  sexualReproduction() {
    console.log("All vertebrates reproduce sexually");
  }
}
const vertebrate = new Vertebrate({name: 'Vertebrates', gender: 'Any'});
vertebrate.sexualReproduction();
vertebrate.properties();
vertebrate.eat();

class Anthroproda extends Invertebrate {
  #hasJointedAppendages;
  #isSegmented;
  #isBilaterallySegmented;
  #hasOpenCirculatorySystem;
  constructor(
    name,
    gender
  ) {
    super({name, gender});
    this.#hasJointedAppendages = true;
    this.#isSegmented = true;
    this.#isBilaterallySegmented = true;
    this.#hasOpenCirculatorySystem = true;
  }

  properties() {
    if (this.#hasJointedAppendages) {
      console.log("Anthropods like coakroaches have jointed appendages");
    }
    if (this.#isSegmented) {
      console.log("Anthropods like coakroaches are segmented");
    }
    if (this.#isBilaterallySegmented) {
      console.log("Anthropods are bilaterally segmented");
    }
  }

  coldBlooded() {
    console.log("Anthropods are cold blooded");
  }

  bite() {
    console.log("Insects bite");
  }

  creep() {
    console.log("Most anthropoda creep");
  }

  sexualReproduction() {}
}
const anthropods = new Anthroproda('Spider', 'Male');
anthropods.bite();
anthropods.properties();
anthropods.creep();
anthropods.coldBlooded();

class Fish extends Vertebrate {
  #hasFins;
  #hasGills;
  #hasScales;
  constructor(name, gender) {
    super({name, gender});
    this.#hasFins = true;
    this.#hasGills = true;
    this.#hasScales = true;
  }
  coldBlooded() {
    console.log("Fish are cold blooded");
  }
    fishProperties() {
      if (this.#hasFins) {
        console.log("All fishes have fins")
      }
    }

  swim() {
    console.log("Fishes swim");
  }
}
const fis = new Fish('Tilapia', 'Female');
fis.swim();
fis.fishProperties();
fis.coldBlooded();

class Amphibians extends Vertebrate {
  #livesInDualHabitats;
  #isEctothermic;
  constructor(name, gender) {
    super({name, gender});
    this.#livesInDualHabitats = true;
    this.#isEctothermic = true;
  }
  attributes() {
    if (this.#livesInDualHabitats) {
      console.log("Amphibians lives in dual habitats. Some live in water, others live on land");
    }
    if (this.#isEctothermic) {
      console.log("Amphibians are meant to be ectothermic");
    }
  }
  
  spawning() {
    console.log("The method amphibians give birth is known as spawning");
  }
  swimming() {}
}
const amph = new Amphibians('Frog', 'Male');
amph.attributes();
amph.spawning();

class Reptiles extends Vertebrate {
  #hasGlands;
  #isTetrapod;
  #hasScales;
  constructor(name, gender) {
    super({name, gender});
    this.#hasGlands == true;
    this.#isTetrapod == true;
    this.#hasScales == true;
  }

  

  coldBlooded() {
    console.log("Reptiles are cold blooded");
  }
  creep() {
    console.log("Reptiles creep");
  }
  burrow() {}
}
const reptile = new Reptiles('Snake', 'Female');
reptile.creep();
reptile.coldBlooded();


class Aves extends Vertebrate {
  #hasWings;
  #hasFlightMuscles;
  #hasBeak;
  constructor(name, gender) {
    super({name, gender});
    this.#hasWings = true;
    this.#hasFlightMuscles = true;
    this.#hasBeak = true;
  }

  warmBlooded() {
    console.log("Aves are warm blooded");
  }

  fly() {
    console.log("Aves fly");
  }
  perch() {}
}
const ave = new Aves('Bird', 'Male');
ave.fly();
ave.warmBlooded()

class Mammal extends Vertebrate {
  #hasHairOrFur;
  #hasMammaryGlands;
  #hasSweatGlands;
  constructor(name, gender) {
    super({name, gender});
    this.#hasHairOrFur = true;
    this.#hasMammaryGlands = true;
    this.#hasSweatGlands = true;
  }

  MammalsProperties() {
    if (this.#hasHairOrFur) {
      console.log("Mammals have either hair or fur");
    }
    if (this.#hasMammaryGlands) {
      console.log("Mammals have mammary glands for feeding their young");
    }
    if (this.#hasSweatGlands) {
      console.log("Mammals have sweat glands");
    }
  }

  warmBlooded() {
    console.log("Mammals are warm blooded");
  }

  walk() {
    console.log("Mammals walk");
  }
  hop() {}
}

const mammal = new Mammal('Human', 'Male');
mammal.walk();
mammal.MammalsProperties();
mammal.warmBlooded();