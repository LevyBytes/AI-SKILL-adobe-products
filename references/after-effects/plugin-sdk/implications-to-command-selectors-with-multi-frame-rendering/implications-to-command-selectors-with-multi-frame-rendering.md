# Multi-Frame Rendering in AE - Implications to Command Selectors with Multi-Frame Rendering

The main thread still receives UI selectors, but `PF_Cmd_SEQUENCE_SETUP`, `PF_Cmd_SEQUENCE_RESETUP`, `PF_Cmd_SEQUENCE_SETDOWN`, `PF_Cmd_SMART_PRE_RENDER`, `PF_Cmd_RENDER` and `PF_Cmd_SMART_RENDER` can arrive on several threads concurrently while those UI selectors are also being processed — so each of these selectors has to be thread safe.

Only the main thread ever receives the `PF_Cmd_GLOBAL_SETUP` and `PF_Cmd_GLOBAL_SETDOWN` selectors, and they never coincide with any other selector.
