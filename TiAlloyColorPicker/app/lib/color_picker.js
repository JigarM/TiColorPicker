function cutHex(h) {
    return (h.charAt(0) == "#") ? h.substring(1, 7) : h;
}

function hexToR(h) {
    return parseInt((cutHex(h)).substring(0, 2), 16);
}

function hexToG(h) {
    return parseInt((cutHex(h)).substring(2, 4), 16);
}

function hexToB(h) {
    return parseInt((cutHex(h)).substring(4, 6), 16);
}

function hexToRgb(hex) {
    return {
        r : hexToR(hex),
        g : hexToG(hex),
        b : hexToB(hex)
    };
}

function hueToRgb(m1, m2, hue) {
    var v;
    if (hue < 0) {
        hue += 1;
    } else if (hue > 1) {
        hue -= 1;
    }

    if (6 * hue < 1) {
        v = m1 + (m2 - m1) * hue * 6;
    } else if (2 * hue < 1) {
        v = m2;
    } else if (3 * hue < 2) {
        v = m1 + (m2 - m1) * (2 / 3 - hue) * 6;
    } else {
        v = m1;
    }

    return 255 * v;
}

function hslToRgb(h, s, l) {
    var m1, m2, hue;
    var r, g, b;
    s /= 100;
    l /= 100;
    if (s == 0) {
        r = g = b = (l * 255);
    } else {
        if (l <= 0.5) {
            m2 = l * (s + 1);
        } else {
            m2 = l + s - l * s;
        }
        m1 = l * 2 - m2;
        hue = h / 360;
        r = Math.round(hueToRgb(m1, m2, hue + 1 / 3));
        g = Math.round(hueToRgb(m1, m2, hue));
        b = Math.round(hueToRgb(m1, m2, hue - 1 / 3));
    }
    return {
        r : r,
        g : g,
        b : b
    };
}

function intToHex(N) {
    if (N == null) {
        return "00";
    };
    if (N == 0 || isNaN(N)) {
        return "00";
    };
    N = Math.max(0, N);
    N = Math.min(N, 255);
    N = Math.round(N);
    return "0123456789ABCDEF".charAt((N - N % 16) / 16) + "0123456789ABCDEF".charAt(N % 16);
}

function rgbToHex(color) {
    return intToHex(color.r) + intToHex(color.g) + intToHex(color.b);
}

function rgbToHsl(r, g, b) {
    r /= 255;
    g /= 255;
    b /= 255;
    var max = Math.max(r, g, b), min = Math.min(r, g, b);
    var h, s, l = (max + min) / 2;

    if (max == min) {
        h = s = 0;
        // achromatic
    } else {
        var d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch(max) {
        case r:
            h = (g - b) / d + (g < b ? 6 : 0);
            break;
        case g:
            h = (b - r) / d + 2;
            break;
        case b:
            h = (r - g) / d + 4;
            break;
        }
        h /= 6;
    }

    return {
        h : Math.round(h * 360),
        s : Math.round(s * 100),
        l : Math.round(l * 100)
    };
}

/**
 * HSV to RGB color conversion
 *
 * H runs from 0 to 360 degrees
 * S and V run from 0 to 100
 *
 * Ported from the excellent java algorithm by Eugene Vishnevsky at:
 * http://www.cs.rit.edu/~ncs/color/t_convert.html
 *
 * Refffered Concepr From http://snipplr.com/view/14590/hsv-to-rgb/
 */
function hsvToRgb(h, s, v) {
    var r, g, b;
    var i;
    var f, p, q, t;
    // Make sure our arguments stay in-range
    h = Math.max(0, Math.min(360, h));
    s = Math.max(0, Math.min(100, s));
    v = Math.max(0, Math.min(100, v));
    // We accept saturation and value arguments from 0 to 100 because that's
    // how Photoshop represents those values. Internally, however, the
    // saturation and value are calculated from a range of 0 to 1. We make
    // That conversion here.
    s /= 100;
    v /= 100;
    if (s == 0) {
        // Achromatic (grey)
        r = g = b = v;
        return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
    }
    h /= 60;
    // sector 0 to 5
    i = Math.floor(h);
    f = h - i;
    // factorial part of h
    p = v * (1 - s);
    q = v * (1 - s * f);
    t = v * (1 - s * (1 - f));
    switch(i) {
    case 0:
        r = v;
        g = t;
        b = p;
        break;
    case 1:
        r = q;
        g = v;
        b = p;
        break;
    case 2:
        r = p;
        g = v;
        b = t;
        break;
    case 3:
        r = p;
        g = q;
        b = v;
        break;
    case 4:
        r = t;
        g = p;
        b = v;
        break;
    default:
        r = v;
        g = p;
        b = q;
    }
    //return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
    return {
        r : Math.round(r * 255),
        g : Math.round(g * 255),
        b : Math.round(b * 255)
    };
}

