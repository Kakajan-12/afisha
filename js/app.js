function ssc_init() {
  if (document.body) {
    var e = document.body,
      t = document.documentElement,
      n = window.innerHeight,
      i = e.scrollHeight;
    if (
      ((ssc_root = document.compatMode.indexOf("CSS") >= 0 ? t : e),
      (ssc_activeElement = e),
      (ssc_initdone = !0),
      top != self)
    )
      ssc_frame = !0;
    else if (
      i > n &&
      (e.offsetHeight <= n || t.offsetHeight <= n) &&
      ssc_root.offsetHeight <= n
    ) {
      var o = document.createElement("div");
      (o.style.clear = "both"), e.appendChild(o);
    }
    ssc_fixedback ||
      ((e.style.backgroundAttachment = "scroll"),
      (t.style.backgroundAttachment = "scroll")),
      ssc_keyboardsupport && ssc_addEvent("keydown", ssc_keydown);
  }
}
function ssc_scrollArray(e, t, n, i) {
  if (
    (i || (i = 1e3),
    ssc_directionCheck(t, n),
    ssc_que.push({
      x: t,
      y: n,
      lastX: 0 > t ? 0.99 : -0.99,
      lastY: 0 > n ? 0.99 : -0.99,
      start: +new Date(),
    }),
    !ssc_pending)
  ) {
    var o = function () {
      for (var r = +new Date(), s = 0, a = 0, l = 0; l < ssc_que.length; l++) {
        var c = ssc_que[l],
          u = r - c.start,
          d = u >= ssc_animtime,
          f = d ? 1 : u / ssc_animtime;
        ssc_pulseAlgorithm && (f = ssc_pulse(f));
        var h = (c.x * f - c.lastX) >> 0,
          p = (c.y * f - c.lastY) >> 0;
        (s += h),
          (a += p),
          (c.lastX += h),
          (c.lastY += p),
          d && (ssc_que.splice(l, 1), l--);
      }
      if (t) {
        var g = e.scrollLeft;
        (e.scrollLeft += s), s && e.scrollLeft === g && (t = 0);
      }
      if (n) {
        var m = e.scrollTop;
        (e.scrollTop += a), a && e.scrollTop === m && (n = 0);
      }
      t || n || (ssc_que = []),
        ssc_que.length
          ? setTimeout(o, i / ssc_framerate + 1)
          : (ssc_pending = !1);
    };
    setTimeout(o, 0), (ssc_pending = !0);
  }
}

