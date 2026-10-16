# Importing and interpreting footage items — Interpret footage items

As each footage item arrives, internal rules let After Effects guess at four things about the source file: its frame rate, its alpha channel type, its color profile, and its pixel aspect ratio. A wrong guess — or a wish to put the footage to different use — leaves you two options: rewrite the rules covering all footage items of a given kind by editing the interpretation rules file (interpretation rules.txt), or tweak just one footage item's interpretation in the Interpret Footage dialog box.

Here's what the interpretation settings tell After Effects about each footage item:

- The way the alpha channel should play against the other channels
- Which frame rate to take the footage item as having
- Whether fields get separated, and the field order to assume if they do
- Whether 3:2 or 24Pa pulldown should be stripped out
- That footage item's pixel aspect ratio
- That footage item's color profile

Note

Every one of these cases uses the information to settle how data in the imported footage item gets interpreted — to brief After Effects on the incoming footage. Match the interpretation settings in the Interpret Footage dialog box to whatever was used to create the source footage file. Don't reach for the interpretation settings as a way to dial in settings for your final rendered output.

As a rule, interpretation settings won't need changing. That said, an uncommon footage item may leave After Effects needing more information to interpret it right.

The controls under the Color Management section of the Interpret Footage dialog box are how you brief After Effects on reading a footage item's color information. You usually only need this step when the footage item carries no embedded color profile.

Preview the footage in the Footage panel and you'll see what the footage interpretation operations produced.

Note

Before you commit the changes, select Preview in the Interpret Footage dialog box to see the results of the settings you've made there.
