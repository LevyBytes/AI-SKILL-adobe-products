# Family XML data setup

Example: Each of the four return types of XMLData.applyXPath (Boolean, number, string, or XFAObject) shows up here. The code mines data from an XML data string — here, the family tree of the "Robat" family).

```javascript
var cXMLDoc = [
    "<family name = 'Robat'>",
    "    <grandad id = 'm1' name = 'A.C.' gender='M'>",
    "        <child> m2 </child>",
    "        <personal>",
    "            <income>100000</income>",
    "        </personal>",
    "    </grandad>",
    "    <dad id = 'm2' name = 'Bob' gender='M'>",
    "        <parent> m1 </parent>",
    "        <spouse> m3 </spouse>",
    "        <child> m4 </child>",
    "        <child> m5 </child>",
    "        <child> m6 </child>",
    "        <personal>",
    "            <income>75000</income>",
    "        </personal>",
    "    </dad>",
    "    <mom id = 'm3' name = 'Mary' gender='F'>",
    "        <spouse> m2 </spouse>",
    "        <personal>",
    "            <income>25000</income>",
    "        </personal>",
    "    </mom>",
    "    <daughter id = 'm4' name = 'Sue' gender='F'>",
    "        <parent> m2 </parent>",
    "        <personal>",
    "            <income>40000</income>",
    "        </personal>",
    "    </daughter>",
    "    <son id = 'm5' name = 'Jim' gender='M'>",
    "        <parent> m2 </parent>",
    "        <personal>",
    "            <income>35000</income>",
    "        </personal>",
    "    </son>",
    "    <daughter id = 'm6' name = 'Megan' gender='F'>",
    "        <parent> m2 </parent>",
    "        <personal>",
    "            <income>30000</income>",
    "        </personal>",
    "    </daughter>",
    "</family>"
].join("\n");
var myXML= XMLData.parse( cXMLDoc, false);
```

Related: [XMLData.applyXPath](apply-x-path.md).
