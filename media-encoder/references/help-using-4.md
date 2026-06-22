# Preferences, Reset And Restore Preferences, Custom Encoding Presets, Sync Settings Ame ...

> Adobe Media Encoder reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Set preferences; Reset preferences and settings; Create custom presets for Media Encoder; Sync settings in Media Encoder; Video Effects Manager in Media Encoder; IRT compliance — Overview; Apply Content Credentials preferences at export.

## Set preferences

Search Last updated on Mar 27, 2026

Configure Adobe Media Encoder preferences for appearance, media handling, hardware behavior, and related settings.

Media Encoder lets you adjust interface appearance and application behavior, including automatic queue startup and UI brightness. Most preference choices stay active until you revise them.

Open Preferences with Edit > Preferences (Windows) or Adobe Media Encoder > Preferences (macOS).

To return preference settings to their defaults, hold down the Shift key while launching the application on Windows or macOS.

Note

This reset removes everything in the Media Encoder documents folder, including preferences, saved workspaces, preset groups, watch folders, and the current batch queue. User presets remain, but their grouping is not kept. If that result is not what you want, remove only selected files manually instead.

On your computer, the user Preferences file and Presets folder are stored at these paths:

- For Windows: \Users<username>\Documents\Adobe\Adobe Media Encoder\25.0\
- For macOS: <drive>/Users/<username>/Documents/Adobe/Adobe Media Encoder/25.0/

### General

Use General preferences to control Media Encoder queue behavior, output options, and video rendering.

These General settings cover queue operation, output handling, and how video rendering runs in Media Encoder.

Start queue automatically when idle for

After an item enters the queue, encoding starts by itself once the chosen idle interval has passed. Any interaction with the application restarts the countdown timer. Clear this option to turn off automatic startup. The setting is off by default.

Show Queue Elapsed Encoding Time

Displays the time that has passed since encoding began.

Preview while encoding

Displays video frames in the Encoding Panel while they are encoded.

Play chime when finished encoding

Plays a chime after encoding completes.

Remove completed files from queue on exit

On application quit, clears encoded items from the encoding queue.

Enable Parallel Encoding

Parallel encoding can reduce processing time by encoding every output from one source simultaneously. If an output format does not support parallel encoding, Media Encoder renders outputs one at a time (aka serial encoding).

Stop current item if decode errors are detected

With some MXF sources, detected decode errors cause duplicated frames to be inserted. Enable this option to halt encoding on decode errors instead of adding duplicated frames. It is enabled by default.

Import image sequences from watch folders

When this is on, watch folders treat sequentially named image files as a single source. Use the timer to set how long AME waits before importing the full sequence.

Import sequences natively

Lets systems without Premiere installed import Premiere sequences.

Don’t encode outputs when missing items are detected

For certain sources and outputs, Media Encoder warns when it finds missing items such as offline media or missing fonts. Turn this setting on to prevent outputs with missing items from being encoded.

Append preset name to file name

Adds the encoding preset name to the output file name automatically.

Increment output file name if file with same name exists

By default, when an output file would use the same name as an existing file in the same folder, Media Encoder increments the new output's name. For example, if you encode a video clip and create video.avi, then encode the same file again without deleting video.avi, Media Encoder names the next file video_1.avi.

If the Increment output file name check box is disabled, choose file names carefully so they do not accidentally overwrite each other.

Specify output file destination

Media Encoder normally stores exported files in the same folder as the source video clip. To send encoded media clips somewhere else, browse to the target folder on your system.

### Appearance

Set the interface appearance by choosing a color theme and selecting the application language.

Appearance preferences control the color theme and language used by the interface.

Color Theme

Changes interface brightness.

Language

Sets the language shown in the application.

### Audio Hardware

Set up audio hardware options.

Audio Hardware preferences define the devices, drivers, latency, and playback settings Media Encoder uses.

Device Class

Chooses the audio driver type for hardware access.

Default Output

Chooses the default output device.

Latency

