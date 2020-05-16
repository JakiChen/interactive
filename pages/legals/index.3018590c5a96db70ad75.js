(window.webpackJsonp = window.webpackJsonp || []).push([
    [12], {
        312: function (t, e, o) {
            "use strict";
            var n = o(29),
                l = o(30),
                r = function () {
                    function t(e) {
                        Object(n.a)(this, t), this.opts = e || {}, this.elem = 0 === document.querySelectorAll(this.opts.elem).length ? document.querySelectorAll(".js-helix-wave") : document.querySelectorAll(this.opts.elem), this.resolution = this.opts.resolution || window.devicePixelRatio > 1 ? this.resolution = 2 : this.resolution = 1, this.colors = this.opts.colors || ["#7C4DFF", "#448AFF", "#1DE9B6"], this.diff = this.opts.diff || 1, this.amplitude = this.opts.amplitude * this.resolution || 5 * this.resolution, this.frequency = this.opts.frequency * this.resolution || 10 * this.resolution, this.wavelength = this.opts.wavelength * this.resolution || 40 * this.resolution, this.lineWidth = this.opts.lineWidth * this.resolution || 1 * this.resolution, this.lineInterval = this.opts.lineInterval * this.resolution || 20 * this.resolution, this.lineShift = this.opts.lineShift * this.resolution || 0, this.colors.reverse(), this.frames = 0, this.helixes = [], this.canvases = [], this.ctxs = [], this.init()
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
                                    l = .5 * canvas.height;
                                canvas.diffX = o, canvas.posX = n, canvas.posY = l, e.fillRect(0, 0, canvas.width, canvas.height), e.moveTo(n, l)
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
                                            var l = this.calcPosY(n, o * this.lineInterval);
                                            e.lineTo(n, l + canvas.posY)
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
        319: function (t, e, o) {
            var content = o(358);
            "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, o(13).default)("1f2f63b3", content, !0, {
                sourceMap: !1
            })
        },
        320: function (t, e) {
            t.exports = function (t) {
                t.options.__i18n = t.options.__i18n || [], t.options.__i18n.push('{"ja":{"title":"Legal Mentions","date":"2019年11月11日","name":"Helicx Inc. 代表董事 Jaki Chen","contact":"联系信息","zip":"100 029","address":"中国 | 北京市朝阳区小关东里14号","phone":"NaN"},"en":{"title":"Legal Mentions","date":"Date established: 11/11/2019","name":"Representative Director Jaki Chen of Helicx Inc.","contact":"Contact","zip":"111-0053","address":"No.14, Xiaoguan Dongli，Chaoyang District, Beijing China","phone":"NaN"}}'), delete t.options._Ctor
            }
        },
        357: function (t, e, o) {
            "use strict";
            var n = o(319);
            o.n(n).a
        },
        358: function (t, e, o) {
            (e = o(12)(!1)).push([t.i, '.p-legals .m-subpage-hero.subpage-child .subpage-hero-height[data-v-7cd2a843]{height:auto;padding-bottom:60px}.p-legals .m-subpage-hero .subpage-hero-inner[data-v-7cd2a843]{max-width:702px;margin:0 auto;padding:0 40px}.p-legals .m-subpage-hero .subpage-hero-ttl[data-v-7cd2a843]{padding-right:12.5vw;font-size:calc(7.2rem + (800vw - 4800px)/1000);margin-bottom:10px}.p-legals .m-subpage-hero .subpage-hero-ttl span[data-v-7cd2a843]{padding:5px 0}.p-legals .m-subpage-hero .subpage-hero-sub-ttl[data-v-7cd2a843]{margin-bottom:0}.p-legals .m-subpage-sections[data-v-7cd2a843]{padding-top:2em}.p-legals .m-subpage-sections .subpage-section-narrow[data-v-7cd2a843]{max-width:702px;margin:0 auto;padding:0 40px}.p-legals .m-post-body blockquote p[data-v-7cd2a843],.p-legals .m-post-body p[data-v-7cd2a843],.p-legals .m-post-body q p[data-v-7cd2a843]{position:relative;margin-bottom:1.5em;font-size:1.5rem;line-height:1.7;letter-spacing:.075em}.p-legals .m-post-body p+blockquote[data-v-7cd2a843],.p-legals .m-post-body p+q[data-v-7cd2a843]{margin-top:0}.p-legals .m-post-body ol li[data-v-7cd2a843],.p-legals .m-post-body ul li[data-v-7cd2a843]{font-size:1.5rem}.p-legals .m-post-body ol>li li[data-v-7cd2a843]{padding-left:2em}.p-legals .m-post-body ol>li li[data-v-7cd2a843]:before{content:"(" counter(count) ")";color:#a0a0a0;font-weight:400}.p-legals .m-post-body blockquote[data-v-7cd2a843],.p-legals .m-post-body q[data-v-7cd2a843]{padding:2em 3.5em 1.5em 4em}.p-legals .m-post-body blockquote p[data-v-7cd2a843],.p-legals .m-post-body q p[data-v-7cd2a843]{font-style:normal;font-size:1.3rem}.p-legals .legals-content[data-v-7cd2a843]{position:relative;width:100%;margin-bottom:4em;padding-bottom:2em}.p-legals .legals-content.last[data-v-7cd2a843]{margin-bottom:3em}.p-legals .legals-content .ttl[data-v-7cd2a843]{margin-bottom:1.5em;font-size:calc(2.4rem + (200vw - 1200px)/1000);font-weight:400;letter-spacing:.075em;border-bottom:1px solid #eee}.p-legals .legals-content .ttl span[data-v-7cd2a843]{position:relative;display:inline-block;height:100%;padding-bottom:.5em}.p-legals .legals-content .ttl span[data-v-7cd2a843]:after{content:"";position:absolute;left:0;bottom:-1px;display:inline-block;width:100%;height:100%;border-bottom:1px solid #ff4e50}.p-legals .legals-content .sub-ttl[data-v-7cd2a843]{margin-bottom:1.25em;font-size:calc(1.8rem + (200vw - 1200px)/1000);font-weight:400}.p-legals .legals-content .legals-content-child[data-v-7cd2a843]:not(:last-child){margin-bottom:3em}.p-legals .legals-footer[data-v-7cd2a843]{position:relative;width:100%;padding-top:3em;padding-bottom:12.5vw;border-top:1px solid #eee}.p-legals .legals-footer .legals-footer-body[data-v-7cd2a843]{position:relative;font-size:1.5rem}.p-legals .legals-footer .txts[data-v-7cd2a843]{display:block;margin-bottom:2em}.p-legals .legals-footer .txts .date[data-v-7cd2a843]{display:block;margin-bottom:.75em}.p-legals .legals-footer .txts .name[data-v-7cd2a843]{display:block}.p-legals .legals-footer .link[data-v-7cd2a843]{position:relative;display:inline-block}.p-legals .legals-footer .link[data-v-7cd2a843]:after{content:"";position:absolute;bottom:-5px;left:0;width:100%;height:1px;background:#ff4e50;-webkit-transform-origin:100% 50% 0;transform-origin:100% 50% 0;-webkit-transform:scaleX(0);transform:scaleX(0);-webkit-transition:-webkit-transform .35s cubic-bezier(.165,.84,.44,1) .1s;transition:-webkit-transform .35s cubic-bezier(.165,.84,.44,1) .1s;transition:transform .35s cubic-bezier(.165,.84,.44,1) .1s;transition:transform .35s cubic-bezier(.165,.84,.44,1) .1s,-webkit-transform .35s cubic-bezier(.165,.84,.44,1) .1s}[lang=en] .p-legals .m-post-body blockquote p[data-v-7cd2a843],[lang=en] .p-legals .m-post-body p[data-v-7cd2a843],[lang=en] .p-legals .m-post-body q p[data-v-7cd2a843]{letter-spacing:.005em}[lang=en] .p-legals .legals-content[data-v-7cd2a843]{font-family:HK Grotesk Pro,sans-serif;letter-spacing:.005em}[lang=en] .p-legals .legals-content .sub-ttl[data-v-7cd2a843],[lang=en] .p-legals .legals-content .ttl[data-v-7cd2a843]{font-family:HK Nova,sans-serif;letter-spacing:0}[lang=en] .p-legals .legals-content .sub-ttl[data-v-7cd2a843]{font-weight:500}[lang=en] .p-legals .legals-footer[data-v-7cd2a843]{font-family:HK Nova,sans-serif;letter-spacing:0}.no-touch .p-legals .legals-footer a.link[data-v-7cd2a843]:hover:after{-webkit-transform:scale(1);transform:scale(1);-webkit-transform-origin:0 50% 0;transform-origin:0 50% 0;-webkit-transition:opacity 0s ease 0s,-webkit-transform .35s cubic-bezier(.165,.84,.44,1) 0s;transition:opacity 0s ease 0s,-webkit-transform .35s cubic-bezier(.165,.84,.44,1) 0s;transition:transform .35s cubic-bezier(.165,.84,.44,1) 0s,opacity 0s ease 0s;transition:transform .35s cubic-bezier(.165,.84,.44,1) 0s,opacity 0s ease 0s,-webkit-transform .35s cubic-bezier(.165,.84,.44,1) 0s}@media only screen and (max-width:680px){.p-legals .m-subpage-hero.subpage-child .subpage-hero-height[data-v-7cd2a843]{height:auto;padding-bottom:40px}.p-legals .m-subpage-hero .subpage-hero-ttl[data-v-7cd2a843]{padding-right:0;font-size:4.8rem}}', ""]), t.exports = e
        },
        359: function (t, e, o) {
            "use strict";
            var n = o(320),
                l = o.n(n);
            e.default = l.a
        },
        415: function (t, e, o) {
            "use strict";
            o.r(e);
            o(23), o(14), o(11), o(6), o(19);
            var n = o(4),
                l = o(9),
                r = o(312);

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
                        return {
                            title: this.$t.bind(this)("title"),
                            description: "ja" === this.$i18n.locale ? "Helixes Co.，Ltd.是一家使用创意解决方案来解决问题的总体计划公司。 我们计划和管理各种不受框架约束的事物，例如广告制作，品牌和数字产品开发以及艺术家管理。" : "Helixes Inc. is a planning company uses creativity to solve problems. We integrate strategy, creativity and experience to build brands.",
                            className: "legals",
                            headerTitle: "Legal Mentions",
                            headerSubTitle: "",
                            helixWave: null,
                            mapsUrl: "",
                            contactEmail: ""
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
                    }({}, Object(l.b)({
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
                            t.setData(), $g.fn.utility.updateViewType(), $g.fn.utility.staggerElement(".subpage-hero-ttl"), t.$eventHub.$emit("helixSetState", !1), t.helixWave = new r.a($g.configs.helixWaveSettings()), observer.init($g.configs.observerSettings), t.loaded && t.init("default"), t.$eventHub.$on("onScroll", t.onScroll), t.$eventHub.$on("onResize", t.onResize)
                        }))
                    },
                    beforeDestroy: function () {
                        observer.destroy(), this.helixWave.destroy(), this.$eventHub.$off("onScroll", this.onScroll), this.$eventHub.$off("onResize", this.onResize)
                    },
                    methods: {
                        setData: function () {
                            this.mapsUrl = $g.path.urls.gmaps, this.contactEmail = $g.configs.emails.contact
                        },
                        init: function (t) {
                            var e = this;
                            switch (t) {
                                case "first":
                                    $g.fn.utility.staggerAnimation({
                                        el: ".m-subpage-hero .l-relative",
                                        delay: .85
                                    }), this.$eventHub.$emit("glInit"), this.$eventHub.$emit("glTick"), this.$eventHub.$emit("helixSetDefault"), this.$eventHub.$emit("helixSetState", !1), this.$eventHub.$emit("helixStop"), $g.el(".m-subpage-hero").classList.add("is-white"), requestTimeout((function () {
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
                                        $g.el(".m-subpage-hero").classList.add("is-white")
                                    }), 650), requestTimeout((function () {
                                        e.$eventHub.$emit("helixSetState", !1), e.$eventHub.$emit("helixStop")
                                    }), 1650)
                            }
                        },
                        onClickEmail: function (t, e) {
                            var o = this.$refs[t];
                            $g.fn.utility.onClickEmail({
                                isDesktop: this.user.desktop,
                                target: o,
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
                d = (o(357), o(8)),
                v = o(359),
                component = Object(d.a)(h, (function () {
                    var t = this,
                        e = t.$createElement,
                        o = t._self._c || e;
                    return o("div", {
                        class: "p-" + t.className
                    }, [o("section", {
                        class: t.className + "-hero | m-subpage-hero | subpage-child",
                        attrs: {
                            "data-fs-section": ""
                        }
                    }, [o("div", {
                        ref: "hero",
                        staticClass: "subpage-hero-height"
                    }, [o("div", {
                        staticClass: "subpage-hero-inner"
                    }, [o("div", {
                        staticClass: "subpage-hero-body | l-relative"
                    }, [o("h1", {
                        staticClass: "subpage-hero-ttl"
                    }, [t._v(t._s(t.headerTitle))]), t._v(" "), o("div", {
                        staticClass: "helix-wave | js-helix-wave"
                    })])])])]), t._v(" "), o("section", {
                        staticClass: "m-subpage-sections",
                        attrs: {
                            "data-fs-section": ""
                        }
                    }, [o("div", {
                        staticClass: "subpage-section-narrow"
                    }, ["ja" === t.$i18n.locale ? [o("div", {
                        staticClass: "m-post-body | legals-content"
                    }, [t._m(0), t._v(" "), o("div", {
                        staticClass: "legals-content-child"
                    }, [o("p", [t._v("Helicx 公司网站（"), o("nuxt-link", {
                        staticClass: "link",
                        attrs: {
                            to: t.localePath("index")
                        }
                    }, [t._v("helicx")]), t._v(" Helicx Co.，Ltd.（以下简称本公司）经营此网站。 在使用本网站之前，请阅读以下使用条款，并且仅在您同意这些条款的情况下才能使用本网站。")], 1)]), t._v(" "), t._m(1), t._v(" "), t._m(2), t._v(" "), t._m(3), t._v(" "), t._m(4), t._v(" "), t._m(5)]), t._v(" "), t._m(6), t._v(" "), o("div", {
                        staticClass: "m-post-body | legals-content | last"
                    }, [t._m(7), t._v(" "), o("div", {
                        staticClass: "legals-content-child"
                    }, [o("p", [t._v("我们的某些网站（“本网站”）使用“ cookie”和类似技术。 当您访问我们的网站时，我们和某些第三方可能会在您的计算机，平板电脑，智能手机或手机（以下简称“设备”）上设置cookie。")]), t._v(" "), o("p", [t._v("我们的目的是为了方便您浏览我们的网站而使用cookie。 它不用于标识您的个人信息，从硬盘读取信息，发送计算机病毒或标识和使用您的电子邮件地址。 我们还使用cookie对该网站的使用情况和广告进行统计分析。 我们建议在使用本网站时接受cookie。")]), t._v(" "), o("p", [t._v("该Cookie政策会根据需要进行修改。 当我们在此站点上发布cookie策略的最新版本时，此cookie策略的修订版将生效。")]), t._v(" "), o("p", [t._v("有关此Cookie政策的查询，请联系"), o("nuxt-link", {
                        staticClass: "link",
                        attrs: {
                            to: t.localePath("contact")
                        }
                    }, [t._v("联系我们")]), t._v("请从发送")], 1)]), t._v(" "), t._m(8), t._v(" "), t._m(9), t._v(" "), t._m(10), t._v(" "), t._m(11), t._v(" "), t._m(12)])] : [o("div", {
                        staticClass: "m-post-body | legals-content"
                    }, [t._m(13), t._v(" "), o("div", {
                        staticClass: "legals-content-child"
                    }, [o("p", [t._v("The corporate site, "), o("nuxt-link", {
                        staticClass: "link",
                        attrs: {
                            to: t.localePath("index")
                        }
                    }, [t._v("helicx")]), t._v("  (“this site”), is operated by Helicx Inc. (“we,” “our”). Please read the terms below before using this site; please only use this site if you agree to these terms.")], 1)]), t._v(" "), t._m(14), t._v(" "), t._m(15), t._v(" "), t._m(16), t._v(" "), t._m(17), t._v(" "), t._m(18)]), t._v(" "), t._m(19), t._v(" "), o("div", {
                        staticClass: "m-post-body | legals-content | last"
                    }, [t._m(20), t._v(" "), o("div", {
                        staticClass: "legals-content-child"
                    }, [o("p", [t._v("Part of the website (hereinafter the “Site”) of Helicx Inc. (hereinafter “Helicx”) uses “cookies” and similar technology. When the website is accessed, Helicx or a specified third party might set a cookie in your computer, tablet, smartphone, or mobile phone (hereinafter “Device”).")]), t._v(" "), o("p", [t._v("Helicx uses cookies to make the Site more convenient when the website is viewed. The cookies are not used to identify your personal or other information, to read information from your hard disk, to send computer viruses, or to identify your email address. In addition, cookies are used for statistical analysis of the Site usage conditions and advertising. Accepting the use of cookies is recommended when using this Site.")]), t._v(" "), o("p", [t._v("This cookie policy will be suitably revised as necessary. Revisions to this cookie policy become effective when the latest version of the cookie policy is posted on the Site by Helicx.")]), t._v(" "), o("p", [t._v("Please make inquiries regarding this cookie policy using the given "), o("nuxt-link", {
                        staticClass: "link",
                        attrs: {
                            to: t.localePath("contact")
                        }
                    }, [t._v("contact")]), t._v(" information.")], 1)]), t._v(" "), t._m(21), t._v(" "), t._m(22), t._v(" "), t._m(23), t._v(" "), t._m(24), t._v(" "), t._m(25)])], t._v(" "), o("div", {
                        staticClass: "legals-footer"
                    }, [o("div", {
                        staticClass: "legals-footer-body"
                    }, [o("div", {
                        staticClass: "txts"
                    }, [o("span", {
                        staticClass: "date"
                    }, [t._v(t._s(t.$t("date")))]), t._v(" "), o("span", {
                        staticClass: "name"
                    }, [t._v(t._s(t.$t("name")))])]), t._v(" "), o("nuxt-link", {
                        staticClass: "link",
                        attrs: {
                            to: t.localePath("contact")
                        }
                    }, [t._v(t._s(t.$t("contact")))])], 1)])], 2)]), t._v(" "), t._m(26)])
                }), [function () {
                    var t = this.$createElement,
                        e = this._self._c || t;
                    return e("h3", {
                        staticClass: "ttl"
                    }, [e("span", [this._v("使用条款")])])
                }, function () {
                    var t = this.$createElement,
                        e = this._self._c || t;
                    return e("div", {
                        staticClass: "legals-content-child"
                    }, [e("h4", {
                        staticClass: "sub-ttl"
                    }, [this._v("关于链接")]), this._v(" "), e("p", [this._v("通常，此站点是无链接的。 但是，我们可能拒绝来自可能损害本网站信誉的网站或与目的不符的网站的链接。")])])
                }, function () {
                    var t = this.$createElement,
                        e = this._self._c || t;
                    return e("div", {
                        staticClass: "legals-content-child"
                    }, [e("h4", {
                        staticClass: "sub-ttl"
                    }, [this._v("关于版权和其他权利")]), this._v(" "), e("p", [this._v("关于本网站上发布的所有内容的权利属于公司，关联公司和业务合作伙伴。 严禁未经授权使用，复制或引用本网站上发布的内容。")])])
                }, function () {
                    var t = this.$createElement,
                        e = this._self._c || t;
                    return e("div", {
                        staticClass: "legals-content-child"
                    }, [e("h4", {
                        staticClass: "sub-ttl"
                    }, [this._v("商标")]), this._v(" "), e("p", [this._v("本网站上的所有商标，徽标和服务标志均为公司和业务合作伙伴拥有和使用的商标。 严禁未经授权使用它们。")])])
                }, function () {
                    var t = this.$createElement,
                        e = this._self._c || t;
                    return e("div", {
                        staticClass: "legals-content-child"
                    }, [e("h4", {
                        staticClass: "sub-ttl"
                    }, [this._v("免责事项")]), this._v(" "), e("p", [this._v("我们提供本网站的服务和系统以及经过适当谨慎发布的信息，但对于其完整性，准确性，有用性等，我们不承担任何责任。 用户应自行承担使用本网站的风险，对于因使用本网站或本网站，本公司及关联公司发布的信息而造成的任何麻烦，损失，损坏， 商业伙伴不承担任何责任。 同样适用于链接到该网站的任何网站。")])])
                }, function () {
                    var t = this.$createElement,
                        e = this._self._c || t;
                    return e("div", {
                        staticClass: "legals-content-child"
                    }, [e("h4", {
                        staticClass: "sub-ttl"
                    }, [this._v("更新条款")]), this._v(" "), e("p", [this._v("我们可能会更改使用条款，恕不另行通知。 请注意。")])])
                }, function () {
                    var t = this,
                        e = t.$createElement,
                        o = t._self._c || e;
                    return o("div", {
                        staticClass: "m-post-body | legals-content"
                    }, [o("h3", {
                        staticClass: "ttl"
                    }, [o("span", [t._v("关于个人信息保护")])]), t._v(" "), o("div", {
                        staticClass: "legals-content-child"
                    }, [o("p", [t._v("关于个人信息的保护，例如本网站的用户（以下称用户）的姓名，电子邮件地址，电话号码，查询内容等，我们正在开展以下活动。")])]), t._v(" "), o("div", {
                        staticClass: "legals-content-child"
                    }, [o("ol", [o("li", [t._v("我们将遵守有关个人信息和其他规范的法律法规，并会尽最大努力保护用户的个人信息。")]), t._v(" "), o("li", [o("p", [t._v("我们将在以下目的范围内正确处理用户的个人信息。")]), t._v(" "), o("ol", [o("li", [t._v("改善网站，使用户可以轻松使用它")]), t._v(" "), o("li", [t._v("准确告知信息")]), t._v(" "), o("li", [t._v("必要时联系用户")]), t._v(" "), o("li", [t._v("对使用情况和环境进行市场研究")])])]), t._v(" "), o("li", [t._v("为了妥善处理用户的个人信息，公司应建立内部管理制度，对员工进行教育，并采取适当措施防止未经授权访问个人信息，丢失，破坏，伪造和泄漏个人信息。 我们将尽力保护个人信息。")]), t._v(" "), o("li", [t._v("除非获得您的同意，否则我们不会将您的个人信息提供或透露给第三方。")]), t._v(" "), o("li", [t._v("我们可能会修改隐私政策，以保护用户的个人信息并响应法律和其他规范的变化。")])])])])
                }, function () {
                    var t = this.$createElement,
                        e = this._self._c || t;
                    return e("h3", {
                        staticClass: "ttl"
                    }, [e("span", [this._v("Cookie政策")])])
                }, function () {
                    var t = this.$createElement,
                        e = this._self._c || t;
                    return e("div", {
                        staticClass: "legals-content-child"
                    }, [e("h4", {
                        staticClass: "sub-ttl"
                    }, [this._v("什么是Cookie")]), this._v(" "), e("p", [this._v("Cookies是由浏览器软件存储在设备硬盘或内存中的小型文本文件。 我们在您的设备上设置的Cookie不包含任何个人身份信息，但它们确实提供了个性化等功能或根据您之前访问的网站投放有针对性的广告。 您可以")]), this._v(" "), e("p", [this._v("大多数Web浏览器会自动接受cookie，但是在许多情况下，您可以在浏览器中对其进行更改。 有关如何搜索和管理cookie的其他信息，请参阅如何搜索和管理cookie。")]), this._v(" "), e("p", [this._v("Cookie本身仅标识使用的设备或浏览器，而不标识单个用户。 （尽管某些cookie与个人信息相关联，但相关信息会被相关帐户使用，并且如果您选择与该网站或该帐户进行交互）")])])
                }, function () {
                    var t = this,
                        e = t.$createElement,
                        o = t._self._c || e;
                    return o("div", {
                        staticClass: "legals-content-child"
                    }, [o("h4", {
                        staticClass: "sub-ttl"
                    }, [t._v("什么是网络信标")]), t._v(" "), o("p", [t._v("网络信标是嵌入在网站中的小型图像文件（称为 “Clear GIF” 等），可让您知道您是否访问过该网站以及访问次数。 这将是")]), t._v(" "), o("p", [t._v("通常在网站上找到的电子图像（包括广告横幅）可以充当网络信标。 Web信标通常是非常小的1x1像素的横幅状文件。")]), t._v(" "), o("p", [t._v("我们使用的网络信标不会收集，统计，监视或共享有关此网站访问者的个人信息，而是创建有关您对网站使用情况的匿名汇总统计信息。 我们用于收集此信息的网络信标系统是Google Analytics（分析）由Google，Inc.（"), o("a", {
                        attrs: {
                            href: "https://www.google.com/analytics",
                            target: "_blank",
                            rel: "noopener"
                        }
                    }, [t._v("www.google.com/analytics")]), t._v("）提供，是一个系统调用。 本政策中对Cookie的引用是指Cookie和Web信标，因为Web信标与cookie具有相同的作用。")])])
                }, function () {
                    var t = this,
                        e = t.$createElement,
                        o = t._self._c || e;
                    return o("div", {
                        staticClass: "legals-content-child"
                    }, [o("h4", {
                        staticClass: "sub-ttl"
                    }, [t._v("我们和第三方Cookie的用途和目的")]), t._v(" "), o("p", [t._v("当您访问我们的网站时，我们和第三方对Cookie的使用属于以下类别之一：")]), t._v(" "), o("ol", [o("li", [o("p", [o("strong", [t._v("必填Cookie")])]), t._v(" "), o("blockquote", [o("p", [t._v("它是cookie，对于浏览网页和使用网页功能至关重要。")]), t._v(" "), o("p", [t._v("例如，它提供站点功能，例如访问安全页面，并且即使页面来回移动，在访问过程中以文本形式输入的信息也会保留。")]), t._v(" "), o("p", [t._v("如果禁用此cookie，则可能无法访问本网站的某些部分，或者可能无法使用本网站上的全部或某些服务，这可能会影响您的操作。 请注意。")])])]), t._v(" "), o("li", [o("p", [o("strong", [t._v("パフォーマンスクッキー")])]), t._v(" "), o("blockquote", [o("p", [t._v("这些cookie还用于分析网站的使用方式，统计访问者数量以及获取有关改进网站的信息。")]), t._v(" "), o("p", [t._v("例如，我们收集有关您对网站使用情况的信息，例如您的浏览器和操作系统，您过去访问过的网站的域名，访问次数，平均访问时间以及访问的页面。 收集的信息是汇总信息，是无法单独识别的匿名数据。 本网站使用Google的访问分析工具“ Google Analytics（分析）”进行这些访问分析。")])])])])])
                }, function () {
                    var t = this,
                        e = t.$createElement,
                        o = t._self._c || e;
                    return o("div", {
                        staticClass: "legals-content-child"
                    }, [o("h4", {
                        staticClass: "sub-ttl"
                    }, [t._v("如何使用浏览器设置搜索和管理Cookie")]), t._v(" "), o("p", [t._v("您可以使用浏览器设置来查看和控制设备上当前设置的cookie。 您还可以删除所有cookie，以限制将来在设备上设置哪些cookie。")]), t._v(" "), o("p", [t._v("特别是，在禁用第三方Cookie之前，它们可能已经存储在您的设备上。 此类cookie从技术上讲是不可擦除的。 请使用设备的浏览器设置。 请参考以下链接，了解典型浏览器的设置。")]), t._v(" "), o("p", [o("a", {
                        attrs: {
                            href: "https://support.google.com/chrome/answer/95647",
                            target: "_blank",
                            rel: "noopener"
                        }
                    }, [t._v("Google Chrome")]), t._v(" / "), o("a", {
                        attrs: {
                            href: "https://support.mozilla.org/ja/kb/enable-and-disable-cookies-website-preferences",
                            target: "_blank",
                            rel: "noopener"
                        }
                    }, [t._v("Firefox")]), t._v(" / "), o("a", {
                        attrs: {
                            href: "https://privacy.microsoft.com/ja-JP/windows-10-microsoft-edge-and-privacy",
                            target: "_blank",
                            rel: "noopener"
                        }
                    }, [t._v("Microfsoft Edge")]), t._v(" / "), o("a", {
                        attrs: {
                            href: "http://support.apple.com/kb/PH17191",
                            target: "_blank",
                            rel: "noopener"
                        }
                    }, [t._v("Safari")])])])
                }, function () {
                    var t = this,
                        e = t.$createElement,
                        o = t._self._c || e;
                    return o("div", {
                        staticClass: "legals-content-child"
                    }, [o("h4", {
                        staticClass: "sub-ttl"
                    }, [t._v("关于Google Analytics（分析）")]), t._v(" "), o("p", [t._v("该网站使用Google Analytics（分析）了解该网站的使用状态。 Google Analytics（分析）使用Cookie收集您的信息。 请访问以下网站，以获取有关Google Analytics（分析）服务条款和隐私权政策以及数据使用（停用）的说明。")]), t._v(" "), o("p", [o("strong", [t._v("Google Inc.")])]), t._v(" "), o("ul", [o("li", [o("a", {
                        attrs: {
                            href: "https://policies.google.com/privacy",
                            target: "_blank",
                            rel: "noopener"
                        }
                    }, [t._v("隐私政策")])]), t._v(" "), o("li", [o("a", {
                        attrs: {
                            href: "https://www.google.com/analytics/terms/jp.html",
                            target: "_blank",
                            rel: "noopener"
                        }
                    }, [t._v("Google Analytics（分析）服务条款")])]), t._v(" "), o("li", [o("a", {
                        attrs: {
                            href: "https://tools.google.com/dlpage/gaoptout",
                            target: "_blank",
                            rel: "noopener"
                        }
                    }, [t._v("Google Analytics（分析）退出插件")]), o("br"), t._v("(设置使用本网站以外的所有Google Analytics（分析）数据)")])])])
                }, function () {
                    var t = this.$createElement,
                        e = this._self._c || t;
                    return e("h3", {
                        staticClass: "ttl"
                    }, [e("span", [this._v("Terms of use")])])
                }, function () {
                    var t = this.$createElement,
                        e = this._self._c || t;
                    return e("div", {
                        staticClass: "legals-content-child"
                    }, [e("h4", {
                        staticClass: "sub-ttl"
                    }, [this._v("Linking")]), this._v(" "), e("p", [this._v("As a general rule, you are free to link to this site. However, we will refuse sites that could hurt the confidence of this site or drastically misrepresent their function. ")])])
                }, function () {
                    var t = this.$createElement,
                        e = this._self._c || t;
                    return e("div", {
                        staticClass: "legals-content-child"
                    }, [e("h4", {
                        staticClass: "sub-ttl"
                    }, [this._v("Copyright and Other Rights")]), this._v(" "), e("p", [this._v("Rights for content published on this site belong to our company, affiliates, and business partners. Unauthorized use, duplication, or quotation of content on this site is strictly prohibited.")])])
                }, function () {
                    var t = this.$createElement,
                        e = this._self._c || t;
                    return e("div", {
                        staticClass: "legals-content-child"
                    }, [e("h4", {
                        staticClass: "sub-ttl"
                    }, [this._v("Trademark")]), this._v(" "), e("p", [this._v("All trademarks, logos, and service marks used on this site belong to our company and business partners. Unauthorized use is strictly prohibited.")])])
                }, function () {
                    var t = this.$createElement,
                        e = this._self._c || t;
                    return e("div", {
                        staticClass: "legals-content-child"
                    }, [e("h4", {
                        staticClass: "sub-ttl"
                    }, [this._v("Disclaimer")]), this._v(" "), e("p", [this._v("Although the services, systems, and content posted to this site are given due consideration, we take no responsibility for their completeness, accuracy, or usefulness. The user assumes full responsibility for using this site. Our company and business partners are absolutely not responsible for any trouble, loss, or even harm, caused by the usage of this site or information featured on this site. The same applies to any website that links to this site.")])])
                }, function () {
                    var t = this.$createElement,
                        e = this._self._c || t;
                    return e("div", {
                        staticClass: "legals-content-child"
                    }, [e("h4", {
                        staticClass: "sub-ttl"
                    }, [this._v("Changes to Terms of Use")]), this._v(" "), e("p", [this._v("Please be aware that we may change the terms of use without notice.")])])
                }, function () {
                    var t = this,
                        e = t.$createElement,
                        o = t._self._c || e;
                    return o("div", {
                        staticClass: "m-post-body | legals-content"
                    }, [o("h3", {
                        staticClass: "ttl"
                    }, [o("span", [t._v("Personal Information")])]), t._v(" "), o("div", {
                        staticClass: "legals-content-child"
                    }, [o("p", [t._v("The following terms have been put in place to protect users of this website’s (“user,” “users”) personal information, such as their name, email address, telephone number, and other contact information.")])]), t._v(" "), o("div", {
                        staticClass: "legals-content-child"
                    }, [o("ol", [o("li", [t._v("We will make every effort to protect your personal information in compliance with all applicable laws and standards.")]), t._v(" "), o("li", [o("p", [t._v("We will properly use your personal information in the following ways.")]), t._v(" "), o("ol", [o("li", [t._v("To improve the use of this site for the user.")]), t._v(" "), o("li", [t._v("To provide accurate information.")]), t._v(" "), o("li", [t._v("To contact the user when necessary.")]), t._v(" "), o("li", [t._v("To conduct marketing research on use and conditions of use.")])])]), t._v(" "), o("li", [t._v("We have implemented a management system and trained our employees so that your information is handled correctly. We will also take measures to ensure your personal information is not stolen, lost, destroyed, altered, or leaked.")]), t._v(" "), o("li", [t._v("We will not provide or disclose personal information to a third party without consent from the user. ")]), t._v(" "), o("li", [t._v("We may revise the privacy policy to protect user’s personal information or to comply with changes in applicable laws.")])])])])
                }, function () {
                    var t = this.$createElement,
                        e = this._self._c || t;
                    return e("h3", {
                        staticClass: "ttl"
                    }, [e("span", [this._v("Cookie Policy")])])
                }, function () {
                    var t = this.$createElement,
                        e = this._self._c || t;
                    return e("div", {
                        staticClass: "legals-content-child"
                    }, [e("h4", {
                        staticClass: "sub-ttl"
                    }, [this._v("Cookie")]), this._v(" "), e("p", [this._v("A cookie is a small text file that is saved on the hard drive or memory of your Device by the browser software. The cookie set in your Device by Helicx does not include information that can identify the individual, but it can provide functions for personalization and for providing target ads based on sites you have accessed previously.")]), this._v(" "), e("p", [this._v("Almost all web browsers automatically accept cookies, but in most cases the browser settings can be changed. For additional information regarding searching and managing cookies, refer to “Method for using the browser settings for searching and managing cookies.”")]), this._v(" "), e("p", [this._v("A cookie does not identify the individual user, but just specifies the device and browser used. (Specific cookies can be associated with individual information, but such information is used when the account linked to the information has selected to exchange information between that account and the Site.)")])])
                }, function () {
                    var t = this,
                        e = t.$createElement,
                        o = t._self._c || e;
                    return o("div", {
                        staticClass: "legals-content-child"
                    }, [o("h4", {
                        staticClass: "sub-ttl"
                    }, [t._v("Web beacon")]), t._v(" "), o("p", [t._v("A web beacon is a small image file (called “clear GIF,” etc.) that is embedded in the website and it can identify if you have visited that website and if so, how many times.")]), t._v(" "), o("p", [t._v("Generally, the electronic images that are seen as part of the website, including ad banners, can function as web beacons. Web beacons are generally very small, and are a file like a 1×1 pixel banner.")]), t._v(" "), o("p", [t._v("The web beacons used by Helicx do not collect personal information, statistically analyze it, view it, or share it but just create anonymous statistics about the website use. The web beacon system Helicx uses to collect this information is a system called Google Analytics that is provided by Google, Inc. ("), o("a", {
                        attrs: {
                            href: "https://www.google.com/analytics",
                            target: "_blank",
                            rel: "noopener"
                        }
                    }, [t._v("www.google.com/analytics")]), t._v("). Web beacons have the same effect as cookies, so references in this policy that refer to cookies also refer to web beacons.")])])
                }, function () {
                    var t = this,
                        e = t.$createElement,
                        o = t._self._c || e;
                    return o("div", {
                        staticClass: "legals-content-child"
                    }, [o("h4", {
                        staticClass: "sub-ttl"
                    }, [t._v("Use and purpose of the cookies of Helicx and third parties")]), t._v(" "), o("p", [t._v("The use of a cookie by Helicx or a third party when you visit the Site is classified into one of the following categories.")]), t._v(" "), o("ol", [o("li", [o("p", [o("strong", [t._v("Mandatory cookie")])]), t._v(" "), o("blockquote", [o("p", [t._v("This is a mandatory cookie that is used to move around the webpage or for webpage functions.")]), t._v(" "), o("p", [t._v("For example, this provides site functions for accessing secure pages and for preserving across pages the information from text entered into forms during the visit.")]), t._v(" "), o("p", [t._v("Disabling this cookie could affect the operation of the Site during use, such as preventing access to specific areas in the Site or making it no longer possible to use all or part of the Site services.")])])]), t._v(" "), o("li", [o("p", [o("strong", [t._v("Performance cookie")])]), t._v(" "), o("blockquote", [o("p", [t._v("This cookie is used to obtain information for improving the website by analyzing website usage and counting the number of visitors.")]), t._v(" "), o("p", [t._v("For example, it collects information about website use, such as the browser or OS you use, the domain names of websites you have visited in the past, average visit time, and viewed pages. This collected information is added together and is anonymous data that cannot be used to identify the individual. The Site uses Google Analytics, the access analysis tool provided by Google for access analysis.")])])])])])
                }, function () {
                    var t = this,
                        e = t.$createElement,
                        o = t._self._c || e;
                    return o("div", {
                        staticClass: "legals-content-child"
                    }, [o("h4", {
                        staticClass: "sub-ttl"
                    }, [t._v("Method for using the browser settings for searching and managing cookies")]), t._v(" "), o("p", [t._v("The browser settings can be used to display and control the cookies set in the Device you are currently using. In addition, all the cookies can be deleted and the cookies that can be set in the device in the future can be restricted.")]), t._v(" "), o("p", [t._v("Third party cookies in particular might already be saved in the Device before they are disabled. Such cookies cannot be deleted for technical reasons. Please use the browser settings of the Device being used. Please refer to the following links for information regarding the representative browser settings.")]), t._v(" "), o("p", [o("a", {
                        attrs: {
                            href: "https://support.google.com/chrome/answer/95647",
                            target: "_blank",
                            rel: "noopener"
                        }
                    }, [t._v("Google Chrome")]), t._v(" / "), o("a", {
                        attrs: {
                            href: "https://support.mozilla.org/en-US/kb/enable-and-disable-cookies-website-preferences",
                            target: "_blank",
                            rel: "noopener"
                        }
                    }, [t._v("Firefox")]), t._v(" / "), o("a", {
                        attrs: {
                            href: "https://privacy.microsoft.com/en-US/windows-10-microsoft-edge-and-privacy",
                            target: "_blank",
                            rel: "noopener"
                        }
                    }, [t._v("Microfsoft Edge")]), t._v(" / "), o("a", {
                        attrs: {
                            href: "http://support.apple.com/kb/PH17191",
                            target: "_blank",
                            rel: "noopener"
                        }
                    }, [t._v("Safari")])])])
                }, function () {
                    var t = this,
                        e = t.$createElement,
                        o = t._self._c || e;
                    return o("div", {
                        staticClass: "legals-content-child"
                    }, [o("h4", {
                        staticClass: "sub-ttl"
                    }, [t._v("Google Analytics")]), t._v(" "), o("p", [t._v("Google Analytics is used by the Site to assess the Site usage conditions. Google Analytics uses cookies to collect user information. Please refer to the respective sites below for an explanation of the Google Analytics Terms of Use and Privacy Policy as well as stopping the use of data (opt out).")]), t._v(" "), o("p", [o("strong", [t._v("Google LLC")])]), t._v(" "), o("ul", [o("li", [o("a", {
                        attrs: {
                            href: "https://policies.google.com/privacy",
                            target: "_blank",
                            rel: "noopener"
                        }
                    }, [t._v("Privacy Policy")])]), t._v(" "), o("li", [o("a", {
                        attrs: {
                            href: "https://www.google.com/analytics/terms/jp.html",
                            target: "_blank",
                            rel: "noopener"
                        }
                    }, [t._v("Google Analytics Terms of Use")])]), t._v(" "), o("li", [o("a", {
                        attrs: {
                            href: "https://tools.google.com/dlpage/gaoptout",
                            target: "_blank",
                            rel: "noopener"
                        }
                    }, [t._v("Google LLC: Google Analytics Opt Out Add-on")]), o("br"), t._v("*The settings for all Google Analytics data usage besides that of the Site.")])])])
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
                }], !1, null, "7cd2a843", null);
            "function" == typeof v.default && Object(v.default)(component);
            e.default = component.exports
        }
    }
]);
