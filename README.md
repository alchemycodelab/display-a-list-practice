## Display a list practice

The goal here is to help you see web development the way experienced developers do: as a series of finite and repeatable tasks.

There are only so many things we do in an app.

[Here is a list of the 10 major plain JavaScript patterns.](https://github.com/alchemycodelab/student-resources/blob/main/curriculum-notes/web/documentation/patterns.md)

Let's practice the 'display a list' and 'render function' patterns.

**Scoring rubric: 2.5 point for each array displayed to the page.**

## Goal

Render 4 separate lists of things to the same `index.html` file. Minimally,

1.  One list should be a list of string,
1.  One should be a list of simple objects,
1.  One should be a list of objects where one property is a nested object,
1.  Another list of of simple objects, or

    -   STRETCH: A list of objects where one property is an array. This means that you need to render a sub-list for each item in the main list!

## Setup

Start with the [list practice template repo](https://github.com/alchemycodelab/display-a-list-practice).

## Process

Repeat the following process 4 times, with 4 different domains, all in the same repo

> Note: do this process **one array at a time**. Do not write 4 arrays, then 4 render functions, etc. Work through the first array, then the first render function, then the first display function.

Come up with a domain for this data (lie 'dogs' or 'candies'). Let's assume you picked 'candies' for your list of simple objects

### 1) Data

Rename `array-one.js` to `candies-data.js`. In that data file:

-   Create an exported variable with an array of at least 3 objects for that domain
-   Each object should have at least 3 properties (unless you are doing the string list)
-   Objects in the array should all have the same properties

For example:

```js
export const candies = [
    {
        name: 'Twix',
        flavor: 'chocolate caramel',
        type: 'candy bar',
    },
    {
        name: 'Bubblicious',
        flavor: 'strawberry watermelon',
        type: 'gum',
    },
    {
        name: 'Smarties',
        flavor: 'tart fruity',
        type: 'waffers',
    },
];
```

### 2) HTML

In `index.html`:

-   Rename the header to your domain, e.g. `<h2>Candies</h2>`
-   Rename the `id` of your list container, e.g. `<ul id="candy-list"></ul>`
-   Design how the `<li>` element will look, so you have a target for the render function. Simple is best for this exercise!
    ```html
    <h2>Candies</h2>
    <ul id="candy-list">
        <li class="candy-item">
            <h2>Twix</h2>
            <p>chocolate caramel candy bar</p>
        </li>
    </ul>
    ```

### 3) Render Function

Rename `render-one.js` to `render-candy.js` file for your candy array

-   Write a render function that accepts one object and returns DOM elements.
-   This function should return an `<li>` element with a css class of 'candy-item'.
-   Create a minimum of two child elements (`h2`, `span`, `p` etc.) for putting in the properties of the object

Display Function

1.  In `app.js`:
    -   `import` your array and render function
    -   Grab the list element from the DOM.
    -   Loop through your array, and for each object"
        -   render a candy element using the render function
        -   append the element to the container element you grabbed from the DOM
