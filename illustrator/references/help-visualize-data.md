# Data Sets And Label Options, Create Graphs, Add Graph Data, Add Graph Labels And Data Sets ...

> Adobe Illustrator reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Data sets and label options; Create graphs; Add graph data; Add graph labels and data sets; Adjust decimal digits and column width; Format columns, bars, and lines; Select parts of a graph; Change graph types; Change graph value axes; Assign different scales to value axes; Change the position of legend in graphs; Combine different graph types; Add drop shadows to graphs; Apply marker designs to graphs; Format pie graphs; Format graph text; Reuse graph designs.

## Data sets and label options

In Illustrator, clear graphs depend on well-structured data and label formatting that describes comparisons accurately.

### Graph labels

Graph labels identify compared data sets and comparison categories, using words or numbers.

A. Data set labels B. Blank cell C. Category labels

### Data sets

Column, bar, line, scatter, pie, radar, and area graph types each map data sets and labels in their own way. To reach the choices, use the Column Graph tool and pick a graph type.

Choose a graph type so Illustrator builds the graph from your data.

Pick the graph type that matches how your data should be drawn.

Graph type

Data representation

Values

Column Graph

The value determines column height.

Values must all be positive or all be negative. Negative entries draw as inverted columns.

Stacked Column Graph

Column height carries the value, and each data set appears as a stacked segment.

Use only positive values together or only negative values together.

Bar Graph

Value is shown by bar length.

Use either all positive values or all negative values. Negative bars extend to the left.

Stacked Bar Graph

Bar length carries the values, and stacked segments correspond to each data set.

Use values that are all positive or all negative.

Line Graph

Each data column becomes its own line.

Use either positive values only or negative values only.

Area Graph

Each data row becomes one filled area.

Keep the values all positive or all negative.

Scatter Graph

Numerical values appear on both axes. Data from the first column supplies the Y axis, and data from the second column supplies the X axis.

Use positive values only or negative values only.

Pie Graph

Each row produces a pie graph sized by that row's total. A single row makes one pie; additional rows make additional pies.

Use values that are all positive or all negative. Category labels supply graph names.

Radar Graph

Each axis is a variable. Illustrator plots values along the axes and connects them into a web.

Use values that are all positive or all negative.

| --- | --- | --- |

## Create graphs

Create column, line, pie, scatter, and other graph types in Adobe Illustrator to visualize data.

Illustrator can turn entered or imported data into graph types such as column, line, pie, and scatter graphs.

Before you begin

Prepare the data, or copy it from a spreadsheet. The Graph Data window is where you enter or revise the values.

Hold down the Column Graph tool to reveal the full graph-tool list.

Use the expanded Column Graph tool to review Illustrator's available graph types.

Open the Column Graph tool group to inspect the graph types Illustrator offers.

Drag diagonally from one corner to the opposite corner when you need to define graph dimensions. That sizing affects the graph only, excluding labels and the legend.

Tip

You can instead click the location for the graph, type width and height values, and choose OK.

Put the graph data into the Graph Data window. Arrange entries in the order required by the selected graph type.

Choose Apply, or press Enter on the numeric keypad, to build the graph.

Use Apply to turn the values in the Graph Data window into the graph.

Apply reads the values from the Graph Data window and creates the graph.

## Add graph data

Add graph data in Adobe Illustrator.

Before you begin

Confirm that a graph already exists and was made with the Column Graph tool.

With the Selection tool, select the graph, then choose Object > Graph > Data to display the Graph Data window.

Choose a worksheet cell and type the value in the text box.

Use these keys for navigation:

- Tab: enters the data and moves to the next cell in the same row.
- Enter or Return: enters the data and selects the next cell in the same column.
- Arrow keys: move between cells or choose another cell for data entry.

Use the Graph Data window when you need to enter, paste, or import values for the graph.

The Graph Data window supports entry, paste, and import workflows for graph values. Tip

Data from Lotus® 1-2-3 or Microsoft Excel can also be copied. In the Graph Data window, select the target cell and choose Edit > Paste to insert the data. For import, save the rows as line breaks in a tab-separated text file. Write values with decimal points or commas; for example, use 732000 and not 732,000. Select Import Data, and choose your file.

Regenerate the graph with Apply, Enter (Windows), or Return (macOS).

To swap columns with rows, choose Transpose row/column. For scatter graphs, choose Switch x/y to exchange the x and y axes.

## Add graph labels and data sets

Add and format data-set and category labels in Adobe Illustrator graphs.

Before you begin

Confirm that a graph already exists and was made with the Column Graph tool.

Labels can identify data sets and categories. You can also add multiple rows or columns when the graph needs data comparisons.

Use the Selection tool to select a graph.

Choose Object > Graph > Data.

Enter data-set labels in the first row of the Graph Data window. These entries appear in the graph's legend. Leave the first row blank when no legend should be displayed.

