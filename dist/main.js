var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var popularTags = ['dragon', 'coffee'];
// const dragonsTag: MaybePopularTag;
var username = 'alex';
var pageNumber = '1';
var errorMessage = null;
// mean by default it will be null
var useragain = null;
var doSomething = function () {
    console.log('doSomething');
};
// dom elements
// const someElement = document.querySelector('.foo') as HTMLInputElement;
// console.log('someElement', someElement.value);
var someElement = document.querySelector('.foo');
someElement.addEventListener('blur', function (event) {
    var target = event.target;
    console.log('event', target.value);
});
var People = /** @class */ (function () {
    function People(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    People.prototype.getFullName = function () {
        return this.firstName + '' + this.lastName;
    };
    return People;
}());
var Admin = /** @class */ (function (_super) {
    __extends(Admin, _super);
    function Admin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Admin.prototype.setEditor = function (editor) {
        this.editor = editor;
    };
    Admin.prototype.getEditor = function () {
        return this.editor;
    };
    return Admin;
}(People));
var people = new People('keke', 'poil');
// console.log(people.);
var admin = new Admin('Foo', 'Bar');
console.log(admin.firstName);
// function in ts
var searchStr = 'foo';
var hasSearchStr = any(function (el) { return el.contains(searchStr); }, ['fooo', 'bar', 'bar']);
var addId = function (obj) {
    // all generic data types are written inside <>
    var id = Math.random().toString(16);
    return __assign(__assign({}, obj), { id: id });
};
var person = {
    name: 'Jack',
    data: {
        meta: 'foo'
    },
    meta: 'bari'
};
var person2 = {
    name: 'Jill',
    data: ['foo', 'bar', 'baz']
};
var result = addId(person);
console.log('result', result);
