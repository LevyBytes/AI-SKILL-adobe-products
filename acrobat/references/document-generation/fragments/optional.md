# Optional

Marking a tag within the fragment as _optional_ swaps that tag for an empty string whenever it is absent from both the input and the fragment json data.

The input data, expressed as JSON, reads:

```jsonc
[
  {
    "fullname": "{{firstname}} {{middlename:optional(true)}} {{lastname}}"
  },
  {
    /* additional records or fields omitted */
  }
]
```

Partial shape: add the omitted content required by your actual request. The comment is not a request value.

Notice that the `middlename` tag in the fragment above carries an optional property. With that property turned on (true), an absent `middlename` tag simply becomes an empty string.

[Figure: Output of fragment with optional value in document](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/images/fragments-optional.png)

### Default

You may attach a _default value_ to a tag within the fragment.

In JSON form, the input data is:

```jsonc
[
  {
    "team": "ABC, {{organisation:default-val(\"Org\")}}"
  },
  {
    /* additional records or fields omitted */
  }
]
```

Partial shape: add the omitted content required by your actual request. The comment is not a request value.

In the fragment above, whenever the `organisation` tag is missing from both the input and the fragment json data, the supplied default (i.e. "Org") steps in.

[Figure: Output of fragment with default value in document](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/images/fragments-default.png)
