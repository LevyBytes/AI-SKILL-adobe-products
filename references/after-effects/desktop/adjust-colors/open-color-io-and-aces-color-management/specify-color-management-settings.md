# Specify color management settings

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
