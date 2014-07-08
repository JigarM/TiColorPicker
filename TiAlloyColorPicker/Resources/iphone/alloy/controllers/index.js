function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.index = Ti.UI.createWindow({
        backgroundColor: "white",
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    $.__views.label = Ti.UI.createLabel({
        bottom: "50dp",
        font: {
            fontSize: "18dp",
            fontWeight: "bold"
        },
        zIndex: "10",
        id: "label"
    });
    $.__views.index.add($.__views.label);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var picker = require("color_picker");
    var hex = "#23456w";
    var pickerView = picker.createColorPicker({
        hexColor: hex
    });
    $.index.add(pickerView);
    $.label.text = "Selected Color is : " + hex;
    pickerView.addEventListener("selectedcolor", function(e) {
        $.label.text = "Selected Color is : #" + e.color;
    });
    $.index.open();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;