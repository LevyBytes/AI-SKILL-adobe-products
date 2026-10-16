# Date formatting and localized picture clauses

Example 1: Render the current date in long form:

```javascript
var d = new Date();
console.println("Today is " + util.printd("mmmm dd, yyyy", d));
```

Example 2 (Acrobat 5.0)

Show the date in a local format

```javascript
console.println(util.printd(2, new Date() ));
```

Example 3 (Acrobat 7.0)

Lean on the XFA-Picture Clause to print the current date to the console.

Representative output for the example date: `Tue, the 13 of July, 2004`.

```javascript
// Execute in console
console.println(
    util.printd("EEE, 'the' D 'of' MMMM, YYYY", new Date(), true));
```

Locale-Sensitive Picture Clauses. As a rule, picture clauses get processed in the ambient locale. That said, you can direct that picture processing run in a specific locale instead. This comes in handy when you format or parse data tied to a locale other than the ambient one. Here is the syntax for this extension to compound picture clauses:

Reference data, output or notation; not an executable JavaScript program.

```text
category-name(locale-name){picture-symbols}
```

Run in the console, this code,

```javascript
util.printd("date(fr){DD MMMM, YYYY}", new Date(), true)
```

produces the output for the present day,

Reference data, output or notation; not an executable JavaScript program.

```text
13 juillet, 2004
```

Broad coverage for Chinese, Chinese (Taiwan), Japanese, and Korean (CCJK) dates and times comes from the XFA-Picture Clause. The sample below — a text field’s custom-format script — renders today’s date for a Japanese locale.

```javascript
event.value = util.printd("date(ja){ggYY/M/D}", new Date(), true)
```

Related: [util.printd](printd.md).
