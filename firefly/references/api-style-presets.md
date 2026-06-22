# Style Presets

> Adobe Firefly reference. Original prose; identifiers preserved verbatim.

Style presets adjust the visual appearance of images produced by generation.

## Understanding style presets

Firefly includes style presets for the [Generate Images API][1], allowing output images to take on a selected visual style or mood. Supplying those presets in the request gives you prompt-level generation plus additional control over the resulting variations.

In a Generate Images API request, style presets belong in the `presets` array. Every preset listed there is applied to the generated image. Change the `strength` value when you want to vary how much influence the presets have.

Presets request parameter

```json
// ... API request cURL ...
--data '{
    "prompt": "a puppy dressed as a renaissance artist",
    "numVariations": 4,
    "style": {
        // array of style presets for image variations
        "presets": [
            "bw", "fantasy", "dramatic_light"
        ],
        "strength": 100
    }
}'
```

## Style Presets examples

The available style presets and representative generated images are listed below. Use snake_case preset names when calling the API.

| --- | --- | --- |
| [Figure: Graphic](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/guides/images/styles/2x/graphic.png) graphic | [Figure: Wireframe](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/guides/images/styles/2x/wireframe.png) wireframe | [Figure: Vector look](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/guides/images/styles/2x/vector-look.png) vector_look
| [Figure: Black and white](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/guides/images/styles/2x/black-and-white.png) bw | [Figure: Cool tone](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/guides/images/styles/2x/cool-tone.png) cool_colors | [Figure: Golden](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/guides/images/styles/2x/golden.png) golden
| [Figure: Monochromatic](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/guides/images/styles/2x/monochromatic.png) monochromatic | [Figure: Muted color](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/guides/images/styles/2x/muted-color.png) muted_color | [Figure: Pastel color](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/guides/images/styles/2x/pastel-color.png) pastel_color
| [Figure: Toned image](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/guides/images/styles/2x/toned-image.png) toned_image | [Figure: Vibrant colors](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/guides/images/styles/2x/vibrant-colors.png) vibrant_colors | [Figure: Warm tone](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/guides/images/styles/2x/warm-tone.png) warm_tone
| [Figure: Closeup](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/guides/images/styles/2x/closeup.png) closeup | [Figure: Knolling](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/guides/images/styles/2x/knolling.png) knolling | [Figure: Landscape photography](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/guides/images/styles/2x/landscape-photography.png) landscape_photography
| [Figure: Macrophotography](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/guides/images/styles/2x/macrophotography.png) macrophotography | [Figure: Photographed through window](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/guides/images/styles/2x/photographed-through-window.png) photographed_through_window | [Figure: Shallow depth of field](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/guides/images/styles/2x/shallow-depth-of-field.png) shallow_depth_of_field
| [Figure: Shot from above](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/guides/images/styles/2x/shot-from-above.png) shot_from_above | [Figure: Shot from below](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/guides/images/styles/2x/shot-from-below.png) shot_from_below | [Figure: Surface detail](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/guides/images/styles/2x/surface-detail.png) surface_detail
| [Figure: Wide angle](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/guides/images/styles/2x/wide-angle.png) wide_angle | [Figure: Beautiful](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/guides/images/styles/2x/beautiful.png) beautiful | [Figure: Bohemian](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/guides/images/styles/2x/bohemian.png) bohemian
| [Figure: Chaotic](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/guides/images/styles/2x/chaotic.png) chaotic | [Figure: Dais](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/guides/images/styles/2x/dais.png) dais | [Figure: Divine](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/guides/images/styles/2x/divine.png) divine
| [Figure: Eclectic](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/guides/images/styles/2x/eclectic.png) eclectic | [Figure: Futuristic](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/guides/images/styles/2x/futuristic.png) futuristic | [Figure: Kitschy](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/guides/images/styles/2x/kitschy.png) kitschy
| [Figure: Nostalgic](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/guides/images/styles/2x/nostalgic.png) nostalgic | [Figure: Simple](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/guides/images/styles/2x/simple.png) simple | [Figure: Antique photo](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/guides/images/styles/2x/antique-photo.png) antique_photo
| [Figure: Bioluminescent](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/guides/images/styles/2x/bioluminescent.png) bioluminescent | [Figure: Bokeh effect](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/guides/images/styles/2x/bokeh-effect.png) bokeh | [Figure: Color explosion](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/guides/images/styles/2x/color-explosion.png) color_explosion
| [Figure: Dark](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/guides/images/styles/2x/dark.png) dark | [Figure: Faded image](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/guides/images/styles/2x/faded-image.png) faded_image | [Figure: Fisheye](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/guides/images/styles/2x/fisheye.png) fisheye
| [Figure: Gomori photography](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/guides/images/styles/2x/gomori-photography.png) gomori_photography | [Figure: Grainy film](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/guides/images/styles/2x/grainy-film.png) grainy_film | [Figure: Iridescent](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/guides/images/styles/2x/iridescent.png) iridescent
| [Figure: Isometric](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/guides/images/styles/2x/isometric.png) isometric | [Figure: Misty](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/guides/images/styles/2x/misty.png) misty | [Figure: Neon](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/guides/images/styles/2x/neon.png) neon
| [Figure: Otherworldly depiction](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/guides/images/styles/2x/otherworldly-depiction.png) otherworldly_depiction | [Figure: Ultraviolet](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/guides/images/styles/2x/ultraviolet.png) ultraviolet | [Figure: Underwater](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/guides/images/styles/2x/underwater.png) underwater
| [Figure: Backlighting](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/guides/images/styles/2x/backlighting.png) backlighting | [Figure: Dramatic light](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/guides/images/styles/2x/dramatic-lighting.png) dramatic_light | [Figure: Golden hour](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/guides/images/styles/2x/golden-hour.png) golden_hour
| [Figure: Harsh light](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/guides/images/styles/2x/harsh-light.png) harsh_light | [Figure: Long-time exposure](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/guides/images/styles/2x/long-time-exposure.png) long | [Figure: Low lighting](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/guides/images/styles/2x/low-lighting.png) low_lighting
| [Figure: Multiexposure](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/guides/images/styles/2x/multiexposure.png) multiexposure | [Figure: Studio light](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/guides/images/styles/2x/studio-light.png) studio_light | [Figure: Surreal lighting](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/guides/images/styles/2x/surreal-lighting.png) surreal_lighting
| [Figure: 3d patterns](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/guides/images/styles/2x/3d-patterns.png) 3d_patterns | [Figure: Charcoal](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/guides/images/styles/2x/charcoal.png) charcoal | [Figure: Claymation](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/guides/images/styles/2x/claymation.png) claymation
| [Figure: Fabric](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/guides/images/styles/2x/fabric.png) fabric | [Figure: Fur](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/guides/images/styles/2x/fur.png) fur | [Figure: Guilloche patterns](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/guides/images/styles/2x/guilloche-patterns.png) guilloche_patterns
| [Figure: Layered paper](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/guides/images/styles/2x/layered-paper.png) layered_paper | [Figure: Marble](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/guides/images/styles/2x/marble.png) marble_sculpture | [Figure: Metal](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/guides/images/styles/2x/metal.png) made_of_metal
| [Figure: Origami](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/guides/images/styles/2x/origami.png) origami | [Figure: Paper mache](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/guides/images/styles/2x/paper-mache.png) paper_mache | [Figure: Polka-dot pattern](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/guides/images/styles/2x/polka-dot-pattern.png) polka
| [Figure: Strange patterns](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/guides/images/styles/2x/strange-patterns.png) strange_patterns | [Figure: Wood carving](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/guides/images/styles/2x/wood-carving.png) wood_carving | [Figure: Yarn](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/guides/images/styles/2x/yarn.png) yarn
| [Figure: Art deco](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/guides/images/styles/2x/art-deco.png) art_deco | [Figure: Art nouveau](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/guides/images/styles/2x/art-nouveau.png) art_nouveau | [Figure: Baroque](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/guides/images/styles/2x/baroque.png) baroque
| [Figure: Bauhaus](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/guides/images/styles/2x/bauhaus.png) bauhaus | [Figure: Constructivism](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/guides/images/styles/2x/constructivism.png) constructivism | [Figure: Cubism](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/guides/images/styles/2x/cubism.png) cubism
| [Figure: Cyberpunk](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/guides/images/styles/2x/cyberpunk.png) cyberpunk | [Figure: Fantasy](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/guides/images/styles/2x/fantasy.png) fantasy | [Figure: Fauvism](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/guides/images/styles/2x/fauvism.png) fauvism
| [Figure: Film noir](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/guides/images/styles/2x/film-noir.png) film_noir | [Figure: Glitch art](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/guides/images/styles/2x/glitch-art.png) glitch_art | [Figure: Impressionism](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/guides/images/styles/2x/impressionism.png) impressionism
| [Figure: Industrial](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/guides/images/styles/2x/industrial.png) industrialism | [Figure: Maximalism](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/guides/images/styles/2x/maximalism.png) maximalism | [Figure: Minimalism](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/guides/images/styles/2x/minimalism.png) minimalism
| [Figure: Modern art](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/guides/images/styles/2x/modern-art.png) modern_art | [Figure: Modernism](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/guides/images/styles/2x/modernism.png) modernism | [Figure: Neo-expressionism](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/guides/images/styles/2x/neoexpressionism.png) neo
| [Figure: Pointillism](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/guides/images/styles/2x/pointillism.png) pointillism | [Figure: Psychedelic](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/guides/images/styles/2x/psychedelic.png) psychedelic | [Figure: Science fiction](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/guides/images/styles/2x/science-fiction.png) science_fiction
| [Figure: Steampunk](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/guides/images/styles/2x/steampunk.png) steampunk | [Figure: Surrealism](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/guides/images/styles/2x/surrealism.png) surrealism | [Figure: Synthetism](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/guides/images/styles/2x/synthetism.png) synthetism
| [Figure: Synthwave](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/guides/images/styles/2x/synthwave.png) synthwave | [Figure: Vaporwave](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/guides/images/styles/2x/vaporwave.png) vaporwave | [Figure: Acrylic paint](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/guides/images/styles/2x/acrylic-paint.png) acrylic_paint
| [Figure: Bold lines](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/guides/images/styles/2x/bold-lines.png) bold_lines | [Figure: Chiaroscuro](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/guides/images/styles/2x/chiaroscuro.png) chiaroscuro | [Figure: Color shift art](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/guides/images/styles/2x/color-shift-art.png) color_shift_art
| [Figure: Daguerreotype](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/guides/images/styles/2x/daguerreotype.png) daguerreotype | [Figure: Digital fractal](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/guides/images/styles/2x/digital-fractal.png) digital_fractal | [Figure: Doodle drawing](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/guides/images/styles/2x/doodle-drawing.png) doodle_drawing
| [Figure: Double exposure](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/guides/images/styles/2x/double-exposure.png) double_exposure_portrait | [Figure: Fresco](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/guides/images/styles/2x/fresco.png) fresco | [Figure: Geometric pen](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/guides/images/styles/2x/geometric-pen.png) geometric_pen
| [Figure: Halftone](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/guides/images/styles/2x/halftone.png) halftone | [Figure: Ink](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/guides/images/styles/2x/ink.png) ink | [Figure: Light painting](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/guides/images/styles/2x/light-painting.png) light_painting
| [Figure: Line drawing](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/guides/images/styles/2x/line-drawing.png) line_drawing | [Figure: Linocut](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/guides/images/styles/2x/linocut.png) linocut | [Figure: Oil paint](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/guides/images/styles/2x/oil-paint.png) oil_paint
| [Figure: Paint Spattering](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/guides/images/styles/2x/paint-spattering.png) paint_spattering | [Figure: Painting](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/guides/images/styles/2x/painting.png) painting | [Figure: Palette knife](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/guides/images/styles/2x/palette-knife.png) palette_knife
| [Figure: Photo manipulation](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/guides/images/styles/2x/photo-manipulation.png) photo_manipulation | [Figure: Scribble texture](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/guides/images/styles/2x/scribble-texture.png) scribble_texture |[Figure: Sketch](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/guides/images/styles/2x/sketch.png) sketch
| [Figure: Splattering](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/guides/images/styles/2x/splattering.png) splattering | [Figure: Stippling](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/guides/images/styles/2x/stippling.png) stippling_drawing | [Figure: Watercolor](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/guides/images/styles/2x/watercolor.png) watercolor
| [Figure: 3d](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/guides/images/styles/2x/3d.png) 3d | [Figure: Anime](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/guides/images/styles/2x/anime.png) anime | [Figure: Cartoon](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/guides/images/styles/2x/cartoon.png) cartoon
| [Figure: Cinematic](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/guides/images/styles/2x/cinematic.png) cinematic | [Figure: Comic book](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/guides/images/styles/2x/comic-book.png) comic_book | [Figure: Concept art](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/guides/images/styles/2x/concept-art.png) concept_art
| [Figure: Cyber matrix](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/guides/images/styles/2x/cyber-matrix.png) cyber_matrix | [Figure: Digital art](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/guides/images/styles/2x/digital-art.png) digital_art | [Figure: Flat design](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/guides/images/styles/2x/flat-design.png) flat_design
| [Figure: Geometric](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/guides/images/styles/2x/geometric.png) geometric | [Figure: Glassmorphism](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/guides/images/styles/2x/glassmorphism.png) glassmorphism | [Figure: Glitch graphic](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/guides/images/styles/2x/glitch-graphic.png) glitch_graphic
| [Figure: Graffiti](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/guides/images/styles/2x/graffiti.png) graffiti | [Figure: Hyper realistic](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/guides/images/styles/2x/hyper-realistic.png) hyper_realistic | [Figure: Interior design](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/guides/images/styles/2x/interior-design.png) interior_design
| [Figure: Line gradient](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/guides/images/styles/2x/line-gradient.png) line_gradient | [Figure: Low poly](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/guides/images/styles/2x/low-poly.png) low_poly | [Figure: Newspaper collage](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/guides/images/styles/2x/newspaper-collage.png) newspaper_collage
| [Figure: Optical illusion](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/guides/images/styles/2x/optical-illusion.png) optical_illusion | [Figure: Pattern pixel](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/guides/images/styles/2x/pattern-pixel.png) pattern_pixel | [Figure: Pixel art](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/guides/images/styles/2x/pixel-art.png) pixel_art
| [Figure: Pop art](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/guides/images/styles/2x/pop-art.png) pop_art | [Figure: Product photo](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/guides/images/styles/2x/product-photo.png) product_photo | [Figure: Psychedelic background](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/guides/images/styles/2x/psychedelic-background.png) psychedelic_background
| [Figure: Psychedelic wonderland](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/guides/images/styles/2x/psychedelic-wonderland.png) psychedelic_wonderland | [Figure: Scandinavian](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/guides/images/styles/2x/scandinavian.png) scandinavian | [Figure: Splash images](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/guides/images/styles/2x/splash-images.png) splash_images
| [Figure: Stamp](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/guides/images/styles/2x/stamp.png) stamp | [Figure: Trompe l'oeil](https://raw.githubusercontent.com/AdobeDocs/ffs-firefly-api/main/src/pages/guides/images/styles/2x/trompe-loeil.png) trompe_loeil

## Concepts in action

This exercise uses style presets to create several generated image variations.

Before you start

For the walkthrough, have a Firefly **Client ID** and **Access Token** ready. The [Authentication Guide][2] explains how to retrieve them. **Keep these credentials secure, and do not place them in client-side or public code.**

1. Open a secure terminal first, then `export` your **Client ID** and **Access Token** as environment variables:

```bash

```

2. Send a request to the Generate Images API. This example uses a Shakespearean puppy prompt and supplies multiple presets whose effects are combined:

```bash
curl --location 'https://firefly-api.adobe.io/v3/images/generate-async' \
--header 'Content-Type: application/json' \
--header 'Accept: application/json' \
--header "x-api-key: $FIREFLY_SERVICES_CLIENT_ID" \
--header "Authorization: Bearer $FIREFLY_SERVICES_ACCESS_TOKEN" \
--data '{
    "prompt": "a puppy dressed as a renaissance artist",
    "numVariations": 4,
    "style": {
        "presets": [
            "bw", "fantasy", "dramatic_light"
        ]
    }
}'
```

For the asynchronous job, the API returns a quick response like this:

```json
{
  "jobId": "<YOUR_JOB_ID>",
  "statusUrl": "https://firefly-epo854211.adobe.io/v3/status/urn:ff:jobs:...",
  "cancelUrl": "https://firefly-epo854211.adobe.io/v3/cancel/urn:ff:jobs:..."
}
```

3. Use the `jobId` to retrieve the result:

NOTE

With `numVariations` set to four, the result is a four-image set for comparison, returned as four URLs.

```bash
curl -X GET "https://firefly-api.adobe.io/v3/status/<YOUR_JOB_ID>" \
    -H "x-api-key: $FIREFLY_SERVICES_CLIENT_ID" \
    -H "Authorization: Bearer $FIREFLY_SERVICES_ACCESS_TOKEN" \
    -H "Content-Type: application/json"
```

The returned output should resemble the example shown below. The prompt for the renaissance puppy reflects every preset defined in the request.

**Sample output**

![A renaissance artist puppy generated with presets][3]

[1]: ../../../api/index.md
[2]: ../../../getting-started/index.md
[3]: ../../images/puppy-renaissance-artist.jpeg
