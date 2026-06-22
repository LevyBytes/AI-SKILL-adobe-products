# Color Mode Basics, Using Color Mode With Color Management, Work In Color Mode, Open A Sequence In Color Mode ...

> Adobe Premiere Pro reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Color mode in Premiere (beta); Using Color mode with Color Management; Work in Color mode; Open a sequence in Color mode; Color mode workflow.

## Color mode in Premiere (beta)

### Color mode in Adobe Premiere (beta) provides a workflow view for color adjustments shaped around accessibility needs and personal editing preferences.

### What is Color mode for?

A sequence is not ready to deliver until its color supports the look of the program and each clip has been refined. That work may involve correction, exposure and contrast balancing, color balancing, or grading that builds a deliberate visual style for the project.

In Adobe Premiere (beta), Color mode makes color work approachable and quick for editors who are still learning color adjustment. It also keeps enough precision and range for detailed correction work and advanced grading.

The workspace is arranged so the image remains central. Its default layout enlarges the Color monitor, keeps extra interface noise low, and brings forward the controls needed for the task. Color-specific panels that appear only in Color mode can make the work faster and more exact than the same effort in Edit mode.

Color refinement is a required finishing step for a sequence because the clips need to look right and match the intended visual direction of the program. That applies to straightforward color correction, to contrast and color adjustments that improve each shot, and to color grading that adds a specific creative flavor to the program.

Editors do not need deep color experience to start with Color mode in Adobe Premiere (beta); it is built to make learning clip-by-clip adjustment fast and accessible. At the same time, Color mode includes the complete tool depth required by experienced users for subtle improvements and broader stylistic work that prepares an edited sequence for audience delivery.

Color mode is meant to feel focused and uncluttered regardless of your experience level. Good color work depends heavily on learning to inspect and judge the picture, so the mode keeps attention on the image while you work. By default, the Color monitor is given as much space as practical, nonessential interface distractions are reduced, and panels specific to color work, unavailable in Edit mode, are provided to speed up grading workflows.

### Key features in Color mode

### Clip Grid

Clip Grid appears only in Color mode and gives you a quick way to pick clips for navigation and adjustment within the sequence. Its tools support organization through Filter and Sort, color-operation handling through Copy and Paste, and fast complex selections for building groups used in grade management.

### Color Controls panel

Color Controls panel fits a broad set of color-adjustment tools into a compact area, reducing time spent expanding groups or scrolling to locate the needed control.

For the selected clip and operation, Color Controls panel shows the color controls that can currently be edited. These controls have changed substantially: their presentation is simpler, and many of them let you adjust two related image qualities together through vertical and horizontal dragging. That makes expressive image changes smoother and helps techniques once treated as advanced become easier to learn and quicker to apply.

### Color monitor

Color monitor includes workflow features specific to color work. In the time ruler, Sequence and Clip playback modes let you choose between moving quickly across the whole sequence in Sequence mode or staying concentrated on the active shot in Clip mode without accidentally jumping to another clip.

Solo mode can temporarily turn off overlays and composited elements, letting you judge the adjustment without visual clutter.

Color mode workspace with the monitor, adjustment tools, and Clip Grid arranged for grading work.

A. Premiere (beta) header B. Color Monitor C. Color Controls D. Clip Grid E. Toolbar

The Color mode layout places the monitor, controls, and Clip Grid together for sequence color adjustment.

### Color management

Color mode is intended for sequences that use Color Management, giving grading a strong starting point across supported color spaces, including log-encoded and raw media. With Color Management, the Direct Rec. 709 (SDR) color setup, which is the default for most new sequences, can produce reliable results.

Note

Before grading starts, confirm that the sequence uses the intended color setup. A mismatched setup can lead to unexpected results, and changing the setup after color work has been applied can alter clip appearance, so that workflow is not recommended.

During experimentation, Wide Gamut (Tone Mapped) color setups are worth testing so you can compare workflow differences. In Advanced settings, the Apply Inverse Tone Mapping and Gamut Compression checkbox supports updated default Tone Mapping and Gamut Compression behavior for graphics and SDR media.

Whichever color setup you choose, Color mode is built so grading and HDR delivery remain smooth. If you have an HDR display, try Rec. 2100 HLG or PQ output color spaces and use the available Adjust and Style tools to grade HDR highlights.

### About Public Beta