if (
  ((function (e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports
      ? (module.exports = e.document
          ? t(e, !0)
          : function (e) {
              if (!e.document)
                throw new Error("jQuery requires a window with a document");
              return t(e);
            })
      : t(e);
  })("undefined" != typeof window ? window : this, function (e, t) {
    "use strict";
    function n(e, t) {
      var n = (t = t || te).createElement("script");
      (n.text = e), t.head.appendChild(n).parentNode.removeChild(n);
    }
    function i(e) {
      var t = !!e && "length" in e && e.length,
        n = pe.type(e);
      return (
        "function" !== n &&
        !pe.isWindow(e) &&
        ("array" === n ||
          0 === t ||
          ("number" == typeof t && t > 0 && t - 1 in e))
      );
    }
    function o(e, t) {
      return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
    }
    function r(e, t, n) {
      return pe.isFunction(t)
        ? pe.grep(e, function (e, i) {
            return !!t.call(e, i, e) !== n;
          })
        : t.nodeType
        ? pe.grep(e, function (e) {
            return (e === t) !== n;
          })
        : "string" != typeof t
        ? pe.grep(e, function (e) {
            return se.call(t, e) > -1 !== n;
          })
        : Ee.test(t)
        ? pe.filter(t, e, n)
        : ((t = pe.filter(t, e)),
          pe.grep(e, function (e) {
            return se.call(t, e) > -1 !== n && 1 === e.nodeType;
          }));
    }

    function a(e) {
      var t = {};
      return (
        pe.each(e.match(De) || [], function (e, n) {
          t[n] = !0;
        }),
        t
      );
    }
    function l(e) {
      return e;
    }
    function c(e) {
      throw e;
    }
    function u(e, t, n, i) {
      var o;
      try {
        e && pe.isFunction((o = e.promise))
          ? o.call(e).done(t).fail(n)
          : e && pe.isFunction((o = e.then))
          ? o.call(e, t, n)
          : t.apply(void 0, [e].slice(i));
      } catch (e) {
        n.apply(void 0, [e]);
      }
    }
    function d() {
      te.removeEventListener("DOMContentLoaded", d),
        e.removeEventListener("load", d),
        pe.ready();
    }
    function f() {
      this.expando = pe.expando + f.uid++;
    }
    function h(e) {
      return (
        "true" === e ||
        ("false" !== e &&
          ("null" === e
            ? null
            : e === +e + ""
            ? +e
            : Fe.test(e)
            ? JSON.parse(e)
            : e))
      );
    }
    function T() {
      return !0;
    }
    function C() {
      return !1;
    }
    function _() {
      try {
        return te.activeElement;
      } catch (e) {}
    }
    function E(e, t, n, i, o, r) {
      var s, a;
      if ("object" == typeof t) {
        "string" != typeof n && ((i = i || n), (n = void 0));
        for (a in t) E(e, a, n, i, t[a], r);
        return e;
      }
      if (
        (null == i && null == o
          ? ((o = n), (i = n = void 0))
          : null == o &&
            ("string" == typeof n
              ? ((o = i), (i = void 0))
              : ((o = i), (i = n), (n = void 0))),
        !1 === o)
      )
        o = C;
      else if (!o) return e;
      return (
        1 === r &&
          ((s = o),
          (o = function (e) {
            return pe().off(e), s.apply(this, arguments);
          }),
          (o.guid = s.guid || (s.guid = pe.guid++))),
        e.each(function () {
          pe.event.add(this, t, o, i, n);
        })
      );
    }

    function L(e, t) {
      return {
        get: function () {
          return e()
            ? void delete this.get
            : (this.get = t).apply(this, arguments);
        },
      };
    }

    function F(e, t, n) {
      var i = Me.exec(t);
      return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t;
    }

    function M(e, t, n, i, o) {
      return new M.prototype.init(e, t, n, i, o);
    }

    function q(e, t) {
      var n,
        i = 0,
        o = {
          height: e,
        };
      for (t = t ? 1 : 0; i < 4; i += 2 - t)
        (n = Re[i]), (o["margin" + n] = o["padding" + n] = e);
      return t && (o.opacity = o.width = e), o;
    }

    function U(e, t, n) {
      var i,
        o,
        r = 0,
        s = U.prefilters.length,
        a = pe.Deferred().always(function () {
          delete l.elem;
        }),
        l = function () {
          if (o) return !1;
          for (
            var t = ht || W(),
              n = Math.max(0, c.startTime + c.duration - t),
              i = 1 - (n / c.duration || 0),
              r = 0,
              s = c.tweens.length;
            r < s;
            r++
          )
            c.tweens[r].run(i);
          return (
            a.notifyWith(e, [c, i, n]),
            i < 1 && s
              ? n
              : (s || a.notifyWith(e, [c, 1, 0]), a.resolveWith(e, [c]), !1)
          );
        },
        c = a.promise({
          elem: e,
          props: pe.extend({}, t),
          opts: pe.extend(
            !0,
            {
              specialEasing: {},
              easing: pe.easing._default,
            },
            n
          ),
          originalProperties: t,
          originalOptions: n,
          startTime: ht || W(),
          duration: n.duration,
          tweens: [],
          createTween: function (t, n) {
            var i = pe.Tween(
              e,
              c.opts,
              t,
              n,
              c.opts.specialEasing[t] || c.opts.easing
            );
            return c.tweens.push(i), i;
          },
          stop: function (t) {
            var n = 0,
              i = t ? c.tweens.length : 0;
            if (o) return this;
            for (o = !0; n < i; n++) c.tweens[n].run(1);
            return (
              t
                ? (a.notifyWith(e, [c, 1, 0]), a.resolveWith(e, [c, t]))
                : a.rejectWith(e, [c, t]),
              this
            );
          },
        }),
        u = c.props;
      for (B(u, c.opts.specialEasing); r < s; r++)
        if ((i = U.prefilters[r].call(c, e, u, c.opts)))
          return (
            pe.isFunction(i.stop) &&
              (pe._queueHooks(c.elem, c.opts.queue).stop = pe.proxy(i.stop, i)),
            i
          );
      return (
        pe.map(u, z, c),
        pe.isFunction(c.opts.start) && c.opts.start.call(e, c),
        c
          .progress(c.opts.progress)
          .done(c.opts.done, c.opts.complete)
          .fail(c.opts.fail)
          .always(c.opts.always),
        pe.fx.timer(
          pe.extend(l, {
            elem: e,
            anim: c,
            queue: c.opts.queue,
          })
        ),
        c
      );
    }

    function G(e) {
      return function (t, n) {
        "string" != typeof t && ((n = t), (t = "*"));
        var i,
          o = 0,
          r = t.toLowerCase().match(De) || [];
        if (pe.isFunction(n))
          for (; (i = r[o++]); )
            "+" === i[0]
              ? ((i = i.slice(1) || "*"), (e[i] = e[i] || []).unshift(n))
              : (e[i] = e[i] || []).push(n);
      };
    }

    function Q(e, t) {
      var n,
        i,
        o = pe.ajaxSettings.flatOptions || {};
      for (n in t) void 0 !== t[n] && ((o[n] ? e : i || (i = {}))[n] = t[n]);
      return i && pe.extend(!0, e, i), e;
    }
    function Z(e, t, n) {
      for (var i, o, r, s, a = e.contents, l = e.dataTypes; "*" === l[0]; )
        l.shift(),
          void 0 === i &&
            (i = e.mimeType || t.getResponseHeader("Content-Type"));
      if (i)
        for (o in a)
          if (a[o] && a[o].test(i)) {
            l.unshift(o);
            break;
          }
      if (l[0] in n) r = l[0];
      else {
        for (o in n) {
          if (!l[0] || e.converters[o + " " + l[0]]) {
            r = o;
            break;
          }
          s || (s = o);
        }
        r = r || s;
      }
      if (r) return r !== l[0] && l.unshift(r), n[r];
    }

    var ee = [],
      te = e.document,
      ne = Object.getPrototypeOf,
      ie = ee.slice,
      oe = ee.concat,
      re = ee.push,
      se = ee.indexOf,
      ae = {},
      le = ae.toString,
      ce = ae.hasOwnProperty,
      ue = ce.toString,
      de = ue.call(Object),
      fe = {},
      he = "3.2.1",
      pe = function (e, t) {
        return new pe.fn.init(e, t);
      },
      ge = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
      me = /^-ms-/,
      ve = /-([a-z])/g,
      ye = function (e, t) {
        return t.toUpperCase();
      };
    (pe.fn = pe.prototype =
      {
        jquery: he,
        constructor: pe,
        length: 0,
        toArray: function () {
          return ie.call(this);
        },
        get: function (e) {
          return null == e
            ? ie.call(this)
            : e < 0
            ? this[e + this.length]
            : this[e];
        },
        pushStack: function (e) {
          var t = pe.merge(this.constructor(), e);
          return (t.prevObject = this), t;
        },
        each: function (e) {
          return pe.each(this, e);
        },
        map: function (e) {
          return this.pushStack(
            pe.map(this, function (t, n) {
              return e.call(t, n, t);
            })
          );
        },
        slice: function () {
          return this.pushStack(ie.apply(this, arguments));
        },
        first: function () {
          return this.eq(0);
        },
        last: function () {
          return this.eq(-1);
        },
        eq: function (e) {
          var t = this.length,
            n = +e + (e < 0 ? t : 0);
          return this.pushStack(n >= 0 && n < t ? [this[n]] : []);
        },
        end: function () {
          return this.prevObject || this.constructor();
        },
        push: re,
        sort: ee.sort,
        splice: ee.splice,
      }),
      (pe.extend = pe.fn.extend =
        function () {
          var e,
            t,
            n,
            i,
            o,
            r,
            s = arguments[0] || {},
            a = 1,
            l = arguments.length,
            c = !1;
          for (
            "boolean" == typeof s && ((c = s), (s = arguments[a] || {}), a++),
              "object" == typeof s || pe.isFunction(s) || (s = {}),
              a === l && ((s = this), a--);
            a < l;
            a++
          )
            if (null != (e = arguments[a]))
              for (t in e)
                (n = s[t]),
                  (i = e[t]),
                  s !== i &&
                    (c && i && (pe.isPlainObject(i) || (o = Array.isArray(i)))
                      ? (o
                          ? ((o = !1), (r = n && Array.isArray(n) ? n : []))
                          : (r = n && pe.isPlainObject(n) ? n : {}),
                        (s[t] = pe.extend(c, r, i)))
                      : void 0 !== i && (s[t] = i));
          return s;
        }),
      pe.extend({
        expando: "jQuery" + (he + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function (e) {
          throw new Error(e);
        },
        noop: function () {},
        isFunction: function (e) {
          return "function" === pe.type(e);
        },
        isWindow: function (e) {
          return null != e && e === e.window;
        },
        isNumeric: function (e) {
          var t = pe.type(e);
          return (
            ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
          );
        },
        isPlainObject: function (e) {
          var t, n;
          return !(
            !e ||
            "[object Object]" !== le.call(e) ||
            ((t = ne(e)) &&
              ("function" !=
                typeof (n = ce.call(t, "constructor") && t.constructor) ||
                ue.call(n) !== de))
          );
        },
        isEmptyObject: function (e) {
          var t;
          for (t in e) return !1;
          return !0;
        },
        type: function (e) {
          return null == e
            ? e + ""
            : "object" == typeof e || "function" == typeof e
            ? ae[le.call(e)] || "object"
            : typeof e;
        },
        globalEval: function (e) {
          n(e);
        },
        camelCase: function (e) {
          return e.replace(me, "ms-").replace(ve, ye);
        },
        each: function (e, t) {
          var n,
            o = 0;
          if (i(e))
            for (n = e.length; o < n && !1 !== t.call(e[o], o, e[o]); o++);
          else for (o in e) if (!1 === t.call(e[o], o, e[o])) break;
          return e;
        },
        trim: function (e) {
          return null == e ? "" : (e + "").replace(ge, "");
        },
        makeArray: function (e, t) {
          var n = t || [];
          return (
            null != e &&
              (i(Object(e))
                ? pe.merge(n, "string" == typeof e ? [e] : e)
                : re.call(n, e)),
            n
          );
        },
        inArray: function (e, t, n) {
          return null == t ? -1 : se.call(t, e, n);
        },
        merge: function (e, t) {
          for (var n = +t.length, i = 0, o = e.length; i < n; i++)
            e[o++] = t[i];
          return (e.length = o), e;
        },
        grep: function (e, t, n) {
          for (var i = [], o = 0, r = e.length, s = !n; o < r; o++)
            !t(e[o], o) !== s && i.push(e[o]);
          return i;
        },
        map: function (e, t, n) {
          var o,
            r,
            s = 0,
            a = [];
          if (i(e))
            for (o = e.length; s < o; s++)
              null != (r = t(e[s], s, n)) && a.push(r);
          else for (s in e) null != (r = t(e[s], s, n)) && a.push(r);
          return oe.apply([], a);
        },
        guid: 1,
        proxy: function (e, t) {
          var n, i, o;
          if (
            ("string" == typeof t && ((n = e[t]), (t = e), (e = n)),
            pe.isFunction(e))
          )
            return (
              (i = ie.call(arguments, 2)),
              (o = function () {
                return e.apply(t || this, i.concat(ie.call(arguments)));
              }),
              (o.guid = e.guid = e.guid || pe.guid++),
              o
            );
        },
        now: Date.now,
        support: fe,
      }),
      "function" == typeof Symbol &&
        (pe.fn[Symbol.iterator] = ee[Symbol.iterator]),
      pe.each(
        "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
          " "
        ),
        function (e, t) {
          ae["[object " + t + "]"] = t.toLowerCase();
        }
      );
    var be = (function (e) {
      function t(e, t, n, i) {      
        if (
          !i &&
          ((t ? t.ownerDocument || t : M) !== I && O(t), (t = t || I), L)
        ) {
          if (11 !== p && (l = ge.exec(e)))
            if ((o = l[1])) {
              
                return n.push(s), n;
            } 
          
        }
      }
   
    

   

      function u() {}

      var b,
        w,
        T,
        C,
        _,
        E,
        S,
        k,
        
        J =
          "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        de = {
          bool: new RegExp("^(?:" + J + ")$", "i"),
        },
        ye = function (e, t, n) {
          var i = "0x" + t - 65536;
          return i !== i || n
            ? t
            : i < 0
            ? String.fromCharCode(i + 65536)
            : String.fromCharCode((i >> 10) | 55296, (1023 & i) | 56320);
        }
      

        ((T = t.selectors =
          {
            cacheLength: 50,
            createPseudo: i,
            match: de,
            attrHandle: {},
            find: {},
            relative: {
            },
            preFilter: {
            },
            filter: {
            },
            pseudos: {
            },
          }).pseudos.nth = T.pseudos.eq);
      for (b in {
        radio: !0,
        checkbox: !0,
        file: !0,
        password: !0,
        image: !0,
      })
        T.pseudos[b] = (function (e) {
          return function (t) {
            return "input" === t.nodeName.toLowerCase() && t.type === e;
          };
        })(b);
      for (b in {
        submit: !0,
        reset: !0,
      })
        T.pseudos[b] = (function (e) {
          return function (t) {
            var n = t.nodeName.toLowerCase();
            return ("input" === n || "button" === n) && t.type === e;
          };
        })(b);
      return (
        (u.prototype = T.filters = T.pseudos),
        (T.setFilters = new u()),
        (E = t.tokenize =
          function (e, n) {
            var i,
              o,
              r,
              s,
              a,
              l,
              c,
              u = z[e + " "];
            if (u) return n ? 0 : u.slice(0);
            for (a = e, l = [], c = T.preFilter; a; ) {
              (i && !(o = se.exec(a))) ||
                (o && (a = a.slice(o[0].length) || a), l.push((r = []))),
                (i = !1),
                (o = ae.exec(a)) &&
                  ((i = o.shift()),
                  r.push({
                    value: i,
                    type: o[0].replace(re, " "),
                  }),
                  (a = a.slice(i.length)));
              for (s in T.filter)
                !(o = de[s].exec(a)) ||
                  (c[s] && !(o = c[s](o))) ||
                  ((i = o.shift()),
                  r.push({
                    value: i,
                    type: s,
                    matches: o,
                  }),
                  (a = a.slice(i.length)));
              if (!i) break;
            }
            return n ? a.length : a ? t.error(e) : z(e, l).slice(0);
          }),
        (S = t.compile =
          function (e, t) {
            var n,
              i = [],
              o = [],
              r = B[e + " "];
            if (!r) {
              for (t || (t = E(e)), n = t.length; n--; )
                (r = v(t[n]))[j] ? i.push(r) : o.push(r);
              (r = B(e, y(o, i))).selector = e;
            }
            return r;
          }),
        (k = t.select =
          function (e, t, n, i) {
            var o,
              r,
              s,
              a,
              l,
              u = "function" == typeof e && e,
              f = !i && E((e = u.selector || e));
            if (((n = n || []), 1 === f.length)) {
              if (
                (r = f[0] = f[0].slice(0)).length > 2 &&
                "ID" === (s = r[0]).type &&
                9 === t.nodeType &&
                L &&
                T.relative[r[1].type]
              ) {
                if (
                  !(t = (T.find.ID(s.matches[0].replace(ve, ye), t) || [])[0])
                )
                  return n;
                u && (t = t.parentNode), (e = e.slice(r.shift().value.length));
              }
              for (
                o = de.needsContext.test(e) ? 0 : r.length;
                o-- && ((s = r[o]), !T.relative[(a = s.type)]);

              )
                if (
                  (l = T.find[a]) &&
                  (i = l(
                    s.matches[0].replace(ve, ye),
                    (me.test(r[0].type) && c(t.parentNode)) || t
                  ))
                ) {
                  if ((r.splice(o, 1), !(e = i.length && d(r))))
                    return K.apply(n, i), n;
                  break;
                }
            }
            
          }),
        t
      );
    })(e);
    (pe.find = be),
      (pe.expr = be.selectors)      
    var we = function (e, t, n) {
        for (var i = [], o = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
          if (1 === e.nodeType) {
            if (o && pe(e).is(n)) break;
            i.push(e);
          }
        return i;
      },
      Te = function (e, t) {
        for (var n = []; e; e = e.nextSibling)
          1 === e.nodeType && e !== t && n.push(e);
        return n;
      },
      Ce = pe.expr.match.needsContext,
      _e = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
      Ee = /^.[^:#\[\.,]*$/;
    (pe.filter = function (e, t, n) {
      var i = t[0];
      return (
        n && (e = ":not(" + e + ")"),
        1 === t.length && 1 === i.nodeType
          ? pe.find.matchesSelector(i, e)
            ? [i]
            : []
          : pe.find.matches(
              e,
              pe.grep(t, function (e) {
                return 1 === e.nodeType;
              })
            )
      );
    }),
      pe.fn.extend({
        find: function (e) {
          var t,
            n,
            i = this.length,
            o = this;
          if ("string" != typeof e)
            return this.pushStack(
              pe(e).filter(function () {
                for (t = 0; t < i; t++) if (pe.contains(o[t], this)) return !0;
              })
            );
          for (n = this.pushStack([]), t = 0; t < i; t++) pe.find(e, o[t], n);
          return i > 1 ? pe.uniqueSort(n) : n;
        },
      });
    var Se,
      ke = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    ((pe.fn.init = function (e, t, n) {
      var i, o;
      if (!e) return this;
      if (((n = n || Se), "string" == typeof e)) {
        if (
          !(i =
            "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3
              ? [null, e, null]
              : ke.exec(e)) ||
          (!i[1] && t)
        )
          return !t || t.jquery
            ? (t || n).find(e)
            : this.constructor(t).find(e);
        if (i[1]) {
          if (
            ((t = t instanceof pe ? t[0] : t),
            pe.merge(
              this,
              pe.parseHTML(
                i[1],
                t && t.nodeType ? t.ownerDocument || t : te,
                !0
              )
            ),
            _e.test(i[1]) && pe.isPlainObject(t))
          )
            for (i in t)
              pe.isFunction(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
          return this;
        }
        return (
          (o = te.getElementById(i[2])) && ((this[0] = o), (this.length = 1)),
          this
        );
      }
      return e.nodeType
        ? ((this[0] = e), (this.length = 1), this)
        : pe.isFunction(e)
        ? void 0 !== n.ready
          ? n.ready(e)
          : e(pe)
        : pe.makeArray(e, this);
    }).prototype = pe.fn),
      (Se = pe(te));
    var xe = /^(?:parents|prev(?:Until|All))/,
      Ae = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0,
      };
    pe.fn.extend({
      has: function (e) {
        var t = pe(e, this),
          n = t.length;
        return this.filter(function () {
          for (var e = 0; e < n; e++) if (pe.contains(this, t[e])) return !0;
        });
      },
      closest: function (e, t) {
        var n,
          i = 0,
          o = this.length,
          r = [],
          s = "string" != typeof e && pe(e);
        if (!Ce.test(e))
          for (; i < o; i++)
            for (n = this[i]; n && n !== t; n = n.parentNode)
              if (
                n.nodeType < 11 &&
                (s
                  ? s.index(n) > -1
                  : 1 === n.nodeType && pe.find.matchesSelector(n, e))
              ) {
                r.push(n);
                break;
              }
        return this.pushStack(r.length > 1 ? pe.uniqueSort(r) : r);
      },
      index: function (e) {
        return e
          ? "string" == typeof e
            ? se.call(pe(e), this[0])
            : se.call(this, e.jquery ? e[0] : e)
          : this[0] && this[0].parentNode
          ? this.first().prevAll().length
          : -1;
      },
    }),
      pe.each(
        {
          parent: function (e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null;
          },
          parents: function (e) {
            return we(e, "parentNode");
          },
          parentsUntil: function (e, t, n) {
            return we(e, "parentNode", n);
          },
          next: function (e) {
            return s(e, "nextSibling");
          },
          prev: function (e) {
            return s(e, "previousSibling");
          },
          nextAll: function (e) {
            return we(e, "nextSibling");
          },
          prevAll: function (e) {
            return we(e, "previousSibling");
          },
          nextUntil: function (e, t, n) {
            return we(e, "nextSibling", n);
          },
          prevUntil: function (e, t, n) {
            return we(e, "previousSibling", n);
          },
          siblings: function (e) {
            return Te((e.parentNode || {}).firstChild, e);
          },
          children: function (e) {
            return Te(e.firstChild);
          },
          contents: function (e) {
            return o(e, "iframe")
              ? e.contentDocument
              : (o(e, "template") && (e = e.content || e),
                pe.merge([], e.childNodes));
          },
        },
        function (e, t) {
          pe.fn[e] = function (n, i) {
            var o = pe.map(this, t, n);
            return (
              "Until" !== e.slice(-5) && (i = n),
              i && "string" == typeof i && (o = pe.filter(i, o)),
              this.length > 1 &&
                (Ae[e] || pe.uniqueSort(o), xe.test(e) && o.reverse()),
              this.pushStack(o)
            );
          };
        }
      );
    var De = /[^\x20\t\r\n\f]+/g;
    (pe.Callbacks = function (e) {
      e = "string" == typeof e ? a(e) : pe.extend({}, e);
      var t,
        n,
        i,
        o,
        r = [],
        s = [],
        l = -1,
        u = {
          add: function () {
            return (
              r &&
                (n && !t && ((l = r.length - 1), s.push(n)),
                (function t(n) {
                  pe.each(n, function (n, i) {
                    pe.isFunction(i)
                      ? (e.unique && u.has(i)) || r.push(i)
                      : i && i.length && "string" !== pe.type(i) && t(i);
                  });
                })(arguments),
                n && !t && c()),
              this
            );
          },
          remove: function () {
            return (
              pe.each(arguments, function (e, t) {
                for (var n; (n = pe.inArray(t, r, n)) > -1; )
                  r.splice(n, 1), n <= l && l--;
              }),
              this
            );
          },
          has: function (e) {
            return e ? pe.inArray(e, r) > -1 : r.length > 0;
          },
          empty: function () {
            return r && (r = []), this;
          },
          disable: function () {
            return (o = s = []), (r = n = ""), this;
          },
          disabled: function () {
            return !r;
          },
          lock: function () {
            return (o = s = []), n || t || (r = n = ""), this;
          },
          locked: function () {
            return !!o;
          },
          fireWith: function (e, n) {
            return (
              o ||
                ((n = n || []),
                (n = [e, n.slice ? n.slice() : n]),
                s.push(n),
                t || c()),
              this
            );
          },
          fire: function () {
            return u.fireWith(this, arguments), this;
          },
          fired: function () {
            return !!i;
          },
        };
      return u;
    }),
      pe.extend({
        Deferred: function (t) {
          var n = [
              [
                "notify",
                "progress",
                pe.Callbacks("memory"),
                pe.Callbacks("memory"),
                2,
              ],
              [
                "resolve",
                "done",
                pe.Callbacks("once memory"),
                pe.Callbacks("once memory"),
                0,
                "resolved",
              ],
              [
                "reject",
                "fail",
                pe.Callbacks("once memory"),
                pe.Callbacks("once memory"),
                1,
                "rejected",
              ],
            ],
            o = {
              state: function () {
                return i;
              },
              always: function () {
                return r.done(arguments).fail(arguments), this;
              },
              catch: function (e) {
                return o.then(null, e);
              },
              pipe: function () {
                var e = arguments;
                return pe
                  .Deferred(function (t) {
                    pe.each(n, function (n, i) {
                      var o = pe.isFunction(e[i[4]]) && e[i[4]];
                      r[i[1]](function () {
                        var e = o && o.apply(this, arguments);
                        e && pe.isFunction(e.promise)
                          ? e
                              .promise()
                              .progress(t.notify)
                              .done(t.resolve)
                              .fail(t.reject)
                          : t[i[0] + "With"](this, o ? [e] : arguments);
                      });
                    }),
                      (e = null);
                  })
                  .promise();
              },
              then: function (t, i, o) {
                function r(t, n, i, o) {
                  return function () {
                    var a = this,
                      u = arguments,
                      d = function () {
                        var e, d;
                        if (!(t < s)) {
                          if ((e = i.apply(a, u)) === n.promise())
                            throw new TypeError("Thenable self-resolution");
                          (d =
                            e &&
                            ("object" == typeof e || "function" == typeof e) &&
                            e.then),
                            pe.isFunction(d)
                              ? o
                                ? d.call(e, r(s, n, l, o), r(s, n, c, o))
                                : (s++,
                                  d.call(
                                    e,
                                    r(s, n, l, o),
                                    r(s, n, c, o),
                                    r(s, n, l, n.notifyWith)
                                  ))
                              : (i !== l && ((a = void 0), (u = [e])),
                                (o || n.resolveWith)(a, u));
                        }
                      },
                      f = o
                        ? d
                        : function () {
                            try {
                              d();
                            } catch (e) {
                              pe.Deferred.exceptionHook &&
                                pe.Deferred.exceptionHook(e, f.stackTrace),
                                t + 1 >= s &&
                                  (i !== c && ((a = void 0), (u = [e])),
                                  n.rejectWith(a, u));
                            }
                          };
                    t
                      ? f()
                      : (pe.Deferred.getStackHook &&
                          (f.stackTrace = pe.Deferred.getStackHook()),
                        e.setTimeout(f));
                  };
                }
                var s = 0;
                return pe
                  .Deferred(function (e) {
                    n[0][3].add(
                      r(0, e, pe.isFunction(o) ? o : l, e.notifyWith)
                    ),
                      n[1][3].add(r(0, e, pe.isFunction(t) ? t : l)),
                      n[2][3].add(r(0, e, pe.isFunction(i) ? i : c));
                  })
                  .promise();
              },
              promise: function (e) {
                return null != e ? pe.extend(e, o) : o;
              },
            },
            r = {};
          return (
            pe.each(n, function (e, t) {
              var s = t[2],
                a = t[5];
              (o[t[1]] = s.add),
                a &&
                  s.add(
                    function () {
                      i = a;
                    },
                    n[3 - e][2].disable,
                    n[0][2].lock
                  ),
                s.add(t[3].fire),
                (r[t[0]] = function () {
                  return (
                    r[t[0] + "With"](this === r ? void 0 : this, arguments),
                    this
                  );
                }),
                (r[t[0] + "With"] = s.fireWith);
            }),
            o.promise(r),
            t && t.call(r, r),
            r
          );
        },
        when: function (e) {
          var t = arguments.length,
            n = t,
            i = Array(n),
            o = ie.call(arguments),
            r = pe.Deferred(),
            s = function (e) {
              return function (n) {
                (i[e] = this),
                  (o[e] = arguments.length > 1 ? ie.call(arguments) : n),
                  --t || r.resolveWith(i, o);
              };
            };
          if (
            t <= 1 &&
            (u(e, r.done(s(n)).resolve, r.reject, !t),
            "pending" === r.state() || pe.isFunction(o[n] && o[n].then))
          )
            return r.then();
          for (; n--; ) u(o[n], s(n), r.reject);
          return r.promise();
        },
      });

    var Ie = pe.Deferred();

    pe.extend({
      isReady: !1,
      readyWait: 1,
      ready: function (e) {
        (!0 === e ? --pe.readyWait : pe.isReady) ||
          ((pe.isReady = !0),
          (!0 !== e && --pe.readyWait > 0) || Ie.resolveWith(te, [pe]));
      },
    }),
      (pe.ready.then = Ie.then),
      "complete" === te.readyState ||
      ("loading" !== te.readyState && !te.documentElement.doScroll)
        ? e.setTimeout(pe.ready)
        : (te.addEventListener("DOMContentLoaded", d),
          e.addEventListener("load", d));
    var Ne = function (e, t, n, i, o, r, s) {
        var a = 0,
          l = e.length,
          c = null == n;
        if ("object" === pe.type(n)) {
          o = !0;
          for (a in n) Ne(e, t, a, n[a], !0, r, s);
        } else if (
          void 0 !== i &&
          ((o = !0),
          pe.isFunction(i) || (s = !0),
          c &&
            (s
              ? (t.call(e, i), (t = null))
              : ((c = t),
                (t = function (e, t, n) {
                  return c.call(pe(e), n);
                }))),
          t)
        )
          for (; a < l; a++) t(e[a], n, s ? i : i.call(e[a], a, t(e[a], n)));
        return o ? e : c ? t.call(e) : l ? t(e[0], n) : r;
      },
      Le = function (e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
      };
    (f.uid = 1),
      (f.prototype = {
        cache: function (e) {
          var t = e[this.expando];
          return (
            t ||
              ((t = {}),
              Le(e) &&
                (e.nodeType
                  ? (e[this.expando] = t)
                  : Object.defineProperty(e, this.expando, {
                      value: t,
                      configurable: !0,
                    }))),
            t
          );
        },
        set: function (e, t, n) {
          var i,
            o = this.cache(e);
          if ("string" == typeof t) o[pe.camelCase(t)] = n;
          else for (i in t) o[pe.camelCase(i)] = t[i];
          return o;
        },
        get: function (e, t) {
          return void 0 === t
            ? this.cache(e)
            : e[this.expando] && e[this.expando][pe.camelCase(t)];
        },
        access: function (e, t, n) {
          return void 0 === t || (t && "string" == typeof t && void 0 === n)
            ? this.get(e, t)
            : (this.set(e, t, n), void 0 !== n ? n : t);
        },
        remove: function (e, t) {
          var n,
            i = e[this.expando];
          if (void 0 !== i) {
            if (void 0 !== t) {
              Array.isArray(t)
                ? (t = t.map(pe.camelCase))
                : ((t = pe.camelCase(t)),
                  (t = t in i ? [t] : t.match(De) || [])),
                (n = t.length);
              for (; n--; ) delete i[t[n]];
            }
            (void 0 === t || pe.isEmptyObject(i)) &&
              (e.nodeType
                ? (e[this.expando] = void 0)
                : delete e[this.expando]);
          }
        },
        hasData: function (e) {
          var t = e[this.expando];
          return void 0 !== t && !pe.isEmptyObject(t);
        },
      });
    var $e = new f(),
      He = new f(),
      Fe = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/;

    var je = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
      Re = ["Top", "Right", "Bottom", "Left"],
      ze = {};

    var Be = /^(?:checkbox|radio)$/i,
      Ue = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
      Ve = /^$|\/(?:java|ecma)script/i,
      Xe = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""],
      };

    var Ge = te.documentElement,
      Ke = /^key/,
      Qe = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
      Ze = /^([^.]*)(?:\.(.+)|)/;
    (pe.event = {
      global: {},
      add: function (e, t, n, i, o) {
        var r,
          s,
          a,
          l,
          c,
          u,
          d,
          f,
          h,
          p,
          g,
          m = $e.get(e);
        if (m)
          for (
            n.handler && ((r = n), (n = r.handler), (o = r.selector)),
              o && pe.find.matchesSelector(Ge, o),
              n.guid || (n.guid = pe.guid++),
              (l = m.events) || (l = m.events = {}),
              (s = m.handle) ||
                (s = m.handle =
                  function (t) {
                    return void 0 !== pe && pe.event.triggered !== t.type
                      ? pe.event.dispatch.apply(e, arguments)
                      : void 0;
                  }),
              c = (t = (t || "").match(De) || [""]).length;
            c--;

          )
            (a = Ze.exec(t[c]) || []),
              (h = g = a[1]),
              (p = (a[2] || "").split(".").sort()),
              h &&
                ((d = pe.event.special[h] || {}),
                (h = (o ? d.delegateType : d.bindType) || h),
                (d = pe.event.special[h] || {}),
                (u = pe.extend(
                  {
                    type: h,
                    origType: g,
                    data: i,
                    handler: n,
                    guid: n.guid,
                    selector: o,
                    needsContext: o && pe.expr.match.needsContext.test(o),
                    namespace: p.join("."),
                  },
                  r
                )),
                (f = l[h]) ||
                  ((f = l[h] = []),
                  (f.delegateCount = 0),
                  (d.setup && !1 !== d.setup.call(e, i, p, s)) ||
                    (e.addEventListener && e.addEventListener(h, s))),
                d.add &&
                  (d.add.call(e, u),
                  u.handler.guid || (u.handler.guid = n.guid)),
                o ? f.splice(f.delegateCount++, 0, u) : f.push(u),
                (pe.event.global[h] = !0));
      },
      remove: function (e, t, n, i, o) {
        var r,
          s,
          a,
          l,
          c,
          u,
          d,
          f,
          h,
          p,
          g,
          m = $e.hasData(e) && $e.get(e);
        if (m && (l = m.events)) {
          for (c = (t = (t || "").match(De) || [""]).length; c--; )
            if (
              ((a = Ze.exec(t[c]) || []),
              (h = g = a[1]),
              (p = (a[2] || "").split(".").sort()),
              h)
            ) {
              for (
                d = pe.event.special[h] || {},
                  f = l[(h = (i ? d.delegateType : d.bindType) || h)] || [],
                  a =
                    a[2] &&
                    new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                  s = r = f.length;
                r--;

              )
                (u = f[r]),
                  (!o && g !== u.origType) ||
                    (n && n.guid !== u.guid) ||
                    (a && !a.test(u.namespace)) ||
                    (i && i !== u.selector && ("**" !== i || !u.selector)) ||
                    (f.splice(r, 1),
                    u.selector && f.delegateCount--,
                    d.remove && d.remove.call(e, u));
              s &&
                !f.length &&
                ((d.teardown && !1 !== d.teardown.call(e, p, m.handle)) ||
                  pe.removeEvent(e, h, m.handle),
                delete l[h]);
            } else for (h in l) pe.event.remove(e, h + t[c], n, i, !0);
          pe.isEmptyObject(l) && $e.remove(e, "handle events");
        }
      },
      dispatch: function (e) {
        var t,
          n,
          i,
          o,
          r,
          s,
          a = pe.event.fix(e),
          l = new Array(arguments.length),
          c = ($e.get(this, "events") || {})[a.type] || [],
          u = pe.event.special[a.type] || {};
        for (l[0] = a, t = 1; t < arguments.length; t++) l[t] = arguments[t];
        if (
          ((a.delegateTarget = this),
          !u.preDispatch || !1 !== u.preDispatch.call(this, a))
        ) {
          for (
            s = pe.event.handlers.call(this, a, c), t = 0;
            (o = s[t++]) && !a.isPropagationStopped();

          )
            for (
              a.currentTarget = o.elem, n = 0;
              (r = o.handlers[n++]) && !a.isImmediatePropagationStopped();

            )
              (a.rnamespace && !a.rnamespace.test(r.namespace)) ||
                ((a.handleObj = r),
                (a.data = r.data),
                void 0 !==
                  (i = (
                    (pe.event.special[r.origType] || {}).handle || r.handler
                  ).apply(o.elem, l)) &&
                  !1 === (a.result = i) &&
                  (a.preventDefault(), a.stopPropagation()));
          return u.postDispatch && u.postDispatch.call(this, a), a.result;
        }
      },
      handlers: function (e, t) {
        var n,
          i,
          o,
          r,
          s,
          a = [],
          l = t.delegateCount,
          c = e.target;
        if (l && c.nodeType && !("click" === e.type && e.button >= 1))
          for (; c !== this; c = c.parentNode || this)
            if (1 === c.nodeType && ("click" !== e.type || !0 !== c.disabled)) {
              for (r = [], s = {}, n = 0; n < l; n++)
                (i = t[n]),
                  (o = i.selector + " "),
                  void 0 === s[o] &&
                    (s[o] = i.needsContext
                      ? pe(o, this).index(c) > -1
                      : pe.find(o, this, null, [c]).length),
                  s[o] && r.push(i);
              r.length &&
                a.push({
                  elem: c,
                  handlers: r,
                });
            }
        return (
          (c = this),
          l < t.length &&
            a.push({
              elem: c,
              handlers: t.slice(l),
            }),
          a
        );
      },
      addProp: function (e, t) {
        Object.defineProperty(pe.Event.prototype, e, {
          enumerable: !0,
          configurable: !0,
          get: pe.isFunction(t)
            ? function () {
                if (this.originalEvent) return t(this.originalEvent);
              }
            : function () {
                if (this.originalEvent) return this.originalEvent[e];
              },
          set: function (t) {
            Object.defineProperty(this, e, {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: t,
            });
          },
        });
      },
      fix: function (e) {
        return e[pe.expando] ? e : new pe.Event(e);
      },
      special: {
        load: {
          noBubble: !0,
        },
        focus: {
          trigger: function () {
            if (this !== _() && this.focus) return this.focus(), !1;
          },
          delegateType: "focusin",
        },
        blur: {
          trigger: function () {
            if (this === _() && this.blur) return this.blur(), !1;
          },
          delegateType: "focusout",
        },
        click: {
          trigger: function () {
            if ("checkbox" === this.type && this.click && o(this, "input"))
              return this.click(), !1;
          },
          _default: function (e) {
            return o(e.target, "a");
          },
        },
        beforeunload: {
          postDispatch: function (e) {
            void 0 !== e.result &&
              e.originalEvent &&
              (e.originalEvent.returnValue = e.result);
          },
        },
      },
    }),
      (pe.Event = function (e, t) {
        return this instanceof pe.Event
          ? (e && e.type
              ? ((this.originalEvent = e),
                (this.type = e.type),
                (this.isDefaultPrevented =
                  e.defaultPrevented ||
                  (void 0 === e.defaultPrevented && !1 === e.returnValue)
                    ? T
                    : C),
                (this.target =
                  e.target && 3 === e.target.nodeType
                    ? e.target.parentNode
                    : e.target),
                (this.currentTarget = e.currentTarget),
                (this.relatedTarget = e.relatedTarget))
              : (this.type = e),
            t && pe.extend(this, t),
            (this.timeStamp = (e && e.timeStamp) || pe.now()),
            void (this[pe.expando] = !0))
          : new pe.Event(e, t);
      }),
      (pe.Event.prototype = {
        constructor: pe.Event,
        isDefaultPrevented: C,
        isPropagationStopped: C,
        isImmediatePropagationStopped: C,
        isSimulated: !1,
        preventDefault: function () {
          var e = this.originalEvent;
          (this.isDefaultPrevented = T),
            e && !this.isSimulated && e.preventDefault();
        },
        stopPropagation: function () {
          var e = this.originalEvent;
          (this.isPropagationStopped = T),
            e && !this.isSimulated && e.stopPropagation();
        },
        stopImmediatePropagation: function () {
          var e = this.originalEvent;
          (this.isImmediatePropagationStopped = T),
            e && !this.isSimulated && e.stopImmediatePropagation(),
            this.stopPropagation();
        },
      }),
      pe.fn.extend({
        on: function (e, t, n, i) {
          return E(this, e, t, n, i);
        },
        one: function (e, t, n, i) {
          return E(this, e, t, n, i, 1);
        },
        off: function (e, t, n) {
          var i, o;
          if (e && e.preventDefault && e.handleObj)
            return (
              (i = e.handleObj),
              pe(e.delegateTarget).off(
                i.namespace ? i.origType + "." + i.namespace : i.origType,
                i.selector,
                i.handler
              ),
              this
            );
          if ("object" == typeof e) {
            for (o in e) this.off(o, t, e[o]);
            return this;
          }
          return (
            (!1 !== t && "function" != typeof t) || ((n = t), (t = void 0)),
            !1 === n && (n = C),
            this.each(function () {
              pe.event.remove(this, e, n, t);
            })
          );
        },
      });

    var ot = /^margin/,
      rt = new RegExp("^(" + je + ")(?!px)[a-z%]+$", "i"),
      st = function (t) {
        var n = t.ownerDocument.defaultView;
        return (n && n.opener) || (n = e), n.getComputedStyle(t);
      };
    !(function () {
      function t() {
        if (a) {
          (a.style.cssText =
            "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%"),
            (a.innerHTML = ""),
            Ge.appendChild(s);
          var t = e.getComputedStyle(a);
          (n = "1%" !== t.top),
            (r = "2px" === t.marginLeft),
            (i = "4px" === t.width),
            (a.style.marginRight = "50%"),
            (o = "4px" === t.marginRight),
            Ge.removeChild(s),
            (a = null);
        }
      }
      var n,
        i,
        o,
        r,
        s = te.createElement("div"),
        a = te.createElement("div");
      a.style &&
        ((a.style.backgroundClip = "content-box"),
        (a.cloneNode(!0).style.backgroundClip = ""),
        (fe.clearCloneStyle = "content-box" === a.style.backgroundClip),
        (s.style.cssText =
          "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute"),
        s.appendChild(a),
        pe.extend(fe, {
          pixelPosition: function () {
            return t(), n;
          },
          boxSizingReliable: function () {
            return t(), i;
          },
          pixelMarginRight: function () {
            return t(), o;
          },
          reliableMarginLeft: function () {
            return t(), r;
          },
        }));
    })();
    var at = /^(none|table(?!-c[ea]).+)/,
      lt = /^--/,
      ct = {
        position: "absolute",
        visibility: "hidden",
        display: "block",
      },
      ut = {
        letterSpacing: "0",
        fontWeight: "400",
      },
      dt = ["Webkit", "Moz", "ms"],
      ft = te.createElement("div").style;
    pe.extend({
      cssHooks: {
        opacity: {
          get: function (e, t) {
            if (t) {
              var n = N(e, "opacity");
              return "" === n ? "1" : n;
            }
          },
        },
      },
      cssNumber: {
        animationIterationCount: !0,
        columnCount: !0,
        fillOpacity: !0,
        flexGrow: !0,
        flexShrink: !0,
        fontWeight: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
      },
      cssProps: {
        float: "cssFloat",
      },
      style: function (e, t, n, i) {
        if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
          var o,
            r,
            s,
            a = pe.camelCase(t),
            l = lt.test(t),
            c = e.style;
          return (
            l || (t = H(a)),
            (s = pe.cssHooks[t] || pe.cssHooks[a]),
            void 0 === n
              ? s && "get" in s && void 0 !== (o = s.get(e, !1, i))
                ? o
                : c[t]
              : ("string" === (r = typeof n) &&
                  (o = Me.exec(n)) &&
                  o[1] &&
                  ((n = g(e, t, o)), (r = "number")),
                void (
                  null != n &&
                  n === n &&
                  ("number" === r &&
                    (n += (o && o[3]) || (pe.cssNumber[a] ? "" : "px")),
                  fe.clearCloneStyle ||
                    "" !== n ||
                    0 !== t.indexOf("background") ||
                    (c[t] = "inherit"),
                  (s && "set" in s && void 0 === (n = s.set(e, n, i))) ||
                    (l ? c.setProperty(t, n) : (c[t] = n)))
                ))
          );
        }
      },
      css: function (e, t, n, i) {
        var o,
          r,
          s,
          a = pe.camelCase(t);
        return (
          lt.test(t) || (t = H(a)),
          (s = pe.cssHooks[t] || pe.cssHooks[a]) &&
            "get" in s &&
            (o = s.get(e, !0, n)),
          void 0 === o && (o = N(e, t, i)),
          "normal" === o && t in ut && (o = ut[t]),
          "" === n || n
            ? ((r = parseFloat(o)), !0 === n || isFinite(r) ? r || 0 : o)
            : o
        );
      },
    }),
      (M.prototype = {
        constructor: M,
        init: function (e, t, n, i, o, r) {
          (this.elem = e),
            (this.prop = n),
            (this.easing = o || pe.easing._default),
            (this.options = t),
            (this.start = this.now = this.cur()),
            (this.end = i),
            (this.unit = r || (pe.cssNumber[n] ? "" : "px"));
        },
        cur: function () {
          var e = M.propHooks[this.prop];
          return e && e.get ? e.get(this) : M.propHooks._default.get(this);
        },
        run: function (e) {
          var t,
            n = M.propHooks[this.prop];
          return (
            this.options.duration
              ? (this.pos = t =
                  pe.easing[this.easing](
                    e,
                    this.options.duration * e,
                    0,
                    1,
                    this.options.duration
                  ))
              : (this.pos = t = e),
            (this.now = (this.end - this.start) * t + this.start),
            this.options.step &&
              this.options.step.call(this.elem, this.now, this),
            n && n.set ? n.set(this) : M.propHooks._default.set(this),
            this
          );
        },
      }),
      (M.propHooks = {
        _default: {
          get: function (e) {
            var t;
            return 1 !== e.elem.nodeType ||
              (null != e.elem[e.prop] && null == e.elem.style[e.prop])
              ? e.elem[e.prop]
              : (t = pe.css(e.elem, e.prop, "")) && "auto" !== t
              ? t
              : 0;
          },
          set: function (e) {
            pe.fx.step[e.prop]
              ? pe.fx.step[e.prop](e)
              : 1 !== e.elem.nodeType ||
                (null == e.elem.style[pe.cssProps[e.prop]] &&
                  !pe.cssHooks[e.prop])
              ? (e.elem[e.prop] = e.now)
              : pe.style(e.elem, e.prop, e.now + e.unit);
          },
        },
      }),
      (M.propHooks.scrollTop = M.propHooks.scrollLeft =
        {
          set: function (e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
          },
        }),
      (pe.easing = {
        linear: function (e) {
          return e;
        },
        swing: function (e) {
          return 0.5 - Math.cos(e * Math.PI) / 2;
        },
        _default: "swing",
      }),
      (pe.fx = M.prototype.init),
      (pe.fx.step = {});
    var ht,
      pt,
      gt = /^(?:toggle|show|hide)$/,
      mt = /queueHooks$/;
    (pe.Animation = pe.extend(U, {
      tweeners: {
        "*": [
          function (e, t) {
            var n = this.createTween(e, t);
            return g(n.elem, e, Me.exec(t), n), n;
          },
        ],
      },
      tweener: function (e, t) {
        pe.isFunction(e) ? ((t = e), (e = ["*"])) : (e = e.match(De));
        for (var n, i = 0, o = e.length; i < o; i++)
          (n = e[i]),
            (U.tweeners[n] = U.tweeners[n] || []),
            U.tweeners[n].unshift(t);
      },
      prefilters: [
        function (e, t, n) {
          var i,
            o,
            r,
            s,
            a,
            l,
            c,
            u,
            d = "width" in t || "height" in t,
            f = this,
            h = {},
            p = e.style,
            g = e.nodeType && We(e),
            m = $e.get(e, "fxshow");
          n.queue ||
            (null == (s = pe._queueHooks(e, "fx")).unqueued &&
              ((s.unqueued = 0),
              (a = s.empty.fire),
              (s.empty.fire = function () {
                s.unqueued || a();
              })),
            s.unqueued++,
            f.always(function () {
              f.always(function () {
                s.unqueued--, pe.queue(e, "fx").length || s.empty.fire();
              });
            }));
          for (i in t)
            if (((o = t[i]), gt.test(o))) {
              if (
                (delete t[i],
                (r = r || "toggle" === o),
                o === (g ? "hide" : "show"))
              ) {
                if ("show" !== o || !m || void 0 === m[i]) continue;
                g = !0;
              }
              h[i] = (m && m[i]) || pe.style(e, i);
            }
          if ((l = !pe.isEmptyObject(t)) || !pe.isEmptyObject(h)) {
            d &&
              1 === e.nodeType &&
              ((n.overflow = [p.overflow, p.overflowX, p.overflowY]),
              null == (c = m && m.display) && (c = $e.get(e, "display")),
              "none" === (u = pe.css(e, "display")) &&
                (c
                  ? (u = c)
                  : (v([e], !0),
                    (c = e.style.display || c),
                    (u = pe.css(e, "display")),
                    v([e]))),
              ("inline" === u || ("inline-block" === u && null != c)) &&
                "none" === pe.css(e, "float") &&
                (l ||
                  (f.done(function () {
                    p.display = c;
                  }),
                  null == c && ((u = p.display), (c = "none" === u ? "" : u))),
                (p.display = "inline-block"))),
              n.overflow &&
                ((p.overflow = "hidden"),
                f.always(function () {
                  (p.overflow = n.overflow[0]),
                    (p.overflowX = n.overflow[1]),
                    (p.overflowY = n.overflow[2]);
                })),
              (l = !1);
            for (i in h)
              l ||
                (m
                  ? "hidden" in m && (g = m.hidden)
                  : (m = $e.access(e, "fxshow", {
                      display: c,
                    })),
                r && (m.hidden = !g),
                g && v([e], !0),
                f.done(function () {
                  g || v([e]), $e.remove(e, "fxshow");
                  for (i in h) pe.style(e, i, h[i]);
                })),
                (l = z(g ? m[i] : 0, i, f)),
                i in m ||
                  ((m[i] = l.start), g && ((l.end = l.start), (l.start = 0)));
          }
        },
      ],
      prefilter: function (e, t) {
        t ? U.prefilters.unshift(e) : U.prefilters.push(e);
      },
    })),
      (pe.speed = function (e, t, n) {
        var i =
          e && "object" == typeof e
            ? pe.extend({}, e)
            : {
                complete: n || (!n && t) || (pe.isFunction(e) && e),
                duration: e,
                easing: (n && t) || (t && !pe.isFunction(t) && t),
              };
        return (
          pe.fx.off
            ? (i.duration = 0)
            : "number" != typeof i.duration &&
              (i.duration in pe.fx.speeds
                ? (i.duration = pe.fx.speeds[i.duration])
                : (i.duration = pe.fx.speeds._default)),
          (null != i.queue && !0 !== i.queue) || (i.queue = "fx"),
          (i.old = i.complete),
          (i.complete = function () {
            pe.isFunction(i.old) && i.old.call(this),
              i.queue && pe.dequeue(this, i.queue);
          }),
          i
        );
      }),
      pe.fn.extend({
        fadeTo: function (e, t, n, i) {
          return this.filter(We).css("opacity", 0).show().end().animate(
            {
              opacity: t,
            },
            e,
            n,
            i
          );
        },
        animate: function (e, t, n, i) {
          var o = pe.isEmptyObject(e),
            r = pe.speed(t, n, i),
            s = function () {
              var t = U(this, pe.extend({}, e), r);
              (o || $e.get(this, "finish")) && t.stop(!0);
            };
          return (
            (s.finish = s),
            o || !1 === r.queue ? this.each(s) : this.queue(r.queue, s)
          );
        },
        stop: function (e, t, n) {
          var i = function (e) {
            var t = e.stop;
            delete e.stop, t(n);
          };
          return (
            "string" != typeof e && ((n = t), (t = e), (e = void 0)),
            t && !1 !== e && this.queue(e || "fx", []),
            this.each(function () {
              var t = !0,
                o = null != e && e + "queueHooks",
                r = pe.timers,
                s = $e.get(this);
              if (o) s[o] && s[o].stop && i(s[o]);
              else for (o in s) s[o] && s[o].stop && mt.test(o) && i(s[o]);
              for (o = r.length; o--; )
                r[o].elem !== this ||
                  (null != e && r[o].queue !== e) ||
                  (r[o].anim.stop(n), (t = !1), r.splice(o, 1));
              (!t && n) || pe.dequeue(this, e);
            })
          );
        },
        finish: function (e) {
          return (
            !1 !== e && (e = e || "fx"),
            this.each(function () {
              var t,
                n = $e.get(this),
                i = n[e + "queue"],
                o = n[e + "queueHooks"],
                r = pe.timers,
                s = i ? i.length : 0;
              for (
                n.finish = !0,
                  pe.queue(this, e, []),
                  o && o.stop && o.stop.call(this, !0),
                  t = r.length;
                t--;

              )
                r[t].elem === this &&
                  r[t].queue === e &&
                  (r[t].anim.stop(!0), r.splice(t, 1));
              for (t = 0; t < s; t++)
                i[t] && i[t].finish && i[t].finish.call(this);
              delete n.finish;
            })
          );
        },
      }),
      pe.each(["toggle", "show", "hide"], function (e, t) {
        var n = pe.fn[t];
        pe.fn[t] = function (e, i, o) {
          return null == e || "boolean" == typeof e
            ? n.apply(this, arguments)
            : this.animate(q(t, !0), e, i, o);
        };
      }),
      pe.each(
        {
          slideDown: q("show"),
          slideUp: q("hide"),
          slideToggle: q("toggle"),
          fadeIn: {
            opacity: "show",
          },
          fadeOut: {
            opacity: "hide",
          },
          fadeToggle: {
            opacity: "toggle",
          },
        },
        function (e, t) {
          pe.fn[e] = function (e, n, i) {
            return this.animate(t, e, n, i);
          };
        }
      ),
      (pe.timers = []),
      (pe.fx.tick = function () {
        var e,
          t = 0,
          n = pe.timers;
        for (ht = pe.now(); t < n.length; t++)
          (e = n[t])() || n[t] !== e || n.splice(t--, 1);
        n.length || pe.fx.stop(), (ht = void 0);
      }),
      (pe.fx.timer = function (e) {
        pe.timers.push(e), pe.fx.start();
      }),
      (pe.fx.interval = 13),
      (pe.fx.start = function () {
        pt || ((pt = !0), R());
      }),
      (pe.fx.stop = function () {
        pt = null;
      }),
      (pe.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400,
      }),
      (pe.fn.delay = function (t, n) {
        return (
          (t = pe.fx ? pe.fx.speeds[t] || t : t),
          (n = n || "fx"),
          this.queue(n, function (n, i) {
            var o = e.setTimeout(n, t);
            i.stop = function () {
              e.clearTimeout(o);
            };
          })
        );
      }),
      (function () {
        var e = te.createElement("input"),
          t = te
            .createElement("select")
            .appendChild(te.createElement("option"));
        (e.type = "checkbox"),
          (fe.checkOn = "" !== e.value),
          (fe.optSelected = t.selected),
          ((e = te.createElement("input")).value = "t"),
          (e.type = "radio"),
          (fe.radioValue = "t" === e.value);
      })();
    var vt,
      yt = pe.expr.attrHandle;
    pe.fn.extend({
      attr: function (e, t) {
        return Ne(this, pe.attr, e, t, arguments.length > 1);
      },
      removeAttr: function (e) {
        return this.each(function () {
          pe.removeAttr(this, e);
        });
      },
    }),
      pe.extend({
        attr: function (e, t, n) {
          var i,
            o,
            r = e.nodeType;
          if (3 !== r && 8 !== r && 2 !== r)
            return void 0 === e.getAttribute
              ? pe.prop(e, t, n)
              : ((1 === r && pe.isXMLDoc(e)) ||
                  (o =
                    pe.attrHooks[t.toLowerCase()] ||
                    (pe.expr.match.bool.test(t) ? vt : void 0)),
                void 0 !== n
                  ? null === n
                    ? void pe.removeAttr(e, t)
                    : o && "set" in o && void 0 !== (i = o.set(e, n, t))
                    ? i
                    : (e.setAttribute(t, n + ""), n)
                  : o && "get" in o && null !== (i = o.get(e, t))
                  ? i
                  : null == (i = pe.find.attr(e, t))
                  ? void 0
                  : i);
        },
        attrHooks: {
          type: {
            set: function (e, t) {
              if (!fe.radioValue && "radio" === t && o(e, "input")) {
                var n = e.value;
                return e.setAttribute("type", t), n && (e.value = n), t;
              }
            },
          },
        },
        removeAttr: function (e, t) {
          var n,
            i = 0,
            o = t && t.match(De);
          if (o && 1 === e.nodeType)
            for (; (n = o[i++]); ) e.removeAttribute(n);
        },
      }),
      (vt = {
        set: function (e, t, n) {
          return !1 === t ? pe.removeAttr(e, n) : e.setAttribute(n, n), n;
        },
      }),
      pe.each(pe.expr.match.bool.source.match(/\w+/g), function (e, t) {
        var n = yt[t] || pe.find.attr;
        yt[t] = function (e, t, i) {
          var o,
            r,
            s = t.toLowerCase();
          return (
            i ||
              ((r = yt[s]),
              (yt[s] = o),
              (o = null != n(e, t, i) ? s : null),
              (yt[s] = r)),
            o
          );
        };
      });
    var bt = /^(?:input|select|textarea|button)$/i,
      wt = /^(?:a|area)$/i;
    pe.fn.extend({
      prop: function (e, t) {
        return Ne(this, pe.prop, e, t, arguments.length > 1);
      },
      removeProp: function (e) {
        return this.each(function () {
          delete this[pe.propFix[e] || e];
        });
      },
    }),
      pe.extend({
        prop: function (e, t, n) {
          var i,
            o,
            r = e.nodeType;
          if (3 !== r && 8 !== r && 2 !== r)
            return (
              (1 === r && pe.isXMLDoc(e)) ||
                ((t = pe.propFix[t] || t), (o = pe.propHooks[t])),
              void 0 !== n
                ? o && "set" in o && void 0 !== (i = o.set(e, n, t))
                  ? i
                  : (e[t] = n)
                : o && "get" in o && null !== (i = o.get(e, t))
                ? i
                : e[t]
            );
        },
        propHooks: {
          tabIndex: {
            get: function (e) {
              var t = pe.find.attr(e, "tabindex");
              return t
                ? parseInt(t, 10)
                : bt.test(e.nodeName) || (wt.test(e.nodeName) && e.href)
                ? 0
                : -1;
            },
          },
        },
        propFix: {
          for: "htmlFor",
          class: "className",
        },
      }),
      fe.optSelected ||
        (pe.propHooks.selected = {
          get: function (e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null;
          },
          set: function (e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
          },
        }),
      pe.each(
        [
          "tabIndex",
          "readOnly",
          "maxLength",
          "cellSpacing",
          "cellPadding",
          "rowSpan",
          "colSpan",
          "useMap",
          "frameBorder",
          "contentEditable",
        ],
        function () {
          pe.propFix[this.toLowerCase()] = this;
        }
      ),
      pe.fn.extend({
        addClass: function (e) {
          var t,
            n,
            i,
            o,
            r,
            s,
            a,
            l = 0;
          if (pe.isFunction(e))
            return this.each(function (t) {
              pe(this).addClass(e.call(this, t, X(this)));
            });
          if ("string" == typeof e && e)
            for (t = e.match(De) || []; (n = this[l++]); )
              if (((o = X(n)), (i = 1 === n.nodeType && " " + V(o) + " "))) {
                for (s = 0; (r = t[s++]); )
                  i.indexOf(" " + r + " ") < 0 && (i += r + " ");
                o !== (a = V(i)) && n.setAttribute("class", a);
              }
          return this;
        },
        removeClass: function (e) {
          var t,
            n,
            i,
            o,
            r,
            s,
            a,
            l = 0;
          if (pe.isFunction(e))
            return this.each(function (t) {
              pe(this).removeClass(e.call(this, t, X(this)));
            });
          if (!arguments.length) return this.attr("class", "");
          if ("string" == typeof e && e)
            for (t = e.match(De) || []; (n = this[l++]); )
              if (((o = X(n)), (i = 1 === n.nodeType && " " + V(o) + " "))) {
                for (s = 0; (r = t[s++]); )
                  for (; i.indexOf(" " + r + " ") > -1; )
                    i = i.replace(" " + r + " ", " ");
                o !== (a = V(i)) && n.setAttribute("class", a);
              }
          return this;
        },
        toggleClass: function (e, t) {
          var n = typeof e;
          return "boolean" == typeof t && "string" === n
            ? t
              ? this.addClass(e)
              : this.removeClass(e)
            : pe.isFunction(e)
            ? this.each(function (n) {
                pe(this).toggleClass(e.call(this, n, X(this), t), t);
              })
            : this.each(function () {
                var t, i, o, r;
                if ("string" === n)
                  for (
                    i = 0, o = pe(this), r = e.match(De) || [];
                    (t = r[i++]);

                  )
                    o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
                else
                  (void 0 !== e && "boolean" !== n) ||
                    ((t = X(this)) && $e.set(this, "__className__", t),
                    this.setAttribute &&
                      this.setAttribute(
                        "class",
                        t || !1 === e ? "" : $e.get(this, "__className__") || ""
                      ));
              });
        },
        hasClass: function (e) {
          var t,
            n,
            i = 0;
          for (t = " " + e + " "; (n = this[i++]); )
            if (1 === n.nodeType && (" " + V(X(n)) + " ").indexOf(t) > -1)
              return !0;
          return !1;
        },
      });
    var Tt = /\r/g;
    pe.fn.extend({
      val: function (e) {
        var t,
          n,
          i,
          o = this[0];
        return arguments.length
          ? ((i = pe.isFunction(e)),
            this.each(function (n) {
              var o;
              1 === this.nodeType &&
                (null == (o = i ? e.call(this, n, pe(this).val()) : e)
                  ? (o = "")
                  : "number" == typeof o
                  ? (o += "")
                  : Array.isArray(o) &&
                    (o = pe.map(o, function (e) {
                      return null == e ? "" : e + "";
                    })),
                ((t =
                  pe.valHooks[this.type] ||
                  pe.valHooks[this.nodeName.toLowerCase()]) &&
                  "set" in t &&
                  void 0 !== t.set(this, o, "value")) ||
                  (this.value = o));
            }))
          : o
          ? (t =
              pe.valHooks[o.type] || pe.valHooks[o.nodeName.toLowerCase()]) &&
            "get" in t &&
            void 0 !== (n = t.get(o, "value"))
            ? n
            : "string" == typeof (n = o.value)
            ? n.replace(Tt, "")
            : null == n
            ? ""
            : n
          : void 0;
      },
    }),
      pe.extend({
        valHooks: {
          option: {
            get: function (e) {
              var t = pe.find.attr(e, "value");
              return null != t ? t : V(pe.text(e));
            },
          },
          select: {
            get: function (e) {
              var t,
                n,
                i,
                r = e.options,
                s = e.selectedIndex,
                a = "select-one" === e.type,
                l = a ? null : [],
                c = a ? s + 1 : r.length;
              for (i = s < 0 ? c : a ? s : 0; i < c; i++)
                if (
                  ((n = r[i]).selected || i === s) &&
                  !n.disabled &&
                  (!n.parentNode.disabled || !o(n.parentNode, "optgroup"))
                ) {
                  if (((t = pe(n).val()), a)) return t;
                  l.push(t);
                }
              return l;
            },
            set: function (e, t) {
              for (
                var n, i, o = e.options, r = pe.makeArray(t), s = o.length;
                s--;

              )
                (i = o[s]),
                  (i.selected =
                    pe.inArray(pe.valHooks.option.get(i), r) > -1) && (n = !0);
              return n || (e.selectedIndex = -1), r;
            },
          },
        },
      }),
      pe.each(["radio", "checkbox"], function () {
        (pe.valHooks[this] = {
          set: function (e, t) {
            if (Array.isArray(t))
              return (e.checked = pe.inArray(pe(e).val(), t) > -1);
          },
        }),
          fe.checkOn ||
            (pe.valHooks[this].get = function (e) {
              return null === e.getAttribute("value") ? "on" : e.value;
            });
      });
    var Ct = /^(?:focusinfocus|focusoutblur)$/;
    pe.extend(pe.event, {
      trigger: function (t, n, i, o) {
        var r,
          s,
          a,
          l,
          c,
          u,
          d,
          f = [i || te],
          h = ce.call(t, "type") ? t.type : t,
          p = ce.call(t, "namespace") ? t.namespace.split(".") : [];
        if (
          ((s = a = i = i || te),
          3 !== i.nodeType &&
            8 !== i.nodeType &&
            !Ct.test(h + pe.event.triggered) &&
            (h.indexOf(".") > -1 &&
              ((p = h.split(".")), (h = p.shift()), p.sort()),
            (c = h.indexOf(":") < 0 && "on" + h),
            (t = t[pe.expando]
              ? t
              : new pe.Event(h, "object" == typeof t && t)),
            (t.isTrigger = o ? 2 : 3),
            (t.namespace = p.join(".")),
            (t.rnamespace = t.namespace
              ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)")
              : null),
            (t.result = void 0),
            t.target || (t.target = i),
            (n = null == n ? [t] : pe.makeArray(n, [t])),
            (d = pe.event.special[h] || {}),
            o || !d.trigger || !1 !== d.trigger.apply(i, n)))
        ) {
          if (!o && !d.noBubble && !pe.isWindow(i)) {
            for (
              l = d.delegateType || h, Ct.test(l + h) || (s = s.parentNode);
              s;
              s = s.parentNode
            )
              f.push(s), (a = s);
            a === (i.ownerDocument || te) &&
              f.push(a.defaultView || a.parentWindow || e);
          }
          for (r = 0; (s = f[r++]) && !t.isPropagationStopped(); )
            (t.type = r > 1 ? l : d.bindType || h),
              (u =
                ($e.get(s, "events") || {})[t.type] && $e.get(s, "handle")) &&
                u.apply(s, n),
              (u = c && s[c]) &&
                u.apply &&
                Le(s) &&
                ((t.result = u.apply(s, n)),
                !1 === t.result && t.preventDefault());
          return (
            (t.type = h),
            o ||
              t.isDefaultPrevented() ||
              (d._default && !1 !== d._default.apply(f.pop(), n)) ||
              !Le(i) ||
              (c &&
                pe.isFunction(i[h]) &&
                !pe.isWindow(i) &&
                ((a = i[c]) && (i[c] = null),
                (pe.event.triggered = h),
                i[h](),
                (pe.event.triggered = void 0),
                a && (i[c] = a))),
            t.result
          );
        }
      },
      simulate: function (e, t, n) {
        var i = pe.extend(new pe.Event(), n, {
          type: e,
          isSimulated: !0,
        });
        pe.event.trigger(i, null, t);
      },
    }),
      pe.fn.extend({
        trigger: function (e, t) {
          return this.each(function () {
            pe.event.trigger(e, t, this);
          });
        },
        triggerHandler: function (e, t) {
          var n = this[0];
          if (n) return pe.event.trigger(e, t, n, !0);
        },
      }),
      pe.each(
        "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
          " "
        ),
        function (e, t) {
          pe.fn[t] = function (e, n) {
            return arguments.length > 0
              ? this.on(t, null, e, n)
              : this.trigger(t);
          };
        }
      ),
      pe.fn.extend({
        hover: function (e, t) {
          return this.mouseenter(e).mouseleave(t || e);
        },
      }),
      (fe.focusin = "onfocusin" in e),
      fe.focusin ||
        pe.each(
          {
            focus: "focusin",
            blur: "focusout",
          },
          function (e, t) {
            var n = function (e) {
              pe.event.simulate(t, e.target, pe.event.fix(e));
            };
            pe.event.special[t] = {
              setup: function () {
                var i = this.ownerDocument || this,
                  o = $e.access(i, t);
                o || i.addEventListener(e, n, !0),
                  $e.access(i, t, (o || 0) + 1);
              },
              teardown: function () {
                var i = this.ownerDocument || this,
                  o = $e.access(i, t) - 1;
                o
                  ? $e.access(i, t, o)
                  : (i.removeEventListener(e, n, !0), $e.remove(i, t));
              },
            };
          }
        );
    var _t = e.location,
      Et = pe.now(),
      St = /\?/;
    pe.parseXML = function (t) {
      var n;
      if (!t || "string" != typeof t) return null;
      try {
        n = new e.DOMParser().parseFromString(t, "text/xml");
      } catch (e) {
        n = void 0;
      }
      return (
        (n && !n.getElementsByTagName("parsererror").length) ||
          pe.error("Invalid XML: " + t),
        n
      );
    };
    var kt = /\[\]$/,
      xt = /\r?\n/g,
      At = /^(?:submit|button|image|reset|file)$/i,
      Dt = /^(?:input|select|textarea|keygen)/i;
    (pe.param = function (e, t) {
      var n,
        i = [],
        o = function (e, t) {
          var n = pe.isFunction(t) ? t() : t;
          i[i.length] =
            encodeURIComponent(e) +
            "=" +
            encodeURIComponent(null == n ? "" : n);
        };
      if (Array.isArray(e) || (e.jquery && !pe.isPlainObject(e)))
        pe.each(e, function () {
          o(this.name, this.value);
        });
      else for (n in e) Y(n, e[n], t, o);
      return i.join("&");
    }),
      pe.fn.extend({
        serialize: function () {
          return pe.param(this.serializeArray());
        },
        serializeArray: function () {
          return this.map(function () {
            var e = pe.prop(this, "elements");
            return e ? pe.makeArray(e) : this;
          })
            .filter(function () {
              var e = this.type;
              return (
                this.name &&
                !pe(this).is(":disabled") &&
                Dt.test(this.nodeName) &&
                !At.test(e) &&
                (this.checked || !Be.test(e))
              );
            })
            .map(function (e, t) {
              var n = pe(this).val();
              return null == n
                ? null
                : Array.isArray(n)
                ? pe.map(n, function (e) {
                    return {
                      name: t.name,
                      value: e.replace(xt, "\r\n"),
                    };
                  })
                : {
                    name: t.name,
                    value: n.replace(xt, "\r\n"),
                  };
            })
            .get();
        },
      });
    var Ot = /%20/g,
      It = /#.*$/,
      Nt = /([?&])_=[^&]*/,
      Lt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
      $t = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
      Ht = /^(?:GET|HEAD)$/,
      Ft = /^\/\//,
      Pt = {},
      jt = {},
      Mt = "*/".concat("*"),
      Rt = te.createElement("a");
    (Rt.href = _t.href),
      pe.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
          url: _t.href,
          type: "GET",
          isLocal: $t.test(_t.protocol),
          global: !0,
          processData: !0,
          async: !0,
          contentType: "application/x-www-form-urlencoded; charset=UTF-8",
          accepts: {
            "*": Mt,
            text: "text/plain",
            html: "text/html",
            xml: "application/xml, text/xml",
            json: "application/json, text/javascript",
          },
          contents: {
            xml: /\bxml\b/,
            html: /\bhtml/,
            json: /\bjson\b/,
          },
          responseFields: {
            xml: "responseXML",
            text: "responseText",
            json: "responseJSON",
          },
          converters: {
            "* text": String,
            "text html": !0,
            "text json": JSON.parse,
            "text xml": pe.parseXML,
          },
          flatOptions: {
            url: !0,
            context: !0,
          },
        },
        ajaxSetup: function (e, t) {
          return t ? Q(Q(e, pe.ajaxSettings), t) : Q(pe.ajaxSettings, e);
        },
        ajaxPrefilter: G(Pt),
        ajaxTransport: G(jt),
        ajax: function (t, n) {
          function i(t, n, i, a) {
            var c,
              f,
              h,
              w,
              T,
              C = n;
            u ||
              ((u = !0),
              l && e.clearTimeout(l),
              (o = void 0),
              (s = a || ""),
              (_.readyState = t > 0 ? 4 : 0),
              (c = (t >= 200 && t < 300) || 304 === t),
              i && (w = Z(p, _, i)),
              (w = J(p, w, _, c)),
              c
                ? (p.ifModified &&
                    ((T = _.getResponseHeader("Last-Modified")) &&
                      (pe.lastModified[r] = T),
                    (T = _.getResponseHeader("etag")) && (pe.etag[r] = T)),
                  204 === t || "HEAD" === p.type
                    ? (C = "nocontent")
                    : 304 === t
                    ? (C = "notmodified")
                    : ((C = w.state), (f = w.data), (h = w.error), (c = !h)))
                : ((h = C), (!t && C) || ((C = "error"), t < 0 && (t = 0))),
              (_.status = t),
              (_.statusText = (n || C) + ""),
              c ? v.resolveWith(g, [f, C, _]) : v.rejectWith(g, [_, C, h]),
              _.statusCode(b),
              (b = void 0),
              d &&
                m.trigger(c ? "ajaxSuccess" : "ajaxError", [_, p, c ? f : h]),
              y.fireWith(g, [_, C]),
              d &&
                (m.trigger("ajaxComplete", [_, p]),
                --pe.active || pe.event.trigger("ajaxStop")));
          }
          "object" == typeof t && ((n = t), (t = void 0)), (n = n || {});
          var o,
            r,
            s,
            a,
            l,
            c,
            u,
            d,
            f,
            h,
            p = pe.ajaxSetup({}, n),
            g = p.context || p,
            m = p.context && (g.nodeType || g.jquery) ? pe(g) : pe.event,
            v = pe.Deferred(),
            y = pe.Callbacks("once memory"),
            b = p.statusCode || {},
            w = {},
            T = {},
            C = "canceled",
            _ = {
              readyState: 0,
              getResponseHeader: function (e) {
                var t;
                if (u) {
                  if (!a)
                    for (a = {}; (t = Lt.exec(s)); )
                      a[t[1].toLowerCase()] = t[2];
                  t = a[e.toLowerCase()];
                }
                return null == t ? null : t;
              },
              getAllResponseHeaders: function () {
                return u ? s : null;
              },
              setRequestHeader: function (e, t) {
                return (
                  null == u &&
                    ((e = T[e.toLowerCase()] = T[e.toLowerCase()] || e),
                    (w[e] = t)),
                  this
                );
              },
              overrideMimeType: function (e) {
                return null == u && (p.mimeType = e), this;
              },
              statusCode: function (e) {
                var t;
                if (e)
                  if (u) _.always(e[_.status]);
                  else for (t in e) b[t] = [b[t], e[t]];
                return this;
              },
              abort: function (e) {
                var t = e || C;
                return o && o.abort(t), i(0, t), this;
              },
            };
          if (
            (v.promise(_),
            (p.url = ((t || p.url || _t.href) + "").replace(
              Ft,
              _t.protocol + "//"
            )),
            (p.type = n.method || n.type || p.method || p.type),
            (p.dataTypes = (p.dataType || "*").toLowerCase().match(De) || [""]),
            null == p.crossDomain)
          ) {
            c = te.createElement("a");
            try {
              (c.href = p.url),
                (c.href = c.href),
                (p.crossDomain =
                  Rt.protocol + "//" + Rt.host != c.protocol + "//" + c.host);
            } catch (e) {
              p.crossDomain = !0;
            }
          }
          if (
            (p.data &&
              p.processData &&
              "string" != typeof p.data &&
              (p.data = pe.param(p.data, p.traditional)),
            K(Pt, p, n, _),
            u)
          )
            return _;
          (d = pe.event && p.global) &&
            0 == pe.active++ &&
            pe.event.trigger("ajaxStart"),
            (p.type = p.type.toUpperCase()),
            (p.hasContent = !Ht.test(p.type)),
            (r = p.url.replace(It, "")),
            p.hasContent
              ? p.data &&
                p.processData &&
                0 ===
                  (p.contentType || "").indexOf(
                    "application/x-www-form-urlencoded"
                  ) &&
                (p.data = p.data.replace(Ot, "+"))
              : ((h = p.url.slice(r.length)),
                p.data &&
                  ((r += (St.test(r) ? "&" : "?") + p.data), delete p.data),
                !1 === p.cache &&
                  ((r = r.replace(Nt, "$1")),
                  (h = (St.test(r) ? "&" : "?") + "_=" + Et++ + h)),
                (p.url = r + h)),
            p.ifModified &&
              (pe.lastModified[r] &&
                _.setRequestHeader("If-Modified-Since", pe.lastModified[r]),
              pe.etag[r] && _.setRequestHeader("If-None-Match", pe.etag[r])),
            ((p.data && p.hasContent && !1 !== p.contentType) ||
              n.contentType) &&
              _.setRequestHeader("Content-Type", p.contentType),
            _.setRequestHeader(
              "Accept",
              p.dataTypes[0] && p.accepts[p.dataTypes[0]]
                ? p.accepts[p.dataTypes[0]] +
                    ("*" !== p.dataTypes[0] ? ", " + Mt + "; q=0.01" : "")
                : p.accepts["*"]
            );
          for (f in p.headers) _.setRequestHeader(f, p.headers[f]);
          if (p.beforeSend && (!1 === p.beforeSend.call(g, _, p) || u))
            return _.abort();
          if (
            ((C = "abort"),
            y.add(p.complete),
            _.done(p.success),
            _.fail(p.error),
            (o = K(jt, p, n, _)))
          ) {
            if (((_.readyState = 1), d && m.trigger("ajaxSend", [_, p]), u))
              return _;
            p.async &&
              p.timeout > 0 &&
              (l = e.setTimeout(function () {
                _.abort("timeout");
              }, p.timeout));
            try {
              (u = !1), o.send(w, i);
            } catch (e) {
              if (u) throw e;
              i(-1, e);
            }
          } else i(-1, "No Transport");
          return _;
        },
        getJSON: function (e, t, n) {
          return pe.get(e, t, n, "json");
        },
        getScript: function (e, t) {
          return pe.get(e, void 0, t, "script");
        },
      }),
      pe.each(["get", "post"], function (e, t) {
        pe[t] = function (e, n, i, o) {
          return (
            pe.isFunction(n) && ((o = o || i), (i = n), (n = void 0)),
            pe.ajax(
              pe.extend(
                {
                  url: e,
                  type: t,
                  dataType: o,
                  data: n,
                  success: i,
                },
                pe.isPlainObject(e) && e
              )
            )
          );
        };
      }),
      (pe._evalUrl = function (e) {
        return pe.ajax({
          url: e,
          type: "GET",
          dataType: "script",
          cache: !0,
          async: !1,
          global: !1,
          throws: !0,
        });
      }),
      pe.fn.extend({
        wrapAll: function (e) {
          var t;
          return (
            this[0] &&
              (pe.isFunction(e) && (e = e.call(this[0])),
              (t = pe(e, this[0].ownerDocument).eq(0).clone(!0)),
              this[0].parentNode && t.insertBefore(this[0]),
              t
                .map(function () {
                  for (var e = this; e.firstElementChild; )
                    e = e.firstElementChild;
                  return e;
                })
                .append(this)),
            this
          );
        },
        wrapInner: function (e) {
          return pe.isFunction(e)
            ? this.each(function (t) {
                pe(this).wrapInner(e.call(this, t));
              })
            : this.each(function () {
                var t = pe(this),
                  n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e);
              });
        },
        wrap: function (e) {
          var t = pe.isFunction(e);
          return this.each(function (n) {
            pe(this).wrapAll(t ? e.call(this, n) : e);
          });
        },
        unwrap: function (e) {
          return (
            this.parent(e)
              .not("body")
              .each(function () {
                pe(this).replaceWith(this.childNodes);
              }),
            this
          );
        },
      }),
      (pe.expr.pseudos.hidden = function (e) {
        return !pe.expr.pseudos.visible(e);
      }),
      (pe.expr.pseudos.visible = function (e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
      }),
      (pe.ajaxSettings.xhr = function () {
        try {
          return new e.XMLHttpRequest();
        } catch (e) {}
      });
    var Wt = {
        0: 200,
        1223: 204,
      },
      qt = pe.ajaxSettings.xhr();
    (fe.cors = !!qt && "withCredentials" in qt),
      (fe.ajax = qt = !!qt),
      pe.ajaxTransport(function (t) {
        var n, i;
        if (fe.cors || (qt && !t.crossDomain))
          return {
            send: function (o, r) {
              var s,
                a = t.xhr();
              if (
                (a.open(t.type, t.url, t.async, t.username, t.password),
                t.xhrFields)
              )
                for (s in t.xhrFields) a[s] = t.xhrFields[s];
              t.mimeType &&
                a.overrideMimeType &&
                a.overrideMimeType(t.mimeType),
                t.crossDomain ||
                  o["X-Requested-With"] ||
                  (o["X-Requested-With"] = "XMLHttpRequest");
              for (s in o) a.setRequestHeader(s, o[s]);
              (n = function (e) {
                return function () {
                  n &&
                    ((n =
                      i =
                      a.onload =
                      a.onerror =
                      a.onabort =
                      a.onreadystatechange =
                        null),
                    "abort" === e
                      ? a.abort()
                      : "error" === e
                      ? "number" != typeof a.status
                        ? r(0, "error")
                        : r(a.status, a.statusText)
                      : r(
                          Wt[a.status] || a.status,
                          a.statusText,
                          "text" !== (a.responseType || "text") ||
                            "string" != typeof a.responseText
                            ? {
                                binary: a.response,
                              }
                            : {
                                text: a.responseText,
                              },
                          a.getAllResponseHeaders()
                        ));
                };
              }),
                (a.onload = n()),
                (i = a.onerror = n("error")),
                void 0 !== a.onabort
                  ? (a.onabort = i)
                  : (a.onreadystatechange = function () {
                      4 === a.readyState &&
                        e.setTimeout(function () {
                          n && i();
                        });
                    }),
                (n = n("abort"));
              try {
                a.send((t.hasContent && t.data) || null);
              } catch (e) {
                if (n) throw e;
              }
            },
            abort: function () {
              n && n();
            },
          };
      }),
      pe.ajaxPrefilter(function (e) {
        e.crossDomain && (e.contents.script = !1);
      }),
      pe.ajaxSetup({
        accepts: {
          script:
            "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
        },
        contents: {
          script: /\b(?:java|ecma)script\b/,
        },
        converters: {
          "text script": function (e) {
            return pe.globalEval(e), e;
          },
        },
      }),
      pe.ajaxPrefilter("script", function (e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
      }),
      pe.ajaxTransport("script", function (e) {
        if (e.crossDomain) {
          var t, n;
          return {
            send: function (i, o) {
              (t = pe("<script>")
                .prop({
                  charset: e.scriptCharset,
                  src: e.url,
                })
                .on(
                  "load error",
                  (n = function (e) {
                    t.remove(),
                      (n = null),
                      e && o("error" === e.type ? 404 : 200, e.type);
                  })
                )),
                te.head.appendChild(t[0]);
            },
            abort: function () {
              n && n();
            },
          };
        }
      });
    var zt = [],
      Bt = /(=)\?(?=&|$)|\?\?/;
    pe.ajaxSetup({
      jsonp: "callback",
      jsonpCallback: function () {
        var e = zt.pop() || pe.expando + "_" + Et++;
        return (this[e] = !0), e;
      },
    }),
      pe.ajaxPrefilter("json jsonp", function (t, n, i) {
        var o,
          r,
          s,
          a =
            !1 !== t.jsonp &&
            (Bt.test(t.url)
              ? "url"
              : "string" == typeof t.data &&
                0 ===
                  (t.contentType || "").indexOf(
                    "application/x-www-form-urlencoded"
                  ) &&
                Bt.test(t.data) &&
                "data");
        if (a || "jsonp" === t.dataTypes[0])
          return (
            (o = t.jsonpCallback =
              pe.isFunction(t.jsonpCallback)
                ? t.jsonpCallback()
                : t.jsonpCallback),
            a
              ? (t[a] = t[a].replace(Bt, "$1" + o))
              : !1 !== t.jsonp &&
                (t.url += (St.test(t.url) ? "&" : "?") + t.jsonp + "=" + o),
            (t.converters["script json"] = function () {
              return s || pe.error(o + " was not called"), s[0];
            }),
            (t.dataTypes[0] = "json"),
            (r = e[o]),
            (e[o] = function () {
              s = arguments;
            }),
            i.always(function () {
              void 0 === r ? pe(e).removeProp(o) : (e[o] = r),
                t[o] && ((t.jsonpCallback = n.jsonpCallback), zt.push(o)),
                s && pe.isFunction(r) && r(s[0]),
                (s = r = void 0);
            }),
            "script"
          );
      }),
      (fe.createHTMLDocument = (function () {
        var e = te.implementation.createHTMLDocument("").body;
        return (
          (e.innerHTML = "<form></form><form></form>"),
          2 === e.childNodes.length
        );
      })()),
      (pe.parseHTML = function (e, t, n) {
        if ("string" != typeof e) return [];
        "boolean" == typeof t && ((n = t), (t = !1));
        var i, o, r;
        return (
          t ||
            (fe.createHTMLDocument
              ? ((t = te.implementation.createHTMLDocument("")),
                (i = t.createElement("base")),
                (i.href = te.location.href),
                t.head.appendChild(i))
              : (t = te)),
          (o = _e.exec(e)),
          (r = !n && []),
          o
            ? [t.createElement(o[1])]
            : ((o = w([e], t, r)),
              r && r.length && pe(r).remove(),
              pe.merge([], o.childNodes))
        );
      }),
      (pe.fn.load = function (e, t, n) {
        var i,
          o,
          r,
          s = this,
          a = e.indexOf(" ");
        return (
          a > -1 && ((i = V(e.slice(a))), (e = e.slice(0, a))),
          pe.isFunction(t)
            ? ((n = t), (t = void 0))
            : t && "object" == typeof t && (o = "POST"),
          s.length > 0 &&
            pe
              .ajax({
                url: e,
                type: o || "GET",
                dataType: "html",
                data: t,
              })
              .done(function (e) {
                (r = arguments),
                  s.html(i ? pe("<div>").append(pe.parseHTML(e)).find(i) : e);
              })
              .always(
                n &&
                  function (e, t) {
                    s.each(function () {
                      n.apply(this, r || [e.responseText, t, e]);
                    });
                  }
              ),
          this
        );
      }),
      pe.each(
        [
          "ajaxStart",
          "ajaxStop",
          "ajaxComplete",
          "ajaxError",
          "ajaxSuccess",
          "ajaxSend",
        ],
        function (e, t) {
          pe.fn[t] = function (e) {
            return this.on(t, e);
          };
        }
      ),
      (pe.expr.pseudos.animated = function (e) {
        return pe.grep(pe.timers, function (t) {
          return e === t.elem;
        }).length;
      }),
      (pe.offset = {
        setOffset: function (e, t, n) {
          var i,
            o,
            r,
            s,
            a,
            l,
            c = pe.css(e, "position"),
            u = pe(e),
            d = {};
          "static" === c && (e.style.position = "relative"),
            (a = u.offset()),
            (r = pe.css(e, "top")),
            (l = pe.css(e, "left")),
            ("absolute" === c || "fixed" === c) && (r + l).indexOf("auto") > -1
              ? ((i = u.position()), (s = i.top), (o = i.left))
              : ((s = parseFloat(r) || 0), (o = parseFloat(l) || 0)),
            pe.isFunction(t) && (t = t.call(e, n, pe.extend({}, a))),
            null != t.top && (d.top = t.top - a.top + s),
            null != t.left && (d.left = t.left - a.left + o),
            "using" in t ? t.using.call(e, d) : u.css(d);
        },
      }),
      pe.fn.extend({
        offset: function (e) {
          if (arguments.length)
            return void 0 === e
              ? this
              : this.each(function (t) {
                  pe.offset.setOffset(this, e, t);
                });
          var t,
            n,
            i,
            o,
            r = this[0];
          return r
            ? r.getClientRects().length
              ? ((i = r.getBoundingClientRect()),
                (t = r.ownerDocument),
                (n = t.documentElement),
                (o = t.defaultView),
                {
                  top: i.top + o.pageYOffset - n.clientTop,
                  left: i.left + o.pageXOffset - n.clientLeft,
                })
              : {
                  top: 0,
                  left: 0,
                }
            : void 0;
        },
        position: function () {
          if (this[0]) {
            var e,
              t,
              n = this[0],
              i = {
                top: 0,
                left: 0,
              };
            return (
              "fixed" === pe.css(n, "position")
                ? (t = n.getBoundingClientRect())
                : ((e = this.offsetParent()),
                  (t = this.offset()),
                  o(e[0], "html") || (i = e.offset()),
                  (i = {
                    top: i.top + pe.css(e[0], "borderTopWidth", !0),
                    left: i.left + pe.css(e[0], "borderLeftWidth", !0),
                  })),
              {
                top: t.top - i.top - pe.css(n, "marginTop", !0),
                left: t.left - i.left - pe.css(n, "marginLeft", !0),
              }
            );
          }
        },
        offsetParent: function () {
          return this.map(function () {
            for (
              var e = this.offsetParent;
              e && "static" === pe.css(e, "position");

            )
              e = e.offsetParent;
            return e || Ge;
          });
        },
      }),
      pe.each(
        {
          scrollLeft: "pageXOffset",
          scrollTop: "pageYOffset",
        },
        function (e, t) {
          var n = "pageYOffset" === t;
          pe.fn[e] = function (i) {
            return Ne(
              this,
              function (e, i, o) {
                var r;
                return (
                  pe.isWindow(e)
                    ? (r = e)
                    : 9 === e.nodeType && (r = e.defaultView),
                  void 0 === o
                    ? r
                      ? r[t]
                      : e[i]
                    : void (r
                        ? r.scrollTo(
                            n ? r.pageXOffset : o,
                            n ? o : r.pageYOffset
                          )
                        : (e[i] = o))
                );
              },
              e,
              i,
              arguments.length
            );
          };
        }
      ),
      pe.each(["top", "left"], function (e, t) {
        pe.cssHooks[t] = L(fe.pixelPosition, function (e, n) {
          if (n)
            return (n = N(e, t)), rt.test(n) ? pe(e).position()[t] + "px" : n;
        });
      }),
      pe.each(
        {
          Height: "height",
          Width: "width",
        },
        function (e, t) {
          pe.each(
            {
              padding: "inner" + e,
              content: t,
              "": "outer" + e,
            },
            function (n, i) {
              pe.fn[i] = function (o, r) {
                var s = arguments.length && (n || "boolean" != typeof o),
                  a = n || (!0 === o || !0 === r ? "margin" : "border");
                return Ne(
                  this,
                  function (t, n, o) {
                    var r;
                    return pe.isWindow(t)
                      ? 0 === i.indexOf("outer")
                        ? t["inner" + e]
                        : t.document.documentElement["client" + e]
                      : 9 === t.nodeType
                      ? ((r = t.documentElement),
                        Math.max(
                          t.body["scroll" + e],
                          r["scroll" + e],
                          t.body["offset" + e],
                          r["offset" + e],
                          r["client" + e]
                        ))
                      : void 0 === o
                      ? pe.css(t, n, a)
                      : pe.style(t, n, o, a);
                  },
                  t,
                  s ? o : void 0,
                  s
                );
              };
            }
          );
        }
      ),
      pe.fn.extend({
        bind: function (e, t, n) {
          return this.on(e, null, t, n);
        },
        unbind: function (e, t) {
          return this.off(e, null, t);
        },
        delegate: function (e, t, n, i) {
          return this.on(t, e, n, i);
        },
        undelegate: function (e, t, n) {
          return 1 === arguments.length
            ? this.off(e, "**")
            : this.off(t, e || "**", n);
        },
      }),
      (pe.holdReady = function (e) {
        e ? pe.readyWait++ : pe.ready(!0);
      }),
      (pe.isArray = Array.isArray),
      (pe.parseJSON = JSON.parse),
      (pe.nodeName = o),
      "function" == typeof define &&
        define.amd &&
        define("jquery", [], function () {
          return pe;
        });
    var Ut = e.jQuery,
      Vt = e.$;
    return (
      (pe.noConflict = function (t) {
        return (
          e.$ === pe && (e.$ = Vt), t && e.jQuery === pe && (e.jQuery = Ut), pe
        );
      }),
      t || (e.jQuery = e.$ = pe),
      pe
    );
  }),
  (function (e, t) {
    "function" == typeof define && define.amd
      ? define(t)
      : "object" == typeof exports
      ? (module.exports = t(require, exports, module))
      : (e.Tether = t());
  })(this, function (e, t, n) {
    "use strict";
    function i(e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
    }
    function o(e) {
      var t = e.getBoundingClientRect(),
        n = {};
      for (var i in t) n[i] = t[i];
      if (e.ownerDocument !== document) {
        var r = e.ownerDocument.defaultView.frameElement;
        if (r) {
          var s = o(r);
          (n.top += s.top),
            (n.bottom += s.top),
            (n.left += s.left),
            (n.right += s.left);
        }
      }
      return n;
    }
    function r(e) {
      var t = (getComputedStyle(e) || {}).position,
        n = [];
      if ("fixed" === t) return [e];
      for (var i = e; (i = i.parentNode) && i && 1 === i.nodeType; ) {
        var o = void 0;
        try {
          o = getComputedStyle(i);
        } catch (e) {}
        if (void 0 === o || null === o) return n.push(i), n;
        var r = o,
          s = r.overflow,
          a = r.overflowX,
          l = r.overflowY;
        /(auto|scroll)/.test(s + l + a) &&
          ("absolute" !== t ||
            ["relative", "absolute", "fixed"].indexOf(o.position) >= 0) &&
          n.push(i);
      }
      return (
        n.push(e.ownerDocument.body),
        e.ownerDocument !== document && n.push(e.ownerDocument.defaultView),
        n
      );
    }
    function s() {
      S && document.body.removeChild(S), (S = null);
    }
    function a(e) {
      var t = void 0;
      e === document
        ? ((t = document), (e = document.documentElement))
        : (t = e.ownerDocument);
      var n = t.documentElement,
        i = o(e),
        r = A();
      return (
        (i.top -= r.top),
        (i.left -= r.left),
        void 0 === i.width &&
          (i.width = document.body.scrollWidth - i.left - i.right),
        void 0 === i.height &&
          (i.height = document.body.scrollHeight - i.top - i.bottom),
        (i.top = i.top - n.clientTop),
        (i.left = i.left - n.clientLeft),
        (i.right = t.body.clientWidth - i.width - i.left),
        (i.bottom = t.body.clientHeight - i.height - i.top),
        i
      );
    }
    function l(e) {
      return e.offsetParent || document.documentElement;
    }
    function c() {
      if (D) return D;
      var e = document.createElement("div");
      (e.style.width = "100%"), (e.style.height = "200px");
      var t = document.createElement("div");
      u(t.style, {
        position: "absolute",
        top: 0,
        left: 0,
        pointerEvents: "none",
        visibility: "hidden",
        width: "200px",
        height: "150px",
        overflow: "hidden",
      }),
        t.appendChild(e),
        document.body.appendChild(t);
      var n = e.offsetWidth;
      t.style.overflow = "scroll";
      var i = e.offsetWidth;
      n === i && (i = t.clientWidth), document.body.removeChild(t);
      var o = n - i;
      return (D = {
        width: o,
        height: o,
      });
    }
    function u() {
      var e =
          arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0],
        t = [];
      return (
        Array.prototype.push.apply(t, arguments),
        t.slice(1).forEach(function (t) {
          if (t)
            for (var n in t) ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
        }),
        e
      );
    }
    function d(e, t) {
      if (void 0 !== e.classList)
        t.split(" ").forEach(function (t) {
          t.trim() && e.classList.remove(t);
        });
      else {
        var n = new RegExp("(^| )" + t.split(" ").join("|") + "( |$)", "gi"),
          i = p(e).replace(n, " ");
        g(e, i);
      }
    }
    function f(e, t) {
      if (void 0 !== e.classList)
        t.split(" ").forEach(function (t) {
          t.trim() && e.classList.add(t);
        });
      else {
        d(e, t);
        var n = p(e) + " " + t;
        g(e, n);
      }
    }
    function h(e, t) {
      if (void 0 !== e.classList) return e.classList.contains(t);
      var n = p(e);
      return new RegExp("(^| )" + t + "( |$)", "gi").test(n);
    }
    function p(e) {
      return e.className instanceof
        e.ownerDocument.defaultView.SVGAnimatedString
        ? e.className.baseVal
        : e.className;
    }
    function g(e, t) {
      e.setAttribute("class", t);
    }
    function m(e, t, n) {
      n.forEach(function (n) {
        -1 === t.indexOf(n) && h(e, n) && d(e, n);
      }),
        t.forEach(function (t) {
          h(e, t) || f(e, t);
        });
    }
    function i(e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
    }
    function v(e, t) {
      if ("function" != typeof t && null !== t)
        throw new TypeError(
          "Super expression must either be null or a function, not " + typeof t
        );
      (e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0,
        },
      })),
        t &&
          (Object.setPrototypeOf
            ? Object.setPrototypeOf(e, t)
            : (e.__proto__ = t));
    }
    function y(e, t) {
      var n =
        arguments.length <= 2 || void 0 === arguments[2] ? 1 : arguments[2];
      return e + n >= t && t >= e - n;
    }
    function b() {
      return "undefined" != typeof performance && void 0 !== performance.now
        ? performance.now()
        : +new Date();
    }
    function w() {
      for (
        var e = {
            top: 0,
            left: 0,
          },
          t = arguments.length,
          n = Array(t),
          i = 0;
        i < t;
        i++
      )
        n[i] = arguments[i];
      return (
        n.forEach(function (t) {
          var n = t.top,
            i = t.left;
          "string" == typeof n && (n = parseFloat(n, 10)),
            "string" == typeof i && (i = parseFloat(i, 10)),
            (e.top += n),
            (e.left += i);
        }),
        e
      );
    }
    function T(e, t) {
      return (
        "string" == typeof e.left &&
          -1 !== e.left.indexOf("%") &&
          (e.left = (parseFloat(e.left, 10) / 100) * t.width),
        "string" == typeof e.top &&
          -1 !== e.top.indexOf("%") &&
          (e.top = (parseFloat(e.top, 10) / 100) * t.height),
        e
      );
    }
    function C(e, t) {
      return (
        "scrollParent" === t
          ? (t = e.scrollParents[0])
          : "window" === t &&
            (t = [
              pageXOffset,
              pageYOffset,
              innerWidth + pageXOffset,
              innerHeight + pageYOffset,
            ]),
        t === document && (t = t.documentElement),
        void 0 !== t.nodeType &&
          (function () {
            var e = t,
              n = a(t),
              i = n,
              o = getComputedStyle(t);
            if (
              ((t = [i.left, i.top, n.width + i.left, n.height + i.top]),
              e.ownerDocument !== document)
            ) {
              var r = e.ownerDocument.defaultView;
              (t[0] += r.pageXOffset),
                (t[1] += r.pageYOffset),
                (t[2] += r.pageXOffset),
                (t[3] += r.pageYOffset);
            }
            G.forEach(function (e, n) {
              "Top" === (e = e[0].toUpperCase() + e.substr(1)) || "Left" === e
                ? (t[n] += parseFloat(o["border" + e + "Width"]))
                : (t[n] -= parseFloat(o["border" + e + "Width"]));
            });
          })(),
        t
      );
    }
    var _ = (function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var i = t[n];
            (i.enumerable = i.enumerable || !1),
              (i.configurable = !0),
              "value" in i && (i.writable = !0),
              Object.defineProperty(e, i.key, i);
          }
        }
        return function (t, n, i) {
          return n && e(t.prototype, n), i && e(t, i), t;
        };
      })(),
      E = void 0;
    void 0 === E &&
      (E = {
        modules: [],
      });
    var S = null,
      k = (function () {
        var e = 0;
        return function () {
          return ++e;
        };
      })(),
      x = {},
      A = function () {
        var e = S;
        (e && document.body.contains(e)) ||
          ((e = document.createElement("div")).setAttribute(
            "data-tether-id",
            k()
          ),
          u(e.style, {
            top: 0,
            left: 0,
            position: "absolute",
          }),
          document.body.appendChild(e),
          (S = e));
        var t = e.getAttribute("data-tether-id");
        return (
          void 0 === x[t] &&
            ((x[t] = o(e)),
            I(function () {
              delete x[t];
            })),
          x[t]
        );
      },
      D = null,
      O = [],
      I = function (e) {
        O.push(e);
      },
      N = function () {
        for (var e = void 0; (e = O.pop()); ) e();
      },
      L = (function () {
        function e() {
          i(this, e);
        }
        return (
          _(e, [
            {
              key: "on",
              value: function (e, t, n) {
                var i =
                  !(arguments.length <= 3 || void 0 === arguments[3]) &&
                  arguments[3];
                void 0 === this.bindings && (this.bindings = {}),
                  void 0 === this.bindings[e] && (this.bindings[e] = []),
                  this.bindings[e].push({
                    handler: t,
                    ctx: n,
                    once: i,
                  });
              },
            },
            {
              key: "once",
              value: function (e, t, n) {
                this.on(e, t, n, !0);
              },
            },
            {
              key: "off",
              value: function (e, t) {
                if (void 0 !== this.bindings && void 0 !== this.bindings[e])
                  if (void 0 === t) delete this.bindings[e];
                  else
                    for (var n = 0; n < this.bindings[e].length; )
                      this.bindings[e][n].handler === t
                        ? this.bindings[e].splice(n, 1)
                        : ++n;
              },
            },
            {
              key: "trigger",
              value: function (e) {
                if (void 0 !== this.bindings && this.bindings[e]) {
                  for (
                    var t = 0,
                      n = arguments.length,
                      i = Array(n > 1 ? n - 1 : 0),
                      o = 1;
                    o < n;
                    o++
                  )
                    i[o - 1] = arguments[o];
                  for (; t < this.bindings[e].length; ) {
                    var r = this.bindings[e][t],
                      s = r.handler,
                      a = r.ctx,
                      l = r.once,
                      c = a;
                    void 0 === c && (c = this),
                      s.apply(c, i),
                      l ? this.bindings[e].splice(t, 1) : ++t;
                  }
                }
              },
            },
          ]),
          e
        );
      })();
    E.Utils = {
      getActualBoundingClientRect: o,
      getScrollParents: r,
      getBounds: a,
      getOffsetParent: l,
      extend: u,
      addClass: f,
      removeClass: d,
      hasClass: h,
      updateClasses: m,
      defer: I,
      flush: N,
      uniqueId: k,
      Evented: L,
      getScrollBarSize: c,
      removeUtilElements: s,
    };
    var $ = (function () {
        function e(e, t) {
          var n = [],
            i = !0,
            o = !1,
            r = void 0;
          try {
            for (
              var s, a = e[Symbol.iterator]();
              !(i = (s = a.next()).done) &&
              (n.push(s.value), !t || n.length !== t);
              i = !0
            );
          } catch (e) {
            (o = !0), (r = e);
          } finally {
            try {
              !i && a.return && a.return();
            } finally {
              if (o) throw r;
            }
          }
          return n;
        }
        return function (t, n) {
          if (Array.isArray(t)) return t;
          if (Symbol.iterator in Object(t)) return e(t, n);
          throw new TypeError(
            "Invalid attempt to destructure non-iterable instance"
          );
        };
      })(),
      _ = (function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var i = t[n];
            (i.enumerable = i.enumerable || !1),
              (i.configurable = !0),
              "value" in i && (i.writable = !0),
              Object.defineProperty(e, i.key, i);
          }
        }
        return function (t, n, i) {
          return n && e(t.prototype, n), i && e(t, i), t;
        };
      })(),
      H = function (e, t, n) {
        for (var i = !0; i; ) {
          var o = e,
            r = t,
            s = n;
          (i = !1), null === o && (o = Function.prototype);
          var a = Object.getOwnPropertyDescriptor(o, r);
          if (void 0 !== a) {
            if ("value" in a) return a.value;
            var l = a.get;
            if (void 0 === l) return;
            return l.call(s);
          }
          var c = Object.getPrototypeOf(o);
          if (null === c) return;
          (e = c), (t = r), (n = s), (i = !0), (a = c = void 0);
        }
      };
    if (void 0 === E)
      throw new Error("You must include the utils.js file before tether.js");
    var F = E.Utils,
      r = F.getScrollParents,
      a = F.getBounds,
      l = F.getOffsetParent,
      u = F.extend,
      f = F.addClass,
      d = F.removeClass,
      m = F.updateClasses,
      I = F.defer,
      N = F.flush,
      c = F.getScrollBarSize,
      s = F.removeUtilElements,
      P = (function () {
        if ("undefined" == typeof document) return "";
        for (
          var e = document.createElement("div"),
            t = [
              "transform",
              "WebkitTransform",
              "OTransform",
              "MozTransform",
              "msTransform",
            ],
            n = 0;
          n < t.length;
          ++n
        ) {
          var i = t[n];
          if (void 0 !== e.style[i]) return i;
        }
      })(),
      j = [],
      M = function () {
        j.forEach(function (e) {
          e.position(!1);
        }),
          N();
      };
    !(function () {
      var e = null,
        t = null,
        n = null,
        i = function i() {
          return void 0 !== t && t > 16
            ? ((t = Math.min(t - 16, 250)), void (n = setTimeout(i, 250)))
            : void (
                (void 0 !== e && b() - e < 10) ||
                (null != n && (clearTimeout(n), (n = null)),
                (e = b()),
                M(),
                (t = b() - e))
              );
        };
      "undefined" != typeof window &&
        void 0 !== window.addEventListener &&
        ["resize", "scroll", "touchmove"].forEach(function (e) {
          window.addEventListener(e, i);
        });
    })();
    var R = {
        center: "center",
        left: "right",
        right: "left",
      },
      W = {
        middle: "middle",
        top: "bottom",
        bottom: "top",
      },
      q = {
        top: 0,
        left: 0,
        middle: "50%",
        center: "50%",
        bottom: "100%",
        right: "100%",
      },
      z = function (e, t) {
        var n = e.left,
          i = e.top;
        return (
          "auto" === n && (n = R[t.left]),
          "auto" === i && (i = W[t.top]),
          {
            left: n,
            top: i,
          }
        );
      },
      B = function (e) {
        var t = e.left,
          n = e.top;
        return (
          void 0 !== q[e.left] && (t = q[e.left]),
          void 0 !== q[e.top] && (n = q[e.top]),
          {
            left: t,
            top: n,
          }
        );
      },
      U = function (e) {
        var t = e.split(" "),
          n = $(t, 2);
        return {
          top: n[0],
          left: n[1],
        };
      },
      V = U,
      X = (function (e) {
        function t(e) {
          var n = this;
          i(this, t),
            H(Object.getPrototypeOf(t.prototype), "constructor", this).call(
              this
            ),
            (this.position = this.position.bind(this)),
            j.push(this),
            (this.history = []),
            this.setOptions(e, !1),
            E.modules.forEach(function (e) {
              void 0 !== e.initialize && e.initialize.call(n);
            }),
            this.position();
        }
        return (
          v(t, L),
          _(t, [
            {
              key: "getClass",
              value: function () {
                var e =
                    arguments.length <= 0 || void 0 === arguments[0]
                      ? ""
                      : arguments[0],
                  t = this.options.classes;
                return void 0 !== t && t[e]
                  ? this.options.classes[e]
                  : this.options.classPrefix
                  ? this.options.classPrefix + "-" + e
                  : e;
              },
            },
            {
              key: "setOptions",
              value: function (e) {
                var t = this,
                  n =
                    arguments.length <= 1 ||
                    void 0 === arguments[1] ||
                    arguments[1],
                  i = {
                    offset: "0 0",
                    targetOffset: "0 0",
                    targetAttachment: "auto auto",
                    classPrefix: "tether",
                  };
                this.options = u(i, e);
                var o = this.options,
                  s = o.element,
                  a = o.target,
                  l = o.targetModifier;
                if (
                  ((this.element = s),
                  (this.target = a),
                  (this.targetModifier = l),
                  "viewport" === this.target
                    ? ((this.target = document.body),
                      (this.targetModifier = "visible"))
                    : "scroll-handle" === this.target &&
                      ((this.target = document.body),
                      (this.targetModifier = "scroll-handle")),
                  ["element", "target"].forEach(function (e) {
                    if (void 0 === t[e])
                      throw new Error(
                        "Tether Error: Both element and target must be defined"
                      );
                    void 0 !== t[e].jquery
                      ? (t[e] = t[e][0])
                      : "string" == typeof t[e] &&
                        (t[e] = document.querySelector(t[e]));
                  }),
                  f(this.element, this.getClass("element")),
                  !1 !== this.options.addTargetClasses &&
                    f(this.target, this.getClass("target")),
                  !this.options.attachment)
                )
                  throw new Error(
                    "Tether Error: You must provide an attachment"
                  );
                (this.targetAttachment = V(this.options.targetAttachment)),
                  (this.attachment = V(this.options.attachment)),
                  (this.offset = U(this.options.offset)),
                  (this.targetOffset = U(this.options.targetOffset)),
                  void 0 !== this.scrollParents && this.disable(),
                  "scroll-handle" === this.targetModifier
                    ? (this.scrollParents = [this.target])
                    : (this.scrollParents = r(this.target)),
                  !1 !== this.options.enabled && this.enable(n);
              },
            },
            {
              key: "getTargetBounds",
              value: function () {
                if (void 0 === this.targetModifier) return a(this.target);
                if ("visible" === this.targetModifier)
                  return this.target === document.body
                    ? {
                        top: pageYOffset,
                        left: pageXOffset,
                        height: innerHeight,
                        width: innerWidth,
                      }
                    : (((r = {
                        height: (e = a(this.target)).height,
                        width: e.width,
                        top: e.top,
                        left: e.left,
                      }).height = Math.min(
                        r.height,
                        e.height - (pageYOffset - e.top)
                      )),
                      (r.height = Math.min(
                        r.height,
                        e.height -
                          (e.top + e.height - (pageYOffset + innerHeight))
                      )),
                      (r.height = Math.min(innerHeight, r.height)),
                      (r.height -= 2),
                      (r.width = Math.min(
                        r.width,
                        e.width - (pageXOffset - e.left)
                      )),
                      (r.width = Math.min(
                        r.width,
                        e.width -
                          (e.left + e.width - (pageXOffset + innerWidth))
                      )),
                      (r.width = Math.min(innerWidth, r.width)),
                      (r.width -= 2),
                      r.top < pageYOffset && (r.top = pageYOffset),
                      r.left < pageXOffset && (r.left = pageXOffset),
                      r);
                if ("scroll-handle" === this.targetModifier) {
                  var e = void 0,
                    t = this.target;
                  t === document.body
                    ? ((t = document.documentElement),
                      (e = {
                        left: pageXOffset,
                        top: pageYOffset,
                        height: innerHeight,
                        width: innerWidth,
                      }))
                    : (e = a(t));
                  var n = getComputedStyle(t),
                    i = 0;
                  (t.scrollWidth > t.clientWidth ||
                    [n.overflow, n.overflowX].indexOf("scroll") >= 0 ||
                    this.target !== document.body) &&
                    (i = 15);
                  var o =
                      e.height -
                      parseFloat(n.borderTopWidth) -
                      parseFloat(n.borderBottomWidth) -
                      i,
                    r = {
                      width: 15,
                      height: 0.975 * o * (o / t.scrollHeight),
                      left:
                        e.left + e.width - parseFloat(n.borderLeftWidth) - 15,
                    },
                    s = 0;
                  o < 408 &&
                    this.target === document.body &&
                    (s = -11e-5 * Math.pow(o, 2) - 0.00727 * o + 22.58),
                    this.target !== document.body &&
                      (r.height = Math.max(r.height, 24));
                  var l = this.target.scrollTop / (t.scrollHeight - o);
                  return (
                    (r.top =
                      l * (o - r.height - s) +
                      e.top +
                      parseFloat(n.borderTopWidth)),
                    this.target === document.body &&
                      (r.height = Math.max(r.height, 24)),
                    r
                  );
                }
              },
            },
            {
              key: "clearCache",
              value: function () {
                this._cache = {};
              },
            },
            {
              key: "cache",
              value: function (e, t) {
                return (
                  void 0 === this._cache && (this._cache = {}),
                  void 0 === this._cache[e] && (this._cache[e] = t.call(this)),
                  this._cache[e]
                );
              },
            },
            {
              key: "enable",
              value: function () {
                var e = this,
                  t =
                    arguments.length <= 0 ||
                    void 0 === arguments[0] ||
                    arguments[0];
                !1 !== this.options.addTargetClasses &&
                  f(this.target, this.getClass("enabled")),
                  f(this.element, this.getClass("enabled")),
                  (this.enabled = !0),
                  this.scrollParents.forEach(function (t) {
                    t !== e.target.ownerDocument &&
                      t.addEventListener("scroll", e.position);
                  }),
                  t && this.position();
              },
            },
            {
              key: "disable",
              value: function () {
                var e = this;
                d(this.target, this.getClass("enabled")),
                  d(this.element, this.getClass("enabled")),
                  (this.enabled = !1),
                  void 0 !== this.scrollParents &&
                    this.scrollParents.forEach(function (t) {
                      t.removeEventListener("scroll", e.position);
                    });
              },
            },
            {
              key: "destroy",
              value: function () {
                var e = this;
                this.disable(),
                  j.forEach(function (t, n) {
                    t === e && j.splice(n, 1);
                  }),
                  0 === j.length && s();
              },
            },
            {
              key: "updateAttachClasses",
              value: function (e, t) {
                var n = this;
                (e = e || this.attachment), (t = t || this.targetAttachment);
                var i = ["left", "top", "bottom", "right", "middle", "center"];
                void 0 !== this._addAttachClasses &&
                  this._addAttachClasses.length &&
                  this._addAttachClasses.splice(
                    0,
                    this._addAttachClasses.length
                  ),
                  void 0 === this._addAttachClasses &&
                    (this._addAttachClasses = []);
                var o = this._addAttachClasses;
                e.top &&
                  o.push(this.getClass("element-attached") + "-" + e.top),
                  e.left &&
                    o.push(this.getClass("element-attached") + "-" + e.left),
                  t.top &&
                    o.push(this.getClass("target-attached") + "-" + t.top),
                  t.left &&
                    o.push(this.getClass("target-attached") + "-" + t.left);
                var r = [];
                i.forEach(function (e) {
                  r.push(n.getClass("element-attached") + "-" + e),
                    r.push(n.getClass("target-attached") + "-" + e);
                }),
                  I(function () {
                    void 0 !== n._addAttachClasses &&
                      (m(n.element, n._addAttachClasses, r),
                      !1 !== n.options.addTargetClasses &&
                        m(n.target, n._addAttachClasses, r),
                      delete n._addAttachClasses);
                  });
              },
            },
            {
              key: "position",
              value: function () {
                var e = this,
                  t =
                    arguments.length <= 0 ||
                    void 0 === arguments[0] ||
                    arguments[0];
                if (this.enabled) {
                  this.clearCache();
                  var n = z(this.targetAttachment, this.attachment);
                  this.updateAttachClasses(this.attachment, n);
                  var i = this.cache("element-bounds", function () {
                      return a(e.element);
                    }),
                    o = i.width,
                    r = i.height;
                  if (0 === o && 0 === r && void 0 !== this.lastSize) {
                    var s = this.lastSize;
                    (o = s.width), (r = s.height);
                  } else
                    this.lastSize = {
                      width: o,
                      height: r,
                    };
                  var u = this.cache("target-bounds", function () {
                      return e.getTargetBounds();
                    }),
                    d = u,
                    f = T(B(this.attachment), {
                      width: o,
                      height: r,
                    }),
                    h = T(B(n), d),
                    p = T(this.offset, {
                      width: o,
                      height: r,
                    }),
                    g = T(this.targetOffset, d);
                  (f = w(f, p)), (h = w(h, g));
                  for (
                    var m = u.left + h.left - f.left,
                      v = u.top + h.top - f.top,
                      y = 0;
                    y < E.modules.length;
                    ++y
                  ) {
                    var b = E.modules[y].position.call(this, {
                      left: m,
                      top: v,
                      targetAttachment: n,
                      targetPos: u,
                      elementPos: i,
                      offset: f,
                      targetOffset: h,
                      manualOffset: p,
                      manualTargetOffset: g,
                      scrollbarSize: k,
                      attachment: this.attachment,
                    });
                    if (!1 === b) return !1;
                    void 0 !== b &&
                      "object" == typeof b &&
                      ((v = b.top), (m = b.left));
                  }
                  var C = {
                      page: {
                        top: v,
                        left: m,
                      },
                      viewport: {
                        top: v - pageYOffset,
                        bottom: pageYOffset - v - r + innerHeight,
                        left: m - pageXOffset,
                        right: pageXOffset - m - o + innerWidth,
                      },
                    },
                    _ = this.target.ownerDocument,
                    S = _.defaultView,
                    k = void 0;
                  return (
                    S.innerHeight > _.documentElement.clientHeight &&
                      ((k = this.cache("scrollbar-size", c)),
                      (C.viewport.bottom -= k.height)),
                    S.innerWidth > _.documentElement.clientWidth &&
                      ((k = this.cache("scrollbar-size", c)),
                      (C.viewport.right -= k.width)),
                    (-1 !== ["", "static"].indexOf(_.body.style.position) &&
                      -1 !==
                        ["", "static"].indexOf(
                          _.body.parentElement.style.position
                        )) ||
                      ((C.page.bottom = _.body.scrollHeight - v - r),
                      (C.page.right = _.body.scrollWidth - m - o)),
                    void 0 !== this.options.optimizations &&
                      !1 !== this.options.optimizations.moveElement &&
                      void 0 === this.targetModifier &&
                      (function () {
                        var t = e.cache("target-offsetparent", function () {
                            return l(e.target);
                          }),
                          n = e.cache(
                            "target-offsetparent-bounds",
                            function () {
                              return a(t);
                            }
                          ),
                          i = getComputedStyle(t),
                          o = n,
                          r = {};
                        if (
                          (["Top", "Left", "Bottom", "Right"].forEach(function (
                            e
                          ) {
                            r[e.toLowerCase()] = parseFloat(
                              i["border" + e + "Width"]
                            );
                          }),
                          (n.right =
                            _.body.scrollWidth - n.left - o.width + r.right),
                          (n.bottom =
                            _.body.scrollHeight - n.top - o.height + r.bottom),
                          C.page.top >= n.top + r.top &&
                            C.page.bottom >= n.bottom &&
                            C.page.left >= n.left + r.left &&
                            C.page.right >= n.right)
                        ) {
                          var s = t.scrollTop,
                            c = t.scrollLeft;
                          C.offset = {
                            top: C.page.top - n.top + s - r.top,
                            left: C.page.left - n.left + c - r.left,
                          };
                        }
                      })(),
                    this.move(C),
                    this.history.unshift(C),
                    this.history.length > 3 && this.history.pop(),
                    t && N(),
                    !0
                  );
                }
              },
            },
            {
              key: "move",
              value: function (e) {
                var t = this;
                if (void 0 !== this.element.parentNode) {
                  var n = {};
                  for (var i in e) {
                    n[i] = {};
                    for (var o in e[i]) {
                      for (var r = !1, s = 0; s < this.history.length; ++s) {
                        var a = this.history[s];
                        if (void 0 !== a[i] && !y(a[i][o], e[i][o])) {
                          r = !0;
                          break;
                        }
                      }
                      r || (n[i][o] = !0);
                    }
                  }
                  var c = {
                      top: "",
                      left: "",
                      right: "",
                      bottom: "",
                    },
                    d = function (e, n) {
                      if (
                        !1 !==
                        (void 0 !== t.options.optimizations
                          ? t.options.optimizations.gpu
                          : null)
                      ) {
                        var i = void 0,
                          o = void 0;
                        e.top
                          ? ((c.top = 0), (i = n.top))
                          : ((c.bottom = 0), (i = -n.bottom)),
                          e.left
                            ? ((c.left = 0), (o = n.left))
                            : ((c.right = 0), (o = -n.right)),
                          window.matchMedia &&
                            (window.matchMedia(
                              "only screen and (min-resolution: 1.3dppx)"
                            ).matches ||
                              window.matchMedia(
                                "only screen and (-webkit-min-device-pixel-ratio: 1.3)"
                              ).matches ||
                              ((o = Math.round(o)), (i = Math.round(i)))),
                          (c[P] =
                            "translateX(" + o + "px) translateY(" + i + "px)"),
                          "msTransform" !== P && (c[P] += " translateZ(0)");
                      } else
                        e.top
                          ? (c.top = n.top + "px")
                          : (c.bottom = n.bottom + "px"),
                          e.left
                            ? (c.left = n.left + "px")
                            : (c.right = n.right + "px");
                    },
                    f = !1;
                  if (
                    ((n.page.top || n.page.bottom) &&
                    (n.page.left || n.page.right)
                      ? ((c.position = "absolute"), d(n.page, e.page))
                      : (n.viewport.top || n.viewport.bottom) &&
                        (n.viewport.left || n.viewport.right)
                      ? ((c.position = "fixed"), d(n.viewport, e.viewport))
                      : void 0 !== n.offset && n.offset.top && n.offset.left
                      ? (function () {
                          c.position = "absolute";
                          var i = t.cache("target-offsetparent", function () {
                            return l(t.target);
                          });
                          l(t.element) !== i &&
                            I(function () {
                              t.element.parentNode.removeChild(t.element),
                                i.appendChild(t.element);
                            }),
                            d(n.offset, e.offset),
                            (f = !0);
                        })()
                      : ((c.position = "absolute"),
                        d(
                          {
                            top: !0,
                            left: !0,
                          },
                          e.page
                        )),
                    !f)
                  )
                    if (this.options.bodyElement)
                      this.options.bodyElement.appendChild(this.element);
                    else {
                      for (
                        var h = !0, p = this.element.parentNode;
                        p && 1 === p.nodeType && "BODY" !== p.tagName;

                      ) {
                        if ("static" !== getComputedStyle(p).position) {
                          h = !1;
                          break;
                        }
                        p = p.parentNode;
                      }
                      h ||
                        (this.element.parentNode.removeChild(this.element),
                        this.element.ownerDocument.body.appendChild(
                          this.element
                        ));
                    }
                  var g = {},
                    m = !1;
                  for (var o in c) {
                    var v = c[o];
                    this.element.style[o] !== v && ((m = !0), (g[o] = v));
                  }
                  m &&
                    I(function () {
                      u(t.element.style, g), t.trigger("repositioned");
                    });
                }
              },
            },
          ]),
          t
        );
      })();
    (X.modules = []), (E.position = M);
    var Y = u(X, E),
      $ = (function () {
        function e(e, t) {
          var n = [],
            i = !0,
            o = !1,
            r = void 0;
          try {
            for (
              var s, a = e[Symbol.iterator]();
              !(i = (s = a.next()).done) &&
              (n.push(s.value), !t || n.length !== t);
              i = !0
            );
          } catch (e) {
            (o = !0), (r = e);
          } finally {
            try {
              !i && a.return && a.return();
            } finally {
              if (o) throw r;
            }
          }
          return n;
        }
        return function (t, n) {
          if (Array.isArray(t)) return t;
          if (Symbol.iterator in Object(t)) return e(t, n);
          throw new TypeError(
            "Invalid attempt to destructure non-iterable instance"
          );
        };
      })(),
      a = (F = E.Utils).getBounds,
      u = F.extend,
      m = F.updateClasses,
      I = F.defer,
      G = ["left", "top", "right", "bottom"];
    E.modules.push({
      position: function (e) {
        var t = this,
          n = e.top,
          i = e.left,
          o = e.targetAttachment;
        if (!this.options.constraints) return !0;
        var r = this.cache("element-bounds", function () {
            return a(t.element);
          }),
          s = r.height,
          l = r.width;
        if (0 === l && 0 === s && void 0 !== this.lastSize) {
          var c = this.lastSize;
          (l = c.width), (s = c.height);
        }
        var d = this.cache("target-bounds", function () {
            return t.getTargetBounds();
          }),
          f = d.height,
          h = d.width,
          p = [this.getClass("pinned"), this.getClass("out-of-bounds")];
        this.options.constraints.forEach(function (e) {
          var t = e.outOfBoundsClass,
            n = e.pinnedClass;
          t && p.push(t), n && p.push(n);
        }),
          p.forEach(function (e) {
            ["left", "top", "right", "bottom"].forEach(function (t) {
              p.push(e + "-" + t);
            });
          });
        var g = [],
          v = u({}, o),
          y = u({}, this.attachment);
        return (
          this.options.constraints.forEach(function (e) {
            var r = e.to,
              a = e.attachment,
              c = e.pin;
            void 0 === a && (a = "");
            var u = void 0,
              d = void 0;
            if (a.indexOf(" ") >= 0) {
              var p = a.split(" "),
                m = $(p, 2);
              (d = m[0]), (u = m[1]);
            } else u = d = a;
            var b = C(t, r);
            ("target" !== d && "both" !== d) ||
              (n < b[1] && "top" === v.top && ((n += f), (v.top = "bottom")),
              n + s > b[3] &&
                "bottom" === v.top &&
                ((n -= f), (v.top = "top"))),
              "together" === d &&
                ("top" === v.top &&
                  ("bottom" === y.top && n < b[1]
                    ? ((n += f), (v.top = "bottom"), (n += s), (y.top = "top"))
                    : "top" === y.top &&
                      n + s > b[3] &&
                      n - (s - f) >= b[1] &&
                      ((n -= s - f), (v.top = "bottom"), (y.top = "bottom"))),
                "bottom" === v.top &&
                  ("top" === y.top && n + s > b[3]
                    ? ((n -= f), (v.top = "top"), (n -= s), (y.top = "bottom"))
                    : "bottom" === y.top &&
                      n < b[1] &&
                      n + (2 * s - f) <= b[3] &&
                      ((n += s - f), (v.top = "top"), (y.top = "top"))),
                "middle" === v.top &&
                  (n + s > b[3] && "top" === y.top
                    ? ((n -= s), (y.top = "bottom"))
                    : n < b[1] &&
                      "bottom" === y.top &&
                      ((n += s), (y.top = "top")))),
              ("target" !== u && "both" !== u) ||
                (i < b[0] &&
                  "left" === v.left &&
                  ((i += h), (v.left = "right")),
                i + l > b[2] &&
                  "right" === v.left &&
                  ((i -= h), (v.left = "left"))),
              "together" === u &&
                (i < b[0] && "left" === v.left
                  ? "right" === y.left
                    ? ((i += h),
                      (v.left = "right"),
                      (i += l),
                      (y.left = "left"))
                    : "left" === y.left &&
                      ((i += h),
                      (v.left = "right"),
                      (i -= l),
                      (y.left = "right"))
                  : i + l > b[2] && "right" === v.left
                  ? "left" === y.left
                    ? ((i -= h),
                      (v.left = "left"),
                      (i -= l),
                      (y.left = "right"))
                    : "right" === y.left &&
                      ((i -= h), (v.left = "left"), (i += l), (y.left = "left"))
                  : "center" === v.left &&
                    (i + l > b[2] && "left" === y.left
                      ? ((i -= l), (y.left = "right"))
                      : i < b[0] &&
                        "right" === y.left &&
                        ((i += l), (y.left = "left")))),
              ("element" !== d && "both" !== d) ||
                (n < b[1] && "bottom" === y.top && ((n += s), (y.top = "top")),
                n + s > b[3] &&
                  "top" === y.top &&
                  ((n -= s), (y.top = "bottom"))),
              ("element" !== u && "both" !== u) ||
                (i < b[0] &&
                  ("right" === y.left
                    ? ((i += l), (y.left = "left"))
                    : "center" === y.left && ((i += l / 2), (y.left = "left"))),
                i + l > b[2] &&
                  ("left" === y.left
                    ? ((i -= l), (y.left = "right"))
                    : "center" === y.left &&
                      ((i -= l / 2), (y.left = "right")))),
              "string" == typeof c
                ? (c = c.split(",").map(function (e) {
                    return e.trim();
                  }))
                : !0 === c && (c = ["top", "left", "right", "bottom"]),
              (c = c || []);
            var w = [],
              T = [];
            n < b[1] &&
              (c.indexOf("top") >= 0
                ? ((n = b[1]), w.push("top"))
                : T.push("top")),
              n + s > b[3] &&
                (c.indexOf("bottom") >= 0
                  ? ((n = b[3] - s), w.push("bottom"))
                  : T.push("bottom")),
              i < b[0] &&
                (c.indexOf("left") >= 0
                  ? ((i = b[0]), w.push("left"))
                  : T.push("left")),
              i + l > b[2] &&
                (c.indexOf("right") >= 0
                  ? ((i = b[2] - l), w.push("right"))
                  : T.push("right")),
              w.length &&
                (function () {
                  var e = void 0;
                  (e =
                    void 0 !== t.options.pinnedClass
                      ? t.options.pinnedClass
                      : t.getClass("pinned")),
                    g.push(e),
                    w.forEach(function (t) {
                      g.push(e + "-" + t);
                    });
                })(),
              T.length &&
                (function () {
                  var e = void 0;
                  (e =
                    void 0 !== t.options.outOfBoundsClass
                      ? t.options.outOfBoundsClass
                      : t.getClass("out-of-bounds")),
                    g.push(e),
                    T.forEach(function (t) {
                      g.push(e + "-" + t);
                    });
                })(),
              (w.indexOf("left") >= 0 || w.indexOf("right") >= 0) &&
                (y.left = v.left = !1),
              (w.indexOf("top") >= 0 || w.indexOf("bottom") >= 0) &&
                (y.top = v.top = !1),
              (v.top === o.top &&
                v.left === o.left &&
                y.top === t.attachment.top &&
                y.left === t.attachment.left) ||
                (t.updateAttachClasses(y, v),
                t.trigger("update", {
                  attachment: y,
                  targetAttachment: v,
                }));
          }),
          I(function () {
            !1 !== t.options.addTargetClasses && m(t.target, g, p),
              m(t.element, g, p);
          }),
          {
            top: n,
            left: i,
          }
        );
      },
    });
    var a = (F = E.Utils).getBounds,
      m = F.updateClasses,
      I = F.defer;
    E.modules.push({
      position: function (e) {
        var t = this,
          n = e.top,
          i = e.left,
          o = this.cache("element-bounds", function () {
            return a(t.element);
          }),
          r = o.height,
          s = o.width,
          l = this.getTargetBounds(),
          c = n + r,
          u = i + s,
          d = [];
        n <= l.bottom &&
          c >= l.top &&
          ["left", "right"].forEach(function (e) {
            var t = l[e];
            (t !== i && t !== u) || d.push(e);
          }),
          i <= l.right &&
            u >= l.left &&
            ["top", "bottom"].forEach(function (e) {
              var t = l[e];
              (t !== n && t !== c) || d.push(e);
            });
        var f = [],
          h = [],
          p = ["left", "top", "right", "bottom"];
        return (
          f.push(this.getClass("abutted")),
          p.forEach(function (e) {
            f.push(t.getClass("abutted") + "-" + e);
          }),
          d.length && h.push(this.getClass("abutted")),
          d.forEach(function (e) {
            h.push(t.getClass("abutted") + "-" + e);
          }),
          I(function () {
            !1 !== t.options.addTargetClasses && m(t.target, h, f),
              m(t.element, h, f);
          }),
          !0
        );
      },
    });
    $ = (function () {
      function e(e, t) {
        var n = [],
          i = !0,
          o = !1,
          r = void 0;
        try {
          for (
            var s, a = e[Symbol.iterator]();
            !(i = (s = a.next()).done) &&
            (n.push(s.value), !t || n.length !== t);
            i = !0
          );
        } catch (e) {
          (o = !0), (r = e);
        } finally {
          try {
            !i && a.return && a.return();
          } finally {
            if (o) throw r;
          }
        }
        return n;
      }
      return function (t, n) {
        if (Array.isArray(t)) return t;
        if (Symbol.iterator in Object(t)) return e(t, n);
        throw new TypeError(
          "Invalid attempt to destructure non-iterable instance"
        );
      };
    })();
    return (
      E.modules.push({
        position: function (e) {
          var t = e.top,
            n = e.left;
          if (this.options.shift) {
            var i = this.options.shift;
            "function" == typeof this.options.shift &&
              (i = this.options.shift.call(this, {
                top: t,
                left: n,
              }));
            var o = void 0,
              r = void 0;
            if ("string" == typeof i) {
              (i = i.split(" "))[1] = i[1] || i[0];
              var s = $(i, 2);
              (o = s[0]),
                (r = s[1]),
                (o = parseFloat(o, 10)),
                (r = parseFloat(r, 10));
            } else (o = i.top), (r = i.left);
            return (
              (t += o),
              (n += r),
              {
                top: t,
                left: n,
              }
            );
          }
        },
      }),
      Y
    );
  }),
  "undefined" == typeof jQuery)
)
  throw new Error(
    "Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript."
  );
