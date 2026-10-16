# Theme Awareness

Premiere can expose theme state to a plugin so the UI can respond to the user's selected application theme: **Light**, **Dark**, or **Darkest**. In Premiere UXP plugins, `document` includes a `theme` property, and `theme.getCurrent()` returns the active theme as a string.

The same `theme` object also provides an `onUpdated` listener that fires after a user changes the application theme manually. Its callback can adjust plugin styling, such as swapping custom CSS classes for the updated selection.
