# Test your effect

With the preparation steps above wrapped up, put your effect through thorough testing. Both simple and complex compositions should be testable, and you ought to observe performance gains as the effect takes advantage of multi-frame rendering.

- Run through every one of your existing manual and automated test plans.
- Exercise all the effect parameters and confirm they behave correctly.
- Mix in a few of the AE effects already converted to thread-safe where it makes sense. See the Thread-Safe First Party Effects section.
- Confirm that enabling multi-frame rendering brings no crashes, hangs, render differences, or other surprises.
