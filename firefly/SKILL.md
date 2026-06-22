---
name: firefly
description: Use when a task specifically concerns Adobe Firefly: Firefly, generative fill, generative images, Firefly Services, image generation APIs, or generative workflows; this is the product subskill routed from adobe-products.
---

# Adobe Firefly Reference

Use this subskill for generative imaging workflows, Firefly web features, and Firefly Services REST APIs.

## Workflow

1. Identify the surface the task touches (desktop/web help, UXP, ExtendScript, REST API, C++ SDK, samples).
2. Use the task router below or `references/INDEX.md` to open the one file that matches.
3. Treat every label, menu path, shortcut, API/method/object name, endpoint, enum value, and number as an exact reference fact.

## Task router

Load only the reference the task needs. Files are grouped by surface.

### Desktop & Web Help

| Topic | Read |
| --- | --- |
| Whats New, Get Started | references/help-web.md |
| Generate Images Using Text Prompts | references/help-generate-images-with-text-to-image.md |
| Customize Generated Images, Generate Images Using 3D Scenes | references/help-generate-images-with-text-to-image-2.md |
| Edit Images, Generate Vectors | references/help-web-2.md |
| Work With Audio And Video | references/help-work-with-audio-and-video.md |
| Translate Audio, About Translate Audio And Translate Video, Text To Sound Effects, Voice To Sound Effects ... | references/help-work-with-audio.md |
| Generate Soundtrack, Generate Soundtrack For An Uploaded Video, Generate Speech From Text, Generate Speech Using Partner Models ... | references/help-work-with-audio-2.md |
| Generate Videos Using Text Prompts, Generate Videos Using Images, Generate Videos Using Non Adobe Models | references/help-work-with-video.md |
| Writing Effective Text Prompts For Video Generation, Enhance Your Prompt For Video Generation, Use Video As Composition Reference, Use Style Presets For Video Generation ... | references/help-work-with-video-2.md |
| About Generate Video, Translate Video, Generate Videos With Virtual Avatars, Best Practices For Writing Content For Text To Avatar ... | references/help-work-with-video-3.md |
| Dynamic Graphics Render Overview, Capabilities Supported By Dynamic Graphics Render Api, Modify Videos By Editing Frames | references/help-work-with-video-4.md |
| Collaborate Using Style Kits, Create Object Composites | references/help-work-with-enterprise-features.md |
| Custom Models Overview, Train Firefly Custom Models, Best Practices To Effectively Prepare And Create Custom Models, Generate Images Using Custom Models ... | references/help-train-custom-models.md |
| Creative Production Overview, Remove Or Replace Backgrounds On Multiple Images, Crop Multiple Images Simultaneously, Color Grade Multiple Images Simultaneously ... | references/help-creative-production.md |
| Resize Multiple Images Simultaneously, Technical Specifications For Creative Production Preset Workflow, Build Custom Workflows, Use Input And Output Nodes ... | references/help-creative-production-2.md |
| Merge Indesign Data, Merge Photoshop Data, Use 3D Digital Twin Workflows, Partner Models In Firefly Creative Production For Enterprise ... | references/help-creative-production-3.md |
| Bulk Actions Overview, Adobe Firefly Creative Production For Enterprise Faq, Run Workflows, Workflow Builder Rate Card ... | references/help-creative-production-4.md |
| Perform Bulk Actions, Firefly Custom Models In Creative Cloud | references/help-web-3.md |
| Create Mood Boards | references/help-create-mood-boards.md |
| About Firefly Boards, Create Mood Boards, Add Artboards To The Canvas, Add Images ... | references/help-firefly-boards.md |
| Use Non Adobe Models To Generate Images, Edit Images, Add Videos, Generate Image Variations ... | references/help-firefly-boards-2.md |
| Linked Documents, Partner Models To Generate Videos | references/help-firefly-boards-3.md |
| Use Boards Presets For Complex Workflows, Generative Text Edit | references/help-firefly-boards-4.md |
| Convert 2D Images Into 3D Assets, Custom Models To Generate Images, Upscale Images With Topaz Labs, Upscale Videos With Topaz Astra ... | references/help-firefly-boards-5.md |
| About Firefly Video Editor, Technical Requirements, Set Up Your Project | references/help-firefly-video-editor.md |
| Add A Media To Timeline, Add Text To The Timeline, Add A Blank Clip, Connect Clips ... | references/help-add-and-organize-media.md |
| Apply Color Adjustments And Looks, Enhance Speech, Blend Modes, Automatically Split Scenes In Videos | references/help-add-and-organize-media-2.md |
| Work With Timeline, Work With Transcript, Finalize And Export, Keyboard Shortcuts ... | references/help-firefly-video-editor-2.md |
| Generate Videos, Create Quick Cut, Generate Audio | references/help-firefly-video-editor-3.md |
| Your Stuff Overview, View Generation History, Save Files To Favorites, Organize Your Generations ... | references/help-access-your-stuff.md |
| Firefly Design Intelligence Overview, Firefly Design Intelligence For Illustator | references/help-firefly-design-intelligence.md |
| Troubleshoot, App Integrations | references/help-web-4.md |
| Firefly Ai Assistant, Adobe Brand Intelligence | references/help-web-5.md |
| Firefly Graph Overview | references/help-firefly-graph.md |
| Adobe Firefly Overview, Technical Requirements | references/help-learn-the-basics.md |

### REST API

| Topic | Read |
| --- | --- |
| Changelog, Create Credentials, Dev Console, Help ... | references/api-getting-started.md |
| Custom Models, Image Upload, Masking, Placement ... | references/api-concepts.md |
| Style Presets | references/api-style-presets.md |
| Breaking Changes, Feature Guide | references/api-cm-generate-image.md |
| Cm Generate Image | references/api-cm-generate-image-2.md |
| Cm Share Model, Firefly Expand Image Api Tutorial, Firefly Fill Image Api Tutorial | references/api-how-tos.md |
| Firefly Generate Image Api Tutorial, Object Composite | references/api-how-tos-2.md |
| Upscale, Using Async Apis | references/api-how-tos-3.md |
| Guides | references/api-guides.md |
| Index | references/api-index.md |

## Gotchas

Recurring failure modes and what to do instead live in the sibling [GOTCHA.md](GOTCHA.md).

## References

Start at `references/INDEX.md`; metadata in `references/topics.json`. One subject per file; open only what the router points to.

## Verification

- Validate: `python "$env:DEVROOT\SKILLS\skills\skill-drafting\scripts\validate_skill_package.py" "$env:DEVROOT\SKILLS\skills\adobe-products\firefly"`
