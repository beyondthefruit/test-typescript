let hello: string = 'world';
hello = 'foo';

const getFullName = (name: string, surname: string): string => {
  return name + '' + surname;
};

// console.log(getFullName('moster', 1));
//this is false as 1 isn't a string
console.log(getFullName('moster', 'blabla'));

interface IUser {
  name: string;
  age?: number; //means that it's not mandatory
  getMessage(): string;
}
//object
const user: IUser = {
  name: 'Poilu',
  age: 30,
  getMessage() {
    return 'Hey' + name;
  },
};
const user2: IUser = {
  name: 'Jack',
  getMessage() {
    return 'Hey' + name;
  },
};

console.log(user.getMessage);
