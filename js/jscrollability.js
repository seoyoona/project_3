/*! jScrollability 2016-12-05 01:12:58 */
!function(a) {
    var b = []
      , c = {}
      , d = 0;
    a.fn.jScrollability = function(c, d, e) {
        this.each(function() {
            b.push({
                start: c,
                end: d,
                fn: e,
                el: a(this),
                trigger: !1,
                duration: !1
            })
        })
    }
    ,
    a.fn.jScrollabilityTrigger = function(c, d, e) {
        this.each(function() {
            b.push({
                start: c,
                end: !1,
                fn: e,
                el: a(this),
                trigger: !0,
                duration: d
            })
        })
    }
    ,
    a.jScrollability = function(c) {
        a.each(c, function(c, d) {
            var e = a(d.selector);
            e.length > 0 && e.each(function() {
                b.push({
                    start: d.start,
                    end: d.trigger !== !0 && d.end,
                    trigger: d.trigger === !0,
                    duration: d.trigger === !0 && d.duration,
                    fn: d.fn,
                    el: a(this)
                })
            })
        })
    }
    ;
    var e = function(b, c, d) {
        switch (typeof b) {
        case "function":
            return b(c);
        case "string":
            if ("parent" == b) {
                if ("start" == d)
                    return c.parent().offset().top;
                if ("end" == d)
                    return c.parent().offset().top + c.parent().outerHeight()
            } else if ("self" == b) {
                if ("start" == d)
                    return c.offset().top;
                if ("end" == d)
                    return c.offset().top + c.outerHeight()
            } else {
                if ("window" != b)
                    return 0;
                if ("start" == d)
                    return c.offset().top;
                if ("end" == d)
                    return c.offset().top + a(window).height()
            }
        default:
            return b
        }
    }
      , f = function(a, b, c) {
        switch (typeof c) {
        case "function":
            c(a, b);
            break;
        case "object":
            if (c.class && (b > 0 ? (c.add && c.add.forEach(function(b) {
                a.addClass(klass)
            }),
            c.remove && c.remove.forEach(function(b) {
                a.removeClass(klass)
            })) : (c.add && c.add.forEach(function(b) {
                a.removeClass(klass)
            }),
            c.remove && c.remove.forEach(function(b) {
                a.addClass(klass)
            }))),
            c.styles || !c.styles && !c.class) {
                var d = c.styles || c
                  , e = {};
                for (cssprop in d) {
                    var f = d[cssprop]
                      , g = f.end - f.start
                      , h = f.start + b * g;
                    e[cssprop] = h + f.unit
                }
                a.css(e)
            }
        }
    }
      , g = function() {
        return d++ + ""
    };
    a(document).ready(function() {
        var d = a(window)
          , h = a(document)
          , i = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || function(a) {
            setTimeout(a, 10)
        }
          , j = function() {
            var k = h.scrollTop() + d.height()
              , l = Date.now();
            a.each(b, function(a, b) {
                var d = e(b.start, b.el, "start");
                if (b.trigger === !0) {
                    var h = b.el.attr("data-jscrollability-id");
                    if (h || (h = g(),
                    b.el.attr("data-jscrollability-id", h)),
                    k >= d && !c[h])
                        c[h] = l;
                    else if (c[h] && c[h] !== !0) {
                        var i = l - c[h]
                          , j = i / b.duration;
                        j < 1 ? f(b.el, j, b.fn) : (f(b.el, 1, b.fn),
                        c[h] = !0)
                    }
                } else {
                    var m = e(b.end, b.el, "end")
                      , n = m - d
                      , o = Math.min(n, Math.max(0, k - d))
                      , j = o / n;
                    f(b.el, j, b.fn)
                }
            }),
            i(j)
        };
        i(j)
    })
}(jQuery);
