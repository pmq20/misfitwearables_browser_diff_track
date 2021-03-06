// define variables
function doWithCurrentPageBeforeScroll() {
    try {
        switch (global_info.current_page) {
        case -1:
            localization_obj.hide_top_popup(), intro_shine_obj.goaway();
            break;
        case 1:
            wear_it_any_where_obj.goaway();
            break;
        case 2:
            effortless_use_obj.goaway();
            break;
        case 3:
            your_personal_timeline_obj.goaway();
            break;
        case 4:
            more_than_a_tracker_obj.goaway();
            break;
        case 5:
            built_to_last_a_lifetime_obj.goaway();
            break;
        case 7:
            product_spec_obj.goaway();
            break;
        case 8:
            localization_obj.hide_bottom_popup();
            break;
        default:
        }
    } catch (e) {
        console.log("error doWithCurrentPageBeforeScroll")
    }
}

function doWithNextPageBeforeScroll() {}

function doAfterScroll() {
    try {
        switch (global_info.current_page) {
        case -1:
            intro_shine_obj.initPanel(), shine_and_you_obj.initPanel();
            break;
        case 0:
            shine_and_you_obj.initPanel(), intro_shine_obj.initPanel();
            break;
        case 1:
            wear_it_any_where_obj.initPanel();
            break;
        case 2:
            effortless_use_obj.initPanel();
            break;
        case 3:
            your_personal_timeline_obj.initPanel();
            break;
        case 5:
            built_to_last_a_lifetime_obj.initPanel();
            break;
        case 4:
            more_than_a_tracker_obj.initPanel(), more_than_a_tracker_obj.addAnimation();
            break;
        case 6:
            accessories_obj.initPanel();
            break;
        case 7:
            product_spec_obj.initPanel();
            break;
        case 8:
            buy_your_shine_now_obj.initPanel();
            break;
        default:
        }
    } catch (e) {
        console.log("error doAfterScroll")
    }
}

function initPosition() {
    var e = 0;
    $(".navbar").css("top", e), $("#introduction_of_shine").css("top", e + 60);
    for (i = 0; i < global_info.screens.length; i++) {
        var t = global_info.screens[i],
            n = "#" + t,
            r = parseInt(global_info.top_bar_height) + parseInt(global_info.main_height) * i;
        $(n).css("top", r)
    }
    var s = parseInt(global_info.top_bar_height) + parseInt(global_info.main_height) * global_info.screens.length - 180;
    $("#footer").css("top", s)
}

function initHeight() {
    global_info.main_height = $(window).height();
    var e = global_info.main_height - 150,
        t = parseInt((global_info.main_height - 311) / 2);
    global_info.main_height < 455 ? global_info.top_bar_height = 455 : global_info.main_height > 650 ? global_info.top_bar_height = 650 : global_info.top_bar_height = parseInt(global_info.main_height - 60);
    var n = global_info.top_bar_height - 60;
    for (i = 0; i < global_info.screens.length; i++) {
        var r = global_info.screens[i],
            s = "#" + r + " .carousel_board";
        $(s).css("height", parseInt(global_info.main_height))
    }
    $("div#primary").css("top", t), $(".main_page").css("height", parseInt(global_info.main_height)), $(".effortless_image_background").css("height", parseInt(global_info.main_height)), $(".effortless_column").css("height", parseInt(global_info.main_height)), $(".image_background img").css("height", parseInt(global_info.main_height)), $(".image_background").css("height", parseInt(global_info.main_height)), $("#introduction_of_shine").css("height", n), $("#introduction_of_shine_background").css("height", n), $("#introduction_of_shine .carousel_board").css("height", n), $("#introduction_of_shine .info_div").css("padding-top", (n - $("#introduction_of_shine .info_div").first().height()) / 2), $("#accessories .title.headline").css("padding-top", (global_info.main_height - 550) / 2), $("#shine_and_you_info_wrap").css("padding-top", (global_info.main_height - 485) / 2), $("#time_container").css("margin-top", (global_info.main_height - 690) / 2), $("#buy_your_shine_now").css("height", e), $("#buy_content").css("margin-top", (e - 390) / 2), $("#built_to_last_a_lifetime .adv").css("top", parseInt(global_info.main_height) - 330)
}

function reDrawDotNav() {
    var e;
    global_info.current_page >= 0 ? e = "#" + global_info.screens[global_info.current_page] + "_widget" : e = "#home_widget", $("div#primary a").removeClass("active"), $("div#primary p").removeClass("running"), $(e).addClass("active"), $(e).prev("p").fadeIn(), requestTimeout(function () {
        $(e).prev("p").fadeOut()
    }, 1e3)
}

function updateURL(e, t) {
    try {
        window.history.replaceState(t, e, "#" + t)
    } catch (n) {}
}

function updateCurrentURL() {
    var e;
    global_info.current_page >= 0 ? e = global_info.screens[global_info.current_page] : e = "home", updateURL(e, e)
}

function resize() {
    global_info.main_height = $(window).height(), initHeight(), initPosition(), updateBackgroundSize($(window).width(), $(window).height());
    var e;
    global_info.current_page == -1 ? e = 0 : e = global_info.top_bar_height + global_info.main_height * global_info.current_page, $("html, body").scrollTop(e)
}

function updateBackgroundSize(e, t) {
    e < 1400 && t < 933 ? $(".flexslider .slides .carousel_board").css("background-size", "auto") : $(".flexslider .slides .carousel_board").css("background-size", "cover")
}

