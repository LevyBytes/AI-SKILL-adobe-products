# Load external HTML files

You can keep code tidier by putting dialog HTML in a separate file. In UXP, use `fetch()` for this pattern, convert the response to text, and keep in mind that the calls are asynchronous. Building on the previous structure, the external HTML can be loaded and assigned to `dialog.innerHTML`.
