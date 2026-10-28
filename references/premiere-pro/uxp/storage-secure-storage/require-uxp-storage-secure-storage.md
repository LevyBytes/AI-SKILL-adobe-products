# require('uxp').storage.secureStorage

SecureStorage is protected storage for per-plugin sensitive data. It accepts a key-value pair, encrypts the value, and then stores the key beside that encrypted value. A later request with the matching key returns the value after decryption. The key itself is left unencrypted, so the cryptographic protection does not cover it.

SecureStorage caveats:

1. Do not treat SecureStorage as a safe place for secrets that must stay hidden from the current user. Its protection is tied to the current user's account credentials, so encrypted data may still be exposed to decryption under that user's privileges.
2. SecureStorage data can disappear for several reasons. For example, the user might uninstall the host application and remove the secure storage. The cryptographic information used by secure storage can also be accidentally damaged by the user, causing data loss even when the secure storage itself has not been removed. Treat SecureStorage as a cache instead of durable persistence. Plugins need to be able to regenerate SecureStorage data after it is lost.
