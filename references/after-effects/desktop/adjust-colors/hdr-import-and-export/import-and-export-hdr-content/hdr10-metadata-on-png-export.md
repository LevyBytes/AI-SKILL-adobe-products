# HDR10 metadata on PNG export

Once you're in an HDR-compatible color space, exporting your composition as a PNG sequence carrying embedded HDR10 metadata is now possible. That HDR10 metadata tells an HDR-compatible display — a TV, for example — how to render your HDR content so it tracks the mastering display as faithfully as it can. The option also lets you dial in the color primaries and luminance for the Mastering Display Color Volume, plus the content light level.

After you've wrapped up the project and want to render and export, go to File > Export > Add to Render Queue.

Within the Render Queue panel, open the Output Module settings.

Inside the Output Module Settings dialog box, drop down the Format menu and pick PNG Sequence.

Click Format Options to bring up the PNG Options dialog box.

4. Opening the PNG Options dialog box puts the export details of your PNG sequence under your control.
   Back in the PNG Options dialog box, tick the Include HDR10 metadata option.

5. Ticking the Include HDR10 metadata option lets HDR-capable displays read the boosted brightness and color the right way.
   The controls beneath the Mastering Display Color Volume and Content Light Levels sections are where you tune the color volume and luminance levels.

Mastering Display Color Volume

- Color Primaries
- Luminance Min (cd/m^2)
- Luminance Max (cd/m^2)

Content Light Levels

- Maximum (cd/m^2)
- Average (cd/m^2):

Click OK and go ahead with rendering the project.

### More like this

- Enhanced HDR support
- Color basics
- Color management
- OpenColorIO and ACES color management