Controls the delay, in milliseconds, between input and output audio signals.

Settings

Changes playback device settings.

### Color

Set color preferences and Gamma behavior.

Color preferences control Gamma and related display handling.

Viewer Gamma

Controls media-preview brightness and contrast by setting gamma level.

Color Manage Auto Detected Log and Raw Media

Enables automatic color management for log and raw media formats.

Display Color Management

Enables color display that reflects your monitor's color profile accurately.

### Color — Media

Set locations for media cache files, define timebase handling, and control hardware acceleration for optimized media workflows.

Media preferences cover cache locations, timebase defaults, caption import, and hardware acceleration choices.

Media Cache Files - Save Media Cache files next to originals when possible

Media Encoder supplies an initial location. Choose Browse to move to the desired location.

Media Cache Database

The database also has a default location. Choose Browse... to move to the desired location. Choose Clean to clear the database.

Indeterminate Media Timebase

Defines the frame rate for sources with no built-in time base, including image sequences.

Include Captions on Import

Includes captions as files are imported.

Always import embedded CEA-708 closed captions with wide aspect

Ensures wide-aspect CEA-708 captions come in correctly.

Enable hardware accelerated decoding (requires restart)

Turns on hardware decoding from AMD. Media Encoder shows AMD when that card is available on your system. This setting is enabled by default and appears only on Windows.

Enable ProRes hardware accelerated encoding, if available

Turns on hardware encoding. The setting is enabled by default and appears only on Windows.

For details, see Managing the media cache database article.

### Color — Metadata

Set how metadata is kept, embedded, and exported for media files on import and output.

Metadata preferences govern preservation, embedding, and export behavior for media-file metadata.

Write XMP ID To Files on Import

Adds a unique identifier to imported files that do not already have one.

For other Metadata category settings, see Export and thin XMP metadata.

### Color — Memory

Improve performance by tuning how memory is divided between Adobe applications and system tasks.

Memory preferences let you adjust allocation between Adobe apps and the operating system.

RAM reserved for other applications

Media Encoder uses a shared memory pool with other apps, with Photoshop, After Effects, and Adobe Premiere among them. The RAM reserved for other applications value shows the amount assigned to that pool. You can change it by allocating more or less RAM to other applications and to the operating system. To give more RAM to the applications sharing the pool, lower the RAM reserved for other applications value.

Note: Keep the RAM reserved for other applications preference from being set too low; starving the operating system and other applications of memory can hurt performance.

### Notifications

Set when and how Media Encoder presents notifications for system and encoding events.

Notification preferences control alerts for queue and encoding activity.

Send notification when all items in the queue finish encoding

Media Encoder issues one notification after all encoding jobs finish, so batch processing produces fewer alerts.

Send notification after each item in the queue finishes encoding

After each file completes encoding, Media Encoder issues a notification with real-time status for tracking individual file progress and priorities.

## Reset preferences and settings

Search Last updated on Aug 14, 2025

Use reset options to restore preferences, presets, and plugin settings while troubleshooting launch problems.

Launch the application while holding the Shift key to open the Reset options dialog box.

In the Reset options dialog box, choose the required options:

- Reset app preferences: restores default settings while retaining custom shortcuts and presets, but removes watchfolders and workspaces.
- Reset user presets: removes every user preset and returns the preset browser to its reset state.
- Reset plugin loading cache: clears plugin data so possible issues can be fixed.
- Disable third-party video plugins (one-time only): switches off third-party plugins temporarily for troubleshooting.

2. Choose one or more reset options to control how Media Encoder restarts.
   Select Relaunch with Options to apply those resets and keep launching the app.

Media Encoder restarts with the selected reset options in place. If issues continue, try clearing caches or disabling third-party plugins again.

To exit without changes, select Cancel.

## Create custom presets for Media Encoder

Search Last updated on Dec 21, 2021

### Create and save a custom preset

After you choose a format, associated presets for specific delivery cases become available. Adobe Media Encoder looks at the source item's characteristics to estimate which preset fits best. You can create and save your own presets, export presets, or bring in additional presets.

