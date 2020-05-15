(window.webpackJsonp = window.webpackJsonp || []).push([
    [19], {
        312: function (t, e, n) {
            "use strict";
            var o = n(29),
                r = n(30),
                l = function () {
                    function t(e) {
                        Object(o.a)(this, t), this.opts = e || {}, this.elem = 0 === document.querySelectorAll(this.opts.elem).length ? document.querySelectorAll(".js-helix-wave") : document.querySelectorAll(this.opts.elem), this.resolution = this.opts.resolution || window.devicePixelRatio > 1 ? this.resolution = 2 : this.resolution = 1, this.colors = this.opts.colors || ["#7C4DFF", "#448AFF", "#1DE9B6"], this.diff = this.opts.diff || 1, this.amplitude = this.opts.amplitude * this.resolution || 5 * this.resolution, this.frequency = this.opts.frequency * this.resolution || 10 * this.resolution, this.wavelength = this.opts.wavelength * this.resolution || 40 * this.resolution, this.lineWidth = this.opts.lineWidth * this.resolution || 1 * this.resolution, this.lineInterval = this.opts.lineInterval * this.resolution || 20 * this.resolution, this.lineShift = this.opts.lineShift * this.resolution || 0, this.colors.reverse(), this.frames = 0, this.helixes = [], this.canvases = [], this.ctxs = [], this.init()
                    }
                    return Object(r.a)(t, [{
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
                                    r = .5 * canvas.height;
                                canvas.diffX = n, canvas.posX = o, canvas.posY = r, e.fillRect(0, 0, canvas.width, canvas.height), e.moveTo(o, r)
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
                                            var r = this.calcPosY(o, n * this.lineInterval);
                                            e.lineTo(o, r + canvas.posY)
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
            e.a = l
        },
        339: function (t, e, n) {
            var content = n(388);
            "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, n(13).default)("081b82f5", content, !0, {
                sourceMap: !1
            })
        },
        340: function (t, e) {
            t.exports = function (t) {
                t.options.__i18n = t.options.__i18n || [], t.options.__i18n.push('{"ja":{"title":"Creative","about":"除了运营策略和传播设计之外，我们还将使用最适合图形，视频和数字等用途的创意为品牌创建新故事。","sections":{"1":"Helixes的策略团队将帮助您启动和更新品牌。 规划清晰可见的业务目标的强大管理策略。 为您的品牌和与消费者接触所需的沟通设计正确的故事。","2":"我们以最佳的表达方式（例如视频，音乐和文案写作）接近品牌的目标用户。 团队的力量是我们多年以来培养的上颌骨技术力量。","3":"设计和实现数字通信。 我们还负责生产数字产品，例如提供网站和应用程序。 我们通过战略设计提供给用户的体验与品牌建立了牢固的联系。","4":"我们将帮助您以图形方式传达品牌真正想要传达给用户的信息。 我们提供多种表达方式，例如适合视觉效果的建议以及徽标和包装的图形制作。","5":"为了灵活地应对问题，我们将创建超越障碍的有效团队。 我们与设计师，卡车制造商，插画家以及其他各种高度专业化的外部合作伙伴合作，以推进该项目。"}},"en":{"title":"Creative","about":"In addition to designing operating strategies and communication, we use a sense of creativity that best for its purpose, such as graphics, video, and other digital media, spinning yet further new threads into the growing story of the company.","sections":{"1":"Helixes’ strategy team supports brand launches and renewals. We plan solid operational strategy which specifically captures the business objectives. We design appropriate stories for the brand as well as the communication needed to convey them to the consumer.","2":"We approach with the optimal expression with images, music, copywriting, etc. for users targeted by the brand. Maxilla is our business where we have developed our technical capability through many achievements and is the team’s strength.","3":"We work on design and implementation of communication. We deal with digital products including providing websites and apps. The experience which we deliver to the users through strategic design fosters strong connection between the brand and users.","4":"We support brands in delivering the message which the brand truly wants to convey visually. Our services cover across a wide range of services such as suggestion of the visual to be used, graphic production such as logos and packages, and so on.","5":"We offer an efficient, cross-functional team in order to handle issues flexibly. We progress the project with versatile and highly specialized external partners such as designers, track makers, illustrators and so on."}}}'), delete t.options._Ctor
            }
        },
        387: function (t, e, n) {
            "use strict";
            var o = n(339);
            n.n(o).a
        },
        388: function (t, e, n) {
            (e = n(12)(!1)).push([t.i, "", ""]), t.exports = e
        },
        389: function (t, e, n) {
            "use strict";
            var o = n(340),
                r = n.n(o);
            e.default = r.a
        },
        403: function (t, e, n) {
            "use strict";
            n.r(e);
            n(23), n(14), n(11), n(6), n(19), n(32);
            var o = n(4),
                r = n(9),
                l = n(312);

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
                        var t = this.$t.bind(this);
                        return {
                            title: t("title"),
                            description: "ja" === this.$i18n.locale ? "Helixes Co.，Ltd.是一家使用创意解决方案来解决问题的总体计划公司。 我们计划和管理各种不受框架约束的事物，例如广告制作，品牌和数字产品开发以及艺术家管理。" : "Helixes Inc. is a planning company uses creativity to solve problems. We integrate strategy, creativity and experience to build brands.",
                            className: "creative",
                            headerTitle: "Creative",
                            headerSubTitle: "Solutions",
                            helixWave: null,
                            footerTop: 0,
                            sections: [{
                                ttl: "Strategy & Branding",
                                ttlHtml: '<span class="row">Strategy &amp;</span><span class="row">Branding</span>',
                                txt: t("sections.1"),
                                imgSrc: "",
                                creativeLists: ["Strategy", "Branding", "Communication"],
                                servicesLists: [{
                                    name: "Maxilla",
                                    url: "https://maxilla.jp"
                                }]
                            }, {
                                ttl: "Content Production",
                                ttlHtml: '<span class="row">Content</span><span class="row">Production</span>',
                                txt: t("sections.2"),
                                imgSrc: "",
                                creativeLists: ["Film", "Music", "Copywriting"],
                                servicesLists: [{
                                    name: "Maxilla",
                                    url: "https://maxilla.jp"
                                }, {
                                    name: "名[NA]",
                                    url: "https://naisthename.com"
                                }]
                            }, {
                                ttl: "Digital Communication",
                                ttlHtml: '<span class="row">Digital</span><span class="row" data-txt="-">Communi</span><span class="row">cation</span>',
                                txt: t("sections.3"),
                                imgSrc: "",
                                creativeLists: ["Web", "Apps", "UI/UX"],
                                servicesLists: [{
                                    name: "Roppyaku",
                                    url: "http://roppyaku.com"
                                }]
                            }, {
                                ttl: "Visual Design",
                                ttlHtml: '<span class="row">Visual</span><span class="row">Design</span>',
                                txt: t("sections.4"),
                                imgSrc: "",
                                creativeLists: ["Graphic", "Apparel", "Photo"],
                                servicesLists: [{
                                    name: "Maxilla",
                                    url: "https://maxilla.jp"
                                }, {
                                    name: "名[NA]",
                                    url: "https://naisthename.com"
                                }]
                            }, {
                                ttl: "Artist Management",
                                ttlHtml: '<span class="row">Artist</span><span class="row" data-txt="-">Manage</span><span class="row">ment</span>',
                                txt: t("sections.5"),
                                imgSrc: "",
                                creativeLists: ["Representative", "Management", "Curation"],
                                servicesLists: [{
                                    name: "sic",
                                    url: !1
                                }]
                            }]
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
                    }({}, Object(r.b)({
                        loaded: "loaded",
                        user: "user",
                        page: "page"
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
                            t.setData(), $g.fn.utility.updateViewType(), $g.fn.utility.staggerElement(".subpage-hero-sub-ttl"), $g.fn.utility.staggerElement(".subpage-hero-ttl"), t.$eventHub.$emit("helixSetState", !0), t.helixWave = new l.a($g.configs.helixWaveSettings()), observer.init($g.configs.observerSettings), t.loaded && t.init("default"), t.$eventHub.$on("onScroll", t.onScroll), t.$eventHub.$on("onResize", t.onResize)
                        }))
                    },
                    beforeDestroy: function () {
                        observer.destroy(), this.helixWave.destroy(), this.$eventHub.$off("onScroll", this.onScroll), this.$eventHub.$off("onResize", this.onResize)
                    },
                    methods: {
                        setData: function () {
                            this.sections[0].imgSrc = $g.path.image.creative[1], this.sections[1].imgSrc = $g.path.image.creative[2], this.sections[2].imgSrc = $g.path.image.creative[3], this.sections[3].imgSrc = $g.path.image.creative[4], this.sections[4].imgSrc = $g.path.image.creative[5]
                        },
                        init: function (t) {
                            switch (t) {
                                case "first":
                                    $g.fn.utility.staggerAnimation({
                                        el: ".m-subpage-hero .l-relative",
                                        delay: .85
                                    }), this.$eventHub.$emit("helixFadeIn", {
                                        delay: 1.35,
                                        pageName: this.page.name
                                    }), this.$eventHub.$emit("glInit"), this.$eventHub.$emit("glTick"), requestTimeout((function () {
                                        $g.fn.utility.setFooterTop(), fakeScroll.isActive && fakeScroll.update()
                                    }), 300), ua.windows && $g.fn.utility.windowsUpdate(450);
                                    break;
                                default:
                                    $g.fn.utility.staggerAnimation({
                                        el: ".m-subpage-hero .l-relative",
                                        delay: .2
                                    }), this.$eventHub.$emit("glReInit"), this.$eventHub.$emit("glTick"), requestTimeout((function () {
                                        $g.fn.utility.setFooterTop(), fakeScroll.isActive && fakeScroll.update()
                                    }), 300), ua.windows && $g.fn.utility.windowsUpdate(450)
                            }
                        },
                        glHoverIn: function (t) {
                            var e = t.isChild,
                                n = t.el,
                                o = t.evt;
                            if (this.user.desktop) {
                                var r = "self" === n ? o.target : e ? o.target.querySelector(n) : document.querySelector(n);
                                this.$eventHub.$emit("glHoverIn", r)
                            }
                        },
                        glHoverOut: function (t) {
                            var e = t.isChild,
                                n = t.el,
                                o = t.evt;
                            if (this.user.desktop) {
                                var r = "self" === n ? o.target : e ? o.target.querySelector(n) : document.querySelector(n);
                                this.$eventHub.$emit("glHoverOut", r)
                            }
                        },
                        onScroll: function (t) {
                            t._y;
                            t.y > t.height ? (this.$eventHub.$emit("helixSetState", !1), this.$eventHub.$emit("helixStop")) : (this.$eventHub.$emit("helixSetState", !0), this.$eventHub.$emit("helixStart"))
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
                v = (n(387), n(8)),
                d = n(389),
                component = Object(v.a)(h, (function () {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("div", {
                        class: "p-" + t.className
                    }, [n("section", {
                        class: t.className + "-hero | m-subpage-hero",
                        attrs: {
                            "data-fs-section": ""
                        }
                    }, [n("div", {
                        ref: "hero",
                        staticClass: "subpage-hero-height"
                    }, [n("div", {
                        staticClass: "back-to-link"
                    }, [n("nuxt-link", {
                        staticClass: "back-to",
                        attrs: {
                            to: t.localePath("solutions"),
                            "data-ma-hover": "fixed-link-border-light-gray",
                            "data-ma-fixed": ""
                        }
                    }, [n("span", {
                        staticClass: "arrow"
                    }, [n("svg", {
                        staticClass: "arrow-back | anim-left",
                        attrs: {
                            viewBox: "0 0 18 12"
                        }
                    }, [n("path", {
                        attrs: {
                            d: "M18,5H3.8l3.6-3.6L6,0L0,6l6,6l1.4-1.4L3.8,7H18V5z"
                        }
                    })]), t._v(" "), n("span", {
                        staticClass: "point",
                        attrs: {
                            "data-ma-fixed-target": ""
                        }
                    })]), t._v(" "), n("span", {
                        staticClass: "txt"
                    }, [t._v("Back")])])], 1), t._v(" "), n("div", {
                        staticClass: "subpage-hero-inner"
                    }, [n("div", {
                        staticClass: "subpage-hero-body | l-relative"
                    }, [n("h4", {
                        staticClass: "subpage-hero-sub-ttl"
                    }, [t._v(t._s(t.headerSubTitle))]), t._v(" "), n("h1", {
                        staticClass: "subpage-hero-ttl"
                    }, [t._v(t._s(t.headerTitle))])])])])]), t._v(" "), n("section", {
                        staticClass: "m-subpage-intro | reverse",
                        attrs: {
                            "data-fs-section": ""
                        }
                    }, [n("div", {
                        staticClass: "subpage-intro-rect"
                    }, [n("div", {
                        staticClass: "txts"
                    }, [n("h4", {
                        staticClass: "ttl"
                    }, [t._v("About creative")]), t._v(" "), n("div", {
                        staticClass: "txt-wrap"
                    }, [n("p", {
                        staticClass: "txt"
                    }, [t._v(t._s(t.$t("about")))])])])]), t._v(" "), n("div", {
                        staticClass: "subpage-intro-space"
                    }, [n("nav", {
                        staticClass: "section-nav"
                    }, [n("ul", {
                        staticClass: "section-nav-lists"
                    }, t._l(t.sections, (function (section, e) {
                        return n("li", {
                            staticClass: "section-nav-list"
                        }, [n("div", {
                            staticClass: "link",
                            on: {
                                click: function (n) {
                                    return t.scrollToElement({
                                        id: "section-" + (e + 1)
                                    })
                                }
                            }
                        }, [n("span", {
                            staticClass: "no",
                            attrs: {
                                "data-txt": t._f("zero")(e + 1, 2)
                            }
                        }, [t._v(t._s(t._f("zero")(e + 1, 2)))]), t._v(" "), n("span", {
                            staticClass: "point"
                        }), t._v(" "), n("span", {
                            staticClass: "txt",
                            attrs: {
                                "data-txt": section.ttl
                            }
                        }, [t._v(t._s(section.ttl))])])])
                    })), 0)])])]), t._v(" "), n("section", {
                        staticClass: "m-subpage-sections | subpage-section-services"
                    }, t._l(t.sections, (function (section, e) {
                        return n("section", {
                            staticClass: "subpage-section",
                            attrs: {
                                id: "section-" + (e + 1),
                                "data-fs-section": ""
                            }
                        }, [n("div", {
                            staticClass: "subpage-section-header"
                        }, [n("div", {
                            staticClass: "subpage-section-header-body"
                        }, [n("div", {
                            staticClass: "section-ttls"
                        }, [n("div", {
                            staticClass: "no"
                        }, [t._v(t._s(t._f("zero")(e + 1, 2)))]), t._v(" "), n("h2", {
                            staticClass: "ttl",
                            domProps: {
                                innerHTML: t._s(section.ttlHtml)
                            }
                        }), t._v(" "), n("div", {
                            staticClass: "helix-wave | js-helix-wave"
                        }), t._v(" "), n("ul", {
                            staticClass: "creative-lists"
                        }, t._l(section.creativeLists, (function (e, o) {
                            return n("li", {
                                staticClass: "creative-list"
                            }, [t._v(t._s(e))])
                        })), 0)]), t._v(" "), n("div", {
                            staticClass: "section-txts"
                        }, [n("p", {
                            staticClass: "txt"
                        }, [t._v(t._s(section.txt))]), t._v(" "), n("div", {
                            staticClass: "our-services"
                        }, [n("h5", {
                            staticClass: "ttl"
                        }, [t._v("Our services")]), t._v(" "), n("ul", {
                            staticClass: "services-lists"
                        }, t._l(section.servicesLists, (function (e, o) {
                            return n("li", {
                                staticClass: "services-list"
                            }, [e.url ? n("a", {
                                staticClass: "ex-link",
                                attrs: {
                                    href: e.url,
                                    target: "_blank",
                                    rel: "noopener",
                                    "data-ma-hover": "ex-link"
                                },
                                domProps: {
                                    innerHTML: t._s(e.name)
                                }
                            }) : n("a", {
                                staticClass: "no-link",
                                domProps: {
                                    innerHTML: t._s(e.name)
                                }
                            })])
                        })), 0)])])])]), t._v(" "), n("div", {
                            staticClass: "subpage-section-img"
                        }, [n("div", {
                            staticClass: "section-img-thumb-ratio"
                        }, [n("div", {
                            staticClass: "section-img-thumb"
                        }, [n("div", {
                            staticClass: "section-img-wrap",
                            attrs: {
                                "data-preload-image": "",
                                "data-fs-inview": "",
                                "data-gl-dom": "",
                                "data-gl-type": "image",
                                "data-gl-src": section.imgSrc,
                                "data-gl-texture": "same",
                                "data-gl-ratio": "4:3",
                                "data-gl-vs": "plane",
                                "data-gl-fs": "plane"
                            },
                            on: {
                                mouseenter: function (e) {
                                    return t.glHoverIn({
                                        isChild: !1,
                                        el: "self",
                                        evt: e
                                    })
                                },
                                mouseleave: function (e) {
                                    return t.glHoverOut({
                                        isChild: !1,
                                        el: "self",
                                        evt: e
                                    })
                                }
                            }
                        }, [n("img", {
                            staticClass: "section-img",
                            attrs: {
                                "data-gl-source": "",
                                crossorigin: "anonymous"
                            }
                        })])])])])])
                    })), 0), t._v(" "), n("section", {
                        staticClass: "m-subpage-link",
                        attrs: {
                            "data-fs-section": ""
                        }
                    }, [n("div", {
                        staticClass: "subpage-link-inner"
                    }, [n("div", {
                        staticClass: "subpage-link-body | l-relative",
                        attrs: {
                            "data-ma-hover": "page-link"
                        },
                        on: {
                            click: function (e) {
                                t.goTo(t.localePath({
                                    path: "/solutions/services/"
                                }))
                            }
                        }
                    }, [t._m(0), t._v(" "), t._m(1)])])]), t._v(" "), t._m(2)])
                }), [function () {
                    var t = this.$createElement,
                        e = this._self._c || t;
                    return e("div", {
                        staticClass: "sub-ttl ui-link"
                    }, [e("span", {
                        staticClass: "txt",
                        attrs: {
                            "data-txt": "Solutions"
                        }
                    }, [this._v("Solutions")]), this._v(" "), e("span", {
                        staticClass: "line"
                    })])
                }, function () {
                    var t = this.$createElement,
                        e = this._self._c || t;
                    return e("div", {
                        staticClass: "ttl"
                    }, [e("span", {
                        staticClass: "txt"
                    }, [this._v("Services")])])
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
                }], !1, null, "c1c8563e", null);
            "function" == typeof d.default && Object(d.default)(component);
            e.default = component.exports
        }
    }
]);
