# Range selector properties

On top of the properties they share with other selectors, range selectors carry these:

Start and End

Where the selection begins and ends. With the selector selected in the Timeline panel, you tweak the Start and End properties by dragging its selector bars over in the Composition panel.

Offset

How far to shift the selection away from the one the Start and End properties define. Adjusting Offset right in the Composition panel during a Start or End edit calls for a Shift-click on those selector bars using the Selection tool.

Shape

Governs the way characters get selected across the span between Start and End. Every option reshapes the selection by forming transitions between selected characters with the chosen shape. Take Ramp Down: animating the Y Position values of text characters with it sends the characters drifting at an angle from the lower left up toward the upper right. The available choices are Square, Ramp Up, Ramp Down, Triangle, Round, and Smooth.

Swapping among the Shape options can transform an animation's look dramatically.

Original (left) and after selecting the entire word, setting Based On to Characters, animating the y Position value so that the word is at the bottom of the frame, and setting Shape to Ramp Down (right)

Original (left) and after selecting the entire word, setting Based On to Characters, animating the y Position value so that the word is at the bottom of the frame, and setting Shape to Ramp Down (right) Setting Shape to Triangle

Setting Shape to Triangle

Smoothness

Sets how long the animation spends transitioning from one character to the next when the Square shape is in use.

Ease High and Ease Low

Sets how fast the change happens as selection values move from fully included (high) to fully excluded (low). When Ease High sits at 100%, for instance, the character shifts more gradually (easing into the change) over the fully-to-partially-selected stretch. At Ease High of -100%, the character shifts fast over that same fully-to-partially-selected stretch. With Ease Low at 100%, the character shifts more gradually (easing into the change) over the partially-selected-to-unselected stretch. With Ease Low at -100%, the character shifts fast over that partially-selected-to-unselected stretch.

Randomize Order

Shuffles the sequence in which the property reaches the characters the Range selector marks. (The Wiggly selector, by contrast, randomizes the animator property's value instead.)

Random Seed

Works out the shuffled order of a range selector once the Randomize Order option is turned On. With Random Seed at zero, the seed derives from its animator group. To duplicate an animator group while keeping the same shuffled order as the original, set Random Seed to something other than zero.
