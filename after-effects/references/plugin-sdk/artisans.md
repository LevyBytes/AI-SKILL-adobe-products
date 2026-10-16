# Artisans

Note

Before building an Artisan, discuss the plan with us first.

The Artisan API exposes the function hooks a plug-in needs in order to generate rendered output for 3D layers, taking full control away from After Effects for that work while After Effects continues to render all 2D layers. Each composition can use only one Artisan, selected in Composition Settings > Advanced. During rendering, Artisans handle the 3D environment and ask After Effects about each composition element. As expected, that work is broad and painstaking. Use this API only when there is a serious need to replace After Effects' 3D renderer.

Artisans can exchange information with effects that were written for that communication, but effects cannot start the exchange themselves. Many suites used by Artisans need a rendering context, and that context is created only after every effect has been applied to the layer.
