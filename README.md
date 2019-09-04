# React The Complete Guide  

Lab work for React The Complete Guide tutorial.    

1. [Lab1a: writing first react code with codepen](https://codepen.io/helloanh/pen/LYPzMLm). Basic component with two react render call.   
2. [Lab1b: writing first react code with codepen - refactor](https://codepen.io/helloanh/pen/yLBzGKV).  This uses one hook and one react render call.  This is far more common than the first way.  Usually used for Single-Page-Application (SPA).  



### Why React? 

- UI state difficult for vanilla JS to handle  
- UI state-management much better  
- huge ecosystem and active community  

### JS Refresher  

[Refresher notes](js-refresher.md)    
[Next generation JS summary](next-gen-js-summary.pdf)  

### Build Workflow

[build-workflow](images/build-workflow.png)


### Installation

```bash
sudo npm install -g create-react-app 

# cd into your working directory
create-react-app your-app-name --scripts-version 1.1.5

```

### Components

[Components and JSX Cheat Sheet](components.pdf)

### Props and States

Props and state are CORE concepts of React. Actually, only changes in props  and/ or state  trigger React to re-render your components and potentially update the DOM in the browser.  

Props let you pass date from parent (wrapping component) to child (embedded) component.  

```js
// AllPosts Component:

const posts = () => {
	return (
		<div>
			<Post title="My First Post" />
		</div>
	);
}

// New Post Component

class NewPost extends Component { // state can only be accessed in class-based components!
    state = {
        counter: 1
    };  
 
    render () { // Needs to be implemented in class-based components! Needs to return some JSX!
        return (
            <div>{this.state.counter}</div>
        );
    }
}
```

[props and state pdf](props-state.pdf)