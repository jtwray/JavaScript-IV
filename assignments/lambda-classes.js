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
    }
} //Person

class Instructor extends Person {
    constructor(childAttributes) {
            super(childAttributes);
            this.specialty = childAttributes.specialty;
            this.favLanguage = childAttributes.favLanguage;
            this.catchPhrase = childAttributes.catchPhrase;
        }
        //methods
    demo(subject) {
        return `Today we are learning about ${subject}.`;
    }
    grade(student, subject) {
        `${student.name} recieves a perfect score on ${subject}.`;
    }
}