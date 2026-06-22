# About Color Separations, Prepare Documents For Color Separation, Create Color Separations, Save And Print Color Separations ...

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: About color separations; Prepare documents for color separation; Create color separations; Save and print color separations; Print gradients as separations; About ink trapping.

## About color separations

Review how separations split artwork into printing plates for commercial printing and when different separation workflows make sense in Adobe InDesign.

For commercial print preparation, color separations matter because they determine whether press output reproduces the artwork accurately. Color separation divides a document's colors into individual printing plates, usually one each for cyan, magenta, yellow, and black (CMYK) inks. Spot colors, such as Pantone inks, and special coatings, such as varnishes, can require extra plates.

This core print-production concept influences document construction, color choices, and final file export. Whether separations are produced on the computer or later by a raster image processor (RIP), understanding the process supports better decisions throughout the design workflow.

### How color separation works

Color separations recreate full-color artwork by dividing it into component colors. Every color has its own plate. When those plates print in exact alignment, a condition called registration, the inks combine to reproduce the original design.

For standard four-color printing, InDesign creates four individual plates:

- Cyan plate: Includes all cyan information from the document.
- Magenta plate: Includes all magenta information.
- Yellow plate: Includes all yellow information.
- Black plate: Includes all black information.

When spot inks are present, InDesign adds another plate for each one; examples include a specific Pantone color and a varnish coating. CMYK colors plus two spot colors would make a document require six total plates.

During separation, the composite document is converted into the individual color components. Areas built from mixed colors show up on several plates, each at a different ink density. A purple object, for example, is represented on both the cyan plate and the magenta plate, and each plate carries the proper percentage of its own ink.

### Separation workflows

InDesign provides two main separation methods, based on where the calculations are performed:

### Host-based separations

With this traditional workflow, InDesign calculates all separations on the computer before any data goes to the output device. For each plate, including cyan, magenta, yellow, black, and any spot colors, the software creates complete PostScript information and then sends the preseparated data to the printer or imagesetter.

This method works with any PostScript output device and gives direct control over the separation process. The tradeoff is heavier processing on the computer and a larger data transfer to the output device.

### In-RIP separations

Modern PostScript 3 RIPs can run color separation internally, so the output device performs the calculations rather than the computer. In this workflow, InDesign sends one composite PostScript file to the RIP, and the RIP produces the individual plates.

In-RIP separation has several benefits. Computer processing is faster because InDesign creates one composite file instead of multiple separation files. Less data is sent to the output device, which shortens transmission time. Complex features such as transparency flattening and trapping can also be handled by the RIP more efficiently than by host-based workflows.

To use in-RIP separations, the setup must include a supporting PPD file plus a PostScript 3 output device. Another valid setup is a PostScript Level 2 device paired with an in-RIP separation-capable RIP. Documents that contain Photoshop duotones require PostScript 3.

Note

Some prepress service providers prefer composite files for in-RIP processing instead of preseparated files, because that gives them greater control over final output settings such as trapping and color management.

### Spot colors versus process colors

Separation needs are determined by whether the document contains process colors, spot colors, or both:

Process color separations: Generate four plates (CMYK), no matter how many colors are used in the document. Even a design with twenty different RGB or CMYK colors separates into those same four plates, with each color produced from the four process inks in varying proportions.

Spot color separations: Add one extra plate for every defined spot ink. Spot colors usually stand for special inks mixed to exact specifications, such as corporate brand colors that must stay consistent across printed materials. Each spot color increases cost and production complexity because the press needs another ink unit.

The Ink Manager panel can convert spot colors to process equivalents. Open Window > Output > Separations Preview, and then choose Ink Manager from the panel menu. This is useful when exact color matching is not essential or when the budget limits plate count.

### Rich black and ink coverage

Understanding separations improves decisions about black objects in a design. Rich black is process black (K) combined with percentages of cyan, magenta, or yellow, producing blacks that look deeper and more saturated than 100% black ink alone. By previewing separations, you can see exactly which plates contribute to rich black areas.

Too much ink on paper, however, can create drying problems and other press issues. Maximum ink coverage limits vary by press and commonly fall between 280% and 340% total ink. Use the Separations Preview panel to find areas above the printer's specification, then adjust the ink percentages as needed.

### Preparing for separation

Complete this setup before you create separations:

1. Correct color problems: Repair RGB colors that need CMYK output, check the definitions for spot colors, and confirm that placed graphics use suitable color modes.
2. Set overprint options: Decide which objects print over colors underneath instead of knocking those colors out.
3. Configure trapping: Define trap behavior that offsets small registration shifts on press.
4. Preview separations: In the Separations Preview panel (Window > Output > Separations Preview), inspect plate contents before output.

