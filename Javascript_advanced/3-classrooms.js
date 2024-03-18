/**
 * Creates an array of student seat functions.
 *
 * @param {number} numberofStudents - The number of students in the classroom.
 * @returns {Array<Function>} - An array of student seat functions.
 */
function createClassRoom(numberofStudents) {
    const studentSeat = (seat) => {
      return () => seat;
    };
  
    const students = [];
    for (let i = 0; i < numberofStudents; i++) {
      students.push(studentSeat(i + 1));
    }
    console.log(students.length);
    return students;
  }
  
  const classRoom = createClassRoom(10);
  
  console.log(classRoom[0]());
  console.log(classRoom[3]());
  console.log(classRoom[9]());