# Spread Syntax
Allows an iterable (arrays) to explan ind places where 0+ arguments are expected. 

### Using the spread operator in React setState
The spread operator can be used to take an existing array and add another element (or remove with the filter method) to it while still preserving the original array
```
delTodo = (id) => {
        this.setState({ todos: [...this.state.todos.filter(todo => todo.id
            !== id)] });
    }
```