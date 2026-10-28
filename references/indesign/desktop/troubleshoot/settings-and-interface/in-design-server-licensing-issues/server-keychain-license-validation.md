# Damaged Keychain entries prevent InDesign Server from license validation

In the NGL logs, look for this error: SaveToStorageImpl Error: Failed in writing to storage with error code -25300.

Open Applications > Utilities > Keychain Access.

Find Secure Notes entries with the name Adobe App Info.

Remove every matching Secure Notes entry.

Start InDesign Server from the command line.

Check that the application no longer quits unexpectedly.
