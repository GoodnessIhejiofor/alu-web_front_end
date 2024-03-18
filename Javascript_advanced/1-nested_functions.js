const globalVariable = "Welcome";

const outer = () => {
  alert(globalVariable); // "Welcome"

  const course = "Horlberton";

  const inner = () => {
    alert(`${globalVariable} ${course}`); // "Welcome Holberton"

    const exclamation = "!";

    function inception() {
      alert(`${globalVariable} ${course} ${exclamation}`); // "Welcome Holberton !"
    }
    inception();
  };
  inner();
};
outer();