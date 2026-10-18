// Student Grade Analyzer V2

class Student {
    constructor(name, scores) {
        this.name = name;
        this.scores = scores;
    }

    getAverage() {
        let total = 0;

        for (let i = 0; i < this.scores.length; i++) {
            total = total + this.scores[i];
        }

        return total / this.scores.length;
    }

    getLetterGrade() {
        let avg = this.getAverage();

        if (avg >= 90) {
            return "A";
        } else if (avg >= 80) {
            return "B";
        } else if (avg >= 70) {
            return "C";
        } else if (avg >= 60) {
            return "D";
        } else {
            return "F";
        }
    }
}

function analyzeClass(students) {
    console.log("------- STUDENT REPORT -------");

    let totalClassAvg = 0;
    let topAvg = 0;
    let topName = "";

    for (let i = 0; i < students.length; i++) {
        let student = students[i];
        let avg = student.getAverage();
        let grade = student.getLetterGrade();

        console.log(`${student.name} - Average: ${avg.toFixed(1)} | Grade: ${grade}`);

        totalClassAvg = totalClassAvg + avg;

        if (avg > topAvg) {
            topAvg = avg;
            topName = student.name;
        }
    }

    console.log("-----------------------------------");

    let classAverage = totalClassAvg / students.length;

    console.log(`Class Average: ${classAverage.toFixed(1)}`);
    console.log(`Top Student: ${topName} with ${topAvg.toFixed(1)}`);
}

const studentData = [
    { name: "Lany", scores: [85, 90, 92] },
    { name: "Bongbung", scores: [70, 75, 68] },
    { name: "Dutherthe", scores: [95, 98, 92] },
    { name: "Pico", scores: [55, 60, 58] }
];

let students = [];

for (let i = 0; i < studentData.length; i++) {
    let data = studentData[i];

    students.push(new Student(data.name, data.scores));
}

analyzeClass(students);
