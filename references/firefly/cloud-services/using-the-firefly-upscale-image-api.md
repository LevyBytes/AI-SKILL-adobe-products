# Using the Firefly Upscale Image API

This guide covers the Firefly Upscale Image API and shows how it fits production workflows where source fidelity is important.

### Overview

The Firefly Upscale Image API raises the resolution of photos and artwork while keeping the original details, structure, and color fidelity. It is designed to avoid hallucinated detail and invented textures that can appear with aggressive AI upscaling, making it useful when a production workflow depends on source accuracy.

Core benefits:

- Raise the resolution of your own photos and artwork while keeping real detail and avoiding artificial additions.
- Keep generative AI images crisp, including textures and patterns, when zooming in or preparing larger outputs.

The API supports 2x and 4x upscaling with an asynchronous flow: submit the job, receive a job ID, poll for status, and then fetch the output.
