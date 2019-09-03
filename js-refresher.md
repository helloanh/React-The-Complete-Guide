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

