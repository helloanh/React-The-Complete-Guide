# Javascript ES6 Refresher  

### let and const  

	- before: var, create all variables.   

	- now: use let for similar to var, where the variable values might change. use const when variable is constant value.    

### arrow function  

```js
function myFunct(){
	...
}

// no more issue with this keyword. 
// "this" keyword will always refer to the current context and not change when use inside an arrow function
const myFunct = () => {
	...
}

//these are the same
const multiply = (n) => { return n * 2; }

// can pass 1 variable without opening and closing brackets
const multiply = n => { return  n * 2; }

// very concise way in single line, without return word
const multiply = n =>  n * 2; 

```


### classes, properties, and methods  

For writing properties.  
```js
// es6
constructor(){
	this.myProperty = 'value'
}

// es7
myProperty = 'value'

```

For writing methods 
```js
// es6
myMethod(){...}

// es7
myMethod = () => {...}

```

### spreads & rest operators

```js
// spreads are used to split up array elements or object propertie
const newArray = [...oldArray, 1, 2]
const newObject = {...oldObject, newProps: 5}

// example
const numbers = [1,2,3]
const newNumbers = [...numbers,4]

// rests are used to merge a list of function arguments into an array
function sortArgs(...args){
	return args.sort()
}

//example
const filter = (...args) => { 
	return args.filter(el => el === 1); 
}

// output [1]
console.log(filter(1,2,3))

```

### destructuring 

Easily extract array elements or object properties and store them as variables.  

```js
// array destructing, a = 'Hello', b = 'Max'
[a,b] = ['Hello', 'Max']

// object destructing 
{name} = {name: 'Max', age: 28}

console.log(name)	// ~> 'Max'
console.log(age)	// ~> undefined
```  

### refreshing array functions

Not really next-gen JavaScript, but also important: JavaScript array functions like map() , filter() , reduce()  etc.  
You'll see me use them quite a bit since a lot of React concepts rely on working with arrays (in immutable ways).  

The following page gives a good overview over the various methods you can use on the array prototype - feel free to click through them and refresh your knowledge as required: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array. 


Example for map

```js
const numbers = [1,2,3]
const doubleNumArray = numbers.map((n) => {
	return n * 2;
})

``` 

Other important array functions:  
Particularly important in this course are:

map()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map.     
find()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find. 
findIndex()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex. 
filter()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter. 
reduce()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce?v=b. 
concat()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat?v=b. 
slice()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice. 
splice()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice. 



