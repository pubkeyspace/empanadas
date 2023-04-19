# empanadas 🥟

em·pa·na·das
: turnovers with a sweet or savory filling

|                   | James | Devin | Tim | Martin | Paul | Norbert | Axel | Iulia | Marcel | Thijs | Travis | Egbert | Emile |
| :---------------- | :---- | :---- | :-- | :----- | :--- | :------ | :--- | :---- | :----- | :---- | :----- | :----- | :---- |
| Carne (Beef)      |       |       |     |        |      |         | x    |       | x      |       |        |        |       |
| Chicken           | xx    |       |     | xx     |      | x       |      |       | x      |       |        |        |       |
| Chorizo           | x     | x     |     | x      |      |         |      |       |        | x     |        |        |       |
| Vegetarian        |       | x     | x   |        |      | x       |      |       |        |       |        | x      | x     |
| Grilled V.        |       |       | x   |        | x    | x       |      | x     | x      | x     |        |        |       |
| Vegan             |       |       | x   |        | x    |         |      | xx    |        |       |        | x      |       |
| Caprese           |       |       |     |        | x    |         | x    |       |        |       | xx     | x      |       |
| Monthly Special   |       | x     |     |        |      |         | x    |       |        | x     |        |        | x     |
| ---------------   |       |       |     |        |      |         |      |       |        |       |        |        |       |
| Chimmichurri \*\* | x     |       |     | x      | x    | x       | x    |       | x      | x     |        | xx     | x     |
| Habanero \*\*     | x     | x     | x   | x      | x    | x       |      | x     |        |       | x      |        | x     |

\*\* sauce

#### Mercado Uno

🤙 [020 221 8372](tel:+31202218372)
https://www.mercadouno-amsterdam.nl

<details> 
<summary>Calculator Script</summary>
  <script>
    Array.from(document.querySelectorAll('th')).slice(1).forEach(th => {
      th.innerHTML = `<label><input type='checkbox'>${th.textContent}</label>`;
      th.querySelector('input').addEventListener('change', () => {
        document.querySelector('p').innerHTML = (Array.from(document.querySelectorAll("th :checked")).map(checkbox => {
          return Array.from(document.querySelectorAll('table :first-child th')).indexOf(checkbox.closest("th"))
        }).reduce((rows, index) => {
          return rows.map(row => {
            row[1] = row[1] + (row[0].querySelectorAll('td').item(index).textContent.trim() || '')
            return row
          })
        }, Array.from(document.querySelectorAll('tr')).slice(1).map(tr => [tr, ''])
        )
          .filter(counts => counts[1].length > 0)
          .map(counts => `${counts[0].querySelector('td').textContent}: ${counts[1].length}`)
          .join("<br />"))
      })
    })
  </script>
</details>
