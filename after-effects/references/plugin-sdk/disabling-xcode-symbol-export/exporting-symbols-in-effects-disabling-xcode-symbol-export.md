# Exporting Symbols in Effects — Disabling Xcode Symbol Export

Turning off symbol export in Xcode:

1. Open the Apple Clang - Code Generation section within your project's Build settings.
2. Set the Symbols Hidden By Default to YES

Apple Clang Symbols

When particular symbols still have to be public, apply __attribute__((visibility("default"))) in code.

Apple's Xcode documentation covers more https://help.apple.com/xcode/mac/11.4/#/itcaec37c2a6 (excerpt below):

Symbols Hidden by Default (GCC_SYMBOLS_PRIVATE_EXTERN)

When enabled, all symbols are declared private extern unless explicitly marked to be exported using attribute((visibility("default"))) in code. If not enabled, all symbols are exported unless explicitly marked as private extern.
