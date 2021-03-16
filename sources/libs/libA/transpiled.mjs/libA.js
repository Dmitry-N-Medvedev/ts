import { PersonType } from './libEnums';
export function greet(person) {
    return `hi, ${person.firstName}`;
}
export async function asyncGreet(person) {
    return new Promise((resolve)=>{
        const to = setTimeout(()=>{
            clearTimeout(to);
            resolve(`hi, ${person.firstName} ${person.lastName}`);
        }, 250);
    });
}
export function greetPersonType(person, personType) {
    return personType === PersonType.CORPORATE ? `good day, Mr. ${person.lastName}` : `hi, ${person.firstName}`;
}
