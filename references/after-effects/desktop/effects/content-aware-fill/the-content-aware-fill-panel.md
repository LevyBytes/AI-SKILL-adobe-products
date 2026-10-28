# The Content-Aware Fill panel

Bring up the content aware fill panel through Windows > Content-Aware Fill.

Strip unwanted objects out of the footage with little fuss, and let the fill melt smoothly into the frames around it.

- Fill Target: the preview showing the region Content-Aware Fill is studying. A pink outline marks off the transparent area.
- Alpha Expansion: reach for this to grow the area being filled. Precise masking isn't something Content-Aware Fill demands, and results can improve when the region takes in pixels beyond the object you're pulling out.

  - Object: pulls an object out of the footage. It packs the transparent area with pixels gathered from the current frame and its neighbors. By estimating how the scene behind the object moves, it lands on suitable color values. It shines on moving subjects — a car traveling a road, say.
  - Surface: swaps out an object's surface. Much like Object, it draws pixels from neighboring frames, but it leans on the motion estimated in the comp beneath the transparent area. Save it for surfaces that stay flat and still — a stain on a shirt, a sign on a building.
  - Edge Blend: feathers the edge pixels around the hole. It packs the transparent area by sampling pixels along its border, mixing them together, and renders quickly. It's the pick for static objects sitting on textureless surfaces, such as text on paper.

- Lighting Correction: switch this on to cope with shifting light across your footage. Folding lighting correction into the fills lets you cleanly strip objects from footage whose lighting jumps frame to frame. Three correction strengths are on offer – Subtle, Moderate, and Strong. A good opening move is Strong; should it overcorrect the footage, drop down to Moderate or Subtle.
- Range: pick whether the fill layer renders only over the work area or across the whole composition. Held to the work area, Content-Aware Fill is barred from drawing in content beyond it.
- Create Reference Frame: builds a one-frame fill layer frame and opens it inside Photoshop. Reference frames exist to show Content-Aware Fill what the fill layer ought to look like. Suppose a video has a busy background and Content-Aware Fill can't deliver what you're after — lean on Photoshop tools like clone and patch to craft a better outcome on the reference frame. Once that's set, generate a fresh fill layer. Content-Aware Fill carries the pixels off the reference frame and onto new frames in the fill layer. On certain shots you might lay down several reference frames wherever the lighting or camera angle shifts. Bear in mind any other method of making single-frame layers can steer content-aware fill too. It honors whatever sits in those layers as a guide. This just offers a shortcut for doing so.
- Generate Fill Layer: spins up a new fill layer. Down at the panel's foot, analysis and rendering progress show up. Content-Aware Fill puts the frame beneath the Current-Time Indicator (CTI) first in line for analysis and rendering. As the fill renders, you can slide the CTI onto another frame to bump it up the queue, which lets you judge whether things look right before the whole fill layer finishes.
