function createCheckboxRadioLayout() {
    return {
name: "More Personal Information",
elements:
[
{
type: "view",
align_children: "align_left",
elements:
[
{
type: "static_text",
name: "Personal Information",
bold: true,
font: "dialog",
char_width: 30,
height: 20
},
{
type: "check_box",
item_id: "ckbx",
name: "Pet Owner"
},
{
type: "view",
align_children: "align_row",
elements:
[
{
type: "static_text",
name: "Number of pets: "
},
{
type: "radio",
item_id: "rd01",
group_id: "rado",
name: "One"

                            },
                            {
                                type: "radio",
                                item_id: "rd02",
                                group_id: "rado",
                                name: "Two",
                            },
                            {
                                type: "radio",
                                item_id: "rd03",
                                group_id: "rado",
                                name: "Three or more",
                            }
                        ]
                    }
                ]
            },
            {
                type: "gap",    //Add a small vertical gap between
                height: 10      //..radio fields and buttons
            },
            {
                type: "ok_cancel_other",
                ok_name: "Ok",
                cancel_name: "Cancel",
                other_name: "Press Me"
            }
        ]
    };
}