function calCurrentPageIndex(e) {
    var t;
    global_info.main_height = $(window).height();
    if (e < global_info.top_bar_height) t = -1;
    else {
        e -= global_info.top_bar_height, t = parseInt(e / global_info.main_height);
        var n = e % global_info.main_height;
        n > global_info.main_height / 2 && t++
    }
    return t
}

function calCurrentPageName(e) {
    var t;
    global_info.main_height = $(window).height();
    if (e < global_info.top_bar_height) t = "home";
    else {
        e -= global_info.top_bar_height;
        var n = parseInt(e / global_info.main_height),
            r = e % global_info.main_height;
        r > global_info.main_height / 2 && n++, t = global_info.screens[n]
    }
    return t
}

function moveToPreviousPage() {
    global_info.current_page >= 0 ? (doWithCurrentPageBeforeScroll(), global_info.current_page = global_info.current_page - 1, movetoCurrentPage(1e3, function () {
        doAfterScroll()
    })) : animation.isTransform = !1
}

function moveToNextPage() {
    global_info.current_page < global_info.screens.length - 1 ? (doWithCurrentPageBeforeScroll(), global_info.current_page = global_info.current_page + 1, movetoCurrentPage(1e3, function () {
        doAfterScroll()
    })) : animation.isTransform = !1
}

function moveToPageByName(e) {
    animation.isTransform = !0, doWithCurrentPageBeforeScroll(), e == "home" && (global_info.current_page = -1);
    for (i = 0; i < global_info.screens.length; i++) global_info.screens[i] == e && (global_info.current_page = i);
    movetoCurrentPage(1e3, function () {
        doAfterScroll()
    })
}

function movetoCurrentPage(e, t) {
    animation.isTransform = !0;
    if (global_info.current_page == -1) movetoTop(e, t);
    else {
        var n = global_info.screens[global_info.current_page],
            r = $("html").scrollTop();
        doWithNextPageBeforeScroll();
        if ($("#" + n).offset().top != r) {
            updateCurrentURL(), reDrawDotNav();
            var i = $("#" + n).offset().top;
            $("html").animate({
                scrollTop: i
            }, e, "easeInOutExpo", function () {
                resetIsTransform(), t && typeof t == "function" && t()
            })
        } else resetIsTransform()
    }
}

function movetoTop(e, t) {
    global_info.current_page = -1, reDrawDotNav();
    var n = $("html").scrollTop();
    doWithNextPageBeforeScroll(), n != 0 ? (updateCurrentURL(), $("html").animate({
        scrollTop: 0
    }, e, "easeInOutExpo", function () {
        resetIsTransform(), t && typeof t == "function" && t()
    })) : resetIsTransform()
}

function resetIsTransform() {
    clearRequestTimeout(id_reset_istransform), id_reset_istransform = requestTimeout(function () {
        animation.isTransform = !1
    }, 200)
}

function handleDelta() {
    var e = checkArrayLeftRight();
    if (e != 0) animation.is_transform_left_right || handleLeftRight(e);
    else {
        var t = checkArrayTopDown();
        t != 0 && !animation.isTransform && !animation.is_transform_left_right && (animation.isTransform = !0, handleScroll(t))
    }
}

function checkArrayTopDown() {
    if (arr_top_down.length < 1) return 0;
    var e;
    for (i = 0; i < arr_top_down.length; i++) {
        if (arr_top_down[i] == 0) return 0;
        e = arr_top_down[i]
    }
    return e
}

function checkArrayLeftRight() {
    if (arr_left_right.length < 1) return 0;
    var e;
    for (i = 0; i < arr_left_right.length; i++) {
        if (arr_left_right[i] == 0) return 0;
        e = arr_left_right[i]
    }
    return e
}

function handleScroll(e) {
    e < 0 ? moveToNextPage() : moveToPreviousPage()
}

function handleLeftRight(e) {
    var t = "next";
    e > 0 && (t = "prev"), handleSlider(t)
}

