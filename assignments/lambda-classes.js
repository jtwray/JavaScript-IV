// CODE here for your Lambda Classes
class Person {

    constructor(attributes) {
            this.createdAt = attributes.createdAt;
            this.name = attributes.name;
            this.age = attributes.age;
            this.location = attributes.location;
            this.gender = attributes.gender;

        }
        //methods
    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}.`;
    };
} //GameObject