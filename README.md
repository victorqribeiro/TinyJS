# Tiny.js

**Tiny.js** is a minimalistic JavaScript framework designed for building reactive user interfaces with a functional programming approach. It provides the core functionality needed for dynamic DOM manipulation and reactive state management without the overhead of larger, more complex libraries. 

Tiny.js is ideal for small projects or when you want a lightweight solution to build interactive web apps with simple reactivity and clean code.

## Features

### 1. **Dynamic HTML Element Creation**

Tiny.js makes it easy to create HTML elements with simple functions. Each HTML tag (e.g., `div`, `a`, `ul`, `li`, etc.) is mapped to a function that you can call to create an element of that type. You can pass an object of attributes and children, just like JSX in React, or simply append text nodes or other elements.

```javascript
a({ href: 'https://example.com' }, 'Click me');
div({ class: 'container' }, 'Hello World');
```

### 2. **Reactive State Management**

Tiny.js includes a simple, yet powerful, state management system that makes your application reactive. You can create state objects that automatically trigger updates when modified. This is done using JavaScript's `Proxy` to observe changes in the state and rerun any necessary updates.

```javascript
const state = createState({
  todos: [],
});

state.addUpdate('todos', () => {
  console.log('Todos have changed:', state.todos);
});

state.todos = ['Learn Tiny.js']; // Triggers the update
```

### 3. **Event Handling**

Attach event handlers to elements directly by passing them as attributes. For example, in the following code, clicking the button will update the state.

```javascript
button({ onclick: () => alert('Button clicked!') }, 'Click me');
```

### 4. **Shorthand DOM Selection Helpers**

Tiny.js provides two utility functions for selecting DOM elements:

- `$` for selecting a single element by CSS selector (`document.querySelector`).
- `$$` for selecting multiple elements by CSS selector (`document.querySelectorAll`).

```javascript
const firstItem = $('li');    // Selects the first <li> element
const allItems = $$('li');    // Selects all <li> elements
```

### 5. **Minimalistic and Lightweight**

Tiny.js is focused on simplicity and performance. It is just a few kilobytes in size, making it perfect for small projects or for when you need a minimal framework that doesn’t add unnecessary overhead.

## Example Usage

Here’s an example of how you can build a simple Todo app with Tiny.js:

### `Todo.js`

```javascript
export default function Todo(state, text, index) {
  return li(text, button({ onclick: function() {
    const todos = state.todos.slice();
    todos.splice(index, 1);
    state.todos = todos;
  }}, 'x'));
}
```

### `TodoList.js`

```javascript
import Todo from './Todo.js';

export default function TodoList(state) {
  const list = ul();

  state.addUpdate('todos', function() {
    list.innerHTML = '';
    state.todos.forEach((t, i) => list.append(Todo(state, t, i)));
  });

  return list;
}
```

### `CreateTodo.js`

```javascript
export default function CreateTodo(state) {
  const inp = input();
  return form(
    { onsubmit: function(e) {
      e.preventDefault();
      state.todos = [...state.todos, inp.value];
      inp.value = '';
    }},
    inp,
    input({ type: 'submit', value: 'Add Todo' })
  );
}
```

### `TodoApp.js`

```javascript
import './tiny.js';
import CreateTodo from './CreateTodo.js';
import TodoList from './TodoList.js';

export default function TodoApp() {
  const state = createState({ todos: [] });

  const style = {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column'
  };

  return div(
    { style },
    CreateTodo(state),
    TodoList(state)
  );
}
```

## Live Examples
- [TinyApp](https://github.com/victorqribeiro/TinyApp)
- [TodoApp](https://github.com/victorqribeiro/TodoApp)

## How It Works

- **Tiny.js provides a minimal set of functions** to create HTML elements (`a()`, `div()`, `ul()`, etc.) and manipulate the DOM with minimal syntax.
- **State management** is handled through a `createState` function, which wraps state objects with a Proxy. This allows for automatic reactivity: when a property is modified, all listeners are notified and the UI is updated accordingly.
- **Event handling** is done by passing event listeners as object properties when creating DOM elements.
- **Minimal dependencies** and a **small footprint** ensure that Tiny.js is lightweight and quick to integrate into any project.


TinyJS attaches functions for each HTML tag (like `div`, `span`, `a`, etc.) to the global window object. You can create elements by simply calling the tag name as a function, passing in optional properties and child elements.

Additionally, TinyJS introduces two new helper functions:
- **`$`**: A wrapper around `document.querySelector`, simplifying DOM element selection.  
  Example:  
  ```javascript
  const post = $('#post_1'); // Selects the element with id 'post_1'
  ```

- **`$$()`**: A wrapper around `document.querySelectorAll` that returns an array of DOM elements, allowing for easy iteration.  
  Example:  
  ```javascript
  const items = $$('.item'); // Selects all elements with class 'item'
  items.forEach(item => {
    console.log(item);
  });
  ```

### Example

```javascript
const myDiv = div(
  {id: 'container', className: 'my-class'}, 
  h1('Hello World'), 
  p('This is a dynamically generated paragraph.')
);

document.body.appendChild(myDiv);
```

In this example, the `div`, `h1`, and `p` elements are created dynamically with their attributes and content specified as arguments.

### Advanced Example

You can deeply assign properties to elements:

```javascript
const styledButton = button(
  {style: {backgroundColor: 'blue', color: 'white'}, onclick: () => alert('you clicked me')}, 
  'Click Me!'
);

document.body.appendChild(styledButton);
```

In this example, the `button` element is styled directly using the `style` property.

### Installation
Simply include the **tiny.js** file in your project:

```html
<script src="tiny.js"></script>
```

[npm package](https://www.npmjs.com/package/tinyjs-framework)

```bash
npm install tinyjs-framework
```


## Supported Tags

TinyJS supports a wide range of HTML tags, including:
- Basic text elements: `p`, `span`, `strong`, `em`, etc.
- Interactive elements: `button`, `input`, `select`, etc.
- Media elements: `img`, `audio`, `video`, etc.
- Container elements: `div`, `section`, `article`, `footer`, etc.

## Contribution

Make sure to open an issue before submitting a PR.

## TypeScript

If you want a typed version of this library, use this [fork](https://github.com/guilhermebolfe11/TinyTS)


## License

Tiny.js is released under the MIT license.

---

Tiny.js is designed for developers who want a small, functional, and easy-to-use framework for building reactive UIs without the complexity of larger frameworks. Whether you're building a small app or need something lightweight to get the job done, Tiny.js is the tool for you.

_This README was generated by ChatGPT_