function handleSlider(e) {
    switch (global_info.current_page) {
    case -1:
        animation.is_transform_left_right = !0, intro_shine_obj.slideByDirection(e);
        break;
    case 1:
        animation.is_transform_left_right = !0, wear_it_any_where_obj.slideByDirection(e);
        break;
    case 5:
        animation.is_transform_left_right = !0, built_to_last_a_lifetime_obj.slideByDirection(e);
        break;
    case 4:
        animation.is_transform_left_right = !0, more_than_a_tracker_obj.slideByDirection(e);
        break;
    case 6:
        break;
    default:
    }
}
var global_info = {
    top_bar_height: 560,
    banner_height: 500,
    main_height: 700,
    screens: ["shine_and_you", "wear_it_anywhere", "effortless_use", "your_personal_timeline", "more_than_a_tracker", "built_to_last_a_lifetime", "accessories", "product_specs", "buy_your_shine_now"],
    current_page: -1
}, animation = {
        isTransform: !1,
        is_transform_left_right: !1
    }, id_reset_istransform, intro_shine_obj = function () {
        var e = !1,
            t, n, r = 4600,
            i = 0,
            s = !0,
            o = !1,
            u = !0;
        return {
            initPanel: function () {
                o = !0;
                if (!e) {
                    e = !0;
                    var t = this;
                    $("#introduction_of_shine .introduction_of_shine_background_lazy").lazy({
                        bind: "event",
                        visibleOnly: !1,
                        afterLoad: function (e) {
                            i++, e.hide(), i == 2 && ($("#introduction_of_shine .carousel_board").addClass("lazy_background"), t.initSlider(), doWithNextPageBeforeScroll())
                        }
                    })
                } else this.slider && this.play()
            },
            initSlider: function () {
                var e = this;
                $("#flex_introduction_of_shine").flexslider({
                    animation: "slide",
                    controlNav: !0,
                    smoothHeight: !1,
                    slideshow: !1,
                    slideshowSpeed: r,
                    animationSpeed: 800,
                    touch: !0,
                    start: function (t) {
                        $("#introduction_of_shine_loading_screen").fadeOut(), e.play(), $("#introduction_of_shine .pause_div").click(function () {
                            u ? (e.pause(), u = !u, $(this).removeClass("play")) : (u = !u, $(this).addClass("play"), e.play())
                        })
                    },
                    before: function (t) {
                        e.resetTimer(), animation.is_transform_left_right = !0, s || (s = !0, t.pause())
                    },
                    after: function (n) {
                        clearRequestTimeout(t), t = requestTimeout(function () {
                            animation.is_transform_left_right = !1
                        }, 500), e.play()
                    }
                }), this.slider = $("#flex_introduction_of_shine").data("flexslider")
            },
            slideByDirection: function (e) {
                this.slider.flexAnimate(this.slider.getTarget(e))
            },
            resetTimer: function () {
                clearRequestTimeout(n), $("#introduction_of_shine .timer").removeClass("move"), $("#introduction_of_shine .mask").removeClass("move"), $("#introduction_of_shine .rotator").removeClass("move"), $("#introduction_of_shine .rotator").removeClass("running")
            },
            pause: function () {
                o && u && (this.resetTimer(), s || (this.slider.pause(), s = !0))
            },
            play: function () {
                o && u && s && ($("#introduction_of_shine .rotator").addClass("running"), clearRequestTimeout(n), n = requestTimeout(function () {
                    $("#introduction_of_shine .timer").addClass("move"), $("#introduction_of_shine .mask").addClass("move"), $("#introduction_of_shine .rotator").addClass("move")
                }, 2e3), s = !1, this.slider.play())
            },
            goaway: function () {
                this.slider && this.pause(), o = !1
            }
        }
    }(),
    shine_and_you_obj = function () {
        var e = !1,
            t = !1,
            n = 0;
        return {
            initPanel: function () {
                e || (e = !0, $("#shine_and_you_collum_wrap img.lazy").lazy({
                    bind: "event",
                    afterLoad: function (e) {
                        n++, n == 3 && t && (doWithNextPageBeforeScroll(), $("#shine_and_you_background").addClass("lazy_background"), $("#shine_and_you_loading_screen").fadeOut())
                    }
                }), $("#shine_and_you_background_lazy").lazy({
                    bind: "event",
                    visibleOnly: !1,
                    afterLoad: function (e) {
                        t = !0, e.hide(), n == 3 && (doWithNextPageBeforeScroll(), $("#shine_and_you_background").addClass("lazy_background"), $("#shine_and_you_loading_screen").fadeOut())
                    }
                }))
            }
        }
    }(),
    product_spec_obj = function () {
        function s() {
            $("#shine_detail").show(), $("#shine_detail").lazy({
                bind: "event",
                visibleOnly: !0,
                afterLoad: function (e) {
                    $("#product_specs_loading_screen").fadeOut(), $("#product_specs_background").addClass("lazy_background"), $("#video_spec").hide(), $(".spec_button").show()
                }
            }), r = !0
        }
        var e = !1,
            t, n = !1,
            r = !1,
            i = !1;
        return {
            initPanel: function () {
                n = !0, e ? r ? s() : (t.currentTime(0), t.play()) : (e = !0, _V_("video_spec").ready(function () {
                    t = this;
                    var e = t.src([{
                        type: "video/webm",
                        src: "http://assets.misfitwearables.com/assets/landing/product_specs/rotation-c1a05126f8667bc029c3f48159db433f.webm"
                    }, {
                        type: "video/mp4",
                        src: "http://assets.misfitwearables.com/assets/landing/product_specs/rotation-51feee67f8ba100a3d539b2eda0774eb.mp4"
                    }, {
                        type: "video/ogg",
                        src: "http://assets.misfitwearables.com/assets/landing/product_specs/rotation-1042abe066c4adb88d6d6963bac87b7f.ogv"
                    }]);
                    if (!e) {
                        s();
                        return
                    }
                    t.on("loadeddata", function () {
                        t.play()
                    }), t.on("timeupdate", function () {
                        t.bufferedPercent() > .998 && !i && ($("#product_specs_background").addClass("lazy_background"), t.pause(), $(".spec_button").hide(), $("#product_specs_loading_screen").fadeOut(function () {
                            t.play()
                        }), i = !0)
                    }), t.on("ended", function () {
                        $(".spec_button").fadeIn()
                    }), t.on("error", function () {
                        s()
                    }), t.play()
                }), $(".spec_button").hover(function () {
                    $(this).children(".line").fadeIn(), $(this).children(".info_spec_group").fadeIn()
                }, function () {
                    $(this).children(".line").hide(), $(this).children(".info_spec_group").hide()
                }))
            },
            goaway: function () {
                r || ($(".spec_button").hide(), t.pause()), n = !1
            }
        }
    }(),
    wear_it_any_where_obj = function () {
        var e = !1,
            t, n, r = 4600,
            i = 0,
            s = !0,
            o = !1,
            u = !0;
        return {
            initPanel: function () {
                this.resetTimer(), o = !0;
                if (!e) {
                    e = !0;
                    var t = this;
                    $(".wear_it_anywhere_lazy_background").lazy({
                        bind: "event",
                        visibleOnly: !1,
                        afterLoad: function (e) {
                            i++, e.hide(), i == 5 && ($("#wear_it_anywhere .carousel_board").addClass("lazy_background"), t.initSlider(), doWithNextPageBeforeScroll())
                        }
                    })
                } else this.slider && this.play()
            },
            initSlider: function () {
                var e = this;
                $("#flex_wear_it_anywhere").flexslider({
                    animation: "slide",
                    controlNav: !0,
                    smoothHeight: !1,
                    slideshow: !1,
                    slideshowSpeed: r,
                    touch: !0,
                    start: function (t) {
                        $("#wear_it_anywhere_loading_screen").fadeOut(), e.play(), $("#wear_it_anywhere .pause_div").click(function () {
                            u ? (e.pause(), u = !u, $(this).removeClass("play")) : (u = !u, $(this).addClass("play"), e.play())
                        })
                    },
                    before: function (t) {
                        e.resetTimer(), animation.is_transform_left_right = !0, s || (s = !0, t.pause())
                    },
                    after: function (n) {
                        clearRequestTimeout(t), t = requestTimeout(function () {
                            animation.is_transform_left_right = !1
                        }, 500), e.play()
                    }
                }), this.slider = $("#flex_wear_it_anywhere").data("flexslider")
            },
            slideByDirection: function (e) {
                this.slider.flexAnimate(this.slider.getTarget(e))
            },
            resetTimer: function () {
                clearRequestTimeout(n), $("#wear_it_anywhere .timer").removeClass("move"), $("#wear_it_anywhere .mask").removeClass("move"), $("#wear_it_anywhere .rotator").removeClass("move"), $("#wear_it_anywhere .rotator").removeClass("running")
            },
            pause: function () {
                o && u && (this.resetTimer(), s || (this.slider.pause(), s = !0))
            },
            play: function () {
                o && u && s && ($("#wear_it_anywhere .rotator").addClass("running"), clearRequestTimeout(n), n = requestTimeout(function () {
                    $("#wear_it_anywhere .timer").addClass("move"), $("#wear_it_anywhere .mask").addClass("move"), $("#wear_it_anywhere .rotator").addClass("move")
                }, 2e3), s = !1, this.slider.play())
            },
            goaway: function () {
                this.slider && this.pause(), o = !1
            }
        }
    }(),
    built_to_last_a_lifetime_obj = function () {
        var e = !1,
            t, n, r = 4600,
            i = 0,
            s = !0,
            o = !1,
            u = !0;
        return {
            initPanel: function () {
                this.resetTimer(), o = !0;
                if (!e) {
                    e = !0;
                    var t = this;
                    $(".built_to_last_a_lifetime_lazy_background").lazy({
                        bind: "event",
                        visibleOnly: !1,
                        afterLoad: function (e) {
                            i++, e.hide(), i == 3 && ($("#built_to_last_a_lifetime .carousel_board").addClass("lazy_background"), t.initSlider(), doWithNextPageBeforeScroll())
                        }
                    })
                } else this.slider && this.play()
            },
            initSlider: function () {
                var e = this;
                $("#flex_built_to_last_a_lifetime").flexslider({
                    animation: "slide",
                    controlNav: !0,
                    smoothHeight: !1,
                    slideshow: !1,
                    slideshowSpeed: r,
                    touch: !0,
                    start: function (t) {
                        $("#built_to_last_a_lifetime_loading_screen").fadeOut(), e.play(), $("#built_to_last_a_lifetime .pause_div").click(function () {
                            u ? (e.pause(), u = !u, $(this).removeClass("play")) : (u = !u, $(this).addClass("play"), e.play())
                        })
                    },
                    before: function (t) {
                        animation.is_transform_left_right = !0, e.resetTimer(), s || (s = !0, t.pause())
                    },
                    after: function (n) {
                        clearRequestTimeout(t), t = requestTimeout(function () {
                            animation.is_transform_left_right = !1
                        }, 500), e.play()
                    }
                }), this.slider = $("#flex_built_to_last_a_lifetime").data("flexslider")
            },
            slideByDirection: function (e) {
                this.slider.flexAnimate(this.slider.getTarget(e))
            },
            resetTimer: function () {
                clearRequestTimeout(n), $("#built_to_last_a_lifetime .timer").removeClass("move"), $("#built_to_last_a_lifetime .mask").removeClass("move"), $("#built_to_last_a_lifetime .rotator").removeClass("move"), $("#built_to_last_a_lifetime .rotator").removeClass("running")
            },
            pause: function () {
                o && u && (this.resetTimer(), s || (this.slider.pause(), s = !0))
            },
            play: function () {
                o && u && s && ($("#built_to_last_a_lifetime .rotator").addClass("running"), clearRequestTimeout(n), n = requestTimeout(function () {
                    $("#built_to_last_a_lifetime .timer").addClass("move"), $("#built_to_last_a_lifetime .mask").addClass("move"), $("#built_to_last_a_lifetime .rotator").addClass("move")
                }, 2e3), s = !1, this.slider.play())
            },
            goaway: function () {
                this.slider && this.pause(), o = !1
            }
        }
    }(),
    effortless_use_obj = function () {
        function y(e, t) {
            $("#value_info").html(effortless_use_content.values[e]), $("#step_value").html(effortless_use_content.steps[e]), $("#value_conclusion").html(effortless_use_content.conclusions[e]), $("#effortless_use_sub_info").addClass("show"), T(e, t, r), d ? u = requestTimeout(function () {
                p = !1
            }, 100) : e < 2 ? u = requestTimeout(function () {
                N(), $("#effortless_use_sub_info").removeClass("show")
            }, n + s - 25) : d = !0
        }

        function b(e) {
            $(".effortless_column").removeClass("active"), $("#effortless_column_" + e).addClass("active"), e == 0 && ($("#effortless_use_sub_info").css("color", "#000000"), $("#effortless_use_title").css("color", "#000000"), $("#effortless_use_description").css("color", "#000000")), e == 1 && ($("#effortless_use_sub_info").css("color", "#ffffff"), $("#effortless_use_title").css("color", "#ffffff"), $("#effortless_use_description").css("color", "#ffffff")), e == 2 && ($("#effortless_use_sub_info").css("color", "#ffffff"), $("#effortless_use_title").css("color", "#ffffff"), $("#effortless_use_description").css("color", "#ffffff")), u = requestTimeout(function () {
                e == 0 && y(e, 4), e == 1 && y(e, 10), e == 2 && y(e, 12)
            }, t)
        }

        function w(e) {
            var t = "#effortless_info_column",
                n = 15 + e * 10;
            $(t).transition({
                left: n + "%"
            }, 500);
            var r = $("#effortless_use .info_div:first");
            $(r).transition({
                left: n + "%"
            }, 500), u = requestTimeout(function () {
                b(e)
            }, c)
        }

        function E(e) {
            if (d && !p && g != e) {
                g = e, N(), $("#effortless_use_sub_info").removeClass("show"), p = !0;
                var t = "#effortless_info_column",
                    n = 15 + e * 10;
                $(t).transition({
                    left: n + "%"
                }, 500);
                var r = $("#effortless_use .info_div:first");
                $(r).transition({
                    left: n + "%"
                }, 500), u = requestTimeout(function () {
                    b(e)
                }, c)
            }
        }

        function S(e, t) {
            $(e).transition({
                opacity: 100,
                duration: t
            })
        }

        function x(e, t) {
            $(e).transition({
                opacity: 0,
                duration: t
            })
        }

        function T(e, t, n) {
            for (i = 0; i < 12; i++) {
                var r = "#effortless_use_shine_object #number" + i;
                i < t ? $(r).transition({
                    opacity: 100,
                    delay: n * i,
                    duration: 0
                }) : $(r).transition({
                    opacity: 0,
                    delay: n * i,
                    duration: 0
                })
            }
        }

        function N() {
            for (i = 0; i < 12; i++) {
                var e = "#effortless_use_shine_object #number" + i;
                $(e).transition({
                    opacity: 0,
                    duration: 0
                })
            }
        }
        var e = !1,
            t = 1e3,
            n = 2e3,
            r = 50,
            s = 800,
            o = 0,
            u, a, f, l, c = 10,
            h = c + t + n + s,
            p = !1,
            d = !1,
            v = !1,
            m = !1,
            g = 2;
        return {
            initPanel: function () {
                v = !0;
                if (!e) {
                    e = !0;
                    var t = this;
                    $(".effortless_use_lazy_background").lazy({
                        bind: "event",
                        visibleOnly: !1,
                        afterLoad: function (e) {
                            o++, e.hide(), o == 3 && v && (doWithNextPageBeforeScroll(), $(".effortless_image_background").addClass("lazy_background"), $("#effortless_loading_screen").fadeOut(), t.addAnimation(), m = !0)
                        }
                    })
                } else m && this.addAnimation()
            },
            removeAnimation: function () {
                v && (clearRequestTimeout(u), clearRequestTimeout(a), clearRequestTimeout(f), d = !1, N(), $("#effortless_use_sub_info").removeClass("show"))
            },
            addAnimation: function () {
                v && (w(0), a = requestTimeout(function () {
                    w(1)
                }, h), f = requestTimeout(function () {
                    w(2)
                }, 2 * h), $("#effortless_column_0").click(function () {
                    E(0)
                }), $("#effortless_column_1").click(function () {
                    E(1)
                }), $("#effortless_column_2").click(function () {
                    E(2)
                }))
            },
            goaway: function () {
                this.removeAnimation(), v = !1
            }
        }
    }(),
    your_personal_timeline_obj = function () {
        function f() {
            u = !0, $("#demo_timeline_detail").lazy({
                bind: "event",
                visibleOnly: !1,
                afterLoad: function (e) {
                    $("#your_personal_timeline_loading_screen").fadeOut(), $("#iphone_cover").hide(), $("#screen_view").hide(), $(".video_track_info").show()
                }
            })
        }
        var e = !1,
            t, n, r = !1,
            i = -1,
            s = !1,
            o = !1,
            u = !1,
            a = !1;
        return {
            initPanel: function () {
                r = !0, e ? u ? f() : (a && o && n.currentTime(21), n.play()) : (e = !0, _V_("video_timeline").ready(function () {
                    n = this;
                    var e = n.src([{
                        type: "video/webm",
                        src: "http://assets.misfitwearables.com/assets/landing/your_personal_timeline/demo-167fc57d87fd9be565c91f9ccf979422.webm"
                    }, {
                        type: "video/mp4",
                        src: "http://assets.misfitwearables.com/assets/landing/your_personal_timeline/demo-49859ea5a742cf49887f6885f409d1ad.mp4"
                    }, {
                        type: "video/mov",
                        src: "http://assets.misfitwearables.com/assets/landing/your_personal_timeline/demo-c97b28820b214ddf455f504f79e5afd2.mov"
                    }, {
                        type: "video/ogg",
                        src: "http://assets.misfitwearables.com/assets/landing/your_personal_timeline/demo-60935874a23f604a31c66aba811d6c74.ogv"
                    }]);
                    if (!e) {
                        f();
                        return
                    }
                    n.on("loadstart", function () {
                        n.play()
                    }), n.on("progress", function () {
                        n.buffered().end(0) > 27 && !a && (n.currentTime(0), $("#your_personal_timeline_loading_screen").fadeOut(function () {
                            n.play(), a = !0
                        }))
                    }), n.on("timeupdate", function () {
                        if (!u && a) {
                            var e = n.currentTime();
                            if (e >= 27) {
                                if (o && i == 4 && !n.paused()) {
                                    n.pause();
                                    return
                                }
                                $("#video_track_" + i).removeClass("active"), i = 5, $("#video_track_" + i).show(), o = !0
                            } else if (e >= 21) {
                                if (o && i == 3) {
                                    n.pause();
                                    return
                                }
                                i != 4 && !n.paused() && ($("#video_track_" + i).removeClass("active"), i = 4, $("#video_track_" + i).addClass("active"), $("#video_track_" + i).show())
                            } else if (e >= 15) {
                                if (o && i == 2) {
                                    n.pause();
                                    return
                                }
                                i != 3 && !n.paused() && ($("#video_track_" + i).removeClass("active"), i = 3, $("#video_track_" + i).addClass("active"), $("#video_track_" + i).show())
                            } else if (e >= 10) {
                                if (o && i == 1) {
                                    n.pause();
                                    return
                                }
                                i != 2 && !n.paused() && ($("#video_track_" + i).removeClass("active"), i = 2, $("#video_track_" + i).addClass("active"), $("#video_track_" + i).show())
                            } else if (e >= 7) {
                                if (o && i == 0) {
                                    n.pause();
                                    return
                                }
                                i != 1 && !n.paused() && ($("#video_track_" + i).removeClass("active"), i = 1, $("#video_track_" + i).addClass("active"), $("#video_track_" + i).show())
                            } else e > 6 && $("#shine_timeline").fadeOut(function () {
                                $("#shine_timeline").transition({
                                    x: "0px"
                                }, 0)
                            }), i != 0 && !n.paused() && ($("#shine_timeline").show(), $("#shine_timeline").transition({
                                x: "625px"
                            }), $("#video_track_" + i).removeClass("active"), i = 0, $("#video_track_" + i).addClass("active"), $("#video_track_" + i).show())
                        }
                    }), n.on("error", function () {
                        f()
                    }), $(".video_track_info").click(function () {
                        if (!u && o && n) {
                            $("#video_track_" + i).removeClass("active"), i = parseInt($(this).attr("data")), $("#video_track_" + i).addClass("active");
                            try {
                                switch (i) {
                                case 0:
                                    $("#shine_timeline").show(), $("#shine_timeline").transition({
                                        x: "625px"
                                    }), n.currentTime(0), n.play();
                                    break;
                                case 1:
                                    $("#shine_timeline").fadeOut(function () {
                                        $("#shine_timeline").transition({
                                            x: "0px"
                                        }, 0)
                                    }), n.currentTime(7), n.play();
                                    break;
                                case 2:
                                    $("#shine_timeline").fadeOut(function () {
                                        $("#shine_timeline").transition({
                                            x: "0px"
                                        }, 0)
                                    }), n.currentTime(10), n.play();
                                    break;
                                case 3:
                                    $("#shine_timeline").fadeOut(function () {
                                        $("#shine_timeline").transition({
                                            x: "0px"
                                        }, 0)
                                    }), n.currentTime(15.5), n.play();
                                    break;
                                case 4:
                                    $("#shine_timeline").fadeOut(function () {
                                        $("#shine_timeline").transition({
                                            x: "0px"
                                        }, 0)
                                    }), n.currentTime(21), n.play();
                                    break;
                                default:
                                }
                            } catch (e) {
                                console.log("error track video click")
                            }
                        }
                    })
                }))
            },
            goaway: function () {
                u || (n.pause(), o || ($("#shine_timeline").hide(), $(".video_track_info").removeClass("active"), $("#shine_timeline").transition({
                    x: "0px"
                }), i = -1)), r = !1
            }
        }
    }(),
    more_than_a_tracker_obj = function () {
        function d() {
            var e = (new Date).getHours(),
                t = (new Date).getMinutes();
            e < 10 && (e = "0" + e), t < 10 && (t = "0" + t), $("#more_than_a_tracker #hours_now").html(e), $("#more_than_a_tracker #mins_now").html(t)
        }

        function v() {
            var e = (new Date).getHours(),
                t = (new Date).getMinutes();
            t >= 58 && (e++, t = 0), s = parseInt(e % 12), o = Math.round(t / 5), $("#more_than_a_tracker #hour").addClass("number" + s), $("#more_than_a_tracker #minute").addClass("number" + o), u.push(requestTimeout(function () {
                $("#more_than_a_tracker #hour").css({
                    opacity: 1
                })
            }, 800)), $("#more_than_a_tracker .base_number0").css({
                opacity: .6
            }), $("#more_than_a_tracker .base").css({
                opacity: .2
            }), $("#more_than_a_tracker #base" + o) != null && u.push(requestTimeout(function () {
                $("#more_than_a_tracker #base" + o).hide()
            }, 1600));
            for (i = 0; i < 4; i++) u.push(requestTimeout(function () {
                g()
            }, 1600 + i * 1e3)), s == o && u.push(requestTimeout(function () {
                m()
            }, 1600 + i * 1e3));
            u.push(requestTimeout(function () {
                y()
            }, 6600))
        }

        function m() {
            $("#more_than_a_tracker #hour").css({
                opacity: 0
            }), u.push(requestTimeout(function () {
                $("#more_than_a_tracker #hour").css({
                    opacity: .8
                })
            }, 500))
        }

        function g() {
            $("#more_than_a_tracker #minute").css({
                opacity: 0
            }), u.push(requestTimeout(function () {
                $("#more_than_a_tracker #minute").css({
                    opacity: .8
                })
            }, 500))
        }

        function y() {
            $("#more_than_a_tracker #hour").removeClass("number" + s), $("#more_than_a_tracker #minute").removeClass("number" + o), $("#more_than_a_tracker #hour").css({
                opacity: 0
            }), $("#more_than_a_tracker #minute").css({
                opacity: 0
            }), $("#more_than_a_tracker .base_number0").css({
                opacity: 0
            }), $("#more_than_a_tracker .base").css({
                opacity: 0
            });
            for (i = 0; i < u.length; i++) clearRequestTimeout(u[i]);
            u.length = 0
        }
        var e = !1,
            t, n, r, s, o, u = [],
            a, f = 4600,
            l = 0,
            c = !0,
            h = !1,
            p = !0;
        return {
            initPanel: function () {
                h = !0, this.resetTimer();
                if (!e) {
                    e = !0;
                    var t = this;
                    $(".more_than_a_tracker_lazy_background").lazy({
                        bind: "event",
                        visibleOnly: !1,
                        afterLoad: function (e) {
                            l++, e.hide(), l == 2 && ($("#more_than_a_tracker .carousel_board").addClass("lazy_background"), t.initSlider(), doWithNextPageBeforeScroll())
                        }
                    })
                } else d(), this.slider && this.play()
            },
            initSlider: function () {
                var e = this;
                $("#flex_more_than_a_tracker").flexslider({
                    animation: "slide",
                    controlNav: !0,
                    smoothHeight: !1,
                    slideshow: !1,
                    slideshowSpeed: f,
                    touch: !0,
                    start: function (t) {
                        $("#more_than_a_tracker_loading_screen").fadeOut(), e.play(), $("#more_than_a_tracker .pause_div").click(function () {
                            p ? (e.pause(), p = !p, $(this).removeClass("play")) : (p = !p, $(this).addClass("play"), e.play())
                        })
                    },
                    before: function (t) {
                        animation.is_transform_left_right = !0, e.resetTimer(), c || (c = !0, t.pause())
                    },
                    after: function (n) {
                        clearRequestTimeout(t), t = requestTimeout(function () {
                            animation.is_transform_left_right = !1
                        }, 500), n.currentSlide == 0 && d(), e.play()
                    }
                }), this.slider = $("#flex_more_than_a_tracker").data("flexslider")
            },
            slideByDirection: function (e) {
                this.slider.flexAnimate(this.slider.getTarget(e))
            },
            resetTimer: function () {
                clearRequestTimeout(a), $("#more_than_a_tracker .timer").removeClass("move"), $("#more_than_a_tracker .mask").removeClass("move"), $("#more_than_a_tracker .rotator").removeClass("move"), $("#more_than_a_tracker .rotator").removeClass("running")
            },
            pause: function () {
                h && p && (this.resetTimer(), c || (this.slider.pause(), c = !0))
            },
            play: function () {
                h && p && c && ($("#more_than_a_tracker .rotator").addClass("running"), clearRequestTimeout(a), a = requestTimeout(function () {
                    $("#more_than_a_tracker .timer").addClass("move"), $("#more_than_a_tracker .mask").addClass("move"), $("#more_than_a_tracker .rotator").addClass("move")
                }, 2e3), c = !1, this.slider.play())
            },
            addAnimation: function () {
                h && (clearRequestInterval(n), d(), v(), r = requestInterval(v, 8e3))
            },
            removeAnimation: function () {
                h && (clearRequestInterval(n), clearRequestInterval(r), y())
            },
            goaway: function () {
                this.slider && this.pause(), this.removeAnimation(), h = !1
            }
        }
    }(),
    accessories_obj = function () {
        var e = !1,
            t = 0;
        return {
            initPanel: function () {
                e || (e = !0, $("#accessories_collum_wrap img.lazy").lazy({
                    bind: "event",
                    visibleOnly: !1,
                    afterLoad: function (e) {
                        doWithNextPageBeforeScroll(), t == 3 ? $("#accessories_loading_screen").fadeOut() : t++
                    }
                }), $(".accessories_column").hover(function () {
                    $(this).css("z-index", 2), $(this).children(".accessories_collum_background").addClass("hover"), $(".accessories_images img").addClass("smaller"), $(this).find("img").addClass("hover"), $(this).find("#accessories_color_group").show(), $(this).find(".accessories_headline.active").show(), $(this).find(".accessories_description.active").show()
                }, function () {
                    $(this).css("z-index", 0), $(this).children(".accessories_collum_background").removeClass("hover"), $(".accessories_images img").removeClass("smaller"), $(this).find("img").removeClass("hover"), $(this).find("#accessories_color_group").hide(), $(this).find(".accessories_headline").hide(), $(this).find(".accessories_description").hide()
                }), $(".accessories_images").click(function () {
                    return !1
                }), $("#black_leather_button").click(function () {
                    $("#accessories_images_1 img").attr("src", "http://assets.misfitwearables.com/assets/landing/accessorize/black_leatherband-093c72d74ee1d5a5154ffc1678b17a35.png"), $("#black_headline").addClass("active"), $("#black_description").addClass("active"), $("#tan_headline").removeClass("active"), $("#tan_description").removeClass("active"), $("#tan_headline").hide(), $("#tan_description").hide(), $("#black_headline").show(), $("#black_description").show()
                }), $("#tan_leather_button").click(function () {
                    $("#accessories_images_1 img").attr("src", "http://assets.misfitwearables.com/assets/landing/accessorize/brown_leatherband-f2eed49727d6e9179cc3877b3a47cc17.png"), $("#black_headline").removeClass("active"), $("#black_description").removeClass("active"), $("#tan_headline").addClass("active"), $("#tan_description").addClass("active"), $("#tan_headline").show(), $("#tan_description").show(), $("#black_headline").hide(), $("#black_description").hide()
                }))
            }
        }
    }(),
    buy_your_shine_now_obj = function () {
        var e = !1,
            t = 0;
        return {
            initPanel: function () {
                e || (e = !0, $("#buy_your_shine_now img.lazy_prepare").lazy({
                    bind: "event",
                    visibleOnly: !1,
                    afterLoad: function (e) {
                        doWithNextPageBeforeScroll(), e.hide(), t == 1 ? $("#buy_your_shine_now_loading_screen").fadeOut() : t++
                    }
                }))
            }
        }
    }();
