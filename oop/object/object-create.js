let dog = {
    name: "Spot",
    numLegs: 4,
    sayhello(){
        console.log('hello')
    },
    displaylegs(){
        console.log(`This dog has ${this.numLegs} legs.`)
    },
    displayAge(birthYear){
        return `${this.name} is ${2022-birthYear}`;
    }
  };
  console.log(dog.name,dog.numLegs)
  dog.sayhello()
  console.log(dog.displayAge(2015))