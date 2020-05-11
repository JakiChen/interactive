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
                t.options.__i18n = t.options.__i18n || [], t.options.__i18n.push('{"ja":{"title":"Legal Mentions","date":"2019年11月11日","name":"株式会社Helixes 代表取締役 志村龍之介","contact":"お問い合せ先","zip":"〒111-0053","address":"東京都台東区浅草橋1丁目3-11 萬賓ビル 3F","phone":"03-5829-6856"},"en":{"title":"Legal Mentions","date":"Date established: 11/11/2019","name":"Representative Director Ryunosuke Shimura of Helixes Inc.","contact":"Contact","zip":"111-0053","address":"Manbou BLD. 3F, 1-3-11 Asakusabashi, Taito-ku, Tokyo","phone":"+03 5829 6856"}}'), delete t.options._Ctor
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
                            description: "ja" === this.$i18n.locale ? "株式会社Helixesは、クリエイティブを用いて課題を解決する、トータルプランニングカンパニーです。広告制作をはじめ、ブランドやデジタルプロダクトの開発、アーティストマネジメントなど、枠にとらわれない様々なモノ、コトを総合的に企画・運営しています。" : "Helixes Inc. is a planning company uses creativity to solve problems. We integrate strategy, creativity and experience to build brands.",
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
                    }, [o("p", [t._v("株式会社Helixes コーポレートサイト（"), o("nuxt-link", {
                        staticClass: "link",
                        attrs: {
                            to: t.localePath("index")
                        }
                    }, [t._v("helixes.co")]), t._v(" 以下、本サイトといいます）は、株式会社Helixes（以下、当社といいます）が運営しております。本サイトを利用される前に、以下の利用条件をお読みいただき、これらの条件に同意された場合のみ、本サイトをご利用ください。")], 1)]), t._v(" "), t._m(1), t._v(" "), t._m(2), t._v(" "), t._m(3), t._v(" "), t._m(4), t._v(" "), t._m(5)]), t._v(" "), t._m(6), t._v(" "), o("div", {
                        staticClass: "m-post-body | legals-content | last"
                    }, [t._m(7), t._v(" "), o("div", {
                        staticClass: "legals-content-child"
                    }, [o("p", [t._v("当社のウェブサイト（以下「当サイト」）の一部では、「クッキー」やこれに類似した技術を使用しています。ウェブサイトへアクセスする際、当社および特定の第三者は、あなたのコンピューター、タブレット、スマートフォンや携帯電話（以下それぞれ「デバイス」）上にクッキーを設定することがあります。")]), t._v(" "), o("p", [t._v("当社ではクッキーを利用し、ウェブサイト閲覧において、より便利に当サイトをご利用いただくことを目的としています。あなたの個人情報等を識別したり、ハードディスクから情報を読み取ったり、コンピュータウィルスを送信したり、あなたの電子メールアドレスを識別し利用するような目的で使用されるものではありません。また、当サイトの利用状況や広告に関する統計分析のためにクッキーを利用しています。当サイトのご利用に際しては、クッキーの受け入れをお勧めしています。")]), t._v(" "), o("p", [t._v("本クッキーポリシーは、必要に応じて適宜改定を行っております。本クッキーポリシーの改定は、当社が当サイトに最新版のクッキーポリシーを掲載した時点で有効となります。")]), t._v(" "), o("p", [t._v("本クッキーポリシーに関するお問い合わせは、"), o("nuxt-link", {
                        staticClass: "link",
                        attrs: {
                            to: t.localePath("contact")
                        }
                    }, [t._v("お問い合わせ")]), t._v("からお寄せください。")], 1)]), t._v(" "), t._m(8), t._v(" "), t._m(9), t._v(" "), t._m(10), t._v(" "), t._m(11), t._v(" "), t._m(12)])] : [o("div", {
                        staticClass: "m-post-body | legals-content"
                    }, [t._m(13), t._v(" "), o("div", {
                        staticClass: "legals-content-child"
                    }, [o("p", [t._v("The corporate site, "), o("nuxt-link", {
                        staticClass: "link",
                        attrs: {
                            to: t.localePath("index")
                        }
                    }, [t._v("helixes.co")]), t._v("  (“this site”), is operated by Helixes Inc. (“we,” “our”). Please read the terms below before using this site; please only use this site if you agree to these terms.")], 1)]), t._v(" "), t._m(14), t._v(" "), t._m(15), t._v(" "), t._m(16), t._v(" "), t._m(17), t._v(" "), t._m(18)]), t._v(" "), t._m(19), t._v(" "), o("div", {
                        staticClass: "m-post-body | legals-content | last"
                    }, [t._m(20), t._v(" "), o("div", {
                        staticClass: "legals-content-child"
                    }, [o("p", [t._v("Part of the website (hereinafter the “Site”) of Helixes Inc. (hereinafter “Helixes”) uses “cookies” and similar technology. When the website is accessed, Helixes or a specified third party might set a cookie in your computer, tablet, smartphone, or mobile phone (hereinafter “Device”).")]), t._v(" "), o("p", [t._v("Helixes uses cookies to make the Site more convenient when the website is viewed. The cookies are not used to identify your personal or other information, to read information from your hard disk, to send computer viruses, or to identify your email address. In addition, cookies are used for statistical analysis of the Site usage conditions and advertising. Accepting the use of cookies is recommended when using this Site.")]), t._v(" "), o("p", [t._v("This cookie policy will be suitably revised as necessary. Revisions to this cookie policy become effective when the latest version of the cookie policy is posted on the Site by Helixes.")]), t._v(" "), o("p", [t._v("Please make inquiries regarding this cookie policy using the given "), o("nuxt-link", {
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
                    }, [e("span", [this._v("利用規約")])])
                }, function () {
                    var t = this.$createElement,
                        e = this._self._c || t;
                    return e("div", {
                        staticClass: "legals-content-child"
                    }, [e("h4", {
                        staticClass: "sub-ttl"
                    }, [this._v("リンクについて")]), this._v(" "), e("p", [this._v("本サイトは原則としてリンクフリーです。ただし、本サイトの信用を損なう可能性のあるサイトや、著しく趣旨の合わないサイトからのリンクは、お断りすることがございます。")])])
                }, function () {
                    var t = this.$createElement,
                        e = this._self._c || t;
                    return e("div", {
                        staticClass: "legals-content-child"
                    }, [e("h4", {
                        staticClass: "sub-ttl"
                    }, [this._v("著作権その他の権利について")]), this._v(" "), e("p", [this._v("本サイトに掲載されたすべての内容に関する権利は、当社および関連会社、取引先企業に帰属します。本サイトの掲載内容の無断使用・複製・引用を固く禁止します。")])])
                }, function () {
                    var t = this.$createElement,
                        e = this._self._c || t;
                    return e("div", {
                        staticClass: "legals-content-child"
                    }, [e("h4", {
                        staticClass: "sub-ttl"
                    }, [this._v("商標")]), this._v(" "), e("p", [this._v("本サイト上のすべての商標、およびロゴマークやサービスマークは、当社および取引先企業が所有し、使用する商標です。これらを無断で使用することを固く禁止します。")])])
                }, function () {
                    var t = this.$createElement,
                        e = this._self._c || t;
                    return e("div", {
                        staticClass: "legals-content-child"
                    }, [e("h4", {
                        staticClass: "sub-ttl"
                    }, [this._v("免責事項")]), this._v(" "), e("p", [this._v("当社は、本サイトのサービスおよびシステム、また掲載情報に関して、充分留意して提供していますが、その完全性、正確性、有用性等について、いかなる責任も負わないものとします。ユーザーは自己の責任において本サイトを利用するものとし、本サイトに掲載されている情報、または本サイトを利用することで発生した、いかなるトラブルや損失、損害に対しても、当社および関連会社、取引先企業は一切責任を負いません。また本サイトにリンクするいかなるWebサイトについても同様とします。")])])
                }, function () {
                    var t = this.$createElement,
                        e = this._self._c || t;
                    return e("div", {
                        staticClass: "legals-content-child"
                    }, [e("h4", {
                        staticClass: "sub-ttl"
                    }, [this._v("規約の更新")]), this._v(" "), e("p", [this._v("当社は、利用条件を予告なしに変更することがございます。あらかじめご了承ください。")])])
                }, function () {
                    var t = this,
                        e = t.$createElement,
                        o = t._self._c || e;
                    return o("div", {
                        staticClass: "m-post-body | legals-content"
                    }, [o("h3", {
                        staticClass: "ttl"
                    }, [o("span", [t._v("個人情報保護について")])]), t._v(" "), o("div", {
                        staticClass: "legals-content-child"
                    }, [o("p", [t._v("本サイトのご利用者（以下、ユーザーといいます）のお名前・メールアドレス・電話番号・お問い合わせ内容等の個人情報の保護に関し、以下に掲載する取組みを実施しております。")])]), t._v(" "), o("div", {
                        staticClass: "legals-content-child"
                    }, [o("ol", [o("li", [t._v("当社は、個人情報に関する法令および、その他の規範を遵守し、ユーザーの個人情報の保護に万全を尽くします。")]), t._v(" "), o("li", [o("p", [t._v("当社は、ユーザーの個人情報については、下記の目的の範囲内で適正に取り扱いいたします。")]), t._v(" "), o("ol", [o("li", [t._v("ユーザーが本サイトを利用しやすいよう、改善を図るため")]), t._v(" "), o("li", [t._v("情報を的確にお知らせするため")]), t._v(" "), o("li", [t._v("必要に応じてユーザーに連絡をするため")]), t._v(" "), o("li", [t._v("利用状況や環境などに関するマーケティング調査を実施するため")])])]), t._v(" "), o("li", [t._v("当社は、ユーザーの個人情報を適正に取扱うため、社内管理体制の整備、従業員の教育、ならびに個人情報への不正アクセスや個人情報の紛失、破壊、改ざんおよび、漏洩等防止に関する適切な措置を行い、個人情報の保護に努めます。")]), t._v(" "), o("li", [t._v("当社は、ユーザーから承諾を得ている場合を除き、第三者にユーザーの個人情報を提供、または開示しません。")]), t._v(" "), o("li", [t._v("当社では、ユーザーの個人情報の保護を図るために、また法令その他の規範の変更に対応するために、プライバシーポリシーを改定する事がございます。")])])])])
                }, function () {
                    var t = this.$createElement,
                        e = this._self._c || t;
                    return e("h3", {
                        staticClass: "ttl"
                    }, [e("span", [this._v("クッキーポリシー")])])
                }, function () {
                    var t = this.$createElement,
                        e = this._self._c || t;
                    return e("div", {
                        staticClass: "legals-content-child"
                    }, [e("h4", {
                        staticClass: "sub-ttl"
                    }, [this._v("クッキーとは")]), this._v(" "), e("p", [this._v("クッキー（Cookie）とは、あなたのデバイスのハードドライブやメモリーにブラウザソフトにより保存される、サイズの小さなテキストファイルを意味します。当社があなたのデバイスに設定するクッキーには、個人を特定できる情報は含まれていませんが、パーソナライゼーションなどの機能を提供したり、あなたが以前にアクセスしたサイトに基づいてターゲット広告を提供したりすることができます。")]), this._v(" "), e("p", [this._v("ほとんどのウェブブラウザは、自動的にクッキーを受け入れますが、多くの場合、ブラウザで変更することができます。クッキーを検索・管理するための追加情報については、「クッキーを検索・管理する方法」をご参照ください。")]), this._v(" "), e("p", [this._v("クッキー自体は個人ユーザーではなく、使用されたデバイスやブラウザだけを特定するものです。（特定のクッキーは個人情報に関連付けられますが、そのような情報は関連するアカウントで、サイトやそのアカウントと情報のやり取りすることを選択した場合に使用されます）")])])
                }, function () {
                    var t = this,
                        e = t.$createElement,
                        o = t._self._c || e;
                    return o("div", {
                        staticClass: "legals-content-child"
                    }, [o("h4", {
                        staticClass: "sub-ttl"
                    }, [t._v("ウェブビーコンとは")]), t._v(" "), o("p", [t._v("ウェブビーコン（web beacon）とは、ウェブサイトに埋め込まれた小さな画像ファイル(“クリアGIF”等と呼ばれる)を指し、あなたのウェブサイトへの訪問の有無、また訪問回数等を把握することが可能となるものです。")]), t._v(" "), o("p", [t._v("一般に、広告バナーを含むウェブサイトの一部として見られる電子画像は、ウェブビーコンとして機能することができます。ウェブビーコンは、一般的に非常に小さく、1×1ピクセルのバナーのようなファイルです。")]), t._v(" "), o("p", [t._v("当社が使用するウェブビーコンは、本サイトへの訪問者に関する個人情報を収集、統計、監視または共有するものではなく、ウェブサイトの使用に関する匿名の集計統計を作成するためのものです。当社がこれらの情報を収集するために使用するウェブビーコンシステムは、Google, Inc.が提供するGoogle Analytics ("), o("a", {
                        attrs: {
                            href: "https://www.google.com/analytics",
                            target: "_blank",
                            rel: "noopener"
                        }
                    }, [t._v("www.google.com/analytics")]), t._v(")と呼ばれるシステムです。ウェブビーコンはクッキーと同様の効果をもたらすため、本ポリシーにおけるクッキーへの言及は、クッキー（Cookie）とウェブビーコン（web beacon）の両方を意味しています。")])])
                }, function () {
                    var t = this,
                        e = t.$createElement,
                        o = t._self._c || e;
                    return o("div", {
                        staticClass: "legals-content-child"
                    }, [o("h4", {
                        staticClass: "sub-ttl"
                    }, [t._v("当社および第三者のクッキーの使用と目的")]), t._v(" "), o("p", [t._v("あなたが当サイトを訪問する場合、弊社および第三者によるクッキーの使用は、以下のカテゴリーのいずれかに分類されます。")]), t._v(" "), o("ol", [o("li", [o("p", [o("strong", [t._v("必須クッキー")])]), t._v(" "), o("blockquote", [o("p", [t._v("ウェブページ上を移動し、ウェブページの機能を利用するのに必須なクッキーです。")]), t._v(" "), o("p", [t._v("例えばセキュアページへのアクセスや、訪問中にフォームにテキスト入力した情報がページの行き来をしても保持されるなどのサイト機能を提供する等です。")]), t._v(" "), o("p", [t._v("このクッキーを無効にすると、当サイトの特定箇所にアクセスできなかったり、当サイト上のサービスの全部又は一部が利用できなくなったりするなど、ご利用中の動作に影響を及ぼす可能性があります。予めご了承ください。")])])]), t._v(" "), o("li", [o("p", [o("strong", [t._v("パフォーマンスクッキー")])]), t._v(" "), o("blockquote", [o("p", [t._v("ウェブサイトの使用方法を分析したり、訪問者数を数えたりして、ウェブサイトの改善のための情報を得るためにも使用するためのクッキーです。")]), t._v(" "), o("p", [t._v("たとえば、あなたの使用するブラウザやOS、過去に訪問したウェブサイトのドメイン名、訪問回数、平均訪問時間、閲覧ページなど、ウェブサイトの使用に関する情報を収集します。これらの収集された情報は合算されており、個別に識別することが不可能な匿名データです。当サイトではこれらのアクセス解析のために、Googleによるアクセス解析ツール「Googleアナリティクス」を利用しています。")])])])])])
                }, function () {
                    var t = this,
                        e = t.$createElement,
                        o = t._self._c || e;
                    return o("div", {
                        staticClass: "legals-content-child"
                    }, [o("h4", {
                        staticClass: "sub-ttl"
                    }, [t._v("ブラウザ設定を利用して、クッキーを検索・管理する方法")]), t._v(" "), o("p", [t._v("ブラウザ設定を利用すると、現在お使いのデバイスに設定されているクッキーを表示および制御することができます。また、すべてのクッキーを削除して、今後デバイスに設定される可能性のあるクッキーを制限することもできます。")]), t._v(" "), o("p", [t._v("特に第三者クッキーは、無効にする前に、既に端末機に保存されている可能性があります。このようなクッキーは、技術上、消去することができません。ご利用デバイスのブラウザ設定を利用してください。代表的なブラウザの設定については、以下のリンクをご参照ください。")]), t._v(" "), o("p", [o("a", {
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
                    }, [t._v("Googleアナリティクスについて")]), t._v(" "), o("p", [t._v("当サイトでは、サイトの利用状況を把握するためにGoogle Analyticsを利用しています。Google Analyticsは、クッキーを利用して利用者の情報を収集します。Googleアナリティクスの利用規約及びプライバシーポリシーに関する説明およびデータ使用の停止（オプトアウト）については、それぞれ以下のサイトをご参照ください。")]), t._v(" "), o("p", [o("strong", [t._v("グーグル株式会社")])]), t._v(" "), o("ul", [o("li", [o("a", {
                        attrs: {
                            href: "https://policies.google.com/privacy",
                            target: "_blank",
                            rel: "noopener"
                        }
                    }, [t._v("プライバシーポリシー")])]), t._v(" "), o("li", [o("a", {
                        attrs: {
                            href: "https://www.google.com/analytics/terms/jp.html",
                            target: "_blank",
                            rel: "noopener"
                        }
                    }, [t._v("Googleアナリティクス 利用規約")])]), t._v(" "), o("li", [o("a", {
                        attrs: {
                            href: "https://tools.google.com/dlpage/gaoptout",
                            target: "_blank",
                            rel: "noopener"
                        }
                    }, [t._v("Google アナリティクス オプトアウト アドオン")]), o("br"), t._v("(当サイト以外の全てのGoogleアナリティクスのデータ使用に対して設定されます)")])])])
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
                    }, [this._v("Cookie")]), this._v(" "), e("p", [this._v("A cookie is a small text file that is saved on the hard drive or memory of your Device by the browser software. The cookie set in your Device by Helixes does not include information that can identify the individual, but it can provide functions for personalization and for providing target ads based on sites you have accessed previously.")]), this._v(" "), e("p", [this._v("Almost all web browsers automatically accept cookies, but in most cases the browser settings can be changed. For additional information regarding searching and managing cookies, refer to “Method for using the browser settings for searching and managing cookies.”")]), this._v(" "), e("p", [this._v("A cookie does not identify the individual user, but just specifies the device and browser used. (Specific cookies can be associated with individual information, but such information is used when the account linked to the information has selected to exchange information between that account and the Site.)")])])
                }, function () {
                    var t = this,
                        e = t.$createElement,
                        o = t._self._c || e;
                    return o("div", {
                        staticClass: "legals-content-child"
                    }, [o("h4", {
                        staticClass: "sub-ttl"
                    }, [t._v("Web beacon")]), t._v(" "), o("p", [t._v("A web beacon is a small image file (called “clear GIF,” etc.) that is embedded in the website and it can identify if you have visited that website and if so, how many times.")]), t._v(" "), o("p", [t._v("Generally, the electronic images that are seen as part of the website, including ad banners, can function as web beacons. Web beacons are generally very small, and are a file like a 1×1 pixel banner.")]), t._v(" "), o("p", [t._v("The web beacons used by Helixes do not collect personal information, statistically analyze it, view it, or share it but just create anonymous statistics about the website use. The web beacon system Helixes uses to collect this information is a system called Google Analytics that is provided by Google, Inc. ("), o("a", {
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
                    }, [t._v("Use and purpose of the cookies of Helixes and third parties")]), t._v(" "), o("p", [t._v("The use of a cookie by Helixes or a third party when you visit the Site is classified into one of the following categories.")]), t._v(" "), o("ol", [o("li", [o("p", [o("strong", [t._v("Mandatory cookie")])]), t._v(" "), o("blockquote", [o("p", [t._v("This is a mandatory cookie that is used to move around the webpage or for webpage functions.")]), t._v(" "), o("p", [t._v("For example, this provides site functions for accessing secure pages and for preserving across pages the information from text entered into forms during the visit.")]), t._v(" "), o("p", [t._v("Disabling this cookie could affect the operation of the Site during use, such as preventing access to specific areas in the Site or making it no longer possible to use all or part of the Site services.")])])]), t._v(" "), o("li", [o("p", [o("strong", [t._v("Performance cookie")])]), t._v(" "), o("blockquote", [o("p", [t._v("This cookie is used to obtain information for improving the website by analyzing website usage and counting the number of visitors.")]), t._v(" "), o("p", [t._v("For example, it collects information about website use, such as the browser or OS you use, the domain names of websites you have visited in the past, average visit time, and viewed pages. This collected information is added together and is anonymous data that cannot be used to identify the individual. The Site uses Google Analytics, the access analysis tool provided by Google for access analysis.")])])])])])
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
