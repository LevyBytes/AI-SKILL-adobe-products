# Dynamically expand table rows or columns

Place the cell extension property within a table cell to declare whether rows grow downward or columns grow sideways.

JSON representation of the input data:

```json
{
  "subscriptions": [
    {
      "name": "Adobe Document API",
      "price": "99"
    },
    {
      "name": "Adobe Marketing API",
      "price": "199"
    },
    {
      "name": "Adobe Design API",
      "price": "299"
    }
  ]
}
```

- **Repeat table rows vertically** - the _\{\{subscriptions.name:**cell-extension(vertical)**\}\}_ tag signals to the engine that cells grow in the vertical direction.

[Figure: Table gets vertically extended as table rows are repeated](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/images/vertical-extension1.png)

- **Repeat table columns horizontally** - the _\{\{subscriptions.name:**cell-extension(horizontal)**\}\}_ tag signals to the engine that cells grow in the horizontal direction.

[Figure: Table gets horizontally extended as table columns are repeated](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/images/horizontal-extension1.png)

Vertical is the fallback extension. Omit the cell-extension construct and the table simply grows downward.
