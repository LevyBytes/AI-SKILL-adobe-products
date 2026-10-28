# Ending an expression in an if statement without an else is not allowed

Close out an expression on an if statement that has no accompanying else, and the JavaScript engine refuses to evaluate it, returning "Undefined value used in expression (could be an out of range array subscript?)". Under the Legacy ExtendScript engine, the snippet below resolves to 100 when the time runs past 1 second and otherwise to 50:

```javascript
var x = 50;
if ( time > 1 ) {
    x = 100
}
// The "else" here is implied but not stated.
```

For the JavaScript engine, you have to spell out the else half of the statement whenever it sits last in the expression:

```javascript
var x = 50;
if ( time > 1 ) {
    x = 100;
} else {
    x;
}
```

Written this way, it evaluates properly under both the JavaScript engine and the Legacy ExtendScript engine.
