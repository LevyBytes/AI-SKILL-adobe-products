# Opencolorio Aces Color Management, Hdr Preview, Hdr Import And Export

> Adobe After Effects reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: OpenColorIO and ACES color management; Enhanced HDR support; Import and export HDR content.

## OpenColorIO and ACES color management

Search Last updated on May 5, 2026

### Keep color steady throughout Adobe After Effects by pairing OpenColorIO with the Academy Color Encoding System, so that color behaves accurately and predictably no matter the pipeline or device.

Born mainly out of motion picture production, OpenColorIO (OCIO) is a color management solution that helps hold a project to the color management methodology that high-fidelity color imaging demands.

The Academy Color Encoding System (ACES), meanwhile, is a free and open color management system that stays device-independent and sets out to become the filmmaking industry's standard for handling color.

By folding OCIO in as its color management engine, After Effects makes the ACES workflow possible.

### Specify color management settings

Open the Project panel menu and choose Project Settings.

In the Project Settings dialog, switch to the Color tab.

Within the Color Management section, set the Color Engine to OCIO color managed.

Two choices sit under the Color Engine:

- Adobe color managed: the engine Adobe turns on by default, with ICC profiles handling the work.
- OCIO color managed: routes color processing through OpenColorIO (OCIO); this is the one to pick whenever the ACES workflow is on the table.

Open the OCIO Config dropdown and pick your OCIO configuration. A custom one can be brought in through Custom OCIO Config as well.

4. Should a custom configuration be needed, reach for the Custom OCIO Config option.
   Pick a Working Color Space to establish the composition color space.

5. Working Color Space options
   Pick a Display Color Space to establish the project's default viewport display transform.

6. Display Color Space options

### Specify media color input in the Project Panel

Whatever the OCIO Configuration sets as its default under Project Settings becomes the Media Color Space automatically. Want a different value? Right-click the footage > Interpret Footage > Main > Color > Override Media Color Space.

### Specify your color while creating a composition

Colors shown in the Composition panel have been converted out of the working color space and into the display color space.

Swap the display color space by picking one from the Display Color Space menu down at the bottom of the Composition panel.

Display Color Space menu in the Composition panel

Display Color Space menu in the Composition panel Note

Only when the project is set to use OCIO color management does the Display Color Space menu show up.

### Specify color output in the Render Queue

Once the composition is in the Render Queue, go to the Output Module drop-down list > Custom > Color > Output Color Space, or click the blue text beside the Output Module drop-down list > Color > Output Color Space.

### Layer effects for applying OpenColorIO

These are the effects in After Effects that lean on OpenColorIO for color processing. Turning on OpenColorIO color management at the project level isn't a prerequisite for using them.

### OCIO File Transform

Applying a LUT or a CDL is the job of the OCIO File Transform effect.

OCIO File Transform effect

OCIO File Transform effect

### OCIO Color Space Transform

Built on the OpenColorIO engine, the OCIO Color Space Transform effect handles conversion from one color space to another.

OCIO Color Space Transform effect

OCIO Color Space Transform effect

### OCIO Display Transform

Built on the OpenColorIO engine, the OCIO Display Transform effect handles conversion from one color space to another.

OCIO Display Transform effect

OCIO Display Transform effect

These controls are available:

Input Color Space

Pick which input color space the transform should start from.

Display Device

Choose among the display devices on offer. What appears here is generated on the fly from whichever OCIO Configuration is active.

View Transform

Choose a view transform tied to the chosen display. The entries that show up vary with both the active OCIO Configuration file and the display device you picked.

Inverse Transform

Lets you reverse the transform — handy, for instance, during an import workflow.

Information

Details like which OCIO configuration is in use are surfaced in the Information section, along with any error reporting. As an example, swapping the OCIO Configuration over in Project Settings can leave the current effect invalid.

Note

The OCIO Display Transform effect lets you convert imported media into the working color space, or hand it a display view color space.

