# Best practices for creating passwords

- Make it eight characters at minimum.
- Blend capital and lowercase letters together with digits and special characters.
- Pick something tough for others to guess yet still memorable for you.
- Steer clear of actual dictionary words so the password resists guessing.
- Refresh your password on a regular basis.
- Swritten passwords

For private keys held in P12/PFX files, pair a strong password with sensible timeout settings. On top of that, set every signing key so it demands password authentication, and keep backup copies of whatever keys you rely on for decryption.

How private keys are safeguarded inside the Windows certificate store depends on the particular provider. Reach out to that provider for its backup and protection instructions. Whatever option is strongest for authentication, use it.