+(function (e) {
  var t = jQuery.fn.jquery.split(" ")[0].split(".");
  if (
    (t[0] < 2 && t[1] < 9) ||
    (1 == t[0] && 9 == t[1] && t[2] < 1) ||
    t[0] >= 4
  )
    throw new Error(
      "Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0"
    );
})(),
  (function () {
    function e(e, t) {
      if (!e)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
    }
    function t(e, t) {
      if ("function" != typeof t && null !== t)
        throw new TypeError(
          "Super expression must either be null or a function, not " + typeof t
        );
      (e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0,
        },
      })),
        t &&
          (Object.setPrototypeOf
            ? Object.setPrototypeOf(e, t)
            : (e.__proto__ = t));
    }
    function n(e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
    }
    var i =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
        ? function (e) {
            return typeof e;
          }
        : (function (e) {
            return e &&
              "function" == typeof Symbol &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? "symbol"
              : typeof e;
          })(jQuery);
  })(),
  (function (e, t) {
    "object" == typeof exports && "undefined" != typeof module
      ? t(require("jquery"), require("window"))
      : "function" == typeof define && define.amd
      ? define("isInViewport", ["jquery", "window"], t)
      : t(e.$, e.window);
  })(this, function (e, t) {
    "use strict";
    function n(t) {
      var n = e("<div></div>").css({
        width: "100%",
      });
      t.append(n);
      var i = t.width() - n.width();
      return n.remove(), i;
    }
    function i(o, r) {
      var s = o.getBoundingClientRect(),
        a = s.top,
        l = s.bottom,
        c = s.left,
        u = s.right,
        d = e.extend(
          {
            tolerance: 0,
            viewport: t,
          },
          r
        ),
        f = !1,
        h = d.viewport.jquery ? d.viewport : e(d.viewport);
      h.length ||
        (console.warn(
          "isInViewport: The viewport selector you have provided matches no element on page."
        ),
        console.warn("isInViewport: Defaulting to viewport as window"),
        (h = e(t)));
      var p = h.height(),
        g = h.width(),
        m = h[0].toString();
      if (h[0] !== t && "[object Window]" !== m && "[object DOMWindow]" !== m) {
        var v = h[0].getBoundingClientRect();
        (a -= v.top),
          (l -= v.top),
          (c -= v.left),
          (u -= v.left),
          (i.scrollBarWidth = i.scrollBarWidth || n(h)),
          (g -= i.scrollBarWidth);
      }
      return (
        (d.tolerance = ~~Math.round(parseFloat(d.tolerance))),
        d.tolerance < 0 && (d.tolerance = p + d.tolerance),
        u <= 0 || c >= g
          ? f
          : (f = d.tolerance
              ? a <= d.tolerance && l >= d.tolerance
              : l > 0 && a <= p)
      );
    }
    function o(t) {
      if (t) {
        var n = t.split(",");
        return (
          1 === n.length && isNaN(n[0]) && ((n[1] = n[0]), (n[0] = void 0)),
          {
            tolerance: n[0] ? n[0].trim() : void 0,
            viewport: n[1] ? e(n[1].trim()) : void 0,
          }
        );
      }
      return {};
    }
    (e = "default" in e ? e.default : e),
      (t = "default" in t ? t.default : t),
      e.extend(e.expr[":"], {
        "in-viewport": e.expr.createPseudo
          ? e.expr.createPseudo(function (e) {
              return function (t) {
                return i(t, o(e));
              };
            })
          : function (e, t, n) {
              return i(e, o(n[3]));
            },
      }),
      (e.fn.isInViewport = function (e) {
        return this.filter(function (t, n) {
          return i(n, e);
        });
      }),
      (e.fn.run = function (t) {
        var n = this;
        if (
          (1 === arguments.length && "function" == typeof t && (t = [t]),
          !(t instanceof Array))
        )
          throw new SyntaxError(
            "isInViewport: Argument(s) passed to .do/.run should be a function or an array of functions"
          );
        return (
          t.forEach(function (t) {
            "function" != typeof t
              ? (console.warn(
                  "isInViewport: Argument(s) passed to .do/.run should be a function or an array of functions"
                ),
                console.warn(
                  "isInViewport: Ignoring non-function values in array and moving on"
                ))
              : [].slice.call(n).forEach(function (n) {
                  return t.call(e(n));
                });
          }),
          this
        );
      });
  }),
  (function (e, t) {
    "object" == typeof exports && "object" == typeof module
      ? (module.exports = t())
      : "function" == typeof define && define.amd
      ? define([], t)
      : "object" == typeof exports
      ? (exports.AOS = t())
      : (e.AOS = t());
  })(this, function () {
    return (function (e) {
      function t(i) {
        if (n[i]) return n[i].exports;
        var o = (n[i] = {
          exports: {},
          id: i,
          loaded: !1,
        });
        return (
          e[i].call(o.exports, o, o.exports, t), (o.loaded = !0), o.exports
        );
      }
      var n = {};
      return (t.m = e), (t.c = n), (t.p = "dist/"), t(0);
    })([
      function (e, t, n) {
        "use strict";
        function i(e) {
          return e && e.__esModule
            ? e
            : {
                default: e,
              };
        }
        var o =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var i in n)
                  Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
              }
              return e;
            },
          r = i((i(n(1)), n(5))),
          s = i(n(6)),
          a = i(n(7)),
          l = i(n(8)),
          c = i(n(9)),
          u = i(n(10)),
          d = i(n(13)),
          f = [],
          h = !1,
          p = document.all && !window.atob,
          g = {
            offset: 120,
            delay: 0,
            easing: "ease",
            duration: 400,
            disable: !1,
            once: !1,
            startEvent: "DOMContentLoaded",
          },
          m = function () {
            return (
              !(arguments.length <= 0 || void 0 === arguments[0]) &&
                arguments[0] &&
                (h = !0),
              h
                ? ((f = (0, u.default)(f, g)), (0, c.default)(f, g.once), f)
                : void 0
            );
          },
          v = function () {
            (f = (0, d.default)()), m();
          },
          y = function () {
            f.forEach(function (e, t) {
              e.node.removeAttribute("data-aos"),
                e.node.removeAttribute("data-aos-easing"),
                e.node.removeAttribute("data-aos-duration"),
                e.node.removeAttribute("data-aos-delay");
            });
          },
          b = function (e) {
            return (
              !0 === e ||
              ("mobile" === e && l.default.mobile()) ||
              ("phone" === e && l.default.phone()) ||
              ("tablet" === e && l.default.tablet()) ||
              ("function" == typeof e && !0 === e())
            );
          };
        e.exports = {
          init: function (e) {
            return (
              (g = o(g, e)),
              (f = (0, d.default)()),
              b(g.disable) || p
                ? y()
                : (document
                    .querySelector("body")
                    .setAttribute("data-aos-easing", g.easing),
                  document
                    .querySelector("body")
                    .setAttribute("data-aos-duration", g.duration),
                  document
                    .querySelector("body")
                    .setAttribute("data-aos-delay", g.delay),
                  "DOMContentLoaded" === g.startEvent &&
                  ["complete", "interactive"].indexOf(document.readyState) > -1
                    ? m(!0)
                    : document.addEventListener(g.startEvent, function () {
                        m(!0);
                      }),
                  f)
            );
          },
          refresh: m,
          refreshHard: v,
        };
      },
      function (e, t) {},
      ,
      ,
      ,
      function (e, t, n) {
        "use strict";

        var o =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol
                    ? "symbol"
                    : typeof e;
                },
          s = "Expected a function";
      },
      function (e, t) {
        "use strict";
        var a =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol
                    ? "symbol"
                    : typeof e;
                },
          l = "Expected a function",
          c = NaN,
          u = "[object Function]",
          d = "[object GeneratorFunction]",
          f = "[object Symbol]",
          h = /^\s+|\s+$/g,
          p = /^[-+]0x[0-9a-f]+$/i,
          g = /^0b[01]+$/i,
          m = /^0o[0-7]+$/i,
          v = parseInt,
          y = Object.prototype.toString,
          b = Math.max,
          w = Math.min,
          T = Date.now;
      },
      function (e, t) {
        "use strict";
        function n() {
          for (var e, t, n = 0, o = r.length; o > n; n++) {
            e = r[n];
            for (
              var s, a = 0, l = (t = i.querySelectorAll(e.selector)).length;
              l > a;
              a++
            )
              (s = t[a]).ready || ((s.ready = !0), e.fn.call(s, s));
          }
        }
        Object.defineProperty(t, "__esModule", {
          value: !0,
        });
        var i = window.document,
          o = window.MutationObserver || window.WebKitMutationObserver,
          r = [],
          s = void 0;
        t.default = function (e, t) {
          r.push({
            selector: e,
            fn: t,
          }),
            !s &&
              o &&
              (s = new o(n)).observe(i.documentElement, {
                childList: !0,
                subtree: !0,
                removedNodes: !0,
              }),
            n();
        };
      },
      function (e, t) {
        "use strict";
        function n(e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        }
        Object.defineProperty(t, "__esModule", {
          value: !0,
        });
        var i = (function () {
            function e(e, t) {
              for (var n = 0; n < t.length; n++) {
                var i = t[n];
                (i.enumerable = i.enumerable || !1),
                  (i.configurable = !0),
                  "value" in i && (i.writable = !0),
                  Object.defineProperty(e, i.key, i);
              }
            }
            return function (t, n, i) {
              return n && e(t.prototype, n), i && e(t, i), t;
            };
          })(),
          o = (function () {
            function e() {
              n(this, e);
            }
            return (
              i(e, [
                {
                  key: "phone",
                  value: function () {
                    var e = !1;
                    return (
                      (function (t) {
                        (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
                          t
                        ) ||
                          /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
                            t.substr(0, 4)
                          )) &&
                          (e = !0);
                      })(
                        navigator.userAgent || navigator.vendor || window.opera
                      ),
                      e
                    );
                  },
                },
                {
                  key: "mobile",
                  value: function () {
                    var e = !1;
                    return (
                      (function (t) {
                        (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(
                          t
                        ) ||
                          /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
                            t.substr(0, 4)
                          )) &&
                          (e = !0);
                      })(
                        navigator.userAgent || navigator.vendor || window.opera
                      ),
                      e
                    );
                  },
                },
                {
                  key: "tablet",
                  value: function () {
                    return this.mobile() && !this.phone();
                  },
                },
              ]),
              e
            );
          })();
        t.default = new o();
      },
      function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
          value: !0,
        });
        var n = function (e, t, n) {
          var i = e.node.getAttribute("data-aos-once");
          t > e.position
            ? e.node.classList.add("aos-animate")
            : void 0 !== i &&
              ("false" === i || (!n && "true" !== i)) &&
              e.node.classList.remove("aos-animate");
        };
        t.default = function (e, t) {
          var i = window.pageYOffset,
            o = window.innerHeight;
          e.forEach(function (e, r) {
            n(e, o + i, t);
          });
        };
      },
      function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
          value: !0,
        });
        var i = (function (e) {
          return e && e.__esModule
            ? e
            : {
                default: e,
              };
        })(n(11));
        t.default = function (e, t) {
          return (
            e.forEach(function (e, n) {
              e.node.classList.add("aos-init"),
                (e.position = (0, i.default)(e.node, t.offset));
            }),
            e
          );
        };
      },
      function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
          value: !0,
        });
        n(12);
        t.default = function (e, t) {
          var n = 0,
            o = 0,
            r = window.innerHeight,
            s = {
              offset: e.getAttribute("data-aos-offset"),
              anchor: e.getAttribute("data-aos-anchor"),
              anchorPlacement: e.getAttribute("data-aos-anchor-placement"),
            };

          return s.anchorPlacement || s.offset || isNaN(t) || (o = t), n + o;
        };
      },
      function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
          value: !0,
        });
        t.default = function (e) {
          for (
            var t = 0, n = 0;
            e && !isNaN(e.offsetLeft) && !isNaN(e.offsetTop);

          )
            (t += e.offsetLeft - ("BODY" != e.tagName ? e.scrollLeft : 0)),
              (n += e.offsetTop - ("BODY" != e.tagName ? e.scrollTop : 0)),
              (e = e.offsetParent);
          return {
            top: n,
            left: t,
          };
        };
      },
      function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
          value: !0,
        });
        t.default = function (e) {
          e = e || document.querySelectorAll("[data-aos]");
          var t = [];
          return (
            [].forEach.call(e, function (e, n) {
              t.push({
                node: e,
              });
            }),
            t
          );
        };
      },
    ]);
  });
