export interface Person {
  firstName: string;
  lastName: string;
}

export function greet(person: Person) {
  return `hi, ${person.firstName}`;
}

export async function asyncGreet(person: Person) {
  return new Promise((resolve) => {
    const to = setTimeout(() => {
      clearTimeout(to);

      resolve(`hi, ${person.firstName} ${person.lastName}`);
    }, 250);
  });
}