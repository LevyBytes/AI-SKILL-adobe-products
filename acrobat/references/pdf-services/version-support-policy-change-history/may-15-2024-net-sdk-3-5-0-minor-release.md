# May 15, 2024; .NET SDK 3.5.0 minor release

- Added a client-config switch to turn "configureAwait" on or off, so developers can decide whether asynchronous continuations run on the original synchronization context. **Note**: As of the next major release, "configureAwait" will default to disabled and will no longer be configurable.