Use the Separations Preview panel before committing to costly film or plates: it lets you inspect the content of each plate, confirm rich blacks and varnish areas, review ink-density levels, and simulate overprinting behavior.

## Prepare documents for color separation

Set up spot colors, inspect separations, confirm ink coverage, and prepare Adobe InDesign files for professional print output.

For offset and specialty printing, separation preparation helps the job reproduce ink accurately. Commercial presses image a distinct plate for CMYK plus any needed spot colors, including brand inks, metallics, or varnishes. InDesign can make host-based separations, and it can also rely on in‑RIP separations performed by the output device. Before work begins, verify TAC limits, spot-color requirements, PDF standards, and whether the RIP or the PDF workflow will handle the separations.

### Review and consolidate spot colors

Open the Swatches panel by choosing Window > Color > Swatches.

Inspect every spot color in the document; the spot icon beside the swatch name identifies it as a spot color.

For a spot color that should become process color, right-click that color and choose Swatch Options.

When the change is suitable, set Color Type to Process. Confirm that the CMYK values match the job requirements, then choose OK.

Moving spot colors to process can lower production cost, but it can also reduce brand-color accuracy. Before converting corporate inks or specialty inks, confirm the change with the print provider.

### Preview separations and check ink coverage

Open Window > Output > Separations Preview.

In the View options, choose Separations.

Use the eye icon beside individual separation names to inspect one plate at a time, or enable several plates to see how they combine.

For ink-coverage checking, switch the View option to Ink Limit and enter the printer's maximum ink coverage value (typically 300%-320%). Review the areas highlighted in red; those areas exceed the limit and may cause drying problems or color shifts on press.

Dark red marks severe excess ink, and light red marks moderate excess ink. Areas that remain within limits appear in grayscale. Hover over any document area to read the exact ink percentages for each separation.

Note

If the document includes spot colors beyond CMYK, the preview displays every spot as a separate plate. Objects using registration color print on all plates.

### Configure ink settings in Ink Manager

Ink Manager centralizes ink control for the whole document. When the prepress service provider supplies neutral density values or trapping sequences, enter those values exactly as specified.

Open Window > Output > Separations Preview.

Use the panel menu icon, then choose Ink Manager.

Check the ink list and confirm that each spot color remains set to Spot type unless the printer has requested process conversion.

To make a spot color output as process for only this print job, click the spot color icon beside the ink name so it changes to a process icon.

Choose OK to apply the ink settings. The change affects only the current print job and does not alter document swatches. For a lasting spot-color conversion, make the change in the Swatches panel.

### Verify color and links before printing

Open Window > Links to display the Links panel.

In the status column, check for missing or modified links and resolve them with Relink or Update Link.

Run Window > Output > Preflight to check for color and separation issues.

Inspect errors and warnings, with special attention to spot colors, transparency, and color spaces.

Choose File > Package to gather the document assets for delivery to the printer. The package includes a report file, fonts (subject to licensing), linked graphics, and the document itself, giving the printer the materials needed to output separations correctly.

### Output host-based separations (legacy workflow)

Open File > Print, then choose Output.

Under the Color options, choose Separations or In-RIP Separations according to the requirement.

## Create color separations

Create color separations

Preview and generate color separations in Adobe InDesign for print production that uses multiple plates.

Because this is a legacy workflow, confirm the setup with the print provider. Use color separations when production requires individual ink plates, such as offset printing or specialty printing, and verify the requirements with the provider. InDesign supports legacy host-based separations and modern RIP-based separations, including CMYK plates plus extra spot plates for metallics or coatings.

Full color on press depends on proper plate registration. Prepare the file carefully by checking color modes, embedding fonts, and running preflight checks. Request a suitable proof, either a digital contract proof or press proof, to verify registration and plate accuracy.

### Prepare your document for separation

Open Window > Output > Separations Preview.

From the View dropdown menu, choose Separations to show the individual color plates.

Use the eye icon beside each separation name to inspect plates individually or together, confirming that content is assigned to the correct plates.

For total area coverage (TAC), choose Ink Limit from the View dropdown menu and enter the maximum value specified by the printer (Values commonly fall around 260–320%, with variation by press and stock.)

Review red areas because they show ink coverage above the specified limit; adjust colors or images as needed to remain within press tolerances. Check that rich black builds match the print specifications.

Separations Preview simulates plate separation before output files are generated, which helps find problems early. Use the preview to catch registration issues, check spot color placement, and confirm suitable rich black builds, for example C:60 M:40 Y:40 K:100 instead of K:100 alone.

Tip

Move the pointer over any area in the document preview to see live ink-coverage percentages for that location in the Separations Preview panel.

### Choose a separation workflow

Open File > Print.

Choose the Output tab.

