var picker = require('color_picker');

var win = picker.createColorPicker({
    hexColor : "#23456w"
});

var lbl = Ti.UI.createLabel({
    bottom : "50dp",
    font : {
        fontSize : "18dp",
        fontWeight : "bold"
    }
});
win.add(lbl);

win.addEventListener("selectedcolor", function(e) {
    lbl.text = "Selected Color is : #"+e.color;
});

win.open();
