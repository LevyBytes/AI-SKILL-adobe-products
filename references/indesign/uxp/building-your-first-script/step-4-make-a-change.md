# Step 4: Make a change

With the script now running in InDesign, make a small adjustment so you can see the result change.

For a script listed in the Scripts panel, select it and choose 'Edit Script' from the menu. The script should open in a text editor.

Add this code to change the text font and size:

```js
let myFont = app.fonts.item("Arial");
let myPage = myDocument.pages.item(0);

var myParagraph = myTextFrame.paragraphs.item(0);
myParagraph.appliedFont = myFont;
myParagraph.pointSize = 48;
```

To view the update, save the edits and run the script again by double-clicking it in the Scripts panel.

[Figure: Updated first script output](https://raw.githubusercontent.com/AdobeDocs/uxp-indesign/main/src/pages/scripts/getting-started/hello-world-updated.png)
