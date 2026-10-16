# Q: Can Spectrum UXP widgets and SWC be used together?

A: Yes. The two component sets can be combined cleanly. Example markup:

```html
<sp-banner>
   <div slot="header">Header text</div>
   <div slot="content">Content of the banner</div>
</sp-banner>
<sp-dropdown placeholder="Select an option" style="width: 320px">
   <sp-menu slot="options">
      <sp-menu-item> Option 1 </sp-menu-item>
      <sp-menu-item> Option 2 </sp-menu-item>
   </sp-menu>
</sp-dropdown>
```
