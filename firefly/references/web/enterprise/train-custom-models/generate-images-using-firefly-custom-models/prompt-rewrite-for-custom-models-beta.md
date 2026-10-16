# Prompt Rewrite for Custom Models (beta)

This built-in Prompt Rewrite for Custom Models (beta) feature is enabled by default and improves prompts automatically, making them clearer and more detailed. It rewrites prompts into language that helps Firefly produce strong results from the beginning.

What it does: for custom models, Prompt Rewrite improves prompt coherence. It strengthens the content already present in the prompt by adding relevant details drawn from the model's captions and tags. That behavior is different from generic prompt enhancement, which adds new creative elements that were not in the original prompt.

Where it works: English prompts are rewritten for custom models that use Firefly Image Model 4. It does not apply to other foundation models, custom models on Firefly Image Model 3, or prompts written in other languages.

How to view changes: once an image is generated, choose Show Enhanced to inspect the rewritten prompt. The enhanced prompt can be edited before the next generation when further changes are needed.

When it's enabled: this feature is active for models trained on:

- Specific subjects, for example a photoshoot of a person or an illustrated character
- Photorealistic styles, for example lifestyle photography

It is not active for models trained on non-photorealistic styles, including illustrations, iconography, and 3D graphics.

Can you turn it off? Yes, Prompt Rewrite can be disabled with a toggle, although keeping it on is recommended. Firefly enables it when the feature is likely to improve results.
