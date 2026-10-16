# 2. Dynamic Content Appending

The **`show()` lifecycle hook** is passed the panel `body`, which is the root node. For the second panel, `body.appendChild(secondPanel)` adds that panel's markup into the DOM only when it is shown, so its UI remains out of view until the display hook runs.
