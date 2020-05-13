(window.webpackJsonp = window.webpackJsonp || []).push([
    [20], {
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
        323: function (t, e, o) {
            var content = o(364);
            "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, o(13).default)("326853be", content, !0, {
                sourceMap: !1
            })
        },
        324: function (t, e) {
            t.exports = function (t) {
                t.options.__i18n = t.options.__i18n || [], t.options.__i18n.push('{"ja":{"title":"Solutions","mission":{"1":"螺旋","2":"永不经过同一位置","3":"无限期上升的结构","4":"我们的使命是不断更新我们产生的创意，并创建可以与品牌和社会一起前进的业务。"},"introduction":"我们的优势是拥有通过创造性工作获得的知识，并拥有可以利用其知识进行运作的业务实体。 它提供了解决问题的途径，只有 Helixies 才能做到，同时保持输出的尊严和技能。","creative":"我们将使用最适合您目的的广告素材（例如图形，视频和数字广告）为您的品牌创建新故事。","services":"利用通过创造性工作获得的知识，我们正在不同领域发展多种业务。"},"en":{"title":"Solutions","mission":{"1":"Spiral","2":"","3":"","4":"Our missions are to continuously update production of creative, like the spiral structure which keeps going up infinitely without passing the same position twice, and to create businesses which can advance brands and society further."},"introduction":"Our strength is our business which operates by utilizing the knowledge acquired through creative works. We provide the path to solving problems which only Helixes can do and our output is dignified and shows strong technique.","creative":"We spin new stories for brands through ideal creative for the purpose such as graphics, images, digital and so on.","services":"We develop multiple businesses in various fields by utilizing knowledge acquired through creative works."}}'), delete t.options._Ctor
            }
        },
        363: function (t, e, o) {
            "use strict";
            var n = o(323);
            o.n(n).a
        },
        364: function (t, e, o) {
            (e = o(12)(!1)).push([t.i, '.p-solutions[data-v-7ee80dc4]{z-index:11}.p-solutions .fill-rect[data-v-7ee80dc4]{position:absolute;top:calc(100vh - 8.33333vw);top:calc(var(--vh)*100 - 8.33333vw);right:0;width:41.04167vw;background:#fff;z-index:-1;pointer-events:none}.p-solutions .fill-rect[data-v-7ee80dc4],.p-solutions .solutions-mission[data-v-7ee80dc4]{height:100vh;height:calc(var(--vh)*100);max-height:1200px}.p-solutions .solutions-mission[data-v-7ee80dc4]{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center;position:relative;width:100%;z-index:11}.p-solutions .solutions-mission .solutions-mission-image[data-v-7ee80dc4]{position:absolute;top:0;right:0;width:41.04167vw;height:100%}.p-solutions .solutions-mission .solutions-mission-image .ui-play-btn[data-v-7ee80dc4]{bottom:-.5px;right:0}.p-solutions .solutions-mission .solutions-mission-video-thumb[data-v-7ee80dc4],.p-solutions .solutions-mission .solutions-mission-video-wrap[data-v-7ee80dc4]{position:relative;width:100%;height:100%}.p-solutions .solutions-mission .solutions-mission-video[data-v-7ee80dc4]{width:100%;height:100%;opacity:0;visibility:hidden;-o-object-fit:cover;object-fit:cover}.p-solutions .solutions-mission .solutions-mission-txts[data-v-7ee80dc4]{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center;width:58.95833vw;height:100%;padding:0 17.29167vw;background:#fff}.p-solutions .solutions-mission .solutions-mission-txts-body[data-v-7ee80dc4]{position:relative}.p-solutions .solutions-mission .solutions-mission-txts-body .helix-wave[data-v-7ee80dc4]{margin:15px 0}.p-solutions .solutions-mission .solutions-mission-txts-body .ttl[data-v-7ee80dc4]{font-size:calc(3.2rem + (1000vw - 6000px)/1000);font-weight:700;margin-bottom:.75em;letter-spacing:0;white-space:nowrap}.p-solutions .solutions-mission .solutions-mission-txts-body .ttl .dash[data-v-7ee80dc4]{font-weight:400}.p-solutions .solutions-mission .solutions-mission-txts-body .ttl .ja[data-v-7ee80dc4]{letter-spacing:.075em}.p-solutions .solutions-mission .solutions-mission-txts-body .sub-ttl[data-v-7ee80dc4]{font-size:calc(1.4rem + (600vw - 3600px)/1000);font-weight:700}.p-solutions .solutions-mission .solutions-mission-txts-body .sub-ttl .row[data-v-7ee80dc4]{display:inline-block}.p-solutions .solutions-mission .solutions-mission-txts-body .sub-ttl .row[data-v-7ee80dc4]:not(:last-child){margin-bottom:.75em}.p-solutions .solutions-mission .solutions-mission-txts-body .en[data-v-7ee80dc4]{font-family:HK Nova,sans-serif}.p-solutions .solutions-mission .solutions-mission-txts-body .gothic[data-v-7ee80dc4]{font-family:Hiragino Kaku Gothic ProN,sans-serif}.p-solutions .solutions-mission .solutions-mission-txts-body .txt[data-v-7ee80dc4]{max-width:400px;font-size:calc(1.4rem + (400vw - 2400px)/1000);line-height:2}.p-solutions .solutions-mission .ui-play-btn[data-v-7ee80dc4]{-webkit-transition:opacity .35s cubic-bezier(.39,.575,.565,1) 0s,visibility .35s cubic-bezier(.39,.575,.565,1) 0s;transition:opacity .35s cubic-bezier(.39,.575,.565,1) 0s,visibility .35s cubic-bezier(.39,.575,.565,1) 0s}.p-solutions .solutions-mission .ui-play-btn[data-v-7ee80dc4]:after{content:"";position:absolute;top:0;left:0;width:100%;height:100%;background:#ff4e50;z-index:-1;-webkit-transform-origin:50% 100% 0;transform-origin:50% 100% 0;-webkit-transform:scaleY(0);transform:scaleY(0);-webkit-transition:-webkit-transform .65s cubic-bezier(.77,0,.175,1) 0s;transition:-webkit-transform .65s cubic-bezier(.77,0,.175,1) 0s;transition:transform .65s cubic-bezier(.77,0,.175,1) 0s;transition:transform .65s cubic-bezier(.77,0,.175,1) 0s,-webkit-transform .65s cubic-bezier(.77,0,.175,1) 0s}.p-solutions .solutions-mission .ui-play-btn .txt[data-v-7ee80dc4]{position:relative;display:block;width:100%;text-align:center;line-height:1;overflow:hidden}.p-solutions .solutions-mission .ui-play-btn .front[data-v-7ee80dc4]{position:relative}.p-solutions .solutions-mission .ui-play-btn .back[data-v-7ee80dc4],.p-solutions .solutions-mission .ui-play-btn .front[data-v-7ee80dc4]{display:block;padding:2px 0;width:100%;white-space:nowrap;-webkit-transition:-webkit-transform .65s cubic-bezier(.77,0,.175,1) 0s;transition:-webkit-transform .65s cubic-bezier(.77,0,.175,1) 0s;transition:transform .65s cubic-bezier(.77,0,.175,1) 0s;transition:transform .65s cubic-bezier(.77,0,.175,1) 0s,-webkit-transform .65s cubic-bezier(.77,0,.175,1) 0s}.p-solutions .solutions-mission .ui-play-btn .back[data-v-7ee80dc4]{position:absolute;color:#fff}.p-solutions .solutions-mission .solutions-mission-image.is-playing .ui-play-btn[data-v-7ee80dc4]{opacity:0;visibility:hidden}.p-solutions .solutions-details[data-v-7ee80dc4]{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start;-ms-flex-line-pack:center;align-content:center;padding:12.5vw 0 16.66667vw;background:#fff}.p-solutions .solutions-details .solutions-details-left[data-v-7ee80dc4],.p-solutions .solutions-details .solutions-details-right[data-v-7ee80dc4]{width:50vw}.p-solutions .solutions-details .solutions-details-left .ttl[data-v-7ee80dc4],.p-solutions .solutions-details .solutions-details-right .ttl[data-v-7ee80dc4]{color:#a0a0a0;font-size:calc(1.5rem + (100vw - 600px)/1000);font-family:HK Nova,sans-serif;font-weight:400;letter-spacing:0;margin-bottom:2em}.p-solutions .solutions-details .solutions-details-left[data-v-7ee80dc4]{padding-left:17.29167vw;padding-right:4.79167vw}.p-solutions .solutions-details .solutions-details-creative[data-v-7ee80dc4]{margin-bottom:3em}.p-solutions .solutions-details .solutions-details-creative .lists[data-v-7ee80dc4]{position:relative}.p-solutions .solutions-details .solutions-details-creative .list[data-v-7ee80dc4]{font-size:calc(2rem + (2000vw - 12000px)/1000);font-family:HK Nova,sans-serif;letter-spacing:0;white-space:nowrap}.p-solutions .solutions-details .solutions-details-creative .list[data-v-7ee80dc4]:not(:last-child){margin-bottom:.5em}.p-solutions .solutions-details .solutions-details-services .lists[data-v-7ee80dc4]{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;pointer-events:none}.p-solutions .solutions-details .solutions-details-services .list[data-v-7ee80dc4]{display:inline-block;font-size:calc(2rem + (2000vw - 12000px)/1000);font-family:HK Nova,sans-serif;letter-spacing:0;white-space:nowrap;vertical-align:middle;line-height:1.5}.p-solutions .solutions-details .solutions-details-services .list[data-v-7ee80dc4]:not(:last-child):after{content:"";position:relative;display:inline-block;width:8px;height:8px;margin:0 6px 0 8px;background:#111;border-radius:50%;-webkit-transition:background .35s cubic-bezier(.39,.575,.565,1) .1s;transition:background .35s cubic-bezier(.39,.575,.565,1) .1s}.p-solutions .solutions-details .solutions-details-services .list a.ex-link[data-v-7ee80dc4]{display:inline-block;-webkit-transition:color .35s cubic-bezier(.39,.575,.565,1) .1s;transition:color .35s cubic-bezier(.39,.575,.565,1) .1s;pointer-events:auto}.p-solutions .solutions-details .solutions-details-right[data-v-7ee80dc4]{padding-left:8.95833vw;padding-right:17.29167vw}.p-solutions .solutions-details .solutions-details-intro>.txt[data-v-7ee80dc4]{max-width:320px;margin-top:-10px;font-size:calc(1.4rem + (400vw - 2400px)/1000);line-height:2;margin-bottom:2em}.p-solutions .m-solutions-method[data-v-7ee80dc4]{padding-bottom:12.5vw}.p-solutions .solutions-clients[data-v-7ee80dc4]{position:relative;width:100%;background:#010101;padding:12.5vw 0 8.33333vw}.p-solutions .solutions-clients .hgroup[data-v-7ee80dc4]{color:#fff;text-align:center;margin-bottom:4.16667vw}.p-solutions .solutions-clients .hgroup .sub-ttl[data-v-7ee80dc4]{color:#fff;font-size:calc(1.5rem + (100vw - 600px)/1000);font-family:HK Nova,sans-serif;font-weight:400;letter-spacing:0;margin-bottom:2.5em}.p-solutions .solutions-clients .hgroup .ttl[data-v-7ee80dc4]{font-size:calc(3.2rem + (3200vw - 19200px)/1000);font-family:HK Nova,sans-serif;font-weight:400;letter-spacing:0}.p-solutions .solutions-clients .hgroup .ttl .row[data-v-7ee80dc4]{display:block}.p-solutions .solutions-clients .hgroup .ttl .row[data-v-7ee80dc4]:not(:last-child){margin-bottom:.15em}.p-solutions .solutions-clients .solutions-clients-inner[data-v-7ee80dc4]{position:relative;width:100%;padding:0 8.95833vw}.p-solutions .solutions-clients .clients-lists[data-v-7ee80dc4]{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start;-ms-flex-line-pack:center;align-content:center;margin:0 auto}.p-solutions .solutions-clients .clients-list[data-v-7ee80dc4]{position:relative;width:33.3333%}.p-solutions .solutions-clients .clients-list-ratio[data-v-7ee80dc4]{padding-top:70%}.p-solutions .solutions-clients .clients-list-ratio .l-absolute[data-v-7ee80dc4]{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center;padding:0 4.16667vw}.p-solutions .solutions-clients .clients-logo[data-v-7ee80dc4]{position:relative;width:100%;max-width:180px;opacity:0;visibility:hidden;-webkit-transition:opacity 1s cubic-bezier(.39,.575,.565,1) 0s,visibility 1s cubic-bezier(.39,.575,.565,1) 0s;transition:opacity 1s cubic-bezier(.39,.575,.565,1) 0s,visibility 1s cubic-bezier(.39,.575,.565,1) 0s}.p-solutions .solutions-clients .clients-logo.is-active[data-v-7ee80dc4]{opacity:1;visibility:visible}.p-solutions .solutions-awards[data-v-7ee80dc4]{position:relative;width:100%;background:#fff;padding:14.58333vw 0 12.5vw}.p-solutions .solutions-awards .solutions-awards-inner[data-v-7ee80dc4]{position:relative;padding:0 17.29167vw}.p-solutions .solutions-awards .solutions-awards-body[data-v-7ee80dc4]{position:relative;max-width:1416px;margin:0 auto}.p-solutions .solutions-awards .hgroup[data-v-7ee80dc4]{position:relative;margin-bottom:8.33333vw}.p-solutions .solutions-awards .hgroup .ttl[data-v-7ee80dc4]{position:relative;margin-left:-.05em;font-size:calc(3.6rem + (4800vw - 28800px)/1000);font-family:HK Nova,sans-serif;letter-spacing:0}.p-solutions .solutions-awards .hgroup .ttl .row[data-v-7ee80dc4]{position:relative;display:block;white-space:nowrap}.p-solutions .solutions-awards .hgroup .ttl .row[data-v-7ee80dc4]:first-child{display:inline-block}.p-solutions .solutions-awards .hgroup .ttl .no[data-v-7ee80dc4]{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center;position:absolute;top:-20px;right:-60px;width:42px;height:42px;font-size:1.4rem;font-weight:700;background:#ff4e50;border-radius:50%}.p-solutions .solutions-awards .hgroup .ttl .no span[data-v-7ee80dc4]{color:#fff}.p-solutions .solutions-awards .awards-lists-wrap[data-v-7ee80dc4]{position:relative;width:100%;overflow:hidden}.p-solutions .solutions-awards .awards-lists-year[data-v-7ee80dc4]{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap}.p-solutions .solutions-awards .awards-lists-year[data-v-7ee80dc4]:not(:last-child){margin-bottom:4.16667vw}.p-solutions .solutions-awards .ui-line-ttl[data-v-7ee80dc4]{width:12.5vw}.p-solutions .solutions-awards .awards-lists[data-v-7ee80dc4]{position:relative;width:52.91667vw;border-top:1px solid #eee}.p-solutions .solutions-awards .awards-list[data-v-7ee80dc4]{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start;-ms-flex-line-pack:center;align-content:center;position:relative;padding:2em 4.16667vw;width:100%;line-height:1.5}.p-solutions .solutions-awards .awards-list[data-v-7ee80dc4]:not(:last-child){border-bottom:1px solid #eee}.p-solutions .solutions-awards .awards-list .ttl[data-v-7ee80dc4]{position:relative;width:20.83333vw;font-size:1.6rem;font-family:HK Nova,sans-serif;font-weight:500;letter-spacing:0;padding-right:4.16667vw}.p-solutions .solutions-awards .awards-list .awards[data-v-7ee80dc4]{position:relative;width:23.75vw;font-size:1.5rem;font-family:HK Grotesk Pro,sans-serif;font-weight:400;letter-spacing:0}.p-solutions .solutions-awards .awards-lists-more-btn-wrap[data-v-7ee80dc4]{position:relative;margin-top:2em;padding-left:16.66667vw;overflow:hidden}.p-solutions .solutions-awards .more-btn[data-v-7ee80dc4]{position:relative;cursor:pointer}.p-solutions .solutions-company-profile[data-v-7ee80dc4]{position:relative;width:100%;background:#010101;padding:calc(12.5vw - 15px) 0 12.5vw}.p-solutions .solutions-company-profile .company-profile-inner[data-v-7ee80dc4]{position:relative;padding:0 17.29167vw}.p-solutions .solutions-company-profile .company-profile-body[data-v-7ee80dc4]{position:relative;margin:0 auto;max-width:1416px}.p-solutions .solutions-company-profile .ttl[data-v-7ee80dc4]{color:#fff;font-size:calc(1.5rem + (100vw - 600px)/1000);font-family:HK Nova,sans-serif;font-weight:400;letter-spacing:0;margin-bottom:30px}.p-solutions .solutions-company-profile a.link[data-v-7ee80dc4]{position:relative;font-size:calc(3.2rem + (3200vw - 19200px)/1000);font-family:HK Nova,sans-serif;font-weight:400;letter-spacing:0;margin-bottom:30px}.p-solutions .solutions-company-profile a.link .txt[data-v-7ee80dc4]{position:relative;display:inline-block;padding:3px 0;color:transparent;overflow:hidden}.p-solutions .solutions-company-profile a.link .txt[data-v-7ee80dc4]:after,.p-solutions .solutions-company-profile a.link .txt[data-v-7ee80dc4]:before{content:attr(data-txt);display:inline-block;position:absolute;left:0;color:#fff;width:100%;height:100%;-webkit-transition:-webkit-transform .5s cubic-bezier(.165,.84,.44,1) 0s;transition:-webkit-transform .5s cubic-bezier(.165,.84,.44,1) 0s;transition:transform .5s cubic-bezier(.165,.84,.44,1) 0s;transition:transform .5s cubic-bezier(.165,.84,.44,1) 0s,-webkit-transform .5s cubic-bezier(.165,.84,.44,1) 0s}.p-solutions .solutions-company-profile a.link .txt[data-v-7ee80dc4]:before{top:0}.p-solutions .solutions-company-profile a.link .txt[data-v-7ee80dc4]:after{top:100%}[lang=en] .p-solutions .solutions-mission .solutions-mission-txts-body .ttl[data-v-7ee80dc4]{margin-bottom:.5em}[lang=en] .p-solutions .solutions-details .solutions-details-intro>.txt[data-v-7ee80dc4],[lang=en] .p-solutions .solutions-mission .solutions-mission-txts-body .txt[data-v-7ee80dc4]{font-weight:400;line-height:1.7;letter-spacing:.005em}.no-touch .p-solutions .solutions-mission .ui-play-btn[data-v-7ee80dc4]:hover:after{-webkit-transform:scale(1);transform:scale(1)}.no-touch .p-solutions .solutions-mission .ui-play-btn:hover .back[data-v-7ee80dc4],.no-touch .p-solutions .solutions-mission .ui-play-btn:hover .front[data-v-7ee80dc4]{-webkit-transform:translateY(-100%);transform:translateY(-100%)}.no-touch .p-solutions .solutions-details .solutions-details-services .lists:hover .list[data-v-7ee80dc4]:not(:last-child):after{background:#a0a0a0}.no-touch .p-solutions .solutions-details .solutions-details-services .lists:hover .list:not(:hover) a.ex-link[data-v-7ee80dc4]{color:#a0a0a0;-webkit-transition:color .35s cubic-bezier(.39,.575,.565,1) 0s;transition:color .35s cubic-bezier(.39,.575,.565,1) 0s}.no-touch .p-solutions .solutions-company-profile a.link:hover .txt[data-v-7ee80dc4]:after,.no-touch .p-solutions .solutions-company-profile a.link:hover .txt[data-v-7ee80dc4]:before{-webkit-transform:translateY(-100%);transform:translateY(-100%);-webkit-transition:-webkit-transform .5s cubic-bezier(.165,.84,.44,1) 0s;transition:-webkit-transform .5s cubic-bezier(.165,.84,.44,1) 0s;transition:transform .5s cubic-bezier(.165,.84,.44,1) 0s;transition:transform .5s cubic-bezier(.165,.84,.44,1) 0s,-webkit-transform .5s cubic-bezier(.165,.84,.44,1) 0s}@media only screen and (min-width:1920px){.p-solutions .solutions-mission .solutions-mission-txts-body .ttl[data-v-7ee80dc4]{font-size:4.52rem}.p-solutions .solutions-mission .solutions-mission-txts-body .sub-ttl[data-v-7ee80dc4]{font-size:2.192rem}.p-solutions .solutions-mission .solutions-mission-txts-body .txt[data-v-7ee80dc4]{font-size:1.928rem}.p-solutions .solutions-details .solutions-details-creative .list[data-v-7ee80dc4],.p-solutions .solutions-details .solutions-details-services .list[data-v-7ee80dc4]{font-size:4.64rem}.p-solutions .solutions-details .solutions-details-intro>.txt[data-v-7ee80dc4]{font-size:1.928rem}.p-solutions .solutions-clients .hgroup .ttl[data-v-7ee80dc4]{font-size:7.424rem}.p-solutions .solutions-awards .hgroup .ttl[data-v-7ee80dc4]{font-size:9.936rem}.p-solutions .solutions-company-profile .ttl[data-v-7ee80dc4]{font-size:1.632rem}.p-solutions .solutions-company-profile a.link[data-v-7ee80dc4]{font-size:7.424rem}.p-solutions .solutions-awards .awards-lists[data-v-7ee80dc4]{width:1016px}.p-solutions .solutions-awards .ui-line-ttl[data-v-7ee80dc4]{width:240px}.p-solutions .solutions-awards .awards-list .ttl[data-v-7ee80dc4]{width:400px}.p-solutions .solutions-awards .awards-list .awards[data-v-7ee80dc4]{width:456px}.p-solutions .solutions-details[data-v-7ee80dc4]{padding:240px 0 320px}.p-solutions .m-solutions-method[data-v-7ee80dc4]{padding-bottom:240px}.p-solutions .solutions-clients[data-v-7ee80dc4]{padding:240px 0 160px}.p-solutions .solutions-awards[data-v-7ee80dc4]{padding:280px 0 240px}.p-solutions .solutions-awards .awards-lists-year[data-v-7ee80dc4]:not(:last-child){margin-bottom:80px}.p-solutions .solutions-awards .awards-list[data-v-7ee80dc4]{padding:2em 80px}.p-solutions .solutions-awards .awards-lists-more-btn-wrap[data-v-7ee80dc4]{padding-left:320px}.p-solutions .solutions-company-profile[data-v-7ee80dc4]{padding:220px 0 240px}}@media only screen and (max-height:640px){.p-solutions .fill-rect[data-v-7ee80dc4]{top:540px}}@media only screen and (max-width:680px){.p-solutions .fill-rect[data-v-7ee80dc4]{top:420px;width:100%;height:calc(var(--vh)*100*0.75)}.p-solutions .solutions-mission[data-v-7ee80dc4]{-webkit-box-orient:horizontal;-webkit-box-direction:reverse;-ms-flex-direction:row-reverse;flex-direction:row-reverse;height:auto}.p-solutions .solutions-mission .solutions-mission-txts[data-v-7ee80dc4]{position:relative;width:100%;padding:80px 40px 0}.p-solutions .solutions-mission .solutions-mission-txts-body .ttl[data-v-7ee80dc4]{font-size:2.8rem}.p-solutions .solutions-mission .solutions-mission-txts-body .sub-ttl[data-v-7ee80dc4]{font-size:1.8rem}.p-solutions .solutions-mission .solutions-mission-txts-body .txt[data-v-7ee80dc4]{font-size:1.6rem;line-height:1.8}.p-solutions .solutions-mission .solutions-mission-image[data-v-7ee80dc4]{position:relative;width:calc(100% - 40px);margin-left:40px;height:calc(var(--vh)*100*0.75)}.p-solutions .solutions-details[data-v-7ee80dc4]{padding:60px 0 120px}.p-solutions .solutions-details .solutions-details-left[data-v-7ee80dc4],.p-solutions .solutions-details .solutions-details-right[data-v-7ee80dc4]{width:100%;padding:0 40px}.p-solutions .solutions-details .solutions-details-left .ttl[data-v-7ee80dc4],.p-solutions .solutions-details .solutions-details-right .ttl[data-v-7ee80dc4]{margin-bottom:1.5em}.p-solutions .solutions-details .solutions-details-creative[data-v-7ee80dc4]{margin-bottom:3em}.p-solutions .solutions-details .solutions-details-intro>.txt[data-v-7ee80dc4]{font-size:1.6rem;line-height:1.8}.p-solutions .solutions-details .solutions-details-services .ttl[data-v-7ee80dc4]{margin-bottom:1em}.p-solutions .solutions-details .solutions-details-services .lists[data-v-7ee80dc4]{margin-bottom:3em}.p-solutions .solutions-details .solutions-details-services .list[data-v-7ee80dc4]{font-size:2.6rem}.p-solutions .solutions-details .solutions-details-services .list[data-v-7ee80dc4]:not(:last-child):after{width:6px;height:6px;margin:0 6px}.p-solutions .solutions-details .solutions-details-creative .list[data-v-7ee80dc4]{font-size:2.6rem}.p-solutions .solutions-details .solutions-details-creative .list[data-v-7ee80dc4]:not(:last-child){margin-bottom:15px}.p-solutions .m-solutions-method[data-v-7ee80dc4]{padding-bottom:120px}.p-solutions .solutions-clients[data-v-7ee80dc4]{padding:80px 0 60px}.p-solutions .solutions-clients .hgroup[data-v-7ee80dc4]{margin-bottom:2em;padding:0 20px}.p-solutions .solutions-clients .hgroup .sub-ttl[data-v-7ee80dc4]{margin-bottom:30px;font-size:1.6rem}.p-solutions .solutions-clients .hgroup .ttl[data-v-7ee80dc4]{font-size:3.2rem}.p-solutions .solutions-clients .solutions-clients-inner[data-v-7ee80dc4]{padding:0 15px}.p-solutions .solutions-clients .clients-list-ratio[data-v-7ee80dc4]{padding-top:80%}.p-solutions .solutions-clients .clients-list[data-v-7ee80dc4]{width:50%}.p-solutions .solutions-awards[data-v-7ee80dc4]{padding:80px 0}.p-solutions .solutions-awards .solutions-awards-inner[data-v-7ee80dc4]{padding:0 40px}.p-solutions .solutions-awards .hgroup[data-v-7ee80dc4]{margin-bottom:2em}.p-solutions .solutions-awards .hgroup .ttl[data-v-7ee80dc4]{font-size:4.2rem}.p-solutions .solutions-awards .ui-line-ttl[data-v-7ee80dc4]{width:70px}.p-solutions .solutions-awards .awards-lists[data-v-7ee80dc4]{width:calc(100% - 70px)}.p-solutions .solutions-awards .awards-list[data-v-7ee80dc4]{padding:30px 0 30px 15px}.p-solutions .solutions-awards .awards-list .ttl[data-v-7ee80dc4]{width:100%;margin-bottom:10px;padding-right:0;font-size:1.6rem}.p-solutions .solutions-awards .awards-list .awards[data-v-7ee80dc4]{width:100%;font-size:1.3rem}.p-solutions .solutions-awards .awards-lists-more-btn-wrap[data-v-7ee80dc4]{margin-top:30px;padding-left:85px}.p-solutions .solutions-company-profile[data-v-7ee80dc4]{padding:80px 0 96px}.p-solutions .solutions-company-profile .company-profile-inner[data-v-7ee80dc4]{padding:0 40px}.p-solutions .solutions-company-profile a.link[data-v-7ee80dc4]{font-size:2.8rem}}', ""]), t.exports = e
        },
        365: function (t, e, o) {
            "use strict";
            var n = o(324),
                l = o.n(n);
            e.default = l.a
        },
        413: function (t, e, o) {
            "use strict";
            o.r(e);
            o(23), o(14), o(11), o(6), o(19), o(32);
            var n = o(4),
                l = o(9),
                r = o(312);

            function d(object, t) {
                var e = Object.keys(object);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(object);
                    t && (o = o.filter((function (t) {
                        return Object.getOwnPropertyDescriptor(object, t).enumerable
                    }))), e.push.apply(e, o)
                }
                return e
            }
            var c = {
                    data: function () {
                        return {
                            baseUrl: "https://reedcreative.cc",
                            assetsDir: "https://reedcreative.cc/assets",
                            title: this.$t.bind(this)("title"),
                            description: "ja" === this.$i18n.locale ? "Helixes Co.，Ltd.是一家使用创意解决方案来解决问题的总体计划公司。 我们计划和管理各种不受框架约束的事物，例如广告制作，品牌和数字产品开发以及艺术家管理。" : "Helixes Inc. is a planning company uses creativity to solve problems. We integrate strategy, creativity and experience to build brands.",
                            className: "solutions",
                            headerTitle: "Go Forward",
                            headerSubTitle: "Our Solutions",
                            companyProfileUrlJa: "",
                            companyProfileUrlEn: "",
                            helixWave: null,
                            isFullScreen: !1,
                            isAnimating: !1,
                            isMoreClicked: !1,
                            isVideoLoaded: {
                                videoMission: !1,
                                videoCreative: !1,
                                videoServices: !1
                            },
                            video: {
                                mission: {
                                    movie: "",
                                    poster: ""
                                },
                                creative: {
                                    movie: "",
                                    poster: ""
                                },
                                services: {
                                    movie: "",
                                    poster: ""
                                }
                            },
                            /* Creative URL*/
                            creative: [{
                                ttl: "Strategy & Branding"
                            }, {
                                ttl: "UX + Product Strategy"
                            }, {
                                ttl: "Product + Experience Design"
                            }, {
                                ttl: "Visual Design"
                            }, {
                                ttl: "Design System"
                            }],
                            /* Service URL */
                            services: [{
                                ttl: "Maxilla",
                                url: "https://maxilla.jp"
                            }, {
                                ttl: "Roppyaku",
                                url: "http://roppyaku.com"
                            }, {
                                ttl: "名[NA]",
                                url: "https://naisthename.com"
                            }, {
                                ttl: "sic",
                                url: ""
                            }],
                            clients: [{
                                src: "sony",
                                name: "Sony"
                            }, {
                                src: "toyota",
                                name: "Toyota"
                            }, {
                                src: "adidas",
                                name: "Adidas"
                            }, {
                                src: "microsoft",
                                name: "Microsoft"
                            }, {
                                src: "au",
                                name: "au"
                            }, {
                                src: "airbnb",
                                name: "Airbnb"
                            }, {
                                src: "ana",
                                name: "ANA"
                            }, {
                                src: "bake",
                                name: "Bake, Inc."
                            }, {
                                src: "kirin",
                                name: "KIRIN"
                            }, {
                                src: "muji",
                                name: "MUJI 無印良品"
                            }, {
                                src: "recruit",
                                name: "Recruit"
                            }, {
                                src: "mtv",
                                name: "MTV"
                            }],
                            awards: {
                                _2016: [{
                                    title: "Suchmos – MINT",
                                    award: "MTV Video Music Awards Japan - Best New Artist Video"
                                }, {
                                    title: "Crossfaith – Rx Overdrive",
                                    award: "MTV Video Music Awards Japan - Best Metal Video Nominated"
                                }],
                                _2014: [{
                                    title: "Space Shower TV – Sync. -Minimal Music-",
                                    award: "Promax BDA - Promotional Viral / Web / Mobile Content Prize: Gold"
                                }, {
                                    title: "Space Shower TV – Sync. -Minimal Music-",
                                    award: "Promax BDA - Technical Innovations Prize: Bronze"
                                }, {
                                    title: "MAN WITH A MISSION – database feat.TAKUMA(10-FEET)",
                                    award: "MTV Video Music Awards Japan - Best Collaboration Video Nominated"
                                }, {
                                    title: "coldrain – The Revelation",
                                    award: "Space Shower TV Music Video Awards - Best Videos Nominated"
                                }],
                                _2013: [{
                                    title: "ONE OK ROCK – The Beginning",
                                    award: "MTV Video Music Awards Japan - Best Rock Video"
                                }, {
                                    title: "ONE OK ROCK – The Beginning",
                                    award: "MTV Video Music Awards Japan - Best Video from a Film"
                                }, {
                                    title: "ONE OK ROCK – The Beginning",
                                    award: "Space Shower TV Music Video Awards - Best Year Choice"
                                }]
                            }
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
                            i % 2 ? d(Object(source), !0).forEach((function (e) {
                                Object(n.a)(t, e, source[e])
                            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : d(Object(source)).forEach((function (e) {
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
                            t.setData(), $g.fn.utility.updateViewType(), $g.fn.utility.staggerElement(".subpage-hero-sub-ttl"), $g.fn.utility.staggerElement(".subpage-hero-ttl"), lazyImages.init(), t.setAwardsListsHeight(5), t.$eventHub.$emit("helixSetState", !0), t.helixWave = new r.a($g.configs.helixWaveSettings()), t.loadVideo(), observer.init($g.configs.observerSettings), t.$refs.videoMission.addEventListener("ended", (function (e) {
                                t.$refs.videoMission.currentTime = .001, t.pauseModernVideo({
                                    wrap: "videoMissionWrap",
                                    el: "videoMission"
                                }), t.toggleLegacyVideo({
                                    wrap: "videoMissionWrap",
                                    el: "videoMission",
                                    src: t.video.mission.movie
                                })
                            })), t.loaded && t.init("default"), t.$eventHub.$on("onScroll", t.onScroll), t.$eventHub.$on("onResize", t.onResize)
                        }))
                    },
                    beforeDestroy: function () {
                        observer.destroy(), this.helixWave.destroy(), this.$eventHub.$off("onScroll", this.onScroll), this.$eventHub.$off("onResize", this.onResize)
                    },
                    methods: {
                        setData: function () {
                            this.companyProfileUrlJa = $g.path.urls.profileJa, this.companyProfileUrlEn = $g.path.urls.profileEn, this.video = {
                                mission: {
                                    movie: $g.path.video.solutions.mission.movie,
                                    poster: $g.path.video.solutions.mission.poster
                                },
                                creative: {
                                    movie: $g.path.video.solutions.creative.movie,
                                    poster: $g.path.video.solutions.creative.poster
                                },
                                services: {
                                    movie: $g.path.video.solutions.services.movie,
                                    poster: $g.path.video.solutions.services.poster
                                }
                            }
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
                        awardsLength: function (t) {
                            var e = 0;
                            for (var o in t)
                                for (var i = 0; t[o].length > i; i++) e++;
                            return e
                        },
                        setAwardsListsHeight: function (t) {
                            for (var e = this.$refs.awardsLists, o = e.querySelectorAll(".awards-list"), n = [], i = 0; i < o.length; i++) {
                                var l = o[i].getBoundingClientRect(),
                                    r = l.top,
                                    d = l.bottom,
                                    c = l.height;
                                if (n.push({
                                        top: r,
                                        bottom: d,
                                        height: c
                                    }), i === o.length - 1) {
                                    var v = Math.floor(n[o.length - 1].bottom - n[0].top);
                                    e.setAttribute("data-height", v);
                                    var h = Math.floor(n[t - 1].bottom - n[0].top);
                                    e.style.height = "".concat(h, "px")
                                }
                            }
                        },
                        openAwardsLists: function (t) {
                            if (!this.isMoreClicked) {
                                this.isMoreClicked = !0;
                                var e = this.$refs.awardsLists,
                                    o = e.getAttribute("data-height"),
                                    n = this.$refs.moreBtn;
                                gsap.to(n, {
                                    duration: 1,
                                    autoAlpha: 0,
                                    ease: "power1.out"
                                }), gsap.to(e, {
                                    duration: 1,
                                    height: o,
                                    ease: "power2.inOut",
                                    clearProps: "height",
                                    onComplete: function () {
                                        $g.fn.utility.setFooterTop(), fakeScroll.isActive && fakeScroll.update()
                                    }
                                })
                            }
                        },
                        playMissionVideo: function (t) {
                            this.isFullScreen ? this.closeFullScreenVideo(t) : this.openFullScreenVideo(t)
                        },
                        openFullScreenVideo: function (t) {
                            var e = this;
                            if (!(this.user.mobile || this.user.tablet || this.isFullScreen || this.isAnimating) && this.isVideoLoaded[t]) {
                                this.isFullScreen = !0, this.isAnimating = !0, $g.pointer.type("video-pause"), $g.pointer.enabled([".solutions-mission-image"]);
                                var o = $g.el(".solutions-mission"),
                                    n = $g.el(".solutions-mission-txts"),
                                    l = $g.el(".solutions-mission-image"),
                                    r = $g.el(".fill-rect"),
                                    d = o.getBoundingClientRect().top - $g.fn.utility.getTranslateMatrix(o).y;
                                l.classList.add("is-playing"), l.setAttribute("data-width", l.getBoundingClientRect().width), gsap.killTweensOf([r, n, l]), gsap.set(r, {
                                    width: "100%"
                                }), gsap.to(n, {
                                    duration: .5,
                                    autoAlpha: 0,
                                    ease: "power1.out"
                                }), gsap.to(window, {
                                    duration: .5,
                                    scrollTo: {
                                        y: d,
                                        autoKill: !1
                                    },
                                    ease: "power3.inOut",
                                    onComplete: function () {
                                        e.$eventHub.$emit("helixSetState", !1), e.$eventHub.$emit("helixStop"), gsap.to(l, {
                                            duration: 1,
                                            width: "100%",
                                            ease: "power3.inOut",
                                            onUpdate: function () {
                                                e.$eventHub.$emit("glSelfUpdate")
                                            },
                                            onStart: function () {
                                                e.$eventHub.$emit("glAnimOn"), e.$refs[t].play()
                                            },
                                            onComplete: function () {
                                                e.$eventHub.$emit("glAnimOff"), e.isAnimating = !1
                                            }
                                        })
                                    }
                                })
                            }
                        },
                        closeFullScreenVideo: function (t) {
                            var e = this;
                            if (this.isFullScreen && !this.isAnimating && this.isVideoLoaded[t]) {
                                this.isFullScreen = !1, this.isAnimating = !0, $g.pointer.type("clear"), $g.pointer.disabled([".solutions-mission-image"]);
                                $g.el(".solutions-mission");
                                var o = $g.el(".solutions-mission-txts"),
                                    n = $g.el(".solutions-mission-image"),
                                    l = $g.el(".fill-rect");
                                n.classList.remove("is-playing"), gsap.to(n, {
                                    duration: 1,
                                    width: "".concat(n.getAttribute("data-width"), "px"),
                                    clearProps: "width",
                                    ease: "power3.inOut",
                                    onUpdate: function () {
                                        e.$eventHub.$emit("glSelfUpdate")
                                    },
                                    onStart: function () {
                                        n.removeAttribute("data-width"), e.$eventHub.$emit("glAnimOn"), e.$eventHub.$emit("helixSetState", !1), e.$eventHub.$emit("helixStop"), e.$refs[t].pause()
                                    },
                                    onComplete: function () {
                                        e.$eventHub.$emit("glAnimOff"), gsap.to(o, {
                                            duration: .5,
                                            autoAlpha: 1,
                                            clearProps: "all",
                                            ease: "power1.out"
                                        }), gsap.set(l, {
                                            clearProps: "width",
                                            delay: .5
                                        }), e.isAnimating = !1
                                    }
                                })
                            }
                        },
                        pauseModernVideo: function (t) {
                            var e = t.wrap,
                                o = t.el;
                            this.user.mobile || this.user.tablet || ua.ie || this.$refs[e].classList.contains("is-playing") && this.closeFullScreenVideo(o)
                        },
                        toggleLegacyVideo: function (t) {
                            var e = t.wrap,
                                o = t.el;
                            t.src;
                            (this.user.mobile || this.user.tablet || ua.ie) && (this.$refs[e].classList.contains("is-playing") ? (this.$refs[e].classList.remove("is-playing"), this.$refs[o].pause()) : (this.$refs[e].classList.add("is-playing"), this.$refs[o].play()))
                        },
                        loadVideo: function () {
                            var t = this;
                            this.$refs.videoMission.load(), this.$refs.videoCreative.load(), this.$refs.videoServices.load(), this.$refs.videoMission.addEventListener("loadeddata", (function () {
                                t.isVideoLoaded.videoMission = !0
                            })), this.$refs.videoCreative.addEventListener("loadeddata", (function () {
                                t.isVideoLoaded.videoCreative = !0
                            })), this.$refs.videoServices.addEventListener("loadeddata", (function () {
                                t.isVideoLoaded.videoServices = !0
                            }))
                        },
                        playVideo: function (t) {
                            this.user.desktop && void 0 !== this.$refs[t] && this.isVideoLoaded[t] && this.$refs[t].play()
                        },
                        pauseVideo: function (t) {
                            this.user.desktop && void 0 !== this.$refs[t] && this.isVideoLoaded[t] && this.$refs[t].pause()
                        },
                        glHoverIn: function (t) {
                            var e = t.isChild,
                                o = t.el,
                                n = t.evt;
                            if (this.user.desktop) {
                                var l = "self" === o ? n.target : e ? n.target.querySelector(o) : document.querySelector(o);
                                this.$eventHub.$emit("glHoverIn", l)
                            }
                        },
                        glHoverOut: function (t) {
                            var e = t.isChild,
                                o = t.el,
                                n = t.evt;
                            if (this.user.desktop) {
                                var l = "self" === o ? n.target : e ? n.target.querySelector(o) : document.querySelector(o);
                                this.$eventHub.$emit("glHoverOut", l)
                            }
                        },
                        onScroll: function (t) {
                            t._y;
                            t.y > t.height ? (this.$eventHub.$emit("helixSetState", !1), this.$eventHub.$emit("helixStop")) : (this.$eventHub.$emit("helixSetState", !0), this.$eventHub.$emit("helixStart"))
                        },
                        onResize: function (t) {
                            t.width, t.height;
                            this.isAnimating ? this.$eventHub.$emit("glAnimOn") : this.$eventHub.$emit("glAnimOff"), this.isMoreClicked || this.setAwardsListsHeight(5)
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
                v = (o(363), o(8)),
                h = o(365),
                component = Object(v.a)(c, (function () {
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
                        staticClass: "subpage-hero-inner"
                    }, [o("div", {
                        staticClass: "subpage-hero-body | l-relative"
                    }, [o("h4", {
                        staticClass: "subpage-hero-sub-ttl"
                    }, [t._v(t._s(t.headerSubTitle))]), t._v(" "), o("h1", {
                        staticClass: "subpage-hero-ttl"
                    }, [t._v(t._s(t.headerTitle))])])])])]), t._v(" "), o("section", {
                        staticClass: "solutions-mission",
                        attrs: {
                            "data-fs-section": ""
                        }
                    }, [o("div", {
                        ref: "videoMissionWrap",
                        staticClass: "solutions-mission-image",
                        attrs: {
                            "data-ma-hover": "video-pause",
                            "data-ma-disabled": ""
                        }
                    }, [o("div", {
                        staticClass: "solutions-mission-video-thumb"
                    }, [o("div", {
                        staticClass: "solutions-mission-video-wrap",
                        attrs: {
                            "data-fs-inview": "",
                            "data-gl-dom": "",
                            "data-gl-offset": "",
                            "data-gl-type": "video",
                            "data-gl-src": t.video.mission.movie,
                            "data-gl-texture": "same",
                            "data-gl-ratio": "16:9",
                            "data-gl-vs": "plane",
                            "data-gl-fs": "plane"
                        },
                        on: {
                            click: function (e) {
                                t.pauseModernVideo({
                                    wrap: "videoMissionWrap",
                                    el: "videoMission"
                                }), t.toggleLegacyVideo({
                                    wrap: "videoMissionWrap",
                                    el: "videoMission",
                                    src: t.video.mission.movie
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
                        ref: "videoMission",
                        staticClass: "solutions-mission-video",
                        attrs: {
                            "data-gl-source": "",
                            "data-preload-image": "",
                            poster: t.video.mission.poster,
                            crossorigin: "anonymous",
                            preload: "metadata",
                            playsinline: "",
                            muted: ""
                        },
                        domProps: {
                            muted: !0
                        }
                    })])]), t._v(" "), o("div", {
                        staticClass: "ui-play-btn | legacy-play-btn",
                        on: {
                            click: function (e) {
                                return t.playMissionVideo("videoMission")
                            }
                        }
                    }, [t._m(0)])]), t._v(" "), o("div", {
                        staticClass: "solutions-mission-txts"
                    }, [o("div", {
                        staticClass: "solutions-mission-txts-body"
                    }, [o("div", {
                        staticClass: "hgroup"
                    }, [o("h2", {
                        staticClass: "ttl"
                    }, [o("span", {
                        staticClass: "gothic"
                    }, [t._v("“")]), t._v(" "), o("span", {
                        staticClass: "en"
                    }, [t._v("Helix")]), t._v(" "), o("span", {
                        staticClass: "dash"
                    }, [t._v("ー")]), t._v(" "), o("span", {
                        class: "" + t.$i18n.locale
                    }, [t._v(t._s(t.$t("mission.1")))]), t._v(" "), o("span", {
                        staticClass: "gothic"
                    }, [t._v("”")])]), t._v(" "), "ja" === t.$i18n.locale ? o("h3", {
                        staticClass: "sub-ttl"
                    }, [o("span", {
                        staticClass: "row"
                    }, [t._v(t._s(t.$t("mission.2")))]), t._v(" "), o("span", {
                        staticClass: "row"
                    }, [t._v(t._s(t.$t("mission.3")))])]) : t._e()]), t._v(" "), o("div", {
                        staticClass: "helix-wave | js-helix-wave"
                    }), t._v(" "), o("p", {
                        staticClass: "txt"
                    }, [t._v(t._s(t.$t("mission.4")))])])])]), t._v(" "), o("div", {
                        staticClass: "fill-rect",
                        attrs: {
                            "data-fs-section": ""
                        }
                    }), t._v(" "), o("section", {
                        staticClass: "solutions-details",
                        attrs: {
                            "data-fs-section": ""
                        }
                    }, [o("div", {
                        staticClass: "solutions-details-left"
                    }, [o("div", {
                        staticClass: "solutions-details-creative"
                    }, [o("h5", {
                        staticClass: "ttl"
                    }, [t._v("Creative")]), t._v(" "), o("ul", {
                        staticClass: "lists"
                    }, t._l(t.creative, (function (e, n) {
                        return o("li", {
                            staticClass: "list"
                        }, [t._v(t._s(e.ttl))])
                    })), 0)]), t._v(" "), o("div", {
                        staticClass: "solutions-details-services"
                    }, [o("h5", {
                        staticClass: "ttl"
                    }, [t._v("Services")]), t._v(" "), o("ul", {
                        staticClass: "lists"
                    }, t._l(t.services, (function (e, n) {
                        return o("li", {
                            staticClass: "list"
                        }, [e.url ? o("a", {
                            staticClass: "ex-link",
                            attrs: {
                                href: e.url,
                                target: "_blank",
                                rel: "noopener",
                                "data-ma-hover": "ex-link"
                            }
                        }, [t._v(t._s(e.ttl))]) : o("a", {
                            staticClass: "ex-link"
                        }, [t._v(t._s(e.ttl))])])
                    })), 0)])]), t._v(" "), o("div", {
                        staticClass: "solutions-details-right"
                    }, [o("div", {
                        staticClass: "solutions-details-intro"
                    }, [o("h5", {
                        staticClass: "ttl"
                    }, [t._v("Introduction")]), t._v(" "), o("p", {
                        staticClass: "txt"
                    }, [t._v(t._s(t.$t("introduction")))]), t._v(" "), o("nuxt-link", {
                        staticClass: "ui-link",
                        attrs: {
                            to: t.localePath("contact"),
                            "data-ma-hover": "page-link"
                        }
                    }, [o("span", {
                        staticClass: "txt",
                        attrs: {
                            "data-txt": "Contact"
                        }
                    }, [t._v("Contact")]), t._v(" "), o("span", {
                        staticClass: "line"
                    })])], 1)])]), t._v(" "), o("section", {
                        staticClass: "m-solutions-method",
                        attrs: {
                            "data-fs-section": ""
                        }
                    }, [o("div", {
                        staticClass: "solutions-method-creative",
                        on: {
                            mouseenter: function (e) {
                                t.playVideo("videoCreative"), t.glHoverIn({
                                    isChild: !1,
                                    el: ".video-creative",
                                    evt: e
                                })
                            },
                            mouseleave: function (e) {
                                t.pauseVideo("videoCreative"), t.glHoverOut({
                                    isChild: !1,
                                    el: ".video-creative",
                                    evt: e
                                })
                            }
                        }
                    }, [o("div", {
                        staticClass: "solutions-method-video-thumb"
                    }, [o("div", {
                        staticClass: "solutions-method-video-wrap | video-creative",
                        attrs: {
                            "data-fs-inview": "",
                            "data-gl-dom": "",
                            "data-gl-type": "video",
                            "data-gl-src": t.video.creative.movie,
                            "data-gl-texture": "same",
                            "data-gl-ratio": "16:9",
                            "data-gl-vs": "plane",
                            "data-gl-fs": "link"
                        }
                    }, [o("video", {
                        ref: "videoCreative",
                        staticClass: "solutions-method-video",
                        attrs: {
                            "data-gl-source": "",
                            "data-preload-image": "",
                            poster: t.video.creative.poster,
                            crossorigin: "anonymous",
                            preload: "metadata",
                            playsinline: "",
                            muted: "",
                            loop: ""
                        },
                        domProps: {
                            muted: !0
                        }
                    })])]), t._v(" "), o("div", {
                        staticClass: "solutions-method-txts"
                    }, [o("div", {
                        staticClass: "solutions-method-txts-body"
                    }, [o("h2", {
                        staticClass: "solutions-method-ttl"
                    }, [t._v("Creative")]), t._v(" "), o("p", {
                        staticClass: "solutions-method-txt"
                    }, [t._v(t._s(t.$t("creative")))]), t._v(" "), o("nuxt-link", {
                        staticClass: "ui-link",
                        attrs: {
                            to: t.localePath({
                                path: "/solutions/creative/"
                            }),
                            "data-ma-hover": "page-link"
                        }
                    }, [o("span", {
                        staticClass: "txt",
                        attrs: {
                            "data-txt": "View details"
                        }
                    }, [t._v("View details")]), t._v(" "), o("span", {
                        staticClass: "line"
                    })])], 1)])]), t._v(" "), o("div", {
                        staticClass: "solutions-method-services",
                        on: {
                            mouseenter: function (e) {
                                t.playVideo("videoServices"), t.glHoverIn({
                                    isChild: !1,
                                    el: ".video-services",
                                    evt: e
                                })
                            },
                            mouseleave: function (e) {
                                t.pauseVideo("videoServices"), t.glHoverOut({
                                    isChild: !1,
                                    el: ".video-services",
                                    evt: e
                                })
                            }
                        }
                    }, [o("div", {
                        staticClass: "solutions-method-video-thumb"
                    }, [o("div", {
                        staticClass: "solutions-method-video-wrap | video-services",
                        attrs: {
                            "data-fs-inview": "",
                            "data-gl-dom": "",
                            "data-gl-type": "video",
                            "data-gl-src": t.video.services.movie,
                            "data-gl-texture": "same",
                            "data-gl-ratio": "16:9",
                            "data-gl-vs": "plane",
                            "data-gl-fs": "link"
                        }
                    }, [o("video", {
                        ref: "videoServices",
                        staticClass: "solutions-method-video",
                        attrs: {
                            "data-gl-source": "",
                            "data-preload-image": "",
                            poster: t.video.services.poster,
                            crossorigin: "anonymous",
                            preload: "metadata",
                            playsinline: "",
                            muted: "",
                            loop: ""
                        },
                        domProps: {
                            muted: !0
                        }
                    })])]), t._v(" "), o("div", {
                        staticClass: "solutions-method-txts"
                    }, [o("div", {
                        staticClass: "solutions-method-txts-body"
                    }, [o("h2", {
                        staticClass: "solutions-method-ttl"
                    }, [t._v("Services")]), t._v(" "), o("p", {
                        staticClass: "solutions-method-txt"
                    }, [t._v(t._s(t.$t("services")))]), t._v(" "), o("nuxt-link", {
                        staticClass: "ui-link",
                        attrs: {
                            to: t.localePath({
                                path: "/solutions/services/"
                            }),
                            "data-ma-hover": "page-link"
                        }
                    }, [o("span", {
                        staticClass: "txt",
                        attrs: {
                            "data-txt": "View details"
                        }
                    }, [t._v("View details")]), t._v(" "), o("span", {
                        staticClass: "line"
                    })])], 1)])])]), t._v(" "), o("section", {
                        staticClass: "solutions-clients",
                        attrs: {
                            "data-fs-section": ""
                        }
                    }, [t._m(1), t._v(" "), o("div", {
                        staticClass: "solutions-clients-inner"
                    }, [o("ul", {
                        staticClass: "clients-lists"
                    }, t._l(t.clients, (function (e, n) {
                        return o("li", {
                            staticClass: "clients-list"
                        }, [o("div", {
                            staticClass: "clients-list-ratio"
                        }, [o("div", {
                            staticClass: "l-absolute"
                        }, [o("div", {
                            staticClass: "clients-logo",
                            attrs: {
                                "data-so": ""
                            }
                        }, [o("img", {
                            attrs: {
                                "data-preload-image": "",
                                "data-src": t.assetsDir + "/img/clients/" + e.src + ".svg",
                                alt: "" + e.name
                            }
                        })])])])])
                    })), 0)])]), t._v(" "), o("section", {
                        staticClass: "solutions-awards",
                        attrs: {
                            "data-fs-section": ""
                        }
                    }, [o("div", {
                        staticClass: "solutions-awards-inner"
                    }, [o("div", {
                        staticClass: "solutions-awards-body"
                    }, [o("div", {
                        staticClass: "hgroup"
                    }, [o("h2", {
                        staticClass: "ttl"
                    }, [o("span", {
                        staticClass: "row"
                    }, [o("span", {
                        staticClass: "txt"
                    }, [t._v("Awards &")]), t._v(" "), o("span", {
                        staticClass: "no"
                    }, [o("span", [t._v(t._s(t.awardsLength(t.awards)))])])]), t._v(" "), o("span", {
                        staticClass: "row"
                    }, [t._v("Recognition")])])]), t._v(" "), o("div", {
                        ref: "awardsLists",
                        staticClass: "awards-lists-wrap"
                    }, t._l(t.awards, (function (e, n, l) {
                        return o("div", {
                            staticClass: "awards-lists-year"
                        }, [o("h5", {
                            staticClass: "ui-line-ttl"
                        }, [t._v(t._s(t._f("exclusion")(n, "_")))]), t._v(" "), o("ul", {
                            staticClass: "awards-lists"
                        }, t._l(e, (function (e, n) {
                            return o("li", {
                                staticClass: "awards-list"
                            }, [o("div", {
                                staticClass: "ttl"
                            }, [t._v(t._s(e.title))]), t._v(" "), o("div", {
                                staticClass: "awards"
                            }, [t._v(t._s(e.award))])])
                        })), 0)])
                    })), 0), t._v(" "), o("div", {
                        ref: "moreBtn",
                        staticClass: "awards-lists-more-btn-wrap"
                    }, [o("div", {
                        staticClass: "more-btn | ui-link",
                        attrs: {
                            "data-ma-hover": "plus-link"
                        },
                        on: {
                            click: function (e) {
                                return t.openAwardsLists(e)
                            }
                        }
                    }, [o("span", {
                        staticClass: "txt",
                        attrs: {
                            "data-txt": "More"
                        }
                    }, [t._v("More")]), t._v(" "), o("span", {
                        staticClass: "line"
                    })])])])])]), t._v(" "), o("section", {
                        staticClass: "solutions-company-profile",
                        attrs: {
                            "data-fs-section": ""
                        }
                    }, [o("div", {
                        staticClass: "company-profile-inner"
                    }, [o("div", {
                        staticClass: "company-profile-body"
                    }, [o("h5", {
                        staticClass: "ttl"
                    }, [t._v("Overview")]), t._v(" "), "ja" === t.$i18n.locale ? o("a", {
                        staticClass: "link",
                        attrs: {
                            href: t.companyProfileUrlJa,
                            target: "_blank",
                            rel: "noopener",
                            download: "company-profile.pdf",
                            "data-ma-hover": "ex-link"
                        }
                    }, [o("span", {
                        staticClass: "txt",
                        attrs: {
                            "data-txt": "Company profile"
                        }
                    }, [t._v("Company profile")])]) : o("a", {
                        staticClass: "link",
                        attrs: {
                            href: t.companyProfileUrlEn,
                            target: "_blank",
                            rel: "noopener",
                            download: "company-profile.pdf",
                            "data-ma-hover": "ex-link"
                        }
                    }, [o("span", {
                        staticClass: "txt",
                        attrs: {
                            "data-txt": "Company profile"
                        }
                    }, [t._v("Company profile")])])])])]), t._v(" "), o("section", {
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
                                return t.goTo("contact")
                            }
                        }
                    }, [t._m(2), t._v(" "), t._m(3)])])]), t._v(" "), t._m(4)])
                }), [function () {
                    var t = this.$createElement,
                        e = this._self._c || t;
                    return e("span", {
                        staticClass: "txt"
                    }, [e("span", {
                        staticClass: "front"
                    }, [this._v("Reel")]), this._v(" "), e("span", {
                        staticClass: "back"
                    }, [this._v("Play")])])
                }, function () {
                    var t = this.$createElement,
                        e = this._self._c || t;
                    return e("div", {
                        staticClass: "hgroup"
                    }, [e("h5", {
                        staticClass: "sub-ttl"
                    }, [this._v("Clients")]), this._v(" "), e("h2", {
                        staticClass: "ttl"
                    }, [e("span", {
                        staticClass: "row"
                    }, [this._v("Brands we’re going")]), this._v(" "), e("span", {
                        staticClass: "row"
                    }, [this._v("forward with")])])])
                }, function () {
                    var t = this.$createElement,
                        e = this._self._c || t;
                    return e("div", {
                        staticClass: "sub-ttl | ui-link"
                    }, [e("span", {
                        staticClass: "txt",
                        attrs: {
                            "data-txt": "Work together"
                        }
                    }, [this._v("Work together")]), this._v(" "), e("span", {
                        staticClass: "line"
                    })])
                }, function () {
                    var t = this.$createElement,
                        e = this._self._c || t;
                    return e("div", {
                        staticClass: "ttl"
                    }, [e("span", {
                        staticClass: "txt"
                    }, [this._v("Contact")])])
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
                }], !1, null, "7ee80dc4", null);
            "function" == typeof h.default && Object(h.default)(component);
            e.default = component.exports
        }
    }
]);