Depending on the graph type, category labels appear on the horizontal or vertical axis. Radar graphs turn each category label into its own axis. Put category labels in the left column; these labels often describe time units such as days, months, or years.

Put straight quotes around numbers that should be treated as labels. For example, "2013".

Use the vertical bar (|) to insert line breaks in a label. Example: Total|Sales|2023 displays as: Total Sales 2023

Note

Pie graphs accept only one data series, meaning one row or column of values. Scatter graphs need paired X and Y values, so labels can work differently.

## Adjust decimal digits and column width

Adjust decimal digits and graph-data column width in Adobe Illustrator.

Improve readability by setting decimal precision and column width in the Graph Data window.

Select the graph, then choose Object > Graph > Data to display the Graph Data window.

To change decimal precision, choose Cell style

then type a value from 0 through 10 in the Number of decimals field.

Decimal Places controls how many digits follow the decimal point, and Column Width controls the digit count available in each column.

Decimal Places sets precision after the decimal point; Column Width sets the number of digits a column can show.

To change column width, choose the Cell style icon.

Enter a value from 0 through 20 in the Column width field.

Tip

For manual resizing, pause on the column edge until the pointer becomes a double-arrow icon, then drag.

## Format columns, bars, and lines

Format column, bar, and line graphs by changing spacing and tailoring line and data-point appearance.

### Adjust column, bar, and cluster spacing

Select the graph with the Selection tool.

Choose Object > Graph > Type.

In the Graph Type dialog box, set Column Width, Bar Width, or Cluster Width to a value from 1% through 1000%.

Note

Values below 100% create space between elements. At 100%, elements touch without gaps; above 100%, they overlap.

### Control column, bar, and lines overlap

Select the graph with the Selection tool.

Choose Object > Graph > Type.

In the Graph Type dialog box, use these settings:

- First Row in Front: moves the first data group ahead of the others in the graph.
- First Column in Front: keeps first-column data readable when column or cluster width values above 100% make items overlap.

### Adjust lines and data points in a line, scatter, and radar graph

Select the graph with the Selection tool.

Choose Object > Graph > Type.

In the Graph Type dialog box, configure any of these options:

- Mark Data Points: places square markers on each data point.
- Connect Data Points: links data points with line segments.
- Edge-to-Edge Lines: stretches lines across the full horizontal axis. Scatter graphs don't offer this option.
- Draw Filled Lines: makes wider filled lines when Connect Data Points is on.

## Select parts of a graph

Select individual graph elements in Adobe Illustrator.

An Illustrator graph behaves as a grouped object tied to its data. Its components stay related, and the graph plus legends form one group. To modify part of the graph, choose the target elements without ungrouping the graph.

Choose the Group Selection tool.

Click the legend for the columns.

Click the legend again to add all columns grouped with that legend.

To remove one part from the current group selection, switch to the Direct Selection tool and Shift-click the object.

## Change graph types

Switch graph type when a different presentation makes data easier to read.

Select a graph with the Selection tool.

Double-click the Column Graph tool.

Tip

Object > Graph > Type also opens graph settings.

In the Graph Type dialog box, choose the graph type icon you want in the Type section, then choose OK.

Select a graph type and style that best visualizes your data.

Pick the graph type and style used to present the data visually. Note

If graph objects use gradients, converting the graph to another type can produce unexpected results. To avoid that, wait to apply gradients until the graph is complete, or select the graph objects with the Direct Selection tool and apply the gradient again.

## Change graph value axes

Customize the value axis on a graph in Illustrator for clearer scale and readability.

Pie graphs are the exception: every other graph type includes a value axis showing measurement units. You can place that axis on one side or on both sides. Bar, stacked bar, column, stacked column, line, and area graphs also include a category axis for data categories.

Tick mark quantity and length can be adjusted per axis, and axis numbers can receive a prefix or suffix.

Select the graph with the Selection tool.

Choose Object > Graph > Type.

In the Graph Type dialog, set Value Axis to On Left Side, On Right Side, or On Both Sides.

To adjust tick marks and labels, choose an axis from the dropdown menu and configure:

- Tick Values: use Override Calculated Values when you need manual minimum, maximum, and division counts between labels.
- Tick Marks: set tick-mark length and count per division. For category axes, enable Draw tick marks between labels to change tick placement.
- Add Labels: apply a prefix or suffix to value-axis numbers. For example, place $ or % with the axis numbers.

Use Value Axis settings when graph scale and readability need refinement.

Value Axis settings adjust graph scale and make the graph easier to read.

## Assign different scales to value axes

Build graphs with separate scales on each value axis so one chart can show data ranges that differ.

If the graph has value axes on both sides, separate data series can be assigned to each axis. Illustrator scales each side independently, which helps when a chart combines more than one graph type.

Hold down Graph Tool in the Tools panel and choose a graph tool from the full list of graph types.

Drag on the artboard to draw the graph and define its size.

In the Graph Data window, enter data with each column representing a separate dataset.

