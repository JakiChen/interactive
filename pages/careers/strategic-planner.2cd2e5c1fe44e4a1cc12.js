(window.webpackJsonp = window.webpackJsonp || []).push([
    [9], {
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
        335: function (t, e, n) {
            var content = n(382);
            "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, n(13).default)("37fb88f5", content, !0, {
                sourceMap: !1
            })
        },
        336: function (t, e) {
            t.exports = function (t) {
                t.options.__i18n = t.options.__i18n || [], t.options.__i18n.push('{"ja":{"title":"Strategic Planner","jobDescription":"战略规划师通过参与从产品开发到传播策略的最高层次的营销活动来制定广告策略。 我们将通过调查分析数据，并充分利用这些结果，根据数据制定主管客户的品牌策略，传播策略等。","jobOutlineTtl":{"1":"就业形式","2":"工作地点","3":"薪水"},"jobOutlineTxt":{"1":"专职员工(中途)<br/>合同员工<br/>业务外包<br/><span class=\\"note\\">(试用期3个月)</span>","2":"北京","3":"面议"},"jobMoreOutlineLabel":"详细","jobMoreOutlineTtl":{"1":"工作时间","2":"福利待遇","3":"休息（节假日）"},"jobMoreOutlineTxt":{"1":"10:00 ~ 19:00 (1小时休息)<br/>(10:00 ~ 22:00 弹性工作时间)","2":"工资将根据我们的规定，在面试后根据经验，能力和以前工作的工资确定。","3":"每周2天，年假（工龄），法定节假日，调休"},"jobDo":{"1":"听取客户问题","2":"市场研究，分析","3":"规划解决问题的思路并执行解决方案","4":"规划广告策略","5":"广告策划/方向","6":"向客户提出可行性方案/计划"},"jobSkillTtl":{"1":"基本条件","2":"先决条件","3":"加分项"},"jobBasicSkills":{"1":"学历/性别，不限","2":"热爱制造业","3":"对行业热爱，愿接受新事物和新技术","4":"对工作充满热情"},"jobRequiredSkills":{"1":"具有挑战规划师（或同等学历）经验","2":"擅长营销研究和分析，并能狗领导广告策略规划","3":"基本的商务PC技能，例如Excel和Word","4":"懂基本的商务礼仪"},"jobEntrySkills":{"1":"有代理商或创意代理商工作经验","2":"高效的沟通能力","3":"思维敏捷，灵活应变各种突发状况处理能力","4":"了解/熟悉掌握Adobe家族软件","5":"掌握两门以上语言（英语）","6":"精通数字领域"}},"en":{"title":"Strategic Planner","jobDescription":"Strategic planner work engaging with aspects ranging from product development to communication strategy, establishing advertising strategy from top-level marketing.<br/>Analyze data from surveys and use the findings to their maximum potential for applications such as brand and communication strategy for your clients, and make proposals based on this data.","jobOutlineTtl":{"1":"Contract type","2":"Location","3":"Salary"},"jobOutlineTxt":{"1":"Full-time employee (mid-career)<br/>Contract employee<br/>Business consignment<br/><span class=\\"note\\">(Trialperiod:3months)</span>","2":"Tokyo","3":"Ask"},"jobMoreOutlineLabel":"Details","jobMoreOutlineTtl":{"1":"Flextime","2":"Benefits","3":"Holiday"},"jobMoreOutlineTxt":{"1":"10:00a.m.to7:00p.m.（1hourbreak）<br/>*Flextimebetween10:00a.m.to10:00p.m.","2":"Thesalarywillbedecidedaftertheinterviewbasedoncompanyregulationsconsideringyourexperience,skills,andpayatyourpreviousjob.<br/><br/>Transportation:fullypaid<br/>Variousinsurances:fullycovered","3":"Five-dayworkweek,Annualleave,Statutoryholiday,Adjustedholiday"},"jobDo":{"1":"Conductinginterviewsrelatedtoclientproblems","2":"Marketingresearchandanalysis","3":"Proposingideasforsolvingproblems,carryingoutplanningforexecutionofsolutions","4":"Proposingadvertisingstrategy","5":"Proposinganddirectingadvertising","6":"Proposingprojectstoclients"},"jobSkillTtl":{"1":"Basic","2":"Requirements","3":"EntryConditions"},"jobBasicSkills":{"1":"EducationalHistory/Genderunnecessary","2":"Likesmakingthings","3":"Showsgreatdesiretotakeinnewtechnologies","4":"Workswithpassion"},"jobRequiredSkills":{"1":"Experienceasastrategicplanner(orequivalent)","2":"Proficientinmarketingresearchandanalysis,andcapableoftakingtheleadinplanningadvertisingstrategies.","3":"BasicPCskillsforbusinesssuchasExcelandWord","4":"Basicbusinessmanners"},"jobEntrySkills":{"1":"Workexperienceatagenciesorcreativeagencies","2":"Highcommunicationskills","3":"Cheerful,flexible,andhighlyresponsive","4":"CapableofusingAdobesoftware","5":"Knowsasecondlanguage","6":"Deepknowledgeinthedigitaldomain"}}}'), delete t.options._Ctor
            }
        },
        381: function (t, e, n) {
            "use strict";
            var o = n(335);
            n.n(o).a
        },
        382: function (t, e, n) {
            (e = n(12)(!1)).push([t.i, "", ""]), t.exports = e
        },
        383: function (t, e, n) {
            "use strict";
            var o = n(336),
                l = n.n(o);
            e.default = l.a
        },
        407: function (t, e, n) {
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
                        var t = this.$t.bind(this);
                        return {
                            title: t("title"),
                            description: "ja" === this.$i18n.locale ? "Helixes Co.，Ltd.是一家使用创意解决方案来解决问题的总体计划公司。 我们计划和管理各种不受框架约束的事物，例如广告制作，品牌和数字产品开发以及艺术家管理。" : "Helixes Inc. is a planning company uses creativity to solve problems. We integrate strategy, creativity and experience to build brands.",
                            className: "careers-details",
                            headerTitle: "Strategic Planner",
                            headerSubTitle: "Beijing",
                            jobsEmail: "",
                            isMoreClicked: !1,
                            helixWave: null,
                            jobDoLists: [{
                                txt: t("jobDo.1")
                            }, {
                                txt: t("jobDo.2")
                            }, {
                                txt: t("jobDo.3")
                            }, {
                                txt: t("jobDo.4")
                            }, {
                                txt: t("jobDo.5")
                            }, {
                                txt: t("jobDo.6")
                            }],
                            jobBasicSkills: [{
                                txt: t("jobBasicSkills.1")
                            }, {
                                txt: t("jobBasicSkills.2")
                            }, {
                                txt: t("jobBasicSkills.3")
                            }, {
                                txt: t("jobBasicSkills.4")
                            }],
                            jobRequiredSkills: [{
                                txt: t("jobRequiredSkills.1")
                            }, {
                                txt: t("jobRequiredSkills.2")
                            }, {
                                txt: t("jobRequiredSkills.3")
                            }, {
                                txt: t("jobRequiredSkills.4")
                            }],
                            jobEntrySkills: [{
                                txt: t("jobEntrySkills.1")
                            }, {
                                txt: t("jobEntrySkills.2")
                            }, {
                                txt: t("jobEntrySkills.3")
                            }, {
                                txt: t("jobEntrySkills.4")
                            }, {
                                txt: t("jobEntrySkills.5")
                            }, {
                                txt: t("jobEntrySkills.6")
                            }]
                        }
                    },
                    head: function () {
                        return {
                            title: this.title,
                            titleTemplate: "%s - Helixes",
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
                            t.setData(), $g.fn.utility.updateViewType(), $g.fn.utility.staggerElement(".subpage-hero-sub-ttl"), $g.fn.utility.staggerElement(".subpage-hero-ttl"), t.$eventHub.$emit("helixSetState", !1), t.helixWave = new r.a($g.configs.helixWaveSettings()), t.setMoreOutlineHeight(), observer.init($g.configs.observerSettings), t.loaded && t.init("default"), t.$eventHub.$on("onScroll", t.onScroll), t.$eventHub.$on("onResize", t.onResize)
                        }))
                    },
                    beforeDestroy: function () {
                        observer.destroy(), this.helixWave.destroy(), this.$eventHub.$off("onScroll", this.onScroll), this.$eventHub.$off("onResize", this.onResize)
                    },
                    methods: {
                        setData: function () {
                            this.jobsEmail = $g.configs.emails.jobs
                        },
                        init: function (t) {
                            var e = this;
                            switch (t) {
                                case "first":
                                    $g.fn.utility.staggerAnimation({
                                        el: ".m-subpage-hero .l-relative",
                                        delay: .85
                                    }), this.$eventHub.$emit("glInit"), this.$eventHub.$emit("glTick"), this.$eventHub.$emit("helixSetDefault"), this.$eventHub.$emit("helixSetState", !1), this.$eventHub.$emit("helixStop"), this.$refs.white && this.$refs.white.classList.add("is-white"), requestTimeout((function () {
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
                        setMoreOutlineHeight: function (t) {
                            var e = this.$refs.moreOutline,
                                n = e.getBoundingClientRect().height;
                            e.setAttribute("data-height", n), e.style.height = "0px"
                        },
                        openMoreOutline: function (t) {
                            if (!this.isMoreClicked) {
                                this.isMoreClicked = !0;
                                var e = this.$refs.moreOutline,
                                    n = e.getAttribute("data-height"),
                                    o = this.$refs.moreOutlineBtn;
                                gsap.to(o, {
                                    duration: .65,
                                    autoAlpha: 0,
                                    ease: "power1.out"
                                }), gsap.to(e, {
                                    duration: .8,
                                    height: n,
                                    ease: "power2.inOut",
                                    clearProps: "height",
                                    onComplete: function () {
                                        $g.fn.utility.setFooterTop(), fakeScroll.isActive && fakeScroll.update()
                                    }
                                })
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
                d = (n(381), n(8)),
                v = n(383),
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
                        staticClass: "back-to-link"
                    }, [n("nuxt-link", {
                        staticClass: "back-to",
                        attrs: {
                            to: t.localePath("careers"),
                            "data-ma-hover": "fixed-link-border-light-gray",
                            "data-ma-fixed": ""
                        }
                    }, [n("span", {
                        staticClass: "arrow"
                    }, [n("svg", {
                        staticClass: "arrow-back",
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
                        staticClass: "careers-details-description"
                    }, [n("p", {
                        staticClass: "txt",
                        domProps: {
                            innerHTML: t._s(t.$t("jobDescription"))
                        }
                    }), t._v(" "), n("div", {
                        staticClass: "apply-btn-wrap"
                    }, [n("div", {
                        staticClass: "ui-scroll-down",
                        attrs: {
                            "data-ma-hover": "fixed-link-small",
                            "data-ma-fixed": ""
                        },
                        on: {
                            click: function (e) {
                                return t.scrollToElement({
                                    id: "scroll-to"
                                })
                            }
                        }
                    }, [n("span", {
                        staticClass: "txt",
                        attrs: {
                            "data-txt": "Apply this job"
                        }
                    }, [t._v("Apply this job")]), t._v(" "), n("span", {
                        staticClass: "point",
                        attrs: {
                            "data-ma-fixed-target": ""
                        }
                    })])])]), t._v(" "), n("div", {
                        staticClass: "m-subpage-child-content"
                    }, [t._m(0), t._v(" "), n("div", {
                        staticClass: "content-body"
                    }, [n("ul", {
                        staticClass: "m-outline-lists"
                    }, [n("li", {
                        staticClass: "outline-list"
                    }, [n("h5", {
                        staticClass: "ui-line-ttl"
                    }, [t._v(t._s(t.$t("jobOutlineTtl.1")))]), t._v(" "), n("p", {
                        staticClass: "txt",
                        domProps: {
                            innerHTML: t._s(t.$t("jobOutlineTxt.1"))
                        }
                    })]), t._v(" "), n("li", {
                        staticClass: "outline-list"
                    }, [n("h5", {
                        staticClass: "ui-line-ttl"
                    }, [t._v(t._s(t.$t("jobOutlineTtl.2")))]), t._v(" "), n("p", {
                        staticClass: "txt",
                        domProps: {
                            innerHTML: t._s(t.$t("jobOutlineTxt.2"))
                        }
                    })]), t._v(" "), n("li", {
                        staticClass: "outline-list"
                    }, [n("h5", {
                        staticClass: "ui-line-ttl"
                    }, [t._v(t._s(t.$t("jobOutlineTtl.3")))]), t._v(" "), n("p", {
                        staticClass: "txt",
                        domProps: {
                            innerHTML: t._s(t.$t("jobOutlineTxt.3"))
                        }
                    })])]), t._v(" "), n("div", {
                        ref: "moreOutlineBtn",
                        staticClass: "more-outline-btn-wrap"
                    }, [n("div", {
                        staticClass: "more-btn | ui-link",
                        attrs: {
                            "data-ma-hover": "plus-link"
                        },
                        on: {
                            click: function (e) {
                                return t.openMoreOutline(e)
                            }
                        }
                    }, [n("span", {
                        staticClass: "txt",
                        attrs: {
                            "data-txt": "More"
                        }
                    }, [t._v("More")]), t._v(" "), n("span", {
                        staticClass: "line"
                    })])]), t._v(" "), n("div", {
                        ref: "moreOutline",
                        staticClass: "more-outline-wrap"
                    }, [n("div", {
                        staticClass: "more-outline"
                    }, [n("h5", {
                        staticClass: "ui-line-ttl"
                    }, [t._v(t._s(t.$t("jobMoreOutlineLabel")))]), t._v(" "), n("div", {
                        staticClass: "row"
                    }, [n("div", {
                        staticClass: "left"
                    }, [t._v(t._s(t.$t("jobMoreOutlineTtl.1")))]), t._v(" "), n("div", {
                        staticClass: "right",
                        domProps: {
                            innerHTML: t._s(t.$t("jobMoreOutlineTxt.1"))
                        }
                    })]), t._v(" "), n("div", {
                        staticClass: "row"
                    }, [n("div", {
                        staticClass: "left"
                    }, [t._v(t._s(t.$t("jobMoreOutlineTtl.2")))]), t._v(" "), n("div", {
                        staticClass: "right",
                        domProps: {
                            innerHTML: t._s(t.$t("jobMoreOutlineTxt.2"))
                        }
                    })]), t._v(" "), n("div", {
                        staticClass: "row"
                    }, [n("div", {
                        staticClass: "left"
                    }, [t._v(t._s(t.$t("jobMoreOutlineTtl.3")))]), t._v(" "), n("div", {
                        staticClass: "right",
                        domProps: {
                            innerHTML: t._s(t.$t("jobMoreOutlineTxt.3"))
                        }
                    })])])])])]), t._v(" "), n("div", {
                        staticClass: "m-subpage-child-content"
                    }, [t._m(1), t._v(" "), n("div", {
                        staticClass: "content-body"
                    }, [n("ol", {
                        staticClass: "m-do-lists"
                    }, t._l(t.jobDoLists, (function (e, o) {
                        return n("li", {
                            staticClass: "do-list"
                        }, [n("p", {
                            staticClass: "txt",
                            domProps: {
                                innerHTML: t._s(e.txt)
                            }
                        })])
                    })), 0)])]), t._v(" "), n("div", {
                        staticClass: "m-subpage-child-content"
                    }, [t._m(2), t._v(" "), n("div", {
                        staticClass: "content-body"
                    }, [n("div", {
                        staticClass: "skill-lists-wrap"
                    }, [n("h5", {
                        staticClass: "ui-line-ttl"
                    }, [t._v(t._s(t.$t("jobSkillTtl.1")))]), t._v(" "), n("ul", {
                        staticClass: "m-skill-lists"
                    }, t._l(t.jobBasicSkills, (function (e, o) {
                        return n("li", {
                            staticClass: "skill-list"
                        }, [n("p", {
                            staticClass: "txt",
                            domProps: {
                                innerHTML: t._s(e.txt)
                            }
                        })])
                    })), 0)]), t._v(" "), n("div", {
                        staticClass: "skill-lists-wrap"
                    }, [n("h5", {
                        staticClass: "ui-line-ttl"
                    }, [t._v(t._s(t.$t("jobSkillTtl.2")))]), t._v(" "), n("ul", {
                        staticClass: "m-skill-lists"
                    }, t._l(t.jobRequiredSkills, (function (e, o) {
                        return n("li", {
                            staticClass: "skill-list"
                        }, [n("p", {
                            staticClass: "txt",
                            domProps: {
                                innerHTML: t._s(e.txt)
                            }
                        })])
                    })), 0)]), t._v(" "), n("div", {
                        staticClass: "skill-lists-wrap"
                    }, [n("h5", {
                        staticClass: "ui-line-ttl"
                    }, [t._v(t._s(t.$t("jobSkillTtl.3")))]), t._v(" "), n("ul", {
                        staticClass: "m-skill-lists"
                    }, t._l(t.jobEntrySkills, (function (e, o) {
                        return n("li", {
                            staticClass: "skill-list"
                        }, [n("p", {
                            staticClass: "txt",
                            domProps: {
                                innerHTML: t._s(e.txt)
                            }
                        })])
                    })), 0)])])])])])]), t._v(" "), n("section", {
                        staticClass: "m-subpage-link",
                        attrs: {
                            id: "scroll-to",
                            "data-fs-section": ""
                        }
                    }, [n("div", {
                        staticClass: "subpage-link-inner"
                    }, [n("div", {
                        staticClass: "l-relative | no-link"
                    }, [t._m(3), t._v(" "), n("div", {
                        staticClass: "ttl"
                    }, [n("span", {
                        staticClass: "txt-wrap"
                    }, [n("div", {
                        ref: "emailContact",
                        staticClass: "m-email-copy",
                        attrs: {
                            "data-email-to": t._f("email")(t.jobsEmail)
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
                            href: t._f("email")("mailto:" + t.jobsEmail)
                        }
                    }, [n("span", {
                        staticClass: "txt | active"
                    }, [t._v(t._s(t._f("email")(t.jobsEmail)))]), t._v(" "), n("span", {
                        staticClass: "txt | hover"
                    }, [t._v("Copy to clipboard")]), t._v(" "), n("span", {
                        staticClass: "txt | done"
                    }, [t._v("E-mail copied")])])])])])])])]), t._v(" "), t._m(4)])
                }), [function () {
                    var t = this.$createElement,
                        e = this._self._c || t;
                    return e("div", {
                        staticClass: "content-label"
                    }, [e("h4", {
                        staticClass: "ttl"
                    }, [this._v("Outline")])])
                }, function () {
                    var t = this.$createElement,
                        e = this._self._c || t;
                    return e("div", {
                        staticClass: "content-label"
                    }, [e("h4", {
                        staticClass: "ttl"
                    }, [e("span", {
                        staticClass: "row"
                    }, [this._v("What")]), this._v(" "), e("span", {
                        staticClass: "row"
                    }, [this._v("you’ll do")])])])
                }, function () {
                    var t = this.$createElement,
                        e = this._self._c || t;
                    return e("div", {
                        staticClass: "content-label"
                    }, [e("h4", {
                        staticClass: "ttl"
                    }, [e("span", {
                        staticClass: "row"
                    }, [this._v("Basic &")]), this._v(" "), e("span", {
                        staticClass: "row"
                    }, [this._v("Skills")])])])
                }, function () {
                    var t = this.$createElement,
                        e = this._self._c || t;
                    return e("div", {
                        staticClass: "sub-ttl ui-link"
                    }, [e("span", {
                        staticClass: "txt",
                        attrs: {
                            "data-txt": "Apply now"
                        }
                    }, [this._v("Apply now")]), this._v(" "), e("span", {
                        staticClass: "line"
                    })])
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
                }], !1, null, "953fccae", null);
            "function" == typeof v.default && Object(v.default)(component);
            e.default = component.exports
        }
    }
]);
