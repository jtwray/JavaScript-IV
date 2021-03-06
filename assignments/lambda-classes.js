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
        return (`Hello my name is ${this.name}, I am from ${this.location}.`);
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
        return (`Today we are learning about ${subject}.`);
    }
    grade(student, subject) {
        return (`${student.name} receives a perfect score on ${subject}.`);
    }
}

class Student extends Person {
    constructor(studentAttributes) {
            super(studentAttributes);
            this.previousBackground = studentAttributes.previousBackground;
            this.className = studentAttributes.className;
            this.favSubjects = studentAttributes.favSubjects;
        }
        //methods
    listSubjects() {
        for (let i = 0; i < this.favSubjects.length; i++) {
            return (this.favSubjects[i]);
        }

    }
    PRAssignment(subject) {
        return (`${this.name} has submitted a PR for ${subject}.`);
    }
    sprintChallenge(subject) {
        return (`${this.name} has begun sprint challenge on ${subject}.`);
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
        return (`${this.name} announces to ${channel}, @channel standy times!`);
    }
    debugsCode(Student, subject) {
        return (`${this.name} debugs ${Student.name}'s code on ${subject}.`);
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

const barney = new Instructor({
    name: 'Barney',
    location: 'Bedrock',
    age: 27,
    gender: 'male',
    favLanguage: 'TypeScript',
    specialty: 'Back-end',
    catchPhrase: `Don't forget the nachos`
});

const tony = new Instructor({
    name: 'Tony',
    location: 'Los Angeles',
    age: 37,
    gender: 'female',
    favLanguage: 'CSS',
    specialty: '.Less',
    catchPhrase: `Don't forget CSS is a Language too, guys, right????`
});

const george = new ProjectManager({
    name: 'George',
    location: 'Compton',
    age: 35,
    gender: 'male',
    favLanguage: 'Java',
    specialty: 'Blockchain',
    catchPhrase: `Im here for 'the Code'`,
    gradClassName: 'CS1',
    favInstructor: 'Josh'
});

const larry = new ProjectManager({
    name: 'Larry',
    location: 'New York',
    age: 35,
    gender: 'male',
    favLanguage: 'Java',
    specialty: 'Golang',
    catchPhrase: `Im here for cheesecake`,
    gradClassName: 'CS1',
    favInstructor: 'Dan'
});

const tom = new ProjectManager({
    name: 'Tom',
    location: 'Chicago',
    age: 35,
    gender: 'male',
    favLanguage: 'Java',
    specialty: 'Public Speaking',
    catchPhrase: `Im here for 'the Cheetos'`,
    gradClassName: 'CS1',
    favInstructor: 'Keiren'
});
const tucker = new Student({
    name: 'Tucker',
    age: 34,
    location: 'Asheville',
    gender: 'male',
    previousBackground: 'vet tech',
    className: 'Webpt6',
    favSubjects: ['Javascript', 'Html', 'CSS']
});

const jimbo = new Student({
    name: 'Jimbo',
    age: 34,
    location: 'Asheboro',
    gender: 'male',
    previousBackground: 'mechanic',
    className: 'Webpt2',
    favSubjects: ['Javascript', 'Html', 'CSS']
});

const sam = new Student({
    name: 'Sam',
    age: 34,
    location: 'Farmville',
    gender: 'male',
    previousBackground: 'cow hand',
    className: 'Webpt4',
    favSubjects: ['Javascript', 'Html', 'CSS']
});
// console.log(tucker.listSubjects());
console.log(tucker.PRAssignment(tucker.favSubjects[1]));
console.log(tucker.sprintChallenge(tucker.favSubjects[2]));
console.log(tucker.speak());
console.log(sam.listSubjects());
console.log(sam.PRAssignment(sam.favSubjects[1]));
console.log(sam.sprintChallenge(sam.favSubjects[2]));
console.log(sam.speak());
console.log(jimbo.listSubjects());
console.log(jimbo.PRAssignment(jimbo.favSubjects[1]));
console.log(jimbo.sprintChallenge(jimbo.favSubjects[2]));
console.log(jimbo.speak());

console.log(barney.demo(barney.favLanguage));
console.log(barney.grade(tucker, tucker.favSubjects[1]));
console.log(fred.demo(fred.favLanguage));
console.log(fred.grade(tucker, tucker.favSubjects[1]));
console.log(tony.demo(tony.favLanguage));
console.log(tony.grade(jimbo, jimbo.favSubjects[1]));

console.log(tom.standUp('webpt6_sprint4'));
console.log(tom.debugsCode(tucker, tom.favLanguage));
console.log(george.standUp('webpt6_sprint4'));
console.log(george.debugsCode(jimbo, george.favLanguage));
console.log(larry.standUp('webpt6_sprint4'));
console.log(larry.debugsCode(sam, larry.favLanguage));




console.log(`FIN`);