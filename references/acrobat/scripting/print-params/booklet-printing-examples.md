# Booklet binding, duplex and sheet-subset examples

Example 1 (binding)

Configure a booklet whose text binds on the right edge, then send it to print.

```javascript
var pp = this.getPrintParams();
pp.pageHandling = pp.constants.handling.booklet;
pp.booklet.binding = pp.constants.bookletBindings.Right;
this.print(pp);
```

Example 2 (duplexMode)

Print booklet in duplex mode, printing only the front pages.

```javascript
var pp = this.getPrintParams();
pp.pageHandling = pp.constants.handling.booklet;
pp.booklet.duplexMode = pp.constants.bookletDuplexModes.FrontSideOnly;
this.print(pp);
```

Example 3 (subsetFrom and subsetTo)

Set up booklet printing to print the second sheet only and print.

```javascript
var pp = this.getPrintParams();
pp.pageHandling = pp.constants.handling.booklet;
pp.booklet.subsetFrom = 1;
pp.booklet.subsetTo = 1;
this.print(pp);
```

Set booklet printing from the second sheet to the last sheet.

```javascript
pp.booklet.subsetFrom = 1;
pp.booklet.subsetTo = -1;
```

Set booklet printing to print last sheet only.

```javascript
pp.booklet.subsetFrom = -1;
pp.booklet.subsetTo = -1;
```

Set booklet printing to print last sheet two sheets.

```javascript
pp.booklet.subsetFrom = -2;
pp.booklet.subsetTo = -1;
```

Set booklet printing to print all pages except the last two.

```javascript
pp.booklet.subsetFrom = 0;
pp.booklet.subsetTo = -3;
```

Related: [PrintParams.booklet](booklet.md).