Color mode is close to feature complete, but it remains in progress. Planned additions and refinements include HSL keying for masked isolations, more Style modules, and other focused improvements.

The full workflow is already usable from end to end, so Adobe invites testing and feedback through the community beta forums.

### How should I test this?

Because this is a beta release, development continues and issues may appear. When problems occur, report them through the bug reporting mechanism. Client work is not recommended yet. Since ongoing Color mode refinements may affect project formats, treat projects created with Color mode as disposable. For the smoothest testing path, import duplicate projects that contain sequences you want to try, or place new media into a fresh project.

Note

Any media can be used for testing, but Adobe notes performance problems with 8K media at 8K sequence resolution.

### Premiere (beta) Project Compatibility

A project created in Premiere (beta) with Color mode can be opened in Premiere 26,.x, but this is not recommended because the shipping version cannot access beta features, including new color effects in each clip, group, and sequence operation. Because this Premiere beta includes major changes, Adobe does not recommend moving projects freely between versions. Use duplicate projects containing sequences you want to learn with or test in Color mode, and avoid using the public beta for important client work. Opening a Premiere (beta) project in Premiere 26,.x triggers warnings about missing color effect and sequence color effect video filters. If you proceed, graded clips show an offline filter corresponding to the color effect. The safest response is to quit without saving and open the project again in Premiere (beta).

### Color mode replaces the Lumetri panel

The Lumetri Color effect is still present in the Color Correction bin of the Effects browser, but Color Management panel now takes the place of the Lumetri panel for Color mode. Older projects that use Lumetri import correctly, keep their previous appearance, and preserve full color fidelity. To keep making Lumetri color adjustments or add more Lumetri Color effects, use Effects Control panel.

### Avoid using Lumetri Color and Color mode together

For a new project, Adobe recommends working in Color mode without also applying Lumetri Color effects. Compared with Color mode, Lumetri Color effect has several drawbacks:

Mixing Lumetri Color with the Color workspace should be avoided because Lumetri can limit the grading options available in the dedicated Color mode.

### Quick color features in Edit mode

For fast color corrections while staying in Edit mode, Properties panel now includes a Color section with basic correction controls. These adjustments work together with Color mode for a continuous experience. You can quickly fix individual clip issues in Edit mode, then use Color mode's streamlined workflows to grade the full sequence with broader creative controls.

### Clip Match removed

Premiere removes Clip Match from Lumetri and also removes the clip Comparison Mode of the Monitor in Edit mode.

Tip

To finish an in-progress project with Lumetri, keep using the shipping version of Premiere version 26..x until the work is complete.

## Using Color mode with Color Management

See how Color mode and Color Management work together in Adobe Premiere (beta) to make color workflows simpler and help produce consistent, high-quality results.

### How Color mode works with Color Management

Color mode is built to work with Color Management so color adjustment begins from an optimized baseline. When Color Management is enabled and source media is tagged correctly, it transforms all source media automatically to the target output format and places adjustment work inside an optimized image-processing pipeline. With strong source media, major corrections should be less necessary, letting you focus on the smaller refinements that elevate good images.

Every color adjustment tool in Color mode is designed to cooperate with the Color setup applied to the sequence's color management. Direct Rec. 709 (SDR) and Wide Gamut (Tone Mapped) should both yield strong results. The tools are also designed to perform well for SDR (Rec. 709) output and for HDR (Rec. 2100 HLG or PQ) output.

Caution

Always verify that sequences are using the right color setup before grading begins. The wrong setup can create unexpected results, and switching the setup after adjustments are made can change how clips look, so it is not recommended.

Wide Gamut (Tone Mapped) is where Color mode is especially effective because output tone-mapping creates a pleasing roll-off in highlights and shadows, making it easier to push the signal without constant clipping concerns. This behavior is supported by improved default Tone Mapping and Gamut Compression settings for graphics and SDR media, controlled through Apply Inverse Tone Mapping and Gamut Compression in Advanced settings.

Note

During the public beta, Adobe is still refining Apply Inverse Tone Mapping and Gamut Compression in Advanced settings. Testing Wide Gamut (Tone Mapped) and sending feedback helps confirm that the final behavior meets user needs.

Use Advanced settings when you need to manage tone mapping, gamut compression, or the working color space.

Advanced settings provide controls for tone mapping, gamut compression, and working color space choices.

