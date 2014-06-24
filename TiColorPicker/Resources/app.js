Titanium.UI.setBackgroundColor('#000');
Ti.include('color_picker.js');

// create base UI tab and root window
//
var win1 = createColorPicker({
    hexColor : "#23456w"
});

var lbl = Ti.UI.createLabel({
    bottom : "50dp",
    font : {
        fontSize : "18dp",
        fontWeight : "bold"
    }
});
win1.add(lbl);

win1.addEventListener("selectedcolor", function(e) {
    //Ti.API.log('info', e);
    //Ti.API.info('Color is ==> ' + e.color);
    lbl.text = "Selected Color is : #"+e.color;
});
// open tab group
win1.open();
