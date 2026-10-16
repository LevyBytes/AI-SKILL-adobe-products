# Review and edit information

Check the model version before training. Firefly Image Model 5 (preview) is available for custom model training. While preview is active, the earlier Firefly Image Model 4 remains selectable by choosing Image 4 in the model editor's right panel. Changing the model choice regenerates captions and model tags, replacing the current generated content.

Use Model properties when you need to inspect the custom model's model version.

Open Model properties to check which model version the custom model uses.

Inspect Model Score (beta) and the guidance it provides. The score appears to the left of the Train button. A 1-100 score measures the whole training set against custom-model best practices, and stronger training sets usually produce better outputs.

- For scores below 85, open Model Score to see a panel of targeted suggestions for the training set, such as swapping out images that do not match the rest of the style.
- Make those updates before sending the model into training.

The score reviews the complete training set against the best practices for custom model creation.

Review the metadata generated automatically from your uploads:

- Model title: the name shown when someone selects the model.
- Model description: text that explains what the model is intended to generate.
- Sample prompt: a starting example that helps model users decide how to prompt it.
- Model Tags: fixed characteristics of the trained subject or style, such as brown hair on a brunette character. Avoid putting temporary details in Tags, such as the object a character happens to hold.
- Captions: significant elements in each training image are described in wording close to how prompts will be written, such as "young woman in a green sundress carrying a seashell on the beach, photorealistic." For subject-trained models, including a character, person, or still-life object, each caption should contain the model Concept.

Tip

- After changing captions or tags, select Analyze and caption to save those edits; the Train button will return.
- Model title, model description, and sample prompt stay outside the actual training data and do not change what the model generates.
