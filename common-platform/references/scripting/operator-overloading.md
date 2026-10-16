# Operator overloading

In ExtendScript, a class can supply a method whose name matches an operator, letting that class customize or replace the behavior of a math or Boolean operator. The following sample defines the addition (+) operator for MyClass. Here, the overloaded addition operator adds the operand to the value property:

```javascript
// define the constructor method
function MyClass (initialValue) {
    this.value = initialValue;
}

// define the addition operator
MyClass.prototype ["+"] = function (operand) {
    return this.value + operand;
}
```

After that definition, objects of this class can participate in the "+" operation:

Results depend on the illustrated host/version or object setup.

```javascript
var obj = new MyClass (5);
// Example result:  [object Object]
obj + 10;
// Example result:  15
```

The operators listed below can be overloaded:

| Category | Operators |
| --- | --- |
| Unary | +, ~ |
| Binary | - +, \*, /, %, ^<br>- <, <=, ==<br>- <<, >>, >>><br>- &, \|, === |

- Operators > and >= use NOT applied to operator <= and operator <.
- Compound assignment forms, including \*=, are unsupported.

Each operator overload implementation has to return the operation result. Return undefined when the default operation should be used.

Unary operator functions act on this, while binary versions use this plus the first argument. Both + and - can be implemented in unary and binary form. An undefined first argument means the operation is unary; a supplied first argument means it is binary.

For a binary operator, the second argument tells you which operand order is being evaluated. With noncommutative operators, either support both operand orders in the function or return undefined for unsupported combinations. Example implementation:

```javascript
this ["/"] = function (operand, rev) {
    if (rev) {
        // do not resolve operand / this
        return;
    } else {
        // resolve this / operand
        return this.value / operand;
    }
};
```
