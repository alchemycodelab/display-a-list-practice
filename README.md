<p>The goal here is to help you see web development the way experienced developers do: as a series of finite and repeatable tasks.</p>
<p>There are only so many things we do in an app.</p>
<p><a class="inline_disabled" href="https://github.com/alchemycodelab/module-one-curriculum-base/blob/main/PATTERNS.md" target="_blank" rel="noopener">Here is a list of the 10 major plain JavaScript patterns.</a></p>
<p>&nbsp;Let's practice the 'display a list' and 'render function' patterns.</p>
<p><strong>Scoring rubric: 2.5 point for each array displayed to the page.</strong></p>
<ol>
    <li>Goal: render 4 separate lists of things to the same index.html file. Minimally,
        <ul>
            <li>one list should be a list of string,</li>
            <li>one should be a list of simple objects,</li>
            <li>one should be a list of objects where one property is a nested object,</li>
            <li>and one should be a list of objects where one property is an array.</li>
            <li>A a stretch goal, feel free to make all of them arrays of deep objects (with array and nested object properties).</li>
        </ul>
    </li>
    <li>Start with the <a class="inline_disabled" href="https://github.com/alchemycodelab/display-a-list-practice" target="_blank" rel="noopener">list practice template repo</a>.</li>
    <li>Repeat the following process 4 times, with 4 different domains, all in the same template:
        <ol>
            <li>Come up with a domain for this data (lie 'dogs' or 'candies'). Let's assume you picked 'candies'.</li>
            <li>Rename 'array-one.js' to 'candies-data.js' or whatever. In that data file, create an array of at least 3 objects for that domain (each object should have at least 3 properties). The objects in the array should all have the same properties.</li>
            <li>Rename 'render-one.js' to 'render-candy.js' file for your candy array. For your array of objects, write a simple render function that accepts one object and returns a DOM elements. This function should return at minimum a div with two p tags. The outer div should have a css class of 'candy-item'.</li>
            <li>Then, in app.js import your array and render function and grab a container element from the DOM.</li>
            <li>Loops through your array, and for each object, render and appends a styled candy element to the container element you grabbed from the DOM.</li>
            <li>Note: do this process <strong>one array at a time</strong>. Do not write 4 arrays, then 4 render functions, etc. Please work through the first array, then the first render function, then the first display function.</li>
        </ol>
    </li>
</ol>
