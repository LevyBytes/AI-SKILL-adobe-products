# Setting composer

Text-frame composition in a Roman publication uses a composer that differs from the ME Composer. InDesign Server provides the document method changeComposer, which changes all text frames in a Roman publication to the Adobe World-Ready Composer. It converts Adobe Paragraph Composer to Adobe World-Ready Paragraph Composer and Adobe Single-line Composer to Adobe World-Ready Single-line Composer.

This snippet demonstrates the method. ChangeComposer contains the complete version:

```js
myDocument.changeComposer();
```
