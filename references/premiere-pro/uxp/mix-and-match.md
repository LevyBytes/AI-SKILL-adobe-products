# Mix and Match

A single plugin can use all three UI approaches together. One interface may use HTML elements for base markup, Spectrum UXP Widgets for built-in controls, and Spectrum Web Components for SWC-based pieces:

```html
<form>
  <div class="section">
    <sp-banner>
      <div slot="header">Welcome</div>
      <div slot="content">This is a mixed UI example</div>
    </sp-banner>

    <sp-button variant="primary">Submit</sp-button>
  </div>
</form>
```

That flexibility lets each part of the interface use the most appropriate tool.
