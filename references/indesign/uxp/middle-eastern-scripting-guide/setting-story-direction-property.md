# Setting story direction property

[Figure: Setting story direction property](https://raw.githubusercontent.com/AdobeDocs/uxp-indesign/main/src/pages/resources/recipes/rtl/1.png)

To change the primary direction of an existing text story in InDesign Scripting, even after text has been typed or placed, set storyDirection. This StoryPreferences property takes one StoryDirectionOptions value, either leftToRightDirection or rightToLeftDirection. The sample below creates a text frame with two columns and then assigns its story direction. StoryDirection contains the complete version.

```js
const { Justification, StoryDirectionOptions } = require("indesign");
with (myTextFrame) {
  //Set the bounds of the text frame.
  geometricBounds = [70, 200, 300, 500];
  //Fill the text frame with placeholder text in 2 column.
  textFramePreferences.textColumnCount = 2;
  contents =
    "Ø£Ø¯ÙˆØ§Øª Ø§Ù„ØªØµÙ…ÙŠÙ… Ø§Ù„Ù‚ÙˆÙŠØ© ÙˆØ§Ù„Ù…ØªÙƒØ§Ù…Ù„Ø© Ø±Ù‚Ù… 1 Ù…Ù† Ø£Ø¯ÙˆØ¨ÙŠ";
  parentStory.justification = Justification.rightJustified;
  //Now set the story direction left to right
  parentStory.storyPreferences.storyDirection = StoryDirectionOptions.leftToRightDirection;
}
```
