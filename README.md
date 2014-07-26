TiColorPicker [![Appcelerator Titanium](http://www-static.appcelerator.com/badges/titanium-git-badge-sq.png)](http://appcelerator.com/titanium/) [![Appcelerator Alloy](http://www-static.appcelerator.com/badges/alloy-git-badge-sq.png)](http://appcelerator.com/alloy/)
=============

Color Picker using Appcelerator's Titanium framework.

* Source Code: [https://github.com/JigarM/TiColorPicker/tree/master](https://github.com/JigarM/TiColorPicker/tree/master)
* Test app for Titanium Classic Version: [https://github.com/JigarM/TiColorPicker/tree/master/TiColorPicker](https://github.com/JigarM/TiColorPicker/tree/master/TiColorPicker)
* Test app for Titanium Alloy Version: [https://github.com/JigarM/TiColorPicker/tree/master/TiAlloyColorPicker](https://github.com/JigarM/TiColorPicker/tree/master/TiAlloyColorPicker)

=========================

<p align="center" >
<a href="http://s1282.photobucket.com/user/jigarm_0809/media/iOSSimulatorScreenshot08-Jul-201442851pm_zpsd3c8bdf0.png.html" target="_blank"><img src="http://i1282.photobucket.com/albums/a534/jigarm_0809/iOSSimulatorScreenshot08-Jul-201442851pm_zpsd3c8bdf0.png" border="0" alt="Pink photo iOSSimulatorScreenshot08-Jul-201442851pm_zpsd3c8bdf0.png" width="266" height="500"/></a>
<a href="http://s1282.photobucket.com/user/jigarm_0809/media/iOSSimulatorScreenshot08-Jul-201442858pm_zps73433f92.png.html" target="_blank"><img src="http://i1282.photobucket.com/albums/a534/jigarm_0809/iOSSimulatorScreenshot08-Jul-201442858pm_zps73433f92.png" border="0" alt="Light Pink photo iOSSimulatorScreenshot08-Jul-201442858pm_zps73433f92.png" width="266" height="500"/></a>
</p>


## How to Use this..??

Check the Following code form the [Sample Application of Titanium Classic Version](https://github.com/JigarM/TiColorPicker/tree/master/TiColorPicker)..

##  app.js

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


## License

          The MIT License (MIT)
        
          Copyright (c) 2014 Jigar M
        
          Permission is hereby granted, free of charge, to any person obtaining a copy
          of this software and associated documentation files (the "Software"), to deal
          in the Software without restriction, including without limitation the rights
          to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
          copies of the Software, and to permit persons to whom the Software is
          furnished to do so, subject to the following conditions:
          
          The above copyright notice and this permission notice shall be included in all
          copies or substantial portions of the Software.
          
          THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
          IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
          FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
          AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
          LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
          OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
          SOFTWARE.
