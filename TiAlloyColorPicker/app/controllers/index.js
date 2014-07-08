var picker = require('color_picker');

var pickerView = picker.createColorPicker({
    hexColor : "#23456w"
});
$.index.add(pickerView);

pickerView.addEventListener("selectedcolor", function(e) {
    $.label.text = "Selected Color is : #"+e.color;
});

$.index.open();
