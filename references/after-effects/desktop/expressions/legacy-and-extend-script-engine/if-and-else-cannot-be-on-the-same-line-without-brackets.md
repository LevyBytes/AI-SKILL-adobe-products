# if and else cannot be on the same line without brackets

Squeeze an if...else statement onto one line with no brackets and the Legacy ExtendScript engine will still evaluate it, yet the JavaScript engine throws an error along the lines of "Syntax Error: Unexpected token else" or "Undefined value used in expression (could be an out of range array subscript?)". Which message you get shifts with the context and the property type.

Under the Legacy ExtendScript engine, the snippet below resolves to 100 when the time runs past 1 second and otherwise to 50:

Deliberately invalid JavaScript-engine example: the missing statement separator before `else` is the defect being illustrated.

```text
if ( time > 1 ) 100 else 50;
```

To evaluate if...else statements, the JavaScript engine wants either line breaks or brackets. When the case is simple, a ternary operator can stand in instead. The JavaScript engine accepts any of these forms:

```javascript
// Solution A: adding a line break before "else" will allow both engines to evaluate correctly.

if ( time > 1 ) 100
else 50;

// Solution B: adding correct bracketing will also allow both engines to evaluate correctly.

if ( time > 1 ) { 100 } else { 50 };

// Solution C: Use a ternary operator in place of the if...else statement, which also evaluates correctly in both engines.

time > 1 ? 100 : 50;
```

Each of those approaches evaluates properly under both the JavaScript engine and the Legacy ExtendScript engine.
