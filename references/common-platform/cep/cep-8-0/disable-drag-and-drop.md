# Disable Drag and Drop

Extension developers can use JavaScript to turn off the default DnD behavior.

Method 1

```xml
<body ondragover="return false" ondrop="return false">
```

Method 2 (using jQuery)

```jquery
$(document.body).on('dragover drop', function(e) {
  e.preventDefault();
});
```

For more information, read the HTML 5 standard.
http://www.w3.org/TR/html5/editing.html#event-dragenter
