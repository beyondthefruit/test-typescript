var hello = 'world';
hello = 'foo';
var getFullName = function (name, surname) {
    return name + '' + surname;
};
// console.log(getFullName('moster', 1));
//this is false as 1 isn't a string
console.log(getFullName('moster', 'blabla'));
//object
var user = {
    name: 'Poilu',
    age: 30,
    getMessage: function () {
        return 'Hey' + name;
    }
};
var user2 = {
    name: 'Jack',
    getMessage: function () {
        return 'Hey' + name;
    }
};
console.log(user.getMessage);