Tick the Show all check box on the Interpret Footage > Color tab and on Output Module Settings > Color tab to surface every color space from the OCIO configuration file plus the display view transform options.

### OCIO Look Transform

Sitting under the Color Correction category, the OCIO Look Transform effect lets you run a Look transform — or its inverse — across a layer or composition.

OCIO Look Transform effect

OCIO Look Transform effect

These controls are available:

Input Color Space

Pick which input color space the transform should start from.

Look

Pick the Look. Entries in this drop-down list come from the active OCIO configuration file.

Output Color Space

Pick which output color space the transform should resolve to.

Inverse Transform

Reverse the transform.

Information

Details like which OCIO configuration is in use are surfaced in the Information section, along with any error reporting. As an example, swapping the OCIO Configuration over in Project Settings can leave the current effect invalid.

### OCIO CDL Transform

With the OCIO CDL Transform effect, a CDL transform — or the inverse of one — can be applied to either a layer or a whole composition.

OCIO CDL Transform effect

OCIO CDL Transform effect

These are the options the effect exposes:

Select

Use this to browse the file system and pick a CDL file the effect supports, such as a .ccc file.

CCCID

A drop-down listing every ccc (color correction collection) node as ccc-id entries; any one of them is yours to choose. The list's first entry is what gets picked initially.

Inverse Transform

Flips the transform to its inverse.

Information

Details about the active OCIO configuration show up in the Information section, which also surfaces error messages — for instance, when editing OCIO Configuration in the Project Settings leaves the current effect in an invalid state.

Pairing these effects lets you apply a LUT or CDL that was authored for a particular color space other than the one you've set as the working space:

- Run the OCIO Color Space Transform effect first to move from Working Color Space into whatever color space the CDL/LUT file expects.
- Hand the LUT or CDL to the OCIO File Transform effect to apply it.
- Run the OCIO Color Space Transform effect once more to return to Working Color Space.

### Related resources

- Color basics
- Color management
- Color Correction effects

## Enhanced HDR support

Search Last updated on Apr 2, 2025

### Learn about previewing your work in HDR to view exactly how it will appear on HDR-capable high-end monitors once exported.

On this page:

- Create an HDR project
- Color managed formats in After Effects
- Previewing with Transmit

Whenever HDR (High Dynamic Range) material is involved, seeing it in HDR while you work matters so the finished piece holds up across the full spread of displays — HDR-capable high-end monitors included. The newest After Effects renders your HDR projects faithfully on HDR-capable hardware. Bringing in HDR media, dropping it into a composition, and previewing in HDR — either on your own monitor or via external hardware — all become possible with this release. The payoff is a trustworthy look at the exported result before you commit.

Note

Showing HDR colors in HDR depends on having an HDR display plus your operating system's HDR display setting switched on.

### Create an HDR project

Open After Effects and start a fresh project.

To configure your Color options, head to File > Project Settings.

Within the Color tab, carry out these steps:

- Under the Color Management section, switch Color Engine over to Adobe color managed.
- Under the Color Settings section, push Bit Depth up to 32 bits per channel and choose a Working Color Space with HDR support, for example Rec.2100 PQ.

3. The Project Settings dialog box is where HDR-preview options get tuned.
   At this point, bring a supported HDR file into After Effects.

Glance at the Project panel to confirm your HDR footage's color profile came through correctly.

Should detection of the profile fail, the Interpret Footage option is your fix. Open its dialog box by selecting the footage in the Project panel, right-clicking, and choosing Interpret Footage.

6. When Color Management and Color Settings come through wrong, correct them through the Interpret Footage option.
   Over in your composition viewer, click the Show Channel and Color Management Settings icon, then turn on Use Display Color Management.

7. Keeping color space consistent from one device to another is what the Enable Display Color Management options handle.
   With that finished, the HDR footage is now previewing inside After Effects.

### Color managed formats in After Effects

The list below covers what's supported as of now:

- Quicktime Prores SDR
- H264/HEVC
- MXF: XAVC
- AVC
- XAVC-H
- Raw formats: ARRI, Canon, Sony, ProRes, and Red

