# Signing requirments and loading unsigned plug-ins

Unsigned plugins won't load on macOS versions 15 and up. While you're developing, get around that hurdle by wiring ad-hoc signing in as one more build step:

codesign --force --deep --sign - /path/to/plugin.dylib

Note: Yes, that trailing '-' after '--sign' is important.

Once release time comes, leave the plug-in package untouched after signing — altering it voids the signature and stops the plug-in from loading.
