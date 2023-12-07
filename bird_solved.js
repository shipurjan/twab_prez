class FlyingBird {
  fly() {
    console.log("I can fly");
  }
}

class SwimmingBird {
  swim() {
    console.log("I can swim");
  }
}

/*
 * Nie naruszyliśmy zasady Liskov, ale wystąpił nowy problem:
 * kaczki mogą również pływać, lecz nie możemy dziedziczyć z wielu klas.
 *
 * Można stworzyć klasę FlyingSwimmingBird, ale takie podejście może
 * doprowadzić do dużej ilości permutacji klas.
 *
 * Popularnym rozwiązaniem jest składanie obiektów (kompozycja ponad dziedziczenie), czyli dodawanie
 * funkcjonalności zamiast dziedziczenia funkcjonalności
 */
class Duck extends FlyingBird {
  quack() {
    console.log("I can quack");
  }
}

class Penguin extends SwimmingBird {}

function makeFlyingBirdFly(flyingBird) {
  flyingBird.fly();
}

function makeSwimmingBirdSwim(swimmingBird) {
  swimmingBird.swim();
}

const duck = new Duck();
const penguin = new Penguin();

makeFlyingBirdFly(duck);
makeSwimmingBirdSwim(penguin);