$(window).load(function () {
    global_info.current_page = calCurrentPageIndex($("html").scrollTop()), reDrawDotNav(), doAfterScroll(), $(window).scroll(function () {
        return global_info.is_first_load && (global_info.current_page = calCurrentPageIndex($("html").scrollTop()), reDrawDotNav(), doAfterScroll(), global_info.is_first_load = !1), !1
    }), $("#flex_introduction_of_shine #list_carousels").click(function (e) {
        var t = $(window).width(),
            n = $(window).height();
        intro_shine_obj.pause(), e.pageX < t / 2 ? intro_shine_obj.slideByDirection("prev") : intro_shine_obj.slideByDirection("next")
    }), $("#flex_wear_it_anywhere #list_carousels").click(function (e) {
        var t = $(window).width(),
            n = $(window).height();
        wear_it_any_where_obj.pause(), e.pageX < t / 2 ? wear_it_any_where_obj.slideByDirection("prev") : wear_it_any_where_obj.slideByDirection("next")
    }), $("#flex_built_to_last_a_lifetime #list_carousels").click(function (e) {
        var t = $(window).width(),
            n = $(window).height();
        built_to_last_a_lifetime_obj.pause(), e.pageX < t / 2 ? built_to_last_a_lifetime_obj.slideByDirection("prev") : built_to_last_a_lifetime_obj.slideByDirection("next")
    }), $("#more_than_a_tracker #list_carousels").click(function (e) {
        var t = $(window).width(),
            n = $(window).height();
        more_than_a_tracker_obj.pause(), e.pageX < t / 2 ? more_than_a_tracker_obj.slideByDirection("prev") : more_than_a_tracker_obj.slideByDirection("next")
    }), $("html").hover(function () {
        var e = $(this).scrollTop(),
            t = global_info.screens[global_info.current_page],
            n = 0;
        t && (n = parseInt($("#" + t).css("top")));
        if (Math.abs(n - e) > 2) {
            var r = calCurrentPageName(e);
            animation.isTransform || moveToPageByName(r)
        }
    }, function () {})
});
var isInit = !1,
    isHandle = !1,
    id_reset_init, id_reset_handle, id_reset_all, arr_top_down_all = [],
    arr_top_down = [],
    arr_left_right = [];
$("html").mousewheel(function (e, t, n, r) {
    if (!animation.isTransform && !animation.is_transform_left_right) {
        var i = r,
            s = -n;
        isInit || (clearRequestTimeout(id_reset_init), id_reset_init = requestTimeout(function () {
            isHandle = !0
        }, 60), clearRequestTimeout(id_reset_handle), id_reset_handle = requestTimeout(handleDelta, 61), clearRequestTimeout(id_reset_all), id_reset_all = requestTimeout(function () {
            arr_top_down_all.length < 85 ? (isInit = !1, isHandle = !1, arr_top_down.length = 0, arr_left_right.length = 0, arr_top_down_all.length = 0) : requestTimeout(function () {
                isInit = !1, isHandle = !1, arr_top_down.length = 0, arr_left_right.length = 0, arr_top_down_all.length = 0
            }, 700)
        }, 800), isInit = !0), isHandle || (arr_top_down.push(i), arr_left_right.push(s))
    } else arr_top_down_all.push(i);
    return e.preventDefault && e.preventDefault(), e.preventDefault(), !1
});