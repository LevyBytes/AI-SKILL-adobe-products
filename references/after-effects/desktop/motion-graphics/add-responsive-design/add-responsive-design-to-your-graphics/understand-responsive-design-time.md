# Understand Responsive Design - Time

Walk through this example to see the problem laid out:

Suppose you build a text animation with a fade-in and fade-out, and you want that animation to run as long as the sequence. It's made of two blocks of text fading in over a black background.

Now drop that same animation onto a different sequence. Each piece of it, the font size along with the start and end times of the fade in and out, has to line up with the sequence. One route is duplicating the animation to stretch it to the sequence's length. That route eats time, though, since you've got to shift the animation keyframes around to get the fade in and out matched to the sequence.

Here's where responsive design - Time earns its keep. Protect the fade in and out regions (the ones holding keyframes) and then extend the animation. That binds the regions to the sequence so the time they need to animate stays put even as you time-stretch the animation to the sequence's length. Once bound, the animation flexes on its own to suit the sequence's length.
