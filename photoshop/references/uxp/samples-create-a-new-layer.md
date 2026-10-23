# Samples - Create a new layer

Through the Photoshop DOM API, a script can create a new layer: 

```javascript
const app = require('photoshop').app;
const document = await app.documents.add();
const layer = await document.createLayer();
layer.name = 'New layer';
```
