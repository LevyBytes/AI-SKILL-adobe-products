# File I/O - Secure Storage

Plugins may need to keep sensitive values such as external service tokens or passwords. UXP handles that case with Secure Storage, a protected per-plugin store for sensitive data.

SecureStorage receives a key-value pair, encrypts the value, and then saves the key together with the encrypted value. Later, a request using the matching key returns the value after decryption. Keep in mind that _the key is not encrypted_, so the cryptographic protection does not cover it.

SecureStorage has these limitations:

1. Do not use SecureStorage for secrets that must remain hidden from the current user. Protection is tied to the current user's account credentials, so encrypted data may still be decryptable with that user's privileges.

2. SecureStorage data can disappear in several situations. A user might uninstall the host application and remove the secure storage, or might accidentally damage the cryptographic information used by that storage. Either case can produce data loss even when the secure storage itself remains present.

3. Treat SecureStorage as cache-like storage instead of permanent storage. Plugins should be able to recreate any SecureStorage data after it is lost.
