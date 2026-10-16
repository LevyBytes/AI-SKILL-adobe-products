# Disable Drag and Drop

Extension developers can turn off the default DnD behavior with JavaScript.

Method 1

```html
<body ondragover="return false" ondrop="return false"></body>
```

Method 2 (using jQuery)

```javascript
$(document.body).on('dragover drop', function(e) {
  e.preventDefault();
});
```

For additional detail, read the HTML 5 standard.
http://www.w3.org/TR/html5/editing.html#event-dragenter
