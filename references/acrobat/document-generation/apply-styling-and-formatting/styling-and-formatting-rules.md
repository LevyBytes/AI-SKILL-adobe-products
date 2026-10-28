# Styling and Formatting rules

HTML-style constructs embedded in the JSON data let you style a text tag. Those constructs obey the extra rules captured below:

- These HTML tags are recognized: `<span>`, nested `<span>`, `<br>` (new line), `<b>` (bold), `<strong>` (strong), `<em>` (emphasis), `<i>` (italic), `<u>` (underline), `<p>` (para).

- Style the data either by writing inline custom CSS within the `<span>` tag, or by reaching for the simple styling tags `<b>` (bold), `<i>` (italic) and `<u>` (underline).

- For nested HTML `<span>`, precedence follows the usual local-to-global scoping convention.

- Unsupported HTML tags are simply skipped.
