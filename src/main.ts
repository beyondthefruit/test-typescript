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

// union operator in Ts
type ID = string;
type PopularTag = string;
type MaybePopularTag = PopularTag | null;

interface IUser2 {
  name: string;
  surname: string;
}

const popularTags: PopularTag[] = ['dragon', 'coffee'];
// const dragonsTag: MaybePopularTag;

let username: string = 'alex';
let pageNumber: string | number = '1';

let errorMessage: string | null = null;
// mean by default it will be null

let useragain: IUser2 | null = null;

const doSomething = (): void => {
  console.log('doSomething');
};

// dom elements
// const someElement = document.querySelector('.foo') as HTMLInputElement;
// console.log('someElement', someElement.value);
const someElement = document.querySelector('.foo');
someElement.addEventListener('blur', (event) => {
  const target = event.target as HTMLInputElement;
  console.log('event', target.value);
});

// classes in typescript
interface IPeople {
  getFullName(): string;
}

class People implements IPeople {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  getFullName(): string {
    return this.firstName + '' + this.lastName;
  }
}
class Admin extends People {
  private editor: string;
  setEditor(editor: string): void {
    this.editor = editor;
  }
  getEditor(): string {
    return this.editor;
  }
}

const people = new People('keke', 'poil');
// console.log(people.);
const admin = new Admin('Foo', 'Bar');
console.log(admin.firstName);

// function in ts
const searchStr = 'foo';
const hasSearchStr = any<string>(
  (el: string) => el.contains(searchStr),
  ['fooo', 'bar', 'bar']
);

const addId = <T extends object>(obj: T) => {
  // all generic data types are written inside <>
  const id = Math.random().toString(16);
  return {
    ...obj,
    id,
  };
};

interface IPerson<T, V> {
  //we usually use T but can write any letter
  name: string;
  data: T;
  meta: V;
}

const person: IPerson<{ meta: string }, string> = {
  name: 'Jack',
  data: {
    meta: 'foo',
  },
  meta: 'bari',
};
const person2: IPerson<string[]> = {
  name: 'Jill',
  data: ['foo', 'bar', 'baz'],
};

const result = addId<IPerson>(person);
console.log('result', result);
