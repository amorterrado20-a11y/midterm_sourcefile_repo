// Student Grade Analyzer

// Student Scores
let scores = [85, 72, 91, 64, 78];

// Display all scores
console.log("Student Scores: ");
for (let i = 0; i < scores.length; i++){
  console.log(scores[i]);
}

// Variables
let total = 0;
let highest = scores[0];
let lowest = scores[0];
let passed = 0;
let failed = 0;

// Analyze
for (let i = 0; i < scores.length; i++){
  let score = scores[i];
  total = total + score;

  if (score > highest) {
    highest = score;
  }

  if (score < lowest) {
    lowest = score;
  }

  if (score >= 75) {
    passed = passed + 1;

    let remark = "";
    if (score >= 90) {
      remark = "Excellent";
    } else if (score >= 80) {
      remark = "Very Good";
    } else {
      remark = "Good";
    }

    console.log("Student" + (i + 1) + ": " + score + " - " + remark + "-Passed");
  } else {
    failed = failed + 1;
    console.log("Student" + (i + 1) + ": " + score + "-" + remark + "Failed");
  }
};

let average = total / scores.length;

// Display
console.log("");
console.log("Total Score: " + total);
console.log("Average Score: " + average);
console.log("Highest Score: " + highest);
console.log("Lowest Score: " + lowest);
console.log("Passed: " + passed);
console.log("Failed: " + failed);
