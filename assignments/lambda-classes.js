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
    constructor(instructorAttributes) {
            super(instructorAttributes);
            this.specialty = instructorAttributes.specialty;
            this.favLanguage = instructorAttributes.favLanguage;
            this.catchPhrase = instructorAttributes.catchPhrase;
        }
        //methods
    demo(subject) {
        return `Today we are learning about ${subject}.`;
    }
    grade(student, subject) {
        `${student.name} recieves a perfect score on ${subject}.`;
    }
}

class Student extends Person {
    constructor(studentAttributes) {
            super(studentAttributes);
            this.previousBackground = studentAttributes.previousBackground;
            this.className = studentAttributes.classname;
            this.favSubjects = studentAttributes.favSubjects;
        }
        //methods
    listSubjects(arr) {
        for (let i = 0; i < arr.length; i++) {
            return i;
        }
    }
    PRAssignment(subject) {
        return `${student.name} has submitted a PR for ${subject}.`;
    }
    springChallenge(subject) {
        return `${student.name}has begun sprint challenge on ${subject}.`;
    }
}