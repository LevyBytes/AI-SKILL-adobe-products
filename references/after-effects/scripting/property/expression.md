# Property.expression

app.project.item(index).layer(index).propertySpec.expression

### Description

Holds the expression assigned to this property. It is writable only while canSetExpression reports true for the property. Any string you assign here gets evaluated on assignment.

- A syntactically valid expression in the string flips expressionEnabled to true.
- Should the string fail as an expression, an error fires and expressionEnabled drops to false.
- Assigning an empty string turns expressionEnabled off without raising any error.

### Type

String; read/write if canSetExpression for the named property is true.
