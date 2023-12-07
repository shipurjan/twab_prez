class Bird {
  fly() {
    console.log("I can fly");
  }
}

class Duck extends Bird {
  quack() {
    console.log("I can quack");
  }
}

class Penguin extends Bird {
  fly() {
    // Naruszenie zasady Liskov
    throw new Error("Cannot fly");
  }

  swim() {
    console.log("I can swim");
  }
}

// Według zasady podstawienia Liskov 
// każda podklasa klasy musi mieć działające metody klasy nadrzędnej
function makeBirdFly(bird) {
  bird.fly();
}

const duck = new Duck();
const penguin = new Penguin();

makeBirdFly(duck);
makeBirdFly(penguin);
