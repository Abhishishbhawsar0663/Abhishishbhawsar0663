 // let enMarks = 45;
// let hiMarks = 76
// let scMarks = 33;
// let sstMarks = 48;
// let mMarks = 77;
let student_name = 'Veer';

function obtMarks(enMarks, hiMarks, scMarks, sstMarks, mMarks) {
    let obtMarks = enMarks + hiMarks + scMarks + sstMarks + mMarks;
    return obtMarks;
}
let obMarks = obtMarks(45, 76, 33, 48, 77);

function percentage(obtMarks, tmarks) {
    let percentage = (obtMarks / tmarks) * 100;
    return percentage;
}
let perStudent = percentage(obMarks, 500);

function result(student_name, obtMarks, tmarks, percentage) {
    if (percentage > 80 && percentage <= 100) {
        console.log(`${student_name} has got ${obtMarks} out of ${tmarks} and scored  ${percentage}% and got 'A' Grade`);
    }
    else if (percentage > 60 && percentage <= 80) {
        console.log(`${student_name} has got ${obtMarks} out of ${tmarks} and scored  ${percentage}% and got 'B' Grade`);
    } else if (percentage > 40 && percentage <= 60) {
        console.log(`${student_name} has got ${obtMarks} out of ${tmarks} and scored  ${percentage}% and got 'C' Grade`);
    } else if (percentage > 33 && percentage <= 40) {
        console.log(`${student_name} has got ${obtMarks} out of ${tmarks} and scored  ${percentage}% and got 'D' Grade`);
    }
    else {
        console.log(`${student_name} has got ${obtMarks} out of ${tmarks} and scored  ${percentage}% and got 'F' Grade Student got failed`);
    }

}
result(student_name, obMarks, 500, perStudent);