Change preset settings from the Export Settings dialog. Open that dialog by choosing Preset > Settings or by pressing Ctrl+Alt+E.

Note

Adobe Technical Support only supports Adobe Media Encoder presets included with Adobe applications.

Choose a format from the Format menu.

From the Preset menu, choose the preset closest to the settings you need. If that preset has been modified, Custom appears beside it.

Open the Export Settings dialog box by selecting the format or preset name, then adjust the settings.

Select the Save Preset button.

Enter a preset name, choose whether to save particular parameter categories when prompted, and select OK.

Note

Encoding presets are stored with the Adobe Media Encoder files. For quick access, use Reveal Preset File from a user preset's right-click menu in the Preset Browser.

### Import a preset

Select the Import Preset button.

Browse to the preset's location, select it, and then select Open.

Enter a name for the imported preset, set any other options, and then select OK.

A preset can be imported for a format only when that format is selected in the Format menu. For example, an MPEG 2 preset triggers an error if the Format menu is set to MP3; choose MPEG 2 first, then create the new preset.

### Export a preset

Select the preset in the Export Settings dialog box.

Use Alt-click (Windows) or Option-click (Mac OS) on the Save Preset button.

Select the save location for the preset, name it, and then select Save.

The preset is saved as a file using the .epr filename extension.

### Delete custom presets

In the Export Settings dialog box, select the custom preset to delete.

- To remove one preset, select the Delete Preset button.

- To remove every custom preset, use Ctrl+Alt‑click (Windows) or Command+Option-click (Mac OS) on the Delete Preset button.

### Manage presets using the Preset Browser

Use the Preset Browser to create custom presets, bring presets in or out, and remove presets. See Using Preset Browser for details on managing presets with the Preset Browser.

## Sync settings in Media Encoder

Search Last updated on Mar 27, 2026

Read how preferences such as workspace layouts, keyboard shortcuts, and presets can be synchronized between machines through your Creative Cloud account.

Note

Beginning December 11, 2023, Creative Cloud Synced files are not included for new users or organizations. For personal accounts that existed before December 11, 2023, Creative Cloud Synced files ended on February 1, 2024 (learn more here). For business accounts tied to organizations that existed before December 11, 2023, Creative Cloud Synced files ended on October 1, 2024 (learn more here).

Adobe Media Encoder 24.3 removes Sync Settings.

Versions 23 and 24.0-24.2 of Adobe Media Encoder keep Sync Settings through December 2025; after that date, no Media Encoder release supports it.

Manual sharing is still possible by copying the Preferences folder to your local machines. Those preferences cover composition settings, render and output settings, interpretation rules, keyboard shortcuts, and more, including settings that Sync Settings did not synchronize before.

Sync Settings keeps items such as keyboard shortcuts, preferences, and user presets aligned across multiple computers. Settings can be uploaded to your Creative Cloud account, then downloaded and applied on other machines.

### Sync settings

Begin synchronization with Media Encoder > Sync Settings > Sync Settings Now on Windows, or Premiere > [your Adobe ID] > Sync Settings Now on macOS.

Accessing the Sync Settings dialog

Accessing the Sync Settings dialog

Authenticate with Creative Cloud by entering your Adobe ID and password.

Sync settings login

Sync settings login

### Sync settings from a different account

Settings can also be synchronized from another Adobe account. Choose Media Encoder > Sync Settings > Use Settings From a Different Account, then use a different Adobe ID and password.

### Manage Sync Settings

On Windows, choose Media Encoder > Sync Settings to open synchronization management. On Mac OS, choose Media Encoder > Sync Settings, then click Manage Sync Settings.

Sync settings preference

Choose which preferences synchronize and how often Adobe Media Encoder synchronizes them:

- Preferences/Settings
- Workspace Layouts
- Keyboard Shortcuts
- Presets

- Ask My Preference
- Always upload settings
- Always download settings

