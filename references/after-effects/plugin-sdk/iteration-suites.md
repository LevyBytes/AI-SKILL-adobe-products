# Iteration Suites

A common pattern for effects is to walk every pixel in an image and filter it one at a time. Leaning on the iteration suites that After Effects supplies lets the host split your work across however many processors exist, while also picking up any hardware-specific acceleration.

On top of that, progress reporting and user cancellation are handled for you by After Effects.

So use these suites! Just confirm that whichever pixel-processing routines you feed into those iterator callbacks happen to be re-entrant ones.

Note

The October 2021 SDK update increases the number of concurrent iterate threads up to the available system CPU cores instead of the previous hard-coded limit of 32.