In the Color dropdown menu, choose Separations for host-based separations, or choose In-RIP Separations when the RIP supports device-based processing.

Use the Inks list to confirm which plates will be generated; turn off any inks that should not output.

Modify screening values only when the print provider has explicitly instructed you to do so.

Host-based separations produce individual plates from InDesign and suit older or specialized RIP systems; they offer more control but take longer to process. In‑RIP separations are generated at the RIP and are common in modern production. Because device setup and duotone handling differ by RIP, confirm the requirements with the print provider.

### Configure separation options

Open File > Print.

Choose the Output tab when you need to define screening values manually, then confirm frequency (lpi), angle, and dot shape.

Leave screen angles unchanged unless you have been instructed to adjust them. Incorrect angles can cause moiré patterns.

Use Negative or Emulsion settings only for film output specified by the provider.

Choose Emulsion Down or Emulsion Up according to the printer's press requirements.

Choose All Spot Colors to process only when converting spot inks to CMYK for composite output.

In most current production environments, the RIP generates separations from PDF/X files. Direct host-based separations from InDesign are usually limited to legacy or specialty workflows.

### Generate separation output

Open File > Print.

Use the Summary tab to check separation settings, color management, and printer's marks.

Use the Setup tab to confirm page range, positioning, and scaling options.

In the Marks and Bleed tab, enable the required bleed and slug areas along with crop marks, registration marks, and color bars.

Choose Print to send separations directly to the output device, or choose Save to create a PostScript file if the workflow requires it. When PostScript files will be output later, verify that the correct PPD (PostScript Printer Description) is selected for the target device. The PPD file defines device-specific capabilities and helps ensure accurate separation processing.

During PDF export, the maximum page size is 200 × 200 inches; anything outside that limit is cropped.

## Save and print color separations

Prepare Adobe InDesign output as host-based or in-RIP separations for commercial print workflows.

Color separation divides artwork into individual plates for every color used in commercial printing. For accurate color reproduction, cyan, magenta, yellow, and black (CMYK) inks must print in precise registration.

Use this procedure for commercial offset files or when the print service provider requires separated output. Adobe InDesign offers two workflows: host-based separations, which are created on your computer, and in-RIP separations, which are created at the output device. In-RIP separations reduce processing time and data transfer, while host-based separations let you verify separation settings immediately.

### Configure and output separations

Open File > Print.

In the Printer menu, choose the output device, or choose PostScript File to save separations to a file.

If you are saving to a file, choose a PPD that supports the target output device.

Choose General from the left panel and specify the page range to separate.

In the left panel, open Output.

Set Color to Separations for host-based separations, or set it to In-RIP Separations when separation settings should be preserved for RIP processing. Adobe In-RIP Trapping requires In-RIP separations because it needs simultaneous access to all colors during RIP processing.

Review the ink list and click the printer icon beside any ink names to control which separations are created.

When needed, use Ink Manager for spot-to-process color conversion or for creating ink aliases.

In the left panel, open Graphics, then configure Send Data as All, Download as Complete or Subset, and PostScript for the output device level, either Level 2 or Level 3.

In the left panel, open Advanced and set Transparency Flattener Preset to [High Resolution] or to a custom high-resolution preset.

Check the Summary section to verify separation settings, color management, and document specifications.

Choose Print to output to a device, or choose Save to create a PostScript file with embedded separation settings.

Saving separations to a PostScript file preserves separation settings, PPD information, and color conversions. That preserved information keeps output consistent when the file is processed at the RIP or sent to the print service provider.

For documents that contain spot colors, Ink Manager can convert them to process colors when the job requires CMYK-only printing. This avoids accidental extra plates and lowers printing costs.

## Print gradients as separations

Use appropriate color combinations and screen angles in Adobe InDesign so gradients separate correctly onto process and spot color plates.

In most current production environments, the RIP controls screen angles and frequencies rather than InDesign. Manual adjustment in InDesign is usually needed only for legacy host-based separation workflows.

For gradients in professional print workflows, understanding their plate breakouts helps avoid surprise plates, unintended overprints, and moiré patterns.

Use this guidance while previewing or outputting color separations from InDesign documents that contain gradient fills.

The principles are the same whether a modern RIP creates separations from a PDF workflow or a legacy host-based separation workflow generates them.

The color types assigned to gradient stops determine how the gradient separates. Gradients built only from process colors output to the CMYK plates. Gradients combining process and spot colors output to both CMYK and spot plates.

### Configure gradient separations by color type

For gradients that contain only process colors, use Window > Output > Separations Preview to confirm separation behavior.

For gradients that blend two tints of the same spot color, use the Separations Preview panel to confirm that the gradient separates onto a single spot color plate.