- Automatically clear settings on application quit - Clear settings returns AME to its pre-sync condition. Turn on this option to remove the user profile when you exit Adobe Media Encoder. At the next launch, the preferences that existed before Adobe ID sign-in are restored.

Note

- Preferences that use absolute paths or rely on specific system hardware are not synchronized.
- To remove sync settings, select here and then choose clear settings.

### More like this

- Export settings reference for Media Encoder
- Using the Preset Browser
- Overview of Adobe Media Encoder

## Video Effects Manager in Media Encoder

Search Last updated on Oct 10, 2023

Quickly locate, troubleshoot, and disable incompatible plugins to improve system stability and return to work sooner.

Adobe Media Encoder includes multiple effects that add visual effects, tools, and workflows for video production. In some cases, these effects can make the application crash.

With Effect Manager, after Media Encoder restarts following a crash, a notification identifies the effect that may have failed in the previous session. The prompt also lets you keep the identified effect enabled or disable it for the next startup.

### View list of installed effects

Choose Effect > Video Effect Manager to open a list of installed effects and set whether any effect is enabled or disabled for the next startup.

The Effect Manager dialog shows these effect details:

- Enabled status
- Effect name
- Category
- File Path

For clips, any preset assigned to a custom destination is shared by every clip.

For clips, presets tied to custom destinations apply across all clips.

### Disable effects after a Media Encoder crash

With Video Effects Manager, restarting Media Encoder after a crash displays a notification naming the effect that might have caused the previous session to fail.

The same notification gives you the choice to keep the identified effect, enable it, or disable it for the next startup.

## IRT compliance — Overview

IRT (Institut für Rundfunktechnik) publishes technical guidelines and specifications for Germany's public broadcasters. ARD, ZDF, ORF, and ARTE specify six MXF Profiles for HD program material, and Adobe Media Encoder includes presets that correspond to each profile.

IRT compliance in Media Encoder CC helps content match German broadcast standards. To produce an IRT-compliant output from Media Encoder CC, use one of the six presets; no other method produces that compliant output.

### IRT compliance — Applying an IRT preset to a media file

In Preset Browser panel, enter IRT in the search bar to show the IRT preset list.

1. IRT Presets
   Select a preset, click Preset Settings, and choose an appropriate encoding format to inspect settings for an IRT preset.

2. IRT preset settings
   Place a media source in the Queue panel. Make sure the media file uses an IRT preset.

3. Adding media source
   Select Start Queue to encode the files with IRT presets.

## Apply Content Credentials preferences at export

Search Last updated on Apr 15, 2026

Learn how Export Settings in Adobe Media Encoder applies Content Credentials preferences to exported videos.

In Export Settings, Adobe Media Encoder lets you customize Content Credentials and decide which details are included during media export.

Use either method to open Export Settings:

- Select the output format or preset name
- Open the Queue panel, choose the output, and then choose Edit > Export Settings

Next, in the Export Settings dialog box, choose Content Credentials.

1. Configure and save Content Credentials preferences from the Content Credentials tab.
   Turn on Apply Content Credentials preferences at export.

In Preferences, choose among these options:

- Set Preferences: Opens the Content Credentials preferences webpage; choose there which creator information exports include.
- Refresh: Pulls the latest Content Credentials preferences settings from the web and refreshes the Content Credentials section plus the output summary to show changes.

On the Preferences page, go to Social Media Accounts and select the Connect button beside each account you want linked.

4. Use Connect beside each social media account that should be associated with Content Credentials.
   For Generative AI training and usage, indicate whether my content should be excluded from generative AI model training or use.

Close the browser to return to Export Settings.

After changing CAI preferences online, click Refresh to bring them into Export Settings. Media Encoder caches CAI preferences at launch, so refreshing fetches the newest settings.

7. Example Output Summary showing selected CAI preferences for Behance and LinkedIn accounts.

When the video is exported, customized Content Credentials such as your verified name, social media accounts, and AI usage preferences are added to the video.
