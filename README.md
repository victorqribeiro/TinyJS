# Tiny JS

**Tiny JS** is a lightweight JavaScript utility for dynamically creating HTML elements with deep property assignment. It simplifies DOM manipulation by allowing you to generate any standard HTML tag programmatically, apply properties, and append content easily.

## Features
- **Dynamically create HTML elements**: Generate any standard HTML tag with ease.
- **Deep property assignment**: Supports nested property structures for complex elements.
- **Simplified content appending**: Accepts strings or elements as child content.

## How It Works
Tiny JS attaches functions for each HTML tag (like `div`, `span`, `a`, etc.) to the global window object. You can create elements by simply calling the tag name as a function, passing in optional properties and child elements.

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

## Usage
1. Include the **tiny.js** script in your project.
2. Use any valid HTML tag as a function to create elements, assign properties, and append children.
3. Append the created elements to the DOM.

### Installation
Simply include the **tiny.js** file in your project:

```html
<script src="tiny.js"></script>
```

### Advanced Example

You can deeply assign properties to elements:

```javascript
const styledButton = button(
  {style: {backgroundColor: 'blue', color: 'white'}}, 
  'Click Me!'
);

document.body.appendChild(styledButton);
```

In this example, the `button` element is styled directly using the `style` property.

## Supported Tags
Tiny JS supports a wide range of HTML tags, including:
- Basic text elements: `p`, `span`, `strong`, `em`, etc.
- Interactive elements: `button`, `input`, `select`, etc.
- Media elements: `img`, `audio`, `video`, etc.
- Container elements: `div`, `section`, `article`, `footer`, etc.

## Contribution
Feel free to submit issues and pull requests to improve **Tiny JS**.


This README was generate by ChatGPT