To build a gradient that fades from a spot color to white on one plate, use the Swatches panel (Window > Color > Swatches) and create the gradient between the Paper swatch and the spot color.

When the Paper swatch is paired with a spot color, the result is a one-plate separation that fades to the unprinted paper color and avoids unnecessary plates.

For gradients that mix spot and process colors, expect output on both the process plates and the spot color plate(s). Preview every affected plate in the Separations Preview panel before printing.

### Consider screen angle configuration only when generating host-based separations.

Open Window > Output > Separations Preview to identify all spot colors in the gradient.

When producing host-based separations, choose File > Print and choose Output.

In the Color menu, choose Separations (host-based) or In-RIP Separations as the workflow requires.

Click the Ink Manager button to open ink settings.

From the ink list, select every spot color.

If manual screen angles are required, ask the prepress provider before changing angle or frequency settings.

When multiple spot colors are screened, assign distinct angles to reduce interference patterns.

Choose OK to close the Ink Manager, then finish the print settings.

Alert

Matching angles and frequencies across multiple screened spot colors in host-based separations can cause interference patterns or moiré.

A common offset-printing halftone angle set is C 105°, M 75°, Y 90°, K 45°, but exact values vary by press and RIP configuration.

## About ink trapping

In Adobe InDesign, trapping compensates for misregistration and prevents gaps between neighboring inks on press.

Multi-ink documents need each ink to print in perfect alignment, known as printing in register, with adjacent inks. Across a full press run, paper movement and mechanical tolerances make exact registration impossible. Registration shifts can expose the white paper underneath, creating unwanted gaps where different ink colors meet.

Trapping prevents that failure by deliberately overlapping adjacent colors, so minor press misregistration does not produce visible gaps in the final printed piece. For professional commercial printing, especially jobs using spot colors or process color builds without shared ink components, this technique is a key quality-control step.

### How trapping works

Trapping offsets misregistration by expanding one ink area slightly until it overlaps a neighboring ink of another color. This small expansion is usually measured in fractions of a point, and it forms a safety margin that hides registration errors during printing.

This process uses overprinting instead of knockout behavior. With knockout, the underlying ink is removed completely to avoid unwanted color mixing. Trapping deliberately permits overprint in narrow overlap zones, adding a buffer against misregistration while keeping color edges crisp.

Misregistration without trapping (left) reveals white gaps; with trapping (right), the overlap prevents visible gaps

### The spreading principle

Most trapping uses spreading: a lighter colored object expands into an adjacent darker object. The visual edge stays defined because the darker color establishes the perceived boundary between objects. Even when the lighter color extends slightly beyond its designed edge into the darker color, the darker boundary still appears intact.

This method preserves the design intent while accommodating the mechanical realities of offset printing. Because the human eye treats the darker color as the definitive edge, the small spread of the lighter color is imperceptible in the final printed piece.

### Trapping considerations for your workflow

InDesign files do not use a single trapping approach for every object; the right treatment depends on the inks and artwork involved:

Process color builds: Where neighboring colors include the same process ink, little or no trap is usually needed. A purple stroke (cyan + magenta) next to a red fill (magenta + yellow), for example, has magenta in common. Because that magenta prints as one continuous region, small shifts in cyan or yellow are less noticeable. When the design permits it, build colors so they share ink components as much as possible.

Black ink: Pure black normally overprints colors underneath it by default, which removes most trapping issues. This works because black is sufficiently dark to hide the colors below it.

Spot colors: Spot colors placed beside each other without any shared ink components need more deliberate trapping to avoid gaps. InDesign trapping engines use each spot color's neutral density, or relative lightness/darkness, to compute suitable spreads.

Imported graphics: With automatic trapping, Illustrator vector artwork and placed PDF files follow InDesign trapping rules. Bitmap images such as photographs also trap against nearby text and graphics, and the image frame edge is used to calculate the trap boundary.

### When trapping matters most

Trapping is not necessary for every job. Evaluate the actual print conditions first:

- Single-color printing: A document printed only with black, or with one other spot color ink, does not need trapping.
- Digital printing: On many digital presses, all colors are laid down at the same time, so ink-to-ink registration variation is removed.
- Shared process inks: Colors built from process inks that have components in common, such as a warm red and an orange that both contain magenta and yellow, usually need little trapping.
- Large solid areas: Traps matter more when broad neighboring regions use distinct solid colors, especially if spot colors are part of the job.
- Fine details: Thin strokes and small text demand tighter trapping calculations than large objects do.

Ask the commercial printer which trapping strategy fits the press, substrate, and quality requirements for the specific job.

Note

InDesign's on-screen preview does not show the final trapping result; the effect appears on the final color separations. Review proof separations with the prepress service provider before releasing the job to press.
