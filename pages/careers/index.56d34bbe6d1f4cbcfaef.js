(window.webpackJsonp = window.webpackJsonp || []).push([
    [7], {
        312: function (e, t, r) {
            "use strict";
            var n = r(29),
                o = r(30),
                c = function () {
                    function e(t) {
                        Object(n.a)(this, e), this.opts = t || {}, this.elem = 0 === document.querySelectorAll(this.opts.elem).length ? document.querySelectorAll(".js-helix-wave") : document.querySelectorAll(this.opts.elem), this.resolution = this.opts.resolution || window.devicePixelRatio > 1 ? this.resolution = 2 : this.resolution = 1, this.colors = this.opts.colors || ["#7C4DFF", "#448AFF", "#1DE9B6"], this.diff = this.opts.diff || 1, this.amplitude = this.opts.amplitude * this.resolution || 5 * this.resolution, this.frequency = this.opts.frequency * this.resolution || 10 * this.resolution, this.wavelength = this.opts.wavelength * this.resolution || 40 * this.resolution, this.lineWidth = this.opts.lineWidth * this.resolution || 1 * this.resolution, this.lineInterval = this.opts.lineInterval * this.resolution || 20 * this.resolution, this.lineShift = this.opts.lineShift * this.resolution || 0, this.colors.reverse(), this.frames = 0, this.helixes = [], this.canvases = [], this.ctxs = [], this.init()
                    }
                    return Object(o.a)(e, [{
                        key: "init",
                        value: function () {
                            this.initObserver(), this.handleEvents(), this.createCanvas(), this.updateCanvas()
                        }
                    }, {
                        key: "initObserver",
                        value: function () {
                            this.observer = new IntersectionObserver(this.observer.bind(this), this.inViewOptions);
                            for (var i = 0; this.elem.length > i; i++) {
                                var e = this.elem[i];
                                this.observer.observe(e)
                            }
                        }
                    }, {
                        key: "observer",
                        value: function (e) {
                            for (var i = 0; e.length > i; i++) {
                                var t = e[i],
                                    r = t.target;
                                switch (t.isIntersecting) {
                                    case !0:
                                        r.isInView = !0;
                                        break;
                                    case !1:
                                        r.isInView = !1
                                }
                            }
                        }
                    }, {
                        key: "destroyObserver",
                        value: function () {
                            if (this.observer) {
                                for (var i = 0; this.elem.length > i; i++) {
                                    var e = this.elem[i];
                                    this.observer.disconnect(e)
                                }
                                this.observer = null
                            }
                        }
                    }, {
                        key: "createCanvas",
                        value: function () {
                            for (var i = 0; i < this.elem.length; i++) {
                                var e = this.elem[i],
                                    canvas = document.createElement("canvas"),
                                    t = canvas.getContext("2d");
                                this.canvases.push(canvas), this.ctxs.push(t), e.appendChild(canvas), t.clearRect(0, 0, canvas.width, canvas.height)
                            }
                        }
                    }, {
                        key: "updateCanvas",
                        value: function () {
                            for (var i = 0; i < this.elem.length; i++) {
                                var e = this.elem[i],
                                    canvas = this.canvases[i],
                                    t = this.ctxs[i];
                                2 === this.resolution && t.scale(.5, .5), canvas.width = e.clientWidth * this.resolution, canvas.height = e.clientHeight * this.resolution, canvas.setAttribute("style", "display: block; width: ".concat(canvas.width / this.resolution, "px; height: ").concat(canvas.height / this.resolution, "px;")), canvas.classList.add("helix-wave-".concat(i + 1));
                                var r = canvas.width / 2 * this.diff,
                                    n = .5 * canvas.width,
                                    o = .5 * canvas.height;
                                canvas.diffX = r, canvas.posX = n, canvas.posY = o, t.fillRect(0, 0, canvas.width, canvas.height), t.moveTo(n, o)
                            }
                        }
                    }, {
                        key: "destroyCanvas",
                        value: function () {
                            for (var i = 0; i < this.elem.length; i++) {
                                var e = this.elem[i],
                                    canvas = this.canvases[i];
                                this.ctxs[i].clearRect(0, 0, canvas.width, canvas.height), e.removeChild(canvas), this.elem.length === i && (this.elem = null, this.canvases = null, this.ctxs = null)
                            }
                        }
                    }, {
                        key: "tick",
                        value: function () {
                            for (var i = 0; i < this.elem.length; i++) {
                                var e = this.elem[i],
                                    canvas = this.canvases[i],
                                    t = this.ctxs[i];
                                if (t.clearRect(0, 0, canvas.width, canvas.height), e.isInView)
                                    for (var r = 0; r < this.colors.length; r++) {
                                        t.beginPath(), t.lineCap = "round", t.strokeStyle = this.colors[r], t.lineWidth = this.lineWidth;
                                        for (var n = canvas.posX - canvas.diffX - this.lineShift * (r - 1); n < canvas.width / 2 + canvas.diffX; n++) {
                                            var o = this.calcPosY(n, r * this.lineInterval);
                                            t.lineTo(n, o + canvas.posY)
                                        }
                                        t.stroke()
                                    }
                            }
                            this.frames -= .5 * this.resolution
                        }
                    }, {
                        key: "calcPosY",
                        value: function (e, t) {
                            return Math.sin(e / this.wavelength * (2 * Math.PI) + (this.frames - t) / this.frequency) * this.amplitude
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
                            var e = this;
                            this.removeEvents(), this.destroyObserver(), requestTimeout((function () {
                                e.destroyCanvas()
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
                    }]), e
                }();
            t.a = c
        },
        315: function (e, t, r) {
            var content = r(352);
            "string" == typeof content && (content = [
                [e.i, content, ""]
            ]), content.locals && (e.exports = content.locals);
            (0, r(13).default)("321f5b32", content, !0, {
                sourceMap: !1
            })
        },
        316: function (e, t) {
            e.exports = function (e) {
                e.options.__i18n = e.options.__i18n || [], e.options.__i18n.push('{"ja":{"title":"Careers","message":"我们认为停滞是“逐渐死亡”，因此不容忍。 即使具有轴，“Helixes” 仍在不断变化以体现单词本身。"},"en":{"title":"Careers","message":"We don’t accept standing still because we take it as \\"gradual death.\\" \\"Helixes\\" will always change as we have a core axis that embodies the word itself."}}'), delete e.options._Ctor
            }
        },
        351: function (e, t, r) {
            "use strict";
            var n = r(315);
            r.n(n).a
        },
        352: function (e, t, r) {
            (t = r(12)(!1)).push([e.i, '.p-careers .fill-rect[data-v-58059392]{position:absolute}.p-careers .fill-rect .fill-rect-body[data-v-58059392]{display:block;width:100%;height:100%;background:#fff}.p-careers .m-subpage-intro .subpage-intro-rect[data-v-58059392]{padding-left:13.125vw;padding-right:12.5vw;padding-bottom:10.41667vw}.p-careers .m-subpage-intro .careers-nav[data-v-58059392]{position:relative;width:100%}.p-careers .m-subpage-intro .careers-nav-lists[data-v-58059392]{position:relative;width:100%;max-width:38.125vw;margin:0 auto}.p-careers .m-subpage-intro .careers-nav-list[data-v-58059392]{position:relative;width:100%;border-bottom:1px solid #333}.p-careers .m-subpage-intro .careers-nav-list[data-v-58059392]:first-child{border-top:1px solid #333}.p-careers .m-subpage-intro .careers-nav-list[data-v-58059392]:after{content:"";position:absolute;bottom:-1px;left:0;width:100%;height:1px;background:#666;opacity:0;-webkit-transform-origin:100% 50% 0;transform-origin:100% 50% 0;-webkit-transform:scaleX(0);transform:scaleX(0);-webkit-transition:opacity .35s cubic-bezier(.39,.575,.565,1) 0s,-webkit-transform 0s ease .35s;transition:opacity .35s cubic-bezier(.39,.575,.565,1) 0s,-webkit-transform 0s ease .35s;transition:transform 0s ease .35s,opacity .35s cubic-bezier(.39,.575,.565,1) 0s;transition:transform 0s ease .35s,opacity .35s cubic-bezier(.39,.575,.565,1) 0s,-webkit-transform 0s ease .35s}.p-careers .m-subpage-intro .careers-nav-list a.link[data-v-58059392]{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center;width:100%;padding:2em 1.5em 2em 0;color:#fff;font-size:calc(1.8rem + (200vw - 1200px)/1000);font-family:HK Nova,sans-serif;font-weight:400;line-height:1;letter-spacing:0;white-space:nowrap;-webkit-transition:color .35s cubic-bezier(.39,.575,.565,1) .1s;transition:color .35s cubic-bezier(.39,.575,.565,1) .1s}.p-careers .m-subpage-intro .careers-nav-list .txt[data-v-58059392]{position:relative;display:inline-block;white-space:normal;padding-right:1em}.p-careers .m-subpage-intro .careers-nav-list .arrow[data-v-58059392]{position:relative;width:14px;height:14px;min-width:14px;min-height:14px}.p-careers .m-subpage-intro .careers-nav-list .arrow .point[data-v-58059392]{position:absolute;top:0;bottom:0;left:0;right:0;margin:auto;width:2px;height:2px}.p-careers .m-subpage-intro .careers-nav-list .arrow-right[data-v-58059392]{display:block;width:100%;height:100%}.p-careers .m-subpage-intro .careers-nav-list .arrow-right path[data-v-58059392]{fill:#444;-webkit-transition:fill .3s cubic-bezier(.39,.575,.565,1) 0s;transition:fill .3s cubic-bezier(.39,.575,.565,1) 0s}.p-careers .m-subpage-intro .subpage-intro-space[data-v-58059392]{padding:0 4.79167vw 0 5.41667vw}.p-careers .m-subpage-sections[data-v-58059392]{z-index:11}.p-careers .m-subpage-sections .subpage-section-video[data-v-58059392]{background:transparent}.p-careers .m-subpage-sections .careers-message[data-v-58059392]{position:relative;width:100%;height:auto;padding-bottom:14.58333vw;background:#fff}.p-careers .m-subpage-sections .careers-message-inner[data-v-58059392]{position:relative;padding:0 20.83333vw}.p-careers .m-subpage-sections .careers-message-body[data-v-58059392]{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:nowrap;flex-wrap:nowrap;position:relative;max-width:1096px;margin:0 auto}.p-careers .m-subpage-sections .careers-message .ttl[data-v-58059392]{position:relative;width:16.66667vw;padding-top:.25em;color:#a0a0a0;font-size:2rem;font-family:HK Nova,sans-serif;line-height:1.7;letter-spacing:0}.p-careers .m-subpage-sections .careers-message .txt[data-v-58059392]{position:relative;width:40.41667vw;font-size:calc(2.6rem + (400vw - 2400px)/1000);font-weight:400;letter-spacing:.065em;line-height:1.8}.p-careers .m-subpage-sections .ui-play-btn[data-v-58059392]{visibility:visible;-webkit-transition:opacity .35s cubic-bezier(.39,.575,.565,1) 0s,visibility .35s cubic-bezier(.39,.575,.565,1) 0s;transition:opacity .35s cubic-bezier(.39,.575,.565,1) 0s,visibility .35s cubic-bezier(.39,.575,.565,1) 0s}.p-careers .m-subpage-sections .ui-play-btn[data-v-58059392]:after{content:"";position:absolute;top:0;left:0;width:100%;height:100%;background:#ff4e50;z-index:-1;-webkit-transform-origin:50% 100% 0;transform-origin:50% 100% 0;-webkit-transform:scaleY(0);transform:scaleY(0);-webkit-transition:-webkit-transform .65s cubic-bezier(.77,0,.175,1) 0s;transition:-webkit-transform .65s cubic-bezier(.77,0,.175,1) 0s;transition:transform .65s cubic-bezier(.77,0,.175,1) 0s;transition:transform .65s cubic-bezier(.77,0,.175,1) 0s,-webkit-transform .65s cubic-bezier(.77,0,.175,1) 0s}.p-careers .m-subpage-sections .ui-play-btn .txt[data-v-58059392]{position:relative;display:block;width:100%;text-align:center;line-height:1;overflow:hidden}.p-careers .m-subpage-sections .ui-play-btn .front[data-v-58059392]{position:relative}.p-careers .m-subpage-sections .ui-play-btn .back[data-v-58059392],.p-careers .m-subpage-sections .ui-play-btn .front[data-v-58059392]{display:block;padding:2px 0;width:100%;white-space:nowrap;-webkit-transition:-webkit-transform .65s cubic-bezier(.77,0,.175,1) 0s;transition:-webkit-transform .65s cubic-bezier(.77,0,.175,1) 0s;transition:transform .65s cubic-bezier(.77,0,.175,1) 0s;transition:transform .65s cubic-bezier(.77,0,.175,1) 0s,-webkit-transform .65s cubic-bezier(.77,0,.175,1) 0s}.p-careers .m-subpage-sections .ui-play-btn .back[data-v-58059392]{position:absolute;color:#fff}.p-careers .m-subpage-sections .subpage-section-video-relative.is-playing .ui-play-btn[data-v-58059392]{opacity:0;visibility:hidden}[lang=en] .p-careers .m-subpage-sections .careers-message .ttl[data-v-58059392]{padding-top:0}[lang=en] .p-careers .m-subpage-sections .careers-message .txt[data-v-58059392]{font-family:HK Grotesk Pro,sans-serif;font-weight:500;line-height:1.6;letter-spacing:.005em}.no-touch .p-careers .m-subpage-intro .careers-nav-list:hover .anim-right[data-v-58059392]{-webkit-animation:anim-right .6s cubic-bezier(.165,.84,.44,1) 0s 1 normal forwards running;animation:anim-right .6s cubic-bezier(.165,.84,.44,1) 0s 1 normal forwards running}.no-touch .p-careers .m-subpage-intro .careers-nav-list:hover .anim-right path[data-v-58059392]{fill:#fff;-webkit-transition:fill .3s cubic-bezier(.39,.575,.565,1) .3s;transition:fill .3s cubic-bezier(.39,.575,.565,1) .3s}.no-touch .p-careers .m-subpage-intro .careers-nav-list[data-v-58059392]:hover:after{opacity:1;-webkit-transform:scale(1);transform:scale(1);-webkit-transform-origin:0 50% 0;transform-origin:0 50% 0;-webkit-transition:opacity 0s ease 0s,-webkit-transform .45s cubic-bezier(.165,.84,.44,1) 0s;transition:opacity 0s ease 0s,-webkit-transform .45s cubic-bezier(.165,.84,.44,1) 0s;transition:transform .45s cubic-bezier(.165,.84,.44,1) 0s,opacity 0s ease 0s;transition:transform .45s cubic-bezier(.165,.84,.44,1) 0s,opacity 0s ease 0s,-webkit-transform .45s cubic-bezier(.165,.84,.44,1) 0s}.no-touch .p-careers .m-subpage-sections .ui-play-btn[data-v-58059392]:hover:after{-webkit-transform:scale(1);transform:scale(1)}.no-touch .p-careers .m-subpage-sections .ui-play-btn:hover .back[data-v-58059392],.no-touch .p-careers .m-subpage-sections .ui-play-btn:hover .front[data-v-58059392]{-webkit-transform:translateY(-100%);transform:translateY(-100%)}.no-touch .p-careers .careers-nav-lists:hover .careers-nav-list:not(:hover) a.link[data-v-58059392]{color:#444;-webkit-transition:color .35s cubic-bezier(.39,.575,.565,1) 0s;transition:color .35s cubic-bezier(.39,.575,.565,1) 0s}@media only screen and (min-width:1920px){.p-careers .m-subpage-intro .subpage-intro-rect[data-v-58059392]{padding-bottom:200px}.p-careers .m-subpage-intro .careers-nav-lists[data-v-58059392]{width:696px}.p-careers .m-subpage-intro .careers-nav-list a.link[data-v-58059392]{font-size:2.064rem}.p-careers .m-subpage-sections .careers-message[data-v-58059392]{padding-bottom:280px}.p-careers .m-subpage-sections .careers-message-inner[data-v-58059392]{padding:0 400px}.p-careers .m-subpage-sections .careers-message .txt[data-v-58059392]{font-size:3.128rem}.p-careers .m-subpage-sections .careers-message .ttl[data-v-58059392]{width:320px}.p-careers .m-subpage-sections .careers-message .txt[data-v-58059392]{width:776px}}@media only screen and (max-width:1024px){.p-careers .m-subpage-sections .careers-message .ttl[data-v-58059392]{font-size:1.6rem}.p-careers .m-subpage-sections .careers-message .txt[data-v-58059392]{font-size:calc(2.2rem + (200vw - 1360px)/344)}}@media only screen and (max-width:1024px) and (orientation:portrait){.p-careers .m-subpage-intro .careers-nav-lists[data-v-58059392]{max-width:100%}.p-careers .m-subpage-intro .careers-nav-list a.link[data-v-58059392]{padding:2em 1em 2em 0}.p-careers .m-subpage-sections .careers-message .ttl[data-v-58059392]{font-size:1.6rem}.p-careers .m-subpage-sections .careers-message[data-v-58059392]{padding-bottom:5em}.p-careers .m-subpage-sections .careers-message .ttl[data-v-58059392]{font-size:1.5rem}.p-careers .m-subpage-sections .careers-message .txt[data-v-58059392]{font-size:calc(1.6rem + (200vw - 1360px)/344)}}@media only screen and (max-width:680px){.p-careers .m-subpage-intro .subpage-intro-rect[data-v-58059392]{padding:5em 40px}.p-careers .m-subpage-intro .careers-nav-lists[data-v-58059392]{max-width:100%}.p-careers .m-subpage-intro .careers-nav-list .txt[data-v-58059392]{font-size:1.6rem}.p-careers .m-subpage-intro .careers-nav-list a.link[data-v-58059392]{padding:1.5em 1em 1.5em 0}.p-careers .m-subpage-sections[data-v-58059392]{padding-bottom:0}.p-careers .m-subpage-sections .careers-message-inner[data-v-58059392]{padding:0 40px}.p-careers .m-subpage-sections .careers-message-body[data-v-58059392]{max-width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap}.p-careers .m-subpage-sections .careers-message .ttl[data-v-58059392]{position:relative;width:100%;margin-bottom:1em}.p-careers .m-subpage-sections .careers-message .txt[data-v-58059392]{position:relative;width:100%;font-size:1.8rem;line-height:1.8}}', ""]), e.exports = t
        },
        353: function (e, t, r) {
            "use strict";
            var n = r(316),
                o = r.n(n);
            t.default = o.a
        },
        417: function (e, t, r) {
            "use strict";
            r.r(t);
            r(23), r(14), r(11), r(6), r(19), r(32);
            var n = r(4),
                o = r(9),
                c = r(312);

            function l(object, e) {
                var t = Object.keys(object);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(object);
                    e && (r = r.filter((function (e) {
                        return Object.getOwnPropertyDescriptor(object, e).enumerable
                    }))), t.push.apply(t, r)
                }
                return t
            }
            var d = {
                /* JobPositions lists Data */
                    data: function () {
                        return {
                            title: this.$t.bind(this)("title"),
                            description: "ja" === this.$i18n.locale ? "Helixes Co.，Ltd.是一家使用创意解决方案来解决问题的总体计划公司。 我们计划和管理各种不受框架约束的事物，例如广告制作，品牌和数字产品开发以及艺术家管理。" : "Helixes Inc. is a planning company uses creativity to solve problems. We integrate strategy, creativity and experience to build brands.",
                            className: "careers",
                            headerTitle: "Careers",
                            headerSubTitle: "Join our team",
                            helixWave: null,
                            isPlaying: !1,
                            isVideoLoaded: {
                                videoCareers: !1
                            },
                            video: {
                                logo: "",
                                movie: "",
                                poster: ""
                            },
                            jobPositions: [/*{
                                title: "Account Executive",
                                slug: "account-executive"
                            }, {
                                title: "Creative Director",
                                slug: "creative-director"
                            }, */{
                                title: "Strategic Planner",
                                slug: "strategic-planner"
                            }/*, {
                                title: "Director",
                                slug: "director"
                            }, {
                                title: "Producer",
                                slug: "producer"
                            }, {
                                title: "Intern",
                                slug: "intern"
                            }*/]
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
                    computed: function (e) {
                        for (var i = 1; i < arguments.length; i++) {
                            var source = null != arguments[i] ? arguments[i] : {};
                            i % 2 ? l(Object(source), !0).forEach((function (t) {
                                Object(n.a)(e, t, source[t])
                            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(source)) : l(Object(source)).forEach((function (t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(source, t))
                            }))
                        }
                        return e
                    }({}, Object(o.b)({
                        loaded: "loaded",
                        user: "user",
                        page: "page"
                    })),
                    watch: {
                        loaded: function (e) {
                            e && this.init("first")
                        }
                    },
                    beforeMount: function () {
                        $g.fn.utility.resetScrollPosition(), $g.fn.utility.setViewportHeight()
                    },
                    mounted: function () {
                        var e = this;
                        this.$nextTick((function () {
                            e.setData(), $g.fn.utility.updateViewType(), $g.fn.utility.staggerElement(".subpage-hero-sub-ttl"), $g.fn.utility.staggerElement(".subpage-hero-ttl"), e.$eventHub.$emit("helixSetState", !1), e.helixWave = new c.a($g.configs.helixWaveSettings()), observer.init($g.configs.observerSettings), e.loadVideo(), e.$refs.videoCareers.addEventListener("ended", (function (t) {
                                e.$refs.videoCareers.currentTime = .001, e.pauseModernVideo({
                                    wrap: "videoCareersWrap",
                                    el: "videoCareers"
                                }), e.toggleLegacyVideo({
                                    wrap: "videoCareersWrap",
                                    el: "videoCareers",
                                    src: e.video.movie
                                })
                            })), requestTimeout((function () {
                                e.setFillRect()
                            }), 1), e.loaded && e.init("default"), e.$eventHub.$on("onScroll", e.onScroll), e.$eventHub.$on("onResize", e.onResize), e.$eventHub.$on("onWindowOut", e.onWindowOut)
                        }))
                    },
                    beforeDestroy: function () {
                        observer.destroy(), this.helixWave.destroy(), this.$eventHub.$off("onScroll", this.onScroll), this.$eventHub.$off("onResize", this.onResize), this.$eventHub.$off("onWindowOut", this.onWindowOut)
                    },
                    methods: {
                        setData: function () {
                            this.video = {
                                logo: $g.path.video.careers.logo,
                                movie: $g.path.video.careers.movie,
                                poster: $g.path.video.careers.poster
                            }
                        },
                        init: function (e) {
                            switch (e) {
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
                        setFillRect: function () {
                            var rect = $g.el(".fill-rect"),
                                e = $g.el(".subpage-section-video-relative").getBoundingClientRect(),
                                t = e.top,
                                r = e.left,
                                n = e.width,
                                o = e.height;
                            gsap.set(rect, {
                                position: "absolute",
                                top: t,
                                left: r,
                                width: n,
                                height: o
                            })
                        },
                        loadVideo: function () {
                            var e = this;
                            this.$refs.videoCareers.load(), this.$refs.videoCareers.addEventListener("loadeddata", (function () {
                                e.isVideoLoaded.videoCareers = !0
                            }))
                        },
                        playCareersVideo: function (e) {
                            this.isPlaying ? this.pauseModernVideo(e) : this.playModernVideo(e)
                        },
                        playModernVideo: function (e) {
                            var t = this,
                                r = (e.wrap, e.el);
                            this.user.mobile || this.user.tablet || ua.ie || this.isPlaying || !this.isVideoLoaded[r] || ($g.el(".subpage-section-video-relative").classList.add("is-playing"), $g.pointer.type("video-pause"), $g.pointer.enabled([".subpage-section-video-relative"]), this.$refs[r].muted = !1, this.$refs[r].volume = .5, this.$refs[r].play(), requestTimeout((function () {
                                t.isPlaying = !0
                            }), 100))
                        },
                        pauseModernVideo: function (e) {
                            var t = e.wrap,
                                r = e.el;
                            this.user.mobile || this.user.tablet || ua.ie || !this.isPlaying || !this.isVideoLoaded[r] || this.$refs[t].classList.contains("is-playing") && (this.$refs[t].classList.remove("is-playing"), $g.pointer.type("clear"), $g.pointer.disabled([".subpage-section-video-relative"]), this.$refs[r].muted = !0, this.$refs[r].volume = 0, this.$refs[r].pause(), this.isPlaying = !1)
                        },
                        toggleLegacyVideo: function (e) {
                            var t = e.wrap,
                                r = e.el;
                            e.src;
                            (this.user.mobile || this.user.tablet || ua.ie) && (this.$refs[t].classList.contains("is-playing") ? (this.$refs[t].classList.remove("is-playing"), this.$refs[r].muted = !0, this.$refs[r].volume = 0, this.$refs[r].pause()) : (this.$refs[t].classList.add("is-playing"), this.$refs[r].muted = !1, this.$refs[r].volume = .5, this.$refs[r].play()))
                        },
                        glHoverIn: function (e) {
                            var t = e.isChild,
                                r = e.el,
                                n = e.evt;
                            if (this.user.desktop) {
                                var o = "self" === r ? n.target : t ? n.target.querySelector(r) : document.querySelector(r);
                                this.$eventHub.$emit("glHoverIn", o)
                            }
                        },
                        glHoverOut: function (e) {
                            var t = e.isChild,
                                r = e.el,
                                n = e.evt;
                            if (this.user.desktop) {
                                var o = "self" === r ? n.target : t ? n.target.querySelector(r) : document.querySelector(r);
                                this.$eventHub.$emit("glHoverOut", o)
                            }
                        },
                        onScroll: function (e) {
                            e._y;
                            e.y > e.height ? (this.$eventHub.$emit("helixSetState", !1), this.$eventHub.$emit("helixStop")) : (this.$eventHub.$emit("helixSetState", !0), this.$eventHub.$emit("helixStart"))
                        },
                        onResize: function (e) {
                            e.width, e.height;
                            this.user.desktop && this.setFillRect()
                        },
                        onWindowOut: function (e) {
                            e.pointer, e.x, e.y
                        },
                        goTo: function (e) {
                            this.$router.push({
                                path: e
                            })
                        },
                        scrollToElement: function (e) {
                            var t = e.id;
                            e.duration, e.ease;
                            $g.fn.utility.scrollToElement({
                                id: t
                            })
                        }
                    },
                    transition: {
                        mode: "out-in",
                        css: !1,
                        beforeEnter: function (e) {
                            this.$store.getters.loaded && $g.fn.transition.beforeEnter({
                                el: e
                            })
                        },
                        enter: function (e, t) {
                            var r = this;
                            this.$store.getters.loaded && (requestTimeout((function () {
                                r.$store.dispatch("maskOff")
                            }), 250), $g.fn.transition.enter({
                                el: e,
                                done: t
                            }))
                        },
                        leave: function (e, t) {
                            if (this.$store.getters.loaded) {
                                this.$store.dispatch("maskOn"), $g.fn.transition.leave({
                                    el: e,
                                    done: t,
                                    callback: function () {}
                                })
                            }
                        }
                    }
                },
                h = (r(351), r(8)),
                v = r(353),
                component = Object(h.a)(d, (function () {
                    var e = this,
                        t = e.$createElement,
                        r = e._self._c || t;
                    return r("div", {
                        class: "p-" + e.className
                    }, [r("section", {
                        class: e.className + "-hero | m-subpage-hero",
                        attrs: {
                            "data-fs-section": ""
                        }
                    }, [r("div", {
                        ref: "hero",
                        staticClass: "subpage-hero-height"
                    }, [r("div", {
                        staticClass: "subpage-hero-inner"
                    }, [r("div", {
                        staticClass: "subpage-hero-body | l-relative"
                    }, [r("h4", {
                        staticClass: "subpage-hero-sub-ttl"
                    }, [e._v(e._s(e.headerSubTitle))]), e._v(" "), r("h1", {
                        staticClass: "subpage-hero-ttl"
                    }, [e._v(e._s(e.headerTitle))])])])])]), e._v(" "), r("section", {
                        staticClass: "m-subpage-intro",
                        attrs: {
                            "data-fs-section": ""
                        }
                    }, [r("div", {
                        staticClass: "subpage-intro-rect"
                    }, [r("nav", {
                        staticClass: "careers-nav"
                    }, [r("ul", {
                        staticClass: "careers-nav-lists"
                    }, e._l(e.jobPositions, (function (t, n) {
                        return r("li", {
                            staticClass: "careers-nav-list"
                        }, [r("nuxt-link", {
                            staticClass: "link",
                            attrs: {
                                to: e.localePath({
                                    path: "/careers/" + t.slug + "/"
                                }),
                                "data-ma-hover": "fixed-link-border-dark-gray",
                                "data-ma-fixed": ""
                            }
                        }, [r("span", {
                            staticClass: "txt"
                        }, [e._v(e._s(t.title))]), e._v(" "), r("span", {
                            staticClass: "arrow"
                        }, [r("svg", {
                            staticClass: "arrow-right | anim-right",
                            attrs: {
                                viewBox: "0 0 16 16"
                            }
                        }, [r("path", {
                            attrs: {
                                d: "M0,9h12.17l-5.59,5.59L8,16l8-8L8,0L6.59,1.41L12.17,7H0L0,9z"
                            }
                        })]), e._v(" "), r("span", {
                            staticClass: "point",
                            attrs: {
                                "data-ma-fixed-target": ""
                            }
                        })])])], 1)
                    })), 0)])]), e._v(" "), r("div", {
                        staticClass: "subpage-intro-space"
                    })]), e._v(" "), r("section", {
                        staticClass: "m-subpage-sections"
                    }, [r("section", {
                        staticClass: "subpage-section",
                        attrs: {
                            "data-fs-section": ""
                        }
                    }, [r("div", {
                        staticClass: "careers-message"
                    }, [r("div", {
                        staticClass: "careers-message-inner"
                    }, [r("div", {
                        staticClass: "careers-message-body"
                    }, [r("h4", {
                        staticClass: "ttl"
                    }, [e._v("Message")]), e._v(" "), r("p", {
                        staticClass: "txt"
                    }, [e._v(e._s(e.$t("message")))])])])])]), e._v(" "), r("section", {
                        staticClass: "subpage-section",
                        attrs: {
                            "data-fs-section": ""
                        }
                    }, [r("div", {
                        staticClass: "subpage-section-video"
                    }, [r("div", {
                        ref: "videoCareersWrap",
                        staticClass: "subpage-section-video-relative | l-relative",
                        attrs: {
                            "data-ma-hover": "video-pause",
                            "data-ma-disabled": ""
                        },
                        on: {
                            click: function (t) {
                                return e.pauseModernVideo({
                                    wrap: "videoCareersWrap",
                                    el: "videoCareers"
                                })
                            }
                        }
                    }, [r("div", {
                        staticClass: "section-video-thumb-ratio"
                    }, [r("div", {
                        staticClass: "section-video-thumb"
                    }, [r("div", {
                        staticClass: "section-video-wrap",
                        attrs: {
                            "data-fs-inview": "",
                            "data-gl-dom": "",
                            "data-gl-type": "video",
                            "data-gl-src": e.video.movie,
                            "data-gl-texture": e.video.logo,
                            "data-gl-ratio": "16:9",
                            "data-gl-vs": "plane",
                            "data-gl-fs": "logo"
                        },
                        on: {
                            click: function (t) {
                                return e.toggleLegacyVideo({
                                    wrap: "videoCareersWrap",
                                    el: "videoCareers",
                                    src: e.video.movie
                                })
                            },
                            mouseenter: function (t) {
                                return e.glHoverIn({
                                    isChild: !1,
                                    el: "self",
                                    evt: t
                                })
                            },
                            mouseleave: function (t) {
                                return e.glHoverOut({
                                    isChild: !1,
                                    el: "self",
                                    evt: t
                                })
                            }
                        }
                    }, [r("video", {
                        ref: "videoCareers",
                        staticClass: "section-video",
                        attrs: {
                            "data-gl-source": "",
                            "data-preload-image": "",
                            poster: e.video.poster,
                            crossorigin: "anonymous",
                            preload: "metadata",
                            playsinline: "",
                            muted: ""
                        },
                        domProps: {
                            muted: !0
                        }
                    })])]), e._v(" "), r("div", {
                        staticClass: "ui-play-btn | legacy-play-btn",
                        on: {
                            click: function (t) {
                                return e.playCareersVideo({
                                    wrap: "videoCareersWrap",
                                    el: "videoCareers"
                                })
                            }
                        }
                    }, [e._m(0)])])])])])]), e._v(" "), e._m(1), e._v(" "), r("section", {
                        staticClass: "m-subpage-link",
                        attrs: {
                            "data-fs-section": ""
                        }
                    }, [r("div", {
                        staticClass: "subpage-link-inner"
                    }, [r("div", {
                        staticClass: "subpage-link-body | l-relative",
                        attrs: {
                            "data-ma-hover": "page-link"
                        },
                        on: {
                            click: function (t) {
                                return e.goTo("/contact/")
                            }
                        }
                    }, [e._m(2), e._v(" "), e._m(3)])])]), e._v(" "), e._m(4)])
                }), [function () {
                    var e = this.$createElement,
                        t = this._self._c || e;
                    return t("span", {
                        staticClass: "txt"
                    }, [t("span", {
                        staticClass: "front"
                    }, [this._v("Play")]), this._v(" "), t("span", {
                        staticClass: "back"
                    }, [this._v("Play")])])
                }, function () {
                    var e = this.$createElement,
                        t = this._self._c || e;
                    return t("div", {
                        staticClass: "fill-rect"
                    }, [t("div", {
                        staticClass: "fill-rect-body",
                        attrs: {
                            "data-fs-section": ""
                        }
                    })])
                }, function () {
                    var e = this.$createElement,
                        t = this._self._c || e;
                    return t("div", {
                        staticClass: "sub-ttl ui-link"
                    }, [t("span", {
                        staticClass: "txt",
                        attrs: {
                            "data-txt": "Get in touch"
                        }
                    }, [this._v("Get in touch")]), this._v(" "), t("span", {
                        staticClass: "line"
                    })])
                }, function () {
                    var e = this.$createElement,
                        t = this._self._c || e;
                    return t("div", {
                        staticClass: "ttl"
                    }, [t("span", {
                        staticClass: "txt"
                    }, [this._v("Contact")])])
                }, function () {
                    var e = this.$createElement,
                        t = this._self._c || e;
                    return t("div", {
                        staticClass: "fake-footer",
                        attrs: {
                            "data-fs-section": ""
                        }
                    }, [t("div", {
                        staticClass: "fake-footer-height"
                    })])
                }], !1, null, "58059392", null);
            "function" == typeof v.default && Object(v.default)(component);
            t.default = component.exports
        }
    }
]);
