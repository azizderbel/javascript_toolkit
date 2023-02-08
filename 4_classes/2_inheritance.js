'use strict'

class Animal {
    constructor(legs) {
        this.legs = legs;
    }
    walk() {
        console.log('walking on' + this.legs + ' legs');
    }
}

class Bird extends Animal {
    constructor(legs) {
        super(legs);
    }
    fly() {
        console.log('flying');
    }
    walk() {
        super.walk();
        console.log(`go walking`);
    }
}