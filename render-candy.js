export function renderCandy(candy) {
    const li = document.createElement('li');
    li.classList.add('candy-item');

    const headerEl = document.createElement('h2');
    headerEl.textContent = candy.name;

    const pEl = document.createElement('p');
    pEl.textContent = candy.flavor + ' ' + candy.type;

    li.append(headerEl, pEl);

    return li;
}
