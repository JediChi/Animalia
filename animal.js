// const prompt = require("prompt-sync");

class Animals {
  constructor(name, gender) {
    if (this.constructor === Animals) {
    }
    this.name = name;
    this.gender = gender;
  }

  name = "Animals have different names";
  gender = "Animals can either be a male or female";

  eat() {
  }
  reproduce() {
    console.log("Animals give birth to younger ones");
  }
  growth() {
    console.log("Animals do grow");
  }
  breathe() {
    console.log("Animals breathe through the nostrils");
  }
}

class Invertebrates extends Animals {
  #isMulticellular;
  #hasExoskeleton;
  #hasNoCellWall;
  constructor(name, gender, isMulticellular, hasExoskeleton, hasNoCellWall) {
    super(name, gender);
    (this.#isMulticellular = isMulticellular),
      (this.#hasExoskeleton = hasExoskeleton),
      (this.#hasNoCellWall = hasNoCellWall);
  }
  properties () {
    if (this.#isMulticellular = true) {
      console.log("Ivertebrates are multicellular");
    }
    if (this.#hasExoskeleton = true) {
      console.log("Ivertebrates have exoskeletons");
    }
    if (this.#hasNoCellWall = true) {
      console.log("Ivertebrates have no cell wall");
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
const invertebrate = new Invertebrates();
invertebrate.move();
invertebrate.properties();
invertebrate.eat();

class Vertebrates extends Animals {
  #isUnicellular;
  #hasEndoskeleton;
  #hasACellWall;
  constructor(name, gender, isUnicellular, hasEndoskeleton, hasACellWall) {
    super(name, gender);
    
    this.#isUnicellular = isUnicellular;
    this.#hasEndoskeleton = hasEndoskeleton;
    this.#hasACellWall = hasACellWall;
  }
  eat() {
    console.log("Vertebrates eat mainly by chewing");
  }

  

  properties() {
    if (this.#isUnicellular = true) {
      console.log("All vertebrates are unicellular");
    }
    if (this.#hasEndoskeleton = true) {
      console.log("All vertebrates have endoskeleton");
    }
  }
  sexualReproduction() {
    console.log("All vertebrates reproduce sexually");
  }
}
const vertebrate = new Vertebrates();
vertebrate.sexualReproduction();
vertebrate.properties();
vertebrate.eat();

class Anthroproda extends Invertebrates {
  #hasJointedAppendages;
  #isSegmented;
  #isBilaterallySegmented;
  #hasOpenCirculatorySystem;
  constructor(
    name,
    gender,
    hasJointedAppendages,
    isSegmented,
    isBilaterallySegmented,
    hasOpenCirculatorySystem
  ) {
    super(name, gender);
    this.#hasJointedAppendages = hasJointedAppendages;
    this.#isSegmented = isSegmented;
    this.#isBilaterallySegmented = isBilaterallySegmented;
    this.#hasOpenCirculatorySystem = hasOpenCirculatorySystem;
  }

  properties() {
    if (this.#hasJointedAppendages = true) {
      console.log("Anthropods like coakroaches have jointed appendages");
    }
    if (this.#isSegmented = true) {
      console.log("Anthropods like coakroaches are segmented");
    }
    if (this.#isBilaterallySegmented = true) {
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
const anthropods = new Anthroproda();
anthropods.bite();
anthropods.properties();
anthropods.creep();
anthropods.coldBlooded();

class Fish extends Vertebrates {
  #hasFins;
  #hasGills;
  #hasScales;
  constructor(hasFins, hasGills, hasScales, name, gender) {
    super(name, gender);
    this.#hasFins = hasFins;
    this.#hasGills = hasGills;
    this.#hasScales = hasScales;
  }
  coldBlooded() {
    console.log("Fish are cold blooded");
  }
    fishProperties() {
      if (this.#hasFins = true) {
        console.log("All fishes have fins")
      }
    }

  swim() {
    console.log("Fishes swim");
  }
}
const fis = new Fish();
fis.swim();
fis.fishProperties();
fis.coldBlooded();

class Amphibians extends Vertebrates {
  #livesInDualHabitats;
  #isEctothermic;
  constructor(livesInDualHabitats, isEctothermic, name, gender) {
    super(name, gender);
    this.#livesInDualHabitats = livesInDualHabitats;
    this.#isEctothermic = isEctothermic;
  }
  attributes() {
    if (this.#livesInDualHabitats = true) {
      console.log("Amphibians lives in dual habitats. Some live in water, others live on land");
    }
    if (this.#isEctothermic = true) {
      console.log("Amphibians are meant to be ectothermic");
    }
  }
  
  spawning() {
    console.log("The method amphibians give birth is known as spawning");
  }
  swimming() {}
}
const amph = new Amphibians();
amph.attributes();
amph.spawning();

class Reptiles extends Vertebrates {
  #hasGlands;
  #isTetrapod;
  #hasScales;
  constructor(hasGlands, isTetrapod, hasScales, name, gender) {
    super(name, gender);
    this.#hasGlands = hasGlands;
    this.#isTetrapod = isTetrapod;
    this.#hasScales = hasScales;
  }

  

  coldBlooded() {
    console.log("Reptiles are cold blooded");
  }
  creep() {
    console.log("Reptiles creep");
  }
  burrow() {}
}
const reptile = new Reptiles();
reptile.creep();
reptile.coldBlooded();


class Aves extends Vertebrates {
  #hasWings;
  #hasFlightMuscles;
  #hasBeak;
  constructor(hasWings, hasFlightMuscles, hasBeak, name, gender) {
    super(name, gender);
    this.#hasWings = hasWings;
    this.#hasFlightMuscles = hasFlightMuscles;
    this.#hasBeak = hasBeak;
  }

  warmBlooded() {
    console.log("Aves are warm blooded");
  }

  fly() {
    console.log("Aves fly");
  }
  perch() {}
}
const ave = new Aves();
ave.fly();
ave.warmBlooded()

class Mammals extends Vertebrates {
  #hasHairOrFur;
  #hasMammaryGlands;
  #hasSweatGlands;
  constructor(hasHairOrFur, hasMammaryGlands, hasSweatGlands, name, gender) {
    super(name, gender);
    this.#hasHairOrFur = hasHairOrFur;
    this.#hasMammaryGlands = hasMammaryGlands;
    this.#hasSweatGlands = hasSweatGlands;
  }

  MammalsProperties() {
    if (this.#hasHairOrFur = true) {
      console.log("Mammals have either hair or fur");
    }
    if (this.#hasMammaryGlands = true) {
      console.log("Mammals have mammary glands for feeding their young");
    }
    if (this.#hasSweatGlands = true) {
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

const mammal = new Mammals();
mammal.walk();
mammal.MammalsProperties();
mammal.warmBlooded();