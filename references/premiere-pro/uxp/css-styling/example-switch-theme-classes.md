# Example: Switch theme Classes

The next sample uses CSS custom properties, also called variables, to make theme switching efficient. `updateTheme()` assigns one class, either `theme-light` or `theme-dark`, to the `body` element. After the theme changes, the function removes the previous class and attaches the correct replacement.

With this pattern, the CSS cascade updates the whole plugin interface. In `styles.css`, theme-level variables such as `--heading-color`, `--body-color`, and `--border-color` hold the colors. Other rules read those values with `var(...)`, so changing the class on `body` lets all elements inherit the right colors without updating them one by one.
