# Edit text

Use the Edit Text endpoint to change text layers inside Photoshop files (PSD files).

In the example images, the original image on the left shows a font change made through Text API:

[Figure: alt image](https://raw.githubusercontent.com/AdobeDocs/ffs-photoshop-API/main/src/pages/assets/textlayer-example.png?raw=true)

One or more PSD text layers can be edited through the Edit Text endpoint. Users can:

Set text properties such as anti-alias and orientation, and change text contents. Changing only text properties does not alter styling.

Provide custom fonts through the API request body.

Update the text contents.

Replace the font.

Adjust font size.

Set font color as RGB, CMYK, grayscale, or lab.

Switch text orientation between horizontal and vertical.

Set paragraph alignment, including left, center, right, justify, justify left, justify center, and justify right.

Apply text treatments such as strike-through, underline, and capitalization.

Control line and character spacing with leading, tracking, and autoKern settings.
