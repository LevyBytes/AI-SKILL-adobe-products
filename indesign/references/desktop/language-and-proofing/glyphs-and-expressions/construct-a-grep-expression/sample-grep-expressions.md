# Sample GREP expressions

These examples show common GREP replacement syntax conventions:

- \$1 $2: one backslash (\) works as an escape character.
- \\u $1 \u$2: two backslashes (\\) produce one literal backslash and let escape characters appear in the output.
- \u$1 \\n \u$2: sending \n to the output creates a new line.
