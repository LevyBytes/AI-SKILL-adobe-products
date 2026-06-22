# Firefly Graph Overview

> Adobe Firefly reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Firefly Graph; Firefly Graph overview.

## Firefly Graph

Firefly Graph overview

## Firefly Graph overview

Explore Firefly Graph, the visual canvas for creating, running, and sharing AI-powered creative workflows.

Firefly Graph gives creative professionals a visual way to design and understand AI-powered creative workflows by connecting individual actions into structured, repeatable processes they can refine, reuse, and share.

For building, executing, and sharing AI-powered creative workflows, Firefly Graph gives users full precision and repeatability through a visual system. Rather than relying on a single prompt as generation tools often do, Firefly Graph lets you create step-by-step workflows, called graphs, by connecting individual actions, or nodes, on a flexible canvas. Every creative decision is recorded, repeatable, and editable at any stage of the process.

With 250+ nodes spanning top AI models from Adobe and leading partners plus professional editing tools from across Creative Cloud, Firefly Graph serves creative professionals who need consistency, control, and scale while maintaining quality.

You can learn more about Firefly Graph through the Firefly Graph microsite.

### How Firefly Graph works

A graph arranges creative decisions visually as a sequence of individual actions on a canvas. Each action is a node. Connected nodes create a workflow: a complete end-to-end set of creative steps that users can run, refine, save, and share.

A typical workflow uses this pattern:

1. Open a blank canvas and add your first node: Begin with an empty graph. Use the node library to locate the action you need, such as uploading a source image, creating an image with Firefly, or using a subject-selection model.
2. Connect nodes to build your workflow: Link node outputs to inputs to chain the steps. For example: Input Image → Segmentation → Apply Mask → Hue Shift → Composite Layers → Output. The next step receives the output created by the previous node.
3. Add controls for adjustable variables: Swap static values for interactive controls, including sliders, angle dials, and color pickers, so a person running the workflow can tune key parameters without opening the graph internals.
4. Run the graph and preview outputs at each node: Nodes that rely on AI models or external API services require generative credits and show a Run button. Non-AI steps run right away. Before the full workflow finishes, you can preview the output at any node.
5. Change a decision, re-run, and iterate: Since the graph captures every step, changing an earlier decision, such as replacing a source image, choosing another mask, or adjusting a color, automatically runs all downstream steps again. The whole workflow updates instantly.

### Key concepts

### Nodes

A node is one creative action inside a workflow. In the AI generation category, examples include subject selection, upscaling, Gemini LLM prompt generation, and Firefly Text to Image. Nodes can also be Creative Cloud editing operations, including compositing, Gaussian blur, hue shifting, color grading, and masking, or utility actions such as list item selection, resizing, and layer blending.

The Firefly Graph node library contains 250+ nodes across Creative Cloud editing tools, shader nodes, math and compositing utilities, and AI models from Adobe and partners. Broader video and 3D support is planned on the roadmap.

### Connections and lists

Users create links by drawing connections from an output port to an input port. If a node returns multiple outputs, such as a subject-selection model finding two subjects in one image, those outputs travel as a list. A double-line connection represents lists. To choose which list item continues through the rest of the workflow, use a Get Item from List node or an input slider.

### Input controls

Many nodes provide numerical or text inputs. Instead of hard-coding a value, connect an input control, such as a slider, angle dial, text field, or color picker, to make the parameter interactive. On the canvas, input controls appear as standalone nodes that feed their value into the target node. This provides the basis for reusable, adjustable workflows.

### Subgraphs and capsules

When workflows become complex, you can select a set of nodes and collapse that set into a subgraph. Only the inputs and outputs you choose are exposed by the subgraph, while internal steps stay hidden. After a workflow and its exposed controls are packaged for sharing, it is called a capsule, meaning a self-contained creative tool that any team member can run without knowing how it was built.

### Key capabilities

250+ node library: Work with AI models from Adobe Firefly and leading third-party providers together with professional editing actions from Photoshop, Illustrator, Premiere, and more, all from one place.

Repeatable, precise workflows: Each creative decision is stored as a node. When you change any step, such as swapping an image, shifting a color, or adjusting a mask, the full workflow reruns automatically with complete fidelity.

Custom input controls: Add sliders, dials, and pickers to any parameter so you can create interactive control panels for workflows without revealing the complexity of the underlying graph.

Subgraphs: Turn complex groups of nodes into reusable subgraphs. Share them as key components so creative teams can run sophisticated workflows later without having to build them from scratch in future graphs.

AI model chaining: Link LLM prompt-generation nodes directly to image or video generation nodes. Create fully automated pipelines that move from concept to finished visual in one run.

### Who Firefly Graph is for

Firefly Graph is intended for creative professionals, creative technologists, and creative production leads who influence scaled content creation. It works best for people who need more control over creative process than prompt-based tools alone offer.

Creative practitioners and technologists who want to build precise, repeatable workflows and distribute them as reusable tools for their broader teams.

Studio heads and creative production leads who need to convert top creative workflows into organizational assets that every team member can run consistently.

Creative decision-makers (CMOs, IT leaders) who want complete visibility into generative AI usage, with governance, reporting, and control across the organization.

Note

Firefly Graph is built specifically for upstream creative work: designing, authoring, and templating workflows. Use Firefly Creative Production for Enterprise when published workflows need high-volume batch execution.

### Common use cases

- Subject isolation and compositing In one repeatable graph, select subjects automatically, apply masks, and place the results onto custom backgrounds with complete color control.

- AI-generated image effects At scale, create stylized editorial images by combining Firefly generation with hue shifting, Gaussian blur, and color sampling.

- LLM-to-image pipelines For fully automated creative output, use a Gemini or other LLM node to create an optimized prompt and send it directly into a Firefly generation node.

- Reusable campaign templates Create a complete creative workflow once, expose controls, package it as a capsule, and share it so each designer on the team can independently produce on-brand assets.

- Dynamic color exploration Sample colors from source images, create analogous or complementary palettes, and apply them back to backgrounds and overlays, with everything connected in one graph.

- Multi-asset production For multiple asset variations from a single workflow run, use generation, retouching, compositing, and export nodes to form an end-to-end pipeline.
