# Expressions cannot end in a function declaration

Should an expression close on a function declaration, the JavaScript engine won't evaluate it and reports "Object of type found where a Number, Array, or Property is needed". Under the JavaScript engine, whatever gets evaluated last has to hand back a value rather than declare one.

This next sample runs in the Legacy engine but not in the JavaScript engine:

```javascript
timesTen( value );  // The Legacy engine evaluates this line, even though the function is declared below.

function timesTen ( val ) {
    return val * 10
}
```

Move the function call to the final line — after the declaration — and the expression evaluates properly in both engines:

```javascript
function timesTen ( val ) {
    return val * 10
}

timesTen( value );  // The JavaScript engine needs the function call to happen below the declaration in order to return the correct value.
```
