#### All credit goes to "You Don't Know Javascript" from Kyle Simpson
#### These are just my notes I use for my personal reference while learning from "You Don't Know JavaScript"

# Values & Types
- JavaScript has typed values, not typed variables. 

```
var a;
typeof a;				// "undefined"

a = "hello world";
typeof a;				// "string"

a = 42;
typeof a;				// "number"

a = true;
typeof a;				// "boolean"

a = null;
typeof a;				// "object" -- weird, bug

a = undefined;
typeof a;				// "undefined"

a = { b: "c" };
typeof a;				// "object"
```

- Only values have types in JavaScript; variables are just simple containers for those values.

- A long standing bug in is that: 
    - typeof null is an interesting case, because it errantly returns "object", when you'd expect it to return "null".

# Objects 
- Object type refers to a compound value where you can set properties (named locations) that each hold their own values of any type. This is perhaps one of the most useful value types in all of JavaScript.

```
var obj = {
	a: "hello world",
	b: 42,
	c: true
};

obj.a;		// "hello world"
obj.b;		// 42
obj.c;		// true

obj["a"];	// "hello world"
obj["b"];	// 42
obj["c"];	// true
```

- Properties can either be accessed with dot notation (i.e., obj.a) or bracket notation (i.e., obj["a"]). Dot notation is shorter and generally easier to read, and is thus preferred when possible.

# Arrays
- Arrays start with 0 index and have dynamic length. Could technically interchange the usage of arrays and objects, but it is considered improper. 
- Use arrays for positioned values and objects for named properties

```
var arr = [
	"hello world",
	42,
	true
];

arr[0];			// "hello world"
arr[1];			// 42
arr[2];			// true
arr.length;		// 3

typeof arr;		// "object"
```
# Functions
- Functions are object subtypes, so it will return function and can have properties. 
- Be sure the limit scope of properties for good conventions. 

# Coercion
- Explicit coercion is when it is obvious that a conversion from one type to another will occur.
- Implicit coercion is when the type converison is not obvious and can happen as an indirect side effect.
	- Implicit ex) 
	```
	var a = "2";
	var b = a * 2; 		// "2" implicitly coerced to a number and multiplied by 2 to get 4
 
	a; 					// "2"
	b; 					// 4 -- the number!
	```


