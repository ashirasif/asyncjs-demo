function timeout(ms) {
  console.log('Waiting for', ms, 'milliseconds \n');
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function getEmployees() {
  for (let i = 0; i < 10; i++) {
    try {
      console.log('Fetching employees', i+1 , 'times');
      const employees = await fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json());
      employees.forEach(employee => {
        console.log(employee.name);
      });
      await timeout(2000);
    }
    catch (error) {
      console.log('Error:', error);
    }
  }
}


function main() {
  getEmployees();
  
}


main();
