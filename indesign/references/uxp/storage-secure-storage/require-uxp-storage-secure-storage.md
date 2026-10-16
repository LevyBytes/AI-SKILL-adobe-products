# require('uxp').storage.secureStorage

SecureStorage gives each plugin protected storage for sensitive data. A plugin supplies a key-value pair; SecureStorage encrypts the value, then records the key beside the encrypted value. When code asks for the value by using its associated key, SecureStorage decrypts it before returning it. The key itself is not encrypted, so the cryptographic operation does not protect that key.

Important SecureStorage caveats:

1. SecureStorage is the wrong place for data that must stay hidden from the current user. Protection is tied to the current user's account credentials, so encrypted data may still be decrypted under that user's privileges.
2. Various events can remove or make SecureStorage data unusable. For example, uninstalling the host application may delete the secure store. A user might also damage the cryptographic information used by secure storage by accident, which can make data unrecoverable even when the secure storage itself remains. Treat SecureStorage as cache rather than durable storage. Plugins should be able to recreate any SecureStorage data after loss.
