# Creating dynamic content

Many dialogs must show different information depending on an option the user chooses inside the dialog. The stack orientation can present multiple views in one dialog region.

With stack orientation, a container centers child elements in an area large enough for the widest child and tall enough for the tallest child. By arranging groups or panels in that stack, a script can show and hide them in different combinations, displaying different controls in the same space according to other dialog choices.

For example, the dialog responds when the user chooses an item in the DropDownList.

This script constructs that dialog. It folds the earlier "Personal Info" and "Work Info" panels into one Panel containing two Groups arranged as a stack. A DropDownList lets the user choose which information set to display. The list's onChange function hides the nonselected group and reveals the selected one.

```javascript
var res = "dialog { \
    whichInfo: DropDownList { alignment:'left' }, \
    allGroups: Panel { orientation:'stack', \
        info: Group { orientation: 'column', \
            name: Group { orientation: 'row', \
                s: StaticText { text:'Name:' }, \
                e: EditText { characters: 30 } \
            } \
        }, \
        workInfo: Group { orientation: 'column', \
            name: Group { orientation: 'row', \
                s: StaticText { text:'Company name:' }, \
                e: EditText { characters: 30 } \
            } \
        }, \
    }, \
    buttons: Group { orientation: 'row', alignment: 'right', \
        okBtn: Button { text:'OK', properties:{name:'ok'} }, \
        cancelBtn: Button { text:'Cancel', properties:{name:'cancel'} } \
    } \
}";

win = new Window( res );
win.whichInfo.onChange = function () {
    if ( this.selection !== null ) {
        for ( var g = 0; g < this.items.length; g++ ) {
            this.items[ g ].group.visible = false; //hide all other groups
        }
        this.selection.group.visible = true;//show this group
    }
};

var item = win.whichInfo.add( "item", "Personal Info" );
item.group = win.allGroups.info;
item = win.whichInfo.add( "item", "Work Info" );
item.group = win.allGroups.workInfo;

// TODO: Which of these are correct or best
win.whichInfo.selection = win.whichInfo.items[ 0 ];
win.whichInfo.selection = 0;

win.center();
win.show();
```
