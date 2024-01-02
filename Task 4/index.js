marks = Number(prompt("Enter the marks: "));

if (marks <= 100 || marks >= 0) {
    if (marks >= 80) {
        document.write("Congratulation you got: A+");
    } else if (marks >= 70) {
        document.write("Congratulation you got: A");
    } else if (marks >= 60) {
        document.write("Congratulation you got: A-");
    } else if (marks >= 50) {
        document.write("Congratulation you got: B");
    } else if (marks >= 40) {
        document.write("Congratulation you got: C");
    } else if (marks >= 33) {
        document.write("Congratulation you got: D");
    } else {
        document.write("Sad! you are fail");
    };
} else {
    document.write("Invalid Marks");
};