### Previewing with Transmit

Previewing HDR content by way of Transmit is also something After Effects handles.

### Preview to a secondary monitor

When an HDR display is wired straight into your machine, turning on Mercury Transmit for that monitor pushes an HDR signal out automatically. For a monitor that offers more than one HDR mode, be sure to pick the right one.

Through Mercury Transmit, your compositions can appear on an external display — say a video monitor hooked up via third-party hardware such as Blackmagic or AJA devices.

Through Mercury Transmit, your compositions can appear on an external display — say a video monitor hooked up via third-party hardware such as Blackmagic or AJA devices.

### Preview to a display using a hardware interface

Running Mercury Transmit alongside dedicated gear like Blackmagic or AJA devices means you'll have to choose the right profile within the device settings.

Third-party hardware support

AJA and Blackmagic support is slated for a later release. Owners of an HDR-compatible AJA device can right now pick the 10-bit HLG profile to push HDR out of After Effects.

### More like this

- Color basics
- Color management
- Color Correction effects
- OpenColorIO and ACES color management

## Import and export HDR content

Search Last updated on Mar 27, 2026

### Learn the process of importing HDR content and how to export your final compositions while maintaining the HDR quality.

On this page:

- About CICP
- Import HDR content
- Export HDR content
- HDR10 metadata on PNG export

Bringing in and sending out HDR (High Dynamic Range) material is something After Effects now does, with reliable color management that stays consistent from one device or platform to the next — a capability that rides on CICP (Coding-independent code points) metadata support.

### About CICP

Following the ITU-T H.273 standard, CICP Metadata is a broadcast-industry convention for declaring color spaces; via code points it pins down an image's video color space (primaries), transfer function, matrix coefficients, and scaling factor.

Note

CICP metadata is now read by After Effects from PNG, MOV, and ICC profiles whenever it's present.

### Import HDR content

On import, HDR content is now processed accurately by After Effects. The application detects high dynamic range (HDR) traits and keeps the brought-in material's full dynamic range, brightness, and color fidelity intact.

Build a composition, then pick Project Settings from the Project panel menu.

1. Ahead of importing the HDR content, set the project's Working Color Space from within Project Settings.
   Within the Color tab, verify that an HDR-compatible Working Color Space is chosen, for example Rec.2100 PQ.

2. Choosing Working Color Space is how the project's color environment gets defined.
   Bring in a file that carries CICP metadata — a Quicktime, PNG, or TIFF file with an ICC profile, for instance.

Certain variants of widespread color spaces declared through CICP might not register on their own. When the conversion to the Working Color Space you expected doesn't appear, right-click the footage > Interpret Footage > Main > Color and override the media space yourself with a fitting color space. An HLG or PQ variant is one option — pick one whose graphics white point you know lines up with your media.

3. Whenever the declared CICP escapes auto-detection, point the media space by hand at the right color space.

### Export HDR content

Exporting your composition in HDR keeps high dynamic range (HDR) traits — contrast, color fidelity, and brightness — in the finished output. Part of this is writing out CICP metadata, which lets devices read the HDR content correctly so what appears on HDR-capable displays lines up with the intended HDR result.

For an export carrying CICP Metadata, drop your composition into the Render Queue.

From the Output Module, pick PNG Sequence.

2. For high-quality image sequences that hold onto color information and transparency, the PNG Sequence format is the pick.
   Within the Color tab, either choose the output color space you want or leave it in the working space, then select OK.

3. Setting Output Color Space to Rec 2100 PQ makes certain your project's colors convert accurately into high dynamic range (HDR) color space.
   Choose Render to kick off rendering and export. Should the chosen color space be representable as CICP metadata, that metadata gets embedded into the rendered output on its own.

Tip

Working across After Effects and Premiere, you can route compositions that already carry HDR and embedded CICP straight into Premiere via Dynamic Link, or as a Motion Graphics template.

### HDR10 metadata on PNG export

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