Choose Apply or press Enter to create the graph.

Select the entire graph with the Selection tool.

Choose Object > Graph > Type to open the Graph Type dialog box, then select a suitable graph type.

Under Value Axis, choose Separate Scales so each axis can use its own scale.

Assign different scales to the Value Axis in the Graph Type dialog box.

Set Value Axis to use different scales in the Graph Type dialog box.

Change any other graph settings needed, then choose OK.

## Change the position of legend in graphs

Move a graph legend in Adobe Illustrator from the right edge to the top.

With the Selection tool, choose the graph.

Choose Object > Graph > Type.

In the Graph Type dialog box, enable Add Legend Across Top, then choose OK.

Add Legend Across Top moves the legend so it appears above the graph.

With Add Legend Across Top selected, Illustrator places the legend at the graph's top.

## Combine different graph types

Use mixed graph styles in Illustrator so complex data can appear clearly in one visual layout.

Choose the Group Selection tool.

Click the legend for the data set whose graph type you need to change.

Click that legend a second time so all columns associated with it are included.

- Choose Object > Graph > Type.
  Multiple data sets can be shown more clearly in a single layout by combining graph types.

A single visual layout can communicate several data sets clearly when different graph types are combined.

Choose the graph type, set its options, and then choose OK.

Note

When stacked column graphs are used alongside other graph types, put every stacked data set on the same axis. Mixing right-axis and left-axis stacked data can make column heights look inaccurate or cause the columns to overlap.

## Add drop shadows to graphs

Add shadows behind graphs when you want extra visual depth and easier reading.

Drop shadows can be applied behind graph columns, bars, lines, or full pie graphs.

Using the Selection tool, select a graph.

In the Tools panel, double-click the Graph tool.

When the Graph Type dialog box appears, turn on Add Drop Shadow, then choose OK.

To add shadows to the selected graph, enable Add Drop Shadow in the Graph Type dialog box.

Enable Add Drop Shadow in the Graph Type dialog box when the selected graph needs shadows.

## Apply marker designs to graphs

Use custom marker designs on line and scatter graphs so data points stand out more clearly and fit the visual style.

Create a column design.

With Tools panel > Group Selection tool, select the graph's markers and legends. Leave plot lines unselected so the marker design can be applied properly.

Choose Object > Graph > Marker.

Pick a design, then choose OK.

Tip

For a marker design, add a rectangle at the very back to define the marker's size. Illustrator scales the design until that rectangle matches the default square marker size used in the graph.

## Format pie graphs

Format pie graphs in Adobe Illustrator by controlling legend placement, wedge order, and the display of multiple pies.

Using the Selection tool, select the pie graph.

Choose Graph Type in the Properties panel.

In the Legend menu, choose the legend display:

- No Legend: leaves the legend out completely.
- Standard Legend: puts column labels outside the graph. Use this default choice when pie graphs are being combined with other graph types.
- Legends in Wedges: puts labels inside their matching wedges.

In the Position menu, choose how multiple pie graphs appear:

- Ratio: shows pie graphs sized according to their values.
- Even: gives every pie graph an identical size.
- Stacked: layers the graphs and scales them relative to each other.

In the Sort menu, choose the wedge order:

- All: arranges each graph clockwise from the top, moving from the largest wedge to the smallest.
- First: sets the first graph to largest-to-smallest order, then applies that sequence to the remaining graphs.
- None: keeps each graph in the order used when the data was entered.

Tip

When a dark-filled pie wedge makes the legend hard to read, recolor the wedge for better visibility. Select the wedge with the Group Selection tool, then apply another color from the Color panel or Swatches panel.

## Format graph text

Adjust graph labels and legends so the text is easier to read and matches the design.

Choose the appropriate tool for what you need:

- Choose the Selection tool to format every text item in the graph.
- Choose the Group selection tool to format selected text within the graph.

Select either the graph or the particular graph text.

Use the Appearance and Character sections of the Properties panel to change the attributes.

## Reuse graph designs

Turn an existing graph design into the starting point for a new customized graph.

An existing graph design can be reused and modified to make another design. When the original artwork is available, edit it and assign a new name. If the artwork was not originally configured as a graph design, paste the graph design back into the artwork to recover it.

Choose Select > Deselect so no artwork remains selected.

Choose Object > Graph > Design.

In the Graph Design dialog box, choose the design to place in the artwork, then choose Paste Design.

Choose a saved design and paste it into the artwork to keep styling consistent.

Paste a saved design into the artwork when you need consistent graph styling.

Choose OK. Illustrator pastes the graph design into the artwork, where you can edit it and define it as a new graph design.

Modify the pasted graph design, then define it as a new graph design.

Select the graph, then choose Object > Graph > Design. Choose Save Design to store the edited design as a new graph design.

Type a name for the custom graph, then choose OK.

After the new graph design is created, it can be applied to any suitable graph type in the document. The Graph Design dialog box will include the design for later use.
