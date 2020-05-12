(window.webpackJsonp = window.webpackJsonp || []).push([
    [10], {
        312: function (t, e, n) {
            "use strict";
            var o = n(29),
                l = n(30),
                r = function () {
                    function t(e) {
                        Object(o.a)(this, t), this.opts = e || {}, this.elem = 0 === document.querySelectorAll(this.opts.elem).length ? document.querySelectorAll(".js-helix-wave") : document.querySelectorAll(this.opts.elem), this.resolution = this.opts.resolution || window.devicePixelRatio > 1 ? this.resolution = 2 : this.resolution = 1, this.colors = this.opts.colors || ["#7C4DFF", "#448AFF", "#1DE9B6"], this.diff = this.opts.diff || 1, this.amplitude = this.opts.amplitude * this.resolution || 5 * this.resolution, this.frequency = this.opts.frequency * this.resolution || 10 * this.resolution, this.wavelength = this.opts.wavelength * this.resolution || 40 * this.resolution, this.lineWidth = this.opts.lineWidth * this.resolution || 1 * this.resolution, this.lineInterval = this.opts.lineInterval * this.resolution || 20 * this.resolution, this.lineShift = this.opts.lineShift * this.resolution || 0, this.colors.reverse(), this.frames = 0, this.helixes = [], this.canvases = [], this.ctxs = [], this.init()
                    }
                    return Object(l.a)(t, [{
                        key: "init",
                        value: function () {
                            this.initObserver(), this.handleEvents(), this.createCanvas(), this.updateCanvas()
                        }
                    }, {
                        key: "initObserver",
                        value: function () {
                            this.observer = new IntersectionObserver(this.observer.bind(this), this.inViewOptions);
                            for (var i = 0; this.elem.length > i; i++) {
                                var t = this.elem[i];
                                this.observer.observe(t)
                            }
                        }
                    }, {
                        key: "observer",
                        value: function (t) {
                            for (var i = 0; t.length > i; i++) {
                                var e = t[i],
                                    n = e.target;
                                switch (e.isIntersecting) {
                                    case !0:
                                        n.isInView = !0;
                                        break;
                                    case !1:
                                        n.isInView = !1
                                }
                            }
                        }
                    }, {
                        key: "destroyObserver",
                        value: function () {
                            if (this.observer) {
                                for (var i = 0; this.elem.length > i; i++) {
                                    var t = this.elem[i];
                                    this.observer.disconnect(t)
                                }
                                this.observer = null
                            }
                        }
                    }, {
                        key: "createCanvas",
                        value: function () {
                            for (var i = 0; i < this.elem.length; i++) {
                                var t = this.elem[i],
                                    canvas = document.createElement("canvas"),
                                    e = canvas.getContext("2d");
                                this.canvases.push(canvas), this.ctxs.push(e), t.appendChild(canvas), e.clearRect(0, 0, canvas.width, canvas.height)
                            }
                        }
                    }, {
                        key: "updateCanvas",
                        value: function () {
                            for (var i = 0; i < this.elem.length; i++) {
                                var t = this.elem[i],
                                    canvas = this.canvases[i],
                                    e = this.ctxs[i];
                                2 === this.resolution && e.scale(.5, .5), canvas.width = t.clientWidth * this.resolution, canvas.height = t.clientHeight * this.resolution, canvas.setAttribute("style", "display: block; width: ".concat(canvas.width / this.resolution, "px; height: ").concat(canvas.height / this.resolution, "px;")), canvas.classList.add("helix-wave-".concat(i + 1));
                                var n = canvas.width / 2 * this.diff,
                                    o = .5 * canvas.width,
                                    l = .5 * canvas.height;
                                canvas.diffX = n, canvas.posX = o, canvas.posY = l, e.fillRect(0, 0, canvas.width, canvas.height), e.moveTo(o, l)
                            }
                        }
                    }, {
                        key: "destroyCanvas",
                        value: function () {
                            for (var i = 0; i < this.elem.length; i++) {
                                var t = this.elem[i],
                                    canvas = this.canvases[i];
                                this.ctxs[i].clearRect(0, 0, canvas.width, canvas.height), t.removeChild(canvas), this.elem.length === i && (this.elem = null, this.canvases = null, this.ctxs = null)
                            }
                        }
                    }, {
                        key: "tick",
                        value: function () {
                            for (var i = 0; i < this.elem.length; i++) {
                                var t = this.elem[i],
                                    canvas = this.canvases[i],
                                    e = this.ctxs[i];
                                if (e.clearRect(0, 0, canvas.width, canvas.height), t.isInView)
                                    for (var n = 0; n < this.colors.length; n++) {
                                        e.beginPath(), e.lineCap = "round", e.strokeStyle = this.colors[n], e.lineWidth = this.lineWidth;
                                        for (var o = canvas.posX - canvas.diffX - this.lineShift * (n - 1); o < canvas.width / 2 + canvas.diffX; o++) {
                                            var l = this.calcPosY(o, n * this.lineInterval);
                                            e.lineTo(o, l + canvas.posY)
                                        }
                                        e.stroke()
                                    }
                            }
                            this.frames -= .5 * this.resolution
                        }
                    }, {
                        key: "calcPosY",
                        value: function (t, e) {
                            return Math.sin(t / this.wavelength * (2 * Math.PI) + (this.frames - e) / this.frequency) * this.amplitude
                        }
                    }, {
                        key: "handleEvents",
                        value: function () {
                            this.raf = this.tick.bind(this), this.start()
                        }
                    }, {
                        key: "removeEvents",
                        value: function () {
                            this.stop()
                        }
                    }, {
                        key: "destroy",
                        value: function () {
                            var t = this;
                            this.removeEvents(), this.destroyObserver(), requestTimeout((function () {
                                t.destroyCanvas()
                            }), 240)
                        }
                    }, {
                        key: "start",
                        value: function () {
                            gsap.ticker.add(this.raf)
                        }
                    }, {
                        key: "stop",
                        value: function () {
                            gsap.ticker.remove(this.raf)
                        }
                    }]), t
                }();
            e.a = r
        },
        317: function (t, e, n) {
            var content = n(355);
            "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, n(13).default)("0180177f", content, !0, {
                sourceMap: !1
            })
        },
        318: function (t, e) {
            t.exports = function (t) {
                t.options.__i18n = t.options.__i18n || [], t.options.__i18n.push('{"ja":{"title":"Contact","zip":"100 029","address":"中国 | 北京市朝阳区小关东里14号","phone":"NaN"},"en":{"title":"Contact","zip":"111-0053","address":"No.14, Xiaoguan Dongli，Chaoyang District, Beijing China","phone":"NaN"}}'), delete t.options._Ctor
            }
        },
        354: function (t, e, n) {
            "use strict";
            var o = n(317);
            n.n(o).a
        },
        355: function (t, e, n) {
            (e = n(12)(!1)).push([t.i, ".p-contact .m-subpage-hero.subpage-child .subpage-hero-height[data-v-e8719978]{height:calc(100vh - 8.33333vw);height:calc(var(--vh)*100 - 8.33333vw)}.p-contact .m-subpage-sections[data-v-e8719978]{padding-bottom:12.5vw}.p-contact .office-block[data-v-e8719978]{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.p-contact .address-block[data-v-e8719978]{width:23.75vw;padding-left:4.16667vw}.p-contact .address-block .link[data-v-e8719978]{display:inline-block;margin-top:.1em;line-height:1.5;letter-spacing:0}.p-contact .address-block .link .row[data-v-e8719978]{display:block}.p-contact .address-block .link .row[data-v-e8719978]:not(:last-child){margin-bottom:.1em}.p-contact .phone-block[data-v-e8719978]{width:11.25vw}.p-contact .phone-block .txt[data-v-e8719978]{display:inline-block;margin-top:.1em;line-height:1.5;letter-spacing:0}.p-contact .email-block[data-v-e8719978]{padding-left:4.16667vw}.p-contact .email-lists[data-v-e8719978]{position:relative;width:100%;margin-top:3.5em}.p-contact .email-list[data-v-e8719978]:not(:last-child){margin-bottom:.5em}.p-contact .email-list a.email[data-v-e8719978]{position:relative;display:block;width:100%;height:1.5em;font-size:calc(4.5rem + (300vw - 1800px)/1000);font-family:HK Nova,sans-serif;letter-spacing:0;white-space:nowrap;vertical-align:middle;line-height:1;overflow:hidden}@media only screen and (min-width:1920px){.p-contact .m-subpage-sections[data-v-e8719978]{padding-bottom:240px}.p-contact .address-block[data-v-e8719978]{width:456px;padding-left:80px}.p-contact .phone-block[data-v-e8719978]{width:216px}.p-contact .email-block[data-v-e8719978]{padding-left:80px}.p-contact .email-list a.email[data-v-e8719978]{font-size:4.896rem}}@media only screen and (max-width:1194px){.p-contact .m-subpage-hero.subpage-child .subpage-hero-height[data-v-e8719978]{height:auto}}@media only screen and (max-width:680px){.p-contact .m-subpage-sections[data-v-e8719978]{padding-bottom:80px}.p-contact .office-block[data-v-e8719978]{padding-left:0}.p-contact .address-block[data-v-e8719978]{width:100%;margin-bottom:40px;padding-left:0}.p-contact .phone-block[data-v-e8719978]{width:100%}.p-contact .email-block[data-v-e8719978]{padding-left:0}.p-contact .email-lists[data-v-e8719978]{margin-top:30px}.p-contact .email-list a.email[data-v-e8719978]{font-size:2.4rem}}", ""]), t.exports = e
        },
        356: function (t, e, n) {
            "use strict";
            var o = n(318),
                l = n.n(o);
            e.default = l.a
        },
        406: function (t, e, n) {
            "use strict";
            n.r(e);
            n(23), n(14), n(11), n(6), n(19);
            var o = n(4),
                l = n(9),
                r = n(312);

            function c(object, t) {
                var e = Object.keys(object);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(object);
                    t && (n = n.filter((function (t) {
                        return Object.getOwnPropertyDescriptor(object, t).enumerable
                    }))), e.push.apply(e, n)
                }
                return e
            }
            var h = {
                    data: function () {
                        return {
                            title: this.$t.bind(this)("title"),
                            description: "ja" === this.$i18n.locale ? "Helixes Co.，Ltd.是一家使用创意解决方案来解决问题的总体计划公司。 我们计划和管理各种不受框架约束的事物，例如广告制作，品牌和数字产品开发以及艺术家管理。" : "Helixes Inc. is a planning company uses creativity to solve problems. We integrate strategy, creativity and experience to build brands.",
                            className: "contact",
                            headerTitle: "Contact",
                            headerSubTitle: "Get in touch",
                            helixWave: null,
                            mapsUrl: "",
                            contactEmail: "",
                            jobsEmail: ""
                        }
                    },
                    head: function () {
                        return {
                            title: this.title,
                            titleTemplate: "%s ー Helixes Inc.",
                            htmlAttrs: {
                                lang: this.$i18n.locale
                            },
                            bodyAttrs: {
                                class: this.className
                            },
                            meta: [{
                                hid: "description",
                                name: "description",
                                content: this.description
                            }, {
                                hid: "twitter:title",
                                property: "twitter:title",
                                content: this.title
                            }, {
                                hid: "twitter:description",
                                property: "twitter:description",
                                content: this.description
                            }, {
                                hid: "og:title",
                                property: "og:title",
                                content: this.title
                            }, {
                                hid: "og:description",
                                property: "og:description",
                                content: this.description
                            }, {
                                hid: "itemprop:name",
                                itemprop: "name",
                                content: this.title
                            }, {
                                hid: "itemprop:description",
                                itemprop: "description",
                                content: this.description
                            }]
                        }
                    },
                    computed: function (t) {
                        for (var i = 1; i < arguments.length; i++) {
                            var source = null != arguments[i] ? arguments[i] : {};
                            i % 2 ? c(Object(source), !0).forEach((function (e) {
                                Object(o.a)(t, e, source[e])
                            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : c(Object(source)).forEach((function (e) {
                                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e))
                            }))
                        }
                        return t
                    }({}, Object(l.b)({
                        loaded: "loaded",
                        page: "page",
                        user: "user"
                    })),
                    watch: {
                        loaded: function (t) {
                            t && this.init("first")
                        }
                    },
                    beforeMount: function () {
                        $g.fn.utility.resetScrollPosition(), $g.fn.utility.setViewportHeight()
                    },
                    mounted: function () {
                        var t = this;
                        this.$nextTick((function () {
                            t.setData(), $g.fn.utility.updateViewType(), $g.fn.utility.staggerElement(".subpage-hero-sub-ttl"), $g.fn.utility.staggerElement(".subpage-hero-ttl"), t.$eventHub.$emit("helixSetState", !1), t.helixWave = new r.a($g.configs.helixWaveSettings()), observer.init($g.configs.observerSettings), t.loaded && t.init("default"), t.$eventHub.$on("onScroll", t.onScroll), t.$eventHub.$on("onResize", t.onResize)
                        }))
                    },
                    beforeDestroy: function () {
                        observer.destroy(), this.helixWave.destroy(), this.$eventHub.$off("onScroll", this.onScroll), this.$eventHub.$off("onResize", this.onResize)
                    },
                    methods: {
                        setData: function () {
                            this.mapsUrl = $g.path.urls.gmaps, this.contactEmail = $g.configs.emails.contact, this.jobsEmail = $g.configs.emails.jobs
                        },
                        init: function (t) {
                            var e = this;
                            switch (t) {
                                case "first":
                                    $g.fn.utility.staggerAnimation({
                                        el: ".m-subpage-hero .l-relative",
                                        delay: .85
                                    }), this.$eventHub.$emit("helixSetDefault"), this.$eventHub.$emit("glInit"), this.$eventHub.$emit("glTick"), this.$eventHub.$emit("helixSetState", !1), this.$eventHub.$emit("helixStop"), this.$refs.white && this.$refs.white.classList.add("is-white"), requestTimeout((function () {
                                        $g.fn.utility.setFooterTop(), fakeScroll.isActive && fakeScroll.update()
                                    }), 300), ua.windows && $g.fn.utility.windowsUpdate(450);
                                    break;
                                default:
                                    $g.fn.utility.staggerAnimation({
                                        el: ".m-subpage-hero .l-relative",
                                        delay: .2
                                    }), this.$eventHub.$emit("glReInit"), this.$eventHub.$emit("glTick"), requestTimeout((function () {
                                        $g.fn.utility.setFooterTop(), fakeScroll.isActive && fakeScroll.update()
                                    }), 300), ua.windows && $g.fn.utility.windowsUpdate(450), requestTimeout((function () {
                                        e.$refs.white && e.$refs.white.classList.add("is-white")
                                    }), 650), requestTimeout((function () {
                                        e.$eventHub.$emit("helixSetState", !1), e.$eventHub.$emit("helixStop")
                                    }), 1650)
                            }
                        },
                        onClickEmail: function (t, e) {
                            var n = this.$refs[t];
                            $g.fn.utility.onClickEmail({
                                isDesktop: this.user.desktop,
                                target: n,
                                evt: e
                            })
                        },
                        onMouseEnterEmail: function (t) {
                            $g.fn.utility.onMouseEnterEmail({
                                isDesktop: this.user.desktop,
                                evt: t
                            })
                        },
                        onMouseLeaveEmail: function (t) {
                            $g.fn.utility.onMouseLeaveEmail({
                                isDesktop: this.user.desktop,
                                evt: t
                            })
                        },
                        onScroll: function (t) {
                            t._y;
                            t.y > t.height && (this.$eventHub.$emit("helixSetState", !1), this.$eventHub.$emit("helixStop"))
                        },
                        onResize: function (t) {
                            t.width, t.height
                        },
                        goTo: function (t) {
                            this.$router.push({
                                path: t
                            })
                        },
                        scrollToElement: function (t) {
                            var e = t.id;
                            t.duration, t.ease;
                            $g.fn.utility.scrollToElement({
                                id: e
                            })
                        }
                    },
                    transition: {
                        mode: "out-in",
                        css: !1,
                        beforeEnter: function (t) {
                            this.$store.getters.loaded && $g.fn.transition.beforeEnter({
                                el: t
                            })
                        },
                        enter: function (t, e) {
                            var n = this;
                            this.$store.getters.loaded && (requestTimeout((function () {
                                n.$store.dispatch("maskOff")
                            }), 250), $g.fn.transition.enter({
                                el: t,
                                done: e
                            }))
                        },
                        leave: function (t, e) {
                            if (this.$store.getters.loaded) {
                                this.$store.dispatch("maskOn"), $g.fn.transition.leave({
                                    el: t,
                                    done: e,
                                    callback: function () {}
                                })
                            }
                        }
                    }
                },
                d = (n(354), n(8)),
                v = n(356),
                component = Object(d.a)(h, (function () {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("div", {
                        class: "p-" + t.className
                    }, [n("section", {
                        ref: "white",
                        class: t.className + "-hero | m-subpage-hero | subpage-child",
                        attrs: {
                            "data-fs-section": ""
                        }
                    }, [n("div", {
                        ref: "hero",
                        staticClass: "subpage-hero-height"
                    }, [n("div", {
                        staticClass: "subpage-hero-inner"
                    }, [n("div", {
                        staticClass: "subpage-hero-body | l-relative"
                    }, [n("h4", {
                        staticClass: "subpage-hero-sub-ttl"
                    }, [t._v(t._s(t.headerSubTitle))]), t._v(" "), n("h1", {
                        staticClass: "subpage-hero-ttl"
                    }, [t._v(t._s(t.headerTitle))]), t._v(" "), n("div", {
                        staticClass: "helix-wave | js-helix-wave"
                    })])])])]), t._v(" "), n("section", {
                        staticClass: "m-subpage-sections",
                        attrs: {
                            "data-fs-section": ""
                        }
                    }, [n("div", {
                        staticClass: "subpage-section-narrow"
                    }, [n("div", {
                        staticClass: "subpage-section-narrow-body"
                    }, [n("div", {
                        staticClass: "m-subpage-child-content"
                    }, [t._m(0), t._v(" "), n("div", {
                        staticClass: "content-body"
                    }, [n("div", {
                        staticClass: "office-block"
                    }, [n("div", {
                        staticClass: "address-block"
                    }, [n("h5", {
                        staticClass: "ui-line-ttl"
                    }, [t._v("Address")]), t._v(" "), n("a", {
                        staticClass: "link",
                        attrs: {
                            href: t.mapsUrl,
                            target: "_blank",
                            rel: "noopener",
                            "data-ma-hover": "maps-link"
                        }
                    }, [n("span", {
                        staticClass: "row"
                    }, [t._v(t._s(t.$t("zip")))]), t._v(" "), n("span", {
                        staticClass: "row"
                    }, [t._v(t._s(t.$t("address")))])])]), t._v(" "), n("div", {
                        staticClass: "phone-block"
                    }, [n("h5", {
                        staticClass: "ui-line-ttl"
                    }, [t._v("Phone")]), t._v(" "), n("p", {
                        staticClass: "txt"
                    }, [t._v(t._s(t.$t("phone")))])])])])]), t._v(" "), n("div", {
                        staticClass: "m-subpage-child-content"
                    }, [t._m(1), t._v(" "), n("div", {
                        staticClass: "content-body"
                    }, [n("div", {
                        staticClass: "email-block"
                    }, [n("h5", {
                        staticClass: "ui-line-ttl"
                    }, [t._v("E-mail")]), t._v(" "), n("ul", {
                        staticClass: "email-lists"
                    }, [n("li", {
                        staticClass: "email-list"
                    }, [n("div", {
                        ref: "emailContact",
                        staticClass: "m-email-copy",
                        attrs: {
                            "data-email-to": t._f("email")(t.contactEmail)
                        },
                        on: {
                            click: function (e) {
                                return t.onClickEmail("emailContact", e)
                            },
                            mouseenter: function (e) {
                                return t.onMouseEnterEmail(e)
                            },
                            mouseleave: function (e) {
                                return t.onMouseLeaveEmail(e)
                            }
                        }
                    }, [n("a", {
                        staticClass: "email",
                        attrs: {
                            href: t._f("email")("mailto:" + t.contactEmail)
                        }
                    }, [n("span", {
                        staticClass: "txt | active"
                    }, [t._v(t._s(t._f("email")(t.contactEmail)))]), t._v(" "), n("span", {
                        staticClass: "txt | hover",
                        attrs: {
                            "data-txt": "(Contact)"
                        }
                    }, [t._v("Copy to clipboard")]), t._v(" "), n("span", {
                        staticClass: "txt | done"
                    }, [t._v("E-mail copied")])])])]), t._v(" "), n("li", {
                        staticClass: "email-list"
                    }, [n("div", {
                        ref: "emailJobs",
                        staticClass: "m-email-copy",
                        attrs: {
                            "data-email-to": t._f("email")(t.jobsEmail)
                        },
                        on: {
                            click: function (e) {
                                return t.onClickEmail("emailJobs", e)
                            },
                            mouseenter: function (e) {
                                return t.onMouseEnterEmail(e)
                            },
                            mouseleave: function (e) {
                                return t.onMouseLeaveEmail(e)
                            }
                        }
                    }, [n("a", {
                        staticClass: "email",
                        attrs: {
                            href: t._f("email")("mailto:" + t.jobsEmail)
                        }
                    }, [n("span", {
                        staticClass: "txt | active"
                    }, [t._v(t._s(t._f("email")(t.jobsEmail)))]), t._v(" "), n("span", {
                        staticClass: "txt | hover",
                        attrs: {
                            "data-txt": "(Careers)"
                        }
                    }, [t._v("Copy to clipboard")]), t._v(" "), n("span", {
                        staticClass: "txt | done"
                    }, [t._v("E-mail copied")])])])])])])])])])])]), t._v(" "), t._m(2)])
                }), [function () {
                    var t = this.$createElement,
                        e = this._self._c || t;
                    return e("div", {
                        staticClass: "content-label"
                    }, [e("h4", {
                        staticClass: "ttl"
                    }, [this._v("Office")])])
                }, function () {
                    var t = this.$createElement,
                        e = this._self._c || t;
                    return e("div", {
                        staticClass: "content-label"
                    }, [e("h4", {
                        staticClass: "ttl"
                    }, [this._v("Enquiries")])])
                }, function () {
                    var t = this.$createElement,
                        e = this._self._c || t;
                    return e("div", {
                        staticClass: "fake-footer",
                        attrs: {
                            "data-fs-section": ""
                        }
                    }, [e("div", {
                        staticClass: "fake-footer-height"
                    })])
                }], !1, null, "e8719978", null);
            "function" == typeof v.default && Object(v.default)(component);
            e.default = component.exports
        }
    }
]);
