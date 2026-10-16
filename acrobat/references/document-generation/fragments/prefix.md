# Prefix

You may attach a _prefix value_ to a tag within the fragment.

Shown as JSON, the input data is:

```jsonc
[
  {
    "doctor": "{{doctorName:prefix(\"Dr. \")}}",
    "doctorName": "{{firstname}} {{lastname}}"
  },
  {
    /* additional records or fields omitted */
  }
]
```

Partial shape: add the omitted content required by your actual request. The comment is not a request value.

In the fragment above, the `doctor` tag wraps a `doctorName` tag that has a prefix value assigned. As a result, the output places the prefix (i.e. "Dr. ") ahead of whatever `doctorName` resolves to.

[Figure: Output of fragment with prefix in document](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/images/fragments-prefix.png)
