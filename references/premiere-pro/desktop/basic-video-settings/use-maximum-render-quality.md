# Use Maximum Render Quality

Use Maximum Render Quality is intended to keep detail and reduce aliasing when the export frame size does not match the source media, for example when a 4-K sequence is exported as HD or SD. The option may also change how sequences render scaling, rotation, and position transformations. Turning it on can raise output quality, with these considerations:

- Export can take much longer, particularly on machines that do not have a supported GPU.
- If supported GPU hardware is present and Renderer is set to Metal, CUDA, or OpenCL, Premiere automatically applies maximum render quality.
