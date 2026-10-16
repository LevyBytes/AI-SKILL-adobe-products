var authorDialogLayout = {
            name: "Open File & Populate Info Field",
            align_children: "align_left",
            elements:
            [
                {
                    type: "view",
                    align_children: "align_left",
                    elements:
                    [
                        {
                            type: "view",
                            align_children: "align_row",
                            elements:
                            [
                                {
                                    type: "static_text",
                                    name: "Name: "
                                },
                                {
                                    item_id: "name",
                                    type: "edit_text",
                                    alignment: "align_fill",
                                    width: 300,
                                    height: 20
                                },
                            ]
                        },
                        {
                            type: "static_text",
                            item_id: "emai",
                            name: "Email: ",
                            char_width: 25
                        },
                        {
                            type: "gap",
                            height: 10
                        },
                        {
                            type: "view",
                            align_children: "align_row",
                            elements:
                            [
                                {
                                    type: "button",
                                    name: "Browse",
                                    item_id: "brws"
                                },
                                {
                                    type: "ok_cancel",
                                    ok_name: "Ok",
                                    cancel_name: "Cancel"
                                }
                            ]
                        }
                    ]
                }
            ]
        };