function rgbToHsv(R, G, B) {
    var rr, gg, bb, r = R / 255, g = G / 255, b = B / 255, h, s, v = Math.max(r, g, b), diff = v - Math.min(r, g, b), diffc = function(c) {
        return (v - c) / 6 / diff + 1 / 2;
    };

    if (diff == 0) {
        h = s = 0;
    } else {
        s = diff / v;
        rr = diffc(r);
        gg = diffc(g);
        bb = diffc(b);

        if (r === v) {
            h = bb - gg;
        } else if (g === v) {
            h = (1 / 3) + rr - bb;
        } else if (b === v) {
            h = (2 / 3) + gg - rr;
        }
        if (h < 0) {
            h += 1;
        } else if (h > 1) {
            h -= 1;
        }
    }
    return {
        h : Math.round(h * 360),
        s : Math.round(s * 100),
        v : Math.round(v * 100)
    };
}

exports.createColorPicker = function(params) {
    var h, s, l;
    // = 0,100,50;
    if (params.hexColor) {
        var rgb = hexToRgb(params.hexColor);
        Ti.API.log('debug', rgb);
        Ti.API.info('rgb ==> ' + JSON.stringify(rgb));
        var hsl = rgbToHsl(rgb.r, rgb.g, rgb.b);
        Ti.API.log('debug', hsl);
        Ti.API.info('hsl ==> ' + JSON.stringify(hsl));
        h = hsl.h;
        s = hsl.s;
        l = hsl.l;
    } else {
        h = 0;
        s = 100;
        l = 50;
    }
    var _return = Ti.UI.createView({
        height : Ti.UI.FILL,
        width : Ti.UI.FILL
    });
    var HSLImage = Titanium.UI.createImageView({
        image : '/images/color.png',
        height : 256,
        width : 300,
        top : 109,
        left : 10
    });
    var circle = Ti.UI.createImageView({
        image : '/images/circle.gif',
        width : 11,
        height : 11
    });

    HSLImage.addEventListener('touchmove', function(e) {
        h = Math.round((e.x / HSLImage.width) * 359);
        s = Math.round(100-(e.y / HSLImage.height) * 100);
        l = Math.round((e.y / HSLImage.height) * 100);

        Ti.API.info("h: " + h);
        Ti.API.info("s: " + s);
        Ti.API.info("l: " + l);

        if (l > 100) {
            l = 100;
        }
        if (l < 0) {
            l = 0;
        }
        if (h < 0) {
            h = 0;
        } else if (h > 359) {
            h = 359;
        }
        if (s < 0) {
            s = 0;
        } else if (s > 100) {
            s = 100;
        }
        
        var _rgb = hslToRgb(h, s, l);
        var hexColor = rgbToHex(_rgb);
        
        Ti.API.info("_rgb: " + JSON.stringify(_rgb));
        Ti.API.info("hexColor: " + hexColor);
        
        var hexColorGradient = rgbToHex(hslToRgb(h, s, 50));
        _return.backgroundColor = hexColor;

        _return.fireEvent("selectedcolor", {
            color : hexColor
        });

        var x = e.x;
        var y = e.y;
        if (x < 0) {
            x = 0;
        }
        if (x > HSLImage.width) {
            x = HSLImage.width;
        }
        if (y < 0) {
            y = 0;
        }
        if (y > HSLImage.height) {
            y = HSLImage.height;
        }
        circle.left = x + (HSLImage.left - circle.width / 2);
        circle.top = y + (HSLImage.top - circle.width / 2);
    });
    HSLImage.addEventListener('click', function(e) {
        h = Math.round((e.x / HSLImage.width) * 359);
        Ti.API.log('debug', "h: " + h);
        s = Math.round(100 - (e.y / HSLImage.height) * 100);
        Ti.API.log('debug', "s: " + s);
        l = Math.round((e.y / HSLImage.height) * 100);
        Ti.API.log('debug', "l: " + l);
        if (l > 100) {
            l = 100;
        }
        if (l < 0) {
            l = 0;
        }
        if (h < 0) {
            h = 0;
        } else if (h > 359) {
            h = 359;
        }
        if (s < 0) {
            s = 0;
        } else if (s > 100) {
            s = 100;
        }
        var hexColor = rgbToHex(hslToRgb(h, s, l));
        var hexColorGradient = rgbToHex(hslToRgb(h, s, 50));
        _return.backgroundColor = hexColor;

        _return.fireEvent("selectedcolor", {
            color : hexColor
        });

        var x = e.x;
        var y = e.y;
        if (x < 0) {
            x = 0;
        }
        if (x > HSLImage.width) {
            x = HSLImage.width;
        }
        if (y < 0) {
            y = 0;
        }
        if (y > HSLImage.height) {
            y = HSLImage.height;
        }
        circle.left = x + (HSLImage.left - circle.width / 2);
        circle.top = y + (HSLImage.top - circle.width / 2);
    });

    _return.add(HSLImage);
    _return.add(circle);
    _return.backgroundColor = rgbToHex(hslToRgb(h, s, l));

    // place circle
    if (l == 0 || l == 100) {
        circle.left = HSLImage.width + HSLImage.left - (circle.width / 2);
        circle.top = HSLImage.height + HSLImage.top - (circle.height / 2);
    } else {
        circle.left = (h * (HSLImage.width / 360)) + (HSLImage.left - (circle.width / 2));
        circle.top = (s * (HSLImage.height / 100)) + (HSLImage.top - (circle.height / 2)) - 100;
    }
    Ti.API.log(circle.top);
    return _return;
};