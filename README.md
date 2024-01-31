# empanadas 🥟

em·pa·na·das
: turnovers with a sweet or savory filling

|                      | Carne (Beef) | Tuna | Chicken | Chorizo | Vegetarian | Grilled V. | Vegan | Caprese | Monthly Special | Pulled pork sandwich | Ham & Cheese | --------------- | Chimmichurri \*\* | Habanero \*\* |
| :----------------    | :---- | :---- | :-- | :----- | :--- | :------ | :--- | :---- | :----- | :---- | :----- | :----- | :---- | :----- |
| James                |       | ✪✪    |     |        |      |         | ✪    |       |        |       |        |       | ✪      | ✪      |
| Devin                |       |       |     | ✪      | ✪    |         |      |       | ✪      |       |        |       |        | ✪      |
| Tim                  |       |       |     |        | ✪    | ✪      | ✪    |       |        |       |        |       |        | ✪      |
| Martin               |       |       | ✪✪  | ✪      |      |         |      |       |        |       |        |       | ✪      | ✪      |
| Paul                 |       |       |     |        |      | ✪      | ✪    | ✪    |        |       |        |       | ✪      | ✪      |
| Norbert              |       |       | ✪   |        | ✪    | ✪      |      |       |        |       |        |       | ✪      | ✪      |
| Axel                 |       |       | ✪   |        |      | ✪      |      |       |        |       |        |       | ✪      |        |
| Iulia                |       |       |     |        |      | ✪      | ✪✪   |       |        |       |        |       |        | ✪      |
| Marcel               | ✪     |       | ✪   |        |      | ✪      |      |       |        |       |        |       | ✪      |        |
| Thijs                |       |       |     | ✪      |      | ✪      |      | ✪✪   | ✪      |       |        |       | ✪      |        |
| Travis               |       |       |     |        |      |        |      | ✪✪   |        |       |        |       |        | ✪      |
| Egbert               |       |       |     |        | ✪    |        | ✪    | ✪    |        |       |        |       | ✪✪    |        |
| Emile                |       |       |     |        | ✪    |        |      |       | ✪      |       |        |       | ✪      | ✪      |
| Javier               | ✪     |       |     |        |      |        |      |       |        | ✪     |        |       |        |        |
| Anja                 |       |       |     | ✪      | ✪    |        | ✪    |       |        |       |        |       | ✪      |        |
| Kevin                | ✪     |       |     | ✪      | ✪    |        |      |       |        |       |        |       |        |        |
| Faris                |       |       | ✪   |        | ✪    |        |      |       | ✪      |       |        |       |        |        |
| Farhood              |       |       | ✪✪  |        | ✪    |        |      |       |        |       |        |       |        |        |
| Joost                |       |       | ✪✪  |        |      |        | ✪    |       |        |       |        |       |        |        |

\*\* sauce

#### Mercado Uno

🤙 [020 221 8372](tel:+31202218372)
https://www.mercadouno-amsterdam.nl

<details> 
<summary>Calculator Script</summary>
<script>
    const columnTotals = (cols, index) => (
    cols.map(col => (
        col.allCharacters += (
        col.tr.cells[index].textContent.trim() || ''
        )
    )) && cols
    )

    const lineItemsFromColumn = col => ({
    productName: col.tr.cells[0].textContent,
    total: col.allCharacters.length
    })

    const productColumns = () => (
    Array
        .from(document.querySelectorAll('table:not(#totals) tr:first-child th'))
        .slice(1)
        .map((th, index) => ({ tr: th, allCharacters: '', index }))
    )

    const lineItemTotals = () => (
    checkedInputs()
        .map(inputIndex)
        .reduce(columnTotals, productColumns())
        .map(lineItemsFromColumn)
        .filter(item => item.total > 0)
    )

    const updateText = () => {
    paragraph().innerHTML = (() => {
        const totals = lineItemTotals()
        return '<table id="totals">' + [
        totals
            .map(counts => `<tr>
            <td>${counts.total}</td>
            <td>${counts.productName}</td>
            </tr>`),
        totalText(totals)
        ].flat().join('') + '</table>'
    })()
    }

    preferenceHeaders().forEach(addInputToTh)
</script>
</details>

### Editing

To preview this file:

```sh
git clone -b v228 https://github.com/github/pages-gem
docker build -t gh-pages --load -f Dockerfile.alpine pages-gem
docker run -it --rm --net=host -v $PWD:/srv/site gh-pages
        -p 4000:4000 \
        -v $(pwd):/src/site \
        gh-pages jekyll serve --watch --force_polling -H 0.0.0.0 -P 4000
```


