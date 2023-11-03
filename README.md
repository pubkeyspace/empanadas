# empanadas 🥟

em·pa·na·das
: turnovers with a sweet or savory filling

|                      | James | Devin | Tim | Martin | Paul | Norbert | Axel | Iulia | Marcel | Thijs | Travis | Egbert | Emile | Javier | Anja |
| :----------------    | :---- | :---- | :-- | :----- | :--- | :------ | :--- | :---- | :----- | :---- | :----- | :----- | :---- | :----- | :--- |
| Carne (Beef)         |       |       |     |        |      |         |      |       | x      |       |        |        |       | x      |      |
| Tuna                 | xx    |       |     |        |      |         |      |       |        |       |        |        |       |        |      |
| Chicken              |       |       |     | xx     |      | x       | x    |       | x      |       |        |        |       |        |      |
| Chorizo              |       | x     |     | x      |      |         |      |       |        | x     |        |        |       |        | x    |
| Vegetarian           |       | x     | x   |        |      | x       |      |       |        |       |        | x      | x     |        | x    |
| Grilled V.           |       |       | x   |        | x    | x       | x    | x     | x      | x     |        |        |       |        |      |
| Vegan                | x     |       | x   |        | x    |         |      | xx    |        |       |        | x      |       |        | x    |
| Caprese              |       |       |     |        | x    |         |      |       |        |       | xx     | x      |       |        |      |
| Monthly Special      |       | x     |     |        |      |         |      |       |        | x     |        |        | x     |        |      |
| Pulled pork sandwich |       |       |     |        |      |         |      |       |        |       |        |        |       |        |      |
| Ham & Cheese         |       |       |     |        |      |         |      |       |        |       |        |        |       | x      |      |
| ---------------      |       |       |     |        |      |         |      |       |        |       |        |        |       |        |      |
| Chimmichurri \*\*    | x     |       |     | x      | x    | x       | x    |       | x      | x     |        | xx     | x     |        | x    |
| Habanero \*\*        | x     | x     | x   | x      | x    | x       |      | x     |        |       | x      |        | x     |        |      |

\*\* sauce

#### Mercado Uno

🤙 [020 221 8372](tel:+31202218372)
https://www.mercadouno-amsterdam.nl

<details> 
<summary>Calculator Script</summary>
  <script>

    const totalText = (totals) => (
      "<br>Total: " + totals
        .filter(counts => !counts.productName.includes('**'))
        .reduce((total, item) => total + item.total, 0)
    )

    const lineItemsFromRow = row => ({
      productName: row.tr.cells[0].textContent,
      total: row.allCharacters.length
    })

    const productRows = () => (
      Array
        .from(document.querySelectorAll('tr'))
        .slice(1)
        .map(tr => ({ tr, allCharacters: '' }))
    )

    const rowTotals = (rows, index) => (
      rows.map(row => (
        row.allCharacters += (
          row.tr.cells[index].textContent.trim() || ''
        )
      )) && rows
    )

    const inputIndex = (checkbox) => (
      Array
        .from(document.querySelectorAll('table :first-child th'))
        .indexOf(checkbox.closest("th"))
    )

    const checkedInputs = () => (
      Array.from(document.querySelectorAll("th :checked"))
    )

    const lineItemTotals = () => (
      checkedInputs()
        .map(inputIndex)
        .reduce(rowTotals, productRows())
        .map(lineItemsFromRow)
        .filter(item => item.total > 0)
    )

    const paragraph = () => document.querySelector('p')

    const updateText = () => {
       paragraph().innerHTML = (() => {
        const totals = lineItemTotals()
        return [
          totals
            .map(counts => `${counts.productName}: ${counts.total}`),
          totalText(totals)
        ].flat().join('<br>')
      })()
    }

    const addInputToTh = th => {
      th.innerHTML =
        `<label><input type='checkbox'>${th.textContent}</label>`;
      th
        .querySelector('input')
        .addEventListener('change', updateText)
    }

    const preferenceHeaders = () => (
      Array.from(document.querySelectorAll('th')).slice(1)
    )

    preferenceHeaders().forEach(addInputToTh)

  </script>
</details>
