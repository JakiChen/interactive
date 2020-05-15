(window.webpackJsonp = window.webpackJsonp || []).push([
    [21], {
        312: function (t, e, o) {
            "use strict";
            var n = o(29),
                r = o(30),
                l = function () {
                    function t(e) {
                        Object(n.a)(this, t), this.opts = e || {}, this.elem = 0 === document.querySelectorAll(this.opts.elem).length ? document.querySelectorAll(".js-helix-wave") : document.querySelectorAll(this.opts.elem), this.resolution = this.opts.resolution || window.devicePixelRatio > 1 ? this.resolution = 2 : this.resolution = 1, this.colors = this.opts.colors || ["#7C4DFF", "#448AFF", "#1DE9B6"], this.diff = this.opts.diff || 1, this.amplitude = this.opts.amplitude * this.resolution || 5 * this.resolution, this.frequency = this.opts.frequency * this.resolution || 10 * this.resolution, this.wavelength = this.opts.wavelength * this.resolution || 40 * this.resolution, this.lineWidth = this.opts.lineWidth * this.resolution || 1 * this.resolution, this.lineInterval = this.opts.lineInterval * this.resolution || 20 * this.resolution, this.lineShift = this.opts.lineShift * this.resolution || 0, this.colors.reverse(), this.frames = 0, this.helixes = [], this.canvases = [], this.ctxs = [], this.init()
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
                                    o = e.target;
                                switch (e.isIntersecting) {
                                    case !0:
                                        o.isInView = !0;
                                        break;
                                    case !1:
                                        o.isInView = !1
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
                                var o = canvas.width / 2 * this.diff,
                                    n = .5 * canvas.width,
                                    r = .5 * canvas.height;
                                canvas.diffX = o, canvas.posX = n, canvas.posY = r, e.fillRect(0, 0, canvas.width, canvas.height), e.moveTo(n, r)
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
                                    for (var o = 0; o < this.colors.length; o++) {
                                        e.beginPath(), e.lineCap = "round", e.strokeStyle = this.colors[o], e.lineWidth = this.lineWidth;
                                        for (var n = canvas.posX - canvas.diffX - this.lineShift * (o - 1); n < canvas.width / 2 + canvas.diffX; n++) {
                                            var r = this.calcPosY(n, o * this.lineInterval);
                                            e.lineTo(n, r + canvas.posY)
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
        341: function (t, e, o) {
            var content = o(391);
            "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, o(13).default)("2945f87e", content, !0, {
                sourceMap: !1
            })
        },
        342: function (t, e) {
            t.exports = function (t) {
                t.options.__i18n = t.options.__i18n || [], t.options.__i18n.push('{"ja":{"title":"Services","about":"除了创意业务，我们还有其他业务。 通过内部运用在每个业务领域中获得的知识和经验，我们正在提高整个团队的生产水平。","sections":{"1":"具有制造能力的创意机构，以MV / CM生产为骨干。 从战略计划到个人措施，保持一贯的品质，为品牌做出贡献。","2":"我们开发自己的数字产品，例如Web服务和应用程序。 我们为用户设计最佳的UI / UX，并提出新的数字体验。 它还具有作为实验室负责创建新业务并通过技术开发向其他部门提供反馈的方面。","3":"这是一个服装品牌，仅使用动漫，漫画，游戏和电影的官方徽标。 除了销售产品外，我们还分发与作品有关的内容。 我们提出了一种新的方式来欣赏保留在历史中的杰作和他们所创造的文化。","4":"通过与日本和海外的创作者合作，我们实现了具有全球视野和价值观的创作。 凭借高度的专业知识和广泛的表达方式，我们将提升品牌。"}},"en":{"title":"Services","about":"We operate multiple businesses in addition to the creative business. We raise the internal production level of the entire team by developing the knowledge and experience acquired in each business field.","sections":{"1":"We are a creative agency which can manufacture with our MV and CM production background. We contribute to the brand by maintaining consistent quality from building a strategy to each specific task.","2":"We develop in-house digital products such as website services and applications. We design optimal UI/UX for users and suggest new digital experiences. We are also the laboratory which is responsible for feedback to other business divisions to create new business and pioneering technologies.","3":"This is the apparel brand which uses only official logos from animation, comics, games and movies. In addition to merchandise sales, they deliver content which relate to those works. We suggest a new way of enjoying historic masterpieces and the culture which is generated by them.","4":"We can offer creations with a global view and value by collaborating with both domestic and international creators. We contribute to the brand through offering solid expertise and a wide range of expressions."}}}'), delete t.options._Ctor
            }
        },
        390: function (t, e, o) {
            "use strict";
            var n = o(341);
            o.n(n).a
        },
        391: function (t, e, o) {
            (e = o(12)(!1)).push([t.i, "", ""]), t.exports = e
        },
        392: function (t, e, o) {
            "use strict";
            var n = o(342),
                r = o.n(n);
            e.default = r.a
        },
        416: function (t, e, o) {
            "use strict";
            o.r(e);
            o(23), o(14), o(11), o(6), o(19), o(32);
            var n = o(4),
                r = o(9),
                l = o(312);

            function c(object, t) {
                var e = Object.keys(object);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(object);
                    t && (o = o.filter((function (t) {
                        return Object.getOwnPropertyDescriptor(object, t).enumerable
                    }))), e.push.apply(e, o)
                }
                return e
            }
            var h = {
                    data: function () {
                        var t = this.$t.bind(this);
                        return {
                            title: t("title"),
                            description: "ja" === this.$i18n.locale ? "Helixes Co.，Ltd.是一家使用创意解决方案来解决问题的总体计划公司。 我们计划和管理各种不受框架约束的事物，例如广告制作，品牌和数字产品开发以及艺术家管理。" : "Helixes Inc. is a planning company uses creativity to solve problems. We integrate strategy, creativity and experience to build brands.",
                            className: "services",
                            headerTitle: "Services",
                            headerSubTitle: "Solutions",
                            helixWave: null,
                            footerTop: 0,
                            sections: [{
                                ttl: "Maxilla",
                                txt: t("sections.1"),
                                url: "https://maxilla.jp",
                                logo: "",
                                movie: "",
                                poster: ""
                            }, {
                                ttl: "Roppyaku",
                                txt: t("sections.2"),
                                url: "http://roppyaku.com",
                                logo: "",
                                movie: "",
                                poster: ""
                            }, {
                                ttl: "名[NA]",
                                txt: t("sections.3"),
                                url: "https://naisthename.com",
                                logo: "",
                                movie: "",
                                poster: ""
                            }, {
                                ttl: "sic",
                                txt: t("sections.4"),
                                url: "",
                                logo: "",
                                movie: "",
                                poster: ""
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
                                Object(n.a)(t, e, source[e])
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
                            this.sections[0].logo = $g.path.video.services.maxilla.logo, this.sections[0].movie = $g.path.video.services.maxilla.movie, this.sections[0].poster = $g.path.video.services.maxilla.poster, this.sections[1].logo = $g.path.video.services.roppyaku.logo, this.sections[1].movie = $g.path.video.services.roppyaku.movie, this.sections[1].poster = $g.path.video.services.roppyaku.poster, this.sections[2].logo = $g.path.video.services.na.logo, this.sections[2].movie = $g.path.video.services.na.movie, this.sections[2].poster = $g.path.video.services.na.poster, this.sections[3].logo = $g.path.video.services.sic.logo, this.sections[3].movie = $g.path.video.services.sic.movie, this.sections[3].poster = $g.path.video.services.sic.poster
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
                        toggleLegacyVideo: function (t) {
                            var e = t.wrap,
                                o = t.el;
                            t.src;
                            if (this.user.mobile || this.user.tablet || ua.ie) {
                                var n = $g.el(e),
                                    video = $g.el(o);
                                n.classList.contains("is-playing") ? (n.classList.remove("is-playing"), video.pause()) : (n.classList.add("is-playing"), video.load(), video.play())
                            }
                        },
                        glHoverIn: function (t) {
                            var e = t.isChild,
                                o = t.el,
                                n = t.evt;
                            if (this.user.desktop) {
                                var r = "self" === o ? n.target : e ? n.target.querySelector(o) : document.querySelector(o);
                                this.$eventHub.$emit("glHoverIn", r)
                            }
                        },
                        glHoverOut: function (t) {
                            var e = t.isChild,
                                o = t.el,
                                n = t.evt;
                            if (this.user.desktop) {
                                var r = "self" === o ? n.target : e ? n.target.querySelector(o) : document.querySelector(o);
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
                            var o = this;
                            this.$store.getters.loaded && (requestTimeout((function () {
                                o.$store.dispatch("maskOff")
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
                v = (o(390), o(8)),
                d = o(392),
                component = Object(v.a)(h, (function () {
                    var t = this,
                        e = t.$createElement,
                        o = t._self._c || e;
                    return o("div", {
                        class: "p-" + t.className
                    }, [o("section", {
                        class: t.className + "-hero | m-subpage-hero",
                        attrs: {
                            "data-fs-section": ""
                        }
                    }, [o("div", {
                        ref: "hero",
                        staticClass: "subpage-hero-height"
                    }, [o("div", {
                        staticClass: "back-to-link"
                    }, [o("nuxt-link", {
                        staticClass: "back-to",
                        attrs: {
                            to: t.localePath("solutions"),
                            "data-ma-hover": "fixed-link-border-light-gray",
                            "data-ma-fixed": ""
                        }
                    }, [o("span", {
                        staticClass: "arrow"
                    }, [o("svg", {
                        staticClass: "arrow-back | anim-left",
                        attrs: {
                            viewBox: "0 0 18 12"
                        }
                    }, [o("path", {
                        attrs: {
                            d: "M18,5H3.8l3.6-3.6L6,0L0,6l6,6l1.4-1.4L3.8,7H18V5z"
                        }
                    })]), t._v(" "), o("span", {
                        staticClass: "point",
                        attrs: {
                            "data-ma-fixed-target": ""
                        }
                    })]), t._v(" "), o("span", {
                        staticClass: "txt"
                    }, [t._v("Back")])])], 1), t._v(" "), o("div", {
                        staticClass: "subpage-hero-inner"
                    }, [o("div", {
                        staticClass: "subpage-hero-body | l-relative"
                    }, [o("h4", {
                        staticClass: "subpage-hero-sub-ttl"
                    }, [t._v(t._s(t.headerSubTitle))]), t._v(" "), o("h1", {
                        staticClass: "subpage-hero-ttl"
                    }, [t._v(t._s(t.headerTitle))])])])])]), t._v(" "), o("section", {
                        staticClass: "m-subpage-intro | reverse",
                        attrs: {
                            "data-fs-section": ""
                        }
                    }, [o("div", {
                        staticClass: "subpage-intro-rect"
                    }, [o("div", {
                        staticClass: "txts"
                    }, [o("h4", {
                        staticClass: "ttl"
                    }, [t._v("About services")]), t._v(" "), o("div", {
                        staticClass: "txt-wrap"
                    }, [o("p", {
                        staticClass: "txt"
                    }, [t._v(t._s(t.$t("about")))])])])]), t._v(" "), o("div", {
                        staticClass: "subpage-intro-space"
                    }, [o("nav", {
                        staticClass: "section-nav"
                    }, [o("ul", {
                        staticClass: "section-nav-lists"
                    }, t._l(t.sections, (function (section, e) {
                        return o("li", {
                            staticClass: "section-nav-list"
                        }, [o("div", {
                            staticClass: "link",
                            on: {
                                click: function (o) {
                                    return t.scrollToElement({
                                        id: "section-" + (e + 1)
                                    })
                                }
                            }
                        }, [o("span", {
                            staticClass: "no",
                            attrs: {
                                "data-txt": t._f("zero")(e + 1, 2)
                            }
                        }, [t._v(t._s(t._f("zero")(e + 1, 2)))]), t._v(" "), o("span", {
                            staticClass: "point"
                        }), t._v(" "), o("span", {
                            staticClass: "txt",
                            attrs: {
                                "data-txt": section.ttl
                            }
                        }, [t._v(t._s(section.ttl))])])])
                    })), 0)])])]), t._v(" "), o("section", {
                        staticClass: "m-subpage-sections | subpage-section-services"
                    }, t._l(t.sections, (function (section, e) {
                        return o("section", {
                            staticClass: "subpage-section",
                            attrs: {
                                id: "section-" + (e + 1),
                                "data-fs-section": ""
                            }
                        }, [o("div", {
                            staticClass: "subpage-section-header"
                        }, [o("div", {
                            staticClass: "subpage-section-header-body"
                        }, [o("div", {
                            staticClass: "section-ttls"
                        }, [o("div", {
                            staticClass: "no"
                        }, [t._v(t._s(t._f("zero")(e + 1, 2)))]), t._v(" "), o("h2", {
                            staticClass: "ttl"
                        }, [t._v(t._s(section.ttl))]), t._v(" "), o("div", {
                            staticClass: "helix-wave | js-helix-wave"
                        })]), t._v(" "), o("div", {
                            staticClass: "section-txts"
                        }, [o("p", {
                            staticClass: "txt"
                        }, [t._v(t._s(section.txt))]), t._v(" "), section.url ? o("a", {
                            staticClass: "ui-link",
                            attrs: {
                                href: section.url,
                                target: "_blank",
                                rel: "noopener",
                                "data-ma-hover": "ex-link"
                            }
                        }, [o("span", {
                            staticClass: "txt",
                            attrs: {
                                "data-txt": "Visit site"
                            }
                        }, [t._v("Visit site")]), t._v(" "), o("span", {
                            staticClass: "line"
                        })]) : t._e()])])]), t._v(" "), o("div", {
                            staticClass: "subpage-section-video"
                        }, [o("div", {
                            staticClass: "l-relative"
                        }, [o("div", {
                            staticClass: "section-video-thumb-ratio"
                        }, [o("div", {
                            staticClass: "section-video-thumb"
                        }, [o("div", {
                            staticClass: "section-video-wrap",
                            class: "video-services-wrap-" + (e + 1),
                            attrs: {
                                "data-fs-inview": "",
                                "data-gl-dom": "",
                                "data-gl-autoplay": "",
                                "data-gl-type": "video",
                                "data-gl-src": section.movie,
                                "data-gl-texture": section.logo,
                                "data-gl-ratio": "16:9",
                                "data-gl-vs": "plane",
                                "data-gl-fs": "logo"
                            },
                            on: {
                                click: function (o) {
                                    return t.toggleLegacyVideo({
                                        wrap: ".video-services-wrap-" + (e + 1),
                                        el: ".video-services-" + (e + 1),
                                        src: section.movie
                                    })
                                },
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
                        }, [o("video", {
                            staticClass: "section-video",
                            class: "video-services-" + (e + 1),
                            attrs: {
                                "data-gl-source": "",
                                "data-preload-image": "",
                                poster: section.poster,
                                crossorigin: "anonymous",
                                preload: "metadata",
                                playsinline: "",
                                muted: "",
                                loop: ""
                            },
                            domProps: {
                                muted: !0
                            }
                        }), t._v(" "), t._m(0, !0)])])])])])])
                    })), 0), t._v(" "), o("section", {
                        staticClass: "m-subpage-link",
                        attrs: {
                            "data-fs-section": ""
                        }
                    }, [o("div", {
                        staticClass: "subpage-link-inner"
                    }, [o("div", {
                        staticClass: "subpage-link-body | l-relative",
                        attrs: {
                            "data-ma-hover": "page-link"
                        },
                        on: {
                            click: function (e) {
                                t.goTo(t.localePath({
                                    path: "/solutions/creative/"
                                }))
                            }
                        }
                    }, [t._m(1), t._v(" "), t._m(2)])])]), t._v(" "), t._m(3)])
                }), [function () {
                    var t = this.$createElement,
                        e = this._self._c || t;
                    return e("div", {
                        staticClass: "ui-play-btn | legacy-play-btn"
                    }, [e("span", {
                        staticClass: "txt"
                    }, [this._v("Play")])])
                }, function () {
                    var t = this.$createElement,
                        e = this._self._c || t;
                    return e("div", {
                        staticClass: "sub-ttl | ui-link"
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
                    }, [this._v("Creative")])])
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
                }], !1, null, "4a817dfc", null);
            "function" == typeof d.default && Object(d.default)(component);
            e.default = component.exports
        }
    }
]);
