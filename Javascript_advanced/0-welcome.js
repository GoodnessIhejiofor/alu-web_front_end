/**
 * Displays a welcome message with the full name.
 * @param {string} firstName - The first name of the person.
 * @param {string} lastName - The last name of the person.
 */
function welcome(firstName, lastName) {
    const fullName = `${firstName} ${lastName}`;
  
    const displayFullName = () => {
      alert(`Welcome ${fullName}!`);
    };
  
    displayFullName();
  }
  