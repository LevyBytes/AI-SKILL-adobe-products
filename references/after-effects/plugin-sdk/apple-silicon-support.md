# Apple Silicon Support

Several Adobe products that run natively on Apple Silicon can now host Apple Silicon effect plugins. As an example, effect plugins written for After Effects also show up in Adobe Premiere Pro and Adobe Media Encoder.

Native Apple Silicon builds don't exist for every Adobe product yet; where they do, the only plugins that surface are effect plugins carrying an Apple Silicon implementation. Given how fast these new M1 machines are catching on, adding the Apple Silicon target sooner rather than later is the smart move.

Note

Building a Mac Universal binary calls for Xcode 12.2 or newer.

For a deeper look at Universal binaries, head to https://developer.apple.com/documentation/apple-silicon/building-a-universal-macos-binary

There's also an extra signing step needed to load plugins for debugging on macOS 15+. Details are here.
