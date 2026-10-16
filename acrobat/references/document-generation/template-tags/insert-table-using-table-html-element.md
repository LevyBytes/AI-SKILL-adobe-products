# Insert Table using `<table>` HTML Element

Use the `<table>` tag to add tables to the document via json data.

JSON representation of the input data:

```json
{
  "Table_Data": "<table border='1' cellpadding='0' cellspacing='0' style='width:30%'><tr><th>Name</th><th>Age</th><th>Gender</th></tr><tr><td>Sheldon</td><td>29</td><td>Male</td></tr><tr><td>Leonard</td><td>30</td><td>Male</td></tr><tr><td>Howard</td><td>28</td><td>Male</td></tr><tr><td>Raj</td><td>29</td><td>Male</td></tr></table>"
}
```

**Usage**

A table built from the html string given in the input json takes the place of the placeholder tag.
[Figure: Sample for HTML Table insertion](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/images/html-table-output.png)

- In the input json data, any Placeholder Tag whose value carries a `<table>` HTML element belongs in its own separate paragraph within the input document template.

- Table elements can only be styled inline, i.e. through the `style` attribute of `<table>`. Internal and external styling are off-limits.
