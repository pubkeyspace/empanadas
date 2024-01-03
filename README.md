# empanadas 🥟

em·pa·na·das
: turnovers with a sweet or savory filling

|                      | James | Devin | Tim | Martin | Paul | Norbert | Axel | Iulia | Marcel | Thijs | Travis | Egbert | Emile | Javier | Anja | Kevin | Faris | Farhood |
| :----------------    | :---- | :---- | :-- | :----- | :--- | :------ | :--- | :---- | :----- | :---- | :----- | :----- | :---- | :----- | :--- | :---  | :---  | :--- |
| Carne (Beef)         |       |       |     |        |      |         |      |       | ✪      |       |        |        |       | ✪      |      | ✪     |       | 
| Tuna                 | ✪✪    |       |     |        |      |         |      |       |        |       |        |        |       |        |      |       |       |
| Chicken              |       |       |     | ✪✪     |      | ✪       | ✪    |       | ✪      |       |        |        |       |        |      |       | ✪     | ✪✪
| Chorizo              |       | ✪     |     | ✪      |      |         |      |       |        | ✪     |        |        |       |        | ✪    | ✪     |       |
| Vegetarian           |       | ✪     | ✪   |        |      | ✪       |      |       |        |       |        | ✪      | ✪     |        | ✪    | ✪     | ✪     | ✪
| Grilled V.           |       |       | ✪   |        | ✪    | ✪       | ✪    | ✪     | ✪      | ✪     |        |        |       |        |      |       |       |
| Vegan                | ✪     |       | ✪   |        | ✪    |         |      | ✪✪    |        |       |        | ✪      |       |        | ✪    |       |       |
| Caprese              |       |       |     |        | ✪    |         |      |       |        |       | ✪✪     | ✪      |       |        |      |       |       |
| Monthly Special      |       | ✪     |     |        |      |         |      |       |        | ✪     |        |        | ✪     |        |      |       |  ✪    |
| Pulled pork sandwich |       |       |     |        |      |         |      |       |        |       |        |        |       |        |      |       |       |
| Ham & Cheese         |       |       |     |        |      |         |      |       |        |       |        |        |       | ✪      |      |       |       |
| ---------------      |       |       |     |        |      |         |      |       |        |       |        |        |       |        |      |       |       |
| Chimmichurri \*\*    | ✪     |       |     | ✪      | ✪    | ✪       | ✪    |       | ✪      | ✪     |        | ✪✪     | ✪     |        | ✪    |       |       |
| Habanero \*\*        | ✪     | ✪     | ✪   | ✪      | ✪    | ✪       |      | ✪     |        |       | ✪      |        | ✪     |        |      |       |       |

\*\* sauce

#### Mercado Uno

🤙 [020 221 8372](tel:+31202218372)
https://www.mercadouno-amsterdam.nl

<details> 
<summary>Calculator Script</summary>
  <script>

    const totalText = (totals) => (
      "<tr><td>" + totals
        .filter(counts => !counts.productName.includes('**'))
        .reduce((total, item) => total + item.total, 0) + "</td><td>Total</td></tr>"
    )

    const lineItemsFromRow = row => ({
      productName: row.tr.cells[0].textContent,
      total: row.allCharacters.length
    })

    const productRows = () => (
      Array
        .from(document.querySelectorAll('table:not(#totals) tr'))
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
        .from(document.querySelectorAll('table:not(#totals) :first-child th'))
        .indexOf(checkbox.closest("th"))
    )

    const checkedInputs = () => (
      Array.from(document.querySelectorAll("table:not(#totals) th :checked"))
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

    const addInputToTh = th => {
      th.innerHTML =
        `<label><input type='checkbox'>${th.textContent}</label>`;
      th
        .querySelector('input')
        .addEventListener('change', updateText)
    }

    const preferenceHeaders = () => (
      Array.from(document.querySelectorAll(':not(#totals) th')).slice(1)
    )

    preferenceHeaders().forEach(addInputToTh)

  </script>
</details>
