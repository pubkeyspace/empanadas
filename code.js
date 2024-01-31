
let $$ = (sel, node) => [...(node || document).querySelectorAll(sel)]
let $ = (sel, node) => (node || document).querySelector(sel)

function updateText() {
    let counts = []
    let head = $('tr')

    // count checked rows of each table column
    for(let i = 1; i < head.cells.length; ++i) { 
        let count = 0
        
        for(let tr of $$('tr:has(:checked)')) {
            count += tr.cells[i].textContent.trim().length
        }

        if(count < 1)
            continue

        counts.push({
            count: count,
            product: head.cells[i].innerText,
        })
    }

    let total = counts.reduce((total, c) => total + c.count, 0)

    $('table#totals').replaceChildren(
        row('Filling', 'Count'),
        ...counts.map(c => row(c.product, c.count)),
        row('<b>TOTAL', `<b>${total}`),
    )
}

function row(l, r) {
    let tr = document.createElement('tr')
    tr.innerHTML = `
        <td style="text-align: left">${l}</td>
        <td style="text-align: right">${r}</td>
    `
    return tr
}

for(let td of $$('td:first-child')) {
    td.innerHTML = `<label><input type='checkbox'>${td.textContent}</label>`;
    $('input', td).addEventListener('change', updateText)
}

updateText()