### Choosing and maintaining a color setup

Color Controls in Color mode understand the active color space, so their behavior remains consistent across setups, even though the visible image can differ slightly from one configuration to another.

To keep results predictable:

- Pick the color setup that fits the project before making adjustments.
- Leave the Working color space unchanged while the workflow continues.
- Do not change color spaces after adjustments have been made, because the grade can look different and may need extra refinement.

## Work in Color mode

Start Color mode in Adobe Premiere (beta) and learn the basic sequence-color workflow.

To begin, open a sequence in Timeline panel, then choose the Color tab in the Premiere (beta) header.

Color mode loads a workspace dedicated to correction and grading, keeping attention on image evaluation and refinement.

Use Color mode when you need the tools for clip correction and visual refinement.

Color mode opens the adjustment workspace used to refine clips.

### Basic workflow

Color mode uses a straightforward sequence workflow for clip adjustment.

Make a clip current by selecting it in Clip Grid. Next, pick an operation in Color Controls panel, such as clip-level adjustment or sequence-wide style, then refine the image with the controls that appear.

Continue through the sequence and apply adjustments wherever they are needed.

### Color mode workspace

The Color mode workspace keeps the image at the center while placing key tools within easy reach.

- Color monitor shows the current frame for evaluation.
- Color Controls panel contains the adjustment controls.
- Clip Grid presents every clip in the sequence for fast navigation and selection.

### Configure Color Management

Before entering Color mode, verify that Color Management is configured as intended. Color mode is chosen automatically from the format of the first clip added to a sequence, so the automatic choice might not match the setup you actually need. Selecting the correct color setup for the project is essential for best results.

For example, iPhone media is often in the HLG color space, and importing it can set the sequence to Direct HLG (HDR). That is the wrong choice when the intended delivery is Rec. 709 standard dynamic range; in that case, Direct Rec. 709 (SDR) is preferable. This automatic selection happens only when the first clip or clips enter a sequence. Check the sequence color setup right after editing or adding those first clips, and that check covers the remainder of the edit.

To set the critical color management options quickly for a new project:

Open Color Management panel.

In Preferences section, confirm that Display Color Management is on. For an HDR program, enable Extended Dynamic Range Monitoring; for an SDR program, keep it off.

In Project section, enable Color Manage Auto Detected Log and Raw Media so media formats that support automatic color management are handled.

Note

Some clips may still need manual tagging when they do not include metadata for automatic detection, allowing their color space to be managed correctly.

In Sequence section, choose the Color Setup that best matches your needs. Use one of these options:

- For most projects, when outputting video in the familiar long-standing way, choose Direct Rec. 709 (SDR) if it is not already active. This offers the widest workflow compatibility.
- Choose Wide Gamut (Tone Mapped) when you want enhanced image processing plus output tone-mapping that automatically controls extreme highlight and shadow levels during grading. This helps especially when grading HDR output.
- Direct HLG (HDR) and Direct PQ (HDR) are intended for passthrough workflows where you do not want the media type edited into a sequence to be altered. If you imported iPhone media or plan to deliver to a broad general audience, choose Direct Rec. 709 SDR or Wide Gamut (Tone Mapped) instead.

To decide how you want to output your media:

- For the most widely compatible sequence output, keep Output Color Space set to Direct. 709, the default setting. That creates standard dynamic range media that plays on nearly everything.
- For HDR sequence output, choose Rec. 2100 HLG or Rec. 2100 PQ according to the required HDR delivery format. If the choice is unclear, check the documentation for the streaming or video-sharing service you plan to use.

### Choosing and managing mode workspaces

Premiere (beta) now has multiple workflow modes, so workspaces tied to each mode are managed differently. Color and Edit modes each include several workspaces intended to make different project types easier. As you learn the panels and features in each mode, you may also create custom workspaces that fit your working style and available screen space.

Note

Panels in Color mode can be customized like other Premiere panels. Clip Grid, Color Controls, and Video Scope panels also support horizontal and vertical orientations, giving more flexibility across display setups.

Workspace selection for the current mode works this way:

Choose Edit or Color mode, then select that tab again to open the workspace drop-down menu. That menu lists the workspaces for the current mode and includes workspace-management controls.

Select the different layouts from the drop-down menu.

The menu includes these workspace-management options:

- Reset to Saved Layout: returns the panels in the current workspace to the originally saved version, discarding layout changes.
- Save Changes to this Workspace: saves the current panel arrangement over the selected workspace.
- Save as New Workspace: builds a new workspace from the current state of all panels in the selected layout.
- Edit Workspaces: opens the Edit Workspaces dialog, where available workspaces can be rearranged, selected workspaces can be deleted, or workspaces can be hidden by moving them to the Do not show section.

## Open a sequence in Color mode

### Switch to Color mode in Adobe Premiere (beta) when you are ready to begin sequence color adjustment.

Color mode gives correction and grading their own workspace, with tools arranged for evaluating clips and refining their visual appearance. Before making changes, open the sequence in Color mode.

While using Edit mode, open the sequence you want to adjust in Timeline.

In the Premiere (beta) header bar, choose the Color tab.

Open Color mode from the Color tab in the header.

Select the Color tab in the header to enter Color mode.

Color mode opens with the default Color workspace layout, so work can begin. Project Browser is also available in Color mode, allowing other sequences to be opened there too.

## Color mode workflow

Learn the Color mode workflow for adjusting clips in Adobe Premiere (beta).

Color mode uses a focused workspace and a simple process for moving through a sequence, changing clips, and judging the outcome.

In Clip Grid, select a thumbnail for the sequence clip you want to adjust; that selected clip is called the Current Clip.

Clip adjustments within a sequence are grouped as Operations. At the top of Color Controls panel, choose an operation to decide what to edit.

- When a clip is newly selected, a Clip Operation is selected by default and shows controls for adjustments that affect only the currently selected clip.
- Every new sequence also includes a Sequence Style operation for applying a "show look" across the whole timeline at once. You can use one of the included editable Style presets, or combine Style modules, which are creative color tools for building many kinds of looks. Each module is centered on an easily applied, customizable stylistic color effect.

The controls available for the selected Operation appear below the Operations area.

- With the Adjust operation selected, the control groups can manipulate contrast, color, and texture.
- With the Style operation selected and a preset or module added, that module's controls appear underneath.

Many controls are two-dimensional, allowing either vertical or horizontal dragging to change two related settings at the same time. Other controls respond only to vertical movement.

Click once inside a control to latch it. The HUD appears, indicating that the control is ready for adjustment. Many controls, including every control in the Adjust operation, can also be activated by keyboard shortcuts.

While a control is latched, adjust it in either of these ways:

- Drag the pointer up or down for the main adjustment and, depending on the control, left or right for the alternate adjustment to change the image.
- Press the Arrow keys to adjust vertically or horizontally in fine increments. When finished, click again to accept the adjustment and unlatch the control.
- You can also hold the left pointer button and drag up, down, left, or right, depending on the control, to edit without latching. Release the button to accept the adjustment.

As adjustments are made, the heads-up display (HUD) presents a video scope with indicators overlaid for the specific control being changed. Each control's HUD is meant to clarify the adjustment type while the result is viewed on Color Monitor.

When Transmit Device Playback is enabled, the same resulting change also appears on the external video display.

When the current clip adjustment is finished, accept the change by clicking again or pressing Return or Escape, which unlatches the active control. The HUD disappears so the resulting image can be evaluated without distractions. Continue with other controls if more adjustments are needed.

For a faster starting point, choose the Sequence Style operation, choose Style Presets, and use the Style browser to pick a Style preset for the whole sequence. The preset applies a customizable show look that defines the program's overall visual tone, leaving time for individual problem clips.

- After a Style preset is applied, its modules and controls appear below the operations area. Like Adjust operation controls, they stay editable through two-dimensional controls that can latch.

Use Style presets to build an initial look quickly.

Browse Style presets and apply one as the first pass for the look.

After using the Sequence style operation, move through Clip Grid to find individual clips whose color or contrast does not match nearby clips. When needed, select multiple clips and compare them in split-screen with Comparison View button in Color monitor. With Comparison View enabled, adjustments affect the current clip, while a stack of icons to the left of Color monitor lets you choose which selected clip to compare against. Turn Comparison mode off when the comparison is finished.

After the current clip is adjusted, choose another thumbnail in Clip Grid. Keyboard navigation also works: Down arrow key uses Go to next, and Up arrow key uses Previous clip. Continue through the sequence until every clip that needs work has been adjusted.
