# Using Node.js APIs (since CEP 10.0)

CEP 10 extends existing `Node.js` support in CEP 9 with `disable-nodejs` for iframe. Applying this attribute to an iframe turns off `Node.js` in both `separate context` and `mixed-context`.

```html
    <iframe name="iframe-1">
    	<!-- Node will be accesible here -->
    </iframe>
    <iframe name="iframe-2" disable-nodejs>
        <!-- Node will not be accesible here -->
    </iframe>
```
