# require('uxp').storage.secureStorage

For each plugin, `SecureStorage` offers protected key-value storage intended for sensitive data. When `SecureStorage` receives a key-value pair, it encrypts the value first. The storage then records the key together with the encrypted value. A request made with the matching key returns the value after decryption. Keep in mind that the key itself remains unencrypted, so cryptographic protection applies to the value rather than the key.

SecureStorage caveats:

1. `SecureStorage` should not be used for sensitive data that must be hidden from the current user. Protection is tied to the current user's account credential, so encrypted data may still be exposed to decryption under that user's privileges.
2. `SecureStorage` contents can disappear for several reasons. For example, a user might uninstall the host application and remove the secure storage. The cryptographic information used by the secure storage might also be accidentally damaged by the user, causing data loss even when the secure storage itself remains present. Treat `SecureStorage` as a cache instead of persistent storage. Plugins should be able to recreate `SecureStorage` data after loss.
