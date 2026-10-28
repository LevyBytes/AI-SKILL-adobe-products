# Known Issues

- Color application from this media query can sometimes hit race conditions, especially when styles are created first and applied dynamically afterward. Colors are generally reliable only during plugin load or after a theme change has finished.
