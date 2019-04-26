// CODE here for your Lambda Classes
class Person {

    constructor(attributes) {
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
    listSubjects(favSubjects) {
        for (let i = 0; i < favSubjects.length; i++) {
            return i;
        }
    }
    PRAssignment(subject) {
        return `${student.name} has submitted a PR for ${subject}.`;
    }
    sprintChallenge(subject) {
        return `${student.name}has begun sprint challenge on ${subject}.`;
    }
}

class ProjectManager extends Instructor {
    constructor(pmAttributes) {
            super(pmAttributes);
            this.gradClassName = pmAttributes.gradClassName;
            this.favInstructor = pmAttributes.favInstructor;
        }
        //methods
    standUp(channel) {
        return `${this.name} announces to ${channel}, @channel standy times!`;
    }
    debugsCode(student, subject) {
        returns `${this.name} debugs ${student.name}'s code on ${subject}.`;

    }
}

const fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
});

const tucker = new Student({
    name: 'Tucker',
    age: 34,
    location: 'Asheville',
    gender: 'male',
    previousBackground: 'vet tech',
    className: 'Webpt6',
    favSubjects: ["Javascript", "Html", "CSS"]

});
tucker.listSubjects(this.favSubjects);
tucker.PRAssignment(this.favSubjects[0]);
tucker.sprintChallenge(this.favSubjects[1]);