$(window).on("load", function () {
  AOS.init({ duration: 1200 }),
    $("#bg-slider").length &&
      $.fn.slick &&
      ($(".slick-slide .img-holder").height($(window).height()),
      $(window).on("resize", function () {
        $(".slick-slide .img-holder").height($(window).height());
      })),
    $scrollable.find(".aos-init").removeClass("aos-animate");
});

window.onload = function () {
  function updateVideoSource() {
    const video = document.getElementById("responsiveVideo");

    if (window.innerWidth <= 576) {
      video.src = "./source/mobile-version2.mp4";
      video.style.top = "unset";
      video.style.left = "unset";
      video.style.transform = "unset";
      video.addEventListener("ended", function () {
        video.currentTime = 0;
        video.play();
      });
    } else {
      video.src = "./source/desktop-version.mp4";
      video.style.top = "50%";
      video.style.left = "50%";
      video.style.transform = "translate(-50%, -50%)";
      video.addEventListener("ended", function () {
        video.currentTime = 0;
        video.play();
      });
    }

    video.load();
  }

  updateVideoSource();

  window.addEventListener("resize", updateVideoSource);

  function autoRedirect() {
    setTimeout(function () {
      window.location.href = "https://kakajan-12.github.io/afisha-2.0/";
    }, 6000);
  }

  autoRedirect();

  console.log("loaded");
};
