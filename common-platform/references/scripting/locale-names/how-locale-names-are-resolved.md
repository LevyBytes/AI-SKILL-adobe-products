# How locale names are resolved

1. ExtendScript reads the host application's locale; for example, en_US.
2. It adds the platform identifier; for example, `en_US_Win`.
3. It searches for a property with that combined name, returning the value string if one exists.
4. If there is no match, it drops the platform identifier (for example, en_US) and tries again.
5. If that still does not match, it removes the region identifier (for example, en) and tries again.
6. If no property is found, it next checks en (that is, the default language is English).
7. If there is still no match, the complete localizer object is returned.
