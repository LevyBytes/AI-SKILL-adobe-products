# Passing complex types

For complex return values, including arrays and objects, the script you send must build a result string by serializing the array or object with toSource. The sender then uses eval on the response body's result string to rebuild the array or object.
