(window.webpackJsonp = window.webpackJsonp || []).push([
    [16], {
        321: function (t, e, n) {
            var content = n(361);
            "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, n(13).default)("e83a8212", content, !0, {
                sourceMap: !1
            })
        },
        322: function (t, e) {
            t.exports = function (t) {
                t.options.__i18n = t.options.__i18n || [], t.options.__i18n.push('{"ja":{"title":"News"},"en":{"title":"News"}}'), delete t.options._Ctor
            }
        },
        360: function (t, e, n) {
            "use strict";
            var r = n(321);
            n.n(r).a
        },
        361: function (t, e, n) {
            (e = n(12)(!1)).push([t.i, "", ""]), t.exports = e
        },
        362: function (t, e, n) {
            "use strict";
            var r = n(322),
                o = n.n(r);
            e.default = o.a
        },
        414: function (t, e, n) {
            "use strict";
            n.r(e);
            n(23), n(14), n(19), n(32);
            var r = n(4),
                o = (n(11), n(6), n(95), n(35), n(5)),
                l = n(9);

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
            var d, f, h = {
                    fetch: (f = Object(o.a)(regeneratorRuntime.mark((function t(e) {
                        var n;
                        return regeneratorRuntime.wrap((function (t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    if ((n = e.store).getters.posts.lists.length) {
                                        t.next = 11;
                                        break
                                    }
                                    return t.t0 = Promise, t.t1 = n, t.next = 6, n.app.$api.getPostsPerPage({
                                        lang: n.$i18n.locale,
                                        page: 1,
                                        per_page: 10
                                    });
                                case 6:
                                    t.t2 = t.sent, t.t3 = {
                                        type: "posts",
                                        posts: t.t2
                                    }, t.t4 = t.t1.dispatch.call(t.t1, "setPostsPerPage", t.t3), t.t5 = [t.t4], t.t0.all.call(t.t0, t.t5);
                                case 11:
                                case "end":
                                    return t.stop()
                            }
                        }), t)
                    }))), function (t) {
                        return f.apply(this, arguments)
                    }),
                    asyncData: (d = Object(o.a)(regeneratorRuntime.mark((function t(e) {
                        var n, r, o;
                        return regeneratorRuntime.wrap((function (t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return n = e.app, r = e.store, e.payload, t.next = 3, n.$api.getTotalPosts({
                                        lang: r.$i18n.locale,
                                        per_page: 10
                                    });
                                case 3:
                                    return o = t.sent, t.abrupt("return", {
                                        total: o,
                                        perPage: 10
                                    });
                                case 5:
                                case "end":
                                    return t.stop()
                            }
                        }), t)
                    }))), function (t) {
                        return d.apply(this, arguments)
                    }),
                    data: function () {
                        return {
                            title: this.$t.bind(this)("title"),
                            description: "ja" === this.$i18n.locale ? "Helixes Co.，Ltd.是一家使用创意解决方案来解决问题的总体计划公司。 我们计划和管理各种不受框架约束的事物，例如广告制作，品牌和数字产品开发以及艺术家管理。" : "Helixes Inc. is a planning company uses creativity to solve problems. We integrate strategy, creativity and experience to build brands.",
                            className: "news",
                            headerTitle: "News",
                            headerSubTitle: "Our latest news",
                            total: null,
                            perPage: null,
                            posts: this.$store.getters.posts.lists,
                            currentPage: this.$store.getters.posts.current,
                            isCatHovered: !1,
                            isMoreAnimating: !1
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
                                Object(r.a)(t, e, source[e])
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
                            $g.fn.utility.updateViewType(), $g.fn.utility.staggerElement(".subpage-hero-sub-ttl"), $g.fn.utility.staggerElement(".subpage-hero-ttl"), t.$eventHub.$emit("helixSetState", !0), detect.webp && t.replaceWebP(), observer.init($g.configs.observerSettings), t.loaded && t.init("default"), t.$eventHub.$on("onScroll", t.onScroll), t.$eventHub.$on("onResize", t.onResize)
                        }))
                    },
                    beforeDestroy: function () {
                        observer.destroy(), this.$eventHub.$off("onScroll", this.onScroll), this.$eventHub.$off("onResize", this.onResize)
                    },
                    methods: {
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
                        replaceWebP: function () {
                            $g.el(".news-article-img-wrap").forEach((function (t, e) {
                                var n = t.getAttribute("data-gl-src"),
                                    r = "".concat(n, ".webp");
                                t.setAttribute("data-gl-src", r)
                            }))
                        },
                        more: function (t) {
                            var e = this;
                            this.isMoreAnimating || (this.isMoreAnimating = !0, requestTimeout((function () {
                                var t = $g.el(".more-mask-rect"),
                                    n = function () {
                                        e.$store.app.$api.getMorePosts({
                                            page: e.currentPage,
                                            per_page: 10,
                                            callback: function (n) {
                                                e.$store.dispatch("setCurrentPage", {
                                                    type: "posts",
                                                    current: e.currentPage
                                                }), n.forEach((function (r, o) {
                                                    e.$store.dispatch("setPostsPerPage", {
                                                        type: "posts",
                                                        posts: r
                                                    }), n.length === o + 1 && (requestTimeout((function () {
                                                        e.$eventHub.$emit("glReInit"), e.$eventHub.$emit("glTick")
                                                    }), 0), function (n) {
                                                        requestTimeout((function () {
                                                            gsap.fromTo(t, {
                                                                y: "0%"
                                                            }, {
                                                                duration: .35,
                                                                y: "-100%",
                                                                autoAlpha: 0,
                                                                clearProps: "all",
                                                                ease: "power0.out",
                                                                delay: .1,
                                                                onStart: function () {
                                                                    fakeScroll.update(), $g.fn.utility.setFooterTop(), $g.pointer.update()
                                                                },
                                                                onComplete: function () {
                                                                    e.isMoreAnimating = !1
                                                                }
                                                            })
                                                        }), n)
                                                    }(1))
                                                }))
                                            }
                                        })
                                    };
                                gsap.fromTo(t, {
                                    duration: .35,
                                    y: "100%",
                                    autoAlpha: 0
                                }, {
                                    y: "0%",
                                    autoAlpha: 1,
                                    ease: "power0.in",
                                    onComplete: function () {
                                        e.currentPage++, e.currentPage <= e.total.pages && n()
                                    }
                                })
                            }), 1))
                        },
                        catHoverIn: function () {
                            this.isCatHovered = !0
                        },
                        catHoverOut: function () {
                            this.isCatHovered = !1
                        },
                        glHoverIn: function (t) {
                            var e = t.isChild,
                                n = t.el,
                                r = t.evt;
                            if (this.user.desktop) {
                                var o = "self" === n ? r.target : e ? r.target.querySelector(n) : document.querySelector(n);
                                this.$eventHub.$emit("glHoverIn", o)
                            }
                        },
                        glHoverOut: function (t) {
                            var e = t.isChild,
                                n = t.el,
                                r = t.evt;
                            if (this.user.desktop) {
                                var o = "self" === n ? r.target : e ? r.target.querySelector(n) : document.querySelector(n);
                                this.$eventHub.$emit("glHoverOut", o)
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
                            this.isCatHovered || this.$router.push({
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
                m = (n(360), n(8)),
                v = n(362),
                component = Object(m.a)(h, (function () {
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
                        staticClass: "subpage-hero-inner"
                    }, [n("div", {
                        staticClass: "subpage-hero-body | l-relative"
                    }, [n("h4", {
                        staticClass: "subpage-hero-sub-ttl"
                    }, [t._v(t._s(t.headerSubTitle))]), t._v(" "), n("h1", {
                        staticClass: "subpage-hero-ttl"
                    }, [t._v(t._s(t.headerTitle))])])])])]), t._v(" "), n("section", {
                        staticClass: "m-news-articles",
                        attrs: {
                            "data-fs-section": ""
                        }
                    }, [n("ul", {
                        ref: "newsLists",
                        staticClass: "news-lists"
                    }, t._l(t.posts, (function (e, r) {
                        return "publish" === e.status ? n("li", {
                            staticClass: "news-list"
                        }, [n("article", {
                            staticClass: "news-article",
                            attrs: {
                                "data-ma-hover": "page-link"
                            },
                            on: {
                                click: function (n) {
                                    t.goTo(t.localePath({
                                        path: "/news/" + e.slug
                                    }))
                                },
                                mouseenter: function (e) {
                                    return t.glHoverIn({
                                        isChild: !0,
                                        el: ".news-article-img-wrap",
                                        evt: e
                                    })
                                },
                                mouseleave: function (e) {
                                    return t.glHoverOut({
                                        isChild: !0,
                                        el: ".news-article-img-wrap",
                                        evt: e
                                    })
                                }
                            }
                        }, [n("div", {
                            staticClass: "news-article-header"
                        }, [n("div", {
                            staticClass: "news-article-header-inner"
                        }, [n("div", {
                            staticClass: "meta"
                        }, [n("span", {
                            staticClass: "category"
                        }, [n("nuxt-link", {
                            staticClass: "link",
                            attrs: {
                                to: t.localePath({
                                    path: "/news/category/" + e.category.slug
                                })
                            },
                            nativeOn: {
                                mouseenter: function (e) {
                                    return t.catHoverIn(e)
                                },
                                mouseleave: function (e) {
                                    return t.catHoverOut(e)
                                }
                            }
                        }, [t._v("\n\t\t\t\t\t\t\t\t\t\t" + t._s(e.category.name) + "\n\t\t\t\t\t\t\t\t\t")])], 1), t._v(" "), n("span", {
                            staticClass: "date"
                        }, [t._v(t._s(t._f("date")(e.date)))])]), t._v(" "), n("h3", {
                            staticClass: "ttl"
                        }, [t._v(t._s(t._f("length")(e.title, 60)))]), t._v(" "), t._m(0, !0)])]), t._v(" "), n("div", {
                            staticClass: "news-article-thumb-wrap"
                        }, [n("div", {
                            staticClass: "news-article-thumb-ratio"
                        }, [n("div", {
                            staticClass: "news-article-thumb"
                        }, [n("div", {
                            staticClass: "news-article-img-wrap",
                            attrs: {
                                "data-preload-image": "",
                                "data-fs-inview": "",
                                "data-gl-dom": "",
                                "data-gl-type": "image",
                                "data-gl-src": e.thumb.full.src,
                                "data-gl-texture": "same",
                                "data-gl-ratio": e.thumb.full.width + ":" + e.thumb.full.height,
                                "data-gl-vs": "plane",
                                "data-gl-fs": "link"
                            }
                        }, [n("img", {
                            staticClass: "news-article-img",
                            attrs: {
                                "data-gl-source": "",
                                crossorigin: "anonymous"
                            }
                        })])])])])])]) : t._e()
                    })), 0)]), t._v(" "), n("div", {
                        staticClass: "m-news-more | fill-border",
                        attrs: {
                            "data-fs-section": ""
                        }
                    }, [n("div", {
                        staticClass: "news-more-inner"
                    }, [t.currentPage >= t.total.pages ? t._e() : n("div", {
                        ref: "more",
                        staticClass: "load-more-btn",
                        attrs: {
                            "data-ma-hover": "plus-link"
                        },
                        on: {
                            click: t.more
                        }
                    }, [n("span", {
                        staticClass: "txt"
                    }, [t._v("Load more")])])])]), t._v(" "), t._m(1), t._v(" "), t.isMoreAnimating ? n("div", {
                        staticClass: "m-news-more-mask"
                    }, [n("div", {
                        ref: "moreMask",
                        staticClass: "more-mask-rect"
                    })]) : t._e()])
                }), [function () {
                    var t = this.$createElement,
                        e = this._self._c || t;
                    return e("div", {
                        staticClass: "ui-link"
                    }, [e("span", {
                        staticClass: "txt",
                        attrs: {
                            "data-txt": "Read more"
                        }
                    }, [this._v("Read more")]), this._v(" "), e("span", {
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
                }], !1, null, "7cc7f4f3", null);
            "function" == typeof v.default && Object(v.default)(component);
            e.default = component.exports
        }
    }
]);
