# Rendering in After Effects

A range of rendering options in After Effects can speed the rendering process along. Leaning on the GPU brings both more speed and more precision to how your effects render. Through the Video Rendering and Effects dropdown in the Project Settings dialog box, you get these GPU effect rendering options to pick from:

- Mercury Software Only: effects render on the CPU
- Mercury GPU Acceleration: effects render on the GPU. On macOS, Mercury GPU Acceleration can use OpenCL or Metal. On Windows, GPU effect rendering uses either CUDA or OpenCL based on your selection.

Note

In an 8-bpc project, GPU-accelerated effects can render with slight differences in color precision next to CPU-only rendering. For accurate results, switch the project to 16-bpc or 32-bpc.

With a composition finished, you can output a movie file. Two separate routes lead to outputting one. Pick whichever fits your needs.

A few situations call for a movie file:

You want a top-quality movie — alpha channel or not — or an image sequence headed for a Premiere sequence or for another video editing, compositing, or 3D graphics application.

Building a high-quality movie file means rendering it with the Render Queue. There's more on rendering and exporting through the Render Queue panel elsewhere.

You want a compressed movie bound for the web or for DVD or Blu-ray discs.

Building a high-quality movie file compressed for the web, DVD, or Blu-ray disc means encoding it with the Adobe Media Encoder. There's more on rendering and exporting through Adobe Media Encoder elsewhere.

Note

Certain kinds of exporting skip rendering altogether and serve intermediate stages of a workflow rather than final output. Choosing File > Export > Adobe Premiere Project, for instance, exports your project as an Adobe Premiere project. The project information is then saved with no rendering done. As a rule, data handed off through Dynamic Link goes unrendered.

A movie can come out as one output file holding every rendered frame, or as a sequence of still images — the form you'd choose when producing output for a film recorder.

For output, you can either render your compositions through the After Effects render queue or push your compositions into the Adobe Media Encoder queue carrying the render settings you set in the Render Queue panel.

In the case of the Render Queue, an embedded build of the Adobe Media Encoder is what After Effects uses to encode most movie formats by way of the Render Queue panel. As you handle render and export jobs with the Render Queue panel, that embedded Adobe Media Encoder gets invoked on its own. It surfaces only as the export settings dialog boxes where you set certain encoding and output settings. There's fuller coverage of encoding and compression choices for movies elsewhere.

Note

That embedded build of the Adobe Media Encoder, the one driving export settings inside After Effects output modules, falls short of every feature in the full, stand-alone Adobe Media Encoder application.
