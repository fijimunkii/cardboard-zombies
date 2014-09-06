var ZOMBIES = {Main: function() {
        function a(a, b) {
            a.style.opacity = b ? 1 : 0;
            a.style.pointerEvents = b ? "auto" : "none"
        }
        function b() {
            K.appendChild(G);
            L = document.createElement("audio");
            L.addEventListener("canplay", function() {
                D || (this.loop = !0, D = new ZOMBIES.Sound(this), f())
            }, !1);
            L.src = L.canPlayType("audio/mp3") ? "audio/menu_music_loop.mp3" : "audio/menu_music_loop.ogg";
            A = document.createElement("video");
            A.loaded = !1;
            A.addEventListener("canplay", function() {
                A.loaded || (A.loaded = !0, f())
            }, !1);
            A.src = A.canPlayType("video/webm") ? 
            "video/They_Will_Eat_You_Intro_1024x576-webm-512kbps.webm" : A.canPlayType("video/ogg") ? "video/They_Will_Eat_You_Intro_1024x576-ogv-768kbps.ogv" : "video/They_Will_Eat_You_Intro_1024x576-mp4-512kbps.mp4";
            var a = new ZOMBIES.AssetsManager({onLoadCallback: function() {
                    v = !0;
                    f()
                }});
            a.add("grain_transparent_2.png");
            a.add("get-ready-to-run.png");
            a.add("moon.png");
            a.add("hand.png");
            a.add("ground.png");
            a.add("mouse.png");
            a.add("zombies.png");
            a.add("clock.png");
            a.add("background.png");
            a.add("logo.png");
            a.add("b-reel_logo.png");
            a.add("hand1.png");
            a.add("hand2.png");
            a.add("small-skull.png");
            a.add("glasses.png");
            a.add("man.png");
            a.add("eagle.png");
            a.add("line_zigzag.png");
            a.add("line_straightshot.png");
            a.add("line_playdead.png");
            a.add("line_playzombie.png");
            a.add("line_graph_zombies.png");
            a.add("line_graph_humans.png");
            a.add("survival_times.png");
            a.add("brain_food.png");
            a.add("social.png");
            a.add("social-small.png");
            a.add("line_graph.png");
            a.add("pause.png");
            a.add("arrows.png");
            a.load()
        }
        function c(a) {
            Z.style.display = "none";
            X.style.display = "none";
            a.style.display = "block"
        }
        function d() {
            C ? (ea.style.marginLeft = 10 * Math.random() - 5 + "px", ea.style.marginTop = 4 * Math.random() - 2 + "px", setTimeout(d, 100)) : (ea.style.marginLeft = 0, ea.style.marginTop = 0)
        }
        function e() {
            x && D.play();
            A.pause();
            setTimeout(function() {
                d();
                ea.className = "visible";
                setTimeout(function() {
                    wa.style.opacity = 1;
                    C = !1
                }, 3E3)
            }, 500);
            c(X)
        }
        function f() {
            if (v && !(!1 == A.loaded || void 0 == D))
                Z.style.display = "block", S.style.opacity = 1, A.addEventListener("click", function(a) {
                    _gaq.push(["_trackEvent", 
                        "Video", "Skipped", ""]);
                    e();
                    a.preventDefault()
                }), A.addEventListener("ended", function(a) {
                    _gaq.push(["_trackEvent", "Video", "Ended", ""]);
                    e();
                    a.preventDefault()
                }), Z.appendChild(A), A.style.width = "100%", A.style.height = "100%", A.play(), K.style.display = "none"
        }
        function g() {
            H.style.webkitTransform = H.style.MozTransform = H.style.transform = "translateY(-" + H.clientHeight + "px)";
            Ia = !1;
            cb || (cb = !0, setTimeout(function() {
                H.className = "active"
            }, 500))
        }
        function h() {
            var a = X.scrollLeft;
            20 < Math.abs(a - db) && g();
            db = a;
            setTimeout(h, 
            1E3)
        }
        function i(a) {
            var b = Math.floor(a / 3600), a = a % 3600, c = Math.floor(a / 60), a = Math.floor(a % 60);
            return 0 < b ? b + " Hours " : "" + c + " Min.  " + a + " Sec."
        }
        function j() {
            for (var a = 0, b = s.get(), c = document.querySelectorAll(".score-values ul"), d = 0; d < c.length; d++)
                for (var e = c[d].querySelectorAll("li"), f = 0; f < e.length; f++)
                    e[f].innerHTML = "<span>" + (a + 1) + "</span>&nbsp;" + (b[a] ? "<b>" + i(b[a]) + "</b>" : "  - not set -  "), a++;
            c = document.querySelector("#scores .share-score .twitter");
            a = document.querySelector("#scores .share-score");
            b.length ? (b = i(b[0]), c.setAttribute("href", "http://twitter.com/share?text=" + encodeURIComponent("I survived for " + b + " before being eaten by zombies! #Halloween")), a.style.display = "block") : a.style.display = "none"
        }
        function l(a) {
            B.update(a)
        }
        function n() {
            _gaq.push(["_trackEvent", "Game", "Start", ""]);
            D.stop();
            xa.enableSound(x);
            Q.textContent = x ? "Audio Off" : "Audio On";
            ja.start();
            xa.start();
            t();
            S.style.opacity = 0.5;
            a(I, !0);
            a(va, !0)
        }
        function m() {
            _gaq.push(["_trackEvent", "Game", "Pause", ""]);
            xa && (xa.paused ? (xa.pause(), 
            a(O, !1), a(va, !0)) : (xa.pause(), a(O, !0), a(va, !1)))
        }
        function q() {
            document.addEventListener("keydown", function(a) {
                27 == a.keyCode && xa.started && (m(), a.preventDefault())
            }, !0);
            n();
            setTimeout(B.hide, 3E3)
        }
        function p() {
            _gaq.push(["_trackEvent", "Game", "Exit", ""]);
            xa && xa.stop();
            x && D.play();
            a(O, !1);
            a(Y, !1);
            a(I, !1);
            a(H, !0);
            document.exitFullscreen ? document.exitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitCancelFullScreen && document.webkitCancelFullScreen()
        }
        function o() {
            S.style.opacity = 
            1;
            var b = xa.getScore();
            s.add(b);
            j();
            _gaq.push(["_trackEvent", "Game", "Killed", b.toString()]);
            b = i(b);
            Y.querySelector(".social a.twitter").setAttribute("href", "http://twitter.com/share?text=" + encodeURIComponent("I survived for " + b + " before being eaten by zombies! #Halloween"));
            Y.querySelector("h1 span").textContent = b;
            for (var b = 0, c = s.get(), d = Y.querySelectorAll(".scores ul"), e = 0; e < d.length; e++)
                for (var f = d[e].querySelectorAll("li"), g = 0; g < f.length; g++)
                    f[g].innerHTML = "<span>" + (b + 1) + "</span>" + (c[b] ? i(c[b]) : 
                    "  - not set -  "), b++;
            a(Y, !0);
            a(va, !1)
        }
        function r() {
            if (E) {
                var b = document.body;
                b.requestFullScreen ? b.requestFullScreen() : b.mozRequestFullScreen ? b.mozRequestFullScreen() : b.webkitRequestFullScreen && b.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT)
            }
            a(H, !1);
            xa ? n() : (B.update(0), B.show(), xa = new Game({container: I,w: window.innerWidth,h: window.innerHeight,onprogress: l,onload: q,ondie: o}))
        }
        function t() {
            var a = ja.getDelta();
            Qa += a;
            xa.started && (requestAnimationFrame(t), xa.update(Qa, a));
            na.textContent = i(xa.getScore())
        }
        function u(a) {
            var b = new ZOMBIES.Tween(function(a) {
                X.scrollLeft = a
            });
            b.to(a, 1E3);
            b.start(X.scrollLeft)
        }
        function w() {
            ma.style.width = window.innerWidth - 62 + "px";
            768 > window.innerHeight ? (Ba.style.backgroundPosition = "0 -" + (784 - window.innerHeight) + "px", ma.style.bottom = 800 - window.innerHeight + "px") : (Ba.style.backgroundPosition = "0 0", ma.style.bottom = 0)
        }
        var s = new ZOMBIES.ScoresManager, B = new ZOMBIES.Loader, v = !1, A, E = !1, x = !0, L, D, G, C = !0, N;
        try {
            var J = document.createElement("canvas");
            N = !(!window.WebGLRenderingContext || 
            !J.getContext("webgl") && !J.getContext("experimental-webgl"))
        } catch (M) {
            N = !1
        }
        if (!N || window.opera)
            _gaq.push(["_trackEvent", "WebGL", "No", ""]), window.location = "unsupported.html";
        else {
            _gaq.push(["_trackEvent", "WebGL", "Yes", ""]);
            var K = document.getElementById("preloader");
            K.style.display = "block";
            var H = document.getElementById("menu"), S = document.getElementById("overlay");
            N = document.querySelector(".play-game-button");
            var J = document.getElementById("intro"), X = document.getElementById("selection"), Z = document.getElementById("video"), 
            I = document.getElementById("game-container"), Y = document.getElementById("death"), O = document.getElementById("pause"), na = I.querySelector(".time"), qa = J.querySelector("a"), ca = X.querySelector(".start-button"), fa = O.querySelector(".resume-game-button"), R = O.querySelector(".back-to-site-button"), Q = O.querySelector(".audio-switch-button"), ha = X.querySelector(".replay-video-button"), Ba = X.querySelector(".slider"), ma = X.querySelector("#social"), J = X.querySelector(".audio-button"), ea = X.querySelector("#logo"), wa = X.querySelector("#actions"), 
            va = I.querySelector(".hud");
            a(Y, !1);
            a(O, !1);
            a(I, !1);
            x = localStorage.audioEnabled;
            x = void 0 == x ? !0 : JSON.parse(x);
            !1 == x && (J.textContent = "Audio On");
            for (var Qa = 0, ja = new THREE.Clock, xa, Ia = !0, cb = !1, db = 0, $a = document.querySelectorAll(".twitter"), Ca = 0; Ca < $a.length; Ca++)
                $a[Ca].addEventListener("click", function(a) {
                    window.open(this.href, "twitter", "status=1,width=575,height=400,top=" + (window.innerHeight - 400) / 2 + ",left=" + (window.innerWidth - 575) / 2);
                    a.preventDefault();
                    return false
                }, !1);
            $a = Y.querySelector("a.replay");
            $a.addEventListener("click", function(b) {
                a(Y, false);
                r();
                b.preventDefault()
            }, !1);
            $a = Y.querySelector("a.go-back");
            $a.addEventListener("click", function(a) {
                p();
                a.preventDefault()
            }, !1);
            N.addEventListener("click", function(a) {
                r();
                a.preventDefault()
            }, !1);
            qa.addEventListener("click", function(a) {
                c(X);
                a.preventDefault()
            }, !1);
            ca.addEventListener("click", function(a) {
                r();
                a.preventDefault()
            }, !1);
            fa.addEventListener("click", function(a) {
                m();
                a.preventDefault()
            }, !1);
            R.addEventListener("click", function(a) {
                p();
                a.preventDefault()
            }, 
            !1);
            Q.addEventListener("click", function(a) {
                _gaq.push(["_trackEvent", "GameAudio", x ? "Muted" : "Ummuted", ""]);
                x = !x;
                xa.enableSound(x);
                this.textContent = x ? "Audio Off" : "Audio On";
                a.preventDefault()
            }, !1);
            ha.addEventListener("click", function(a) {
                _gaq.push(["_trackEvent", "Video", "Replayed", ""]);
                D.stop();
                Z.style.display = "block";
                A.currentTime = 0;
                A.play();
                a.preventDefault()
            }, !1);
            N = document.querySelector(".leaderboard-button");
            N.addEventListener("click", function(a) {
                u(4034 - 0.5 * window.innerWidth);
                a.preventDefault()
            }, 
            !1);
            N = document.querySelector(".education-button");
            N.addEventListener("click", function(a) {
                u(5313);
                a.preventDefault()
            }, !1);
            J.addEventListener("click", function(a) {
                if (x) {
                    _gaq.push(["_trackEvent", "MainAudio", "Muted", ""]);
                    D.stop();
                    x = false;
                    this.textContent = "Audio On"
                } else {
                    _gaq.push(["_trackEvent", "MainAudio", "Unmuted", ""]);
                    D.play();
                    x = true;
                    this.textContent = "Audio Off"
                }
                localStorage.audioEnabled = x;
                a.preventDefault()
            }, !1);
            window.addEventListener("resize", w, !1);
            w();
            J = "http://www.facebook.com/sharer.php?u=" + encodeURIComponent("http://www.theywilleatyou.com");
            qa = "https://plus.google.com/share?url=" + encodeURIComponent("http://www.theywilleatyou.com");
            ca = "https://twitter.com/share?text=" + encodeURIComponent('"They will eat you!" an interactive zombie experience in WebGL. Run for your life! #WebGL #Halloween') + "&url=" + encodeURIComponent("http://www.theywilleatyou.com");
            N = document.querySelectorAll("#social li");
            N[0].setAttribute("href", qa);
            N[1].setAttribute("href", J);
            N[2].setAttribute("href", ca);
            for (J = 0; J < N.length; J++)
                N[J].addEventListener("click", function(a) {
                    _gaq.push(["_trackEvent", 
                        "Social", "Link", ""]);
                    var b = this.getAttribute("href");
                    window.open(b, "_blank", "height=350, width=640, top=" + (window.screen.height - 350) * 0.5 + ", left=" + (window.screen.width - 640) * 0.5);
                    a.preventDefault()
                }, !1);
            j();
            H.querySelector(".hand").addEventListener("click", function(a) {
                if (Ia)
                    g();
                else {
                    H.style.webkitTransform = H.style.MozTransform = H.style.transform = "translateY(0)";
                    Ia = true
                }
                a.preventDefault()
            }, !1);
            N = H.querySelectorAll("li a");
            for (J = 0; J < N.length; J++)
                N[J].addEventListener("click", function() {
                    g()
                }, !1);
            G = new Image;
            G.addEventListener("load", b, !1);
            G.src = "img/loader.gif";
            h();
            return {scores: s}
        }
    }};
ZOMBIES.Tween = function(a) {
    function b() {
        var a = (Date.now() - g) / e;
        1 < a && (a = 1);
        value = d + (f - d) * a * (2 - a);
        c(value);
        1 > a ? setTimeout(b, 10) : h && h()
    }
    function c() {
        a ? a(value) : console.log(value)
    }
    var d = 0, e = 0, f = 0, g, h;
    return {start: function(a, c) {
            h = c;
            d = a;
            g = Date.now();
            b()
        },to: function(a, b) {
            e = b;
            f = a
        },onUpdate: c}
};
ZOMBIES.AssetsManager = function(a) {
    var b = 0, c = 0, d = [];
    return {add: function(a) {
            d.push("img/" + a);
            b++
        },load: function() {
            for (var e = 0; e < d.length; e++) {
                var f = new Image;
                f.addEventListener("load", function() {
                    c++;
                    if (a.onProgressCallback)
                        a.onProgressCallback(c / b);
                    if (a.onLoadCallback && c == b)
                        a.onLoadCallback()
                }, !1);
                f.addEventListener("error", function() {
                    console.log(this.src)
                }, !1);
                f.src = d[e]
            }
        },get: function() {
            return c / b
        }}
};
ZOMBIES.ScoresManager = function() {
    var a = [];
    if (localStorage.scores)
        if ((a = JSON.parse(localStorage.scores)) && a.length)
            for (var b = 0; b < a.length; b++)
                a[b] = parseInt(a[b], 10);
        else
            a = [];
    return {add: function(b) {
            a.push(b);
            localStorage.scores = JSON.stringify(a)
        },get: function() {
            a.sort(function(a, b) {
                return b - a
            });
            return a
        },reset: function() {
            a = null;
            localStorage.scores = null
        }}
};
ZOMBIES.Loader = function() {
    var a = document.getElementById("loader"), b = a.querySelector("p"), c = a.querySelector(".hand");
    return {show: function() {
            a.className = "visible"
        },hide: function() {
            a.className = ""
        },update: function(a) {
            b.textContent = Math.round(100 * a) + "%";
            c.style.backgroundPosition = "0 " + (1 - a) * c.clientHeight + "px"
        }}
};
ZOMBIES.Sound = function(a) {
    var b = new ZOMBIES.Tween(function(b) {
        a.volume = b
    });
    return {play: function() {
            b.to(1, 500);
            b.start(a.volume);
            a.currentTime = 0;
            a.play()
        },stop: function() {
            b.to(0, 200);
            b.start(a.volume, function() {
                a.pause()
            })
        }}
};
window.requestAnimationFrame || (window.requestAnimationFrame = function() {
    return window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(a) {
        window.setTimeout(a, 1E3 / 60)
    }
}());
var astar = {init: function(a) {
        for (var b = 0, c = a.length; b < c; b++)
            for (var d = 0, e = a[b].length; d < e; d++) {
                var f = a[b][d];
                f.f = 0;
                f.g = 0;
                f.h = 0;
                f.cost = f.type;
                f.visited = !1;
                f.closed = !1;
                f.parent = null
            }
    },heap: function() {
        return new BinaryHeap(function(a) {
            return a.f
        })
    },search: function(a, b, c, d, e) {
        astar.init(a);
        var e = e || astar.manhattan, d = !!d, f = astar.heap();
        for (f.push(b); 0 < f.size(); ) {
            b = f.pop();
            if (b === c) {
                a = b;
                for (c = []; a.parent; )
                    c.push(a), a = a.parent;
                return c.reverse()
            }
            b.closed = !0;
            for (var g = astar.neighbors(a, b, d), h = 0, i = g.length; h < 
            i; h++) {
                var j = g[h];
                if (!j.closed && !j.isWall()) {
                    var l = b.g + j.cost, n = j.visited;
                    if (!n || l < j.g)
                        j.visited = !0, j.parent = b, j.h = j.h || e(j.pos, c.pos), j.g = l, j.f = j.g + j.h, n ? f.rescoreElement(j) : f.push(j)
                }
            }
        }
        return []
    },manhattan: function(a, b) {
        var c = Math.abs(b.x - a.x), d = Math.abs(b.y - a.y);
        return c + d
    },neighbors: function(a, b, c) {
        var d = [], e = b.x, b = b.y;
        a[e - 1] && a[e - 1][b] && d.push(a[e - 1][b]);
        a[e + 1] && a[e + 1][b] && d.push(a[e + 1][b]);
        a[e] && a[e][b - 1] && d.push(a[e][b - 1]);
        a[e] && a[e][b + 1] && d.push(a[e][b + 1]);
        c && (a[e - 1] && a[e - 1][b - 1] && d.push(a[e - 
        1][b - 1]), a[e + 1] && a[e + 1][b - 1] && d.push(a[e + 1][b - 1]), a[e - 1] && a[e - 1][b + 1] && d.push(a[e - 1][b + 1]), a[e + 1] && a[e + 1][b + 1] && d.push(a[e + 1][b + 1]));
        return d
    }};
var GraphNodeType = {OPEN: 1,WALL: 0};
function Graph(a) {
    for (var b = [], c = 0; c < a.length; c++) {
        b[c] = [];
        for (var d = 0, e = a[c]; d < e.length; d++)
            b[c][d] = new GraphNode(c, d, e[d])
    }
    this.input = a;
    this.nodes = b
}
Graph.prototype.toString = function() {
    for (var a = "\n", b = this.nodes, c, d, e, f, g = 0, h = b.length; g < h; g++) {
        c = "";
        d = b[g];
        e = 0;
        for (f = d.length; e < f; e++)
            c += d[e].type + " ";
        a = a + c + "\n"
    }
    return a
};
function GraphNode(a, b, c) {
    this.data = {};
    this.x = a;
    this.y = b;
    this.pos = {x: a,y: b};
    this.type = c
}
GraphNode.prototype.toString = function() {
    return "[" + this.x + " " + this.y + "]"
};
GraphNode.prototype.isWall = function() {
    return this.type == GraphNodeType.WALL
};
function BinaryHeap(a) {
    this.content = [];
    this.scoreFunction = a
}
BinaryHeap.prototype = {push: function(a) {
        this.content.push(a);
        this.sinkDown(this.content.length - 1)
    },pop: function() {
        var a = this.content[0], b = this.content.pop();
        0 < this.content.length && (this.content[0] = b, this.bubbleUp(0));
        return a
    },remove: function(a) {
        var b = this.content.indexOf(a), c = this.content.pop();
        b !== this.content.length - 1 && (this.content[b] = c, this.scoreFunction(c) < this.scoreFunction(a) ? this.sinkDown(b) : this.bubbleUp(b))
    },size: function() {
        return this.content.length
    },rescoreElement: function(a) {
        this.sinkDown(this.content.indexOf(a))
    },
    sinkDown: function(a) {
        for (var b = this.content[a]; 0 < a; ) {
            var c = (a + 1 >> 1) - 1, d = this.content[c];
            if (this.scoreFunction(b) < this.scoreFunction(d))
                this.content[c] = b, this.content[a] = d, a = c;
            else
                break
        }
    },bubbleUp: function(a) {
        for (var b = this.content.length, c = this.content[a], d = this.scoreFunction(c); ; ) {
            var e = a + 1 << 1, f = e - 1, g = null;
            if (f < b) {
                var h = this.scoreFunction(this.content[f]);
                h < d && (g = f)
            }
            if (e < b && this.scoreFunction(this.content[e]) < (null === g ? d : h))
                g = e;
            if (null !== g)
                this.content[a] = this.content[g], this.content[g] = c, a = g;
            else
                break
        }
    }};
var THREE = THREE || {REVISION: "51"};
void 0 === self.console && (self.console = {info: function() {
    },log: function() {
    },debug: function() {
    },warn: function() {
    },error: function() {
    }});
void 0 === self.Int32Array && (self.Int32Array = Array, self.Float32Array = Array);
void 0 === String.prototype.startsWith && (String.prototype.startsWith = function(a) {
    return this.slice(0, a.length) === a
});
void 0 === String.prototype.endsWith && (String.prototype.endsWith = function(a) {
    var a = String(a), b = this.lastIndexOf(a);
    return 0 <= b && b === this.length - a.length
});
void 0 === !String.prototype.trim && (String.prototype.trim = function() {
    return this.replace(/^\s+|\s+$/g, "")
});
(function() {
    for (var a = 0, b = ["ms", "moz", "webkit", "o"], c = 0; c < b.length && !window.requestAnimationFrame; ++c)
        window.requestAnimationFrame = window[b[c] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[b[c] + "CancelAnimationFrame"] || window[b[c] + "CancelRequestAnimationFrame"];
    void 0 === window.requestAnimationFrame && (window.requestAnimationFrame = function(b) {
        var c = Date.now(), f = Math.max(0, 16 - (c - a)), g = window.setTimeout(function() {
            b(c + f)
        }, f);
        a = c + f;
        return g
    });
    void 0 === window.cancelAnimationFrame && (window.cancelAnimationFrame = 
    function(a) {
        clearTimeout(a)
    })
})();
THREE.FrontSide = 0;
THREE.BackSide = 1;
THREE.DoubleSide = 2;
THREE.NoShading = 0;
THREE.FlatShading = 1;
THREE.SmoothShading = 2;
THREE.NoColors = 0;
THREE.FaceColors = 1;
THREE.VertexColors = 2;
THREE.NoBlending = 0;
THREE.NormalBlending = 1;
THREE.AdditiveBlending = 2;
THREE.SubtractiveBlending = 3;
THREE.MultiplyBlending = 4;
THREE.CustomBlending = 5;
THREE.AddEquation = 100;
THREE.SubtractEquation = 101;
THREE.ReverseSubtractEquation = 102;
THREE.ZeroFactor = 200;
THREE.OneFactor = 201;
THREE.SrcColorFactor = 202;
THREE.OneMinusSrcColorFactor = 203;
THREE.SrcAlphaFactor = 204;
THREE.OneMinusSrcAlphaFactor = 205;
THREE.DstAlphaFactor = 206;
THREE.OneMinusDstAlphaFactor = 207;
THREE.DstColorFactor = 208;
THREE.OneMinusDstColorFactor = 209;
THREE.SrcAlphaSaturateFactor = 210;
THREE.MultiplyOperation = 0;
THREE.MixOperation = 1;
THREE.UVMapping = function() {
};
THREE.CubeReflectionMapping = function() {
};
THREE.CubeRefractionMapping = function() {
};
THREE.SphericalReflectionMapping = function() {
};
THREE.SphericalRefractionMapping = function() {
};
THREE.RepeatWrapping = 1E3;
THREE.ClampToEdgeWrapping = 1001;
THREE.MirroredRepeatWrapping = 1002;
THREE.NearestFilter = 1003;
THREE.NearestMipMapNearestFilter = 1004;
THREE.NearestMipMapLinearFilter = 1005;
THREE.LinearFilter = 1006;
THREE.LinearMipMapNearestFilter = 1007;
THREE.LinearMipMapLinearFilter = 1008;
THREE.UnsignedByteType = 1009;
THREE.ByteType = 1010;
THREE.ShortType = 1011;
THREE.UnsignedShortType = 1012;
THREE.IntType = 1013;
THREE.UnsignedIntType = 1014;
THREE.FloatType = 1015;
THREE.UnsignedShort4444Type = 1016;
THREE.UnsignedShort5551Type = 1017;
THREE.UnsignedShort565Type = 1018;
THREE.AlphaFormat = 1019;
THREE.RGBFormat = 1020;
THREE.RGBAFormat = 1021;
THREE.LuminanceFormat = 1022;
THREE.LuminanceAlphaFormat = 1023;
THREE.RGB_S3TC_DXT1_Format = 2001;
THREE.RGBA_S3TC_DXT1_Format = 2002;
THREE.RGBA_S3TC_DXT3_Format = 2003;
THREE.RGBA_S3TC_DXT5_Format = 2004;
THREE.Clock = function(a) {
    this.autoStart = void 0 !== a ? a : !0;
    this.elapsedTime = this.oldTime = this.startTime = 0;
    this.running = !1
};
THREE.Clock.prototype.start = function() {
    this.oldTime = this.startTime = Date.now();
    this.running = !0
};
THREE.Clock.prototype.stop = function() {
    this.getElapsedTime();
    this.running = !1
};
THREE.Clock.prototype.getElapsedTime = function() {
    return this.elapsedTime += this.getDelta()
};
THREE.Clock.prototype.getDelta = function() {
    var a = 0;
    this.autoStart && !this.running && this.start();
    if (this.running) {
        var b = Date.now(), a = 0.0010 * (b - this.oldTime);
        this.oldTime = b;
        this.elapsedTime += a
    }
    return a
};
THREE.Color = function(a) {
    void 0 !== a && this.setHex(a);
    return this
};
THREE.Color.prototype = {constructor: THREE.Color,r: 1,g: 1,b: 1,copy: function(a) {
        this.r = a.r;
        this.g = a.g;
        this.b = a.b;
        return this
    },copyGammaToLinear: function(a) {
        this.r = a.r * a.r;
        this.g = a.g * a.g;
        this.b = a.b * a.b;
        return this
    },copyLinearToGamma: function(a) {
        this.r = Math.sqrt(a.r);
        this.g = Math.sqrt(a.g);
        this.b = Math.sqrt(a.b);
        return this
    },convertGammaToLinear: function() {
        var a = this.r, b = this.g, c = this.b;
        this.r = a * a;
        this.g = b * b;
        this.b = c * c;
        return this
    },convertLinearToGamma: function() {
        this.r = Math.sqrt(this.r);
        this.g = Math.sqrt(this.g);
        this.b = Math.sqrt(this.b);
        return this
    },setRGB: function(a, b, c) {
        this.r = a;
        this.g = b;
        this.b = c;
        return this
    },setHSV: function(a, b, c) {
        var d, e, f;
        0 === c ? this.r = this.g = this.b = 0 : (d = Math.floor(6 * a), e = 6 * a - d, a = c * (1 - b), f = c * (1 - b * e), b = c * (1 - b * (1 - e)), 0 === d ? (this.r = c, this.g = b, this.b = a) : 1 === d ? (this.r = f, this.g = c, this.b = a) : 2 === d ? (this.r = a, this.g = c, this.b = b) : 3 === d ? (this.r = a, this.g = f, this.b = c) : 4 === d ? (this.r = b, this.g = a, this.b = c) : 5 === d && (this.r = c, this.g = a, this.b = f));
        return this
    },setHex: function(a) {
        a = Math.floor(a);
        this.r = (a >> 16 & 
        255) / 255;
        this.g = (a >> 8 & 255) / 255;
        this.b = (a & 255) / 255;
        return this
    },lerpSelf: function(a, b) {
        this.r += (a.r - this.r) * b;
        this.g += (a.g - this.g) * b;
        this.b += (a.b - this.b) * b;
        return this
    },getHex: function() {
        return 255 * this.r << 16 ^ 255 * this.g << 8 ^ 255 * this.b << 0
    },getContextStyle: function() {
        return "rgb(" + (255 * this.r | 0) + "," + (255 * this.g | 0) + "," + (255 * this.b | 0) + ")"
    },clone: function() {
        return (new THREE.Color).setRGB(this.r, this.g, this.b)
    }};
THREE.Vector2 = function(a, b) {
    this.x = a || 0;
    this.y = b || 0
};
THREE.Vector2.prototype = {constructor: THREE.Vector2,set: function(a, b) {
        this.x = a;
        this.y = b;
        return this
    },copy: function(a) {
        this.x = a.x;
        this.y = a.y;
        return this
    },add: function(a, b) {
        this.x = a.x + b.x;
        this.y = a.y + b.y;
        return this
    },addSelf: function(a) {
        this.x += a.x;
        this.y += a.y;
        return this
    },sub: function(a, b) {
        this.x = a.x - b.x;
        this.y = a.y - b.y;
        return this
    },subSelf: function(a) {
        this.x -= a.x;
        this.y -= a.y;
        return this
    },multiplyScalar: function(a) {
        this.x *= a;
        this.y *= a;
        return this
    },divideScalar: function(a) {
        a ? (this.x /= a, this.y /= a) : this.set(0, 
        0);
        return this
    },negate: function() {
        return this.multiplyScalar(-1)
    },dot: function(a) {
        return this.x * a.x + this.y * a.y
    },lengthSq: function() {
        return this.x * this.x + this.y * this.y
    },length: function() {
        return Math.sqrt(this.lengthSq())
    },normalize: function() {
        return this.divideScalar(this.length())
    },distanceTo: function(a) {
        return Math.sqrt(this.distanceToSquared(a))
    },distanceToSquared: function(a) {
        var b = this.x - a.x, a = this.y - a.y;
        return b * b + a * a
    },setLength: function(a) {
        return this.normalize().multiplyScalar(a)
    },lerpSelf: function(a, 
    b) {
        this.x += (a.x - this.x) * b;
        this.y += (a.y - this.y) * b;
        return this
    },equals: function(a) {
        return a.x === this.x && a.y === this.y
    },isZero: function() {
        return 1E-4 > this.lengthSq()
    },clone: function() {
        return new THREE.Vector2(this.x, this.y)
    }};
THREE.Vector3 = function(a, b, c) {
    this.x = a || 0;
    this.y = b || 0;
    this.z = c || 0
};
THREE.Vector3.prototype = {constructor: THREE.Vector3,set: function(a, b, c) {
        this.x = a;
        this.y = b;
        this.z = c;
        return this
    },setX: function(a) {
        this.x = a;
        return this
    },setY: function(a) {
        this.y = a;
        return this
    },setZ: function(a) {
        this.z = a;
        return this
    },copy: function(a) {
        this.x = a.x;
        this.y = a.y;
        this.z = a.z;
        return this
    },add: function(a, b) {
        this.x = a.x + b.x;
        this.y = a.y + b.y;
        this.z = a.z + b.z;
        return this
    },addSelf: function(a) {
        this.x += a.x;
        this.y += a.y;
        this.z += a.z;
        return this
    },addScalar: function(a) {
        this.x += a;
        this.y += a;
        this.z += a;
        return this
    },
    sub: function(a, b) {
        this.x = a.x - b.x;
        this.y = a.y - b.y;
        this.z = a.z - b.z;
        return this
    },subSelf: function(a) {
        this.x -= a.x;
        this.y -= a.y;
        this.z -= a.z;
        return this
    },multiply: function(a, b) {
        this.x = a.x * b.x;
        this.y = a.y * b.y;
        this.z = a.z * b.z;
        return this
    },multiplySelf: function(a) {
        this.x *= a.x;
        this.y *= a.y;
        this.z *= a.z;
        return this
    },multiplyScalar: function(a) {
        this.x *= a;
        this.y *= a;
        this.z *= a;
        return this
    },divideSelf: function(a) {
        this.x /= a.x;
        this.y /= a.y;
        this.z /= a.z;
        return this
    },divideScalar: function(a) {
        a ? (this.x /= a, this.y /= a, this.z /= a) : 
        this.z = this.y = this.x = 0;
        return this
    },negate: function() {
        return this.multiplyScalar(-1)
    },dot: function(a) {
        return this.x * a.x + this.y * a.y + this.z * a.z
    },lengthSq: function() {
        return this.x * this.x + this.y * this.y + this.z * this.z
    },length: function() {
        return Math.sqrt(this.lengthSq())
    },lengthManhattan: function() {
        return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z)
    },normalize: function() {
        return this.divideScalar(this.length())
    },setLength: function(a) {
        return this.normalize().multiplyScalar(a)
    },lerpSelf: function(a, b) {
        this.x += 
        (a.x - this.x) * b;
        this.y += (a.y - this.y) * b;
        this.z += (a.z - this.z) * b;
        return this
    },cross: function(a, b) {
        this.x = a.y * b.z - a.z * b.y;
        this.y = a.z * b.x - a.x * b.z;
        this.z = a.x * b.y - a.y * b.x;
        return this
    },crossSelf: function(a) {
        var b = this.x, c = this.y, d = this.z;
        this.x = c * a.z - d * a.y;
        this.y = d * a.x - b * a.z;
        this.z = b * a.y - c * a.x;
        return this
    },distanceTo: function(a) {
        return Math.sqrt(this.distanceToSquared(a))
    },distanceToSquared: function(a) {
        return (new THREE.Vector3).sub(this, a).lengthSq()
    },getPositionFromMatrix: function(a) {
        this.x = a.elements[12];
        this.y = a.elements[13];
        this.z = a.elements[14];
        return this
    },setEulerFromRotationMatrix: function(a, b) {
        function c(a) {
            return Math.min(Math.max(a, -1), 1)
        }
        var d = a.elements, e = d[0], f = d[4], g = d[8], h = d[1], i = d[5], j = d[9], l = d[2], n = d[6], d = d[10];
        void 0 === b || "XYZ" === b ? (this.y = Math.asin(c(g)), 0.99999 > Math.abs(g) ? (this.x = Math.atan2(-j, d), this.z = Math.atan2(-f, e)) : (this.x = Math.atan2(n, i), this.z = 0)) : "YXZ" === b ? (this.x = Math.asin(-c(j)), 0.99999 > Math.abs(j) ? (this.y = Math.atan2(g, d), this.z = Math.atan2(h, i)) : (this.y = Math.atan2(-l, 
        e), this.z = 0)) : "ZXY" === b ? (this.x = Math.asin(c(n)), 0.99999 > Math.abs(n) ? (this.y = Math.atan2(-l, d), this.z = Math.atan2(-f, i)) : (this.y = 0, this.z = Math.atan2(h, e))) : "ZYX" === b ? (this.y = Math.asin(-c(l)), 0.99999 > Math.abs(l) ? (this.x = Math.atan2(n, d), this.z = Math.atan2(h, e)) : (this.x = 0, this.z = Math.atan2(-f, i))) : "YZX" === b ? (this.z = Math.asin(c(h)), 0.99999 > Math.abs(h) ? (this.x = Math.atan2(-j, i), this.y = Math.atan2(-l, e)) : (this.x = 0, this.y = Math.atan2(g, d))) : "XZY" === b && (this.z = Math.asin(-c(f)), 0.99999 > Math.abs(f) ? (this.x = Math.atan2(n, 
        i), this.y = Math.atan2(g, e)) : (this.x = Math.atan2(-j, d), this.y = 0));
        return this
    },setEulerFromQuaternion: function(a, b) {
        function c(a) {
            return Math.min(Math.max(a, -1), 1)
        }
        var d = a.x * a.x, e = a.y * a.y, f = a.z * a.z, g = a.w * a.w;
        void 0 === b || "XYZ" === b ? (this.x = Math.atan2(2 * (a.x * a.w - a.y * a.z), g - d - e + f), this.y = Math.asin(c(2 * (a.x * a.z + a.y * a.w))), this.z = Math.atan2(2 * (a.z * a.w - a.x * a.y), g + d - e - f)) : "YXZ" === b ? (this.x = Math.asin(c(2 * (a.x * a.w - a.y * a.z))), this.y = Math.atan2(2 * (a.x * a.z + a.y * a.w), g - d - e + f), this.z = Math.atan2(2 * (a.x * a.y + a.z * a.w), 
        g - d + e - f)) : "ZXY" === b ? (this.x = Math.asin(c(2 * (a.x * a.w + a.y * a.z))), this.y = Math.atan2(2 * (a.y * a.w - a.z * a.x), g - d - e + f), this.z = Math.atan2(2 * (a.z * a.w - a.x * a.y), g - d + e - f)) : "ZYX" === b ? (this.x = Math.atan2(2 * (a.x * a.w + a.z * a.y), g - d - e + f), this.y = Math.asin(c(2 * (a.y * a.w - a.x * a.z))), this.z = Math.atan2(2 * (a.x * a.y + a.z * a.w), g + d - e - f)) : "YZX" === b ? (this.x = Math.atan2(2 * (a.x * a.w - a.z * a.y), g - d + e - f), this.y = Math.atan2(2 * (a.y * a.w - a.x * a.z), g + d - e - f), this.z = Math.asin(c(2 * (a.x * a.y + a.z * a.w)))) : "XZY" === b && (this.x = Math.atan2(2 * (a.x * a.w + a.y * a.z), 
        g - d + e - f), this.y = Math.atan2(2 * (a.x * a.z + a.y * a.w), g + d - e - f), this.z = Math.asin(c(2 * (a.z * a.w - a.x * a.y))));
        return this
    },getScaleFromMatrix: function(a) {
        var b = this.set(a.elements[0], a.elements[1], a.elements[2]).length(), c = this.set(a.elements[4], a.elements[5], a.elements[6]).length(), a = this.set(a.elements[8], a.elements[9], a.elements[10]).length();
        this.x = b;
        this.y = c;
        this.z = a;
        return this
    },equals: function(a) {
        return a.x === this.x && a.y === this.y && a.z === this.z
    },isZero: function() {
        return 1E-4 > this.lengthSq()
    },clone: function() {
        return new THREE.Vector3(this.x, 
        this.y, this.z)
    }};
THREE.Vector4 = function(a, b, c, d) {
    this.x = a || 0;
    this.y = b || 0;
    this.z = c || 0;
    this.w = void 0 !== d ? d : 1
};
THREE.Vector4.prototype = {constructor: THREE.Vector4,set: function(a, b, c, d) {
        this.x = a;
        this.y = b;
        this.z = c;
        this.w = d;
        return this
    },copy: function(a) {
        this.x = a.x;
        this.y = a.y;
        this.z = a.z;
        this.w = void 0 !== a.w ? a.w : 1;
        return this
    },add: function(a, b) {
        this.x = a.x + b.x;
        this.y = a.y + b.y;
        this.z = a.z + b.z;
        this.w = a.w + b.w;
        return this
    },addSelf: function(a) {
        this.x += a.x;
        this.y += a.y;
        this.z += a.z;
        this.w += a.w;
        return this
    },sub: function(a, b) {
        this.x = a.x - b.x;
        this.y = a.y - b.y;
        this.z = a.z - b.z;
        this.w = a.w - b.w;
        return this
    },subSelf: function(a) {
        this.x -= 
        a.x;
        this.y -= a.y;
        this.z -= a.z;
        this.w -= a.w;
        return this
    },multiplyScalar: function(a) {
        this.x *= a;
        this.y *= a;
        this.z *= a;
        this.w *= a;
        return this
    },divideScalar: function(a) {
        a ? (this.x /= a, this.y /= a, this.z /= a, this.w /= a) : (this.z = this.y = this.x = 0, this.w = 1);
        return this
    },negate: function() {
        return this.multiplyScalar(-1)
    },dot: function(a) {
        return this.x * a.x + this.y * a.y + this.z * a.z + this.w * a.w
    },lengthSq: function() {
        return this.dot(this)
    },length: function() {
        return Math.sqrt(this.lengthSq())
    },lengthManhattan: function() {
        return Math.abs(this.x) + 
        Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w)
    },normalize: function() {
        return this.divideScalar(this.length())
    },setLength: function(a) {
        return this.normalize().multiplyScalar(a)
    },lerpSelf: function(a, b) {
        this.x += (a.x - this.x) * b;
        this.y += (a.y - this.y) * b;
        this.z += (a.z - this.z) * b;
        this.w += (a.w - this.w) * b;
        return this
    },clone: function() {
        return new THREE.Vector4(this.x, this.y, this.z, this.w)
    },setAxisAngleFromQuaternion: function(a) {
        this.w = 2 * Math.acos(a.w);
        var b = Math.sqrt(1 - a.w * a.w);
        1E-4 > b ? (this.x = 1, this.z = this.y = 0) : 
        (this.x = a.x / b, this.y = a.y / b, this.z = a.z / b);
        return this
    },setAxisAngleFromRotationMatrix: function(a) {
        var b, c, d, a = a.elements, e = a[0];
        d = a[4];
        var f = a[8], g = a[1], h = a[5], i = a[9];
        c = a[2];
        b = a[6];
        var j = a[10];
        if (0.01 > Math.abs(d - g) && 0.01 > Math.abs(f - c) && 0.01 > Math.abs(i - b)) {
            if (0.1 > Math.abs(d + g) && 0.1 > Math.abs(f + c) && 0.1 > Math.abs(i + b) && 0.1 > Math.abs(e + h + j - 3))
                return this.set(1, 0, 0, 0), this;
            a = Math.PI;
            e = (e + 1) / 2;
            h = (h + 1) / 2;
            j = (j + 1) / 2;
            d = (d + g) / 4;
            f = (f + c) / 4;
            i = (i + b) / 4;
            e > h && e > j ? 0.01 > e ? (b = 0, d = c = 0.707106781) : (b = Math.sqrt(e), c = d / b, d = f / 
            b) : h > j ? 0.01 > h ? (b = 0.707106781, c = 0, d = 0.707106781) : (c = Math.sqrt(h), b = d / c, d = i / c) : 0.01 > j ? (c = b = 0.707106781, d = 0) : (d = Math.sqrt(j), b = f / d, c = i / d);
            this.set(b, c, d, a);
            return this
        }
        a = Math.sqrt((b - i) * (b - i) + (f - c) * (f - c) + (g - d) * (g - d));
        0.0010 > Math.abs(a) && (a = 1);
        this.x = (b - i) / a;
        this.y = (f - c) / a;
        this.z = (g - d) / a;
        this.w = Math.acos((e + h + j - 1) / 2);
        return this
    }};
THREE.Matrix3 = function() {
    this.elements = new Float32Array(9)
};
THREE.Matrix3.prototype = {constructor: THREE.Matrix3,getInverse: function(a) {
        var b = a.elements, a = b[10] * b[5] - b[6] * b[9], c = -b[10] * b[1] + b[2] * b[9], d = b[6] * b[1] - b[2] * b[5], e = -b[10] * b[4] + b[6] * b[8], f = b[10] * b[0] - b[2] * b[8], g = -b[6] * b[0] + b[2] * b[4], h = b[9] * b[4] - b[5] * b[8], i = -b[9] * b[0] + b[1] * b[8], j = b[5] * b[0] - b[1] * b[4], b = b[0] * a + b[1] * e + b[2] * h;
        0 === b && console.warn("Matrix3.getInverse(): determinant == 0");
        var b = 1 / b, l = this.elements;
        l[0] = b * a;
        l[1] = b * c;
        l[2] = b * d;
        l[3] = b * e;
        l[4] = b * f;
        l[5] = b * g;
        l[6] = b * h;
        l[7] = b * i;
        l[8] = b * j;
        return this
    },
    transpose: function() {
        var a, b = this.elements;
        a = b[1];
        b[1] = b[3];
        b[3] = a;
        a = b[2];
        b[2] = b[6];
        b[6] = a;
        a = b[5];
        b[5] = b[7];
        b[7] = a;
        return this
    },transposeIntoArray: function(a) {
        var b = this.m;
        a[0] = b[0];
        a[1] = b[3];
        a[2] = b[6];
        a[3] = b[1];
        a[4] = b[4];
        a[5] = b[7];
        a[6] = b[2];
        a[7] = b[5];
        a[8] = b[8];
        return this
    }};
THREE.Matrix4 = function(a, b, c, d, e, f, g, h, i, j, l, n, m, q, p, o) {
    this.elements = new Float32Array(16);
    this.set(void 0 !== a ? a : 1, b || 0, c || 0, d || 0, e || 0, void 0 !== f ? f : 1, g || 0, h || 0, i || 0, j || 0, void 0 !== l ? l : 1, n || 0, m || 0, q || 0, p || 0, void 0 !== o ? o : 1)
};
THREE.Matrix4.prototype = {constructor: THREE.Matrix4,set: function(a, b, c, d, e, f, g, h, i, j, l, n, m, q, p, o) {
        var r = this.elements;
        r[0] = a;
        r[4] = b;
        r[8] = c;
        r[12] = d;
        r[1] = e;
        r[5] = f;
        r[9] = g;
        r[13] = h;
        r[2] = i;
        r[6] = j;
        r[10] = l;
        r[14] = n;
        r[3] = m;
        r[7] = q;
        r[11] = p;
        r[15] = o;
        return this
    },identity: function() {
        this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
        return this
    },copy: function(a) {
        a = a.elements;
        this.set(a[0], a[4], a[8], a[12], a[1], a[5], a[9], a[13], a[2], a[6], a[10], a[14], a[3], a[7], a[11], a[15]);
        return this
    },lookAt: function(a, b, c) {
        var d = this.elements, 
        e = THREE.Matrix4.__v1, f = THREE.Matrix4.__v2, g = THREE.Matrix4.__v3;
        g.sub(a, b).normalize();
        0 === g.length() && (g.z = 1);
        e.cross(c, g).normalize();
        0 === e.length() && (g.x += 1E-4, e.cross(c, g).normalize());
        f.cross(g, e);
        d[0] = e.x;
        d[4] = f.x;
        d[8] = g.x;
        d[1] = e.y;
        d[5] = f.y;
        d[9] = g.y;
        d[2] = e.z;
        d[6] = f.z;
        d[10] = g.z;
        return this
    },multiply: function(a, b) {
        var c = a.elements, d = b.elements, e = this.elements, f = c[0], g = c[4], h = c[8], i = c[12], j = c[1], l = c[5], n = c[9], m = c[13], q = c[2], p = c[6], o = c[10], r = c[14], t = c[3], u = c[7], w = c[11], c = c[15], s = d[0], B = d[4], v = d[8], 
        A = d[12], E = d[1], x = d[5], L = d[9], D = d[13], G = d[2], C = d[6], N = d[10], J = d[14], M = d[3], K = d[7], H = d[11], d = d[15];
        e[0] = f * s + g * E + h * G + i * M;
        e[4] = f * B + g * x + h * C + i * K;
        e[8] = f * v + g * L + h * N + i * H;
        e[12] = f * A + g * D + h * J + i * d;
        e[1] = j * s + l * E + n * G + m * M;
        e[5] = j * B + l * x + n * C + m * K;
        e[9] = j * v + l * L + n * N + m * H;
        e[13] = j * A + l * D + n * J + m * d;
        e[2] = q * s + p * E + o * G + r * M;
        e[6] = q * B + p * x + o * C + r * K;
        e[10] = q * v + p * L + o * N + r * H;
        e[14] = q * A + p * D + o * J + r * d;
        e[3] = t * s + u * E + w * G + c * M;
        e[7] = t * B + u * x + w * C + c * K;
        e[11] = t * v + u * L + w * N + c * H;
        e[15] = t * A + u * D + w * J + c * d;
        return this
    },multiplySelf: function(a) {
        return this.multiply(this, 
        a)
    },multiplyToArray: function(a, b, c) {
        var d = this.elements;
        this.multiply(a, b);
        c[0] = d[0];
        c[1] = d[1];
        c[2] = d[2];
        c[3] = d[3];
        c[4] = d[4];
        c[5] = d[5];
        c[6] = d[6];
        c[7] = d[7];
        c[8] = d[8];
        c[9] = d[9];
        c[10] = d[10];
        c[11] = d[11];
        c[12] = d[12];
        c[13] = d[13];
        c[14] = d[14];
        c[15] = d[15];
        return this
    },multiplyScalar: function(a) {
        var b = this.elements;
        b[0] *= a;
        b[4] *= a;
        b[8] *= a;
        b[12] *= a;
        b[1] *= a;
        b[5] *= a;
        b[9] *= a;
        b[13] *= a;
        b[2] *= a;
        b[6] *= a;
        b[10] *= a;
        b[14] *= a;
        b[3] *= a;
        b[7] *= a;
        b[11] *= a;
        b[15] *= a;
        return this
    },multiplyVector3: function(a) {
        var b = this.elements, 
        c = a.x, d = a.y, e = a.z, f = 1 / (b[3] * c + b[7] * d + b[11] * e + b[15]);
        a.x = (b[0] * c + b[4] * d + b[8] * e + b[12]) * f;
        a.y = (b[1] * c + b[5] * d + b[9] * e + b[13]) * f;
        a.z = (b[2] * c + b[6] * d + b[10] * e + b[14]) * f;
        return a
    },multiplyVector4: function(a) {
        var b = this.elements, c = a.x, d = a.y, e = a.z, f = a.w;
        a.x = b[0] * c + b[4] * d + b[8] * e + b[12] * f;
        a.y = b[1] * c + b[5] * d + b[9] * e + b[13] * f;
        a.z = b[2] * c + b[6] * d + b[10] * e + b[14] * f;
        a.w = b[3] * c + b[7] * d + b[11] * e + b[15] * f;
        return a
    },multiplyVector3Array: function(a) {
        for (var b = THREE.Matrix4.__v1, c = 0, d = a.length; c < d; c += 3)
            b.x = a[c], b.y = a[c + 1], b.z = a[c + 2], 
            this.multiplyVector3(b), a[c] = b.x, a[c + 1] = b.y, a[c + 2] = b.z;
        return a
    },rotateAxis: function(a) {
        var b = this.elements, c = a.x, d = a.y, e = a.z;
        a.x = c * b[0] + d * b[4] + e * b[8];
        a.y = c * b[1] + d * b[5] + e * b[9];
        a.z = c * b[2] + d * b[6] + e * b[10];
        a.normalize();
        return a
    },crossVector: function(a) {
        var b = this.elements, c = new THREE.Vector4;
        c.x = b[0] * a.x + b[4] * a.y + b[8] * a.z + b[12] * a.w;
        c.y = b[1] * a.x + b[5] * a.y + b[9] * a.z + b[13] * a.w;
        c.z = b[2] * a.x + b[6] * a.y + b[10] * a.z + b[14] * a.w;
        c.w = a.w ? b[3] * a.x + b[7] * a.y + b[11] * a.z + b[15] * a.w : 1;
        return c
    },determinant: function() {
        var a = 
        this.elements, b = a[0], c = a[4], d = a[8], e = a[12], f = a[1], g = a[5], h = a[9], i = a[13], j = a[2], l = a[6], n = a[10], m = a[14], q = a[3], p = a[7], o = a[11], a = a[15];
        return e * h * l * q - d * i * l * q - e * g * n * q + c * i * n * q + d * g * m * q - c * h * m * q - e * h * j * p + d * i * j * p + e * f * n * p - b * i * n * p - d * f * m * p + b * h * m * p + e * g * j * o - c * i * j * o - e * f * l * o + b * i * l * o + c * f * m * o - b * g * m * o - d * g * j * a + c * h * j * a + d * f * l * a - b * h * l * a - c * f * n * a + b * g * n * a
    },transpose: function() {
        var a = this.elements, b;
        b = a[1];
        a[1] = a[4];
        a[4] = b;
        b = a[2];
        a[2] = a[8];
        a[8] = b;
        b = a[6];
        a[6] = a[9];
        a[9] = b;
        b = a[3];
        a[3] = a[12];
        a[12] = b;
        b = a[7];
        a[7] = a[13];
        a[13] = b;
        b = 
        a[11];
        a[11] = a[14];
        a[14] = b;
        return this
    },flattenToArray: function(a) {
        var b = this.elements;
        a[0] = b[0];
        a[1] = b[1];
        a[2] = b[2];
        a[3] = b[3];
        a[4] = b[4];
        a[5] = b[5];
        a[6] = b[6];
        a[7] = b[7];
        a[8] = b[8];
        a[9] = b[9];
        a[10] = b[10];
        a[11] = b[11];
        a[12] = b[12];
        a[13] = b[13];
        a[14] = b[14];
        a[15] = b[15];
        return a
    },flattenToArrayOffset: function(a, b) {
        var c = this.elements;
        a[b] = c[0];
        a[b + 1] = c[1];
        a[b + 2] = c[2];
        a[b + 3] = c[3];
        a[b + 4] = c[4];
        a[b + 5] = c[5];
        a[b + 6] = c[6];
        a[b + 7] = c[7];
        a[b + 8] = c[8];
        a[b + 9] = c[9];
        a[b + 10] = c[10];
        a[b + 11] = c[11];
        a[b + 12] = c[12];
        a[b + 13] = c[13];
        a[b + 
        14] = c[14];
        a[b + 15] = c[15];
        return a
    },getPosition: function() {
        var a = this.elements;
        return THREE.Matrix4.__v1.set(a[12], a[13], a[14])
    },setPosition: function(a) {
        var b = this.elements;
        b[12] = a.x;
        b[13] = a.y;
        b[14] = a.z;
        return this
    },getColumnX: function() {
        var a = this.elements;
        return THREE.Matrix4.__v1.set(a[0], a[1], a[2])
    },getColumnY: function() {
        var a = this.elements;
        return THREE.Matrix4.__v1.set(a[4], a[5], a[6])
    },getColumnZ: function() {
        var a = this.elements;
        return THREE.Matrix4.__v1.set(a[8], a[9], a[10])
    },getInverse: function(a) {
        var b = 
        this.elements, c = a.elements, d = c[0], e = c[4], f = c[8], g = c[12], h = c[1], i = c[5], j = c[9], l = c[13], n = c[2], m = c[6], q = c[10], p = c[14], o = c[3], r = c[7], t = c[11], c = c[15];
        b[0] = j * p * r - l * q * r + l * m * t - i * p * t - j * m * c + i * q * c;
        b[4] = g * q * r - f * p * r - g * m * t + e * p * t + f * m * c - e * q * c;
        b[8] = f * l * r - g * j * r + g * i * t - e * l * t - f * i * c + e * j * c;
        b[12] = g * j * m - f * l * m - g * i * q + e * l * q + f * i * p - e * j * p;
        b[1] = l * q * o - j * p * o - l * n * t + h * p * t + j * n * c - h * q * c;
        b[5] = f * p * o - g * q * o + g * n * t - d * p * t - f * n * c + d * q * c;
        b[9] = g * j * o - f * l * o - g * h * t + d * l * t + f * h * c - d * j * c;
        b[13] = f * l * n - g * j * n + g * h * q - d * l * q - f * h * p + d * j * p;
        b[2] = i * p * o - l * m * o + l * n * r - h * p * 
        r - i * n * c + h * m * c;
        b[6] = g * m * o - e * p * o - g * n * r + d * p * r + e * n * c - d * m * c;
        b[10] = e * l * o - g * i * o + g * h * r - d * l * r - e * h * c + d * i * c;
        b[14] = g * i * n - e * l * n - g * h * m + d * l * m + e * h * p - d * i * p;
        b[3] = j * m * o - i * q * o - j * n * r + h * q * r + i * n * t - h * m * t;
        b[7] = e * q * o - f * m * o + f * n * r - d * q * r - e * n * t + d * m * t;
        b[11] = f * i * o - e * j * o - f * h * r + d * j * r + e * h * t - d * i * t;
        b[15] = e * j * n - f * i * n + f * h * m - d * j * m - e * h * q + d * i * q;
        this.multiplyScalar(1 / a.determinant());
        return this
    },setRotationFromEuler: function(a, b) {
        var c = this.elements, d = a.x, e = a.y, f = a.z, g = Math.cos(d), d = Math.sin(d), h = Math.cos(e), e = Math.sin(e), i = Math.cos(f), f = 
        Math.sin(f);
        if (void 0 === b || "XYZ" === b) {
            var j = g * i, l = g * f, n = d * i, m = d * f;
            c[0] = h * i;
            c[4] = -h * f;
            c[8] = e;
            c[1] = l + n * e;
            c[5] = j - m * e;
            c[9] = -d * h;
            c[2] = m - j * e;
            c[6] = n + l * e;
            c[10] = g * h
        } else
            "YXZ" === b ? (j = h * i, l = h * f, n = e * i, m = e * f, c[0] = j + m * d, c[4] = n * d - l, c[8] = g * e, c[1] = g * f, c[5] = g * i, c[9] = -d, c[2] = l * d - n, c[6] = m + j * d, c[10] = g * h) : "ZXY" === b ? (j = h * i, l = h * f, n = e * i, m = e * f, c[0] = j - m * d, c[4] = -g * f, c[8] = n + l * d, c[1] = l + n * d, c[5] = g * i, c[9] = m - j * d, c[2] = -g * e, c[6] = d, c[10] = g * h) : "ZYX" === b ? (j = g * i, l = g * f, n = d * i, m = d * f, c[0] = h * i, c[4] = n * e - l, c[8] = j * e + m, c[1] = h * f, c[5] = m * e + j, c[9] = 
            l * e - n, c[2] = -e, c[6] = d * h, c[10] = g * h) : "YZX" === b ? (j = g * h, l = g * e, n = d * h, m = d * e, c[0] = h * i, c[4] = m - j * f, c[8] = n * f + l, c[1] = f, c[5] = g * i, c[9] = -d * i, c[2] = -e * i, c[6] = l * f + n, c[10] = j - m * f) : "XZY" === b && (j = g * h, l = g * e, n = d * h, m = d * e, c[0] = h * i, c[4] = -f, c[8] = e * i, c[1] = j * f + m, c[5] = g * i, c[9] = l * f - n, c[2] = n * f - l, c[6] = d * i, c[10] = m * f + j);
        return this
    },setRotationFromQuaternion: function(a) {
        var b = this.elements, c = a.x, d = a.y, e = a.z, f = a.w, g = c + c, h = d + d, i = e + e, a = c * g, j = c * h, c = c * i, l = d * h, d = d * i, e = e * i, g = f * g, h = f * h, f = f * i;
        b[0] = 1 - (l + e);
        b[4] = j - f;
        b[8] = c + h;
        b[1] = j + f;
        b[5] = 1 - (a + 
        e);
        b[9] = d - g;
        b[2] = c - h;
        b[6] = d + g;
        b[10] = 1 - (a + l);
        return this
    },compose: function(a, b, c) {
        var d = this.elements, e = THREE.Matrix4.__m1, f = THREE.Matrix4.__m2;
        e.identity();
        e.setRotationFromQuaternion(b);
        f.makeScale(c.x, c.y, c.z);
        this.multiply(e, f);
        d[12] = a.x;
        d[13] = a.y;
        d[14] = a.z;
        return this
    },decompose: function(a, b, c) {
        var d = this.elements, e = THREE.Matrix4.__v1, f = THREE.Matrix4.__v2, g = THREE.Matrix4.__v3;
        e.set(d[0], d[1], d[2]);
        f.set(d[4], d[5], d[6]);
        g.set(d[8], d[9], d[10]);
        a = a instanceof THREE.Vector3 ? a : new THREE.Vector3;
        b = 
        b instanceof THREE.Quaternion ? b : new THREE.Quaternion;
        c = c instanceof THREE.Vector3 ? c : new THREE.Vector3;
        c.x = e.length();
        c.y = f.length();
        c.z = g.length();
        a.x = d[12];
        a.y = d[13];
        a.z = d[14];
        d = THREE.Matrix4.__m1;
        d.copy(this);
        d.elements[0] /= c.x;
        d.elements[1] /= c.x;
        d.elements[2] /= c.x;
        d.elements[4] /= c.y;
        d.elements[5] /= c.y;
        d.elements[6] /= c.y;
        d.elements[8] /= c.z;
        d.elements[9] /= c.z;
        d.elements[10] /= c.z;
        b.setFromRotationMatrix(d);
        return [a, b, c]
    },extractPosition: function(a) {
        var b = this.elements, a = a.elements;
        b[12] = a[12];
        b[13] = 
        a[13];
        b[14] = a[14];
        return this
    },extractRotation: function(a) {
        var b = this.elements, a = a.elements, c = THREE.Matrix4.__v1, d = 1 / c.set(a[0], a[1], a[2]).length(), e = 1 / c.set(a[4], a[5], a[6]).length(), c = 1 / c.set(a[8], a[9], a[10]).length();
        b[0] = a[0] * d;
        b[1] = a[1] * d;
        b[2] = a[2] * d;
        b[4] = a[4] * e;
        b[5] = a[5] * e;
        b[6] = a[6] * e;
        b[8] = a[8] * c;
        b[9] = a[9] * c;
        b[10] = a[10] * c;
        return this
    },translate: function(a) {
        var b = this.elements, c = a.x, d = a.y, a = a.z;
        b[12] = b[0] * c + b[4] * d + b[8] * a + b[12];
        b[13] = b[1] * c + b[5] * d + b[9] * a + b[13];
        b[14] = b[2] * c + b[6] * d + b[10] * a + b[14];
        b[15] = b[3] * c + b[7] * d + b[11] * a + b[15];
        return this
    },rotateX: function(a) {
        var b = this.elements, c = b[4], d = b[5], e = b[6], f = b[7], g = b[8], h = b[9], i = b[10], j = b[11], l = Math.cos(a), a = Math.sin(a);
        b[4] = l * c + a * g;
        b[5] = l * d + a * h;
        b[6] = l * e + a * i;
        b[7] = l * f + a * j;
        b[8] = l * g - a * c;
        b[9] = l * h - a * d;
        b[10] = l * i - a * e;
        b[11] = l * j - a * f;
        return this
    },rotateY: function(a) {
        var b = this.elements, c = b[0], d = b[1], e = b[2], f = b[3], g = b[8], h = b[9], i = b[10], j = b[11], l = Math.cos(a), a = Math.sin(a);
        b[0] = l * c - a * g;
        b[1] = l * d - a * h;
        b[2] = l * e - a * i;
        b[3] = l * f - a * j;
        b[8] = l * g + a * c;
        b[9] = l * h + a * d;
        b[10] = 
        l * i + a * e;
        b[11] = l * j + a * f;
        return this
    },rotateZ: function(a) {
        var b = this.elements, c = b[0], d = b[1], e = b[2], f = b[3], g = b[4], h = b[5], i = b[6], j = b[7], l = Math.cos(a), a = Math.sin(a);
        b[0] = l * c + a * g;
        b[1] = l * d + a * h;
        b[2] = l * e + a * i;
        b[3] = l * f + a * j;
        b[4] = l * g - a * c;
        b[5] = l * h - a * d;
        b[6] = l * i - a * e;
        b[7] = l * j - a * f;
        return this
    },rotateByAxis: function(a, b) {
        var c = this.elements;
        if (1 === a.x && 0 === a.y && 0 === a.z)
            return this.rotateX(b);
        if (0 === a.x && 1 === a.y && 0 === a.z)
            return this.rotateY(b);
        if (0 === a.x && 0 === a.y && 1 === a.z)
            return this.rotateZ(b);
        var d = a.x, e = a.y, f = a.z, 
        g = Math.sqrt(d * d + e * e + f * f), d = d / g, e = e / g, f = f / g, g = d * d, h = e * e, i = f * f, j = Math.cos(b), l = Math.sin(b), n = 1 - j, m = d * e * n, q = d * f * n, n = e * f * n, d = d * l, p = e * l, l = f * l, f = g + (1 - g) * j, g = m + l, e = q - p, m = m - l, h = h + (1 - h) * j, l = n + d, q = q + p, n = n - d, i = i + (1 - i) * j, j = c[0], d = c[1], p = c[2], o = c[3], r = c[4], t = c[5], u = c[6], w = c[7], s = c[8], B = c[9], v = c[10], A = c[11];
        c[0] = f * j + g * r + e * s;
        c[1] = f * d + g * t + e * B;
        c[2] = f * p + g * u + e * v;
        c[3] = f * o + g * w + e * A;
        c[4] = m * j + h * r + l * s;
        c[5] = m * d + h * t + l * B;
        c[6] = m * p + h * u + l * v;
        c[7] = m * o + h * w + l * A;
        c[8] = q * j + n * r + i * s;
        c[9] = q * d + n * t + i * B;
        c[10] = q * p + n * u + i * v;
        c[11] = q * o + n * w + i * A;
        return this
    },scale: function(a) {
        var b = this.elements, c = a.x, d = a.y, a = a.z;
        b[0] *= c;
        b[4] *= d;
        b[8] *= a;
        b[1] *= c;
        b[5] *= d;
        b[9] *= a;
        b[2] *= c;
        b[6] *= d;
        b[10] *= a;
        b[3] *= c;
        b[7] *= d;
        b[11] *= a;
        return this
    },getMaxScaleOnAxis: function() {
        var a = this.elements;
        return Math.sqrt(Math.max(a[0] * a[0] + a[1] * a[1] + a[2] * a[2], Math.max(a[4] * a[4] + a[5] * a[5] + a[6] * a[6], a[8] * a[8] + a[9] * a[9] + a[10] * a[10])))
    },makeTranslation: function(a, b, c) {
        this.set(1, 0, 0, a, 0, 1, 0, b, 0, 0, 1, c, 0, 0, 0, 1);
        return this
    },makeRotationX: function(a) {
        var b = Math.cos(a), a = Math.sin(a);
        this.set(1, 0, 0, 0, 0, b, -a, 0, 0, a, b, 0, 0, 0, 0, 1);
        return this
    },makeRotationY: function(a) {
        var b = Math.cos(a), a = Math.sin(a);
        this.set(b, 0, a, 0, 0, 1, 0, 0, -a, 0, b, 0, 0, 0, 0, 1);
        return this
    },makeRotationZ: function(a) {
        var b = Math.cos(a), a = Math.sin(a);
        this.set(b, -a, 0, 0, a, b, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
        return this
    },makeRotationAxis: function(a, b) {
        var c = Math.cos(b), d = Math.sin(b), e = 1 - c, f = a.x, g = a.y, h = a.z, i = e * f, j = e * g;
        this.set(i * f + c, i * g - d * h, i * h + d * g, 0, i * g + d * h, j * g + c, j * h - d * f, 0, i * h - d * g, j * h + d * f, e * h * h + c, 0, 0, 0, 0, 1);
        return this
    },makeScale: function(a, 
    b, c) {
        this.set(a, 0, 0, 0, 0, b, 0, 0, 0, 0, c, 0, 0, 0, 0, 1);
        return this
    },makeFrustum: function(a, b, c, d, e, f) {
        var g = this.elements;
        g[0] = 2 * e / (b - a);
        g[4] = 0;
        g[8] = (b + a) / (b - a);
        g[12] = 0;
        g[1] = 0;
        g[5] = 2 * e / (d - c);
        g[9] = (d + c) / (d - c);
        g[13] = 0;
        g[2] = 0;
        g[6] = 0;
        g[10] = -(f + e) / (f - e);
        g[14] = -2 * f * e / (f - e);
        g[3] = 0;
        g[7] = 0;
        g[11] = -1;
        g[15] = 0;
        return this
    },makePerspective: function(a, b, c, d) {
        var a = c * Math.tan(a * Math.PI / 360), e = -a;
        return this.makeFrustum(e * b, a * b, e, a, c, d)
    },makeOrthographic: function(a, b, c, d, e, f) {
        var g = this.elements, h = b - a, i = c - d, j = f - e;
        g[0] = 2 / 
        h;
        g[4] = 0;
        g[8] = 0;
        g[12] = -((b + a) / h);
        g[1] = 0;
        g[5] = 2 / i;
        g[9] = 0;
        g[13] = -((c + d) / i);
        g[2] = 0;
        g[6] = 0;
        g[10] = -2 / j;
        g[14] = -((f + e) / j);
        g[3] = 0;
        g[7] = 0;
        g[11] = 0;
        g[15] = 1;
        return this
    },clone: function() {
        var a = this.elements;
        return new THREE.Matrix4(a[0], a[4], a[8], a[12], a[1], a[5], a[9], a[13], a[2], a[6], a[10], a[14], a[3], a[7], a[11], a[15])
    }};
THREE.Matrix4.__v1 = new THREE.Vector3;
THREE.Matrix4.__v2 = new THREE.Vector3;
THREE.Matrix4.__v3 = new THREE.Vector3;
THREE.Matrix4.__m1 = new THREE.Matrix4;
THREE.Matrix4.__m2 = new THREE.Matrix4;
THREE.EventTarget = function() {
    var a = {};
    this.addEventListener = function(b, c) {
        void 0 === a[b] && (a[b] = []);
        -1 === a[b].indexOf(c) && a[b].push(c)
    };
    this.dispatchEvent = function(b) {
        for (var c in a[b.type])
            a[b.type][c](b)
    };
    this.removeEventListener = function(b, c) {
        var d = a[b].indexOf(c);
        -1 !== d && a[b].splice(d, 1)
    }
};
THREE.Frustum = function() {
    this.planes = [new THREE.Vector4, new THREE.Vector4, new THREE.Vector4, new THREE.Vector4, new THREE.Vector4, new THREE.Vector4]
};
THREE.Frustum.prototype.setFromMatrix = function(a) {
    var b = this.planes, c = a.elements, a = c[0], d = c[1], e = c[2], f = c[3], g = c[4], h = c[5], i = c[6], j = c[7], l = c[8], n = c[9], m = c[10], q = c[11], p = c[12], o = c[13], r = c[14], c = c[15];
    b[0].set(f - a, j - g, q - l, c - p);
    b[1].set(f + a, j + g, q + l, c + p);
    b[2].set(f + d, j + h, q + n, c + o);
    b[3].set(f - d, j - h, q - n, c - o);
    b[4].set(f - e, j - i, q - m, c - r);
    b[5].set(f + e, j + i, q + m, c + r);
    for (d = 0; 6 > d; d++)
        a = b[d], a.divideScalar(Math.sqrt(a.x * a.x + a.y * a.y + a.z * a.z))
};
THREE.Frustum.prototype.contains = function(a) {
    for (var b = 0, c = this.planes, b = a.matrixWorld, d = b.elements, a = -a.geometry.boundingSphere.radius * b.getMaxScaleOnAxis(), e = 0; 6 > e; e++)
        if (b = c[e].x * d[12] + c[e].y * d[13] + c[e].z * d[14] + c[e].w, b <= a)
            return !1;
    return !0
};
THREE.Frustum.__v1 = new THREE.Vector3;
(function(a) {
    a.Ray = function(b, c, d, e) {
        this.origin = b || new a.Vector3;
        this.direction = c || new a.Vector3;
        this.near = d || 0;
        this.far = e || Infinity
    };
    var b = new a.Vector3, c = new a.Vector3, d = new a.Vector3, e = new a.Vector3, f = new a.Vector3, g = new a.Vector3, h = new a.Matrix4, i = function(a, b) {
        return a.distance - b.distance
    }, j = new a.Vector3, l = new a.Vector3, n = new a.Vector3, m = function(a, b, c) {
        j.sub(c, a);
        var d = j.dot(b), a = l.add(a, n.copy(b).multiplyScalar(d));
        return c.distanceTo(a)
    }, q = function(a, b, c, d) {
        j.sub(d, b);
        l.sub(c, b);
        n.sub(a, 
        b);
        var a = j.dot(j), b = j.dot(l), c = j.dot(n), e = l.dot(l), d = l.dot(n), f = 1 / (a * e - b * b), e = (e * c - b * d) * f, a = (a * d - b * c) * f;
        return 0 <= e && 0 <= a && 1 > e + a
    }, p = function(i, j, l) {
        var n, o;
        if (i instanceof a.Particle) {
            n = m(j.origin, j.direction, i.matrixWorld.getPosition());
            if (n > i.scale.x)
                return l;
            o = {distance: n,point: i.position,face: null,object: i};
            l.push(o)
        } else if (i instanceof a.Mesh) {
            var p = i.geometry.boundingSphere.radius * i.matrixWorld.getMaxScaleOnAxis();
            n = m(j.origin, j.direction, i.matrixWorld.getPosition());
            if (n > p)
                return l;
            var v, 
            A, E = i.geometry, x = E.vertices, L, D, G;
            L = i.geometry.materials;
            D = i.material instanceof a.MeshFaceMaterial;
            var C, N = j.precision;
            i.matrixRotationWorld.extractRotation(i.matrixWorld);
            b.copy(j.origin);
            h.getInverse(i.matrixWorld);
            c.copy(b);
            h.multiplyVector3(c);
            d.copy(j.direction);
            h.rotateAxis(d).normalize();
            p = 0;
            for (v = E.faces.length; p < v; p++)
                if (o = E.faces[p], n = !0 === D ? L[o.materialIndex] : i.material, void 0 !== n && (G = n.side, e.sub(o.centroid, c), f = o.normal, n = d.dot(f), !(Math.abs(n) < N) && (A = f.dot(e) / n, !(0 > A) && (G === a.DoubleSide || 
                (G === a.FrontSide ? 0 > n : 0 < n)))))
                    if (g.add(c, d.multiplyScalar(A)), o instanceof a.Face3)
                        n = x[o.a], A = x[o.b], G = x[o.c], q(g, n, A, G) && (A = i.matrixWorld.multiplyVector3(g.clone()), n = b.distanceTo(A), n < j.near || n > j.far || (o = {distance: n,point: A,face: o,faceIndex: p,object: i}, l.push(o)));
                    else if (o instanceof a.Face4 && (n = x[o.a], A = x[o.b], G = x[o.c], C = x[o.d], q(g, n, A, C) || q(g, A, G, C)))
                        A = i.matrixWorld.multiplyVector3(g.clone()), n = b.distanceTo(A), n < j.near || n > j.far || (o = {distance: n,point: A,face: o,faceIndex: p,object: i}, l.push(o))
        }
    }, 
    o = function(a, b, c) {
        for (var a = a.getDescendants(), d = 0, e = a.length; d < e; d++)
            p(a[d], b, c)
    };
    a.Ray.prototype.precision = 1E-4;
    a.Ray.prototype.set = function(a, b) {
        this.origin = a;
        this.direction = b
    };
    a.Ray.prototype.intersectObject = function(a, b) {
        var c = [];
        !0 === b && o(a, this, c);
        p(a, this, c);
        c.sort(i);
        return c
    };
    a.Ray.prototype.intersectObjects = function(a, b) {
        for (var c = [], d = 0, e = a.length; d < e; d++)
            p(a[d], this, c), !0 === b && o(a[d], this, c);
        c.sort(i);
        return c
    }
})(THREE);
THREE.Rectangle = function() {
    function a() {
        f = d - b;
        g = e - c
    }
    var b = 0, c = 0, d = 0, e = 0, f = 0, g = 0, h = !0;
    this.getX = function() {
        return b
    };
    this.getY = function() {
        return c
    };
    this.getWidth = function() {
        return f
    };
    this.getHeight = function() {
        return g
    };
    this.getLeft = function() {
        return b
    };
    this.getTop = function() {
        return c
    };
    this.getRight = function() {
        return d
    };
    this.getBottom = function() {
        return e
    };
    this.set = function(f, g, l, n) {
        h = !1;
        b = f;
        c = g;
        d = l;
        e = n;
        a()
    };
    this.addPoint = function(f, g) {
        !0 === h ? (h = !1, b = f, c = g, d = f, e = g) : (b = b < f ? b : f, c = c < g ? c : g, d = d > f ? d : f, e = e > 
        g ? e : g);
        a()
    };
    this.add3Points = function(f, g, l, n, m, q) {
        !0 === h ? (h = !1, b = f < l ? f < m ? f : m : l < m ? l : m, c = g < n ? g < q ? g : q : n < q ? n : q, d = f > l ? f > m ? f : m : l > m ? l : m, e = g > n ? g > q ? g : q : n > q ? n : q) : (b = f < l ? f < m ? f < b ? f : b : m < b ? m : b : l < m ? l < b ? l : b : m < b ? m : b, c = g < n ? g < q ? g < c ? g : c : q < c ? q : c : n < q ? n < c ? n : c : q < c ? q : c, d = f > l ? f > m ? f > d ? f : d : m > d ? m : d : l > m ? l > d ? l : d : m > d ? m : d, e = g > n ? g > q ? g > e ? g : e : q > e ? q : e : n > q ? n > e ? n : e : q > e ? q : e);
        a()
    };
    this.addRectangle = function(f) {
        !0 === h ? (h = !1, b = f.getLeft(), c = f.getTop(), d = f.getRight(), e = f.getBottom()) : (b = b < f.getLeft() ? b : f.getLeft(), c = c < f.getTop() ? c : f.getTop(), 
        d = d > f.getRight() ? d : f.getRight(), e = e > f.getBottom() ? e : f.getBottom());
        a()
    };
    this.inflate = function(f) {
        b -= f;
        c -= f;
        d += f;
        e += f;
        a()
    };
    this.minSelf = function(f) {
        b = b > f.getLeft() ? b : f.getLeft();
        c = c > f.getTop() ? c : f.getTop();
        d = d < f.getRight() ? d : f.getRight();
        e = e < f.getBottom() ? e : f.getBottom();
        a()
    };
    this.intersects = function(a) {
        return d < a.getLeft() || b > a.getRight() || e < a.getTop() || c > a.getBottom() ? !1 : !0
    };
    this.empty = function() {
        h = !0;
        e = d = c = b = 0;
        a()
    };
    this.isEmpty = function() {
        return h
    }
};
THREE.Math = {clamp: function(a, b, c) {
        return a < b ? b : a > c ? c : a
    },clampBottom: function(a, b) {
        return a < b ? b : a
    },mapLinear: function(a, b, c, d, e) {
        return d + (a - b) * (e - d) / (c - b)
    },random16: function() {
        return (65280 * Math.random() + 255 * Math.random()) / 65535
    },randInt: function(a, b) {
        return a + Math.floor(Math.random() * (b - a + 1))
    },randFloat: function(a, b) {
        return a + Math.random() * (b - a)
    },randFloatSpread: function(a) {
        return a * (0.5 - Math.random())
    },sign: function(a) {
        return 0 > a ? -1 : 0 < a ? 1 : 0
    }};
THREE.Object3D = function() {
    this.id = THREE.Object3DCount++;
    this.name = "";
    this.properties = {};
    this.parent = void 0;
    this.children = [];
    this.up = new THREE.Vector3(0, 1, 0);
    this.position = new THREE.Vector3;
    this.rotation = new THREE.Vector3;
    this.eulerOrder = "XYZ";
    this.scale = new THREE.Vector3(1, 1, 1);
    this.renderDepth = null;
    this.rotationAutoUpdate = !0;
    this.matrix = new THREE.Matrix4;
    this.matrixWorld = new THREE.Matrix4;
    this.matrixRotationWorld = new THREE.Matrix4;
    this.matrixWorldNeedsUpdate = this.matrixAutoUpdate = !0;
    this.quaternion = 
    new THREE.Quaternion;
    this.useQuaternion = !1;
    this.boundRadius = 0;
    this.boundRadiusScale = 1;
    this.visible = !0;
    this.receiveShadow = this.castShadow = !1;
    this.frustumCulled = !0;
    this._vector = new THREE.Vector3
};
THREE.Object3D.prototype = {constructor: THREE.Object3D,applyMatrix: function(a) {
        this.matrix.multiply(a, this.matrix);
        this.scale.getScaleFromMatrix(this.matrix);
        a = (new THREE.Matrix4).extractRotation(this.matrix);
        this.rotation.setEulerFromRotationMatrix(a, this.eulerOrder);
        this.position.getPositionFromMatrix(this.matrix)
    },translate: function(a, b) {
        this.matrix.rotateAxis(b);
        this.position.addSelf(b.multiplyScalar(a))
    },translateX: function(a) {
        this.translate(a, this._vector.set(1, 0, 0))
    },translateY: function(a) {
        this.translate(a, 
        this._vector.set(0, 1, 0))
    },translateZ: function(a) {
        this.translate(a, this._vector.set(0, 0, 1))
    },localToWorld: function(a) {
        return this.matrixWorld.multiplyVector3(a)
    },worldToLocal: function(a) {
        return THREE.Object3D.__m1.getInverse(this.matrixWorld).multiplyVector3(a)
    },lookAt: function(a) {
        this.matrix.lookAt(a, this.position, this.up);
        this.rotationAutoUpdate && this.rotation.setEulerFromRotationMatrix(this.matrix, this.eulerOrder)
    },add: function(a) {
        if (a === this)
            console.warn("THREE.Object3D.add: An object can't be added as a child of itself.");
        else if (a instanceof THREE.Object3D) {
            void 0 !== a.parent && a.parent.remove(a);
            a.parent = this;
            this.children.push(a);
            for (var b = this; void 0 !== b.parent; )
                b = b.parent;
            void 0 !== b && b instanceof THREE.Scene && b.__addObject(a)
        }
    },remove: function(a) {
        var b = this.children.indexOf(a);
        if (-1 !== b) {
            a.parent = void 0;
            this.children.splice(b, 1);
            for (b = this; void 0 !== b.parent; )
                b = b.parent;
            void 0 !== b && b instanceof THREE.Scene && b.__removeObject(a)
        }
    },getChildByName: function(a, b) {
        var c, d, e;
        c = 0;
        for (d = this.children.length; c < d; c++)
            if (e = this.children[c], 
            e.name === a || b && (e = e.getChildByName(a, b), void 0 !== e))
                return e
    },getDescendants: function(a) {
        void 0 === a && (a = []);
        Array.prototype.push.apply(a, this.children);
        for (var b = 0, c = this.children.length; b < c; b++)
            this.children[b].getDescendants(a);
        return a
    },updateMatrix: function() {
        this.matrix.setPosition(this.position);
        !1 === this.useQuaternion ? this.matrix.setRotationFromEuler(this.rotation, this.eulerOrder) : this.matrix.setRotationFromQuaternion(this.quaternion);
        if (1 !== this.scale.x || 1 !== this.scale.y || 1 !== this.scale.z)
            this.matrix.scale(this.scale), 
            this.boundRadiusScale = Math.max(this.scale.x, Math.max(this.scale.y, this.scale.z));
        this.matrixWorldNeedsUpdate = !0
    },updateMatrixWorld: function(a) {
        !0 === this.matrixAutoUpdate && this.updateMatrix();
        if (!0 === this.matrixWorldNeedsUpdate || !0 === a)
            void 0 === this.parent ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiply(this.parent.matrixWorld, this.matrix), this.matrixWorldNeedsUpdate = !1, a = !0;
        for (var b = 0, c = this.children.length; b < c; b++)
            this.children[b].updateMatrixWorld(a)
    },clone: function() {
    }};
THREE.Object3D.__m1 = new THREE.Matrix4;
THREE.Object3DCount = 0;
THREE.Projector = function() {
    function a() {
        if (f === h) {
            var a = new THREE.RenderableObject;
            g.push(a);
            h++;
            f++;
            return a
        }
        return g[f++]
    }
    function b() {
        if (j === n) {
            var a = new THREE.RenderableVertex;
            l.push(a);
            n++;
            j++;
            return a
        }
        return l[j++]
    }
    function c(a, b) {
        return b.z - a.z
    }
    function d(a, b) {
        var c = 0, d = 1, e = a.z + a.w, f = b.z + b.w, g = -a.z + a.w, h = -b.z + b.w;
        if (0 <= e && 0 <= f && 0 <= g && 0 <= h)
            return !0;
        if (0 > e && 0 > f || 0 > g && 0 > h)
            return !1;
        0 > e ? c = Math.max(c, e / (e - f)) : 0 > f && (d = Math.min(d, e / (e - f)));
        0 > g ? c = Math.max(c, g / (g - h)) : 0 > h && (d = Math.min(d, g / (g - h)));
        if (d < 
        c)
            return !1;
        a.lerpSelf(b, c);
        b.lerpSelf(a, 1 - d);
        return !0
    }
    var e, f, g = [], h = 0, i, j, l = [], n = 0, m, q, p = [], o = 0, r, t = [], u = 0, w, s, B = [], v = 0, A, E, x = [], L = 0, D = {objects: [],sprites: [],lights: [],elements: []}, G = new THREE.Vector3, C = new THREE.Vector4, N = new THREE.Matrix4, J = new THREE.Matrix4, M = new THREE.Frustum, K = new THREE.Vector4, H = new THREE.Vector4;
    this.projectVector = function(a, b) {
        b.matrixWorldInverse.getInverse(b.matrixWorld);
        N.multiply(b.projectionMatrix, b.matrixWorldInverse);
        N.multiplyVector3(a);
        return a
    };
    this.unprojectVector = 
    function(a, b) {
        b.projectionMatrixInverse.getInverse(b.projectionMatrix);
        N.multiply(b.matrixWorld, b.projectionMatrixInverse);
        N.multiplyVector3(a);
        return a
    };
    this.pickingRay = function(a, b) {
        var c;
        a.z = -1;
        c = new THREE.Vector3(a.x, a.y, 1);
        this.unprojectVector(a, b);
        this.unprojectVector(c, b);
        c.subSelf(a).normalize();
        return new THREE.Ray(a, c)
    };
    this.projectScene = function(g, h, n, I) {
        var Y = h.near, O = h.far, na = !1, qa, ca, fa, R, Q, ha, Ba, ma, ea, wa, va, Qa, ja, xa, Ia, cb;
        E = s = r = q = 0;
        D.elements.length = 0;
        g.updateMatrixWorld();
        void 0 === 
        h.parent && h.updateMatrixWorld();
        h.matrixWorldInverse.getInverse(h.matrixWorld);
        N.multiply(h.projectionMatrix, h.matrixWorldInverse);
        M.setFromMatrix(N);
        f = 0;
        D.objects.length = 0;
        D.sprites.length = 0;
        D.lights.length = 0;
        var db = function(b) {
            for (var c = 0, d = b.children.length; c < d; c++) {
                var f = b.children[c];
                if (!1 !== f.visible) {
                    if (f instanceof THREE.Light)
                        D.lights.push(f);
                    else if (f instanceof THREE.Mesh || f instanceof THREE.Line) {
                        if (!1 === f.frustumCulled || !0 === M.contains(f))
                            e = a(), e.object = f, null !== f.renderDepth ? e.z = f.renderDepth : 
                            (G.copy(f.matrixWorld.getPosition()), N.multiplyVector3(G), e.z = G.z), D.objects.push(e)
                    } else
                        f instanceof THREE.Sprite || f instanceof THREE.Particle ? (e = a(), e.object = f, null !== f.renderDepth ? e.z = f.renderDepth : (G.copy(f.matrixWorld.getPosition()), N.multiplyVector3(G), e.z = G.z), D.sprites.push(e)) : (e = a(), e.object = f, null !== f.renderDepth ? e.z = f.renderDepth : (G.copy(f.matrixWorld.getPosition()), N.multiplyVector3(G), e.z = G.z), D.objects.push(e));
                    db(f)
                }
            }
        };
        db(g);
        !0 === n && D.objects.sort(c);
        g = 0;
        for (n = D.objects.length; g < 
        n; g++)
            if (ma = D.objects[g].object, ea = ma.matrixWorld, j = 0, ma instanceof THREE.Mesh) {
                wa = ma.geometry;
                va = ma.geometry.materials;
                fa = wa.vertices;
                Qa = wa.faces;
                xa = wa.faceVertexUvs;
                wa = ma.matrixRotationWorld.extractRotation(ea);
                cb = ma.material instanceof THREE.MeshFaceMaterial;
                qa = 0;
                for (ca = fa.length; qa < ca; qa++)
                    i = b(), i.positionWorld.copy(fa[qa]), ea.multiplyVector3(i.positionWorld), i.positionScreen.copy(i.positionWorld), N.multiplyVector4(i.positionScreen), i.positionScreen.x /= i.positionScreen.w, i.positionScreen.y /= i.positionScreen.w, 
                    i.visible = i.positionScreen.z > Y && i.positionScreen.z < O;
                fa = 0;
                for (qa = Qa.length; fa < qa; fa++)
                    if (Ba = Qa[fa], ca = !0 === cb ? va[Ba.materialIndex] : ma.material, void 0 !== ca) {
                        ha = ca.side;
                        if (Ba instanceof THREE.Face3)
                            if (R = l[Ba.a], Q = l[Ba.b], ja = l[Ba.c], !0 === R.visible && !0 === Q.visible && !0 === ja.visible)
                                if (na = 0 > (ja.positionScreen.x - R.positionScreen.x) * (Q.positionScreen.y - R.positionScreen.y) - (ja.positionScreen.y - R.positionScreen.y) * (Q.positionScreen.x - R.positionScreen.x), ha === THREE.DoubleSide || na === (ha === THREE.FrontSide))
                                    q === 
                                    o ? (Ia = new THREE.RenderableFace3, p.push(Ia), o++, q++, m = Ia) : m = p[q++], m.v1.copy(R), m.v2.copy(Q), m.v3.copy(ja);
                                else
                                    continue;
                            else
                                continue;
                        else if (Ba instanceof THREE.Face4)
                            if (R = l[Ba.a], Q = l[Ba.b], ja = l[Ba.c], Ia = l[Ba.d], !0 === R.visible && !0 === Q.visible && !0 === ja.visible && !0 === Ia.visible)
                                if (na = 0 > (Ia.positionScreen.x - R.positionScreen.x) * (Q.positionScreen.y - R.positionScreen.y) - (Ia.positionScreen.y - R.positionScreen.y) * (Q.positionScreen.x - R.positionScreen.x) || 0 > (Q.positionScreen.x - ja.positionScreen.x) * (Ia.positionScreen.y - 
                                ja.positionScreen.y) - (Q.positionScreen.y - ja.positionScreen.y) * (Ia.positionScreen.x - ja.positionScreen.x), ha === THREE.DoubleSide || na === (ha === THREE.FrontSide)) {
                                    if (r === u) {
                                        var $a = new THREE.RenderableFace4;
                                        t.push($a);
                                        u++;
                                        r++;
                                        m = $a
                                    } else
                                        m = t[r++];
                                    m.v1.copy(R);
                                    m.v2.copy(Q);
                                    m.v3.copy(ja);
                                    m.v4.copy(Ia)
                                } else
                                    continue;
                            else
                                continue;
                        m.normalWorld.copy(Ba.normal);
                        !1 === na && (ha === THREE.BackSide || ha === THREE.DoubleSide) && m.normalWorld.negate();
                        wa.multiplyVector3(m.normalWorld);
                        m.centroidWorld.copy(Ba.centroid);
                        ea.multiplyVector3(m.centroidWorld);
                        m.centroidScreen.copy(m.centroidWorld);
                        N.multiplyVector3(m.centroidScreen);
                        Ba = Ba.vertexNormals;
                        R = 0;
                        for (Q = Ba.length; R < Q; R++)
                            ja = m.vertexNormalsWorld[R], ja.copy(Ba[R]), !1 === na && (ha === THREE.BackSide || ha === THREE.DoubleSide) && ja.negate(), wa.multiplyVector3(ja);
                        m.vertexNormalsLength = Ba.length;
                        R = 0;
                        for (Q = xa.length; R < Q; R++)
                            if (ja = xa[R][fa], void 0 !== ja) {
                                ha = 0;
                                for (Ba = ja.length; ha < Ba; ha++)
                                    m.uvs[R][ha] = ja[ha]
                            }
                        m.material = ca;
                        m.z = m.centroidScreen.z;
                        D.elements.push(m)
                    }
            } else if (ma instanceof THREE.Line) {
                J.multiply(N, 
                ea);
                fa = ma.geometry.vertices;
                R = b();
                R.positionScreen.copy(fa[0]);
                J.multiplyVector4(R.positionScreen);
                ea = ma.type === THREE.LinePieces ? 2 : 1;
                qa = 1;
                for (ca = fa.length; qa < ca; qa++)
                    R = b(), R.positionScreen.copy(fa[qa]), J.multiplyVector4(R.positionScreen), 0 < (qa + 1) % ea || (Q = l[j - 2], K.copy(R.positionScreen), H.copy(Q.positionScreen), !0 === d(K, H) && (K.multiplyScalar(1 / K.w), H.multiplyScalar(1 / H.w), s === v ? (va = new THREE.RenderableLine, B.push(va), v++, s++, w = va) : w = B[s++], w.v1.positionScreen.copy(K), w.v2.positionScreen.copy(H), w.z = 
                    Math.max(K.z, H.z), w.material = ma.material, D.elements.push(w)))
            }
        g = 0;
        for (n = D.sprites.length; g < n; g++)
            ma = D.sprites[g].object, ea = ma.matrixWorld, ma instanceof THREE.Particle && (C.set(ea.elements[12], ea.elements[13], ea.elements[14], 1), N.multiplyVector4(C), C.z /= C.w, 0 < C.z && 1 > C.z && (E === L ? (Y = new THREE.RenderableParticle, x.push(Y), L++, E++, A = Y) : A = x[E++], A.object = ma, A.x = C.x / C.w, A.y = C.y / C.w, A.z = C.z, A.rotation = ma.rotation.z, A.scale.x = ma.scale.x * Math.abs(A.x - (C.x + h.projectionMatrix.elements[0]) / (C.w + h.projectionMatrix.elements[12])), 
            A.scale.y = ma.scale.y * Math.abs(A.y - (C.y + h.projectionMatrix.elements[5]) / (C.w + h.projectionMatrix.elements[13])), A.material = ma.material, D.elements.push(A)));
        !0 === I && D.elements.sort(c);
        return D
    }
};
THREE.Quaternion = function(a, b, c, d) {
    this.x = a || 0;
    this.y = b || 0;
    this.z = c || 0;
    this.w = void 0 !== d ? d : 1
};
THREE.Quaternion.prototype = {constructor: THREE.Quaternion,set: function(a, b, c, d) {
        this.x = a;
        this.y = b;
        this.z = c;
        this.w = d;
        return this
    },copy: function(a) {
        this.x = a.x;
        this.y = a.y;
        this.z = a.z;
        this.w = a.w;
        return this
    },setFromEuler: function(a, b) {
        var c = Math.cos(a.x / 2), d = Math.cos(a.y / 2), e = Math.cos(a.z / 2), f = Math.sin(a.x / 2), g = Math.sin(a.y / 2), h = Math.sin(a.z / 2);
        void 0 === b || "XYZ" === b ? (this.x = f * d * e + c * g * h, this.y = c * g * e - f * d * h, this.z = c * d * h + f * g * e, this.w = c * d * e - f * g * h) : "YXZ" === b ? (this.x = f * d * e + c * g * h, this.y = c * g * e - f * d * h, this.z = c * d * 
        h - f * g * e, this.w = c * d * e + f * g * h) : "ZXY" === b ? (this.x = f * d * e - c * g * h, this.y = c * g * e + f * d * h, this.z = c * d * h + f * g * e, this.w = c * d * e - f * g * h) : "ZYX" === b ? (this.x = f * d * e - c * g * h, this.y = c * g * e + f * d * h, this.z = c * d * h - f * g * e, this.w = c * d * e + f * g * h) : "YZX" === b ? (this.x = f * d * e + c * g * h, this.y = c * g * e + f * d * h, this.z = c * d * h - f * g * e, this.w = c * d * e - f * g * h) : "XZY" === b && (this.x = f * d * e - c * g * h, this.y = c * g * e - f * d * h, this.z = c * d * h + f * g * e, this.w = c * d * e + f * g * h);
        return this
    },setFromAxisAngle: function(a, b) {
        var c = b / 2, d = Math.sin(c);
        this.x = a.x * d;
        this.y = a.y * d;
        this.z = a.z * d;
        this.w = Math.cos(c);
        return this
    },setFromRotationMatrix: function(a) {
        var b = a.elements, c = b[0], a = b[4], d = b[8], e = b[1], f = b[5], g = b[9], h = b[2], i = b[6], b = b[10], j = c + f + b;
        0 < j ? (c = 0.5 / Math.sqrt(j + 1), this.w = 0.25 / c, this.x = (i - g) * c, this.y = (d - h) * c, this.z = (e - a) * c) : c > f && c > b ? (c = 2 * Math.sqrt(1 + c - f - b), this.w = (i - g) / c, this.x = 0.25 * c, this.y = (a + e) / c, this.z = (d + h) / c) : f > b ? (c = 2 * Math.sqrt(1 + f - c - b), this.w = (d - h) / c, this.x = (a + e) / c, this.y = 0.25 * c, this.z = (g + i) / c) : (c = 2 * Math.sqrt(1 + b - c - f), this.w = (e - a) / c, this.x = (d + h) / c, this.y = (g + i) / c, this.z = 0.25 * c);
        return this
    },calculateW: function() {
        this.w = 
        -Math.sqrt(Math.abs(1 - this.x * this.x - this.y * this.y - this.z * this.z));
        return this
    },inverse: function() {
        this.x *= -1;
        this.y *= -1;
        this.z *= -1;
        return this
    },length: function() {
        return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w)
    },normalize: function() {
        var a = Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
        0 === a ? this.w = this.z = this.y = this.x = 0 : (a = 1 / a, this.x *= a, this.y *= a, this.z *= a, this.w *= a);
        return this
    },multiply: function(a, b) {
        var c = a.x, d = a.y, e = a.z, f = a.w, g = b.x, h = b.y, i = b.z, j = b.w;
        this.x = c * j + d * i - e * h + f * g;
        this.y = -c * i + d * j + e * g + f * h;
        this.z = c * h - d * g + e * j + f * i;
        this.w = -c * g - d * h - e * i + f * j;
        return this
    },multiplySelf: function(a) {
        var b = this.x, c = this.y, d = this.z, e = this.w, f = a.x, g = a.y, h = a.z, a = a.w;
        this.x = b * a + e * f + c * h - d * g;
        this.y = c * a + e * g + d * f - b * h;
        this.z = d * a + e * h + b * g - c * f;
        this.w = e * a - b * f - c * g - d * h;
        return this
    },multiplyVector3: function(a, b) {
        b || (b = a);
        var c = a.x, d = a.y, e = a.z, f = this.x, g = this.y, h = this.z, i = this.w, j = i * c + g * e - h * d, l = i * d + h * c - f * e, n = i * e + f * d - g * c, c = -f * c - g * d - h * e;
        b.x = j * i + c * -f + l * -h - n * -g;
        b.y = l * i + c * -g + n * -f - j * -h;
        b.z = n * i + c * -h + j * -g - l * -f;
        return b
    },slerpSelf: function(a, b) {
        var c = this.x, d = this.y, e = this.z, f = this.w, g = f * a.w + c * a.x + d * a.y + e * a.z;
        0 > g ? (this.w = -a.w, this.x = -a.x, this.y = -a.y, this.z = -a.z, g = -g) : this.copy(a);
        if (1 <= g)
            return this.w = f, this.x = c, this.y = d, this.z = e, this;
        var h = Math.acos(g), i = Math.sqrt(1 - g * g);
        if (0.0010 > Math.abs(i))
            return this.w = 0.5 * (f + this.w), this.x = 0.5 * (c + this.x), this.y = 0.5 * (d + this.y), this.z = 0.5 * (e + this.z), this;
        g = Math.sin((1 - b) * h) / i;
        h = Math.sin(b * h) / i;
        this.w = f * g + this.w * h;
        this.x = c * g + this.x * h;
        this.y = d * g + 
        this.y * h;
        this.z = e * g + this.z * h;
        return this
    },clone: function() {
        return new THREE.Quaternion(this.x, this.y, this.z, this.w)
    }};
THREE.Quaternion.slerp = function(a, b, c, d) {
    var e = a.w * b.w + a.x * b.x + a.y * b.y + a.z * b.z;
    0 > e ? (c.w = -b.w, c.x = -b.x, c.y = -b.y, c.z = -b.z, e = -e) : c.copy(b);
    if (1 <= Math.abs(e))
        return c.w = a.w, c.x = a.x, c.y = a.y, c.z = a.z, c;
    var b = Math.acos(e), f = Math.sqrt(1 - e * e);
    if (0.0010 > Math.abs(f))
        return c.w = 0.5 * (a.w + c.w), c.x = 0.5 * (a.x + c.x), c.y = 0.5 * (a.y + c.y), c.z = 0.5 * (a.z + c.z), c;
    e = Math.sin((1 - d) * b) / f;
    d = Math.sin(d * b) / f;
    c.w = a.w * e + c.w * d;
    c.x = a.x * e + c.x * d;
    c.y = a.y * e + c.y * d;
    c.z = a.z * e + c.z * d;
    return c
};
THREE.Vertex = function(a) {
    console.warn("THREE.Vertex has been DEPRECATED. Use THREE.Vector3 instead.");
    return a
};
THREE.Face3 = function(a, b, c, d, e, f) {
    this.a = a;
    this.b = b;
    this.c = c;
    this.normal = d instanceof THREE.Vector3 ? d : new THREE.Vector3;
    this.vertexNormals = d instanceof Array ? d : [];
    this.color = e instanceof THREE.Color ? e : new THREE.Color;
    this.vertexColors = e instanceof Array ? e : [];
    this.vertexTangents = [];
    this.materialIndex = f;
    this.centroid = new THREE.Vector3
};
THREE.Face3.prototype = {constructor: THREE.Face3,clone: function() {
        var a = new THREE.Face3(this.a, this.b, this.c);
        a.normal.copy(this.normal);
        a.color.copy(this.color);
        a.centroid.copy(this.centroid);
        a.materialIndex = this.materialIndex;
        var b, c;
        b = 0;
        for (c = this.vertexNormals.length; b < c; b++)
            a.vertexNormals[b] = this.vertexNormals[b].clone();
        b = 0;
        for (c = this.vertexColors.length; b < c; b++)
            a.vertexColors[b] = this.vertexColors[b].clone();
        b = 0;
        for (c = this.vertexTangents.length; b < c; b++)
            a.vertexTangents[b] = this.vertexTangents[b].clone();
        return a
    }};
THREE.Face4 = function(a, b, c, d, e, f, g) {
    this.a = a;
    this.b = b;
    this.c = c;
    this.d = d;
    this.normal = e instanceof THREE.Vector3 ? e : new THREE.Vector3;
    this.vertexNormals = e instanceof Array ? e : [];
    this.color = f instanceof THREE.Color ? f : new THREE.Color;
    this.vertexColors = f instanceof Array ? f : [];
    this.vertexTangents = [];
    this.materialIndex = g;
    this.centroid = new THREE.Vector3
};
THREE.Face4.prototype = {constructor: THREE.Face4,clone: function() {
        var a = new THREE.Face4(this.a, this.b, this.c, this.d);
        a.normal.copy(this.normal);
        a.color.copy(this.color);
        a.centroid.copy(this.centroid);
        a.materialIndex = this.materialIndex;
        var b, c;
        b = 0;
        for (c = this.vertexNormals.length; b < c; b++)
            a.vertexNormals[b] = this.vertexNormals[b].clone();
        b = 0;
        for (c = this.vertexColors.length; b < c; b++)
            a.vertexColors[b] = this.vertexColors[b].clone();
        b = 0;
        for (c = this.vertexTangents.length; b < c; b++)
            a.vertexTangents[b] = this.vertexTangents[b].clone();
        return a
    }};
THREE.UV = function(a, b) {
    this.u = a || 0;
    this.v = b || 0
};
THREE.UV.prototype = {constructor: THREE.UV,set: function(a, b) {
        this.u = a;
        this.v = b;
        return this
    },copy: function(a) {
        this.u = a.u;
        this.v = a.v;
        return this
    },lerpSelf: function(a, b) {
        this.u += (a.u - this.u) * b;
        this.v += (a.v - this.v) * b;
        return this
    },clone: function() {
        return new THREE.UV(this.u, this.v)
    }};
THREE.Geometry = function() {
    this.id = THREE.GeometryCount++;
    this.name = "";
    this.vertices = [];
    this.colors = [];
    this.materials = [];
    this.faces = [];
    this.faceUvs = [[]];
    this.faceVertexUvs = [[]];
    this.morphTargets = [];
    this.morphColors = [];
    this.morphNormals = [];
    this.skinWeights = [];
    this.skinIndices = [];
    this.boundingSphere = this.boundingBox = null;
    this.hasTangents = !1;
    this.dynamic = !0
};
THREE.Geometry.prototype = {constructor: THREE.Geometry,applyMatrix: function(a) {
        var b = new THREE.Matrix4;
        b.extractRotation(a);
        for (var c = 0, d = this.vertices.length; c < d; c++)
            a.multiplyVector3(this.vertices[c]);
        c = 0;
        for (d = this.faces.length; c < d; c++) {
            var e = this.faces[c];
            b.multiplyVector3(e.normal);
            for (var f = 0, g = e.vertexNormals.length; f < g; f++)
                b.multiplyVector3(e.vertexNormals[f]);
            a.multiplyVector3(e.centroid)
        }
    },computeCentroids: function() {
        var a, b, c;
        a = 0;
        for (b = this.faces.length; a < b; a++)
            c = this.faces[a], c.centroid.set(0, 
            0, 0), c instanceof THREE.Face3 ? (c.centroid.addSelf(this.vertices[c.a]), c.centroid.addSelf(this.vertices[c.b]), c.centroid.addSelf(this.vertices[c.c]), c.centroid.divideScalar(3)) : c instanceof THREE.Face4 && (c.centroid.addSelf(this.vertices[c.a]), c.centroid.addSelf(this.vertices[c.b]), c.centroid.addSelf(this.vertices[c.c]), c.centroid.addSelf(this.vertices[c.d]), c.centroid.divideScalar(4))
    },computeFaceNormals: function() {
        var a, b, c, d, e, f, g = new THREE.Vector3, h = new THREE.Vector3;
        a = 0;
        for (b = this.faces.length; a < 
        b; a++)
            c = this.faces[a], d = this.vertices[c.a], e = this.vertices[c.b], f = this.vertices[c.c], g.sub(f, e), h.sub(d, e), g.crossSelf(h), g.isZero() || g.normalize(), c.normal.copy(g)
    },computeVertexNormals: function() {
        var a, b, c, d;
        if (void 0 === this.__tmpVertices) {
            d = this.__tmpVertices = Array(this.vertices.length);
            a = 0;
            for (b = this.vertices.length; a < b; a++)
                d[a] = new THREE.Vector3;
            a = 0;
            for (b = this.faces.length; a < b; a++)
                c = this.faces[a], c instanceof THREE.Face3 ? c.vertexNormals = [new THREE.Vector3, new THREE.Vector3, new THREE.Vector3] : 
                c instanceof THREE.Face4 && (c.vertexNormals = [new THREE.Vector3, new THREE.Vector3, new THREE.Vector3, new THREE.Vector3])
        } else {
            d = this.__tmpVertices;
            a = 0;
            for (b = this.vertices.length; a < b; a++)
                d[a].set(0, 0, 0)
        }
        a = 0;
        for (b = this.faces.length; a < b; a++)
            c = this.faces[a], c instanceof THREE.Face3 ? (d[c.a].addSelf(c.normal), d[c.b].addSelf(c.normal), d[c.c].addSelf(c.normal)) : c instanceof THREE.Face4 && (d[c.a].addSelf(c.normal), d[c.b].addSelf(c.normal), d[c.c].addSelf(c.normal), d[c.d].addSelf(c.normal));
        a = 0;
        for (b = this.vertices.length; a < 
        b; a++)
            d[a].normalize();
        a = 0;
        for (b = this.faces.length; a < b; a++)
            c = this.faces[a], c instanceof THREE.Face3 ? (c.vertexNormals[0].copy(d[c.a]), c.vertexNormals[1].copy(d[c.b]), c.vertexNormals[2].copy(d[c.c])) : c instanceof THREE.Face4 && (c.vertexNormals[0].copy(d[c.a]), c.vertexNormals[1].copy(d[c.b]), c.vertexNormals[2].copy(d[c.c]), c.vertexNormals[3].copy(d[c.d]))
    },computeMorphNormals: function() {
        var a, b, c, d, e;
        c = 0;
        for (d = this.faces.length; c < d; c++) {
            e = this.faces[c];
            e.__originalFaceNormal ? e.__originalFaceNormal.copy(e.normal) : 
            e.__originalFaceNormal = e.normal.clone();
            e.__originalVertexNormals || (e.__originalVertexNormals = []);
            a = 0;
            for (b = e.vertexNormals.length; a < b; a++)
                e.__originalVertexNormals[a] ? e.__originalVertexNormals[a].copy(e.vertexNormals[a]) : e.__originalVertexNormals[a] = e.vertexNormals[a].clone()
        }
        var f = new THREE.Geometry;
        f.faces = this.faces;
        a = 0;
        for (b = this.morphTargets.length; a < b; a++) {
            if (!this.morphNormals[a]) {
                this.morphNormals[a] = {};
                this.morphNormals[a].faceNormals = [];
                this.morphNormals[a].vertexNormals = [];
                var g = this.morphNormals[a].faceNormals, 
                h = this.morphNormals[a].vertexNormals, i, j;
                c = 0;
                for (d = this.faces.length; c < d; c++)
                    e = this.faces[c], i = new THREE.Vector3, j = e instanceof THREE.Face3 ? {a: new THREE.Vector3,b: new THREE.Vector3,c: new THREE.Vector3} : {a: new THREE.Vector3,b: new THREE.Vector3,c: new THREE.Vector3,d: new THREE.Vector3}, g.push(i), h.push(j)
            }
            g = this.morphNormals[a];
            f.vertices = this.morphTargets[a].vertices;
            f.computeFaceNormals();
            f.computeVertexNormals();
            c = 0;
            for (d = this.faces.length; c < d; c++)
                e = this.faces[c], i = g.faceNormals[c], j = g.vertexNormals[c], 
                i.copy(e.normal), e instanceof THREE.Face3 ? (j.a.copy(e.vertexNormals[0]), j.b.copy(e.vertexNormals[1]), j.c.copy(e.vertexNormals[2])) : (j.a.copy(e.vertexNormals[0]), j.b.copy(e.vertexNormals[1]), j.c.copy(e.vertexNormals[2]), j.d.copy(e.vertexNormals[3]))
        }
        c = 0;
        for (d = this.faces.length; c < d; c++)
            e = this.faces[c], e.normal = e.__originalFaceNormal, e.vertexNormals = e.__originalVertexNormals
    },computeTangents: function() {
        function a(a, b, c, d, e, f, C) {
            h = a.vertices[b];
            i = a.vertices[c];
            j = a.vertices[d];
            l = g[e];
            n = g[f];
            m = g[C];
            q = i.x - 
            h.x;
            p = j.x - h.x;
            o = i.y - h.y;
            r = j.y - h.y;
            t = i.z - h.z;
            u = j.z - h.z;
            w = n.u - l.u;
            s = m.u - l.u;
            B = n.v - l.v;
            v = m.v - l.v;
            A = 1 / (w * v - s * B);
            D.set((v * q - B * p) * A, (v * o - B * r) * A, (v * t - B * u) * A);
            G.set((w * p - s * q) * A, (w * r - s * o) * A, (w * u - s * t) * A);
            x[b].addSelf(D);
            x[c].addSelf(D);
            x[d].addSelf(D);
            L[b].addSelf(G);
            L[c].addSelf(G);
            L[d].addSelf(G)
        }
        var b, c, d, e, f, g, h, i, j, l, n, m, q, p, o, r, t, u, w, s, B, v, A, E, x = [], L = [], D = new THREE.Vector3, G = new THREE.Vector3, C = new THREE.Vector3, N = new THREE.Vector3, J = new THREE.Vector3;
        b = 0;
        for (c = this.vertices.length; b < c; b++)
            x[b] = new THREE.Vector3, 
            L[b] = new THREE.Vector3;
        b = 0;
        for (c = this.faces.length; b < c; b++)
            f = this.faces[b], g = this.faceVertexUvs[0][b], f instanceof THREE.Face3 ? a(this, f.a, f.b, f.c, 0, 1, 2) : f instanceof THREE.Face4 && (a(this, f.a, f.b, f.d, 0, 1, 3), a(this, f.b, f.c, f.d, 1, 2, 3));
        var M = ["a", "b", "c", "d"];
        b = 0;
        for (c = this.faces.length; b < c; b++) {
            f = this.faces[b];
            for (d = 0; d < f.vertexNormals.length; d++)
                J.copy(f.vertexNormals[d]), e = f[M[d]], E = x[e], C.copy(E), C.subSelf(J.multiplyScalar(J.dot(E))).normalize(), N.cross(f.vertexNormals[d], E), e = N.dot(L[e]), e = 0 > e ? 
                -1 : 1, f.vertexTangents[d] = new THREE.Vector4(C.x, C.y, C.z, e)
        }
        this.hasTangents = !0
    },computeBoundingBox: function() {
        this.boundingBox || (this.boundingBox = {min: new THREE.Vector3,max: new THREE.Vector3});
        if (0 < this.vertices.length) {
            var a;
            a = this.vertices[0];
            this.boundingBox.min.copy(a);
            this.boundingBox.max.copy(a);
            for (var b = this.boundingBox.min, c = this.boundingBox.max, d = 1, e = this.vertices.length; d < e; d++)
                (a = this.vertices[d], a.x < b.x ? b.x = a.x : a.x > c.x && (c.x = a.x), a.y < b.y ? b.y = a.y : a.y > c.y && (c.y = a.y), a.z < b.z) ? b.z = a.z : a.z > 
                c.z && (c.z = a.z)
        } else
            this.boundingBox.min.set(0, 0, 0), this.boundingBox.max.set(0, 0, 0)
    },computeBoundingSphere: function() {
        var a = 0;
        null === this.boundingSphere && (this.boundingSphere = {radius: 0});
        for (var b = 0, c = this.vertices.length; b < c; b++) {
            var d = this.vertices[b].lengthSq();
            d > a && (a = d)
        }
        this.boundingSphere.radius = Math.sqrt(a)
    },mergeVertices: function() {
        var a = {}, b = [], c = [], d, e = Math.pow(10, 4), f, g, h, i;
        f = 0;
        for (g = this.vertices.length; f < g; f++)
            d = this.vertices[f], d = [Math.round(d.x * e), Math.round(d.y * e), Math.round(d.z * e)].join("_"), 
            void 0 === a[d] ? (a[d] = f, b.push(this.vertices[f]), c[f] = b.length - 1) : c[f] = c[a[d]];
        f = 0;
        for (g = this.faces.length; f < g; f++)
            if (a = this.faces[f], a instanceof THREE.Face3)
                a.a = c[a.a], a.b = c[a.b], a.c = c[a.c];
            else if (a instanceof THREE.Face4) {
                a.a = c[a.a];
                a.b = c[a.b];
                a.c = c[a.c];
                a.d = c[a.d];
                d = [a.a, a.b, a.c, a.d];
                for (e = 3; 0 < e; e--)
                    if (d.indexOf(a["abcd"[e]]) !== e) {
                        d.splice(e, 1);
                        this.faces[f] = new THREE.Face3(d[0], d[1], d[2], a.normal, a.color, a.materialIndex);
                        d = 0;
                        for (h = this.faceVertexUvs.length; d < h; d++)
                            (i = this.faceVertexUvs[d][f]) && 
                            i.splice(e, 1);
                        this.faces[f].vertexColors = a.vertexColors;
                        break
                    }
            }
        c = this.vertices.length - b.length;
        this.vertices = b;
        return c
    },clone: function() {
    }};
THREE.GeometryCount = 0;
THREE.BufferGeometry = function() {
    this.id = THREE.GeometryCount++;
    this.attributes = {};
    this.dynamic = !1;
    this.boundingSphere = this.boundingBox = null;
    this.hasTangents = !1;
    this.morphTargets = []
};
THREE.BufferGeometry.prototype = {constructor: THREE.BufferGeometry,applyMatrix: function(a) {
        var b, c;
        this.attributes.position && (b = this.attributes.position.array);
        this.attributes.normal && (c = this.attributes.normal.array);
        void 0 !== b && (a.multiplyVector3Array(b), this.verticesNeedUpdate = !0);
        void 0 !== c && (b = new THREE.Matrix4, b.extractRotation(a), b.multiplyVector3Array(c), this.normalsNeedUpdate = !0)
    },computeBoundingBox: function() {
        this.boundingBox || (this.boundingBox = {min: new THREE.Vector3(Infinity, Infinity, Infinity),
            max: new THREE.Vector3(-Infinity, -Infinity, -Infinity)});
        var a = this.attributes.position.array;
        if (a)
            for (var b = this.boundingBox, c, d, e, f = 0, g = a.length; f < g; f += 3)
                (c = a[f], d = a[f + 1], e = a[f + 2], c < b.min.x ? b.min.x = c : c > b.max.x && (b.max.x = c), d < b.min.y ? b.min.y = d : d > b.max.y && (b.max.y = d), e < b.min.z) ? b.min.z = e : e > b.max.z && (b.max.z = e);
        if (void 0 === a || 0 === a.length)
            this.boundingBox.min.set(0, 0, 0), this.boundingBox.max.set(0, 0, 0)
    },computeBoundingSphere: function() {
        this.boundingSphere || (this.boundingSphere = {radius: 0});
        var a = this.attributes.position.array;
        if (a) {
            for (var b, c = 0, d, e, f = 0, g = a.length; f < g; f += 3)
                b = a[f], d = a[f + 1], e = a[f + 2], b = b * b + d * d + e * e, b > c && (c = b);
            this.boundingSphere.radius = Math.sqrt(c)
        }
    },computeVertexNormals: function() {
        if (this.attributes.position && this.attributes.index) {
            var a, b, c, d;
            a = this.attributes.position.array.length;
            if (void 0 === this.attributes.normal)
                this.attributes.normal = {itemSize: 3,array: new Float32Array(a),numItems: a};
            else {
                a = 0;
                for (b = this.attributes.normal.array.length; a < b; a++)
                    this.attributes.normal.array[a] = 0
            }
            var e = this.offsets, f = this.attributes.index.array, 
            g = this.attributes.position.array, h = this.attributes.normal.array, i, j, l, n, m, q, p = new THREE.Vector3, o = new THREE.Vector3, r = new THREE.Vector3, t = new THREE.Vector3, u = new THREE.Vector3;
            c = 0;
            for (d = e.length; c < d; ++c) {
                b = e[c].start;
                i = e[c].count;
                var w = e[c].index;
                a = b;
                for (b += i; a < b; a += 3)
                    i = w + f[a], j = w + f[a + 1], l = w + f[a + 2], n = g[3 * i], m = g[3 * i + 1], q = g[3 * i + 2], p.set(n, m, q), n = g[3 * j], m = g[3 * j + 1], q = g[3 * j + 2], o.set(n, m, q), n = g[3 * l], m = g[3 * l + 1], q = g[3 * l + 2], r.set(n, m, q), t.sub(r, o), u.sub(p, o), t.crossSelf(u), h[3 * i] += t.x, h[3 * i + 1] += t.y, h[3 * i + 
                    2] += t.z, h[3 * j] += t.x, h[3 * j + 1] += t.y, h[3 * j + 2] += t.z, h[3 * l] += t.x, h[3 * l + 1] += t.y, h[3 * l + 2] += t.z
            }
            a = 0;
            for (b = h.length; a < b; a += 3)
                n = h[a], m = h[a + 1], q = h[a + 2], c = 1 / Math.sqrt(n * n + m * m + q * q), h[a] *= c, h[a + 1] *= c, h[a + 2] *= c;
            this.normalsNeedUpdate = !0
        }
    },computeTangents: function() {
        function a(a) {
            X.x = d[3 * a];
            X.y = d[3 * a + 1];
            X.z = d[3 * a + 2];
            Z.copy(X);
            Y = i[a];
            H.copy(Y);
            H.subSelf(X.multiplyScalar(X.dot(Y))).normalize();
            S.cross(Z, Y);
            O = S.dot(j[a]);
            I = 0 > O ? -1 : 1;
            h[4 * a] = H.x;
            h[4 * a + 1] = H.y;
            h[4 * a + 2] = H.z;
            h[4 * a + 3] = I
        }
        if (void 0 === this.attributes.index || void 0 === 
        this.attributes.position || void 0 === this.attributes.normal || void 0 === this.attributes.uv)
            console.warn("Missing required attributes (index, position, normal or uv) in BufferGeometry.computeTangents()");
        else {
            var b = this.attributes.index.array, c = this.attributes.position.array, d = this.attributes.normal.array, e = this.attributes.uv.array, f = c.length / 3;
            if (void 0 === this.attributes.tangent) {
                var g = 4 * f;
                this.attributes.tangent = {itemSize: 4,array: new Float32Array(g),numItems: g}
            }
            for (var h = this.attributes.tangent.array, 
            i = [], j = [], g = 0; g < f; g++)
                i[g] = new THREE.Vector3, j[g] = new THREE.Vector3;
            var l, n, m, q, p, o, r, t, u, w, s, B, v, A, E, f = new THREE.Vector3, g = new THREE.Vector3, x, L, D, G, C, N, J, M = this.offsets;
            D = 0;
            for (G = M.length; D < G; ++D) {
                L = M[D].start;
                C = M[D].count;
                var K = M[D].index;
                x = L;
                for (L += C; x < L; x += 3)
                    C = K + b[x], N = K + b[x + 1], J = K + b[x + 2], l = c[3 * C], n = c[3 * C + 1], m = c[3 * C + 2], q = c[3 * N], p = c[3 * N + 1], o = c[3 * N + 2], r = c[3 * J], t = c[3 * J + 1], u = c[3 * J + 2], w = e[2 * C], s = e[2 * C + 1], B = e[2 * N], v = e[2 * N + 1], A = e[2 * J], E = e[2 * J + 1], q -= l, l = r - l, p -= n, n = t - n, o -= m, m = u - m, B -= w, w = A - w, v -= s, s = E - 
                    s, E = 1 / (B * s - w * v), f.set((s * q - v * l) * E, (s * p - v * n) * E, (s * o - v * m) * E), g.set((B * l - w * q) * E, (B * n - w * p) * E, (B * m - w * o) * E), i[C].addSelf(f), i[N].addSelf(f), i[J].addSelf(f), j[C].addSelf(g), j[N].addSelf(g), j[J].addSelf(g)
            }
            var H = new THREE.Vector3, S = new THREE.Vector3, X = new THREE.Vector3, Z = new THREE.Vector3, I, Y, O;
            D = 0;
            for (G = M.length; D < G; ++D) {
                L = M[D].start;
                C = M[D].count;
                K = M[D].index;
                x = L;
                for (L += C; x < L; x += 3)
                    C = K + b[x], N = K + b[x + 1], J = K + b[x + 2], a(C), a(N), a(J)
            }
            this.tangentsNeedUpdate = this.hasTangents = !0
        }
    }};
THREE.Spline = function(a) {
    function b(a, b, c, d, e, f, g) {
        a = 0.5 * (c - a);
        d = 0.5 * (d - b);
        return (2 * (b - c) + a + d) * g + (-3 * (b - c) - 2 * a - d) * f + a * e + b
    }
    this.points = a;
    var c = [], d = {x: 0,y: 0,z: 0}, e, f, g, h, i, j, l, n, m;
    this.initFromArray = function(a) {
        this.points = [];
        for (var b = 0; b < a.length; b++)
            this.points[b] = {x: a[b][0],y: a[b][1],z: a[b][2]}
    };
    this.getPoint = function(a) {
        e = (this.points.length - 1) * a;
        f = Math.floor(e);
        g = e - f;
        c[0] = 0 === f ? f : f - 1;
        c[1] = f;
        c[2] = f > this.points.length - 2 ? this.points.length - 1 : f + 1;
        c[3] = f > this.points.length - 3 ? this.points.length - 1 : 
        f + 2;
        j = this.points[c[0]];
        l = this.points[c[1]];
        n = this.points[c[2]];
        m = this.points[c[3]];
        h = g * g;
        i = g * h;
        d.x = b(j.x, l.x, n.x, m.x, g, h, i);
        d.y = b(j.y, l.y, n.y, m.y, g, h, i);
        d.z = b(j.z, l.z, n.z, m.z, g, h, i);
        return d
    };
    this.getControlPointsArray = function() {
        var a, b, c = this.points.length, d = [];
        for (a = 0; a < c; a++)
            b = this.points[a], d[a] = [b.x, b.y, b.z];
        return d
    };
    this.getLength = function(a) {
        var b, c, d, e = 0, f = new THREE.Vector3, g = new THREE.Vector3, h = [], i = 0;
        h[0] = 0;
        a || (a = 100);
        c = this.points.length * a;
        f.copy(this.points[0]);
        for (a = 1; a < c; a++)
            b = a / 
            c, d = this.getPoint(b), g.copy(d), i += g.distanceTo(f), f.copy(d), b *= this.points.length - 1, b = Math.floor(b), b != e && (h[b] = i, e = b);
        h[h.length] = i;
        return {chunks: h,total: i}
    };
    this.reparametrizeByArcLength = function(a) {
        var b, c, d, e, f, g, h = [], i = new THREE.Vector3, j = this.getLength();
        h.push(i.copy(this.points[0]).clone());
        for (b = 1; b < this.points.length; b++) {
            c = j.chunks[b] - j.chunks[b - 1];
            g = Math.ceil(a * c / j.total);
            e = (b - 1) / (this.points.length - 1);
            f = b / (this.points.length - 1);
            for (c = 1; c < g - 1; c++)
                d = e + c * (1 / g) * (f - e), d = this.getPoint(d), h.push(i.copy(d).clone());
            h.push(i.copy(this.points[b]).clone())
        }
        this.points = h
    }
};
THREE.Camera = function() {
    THREE.Object3D.call(this);
    this.matrixWorldInverse = new THREE.Matrix4;
    this.projectionMatrix = new THREE.Matrix4;
    this.projectionMatrixInverse = new THREE.Matrix4
};
THREE.Camera.prototype = Object.create(THREE.Object3D.prototype);
THREE.Camera.prototype.lookAt = function(a) {
    this.matrix.lookAt(this.position, a, this.up);
    !0 === this.rotationAutoUpdate && this.rotation.setEulerFromRotationMatrix(this.matrix, this.eulerOrder)
};
THREE.OrthographicCamera = function(a, b, c, d, e, f) {
    THREE.Camera.call(this);
    this.left = a;
    this.right = b;
    this.top = c;
    this.bottom = d;
    this.near = void 0 !== e ? e : 0.1;
    this.far = void 0 !== f ? f : 2E3;
    this.updateProjectionMatrix()
};
THREE.OrthographicCamera.prototype = Object.create(THREE.Camera.prototype);
THREE.OrthographicCamera.prototype.updateProjectionMatrix = function() {
    this.projectionMatrix.makeOrthographic(this.left, this.right, this.top, this.bottom, this.near, this.far)
};
THREE.PerspectiveCamera = function(a, b, c, d) {
    THREE.Camera.call(this);
    this.fov = void 0 !== a ? a : 50;
    this.aspect = void 0 !== b ? b : 1;
    this.near = void 0 !== c ? c : 0.1;
    this.far = void 0 !== d ? d : 2E3;
    this.updateProjectionMatrix()
};
THREE.PerspectiveCamera.prototype = Object.create(THREE.Camera.prototype);
THREE.PerspectiveCamera.prototype.setLens = function(a, b) {
    void 0 === b && (b = 24);
    this.fov = 2 * Math.atan(b / (2 * a)) * (180 / Math.PI);
    this.updateProjectionMatrix()
};
THREE.PerspectiveCamera.prototype.setViewOffset = function(a, b, c, d, e, f) {
    this.fullWidth = a;
    this.fullHeight = b;
    this.x = c;
    this.y = d;
    this.width = e;
    this.height = f;
    this.updateProjectionMatrix()
};
THREE.PerspectiveCamera.prototype.updateProjectionMatrix = function() {
    if (this.fullWidth) {
        var a = this.fullWidth / this.fullHeight, b = Math.tan(this.fov * Math.PI / 360) * this.near, c = -b, d = a * c, a = Math.abs(a * b - d), c = Math.abs(b - c);
        this.projectionMatrix.makeFrustum(d + this.x * a / this.fullWidth, d + (this.x + this.width) * a / this.fullWidth, b - (this.y + this.height) * c / this.fullHeight, b - this.y * c / this.fullHeight, this.near, this.far)
    } else
        this.projectionMatrix.makePerspective(this.fov, this.aspect, this.near, this.far)
};
THREE.Light = function(a) {
    THREE.Object3D.call(this);
    this.color = new THREE.Color(a)
};
THREE.Light.prototype = Object.create(THREE.Object3D.prototype);
THREE.AmbientLight = function(a) {
    THREE.Light.call(this, a)
};
THREE.AmbientLight.prototype = Object.create(THREE.Light.prototype);
THREE.DirectionalLight = function(a, b, c) {
    THREE.Light.call(this, a);
    this.position = new THREE.Vector3(0, 1, 0);
    this.target = new THREE.Object3D;
    this.intensity = void 0 !== b ? b : 1;
    this.distance = void 0 !== c ? c : 0;
    this.onlyShadow = this.castShadow = !1;
    this.shadowCameraNear = 50;
    this.shadowCameraFar = 5E3;
    this.shadowCameraLeft = -500;
    this.shadowCameraTop = this.shadowCameraRight = 500;
    this.shadowCameraBottom = -500;
    this.shadowCameraVisible = !1;
    this.shadowBias = 0;
    this.shadowDarkness = 0.5;
    this.shadowMapHeight = this.shadowMapWidth = 512;
    this.shadowCascade = 
    !1;
    this.shadowCascadeOffset = new THREE.Vector3(0, 0, -1E3);
    this.shadowCascadeCount = 2;
    this.shadowCascadeBias = [0, 0, 0];
    this.shadowCascadeWidth = [512, 512, 512];
    this.shadowCascadeHeight = [512, 512, 512];
    this.shadowCascadeNearZ = [-1, 0.99, 0.998];
    this.shadowCascadeFarZ = [0.99, 0.998, 1];
    this.shadowCascadeArray = [];
    this.shadowMatrix = this.shadowCamera = this.shadowMapSize = this.shadowMap = null
};
THREE.DirectionalLight.prototype = Object.create(THREE.Light.prototype);
THREE.HemisphereLight = function(a, b, c) {
    THREE.Light.call(this, a);
    this.groundColor = new THREE.Color(b);
    this.position = new THREE.Vector3(0, 100, 0);
    this.intensity = void 0 !== c ? c : 1
};
THREE.HemisphereLight.prototype = Object.create(THREE.Light.prototype);
THREE.PointLight = function(a, b, c) {
    THREE.Light.call(this, a);
    this.position = new THREE.Vector3(0, 0, 0);
    this.intensity = void 0 !== b ? b : 1;
    this.distance = void 0 !== c ? c : 0
};
THREE.PointLight.prototype = Object.create(THREE.Light.prototype);
THREE.SpotLight = function(a, b, c, d, e) {
    THREE.Light.call(this, a);
    this.position = new THREE.Vector3(0, 1, 0);
    this.target = new THREE.Object3D;
    this.intensity = void 0 !== b ? b : 1;
    this.distance = void 0 !== c ? c : 0;
    this.angle = void 0 !== d ? d : Math.PI / 2;
    this.exponent = void 0 !== e ? e : 10;
    this.onlyShadow = this.castShadow = !1;
    this.shadowCameraNear = 50;
    this.shadowCameraFar = 5E3;
    this.shadowCameraFov = 50;
    this.shadowCameraVisible = !1;
    this.shadowBias = 0;
    this.shadowDarkness = 0.5;
    this.shadowMapHeight = this.shadowMapWidth = 512;
    this.shadowMatrix = this.shadowCamera = 
    this.shadowMapSize = this.shadowMap = null
};
THREE.SpotLight.prototype = Object.create(THREE.Light.prototype);
THREE.Loader = function(a) {
    this.statusDomElement = (this.showStatus = a) ? THREE.Loader.prototype.addStatusElement() : null;
    this.onLoadStart = function() {
    };
    this.onLoadProgress = function() {
    };
    this.onLoadComplete = function() {
    }
};
THREE.Loader.prototype = {constructor: THREE.Loader,crossOrigin: "anonymous",addStatusElement: function() {
        var a = document.createElement("div");
        a.style.position = "absolute";
        a.style.right = "0px";
        a.style.top = "0px";
        a.style.fontSize = "0.8em";
        a.style.textAlign = "left";
        a.style.background = "rgba(0,0,0,0.25)";
        a.style.color = "#fff";
        a.style.width = "120px";
        a.style.padding = "0.5em 0.5em 0.5em 0.5em";
        a.style.zIndex = 1E3;
        a.innerHTML = "Loading ...";
        return a
    },updateProgress: function(a) {
        var b = "Loaded ", b = a.total ? b + ((100 * a.loaded / 
        a.total).toFixed(0) + "%") : b + ((a.loaded / 1E3).toFixed(2) + " KB");
        this.statusDomElement.innerHTML = b
    },extractUrlBase: function(a) {
        a = a.split("/");
        a.pop();
        return (1 > a.length ? "." : a.join("/")) + "/"
    },initMaterials: function(a, b, c) {
        a.materials = [];
        for (var d = 0; d < b.length; ++d)
            a.materials[d] = THREE.Loader.prototype.createMaterial(b[d], c)
    },hasNormals: function(a) {
        var b, c, d = a.materials.length;
        for (c = 0; c < d; c++)
            if (b = a.materials[c], b instanceof THREE.ShaderMaterial)
                return !0;
        return !1
    },createMaterial: function(a, b) {
        function c(a) {
            a = 
            Math.log(a) / Math.LN2;
            return Math.floor(a) == a
        }
        function d(a) {
            a = Math.log(a) / Math.LN2;
            return Math.pow(2, Math.round(a))
        }
        function e(a, e, f, h, i, j, r) {
            var t = f.toLowerCase().endsWith(".dds"), u = b + "/" + f;
            if (t) {
                var w = THREE.ImageUtils.loadCompressedTexture(u);
                a[e] = w
            } else
                w = document.createElement("canvas"), a[e] = new THREE.Texture(w);
            a[e].sourceFile = f;
            if (h && (a[e].repeat.set(h[0], h[1]), 1 !== h[0] && (a[e].wrapS = THREE.RepeatWrapping), 1 !== h[1]))
                a[e].wrapT = THREE.RepeatWrapping;
            i && a[e].offset.set(i[0], i[1]);
            if (j && (f = {repeat: THREE.RepeatWrapping,
                mirror: THREE.MirroredRepeatWrapping}, void 0 !== f[j[0]] && (a[e].wrapS = f[j[0]]), void 0 !== f[j[1]]))
                a[e].wrapT = f[j[1]];
            r && (a[e].anisotropy = r);
            if (!t) {
                var s = a[e], a = new Image;
                a.onload = function() {
                    if (!c(this.width) || !c(this.height)) {
                        var a = d(this.width), b = d(this.height);
                        s.image.width = a;
                        s.image.height = b;
                        s.image.getContext("2d").drawImage(this, 0, 0, a, b)
                    } else
                        s.image = this;
                    s.needsUpdate = true
                };
                a.crossOrigin = g.crossOrigin;
                a.src = u
            }
        }
        function f(a) {
            return (255 * a[0] << 16) + (255 * a[1] << 8) + 255 * a[2]
        }
        var g = this, h = "MeshLambertMaterial", 
        i = {color: 15658734,opacity: 1,map: null,lightMap: null,normalMap: null,bumpMap: null,wireframe: !1};
        if (a.shading) {
            var j = a.shading.toLowerCase();
            "phong" === j ? h = "MeshPhongMaterial" : "basic" === j && (h = "MeshBasicMaterial")
        }
        void 0 !== a.blending && void 0 !== THREE[a.blending] && (i.blending = THREE[a.blending]);
        if (void 0 !== a.transparent || 1 > a.opacity)
            i.transparent = a.transparent;
        void 0 !== a.depthTest && (i.depthTest = a.depthTest);
        void 0 !== a.depthWrite && (i.depthWrite = a.depthWrite);
        void 0 !== a.visible && (i.visible = a.visible);
        void 0 !== 
        a.flipSided && (i.side = THREE.BackSide);
        void 0 !== a.doubleSided && (i.side = THREE.DoubleSide);
        void 0 !== a.wireframe && (i.wireframe = a.wireframe);
        void 0 !== a.vertexColors && ("face" === a.vertexColors ? i.vertexColors = THREE.FaceColors : a.vertexColors && (i.vertexColors = THREE.VertexColors));
        a.colorDiffuse ? i.color = f(a.colorDiffuse) : a.DbgColor && (i.color = a.DbgColor);
        a.colorSpecular && (i.specular = f(a.colorSpecular));
        a.colorAmbient && (i.ambient = f(a.colorAmbient));
        a.transparency && (i.opacity = a.transparency);
        a.specularCoef && (i.shininess = 
        a.specularCoef);
        a.mapDiffuse && b && e(i, "map", a.mapDiffuse, a.mapDiffuseRepeat, a.mapDiffuseOffset, a.mapDiffuseWrap, a.mapDiffuseAnisotropy);
        a.mapLight && b && e(i, "lightMap", a.mapLight, a.mapLightRepeat, a.mapLightOffset, a.mapLightWrap, a.mapLightAnisotropy);
        a.mapBump && b && e(i, "bumpMap", a.mapBump, a.mapBumpRepeat, a.mapBumpOffset, a.mapBumpWrap, a.mapBumpAnisotropy);
        a.mapNormal && b && e(i, "normalMap", a.mapNormal, a.mapNormalRepeat, a.mapNormalOffset, a.mapNormalWrap, a.mapNormalAnisotropy);
        a.mapSpecular && b && e(i, "specularMap", 
        a.mapSpecular, a.mapSpecularRepeat, a.mapSpecularOffset, a.mapSpecularWrap, a.mapSpecularAnisotropy);
        a.mapBumpScale && (i.bumpScale = a.mapBumpScale);
        a.mapNormal ? (h = THREE.ShaderUtils.lib.normal, j = THREE.UniformsUtils.clone(h.uniforms), j.tNormal.value = i.normalMap, a.mapNormalFactor && j.uNormalScale.value.set(a.mapNormalFactor, a.mapNormalFactor), i.map && (j.tDiffuse.value = i.map, j.enableDiffuse.value = !0), i.specularMap && (j.tSpecular.value = i.specularMap, j.enableSpecular.value = !0), i.lightMap && (j.tAO.value = i.lightMap, 
        j.enableAO.value = !0), j.uDiffuseColor.value.setHex(i.color), j.uSpecularColor.value.setHex(i.specular), j.uAmbientColor.value.setHex(i.ambient), j.uShininess.value = i.shininess, void 0 !== i.opacity && (j.uOpacity.value = i.opacity), i = new THREE.ShaderMaterial({fragmentShader: h.fragmentShader,vertexShader: h.vertexShader,uniforms: j,lights: !0,fog: !0})) : i = new THREE[h](i);
        void 0 !== a.DbgName && (i.name = a.DbgName);
        return i
    }};
THREE.BinaryLoader = function(a) {
    THREE.Loader.call(this, a)
};
THREE.BinaryLoader.prototype = Object.create(THREE.Loader.prototype);
THREE.BinaryLoader.prototype.load = function(a, b, c, d) {
    var c = c ? c : this.extractUrlBase(a), d = d ? d : this.extractUrlBase(a), e = this.showProgress ? THREE.Loader.prototype.updateProgress : null;
    this.onLoadStart();
    this.loadAjaxJSON(this, a, b, c, d, e)
};
THREE.BinaryLoader.prototype.loadAjaxJSON = function(a, b, c, d, e, f) {
    var g = new XMLHttpRequest;
    g.onreadystatechange = function() {
        if (4 == g.readyState)
            if (200 == g.status || 0 == g.status) {
                var h = JSON.parse(g.responseText);
                a.loadAjaxBuffers(h, c, e, d, f)
            } else
                console.error("THREE.BinaryLoader: Couldn't load [" + b + "] [" + g.status + "]")
    };
    g.open("GET", b, !0);
    g.send(null)
};
THREE.BinaryLoader.prototype.loadAjaxBuffers = function(a, b, c, d, e) {
    var f = new XMLHttpRequest, g = c + "/" + a.buffers, h = 0;
    f.onreadystatechange = function() {
        if (4 == f.readyState)
            if (200 == f.status || 0 == f.status) {
                var c = f.response;
                void 0 === c && (c = (new Uint8Array(f.responseBody)).buffer);
                THREE.BinaryLoader.prototype.createBinModel(c, b, d, a.materials)
            } else
                console.error("THREE.BinaryLoader: Couldn't load [" + g + "] [" + f.status + "]");
        else
            3 == f.readyState ? e && (0 == h && (h = f.getResponseHeader("Content-Length")), e({total: h,loaded: f.responseText.length})) : 
            2 == f.readyState && (h = f.getResponseHeader("Content-Length"))
    };
    f.open("GET", g, !0);
    f.responseType = "arraybuffer";
    f.send(null)
};
THREE.BinaryLoader.prototype.createBinModel = function(a, b, c, d) {
    var e = function(b) {
        function c(a) {
            return a % 4 ? 4 - a % 4 : 0
        }
        function e(a, b) {
            return (new Uint8Array(a, b, 1))[0]
        }
        function i(a, b) {
            return (new Uint32Array(a, b, 1))[0]
        }
        function j(b, c) {
            var d, e, f, g, h, i, j, l, n = new Uint32Array(a, c, 3 * b);
            for (d = 0; d < b; d++) {
                e = n[3 * d];
                f = n[3 * d + 1];
                g = n[3 * d + 2];
                h = K[2 * e];
                e = K[2 * e + 1];
                i = K[2 * f];
                j = K[2 * f + 1];
                f = K[2 * g];
                l = K[2 * g + 1];
                g = N.faceVertexUvs[0];
                var m = [];
                m.push(new THREE.UV(h, e));
                m.push(new THREE.UV(i, j));
                m.push(new THREE.UV(f, l));
                g.push(m)
            }
        }
        function l(b, c) {
            var d, e, f, g, h, i, j, l, n, m, o = new Uint32Array(a, c, 4 * b);
            for (d = 0; d < b; d++) {
                e = o[4 * d];
                f = o[4 * d + 1];
                g = o[4 * d + 2];
                h = o[4 * d + 3];
                i = K[2 * e];
                e = K[2 * e + 1];
                j = K[2 * f];
                n = K[2 * f + 1];
                l = K[2 * g];
                m = K[2 * g + 1];
                g = K[2 * h];
                f = K[2 * h + 1];
                h = N.faceVertexUvs[0];
                var p = [];
                p.push(new THREE.UV(i, e));
                p.push(new THREE.UV(j, n));
                p.push(new THREE.UV(l, m));
                p.push(new THREE.UV(g, f));
                h.push(p)
            }
        }
        function n(b, c, d) {
            for (var e, f, g, h, c = new Uint32Array(a, c, 3 * b), i = new Uint16Array(a, d, b), d = 0; d < b; d++)
                e = c[3 * d], f = c[3 * d + 1], g = c[3 * d + 2], h = i[d], N.faces.push(new THREE.Face3(e, 
                f, g, null, null, h))
        }
        function m(b, c, d) {
            for (var e, f, g, h, i, c = new Uint32Array(a, c, 4 * b), j = new Uint16Array(a, d, b), d = 0; d < b; d++)
                e = c[4 * d], f = c[4 * d + 1], g = c[4 * d + 2], h = c[4 * d + 3], i = j[d], N.faces.push(new THREE.Face4(e, f, g, h, null, null, i))
        }
        function q(b, c, d, e) {
            for (var f, g, h, i, j, l, n, c = new Uint32Array(a, c, 3 * b), d = new Uint32Array(a, d, 3 * b), m = new Uint16Array(a, e, b), e = 0; e < b; e++) {
                f = c[3 * e];
                g = c[3 * e + 1];
                h = c[3 * e + 2];
                j = d[3 * e];
                l = d[3 * e + 1];
                n = d[3 * e + 2];
                i = m[e];
                var o = M[3 * l], p = M[3 * l + 1];
                l = M[3 * l + 2];
                var q = M[3 * n], r = M[3 * n + 1];
                n = M[3 * n + 2];
                N.faces.push(new THREE.Face3(f, 
                g, h, [new THREE.Vector3(M[3 * j], M[3 * j + 1], M[3 * j + 2]), new THREE.Vector3(o, p, l), new THREE.Vector3(q, r, n)], null, i))
            }
        }
        function p(b, c, d, e) {
            for (var f, g, h, i, j, l, n, m, o, c = new Uint32Array(a, c, 4 * b), d = new Uint32Array(a, d, 4 * b), p = new Uint16Array(a, e, b), e = 0; e < b; e++) {
                f = c[4 * e];
                g = c[4 * e + 1];
                h = c[4 * e + 2];
                i = c[4 * e + 3];
                l = d[4 * e];
                n = d[4 * e + 1];
                m = d[4 * e + 2];
                o = d[4 * e + 3];
                j = p[e];
                var q = M[3 * n], r = M[3 * n + 1];
                n = M[3 * n + 2];
                var s = M[3 * m], t = M[3 * m + 1];
                m = M[3 * m + 2];
                var v = M[3 * o], u = M[3 * o + 1];
                o = M[3 * o + 2];
                N.faces.push(new THREE.Face4(f, g, h, i, [new THREE.Vector3(M[3 * 
                    l], M[3 * l + 1], M[3 * l + 2]), new THREE.Vector3(q, r, n), new THREE.Vector3(s, t, m), new THREE.Vector3(v, u, o)], null, j))
            }
        }
        var o, r, t, u, w, s, B, v, A, E, x, L, D, G, C, N = this, J = 0, M = [], K = [], H, S, X;
        THREE.Geometry.call(this);
        THREE.Loader.prototype.initMaterials(N, d, b);
        C = a;
        S = J;
        b = new Uint8Array(C, S, 12);
        E = "";
        for (D = 0; 12 > D; D++)
            E += String.fromCharCode(b[S + D]);
        o = e(C, S + 12);
        e(C, S + 13);
        e(C, S + 14);
        e(C, S + 15);
        r = e(C, S + 16);
        t = e(C, S + 17);
        u = e(C, S + 18);
        w = e(C, S + 19);
        s = i(C, S + 20);
        B = i(C, S + 20 + 4);
        v = i(C, S + 20 + 8);
        A = i(C, S + 20 + 12);
        E = i(C, S + 20 + 16);
        x = i(C, S + 20 + 20);
        L = 
        i(C, S + 20 + 24);
        D = i(C, S + 20 + 28);
        b = i(C, S + 20 + 32);
        G = i(C, S + 20 + 36);
        C = i(C, S + 20 + 40);
        J += o;
        S = 3 * r + w;
        X = 4 * r + w;
        H = A * S;
        o = E * (S + 3 * t);
        r = x * (S + 3 * u);
        w = L * (S + 3 * t + 3 * u);
        S = D * X;
        t = b * (X + 4 * t);
        u = G * (X + 4 * u);
        X = J;
        var J = new Float32Array(a, J, 3 * s), Z, I, Y, O;
        for (Z = 0; Z < s; Z++)
            I = J[3 * Z], Y = J[3 * Z + 1], O = J[3 * Z + 2], N.vertices.push(new THREE.Vector3(I, Y, O));
        s = J = X + 3 * s * Float32Array.BYTES_PER_ELEMENT;
        if (B) {
            J = new Int8Array(a, J, 3 * B);
            for (X = 0; X < B; X++)
                Z = J[3 * X], I = J[3 * X + 1], Y = J[3 * X + 2], M.push(Z / 127, I / 127, Y / 127)
        }
        J = s + 3 * B * Int8Array.BYTES_PER_ELEMENT;
        B = J += c(3 * B);
        if (v) {
            J = 
            new Float32Array(a, J, 2 * v);
            for (s = 0; s < v; s++)
                X = J[2 * s], Z = J[2 * s + 1], K.push(X, Z)
        }
        v = J = B + 2 * v * Float32Array.BYTES_PER_ELEMENT;
        H = v + H + c(2 * A);
        B = H + o + c(2 * E);
        o = B + r + c(2 * x);
        r = o + w + c(2 * L);
        S = r + S + c(2 * D);
        w = S + t + c(2 * b);
        t = w + u + c(2 * G);
        x && (u = B + 3 * x * Uint32Array.BYTES_PER_ELEMENT, n(x, B, u + 3 * x * Uint32Array.BYTES_PER_ELEMENT), j(x, u));
        L && (x = o + 3 * L * Uint32Array.BYTES_PER_ELEMENT, u = x + 3 * L * Uint32Array.BYTES_PER_ELEMENT, q(L, o, x, u + 3 * L * Uint32Array.BYTES_PER_ELEMENT), j(L, u));
        G && (L = w + 4 * G * Uint32Array.BYTES_PER_ELEMENT, m(G, w, L + 4 * G * Uint32Array.BYTES_PER_ELEMENT), 
        l(G, L));
        C && (G = t + 4 * C * Uint32Array.BYTES_PER_ELEMENT, L = G + 4 * C * Uint32Array.BYTES_PER_ELEMENT, p(C, t, G, L + 4 * C * Uint32Array.BYTES_PER_ELEMENT), l(C, L));
        A && n(A, v, v + 3 * A * Uint32Array.BYTES_PER_ELEMENT);
        E && (A = H + 3 * E * Uint32Array.BYTES_PER_ELEMENT, q(E, H, A, A + 3 * E * Uint32Array.BYTES_PER_ELEMENT));
        D && m(D, r, r + 4 * D * Uint32Array.BYTES_PER_ELEMENT);
        b && (E = S + 4 * b * Uint32Array.BYTES_PER_ELEMENT, p(b, S, E, E + 4 * b * Uint32Array.BYTES_PER_ELEMENT));
        this.computeCentroids();
        this.computeFaceNormals();
        THREE.Loader.prototype.hasNormals(this) && this.computeTangents()
    };
    e.prototype = Object.create(THREE.Geometry.prototype);
    b(new e(c))
};
THREE.ImageLoader = function() {
    THREE.EventTarget.call(this);
    this.crossOrigin = null
};
THREE.ImageLoader.prototype = {constructor: THREE.ImageLoader,load: function(a, b) {
        var c = this;
        void 0 === b && (b = new Image);
        b.addEventListener("load", function() {
            c.dispatchEvent({type: "load",content: b})
        }, !1);
        b.addEventListener("error", function() {
            c.dispatchEvent({type: "error",message: "Couldn't load URL [" + a + "]"})
        }, !1);
        c.crossOrigin && (b.crossOrigin = c.crossOrigin);
        b.src = a
    }};
THREE.JSONLoader = function(a) {
    THREE.Loader.call(this, a)
};
THREE.JSONLoader.prototype = Object.create(THREE.Loader.prototype);
THREE.JSONLoader.prototype.load = function(a, b, c) {
    c = c ? c : this.extractUrlBase(a);
    this.onLoadStart();
    this.loadAjaxJSON(this, a, b, c)
};
THREE.JSONLoader.prototype.loadAjaxJSON = function(a, b, c, d, e) {
    var f = new XMLHttpRequest, g = 0;
    f.onreadystatechange = function() {
        if (f.readyState === f.DONE)
            if (200 === f.status || 0 === f.status) {
                if (f.responseText) {
                    var h = JSON.parse(f.responseText);
                    a.createModel(h, c, d)
                } else
                    console.warn("THREE.JSONLoader: [" + b + "] seems to be unreachable or file there is empty");
                a.onLoadComplete()
            } else
                console.error("THREE.JSONLoader: Couldn't load [" + b + "] [" + f.status + "]");
        else
            f.readyState === f.LOADING ? e && (0 === g && (g = f.getResponseHeader("Content-Length")), 
            e({total: g,loaded: f.responseText.length})) : f.readyState === f.HEADERS_RECEIVED && (g = f.getResponseHeader("Content-Length"))
    };
    f.open("GET", b, !0);
    f.send(null)
};
THREE.JSONLoader.prototype.createModel = function(a, b, c) {
    var d = new THREE.Geometry, e = void 0 !== a.scale ? 1 / a.scale : 1;
    this.initMaterials(d, a.materials, c);
    var f, g, h, i, j, l, n, m, q, p, o, r, t, u, w = a.faces;
    q = a.vertices;
    var s = a.normals, B = a.colors, v = 0;
    for (f = 0; f < a.uvs.length; f++)
        a.uvs[f].length && v++;
    for (f = 0; f < v; f++)
        d.faceUvs[f] = [], d.faceVertexUvs[f] = [];
    c = 0;
    for (i = q.length; c < i; )
        j = new THREE.Vector3, j.x = q[c++] * e, j.y = q[c++] * e, j.z = q[c++] * e, d.vertices.push(j);
    c = 0;
    for (i = w.length; c < i; ) {
        q = w[c++];
        j = q & 1;
        h = q & 2;
        f = q & 4;
        g = q & 8;
        n = q & 16;
        l = q & 32;
        p = q & 64;
        q &= 128;
        j ? (o = new THREE.Face4, o.a = w[c++], o.b = w[c++], o.c = w[c++], o.d = w[c++], j = 4) : (o = new THREE.Face3, o.a = w[c++], o.b = w[c++], o.c = w[c++], j = 3);
        h && (h = w[c++], o.materialIndex = h);
        h = d.faces.length;
        if (f)
            for (f = 0; f < v; f++)
                r = a.uvs[f], m = w[c++], u = r[2 * m], m = r[2 * m + 1], d.faceUvs[f][h] = new THREE.UV(u, m);
        if (g)
            for (f = 0; f < v; f++) {
                r = a.uvs[f];
                t = [];
                for (g = 0; g < j; g++)
                    m = w[c++], u = r[2 * m], m = r[2 * m + 1], t[g] = new THREE.UV(u, m);
                d.faceVertexUvs[f][h] = t
            }
        n && (n = 3 * w[c++], g = new THREE.Vector3, g.x = s[n++], g.y = s[n++], g.z = s[n], o.normal = g);
        if (l)
            for (f = 
            0; f < j; f++)
                n = 3 * w[c++], g = new THREE.Vector3, g.x = s[n++], g.y = s[n++], g.z = s[n], o.vertexNormals.push(g);
        p && (l = w[c++], l = new THREE.Color(B[l]), o.color = l);
        if (q)
            for (f = 0; f < j; f++)
                l = w[c++], l = new THREE.Color(B[l]), o.vertexColors.push(l);
        d.faces.push(o)
    }
    if (a.skinWeights) {
        c = 0;
        for (i = a.skinWeights.length; c < i; c += 2)
            w = a.skinWeights[c], s = a.skinWeights[c + 1], d.skinWeights.push(new THREE.Vector4(w, s, 0, 0))
    }
    if (a.skinIndices) {
        c = 0;
        for (i = a.skinIndices.length; c < i; c += 2)
            w = a.skinIndices[c], s = a.skinIndices[c + 1], d.skinIndices.push(new THREE.Vector4(w, 
            s, 0, 0))
    }
    d.bones = a.bones;
    d.animation = a.animation;
    if (void 0 !== a.morphTargets) {
        c = 0;
        for (i = a.morphTargets.length; c < i; c++) {
            d.morphTargets[c] = {};
            d.morphTargets[c].name = a.morphTargets[c].name;
            d.morphTargets[c].vertices = [];
            B = d.morphTargets[c].vertices;
            v = a.morphTargets[c].vertices;
            w = 0;
            for (s = v.length; w < s; w += 3)
                q = new THREE.Vector3, q.x = v[w] * e, q.y = v[w + 1] * e, q.z = v[w + 2] * e, B.push(q)
        }
    }
    if (void 0 !== a.morphColors) {
        c = 0;
        for (i = a.morphColors.length; c < i; c++) {
            d.morphColors[c] = {};
            d.morphColors[c].name = a.morphColors[c].name;
            d.morphColors[c].colors = 
            [];
            s = d.morphColors[c].colors;
            B = a.morphColors[c].colors;
            e = 0;
            for (w = B.length; e < w; e += 3)
                v = new THREE.Color(16755200), v.setRGB(B[e], B[e + 1], B[e + 2]), s.push(v)
        }
    }
    d.computeCentroids();
    d.computeFaceNormals();
    this.hasNormals(d) && d.computeTangents();
    b(d)
};
THREE.LoadingMonitor = function() {
    THREE.EventTarget.call(this);
    var a = this, b = 0, c = 0, d = function() {
        b++;
        a.dispatchEvent({type: "progress",loaded: b,total: c});
        b === c && a.dispatchEvent({type: "load"})
    };
    this.add = function(a) {
        c++;
        a.addEventListener("load", d, !1)
    }
};
THREE.GeometryLoader = function() {
    THREE.EventTarget.call(this);
    this.path = this.crossOrigin = null
};
THREE.GeometryLoader.prototype = {constructor: THREE.GeometryLoader,load: function(a) {
        var b = this, c = null;
        if (null === b.path) {
            var d = a.split("/");
            d.pop();
            b.path = 1 > d.length ? "." : d.join("/")
        }
        d = new XMLHttpRequest;
        d.addEventListener("load", function(d) {
            d.target.responseText ? c = b.parse(JSON.parse(d.target.responseText), e) : b.dispatchEvent({type: "error",message: "Invalid file [" + a + "]"})
        }, !1);
        d.addEventListener("error", function() {
            b.dispatchEvent({type: "error",message: "Couldn't load URL [" + a + "]"})
        }, !1);
        d.open("GET", a, 
        !0);
        d.send(null);
        var e = new THREE.LoadingMonitor;
        e.addEventListener("load", function() {
            b.dispatchEvent({type: "load",content: c})
        });
        e.add(d)
    },parse: function(a, b) {
        var c = this, d = new THREE.Geometry, e = void 0 !== a.scale ? 1 / a.scale : 1;
        if (a.materials) {
            d.materials = [];
            for (var f = 0; f < a.materials.length; ++f) {
                var g = a.materials[f], h = function(a) {
                    a = Math.log(a) / Math.LN2;
                    return Math.floor(a) == a
                }, i = function(a) {
                    a = Math.log(a) / Math.LN2;
                    return Math.pow(2, Math.round(a))
                }, j = function(a, d, e, f, g, j) {
                    a[d] = new THREE.Texture;
                    a[d].sourceFile = 
                    e;
                    if (f && (a[d].repeat.set(f[0], f[1]), 1 !== f[0] && (a[d].wrapS = THREE.RepeatWrapping), 1 !== f[1]))
                        a[d].wrapT = THREE.RepeatWrapping;
                    g && a[d].offset.set(g[0], g[1]);
                    if (j && (f = {repeat: THREE.RepeatWrapping,mirror: THREE.MirroredRepeatWrapping}, void 0 !== f[j[0]] && (a[d].wrapS = f[j[0]]), void 0 !== f[j[1]]))
                        a[d].wrapT = f[j[1]];
                    var l = a[d], a = new THREE.ImageLoader;
                    a.addEventListener("load", function(a) {
                        a = a.content;
                        if (!h(a.width) || !h(a.height)) {
                            var b = i(a.width), c = i(a.height);
                            l.image = document.createElement("canvas");
                            l.image.width = 
                            b;
                            l.image.height = c;
                            l.image.getContext("2d").drawImage(a, 0, 0, b, c)
                        } else
                            l.image = a;
                        l.needsUpdate = !0
                    });
                    a.crossOrigin = c.crossOrigin;
                    a.load(c.path + "/" + e);
                    b && b.add(a)
                }, l = function(a) {
                    return (255 * a[0] << 16) + (255 * a[1] << 8) + 255 * a[2]
                }, n = "MeshLambertMaterial", m = {color: 15658734,opacity: 1,map: null,lightMap: null,normalMap: null,bumpMap: null,wireframe: !1};
                if (g.shading) {
                    var q = g.shading.toLowerCase();
                    "phong" === q ? n = "MeshPhongMaterial" : "basic" === q && (n = "MeshBasicMaterial")
                }
                void 0 !== g.blending && void 0 !== THREE[g.blending] && 
                (m.blending = THREE[g.blending]);
                if (void 0 !== g.transparent || 1 > g.opacity)
                    m.transparent = g.transparent;
                void 0 !== g.depthTest && (m.depthTest = g.depthTest);
                void 0 !== g.depthWrite && (m.depthWrite = g.depthWrite);
                void 0 !== g.vertexColors && ("face" == g.vertexColors ? m.vertexColors = THREE.FaceColors : g.vertexColors && (m.vertexColors = THREE.VertexColors));
                g.colorDiffuse ? m.color = l(g.colorDiffuse) : g.DbgColor && (m.color = g.DbgColor);
                g.colorSpecular && (m.specular = l(g.colorSpecular));
                g.colorAmbient && (m.ambient = l(g.colorAmbient));
                g.transparency && 
                (m.opacity = g.transparency);
                g.specularCoef && (m.shininess = g.specularCoef);
                void 0 !== g.visible && (m.visible = g.visible);
                void 0 !== g.flipSided && (m.side = THREE.BackSide);
                void 0 !== g.doubleSided && (m.side = THREE.DoubleSide);
                void 0 !== g.wireframe && (m.wireframe = g.wireframe);
                g.mapDiffuse && j(m, "map", g.mapDiffuse, g.mapDiffuseRepeat, g.mapDiffuseOffset, g.mapDiffuseWrap);
                g.mapLight && j(m, "lightMap", g.mapLight, g.mapLightRepeat, g.mapLightOffset, g.mapLightWrap);
                g.mapBump && j(m, "bumpMap", g.mapBump, g.mapBumpRepeat, g.mapBumpOffset, 
                g.mapBumpWrap);
                g.mapNormal && j(m, "normalMap", g.mapNormal, g.mapNormalRepeat, g.mapNormalOffset, g.mapNormalWrap);
                g.mapSpecular && j(m, "specularMap", g.mapSpecular, g.mapSpecularRepeat, g.mapSpecularOffset, g.mapSpecularWrap);
                g.mapNormal ? (j = THREE.ShaderUtils.lib.normal, l = THREE.UniformsUtils.clone(j.uniforms), l.tNormal.value = m.normalMap, g.mapNormalFactor && l.uNormalScale.value.set(g.mapNormalFactor, g.mapNormalFactor), m.map && (l.tDiffuse.value = m.map, l.enableDiffuse.value = !0), m.specularMap && (l.tSpecular.value = m.specularMap, 
                l.enableSpecular.value = !0), m.lightMap && (l.tAO.value = m.lightMap, l.enableAO.value = !0), l.uDiffuseColor.value.setHex(m.color), l.uSpecularColor.value.setHex(m.specular), l.uAmbientColor.value.setHex(m.ambient), l.uShininess.value = m.shininess, void 0 !== m.opacity && (l.uOpacity.value = m.opacity), m = new THREE.ShaderMaterial({fragmentShader: j.fragmentShader,vertexShader: j.vertexShader,uniforms: l,lights: !0,fog: !0})) : m = new THREE[n](m);
                void 0 !== g.DbgName && (m.name = g.DbgName);
                d.materials[f] = m
            }
        }
        var g = a.faces, p = a.vertices, 
        m = a.normals, j = a.colors, l = 0;
        if (a.uvs)
            for (f = 0; f < a.uvs.length; f++)
                a.uvs[f].length && l++;
        for (f = 0; f < l; f++)
            d.faceUvs[f] = [], d.faceVertexUvs[f] = [];
        n = 0;
        for (q = p.length; n < q; ) {
            var o = new THREE.Vector3;
            o.x = p[n++] * e;
            o.y = p[n++] * e;
            o.z = p[n++] * e;
            d.vertices.push(o)
        }
        n = 0;
        for (q = g.length; n < q; ) {
            var r = g[n++], t = r & 2, f = r & 4, u = r & 8, w = r & 16, p = r & 32, s = r & 64, o = r & 128;
            if (r & 1) {
                r = new THREE.Face4;
                r.a = g[n++];
                r.b = g[n++];
                r.c = g[n++];
                r.d = g[n++];
                var B = 4
            } else
                r = new THREE.Face3, r.a = g[n++], r.b = g[n++], r.c = g[n++], B = 3;
            t && (t = g[n++], r.materialIndex = t);
            var v = 
            d.faces.length;
            if (f)
                for (f = 0; f < l; f++) {
                    var A = a.uvs[f], t = g[n++], E = A[2 * t], t = A[2 * t + 1];
                    d.faceUvs[f][v] = new THREE.UV(E, t)
                }
            if (u)
                for (f = 0; f < l; f++) {
                    for (var A = a.uvs[f], u = [], x = 0; x < B; x++)
                        t = g[n++], E = A[2 * t], t = A[2 * t + 1], u[x] = new THREE.UV(E, t);
                    d.faceVertexUvs[f][v] = u
                }
            w && (w = 3 * g[n++], t = new THREE.Vector3, t.x = m[w++], t.y = m[w++], t.z = m[w], r.normal = t);
            if (p)
                for (f = 0; f < B; f++)
                    w = 3 * g[n++], t = new THREE.Vector3, t.x = m[w++], t.y = m[w++], t.z = m[w], r.vertexNormals.push(t);
            s && (p = g[n++], r.color = new THREE.Color(j[p]));
            if (o)
                for (f = 0; f < B; f++)
                    p = 
                    g[n++], r.vertexColors.push(new THREE.Color(j[p]));
            d.faces.push(r)
        }
        if (a.skinWeights) {
            f = 0;
            for (g = a.skinWeights.length; f < g; f += 2)
                d.skinWeights.push(new THREE.Vector4(a.skinWeights[f], a.skinWeights[f + 1], 0, 0))
        }
        if (a.skinIndices) {
            f = 0;
            for (g = a.skinIndices.length; f < g; f += 2)
                m = 0, d.skinIndices.push(new THREE.Vector4(a.skinIndices[f], a.skinIndices[f + 1], m, 0))
        }
        d.bones = a.bones;
        d.animation = a.animation;
        if (a.morphTargets) {
            f = 0;
            for (g = a.morphTargets.length; f < g; f++) {
                d.morphTargets[f] = {};
                d.morphTargets[f].name = a.morphTargets[f].name;
                d.morphTargets[f].vertices = [];
                m = d.morphTargets[f].vertices;
                j = a.morphTargets[f].vertices;
                t = 0;
                for (l = j.length; t < l; t += 3)
                    o = new THREE.Vector3, o.x = j[t] * e, o.y = j[t + 1] * e, o.z = j[t + 2] * e, m.push(o)
            }
        }
        if (a.morphColors) {
            f = 0;
            for (g = a.morphColors.length; f < g; f++) {
                d.morphColors[f] = {};
                d.morphColors[f].name = a.morphColors[f].name;
                d.morphColors[f].colors = [];
                e = d.morphColors[f].colors;
                j = a.morphColors[f].colors;
                m = 0;
                for (l = j.length; m < l; m += 3)
                    n = new THREE.Color(16755200), n.setRGB(j[m], j[m + 1], j[m + 2]), e.push(n)
            }
        }
        d.computeCentroids();
        d.computeFaceNormals();
        return d
    }};
THREE.SceneLoader = function() {
    this.onLoadStart = function() {
    };
    this.onLoadProgress = function() {
    };
    this.onLoadComplete = function() {
    };
    this.callbackSync = function() {
    };
    this.callbackProgress = function() {
    };
    this.geometryHandlerMap = {};
    this.addGeometryHandler("ascii", THREE.JSONLoader);
    this.addGeometryHandler("binary", THREE.BinaryLoader)
};
THREE.SceneLoader.prototype.constructor = THREE.SceneLoader;
THREE.SceneLoader.prototype.load = function(a, b) {
    var c = this, d = new XMLHttpRequest;
    d.onreadystatechange = function() {
        if (4 === d.readyState)
            if (200 === d.status || 0 === d.status) {
                var e = JSON.parse(d.responseText);
                c.parse(e, b, a)
            } else
                console.error("THREE.SceneLoader: Couldn't load [" + a + "] [" + d.status + "]")
    };
    d.open("GET", a, !0);
    d.send(null)
};
THREE.SceneLoader.prototype.addGeometryHandler = function(a, b) {
    this.geometryHandlerMap[a] = {loaderClass: b}
};
THREE.SceneLoader.prototype.parse = function(a, b, c) {
    function d(a, b) {
        return "relativeToHTML" == b ? a : j + "/" + a
    }
    function e(a, b) {
        for (var c in b)
            if (void 0 === K.objects[c]) {
                var d = b[c], f = null;
                if (void 0 !== d.geometry) {
                    if (E = K.geometries[d.geometry])
                        x = K.materials[d.materials[0]], x instanceof THREE.ShaderMaterial && E.computeTangents(), u = d.position, w = d.rotation, s = d.quaternion, B = d.scale, r = d.matrix, s = 0, 0 === d.materials.length && (x = new THREE.MeshFaceMaterial), 1 < d.materials.length && (x = new THREE.MeshFaceMaterial), d.morph ? (f = 
                        new THREE.MorphAnimMesh(E, x), void 0 !== d.duration && (f.duration = d.duration), void 0 !== d.time && (f.time = d.time), void 0 !== d.mirroredLoop && (f.mirroredLoop = d.mirroredLoop), x.morphNormals && E.computeMorphNormals()) : f = new THREE.Mesh(E, x), f.name = c, r ? (f.matrixAutoUpdate = !1, f.matrix.set(r[0], r[1], r[2], r[3], r[4], r[5], r[6], r[7], r[8], r[9], r[10], r[11], r[12], r[13], r[14], r[15])) : (f.position.set(u[0], u[1], u[2]), s ? (f.quaternion.set(s[0], s[1], s[2], s[3]), f.useQuaternion = !0) : f.rotation.set(w[0], w[1], w[2]), f.scale.set(B[0], 
                        B[1], B[2])), f.visible = d.visible, f.castShadow = d.castShadow, f.receiveShadow = d.receiveShadow, a.add(f), K.objects[c] = f
                } else
                    u = d.position, w = d.rotation, s = d.quaternion, B = d.scale, s = 0, f = new THREE.Object3D, f.name = c, f.position.set(u[0], u[1], u[2]), s ? (f.quaternion.set(s[0], s[1], s[2], s[3]), f.useQuaternion = !0) : f.rotation.set(w[0], w[1], w[2]), f.scale.set(B[0], B[1], B[2]), f.visible = void 0 !== d.visible ? d.visible : !1, a.add(f), K.objects[c] = f, K.empties[c] = f;
                if (f) {
                    if (void 0 !== d.properties)
                        for (var g in d.properties)
                            f.properties[g] = 
                            d.properties[g];
                    void 0 !== d.children && e(f, d.children)
                }
            }
    }
    function f(a) {
        return function(b) {
            K.geometries[a] = b;
            e(K.scene, H.objects);
            C -= 1;
            i.onLoadComplete();
            h()
        }
    }
    function g(a) {
        return function(b) {
            K.geometries[a] = b
        }
    }
    function h() {
        i.callbackProgress({totalModels: J,totalTextures: M,loadedModels: J - C,loadedTextures: M - N}, K);
        i.onLoadProgress();
        0 === C && 0 === N && b(K)
    }
    var i = this, j = THREE.Loader.prototype.extractUrlBase(c), l, n, m, q, p, o, r, t, u, w, s, B, v, A, E, x, L, D, G, C, N, J, M, K, H = a;
    for (v in this.geometryHandlerMap)
        this.geometryHandlerMap[v].loaderObject = 
        new this.geometryHandlerMap[v].loaderClass;
    N = C = 0;
    K = {scene: new THREE.Scene,geometries: {},materials: {},textures: {},objects: {},cameras: {},lights: {},fogs: {},empties: {}};
    if (H.transform && (a = H.transform.position, c = H.transform.rotation, v = H.transform.scale, a && K.scene.position.set(a[0], a[1], a[2]), c && K.scene.rotation.set(c[0], c[1], c[2]), v && K.scene.scale.set(v[0], v[1], v[2]), a || c || v))
        K.scene.updateMatrix(), K.scene.updateMatrixWorld();
    a = function(a) {
        return function() {
            N -= a;
            h();
            i.onLoadComplete()
        }
    };
    for (q in H.cameras)
        v = 
        H.cameras[q], "perspective" === v.type ? L = new THREE.PerspectiveCamera(v.fov, v.aspect, v.near, v.far) : "ortho" === v.type && (L = new THREE.OrthographicCamera(v.left, v.right, v.top, v.bottom, v.near, v.far)), u = v.position, c = v.target, v = v.up, L.position.set(u[0], u[1], u[2]), L.target = new THREE.Vector3(c[0], c[1], c[2]), v && L.up.set(v[0], v[1], v[2]), K.cameras[q] = L;
    for (m in H.lights)
        c = H.lights[m], q = void 0 !== c.color ? c.color : 16777215, L = void 0 !== c.intensity ? c.intensity : 1, "directional" === c.type ? (u = c.direction, t = new THREE.DirectionalLight(q, 
        L), t.position.set(u[0], u[1], u[2]), t.position.normalize()) : "point" === c.type ? (u = c.position, t = c.distance, t = new THREE.PointLight(q, L, t), t.position.set(u[0], u[1], u[2])) : "ambient" === c.type && (t = new THREE.AmbientLight(q)), K.scene.add(t), K.lights[m] = t;
    for (p in H.fogs)
        m = H.fogs[p], "linear" === m.type ? D = new THREE.Fog(0, m.near, m.far) : "exp2" === m.type && (D = new THREE.FogExp2(0, m.density)), v = m.color, D.color.setRGB(v[0], v[1], v[2]), K.fogs[p] = D;
    K.cameras && H.defaults.camera && (K.currentCamera = K.cameras[H.defaults.camera]);
    K.fogs && H.defaults.fog && (K.scene.fog = K.fogs[H.defaults.fog]);
    v = H.defaults.bgcolor;
    K.bgColor = new THREE.Color;
    K.bgColor.setRGB(v[0], v[1], v[2]);
    K.bgColorAlpha = H.defaults.bgalpha;
    for (l in H.geometries)
        p = H.geometries[l], p.type in this.geometryHandlerMap && (C += 1, i.onLoadStart());
    J = C;
    for (l in H.geometries)
        if (p = H.geometries[l], "cube" === p.type)
            E = new THREE.CubeGeometry(p.width, p.height, p.depth, p.segmentsWidth, p.segmentsHeight, p.segmentsDepth, null, p.flipped, p.sides), K.geometries[l] = E;
        else if ("plane" === p.type)
            E = 
            new THREE.PlaneGeometry(p.width, p.height, p.segmentsWidth, p.segmentsHeight), K.geometries[l] = E;
        else if ("sphere" === p.type)
            E = new THREE.SphereGeometry(p.radius, p.segmentsWidth, p.segmentsHeight), K.geometries[l] = E;
        else if ("cylinder" === p.type)
            E = new THREE.CylinderGeometry(p.topRad, p.botRad, p.height, p.radSegs, p.heightSegs), K.geometries[l] = E;
        else if ("torus" === p.type)
            E = new THREE.TorusGeometry(p.radius, p.tube, p.segmentsR, p.segmentsT), K.geometries[l] = E;
        else if ("icosahedron" === p.type)
            E = new THREE.IcosahedronGeometry(p.radius, 
            p.subdivisions), K.geometries[l] = E;
        else if (p.type in this.geometryHandlerMap) {
            D = {};
            for (G in p)
                "type" !== G && "url" !== G && (D[G] = p[G]);
            this.geometryHandlerMap[p.type].loaderObject.load(d(p.url, H.urlBaseType), f(l), D)
        } else
            "embedded" === p.type && (p = H.embeds[p.id], p.metadata = H.metadata, p && this.geometryHandlerMap.ascii.loaderObject.createModel(p, g(l), ""));
    for (o in H.textures)
        if (l = H.textures[o], l.url instanceof Array) {
            N += l.url.length;
            for (G = 0; G < l.url.length; G++)
                i.onLoadStart()
        } else
            N += 1, i.onLoadStart();
    M = N;
    for (o in H.textures) {
        l = 
        H.textures[o];
        void 0 !== l.mapping && void 0 !== THREE[l.mapping] && (l.mapping = new THREE[l.mapping]);
        if (l.url instanceof Array) {
            p = l.url.length;
            D = [];
            for (G = 0; G < p; G++)
                D[G] = d(l.url[G], H.urlBaseType);
            G = (G = D[0].endsWith(".dds")) ? THREE.ImageUtils.loadCompressedTextureCube(D, l.mapping, a(p)) : THREE.ImageUtils.loadTextureCube(D, l.mapping, a(p))
        } else {
            G = l.url.toLowerCase().endsWith(".dds");
            p = d(l.url, H.urlBaseType);
            D = a(1);
            G = G ? THREE.ImageUtils.loadCompressedTexture(p, l.mapping, D) : THREE.ImageUtils.loadTexture(p, l.mapping, 
            D);
            void 0 !== THREE[l.minFilter] && (G.minFilter = THREE[l.minFilter]);
            void 0 !== THREE[l.magFilter] && (G.magFilter = THREE[l.magFilter]);
            l.anisotropy && (G.anisotropy = l.anisotropy);
            if (l.repeat && (G.repeat.set(l.repeat[0], l.repeat[1]), 1 !== l.repeat[0] && (G.wrapS = THREE.RepeatWrapping), 1 !== l.repeat[1]))
                G.wrapT = THREE.RepeatWrapping;
            l.offset && G.offset.set(l.offset[0], l.offset[1]);
            if (l.wrap && (p = {repeat: THREE.RepeatWrapping,mirror: THREE.MirroredRepeatWrapping}, void 0 !== p[l.wrap[0]] && (G.wrapS = p[l.wrap[0]]), void 0 !== p[l.wrap[1]]))
                G.wrapT = 
                p[l.wrap[1]]
        }
        K.textures[o] = G
    }
    for (n in H.materials) {
        r = H.materials[n];
        for (A in r.parameters)
            "envMap" === A || "map" === A || "lightMap" === A || "bumpMap" === A ? r.parameters[A] = K.textures[r.parameters[A]] : "shading" === A ? r.parameters[A] = "flat" === r.parameters[A] ? THREE.FlatShading : THREE.SmoothShading : "side" === A ? r.parameters[A] = "double" == r.parameters[A] ? THREE.DoubleSide : "back" == r.parameters[A] ? THREE.BackSide : THREE.FrontSide : "blending" === A ? r.parameters[A] = r.parameters[A] in THREE ? THREE[r.parameters[A]] : THREE.NormalBlending : 
            "combine" === A ? r.parameters[A] = "MixOperation" == r.parameters[A] ? THREE.MixOperation : THREE.MultiplyOperation : "vertexColors" === A ? "face" == r.parameters[A] ? r.parameters[A] = THREE.FaceColors : r.parameters[A] && (r.parameters[A] = THREE.VertexColors) : "wrapRGB" === A && (o = r.parameters[A], r.parameters[A] = new THREE.Vector3(o[0], o[1], o[2]));
        void 0 !== r.parameters.opacity && 1 > r.parameters.opacity && (r.parameters.transparent = !0);
        r.parameters.normalMap ? (o = THREE.ShaderUtils.lib.normal, a = THREE.UniformsUtils.clone(o.uniforms), l = 
        r.parameters.color, G = r.parameters.specular, p = r.parameters.ambient, D = r.parameters.shininess, a.tNormal.value = K.textures[r.parameters.normalMap], r.parameters.normalScale && a.uNormalScale.value.set(r.parameters.normalScale[0], r.parameters.normalScale[1]), r.parameters.map && (a.tDiffuse.value = r.parameters.map, a.enableDiffuse.value = !0), r.parameters.envMap && (a.tCube.value = r.parameters.envMap, a.enableReflection.value = !0, a.uReflectivity.value = r.parameters.reflectivity), r.parameters.lightMap && (a.tAO.value = r.parameters.lightMap, 
        a.enableAO.value = !0), r.parameters.specularMap && (a.tSpecular.value = K.textures[r.parameters.specularMap], a.enableSpecular.value = !0), r.parameters.displacementMap && (a.tDisplacement.value = K.textures[r.parameters.displacementMap], a.enableDisplacement.value = !0, a.uDisplacementBias.value = r.parameters.displacementBias, a.uDisplacementScale.value = r.parameters.displacementScale), a.uDiffuseColor.value.setHex(l), a.uSpecularColor.value.setHex(G), a.uAmbientColor.value.setHex(p), a.uShininess.value = D, r.parameters.opacity && 
        (a.uOpacity.value = r.parameters.opacity), x = new THREE.ShaderMaterial({fragmentShader: o.fragmentShader,vertexShader: o.vertexShader,uniforms: a,lights: !0,fog: !0})) : x = new THREE[r.type](r.parameters);
        K.materials[n] = x
    }
    e(K.scene, H.objects);
    i.callbackSync(K);
    h()
};
THREE.TextureLoader = function() {
    THREE.EventTarget.call(this);
    this.crossOrigin = null
};
THREE.TextureLoader.prototype = {constructor: THREE.TextureLoader,load: function(a) {
        var b = this, c = new Image;
        c.addEventListener("load", function() {
            var a = new THREE.Texture(c);
            a.needsUpdate = !0;
            b.dispatchEvent({type: "load",content: a})
        }, !1);
        c.addEventListener("error", function() {
            b.dispatchEvent({type: "error",message: "Couldn't load URL [" + a + "]"})
        }, !1);
        b.crossOrigin && (c.crossOrigin = b.crossOrigin);
        c.src = a
    }};
THREE.Material = function() {
    this.id = THREE.MaterialCount++;
    this.name = "";
    this.side = THREE.FrontSide;
    this.opacity = 1;
    this.transparent = !1;
    this.blending = THREE.NormalBlending;
    this.blendSrc = THREE.SrcAlphaFactor;
    this.blendDst = THREE.OneMinusSrcAlphaFactor;
    this.blendEquation = THREE.AddEquation;
    this.depthWrite = this.depthTest = !0;
    this.polygonOffset = !1;
    this.alphaTest = this.polygonOffsetUnits = this.polygonOffsetFactor = 0;
    this.overdraw = !1;
    this.needsUpdate = this.visible = !0
};
THREE.Material.prototype.setValues = function(a) {
    if (void 0 !== a)
        for (var b in a) {
            var c = a[b];
            if (void 0 === c)
                console.warn("THREE.Material: '" + b + "' parameter is undefined.");
            else if (b in this) {
                var d = this[b];
                d instanceof THREE.Color && c instanceof THREE.Color ? d.copy(c) : d instanceof THREE.Color && "number" === typeof c ? d.setHex(c) : d instanceof THREE.Vector3 && c instanceof THREE.Vector3 ? d.copy(c) : this[b] = c
            }
        }
};
THREE.Material.prototype.clone = function(a) {
    void 0 === a && (a = new THREE.Material);
    a.name = this.name;
    a.side = this.side;
    a.opacity = this.opacity;
    a.transparent = this.transparent;
    a.blending = this.blending;
    a.blendSrc = this.blendSrc;
    a.blendDst = this.blendDst;
    a.blendEquation = this.blendEquation;
    a.depthTest = this.depthTest;
    a.depthWrite = this.depthWrite;
    a.polygonOffset = this.polygonOffset;
    a.polygonOffsetFactor = this.polygonOffsetFactor;
    a.polygonOffsetUnits = this.polygonOffsetUnits;
    a.alphaTest = this.alphaTest;
    a.overdraw = this.overdraw;
    a.visible = this.visible;
    return a
};
THREE.MaterialCount = 0;
THREE.LineBasicMaterial = function(a) {
    THREE.Material.call(this);
    this.color = new THREE.Color(16777215);
    this.linewidth = 1;
    this.linejoin = this.linecap = "round";
    this.vertexColors = !1;
    this.fog = !0;
    this.setValues(a)
};
THREE.LineBasicMaterial.prototype = Object.create(THREE.Material.prototype);
THREE.LineBasicMaterial.prototype.clone = function() {
    var a = new THREE.LineBasicMaterial;
    THREE.Material.prototype.clone.call(this, a);
    a.color.copy(this.color);
    a.linewidth = this.linewidth;
    a.linecap = this.linecap;
    a.linejoin = this.linejoin;
    a.vertexColors = this.vertexColors;
    a.fog = this.fog;
    return a
};
THREE.MeshBasicMaterial = function(a) {
    THREE.Material.call(this);
    this.color = new THREE.Color(16777215);
    this.envMap = this.specularMap = this.lightMap = this.map = null;
    this.combine = THREE.MultiplyOperation;
    this.reflectivity = 1;
    this.refractionRatio = 0.98;
    this.fog = !0;
    this.shading = THREE.SmoothShading;
    this.wireframe = !1;
    this.wireframeLinewidth = 1;
    this.wireframeLinejoin = this.wireframeLinecap = "round";
    this.vertexColors = THREE.NoColors;
    this.morphTargets = this.skinning = !1;
    this.setValues(a)
};
THREE.MeshBasicMaterial.prototype = Object.create(THREE.Material.prototype);
THREE.MeshBasicMaterial.prototype.clone = function() {
    var a = new THREE.MeshBasicMaterial;
    THREE.Material.prototype.clone.call(this, a);
    a.color.copy(this.color);
    a.map = this.map;
    a.lightMap = this.lightMap;
    a.specularMap = this.specularMap;
    a.envMap = this.envMap;
    a.combine = this.combine;
    a.reflectivity = this.reflectivity;
    a.refractionRatio = this.refractionRatio;
    a.fog = this.fog;
    a.shading = this.shading;
    a.wireframe = this.wireframe;
    a.wireframeLinewidth = this.wireframeLinewidth;
    a.wireframeLinecap = this.wireframeLinecap;
    a.wireframeLinejoin = 
    this.wireframeLinejoin;
    a.vertexColors = this.vertexColors;
    a.skinning = this.skinning;
    a.morphTargets = this.morphTargets;
    return a
};
THREE.MeshLambertMaterial = function(a) {
    THREE.Material.call(this);
    this.color = new THREE.Color(16777215);
    this.ambient = new THREE.Color(16777215);
    this.emissive = new THREE.Color(0);
    this.wrapAround = !1;
    this.wrapRGB = new THREE.Vector3(1, 1, 1);
    this.envMap = this.specularMap = this.lightMap = this.map = null;
    this.combine = THREE.MultiplyOperation;
    this.reflectivity = 1;
    this.refractionRatio = 0.98;
    this.fog = !0;
    this.shading = THREE.SmoothShading;
    this.wireframe = !1;
    this.wireframeLinewidth = 1;
    this.wireframeLinejoin = this.wireframeLinecap = 
    "round";
    this.vertexColors = THREE.NoColors;
    this.morphNormals = this.morphTargets = this.skinning = !1;
    this.setValues(a)
};
THREE.MeshLambertMaterial.prototype = Object.create(THREE.Material.prototype);
THREE.MeshLambertMaterial.prototype.clone = function() {
    var a = new THREE.MeshLambertMaterial;
    THREE.Material.prototype.clone.call(this, a);
    a.color.copy(this.color);
    a.ambient.copy(this.ambient);
    a.emissive.copy(this.emissive);
    a.wrapAround = this.wrapAround;
    a.wrapRGB.copy(this.wrapRGB);
    a.map = this.map;
    a.lightMap = this.lightMap;
    a.specularMap = this.specularMap;
    a.envMap = this.envMap;
    a.combine = this.combine;
    a.reflectivity = this.reflectivity;
    a.refractionRatio = this.refractionRatio;
    a.fog = this.fog;
    a.shading = this.shading;
    a.wireframe = this.wireframe;
    a.wireframeLinewidth = this.wireframeLinewidth;
    a.wireframeLinecap = this.wireframeLinecap;
    a.wireframeLinejoin = this.wireframeLinejoin;
    a.vertexColors = this.vertexColors;
    a.skinning = this.skinning;
    a.morphTargets = this.morphTargets;
    a.morphNormals = this.morphNormals;
    return a
};
THREE.MeshPhongMaterial = function(a) {
    THREE.Material.call(this);
    this.color = new THREE.Color(16777215);
    this.ambient = new THREE.Color(16777215);
    this.emissive = new THREE.Color(0);
    this.specular = new THREE.Color(1118481);
    this.shininess = 30;
    this.wrapAround = this.perPixel = this.metal = !1;
    this.wrapRGB = new THREE.Vector3(1, 1, 1);
    this.bumpMap = this.lightMap = this.map = null;
    this.bumpScale = 1;
    this.normalMap = null;
    this.normalScale = new THREE.Vector2(1, 1);
    this.envMap = this.specularMap = null;
    this.combine = THREE.MultiplyOperation;
    this.reflectivity = 
    1;
    this.refractionRatio = 0.98;
    this.fog = !0;
    this.shading = THREE.SmoothShading;
    this.wireframe = !1;
    this.wireframeLinewidth = 1;
    this.wireframeLinejoin = this.wireframeLinecap = "round";
    this.vertexColors = THREE.NoColors;
    this.morphNormals = this.morphTargets = this.skinning = !1;
    this.setValues(a)
};
THREE.MeshPhongMaterial.prototype = Object.create(THREE.Material.prototype);
THREE.MeshPhongMaterial.prototype.clone = function() {
    var a = new THREE.MeshPhongMaterial;
    THREE.Material.prototype.clone.call(this, a);
    a.color.copy(this.color);
    a.ambient.copy(this.ambient);
    a.emissive.copy(this.emissive);
    a.specular.copy(this.specular);
    a.shininess = this.shininess;
    a.metal = this.metal;
    a.perPixel = this.perPixel;
    a.wrapAround = this.wrapAround;
    a.wrapRGB.copy(this.wrapRGB);
    a.map = this.map;
    a.lightMap = this.lightMap;
    a.bumpMap = this.bumpMap;
    a.bumpScale = this.bumpScale;
    a.normalMap = this.normalMap;
    a.normalScale.copy(this.normalScale);
    a.specularMap = this.specularMap;
    a.envMap = this.envMap;
    a.combine = this.combine;
    a.reflectivity = this.reflectivity;
    a.refractionRatio = this.refractionRatio;
    a.fog = this.fog;
    a.shading = this.shading;
    a.wireframe = this.wireframe;
    a.wireframeLinewidth = this.wireframeLinewidth;
    a.wireframeLinecap = this.wireframeLinecap;
    a.wireframeLinejoin = this.wireframeLinejoin;
    a.vertexColors = this.vertexColors;
    a.skinning = this.skinning;
    a.morphTargets = this.morphTargets;
    a.morphNormals = this.morphNormals;
    return a
};
THREE.MeshDepthMaterial = function(a) {
    THREE.Material.call(this);
    this.wireframe = !1;
    this.wireframeLinewidth = 1;
    this.setValues(a)
};
THREE.MeshDepthMaterial.prototype = Object.create(THREE.Material.prototype);
THREE.MeshDepthMaterial.prototype.clone = function() {
    var a = new THREE.LineBasicMaterial;
    THREE.Material.prototype.clone.call(this, a);
    a.wireframe = this.wireframe;
    a.wireframeLinewidth = this.wireframeLinewidth;
    return a
};
THREE.MeshNormalMaterial = function(a) {
    THREE.Material.call(this, a);
    this.shading = THREE.FlatShading;
    this.wireframe = !1;
    this.wireframeLinewidth = 1;
    this.setValues(a)
};
THREE.MeshNormalMaterial.prototype = Object.create(THREE.Material.prototype);
THREE.MeshNormalMaterial.prototype.clone = function() {
    var a = new THREE.MeshNormalMaterial;
    THREE.Material.prototype.clone.call(this, a);
    a.shading = this.shading;
    a.wireframe = this.wireframe;
    a.wireframeLinewidth = this.wireframeLinewidth;
    return a
};
THREE.MeshFaceMaterial = function() {
};
THREE.MeshFaceMaterial.prototype.clone = function() {
    return new THREE.MeshFaceMaterial
};
THREE.ParticleBasicMaterial = function(a) {
    THREE.Material.call(this);
    this.color = new THREE.Color(16777215);
    this.map = null;
    this.size = 1;
    this.sizeAttenuation = !0;
    this.vertexColors = !1;
    this.fog = !0;
    this.setValues(a)
};
THREE.ParticleBasicMaterial.prototype = Object.create(THREE.Material.prototype);
THREE.ParticleBasicMaterial.prototype.clone = function() {
    var a = new THREE.ParticleBasicMaterial;
    THREE.Material.prototype.clone.call(this, a);
    a.color.copy(this.color);
    a.map = this.map;
    a.size = this.size;
    a.sizeAttenuation = this.sizeAttenuation;
    a.vertexColors = this.vertexColors;
    a.fog = this.fog;
    return a
};
THREE.ParticleCanvasMaterial = function(a) {
    THREE.Material.call(this);
    this.color = new THREE.Color(16777215);
    this.program = function() {
    };
    this.setValues(a)
};
THREE.ParticleCanvasMaterial.prototype = Object.create(THREE.Material.prototype);
THREE.ParticleCanvasMaterial.prototype.clone = function() {
    var a = new THREE.ParticleCanvasMaterial;
    THREE.Material.prototype.clone.call(this, a);
    a.color.copy(this.color);
    a.program = this.program;
    return a
};
THREE.ParticleDOMMaterial = function(a) {
    this.element = a
};
THREE.ParticleDOMMaterial.prototype.clone = function() {
    return new THREE.ParticleDOMMaterial(this.element)
};
THREE.ShaderMaterial = function(a) {
    THREE.Material.call(this);
    this.vertexShader = this.fragmentShader = "void main() {}";
    this.uniforms = {};
    this.attributes = null;
    this.shading = THREE.SmoothShading;
    this.wireframe = !1;
    this.wireframeLinewidth = 1;
    this.lights = this.fog = !1;
    this.vertexColors = THREE.NoColors;
    this.morphNormals = this.morphTargets = this.skinning = !1;
    this.setValues(a)
};
THREE.ShaderMaterial.prototype = Object.create(THREE.Material.prototype);
THREE.ShaderMaterial.prototype.clone = function() {
    var a = new THREE.ShaderMaterial;
    THREE.Material.prototype.clone.call(this, a);
    a.fragmentShader = this.fragmentShader;
    a.vertexShader = this.vertexShader;
    a.uniforms = this.uniforms;
    a.attributes = this.attributes;
    a.shading = this.shading;
    a.wireframe = this.wireframe;
    a.wireframeLinewidth = this.wireframeLinewidth;
    a.fog = this.fog;
    a.lights = this.lights;
    a.vertexColors = this.vertexColors;
    a.skinning = this.skinning;
    a.morphTargets = this.morphTargets;
    a.morphNormals = this.morphNormals;
    return a
};
THREE.Texture = function(a, b, c, d, e, f, g, h, i) {
    this.id = THREE.TextureCount++;
    this.image = a;
    this.mapping = void 0 !== b ? b : new THREE.UVMapping;
    this.wrapS = void 0 !== c ? c : THREE.ClampToEdgeWrapping;
    this.wrapT = void 0 !== d ? d : THREE.ClampToEdgeWrapping;
    this.magFilter = void 0 !== e ? e : THREE.LinearFilter;
    this.minFilter = void 0 !== f ? f : THREE.LinearMipMapLinearFilter;
    this.anisotropy = void 0 !== i ? i : 1;
    this.format = void 0 !== g ? g : THREE.RGBAFormat;
    this.type = void 0 !== h ? h : THREE.UnsignedByteType;
    this.offset = new THREE.Vector2(0, 0);
    this.repeat = new THREE.Vector2(1, 
    1);
    this.generateMipmaps = !0;
    this.premultiplyAlpha = !1;
    this.flipY = !0;
    this.needsUpdate = !1;
    this.onUpdate = null
};
THREE.Texture.prototype = {constructor: THREE.Texture,clone: function() {
        var a = new THREE.Texture;
        a.image = this.image;
        a.mapping = this.mapping;
        a.wrapS = this.wrapS;
        a.wrapT = this.wrapT;
        a.magFilter = this.magFilter;
        a.minFilter = this.minFilter;
        a.anisotropy = this.anisotropy;
        a.format = this.format;
        a.type = this.type;
        a.offset.copy(this.offset);
        a.repeat.copy(this.repeat);
        a.generateMipmaps = this.generateMipmaps;
        a.premultiplyAlpha = this.premultiplyAlpha;
        a.flipY = this.flipY;
        return a
    }};
THREE.TextureCount = 0;
THREE.CompressedTexture = function(a, b, c, d, e, f, g, h, i, j) {
    THREE.Texture.call(this, null, f, g, h, i, j, d, e);
    this.image = {width: b,height: c};
    this.mipmaps = a
};
THREE.CompressedTexture.prototype = Object.create(THREE.Texture.prototype);
THREE.CompressedTexture.prototype.clone = function() {
    var a = new THREE.CompressedTexture;
    a.image = this.image;
    a.mipmaps = this.mipmaps;
    a.format = this.format;
    a.type = this.type;
    a.mapping = this.mapping;
    a.wrapS = this.wrapS;
    a.wrapT = this.wrapT;
    a.magFilter = this.magFilter;
    a.minFilter = this.minFilter;
    a.anisotropy = this.anisotropy;
    a.offset.copy(this.offset);
    a.repeat.copy(this.repeat);
    return a
};
THREE.DataTexture = function(a, b, c, d, e, f, g, h, i, j) {
    THREE.Texture.call(this, null, f, g, h, i, j, d, e);
    this.image = {data: a,width: b,height: c}
};
THREE.DataTexture.prototype = Object.create(THREE.Texture.prototype);
THREE.DataTexture.prototype.clone = function() {
    var a = new THREE.DataTexture(this.image.data, this.image.width, this.image.height, this.format, this.type, this.mapping, this.wrapS, this.wrapT, this.magFilter, this.minFilter);
    a.offset.copy(this.offset);
    a.repeat.copy(this.repeat);
    return a
};
THREE.Particle = function(a) {
    THREE.Object3D.call(this);
    this.material = a
};
THREE.Particle.prototype = Object.create(THREE.Object3D.prototype);
THREE.ParticleSystem = function(a, b) {
    THREE.Object3D.call(this);
    this.geometry = a;
    this.material = void 0 !== b ? b : new THREE.ParticleBasicMaterial({color: 16777215 * Math.random()});
    this.sortParticles = !1;
    this.geometry && (this.geometry.boundingSphere || this.geometry.computeBoundingSphere(), this.boundRadius = a.boundingSphere.radius);
    this.frustumCulled = !1
};
THREE.ParticleSystem.prototype = Object.create(THREE.Object3D.prototype);
THREE.Line = function(a, b, c) {
    THREE.Object3D.call(this);
    this.geometry = a;
    this.material = void 0 !== b ? b : new THREE.LineBasicMaterial({color: 16777215 * Math.random()});
    this.type = void 0 !== c ? c : THREE.LineStrip;
    this.geometry && (this.geometry.boundingSphere || this.geometry.computeBoundingSphere())
};
THREE.LineStrip = 0;
THREE.LinePieces = 1;
THREE.Line.prototype = Object.create(THREE.Object3D.prototype);
THREE.Mesh = function(a, b) {
    THREE.Object3D.call(this);
    this.geometry = a;
    this.material = void 0 !== b ? b : new THREE.MeshBasicMaterial({color: 16777215 * Math.random(),wireframe: !0});
    if (this.geometry && (this.geometry.boundingSphere || this.geometry.computeBoundingSphere(), this.boundRadius = a.boundingSphere.radius, this.geometry.morphTargets.length)) {
        this.morphTargetBase = -1;
        this.morphTargetForcedOrder = [];
        this.morphTargetInfluences = [];
        this.morphTargetDictionary = {};
        for (var c = 0; c < this.geometry.morphTargets.length; c++)
            this.morphTargetInfluences.push(0), 
            this.morphTargetDictionary[this.geometry.morphTargets[c].name] = c
    }
};
THREE.Mesh.prototype = Object.create(THREE.Object3D.prototype);
THREE.Mesh.prototype.getMorphTargetIndexByName = function(a) {
    if (void 0 !== this.morphTargetDictionary[a])
        return this.morphTargetDictionary[a];
    console.log("THREE.Mesh.getMorphTargetIndexByName: morph target " + a + " does not exist. Returning 0.");
    return 0
};
THREE.Bone = function(a) {
    THREE.Object3D.call(this);
    this.skin = a;
    this.skinMatrix = new THREE.Matrix4
};
THREE.Bone.prototype = Object.create(THREE.Object3D.prototype);
THREE.Bone.prototype.update = function(a, b) {
    this.matrixAutoUpdate && (b |= this.updateMatrix());
    if (b || this.matrixWorldNeedsUpdate)
        a ? this.skinMatrix.multiply(a, this.matrix) : this.skinMatrix.copy(this.matrix), this.matrixWorldNeedsUpdate = !1, b = !0;
    var c, d = this.children.length;
    for (c = 0; c < d; c++)
        this.children[c].update(this.skinMatrix, b)
};
THREE.SkinnedMesh = function(a, b, c) {
    THREE.Mesh.call(this, a, b);
    this.useVertexTexture = void 0 !== c ? c : !0;
    this.identityMatrix = new THREE.Matrix4;
    this.bones = [];
    this.boneMatrices = [];
    var d, e, f;
    if (void 0 !== this.geometry.bones) {
        for (a = 0; a < this.geometry.bones.length; a++)
            c = this.geometry.bones[a], d = c.pos, e = c.rotq, f = c.scl, b = this.addBone(), b.name = c.name, b.position.set(d[0], d[1], d[2]), b.quaternion.set(e[0], e[1], e[2], e[3]), b.useQuaternion = !0, void 0 !== f ? b.scale.set(f[0], f[1], f[2]) : b.scale.set(1, 1, 1);
        for (a = 0; a < this.bones.length; a++)
            c = 
            this.geometry.bones[a], b = this.bones[a], -1 === c.parent ? this.add(b) : this.bones[c.parent].add(b);
        a = this.bones.length;
        this.useVertexTexture ? (this.boneTextureHeight = this.boneTextureWidth = 256 < a ? 64 : 64 < a ? 32 : 16 < a ? 16 : 8, this.boneMatrices = new Float32Array(4 * this.boneTextureWidth * this.boneTextureHeight), this.boneTexture = new THREE.DataTexture(this.boneMatrices, this.boneTextureWidth, this.boneTextureHeight, THREE.RGBAFormat, THREE.FloatType), this.boneTexture.minFilter = THREE.NearestFilter, this.boneTexture.magFilter = 
        THREE.NearestFilter, this.boneTexture.generateMipmaps = !1, this.boneTexture.flipY = !1) : this.boneMatrices = new Float32Array(16 * a);
        this.pose()
    }
};
THREE.SkinnedMesh.prototype = Object.create(THREE.Mesh.prototype);
THREE.SkinnedMesh.prototype.addBone = function(a) {
    void 0 === a && (a = new THREE.Bone(this));
    this.bones.push(a);
    return a
};
THREE.SkinnedMesh.prototype.updateMatrixWorld = function(a) {
    this.matrixAutoUpdate && this.updateMatrix();
    if (this.matrixWorldNeedsUpdate || a)
        this.parent ? this.matrixWorld.multiply(this.parent.matrixWorld, this.matrix) : this.matrixWorld.copy(this.matrix), this.matrixWorldNeedsUpdate = !1;
    for (var a = 0, b = this.children.length; a < b; a++) {
        var c = this.children[a];
        c instanceof THREE.Bone ? c.update(this.identityMatrix, !1) : c.updateMatrixWorld(!0)
    }
    if (void 0 == this.boneInverses) {
        this.boneInverses = [];
        a = 0;
        for (b = this.bones.length; a < 
        b; a++)
            c = new THREE.Matrix4, c.getInverse(this.bones[a].skinMatrix), this.boneInverses.push(c)
    }
    a = 0;
    for (b = this.bones.length; a < b; a++)
        THREE.SkinnedMesh.offsetMatrix.multiply(this.bones[a].skinMatrix, this.boneInverses[a]), THREE.SkinnedMesh.offsetMatrix.flattenToArrayOffset(this.boneMatrices, 16 * a);
    this.useVertexTexture && (this.boneTexture.needsUpdate = !0)
};
THREE.SkinnedMesh.prototype.pose = function() {
    this.updateMatrixWorld(!0);
    for (var a = 0; a < this.geometry.skinIndices.length; a++) {
        var b = this.geometry.skinWeights[a], c = 1 / b.lengthManhattan();
        Infinity !== c ? b.multiplyScalar(c) : b.set(1)
    }
};
THREE.SkinnedMesh.offsetMatrix = new THREE.Matrix4;
THREE.MorphAnimMesh = function(a, b) {
    THREE.Mesh.call(this, a, b);
    this.duration = 1E3;
    this.mirroredLoop = !1;
    this.currentKeyframe = this.lastKeyframe = this.time = 0;
    this.direction = 1;
    this.directionBackwards = !1;
    this.setFrameRange(0, this.geometry.morphTargets.length - 1)
};
THREE.MorphAnimMesh.prototype = Object.create(THREE.Mesh.prototype);
THREE.MorphAnimMesh.prototype.setFrameRange = function(a, b) {
    this.startKeyframe = a;
    this.endKeyframe = b;
    this.length = this.endKeyframe - this.startKeyframe + 1
};
THREE.MorphAnimMesh.prototype.setDirectionForward = function() {
    this.direction = 1;
    this.directionBackwards = !1
};
THREE.MorphAnimMesh.prototype.setDirectionBackward = function() {
    this.direction = -1;
    this.directionBackwards = !0
};
THREE.MorphAnimMesh.prototype.parseAnimations = function() {
    var a = this.geometry;
    a.animations || (a.animations = {});
    for (var b, c = a.animations, d = /([a-z]+)(\d+)/, e = 0, f = a.morphTargets.length; e < f; e++) {
        var g = a.morphTargets[e].name.match(d);
        if (g && 1 < g.length) {
            g = g[1];
            c[g] || (c[g] = {start: Infinity,end: -Infinity});
            var h = c[g];
            e < h.start && (h.start = e);
            e > h.end && (h.end = e);
            b || (b = g)
        }
    }
    a.firstAnimation = b
};
THREE.MorphAnimMesh.prototype.setAnimationLabel = function(a, b, c) {
    this.geometry.animations || (this.geometry.animations = {});
    this.geometry.animations[a] = {start: b,end: c}
};
THREE.MorphAnimMesh.prototype.playAnimation = function(a, b) {
    var c = this.geometry.animations[a];
    c ? (this.setFrameRange(c.start, c.end), this.duration = 1E3 * ((c.end - c.start) / b), this.time = 0) : console.warn("animation[" + a + "] undefined")
};
THREE.MorphAnimMesh.prototype.updateAnimation = function(a) {
    var b = this.duration / this.length;
    this.time += this.direction * a;
    if (this.mirroredLoop) {
        if (this.time > this.duration || 0 > this.time)
            if (this.direction *= -1, this.time > this.duration && (this.time = this.duration, this.directionBackwards = !0), 0 > this.time)
                this.time = 0, this.directionBackwards = !1
    } else
        this.time %= this.duration, 0 > this.time && (this.time += this.duration);
    a = this.startKeyframe + THREE.Math.clamp(Math.floor(this.time / b), 0, this.length - 1);
    a !== this.currentKeyframe && 
    (this.morphTargetInfluences[this.lastKeyframe] = 0, this.morphTargetInfluences[this.currentKeyframe] = 1, this.morphTargetInfluences[a] = 0, this.lastKeyframe = this.currentKeyframe, this.currentKeyframe = a);
    b = this.time % b / b;
    this.directionBackwards && (b = 1 - b);
    this.morphTargetInfluences[this.currentKeyframe] = b;
    this.morphTargetInfluences[this.lastKeyframe] = 1 - b
};
THREE.Ribbon = function(a, b) {
    THREE.Object3D.call(this);
    this.geometry = a;
    this.material = b
};
THREE.Ribbon.prototype = Object.create(THREE.Object3D.prototype);
THREE.LOD = function() {
    THREE.Object3D.call(this);
    this.LODs = []
};
THREE.LOD.prototype = Object.create(THREE.Object3D.prototype);
THREE.LOD.prototype.addLevel = function(a, b) {
    void 0 === b && (b = 0);
    for (var b = Math.abs(b), c = 0; c < this.LODs.length && !(b < this.LODs[c].visibleAtDistance); c++)
        ;
    this.LODs.splice(c, 0, {visibleAtDistance: b,object3D: a});
    this.add(a)
};
THREE.LOD.prototype.update = function(a) {
    if (1 < this.LODs.length) {
        a.matrixWorldInverse.getInverse(a.matrixWorld);
        a = a.matrixWorldInverse;
        a = -(a.elements[2] * this.matrixWorld.elements[12] + a.elements[6] * this.matrixWorld.elements[13] + a.elements[10] * this.matrixWorld.elements[14] + a.elements[14]);
        this.LODs[0].object3D.visible = !0;
        for (var b = 1; b < this.LODs.length; b++)
            if (a >= this.LODs[b].visibleAtDistance)
                this.LODs[b - 1].object3D.visible = !1, this.LODs[b].object3D.visible = !0;
            else
                break;
        for (; b < this.LODs.length; b++)
            this.LODs[b].object3D.visible = 
            !1
    }
};
THREE.Sprite = function(a) {
    THREE.Object3D.call(this);
    this.color = void 0 !== a.color ? new THREE.Color(a.color) : new THREE.Color(16777215);
    this.map = void 0 !== a.map ? a.map : new THREE.Texture;
    this.blending = void 0 !== a.blending ? a.blending : THREE.NormalBlending;
    this.blendSrc = void 0 !== a.blendSrc ? a.blendSrc : THREE.SrcAlphaFactor;
    this.blendDst = void 0 !== a.blendDst ? a.blendDst : THREE.OneMinusSrcAlphaFactor;
    this.blendEquation = void 0 !== a.blendEquation ? a.blendEquation : THREE.AddEquation;
    this.useScreenCoordinates = void 0 !== a.useScreenCoordinates ? 
    a.useScreenCoordinates : !0;
    this.mergeWith3D = void 0 !== a.mergeWith3D ? a.mergeWith3D : !this.useScreenCoordinates;
    this.affectedByDistance = void 0 !== a.affectedByDistance ? a.affectedByDistance : !this.useScreenCoordinates;
    this.scaleByViewport = void 0 !== a.scaleByViewport ? a.scaleByViewport : !this.affectedByDistance;
    this.alignment = a.alignment instanceof THREE.Vector2 ? a.alignment : THREE.SpriteAlignment.center;
    this.rotation3d = this.rotation;
    this.rotation = 0;
    this.opacity = 1;
    this.uvOffset = new THREE.Vector2(0, 0);
    this.uvScale = 
    new THREE.Vector2(1, 1)
};
THREE.Sprite.prototype = Object.create(THREE.Object3D.prototype);
THREE.Sprite.prototype.updateMatrix = function() {
    this.matrix.setPosition(this.position);
    this.rotation3d.set(0, 0, this.rotation);
    this.matrix.setRotationFromEuler(this.rotation3d);
    if (1 !== this.scale.x || 1 !== this.scale.y)
        this.matrix.scale(this.scale), this.boundRadiusScale = Math.max(this.scale.x, this.scale.y);
    this.matrixWorldNeedsUpdate = !0
};
THREE.SpriteAlignment = {};
THREE.SpriteAlignment.topLeft = new THREE.Vector2(1, -1);
THREE.SpriteAlignment.topCenter = new THREE.Vector2(0, -1);
THREE.SpriteAlignment.topRight = new THREE.Vector2(-1, -1);
THREE.SpriteAlignment.centerLeft = new THREE.Vector2(1, 0);
THREE.SpriteAlignment.center = new THREE.Vector2(0, 0);
THREE.SpriteAlignment.centerRight = new THREE.Vector2(-1, 0);
THREE.SpriteAlignment.bottomLeft = new THREE.Vector2(1, 1);
THREE.SpriteAlignment.bottomCenter = new THREE.Vector2(0, 1);
THREE.SpriteAlignment.bottomRight = new THREE.Vector2(-1, 1);
THREE.Scene = function() {
    THREE.Object3D.call(this);
    this.overrideMaterial = this.fog = null;
    this.matrixAutoUpdate = !1;
    this.__objects = [];
    this.__lights = [];
    this.__objectsAdded = [];
    this.__objectsRemoved = []
};
THREE.Scene.prototype = Object.create(THREE.Object3D.prototype);
THREE.Scene.prototype.__addObject = function(a) {
    if (a instanceof THREE.Light)
        -1 === this.__lights.indexOf(a) && this.__lights.push(a), a.target && void 0 === a.target.parent && this.add(a.target);
    else if (!(a instanceof THREE.Camera || a instanceof THREE.Bone) && -1 === this.__objects.indexOf(a)) {
        this.__objects.push(a);
        this.__objectsAdded.push(a);
        var b = this.__objectsRemoved.indexOf(a);
        -1 !== b && this.__objectsRemoved.splice(b, 1)
    }
    for (b = 0; b < a.children.length; b++)
        this.__addObject(a.children[b])
};
THREE.Scene.prototype.__removeObject = function(a) {
    if (a instanceof THREE.Light) {
        var b = this.__lights.indexOf(a);
        -1 !== b && this.__lights.splice(b, 1)
    } else
        a instanceof THREE.Camera || (b = this.__objects.indexOf(a), -1 !== b && (this.__objects.splice(b, 1), this.__objectsRemoved.push(a), b = this.__objectsAdded.indexOf(a), -1 !== b && this.__objectsAdded.splice(b, 1)));
    for (b = 0; b < a.children.length; b++)
        this.__removeObject(a.children[b])
};
THREE.Fog = function(a, b, c) {
    this.color = new THREE.Color(a);
    this.near = void 0 !== b ? b : 1;
    this.far = void 0 !== c ? c : 1E3
};
THREE.FogExp2 = function(a, b) {
    this.color = new THREE.Color(a);
    this.density = void 0 !== b ? b : 2.5E-4
};
THREE.CanvasRenderer = function(a) {
    function b(a) {
        u !== a && (u = o.globalAlpha = a)
    }
    function c(a) {
        w !== a && (a === THREE.NormalBlending ? o.globalCompositeOperation = "source-over" : a === THREE.AdditiveBlending ? o.globalCompositeOperation = "lighter" : a === THREE.SubtractiveBlending && (o.globalCompositeOperation = "darker"), w = a)
    }
    function d(a) {
        s !== a && (s = o.strokeStyle = a)
    }
    function e(a) {
        B !== a && (B = o.fillStyle = a)
    }
    console.log("THREE.CanvasRenderer", THREE.REVISION);
    var a = a || {}, f = this, g, h, i, j = new THREE.Projector, l = void 0 !== a.canvas ? a.canvas : 
    document.createElement("canvas"), n, m, q, p, o = l.getContext("2d"), r = new THREE.Color(0), t = 0, u = 1, w = 0, s = null, B = null, v = null, A = null, E = null, x, L, D, G, C = new THREE.RenderableVertex, N = new THREE.RenderableVertex, J, M, K, H, S, X, Z, I, Y, O, na, qa, ca = new THREE.Color, fa = new THREE.Color, R = new THREE.Color, Q = new THREE.Color, ha = new THREE.Color, Ba = {}, ma = {}, ea, wa, va, Qa, ja, xa, Ia, cb, db, $a, Ca = new THREE.Rectangle, Pa = new THREE.Rectangle, Ka = new THREE.Rectangle, vb = !1, Aa = new THREE.Color, ib = new THREE.Color, eb = new THREE.Color, Da = new THREE.Vector3, 
    lb, bb, Nb, Ra, Na, mb, a = 16;
    lb = document.createElement("canvas");
    lb.width = lb.height = 2;
    bb = lb.getContext("2d");
    bb.fillStyle = "rgba(0,0,0,1)";
    bb.fillRect(0, 0, 2, 2);
    Nb = bb.getImageData(0, 0, 2, 2);
    Ra = Nb.data;
    Na = document.createElement("canvas");
    Na.width = Na.height = a;
    mb = Na.getContext("2d");
    mb.translate(-a / 2, -a / 2);
    mb.scale(a, a);
    a--;
    this.domElement = l;
    this.sortElements = this.sortObjects = this.autoClear = !0;
    this.info = {render: {vertices: 0,faces: 0}};
    this.setSize = function(a, b) {
        n = a;
        m = b;
        q = Math.floor(n / 2);
        p = Math.floor(m / 2);
        l.width = 
        n;
        l.height = m;
        Ca.set(-q, -p, q, p);
        Pa.set(-q, -p, q, p);
        u = 1;
        w = 0;
        E = A = v = B = s = null
    };
    this.setClearColor = function(a, b) {
        r.copy(a);
        t = void 0 !== b ? b : 1;
        Pa.set(-q, -p, q, p)
    };
    this.setClearColorHex = function(a, b) {
        r.setHex(a);
        t = void 0 !== b ? b : 1;
        Pa.set(-q, -p, q, p)
    };
    this.getMaxAnisotropy = function() {
        return 0
    };
    this.clear = function() {
        o.setTransform(1, 0, 0, -1, q, p);
        !1 === Pa.isEmpty() && (Pa.minSelf(Ca), Pa.inflate(2), 1 > t && o.clearRect(Math.floor(Pa.getX()), Math.floor(Pa.getY()), Math.floor(Pa.getWidth()), Math.floor(Pa.getHeight())), 0 < t && (c(THREE.NormalBlending), 
        b(1), e("rgba(" + Math.floor(255 * r.r) + "," + Math.floor(255 * r.g) + "," + Math.floor(255 * r.b) + "," + t + ")"), o.fillRect(Math.floor(Pa.getX()), Math.floor(Pa.getY()), Math.floor(Pa.getWidth()), Math.floor(Pa.getHeight()))), Pa.empty())
    };
    this.render = function(a, k) {
        function l(a, b, c) {
            for (var d = 0, e = i.length; d < e; d++) {
                var f = i[d], g = f.color;
                if (f instanceof THREE.DirectionalLight) {
                    var h = f.matrixWorld.getPosition().normalize(), k = b.dot(h);
                    0 >= k || (k *= f.intensity, c.r += g.r * k, c.g += g.g * k, c.b += g.b * k)
                } else
                    f instanceof THREE.PointLight && 
                    (h = f.matrixWorld.getPosition(), k = b.dot(Da.sub(h, a).normalize()), 0 >= k || (k *= 0 == f.distance ? 1 : 1 - Math.min(a.distanceTo(h) / f.distance, 1), 0 != k && (k *= f.intensity, c.r += g.r * k, c.g += g.g * k, c.b += g.b * k)))
            }
        }
        function n(a, d, e, g, h, i, j, o) {
            f.info.render.vertices += 3;
            f.info.render.faces++;
            b(o.opacity);
            c(o.blending);
            J = a.positionScreen.x;
            M = a.positionScreen.y;
            K = d.positionScreen.x;
            H = d.positionScreen.y;
            S = e.positionScreen.x;
            X = e.positionScreen.y;
            m(J, M, K, H, S, X);
            (o instanceof THREE.MeshLambertMaterial || o instanceof THREE.MeshPhongMaterial) && 
            null === o.map && null === o.map ? !0 === vb ? (g = o.color, h = o.emissive, !1 === o.wireframe && o.shading == THREE.SmoothShading && 3 == j.vertexNormalsLength ? (fa.r = R.r = Q.r = Aa.r, fa.g = R.g = Q.g = Aa.g, fa.b = R.b = Q.b = Aa.b, l(j.v1.positionWorld, j.vertexNormalsWorld[0], fa), l(j.v2.positionWorld, j.vertexNormalsWorld[1], R), l(j.v3.positionWorld, j.vertexNormalsWorld[2], Q), fa.r = g.r * fa.r + h.r, fa.g = g.g * fa.g + h.g, fa.b = g.b * fa.b + h.b, R.r = g.r * R.r + h.r, R.g = g.g * R.g + h.g, R.b = g.b * R.b + h.b, Q.r = g.r * Q.r + h.r, Q.g = g.g * Q.g + h.g, Q.b = g.b * Q.b + h.b, ha.r = 0.5 * (R.r + Q.r), 
            ha.g = 0.5 * (R.g + Q.g), ha.b = 0.5 * (R.b + Q.b), va = ya(fa, R, Q, ha), w(J, M, K, H, S, X, 0, 0, 1, 0, 0, 1, va)) : (ca.r = Aa.r, ca.g = Aa.g, ca.b = Aa.b, l(j.centroidWorld, j.normalWorld, ca), ca.r = g.r * ca.r + h.r, ca.g = g.g * ca.g + h.g, ca.b = g.b * ca.b + h.b, !0 === o.wireframe ? s(ca, o.wireframeLinewidth, o.wireframeLinecap, o.wireframeLinejoin) : t(ca))) : !0 === o.wireframe ? s(o.color, o.wireframeLinewidth, o.wireframeLinecap, o.wireframeLinejoin) : t(o.color) : o instanceof THREE.MeshBasicMaterial || o instanceof THREE.MeshLambertMaterial || o instanceof THREE.MeshPhongMaterial ? 
            null !== o.map ? o.map.mapping instanceof THREE.UVMapping && (Qa = j.uvs[0], u(J, M, K, H, S, X, Qa[g].u, Qa[g].v, Qa[h].u, Qa[h].v, Qa[i].u, Qa[i].v, o.map)) : null !== o.envMap ? o.envMap.mapping instanceof THREE.SphericalReflectionMapping && (a = k.matrixWorldInverse, Da.copy(j.vertexNormalsWorld[g]), ja = 0.5 * (Da.x * a.elements[0] + Da.y * a.elements[4] + Da.z * a.elements[8]) + 0.5, xa = 0.5 * (Da.x * a.elements[1] + Da.y * a.elements[5] + Da.z * a.elements[9]) + 0.5, Da.copy(j.vertexNormalsWorld[h]), Ia = 0.5 * (Da.x * a.elements[0] + Da.y * a.elements[4] + Da.z * a.elements[8]) + 
            0.5, cb = 0.5 * (Da.x * a.elements[1] + Da.y * a.elements[5] + Da.z * a.elements[9]) + 0.5, Da.copy(j.vertexNormalsWorld[i]), db = 0.5 * (Da.x * a.elements[0] + Da.y * a.elements[4] + Da.z * a.elements[8]) + 0.5, $a = 0.5 * (Da.x * a.elements[1] + Da.y * a.elements[5] + Da.z * a.elements[9]) + 0.5, u(J, M, K, H, S, X, ja, xa, Ia, cb, db, $a, o.envMap)) : !0 === o.wireframe ? s(o.color, o.wireframeLinewidth, o.wireframeLinecap, o.wireframeLinejoin) : t(o.color) : o instanceof THREE.MeshDepthMaterial ? (ea = k.near, wa = k.far, fa.r = fa.g = fa.b = 1 - ec(a.positionScreen.z, ea, wa), R.r = R.g = R.b = 
            1 - ec(d.positionScreen.z, ea, wa), Q.r = Q.g = Q.b = 1 - ec(e.positionScreen.z, ea, wa), ha.r = 0.5 * (R.r + Q.r), ha.g = 0.5 * (R.g + Q.g), ha.b = 0.5 * (R.b + Q.b), va = ya(fa, R, Q, ha), w(J, M, K, H, S, X, 0, 0, 1, 0, 0, 1, va)) : o instanceof THREE.MeshNormalMaterial && (ca.r = jc(j.normalWorld.x), ca.g = jc(j.normalWorld.y), ca.b = jc(j.normalWorld.z), !0 === o.wireframe ? s(ca, o.wireframeLinewidth, o.wireframeLinecap, o.wireframeLinejoin) : t(ca))
        }
        function m(a, b, c, d, e, f) {
            o.beginPath();
            o.moveTo(a, b);
            o.lineTo(c, d);
            o.lineTo(e, f);
            o.closePath()
        }
        function r(a, b, c, d, e, f, 
        g, h) {
            o.beginPath();
            o.moveTo(a, b);
            o.lineTo(c, d);
            o.lineTo(e, f);
            o.lineTo(g, h);
            o.closePath()
        }
        function s(a, b, c, e) {
            v !== b && (v = o.lineWidth = b);
            A !== c && (A = o.lineCap = c);
            E !== e && (E = o.lineJoin = e);
            d(a.getContextStyle());
            o.stroke();
            Ka.inflate(2 * b)
        }
        function t(a) {
            e(a.getContextStyle());
            o.fill()
        }
        function u(a, b, c, d, f, g, h, i, k, j, l, n, m) {
            if (!(m instanceof THREE.DataTexture || void 0 === m.image || 0 == m.image.width)) {
                if (!0 === m.needsUpdate) {
                    var ya = m.wrapS == THREE.RepeatWrapping, p = m.wrapT == THREE.RepeatWrapping;
                    Ba[m.id] = o.createPattern(m.image, 
                    !0 === ya && !0 === p ? "repeat" : !0 === ya && !1 === p ? "repeat-x" : !1 === ya && !0 === p ? "repeat-y" : "no-repeat");
                    m.needsUpdate = !1
                }
                void 0 === Ba[m.id] ? e("rgba(0,0,0,1)") : e(Ba[m.id]);
                var ya = m.offset.x / m.repeat.x, p = m.offset.y / m.repeat.y, q = m.image.width * m.repeat.x, rb = m.image.height * m.repeat.y, h = (h + ya) * q, i = (1 - i + p) * rb, c = c - a, d = d - b, f = f - a, g = g - b, k = (k + ya) * q - h, j = (1 - j + p) * rb - i, l = (l + ya) * q - h, n = (1 - n + p) * rb - i, ya = k * n - l * j;
                0 === ya ? (void 0 === ma[m.id] && (b = document.createElement("canvas"), b.width = m.image.width, b.height = m.image.height, b = b.getContext("2d"), 
                b.drawImage(m.image, 0, 0), ma[m.id] = b.getImageData(0, 0, m.image.width, m.image.height).data), b = ma[m.id], h = 4 * (Math.floor(h) + Math.floor(i) * m.image.width), ca.setRGB(b[h] / 255, b[h + 1] / 255, b[h + 2] / 255), t(ca)) : (ya = 1 / ya, m = (n * c - j * f) * ya, j = (n * d - j * g) * ya, c = (k * f - l * c) * ya, d = (k * g - l * d) * ya, a = a - m * h - c * i, h = b - j * h - d * i, o.save(), o.transform(m, j, c, d, a, h), o.fill(), o.restore())
            }
        }
        function w(a, b, c, d, e, f, g, h, i, k, j, l, m) {
            var n, ya;
            n = m.width - 1;
            ya = m.height - 1;
            g *= n;
            h *= ya;
            c -= a;
            d -= b;
            e -= a;
            f -= b;
            i = i * n - g;
            k = k * ya - h;
            j = j * n - g;
            l = l * ya - h;
            ya = 1 / (i * l - j * k);
            n = 
            (l * c - k * e) * ya;
            k = (l * d - k * f) * ya;
            c = (i * e - j * c) * ya;
            d = (i * f - j * d) * ya;
            a = a - n * g - c * h;
            b = b - k * g - d * h;
            o.save();
            o.transform(n, k, c, d, a, b);
            o.clip();
            o.drawImage(m, 0, 0);
            o.restore()
        }
        function ya(a, b, c, d) {
            Ra[0] = 255 * a.r | 0;
            Ra[1] = 255 * a.g | 0;
            Ra[2] = 255 * a.b | 0;
            Ra[4] = 255 * b.r | 0;
            Ra[5] = 255 * b.g | 0;
            Ra[6] = 255 * b.b | 0;
            Ra[8] = 255 * c.r | 0;
            Ra[9] = 255 * c.g | 0;
            Ra[10] = 255 * c.b | 0;
            Ra[12] = 255 * d.r | 0;
            Ra[13] = 255 * d.g | 0;
            Ra[14] = 255 * d.b | 0;
            bb.putImageData(Nb, 0, 0);
            mb.drawImage(lb, 0, 0);
            return Na
        }
        function ec(a, b, c) {
            a = (a - b) / (c - b);
            return a * a * (3 - 2 * a)
        }
        function jc(a) {
            a = 0.5 * 
            (a + 1);
            return 0 > a ? 0 : 1 < a ? 1 : a
        }
        function rb(a, b) {
            var c = b.x - a.x, d = b.y - a.y, e = c * c + d * d;
            0 !== e && (e = 1 / Math.sqrt(e), c *= e, d *= e, b.x += c, b.y += d, a.x -= c, a.y -= d)
        }
        if (!1 === k instanceof THREE.Camera)
            console.error("THREE.CanvasRenderer.render: camera is not an instance of THREE.Camera.");
        else {
            var Ub, Ec, B, $;
            !0 === this.autoClear ? this.clear() : o.setTransform(1, 0, 0, -1, q, p);
            f.info.render.vertices = 0;
            f.info.render.faces = 0;
            g = j.projectScene(a, k, this.sortObjects, this.sortElements);
            h = g.elements;
            i = g.lights;
            vb = 0 < i.length;
            if (!0 === vb) {
                Aa.setRGB(0, 
                0, 0);
                ib.setRGB(0, 0, 0);
                eb.setRGB(0, 0, 0);
                Ub = 0;
                for (Ec = i.length; Ub < Ec; Ub++) {
                    $ = i[Ub];
                    var da = $.color;
                    $ instanceof THREE.AmbientLight ? (Aa.r += da.r, Aa.g += da.g, Aa.b += da.b) : $ instanceof THREE.DirectionalLight ? (ib.r += da.r, ib.g += da.g, ib.b += da.b) : $ instanceof THREE.PointLight && (eb.r += da.r, eb.g += da.g, eb.b += da.b)
                }
            }
            Ub = 0;
            for (Ec = h.length; Ub < Ec; Ub++)
                if (B = h[Ub], $ = B.material, !(void 0 === $ || !1 === $.visible)) {
                    Ka.empty();
                    if (B instanceof THREE.RenderableParticle) {
                        x = B;
                        x.x *= q;
                        x.y *= p;
                        var da = x, ra = B;
                        b($.opacity);
                        c($.blending);
                        var Ja = 
                        void 0, sb = void 0, kb = void 0, nb = void 0, Vb = void 0, Tc = B = void 0;
                        $ instanceof THREE.ParticleBasicMaterial ? null === $.map ? (kb = ra.object.scale.x, nb = ra.object.scale.y, kb = kb * ra.scale.x * q, nb = nb * ra.scale.y * p, Ka.set(da.x - kb, da.y - nb, da.x + kb, da.y + nb), !1 !== Ca.intersects(Ka) && (e($.color.getContextStyle()), o.save(), o.translate(da.x, da.y), o.rotate(-ra.rotation), o.scale(kb, nb), o.fillRect(-1, -1, 2, 2), o.restore())) : (Vb = $.map.image, B = Vb.width >> 1, Tc = Vb.height >> 1, kb = ra.scale.x * q, nb = ra.scale.y * p, Ja = kb * B, sb = nb * Tc, Ka.set(da.x - 
                        Ja, da.y - sb, da.x + Ja, da.y + sb), !1 !== Ca.intersects(Ka) && (o.save(), o.translate(da.x, da.y), o.rotate(-ra.rotation), o.scale(kb, -nb), o.translate(-B, -Tc), o.drawImage(Vb, 0, 0), o.restore())) : $ instanceof THREE.ParticleCanvasMaterial && (Ja = ra.scale.x * q, sb = ra.scale.y * p, Ka.set(da.x - Ja, da.y - sb, da.x + Ja, da.y + sb), !1 !== Ca.intersects(Ka) && (d($.color.getContextStyle()), e($.color.getContextStyle()), o.save(), o.translate(da.x, da.y), o.rotate(-ra.rotation), o.scale(Ja, sb), $.program(o), o.restore()))
                    } else if (B instanceof THREE.RenderableLine) {
                        if (x = 
                        B.v1, L = B.v2, x.positionScreen.x *= q, x.positionScreen.y *= p, L.positionScreen.x *= q, L.positionScreen.y *= p, Ka.addPoint(x.positionScreen.x, x.positionScreen.y), Ka.addPoint(L.positionScreen.x, L.positionScreen.y), !0 === Ca.intersects(Ka) && (da = x, ra = L, b($.opacity), c($.blending), o.beginPath(), o.moveTo(da.positionScreen.x, da.positionScreen.y), o.lineTo(ra.positionScreen.x, ra.positionScreen.y), $ instanceof THREE.LineBasicMaterial))
                            da = $.linewidth, v !== da && (v = o.lineWidth = da), da = $.linecap, A !== da && (A = o.lineCap = da), da = $.linejoin, 
                            E !== da && (E = o.lineJoin = da), d($.color.getContextStyle()), o.stroke(), Ka.inflate(2 * $.linewidth)
                    } else if (B instanceof THREE.RenderableFace3)
                        x = B.v1, L = B.v2, D = B.v3, x.positionScreen.x *= q, x.positionScreen.y *= p, L.positionScreen.x *= q, L.positionScreen.y *= p, D.positionScreen.x *= q, D.positionScreen.y *= p, !0 === $.overdraw && (rb(x.positionScreen, L.positionScreen), rb(L.positionScreen, D.positionScreen), rb(D.positionScreen, x.positionScreen)), Ka.add3Points(x.positionScreen.x, x.positionScreen.y, L.positionScreen.x, L.positionScreen.y, 
                        D.positionScreen.x, D.positionScreen.y), !0 === Ca.intersects(Ka) && n(x, L, D, 0, 1, 2, B, $, a);
                    else if (B instanceof THREE.RenderableFace4 && (x = B.v1, L = B.v2, D = B.v3, G = B.v4, x.positionScreen.x *= q, x.positionScreen.y *= p, L.positionScreen.x *= q, L.positionScreen.y *= p, D.positionScreen.x *= q, D.positionScreen.y *= p, G.positionScreen.x *= q, G.positionScreen.y *= p, C.positionScreen.copy(L.positionScreen), N.positionScreen.copy(G.positionScreen), !0 === $.overdraw && (rb(x.positionScreen, L.positionScreen), rb(L.positionScreen, G.positionScreen), 
                    rb(G.positionScreen, x.positionScreen), rb(D.positionScreen, C.positionScreen), rb(D.positionScreen, N.positionScreen)), Ka.addPoint(x.positionScreen.x, x.positionScreen.y), Ka.addPoint(L.positionScreen.x, L.positionScreen.y), Ka.addPoint(D.positionScreen.x, D.positionScreen.y), Ka.addPoint(G.positionScreen.x, G.positionScreen.y), !0 === Ca.intersects(Ka)))
                        ra = x, Ja = L, sb = D, kb = G, nb = C, Vb = N, da = B, B = a, f.info.render.vertices += 4, f.info.render.faces++, b($.opacity), c($.blending), void 0 !== $.map && null !== $.map || void 0 !== $.envMap && 
                        null !== $.envMap ? (n(ra, Ja, kb, 0, 1, 3, da, $, B), n(nb, sb, Vb, 1, 2, 3, da, $, B)) : (J = ra.positionScreen.x, M = ra.positionScreen.y, K = Ja.positionScreen.x, H = Ja.positionScreen.y, S = sb.positionScreen.x, X = sb.positionScreen.y, Z = kb.positionScreen.x, I = kb.positionScreen.y, Y = nb.positionScreen.x, O = nb.positionScreen.y, na = Vb.positionScreen.x, qa = Vb.positionScreen.y, $ instanceof THREE.MeshLambertMaterial || $ instanceof THREE.MeshPhongMaterial ? !0 === vb ? (ra = $.color, Ja = $.emissive, !1 === $.wireframe && $.shading == THREE.SmoothShading && 4 == da.vertexNormalsLength ? 
                        (fa.r = R.r = Q.r = ha.r = Aa.r, fa.g = R.g = Q.g = ha.g = Aa.g, fa.b = R.b = Q.b = ha.b = Aa.b, l(da.v1.positionWorld, da.vertexNormalsWorld[0], fa), l(da.v2.positionWorld, da.vertexNormalsWorld[1], R), l(da.v4.positionWorld, da.vertexNormalsWorld[3], Q), l(da.v3.positionWorld, da.vertexNormalsWorld[2], ha), fa.r = ra.r * fa.r + Ja.r, fa.g = ra.g * fa.g + Ja.g, fa.b = ra.b * fa.b + Ja.b, R.r = ra.r * R.r + Ja.r, R.g = ra.g * R.g + Ja.g, R.b = ra.b * R.b + Ja.b, Q.r = ra.r * Q.r + Ja.r, Q.g = ra.g * Q.g + Ja.g, Q.b = ra.b * Q.b + Ja.b, ha.r = ra.r * ha.r + Ja.r, ha.g = ra.g * ha.g + Ja.g, ha.b = ra.b * ha.b + Ja.b, va = 
                        ya(fa, R, Q, ha), m(J, M, K, H, Z, I), w(J, M, K, H, Z, I, 0, 0, 1, 0, 0, 1, va), m(Y, O, S, X, na, qa), w(Y, O, S, X, na, qa, 1, 0, 1, 1, 0, 1, va)) : (ca.r = Aa.r, ca.g = Aa.g, ca.b = Aa.b, l(da.centroidWorld, da.normalWorld, ca), ca.r = ra.r * ca.r + Ja.r, ca.g = ra.g * ca.g + Ja.g, ca.b = ra.b * ca.b + Ja.b, r(J, M, K, H, S, X, Z, I), !0 === $.wireframe ? s(ca, $.wireframeLinewidth, $.wireframeLinecap, $.wireframeLinejoin) : t(ca))) : (r(J, M, K, H, S, X, Z, I), !0 === $.wireframe ? s($.color, $.wireframeLinewidth, $.wireframeLinecap, $.wireframeLinejoin) : t($.color)) : $ instanceof THREE.MeshBasicMaterial ? 
                        (r(J, M, K, H, S, X, Z, I), !0 === $.wireframe ? s($.color, $.wireframeLinewidth, $.wireframeLinecap, $.wireframeLinejoin) : t($.color)) : $ instanceof THREE.MeshNormalMaterial ? (ca.r = jc(da.normalWorld.x), ca.g = jc(da.normalWorld.y), ca.b = jc(da.normalWorld.z), r(J, M, K, H, S, X, Z, I), !0 === $.wireframe ? s(ca, $.wireframeLinewidth, $.wireframeLinecap, $.wireframeLinejoin) : t(ca)) : $ instanceof THREE.MeshDepthMaterial && (ea = k.near, wa = k.far, fa.r = fa.g = fa.b = 1 - ec(ra.positionScreen.z, ea, wa), R.r = R.g = R.b = 1 - ec(Ja.positionScreen.z, ea, wa), Q.r = Q.g = 
                        Q.b = 1 - ec(kb.positionScreen.z, ea, wa), ha.r = ha.g = ha.b = 1 - ec(sb.positionScreen.z, ea, wa), va = ya(fa, R, Q, ha), m(J, M, K, H, Z, I), w(J, M, K, H, Z, I, 0, 0, 1, 0, 0, 1, va), m(Y, O, S, X, na, qa), w(Y, O, S, X, na, qa, 1, 0, 1, 1, 0, 1, va)));
                    Pa.addRectangle(Ka)
                }
            o.setTransform(1, 0, 0, 1, 0, 0)
        }
    }
};
THREE.ShaderChunk = {fog_pars_fragment: "#ifdef USE_FOG\nuniform vec3 fogColor;\n#ifdef FOG_EXP2\nuniform float fogDensity;\n#else\nuniform float fogNear;\nuniform float fogFar;\n#endif\n#endif",fog_fragment: "#ifdef USE_FOG\nfloat depth = gl_FragCoord.z / gl_FragCoord.w;\n#ifdef FOG_EXP2\nconst float LOG2 = 1.442695;\nfloat fogFactor = exp2( - fogDensity * fogDensity * depth * depth * LOG2 );\nfogFactor = 1.0 - clamp( fogFactor, 0.0, 1.0 );\n#else\nfloat fogFactor = smoothstep( fogNear, fogFar, depth );\n#endif\ngl_FragColor = mix( gl_FragColor, vec4( fogColor, gl_FragColor.w ), fogFactor );\n#endif",envmap_pars_fragment: "#ifdef USE_ENVMAP\nuniform float reflectivity;\nuniform samplerCube envMap;\nuniform float flipEnvMap;\nuniform int combine;\n#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP )\nuniform bool useRefract;\nuniform float refractionRatio;\n#else\nvarying vec3 vReflect;\n#endif\n#endif",
    envmap_fragment: "#ifdef USE_ENVMAP\nvec3 reflectVec;\n#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP )\nvec3 cameraToVertex = normalize( vWorldPosition - cameraPosition );\nif ( useRefract ) {\nreflectVec = refract( cameraToVertex, normal, refractionRatio );\n} else { \nreflectVec = reflect( cameraToVertex, normal );\n}\n#else\nreflectVec = vReflect;\n#endif\n#ifdef DOUBLE_SIDED\nfloat flipNormal = ( -1.0 + 2.0 * float( gl_FrontFacing ) );\nvec4 cubeColor = textureCube( envMap, flipNormal * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );\n#else\nvec4 cubeColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );\n#endif\n#ifdef GAMMA_INPUT\ncubeColor.xyz *= cubeColor.xyz;\n#endif\nif ( combine == 1 ) {\ngl_FragColor.xyz = mix( gl_FragColor.xyz, cubeColor.xyz, specularStrength * reflectivity );\n} else {\ngl_FragColor.xyz = mix( gl_FragColor.xyz, gl_FragColor.xyz * cubeColor.xyz, specularStrength * reflectivity );\n}\n#endif",
    envmap_pars_vertex: "#if defined( USE_ENVMAP ) && ! defined( USE_BUMPMAP ) && ! defined( USE_NORMALMAP )\nvarying vec3 vReflect;\nuniform float refractionRatio;\nuniform bool useRefract;\n#endif",worldpos_vertex: "#if defined( USE_ENVMAP ) || defined( PHONG ) || defined( LAMBERT ) || defined ( USE_SHADOWMAP )\n#ifdef USE_SKINNING\nvec4 mPosition = modelMatrix * skinned;\n#endif\n#if defined( USE_MORPHTARGETS ) && ! defined( USE_SKINNING )\nvec4 mPosition = modelMatrix * vec4( morphed, 1.0 );\n#endif\n#if ! defined( USE_MORPHTARGETS ) && ! defined( USE_SKINNING )\nvec4 mPosition = modelMatrix * vec4( position, 1.0 );\n#endif\n#endif",
    envmap_vertex: "#if defined( USE_ENVMAP ) && ! defined( USE_BUMPMAP ) && ! defined( USE_NORMALMAP )\nvec3 nWorld = mat3( modelMatrix[ 0 ].xyz, modelMatrix[ 1 ].xyz, modelMatrix[ 2 ].xyz ) * objectNormal;\nif ( useRefract ) {\nvReflect = refract( normalize( mPosition.xyz - cameraPosition ), normalize( nWorld.xyz ), refractionRatio );\n} else {\nvReflect = reflect( normalize( mPosition.xyz - cameraPosition ), normalize( nWorld.xyz ) );\n}\n#endif",map_particle_pars_fragment: "#ifdef USE_MAP\nuniform sampler2D map;\n#endif",
    map_particle_fragment: "#ifdef USE_MAP\ngl_FragColor = gl_FragColor * texture2D( map, vec2( gl_PointCoord.x, 1.0 - gl_PointCoord.y ) );\n#endif",map_pars_vertex: "#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP )\nvarying vec2 vUv;\nuniform vec4 offsetRepeat;\n#endif",map_pars_fragment: "#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP )\nvarying vec2 vUv;\n#endif\n#ifdef USE_MAP\nuniform sampler2D map;\n#endif",
    map_vertex: "#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP )\nvUv = uv * offsetRepeat.zw + offsetRepeat.xy;\n#endif",map_fragment: "#ifdef USE_MAP\n#ifdef GAMMA_INPUT\nvec4 texelColor = texture2D( map, vUv );\ntexelColor.xyz *= texelColor.xyz;\ngl_FragColor = gl_FragColor * texelColor;\n#else\ngl_FragColor = gl_FragColor * texture2D( map, vUv );\n#endif\n#endif",lightmap_pars_fragment: "#ifdef USE_LIGHTMAP\nvarying vec2 vUv2;\nuniform sampler2D lightMap;\n#endif",
    lightmap_pars_vertex: "#ifdef USE_LIGHTMAP\nvarying vec2 vUv2;\n#endif",lightmap_fragment: "#ifdef USE_LIGHTMAP\ngl_FragColor = gl_FragColor * texture2D( lightMap, vUv2 );\n#endif",lightmap_vertex: "#ifdef USE_LIGHTMAP\nvUv2 = uv2;\n#endif",bumpmap_pars_fragment: "#ifdef USE_BUMPMAP\nuniform sampler2D bumpMap;\nuniform float bumpScale;\nvec2 dHdxy_fwd() {\nvec2 dSTdx = dFdx( vUv );\nvec2 dSTdy = dFdy( vUv );\nfloat Hll = bumpScale * texture2D( bumpMap, vUv ).x;\nfloat dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;\nfloat dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;\nreturn vec2( dBx, dBy );\n}\nvec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy ) {\nvec3 vSigmaX = dFdx( surf_pos );\nvec3 vSigmaY = dFdy( surf_pos );\nvec3 vN = surf_norm;\nvec3 R1 = cross( vSigmaY, vN );\nvec3 R2 = cross( vN, vSigmaX );\nfloat fDet = dot( vSigmaX, R1 );\nvec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );\nreturn normalize( abs( fDet ) * surf_norm - vGrad );\n}\n#endif",
    normalmap_pars_fragment: "#ifdef USE_NORMALMAP\nuniform sampler2D normalMap;\nuniform vec2 normalScale;\nvec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm ) {\nvec3 q0 = dFdx( eye_pos.xyz );\nvec3 q1 = dFdy( eye_pos.xyz );\nvec2 st0 = dFdx( vUv.st );\nvec2 st1 = dFdy( vUv.st );\nvec3 S = normalize(  q0 * st1.t - q1 * st0.t );\nvec3 T = normalize( -q0 * st1.s + q1 * st0.s );\nvec3 N = normalize( surf_norm );\nvec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\nmapN.xy = normalScale * mapN.xy;\nmat3 tsn = mat3( S, T, N );\nreturn normalize( tsn * mapN );\n}\n#endif",
    specularmap_pars_fragment: "#ifdef USE_SPECULARMAP\nuniform sampler2D specularMap;\n#endif",specularmap_fragment: "float specularStrength;\n#ifdef USE_SPECULARMAP\nvec4 texelSpecular = texture2D( specularMap, vUv );\nspecularStrength = texelSpecular.r;\n#else\nspecularStrength = 1.0;\n#endif",lights_lambert_pars_vertex: "uniform vec3 ambient;\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform vec3 ambientLightColor;\n#if MAX_DIR_LIGHTS > 0\nuniform vec3 directionalLightColor[ MAX_DIR_LIGHTS ];\nuniform vec3 directionalLightDirection[ MAX_DIR_LIGHTS ];\n#endif\n#if MAX_HEMI_LIGHTS > 0\nuniform vec3 hemisphereLightSkyColor[ MAX_HEMI_LIGHTS ];\nuniform vec3 hemisphereLightGroundColor[ MAX_HEMI_LIGHTS ];\nuniform vec3 hemisphereLightPosition[ MAX_HEMI_LIGHTS ];\n#endif\n#if MAX_POINT_LIGHTS > 0\nuniform vec3 pointLightColor[ MAX_POINT_LIGHTS ];\nuniform vec3 pointLightPosition[ MAX_POINT_LIGHTS ];\nuniform float pointLightDistance[ MAX_POINT_LIGHTS ];\n#endif\n#if MAX_SPOT_LIGHTS > 0\nuniform vec3 spotLightColor[ MAX_SPOT_LIGHTS ];\nuniform vec3 spotLightPosition[ MAX_SPOT_LIGHTS ];\nuniform vec3 spotLightDirection[ MAX_SPOT_LIGHTS ];\nuniform float spotLightDistance[ MAX_SPOT_LIGHTS ];\nuniform float spotLightAngle[ MAX_SPOT_LIGHTS ];\nuniform float spotLightExponent[ MAX_SPOT_LIGHTS ];\n#endif\n#ifdef WRAP_AROUND\nuniform vec3 wrapRGB;\n#endif",
    lights_lambert_vertex: "vLightFront = vec3( 0.0 );\n#ifdef DOUBLE_SIDED\nvLightBack = vec3( 0.0 );\n#endif\ntransformedNormal = normalize( transformedNormal );\n#if MAX_DIR_LIGHTS > 0\nfor( int i = 0; i < MAX_DIR_LIGHTS; i ++ ) {\nvec4 lDirection = viewMatrix * vec4( directionalLightDirection[ i ], 0.0 );\nvec3 dirVector = normalize( lDirection.xyz );\nfloat dotProduct = dot( transformedNormal, dirVector );\nvec3 directionalLightWeighting = vec3( max( dotProduct, 0.0 ) );\n#ifdef DOUBLE_SIDED\nvec3 directionalLightWeightingBack = vec3( max( -dotProduct, 0.0 ) );\n#ifdef WRAP_AROUND\nvec3 directionalLightWeightingHalfBack = vec3( max( -0.5 * dotProduct + 0.5, 0.0 ) );\n#endif\n#endif\n#ifdef WRAP_AROUND\nvec3 directionalLightWeightingHalf = vec3( max( 0.5 * dotProduct + 0.5, 0.0 ) );\ndirectionalLightWeighting = mix( directionalLightWeighting, directionalLightWeightingHalf, wrapRGB );\n#ifdef DOUBLE_SIDED\ndirectionalLightWeightingBack = mix( directionalLightWeightingBack, directionalLightWeightingHalfBack, wrapRGB );\n#endif\n#endif\nvLightFront += directionalLightColor[ i ] * directionalLightWeighting;\n#ifdef DOUBLE_SIDED\nvLightBack += directionalLightColor[ i ] * directionalLightWeightingBack;\n#endif\n}\n#endif\n#if MAX_POINT_LIGHTS > 0\nfor( int i = 0; i < MAX_POINT_LIGHTS; i ++ ) {\nvec4 lPosition = viewMatrix * vec4( pointLightPosition[ i ], 1.0 );\nvec3 lVector = lPosition.xyz - mvPosition.xyz;\nfloat lDistance = 1.0;\nif ( pointLightDistance[ i ] > 0.0 )\nlDistance = 1.0 - min( ( length( lVector ) / pointLightDistance[ i ] ), 1.0 );\nlVector = normalize( lVector );\nfloat dotProduct = dot( transformedNormal, lVector );\nvec3 pointLightWeighting = vec3( max( dotProduct, 0.0 ) );\n#ifdef DOUBLE_SIDED\nvec3 pointLightWeightingBack = vec3( max( -dotProduct, 0.0 ) );\n#ifdef WRAP_AROUND\nvec3 pointLightWeightingHalfBack = vec3( max( -0.5 * dotProduct + 0.5, 0.0 ) );\n#endif\n#endif\n#ifdef WRAP_AROUND\nvec3 pointLightWeightingHalf = vec3( max( 0.5 * dotProduct + 0.5, 0.0 ) );\npointLightWeighting = mix( pointLightWeighting, pointLightWeightingHalf, wrapRGB );\n#ifdef DOUBLE_SIDED\npointLightWeightingBack = mix( pointLightWeightingBack, pointLightWeightingHalfBack, wrapRGB );\n#endif\n#endif\nvLightFront += pointLightColor[ i ] * pointLightWeighting * lDistance;\n#ifdef DOUBLE_SIDED\nvLightBack += pointLightColor[ i ] * pointLightWeightingBack * lDistance;\n#endif\n}\n#endif\n#if MAX_SPOT_LIGHTS > 0\nfor( int i = 0; i < MAX_SPOT_LIGHTS; i ++ ) {\nvec4 lPosition = viewMatrix * vec4( spotLightPosition[ i ], 1.0 );\nvec3 lVector = lPosition.xyz - mvPosition.xyz;\nlVector = normalize( lVector );\nfloat spotEffect = dot( spotLightDirection[ i ], normalize( spotLightPosition[ i ] - mPosition.xyz ) );\nif ( spotEffect > spotLightAngle[ i ] ) {\nspotEffect = pow( spotEffect, spotLightExponent[ i ] );\nfloat lDistance = 1.0;\nif ( spotLightDistance[ i ] > 0.0 )\nlDistance = 1.0 - min( ( length( lVector ) / spotLightDistance[ i ] ), 1.0 );\nfloat dotProduct = dot( transformedNormal, lVector );\nvec3 spotLightWeighting = vec3( max( dotProduct, 0.0 ) );\n#ifdef DOUBLE_SIDED\nvec3 spotLightWeightingBack = vec3( max( -dotProduct, 0.0 ) );\n#ifdef WRAP_AROUND\nvec3 spotLightWeightingHalfBack = vec3( max( -0.5 * dotProduct + 0.5, 0.0 ) );\n#endif\n#endif\n#ifdef WRAP_AROUND\nvec3 spotLightWeightingHalf = vec3( max( 0.5 * dotProduct + 0.5, 0.0 ) );\nspotLightWeighting = mix( spotLightWeighting, spotLightWeightingHalf, wrapRGB );\n#ifdef DOUBLE_SIDED\nspotLightWeightingBack = mix( spotLightWeightingBack, spotLightWeightingHalfBack, wrapRGB );\n#endif\n#endif\nvLightFront += spotLightColor[ i ] * spotLightWeighting * lDistance * spotEffect;\n#ifdef DOUBLE_SIDED\nvLightBack += spotLightColor[ i ] * spotLightWeightingBack * lDistance * spotEffect;\n#endif\n}\n}\n#endif\n#if MAX_HEMI_LIGHTS > 0\nfor( int i = 0; i < MAX_HEMI_LIGHTS; i ++ ) {\nvec4 lPosition = viewMatrix * vec4( hemisphereLightPosition[ i ], 1.0 );\nvec3 lVector = lPosition.xyz - mvPosition.xyz;\nlVector = normalize( lVector );\nfloat dotProduct = dot( transformedNormal, lVector );\nfloat hemiDiffuseWeight = 0.5 * dotProduct + 0.5;\nfloat hemiDiffuseWeightBack = -0.5 * dotProduct + 0.5;\nvLightFront += mix( hemisphereLightGroundColor[ i ], hemisphereLightSkyColor[ i ], hemiDiffuseWeight );\n#ifdef DOUBLE_SIDED\nvLightBack += mix( hemisphereLightGroundColor[ i ], hemisphereLightSkyColor[ i ], hemiDiffuseWeightBack );\n#endif\n}\n#endif\nvLightFront = vLightFront * diffuse + ambient * ambientLightColor + emissive;\n#ifdef DOUBLE_SIDED\nvLightBack = vLightBack * diffuse + ambient * ambientLightColor + emissive;\n#endif",
    lights_phong_pars_vertex: "#ifndef PHONG_PER_PIXEL\n#if MAX_POINT_LIGHTS > 0\nuniform vec3 pointLightPosition[ MAX_POINT_LIGHTS ];\nuniform float pointLightDistance[ MAX_POINT_LIGHTS ];\nvarying vec4 vPointLight[ MAX_POINT_LIGHTS ];\n#endif\n#if MAX_SPOT_LIGHTS > 0\nuniform vec3 spotLightPosition[ MAX_SPOT_LIGHTS ];\nuniform float spotLightDistance[ MAX_SPOT_LIGHTS ];\nvarying vec4 vSpotLight[ MAX_SPOT_LIGHTS ];\n#endif\n#endif\n#if MAX_SPOT_LIGHTS > 0 || defined( USE_BUMPMAP )\nvarying vec3 vWorldPosition;\n#endif",
    lights_phong_vertex: "#ifndef PHONG_PER_PIXEL\n#if MAX_POINT_LIGHTS > 0\nfor( int i = 0; i < MAX_POINT_LIGHTS; i ++ ) {\nvec4 lPosition = viewMatrix * vec4( pointLightPosition[ i ], 1.0 );\nvec3 lVector = lPosition.xyz - mvPosition.xyz;\nfloat lDistance = 1.0;\nif ( pointLightDistance[ i ] > 0.0 )\nlDistance = 1.0 - min( ( length( lVector ) / pointLightDistance[ i ] ), 1.0 );\nvPointLight[ i ] = vec4( lVector, lDistance );\n}\n#endif\n#if MAX_SPOT_LIGHTS > 0\nfor( int i = 0; i < MAX_SPOT_LIGHTS; i ++ ) {\nvec4 lPosition = viewMatrix * vec4( spotLightPosition[ i ], 1.0 );\nvec3 lVector = lPosition.xyz - mvPosition.xyz;\nfloat lDistance = 1.0;\nif ( spotLightDistance[ i ] > 0.0 )\nlDistance = 1.0 - min( ( length( lVector ) / spotLightDistance[ i ] ), 1.0 );\nvSpotLight[ i ] = vec4( lVector, lDistance );\n}\n#endif\n#endif\n#if MAX_SPOT_LIGHTS > 0 || defined( USE_BUMPMAP )\nvWorldPosition = mPosition.xyz;\n#endif",
    lights_phong_pars_fragment: "uniform vec3 ambientLightColor;\n#if MAX_DIR_LIGHTS > 0\nuniform vec3 directionalLightColor[ MAX_DIR_LIGHTS ];\nuniform vec3 directionalLightDirection[ MAX_DIR_LIGHTS ];\n#endif\n#if MAX_HEMI_LIGHTS > 0\nuniform vec3 hemisphereLightSkyColor[ MAX_HEMI_LIGHTS ];\nuniform vec3 hemisphereLightGroundColor[ MAX_HEMI_LIGHTS ];\nuniform vec3 hemisphereLightPosition[ MAX_HEMI_LIGHTS ];\n#endif\n#if MAX_POINT_LIGHTS > 0\nuniform vec3 pointLightColor[ MAX_POINT_LIGHTS ];\n#ifdef PHONG_PER_PIXEL\nuniform vec3 pointLightPosition[ MAX_POINT_LIGHTS ];\nuniform float pointLightDistance[ MAX_POINT_LIGHTS ];\n#else\nvarying vec4 vPointLight[ MAX_POINT_LIGHTS ];\n#endif\n#endif\n#if MAX_SPOT_LIGHTS > 0\nuniform vec3 spotLightColor[ MAX_SPOT_LIGHTS ];\nuniform vec3 spotLightPosition[ MAX_SPOT_LIGHTS ];\nuniform vec3 spotLightDirection[ MAX_SPOT_LIGHTS ];\nuniform float spotLightAngle[ MAX_SPOT_LIGHTS ];\nuniform float spotLightExponent[ MAX_SPOT_LIGHTS ];\n#ifdef PHONG_PER_PIXEL\nuniform float spotLightDistance[ MAX_SPOT_LIGHTS ];\n#else\nvarying vec4 vSpotLight[ MAX_SPOT_LIGHTS ];\n#endif\n#endif\n#if MAX_SPOT_LIGHTS > 0 || defined( USE_BUMPMAP )\nvarying vec3 vWorldPosition;\n#endif\n#ifdef WRAP_AROUND\nuniform vec3 wrapRGB;\n#endif\nvarying vec3 vViewPosition;\nvarying vec3 vNormal;",
    lights_phong_fragment: "vec3 normal = normalize( vNormal );\nvec3 viewPosition = normalize( vViewPosition );\n#ifdef DOUBLE_SIDED\nnormal = normal * ( -1.0 + 2.0 * float( gl_FrontFacing ) );\n#endif\n#ifdef USE_NORMALMAP\nnormal = perturbNormal2Arb( -viewPosition, normal );\n#elif defined( USE_BUMPMAP )\nnormal = perturbNormalArb( -vViewPosition, normal, dHdxy_fwd() );\n#endif\n#if MAX_POINT_LIGHTS > 0\nvec3 pointDiffuse  = vec3( 0.0 );\nvec3 pointSpecular = vec3( 0.0 );\nfor ( int i = 0; i < MAX_POINT_LIGHTS; i ++ ) {\n#ifdef PHONG_PER_PIXEL\nvec4 lPosition = viewMatrix * vec4( pointLightPosition[ i ], 1.0 );\nvec3 lVector = lPosition.xyz + vViewPosition.xyz;\nfloat lDistance = 1.0;\nif ( pointLightDistance[ i ] > 0.0 )\nlDistance = 1.0 - min( ( length( lVector ) / pointLightDistance[ i ] ), 1.0 );\nlVector = normalize( lVector );\n#else\nvec3 lVector = normalize( vPointLight[ i ].xyz );\nfloat lDistance = vPointLight[ i ].w;\n#endif\nfloat dotProduct = dot( normal, lVector );\n#ifdef WRAP_AROUND\nfloat pointDiffuseWeightFull = max( dotProduct, 0.0 );\nfloat pointDiffuseWeightHalf = max( 0.5 * dotProduct + 0.5, 0.0 );\nvec3 pointDiffuseWeight = mix( vec3 ( pointDiffuseWeightFull ), vec3( pointDiffuseWeightHalf ), wrapRGB );\n#else\nfloat pointDiffuseWeight = max( dotProduct, 0.0 );\n#endif\npointDiffuse  += diffuse * pointLightColor[ i ] * pointDiffuseWeight * lDistance;\nvec3 pointHalfVector = normalize( lVector + viewPosition );\nfloat pointDotNormalHalf = max( dot( normal, pointHalfVector ), 0.0 );\nfloat pointSpecularWeight = specularStrength * max( pow( pointDotNormalHalf, shininess ), 0.0 );\n#ifdef PHYSICALLY_BASED_SHADING\nfloat specularNormalization = ( shininess + 2.0001 ) / 8.0;\nvec3 schlick = specular + vec3( 1.0 - specular ) * pow( 1.0 - dot( lVector, pointHalfVector ), 5.0 );\npointSpecular += schlick * pointLightColor[ i ] * pointSpecularWeight * pointDiffuseWeight * lDistance * specularNormalization;\n#else\npointSpecular += specular * pointLightColor[ i ] * pointSpecularWeight * pointDiffuseWeight * lDistance;\n#endif\n}\n#endif\n#if MAX_SPOT_LIGHTS > 0\nvec3 spotDiffuse  = vec3( 0.0 );\nvec3 spotSpecular = vec3( 0.0 );\nfor ( int i = 0; i < MAX_SPOT_LIGHTS; i ++ ) {\n#ifdef PHONG_PER_PIXEL\nvec4 lPosition = viewMatrix * vec4( spotLightPosition[ i ], 1.0 );\nvec3 lVector = lPosition.xyz + vViewPosition.xyz;\nfloat lDistance = 1.0;\nif ( spotLightDistance[ i ] > 0.0 )\nlDistance = 1.0 - min( ( length( lVector ) / spotLightDistance[ i ] ), 1.0 );\nlVector = normalize( lVector );\n#else\nvec3 lVector = normalize( vSpotLight[ i ].xyz );\nfloat lDistance = vSpotLight[ i ].w;\n#endif\nfloat spotEffect = dot( spotLightDirection[ i ], normalize( spotLightPosition[ i ] - vWorldPosition ) );\nif ( spotEffect > spotLightAngle[ i ] ) {\nspotEffect = pow( spotEffect, spotLightExponent[ i ] );\nfloat dotProduct = dot( normal, lVector );\n#ifdef WRAP_AROUND\nfloat spotDiffuseWeightFull = max( dotProduct, 0.0 );\nfloat spotDiffuseWeightHalf = max( 0.5 * dotProduct + 0.5, 0.0 );\nvec3 spotDiffuseWeight = mix( vec3 ( spotDiffuseWeightFull ), vec3( spotDiffuseWeightHalf ), wrapRGB );\n#else\nfloat spotDiffuseWeight = max( dotProduct, 0.0 );\n#endif\nspotDiffuse += diffuse * spotLightColor[ i ] * spotDiffuseWeight * lDistance * spotEffect;\nvec3 spotHalfVector = normalize( lVector + viewPosition );\nfloat spotDotNormalHalf = max( dot( normal, spotHalfVector ), 0.0 );\nfloat spotSpecularWeight = specularStrength * max( pow( spotDotNormalHalf, shininess ), 0.0 );\n#ifdef PHYSICALLY_BASED_SHADING\nfloat specularNormalization = ( shininess + 2.0001 ) / 8.0;\nvec3 schlick = specular + vec3( 1.0 - specular ) * pow( 1.0 - dot( lVector, spotHalfVector ), 5.0 );\nspotSpecular += schlick * spotLightColor[ i ] * spotSpecularWeight * spotDiffuseWeight * lDistance * specularNormalization * spotEffect;\n#else\nspotSpecular += specular * spotLightColor[ i ] * spotSpecularWeight * spotDiffuseWeight * lDistance * spotEffect;\n#endif\n}\n}\n#endif\n#if MAX_DIR_LIGHTS > 0\nvec3 dirDiffuse  = vec3( 0.0 );\nvec3 dirSpecular = vec3( 0.0 );\nfor( int i = 0; i < MAX_DIR_LIGHTS; i ++ ) {\nvec4 lDirection = viewMatrix * vec4( directionalLightDirection[ i ], 0.0 );\nvec3 dirVector = normalize( lDirection.xyz );\nfloat dotProduct = dot( normal, dirVector );\n#ifdef WRAP_AROUND\nfloat dirDiffuseWeightFull = max( dotProduct, 0.0 );\nfloat dirDiffuseWeightHalf = max( 0.5 * dotProduct + 0.5, 0.0 );\nvec3 dirDiffuseWeight = mix( vec3( dirDiffuseWeightFull ), vec3( dirDiffuseWeightHalf ), wrapRGB );\n#else\nfloat dirDiffuseWeight = max( dotProduct, 0.0 );\n#endif\ndirDiffuse  += diffuse * directionalLightColor[ i ] * dirDiffuseWeight;\nvec3 dirHalfVector = normalize( dirVector + viewPosition );\nfloat dirDotNormalHalf = max( dot( normal, dirHalfVector ), 0.0 );\nfloat dirSpecularWeight = specularStrength * max( pow( dirDotNormalHalf, shininess ), 0.0 );\n#ifdef PHYSICALLY_BASED_SHADING\nfloat specularNormalization = ( shininess + 2.0001 ) / 8.0;\nvec3 schlick = specular + vec3( 1.0 - specular ) * pow( 1.0 - dot( dirVector, dirHalfVector ), 5.0 );\ndirSpecular += schlick * directionalLightColor[ i ] * dirSpecularWeight * dirDiffuseWeight * specularNormalization;\n#else\ndirSpecular += specular * directionalLightColor[ i ] * dirSpecularWeight * dirDiffuseWeight;\n#endif\n}\n#endif\n#if MAX_HEMI_LIGHTS > 0\nvec3 hemiDiffuse  = vec3( 0.0 );\nvec3 hemiSpecular = vec3( 0.0 );\nfor( int i = 0; i < MAX_HEMI_LIGHTS; i ++ ) {\nvec4 lPosition = viewMatrix * vec4( hemisphereLightPosition[ i ], 1.0 );\nvec3 lVector = normalize( lPosition.xyz + vViewPosition.xyz );\nfloat dotProduct = dot( normal, lVector );\nfloat hemiDiffuseWeight = 0.5 * dotProduct + 0.5;\nvec3 hemiColor = mix( hemisphereLightGroundColor[ i ], hemisphereLightSkyColor[ i ], hemiDiffuseWeight );\nhemiDiffuse += diffuse * hemiColor;\nvec3 hemiHalfVectorSky = normalize( lVector + viewPosition );\nfloat hemiDotNormalHalfSky = 0.5 * dot( normal, hemiHalfVectorSky ) + 0.5;\nfloat hemiSpecularWeightSky = specularStrength * max( pow( hemiDotNormalHalfSky, shininess ), 0.0 );\nvec3 lVectorGround = normalize( -lPosition.xyz + vViewPosition.xyz );\nvec3 hemiHalfVectorGround = normalize( lVectorGround + viewPosition );\nfloat hemiDotNormalHalfGround = 0.5 * dot( normal, hemiHalfVectorGround ) + 0.5;\nfloat hemiSpecularWeightGround = specularStrength * max( pow( hemiDotNormalHalfGround, shininess ), 0.0 );\n#ifdef PHYSICALLY_BASED_SHADING\nfloat dotProductGround = dot( normal, lVectorGround );\nfloat specularNormalization = ( shininess + 2.0001 ) / 8.0;\nvec3 schlickSky = specular + vec3( 1.0 - specular ) * pow( 1.0 - dot( lVector, hemiHalfVectorSky ), 5.0 );\nvec3 schlickGround = specular + vec3( 1.0 - specular ) * pow( 1.0 - dot( lVectorGround, hemiHalfVectorGround ), 5.0 );\nhemiSpecular += hemiColor * specularNormalization * ( schlickSky * hemiSpecularWeightSky * max( dotProduct, 0.0 ) + schlickGround * hemiSpecularWeightGround * max( dotProductGround, 0.0 ) );\n#else\nhemiSpecular += specular * hemiColor * ( hemiSpecularWeightSky + hemiSpecularWeightGround ) * hemiDiffuseWeight;\n#endif\n}\n#endif\nvec3 totalDiffuse = vec3( 0.0 );\nvec3 totalSpecular = vec3( 0.0 );\n#if MAX_DIR_LIGHTS > 0\ntotalDiffuse += dirDiffuse;\ntotalSpecular += dirSpecular;\n#endif\n#if MAX_HEMI_LIGHTS > 0\ntotalDiffuse += hemiDiffuse;\ntotalSpecular += hemiSpecular;\n#endif\n#if MAX_POINT_LIGHTS > 0\ntotalDiffuse += pointDiffuse;\ntotalSpecular += pointSpecular;\n#endif\n#if MAX_SPOT_LIGHTS > 0\ntotalDiffuse += spotDiffuse;\ntotalSpecular += spotSpecular;\n#endif\n#ifdef METAL\ngl_FragColor.xyz = gl_FragColor.xyz * ( emissive + totalDiffuse + ambientLightColor * ambient + totalSpecular );\n#else\ngl_FragColor.xyz = gl_FragColor.xyz * ( emissive + totalDiffuse + ambientLightColor * ambient ) + totalSpecular;\n#endif",
    color_pars_fragment: "#ifdef USE_COLOR\nvarying vec3 vColor;\n#endif",color_fragment: "#ifdef USE_COLOR\ngl_FragColor = gl_FragColor * vec4( vColor, opacity );\n#endif",color_pars_vertex: "#ifdef USE_COLOR\nvarying vec3 vColor;\n#endif",color_vertex: "#ifdef USE_COLOR\n#ifdef GAMMA_INPUT\nvColor = color * color;\n#else\nvColor = color;\n#endif\n#endif",skinning_pars_vertex: "#ifdef USE_SKINNING\n#ifdef BONE_TEXTURE\nuniform sampler2D boneTexture;\nmat4 getBoneMatrix( const in float i ) {\nfloat j = i * 4.0;\nfloat x = mod( j, N_BONE_PIXEL_X );\nfloat y = floor( j / N_BONE_PIXEL_X );\nconst float dx = 1.0 / N_BONE_PIXEL_X;\nconst float dy = 1.0 / N_BONE_PIXEL_Y;\ny = dy * ( y + 0.5 );\nvec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );\nvec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );\nvec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );\nvec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );\nmat4 bone = mat4( v1, v2, v3, v4 );\nreturn bone;\n}\n#else\nuniform mat4 boneGlobalMatrices[ MAX_BONES ];\nmat4 getBoneMatrix( const in float i ) {\nmat4 bone = boneGlobalMatrices[ int(i) ];\nreturn bone;\n}\n#endif\n#endif",
    skinbase_vertex: "#ifdef USE_SKINNING\nmat4 boneMatX = getBoneMatrix( skinIndex.x );\nmat4 boneMatY = getBoneMatrix( skinIndex.y );\n#endif",skinning_vertex: "#ifdef USE_SKINNING\n#ifdef USE_MORPHTARGETS\nvec4 skinVertex = vec4( morphed, 1.0 );\n#else\nvec4 skinVertex = vec4( position, 1.0 );\n#endif\nvec4 skinned  = boneMatX * skinVertex * skinWeight.x;\nskinned \t  += boneMatY * skinVertex * skinWeight.y;\n#endif",morphtarget_pars_vertex: "#ifdef USE_MORPHTARGETS\n#ifndef USE_MORPHNORMALS\nuniform float morphTargetInfluences[ 8 ];\n#else\nuniform float morphTargetInfluences[ 4 ];\n#endif\n#endif",
    morphtarget_vertex: "#ifdef USE_MORPHTARGETS\nvec3 morphed = vec3( 0.0 );\nmorphed += ( morphTarget0 - position ) * morphTargetInfluences[ 0 ];\nmorphed += ( morphTarget1 - position ) * morphTargetInfluences[ 1 ];\nmorphed += ( morphTarget2 - position ) * morphTargetInfluences[ 2 ];\nmorphed += ( morphTarget3 - position ) * morphTargetInfluences[ 3 ];\n#ifndef USE_MORPHNORMALS\nmorphed += ( morphTarget4 - position ) * morphTargetInfluences[ 4 ];\nmorphed += ( morphTarget5 - position ) * morphTargetInfluences[ 5 ];\nmorphed += ( morphTarget6 - position ) * morphTargetInfluences[ 6 ];\nmorphed += ( morphTarget7 - position ) * morphTargetInfluences[ 7 ];\n#endif\nmorphed += position;\n#endif",
    default_vertex: "vec4 mvPosition;\n#ifdef USE_SKINNING\nmvPosition = modelViewMatrix * skinned;\n#endif\n#if !defined( USE_SKINNING ) && defined( USE_MORPHTARGETS )\nmvPosition = modelViewMatrix * vec4( morphed, 1.0 );\n#endif\n#if !defined( USE_SKINNING ) && ! defined( USE_MORPHTARGETS )\nmvPosition = modelViewMatrix * vec4( position, 1.0 );\n#endif\ngl_Position = projectionMatrix * mvPosition;",morphnormal_vertex: "#ifdef USE_MORPHNORMALS\nvec3 morphedNormal = vec3( 0.0 );\nmorphedNormal +=  ( morphNormal0 - normal ) * morphTargetInfluences[ 0 ];\nmorphedNormal +=  ( morphNormal1 - normal ) * morphTargetInfluences[ 1 ];\nmorphedNormal +=  ( morphNormal2 - normal ) * morphTargetInfluences[ 2 ];\nmorphedNormal +=  ( morphNormal3 - normal ) * morphTargetInfluences[ 3 ];\nmorphedNormal += normal;\n#endif",
    skinnormal_vertex: "#ifdef USE_SKINNING\nmat4 skinMatrix = skinWeight.x * boneMatX;\nskinMatrix \t+= skinWeight.y * boneMatY;\n#ifdef USE_MORPHNORMALS\nvec4 skinnedNormal = skinMatrix * vec4( morphedNormal, 0.0 );\n#else\nvec4 skinnedNormal = skinMatrix * vec4( normal, 0.0 );\n#endif\n#endif",defaultnormal_vertex: "vec3 objectNormal;\n#ifdef USE_SKINNING\nobjectNormal = skinnedNormal.xyz;\n#endif\n#if !defined( USE_SKINNING ) && defined( USE_MORPHNORMALS )\nobjectNormal = morphedNormal;\n#endif\n#if !defined( USE_SKINNING ) && ! defined( USE_MORPHNORMALS )\nobjectNormal = normal;\n#endif\n#ifdef FLIP_SIDED\nobjectNormal = -objectNormal;\n#endif\nvec3 transformedNormal = normalMatrix * objectNormal;",
    shadowmap_pars_fragment: "#ifdef USE_SHADOWMAP\nuniform sampler2D shadowMap[ MAX_SHADOWS ];\nuniform vec2 shadowMapSize[ MAX_SHADOWS ];\nuniform float shadowDarkness[ MAX_SHADOWS ];\nuniform float shadowBias[ MAX_SHADOWS ];\nvarying vec4 vShadowCoord[ MAX_SHADOWS ];\nfloat unpackDepth( const in vec4 rgba_depth ) {\nconst vec4 bit_shift = vec4( 1.0 / ( 256.0 * 256.0 * 256.0 ), 1.0 / ( 256.0 * 256.0 ), 1.0 / 256.0, 1.0 );\nfloat depth = dot( rgba_depth, bit_shift );\nreturn depth;\n}\n#endif",shadowmap_fragment: "#ifdef USE_SHADOWMAP\n#ifdef SHADOWMAP_DEBUG\nvec3 frustumColors[3];\nfrustumColors[0] = vec3( 1.0, 0.5, 0.0 );\nfrustumColors[1] = vec3( 0.0, 1.0, 0.8 );\nfrustumColors[2] = vec3( 0.0, 0.5, 1.0 );\n#endif\n#ifdef SHADOWMAP_CASCADE\nint inFrustumCount = 0;\n#endif\nfloat fDepth;\nvec3 shadowColor = vec3( 1.0 );\nfor( int i = 0; i < MAX_SHADOWS; i ++ ) {\nvec3 shadowCoord = vShadowCoord[ i ].xyz / vShadowCoord[ i ].w;\nbvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );\nbool inFrustum = all( inFrustumVec );\n#ifdef SHADOWMAP_CASCADE\ninFrustumCount += int( inFrustum );\nbvec3 frustumTestVec = bvec3( inFrustum, inFrustumCount == 1, shadowCoord.z <= 1.0 );\n#else\nbvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );\n#endif\nbool frustumTest = all( frustumTestVec );\nif ( frustumTest ) {\nshadowCoord.z += shadowBias[ i ];\n#ifdef SHADOWMAP_SOFT\nfloat shadow = 0.0;\nconst float shadowDelta = 1.0 / 9.0;\nfloat xPixelOffset = 1.0 / shadowMapSize[ i ].x;\nfloat yPixelOffset = 1.0 / shadowMapSize[ i ].y;\nfloat dx0 = -1.25 * xPixelOffset;\nfloat dy0 = -1.25 * yPixelOffset;\nfloat dx1 = 1.25 * xPixelOffset;\nfloat dy1 = 1.25 * yPixelOffset;\nfDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx0, dy0 ) ) );\nif ( fDepth < shadowCoord.z ) shadow += shadowDelta;\nfDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( 0.0, dy0 ) ) );\nif ( fDepth < shadowCoord.z ) shadow += shadowDelta;\nfDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx1, dy0 ) ) );\nif ( fDepth < shadowCoord.z ) shadow += shadowDelta;\nfDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx0, 0.0 ) ) );\nif ( fDepth < shadowCoord.z ) shadow += shadowDelta;\nfDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy ) );\nif ( fDepth < shadowCoord.z ) shadow += shadowDelta;\nfDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx1, 0.0 ) ) );\nif ( fDepth < shadowCoord.z ) shadow += shadowDelta;\nfDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx0, dy1 ) ) );\nif ( fDepth < shadowCoord.z ) shadow += shadowDelta;\nfDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( 0.0, dy1 ) ) );\nif ( fDepth < shadowCoord.z ) shadow += shadowDelta;\nfDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx1, dy1 ) ) );\nif ( fDepth < shadowCoord.z ) shadow += shadowDelta;\nshadowColor = shadowColor * vec3( ( 1.0 - shadowDarkness[ i ] * shadow ) );\n#else\nvec4 rgbaDepth = texture2D( shadowMap[ i ], shadowCoord.xy );\nfloat fDepth = unpackDepth( rgbaDepth );\nif ( fDepth < shadowCoord.z )\nshadowColor = shadowColor * vec3( 1.0 - shadowDarkness[ i ] );\n#endif\n}\n#ifdef SHADOWMAP_DEBUG\n#ifdef SHADOWMAP_CASCADE\nif ( inFrustum && inFrustumCount == 1 ) gl_FragColor.xyz *= frustumColors[ i ];\n#else\nif ( inFrustum ) gl_FragColor.xyz *= frustumColors[ i ];\n#endif\n#endif\n}\n#ifdef GAMMA_OUTPUT\nshadowColor *= shadowColor;\n#endif\ngl_FragColor.xyz = gl_FragColor.xyz * shadowColor;\n#endif",
    shadowmap_pars_vertex: "#ifdef USE_SHADOWMAP\nvarying vec4 vShadowCoord[ MAX_SHADOWS ];\nuniform mat4 shadowMatrix[ MAX_SHADOWS ];\n#endif",shadowmap_vertex: "#ifdef USE_SHADOWMAP\nfor( int i = 0; i < MAX_SHADOWS; i ++ ) {\nvShadowCoord[ i ] = shadowMatrix[ i ] * mPosition;\n}\n#endif",alphatest_fragment: "#ifdef ALPHATEST\nif ( gl_FragColor.a < ALPHATEST ) discard;\n#endif",linear_to_gamma_fragment: "#ifdef GAMMA_OUTPUT\ngl_FragColor.xyz = sqrt( gl_FragColor.xyz );\n#endif"};
THREE.UniformsUtils = {merge: function(a) {
        var b, c, d, e = {};
        for (b = 0; b < a.length; b++)
            for (c in d = this.clone(a[b]), d)
                e[c] = d[c];
        return e
    },clone: function(a) {
        var b, c, d, e = {};
        for (b in a)
            for (c in e[b] = {}, a[b])
                d = a[b][c], e[b][c] = d instanceof THREE.Color || d instanceof THREE.Vector2 || d instanceof THREE.Vector3 || d instanceof THREE.Vector4 || d instanceof THREE.Matrix4 || d instanceof THREE.Texture ? d.clone() : d instanceof Array ? d.slice() : d;
        return e
    }};
THREE.UniformsLib = {common: {diffuse: {type: "c",value: new THREE.Color(15658734)},opacity: {type: "f",value: 1},map: {type: "t",value: null},offsetRepeat: {type: "v4",value: new THREE.Vector4(0, 0, 1, 1)},lightMap: {type: "t",value: null},specularMap: {type: "t",value: null},envMap: {type: "t",value: null},flipEnvMap: {type: "f",value: -1},useRefract: {type: "i",value: 0},reflectivity: {type: "f",value: 1},refractionRatio: {type: "f",value: 0.98},combine: {type: "i",value: 0},morphTargetInfluences: {type: "f",value: 0}},bump: {bumpMap: {type: "t",
            value: null},bumpScale: {type: "f",value: 1}},normalmap: {normalMap: {type: "t",value: null},normalScale: {type: "v2",value: new THREE.Vector2(1, 1)}},fog: {fogDensity: {type: "f",value: 2.5E-4},fogNear: {type: "f",value: 1},fogFar: {type: "f",value: 2E3},fogColor: {type: "c",value: new THREE.Color(16777215)}},lights: {ambientLightColor: {type: "fv",value: []},directionalLightDirection: {type: "fv",value: []},directionalLightColor: {type: "fv",value: []},hemisphereLightPosition: {type: "fv",value: []},hemisphereLightSkyColor: {type: "fv",
            value: []},hemisphereLightGroundColor: {type: "fv",value: []},pointLightColor: {type: "fv",value: []},pointLightPosition: {type: "fv",value: []},pointLightDistance: {type: "fv1",value: []},spotLightColor: {type: "fv",value: []},spotLightPosition: {type: "fv",value: []},spotLightDirection: {type: "fv",value: []},spotLightDistance: {type: "fv1",value: []},spotLightAngle: {type: "fv1",value: []},spotLightExponent: {type: "fv1",value: []}},particle: {psColor: {type: "c",value: new THREE.Color(15658734)},opacity: {type: "f",value: 1},size: {type: "f",
            value: 1},scale: {type: "f",value: 1},map: {type: "t",value: null},fogDensity: {type: "f",value: 2.5E-4},fogNear: {type: "f",value: 1},fogFar: {type: "f",value: 2E3},fogColor: {type: "c",value: new THREE.Color(16777215)}},shadowmap: {shadowMap: {type: "tv",value: []},shadowMapSize: {type: "v2v",value: []},shadowBias: {type: "fv1",value: []},shadowDarkness: {type: "fv1",value: []},shadowMatrix: {type: "m4v",value: []}}};
THREE.ShaderLib = {depth: {uniforms: {mNear: {type: "f",value: 1},mFar: {type: "f",value: 2E3},opacity: {type: "f",value: 1}},vertexShader: "void main() {\ngl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}",fragmentShader: "uniform float mNear;\nuniform float mFar;\nuniform float opacity;\nvoid main() {\nfloat depth = gl_FragCoord.z / gl_FragCoord.w;\nfloat color = 1.0 - smoothstep( mNear, mFar, depth );\ngl_FragColor = vec4( vec3( color ), opacity );\n}"},normal: {uniforms: {opacity: {type: "f",
                value: 1}},vertexShader: "varying vec3 vNormal;\nvoid main() {\nvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\nvNormal = normalMatrix * normal;\ngl_Position = projectionMatrix * mvPosition;\n}",fragmentShader: "uniform float opacity;\nvarying vec3 vNormal;\nvoid main() {\ngl_FragColor = vec4( 0.5 * normalize( vNormal ) + 0.5, opacity );\n}"},basic: {uniforms: THREE.UniformsUtils.merge([THREE.UniformsLib.common, THREE.UniformsLib.fog, THREE.UniformsLib.shadowmap]),vertexShader: [THREE.ShaderChunk.map_pars_vertex, 
            THREE.ShaderChunk.lightmap_pars_vertex, THREE.ShaderChunk.envmap_pars_vertex, THREE.ShaderChunk.color_pars_vertex, THREE.ShaderChunk.morphtarget_pars_vertex, THREE.ShaderChunk.skinning_pars_vertex, THREE.ShaderChunk.shadowmap_pars_vertex, "void main() {", THREE.ShaderChunk.map_vertex, THREE.ShaderChunk.lightmap_vertex, THREE.ShaderChunk.color_vertex, "#ifdef USE_ENVMAP", THREE.ShaderChunk.morphnormal_vertex, THREE.ShaderChunk.skinbase_vertex, THREE.ShaderChunk.skinnormal_vertex, THREE.ShaderChunk.defaultnormal_vertex, 
            "#endif", THREE.ShaderChunk.morphtarget_vertex, THREE.ShaderChunk.skinning_vertex, THREE.ShaderChunk.default_vertex, THREE.ShaderChunk.worldpos_vertex, THREE.ShaderChunk.envmap_vertex, THREE.ShaderChunk.shadowmap_vertex, "}"].join("\n"),fragmentShader: ["uniform vec3 diffuse;\nuniform float opacity;", THREE.ShaderChunk.color_pars_fragment, THREE.ShaderChunk.map_pars_fragment, THREE.ShaderChunk.lightmap_pars_fragment, THREE.ShaderChunk.envmap_pars_fragment, THREE.ShaderChunk.fog_pars_fragment, THREE.ShaderChunk.shadowmap_pars_fragment, 
            THREE.ShaderChunk.specularmap_pars_fragment, "void main() {\ngl_FragColor = vec4( diffuse, opacity );", THREE.ShaderChunk.map_fragment, THREE.ShaderChunk.alphatest_fragment, THREE.ShaderChunk.specularmap_fragment, THREE.ShaderChunk.lightmap_fragment, THREE.ShaderChunk.color_fragment, THREE.ShaderChunk.envmap_fragment, THREE.ShaderChunk.shadowmap_fragment, THREE.ShaderChunk.linear_to_gamma_fragment, THREE.ShaderChunk.fog_fragment, "}"].join("\n")},lambert: {uniforms: THREE.UniformsUtils.merge([THREE.UniformsLib.common, 
            THREE.UniformsLib.fog, THREE.UniformsLib.lights, THREE.UniformsLib.shadowmap, {ambient: {type: "c",value: new THREE.Color(16777215)},emissive: {type: "c",value: new THREE.Color(0)},wrapRGB: {type: "v3",value: new THREE.Vector3(1, 1, 1)}}]),vertexShader: ["#define LAMBERT\nvarying vec3 vLightFront;\n#ifdef DOUBLE_SIDED\nvarying vec3 vLightBack;\n#endif", THREE.ShaderChunk.map_pars_vertex, THREE.ShaderChunk.lightmap_pars_vertex, THREE.ShaderChunk.envmap_pars_vertex, THREE.ShaderChunk.lights_lambert_pars_vertex, THREE.ShaderChunk.color_pars_vertex, 
            THREE.ShaderChunk.morphtarget_pars_vertex, THREE.ShaderChunk.skinning_pars_vertex, THREE.ShaderChunk.shadowmap_pars_vertex, "void main() {", THREE.ShaderChunk.map_vertex, THREE.ShaderChunk.lightmap_vertex, THREE.ShaderChunk.color_vertex, THREE.ShaderChunk.morphnormal_vertex, THREE.ShaderChunk.skinbase_vertex, THREE.ShaderChunk.skinnormal_vertex, THREE.ShaderChunk.defaultnormal_vertex, THREE.ShaderChunk.morphtarget_vertex, THREE.ShaderChunk.skinning_vertex, THREE.ShaderChunk.default_vertex, THREE.ShaderChunk.worldpos_vertex, 
            THREE.ShaderChunk.envmap_vertex, THREE.ShaderChunk.lights_lambert_vertex, THREE.ShaderChunk.shadowmap_vertex, "}"].join("\n"),fragmentShader: ["uniform float opacity;\nvarying vec3 vLightFront;\n#ifdef DOUBLE_SIDED\nvarying vec3 vLightBack;\n#endif", THREE.ShaderChunk.color_pars_fragment, THREE.ShaderChunk.map_pars_fragment, THREE.ShaderChunk.lightmap_pars_fragment, THREE.ShaderChunk.envmap_pars_fragment, THREE.ShaderChunk.fog_pars_fragment, THREE.ShaderChunk.shadowmap_pars_fragment, THREE.ShaderChunk.specularmap_pars_fragment, 
            "void main() {\ngl_FragColor = vec4( vec3 ( 1.0 ), opacity );", THREE.ShaderChunk.map_fragment, THREE.ShaderChunk.alphatest_fragment, THREE.ShaderChunk.specularmap_fragment, "#ifdef DOUBLE_SIDED\nif ( gl_FrontFacing )\ngl_FragColor.xyz *= vLightFront;\nelse\ngl_FragColor.xyz *= vLightBack;\n#else\ngl_FragColor.xyz *= vLightFront;\n#endif", THREE.ShaderChunk.lightmap_fragment, THREE.ShaderChunk.color_fragment, THREE.ShaderChunk.envmap_fragment, THREE.ShaderChunk.shadowmap_fragment, THREE.ShaderChunk.linear_to_gamma_fragment, 
            THREE.ShaderChunk.fog_fragment, "}"].join("\n")},phong: {uniforms: THREE.UniformsUtils.merge([THREE.UniformsLib.common, THREE.UniformsLib.bump, THREE.UniformsLib.normalmap, THREE.UniformsLib.fog, THREE.UniformsLib.lights, THREE.UniformsLib.shadowmap, {ambient: {type: "c",value: new THREE.Color(16777215)},emissive: {type: "c",value: new THREE.Color(0)},specular: {type: "c",value: new THREE.Color(1118481)},shininess: {type: "f",value: 30},wrapRGB: {type: "v3",value: new THREE.Vector3(1, 1, 1)}}]),vertexShader: ["#define PHONG\nvarying vec3 vViewPosition;\nvarying vec3 vNormal;", 
            THREE.ShaderChunk.map_pars_vertex, THREE.ShaderChunk.lightmap_pars_vertex, THREE.ShaderChunk.envmap_pars_vertex, THREE.ShaderChunk.lights_phong_pars_vertex, THREE.ShaderChunk.color_pars_vertex, THREE.ShaderChunk.morphtarget_pars_vertex, THREE.ShaderChunk.skinning_pars_vertex, THREE.ShaderChunk.shadowmap_pars_vertex, "void main() {", THREE.ShaderChunk.map_vertex, THREE.ShaderChunk.lightmap_vertex, THREE.ShaderChunk.color_vertex, THREE.ShaderChunk.morphnormal_vertex, THREE.ShaderChunk.skinbase_vertex, THREE.ShaderChunk.skinnormal_vertex, 
            THREE.ShaderChunk.defaultnormal_vertex, "vNormal = transformedNormal;", THREE.ShaderChunk.morphtarget_vertex, THREE.ShaderChunk.skinning_vertex, THREE.ShaderChunk.default_vertex, "vViewPosition = -mvPosition.xyz;", THREE.ShaderChunk.worldpos_vertex, THREE.ShaderChunk.envmap_vertex, THREE.ShaderChunk.lights_phong_vertex, THREE.ShaderChunk.shadowmap_vertex, "}"].join("\n"),fragmentShader: ["uniform vec3 diffuse;\nuniform float opacity;\nuniform vec3 ambient;\nuniform vec3 emissive;\nuniform vec3 specular;\nuniform float shininess;", 
            THREE.ShaderChunk.color_pars_fragment, THREE.ShaderChunk.map_pars_fragment, THREE.ShaderChunk.lightmap_pars_fragment, THREE.ShaderChunk.envmap_pars_fragment, THREE.ShaderChunk.fog_pars_fragment, THREE.ShaderChunk.lights_phong_pars_fragment, THREE.ShaderChunk.shadowmap_pars_fragment, THREE.ShaderChunk.bumpmap_pars_fragment, THREE.ShaderChunk.normalmap_pars_fragment, THREE.ShaderChunk.specularmap_pars_fragment, "void main() {\ngl_FragColor = vec4( vec3 ( 1.0 ), opacity );", THREE.ShaderChunk.map_fragment, THREE.ShaderChunk.alphatest_fragment, 
            THREE.ShaderChunk.specularmap_fragment, THREE.ShaderChunk.lights_phong_fragment, THREE.ShaderChunk.lightmap_fragment, THREE.ShaderChunk.color_fragment, THREE.ShaderChunk.envmap_fragment, THREE.ShaderChunk.shadowmap_fragment, THREE.ShaderChunk.linear_to_gamma_fragment, THREE.ShaderChunk.fog_fragment, "}"].join("\n")},particle_basic: {uniforms: THREE.UniformsUtils.merge([THREE.UniformsLib.particle, THREE.UniformsLib.shadowmap]),vertexShader: ["uniform float size;\nuniform float scale;", THREE.ShaderChunk.color_pars_vertex, 
            THREE.ShaderChunk.shadowmap_pars_vertex, "void main() {", THREE.ShaderChunk.color_vertex, "vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\n#ifdef USE_SIZEATTENUATION\ngl_PointSize = size * ( scale / length( mvPosition.xyz ) );\n#else\ngl_PointSize = size;\n#endif\ngl_Position = projectionMatrix * mvPosition;", THREE.ShaderChunk.worldpos_vertex, THREE.ShaderChunk.shadowmap_vertex, "}"].join("\n"),fragmentShader: ["uniform vec3 psColor;\nuniform float opacity;", THREE.ShaderChunk.color_pars_fragment, 
            THREE.ShaderChunk.map_particle_pars_fragment, THREE.ShaderChunk.fog_pars_fragment, THREE.ShaderChunk.shadowmap_pars_fragment, "void main() {\ngl_FragColor = vec4( psColor, opacity );", THREE.ShaderChunk.map_particle_fragment, THREE.ShaderChunk.alphatest_fragment, THREE.ShaderChunk.color_fragment, THREE.ShaderChunk.shadowmap_fragment, THREE.ShaderChunk.fog_fragment, "}"].join("\n")},depthRGBA: {uniforms: {},vertexShader: [THREE.ShaderChunk.morphtarget_pars_vertex, THREE.ShaderChunk.skinning_pars_vertex, "void main() {", 
            THREE.ShaderChunk.skinbase_vertex, THREE.ShaderChunk.morphtarget_vertex, THREE.ShaderChunk.skinning_vertex, THREE.ShaderChunk.default_vertex, "}"].join("\n"),fragmentShader: "vec4 pack_depth( const in float depth ) {\nconst vec4 bit_shift = vec4( 256.0 * 256.0 * 256.0, 256.0 * 256.0, 256.0, 1.0 );\nconst vec4 bit_mask  = vec4( 0.0, 1.0 / 256.0, 1.0 / 256.0, 1.0 / 256.0 );\nvec4 res = fract( depth * bit_shift );\nres -= res.xxyz * bit_mask;\nreturn res;\n}\nvoid main() {\ngl_FragData[ 0 ] = pack_depth( gl_FragCoord.z );\n}"}};
THREE.WebGLRenderer = function(a) {
    function b(a, b) {
        var c = a.vertices.length, d = b.material;
        if (d.attributes) {
            void 0 === a.__webglCustomAttributesList && (a.__webglCustomAttributesList = []);
            for (var e in d.attributes) {
                var f = d.attributes[e];
                if (!f.__webglInitialized || f.createUniqueBuffers) {
                    f.__webglInitialized = !0;
                    var g = 1;
                    "v2" === f.type ? g = 2 : "v3" === f.type ? g = 3 : "v4" === f.type ? g = 4 : "c" === f.type && (g = 3);
                    f.size = g;
                    f.array = new Float32Array(c * g);
                    f.buffer = k.createBuffer();
                    f.buffer.belongsToAttribute = e;
                    f.needsUpdate = !0
                }
                a.__webglCustomAttributesList.push(f)
            }
        }
    }
    function c(a, b) {
        if (a.material && !(a.material instanceof THREE.MeshFaceMaterial))
            return a.material;
        if (0 <= b.materialIndex)
            return a.geometry.materials[b.materialIndex]
    }
    function d(a) {
        return a instanceof THREE.MeshBasicMaterial && !a.envMap || a instanceof THREE.MeshDepthMaterial ? !1 : a && void 0 !== a.shading && a.shading === THREE.SmoothShading ? THREE.SmoothShading : THREE.FlatShading
    }
    function e(a) {
        return a.map || a.lightMap || a.bumpMap || a.normalMap || a.specularMap || a instanceof THREE.ShaderMaterial ? !0 : !1
    }
    function f(a) {
        var b, 
        c, d;
        for (b in a.attributes)
            d = "index" === b ? k.ELEMENT_ARRAY_BUFFER : k.ARRAY_BUFFER, c = a.attributes[b], c.buffer = k.createBuffer(), k.bindBuffer(d, c.buffer), k.bufferData(d, c.array, k.STATIC_DRAW)
    }
    function g(a, b, c) {
        var d, e, f, g, h = a.vertices;
        g = h.length;
        var i = a.colors, j = i.length, l = a.__vertexArray, n = a.__colorArray, m = a.__sortArray, o = a.verticesNeedUpdate, p = a.colorsNeedUpdate, q = a.__webglCustomAttributesList;
        if (c.sortParticles) {
            Nb.copy(bb);
            Nb.multiplySelf(c.matrixWorld);
            for (d = 0; d < g; d++)
                e = h[d], Ra.copy(e), Nb.multiplyVector3(Ra), 
                m[d] = [Ra.z, d];
            m.sort(function(a, b) {
                return b[0] - a[0]
            });
            for (d = 0; d < g; d++)
                e = h[m[d][1]], f = 3 * d, l[f] = e.x, l[f + 1] = e.y, l[f + 2] = e.z;
            for (d = 0; d < j; d++)
                f = 3 * d, e = i[m[d][1]], n[f] = e.r, n[f + 1] = e.g, n[f + 2] = e.b;
            if (q) {
                i = 0;
                for (j = q.length; i < j; i++)
                    if (h = q[i], void 0 === h.boundTo || "vertices" === h.boundTo)
                        if (f = 0, e = h.value.length, 1 === h.size)
                            for (d = 0; d < e; d++)
                                g = m[d][1], h.array[d] = h.value[g];
                        else if (2 === h.size)
                            for (d = 0; d < e; d++)
                                g = m[d][1], g = h.value[g], h.array[f] = g.x, h.array[f + 1] = g.y, f += 2;
                        else if (3 === h.size)
                            if ("c" === h.type)
                                for (d = 0; d < e; d++)
                                    g = 
                                    m[d][1], g = h.value[g], h.array[f] = g.r, h.array[f + 1] = g.g, h.array[f + 2] = g.b, f += 3;
                            else
                                for (d = 0; d < e; d++)
                                    g = m[d][1], g = h.value[g], h.array[f] = g.x, h.array[f + 1] = g.y, h.array[f + 2] = g.z, f += 3;
                        else if (4 === h.size)
                            for (d = 0; d < e; d++)
                                g = m[d][1], g = h.value[g], h.array[f] = g.x, h.array[f + 1] = g.y, h.array[f + 2] = g.z, h.array[f + 3] = g.w, f += 4
            }
        } else {
            if (o)
                for (d = 0; d < g; d++)
                    e = h[d], f = 3 * d, l[f] = e.x, l[f + 1] = e.y, l[f + 2] = e.z;
            if (p)
                for (d = 0; d < j; d++)
                    e = i[d], f = 3 * d, n[f] = e.r, n[f + 1] = e.g, n[f + 2] = e.b;
            if (q) {
                i = 0;
                for (j = q.length; i < j; i++)
                    if (h = q[i], h.needsUpdate && (void 0 === 
                    h.boundTo || "vertices" === h.boundTo))
                        if (e = h.value.length, f = 0, 1 === h.size)
                            for (d = 0; d < e; d++)
                                h.array[d] = h.value[d];
                        else if (2 === h.size)
                            for (d = 0; d < e; d++)
                                g = h.value[d], h.array[f] = g.x, h.array[f + 1] = g.y, f += 2;
                        else if (3 === h.size)
                            if ("c" === h.type)
                                for (d = 0; d < e; d++)
                                    g = h.value[d], h.array[f] = g.r, h.array[f + 1] = g.g, h.array[f + 2] = g.b, f += 3;
                            else
                                for (d = 0; d < e; d++)
                                    g = h.value[d], h.array[f] = g.x, h.array[f + 1] = g.y, h.array[f + 2] = g.z, f += 3;
                        else if (4 === h.size)
                            for (d = 0; d < e; d++)
                                g = h.value[d], h.array[f] = g.x, h.array[f + 1] = g.y, h.array[f + 2] = g.z, h.array[f + 
                                3] = g.w, f += 4
            }
        }
        if (o || c.sortParticles)
            k.bindBuffer(k.ARRAY_BUFFER, a.__webglVertexBuffer), k.bufferData(k.ARRAY_BUFFER, l, b);
        if (p || c.sortParticles)
            k.bindBuffer(k.ARRAY_BUFFER, a.__webglColorBuffer), k.bufferData(k.ARRAY_BUFFER, n, b);
        if (q) {
            i = 0;
            for (j = q.length; i < j; i++)
                if (h = q[i], h.needsUpdate || c.sortParticles)
                    k.bindBuffer(k.ARRAY_BUFFER, h.buffer), k.bufferData(k.ARRAY_BUFFER, h.array, b)
        }
    }
    function h(a, b, c) {
        var d = a.attributes, e = d.index, f = d.position, g = d.normal, h = d.uv, i = d.color, d = d.tangent;
        a.elementsNeedUpdate && void 0 !== 
        e && (k.bindBuffer(k.ELEMENT_ARRAY_BUFFER, e.buffer), k.bufferData(k.ELEMENT_ARRAY_BUFFER, e.array, b));
        a.verticesNeedUpdate && void 0 !== f && (k.bindBuffer(k.ARRAY_BUFFER, f.buffer), k.bufferData(k.ARRAY_BUFFER, f.array, b));
        a.normalsNeedUpdate && void 0 !== g && (k.bindBuffer(k.ARRAY_BUFFER, g.buffer), k.bufferData(k.ARRAY_BUFFER, g.array, b));
        a.uvsNeedUpdate && void 0 !== h && (k.bindBuffer(k.ARRAY_BUFFER, h.buffer), k.bufferData(k.ARRAY_BUFFER, h.array, b));
        a.colorsNeedUpdate && void 0 !== i && (k.bindBuffer(k.ARRAY_BUFFER, i.buffer), 
        k.bufferData(k.ARRAY_BUFFER, i.array, b));
        a.tangentsNeedUpdate && void 0 !== d && (k.bindBuffer(k.ARRAY_BUFFER, d.buffer), k.bufferData(k.ARRAY_BUFFER, d.array, b));
        if (c)
            for (var j in a.attributes)
                delete a.attributes[j].array
    }
    function i(a, b) {
        return b.z - a.z
    }
    function j(a, b) {
        return b[1] - a[1]
    }
    function l(a, b, c) {
        if (a.length)
            for (var d = 0, e = a.length; d < e; d++)
                ha = ca = null, R = Q = wa = ea = cb = Ia = va = -1, mb = !0, a[d].render(b, c, eb, Da), ha = ca = null, R = Q = wa = ea = cb = Ia = va = -1, mb = !0
    }
    function n(a, b, c, d, e, f, g, h) {
        var i, k, j, l;
        b ? (k = a.length - 1, l = b = -1) : 
        (k = 0, b = a.length, l = 1);
        for (var m = k; m !== b; m += l)
            if (i = a[m], i.render) {
                k = i.object;
                j = i.buffer;
                if (h)
                    i = h;
                else {
                    i = i[c];
                    if (!i)
                        continue;
                    g && O.setBlending(i.blending, i.blendEquation, i.blendSrc, i.blendDst);
                    O.setDepthTest(i.depthTest);
                    O.setDepthWrite(i.depthWrite);
                    A(i.polygonOffset, i.polygonOffsetFactor, i.polygonOffsetUnits)
                }
                O.setMaterialFaces(i);
                j instanceof THREE.BufferGeometry ? O.renderBufferDirect(d, e, f, i, j, k) : O.renderBuffer(d, e, f, i, j, k)
            }
    }
    function m(a, b, c, d, e, f, g) {
        for (var h, i, k = 0, j = a.length; k < j; k++)
            if (h = a[k], i = 
            h.object, i.visible) {
                if (g)
                    h = g;
                else {
                    h = h[b];
                    if (!h)
                        continue;
                    f && O.setBlending(h.blending, h.blendEquation, h.blendSrc, h.blendDst);
                    O.setDepthTest(h.depthTest);
                    O.setDepthWrite(h.depthWrite);
                    A(h.polygonOffset, h.polygonOffsetFactor, h.polygonOffsetUnits)
                }
                O.renderImmediateObject(c, d, e, h, i)
            }
    }
    function q(a, b, c) {
        a.push({buffer: b,object: c,opaque: null,transparent: null})
    }
    function p(a) {
        for (var b in a.attributes)
            if (a.attributes[b].needsUpdate)
                return !0;
        return !1
    }
    function o(a) {
        for (var b in a.attributes)
            a.attributes[b].needsUpdate = 
            !1
    }
    function r(a, b) {
        for (var c = a.length - 1; 0 <= c; c--)
            a[c].object === b && a.splice(c, 1)
    }
    function t(a, b) {
        for (var c = a.length - 1; 0 <= c; c--)
            a[c] === b && a.splice(c, 1)
    }
    function u(a, b, c, d, e) {
        ma = 0;
        d.needsUpdate && (d.program && O.deallocateMaterial(d), O.initMaterial(d, b, c, e), d.needsUpdate = !1);
        d.morphTargets && !e.__webglMorphTargetInfluences && (e.__webglMorphTargetInfluences = new Float32Array(O.maxMorphTargets));
        var f = !1, g = d.program, h = g.uniforms, i = d.uniforms;
        g !== ca && (k.useProgram(g), ca = g, f = !0);
        d.id !== R && (R = d.id, f = !0);
        if (f || 
        a !== ha)
            k.uniformMatrix4fv(h.projectionMatrix, !1, a._projectionMatrixArray), a !== ha && (ha = a);
        if (d.skinning)
            if (dc && e.useVertexTexture) {
                if (null !== h.boneTexture) {
                    var j = w();
                    k.uniform1i(h.boneTexture, j);
                    O.setTexture(e.boneTexture, j)
                }
            } else
                null !== h.boneGlobalMatrices && k.uniformMatrix4fv(h.boneGlobalMatrices, !1, e.boneMatrices);
        if (f) {
            c && d.fog && (i.fogColor.value = c.color, c instanceof THREE.Fog ? (i.fogNear.value = c.near, i.fogFar.value = c.far) : c instanceof THREE.FogExp2 && (i.fogDensity.value = c.density));
            if (d instanceof 
            THREE.MeshPhongMaterial || d instanceof THREE.MeshLambertMaterial || d.lights) {
                if (mb) {
                    for (var l = 0, m = 0, n = 0, o, p, q, r, s = qc, t = s.directional.colors, u = s.directional.positions, x = s.point.colors, A = s.point.positions, E = s.point.distances, D = s.spot.colors, G = s.spot.positions, J = s.spot.distances, H = s.spot.directions, K = s.spot.angles, I = s.spot.exponents, M = s.hemi.skyColors, Q = s.hemi.groundColors, fa = s.hemi.positions, S = 0, Z = 0, Y = 0, X = 0, c = 0, f = b.length; c < f; c++)
                        j = b[c], !j.onlyShadow && j.visible && (o = j.color, r = j.intensity, p = j.distance, 
                        j instanceof THREE.AmbientLight ? O.gammaInput ? (l += o.r * o.r, m += o.g * o.g, n += o.b * o.b) : (l += o.r, m += o.g, n += o.b) : j instanceof THREE.DirectionalLight ? (p = 3 * S, O.gammaInput ? B(t, p, o, r * r) : v(t, p, o, r), Na.copy(j.matrixWorld.getPosition()), Na.subSelf(j.target.matrixWorld.getPosition()), Na.normalize(), u[p] = Na.x, u[p + 1] = Na.y, u[p + 2] = Na.z, S += 1) : j instanceof THREE.PointLight ? (q = 3 * Z, O.gammaInput ? B(x, q, o, r * r) : v(x, q, o, r), r = j.matrixWorld.getPosition(), A[q] = r.x, A[q + 1] = r.y, A[q + 2] = r.z, E[Z] = p, Z += 1) : j instanceof THREE.SpotLight ? (q = 
                        3 * Y, O.gammaInput ? B(D, q, o, r * r) : v(D, q, o, r), r = j.matrixWorld.getPosition(), G[q] = r.x, G[q + 1] = r.y, G[q + 2] = r.z, J[Y] = p, Na.copy(r), Na.subSelf(j.target.matrixWorld.getPosition()), Na.normalize(), H[q] = Na.x, H[q + 1] = Na.y, H[q + 2] = Na.z, K[Y] = Math.cos(j.angle), I[Y] = j.exponent, Y += 1) : j instanceof THREE.HemisphereLight && (p = j.color, q = j.groundColor, o = 3 * X, O.gammaInput ? (r *= r, B(M, o, p, r), B(Q, o, q, r)) : (v(M, o, p, r), v(Q, o, q, r)), r = j.matrixWorld.getPosition(), fa[o] = r.x, fa[o + 1] = r.y, fa[o + 2] = r.z, X += 1));
                    c = 3 * S;
                    for (f = t.length; c < f; c++)
                        t[c] = 
                        0;
                    c = 3 * Z;
                    for (f = x.length; c < f; c++)
                        x[c] = 0;
                    c = 3 * Y;
                    for (f = D.length; c < f; c++)
                        D[c] = 0;
                    c = 3 * X;
                    for (f = M.length; c < f; c++)
                        M[c] = 0;
                    c = 3 * X;
                    for (f = Q.length; c < f; c++)
                        Q[c] = 0;
                    s.directional.length = S;
                    s.point.length = Z;
                    s.spot.length = Y;
                    s.hemi.length = X;
                    s.ambient[0] = l;
                    s.ambient[1] = m;
                    s.ambient[2] = n;
                    mb = !1
                }
                c = qc;
                i.ambientLightColor.value = c.ambient;
                i.directionalLightColor.value = c.directional.colors;
                i.directionalLightDirection.value = c.directional.positions;
                i.pointLightColor.value = c.point.colors;
                i.pointLightPosition.value = c.point.positions;
                i.pointLightDistance.value = c.point.distances;
                i.spotLightColor.value = c.spot.colors;
                i.spotLightPosition.value = c.spot.positions;
                i.spotLightDistance.value = c.spot.distances;
                i.spotLightDirection.value = c.spot.directions;
                i.spotLightAngle.value = c.spot.angles;
                i.spotLightExponent.value = c.spot.exponents;
                i.hemisphereLightSkyColor.value = c.hemi.skyColors;
                i.hemisphereLightGroundColor.value = c.hemi.groundColors;
                i.hemisphereLightPosition.value = c.hemi.positions
            }
            if (d instanceof THREE.MeshBasicMaterial || d instanceof THREE.MeshLambertMaterial || 
            d instanceof THREE.MeshPhongMaterial) {
                i.opacity.value = d.opacity;
                O.gammaInput ? i.diffuse.value.copyGammaToLinear(d.color) : i.diffuse.value = d.color;
                i.map.value = d.map;
                i.lightMap.value = d.lightMap;
                i.specularMap.value = d.specularMap;
                d.bumpMap && (i.bumpMap.value = d.bumpMap, i.bumpScale.value = d.bumpScale);
                d.normalMap && (i.normalMap.value = d.normalMap, i.normalScale.value.copy(d.normalScale));
                var ea;
                d.map ? ea = d.map : d.specularMap ? ea = d.specularMap : d.normalMap ? ea = d.normalMap : d.bumpMap && (ea = d.bumpMap);
                void 0 !== ea && (c = ea.offset, 
                ea = ea.repeat, i.offsetRepeat.value.set(c.x, c.y, ea.x, ea.y));
                i.envMap.value = d.envMap;
                i.flipEnvMap.value = d.envMap instanceof THREE.WebGLRenderTargetCube ? 1 : -1;
                i.reflectivity.value = d.reflectivity;
                i.refractionRatio.value = d.refractionRatio;
                i.combine.value = d.combine;
                i.useRefract.value = d.envMap && d.envMap.mapping instanceof THREE.CubeRefractionMapping
            }
            d instanceof THREE.LineBasicMaterial ? (i.diffuse.value = d.color, i.opacity.value = d.opacity) : d instanceof THREE.ParticleBasicMaterial ? (i.psColor.value = d.color, i.opacity.value = 
            d.opacity, i.size.value = d.size, i.scale.value = N.height / 2, i.map.value = d.map) : d instanceof THREE.MeshPhongMaterial ? (i.shininess.value = d.shininess, O.gammaInput ? (i.ambient.value.copyGammaToLinear(d.ambient), i.emissive.value.copyGammaToLinear(d.emissive), i.specular.value.copyGammaToLinear(d.specular)) : (i.ambient.value = d.ambient, i.emissive.value = d.emissive, i.specular.value = d.specular), d.wrapAround && i.wrapRGB.value.copy(d.wrapRGB)) : d instanceof THREE.MeshLambertMaterial ? (O.gammaInput ? (i.ambient.value.copyGammaToLinear(d.ambient), 
            i.emissive.value.copyGammaToLinear(d.emissive)) : (i.ambient.value = d.ambient, i.emissive.value = d.emissive), d.wrapAround && i.wrapRGB.value.copy(d.wrapRGB)) : d instanceof THREE.MeshDepthMaterial ? (i.mNear.value = a.near, i.mFar.value = a.far, i.opacity.value = d.opacity) : d instanceof THREE.MeshNormalMaterial && (i.opacity.value = d.opacity);
            if (e.receiveShadow && !d._shadowPass && i.shadowMatrix) {
                c = ea = 0;
                for (f = b.length; c < f; c++)
                    if (j = b[c], j.castShadow && (j instanceof THREE.SpotLight || j instanceof THREE.DirectionalLight && !j.shadowCascade))
                        i.shadowMap.value[ea] = 
                        j.shadowMap, i.shadowMapSize.value[ea] = j.shadowMapSize, i.shadowMatrix.value[ea] = j.shadowMatrix, i.shadowDarkness.value[ea] = j.shadowDarkness, i.shadowBias.value[ea] = j.shadowBias, ea++
            }
            b = d.uniformsList;
            i = 0;
            for (ea = b.length; i < ea; i++)
                if (f = g.uniforms[b[i][1]])
                    if (c = b[i][0], l = c.type, j = c.value, "i" === l)
                        k.uniform1i(f, j);
                    else if ("f" === l)
                        k.uniform1f(f, j);
                    else if ("v2" === l)
                        k.uniform2f(f, j.x, j.y);
                    else if ("v3" === l)
                        k.uniform3f(f, j.x, j.y, j.z);
                    else if ("v4" === l)
                        k.uniform4f(f, j.x, j.y, j.z, j.w);
                    else if ("c" === l)
                        k.uniform3f(f, 
                        j.r, j.g, j.b);
                    else if ("iv1" === l)
                        k.uniform1iv(f, j);
                    else if ("iv" === l)
                        k.uniform3iv(f, j);
                    else if ("fv1" === l)
                        k.uniform1fv(f, j);
                    else if ("fv" === l)
                        k.uniform3fv(f, j);
                    else if ("v2v" === l) {
                        void 0 === c._array && (c._array = new Float32Array(2 * j.length));
                        l = 0;
                        for (m = j.length; l < m; l++)
                            n = 2 * l, c._array[n] = j[l].x, c._array[n + 1] = j[l].y;
                        k.uniform2fv(f, c._array)
                    } else if ("v3v" === l) {
                        void 0 === c._array && (c._array = new Float32Array(3 * j.length));
                        l = 0;
                        for (m = j.length; l < m; l++)
                            n = 3 * l, c._array[n] = j[l].x, c._array[n + 1] = j[l].y, c._array[n + 2] = j[l].z;
                        k.uniform3fv(f, c._array)
                    } else if ("v4v" === l) {
                        void 0 === c._array && (c._array = new Float32Array(4 * j.length));
                        l = 0;
                        for (m = j.length; l < m; l++)
                            n = 4 * l, c._array[n] = j[l].x, c._array[n + 1] = j[l].y, c._array[n + 2] = j[l].z, c._array[n + 3] = j[l].w;
                        k.uniform4fv(f, c._array)
                    } else if ("m4" === l)
                        void 0 === c._array && (c._array = new Float32Array(16)), j.flattenToArray(c._array), k.uniformMatrix4fv(f, !1, c._array);
                    else if ("m4v" === l) {
                        void 0 === c._array && (c._array = new Float32Array(16 * j.length));
                        l = 0;
                        for (m = j.length; l < m; l++)
                            j[l].flattenToArrayOffset(c._array, 
                            16 * l);
                        k.uniformMatrix4fv(f, !1, c._array)
                    } else if ("t" === l) {
                        if (n = j, j = w(), k.uniform1i(f, j), n)
                            if (n.image instanceof Array && 6 === n.image.length) {
                                if (c = n, f = j, 6 === c.image.length)
                                    if (c.needsUpdate) {
                                        c.image.__webglTextureCube || (c.image.__webglTextureCube = k.createTexture());
                                        k.activeTexture(k.TEXTURE0 + f);
                                        k.bindTexture(k.TEXTURE_CUBE_MAP, c.image.__webglTextureCube);
                                        k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL, c.flipY);
                                        f = c instanceof THREE.CompressedTexture;
                                        j = [];
                                        for (l = 0; 6 > l; l++)
                                            O.autoScaleCubemaps && !f ? (m = j, n = l, s = c.image[l], 
                                            u = Sc, s.width <= u && s.height <= u || (x = Math.max(s.width, s.height), t = Math.floor(s.width * u / x), u = Math.floor(s.height * u / x), x = document.createElement("canvas"), x.width = t, x.height = u, x.getContext("2d").drawImage(s, 0, 0, s.width, s.height, 0, 0, t, u), s = x), m[n] = s) : j[l] = c.image[l];
                                        l = j[0];
                                        m = 0 === (l.width & l.width - 1) && 0 === (l.height & l.height - 1);
                                        n = C(c.format);
                                        s = C(c.type);
                                        L(k.TEXTURE_CUBE_MAP, c, m);
                                        for (l = 0; 6 > l; l++)
                                            if (f) {
                                                u = j[l].mipmaps;
                                                x = 0;
                                                for (A = u.length; x < A; x++)
                                                    t = u[x], k.compressedTexImage2D(k.TEXTURE_CUBE_MAP_POSITIVE_X + l, x, n, 
                                                    t.width, t.height, 0, t.data)
                                            } else
                                                k.texImage2D(k.TEXTURE_CUBE_MAP_POSITIVE_X + l, 0, n, n, s, j[l]);
                                        c.generateMipmaps && m && k.generateMipmap(k.TEXTURE_CUBE_MAP);
                                        c.needsUpdate = !1;
                                        if (c.onUpdate)
                                            c.onUpdate()
                                    } else
                                        k.activeTexture(k.TEXTURE0 + f), k.bindTexture(k.TEXTURE_CUBE_MAP, c.image.__webglTextureCube)
                            } else
                                n instanceof THREE.WebGLRenderTargetCube ? (c = n, k.activeTexture(k.TEXTURE0 + j), k.bindTexture(k.TEXTURE_CUBE_MAP, c.__webglTexture)) : O.setTexture(n, j)
                    } else if ("tv" === l) {
                        void 0 === c._array && (c._array = []);
                        l = 0;
                        for (m = 
                        c.value.length; l < m; l++)
                            c._array[l] = w();
                        k.uniform1iv(f, c._array);
                        l = 0;
                        for (m = c.value.length; l < m; l++)
                            n = c.value[l], j = c._array[l], n && O.setTexture(n, j)
                    }
            if ((d instanceof THREE.ShaderMaterial || d instanceof THREE.MeshPhongMaterial || d.envMap) && null !== h.cameraPosition)
                b = a.matrixWorld.getPosition(), k.uniform3f(h.cameraPosition, b.x, b.y, b.z);
            (d instanceof THREE.MeshPhongMaterial || d instanceof THREE.MeshLambertMaterial || d instanceof THREE.ShaderMaterial || d.skinning) && null !== h.viewMatrix && k.uniformMatrix4fv(h.viewMatrix, 
            !1, a._viewMatrixArray)
        }
        k.uniformMatrix4fv(h.modelViewMatrix, !1, e._modelViewMatrix.elements);
        h.normalMatrix && k.uniformMatrix3fv(h.normalMatrix, !1, e._normalMatrix.elements);
        null !== h.modelMatrix && k.uniformMatrix4fv(h.modelMatrix, !1, e.matrixWorld.elements);
        return g
    }
    function w() {
        var a = ma;
        a >= Dc && console.warn("Trying to use " + a + " texture units while this GPU supports only " + Dc);
        ma += 1;
        return a
    }
    function s(a, b) {
        a._modelViewMatrix.multiply(b.matrixWorldInverse, a.matrixWorld);
        a._normalMatrix.getInverse(a._modelViewMatrix);
        a._normalMatrix.transpose()
    }
    function B(a, b, c, d) {
        a[b] = c.r * c.r * d;
        a[b + 1] = c.g * c.g * d;
        a[b + 2] = c.b * c.b * d
    }
    function v(a, b, c, d) {
        a[b] = c.r * d;
        a[b + 1] = c.g * d;
        a[b + 2] = c.b * d
    }
    function A(a, b, c) {
        db !== a && (a ? k.enable(k.POLYGON_OFFSET_FILL) : k.disable(k.POLYGON_OFFSET_FILL), db = a);
        if (a && ($a !== b || Ca !== c))
            k.polygonOffset(b, c), $a = b, Ca = c
    }
    function E(a) {
        for (var a = a.split("\n"), b = 0, c = a.length; b < c; b++)
            a[b] = b + 1 + ": " + a[b];
        return a.join("\n")
    }
    function x(a, b) {
        var c;
        "fragment" === a ? c = k.createShader(k.FRAGMENT_SHADER) : "vertex" === a && (c = k.createShader(k.VERTEX_SHADER));
        k.shaderSource(c, b);
        k.compileShader(c);
        return !k.getShaderParameter(c, k.COMPILE_STATUS) ? (console.error(k.getShaderInfoLog(c)), console.error(E(b)), null) : c
    }
    function L(a, b, c) {
        c ? (k.texParameteri(a, k.TEXTURE_WRAP_S, C(b.wrapS)), k.texParameteri(a, k.TEXTURE_WRAP_T, C(b.wrapT)), k.texParameteri(a, k.TEXTURE_MAG_FILTER, C(b.magFilter)), k.texParameteri(a, k.TEXTURE_MIN_FILTER, C(b.minFilter))) : (k.texParameteri(a, k.TEXTURE_WRAP_S, k.CLAMP_TO_EDGE), k.texParameteri(a, k.TEXTURE_WRAP_T, k.CLAMP_TO_EDGE), k.texParameteri(a, 
        k.TEXTURE_MAG_FILTER, G(b.magFilter)), k.texParameteri(a, k.TEXTURE_MIN_FILTER, G(b.minFilter)));
        if (Ob && b.type !== THREE.FloatType && (1 < b.anisotropy || b.__oldAnisotropy))
            k.texParameterf(a, Ob.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(b.anisotropy, rc)), b.__oldAnisotropy = b.anisotropy
    }
    function D(a, b) {
        k.bindRenderbuffer(k.RENDERBUFFER, a);
        b.depthBuffer && !b.stencilBuffer ? (k.renderbufferStorage(k.RENDERBUFFER, k.DEPTH_COMPONENT16, b.width, b.height), k.framebufferRenderbuffer(k.FRAMEBUFFER, k.DEPTH_ATTACHMENT, k.RENDERBUFFER, 
        a)) : b.depthBuffer && b.stencilBuffer ? (k.renderbufferStorage(k.RENDERBUFFER, k.DEPTH_STENCIL, b.width, b.height), k.framebufferRenderbuffer(k.FRAMEBUFFER, k.DEPTH_STENCIL_ATTACHMENT, k.RENDERBUFFER, a)) : k.renderbufferStorage(k.RENDERBUFFER, k.RGBA4, b.width, b.height)
    }
    function G(a) {
        return a === THREE.NearestFilter || a === THREE.NearestMipMapNearestFilter || a === THREE.NearestMipMapLinearFilter ? k.NEAREST : k.LINEAR
    }
    function C(a) {
        if (a === THREE.RepeatWrapping)
            return k.REPEAT;
        if (a === THREE.ClampToEdgeWrapping)
            return k.CLAMP_TO_EDGE;
        if (a === THREE.MirroredRepeatWrapping)
            return k.MIRRORED_REPEAT;
        if (a === THREE.NearestFilter)
            return k.NEAREST;
        if (a === THREE.NearestMipMapNearestFilter)
            return k.NEAREST_MIPMAP_NEAREST;
        if (a === THREE.NearestMipMapLinearFilter)
            return k.NEAREST_MIPMAP_LINEAR;
        if (a === THREE.LinearFilter)
            return k.LINEAR;
        if (a === THREE.LinearMipMapNearestFilter)
            return k.LINEAR_MIPMAP_NEAREST;
        if (a === THREE.LinearMipMapLinearFilter)
            return k.LINEAR_MIPMAP_LINEAR;
        if (a === THREE.UnsignedByteType)
            return k.UNSIGNED_BYTE;
        if (a === THREE.UnsignedShort4444Type)
            return k.UNSIGNED_SHORT_4_4_4_4;
        if (a === THREE.UnsignedShort5551Type)
            return k.UNSIGNED_SHORT_5_5_5_1;
        if (a === THREE.UnsignedShort565Type)
            return k.UNSIGNED_SHORT_5_6_5;
        if (a === THREE.ByteType)
            return k.BYTE;
        if (a === THREE.ShortType)
            return k.SHORT;
        if (a === THREE.UnsignedShortType)
            return k.UNSIGNED_SHORT;
        if (a === THREE.IntType)
            return k.INT;
        if (a === THREE.UnsignedIntType)
            return k.UNSIGNED_INT;
        if (a === THREE.FloatType)
            return k.FLOAT;
        if (a === THREE.AlphaFormat)
            return k.ALPHA;
        if (a === THREE.RGBFormat)
            return k.RGB;
        if (a === THREE.RGBAFormat)
            return k.RGBA;
        if (a === 
        THREE.LuminanceFormat)
            return k.LUMINANCE;
        if (a === THREE.LuminanceAlphaFormat)
            return k.LUMINANCE_ALPHA;
        if (a === THREE.AddEquation)
            return k.FUNC_ADD;
        if (a === THREE.SubtractEquation)
            return k.FUNC_SUBTRACT;
        if (a === THREE.ReverseSubtractEquation)
            return k.FUNC_REVERSE_SUBTRACT;
        if (a === THREE.ZeroFactor)
            return k.ZERO;
        if (a === THREE.OneFactor)
            return k.ONE;
        if (a === THREE.SrcColorFactor)
            return k.SRC_COLOR;
        if (a === THREE.OneMinusSrcColorFactor)
            return k.ONE_MINUS_SRC_COLOR;
        if (a === THREE.SrcAlphaFactor)
            return k.SRC_ALPHA;
        if (a === 
        THREE.OneMinusSrcAlphaFactor)
            return k.ONE_MINUS_SRC_ALPHA;
        if (a === THREE.DstAlphaFactor)
            return k.DST_ALPHA;
        if (a === THREE.OneMinusDstAlphaFactor)
            return k.ONE_MINUS_DST_ALPHA;
        if (a === THREE.DstColorFactor)
            return k.DST_COLOR;
        if (a === THREE.OneMinusDstColorFactor)
            return k.ONE_MINUS_DST_COLOR;
        if (a === THREE.SrcAlphaSaturateFactor)
            return k.SRC_ALPHA_SATURATE;
        if (void 0 !== wb) {
            if (a === THREE.RGB_S3TC_DXT1_Format)
                return wb.COMPRESSED_RGB_S3TC_DXT1_EXT;
            if (a === THREE.RGBA_S3TC_DXT1_Format)
                return wb.COMPRESSED_RGBA_S3TC_DXT1_EXT;
            if (a === THREE.RGBA_S3TC_DXT3_Format)
                return wb.COMPRESSED_RGBA_S3TC_DXT3_EXT;
            if (a === THREE.RGBA_S3TC_DXT5_Format)
                return wb.COMPRESSED_RGBA_S3TC_DXT5_EXT
        }
        return 0
    }
    console.log("THREE.WebGLRenderer", THREE.REVISION);
    var a = a || {}, N = void 0 !== a.canvas ? a.canvas : document.createElement("canvas"), J = void 0 !== a.precision ? a.precision : "highp", M = void 0 !== a.alpha ? a.alpha : !0, K = void 0 !== a.premultipliedAlpha ? a.premultipliedAlpha : !0, H = void 0 !== a.antialias ? a.antialias : !1, S = void 0 !== a.stencil ? a.stencil : !0, X = void 0 !== a.preserveDrawingBuffer ? 
    a.preserveDrawingBuffer : !1, Z = void 0 !== a.clearColor ? new THREE.Color(a.clearColor) : new THREE.Color(0), I = void 0 !== a.clearAlpha ? a.clearAlpha : 0, Y = void 0 !== a.maxLights ? a.maxLights : 4;
    this.domElement = N;
    this.context = null;
    this.autoUpdateScene = this.autoUpdateObjects = this.sortObjects = this.autoClearStencil = this.autoClearDepth = this.autoClearColor = this.autoClear = !0;
    this.shadowMapEnabled = this.physicallyBasedShading = this.gammaOutput = this.gammaInput = !1;
    this.shadowMapCullFrontFaces = this.shadowMapSoft = this.shadowMapAutoUpdate = 
    !0;
    this.shadowMapCascade = this.shadowMapDebug = !1;
    this.maxMorphTargets = 8;
    this.maxMorphNormals = 4;
    this.autoScaleCubemaps = !0;
    this.renderPluginsPre = [];
    this.renderPluginsPost = [];
    this.info = {memory: {programs: 0,geometries: 0,textures: 0},render: {calls: 0,vertices: 0,faces: 0,points: 0}};
    var O = this, na = [], qa = 0, ca = null, fa = null, R = -1, Q = null, ha = null, Ba = 0, ma = 0, ea = -1, wa = -1, va = -1, Qa = -1, ja = -1, xa = -1, Ia = -1, cb = -1, db = null, $a = null, Ca = null, Pa = null, Ka = 0, vb = 0, Aa = 0, ib = 0, eb = 0, Da = 0, lb = new THREE.Frustum, bb = new THREE.Matrix4, Nb = new THREE.Matrix4, 
    Ra = new THREE.Vector4, Na = new THREE.Vector3, mb = !0, qc = {ambient: [0, 0, 0],directional: {length: 0,colors: [],positions: []},point: {length: 0,colors: [],positions: [],distances: []},spot: {length: 0,colors: [],positions: [],distances: [],directions: [],angles: [],exponents: []},hemi: {length: 0,skyColors: [],groundColors: [],positions: []}}, k, Ob, wb;
    try {
        if (!(k = N.getContext("experimental-webgl", {alpha: M,premultipliedAlpha: K,antialias: H,stencil: S,preserveDrawingBuffer: X})))
            throw "Error creating WebGL context.";
    } catch (Rc) {
        console.error(Rc)
    }
    a = 
    k.getExtension("OES_texture_float");
    M = k.getExtension("OES_standard_derivatives");
    Ob = k.getExtension("EXT_texture_filter_anisotropic") || k.getExtension("MOZ_EXT_texture_filter_anisotropic") || k.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
    wb = k.getExtension("WEBGL_compressed_texture_s3tc") || k.getExtension("MOZ_WEBGL_compressed_texture_s3tc") || k.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
    a || console.log("THREE.WebGLRenderer: Float textures not supported.");
    M || console.log("THREE.WebGLRenderer: Standard derivatives not supported.");
    Ob || console.log("THREE.WebGLRenderer: Anisotropic texture filtering not supported.");
    wb || console.log("THREE.WebGLRenderer: S3TC compressed textures not supported.");
    k.clearColor(0, 0, 0, 1);
    k.clearDepth(1);
    k.clearStencil(0);
    k.enable(k.DEPTH_TEST);
    k.depthFunc(k.LEQUAL);
    k.frontFace(k.CCW);
    k.cullFace(k.BACK);
    k.enable(k.CULL_FACE);
    k.enable(k.BLEND);
    k.blendEquation(k.FUNC_ADD);
    k.blendFunc(k.SRC_ALPHA, k.ONE_MINUS_SRC_ALPHA);
    k.clearColor(Z.r, Z.g, Z.b, I);
    this.context = k;
    var Dc = k.getParameter(k.MAX_TEXTURE_IMAGE_UNITS), 
    M = k.getParameter(k.MAX_VERTEX_TEXTURE_IMAGE_UNITS);
    k.getParameter(k.MAX_TEXTURE_SIZE);
    var Sc = k.getParameter(k.MAX_CUBE_MAP_TEXTURE_SIZE), rc = Ob ? k.getParameter(Ob.MAX_TEXTURE_MAX_ANISOTROPY_EXT) : 0, ic = 0 < M, dc = ic && a;
    wb && k.getParameter(k.COMPRESSED_TEXTURE_FORMATS);
    this.getContext = function() {
        return k
    };
    this.supportsVertexTextures = function() {
        return ic
    };
    this.getMaxAnisotropy = function() {
        return rc
    };
    this.setSize = function(a, b) {
        N.width = a;
        N.height = b;
        this.setViewport(0, 0, N.width, N.height)
    };
    this.setViewport = function(a, 
    b, c, d) {
        Ka = void 0 !== a ? a : 0;
        vb = void 0 !== b ? b : 0;
        Aa = void 0 !== c ? c : N.width;
        ib = void 0 !== d ? d : N.height;
        k.viewport(Ka, vb, Aa, ib)
    };
    this.setScissor = function(a, b, c, d) {
        k.scissor(a, b, c, d)
    };
    this.enableScissorTest = function(a) {
        a ? k.enable(k.SCISSOR_TEST) : k.disable(k.SCISSOR_TEST)
    };
    this.setClearColorHex = function(a, b) {
        Z.setHex(a);
        I = b;
        k.clearColor(Z.r, Z.g, Z.b, I)
    };
    this.setClearColor = function(a, b) {
        Z.copy(a);
        I = b;
        k.clearColor(Z.r, Z.g, Z.b, I)
    };
    this.getClearColor = function() {
        return Z
    };
    this.getClearAlpha = function() {
        return I
    };
    this.clear = 
    function(a, b, c) {
        var d = 0;
        if (void 0 === a || a)
            d |= k.COLOR_BUFFER_BIT;
        if (void 0 === b || b)
            d |= k.DEPTH_BUFFER_BIT;
        if (void 0 === c || c)
            d |= k.STENCIL_BUFFER_BIT;
        k.clear(d)
    };
    this.clearTarget = function(a, b, c, d) {
        this.setRenderTarget(a);
        this.clear(b, c, d)
    };
    this.addPostPlugin = function(a) {
        a.init(this);
        this.renderPluginsPost.push(a)
    };
    this.addPrePlugin = function(a) {
        a.init(this);
        this.renderPluginsPre.push(a)
    };
    this.deallocateObject = function(a) {
        if (a.__webglInit)
            if (a.__webglInit = !1, delete a._modelViewMatrix, delete a._normalMatrix, 
            delete a._normalMatrixArray, delete a._modelViewMatrixArray, delete a._modelMatrixArray, a instanceof THREE.Mesh)
                for (var b in a.geometry.geometryGroups) {
                    var c = a.geometry.geometryGroups[b];
                    k.deleteBuffer(c.__webglVertexBuffer);
                    k.deleteBuffer(c.__webglNormalBuffer);
                    k.deleteBuffer(c.__webglTangentBuffer);
                    k.deleteBuffer(c.__webglColorBuffer);
                    k.deleteBuffer(c.__webglUVBuffer);
                    k.deleteBuffer(c.__webglUV2Buffer);
                    k.deleteBuffer(c.__webglSkinIndicesBuffer);
                    k.deleteBuffer(c.__webglSkinWeightsBuffer);
                    k.deleteBuffer(c.__webglFaceBuffer);
                    k.deleteBuffer(c.__webglLineBuffer);
                    var d = void 0, e = void 0;
                    if (c.numMorphTargets) {
                        d = 0;
                        for (e = c.numMorphTargets; d < e; d++)
                            k.deleteBuffer(c.__webglMorphTargetsBuffers[d])
                    }
                    if (c.numMorphNormals) {
                        d = 0;
                        for (e = c.numMorphNormals; d < e; d++)
                            k.deleteBuffer(c.__webglMorphNormalsBuffers[d])
                    }
                    if (c.__webglCustomAttributesList)
                        for (d in d = void 0, c.__webglCustomAttributesList)
                            k.deleteBuffer(c.__webglCustomAttributesList[d].buffer);
                    O.info.memory.geometries--
                }
            else
                a instanceof THREE.Ribbon ? (a = a.geometry, k.deleteBuffer(a.__webglVertexBuffer), 
                k.deleteBuffer(a.__webglColorBuffer), O.info.memory.geometries--) : a instanceof THREE.Line ? (a = a.geometry, k.deleteBuffer(a.__webglVertexBuffer), k.deleteBuffer(a.__webglColorBuffer), O.info.memory.geometries--) : a instanceof THREE.ParticleSystem && (a = a.geometry, k.deleteBuffer(a.__webglVertexBuffer), k.deleteBuffer(a.__webglColorBuffer), O.info.memory.geometries--)
    };
    this.deallocateTexture = function(a) {
        a.__webglInit && (a.__webglInit = !1, k.deleteTexture(a.__webglTexture), O.info.memory.textures--)
    };
    this.deallocateRenderTarget = 
    function(a) {
        if (a && a.__webglTexture)
            if (k.deleteTexture(a.__webglTexture), a instanceof THREE.WebGLRenderTargetCube)
                for (var b = 0; 6 > b; b++)
                    k.deleteFramebuffer(a.__webglFramebuffer[b]), k.deleteRenderbuffer(a.__webglRenderbuffer[b]);
            else
                k.deleteFramebuffer(a.__webglFramebuffer), k.deleteRenderbuffer(a.__webglRenderbuffer)
    };
    this.deallocateMaterial = function(a) {
        var b = a.program;
        if (b) {
            a.program = void 0;
            var c, d, e = !1, a = 0;
            for (c = na.length; a < c; a++)
                if (d = na[a], d.program === b) {
                    d.usedTimes--;
                    0 === d.usedTimes && (e = !0);
                    break
                }
            if (e) {
                e = 
                [];
                a = 0;
                for (c = na.length; a < c; a++)
                    d = na[a], d.program !== b && e.push(d);
                na = e;
                k.deleteProgram(b);
                O.info.memory.programs--
            }
        }
    };
    this.updateShadowMap = function(a, b) {
        ca = null;
        R = Q = cb = Ia = va = -1;
        mb = !0;
        wa = ea = -1;
        this.shadowMapPlugin.update(a, b)
    };
    this.renderBufferImmediate = function(a, b, c) {
        a.hasPositions && !a.__webglVertexBuffer && (a.__webglVertexBuffer = k.createBuffer());
        a.hasNormals && !a.__webglNormalBuffer && (a.__webglNormalBuffer = k.createBuffer());
        a.hasUvs && !a.__webglUvBuffer && (a.__webglUvBuffer = k.createBuffer());
        a.hasColors && 
        !a.__webglColorBuffer && (a.__webglColorBuffer = k.createBuffer());
        a.hasPositions && (k.bindBuffer(k.ARRAY_BUFFER, a.__webglVertexBuffer), k.bufferData(k.ARRAY_BUFFER, a.positionArray, k.DYNAMIC_DRAW), k.enableVertexAttribArray(b.attributes.position), k.vertexAttribPointer(b.attributes.position, 3, k.FLOAT, !1, 0, 0));
        if (a.hasNormals) {
            k.bindBuffer(k.ARRAY_BUFFER, a.__webglNormalBuffer);
            if (c.shading === THREE.FlatShading) {
                var d, e, f, g, h, i, j, l, n, m, o, p = 3 * a.count;
                for (o = 0; o < p; o += 9)
                    m = a.normalArray, d = m[o], e = m[o + 1], f = m[o + 2], 
                    g = m[o + 3], i = m[o + 4], l = m[o + 5], h = m[o + 6], j = m[o + 7], n = m[o + 8], d = (d + g + h) / 3, e = (e + i + j) / 3, f = (f + l + n) / 3, m[o] = d, m[o + 1] = e, m[o + 2] = f, m[o + 3] = d, m[o + 4] = e, m[o + 5] = f, m[o + 6] = d, m[o + 7] = e, m[o + 8] = f
            }
            k.bufferData(k.ARRAY_BUFFER, a.normalArray, k.DYNAMIC_DRAW);
            k.enableVertexAttribArray(b.attributes.normal);
            k.vertexAttribPointer(b.attributes.normal, 3, k.FLOAT, !1, 0, 0)
        }
        a.hasUvs && c.map && (k.bindBuffer(k.ARRAY_BUFFER, a.__webglUvBuffer), k.bufferData(k.ARRAY_BUFFER, a.uvArray, k.DYNAMIC_DRAW), k.enableVertexAttribArray(b.attributes.uv), k.vertexAttribPointer(b.attributes.uv, 
        2, k.FLOAT, !1, 0, 0));
        a.hasColors && c.vertexColors !== THREE.NoColors && (k.bindBuffer(k.ARRAY_BUFFER, a.__webglColorBuffer), k.bufferData(k.ARRAY_BUFFER, a.colorArray, k.DYNAMIC_DRAW), k.enableVertexAttribArray(b.attributes.color), k.vertexAttribPointer(b.attributes.color, 3, k.FLOAT, !1, 0, 0));
        k.drawArrays(k.TRIANGLES, 0, a.count);
        a.count = 0
    };
    this.renderBufferDirect = function(a, b, c, d, e, f) {
        if (!1 !== d.visible)
            if (c = u(a, b, c, d, f), a = c.attributes, b = !1, d = 16777215 * e.id + 2 * c.id + (d.wireframe ? 1 : 0), d !== Q && (Q = d, b = !0), f instanceof THREE.Mesh) {
                f = 
                e.offsets;
                1 < f.length && (b = !0);
                d = 0;
                for (c = f.length; d < c; ++d) {
                    var g = f[d].index;
                    if (b) {
                        var h = e.attributes.position, i = h.itemSize;
                        k.bindBuffer(k.ARRAY_BUFFER, h.buffer);
                        k.vertexAttribPointer(a.position, i, k.FLOAT, !1, 0, 4 * g * i);
                        h = e.attributes.normal;
                        0 <= a.normal && h && (i = h.itemSize, k.bindBuffer(k.ARRAY_BUFFER, h.buffer), k.vertexAttribPointer(a.normal, i, k.FLOAT, !1, 0, 4 * g * i));
                        h = e.attributes.uv;
                        0 <= a.uv && h && (h.buffer ? (i = h.itemSize, k.bindBuffer(k.ARRAY_BUFFER, h.buffer), k.vertexAttribPointer(a.uv, i, k.FLOAT, !1, 0, 4 * g * i), k.enableVertexAttribArray(a.uv)) : 
                        k.disableVertexAttribArray(a.uv));
                        i = e.attributes.color;
                        if (0 <= a.color && i) {
                            var j = i.itemSize;
                            k.bindBuffer(k.ARRAY_BUFFER, i.buffer);
                            k.vertexAttribPointer(a.color, j, k.FLOAT, !1, 0, 4 * g * j)
                        }
                        h = e.attributes.tangent;
                        0 <= a.tangent && h && (i = h.itemSize, k.bindBuffer(k.ARRAY_BUFFER, h.buffer), k.vertexAttribPointer(a.tangent, i, k.FLOAT, !1, 0, 4 * g * i));
                        k.bindBuffer(k.ELEMENT_ARRAY_BUFFER, e.attributes.index.buffer)
                    }
                    k.drawElements(k.TRIANGLES, f[d].count, k.UNSIGNED_SHORT, 2 * f[d].start);
                    O.info.render.calls++;
                    O.info.render.vertices += 
                    f[d].count;
                    O.info.render.faces += f[d].count / 3
                }
            } else
                f instanceof THREE.ParticleSystem && b && (h = e.attributes.position, i = h.itemSize, k.bindBuffer(k.ARRAY_BUFFER, h.buffer), k.vertexAttribPointer(a.position, i, k.FLOAT, !1, 0, 0), i = e.attributes.color, 0 <= a.color && i && (j = i.itemSize, k.bindBuffer(k.ARRAY_BUFFER, i.buffer), k.vertexAttribPointer(a.color, j, k.FLOAT, !1, 0, 0)), k.drawArrays(k.POINTS, 0, h.numItems / 3), O.info.render.calls++, O.info.render.points += h.numItems / 3)
    };
    this.renderBuffer = function(a, b, c, d, e, f) {
        if (!1 !== d.visible) {
            var g, 
            h, c = u(a, b, c, d, f), b = c.attributes, a = !1, c = 16777215 * e.id + 2 * c.id + (d.wireframe ? 1 : 0);
            c !== Q && (Q = c, a = !0);
            if (!d.morphTargets && 0 <= b.position)
                a && (k.bindBuffer(k.ARRAY_BUFFER, e.__webglVertexBuffer), k.vertexAttribPointer(b.position, 3, k.FLOAT, !1, 0, 0));
            else if (f.morphTargetBase) {
                c = d.program.attributes;
                -1 !== f.morphTargetBase ? (k.bindBuffer(k.ARRAY_BUFFER, e.__webglMorphTargetsBuffers[f.morphTargetBase]), k.vertexAttribPointer(c.position, 3, k.FLOAT, !1, 0, 0)) : 0 <= c.position && (k.bindBuffer(k.ARRAY_BUFFER, e.__webglVertexBuffer), 
                k.vertexAttribPointer(c.position, 3, k.FLOAT, !1, 0, 0));
                if (f.morphTargetForcedOrder.length) {
                    var i = 0;
                    h = f.morphTargetForcedOrder;
                    for (g = f.morphTargetInfluences; i < d.numSupportedMorphTargets && i < h.length; )
                        k.bindBuffer(k.ARRAY_BUFFER, e.__webglMorphTargetsBuffers[h[i]]), k.vertexAttribPointer(c["morphTarget" + i], 3, k.FLOAT, !1, 0, 0), d.morphNormals && (k.bindBuffer(k.ARRAY_BUFFER, e.__webglMorphNormalsBuffers[h[i]]), k.vertexAttribPointer(c["morphNormal" + i], 3, k.FLOAT, !1, 0, 0)), f.__webglMorphTargetInfluences[i] = g[h[i]], 
                        i++
                } else {
                    h = [];
                    g = f.morphTargetInfluences;
                    var l, m = g.length;
                    for (l = 0; l < m; l++)
                        i = g[l], 0 < i && h.push([l, i]);
                    h.length > d.numSupportedMorphTargets ? (h.sort(j), h.length = d.numSupportedMorphTargets) : h.length > d.numSupportedMorphNormals ? h.sort(j) : 0 === h.length && h.push([0, 0]);
                    for (i = 0; i < d.numSupportedMorphTargets; )
                        h[i] ? (l = h[i][0], k.bindBuffer(k.ARRAY_BUFFER, e.__webglMorphTargetsBuffers[l]), k.vertexAttribPointer(c["morphTarget" + i], 3, k.FLOAT, !1, 0, 0), d.morphNormals && (k.bindBuffer(k.ARRAY_BUFFER, e.__webglMorphNormalsBuffers[l]), 
                        k.vertexAttribPointer(c["morphNormal" + i], 3, k.FLOAT, !1, 0, 0)), f.__webglMorphTargetInfluences[i] = g[l]) : (k.vertexAttribPointer(c["morphTarget" + i], 3, k.FLOAT, !1, 0, 0), d.morphNormals && k.vertexAttribPointer(c["morphNormal" + i], 3, k.FLOAT, !1, 0, 0), f.__webglMorphTargetInfluences[i] = 0), i++
                }
                null !== d.program.uniforms.morphTargetInfluences && k.uniform1fv(d.program.uniforms.morphTargetInfluences, f.__webglMorphTargetInfluences)
            }
            if (a) {
                if (e.__webglCustomAttributesList) {
                    g = 0;
                    for (h = e.__webglCustomAttributesList.length; g < h; g++)
                        c = 
                        e.__webglCustomAttributesList[g], 0 <= b[c.buffer.belongsToAttribute] && (k.bindBuffer(k.ARRAY_BUFFER, c.buffer), k.vertexAttribPointer(b[c.buffer.belongsToAttribute], c.size, k.FLOAT, !1, 0, 0))
                }
                0 <= b.color && (k.bindBuffer(k.ARRAY_BUFFER, e.__webglColorBuffer), k.vertexAttribPointer(b.color, 3, k.FLOAT, !1, 0, 0));
                0 <= b.normal && (k.bindBuffer(k.ARRAY_BUFFER, e.__webglNormalBuffer), k.vertexAttribPointer(b.normal, 3, k.FLOAT, !1, 0, 0));
                0 <= b.tangent && (k.bindBuffer(k.ARRAY_BUFFER, e.__webglTangentBuffer), k.vertexAttribPointer(b.tangent, 
                4, k.FLOAT, !1, 0, 0));
                0 <= b.uv && (e.__webglUVBuffer ? (k.bindBuffer(k.ARRAY_BUFFER, e.__webglUVBuffer), k.vertexAttribPointer(b.uv, 2, k.FLOAT, !1, 0, 0), k.enableVertexAttribArray(b.uv)) : k.disableVertexAttribArray(b.uv));
                0 <= b.uv2 && (e.__webglUV2Buffer ? (k.bindBuffer(k.ARRAY_BUFFER, e.__webglUV2Buffer), k.vertexAttribPointer(b.uv2, 2, k.FLOAT, !1, 0, 0), k.enableVertexAttribArray(b.uv2)) : k.disableVertexAttribArray(b.uv2));
                d.skinning && (0 <= b.skinIndex && 0 <= b.skinWeight) && (k.bindBuffer(k.ARRAY_BUFFER, e.__webglSkinIndicesBuffer), 
                k.vertexAttribPointer(b.skinIndex, 4, k.FLOAT, !1, 0, 0), k.bindBuffer(k.ARRAY_BUFFER, e.__webglSkinWeightsBuffer), k.vertexAttribPointer(b.skinWeight, 4, k.FLOAT, !1, 0, 0))
            }
            f instanceof THREE.Mesh ? (d.wireframe ? (d = d.wireframeLinewidth, d !== Pa && (k.lineWidth(d), Pa = d), a && k.bindBuffer(k.ELEMENT_ARRAY_BUFFER, e.__webglLineBuffer), k.drawElements(k.LINES, e.__webglLineCount, k.UNSIGNED_SHORT, 0)) : (a && k.bindBuffer(k.ELEMENT_ARRAY_BUFFER, e.__webglFaceBuffer), k.drawElements(k.TRIANGLES, e.__webglFaceCount, k.UNSIGNED_SHORT, 0)), 
            O.info.render.calls++, O.info.render.vertices += e.__webglFaceCount, O.info.render.faces += e.__webglFaceCount / 3) : f instanceof THREE.Line ? (f = f.type === THREE.LineStrip ? k.LINE_STRIP : k.LINES, d = d.linewidth, d !== Pa && (k.lineWidth(d), Pa = d), k.drawArrays(f, 0, e.__webglLineCount), O.info.render.calls++) : f instanceof THREE.ParticleSystem ? (k.drawArrays(k.POINTS, 0, e.__webglParticleCount), O.info.render.calls++, O.info.render.points += e.__webglParticleCount) : f instanceof THREE.Ribbon && (k.drawArrays(k.TRIANGLE_STRIP, 0, e.__webglVertexCount), 
            O.info.render.calls++)
        }
    };
    this.render = function(a, b, c, d) {
        if (!1 === b instanceof THREE.Camera)
            console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");
        else {
            var e, f, g, h, j = a.__lights, o = a.fog;
            R = -1;
            mb = !0;
            this.autoUpdateScene && a.updateMatrixWorld();
            void 0 === b.parent && b.updateMatrixWorld();
            b._viewMatrixArray || (b._viewMatrixArray = new Float32Array(16));
            b._projectionMatrixArray || (b._projectionMatrixArray = new Float32Array(16));
            b.matrixWorldInverse.getInverse(b.matrixWorld);
            b.matrixWorldInverse.flattenToArray(b._viewMatrixArray);
            b.projectionMatrix.flattenToArray(b._projectionMatrixArray);
            bb.multiply(b.projectionMatrix, b.matrixWorldInverse);
            lb.setFromMatrix(bb);
            this.autoUpdateObjects && this.initWebGLObjects(a);
            l(this.renderPluginsPre, a, b);
            O.info.render.calls = 0;
            O.info.render.vertices = 0;
            O.info.render.faces = 0;
            O.info.render.points = 0;
            this.setRenderTarget(c);
            (this.autoClear || d) && this.clear(this.autoClearColor, this.autoClearDepth, this.autoClearStencil);
            h = a.__webglObjects;
            d = 0;
            for (e = h.length; d < e; d++)
                if (f = h[d], g = f.object, f.render = !1, 
                g.visible && (!(g instanceof THREE.Mesh || g instanceof THREE.ParticleSystem) || !g.frustumCulled || lb.contains(g))) {
                    s(g, b);
                    var p = f, q = p.object, r = p.buffer, t = void 0, t = q.material;
                    t instanceof THREE.MeshFaceMaterial ? (t = r.materialIndex, 0 <= t && (t = q.geometry.materials[t], t.transparent ? (p.transparent = t, p.opaque = null) : (p.opaque = t, p.transparent = null))) : t && (t.transparent ? (p.transparent = t, p.opaque = null) : (p.opaque = t, p.transparent = null));
                    f.render = !0;
                    !0 === this.sortObjects && (null !== g.renderDepth ? f.z = g.renderDepth : (Ra.copy(g.matrixWorld.getPosition()), 
                    bb.multiplyVector3(Ra), f.z = Ra.z))
                }
            this.sortObjects && h.sort(i);
            h = a.__webglObjectsImmediate;
            d = 0;
            for (e = h.length; d < e; d++)
                f = h[d], g = f.object, g.visible && (s(g, b), g = f.object.material, g.transparent ? (f.transparent = g, f.opaque = null) : (f.opaque = g, f.transparent = null));
            a.overrideMaterial ? (d = a.overrideMaterial, this.setBlending(d.blending, d.blendEquation, d.blendSrc, d.blendDst), this.setDepthTest(d.depthTest), this.setDepthWrite(d.depthWrite), A(d.polygonOffset, d.polygonOffsetFactor, d.polygonOffsetUnits), n(a.__webglObjects, 
            !1, "", b, j, o, !0, d), m(a.__webglObjectsImmediate, "", b, j, o, !1, d)) : (this.setBlending(THREE.NormalBlending), n(a.__webglObjects, !0, "opaque", b, j, o, !1), m(a.__webglObjectsImmediate, "opaque", b, j, o, !1), n(a.__webglObjects, !1, "transparent", b, j, o, !0), m(a.__webglObjectsImmediate, "transparent", b, j, o, !0));
            l(this.renderPluginsPost, a, b);
            c && (c.generateMipmaps && c.minFilter !== THREE.NearestFilter && c.minFilter !== THREE.LinearFilter) && (c instanceof THREE.WebGLRenderTargetCube ? (k.bindTexture(k.TEXTURE_CUBE_MAP, c.__webglTexture), 
            k.generateMipmap(k.TEXTURE_CUBE_MAP), k.bindTexture(k.TEXTURE_CUBE_MAP, null)) : (k.bindTexture(k.TEXTURE_2D, c.__webglTexture), k.generateMipmap(k.TEXTURE_2D), k.bindTexture(k.TEXTURE_2D, null)));
            this.setDepthTest(!0);
            this.setDepthWrite(!0)
        }
    };
    this.renderImmediateObject = function(a, b, c, d, e) {
        var f = u(a, b, c, d, e);
        Q = -1;
        O.setMaterialFaces(d);
        e.immediateRenderCallback ? e.immediateRenderCallback(f, k, lb) : e.render(function(a) {
            O.renderBufferImmediate(a, f, d)
        })
    };
    this.initWebGLObjects = function(a) {
        a.__webglObjects || (a.__webglObjects = 
        [], a.__webglObjectsImmediate = [], a.__webglSprites = [], a.__webglFlares = []);
        for (; a.__objectsAdded.length; ) {
            var i = a.__objectsAdded[0], j = a, l = void 0, m = void 0, n = void 0;
            if (!i.__webglInit)
                if (i.__webglInit = !0, i._modelViewMatrix = new THREE.Matrix4, i._normalMatrix = new THREE.Matrix3, i instanceof THREE.Mesh)
                    if (m = i.geometry, m instanceof THREE.Geometry) {
                        if (void 0 === m.geometryGroups) {
                            var s = m, u = void 0, v = void 0, x = void 0, w = void 0, A = void 0, B = void 0, C = void 0, E = {}, D = s.morphTargets.length, G = s.morphNormals.length;
                            s.geometryGroups = 
                            {};
                            u = 0;
                            for (v = s.faces.length; u < v; u++)
                                x = s.faces[u], w = x.materialIndex, B = void 0 !== w ? w : -1, void 0 === E[B] && (E[B] = {hash: B,counter: 0}), C = E[B].hash + "_" + E[B].counter, void 0 === s.geometryGroups[C] && (s.geometryGroups[C] = {faces3: [],faces4: [],materialIndex: w,vertices: 0,numMorphTargets: D,numMorphNormals: G}), A = x instanceof THREE.Face3 ? 3 : 4, 65535 < s.geometryGroups[C].vertices + A && (E[B].counter += 1, C = E[B].hash + "_" + E[B].counter, void 0 === s.geometryGroups[C] && (s.geometryGroups[C] = {faces3: [],faces4: [],materialIndex: w,vertices: 0,
                                    numMorphTargets: D,numMorphNormals: G})), x instanceof THREE.Face3 ? s.geometryGroups[C].faces3.push(u) : s.geometryGroups[C].faces4.push(u), s.geometryGroups[C].vertices += A;
                            s.geometryGroupsList = [];
                            var J = void 0;
                            for (J in s.geometryGroups)
                                s.geometryGroups[J].id = Ba++, s.geometryGroupsList.push(s.geometryGroups[J])
                        }
                        for (l in m.geometryGroups)
                            if (n = m.geometryGroups[l], !n.__webglVertexBuffer) {
                                var H = n;
                                H.__webglVertexBuffer = k.createBuffer();
                                H.__webglNormalBuffer = k.createBuffer();
                                H.__webglTangentBuffer = k.createBuffer();
                                H.__webglColorBuffer = k.createBuffer();
                                H.__webglUVBuffer = k.createBuffer();
                                H.__webglUV2Buffer = k.createBuffer();
                                H.__webglSkinIndicesBuffer = k.createBuffer();
                                H.__webglSkinWeightsBuffer = k.createBuffer();
                                H.__webglFaceBuffer = k.createBuffer();
                                H.__webglLineBuffer = k.createBuffer();
                                var K = void 0, L = void 0;
                                if (H.numMorphTargets) {
                                    H.__webglMorphTargetsBuffers = [];
                                    K = 0;
                                    for (L = H.numMorphTargets; K < L; K++)
                                        H.__webglMorphTargetsBuffers.push(k.createBuffer())
                                }
                                if (H.numMorphNormals) {
                                    H.__webglMorphNormalsBuffers = [];
                                    K = 0;
                                    for (L = H.numMorphNormals; K < 
                                    L; K++)
                                        H.__webglMorphNormalsBuffers.push(k.createBuffer())
                                }
                                O.info.memory.geometries++;
                                var I = n, M = i, R = M.geometry, N = I.faces3, ca = I.faces4, Q = 3 * N.length + 4 * ca.length, S = 1 * N.length + 2 * ca.length, fa = 3 * N.length + 4 * ca.length, Z = c(M, I), Y = e(Z), X = d(Z), ea = Z.vertexColors ? Z.vertexColors : !1;
                                I.__vertexArray = new Float32Array(3 * Q);
                                X && (I.__normalArray = new Float32Array(3 * Q));
                                R.hasTangents && (I.__tangentArray = new Float32Array(4 * Q));
                                ea && (I.__colorArray = new Float32Array(3 * Q));
                                if (Y) {
                                    if (0 < R.faceUvs.length || 0 < R.faceVertexUvs.length)
                                        I.__uvArray = 
                                        new Float32Array(2 * Q);
                                    if (1 < R.faceUvs.length || 1 < R.faceVertexUvs.length)
                                        I.__uv2Array = new Float32Array(2 * Q)
                                }
                                M.geometry.skinWeights.length && M.geometry.skinIndices.length && (I.__skinIndexArray = new Float32Array(4 * Q), I.__skinWeightArray = new Float32Array(4 * Q));
                                I.__faceArray = new Uint16Array(3 * S);
                                I.__lineArray = new Uint16Array(2 * fa);
                                var ha = void 0, ma = void 0;
                                if (I.numMorphTargets) {
                                    I.__morphTargetsArrays = [];
                                    ha = 0;
                                    for (ma = I.numMorphTargets; ha < ma; ha++)
                                        I.__morphTargetsArrays.push(new Float32Array(3 * Q))
                                }
                                if (I.numMorphNormals) {
                                    I.__morphNormalsArrays = 
                                    [];
                                    ha = 0;
                                    for (ma = I.numMorphNormals; ha < ma; ha++)
                                        I.__morphNormalsArrays.push(new Float32Array(3 * Q))
                                }
                                I.__webglFaceCount = 3 * S;
                                I.__webglLineCount = 2 * fa;
                                if (Z.attributes) {
                                    void 0 === I.__webglCustomAttributesList && (I.__webglCustomAttributesList = []);
                                    var na = void 0;
                                    for (na in Z.attributes) {
                                        var wa = Z.attributes[na], ja = {}, va;
                                        for (va in wa)
                                            ja[va] = wa[va];
                                        if (!ja.__webglInitialized || ja.createUniqueBuffers) {
                                            ja.__webglInitialized = !0;
                                            var qa = 1;
                                            "v2" === ja.type ? qa = 2 : "v3" === ja.type ? qa = 3 : "v4" === ja.type ? qa = 4 : "c" === ja.type && (qa = 3);
                                            ja.size = 
                                            qa;
                                            ja.array = new Float32Array(Q * qa);
                                            ja.buffer = k.createBuffer();
                                            ja.buffer.belongsToAttribute = na;
                                            wa.needsUpdate = !0;
                                            ja.__original = wa
                                        }
                                        I.__webglCustomAttributesList.push(ja)
                                    }
                                }
                                I.__inittedArrays = !0;
                                m.verticesNeedUpdate = !0;
                                m.morphTargetsNeedUpdate = !0;
                                m.elementsNeedUpdate = !0;
                                m.uvsNeedUpdate = !0;
                                m.normalsNeedUpdate = !0;
                                m.tangentsNeedUpdate = !0;
                                m.colorsNeedUpdate = !0
                            }
                    } else
                        m instanceof THREE.BufferGeometry && f(m);
                else if (i instanceof THREE.Ribbon) {
                    if (m = i.geometry, !m.__webglVertexBuffer) {
                        var xa = m;
                        xa.__webglVertexBuffer = 
                        k.createBuffer();
                        xa.__webglColorBuffer = k.createBuffer();
                        O.info.memory.geometries++;
                        var Ia = m, Da = Ia.vertices.length;
                        Ia.__vertexArray = new Float32Array(3 * Da);
                        Ia.__colorArray = new Float32Array(3 * Da);
                        Ia.__webglVertexCount = Da;
                        m.verticesNeedUpdate = !0;
                        m.colorsNeedUpdate = !0
                    }
                } else if (i instanceof THREE.Line) {
                    if (m = i.geometry, !m.__webglVertexBuffer) {
                        var Ka = m;
                        Ka.__webglVertexBuffer = k.createBuffer();
                        Ka.__webglColorBuffer = k.createBuffer();
                        O.info.memory.geometries++;
                        var Aa = m, Pa = i, Qa = Aa.vertices.length;
                        Aa.__vertexArray = 
                        new Float32Array(3 * Qa);
                        Aa.__colorArray = new Float32Array(3 * Qa);
                        Aa.__webglLineCount = Qa;
                        b(Aa, Pa);
                        m.verticesNeedUpdate = !0;
                        m.colorsNeedUpdate = !0
                    }
                } else if (i instanceof THREE.ParticleSystem && (m = i.geometry, !m.__webglVertexBuffer))
                    if (m instanceof THREE.Geometry) {
                        var Ra = m;
                        Ra.__webglVertexBuffer = k.createBuffer();
                        Ra.__webglColorBuffer = k.createBuffer();
                        O.info.memory.geometries++;
                        var Na = m, cb = i, $a = Na.vertices.length;
                        Na.__vertexArray = new Float32Array(3 * $a);
                        Na.__colorArray = new Float32Array(3 * $a);
                        Na.__sortArray = [];
                        Na.__webglParticleCount = $a;
                        b(Na, cb);
                        m.verticesNeedUpdate = !0;
                        m.colorsNeedUpdate = !0
                    } else
                        m instanceof THREE.BufferGeometry && f(m);
            if (!i.__webglActive) {
                if (i instanceof THREE.Mesh)
                    if (m = i.geometry, m instanceof THREE.BufferGeometry)
                        q(j.__webglObjects, m, i);
                    else
                        for (l in m.geometryGroups)
                            n = m.geometryGroups[l], q(j.__webglObjects, n, i);
                else
                    i instanceof THREE.Ribbon || i instanceof THREE.Line || i instanceof THREE.ParticleSystem ? (m = i.geometry, q(j.__webglObjects, m, i)) : i instanceof THREE.ImmediateRenderObject || i.immediateRenderCallback ? 
                    j.__webglObjectsImmediate.push({object: i,opaque: null,transparent: null}) : i instanceof THREE.Sprite ? j.__webglSprites.push(i) : i instanceof THREE.LensFlare && j.__webglFlares.push(i);
                i.__webglActive = !0
            }
            a.__objectsAdded.splice(0, 1)
        }
        for (; a.__objectsRemoved.length; ) {
            var Ca = a.__objectsRemoved[0], db = a;
            Ca instanceof THREE.Mesh || Ca instanceof THREE.ParticleSystem || Ca instanceof THREE.Ribbon || Ca instanceof THREE.Line ? r(db.__webglObjects, Ca) : Ca instanceof THREE.Sprite ? t(db.__webglSprites, Ca) : Ca instanceof THREE.LensFlare ? 
            t(db.__webglFlares, Ca) : (Ca instanceof THREE.ImmediateRenderObject || Ca.immediateRenderCallback) && r(db.__webglObjectsImmediate, Ca);
            Ca.__webglActive = !1;
            a.__objectsRemoved.splice(0, 1)
        }
        for (var ib = 0, mb = a.__webglObjects.length; ib < mb; ib++) {
            var tb = a.__webglObjects[ib].object, ga = tb.geometry, eb = void 0, bb = void 0, fb = void 0;
            if (tb instanceof THREE.Mesh)
                if (ga instanceof THREE.BufferGeometry)
                    (ga.verticesNeedUpdate || ga.elementsNeedUpdate || ga.uvsNeedUpdate || ga.normalsNeedUpdate || ga.colorsNeedUpdate || ga.tangentsNeedUpdate) && 
                    h(ga, k.DYNAMIC_DRAW, !ga.dynamic), ga.verticesNeedUpdate = !1, ga.elementsNeedUpdate = !1, ga.uvsNeedUpdate = !1, ga.normalsNeedUpdate = !1, ga.colorsNeedUpdate = !1, ga.tangentsNeedUpdate = !1;
                else {
                    for (var lb = 0, vb = ga.geometryGroupsList.length; lb < vb; lb++)
                        if (eb = ga.geometryGroupsList[lb], fb = c(tb, eb), bb = fb.attributes && p(fb), ga.verticesNeedUpdate || ga.morphTargetsNeedUpdate || ga.elementsNeedUpdate || ga.uvsNeedUpdate || ga.normalsNeedUpdate || ga.colorsNeedUpdate || ga.tangentsNeedUpdate || bb) {
                            var la = eb, wb = tb, ob = k.DYNAMIC_DRAW, Nb = 
                            !ga.dynamic, fc = fb;
                            if (la.__inittedArrays) {
                                var Ob = d(fc), dc = fc.vertexColors ? fc.vertexColors : !1, ic = e(fc), Fc = Ob === THREE.SmoothShading, F = void 0, W = void 0, Wb = void 0, P = void 0, kc = void 0, Xb = void 0, ub = void 0, Gc = void 0, Pb = void 0, lc = void 0, mc = void 0, T = void 0, U = void 0, V = void 0, ka = void 0, xb = void 0, yb = void 0, zb = void 0, sc = void 0, Ab = void 0, Bb = void 0, Cb = void 0, tc = void 0, Db = void 0, Eb = void 0, Fb = void 0, uc = void 0, Gb = void 0, Hb = void 0, Ib = void 0, vc = void 0, Jb = void 0, Kb = void 0, Lb = void 0, wc = void 0, sa = void 0, qc = void 0, Yb = void 0, 
                                nc = void 0, oc = void 0, Ua = void 0, rc = void 0, Sa = void 0, Ta = void 0, Zb = void 0, Qb = void 0, La = 0, Oa = 0, Rb = 0, Sb = 0, pb = 0, Ya = 0, ua = 0, ab = 0, Ma = 0, ba = 0, ia = 0, z = 0, ta = void 0, Va = la.__vertexArray, xc = la.__uvArray, yc = la.__uv2Array, qb = la.__normalArray, Ea = la.__tangentArray, Wa = la.__colorArray, Fa = la.__skinIndexArray, Ga = la.__skinWeightArray, Uc = la.__morphTargetsArrays, Vc = la.__morphNormalsArrays, Wc = la.__webglCustomAttributesList, y = void 0, Mb = la.__faceArray, jb = la.__lineArray, gb = wb.geometry, Dc = gb.elementsNeedUpdate, ad = gb.uvsNeedUpdate, 
                                Rc = gb.normalsNeedUpdate, Sc = gb.tangentsNeedUpdate, hd = gb.colorsNeedUpdate, id = gb.morphTargetsNeedUpdate, gc = gb.vertices, oa = la.faces3, pa = la.faces4, Za = gb.faces, Xc = gb.faceVertexUvs[0], Yc = gb.faceVertexUvs[1], hc = gb.skinIndices, $b = gb.skinWeights, ac = gb.morphTargets, Hc = gb.morphNormals;
                                if (gb.verticesNeedUpdate) {
                                    F = 0;
                                    for (W = oa.length; F < W; F++)
                                        P = Za[oa[F]], T = gc[P.a], U = gc[P.b], V = gc[P.c], Va[Oa] = T.x, Va[Oa + 1] = T.y, Va[Oa + 2] = T.z, Va[Oa + 3] = U.x, Va[Oa + 4] = U.y, Va[Oa + 5] = U.z, Va[Oa + 6] = V.x, Va[Oa + 7] = V.y, Va[Oa + 8] = V.z, Oa += 9;
                                    F = 0;
                                    for (W = 
                                    pa.length; F < W; F++)
                                        P = Za[pa[F]], T = gc[P.a], U = gc[P.b], V = gc[P.c], ka = gc[P.d], Va[Oa] = T.x, Va[Oa + 1] = T.y, Va[Oa + 2] = T.z, Va[Oa + 3] = U.x, Va[Oa + 4] = U.y, Va[Oa + 5] = U.z, Va[Oa + 6] = V.x, Va[Oa + 7] = V.y, Va[Oa + 8] = V.z, Va[Oa + 9] = ka.x, Va[Oa + 10] = ka.y, Va[Oa + 11] = ka.z, Oa += 12;
                                    k.bindBuffer(k.ARRAY_BUFFER, la.__webglVertexBuffer);
                                    k.bufferData(k.ARRAY_BUFFER, Va, ob)
                                }
                                if (id) {
                                    Ua = 0;
                                    for (rc = ac.length; Ua < rc; Ua++) {
                                        F = ia = 0;
                                        for (W = oa.length; F < W; F++)
                                            Zb = oa[F], P = Za[Zb], T = ac[Ua].vertices[P.a], U = ac[Ua].vertices[P.b], V = ac[Ua].vertices[P.c], Sa = Uc[Ua], Sa[ia] = T.x, 
                                            Sa[ia + 1] = T.y, Sa[ia + 2] = T.z, Sa[ia + 3] = U.x, Sa[ia + 4] = U.y, Sa[ia + 5] = U.z, Sa[ia + 6] = V.x, Sa[ia + 7] = V.y, Sa[ia + 8] = V.z, fc.morphNormals && (Fc ? (Qb = Hc[Ua].vertexNormals[Zb], Ab = Qb.a, Bb = Qb.b, Cb = Qb.c) : Cb = Bb = Ab = Hc[Ua].faceNormals[Zb], Ta = Vc[Ua], Ta[ia] = Ab.x, Ta[ia + 1] = Ab.y, Ta[ia + 2] = Ab.z, Ta[ia + 3] = Bb.x, Ta[ia + 4] = Bb.y, Ta[ia + 5] = Bb.z, Ta[ia + 6] = Cb.x, Ta[ia + 7] = Cb.y, Ta[ia + 8] = Cb.z), ia += 9;
                                        F = 0;
                                        for (W = pa.length; F < W; F++)
                                            Zb = pa[F], P = Za[Zb], T = ac[Ua].vertices[P.a], U = ac[Ua].vertices[P.b], V = ac[Ua].vertices[P.c], ka = ac[Ua].vertices[P.d], Sa = Uc[Ua], 
                                            Sa[ia] = T.x, Sa[ia + 1] = T.y, Sa[ia + 2] = T.z, Sa[ia + 3] = U.x, Sa[ia + 4] = U.y, Sa[ia + 5] = U.z, Sa[ia + 6] = V.x, Sa[ia + 7] = V.y, Sa[ia + 8] = V.z, Sa[ia + 9] = ka.x, Sa[ia + 10] = ka.y, Sa[ia + 11] = ka.z, fc.morphNormals && (Fc ? (Qb = Hc[Ua].vertexNormals[Zb], Ab = Qb.a, Bb = Qb.b, Cb = Qb.c, tc = Qb.d) : tc = Cb = Bb = Ab = Hc[Ua].faceNormals[Zb], Ta = Vc[Ua], Ta[ia] = Ab.x, Ta[ia + 1] = Ab.y, Ta[ia + 2] = Ab.z, Ta[ia + 3] = Bb.x, Ta[ia + 4] = Bb.y, Ta[ia + 5] = Bb.z, Ta[ia + 6] = Cb.x, Ta[ia + 7] = Cb.y, Ta[ia + 8] = Cb.z, Ta[ia + 9] = tc.x, Ta[ia + 10] = tc.y, Ta[ia + 11] = tc.z), ia += 12;
                                        k.bindBuffer(k.ARRAY_BUFFER, la.__webglMorphTargetsBuffers[Ua]);
                                        k.bufferData(k.ARRAY_BUFFER, Uc[Ua], ob);
                                        fc.morphNormals && (k.bindBuffer(k.ARRAY_BUFFER, la.__webglMorphNormalsBuffers[Ua]), k.bufferData(k.ARRAY_BUFFER, Vc[Ua], ob))
                                    }
                                }
                                if ($b.length) {
                                    F = 0;
                                    for (W = oa.length; F < W; F++)
                                        P = Za[oa[F]], Gb = $b[P.a], Hb = $b[P.b], Ib = $b[P.c], Ga[ba] = Gb.x, Ga[ba + 1] = Gb.y, Ga[ba + 2] = Gb.z, Ga[ba + 3] = Gb.w, Ga[ba + 4] = Hb.x, Ga[ba + 5] = Hb.y, Ga[ba + 6] = Hb.z, Ga[ba + 7] = Hb.w, Ga[ba + 8] = Ib.x, Ga[ba + 9] = Ib.y, Ga[ba + 10] = Ib.z, Ga[ba + 11] = Ib.w, Jb = hc[P.a], Kb = hc[P.b], Lb = hc[P.c], Fa[ba] = Jb.x, Fa[ba + 1] = Jb.y, Fa[ba + 2] = Jb.z, Fa[ba + 3] = Jb.w, 
                                        Fa[ba + 4] = Kb.x, Fa[ba + 5] = Kb.y, Fa[ba + 6] = Kb.z, Fa[ba + 7] = Kb.w, Fa[ba + 8] = Lb.x, Fa[ba + 9] = Lb.y, Fa[ba + 10] = Lb.z, Fa[ba + 11] = Lb.w, ba += 12;
                                    F = 0;
                                    for (W = pa.length; F < W; F++)
                                        P = Za[pa[F]], Gb = $b[P.a], Hb = $b[P.b], Ib = $b[P.c], vc = $b[P.d], Ga[ba] = Gb.x, Ga[ba + 1] = Gb.y, Ga[ba + 2] = Gb.z, Ga[ba + 3] = Gb.w, Ga[ba + 4] = Hb.x, Ga[ba + 5] = Hb.y, Ga[ba + 6] = Hb.z, Ga[ba + 7] = Hb.w, Ga[ba + 8] = Ib.x, Ga[ba + 9] = Ib.y, Ga[ba + 10] = Ib.z, Ga[ba + 11] = Ib.w, Ga[ba + 12] = vc.x, Ga[ba + 13] = vc.y, Ga[ba + 14] = vc.z, Ga[ba + 15] = vc.w, Jb = hc[P.a], Kb = hc[P.b], Lb = hc[P.c], wc = hc[P.d], Fa[ba] = Jb.x, Fa[ba + 1] = Jb.y, 
                                        Fa[ba + 2] = Jb.z, Fa[ba + 3] = Jb.w, Fa[ba + 4] = Kb.x, Fa[ba + 5] = Kb.y, Fa[ba + 6] = Kb.z, Fa[ba + 7] = Kb.w, Fa[ba + 8] = Lb.x, Fa[ba + 9] = Lb.y, Fa[ba + 10] = Lb.z, Fa[ba + 11] = Lb.w, Fa[ba + 12] = wc.x, Fa[ba + 13] = wc.y, Fa[ba + 14] = wc.z, Fa[ba + 15] = wc.w, ba += 16;
                                    0 < ba && (k.bindBuffer(k.ARRAY_BUFFER, la.__webglSkinIndicesBuffer), k.bufferData(k.ARRAY_BUFFER, Fa, ob), k.bindBuffer(k.ARRAY_BUFFER, la.__webglSkinWeightsBuffer), k.bufferData(k.ARRAY_BUFFER, Ga, ob))
                                }
                                if (hd && dc) {
                                    F = 0;
                                    for (W = oa.length; F < W; F++)
                                        P = Za[oa[F]], ub = P.vertexColors, Gc = P.color, 3 === ub.length && dc === 
                                        THREE.VertexColors ? (Db = ub[0], Eb = ub[1], Fb = ub[2]) : Fb = Eb = Db = Gc, Wa[Ma] = Db.r, Wa[Ma + 1] = Db.g, Wa[Ma + 2] = Db.b, Wa[Ma + 3] = Eb.r, Wa[Ma + 4] = Eb.g, Wa[Ma + 5] = Eb.b, Wa[Ma + 6] = Fb.r, Wa[Ma + 7] = Fb.g, Wa[Ma + 8] = Fb.b, Ma += 9;
                                    F = 0;
                                    for (W = pa.length; F < W; F++)
                                        P = Za[pa[F]], ub = P.vertexColors, Gc = P.color, 4 === ub.length && dc === THREE.VertexColors ? (Db = ub[0], Eb = ub[1], Fb = ub[2], uc = ub[3]) : uc = Fb = Eb = Db = Gc, Wa[Ma] = Db.r, Wa[Ma + 1] = Db.g, Wa[Ma + 2] = Db.b, Wa[Ma + 3] = Eb.r, Wa[Ma + 4] = Eb.g, Wa[Ma + 5] = Eb.b, Wa[Ma + 6] = Fb.r, Wa[Ma + 7] = Fb.g, Wa[Ma + 8] = Fb.b, Wa[Ma + 9] = uc.r, Wa[Ma + 10] = uc.g, 
                                        Wa[Ma + 11] = uc.b, Ma += 12;
                                    0 < Ma && (k.bindBuffer(k.ARRAY_BUFFER, la.__webglColorBuffer), k.bufferData(k.ARRAY_BUFFER, Wa, ob))
                                }
                                if (Sc && gb.hasTangents) {
                                    F = 0;
                                    for (W = oa.length; F < W; F++)
                                        P = Za[oa[F]], Pb = P.vertexTangents, xb = Pb[0], yb = Pb[1], zb = Pb[2], Ea[ua] = xb.x, Ea[ua + 1] = xb.y, Ea[ua + 2] = xb.z, Ea[ua + 3] = xb.w, Ea[ua + 4] = yb.x, Ea[ua + 5] = yb.y, Ea[ua + 6] = yb.z, Ea[ua + 7] = yb.w, Ea[ua + 8] = zb.x, Ea[ua + 9] = zb.y, Ea[ua + 10] = zb.z, Ea[ua + 11] = zb.w, ua += 12;
                                    F = 0;
                                    for (W = pa.length; F < W; F++)
                                        P = Za[pa[F]], Pb = P.vertexTangents, xb = Pb[0], yb = Pb[1], zb = Pb[2], sc = Pb[3], Ea[ua] = 
                                        xb.x, Ea[ua + 1] = xb.y, Ea[ua + 2] = xb.z, Ea[ua + 3] = xb.w, Ea[ua + 4] = yb.x, Ea[ua + 5] = yb.y, Ea[ua + 6] = yb.z, Ea[ua + 7] = yb.w, Ea[ua + 8] = zb.x, Ea[ua + 9] = zb.y, Ea[ua + 10] = zb.z, Ea[ua + 11] = zb.w, Ea[ua + 12] = sc.x, Ea[ua + 13] = sc.y, Ea[ua + 14] = sc.z, Ea[ua + 15] = sc.w, ua += 16;
                                    k.bindBuffer(k.ARRAY_BUFFER, la.__webglTangentBuffer);
                                    k.bufferData(k.ARRAY_BUFFER, Ea, ob)
                                }
                                if (Rc && Ob) {
                                    F = 0;
                                    for (W = oa.length; F < W; F++)
                                        if (P = Za[oa[F]], kc = P.vertexNormals, Xb = P.normal, 3 === kc.length && Fc)
                                            for (sa = 0; 3 > sa; sa++)
                                                Yb = kc[sa], qb[Ya] = Yb.x, qb[Ya + 1] = Yb.y, qb[Ya + 2] = Yb.z, Ya += 3;
                                        else
                                            for (sa = 
                                            0; 3 > sa; sa++)
                                                qb[Ya] = Xb.x, qb[Ya + 1] = Xb.y, qb[Ya + 2] = Xb.z, Ya += 3;
                                    F = 0;
                                    for (W = pa.length; F < W; F++)
                                        if (P = Za[pa[F]], kc = P.vertexNormals, Xb = P.normal, 4 === kc.length && Fc)
                                            for (sa = 0; 4 > sa; sa++)
                                                Yb = kc[sa], qb[Ya] = Yb.x, qb[Ya + 1] = Yb.y, qb[Ya + 2] = Yb.z, Ya += 3;
                                        else
                                            for (sa = 0; 4 > sa; sa++)
                                                qb[Ya] = Xb.x, qb[Ya + 1] = Xb.y, qb[Ya + 2] = Xb.z, Ya += 3;
                                    k.bindBuffer(k.ARRAY_BUFFER, la.__webglNormalBuffer);
                                    k.bufferData(k.ARRAY_BUFFER, qb, ob)
                                }
                                if (ad && Xc && ic) {
                                    F = 0;
                                    for (W = oa.length; F < W; F++)
                                        if (Wb = oa[F], lc = Xc[Wb], void 0 !== lc)
                                            for (sa = 0; 3 > sa; sa++)
                                                nc = lc[sa], xc[Rb] = nc.u, xc[Rb + 
                                                1] = nc.v, Rb += 2;
                                    F = 0;
                                    for (W = pa.length; F < W; F++)
                                        if (Wb = pa[F], lc = Xc[Wb], void 0 !== lc)
                                            for (sa = 0; 4 > sa; sa++)
                                                nc = lc[sa], xc[Rb] = nc.u, xc[Rb + 1] = nc.v, Rb += 2;
                                    0 < Rb && (k.bindBuffer(k.ARRAY_BUFFER, la.__webglUVBuffer), k.bufferData(k.ARRAY_BUFFER, xc, ob))
                                }
                                if (ad && Yc && ic) {
                                    F = 0;
                                    for (W = oa.length; F < W; F++)
                                        if (Wb = oa[F], mc = Yc[Wb], void 0 !== mc)
                                            for (sa = 0; 3 > sa; sa++)
                                                oc = mc[sa], yc[Sb] = oc.u, yc[Sb + 1] = oc.v, Sb += 2;
                                    F = 0;
                                    for (W = pa.length; F < W; F++)
                                        if (Wb = pa[F], mc = Yc[Wb], void 0 !== mc)
                                            for (sa = 0; 4 > sa; sa++)
                                                oc = mc[sa], yc[Sb] = oc.u, yc[Sb + 1] = oc.v, Sb += 2;
                                    0 < Sb && (k.bindBuffer(k.ARRAY_BUFFER, 
                                    la.__webglUV2Buffer), k.bufferData(k.ARRAY_BUFFER, yc, ob))
                                }
                                if (Dc) {
                                    F = 0;
                                    for (W = oa.length; F < W; F++)
                                        Mb[pb] = La, Mb[pb + 1] = La + 1, Mb[pb + 2] = La + 2, pb += 3, jb[ab] = La, jb[ab + 1] = La + 1, jb[ab + 2] = La, jb[ab + 3] = La + 2, jb[ab + 4] = La + 1, jb[ab + 5] = La + 2, ab += 6, La += 3;
                                    F = 0;
                                    for (W = pa.length; F < W; F++)
                                        Mb[pb] = La, Mb[pb + 1] = La + 1, Mb[pb + 2] = La + 3, Mb[pb + 3] = La + 1, Mb[pb + 4] = La + 2, Mb[pb + 5] = La + 3, pb += 6, jb[ab] = La, jb[ab + 1] = La + 1, jb[ab + 2] = La, jb[ab + 3] = La + 3, jb[ab + 4] = La + 1, jb[ab + 5] = La + 2, jb[ab + 6] = La + 2, jb[ab + 7] = La + 3, ab += 8, La += 4;
                                    k.bindBuffer(k.ELEMENT_ARRAY_BUFFER, la.__webglFaceBuffer);
                                    k.bufferData(k.ELEMENT_ARRAY_BUFFER, Mb, ob);
                                    k.bindBuffer(k.ELEMENT_ARRAY_BUFFER, la.__webglLineBuffer);
                                    k.bufferData(k.ELEMENT_ARRAY_BUFFER, jb, ob)
                                }
                                if (Wc) {
                                    sa = 0;
                                    for (qc = Wc.length; sa < qc; sa++)
                                        if (y = Wc[sa], y.__original.needsUpdate) {
                                            z = 0;
                                            if (1 === y.size)
                                                if (void 0 === y.boundTo || "vertices" === y.boundTo) {
                                                    F = 0;
                                                    for (W = oa.length; F < W; F++)
                                                        P = Za[oa[F]], y.array[z] = y.value[P.a], y.array[z + 1] = y.value[P.b], y.array[z + 2] = y.value[P.c], z += 3;
                                                    F = 0;
                                                    for (W = pa.length; F < W; F++)
                                                        P = Za[pa[F]], y.array[z] = y.value[P.a], y.array[z + 1] = y.value[P.b], y.array[z + 
                                                        2] = y.value[P.c], y.array[z + 3] = y.value[P.d], z += 4
                                                } else {
                                                    if ("faces" === y.boundTo) {
                                                        F = 0;
                                                        for (W = oa.length; F < W; F++)
                                                            ta = y.value[oa[F]], y.array[z] = ta, y.array[z + 1] = ta, y.array[z + 2] = ta, z += 3;
                                                        F = 0;
                                                        for (W = pa.length; F < W; F++)
                                                            ta = y.value[pa[F]], y.array[z] = ta, y.array[z + 1] = ta, y.array[z + 2] = ta, y.array[z + 3] = ta, z += 4
                                                    }
                                                }
                                            else if (2 === y.size)
                                                if (void 0 === y.boundTo || "vertices" === y.boundTo) {
                                                    F = 0;
                                                    for (W = oa.length; F < W; F++)
                                                        P = Za[oa[F]], T = y.value[P.a], U = y.value[P.b], V = y.value[P.c], y.array[z] = T.x, y.array[z + 1] = T.y, y.array[z + 2] = U.x, y.array[z + 3] = U.y, 
                                                        y.array[z + 4] = V.x, y.array[z + 5] = V.y, z += 6;
                                                    F = 0;
                                                    for (W = pa.length; F < W; F++)
                                                        P = Za[pa[F]], T = y.value[P.a], U = y.value[P.b], V = y.value[P.c], ka = y.value[P.d], y.array[z] = T.x, y.array[z + 1] = T.y, y.array[z + 2] = U.x, y.array[z + 3] = U.y, y.array[z + 4] = V.x, y.array[z + 5] = V.y, y.array[z + 6] = ka.x, y.array[z + 7] = ka.y, z += 8
                                                } else {
                                                    if ("faces" === y.boundTo) {
                                                        F = 0;
                                                        for (W = oa.length; F < W; F++)
                                                            V = U = T = ta = y.value[oa[F]], y.array[z] = T.x, y.array[z + 1] = T.y, y.array[z + 2] = U.x, y.array[z + 3] = U.y, y.array[z + 4] = V.x, y.array[z + 5] = V.y, z += 6;
                                                        F = 0;
                                                        for (W = pa.length; F < W; F++)
                                                            ka = V = U = 
                                                            T = ta = y.value[pa[F]], y.array[z] = T.x, y.array[z + 1] = T.y, y.array[z + 2] = U.x, y.array[z + 3] = U.y, y.array[z + 4] = V.x, y.array[z + 5] = V.y, y.array[z + 6] = ka.x, y.array[z + 7] = ka.y, z += 8
                                                    }
                                                }
                                            else if (3 === y.size) {
                                                var aa;
                                                aa = "c" === y.type ? ["r", "g", "b"] : ["x", "y", "z"];
                                                if (void 0 === y.boundTo || "vertices" === y.boundTo) {
                                                    F = 0;
                                                    for (W = oa.length; F < W; F++)
                                                        P = Za[oa[F]], T = y.value[P.a], U = y.value[P.b], V = y.value[P.c], y.array[z] = T[aa[0]], y.array[z + 1] = T[aa[1]], y.array[z + 2] = T[aa[2]], y.array[z + 3] = U[aa[0]], y.array[z + 4] = U[aa[1]], y.array[z + 5] = U[aa[2]], y.array[z + 
                                                        6] = V[aa[0]], y.array[z + 7] = V[aa[1]], y.array[z + 8] = V[aa[2]], z += 9;
                                                    F = 0;
                                                    for (W = pa.length; F < W; F++)
                                                        P = Za[pa[F]], T = y.value[P.a], U = y.value[P.b], V = y.value[P.c], ka = y.value[P.d], y.array[z] = T[aa[0]], y.array[z + 1] = T[aa[1]], y.array[z + 2] = T[aa[2]], y.array[z + 3] = U[aa[0]], y.array[z + 4] = U[aa[1]], y.array[z + 5] = U[aa[2]], y.array[z + 6] = V[aa[0]], y.array[z + 7] = V[aa[1]], y.array[z + 8] = V[aa[2]], y.array[z + 9] = ka[aa[0]], y.array[z + 10] = ka[aa[1]], y.array[z + 11] = ka[aa[2]], z += 12
                                                } else if ("faces" === y.boundTo) {
                                                    F = 0;
                                                    for (W = oa.length; F < W; F++)
                                                        V = U = T = ta = 
                                                        y.value[oa[F]], y.array[z] = T[aa[0]], y.array[z + 1] = T[aa[1]], y.array[z + 2] = T[aa[2]], y.array[z + 3] = U[aa[0]], y.array[z + 4] = U[aa[1]], y.array[z + 5] = U[aa[2]], y.array[z + 6] = V[aa[0]], y.array[z + 7] = V[aa[1]], y.array[z + 8] = V[aa[2]], z += 9;
                                                    F = 0;
                                                    for (W = pa.length; F < W; F++)
                                                        ka = V = U = T = ta = y.value[pa[F]], y.array[z] = T[aa[0]], y.array[z + 1] = T[aa[1]], y.array[z + 2] = T[aa[2]], y.array[z + 3] = U[aa[0]], y.array[z + 4] = U[aa[1]], y.array[z + 5] = U[aa[2]], y.array[z + 6] = V[aa[0]], y.array[z + 7] = V[aa[1]], y.array[z + 8] = V[aa[2]], y.array[z + 9] = ka[aa[0]], y.array[z + 10] = 
                                                        ka[aa[1]], y.array[z + 11] = ka[aa[2]], z += 12
                                                } else if ("faceVertices" === y.boundTo) {
                                                    F = 0;
                                                    for (W = oa.length; F < W; F++)
                                                        ta = y.value[oa[F]], T = ta[0], U = ta[1], V = ta[2], y.array[z] = T[aa[0]], y.array[z + 1] = T[aa[1]], y.array[z + 2] = T[aa[2]], y.array[z + 3] = U[aa[0]], y.array[z + 4] = U[aa[1]], y.array[z + 5] = U[aa[2]], y.array[z + 6] = V[aa[0]], y.array[z + 7] = V[aa[1]], y.array[z + 8] = V[aa[2]], z += 9;
                                                    F = 0;
                                                    for (W = pa.length; F < W; F++)
                                                        ta = y.value[pa[F]], T = ta[0], U = ta[1], V = ta[2], ka = ta[3], y.array[z] = T[aa[0]], y.array[z + 1] = T[aa[1]], y.array[z + 2] = T[aa[2]], y.array[z + 3] = 
                                                        U[aa[0]], y.array[z + 4] = U[aa[1]], y.array[z + 5] = U[aa[2]], y.array[z + 6] = V[aa[0]], y.array[z + 7] = V[aa[1]], y.array[z + 8] = V[aa[2]], y.array[z + 9] = ka[aa[0]], y.array[z + 10] = ka[aa[1]], y.array[z + 11] = ka[aa[2]], z += 12
                                                }
                                            } else if (4 === y.size)
                                                if (void 0 === y.boundTo || "vertices" === y.boundTo) {
                                                    F = 0;
                                                    for (W = oa.length; F < W; F++)
                                                        P = Za[oa[F]], T = y.value[P.a], U = y.value[P.b], V = y.value[P.c], y.array[z] = T.x, y.array[z + 1] = T.y, y.array[z + 2] = T.z, y.array[z + 3] = T.w, y.array[z + 4] = U.x, y.array[z + 5] = U.y, y.array[z + 6] = U.z, y.array[z + 7] = U.w, y.array[z + 8] = V.x, y.array[z + 
                                                        9] = V.y, y.array[z + 10] = V.z, y.array[z + 11] = V.w, z += 12;
                                                    F = 0;
                                                    for (W = pa.length; F < W; F++)
                                                        P = Za[pa[F]], T = y.value[P.a], U = y.value[P.b], V = y.value[P.c], ka = y.value[P.d], y.array[z] = T.x, y.array[z + 1] = T.y, y.array[z + 2] = T.z, y.array[z + 3] = T.w, y.array[z + 4] = U.x, y.array[z + 5] = U.y, y.array[z + 6] = U.z, y.array[z + 7] = U.w, y.array[z + 8] = V.x, y.array[z + 9] = V.y, y.array[z + 10] = V.z, y.array[z + 11] = V.w, y.array[z + 12] = ka.x, y.array[z + 13] = ka.y, y.array[z + 14] = ka.z, y.array[z + 15] = ka.w, z += 16
                                                } else if ("faces" === y.boundTo) {
                                                    F = 0;
                                                    for (W = oa.length; F < W; F++)
                                                        V = U = T = ta = 
                                                        y.value[oa[F]], y.array[z] = T.x, y.array[z + 1] = T.y, y.array[z + 2] = T.z, y.array[z + 3] = T.w, y.array[z + 4] = U.x, y.array[z + 5] = U.y, y.array[z + 6] = U.z, y.array[z + 7] = U.w, y.array[z + 8] = V.x, y.array[z + 9] = V.y, y.array[z + 10] = V.z, y.array[z + 11] = V.w, z += 12;
                                                    F = 0;
                                                    for (W = pa.length; F < W; F++)
                                                        ka = V = U = T = ta = y.value[pa[F]], y.array[z] = T.x, y.array[z + 1] = T.y, y.array[z + 2] = T.z, y.array[z + 3] = T.w, y.array[z + 4] = U.x, y.array[z + 5] = U.y, y.array[z + 6] = U.z, y.array[z + 7] = U.w, y.array[z + 8] = V.x, y.array[z + 9] = V.y, y.array[z + 10] = V.z, y.array[z + 11] = V.w, y.array[z + 12] = ka.x, 
                                                        y.array[z + 13] = ka.y, y.array[z + 14] = ka.z, y.array[z + 15] = ka.w, z += 16
                                                } else if ("faceVertices" === y.boundTo) {
                                                    F = 0;
                                                    for (W = oa.length; F < W; F++)
                                                        ta = y.value[oa[F]], T = ta[0], U = ta[1], V = ta[2], y.array[z] = T.x, y.array[z + 1] = T.y, y.array[z + 2] = T.z, y.array[z + 3] = T.w, y.array[z + 4] = U.x, y.array[z + 5] = U.y, y.array[z + 6] = U.z, y.array[z + 7] = U.w, y.array[z + 8] = V.x, y.array[z + 9] = V.y, y.array[z + 10] = V.z, y.array[z + 11] = V.w, z += 12;
                                                    F = 0;
                                                    for (W = pa.length; F < W; F++)
                                                        ta = y.value[pa[F]], T = ta[0], U = ta[1], V = ta[2], ka = ta[3], y.array[z] = T.x, y.array[z + 1] = T.y, y.array[z + 2] = 
                                                        T.z, y.array[z + 3] = T.w, y.array[z + 4] = U.x, y.array[z + 5] = U.y, y.array[z + 6] = U.z, y.array[z + 7] = U.w, y.array[z + 8] = V.x, y.array[z + 9] = V.y, y.array[z + 10] = V.z, y.array[z + 11] = V.w, y.array[z + 12] = ka.x, y.array[z + 13] = ka.y, y.array[z + 14] = ka.z, y.array[z + 15] = ka.w, z += 16
                                                }
                                            k.bindBuffer(k.ARRAY_BUFFER, y.buffer);
                                            k.bufferData(k.ARRAY_BUFFER, y.array, ob)
                                        }
                                }
                                Nb && (delete la.__inittedArrays, delete la.__colorArray, delete la.__normalArray, delete la.__tangentArray, delete la.__uvArray, delete la.__uv2Array, delete la.__faceArray, delete la.__vertexArray, 
                                delete la.__lineArray, delete la.__skinIndexArray, delete la.__skinWeightArray)
                            }
                        }
                    ga.verticesNeedUpdate = !1;
                    ga.morphTargetsNeedUpdate = !1;
                    ga.elementsNeedUpdate = !1;
                    ga.uvsNeedUpdate = !1;
                    ga.normalsNeedUpdate = !1;
                    ga.colorsNeedUpdate = !1;
                    ga.tangentsNeedUpdate = !1;
                    fb.attributes && o(fb)
                }
            else if (tb instanceof THREE.Ribbon) {
                if (ga.verticesNeedUpdate || ga.colorsNeedUpdate) {
                    var bc = ga, bd = k.DYNAMIC_DRAW, zc = void 0, Ac = void 0, Ic = void 0, cc = void 0, Jc = void 0, cd = bc.vertices, dd = bc.colors, jd = cd.length, kd = dd.length, Kc = bc.__vertexArray, 
                    Lc = bc.__colorArray, ld = bc.colorsNeedUpdate;
                    if (bc.verticesNeedUpdate) {
                        for (zc = 0; zc < jd; zc++)
                            Ic = cd[zc], cc = 3 * zc, Kc[cc] = Ic.x, Kc[cc + 1] = Ic.y, Kc[cc + 2] = Ic.z;
                        k.bindBuffer(k.ARRAY_BUFFER, bc.__webglVertexBuffer);
                        k.bufferData(k.ARRAY_BUFFER, Kc, bd)
                    }
                    if (ld) {
                        for (Ac = 0; Ac < kd; Ac++)
                            Jc = dd[Ac], cc = 3 * Ac, Lc[cc] = Jc.r, Lc[cc + 1] = Jc.g, Lc[cc + 2] = Jc.b;
                        k.bindBuffer(k.ARRAY_BUFFER, bc.__webglColorBuffer);
                        k.bufferData(k.ARRAY_BUFFER, Lc, bd)
                    }
                }
                ga.verticesNeedUpdate = !1;
                ga.colorsNeedUpdate = !1
            } else if (tb instanceof THREE.Line) {
                fb = c(tb, eb);
                bb = 
                fb.attributes && p(fb);
                if (ga.verticesNeedUpdate || ga.colorsNeedUpdate || bb) {
                    var Tb = ga, Zc = k.DYNAMIC_DRAW, Bc = void 0, Cc = void 0, Mc = void 0, Ha = void 0, Nc = void 0, ed = Tb.vertices, fd = Tb.colors, md = ed.length, nd = fd.length, Oc = Tb.__vertexArray, Pc = Tb.__colorArray, od = Tb.colorsNeedUpdate, $c = Tb.__webglCustomAttributesList, Qc = void 0, gd = void 0, Xa = void 0, pc = void 0, hb = void 0, za = void 0;
                    if (Tb.verticesNeedUpdate) {
                        for (Bc = 0; Bc < md; Bc++)
                            Mc = ed[Bc], Ha = 3 * Bc, Oc[Ha] = Mc.x, Oc[Ha + 1] = Mc.y, Oc[Ha + 2] = Mc.z;
                        k.bindBuffer(k.ARRAY_BUFFER, Tb.__webglVertexBuffer);
                        k.bufferData(k.ARRAY_BUFFER, Oc, Zc)
                    }
                    if (od) {
                        for (Cc = 0; Cc < nd; Cc++)
                            Nc = fd[Cc], Ha = 3 * Cc, Pc[Ha] = Nc.r, Pc[Ha + 1] = Nc.g, Pc[Ha + 2] = Nc.b;
                        k.bindBuffer(k.ARRAY_BUFFER, Tb.__webglColorBuffer);
                        k.bufferData(k.ARRAY_BUFFER, Pc, Zc)
                    }
                    if ($c) {
                        Qc = 0;
                        for (gd = $c.length; Qc < gd; Qc++)
                            if (za = $c[Qc], za.needsUpdate && (void 0 === za.boundTo || "vertices" === za.boundTo)) {
                                Ha = 0;
                                pc = za.value.length;
                                if (1 === za.size)
                                    for (Xa = 0; Xa < pc; Xa++)
                                        za.array[Xa] = za.value[Xa];
                                else if (2 === za.size)
                                    for (Xa = 0; Xa < pc; Xa++)
                                        hb = za.value[Xa], za.array[Ha] = hb.x, za.array[Ha + 1] = hb.y, 
                                        Ha += 2;
                                else if (3 === za.size)
                                    if ("c" === za.type)
                                        for (Xa = 0; Xa < pc; Xa++)
                                            hb = za.value[Xa], za.array[Ha] = hb.r, za.array[Ha + 1] = hb.g, za.array[Ha + 2] = hb.b, Ha += 3;
                                    else
                                        for (Xa = 0; Xa < pc; Xa++)
                                            hb = za.value[Xa], za.array[Ha] = hb.x, za.array[Ha + 1] = hb.y, za.array[Ha + 2] = hb.z, Ha += 3;
                                else if (4 === za.size)
                                    for (Xa = 0; Xa < pc; Xa++)
                                        hb = za.value[Xa], za.array[Ha] = hb.x, za.array[Ha + 1] = hb.y, za.array[Ha + 2] = hb.z, za.array[Ha + 3] = hb.w, Ha += 4;
                                k.bindBuffer(k.ARRAY_BUFFER, za.buffer);
                                k.bufferData(k.ARRAY_BUFFER, za.array, Zc)
                            }
                    }
                }
                ga.verticesNeedUpdate = !1;
                ga.colorsNeedUpdate = 
                !1;
                fb.attributes && o(fb)
            } else
                tb instanceof THREE.ParticleSystem && (ga instanceof THREE.BufferGeometry ? ((ga.verticesNeedUpdate || ga.colorsNeedUpdate) && h(ga, k.DYNAMIC_DRAW, !ga.dynamic), ga.verticesNeedUpdate = !1, ga.colorsNeedUpdate = !1) : (fb = c(tb, eb), bb = fb.attributes && p(fb), (ga.verticesNeedUpdate || ga.colorsNeedUpdate || tb.sortParticles || bb) && g(ga, k.DYNAMIC_DRAW, tb), ga.verticesNeedUpdate = !1, ga.colorsNeedUpdate = !1, fb.attributes && o(fb)))
        }
    };
    this.initMaterial = function(a, b, c, d) {
        var e, f, g, h, i, j, l, m, n;
        a instanceof 
        THREE.MeshDepthMaterial ? n = "depth" : a instanceof THREE.MeshNormalMaterial ? n = "normal" : a instanceof THREE.MeshBasicMaterial ? n = "basic" : a instanceof THREE.MeshLambertMaterial ? n = "lambert" : a instanceof THREE.MeshPhongMaterial ? n = "phong" : a instanceof THREE.LineBasicMaterial ? n = "basic" : a instanceof THREE.ParticleBasicMaterial && (n = "particle_basic");
        if (n) {
            var o = THREE.ShaderLib[n];
            a.uniforms = THREE.UniformsUtils.clone(o.uniforms);
            a.vertexShader = o.vertexShader;
            a.fragmentShader = o.fragmentShader
        }
        var p, q;
        p = h = f = e = o = 0;
        for (g = b.length; p < g; p++)
            q = b[p], q.onlyShadow || (q instanceof THREE.DirectionalLight && h++, q instanceof THREE.PointLight && f++, q instanceof THREE.SpotLight && e++, q instanceof THREE.HemisphereLight && o++);
        f + e + h + o <= Y ? (p = h, g = e) : (p = Math.ceil(Y * h / (f + h)), g = f = Y - p, o = p);
        e = p;
        h = o;
        o = m = 0;
        for (p = b.length; o < p; o++)
            q = b[o], q.castShadow && (q instanceof THREE.SpotLight && m++, q instanceof THREE.DirectionalLight && !q.shadowCascade && m++);
        dc && d && d.useVertexTexture ? l = 1024 : (b = k.getParameter(k.MAX_VERTEX_UNIFORM_VECTORS), b = Math.floor((b - 
        20) / 4), void 0 !== d && d instanceof THREE.SkinnedMesh && (b = Math.min(d.bones.length, b), b < d.bones.length && console.warn("WebGLRenderer: too many bones - " + d.bones.length + ", this GPU supports just " + b + " (try OpenGL instead of ANGLE)")), l = b);
        var r;
        a: {
            q = a.fragmentShader;
            p = a.vertexShader;
            var o = a.uniforms, b = a.attributes, c = {map: !!a.map,envMap: !!a.envMap,lightMap: !!a.lightMap,bumpMap: !!a.bumpMap,normalMap: !!a.normalMap,specularMap: !!a.specularMap,vertexColors: a.vertexColors,fog: c,useFog: a.fog,sizeAttenuation: a.sizeAttenuation,
                skinning: a.skinning,maxBones: l,useVertexTexture: dc && d && d.useVertexTexture,boneTextureWidth: d && d.boneTextureWidth,boneTextureHeight: d && d.boneTextureHeight,morphTargets: a.morphTargets,morphNormals: a.morphNormals,maxMorphTargets: this.maxMorphTargets,maxMorphNormals: this.maxMorphNormals,maxDirLights: e,maxPointLights: f,maxSpotLights: g,maxHemiLights: h,maxShadows: m,shadowMapEnabled: this.shadowMapEnabled && d.receiveShadow,shadowMapSoft: this.shadowMapSoft,shadowMapDebug: this.shadowMapDebug,shadowMapCascade: this.shadowMapCascade,
                alphaTest: a.alphaTest,metal: a.metal,perPixel: a.perPixel,wrapAround: a.wrapAround,doubleSided: a.side === THREE.DoubleSide,flipSided: a.side === THREE.BackSide}, s, d = [];
            n ? d.push(n) : (d.push(q), d.push(p));
            for (s in c)
                d.push(s), d.push(c[s]);
            n = d.join();
            s = 0;
            for (d = na.length; s < d; s++)
                if (e = na[s], e.code === n) {
                    e.usedTimes++;
                    r = e.program;
                    break a
                }
            s = k.createProgram();
            d = ["precision " + J + " float;", ic ? "#define VERTEX_TEXTURES" : "", O.gammaInput ? "#define GAMMA_INPUT" : "", O.gammaOutput ? "#define GAMMA_OUTPUT" : "", O.physicallyBasedShading ? 
                "#define PHYSICALLY_BASED_SHADING" : "", "#define MAX_DIR_LIGHTS " + c.maxDirLights, "#define MAX_POINT_LIGHTS " + c.maxPointLights, "#define MAX_SPOT_LIGHTS " + c.maxSpotLights, "#define MAX_HEMI_LIGHTS " + c.maxHemiLights, "#define MAX_SHADOWS " + c.maxShadows, "#define MAX_BONES " + c.maxBones, c.map ? "#define USE_MAP" : "", c.envMap ? "#define USE_ENVMAP" : "", c.lightMap ? "#define USE_LIGHTMAP" : "", c.bumpMap ? "#define USE_BUMPMAP" : "", c.normalMap ? "#define USE_NORMALMAP" : "", c.specularMap ? "#define USE_SPECULARMAP" : "", c.vertexColors ? 
                "#define USE_COLOR" : "", c.skinning ? "#define USE_SKINNING" : "", c.useVertexTexture ? "#define BONE_TEXTURE" : "", c.boneTextureWidth ? "#define N_BONE_PIXEL_X " + c.boneTextureWidth.toFixed(1) : "", c.boneTextureHeight ? "#define N_BONE_PIXEL_Y " + c.boneTextureHeight.toFixed(1) : "", c.morphTargets ? "#define USE_MORPHTARGETS" : "", c.morphNormals ? "#define USE_MORPHNORMALS" : "", c.perPixel ? "#define PHONG_PER_PIXEL" : "", c.wrapAround ? "#define WRAP_AROUND" : "", c.doubleSided ? "#define DOUBLE_SIDED" : "", c.flipSided ? "#define FLIP_SIDED" : 
                "", c.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", c.shadowMapSoft ? "#define SHADOWMAP_SOFT" : "", c.shadowMapDebug ? "#define SHADOWMAP_DEBUG" : "", c.shadowMapCascade ? "#define SHADOWMAP_CASCADE" : "", c.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "", "uniform mat4 modelMatrix;\nuniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\nuniform mat4 viewMatrix;\nuniform mat3 normalMatrix;\nuniform vec3 cameraPosition;\nattribute vec3 position;\nattribute vec3 normal;\nattribute vec2 uv;\nattribute vec2 uv2;\n#ifdef USE_COLOR\nattribute vec3 color;\n#endif\n#ifdef USE_MORPHTARGETS\nattribute vec3 morphTarget0;\nattribute vec3 morphTarget1;\nattribute vec3 morphTarget2;\nattribute vec3 morphTarget3;\n#ifdef USE_MORPHNORMALS\nattribute vec3 morphNormal0;\nattribute vec3 morphNormal1;\nattribute vec3 morphNormal2;\nattribute vec3 morphNormal3;\n#else\nattribute vec3 morphTarget4;\nattribute vec3 morphTarget5;\nattribute vec3 morphTarget6;\nattribute vec3 morphTarget7;\n#endif\n#endif\n#ifdef USE_SKINNING\nattribute vec4 skinIndex;\nattribute vec4 skinWeight;\n#endif\n"].join("\n");
            e = ["precision " + J + " float;", c.bumpMap || c.normalMap ? "#extension GL_OES_standard_derivatives : enable" : "", "#define MAX_DIR_LIGHTS " + c.maxDirLights, "#define MAX_POINT_LIGHTS " + c.maxPointLights, "#define MAX_SPOT_LIGHTS " + c.maxSpotLights, "#define MAX_HEMI_LIGHTS " + c.maxHemiLights, "#define MAX_SHADOWS " + c.maxShadows, c.alphaTest ? "#define ALPHATEST " + c.alphaTest : "", O.gammaInput ? "#define GAMMA_INPUT" : "", O.gammaOutput ? "#define GAMMA_OUTPUT" : "", O.physicallyBasedShading ? "#define PHYSICALLY_BASED_SHADING" : "", 
                c.useFog && c.fog ? "#define USE_FOG" : "", c.useFog && c.fog instanceof THREE.FogExp2 ? "#define FOG_EXP2" : "", c.map ? "#define USE_MAP" : "", c.envMap ? "#define USE_ENVMAP" : "", c.lightMap ? "#define USE_LIGHTMAP" : "", c.bumpMap ? "#define USE_BUMPMAP" : "", c.normalMap ? "#define USE_NORMALMAP" : "", c.specularMap ? "#define USE_SPECULARMAP" : "", c.vertexColors ? "#define USE_COLOR" : "", c.metal ? "#define METAL" : "", c.perPixel ? "#define PHONG_PER_PIXEL" : "", c.wrapAround ? "#define WRAP_AROUND" : "", c.doubleSided ? "#define DOUBLE_SIDED" : "", c.flipSided ? 
                "#define FLIP_SIDED" : "", c.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", c.shadowMapSoft ? "#define SHADOWMAP_SOFT" : "", c.shadowMapDebug ? "#define SHADOWMAP_DEBUG" : "", c.shadowMapCascade ? "#define SHADOWMAP_CASCADE" : "", "uniform mat4 viewMatrix;\nuniform vec3 cameraPosition;\n"].join("\n");
            e = x("fragment", e + q);
            d = x("vertex", d + p);
            k.attachShader(s, d);
            k.attachShader(s, e);
            k.linkProgram(s);
            k.getProgramParameter(s, k.LINK_STATUS) || console.error("Could not initialise shader\nVALIDATE_STATUS: " + k.getProgramParameter(s, 
            k.VALIDATE_STATUS) + ", gl error [" + k.getError() + "]");
            k.deleteShader(e);
            k.deleteShader(d);
            s.uniforms = {};
            s.attributes = {};
            var t, d = "viewMatrix modelViewMatrix projectionMatrix normalMatrix modelMatrix cameraPosition morphTargetInfluences".split(" ");
            c.useVertexTexture ? d.push("boneTexture") : d.push("boneGlobalMatrices");
            for (t in o)
                d.push(t);
            t = d;
            d = 0;
            for (o = t.length; d < o; d++)
                e = t[d], s.uniforms[e] = k.getUniformLocation(s, e);
            d = "position normal uv uv2 tangent color skinIndex skinWeight".split(" ");
            for (t = 0; t < c.maxMorphTargets; t++)
                d.push("morphTarget" + 
                t);
            for (t = 0; t < c.maxMorphNormals; t++)
                d.push("morphNormal" + t);
            for (r in b)
                d.push(r);
            r = d;
            t = 0;
            for (c = r.length; t < c; t++)
                d = r[t], s.attributes[d] = k.getAttribLocation(s, d);
            s.id = qa++;
            na.push({program: s,code: n,usedTimes: 1});
            O.info.memory.programs = na.length;
            r = s
        }
        a.program = r;
        r = a.program.attributes;
        0 <= r.position && k.enableVertexAttribArray(r.position);
        0 <= r.color && k.enableVertexAttribArray(r.color);
        0 <= r.normal && k.enableVertexAttribArray(r.normal);
        0 <= r.tangent && k.enableVertexAttribArray(r.tangent);
        a.skinning && (0 <= r.skinIndex && 
        0 <= r.skinWeight) && (k.enableVertexAttribArray(r.skinIndex), k.enableVertexAttribArray(r.skinWeight));
        if (a.attributes)
            for (j in a.attributes)
                void 0 !== r[j] && 0 <= r[j] && k.enableVertexAttribArray(r[j]);
        if (a.morphTargets) {
            a.numSupportedMorphTargets = 0;
            s = "morphTarget";
            for (j = 0; j < this.maxMorphTargets; j++)
                t = s + j, 0 <= r[t] && (k.enableVertexAttribArray(r[t]), a.numSupportedMorphTargets++)
        }
        if (a.morphNormals) {
            a.numSupportedMorphNormals = 0;
            s = "morphNormal";
            for (j = 0; j < this.maxMorphNormals; j++)
                t = s + j, 0 <= r[t] && (k.enableVertexAttribArray(r[t]), 
                a.numSupportedMorphNormals++)
        }
        a.uniformsList = [];
        for (i in a.uniforms)
            a.uniformsList.push([a.uniforms[i], i])
    };
    this.setFaceCulling = function(a, b) {
        a ? (!b || "ccw" === b ? k.frontFace(k.CCW) : k.frontFace(k.CW), "back" === a ? k.cullFace(k.BACK) : "front" === a ? k.cullFace(k.FRONT) : k.cullFace(k.FRONT_AND_BACK), k.enable(k.CULL_FACE)) : k.disable(k.CULL_FACE)
    };
    this.setMaterialFaces = function(a) {
        var b = a.side === THREE.DoubleSide, a = a.side === THREE.BackSide;
        ea !== b && (b ? k.disable(k.CULL_FACE) : k.enable(k.CULL_FACE), ea = b);
        wa !== a && (a ? k.frontFace(k.CW) : 
        k.frontFace(k.CCW), wa = a)
    };
    this.setDepthTest = function(a) {
        Ia !== a && (a ? k.enable(k.DEPTH_TEST) : k.disable(k.DEPTH_TEST), Ia = a)
    };
    this.setDepthWrite = function(a) {
        cb !== a && (k.depthMask(a), cb = a)
    };
    this.setBlending = function(a, b, c, d) {
        a !== va && (a === THREE.NoBlending ? k.disable(k.BLEND) : a === THREE.AdditiveBlending ? (k.enable(k.BLEND), k.blendEquation(k.FUNC_ADD), k.blendFunc(k.SRC_ALPHA, k.ONE)) : a === THREE.SubtractiveBlending ? (k.enable(k.BLEND), k.blendEquation(k.FUNC_ADD), k.blendFunc(k.ZERO, k.ONE_MINUS_SRC_COLOR)) : a === THREE.MultiplyBlending ? 
        (k.enable(k.BLEND), k.blendEquation(k.FUNC_ADD), k.blendFunc(k.ZERO, k.SRC_COLOR)) : a === THREE.CustomBlending ? k.enable(k.BLEND) : (k.enable(k.BLEND), k.blendEquationSeparate(k.FUNC_ADD, k.FUNC_ADD), k.blendFuncSeparate(k.SRC_ALPHA, k.ONE_MINUS_SRC_ALPHA, k.ONE, k.ONE_MINUS_SRC_ALPHA)), va = a);
        if (a === THREE.CustomBlending) {
            if (b !== Qa && (k.blendEquation(C(b)), Qa = b), c !== ja || d !== xa)
                k.blendFunc(C(c), C(d)), ja = c, xa = d
        } else
            xa = ja = Qa = null
    };
    this.setTexture = function(a, b) {
        if (a.needsUpdate) {
            a.__webglInit || (a.__webglInit = !0, a.__webglTexture = 
            k.createTexture(), O.info.memory.textures++);
            k.activeTexture(k.TEXTURE0 + b);
            k.bindTexture(k.TEXTURE_2D, a.__webglTexture);
            k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL, a.flipY);
            k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL, a.premultiplyAlpha);
            var c = a.image, d = 0 === (c.width & c.width - 1) && 0 === (c.height & c.height - 1), e = C(a.format), f = C(a.type);
            L(k.TEXTURE_2D, a, d);
            if (a instanceof THREE.CompressedTexture)
                for (var f = a.mipmaps, g = 0, h = f.length; g < h; g++)
                    c = f[g], k.compressedTexImage2D(k.TEXTURE_2D, g, e, c.width, c.height, 0, c.data);
            else
                a instanceof THREE.DataTexture ? k.texImage2D(k.TEXTURE_2D, 0, e, c.width, c.height, 0, e, f, c.data) : k.texImage2D(k.TEXTURE_2D, 0, e, e, f, a.image);
            a.generateMipmaps && d && k.generateMipmap(k.TEXTURE_2D);
            a.needsUpdate = !1;
            if (a.onUpdate)
                a.onUpdate()
        } else
            k.activeTexture(k.TEXTURE0 + b), k.bindTexture(k.TEXTURE_2D, a.__webglTexture)
    };
    this.setRenderTarget = function(a) {
        var b = a instanceof THREE.WebGLRenderTargetCube;
        if (a && !a.__webglFramebuffer) {
            void 0 === a.depthBuffer && (a.depthBuffer = !0);
            void 0 === a.stencilBuffer && (a.stencilBuffer = 
            !0);
            a.__webglTexture = k.createTexture();
            var c = 0 === (a.width & a.width - 1) && 0 === (a.height & a.height - 1), d = C(a.format), e = C(a.type);
            if (b) {
                a.__webglFramebuffer = [];
                a.__webglRenderbuffer = [];
                k.bindTexture(k.TEXTURE_CUBE_MAP, a.__webglTexture);
                L(k.TEXTURE_CUBE_MAP, a, c);
                for (var f = 0; 6 > f; f++) {
                    a.__webglFramebuffer[f] = k.createFramebuffer();
                    a.__webglRenderbuffer[f] = k.createRenderbuffer();
                    k.texImage2D(k.TEXTURE_CUBE_MAP_POSITIVE_X + f, 0, d, a.width, a.height, 0, d, e, null);
                    var g = a, h = k.TEXTURE_CUBE_MAP_POSITIVE_X + f;
                    k.bindFramebuffer(k.FRAMEBUFFER, 
                    a.__webglFramebuffer[f]);
                    k.framebufferTexture2D(k.FRAMEBUFFER, k.COLOR_ATTACHMENT0, h, g.__webglTexture, 0);
                    D(a.__webglRenderbuffer[f], a)
                }
                c && k.generateMipmap(k.TEXTURE_CUBE_MAP)
            } else
                a.__webglFramebuffer = k.createFramebuffer(), a.__webglRenderbuffer = k.createRenderbuffer(), k.bindTexture(k.TEXTURE_2D, a.__webglTexture), L(k.TEXTURE_2D, a, c), k.texImage2D(k.TEXTURE_2D, 0, d, a.width, a.height, 0, d, e, null), d = k.TEXTURE_2D, k.bindFramebuffer(k.FRAMEBUFFER, a.__webglFramebuffer), k.framebufferTexture2D(k.FRAMEBUFFER, k.COLOR_ATTACHMENT0, 
                d, a.__webglTexture, 0), D(a.__webglRenderbuffer, a), c && k.generateMipmap(k.TEXTURE_2D);
            b ? k.bindTexture(k.TEXTURE_CUBE_MAP, null) : k.bindTexture(k.TEXTURE_2D, null);
            k.bindRenderbuffer(k.RENDERBUFFER, null);
            k.bindFramebuffer(k.FRAMEBUFFER, null)
        }
        a ? (b = b ? a.__webglFramebuffer[a.activeCubeFace] : a.__webglFramebuffer, c = a.width, a = a.height, e = d = 0) : (b = null, c = Aa, a = ib, d = Ka, e = vb);
        b !== fa && (k.bindFramebuffer(k.FRAMEBUFFER, b), k.viewport(d, e, c, a), fa = b);
        eb = c;
        Da = a
    };
    this.shadowMapPlugin = new THREE.ShadowMapPlugin;
    this.addPrePlugin(this.shadowMapPlugin);
    this.addPostPlugin(new THREE.SpritePlugin);
    this.addPostPlugin(new THREE.LensFlarePlugin)
};
THREE.WebGLRenderTarget = function(a, b, c) {
    this.width = a;
    this.height = b;
    c = c || {};
    this.wrapS = void 0 !== c.wrapS ? c.wrapS : THREE.ClampToEdgeWrapping;
    this.wrapT = void 0 !== c.wrapT ? c.wrapT : THREE.ClampToEdgeWrapping;
    this.magFilter = void 0 !== c.magFilter ? c.magFilter : THREE.LinearFilter;
    this.minFilter = void 0 !== c.minFilter ? c.minFilter : THREE.LinearMipMapLinearFilter;
    this.anisotropy = void 0 !== c.anisotropy ? c.anisotropy : 1;
    this.offset = new THREE.Vector2(0, 0);
    this.repeat = new THREE.Vector2(1, 1);
    this.format = void 0 !== c.format ? c.format : 
    THREE.RGBAFormat;
    this.type = void 0 !== c.type ? c.type : THREE.UnsignedByteType;
    this.depthBuffer = void 0 !== c.depthBuffer ? c.depthBuffer : !0;
    this.stencilBuffer = void 0 !== c.stencilBuffer ? c.stencilBuffer : !0;
    this.generateMipmaps = !0
};
THREE.WebGLRenderTarget.prototype.clone = function() {
    var a = new THREE.WebGLRenderTarget(this.width, this.height);
    a.wrapS = this.wrapS;
    a.wrapT = this.wrapT;
    a.magFilter = this.magFilter;
    a.anisotropy = this.anisotropy;
    a.minFilter = this.minFilter;
    a.offset.copy(this.offset);
    a.repeat.copy(this.repeat);
    a.format = this.format;
    a.type = this.type;
    a.depthBuffer = this.depthBuffer;
    a.stencilBuffer = this.stencilBuffer;
    a.generateMipmaps = this.generateMipmaps;
    return a
};
THREE.WebGLRenderTargetCube = function(a, b, c) {
    THREE.WebGLRenderTarget.call(this, a, b, c);
    this.activeCubeFace = 0
};
THREE.WebGLRenderTargetCube.prototype = Object.create(THREE.WebGLRenderTarget.prototype);
THREE.RenderableVertex = function() {
    this.positionWorld = new THREE.Vector3;
    this.positionScreen = new THREE.Vector4;
    this.visible = !0
};
THREE.RenderableVertex.prototype.copy = function(a) {
    this.positionWorld.copy(a.positionWorld);
    this.positionScreen.copy(a.positionScreen)
};
THREE.RenderableFace3 = function() {
    this.v1 = new THREE.RenderableVertex;
    this.v2 = new THREE.RenderableVertex;
    this.v3 = new THREE.RenderableVertex;
    this.centroidWorld = new THREE.Vector3;
    this.centroidScreen = new THREE.Vector3;
    this.normalWorld = new THREE.Vector3;
    this.vertexNormalsWorld = [new THREE.Vector3, new THREE.Vector3, new THREE.Vector3];
    this.vertexNormalsLength = 0;
    this.material = null;
    this.uvs = [[]];
    this.z = null
};
THREE.RenderableFace4 = function() {
    this.v1 = new THREE.RenderableVertex;
    this.v2 = new THREE.RenderableVertex;
    this.v3 = new THREE.RenderableVertex;
    this.v4 = new THREE.RenderableVertex;
    this.centroidWorld = new THREE.Vector3;
    this.centroidScreen = new THREE.Vector3;
    this.normalWorld = new THREE.Vector3;
    this.vertexNormalsWorld = [new THREE.Vector3, new THREE.Vector3, new THREE.Vector3, new THREE.Vector3];
    this.vertexNormalsLength = 0;
    this.material = null;
    this.uvs = [[]];
    this.z = null
};
THREE.RenderableObject = function() {
    this.z = this.object = null
};
THREE.RenderableParticle = function() {
    this.rotation = this.z = this.y = this.x = this.object = null;
    this.scale = new THREE.Vector2;
    this.material = null
};
THREE.RenderableLine = function() {
    this.z = null;
    this.v1 = new THREE.RenderableVertex;
    this.v2 = new THREE.RenderableVertex;
    this.material = null
};
THREE.ColorUtils = {adjustHSV: function(a, b, c, d) {
        var e = THREE.ColorUtils.__hsv;
        THREE.ColorUtils.rgbToHsv(a, e);
        e.h = THREE.Math.clamp(e.h + b, 0, 1);
        e.s = THREE.Math.clamp(e.s + c, 0, 1);
        e.v = THREE.Math.clamp(e.v + d, 0, 1);
        a.setHSV(e.h, e.s, e.v)
    },rgbToHsv: function(a, b) {
        var c = a.r, d = a.g, e = a.b, f = Math.max(Math.max(c, d), e), g = Math.min(Math.min(c, d), e);
        if (g === f)
            g = c = 0;
        else {
            var h = f - g, g = h / f, c = (c === f ? (d - e) / h : d === f ? 2 + (e - c) / h : 4 + (c - d) / h) / 6;
            0 > c && (c += 1);
            1 < c && (c -= 1)
        }
        void 0 === b && (b = {h: 0,s: 0,v: 0});
        b.h = c;
        b.s = g;
        b.v = f;
        return b
    }};
THREE.ColorUtils.__hsv = {h: 0,s: 0,v: 0};
THREE.GeometryUtils = {merge: function(a, b) {
        for (var c, d, e = a.vertices.length, f = b instanceof THREE.Mesh ? b.geometry : b, g = a.vertices, h = f.vertices, i = a.faces, j = f.faces, l = a.faceVertexUvs[0], n = f.faceVertexUvs[0], m = {}, q = 0; q < a.materials.length; q++)
            m[a.materials[q].id] = q;
        b instanceof THREE.Mesh && (b.matrixAutoUpdate && b.updateMatrix(), c = b.matrix, d = new THREE.Matrix4, d.extractRotation(c, b.scale));
        for (var q = 0, p = h.length; q < p; q++) {
            var o = h[q].clone();
            c && c.multiplyVector3(o);
            g.push(o)
        }
        q = 0;
        for (p = j.length; q < p; q++) {
            var g = j[q], 
            r, t, u = g.vertexNormals, w = g.vertexColors;
            g instanceof THREE.Face3 ? r = new THREE.Face3(g.a + e, g.b + e, g.c + e) : g instanceof THREE.Face4 && (r = new THREE.Face4(g.a + e, g.b + e, g.c + e, g.d + e));
            r.normal.copy(g.normal);
            d && d.multiplyVector3(r.normal);
            h = 0;
            for (o = u.length; h < o; h++)
                t = u[h].clone(), d && d.multiplyVector3(t), r.vertexNormals.push(t);
            r.color.copy(g.color);
            h = 0;
            for (o = w.length; h < o; h++)
                t = w[h], r.vertexColors.push(t.clone());
            void 0 !== g.materialIndex && (h = f.materials[g.materialIndex], o = h.id, w = m[o], void 0 === w && (w = a.materials.length, 
            m[o] = w, a.materials.push(h)), r.materialIndex = w);
            r.centroid.copy(g.centroid);
            c && c.multiplyVector3(r.centroid);
            i.push(r)
        }
        q = 0;
        for (p = n.length; q < p; q++) {
            c = n[q];
            d = [];
            h = 0;
            for (o = c.length; h < o; h++)
                d.push(new THREE.UV(c[h].u, c[h].v));
            l.push(d)
        }
    },clone: function(a) {
        var b = new THREE.Geometry, c, d = a.vertices, e = a.faces, f = a.faceVertexUvs[0];
        a.materials && (b.materials = a.materials.slice());
        a = 0;
        for (c = d.length; a < c; a++)
            b.vertices.push(d[a].clone());
        a = 0;
        for (c = e.length; a < c; a++)
            b.faces.push(e[a].clone());
        a = 0;
        for (c = f.length; a < 
        c; a++) {
            for (var d = f[a], e = [], g = 0, h = d.length; g < h; g++)
                e.push(new THREE.UV(d[g].u, d[g].v));
            b.faceVertexUvs[0].push(e)
        }
        return b
    },randomPointInTriangle: function(a, b, c) {
        var d, e, f, g = new THREE.Vector3, h = THREE.GeometryUtils.__v1;
        d = THREE.GeometryUtils.random();
        e = THREE.GeometryUtils.random();
        1 < d + e && (d = 1 - d, e = 1 - e);
        f = 1 - d - e;
        g.copy(a);
        g.multiplyScalar(d);
        h.copy(b);
        h.multiplyScalar(e);
        g.addSelf(h);
        h.copy(c);
        h.multiplyScalar(f);
        g.addSelf(h);
        return g
    },randomPointInFace: function(a, b, c) {
        var d, e, f;
        if (a instanceof THREE.Face3)
            return d = 
            b.vertices[a.a], e = b.vertices[a.b], f = b.vertices[a.c], THREE.GeometryUtils.randomPointInTriangle(d, e, f);
        if (a instanceof THREE.Face4) {
            d = b.vertices[a.a];
            e = b.vertices[a.b];
            f = b.vertices[a.c];
            var b = b.vertices[a.d], g;
            c ? a._area1 && a._area2 ? (c = a._area1, g = a._area2) : (c = THREE.GeometryUtils.triangleArea(d, e, b), g = THREE.GeometryUtils.triangleArea(e, f, b), a._area1 = c, a._area2 = g) : (c = THREE.GeometryUtils.triangleArea(d, e, b), g = THREE.GeometryUtils.triangleArea(e, f, b));
            return THREE.GeometryUtils.random() * (c + g) < c ? THREE.GeometryUtils.randomPointInTriangle(d, 
            e, b) : THREE.GeometryUtils.randomPointInTriangle(e, f, b)
        }
    },randomPointsInGeometry: function(a, b) {
        function c(a) {
            function b(c, d) {
                if (d < c)
                    return c;
                var e = c + Math.floor((d - c) / 2);
                return j[e] > a ? b(c, e - 1) : j[e] < a ? b(e + 1, d) : e
            }
            return b(0, j.length - 1)
        }
        var d, e, f = a.faces, g = a.vertices, h = f.length, i = 0, j = [], l, n, m, q;
        for (e = 0; e < h; e++)
            d = f[e], d instanceof THREE.Face3 ? (l = g[d.a], n = g[d.b], m = g[d.c], d._area = THREE.GeometryUtils.triangleArea(l, n, m)) : d instanceof THREE.Face4 && (l = g[d.a], n = g[d.b], m = g[d.c], q = g[d.d], d._area1 = THREE.GeometryUtils.triangleArea(l, 
            n, q), d._area2 = THREE.GeometryUtils.triangleArea(n, m, q), d._area = d._area1 + d._area2), i += d._area, j[e] = i;
        d = [];
        for (e = 0; e < b; e++)
            g = THREE.GeometryUtils.random() * i, g = c(g), d[e] = THREE.GeometryUtils.randomPointInFace(f[g], a, !0);
        return d
    },triangleArea: function(a, b, c) {
        var d, e = THREE.GeometryUtils.__v1;
        e.sub(a, b);
        d = e.length();
        e.sub(a, c);
        a = e.length();
        e.sub(b, c);
        c = e.length();
        b = 0.5 * (d + a + c);
        return Math.sqrt(b * (b - d) * (b - a) * (b - c))
    },center: function(a) {
        a.computeBoundingBox();
        var b = a.boundingBox, c = new THREE.Vector3;
        c.add(b.min, 
        b.max);
        c.multiplyScalar(-0.5);
        a.applyMatrix((new THREE.Matrix4).makeTranslation(c.x, c.y, c.z));
        a.computeBoundingBox();
        return c
    },normalizeUVs: function(a) {
        for (var a = a.faceVertexUvs[0], b = 0, c = a.length; b < c; b++)
            for (var d = a[b], e = 0, f = d.length; e < f; e++)
                if (1 !== d[e].u && (d[e].u -= Math.floor(d[e].u)), 1 !== d[e].v)
                    d[e].v -= Math.floor(d[e].v)
    },triangulateQuads: function(a) {
        var b, c, d, e, f = [], g = [], h = [];
        b = 0;
        for (c = a.faceUvs.length; b < c; b++)
            g[b] = [];
        b = 0;
        for (c = a.faceVertexUvs.length; b < c; b++)
            h[b] = [];
        b = 0;
        for (c = a.faces.length; b < c; b++)
            if (d = 
            a.faces[b], d instanceof THREE.Face4) {
                e = d.a;
                var i = d.b, j = d.c, l = d.d, n = new THREE.Face3, m = new THREE.Face3;
                n.color.copy(d.color);
                m.color.copy(d.color);
                n.materialIndex = d.materialIndex;
                m.materialIndex = d.materialIndex;
                n.a = e;
                n.b = i;
                n.c = l;
                m.a = i;
                m.b = j;
                m.c = l;
                4 === d.vertexColors.length && (n.vertexColors[0] = d.vertexColors[0].clone(), n.vertexColors[1] = d.vertexColors[1].clone(), n.vertexColors[2] = d.vertexColors[3].clone(), m.vertexColors[0] = d.vertexColors[1].clone(), m.vertexColors[1] = d.vertexColors[2].clone(), m.vertexColors[2] = 
                d.vertexColors[3].clone());
                f.push(n, m);
                d = 0;
                for (e = a.faceVertexUvs.length; d < e; d++)
                    a.faceVertexUvs[d].length && (n = a.faceVertexUvs[d][b], i = n[1], j = n[2], l = n[3], n = [n[0].clone(), i.clone(), l.clone()], i = [i.clone(), j.clone(), l.clone()], h[d].push(n, i));
                d = 0;
                for (e = a.faceUvs.length; d < e; d++)
                    a.faceUvs[d].length && (i = a.faceUvs[d][b], g[d].push(i, i))
            } else {
                f.push(d);
                d = 0;
                for (e = a.faceUvs.length; d < e; d++)
                    g[d].push(a.faceUvs[d][b]);
                d = 0;
                for (e = a.faceVertexUvs.length; d < e; d++)
                    h[d].push(a.faceVertexUvs[d][b])
            }
        a.faces = f;
        a.faceUvs = 
        g;
        a.faceVertexUvs = h;
        a.computeCentroids();
        a.computeFaceNormals();
        a.computeVertexNormals();
        a.hasTangents && a.computeTangents()
    },explode: function(a) {
        for (var b = [], c = 0, d = a.faces.length; c < d; c++) {
            var e = b.length, f = a.faces[c];
            if (f instanceof THREE.Face4) {
                var g = f.a, h = f.b, i = f.c, g = a.vertices[g], h = a.vertices[h], i = a.vertices[i], j = a.vertices[f.d];
                b.push(g.clone());
                b.push(h.clone());
                b.push(i.clone());
                b.push(j.clone());
                f.a = e;
                f.b = e + 1;
                f.c = e + 2;
                f.d = e + 3
            } else
                g = f.a, h = f.b, i = f.c, g = a.vertices[g], h = a.vertices[h], i = a.vertices[i], 
                b.push(g.clone()), b.push(h.clone()), b.push(i.clone()), f.a = e, f.b = e + 1, f.c = e + 2
        }
        a.vertices = b;
        delete a.__tmpVertices
    },tessellate: function(a, b) {
        var c, d, e, f, g, h, i, j, l, n, m, q, p, o, r, t, u, w, s, B = [], v = [];
        c = 0;
        for (d = a.faceVertexUvs.length; c < d; c++)
            v[c] = [];
        c = 0;
        for (d = a.faces.length; c < d; c++)
            if (e = a.faces[c], e instanceof THREE.Face3)
                if (f = e.a, g = e.b, h = e.c, j = a.vertices[f], l = a.vertices[g], n = a.vertices[h], q = j.distanceTo(l), p = l.distanceTo(n), m = j.distanceTo(n), q > b || p > b || m > b) {
                    i = a.vertices.length;
                    w = e.clone();
                    s = e.clone();
                    q >= p && 
                    q >= m ? (j = j.clone(), j.lerpSelf(l, 0.5), w.a = f, w.b = i, w.c = h, s.a = i, s.b = g, s.c = h, 3 === e.vertexNormals.length && (f = e.vertexNormals[0].clone(), f.lerpSelf(e.vertexNormals[1], 0.5), w.vertexNormals[1].copy(f), s.vertexNormals[0].copy(f)), 3 === e.vertexColors.length && (f = e.vertexColors[0].clone(), f.lerpSelf(e.vertexColors[1], 0.5), w.vertexColors[1].copy(f), s.vertexColors[0].copy(f)), e = 0) : p >= q && p >= m ? (j = l.clone(), j.lerpSelf(n, 0.5), w.a = f, w.b = g, w.c = i, s.a = i, s.b = h, s.c = f, 3 === e.vertexNormals.length && (f = e.vertexNormals[1].clone(), 
                    f.lerpSelf(e.vertexNormals[2], 0.5), w.vertexNormals[2].copy(f), s.vertexNormals[0].copy(f), s.vertexNormals[1].copy(e.vertexNormals[2]), s.vertexNormals[2].copy(e.vertexNormals[0])), 3 === e.vertexColors.length && (f = e.vertexColors[1].clone(), f.lerpSelf(e.vertexColors[2], 0.5), w.vertexColors[2].copy(f), s.vertexColors[0].copy(f), s.vertexColors[1].copy(e.vertexColors[2]), s.vertexColors[2].copy(e.vertexColors[0])), e = 1) : (j = j.clone(), j.lerpSelf(n, 0.5), w.a = f, w.b = g, w.c = i, s.a = i, s.b = g, s.c = h, 3 === e.vertexNormals.length && 
                    (f = e.vertexNormals[0].clone(), f.lerpSelf(e.vertexNormals[2], 0.5), w.vertexNormals[2].copy(f), s.vertexNormals[0].copy(f)), 3 === e.vertexColors.length && (f = e.vertexColors[0].clone(), f.lerpSelf(e.vertexColors[2], 0.5), w.vertexColors[2].copy(f), s.vertexColors[0].copy(f)), e = 2);
                    B.push(w, s);
                    a.vertices.push(j);
                    f = 0;
                    for (g = a.faceVertexUvs.length; f < g; f++)
                        a.faceVertexUvs[f].length && (j = a.faceVertexUvs[f][c], s = j[0], h = j[1], w = j[2], 0 === e ? (l = s.clone(), l.lerpSelf(h, 0.5), j = [s.clone(), l.clone(), w.clone()], h = [l.clone(), h.clone(), 
                            w.clone()]) : 1 === e ? (l = h.clone(), l.lerpSelf(w, 0.5), j = [s.clone(), h.clone(), l.clone()], h = [l.clone(), w.clone(), s.clone()]) : (l = s.clone(), l.lerpSelf(w, 0.5), j = [s.clone(), h.clone(), l.clone()], h = [l.clone(), h.clone(), w.clone()]), v[f].push(j, h))
                } else {
                    B.push(e);
                    f = 0;
                    for (g = a.faceVertexUvs.length; f < g; f++)
                        v[f].push(a.faceVertexUvs[f][c])
                }
            else if (f = e.a, g = e.b, h = e.c, i = e.d, j = a.vertices[f], l = a.vertices[g], n = a.vertices[h], m = a.vertices[i], q = j.distanceTo(l), p = l.distanceTo(n), o = n.distanceTo(m), r = j.distanceTo(m), q > b || p > b || 
            o > b || r > b) {
                t = a.vertices.length;
                u = a.vertices.length + 1;
                w = e.clone();
                s = e.clone();
                q >= p && q >= o && q >= r || o >= p && o >= q && o >= r ? (q = j.clone(), q.lerpSelf(l, 0.5), l = n.clone(), l.lerpSelf(m, 0.5), w.a = f, w.b = t, w.c = u, w.d = i, s.a = t, s.b = g, s.c = h, s.d = u, 4 === e.vertexNormals.length && (f = e.vertexNormals[0].clone(), f.lerpSelf(e.vertexNormals[1], 0.5), g = e.vertexNormals[2].clone(), g.lerpSelf(e.vertexNormals[3], 0.5), w.vertexNormals[1].copy(f), w.vertexNormals[2].copy(g), s.vertexNormals[0].copy(f), s.vertexNormals[3].copy(g)), 4 === e.vertexColors.length && 
                (f = e.vertexColors[0].clone(), f.lerpSelf(e.vertexColors[1], 0.5), g = e.vertexColors[2].clone(), g.lerpSelf(e.vertexColors[3], 0.5), w.vertexColors[1].copy(f), w.vertexColors[2].copy(g), s.vertexColors[0].copy(f), s.vertexColors[3].copy(g)), e = 0) : (q = l.clone(), q.lerpSelf(n, 0.5), l = m.clone(), l.lerpSelf(j, 0.5), w.a = f, w.b = g, w.c = t, w.d = u, s.a = u, s.b = t, s.c = h, s.d = i, 4 === e.vertexNormals.length && (f = e.vertexNormals[1].clone(), f.lerpSelf(e.vertexNormals[2], 0.5), g = e.vertexNormals[3].clone(), g.lerpSelf(e.vertexNormals[0], 0.5), 
                w.vertexNormals[2].copy(f), w.vertexNormals[3].copy(g), s.vertexNormals[0].copy(g), s.vertexNormals[1].copy(f)), 4 === e.vertexColors.length && (f = e.vertexColors[1].clone(), f.lerpSelf(e.vertexColors[2], 0.5), g = e.vertexColors[3].clone(), g.lerpSelf(e.vertexColors[0], 0.5), w.vertexColors[2].copy(f), w.vertexColors[3].copy(g), s.vertexColors[0].copy(g), s.vertexColors[1].copy(f)), e = 1);
                B.push(w, s);
                a.vertices.push(q, l);
                f = 0;
                for (g = a.faceVertexUvs.length; f < g; f++)
                    a.faceVertexUvs[f].length && (j = a.faceVertexUvs[f][c], s = j[0], 
                    h = j[1], w = j[2], j = j[3], 0 === e ? (l = s.clone(), l.lerpSelf(h, 0.5), n = w.clone(), n.lerpSelf(j, 0.5), s = [s.clone(), l.clone(), n.clone(), j.clone()], h = [l.clone(), h.clone(), w.clone(), n.clone()]) : (l = h.clone(), l.lerpSelf(w, 0.5), n = j.clone(), n.lerpSelf(s, 0.5), s = [s.clone(), h.clone(), l.clone(), n.clone()], h = [n.clone(), l.clone(), w.clone(), j.clone()]), v[f].push(s, h))
            } else {
                B.push(e);
                f = 0;
                for (g = a.faceVertexUvs.length; f < g; f++)
                    v[f].push(a.faceVertexUvs[f][c])
            }
        a.faces = B;
        a.faceVertexUvs = v
    }};
THREE.GeometryUtils.random = THREE.Math.random16;
THREE.GeometryUtils.__v1 = new THREE.Vector3;
THREE.ImageUtils = {crossOrigin: "anonymous",loadTexture: function(a, b, c, d) {
        var e = new Image, f = new THREE.Texture(e, b), b = new THREE.ImageLoader;
        b.addEventListener("load", function(a) {
            f.image = a.content;
            f.needsUpdate = !0;
            c && c(f)
        });
        b.addEventListener("error", function(a) {
            d && d(a.message)
        });
        b.crossOrigin = this.crossOrigin;
        b.load(a, e);
        return f
    },loadCompressedTexture: function(a, b, c, d) {
        var e = new THREE.CompressedTexture;
        e.mapping = b;
        var f = new XMLHttpRequest;
        f.onload = function() {
            var a = THREE.ImageUtils.parseDDS(f.response, 
            !0);
            e.format = a.format;
            e.mipmaps = a.mipmaps;
            e.image.width = a.width;
            e.image.height = a.height;
            e.generateMipmaps = !1;
            e.needsUpdate = !0;
            c && c(e)
        };
        f.onerror = d;
        f.open("GET", a, !0);
        f.responseType = "arraybuffer";
        f.send(null);
        return e
    },loadTextureCube: function(a, b, c, d) {
        var e = [];
        e.loadCount = 0;
        var f = new THREE.Texture;
        f.image = e;
        void 0 !== b && (f.mapping = b);
        f.flipY = !1;
        for (var b = 0, g = a.length; b < g; ++b) {
            var h = new Image;
            e[b] = h;
            h.onload = function() {
                e.loadCount = e.loadCount + 1;
                if (e.loadCount === 6) {
                    f.needsUpdate = true;
                    c && c()
                }
            };
            h.onerror = 
            d;
            h.crossOrigin = this.crossOrigin;
            h.src = a[b]
        }
        return f
    },loadCompressedTextureCube: function(a, b, c, d) {
        var e = [];
        e.loadCount = 0;
        var f = new THREE.CompressedTexture;
        f.image = e;
        void 0 !== b && (f.mapping = b);
        f.flipY = !1;
        f.generateMipmaps = !1;
        for (var b = function(a, b) {
            return function() {
                var d = THREE.ImageUtils.parseDDS(a.response, true);
                b.format = d.format;
                b.mipmaps = d.mipmaps;
                b.width = d.width;
                b.height = d.height;
                e.loadCount = e.loadCount + 1;
                if (e.loadCount === 6) {
                    f.format = d.format;
                    f.needsUpdate = true;
                    c && c()
                }
            }
        }, g = 0, h = a.length; g < h; ++g) {
            var i = 
            {};
            e[g] = i;
            var j = new XMLHttpRequest;
            j.onload = b(j, i);
            j.onerror = d;
            j.open("GET", a[g], !0);
            j.responseType = "arraybuffer";
            j.send(null)
        }
        return f
    },parseDDS: function(a, b) {
        function c(a) {
            return a.charCodeAt(0) + (a.charCodeAt(1) << 8) + (a.charCodeAt(2) << 16) + (a.charCodeAt(3) << 24)
        }
        var d = {mipmaps: [],width: 0,height: 0,format: null,mipmapCount: 1}, e = c("DXT1"), f = c("DXT3"), g = c("DXT5"), h = new Int32Array(a, 0, 31);
        if (542327876 !== h[0])
            return console.error("ImageUtils.parseDDS(): Invalid magic number in DDS header"), d;
        if (!h[20] & 4)
            return console.error("ImageUtils.parseDDS(): Unsupported format, must contain a FourCC code"), 
            d;
        var i = h[21];
        switch (i) {
            case e:
                e = 8;
                d.format = THREE.RGB_S3TC_DXT1_Format;
                break;
            case f:
                e = 16;
                d.format = THREE.RGBA_S3TC_DXT3_Format;
                break;
            case g:
                e = 16;
                d.format = THREE.RGBA_S3TC_DXT5_Format;
                break;
            default:
                return console.error("ImageUtils.parseDDS(): Unsupported FourCC code: ", String.fromCharCode(i & 255, i >> 8 & 255, i >> 16 & 255, i >> 24 & 255)), d
        }
        d.mipmapCount = 1;
        h[2] & 131072 && !1 !== b && (d.mipmapCount = Math.max(1, h[7]));
        d.width = h[4];
        d.height = h[3];
        h = h[1] + 4;
        f = d.width;
        g = d.height;
        for (i = 0; i < d.mipmapCount; i++) {
            var j = Math.max(4, f) / 
            4 * Math.max(4, g) / 4 * e, l = {data: new Uint8Array(a, h, j),width: f,height: g};
            d.mipmaps.push(l);
            h += j;
            f = Math.max(0.5 * f, 1);
            g = Math.max(0.5 * g, 1)
        }
        return d
    },getNormalMap: function(a, b) {
        var c = function(a) {
            var b = Math.sqrt(a[0] * a[0] + a[1] * a[1] + a[2] * a[2]);
            return [a[0] / b, a[1] / b, a[2] / b]
        }, b = b | 1, d = a.width, e = a.height, f = document.createElement("canvas");
        f.width = d;
        f.height = e;
        var g = f.getContext("2d");
        g.drawImage(a, 0, 0);
        for (var h = g.getImageData(0, 0, d, e).data, i = g.createImageData(d, e), j = i.data, l = 0; l < d; l++)
            for (var n = 0; n < e; n++) {
                var m = 
                0 > n - 1 ? 0 : n - 1, q = n + 1 > e - 1 ? e - 1 : n + 1, p = 0 > l - 1 ? 0 : l - 1, o = l + 1 > d - 1 ? d - 1 : l + 1, r = [], t = [0, 0, h[4 * (n * d + l)] / 255 * b];
                r.push([-1, 0, h[4 * (n * d + p)] / 255 * b]);
                r.push([-1, -1, h[4 * (m * d + p)] / 255 * b]);
                r.push([0, -1, h[4 * (m * d + l)] / 255 * b]);
                r.push([1, -1, h[4 * (m * d + o)] / 255 * b]);
                r.push([1, 0, h[4 * (n * d + o)] / 255 * b]);
                r.push([1, 1, h[4 * (q * d + o)] / 255 * b]);
                r.push([0, 1, h[4 * (q * d + l)] / 255 * b]);
                r.push([-1, 1, h[4 * (q * d + p)] / 255 * b]);
                m = [];
                p = r.length;
                for (q = 0; q < p; q++) {
                    var o = r[q], u = r[(q + 1) % p], o = [o[0] - t[0], o[1] - t[1], o[2] - t[2]], u = [u[0] - t[0], u[1] - t[1], u[2] - t[2]];
                    m.push(c([o[1] * 
                        u[2] - o[2] * u[1], o[2] * u[0] - o[0] * u[2], o[0] * u[1] - o[1] * u[0]]))
                }
                r = [0, 0, 0];
                for (q = 0; q < m.length; q++)
                    r[0] += m[q][0], r[1] += m[q][1], r[2] += m[q][2];
                r[0] /= m.length;
                r[1] /= m.length;
                r[2] /= m.length;
                t = 4 * (n * d + l);
                j[t] = 255 * ((r[0] + 1) / 2) | 0;
                j[t + 1] = 255 * ((r[1] + 1) / 2) | 0;
                j[t + 2] = 255 * r[2] | 0;
                j[t + 3] = 255
            }
        g.putImageData(i, 0, 0);
        return f
    },generateDataTexture: function(a, b, c) {
        for (var d = a * b, e = new Uint8Array(3 * d), f = Math.floor(255 * c.r), g = Math.floor(255 * c.g), c = Math.floor(255 * c.b), h = 0; h < d; h++)
            e[3 * h] = f, e[3 * h + 1] = g, e[3 * h + 2] = c;
        a = new THREE.DataTexture(e, 
        a, b, THREE.RGBFormat);
        a.needsUpdate = !0;
        return a
    }};
THREE.SceneUtils = {showHierarchy: function(a, b) {
        THREE.SceneUtils.traverseHierarchy(a, function(a) {
            a.visible = b
        })
    },traverseHierarchy: function(a, b) {
        var c, d, e = a.children.length;
        for (d = 0; d < e; d++)
            c = a.children[d], b(c), THREE.SceneUtils.traverseHierarchy(c, b)
    },createMultiMaterialObject: function(a, b) {
        var c, d = b.length, e = new THREE.Object3D;
        for (c = 0; c < d; c++) {
            var f = new THREE.Mesh(a, b[c]);
            e.add(f)
        }
        return e
    },cloneObject: function(a) {
        var b;
        a instanceof THREE.MorphAnimMesh ? (b = new THREE.MorphAnimMesh(a.geometry, a.material), 
        b.duration = a.duration, b.mirroredLoop = a.mirroredLoop, b.time = a.time, b.lastKeyframe = a.lastKeyframe, b.currentKeyframe = a.currentKeyframe, b.direction = a.direction, b.directionBackwards = a.directionBackwards) : a instanceof THREE.SkinnedMesh ? b = new THREE.SkinnedMesh(a.geometry, a.material, a.useVertexTexture) : a instanceof THREE.Mesh ? b = new THREE.Mesh(a.geometry, a.material) : a instanceof THREE.Line ? b = new THREE.Line(a.geometry, a.material, a.type) : a instanceof THREE.Ribbon ? b = new THREE.Ribbon(a.geometry, a.material) : a instanceof 
        THREE.ParticleSystem ? (b = new THREE.ParticleSystem(a.geometry, a.material), b.sortParticles = a.sortParticles) : a instanceof THREE.Particle ? b = new THREE.Particle(a.material) : a instanceof THREE.Sprite ? (b = new THREE.Sprite({}), b.color.copy(a.color), b.map = a.map, b.blending = a.blending, b.useScreenCoordinates = a.useScreenCoordinates, b.mergeWith3D = a.mergeWith3D, b.affectedByDistance = a.affectedByDistance, b.scaleByViewport = a.scaleByViewport, b.alignment = a.alignment, b.rotation3d.copy(a.rotation3d), b.rotation = a.rotation, 
        b.opacity = a.opacity, b.uvOffset.copy(a.uvOffset), b.uvScale.copy(a.uvScale)) : a instanceof THREE.LOD ? b = new THREE.LOD : a instanceof THREE.Object3D && (b = new THREE.Object3D);
        b.name = a.name;
        b.parent = a.parent;
        b.up.copy(a.up);
        b.position.copy(a.position);
        b.rotation instanceof THREE.Vector3 && b.rotation.copy(a.rotation);
        b.eulerOrder = a.eulerOrder;
        b.scale.copy(a.scale);
        b.dynamic = a.dynamic;
        b.renderDepth = a.renderDepth;
        b.rotationAutoUpdate = a.rotationAutoUpdate;
        b.matrix.copy(a.matrix);
        b.matrixWorld.copy(a.matrixWorld);
        b.matrixRotationWorld.copy(a.matrixRotationWorld);
        b.matrixAutoUpdate = a.matrixAutoUpdate;
        b.matrixWorldNeedsUpdate = a.matrixWorldNeedsUpdate;
        b.quaternion.copy(a.quaternion);
        b.useQuaternion = a.useQuaternion;
        b.boundRadius = a.boundRadius;
        b.boundRadiusScale = a.boundRadiusScale;
        b.visible = a.visible;
        b.castShadow = a.castShadow;
        b.receiveShadow = a.receiveShadow;
        b.frustumCulled = a.frustumCulled;
        for (var c = 0; c < a.children.length; c++) {
            var d = THREE.SceneUtils.cloneObject(a.children[c]);
            b.children[c] = d;
            d.parent = b
        }
        if (a instanceof 
        THREE.LOD)
            for (c = 0; c < a.LODs.length; c++)
                b.LODs[c] = {visibleAtDistance: a.LODs[c].visibleAtDistance,object3D: b.children[c]};
        return b
    },detach: function(a, b, c) {
        a.applyMatrix(b.matrixWorld);
        b.remove(a);
        c.add(a)
    },attach: function(a, b, c) {
        var d = new THREE.Matrix4;
        d.getInverse(c.matrixWorld);
        a.applyMatrix(d);
        b.remove(a);
        c.add(a)
    }};
THREE.WebGLRenderer && (THREE.ShaderUtils = {lib: {fresnel: {uniforms: {mRefractionRatio: {type: "f",value: 1.02},mFresnelBias: {type: "f",value: 0.1},mFresnelPower: {type: "f",value: 2},mFresnelScale: {type: "f",value: 1},tCube: {type: "t",value: null}},fragmentShader: "uniform samplerCube tCube;\nvarying vec3 vReflect;\nvarying vec3 vRefract[3];\nvarying float vReflectionFactor;\nvoid main() {\nvec4 reflectedColor = textureCube( tCube, vec3( -vReflect.x, vReflect.yz ) );\nvec4 refractedColor = vec4( 1.0, 1.0, 1.0, 1.0 );\nrefractedColor.r = textureCube( tCube, vec3( -vRefract[0].x, vRefract[0].yz ) ).r;\nrefractedColor.g = textureCube( tCube, vec3( -vRefract[1].x, vRefract[1].yz ) ).g;\nrefractedColor.b = textureCube( tCube, vec3( -vRefract[2].x, vRefract[2].yz ) ).b;\nrefractedColor.a = 1.0;\ngl_FragColor = mix( refractedColor, reflectedColor, clamp( vReflectionFactor, 0.0, 1.0 ) );\n}",
            vertexShader: "uniform float mRefractionRatio;\nuniform float mFresnelBias;\nuniform float mFresnelScale;\nuniform float mFresnelPower;\nvarying vec3 vReflect;\nvarying vec3 vRefract[3];\nvarying float vReflectionFactor;\nvoid main() {\nvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\nvec4 mPosition = modelMatrix * vec4( position, 1.0 );\nvec3 nWorld = normalize( mat3( modelMatrix[0].xyz, modelMatrix[1].xyz, modelMatrix[2].xyz ) * normal );\nvec3 I = mPosition.xyz - cameraPosition;\nvReflect = reflect( I, nWorld );\nvRefract[0] = refract( normalize( I ), nWorld, mRefractionRatio );\nvRefract[1] = refract( normalize( I ), nWorld, mRefractionRatio * 0.99 );\nvRefract[2] = refract( normalize( I ), nWorld, mRefractionRatio * 0.98 );\nvReflectionFactor = mFresnelBias + mFresnelScale * pow( 1.0 + dot( normalize( I ), nWorld ), mFresnelPower );\ngl_Position = projectionMatrix * mvPosition;\n}"},
        normal: {uniforms: THREE.UniformsUtils.merge([THREE.UniformsLib.fog, THREE.UniformsLib.lights, THREE.UniformsLib.shadowmap, {enableAO: {type: "i",value: 0},enableDiffuse: {type: "i",value: 0},enableSpecular: {type: "i",value: 0},enableReflection: {type: "i",value: 0},enableDisplacement: {type: "i",value: 0},tDisplacement: {type: "t",value: null},tDiffuse: {type: "t",value: null},tCube: {type: "t",value: null},tNormal: {type: "t",value: null},tSpecular: {type: "t",value: null},tAO: {type: "t",value: null},uNormalScale: {type: "v2",value: new THREE.Vector2(1, 
                        1)},uDisplacementBias: {type: "f",value: 0},uDisplacementScale: {type: "f",value: 1},uDiffuseColor: {type: "c",value: new THREE.Color(16777215)},uSpecularColor: {type: "c",value: new THREE.Color(1118481)},uAmbientColor: {type: "c",value: new THREE.Color(16777215)},uShininess: {type: "f",value: 30},uOpacity: {type: "f",value: 1},useRefract: {type: "i",value: 0},uRefractionRatio: {type: "f",value: 0.98},uReflectivity: {type: "f",value: 0.5},uOffset: {type: "v2",value: new THREE.Vector2(0, 0)},uRepeat: {type: "v2",value: new THREE.Vector2(1, 
                        1)},wrapRGB: {type: "v3",value: new THREE.Vector3(1, 1, 1)}}]),fragmentShader: ["uniform vec3 uAmbientColor;\nuniform vec3 uDiffuseColor;\nuniform vec3 uSpecularColor;\nuniform float uShininess;\nuniform float uOpacity;\nuniform bool enableDiffuse;\nuniform bool enableSpecular;\nuniform bool enableAO;\nuniform bool enableReflection;\nuniform sampler2D tDiffuse;\nuniform sampler2D tNormal;\nuniform sampler2D tSpecular;\nuniform sampler2D tAO;\nuniform samplerCube tCube;\nuniform vec2 uNormalScale;\nuniform bool useRefract;\nuniform float uRefractionRatio;\nuniform float uReflectivity;\nvarying vec3 vTangent;\nvarying vec3 vBinormal;\nvarying vec3 vNormal;\nvarying vec2 vUv;\nuniform vec3 ambientLightColor;\n#if MAX_DIR_LIGHTS > 0\nuniform vec3 directionalLightColor[ MAX_DIR_LIGHTS ];\nuniform vec3 directionalLightDirection[ MAX_DIR_LIGHTS ];\n#endif\n#if MAX_HEMI_LIGHTS > 0\nuniform vec3 hemisphereLightSkyColor[ MAX_HEMI_LIGHTS ];\nuniform vec3 hemisphereLightGroundColor[ MAX_HEMI_LIGHTS ];\nuniform vec3 hemisphereLightPosition[ MAX_HEMI_LIGHTS ];\n#endif\n#if MAX_POINT_LIGHTS > 0\nuniform vec3 pointLightColor[ MAX_POINT_LIGHTS ];\nuniform vec3 pointLightPosition[ MAX_POINT_LIGHTS ];\nuniform float pointLightDistance[ MAX_POINT_LIGHTS ];\n#endif\n#if MAX_SPOT_LIGHTS > 0\nuniform vec3 spotLightColor[ MAX_SPOT_LIGHTS ];\nuniform vec3 spotLightPosition[ MAX_SPOT_LIGHTS ];\nuniform vec3 spotLightDirection[ MAX_SPOT_LIGHTS ];\nuniform float spotLightAngle[ MAX_SPOT_LIGHTS ];\nuniform float spotLightExponent[ MAX_SPOT_LIGHTS ];\nuniform float spotLightDistance[ MAX_SPOT_LIGHTS ];\n#endif\n#ifdef WRAP_AROUND\nuniform vec3 wrapRGB;\n#endif\nvarying vec3 vWorldPosition;\nvarying vec3 vViewPosition;", 
                THREE.ShaderChunk.shadowmap_pars_fragment, THREE.ShaderChunk.fog_pars_fragment, "void main() {\ngl_FragColor = vec4( vec3( 1.0 ), uOpacity );\nvec3 specularTex = vec3( 1.0 );\nvec3 normalTex = texture2D( tNormal, vUv ).xyz * 2.0 - 1.0;\nnormalTex.xy *= uNormalScale;\nnormalTex = normalize( normalTex );\nif( enableDiffuse ) {\n#ifdef GAMMA_INPUT\nvec4 texelColor = texture2D( tDiffuse, vUv );\ntexelColor.xyz *= texelColor.xyz;\ngl_FragColor = gl_FragColor * texelColor;\n#else\ngl_FragColor = gl_FragColor * texture2D( tDiffuse, vUv );\n#endif\n}\nif( enableAO ) {\n#ifdef GAMMA_INPUT\nvec4 aoColor = texture2D( tAO, vUv );\naoColor.xyz *= aoColor.xyz;\ngl_FragColor.xyz = gl_FragColor.xyz * aoColor.xyz;\n#else\ngl_FragColor.xyz = gl_FragColor.xyz * texture2D( tAO, vUv ).xyz;\n#endif\n}\nif( enableSpecular )\nspecularTex = texture2D( tSpecular, vUv ).xyz;\nmat3 tsb = mat3( normalize( vTangent ), normalize( vBinormal ), normalize( vNormal ) );\nvec3 finalNormal = tsb * normalTex;\n#ifdef FLIP_SIDED\nfinalNormal = -finalNormal;\n#endif\nvec3 normal = normalize( finalNormal );\nvec3 viewPosition = normalize( vViewPosition );\n#if MAX_POINT_LIGHTS > 0\nvec3 pointDiffuse = vec3( 0.0 );\nvec3 pointSpecular = vec3( 0.0 );\nfor ( int i = 0; i < MAX_POINT_LIGHTS; i ++ ) {\nvec4 lPosition = viewMatrix * vec4( pointLightPosition[ i ], 1.0 );\nvec3 pointVector = lPosition.xyz + vViewPosition.xyz;\nfloat pointDistance = 1.0;\nif ( pointLightDistance[ i ] > 0.0 )\npointDistance = 1.0 - min( ( length( pointVector ) / pointLightDistance[ i ] ), 1.0 );\npointVector = normalize( pointVector );\n#ifdef WRAP_AROUND\nfloat pointDiffuseWeightFull = max( dot( normal, pointVector ), 0.0 );\nfloat pointDiffuseWeightHalf = max( 0.5 * dot( normal, pointVector ) + 0.5, 0.0 );\nvec3 pointDiffuseWeight = mix( vec3 ( pointDiffuseWeightFull ), vec3( pointDiffuseWeightHalf ), wrapRGB );\n#else\nfloat pointDiffuseWeight = max( dot( normal, pointVector ), 0.0 );\n#endif\npointDiffuse += pointDistance * pointLightColor[ i ] * uDiffuseColor * pointDiffuseWeight;\nvec3 pointHalfVector = normalize( pointVector + viewPosition );\nfloat pointDotNormalHalf = max( dot( normal, pointHalfVector ), 0.0 );\nfloat pointSpecularWeight = specularTex.r * max( pow( pointDotNormalHalf, uShininess ), 0.0 );\n#ifdef PHYSICALLY_BASED_SHADING\nfloat specularNormalization = ( uShininess + 2.0001 ) / 8.0;\nvec3 schlick = uSpecularColor + vec3( 1.0 - uSpecularColor ) * pow( 1.0 - dot( pointVector, pointHalfVector ), 5.0 );\npointSpecular += schlick * pointLightColor[ i ] * pointSpecularWeight * pointDiffuseWeight * pointDistance * specularNormalization;\n#else\npointSpecular += pointDistance * pointLightColor[ i ] * uSpecularColor * pointSpecularWeight * pointDiffuseWeight;\n#endif\n}\n#endif\n#if MAX_SPOT_LIGHTS > 0\nvec3 spotDiffuse = vec3( 0.0 );\nvec3 spotSpecular = vec3( 0.0 );\nfor ( int i = 0; i < MAX_SPOT_LIGHTS; i ++ ) {\nvec4 lPosition = viewMatrix * vec4( spotLightPosition[ i ], 1.0 );\nvec3 spotVector = lPosition.xyz + vViewPosition.xyz;\nfloat spotDistance = 1.0;\nif ( spotLightDistance[ i ] > 0.0 )\nspotDistance = 1.0 - min( ( length( spotVector ) / spotLightDistance[ i ] ), 1.0 );\nspotVector = normalize( spotVector );\nfloat spotEffect = dot( spotLightDirection[ i ], normalize( spotLightPosition[ i ] - vWorldPosition ) );\nif ( spotEffect > spotLightAngle[ i ] ) {\nspotEffect = pow( spotEffect, spotLightExponent[ i ] );\n#ifdef WRAP_AROUND\nfloat spotDiffuseWeightFull = max( dot( normal, spotVector ), 0.0 );\nfloat spotDiffuseWeightHalf = max( 0.5 * dot( normal, spotVector ) + 0.5, 0.0 );\nvec3 spotDiffuseWeight = mix( vec3 ( spotDiffuseWeightFull ), vec3( spotDiffuseWeightHalf ), wrapRGB );\n#else\nfloat spotDiffuseWeight = max( dot( normal, spotVector ), 0.0 );\n#endif\nspotDiffuse += spotDistance * spotLightColor[ i ] * uDiffuseColor * spotDiffuseWeight * spotEffect;\nvec3 spotHalfVector = normalize( spotVector + viewPosition );\nfloat spotDotNormalHalf = max( dot( normal, spotHalfVector ), 0.0 );\nfloat spotSpecularWeight = specularTex.r * max( pow( spotDotNormalHalf, uShininess ), 0.0 );\n#ifdef PHYSICALLY_BASED_SHADING\nfloat specularNormalization = ( uShininess + 2.0001 ) / 8.0;\nvec3 schlick = uSpecularColor + vec3( 1.0 - uSpecularColor ) * pow( 1.0 - dot( spotVector, spotHalfVector ), 5.0 );\nspotSpecular += schlick * spotLightColor[ i ] * spotSpecularWeight * spotDiffuseWeight * spotDistance * specularNormalization * spotEffect;\n#else\nspotSpecular += spotDistance * spotLightColor[ i ] * uSpecularColor * spotSpecularWeight * spotDiffuseWeight * spotEffect;\n#endif\n}\n}\n#endif\n#if MAX_DIR_LIGHTS > 0\nvec3 dirDiffuse = vec3( 0.0 );\nvec3 dirSpecular = vec3( 0.0 );\nfor( int i = 0; i < MAX_DIR_LIGHTS; i++ ) {\nvec4 lDirection = viewMatrix * vec4( directionalLightDirection[ i ], 0.0 );\nvec3 dirVector = normalize( lDirection.xyz );\n#ifdef WRAP_AROUND\nfloat directionalLightWeightingFull = max( dot( normal, dirVector ), 0.0 );\nfloat directionalLightWeightingHalf = max( 0.5 * dot( normal, dirVector ) + 0.5, 0.0 );\nvec3 dirDiffuseWeight = mix( vec3( directionalLightWeightingFull ), vec3( directionalLightWeightingHalf ), wrapRGB );\n#else\nfloat dirDiffuseWeight = max( dot( normal, dirVector ), 0.0 );\n#endif\ndirDiffuse += directionalLightColor[ i ] * uDiffuseColor * dirDiffuseWeight;\nvec3 dirHalfVector = normalize( dirVector + viewPosition );\nfloat dirDotNormalHalf = max( dot( normal, dirHalfVector ), 0.0 );\nfloat dirSpecularWeight = specularTex.r * max( pow( dirDotNormalHalf, uShininess ), 0.0 );\n#ifdef PHYSICALLY_BASED_SHADING\nfloat specularNormalization = ( uShininess + 2.0001 ) / 8.0;\nvec3 schlick = uSpecularColor + vec3( 1.0 - uSpecularColor ) * pow( 1.0 - dot( dirVector, dirHalfVector ), 5.0 );\ndirSpecular += schlick * directionalLightColor[ i ] * dirSpecularWeight * dirDiffuseWeight * specularNormalization;\n#else\ndirSpecular += directionalLightColor[ i ] * uSpecularColor * dirSpecularWeight * dirDiffuseWeight;\n#endif\n}\n#endif\n#if MAX_HEMI_LIGHTS > 0\nvec3 hemiDiffuse  = vec3( 0.0 );\nvec3 hemiSpecular = vec3( 0.0 );\nfor( int i = 0; i < MAX_HEMI_LIGHTS; i ++ ) {\nvec4 lPosition = viewMatrix * vec4( hemisphereLightPosition[ i ], 1.0 );\nvec3 lVector = normalize( lPosition.xyz + vViewPosition.xyz );\nfloat dotProduct = dot( normal, lVector );\nfloat hemiDiffuseWeight = 0.5 * dotProduct + 0.5;\nvec3 hemiColor = mix( hemisphereLightGroundColor[ i ], hemisphereLightSkyColor[ i ], hemiDiffuseWeight );\nhemiDiffuse += uDiffuseColor * hemiColor;\nvec3 hemiHalfVectorSky = normalize( lVector + viewPosition );\nfloat hemiDotNormalHalfSky = 0.5 * dot( normal, hemiHalfVectorSky ) + 0.5;\nfloat hemiSpecularWeightSky = specularTex.r * max( pow( hemiDotNormalHalfSky, uShininess ), 0.0 );\nvec3 lVectorGround = normalize( -lPosition.xyz + vViewPosition.xyz );\nvec3 hemiHalfVectorGround = normalize( lVectorGround + viewPosition );\nfloat hemiDotNormalHalfGround = 0.5 * dot( normal, hemiHalfVectorGround ) + 0.5;\nfloat hemiSpecularWeightGround = specularTex.r * max( pow( hemiDotNormalHalfGround, uShininess ), 0.0 );\n#ifdef PHYSICALLY_BASED_SHADING\nfloat dotProductGround = dot( normal, lVectorGround );\nfloat specularNormalization = ( uShininess + 2.0001 ) / 8.0;\nvec3 schlickSky = uSpecularColor + vec3( 1.0 - uSpecularColor ) * pow( 1.0 - dot( lVector, hemiHalfVectorSky ), 5.0 );\nvec3 schlickGround = uSpecularColor + vec3( 1.0 - uSpecularColor ) * pow( 1.0 - dot( lVectorGround, hemiHalfVectorGround ), 5.0 );\nhemiSpecular += hemiColor * specularNormalization * ( schlickSky * hemiSpecularWeightSky * max( dotProduct, 0.0 ) + schlickGround * hemiSpecularWeightGround * max( dotProductGround, 0.0 ) );\n#else\nhemiSpecular += uSpecularColor * hemiColor * ( hemiSpecularWeightSky + hemiSpecularWeightGround ) * hemiDiffuseWeight;\n#endif\n}\n#endif\nvec3 totalDiffuse = vec3( 0.0 );\nvec3 totalSpecular = vec3( 0.0 );\n#if MAX_DIR_LIGHTS > 0\ntotalDiffuse += dirDiffuse;\ntotalSpecular += dirSpecular;\n#endif\n#if MAX_HEMI_LIGHTS > 0\ntotalDiffuse += hemiDiffuse;\ntotalSpecular += hemiSpecular;\n#endif\n#if MAX_POINT_LIGHTS > 0\ntotalDiffuse += pointDiffuse;\ntotalSpecular += pointSpecular;\n#endif\n#if MAX_SPOT_LIGHTS > 0\ntotalDiffuse += spotDiffuse;\ntotalSpecular += spotSpecular;\n#endif\n#ifdef METAL\ngl_FragColor.xyz = gl_FragColor.xyz * ( totalDiffuse + ambientLightColor * uAmbientColor + totalSpecular );\n#else\ngl_FragColor.xyz = gl_FragColor.xyz * ( totalDiffuse + ambientLightColor * uAmbientColor ) + totalSpecular;\n#endif\nif ( enableReflection ) {\nvec3 vReflect;\nvec3 cameraToVertex = normalize( vWorldPosition - cameraPosition );\nif ( useRefract ) {\nvReflect = refract( cameraToVertex, normal, uRefractionRatio );\n} else {\nvReflect = reflect( cameraToVertex, normal );\n}\nvec4 cubeColor = textureCube( tCube, vec3( -vReflect.x, vReflect.yz ) );\n#ifdef GAMMA_INPUT\ncubeColor.xyz *= cubeColor.xyz;\n#endif\ngl_FragColor.xyz = mix( gl_FragColor.xyz, cubeColor.xyz, specularTex.r * uReflectivity );\n}", 
                THREE.ShaderChunk.shadowmap_fragment, THREE.ShaderChunk.linear_to_gamma_fragment, THREE.ShaderChunk.fog_fragment, "}"].join("\n"),vertexShader: ["attribute vec4 tangent;\nuniform vec2 uOffset;\nuniform vec2 uRepeat;\nuniform bool enableDisplacement;\n#ifdef VERTEX_TEXTURES\nuniform sampler2D tDisplacement;\nuniform float uDisplacementScale;\nuniform float uDisplacementBias;\n#endif\nvarying vec3 vTangent;\nvarying vec3 vBinormal;\nvarying vec3 vNormal;\nvarying vec2 vUv;\nvarying vec3 vWorldPosition;\nvarying vec3 vViewPosition;", 
                THREE.ShaderChunk.skinning_pars_vertex, THREE.ShaderChunk.shadowmap_pars_vertex, "void main() {", THREE.ShaderChunk.skinbase_vertex, THREE.ShaderChunk.skinnormal_vertex, "#ifdef USE_SKINNING\nvNormal = normalMatrix * skinnedNormal.xyz;\nvec4 skinnedTangent = skinMatrix * vec4( tangent.xyz, 0.0 );\nvTangent = normalMatrix * skinnedTangent.xyz;\n#else\nvNormal = normalMatrix * normal;\nvTangent = normalMatrix * tangent.xyz;\n#endif\nvBinormal = cross( vNormal, vTangent ) * tangent.w;\nvUv = uv * uRepeat + uOffset;\nvec3 displacedPosition;\n#ifdef VERTEX_TEXTURES\nif ( enableDisplacement ) {\nvec3 dv = texture2D( tDisplacement, uv ).xyz;\nfloat df = uDisplacementScale * dv.x + uDisplacementBias;\ndisplacedPosition = position + normalize( normal ) * df;\n} else {\n#ifdef USE_SKINNING\nvec4 skinVertex = vec4( position, 1.0 );\nvec4 skinned  = boneMatX * skinVertex * skinWeight.x;\nskinned \t  += boneMatY * skinVertex * skinWeight.y;\ndisplacedPosition  = skinned.xyz;\n#else\ndisplacedPosition = position;\n#endif\n}\n#else\n#ifdef USE_SKINNING\nvec4 skinVertex = vec4( position, 1.0 );\nvec4 skinned  = boneMatX * skinVertex * skinWeight.x;\nskinned \t  += boneMatY * skinVertex * skinWeight.y;\ndisplacedPosition  = skinned.xyz;\n#else\ndisplacedPosition = position;\n#endif\n#endif\nvec4 mvPosition = modelViewMatrix * vec4( displacedPosition, 1.0 );\nvec4 mPosition = modelMatrix * vec4( displacedPosition, 1.0 );\ngl_Position = projectionMatrix * mvPosition;\nvWorldPosition = mPosition.xyz;\nvViewPosition = -mvPosition.xyz;\n#ifdef USE_SHADOWMAP\nfor( int i = 0; i < MAX_SHADOWS; i ++ ) {\nvShadowCoord[ i ] = shadowMatrix[ i ] * mPosition;\n}\n#endif\n}"].join("\n")},
        cube: {uniforms: {tCube: {type: "t",value: null},tFlip: {type: "f",value: -1}},vertexShader: "varying vec3 vViewPosition;\nvoid main() {\nvec4 mPosition = modelMatrix * vec4( position, 1.0 );\nvViewPosition = cameraPosition - mPosition.xyz;\ngl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}",fragmentShader: "uniform samplerCube tCube;\nuniform float tFlip;\nvarying vec3 vViewPosition;\nvoid main() {\nvec3 wPos = cameraPosition - vViewPosition;\ngl_FragColor = textureCube( tCube, vec3( tFlip * wPos.x, wPos.yz ) );\n}"}}});
THREE.FontUtils = {faces: {},face: "helvetiker",weight: "normal",style: "normal",size: 150,divisions: 10,getFace: function() {
        return this.faces[this.face][this.weight][this.style]
    },loadFace: function(a) {
        var b = a.familyName.toLowerCase();
        this.faces[b] = this.faces[b] || {};
        this.faces[b][a.cssFontWeight] = this.faces[b][a.cssFontWeight] || {};
        this.faces[b][a.cssFontWeight][a.cssFontStyle] = a;
        return this.faces[b][a.cssFontWeight][a.cssFontStyle] = a
    },drawText: function(a) {
        for (var b = this.getFace(), c = this.size / b.resolution, d = 
        0, e = String(a).split(""), f = e.length, g = [], a = 0; a < f; a++) {
            var h = new THREE.Path, h = this.extractGlyphPoints(e[a], b, c, d, h), d = d + h.offset;
            g.push(h.path)
        }
        return {paths: g,offset: d / 2}
    },extractGlyphPoints: function(a, b, c, d, e) {
        var f = [], g, h, i, j, l, n, m, q, p, o, r, t = b.glyphs[a] || b.glyphs["?"];
        if (t) {
            if (t.o) {
                b = t._cachedOutline || (t._cachedOutline = t.o.split(" "));
                j = b.length;
                for (a = 0; a < j; )
                    switch (i = b[a++], i) {
                        case "m":
                            i = b[a++] * c + d;
                            l = b[a++] * c;
                            e.moveTo(i, l);
                            break;
                        case "l":
                            i = b[a++] * c + d;
                            l = b[a++] * c;
                            e.lineTo(i, l);
                            break;
                        case "q":
                            i = b[a++] * 
                            c + d;
                            l = b[a++] * c;
                            q = b[a++] * c + d;
                            p = b[a++] * c;
                            e.quadraticCurveTo(q, p, i, l);
                            if (g = f[f.length - 1]) {
                                n = g.x;
                                m = g.y;
                                g = 1;
                                for (h = this.divisions; g <= h; g++) {
                                    var u = g / h;
                                    THREE.Shape.Utils.b2(u, n, q, i);
                                    THREE.Shape.Utils.b2(u, m, p, l)
                                }
                            }
                            break;
                        case "b":
                            if (i = b[a++] * c + d, l = b[a++] * c, q = b[a++] * c + d, p = b[a++] * -c, o = b[a++] * c + d, r = b[a++] * -c, e.bezierCurveTo(i, l, q, p, o, r), g = f[f.length - 1]) {
                                n = g.x;
                                m = g.y;
                                g = 1;
                                for (h = this.divisions; g <= h; g++)
                                    u = g / h, THREE.Shape.Utils.b3(u, n, q, o, i), THREE.Shape.Utils.b3(u, m, p, r, l)
                            }
                    }
            }
            return {offset: t.ha * c,path: e}
        }
    }};
THREE.FontUtils.generateShapes = function(a, b) {
    var b = b || {}, c = void 0 !== b.curveSegments ? b.curveSegments : 4, d = void 0 !== b.font ? b.font : "helvetiker", e = void 0 !== b.weight ? b.weight : "normal", f = void 0 !== b.style ? b.style : "normal";
    THREE.FontUtils.size = void 0 !== b.size ? b.size : 100;
    THREE.FontUtils.divisions = c;
    THREE.FontUtils.face = d;
    THREE.FontUtils.weight = e;
    THREE.FontUtils.style = f;
    c = THREE.FontUtils.drawText(a).paths;
    d = [];
    e = 0;
    for (f = c.length; e < f; e++)
        Array.prototype.push.apply(d, c[e].toShapes());
    return d
};
(function(a) {
    var b = function(a) {
        for (var b = a.length, e = 0, f = b - 1, g = 0; g < b; f = g++)
            e += a[f].x * a[g].y - a[g].x * a[f].y;
        return 0.5 * e
    };
    a.Triangulate = function(a, d) {
        var e = a.length;
        if (3 > e)
            return null;
        var f = [], g = [], h = [], i, j, l;
        if (0 < b(a))
            for (j = 0; j < e; j++)
                g[j] = j;
        else
            for (j = 0; j < e; j++)
                g[j] = e - 1 - j;
        var n = 2 * e;
        for (j = e - 1; 2 < e; ) {
            if (0 >= n--) {
                console.log("Warning, unable to triangulate polygon!");
                break
            }
            i = j;
            e <= i && (i = 0);
            j = i + 1;
            e <= j && (j = 0);
            l = j + 1;
            e <= l && (l = 0);
            var m;
            a: {
                m = a;
                var q = i, p = j, o = l, r = e, t = g, u = void 0, w = void 0, s = void 0, B = void 0, v = void 0, 
                A = void 0, E = void 0, x = void 0, L = void 0, w = m[t[q]].x, s = m[t[q]].y, B = m[t[p]].x, v = m[t[p]].y, A = m[t[o]].x, E = m[t[o]].y;
                if (1E-10 > (B - w) * (E - s) - (v - s) * (A - w))
                    m = !1;
                else {
                    for (u = 0; u < r; u++)
                        if (!(u == q || u == p || u == o)) {
                            var x = m[t[u]].x, L = m[t[u]].y, D = void 0, G = void 0, C = void 0, N = void 0, J = void 0, M = void 0, K = void 0, H = void 0, S = void 0, X = void 0, Z = void 0, I = void 0, D = A - B, G = E - v, C = w - A, N = s - E, J = B - w, M = v - s, K = x - w, H = L - s, S = x - B, X = L - v, Z = x - A, I = L - E, D = D * X - G * S, J = J * H - M * K, C = C * I - N * Z;
                            if (0 <= D && 0 <= C && 0 <= J) {
                                m = !1;
                                break a
                            }
                        }
                    m = !0
                }
            }
            if (m) {
                f.push([a[g[i]], a[g[j]], a[g[l]]]);
                h.push([g[i], g[j], g[l]]);
                i = j;
                for (l = j + 1; l < e; i++, l++)
                    g[i] = g[l];
                e--;
                n = 2 * e
            }
        }
        return d ? h : f
    };
    a.Triangulate.area = b;
    return a
})(THREE.FontUtils);
self._typeface_js = {faces: THREE.FontUtils.faces,loadFace: THREE.FontUtils.loadFace};
THREE.Curve = function() {
};
THREE.Curve.prototype.getPoint = function() {
    console.log("Warning, getPoint() not implemented!");
    return null
};
THREE.Curve.prototype.getPointAt = function(a) {
    a = this.getUtoTmapping(a);
    return this.getPoint(a)
};
THREE.Curve.prototype.getPoints = function(a) {
    a || (a = 5);
    var b, c = [];
    for (b = 0; b <= a; b++)
        c.push(this.getPoint(b / a));
    return c
};
THREE.Curve.prototype.getSpacedPoints = function(a) {
    a || (a = 5);
    var b, c = [];
    for (b = 0; b <= a; b++)
        c.push(this.getPointAt(b / a));
    return c
};
THREE.Curve.prototype.getLength = function() {
    var a = this.getLengths();
    return a[a.length - 1]
};
THREE.Curve.prototype.getLengths = function(a) {
    a || (a = this.__arcLengthDivisions ? this.__arcLengthDivisions : 200);
    if (this.cacheArcLengths && this.cacheArcLengths.length == a + 1 && !this.needsUpdate)
        return this.cacheArcLengths;
    this.needsUpdate = !1;
    var b = [], c, d = this.getPoint(0), e, f = 0;
    b.push(0);
    for (e = 1; e <= a; e++)
        c = this.getPoint(e / a), f += c.distanceTo(d), b.push(f), d = c;
    return this.cacheArcLengths = b
};
THREE.Curve.prototype.updateArcLengths = function() {
    this.needsUpdate = !0;
    this.getLengths()
};
THREE.Curve.prototype.getUtoTmapping = function(a, b) {
    var c = this.getLengths(), d = 0, e = c.length, f;
    f = b ? b : a * c[e - 1];
    for (var g = 0, h = e - 1, i; g <= h; )
        if (d = Math.floor(g + (h - g) / 2), i = c[d] - f, 0 > i)
            g = d + 1;
        else if (0 < i)
            h = d - 1;
        else {
            h = d;
            break
        }
    d = h;
    if (c[d] == f)
        return d / (e - 1);
    g = c[d];
    return (d + (f - g) / (c[d + 1] - g)) / (e - 1)
};
THREE.Curve.prototype.getNormalVector = function(a) {
    a = this.getTangent(a);
    return new THREE.Vector2(-a.y, a.x)
};
THREE.Curve.prototype.getTangent = function(a) {
    var b = a - 1E-4, a = a + 1E-4;
    0 > b && (b = 0);
    1 < a && (a = 1);
    b = this.getPoint(b);
    return this.getPoint(a).clone().subSelf(b).normalize()
};
THREE.Curve.prototype.getTangentAt = function(a) {
    a = this.getUtoTmapping(a);
    return this.getTangent(a)
};
THREE.LineCurve = function(a, b) {
    this.v1 = a;
    this.v2 = b
};
THREE.LineCurve.prototype = Object.create(THREE.Curve.prototype);
THREE.LineCurve.prototype.getPoint = function(a) {
    var b = this.v2.clone().subSelf(this.v1);
    b.multiplyScalar(a).addSelf(this.v1);
    return b
};
THREE.LineCurve.prototype.getPointAt = function(a) {
    return this.getPoint(a)
};
THREE.LineCurve.prototype.getTangent = function() {
    return this.v2.clone().subSelf(this.v1).normalize()
};
THREE.QuadraticBezierCurve = function(a, b, c) {
    this.v0 = a;
    this.v1 = b;
    this.v2 = c
};
THREE.QuadraticBezierCurve.prototype = Object.create(THREE.Curve.prototype);
THREE.QuadraticBezierCurve.prototype.getPoint = function(a) {
    var b;
    b = THREE.Shape.Utils.b2(a, this.v0.x, this.v1.x, this.v2.x);
    a = THREE.Shape.Utils.b2(a, this.v0.y, this.v1.y, this.v2.y);
    return new THREE.Vector2(b, a)
};
THREE.QuadraticBezierCurve.prototype.getTangent = function(a) {
    var b;
    b = THREE.Curve.Utils.tangentQuadraticBezier(a, this.v0.x, this.v1.x, this.v2.x);
    a = THREE.Curve.Utils.tangentQuadraticBezier(a, this.v0.y, this.v1.y, this.v2.y);
    b = new THREE.Vector2(b, a);
    b.normalize();
    return b
};
THREE.CubicBezierCurve = function(a, b, c, d) {
    this.v0 = a;
    this.v1 = b;
    this.v2 = c;
    this.v3 = d
};
THREE.CubicBezierCurve.prototype = Object.create(THREE.Curve.prototype);
THREE.CubicBezierCurve.prototype.getPoint = function(a) {
    var b;
    b = THREE.Shape.Utils.b3(a, this.v0.x, this.v1.x, this.v2.x, this.v3.x);
    a = THREE.Shape.Utils.b3(a, this.v0.y, this.v1.y, this.v2.y, this.v3.y);
    return new THREE.Vector2(b, a)
};
THREE.CubicBezierCurve.prototype.getTangent = function(a) {
    var b;
    b = THREE.Curve.Utils.tangentCubicBezier(a, this.v0.x, this.v1.x, this.v2.x, this.v3.x);
    a = THREE.Curve.Utils.tangentCubicBezier(a, this.v0.y, this.v1.y, this.v2.y, this.v3.y);
    b = new THREE.Vector2(b, a);
    b.normalize();
    return b
};
THREE.SplineCurve = function(a) {
    this.points = void 0 == a ? [] : a
};
THREE.SplineCurve.prototype = Object.create(THREE.Curve.prototype);
THREE.SplineCurve.prototype.getPoint = function(a) {
    var b = new THREE.Vector2, c = [], d = this.points, e;
    e = (d.length - 1) * a;
    a = Math.floor(e);
    e -= a;
    c[0] = 0 == a ? a : a - 1;
    c[1] = a;
    c[2] = a > d.length - 2 ? d.length - 1 : a + 1;
    c[3] = a > d.length - 3 ? d.length - 1 : a + 2;
    b.x = THREE.Curve.Utils.interpolate(d[c[0]].x, d[c[1]].x, d[c[2]].x, d[c[3]].x, e);
    b.y = THREE.Curve.Utils.interpolate(d[c[0]].y, d[c[1]].y, d[c[2]].y, d[c[3]].y, e);
    return b
};
THREE.EllipseCurve = function(a, b, c, d, e, f, g) {
    this.aX = a;
    this.aY = b;
    this.xRadius = c;
    this.yRadius = d;
    this.aStartAngle = e;
    this.aEndAngle = f;
    this.aClockwise = g
};
THREE.EllipseCurve.prototype = Object.create(THREE.Curve.prototype);
THREE.EllipseCurve.prototype.getPoint = function(a) {
    var b = this.aEndAngle - this.aStartAngle;
    this.aClockwise || (a = 1 - a);
    b = this.aStartAngle + a * b;
    a = this.aX + this.xRadius * Math.cos(b);
    b = this.aY + this.yRadius * Math.sin(b);
    return new THREE.Vector2(a, b)
};
THREE.ArcCurve = function(a, b, c, d, e, f) {
    THREE.EllipseCurve.call(this, a, b, c, c, d, e, f)
};
THREE.ArcCurve.prototype = Object.create(THREE.EllipseCurve.prototype);
THREE.Curve.Utils = {tangentQuadraticBezier: function(a, b, c, d) {
        return 2 * (1 - a) * (c - b) + 2 * a * (d - c)
    },tangentCubicBezier: function(a, b, c, d, e) {
        return -3 * b * (1 - a) * (1 - a) + 3 * c * (1 - a) * (1 - a) - 6 * a * c * (1 - a) + 6 * a * d * (1 - a) - 3 * a * a * d + 3 * a * a * e
    },tangentSpline: function(a) {
        return 6 * a * a - 6 * a + (3 * a * a - 4 * a + 1) + (-6 * a * a + 6 * a) + (3 * a * a - 2 * a)
    },interpolate: function(a, b, c, d, e) {
        var a = 0.5 * (c - a), d = 0.5 * (d - b), f = e * e;
        return (2 * b - 2 * c + a + d) * e * f + (-3 * b + 3 * c - 2 * a - d) * f + a * e + b
    }};
THREE.Curve.create = function(a, b) {
    a.prototype = Object.create(THREE.Curve.prototype);
    a.prototype.getPoint = b;
    return a
};
THREE.LineCurve3 = THREE.Curve.create(function(a, b) {
    this.v1 = a;
    this.v2 = b
}, function(a) {
    var b = new THREE.Vector3;
    b.sub(this.v2, this.v1);
    b.multiplyScalar(a);
    b.addSelf(this.v1);
    return b
});
THREE.QuadraticBezierCurve3 = THREE.Curve.create(function(a, b, c) {
    this.v0 = a;
    this.v1 = b;
    this.v2 = c
}, function(a) {
    var b, c;
    b = THREE.Shape.Utils.b2(a, this.v0.x, this.v1.x, this.v2.x);
    c = THREE.Shape.Utils.b2(a, this.v0.y, this.v1.y, this.v2.y);
    a = THREE.Shape.Utils.b2(a, this.v0.z, this.v1.z, this.v2.z);
    return new THREE.Vector3(b, c, a)
});
THREE.CubicBezierCurve3 = THREE.Curve.create(function(a, b, c, d) {
    this.v0 = a;
    this.v1 = b;
    this.v2 = c;
    this.v3 = d
}, function(a) {
    var b, c;
    b = THREE.Shape.Utils.b3(a, this.v0.x, this.v1.x, this.v2.x, this.v3.x);
    c = THREE.Shape.Utils.b3(a, this.v0.y, this.v1.y, this.v2.y, this.v3.y);
    a = THREE.Shape.Utils.b3(a, this.v0.z, this.v1.z, this.v2.z, this.v3.z);
    return new THREE.Vector3(b, c, a)
});
THREE.SplineCurve3 = THREE.Curve.create(function(a) {
    this.points = void 0 == a ? [] : a
}, function(a) {
    var b = new THREE.Vector3, c = [], d = this.points, e, a = (d.length - 1) * a;
    e = Math.floor(a);
    a -= e;
    c[0] = 0 == e ? e : e - 1;
    c[1] = e;
    c[2] = e > d.length - 2 ? d.length - 1 : e + 1;
    c[3] = e > d.length - 3 ? d.length - 1 : e + 2;
    e = d[c[0]];
    var f = d[c[1]], g = d[c[2]], c = d[c[3]];
    b.x = THREE.Curve.Utils.interpolate(e.x, f.x, g.x, c.x, a);
    b.y = THREE.Curve.Utils.interpolate(e.y, f.y, g.y, c.y, a);
    b.z = THREE.Curve.Utils.interpolate(e.z, f.z, g.z, c.z, a);
    return b
});
THREE.ClosedSplineCurve3 = THREE.Curve.create(function(a) {
    this.points = void 0 == a ? [] : a
}, function(a) {
    var b = new THREE.Vector3, c = [], d = this.points, e;
    e = (d.length - 0) * a;
    a = Math.floor(e);
    e -= a;
    a += 0 < a ? 0 : (Math.floor(Math.abs(a) / d.length) + 1) * d.length;
    c[0] = (a - 1) % d.length;
    c[1] = a % d.length;
    c[2] = (a + 1) % d.length;
    c[3] = (a + 2) % d.length;
    b.x = THREE.Curve.Utils.interpolate(d[c[0]].x, d[c[1]].x, d[c[2]].x, d[c[3]].x, e);
    b.y = THREE.Curve.Utils.interpolate(d[c[0]].y, d[c[1]].y, d[c[2]].y, d[c[3]].y, e);
    b.z = THREE.Curve.Utils.interpolate(d[c[0]].z, 
    d[c[1]].z, d[c[2]].z, d[c[3]].z, e);
    return b
});
THREE.CurvePath = function() {
    this.curves = [];
    this.bends = [];
    this.autoClose = !1
};
THREE.CurvePath.prototype = Object.create(THREE.Curve.prototype);
THREE.CurvePath.prototype.add = function(a) {
    this.curves.push(a)
};
THREE.CurvePath.prototype.checkConnection = function() {
};
THREE.CurvePath.prototype.closePath = function() {
    var a = this.curves[0].getPoint(0), b = this.curves[this.curves.length - 1].getPoint(1);
    a.equals(b) || this.curves.push(new THREE.LineCurve(b, a))
};
THREE.CurvePath.prototype.getPoint = function(a) {
    for (var b = a * this.getLength(), c = this.getCurveLengths(), a = 0; a < c.length; ) {
        if (c[a] >= b)
            return b = c[a] - b, a = this.curves[a], b = 1 - b / a.getLength(), a.getPointAt(b);
        a++
    }
    return null
};
THREE.CurvePath.prototype.getLength = function() {
    var a = this.getCurveLengths();
    return a[a.length - 1]
};
THREE.CurvePath.prototype.getCurveLengths = function() {
    if (this.cacheLengths && this.cacheLengths.length == this.curves.length)
        return this.cacheLengths;
    var a = [], b = 0, c, d = this.curves.length;
    for (c = 0; c < d; c++)
        b += this.curves[c].getLength(), a.push(b);
    return this.cacheLengths = a
};
THREE.CurvePath.prototype.getBoundingBox = function() {
    var a = this.getPoints(), b, c, d, e, f, g;
    b = c = Number.NEGATIVE_INFINITY;
    e = f = Number.POSITIVE_INFINITY;
    var h, i, j, l, n = a[0] instanceof THREE.Vector3;
    l = n ? new THREE.Vector3 : new THREE.Vector2;
    i = 0;
    for (j = a.length; i < j; i++)
        h = a[i], h.x > b ? b = h.x : h.x < e && (e = h.x), h.y > c ? c = h.y : h.y < f && (f = h.y), n && (h.z > d ? d = h.z : h.z < g && (g = h.z)), l.addSelf(h);
    a = {minX: e,minY: f,maxX: b,maxY: c,centroid: l.divideScalar(j)};
    n && (a.maxZ = d, a.minZ = g);
    return a
};
THREE.CurvePath.prototype.createPointsGeometry = function(a) {
    a = this.getPoints(a, !0);
    return this.createGeometry(a)
};
THREE.CurvePath.prototype.createSpacedPointsGeometry = function(a) {
    a = this.getSpacedPoints(a, !0);
    return this.createGeometry(a)
};
THREE.CurvePath.prototype.createGeometry = function(a) {
    for (var b = new THREE.Geometry, c = 0; c < a.length; c++)
        b.vertices.push(new THREE.Vector3(a[c].x, a[c].y, a[c].z || 0));
    return b
};
THREE.CurvePath.prototype.addWrapPath = function(a) {
    this.bends.push(a)
};
THREE.CurvePath.prototype.getTransformedPoints = function(a, b) {
    var c = this.getPoints(a), d, e;
    b || (b = this.bends);
    d = 0;
    for (e = b.length; d < e; d++)
        c = this.getWrapPoints(c, b[d]);
    return c
};
THREE.CurvePath.prototype.getTransformedSpacedPoints = function(a, b) {
    var c = this.getSpacedPoints(a), d, e;
    b || (b = this.bends);
    d = 0;
    for (e = b.length; d < e; d++)
        c = this.getWrapPoints(c, b[d]);
    return c
};
THREE.CurvePath.prototype.getWrapPoints = function(a, b) {
    var c = this.getBoundingBox(), d, e, f, g, h, i;
    d = 0;
    for (e = a.length; d < e; d++)
        f = a[d], g = f.x, h = f.y, i = g / c.maxX, i = b.getUtoTmapping(i, g), g = b.getPoint(i), h = b.getNormalVector(i).multiplyScalar(h), f.x = g.x + h.x, f.y = g.y + h.y;
    return a
};
THREE.Gyroscope = function() {
    THREE.Object3D.call(this)
};
THREE.Gyroscope.prototype = Object.create(THREE.Object3D.prototype);
THREE.Gyroscope.prototype.updateMatrixWorld = function(a) {
    this.matrixAutoUpdate && this.updateMatrix();
    if (this.matrixWorldNeedsUpdate || a)
        this.parent ? (this.matrixWorld.multiply(this.parent.matrixWorld, this.matrix), this.matrixWorld.decompose(this.translationWorld, this.rotationWorld, this.scaleWorld), this.matrix.decompose(this.translationObject, this.rotationObject, this.scaleObject), this.matrixWorld.compose(this.translationWorld, this.rotationObject, this.scaleWorld)) : this.matrixWorld.copy(this.matrix), this.matrixWorldNeedsUpdate = 
        !1, a = !0;
    for (var b = 0, c = this.children.length; b < c; b++)
        this.children[b].updateMatrixWorld(a)
};
THREE.Gyroscope.prototype.translationWorld = new THREE.Vector3;
THREE.Gyroscope.prototype.translationObject = new THREE.Vector3;
THREE.Gyroscope.prototype.rotationWorld = new THREE.Quaternion;
THREE.Gyroscope.prototype.rotationObject = new THREE.Quaternion;
THREE.Gyroscope.prototype.scaleWorld = new THREE.Vector3;
THREE.Gyroscope.prototype.scaleObject = new THREE.Vector3;
THREE.Path = function(a) {
    THREE.CurvePath.call(this);
    this.actions = [];
    a && this.fromPoints(a)
};
THREE.Path.prototype = Object.create(THREE.CurvePath.prototype);
THREE.PathActions = {MOVE_TO: "moveTo",LINE_TO: "lineTo",QUADRATIC_CURVE_TO: "quadraticCurveTo",BEZIER_CURVE_TO: "bezierCurveTo",CSPLINE_THRU: "splineThru",ARC: "arc",ELLIPSE: "ellipse"};
THREE.Path.prototype.fromPoints = function(a) {
    this.moveTo(a[0].x, a[0].y);
    for (var b = 1, c = a.length; b < c; b++)
        this.lineTo(a[b].x, a[b].y)
};
THREE.Path.prototype.moveTo = function(a, b) {
    var c = Array.prototype.slice.call(arguments);
    this.actions.push({action: THREE.PathActions.MOVE_TO,args: c})
};
THREE.Path.prototype.lineTo = function(a, b) {
    var c = Array.prototype.slice.call(arguments), d = this.actions[this.actions.length - 1].args, d = new THREE.LineCurve(new THREE.Vector2(d[d.length - 2], d[d.length - 1]), new THREE.Vector2(a, b));
    this.curves.push(d);
    this.actions.push({action: THREE.PathActions.LINE_TO,args: c})
};
THREE.Path.prototype.quadraticCurveTo = function(a, b, c, d) {
    var e = Array.prototype.slice.call(arguments), f = this.actions[this.actions.length - 1].args, f = new THREE.QuadraticBezierCurve(new THREE.Vector2(f[f.length - 2], f[f.length - 1]), new THREE.Vector2(a, b), new THREE.Vector2(c, d));
    this.curves.push(f);
    this.actions.push({action: THREE.PathActions.QUADRATIC_CURVE_TO,args: e})
};
THREE.Path.prototype.bezierCurveTo = function(a, b, c, d, e, f) {
    var g = Array.prototype.slice.call(arguments), h = this.actions[this.actions.length - 1].args, h = new THREE.CubicBezierCurve(new THREE.Vector2(h[h.length - 2], h[h.length - 1]), new THREE.Vector2(a, b), new THREE.Vector2(c, d), new THREE.Vector2(e, f));
    this.curves.push(h);
    this.actions.push({action: THREE.PathActions.BEZIER_CURVE_TO,args: g})
};
THREE.Path.prototype.splineThru = function(a) {
    var b = Array.prototype.slice.call(arguments), c = this.actions[this.actions.length - 1].args, c = [new THREE.Vector2(c[c.length - 2], c[c.length - 1])];
    Array.prototype.push.apply(c, a);
    c = new THREE.SplineCurve(c);
    this.curves.push(c);
    this.actions.push({action: THREE.PathActions.CSPLINE_THRU,args: b})
};
THREE.Path.prototype.arc = function(a, b, c, d, e, f) {
    var g = this.actions[this.actions.length - 1].args;
    this.absarc(a + g[g.length - 2], b + g[g.length - 1], c, d, e, f)
};
THREE.Path.prototype.absarc = function(a, b, c, d, e, f) {
    this.absellipse(a, b, c, c, d, e, f)
};
THREE.Path.prototype.ellipse = function(a, b, c, d, e, f, g) {
    var h = this.actions[this.actions.length - 1].args;
    this.absellipse(a + h[h.length - 2], b + h[h.length - 1], c, d, e, f, g)
};
THREE.Path.prototype.absellipse = function(a, b, c, d, e, f, g) {
    var h = Array.prototype.slice.call(arguments), i = new THREE.EllipseCurve(a, b, c, d, e, f, g);
    this.curves.push(i);
    i = i.getPoint(g ? 1 : 0);
    h.push(i.x);
    h.push(i.y);
    this.actions.push({action: THREE.PathActions.ELLIPSE,args: h})
};
THREE.Path.prototype.getSpacedPoints = function(a) {
    a || (a = 40);
    for (var b = [], c = 0; c < a; c++)
        b.push(this.getPoint(c / a));
    return b
};
THREE.Path.prototype.getPoints = function(a, b) {
    if (this.useSpacedPoints)
        return console.log("tata"), this.getSpacedPoints(a, b);
    var a = a || 12, c = [], d, e, f, g, h, i, j, l, n, m, q, p, o;
    d = 0;
    for (e = this.actions.length; d < e; d++)
        switch (f = this.actions[d], g = f.action, f = f.args, g) {
            case THREE.PathActions.MOVE_TO:
                c.push(new THREE.Vector2(f[0], f[1]));
                break;
            case THREE.PathActions.LINE_TO:
                c.push(new THREE.Vector2(f[0], f[1]));
                break;
            case THREE.PathActions.QUADRATIC_CURVE_TO:
                h = f[2];
                i = f[3];
                n = f[0];
                m = f[1];
                0 < c.length ? (g = c[c.length - 1], q = g.x, 
                p = g.y) : (g = this.actions[d - 1].args, q = g[g.length - 2], p = g[g.length - 1]);
                for (f = 1; f <= a; f++)
                    o = f / a, g = THREE.Shape.Utils.b2(o, q, n, h), o = THREE.Shape.Utils.b2(o, p, m, i), c.push(new THREE.Vector2(g, o));
                break;
            case THREE.PathActions.BEZIER_CURVE_TO:
                h = f[4];
                i = f[5];
                n = f[0];
                m = f[1];
                j = f[2];
                l = f[3];
                0 < c.length ? (g = c[c.length - 1], q = g.x, p = g.y) : (g = this.actions[d - 1].args, q = g[g.length - 2], p = g[g.length - 1]);
                for (f = 1; f <= a; f++)
                    o = f / a, g = THREE.Shape.Utils.b3(o, q, n, j, h), o = THREE.Shape.Utils.b3(o, p, m, l, i), c.push(new THREE.Vector2(g, o));
                break;
            case THREE.PathActions.CSPLINE_THRU:
                g = 
                this.actions[d - 1].args;
                o = [new THREE.Vector2(g[g.length - 2], g[g.length - 1])];
                g = a * f[0].length;
                o = o.concat(f[0]);
                o = new THREE.SplineCurve(o);
                for (f = 1; f <= g; f++)
                    c.push(o.getPointAt(f / g));
                break;
            case THREE.PathActions.ARC:
                h = f[0];
                i = f[1];
                m = f[2];
                j = f[3];
                g = f[4];
                n = !!f[5];
                q = g - j;
                p = 2 * a;
                for (f = 1; f <= p; f++)
                    o = f / p, n || (o = 1 - o), o = j + o * q, g = h + m * Math.cos(o), o = i + m * Math.sin(o), c.push(new THREE.Vector2(g, o));
                break;
            case THREE.PathActions.ELLIPSE:
                h = f[0];
                i = f[1];
                m = f[2];
                l = f[3];
                j = f[4];
                g = f[5];
                n = !!f[6];
                q = g - j;
                p = 2 * a;
                for (f = 1; f <= p; f++)
                    o = f / p, n || 
                    (o = 1 - o), o = j + o * q, g = h + m * Math.cos(o), o = i + l * Math.sin(o), c.push(new THREE.Vector2(g, o))
        }
    d = c[c.length - 1];
    1E-10 > Math.abs(d.x - c[0].x) && 1E-10 > Math.abs(d.y - c[0].y) && c.splice(c.length - 1, 1);
    b && c.push(c[0]);
    return c
};
THREE.Path.prototype.toShapes = function() {
    var a, b, c, d, e = [], f = new THREE.Path;
    a = 0;
    for (b = this.actions.length; a < b; a++)
        c = this.actions[a], d = c.args, c = c.action, c == THREE.PathActions.MOVE_TO && 0 != f.actions.length && (e.push(f), f = new THREE.Path), f[c].apply(f, d);
    0 != f.actions.length && e.push(f);
    if (0 == e.length)
        return [];
    var g;
    d = [];
    a = !THREE.Shape.Utils.isClockWise(e[0].getPoints());
    if (1 == e.length)
        return f = e[0], g = new THREE.Shape, g.actions = f.actions, g.curves = f.curves, d.push(g), d;
    if (a) {
        g = new THREE.Shape;
        a = 0;
        for (b = e.length; a < 
        b; a++)
            f = e[a], THREE.Shape.Utils.isClockWise(f.getPoints()) ? (g.actions = f.actions, g.curves = f.curves, d.push(g), g = new THREE.Shape) : g.holes.push(f)
    } else {
        a = 0;
        for (b = e.length; a < b; a++)
            f = e[a], THREE.Shape.Utils.isClockWise(f.getPoints()) ? (g && d.push(g), g = new THREE.Shape, g.actions = f.actions, g.curves = f.curves) : g.holes.push(f);
        d.push(g)
    }
    return d
};
THREE.Shape = function() {
    THREE.Path.apply(this, arguments);
    this.holes = []
};
THREE.Shape.prototype = Object.create(THREE.Path.prototype);
THREE.Shape.prototype.extrude = function(a) {
    return new THREE.ExtrudeGeometry(this, a)
};
THREE.Shape.prototype.makeGeometry = function(a) {
    return new THREE.ShapeGeometry(this, a)
};
THREE.Shape.prototype.getPointsHoles = function(a) {
    var b, c = this.holes.length, d = [];
    for (b = 0; b < c; b++)
        d[b] = this.holes[b].getTransformedPoints(a, this.bends);
    return d
};
THREE.Shape.prototype.getSpacedPointsHoles = function(a) {
    var b, c = this.holes.length, d = [];
    for (b = 0; b < c; b++)
        d[b] = this.holes[b].getTransformedSpacedPoints(a, this.bends);
    return d
};
THREE.Shape.prototype.extractAllPoints = function(a) {
    return {shape: this.getTransformedPoints(a),holes: this.getPointsHoles(a)}
};
THREE.Shape.prototype.extractPoints = function(a) {
    return this.useSpacedPoints ? this.extractAllSpacedPoints(a) : this.extractAllPoints(a)
};
THREE.Shape.prototype.extractAllSpacedPoints = function(a) {
    return {shape: this.getTransformedSpacedPoints(a),holes: this.getSpacedPointsHoles(a)}
};
THREE.Shape.Utils = {removeHoles: function(a, b) {
        var c = a.concat(), d = c.concat(), e, f, g, h, i, j, l, n, m, q, p = [];
        for (i = 0; i < b.length; i++) {
            j = b[i];
            Array.prototype.push.apply(d, j);
            f = Number.POSITIVE_INFINITY;
            for (e = 0; e < j.length; e++) {
                m = j[e];
                q = [];
                for (n = 0; n < c.length; n++)
                    l = c[n], l = m.distanceToSquared(l), q.push(l), l < f && (f = l, g = e, h = n)
            }
            e = 0 <= h - 1 ? h - 1 : c.length - 1;
            f = 0 <= g - 1 ? g - 1 : j.length - 1;
            var o = [j[g], c[h], c[e]];
            n = THREE.FontUtils.Triangulate.area(o);
            var r = [j[g], j[f], c[h]];
            m = THREE.FontUtils.Triangulate.area(r);
            q = h;
            l = g;
            h += 1;
            g += -1;
            0 > 
            h && (h += c.length);
            h %= c.length;
            0 > g && (g += j.length);
            g %= j.length;
            e = 0 <= h - 1 ? h - 1 : c.length - 1;
            f = 0 <= g - 1 ? g - 1 : j.length - 1;
            o = [j[g], c[h], c[e]];
            o = THREE.FontUtils.Triangulate.area(o);
            r = [j[g], j[f], c[h]];
            r = THREE.FontUtils.Triangulate.area(r);
            n + m > o + r && (h = q, g = l, 0 > h && (h += c.length), h %= c.length, 0 > g && (g += j.length), g %= j.length, e = 0 <= h - 1 ? h - 1 : c.length - 1, f = 0 <= g - 1 ? g - 1 : j.length - 1);
            n = c.slice(0, h);
            m = c.slice(h);
            q = j.slice(g);
            l = j.slice(0, g);
            f = [j[g], j[f], c[h]];
            p.push([j[g], c[h], c[e]]);
            p.push(f);
            c = n.concat(q).concat(l).concat(m)
        }
        return {shape: c,
            isolatedPts: p,allpoints: d}
    },triangulateShape: function(a, b) {
        var c = THREE.Shape.Utils.removeHoles(a, b), d = c.allpoints, e = c.isolatedPts, c = THREE.FontUtils.Triangulate(c.shape, !1), f, g, h, i, j = {};
        f = 0;
        for (g = d.length; f < g; f++)
            i = d[f].x + ":" + d[f].y, void 0 !== j[i] && console.log("Duplicate point", i), j[i] = f;
        f = 0;
        for (g = c.length; f < g; f++) {
            h = c[f];
            for (d = 0; 3 > d; d++)
                i = h[d].x + ":" + h[d].y, i = j[i], void 0 !== i && (h[d] = i)
        }
        f = 0;
        for (g = e.length; f < g; f++) {
            h = e[f];
            for (d = 0; 3 > d; d++)
                i = h[d].x + ":" + h[d].y, i = j[i], void 0 !== i && (h[d] = i)
        }
        return c.concat(e)
    },
    isClockWise: function(a) {
        return 0 > THREE.FontUtils.Triangulate.area(a)
    },b2p0: function(a, b) {
        var c = 1 - a;
        return c * c * b
    },b2p1: function(a, b) {
        return 2 * (1 - a) * a * b
    },b2p2: function(a, b) {
        return a * a * b
    },b2: function(a, b, c, d) {
        return this.b2p0(a, b) + this.b2p1(a, c) + this.b2p2(a, d)
    },b3p0: function(a, b) {
        var c = 1 - a;
        return c * c * c * b
    },b3p1: function(a, b) {
        var c = 1 - a;
        return 3 * c * c * a * b
    },b3p2: function(a, b) {
        return 3 * (1 - a) * a * a * b
    },b3p3: function(a, b) {
        return a * a * a * b
    },b3: function(a, b, c, d, e) {
        return this.b3p0(a, b) + this.b3p1(a, c) + this.b3p2(a, d) + 
        this.b3p3(a, e)
    }};
THREE.AnimationHandler = function() {
    var a = [], b = {}, c = {update: function(b) {
            for (var c = 0; c < a.length; c++)
                a[c].update(b)
        },addToUpdate: function(b) {
            -1 === a.indexOf(b) && a.push(b)
        },removeFromUpdate: function(b) {
            b = a.indexOf(b);
            -1 !== b && a.splice(b, 1)
        },add: function(a) {
            void 0 !== b[a.name] && console.log("THREE.AnimationHandler.add: Warning! " + a.name + " already exists in library. Overwriting.");
            b[a.name] = a;
            if (!0 !== a.initialized) {
                for (var c = 0; c < a.hierarchy.length; c++) {
                    for (var d = 0; d < a.hierarchy[c].keys.length; d++)
                        if (0 > a.hierarchy[c].keys[d].time && 
                        (a.hierarchy[c].keys[d].time = 0), void 0 !== a.hierarchy[c].keys[d].rot && !(a.hierarchy[c].keys[d].rot instanceof THREE.Quaternion)) {
                            var h = a.hierarchy[c].keys[d].rot;
                            a.hierarchy[c].keys[d].rot = new THREE.Quaternion(h[0], h[1], h[2], h[3])
                        }
                    if (a.hierarchy[c].keys.length && void 0 !== a.hierarchy[c].keys[0].morphTargets) {
                        h = {};
                        for (d = 0; d < a.hierarchy[c].keys.length; d++)
                            for (var i = 0; i < a.hierarchy[c].keys[d].morphTargets.length; i++) {
                                var j = a.hierarchy[c].keys[d].morphTargets[i];
                                h[j] = -1
                            }
                        a.hierarchy[c].usedMorphTargets = h;
                        for (d = 0; d < a.hierarchy[c].keys.length; d++) {
                            var l = {};
                            for (j in h) {
                                for (i = 0; i < a.hierarchy[c].keys[d].morphTargets.length; i++)
                                    if (a.hierarchy[c].keys[d].morphTargets[i] === j) {
                                        l[j] = a.hierarchy[c].keys[d].morphTargetsInfluences[i];
                                        break
                                    }
                                i === a.hierarchy[c].keys[d].morphTargets.length && (l[j] = 0)
                            }
                            a.hierarchy[c].keys[d].morphTargetsInfluences = l
                        }
                    }
                    for (d = 1; d < a.hierarchy[c].keys.length; d++)
                        a.hierarchy[c].keys[d].time === a.hierarchy[c].keys[d - 1].time && (a.hierarchy[c].keys.splice(d, 1), d--);
                    for (d = 0; d < a.hierarchy[c].keys.length; d++)
                        a.hierarchy[c].keys[d].index = 
                        d
                }
                d = parseInt(a.length * a.fps, 10);
                a.JIT = {};
                a.JIT.hierarchy = [];
                for (c = 0; c < a.hierarchy.length; c++)
                    a.JIT.hierarchy.push(Array(d));
                a.initialized = !0
            }
        },get: function(a) {
            if ("string" === typeof a) {
                if (b[a])
                    return b[a];
                console.log("THREE.AnimationHandler.get: Couldn't find animation " + a);
                return null
            }
        },parse: function(a) {
            var b = [];
            if (a instanceof THREE.SkinnedMesh)
                for (var c = 0; c < a.bones.length; c++)
                    b.push(a.bones[c]);
            else
                d(a, b);
            return b
        }}, d = function(a, b) {
        b.push(a);
        for (var c = 0; c < a.children.length; c++)
            d(a.children[c], 
            b)
    };
    c.LINEAR = 0;
    c.CATMULLROM = 1;
    c.CATMULLROM_FORWARD = 2;
    return c
}();
THREE.Animation = function(a, b, c) {
    this.root = a;
    this.data = THREE.AnimationHandler.get(b);
    this.hierarchy = THREE.AnimationHandler.parse(a);
    this.currentTime = 0;
    this.timeScale = 1;
    this.isPlaying = !1;
    this.loop = this.isPaused = !0;
    this.interpolationType = void 0 !== c ? c : THREE.AnimationHandler.LINEAR;
    this.points = [];
    this.target = new THREE.Vector3
};
THREE.Animation.prototype.play = function(a, b) {
    if (!1 === this.isPlaying) {
        this.isPlaying = !0;
        this.loop = void 0 !== a ? a : !0;
        this.currentTime = void 0 !== b ? b : 0;
        var c, d = this.hierarchy.length, e;
        for (c = 0; c < d; c++) {
            e = this.hierarchy[c];
            this.interpolationType !== THREE.AnimationHandler.CATMULLROM_FORWARD && (e.useQuaternion = !0);
            e.matrixAutoUpdate = !0;
            void 0 === e.animationCache && (e.animationCache = {}, e.animationCache.prevKey = {pos: 0,rot: 0,scl: 0}, e.animationCache.nextKey = {pos: 0,rot: 0,scl: 0}, e.animationCache.originalMatrix = e instanceof 
            THREE.Bone ? e.skinMatrix : e.matrix);
            var f = e.animationCache.prevKey;
            e = e.animationCache.nextKey;
            f.pos = this.data.hierarchy[c].keys[0];
            f.rot = this.data.hierarchy[c].keys[0];
            f.scl = this.data.hierarchy[c].keys[0];
            e.pos = this.getNextKeyWith("pos", c, 1);
            e.rot = this.getNextKeyWith("rot", c, 1);
            e.scl = this.getNextKeyWith("scl", c, 1)
        }
        this.update(0)
    }
    this.isPaused = !1;
    THREE.AnimationHandler.addToUpdate(this)
};
THREE.Animation.prototype.pause = function() {
    !0 === this.isPaused ? THREE.AnimationHandler.addToUpdate(this) : THREE.AnimationHandler.removeFromUpdate(this);
    this.isPaused = !this.isPaused
};
THREE.Animation.prototype.stop = function() {
    this.isPaused = this.isPlaying = !1;
    THREE.AnimationHandler.removeFromUpdate(this)
};
THREE.Animation.prototype.update = function(a) {
    if (!1 !== this.isPlaying) {
        var b = ["pos", "rot", "scl"], c, d, e, f, g, h, i, j, l;
        l = this.currentTime += a * this.timeScale;
        j = this.currentTime %= this.data.length;
        parseInt(Math.min(j * this.data.fps, this.data.length * this.data.fps), 10);
        for (var n = 0, m = this.hierarchy.length; n < m; n++) {
            a = this.hierarchy[n];
            i = a.animationCache;
            for (var q = 0; 3 > q; q++) {
                c = b[q];
                g = i.prevKey[c];
                h = i.nextKey[c];
                if (h.time <= l) {
                    if (j < l)
                        if (this.loop) {
                            g = this.data.hierarchy[n].keys[0];
                            for (h = this.getNextKeyWith(c, n, 1); h.time < 
                            j; )
                                g = h, h = this.getNextKeyWith(c, n, h.index + 1)
                        } else {
                            this.stop();
                            return
                        }
                    else {
                        do
                            g = h, h = this.getNextKeyWith(c, n, h.index + 1);
                        while (h.time < j)
                    }
                    i.prevKey[c] = g;
                    i.nextKey[c] = h
                }
                a.matrixAutoUpdate = !0;
                a.matrixWorldNeedsUpdate = !0;
                d = (j - g.time) / (h.time - g.time);
                e = g[c];
                f = h[c];
                if (0 > d || 1 < d)
                    console.log("THREE.Animation.update: Warning! Scale out of bounds:" + d + " on bone " + n), d = 0 > d ? 0 : 1;
                if ("pos" === c)
                    if (c = a.position, this.interpolationType === THREE.AnimationHandler.LINEAR)
                        c.x = e[0] + (f[0] - e[0]) * d, c.y = e[1] + (f[1] - e[1]) * d, c.z = e[2] + 
                        (f[2] - e[2]) * d;
                    else {
                        if (this.interpolationType === THREE.AnimationHandler.CATMULLROM || this.interpolationType === THREE.AnimationHandler.CATMULLROM_FORWARD)
                            this.points[0] = this.getPrevKeyWith("pos", n, g.index - 1).pos, this.points[1] = e, this.points[2] = f, this.points[3] = this.getNextKeyWith("pos", n, h.index + 1).pos, d = 0.33 * d + 0.33, e = this.interpolateCatmullRom(this.points, d), c.x = e[0], c.y = e[1], c.z = e[2], this.interpolationType === THREE.AnimationHandler.CATMULLROM_FORWARD && (d = this.interpolateCatmullRom(this.points, 1.01 * d), 
                            this.target.set(d[0], d[1], d[2]), this.target.subSelf(c), this.target.y = 0, this.target.normalize(), d = Math.atan2(this.target.x, this.target.z), a.rotation.set(0, d, 0))
                    }
                else
                    "rot" === c ? THREE.Quaternion.slerp(e, f, a.quaternion, d) : "scl" === c && (c = a.scale, c.x = e[0] + (f[0] - e[0]) * d, c.y = e[1] + (f[1] - e[1]) * d, c.z = e[2] + (f[2] - e[2]) * d)
            }
        }
    }
};
THREE.Animation.prototype.interpolateCatmullRom = function(a, b) {
    var c = [], d = [], e, f, g, h, i, j;
    e = (a.length - 1) * b;
    f = Math.floor(e);
    e -= f;
    c[0] = 0 === f ? f : f - 1;
    c[1] = f;
    c[2] = f > a.length - 2 ? f : f + 1;
    c[3] = f > a.length - 3 ? f : f + 2;
    f = a[c[0]];
    h = a[c[1]];
    i = a[c[2]];
    j = a[c[3]];
    c = e * e;
    g = e * c;
    d[0] = this.interpolate(f[0], h[0], i[0], j[0], e, c, g);
    d[1] = this.interpolate(f[1], h[1], i[1], j[1], e, c, g);
    d[2] = this.interpolate(f[2], h[2], i[2], j[2], e, c, g);
    return d
};
THREE.Animation.prototype.interpolate = function(a, b, c, d, e, f, g) {
    a = 0.5 * (c - a);
    d = 0.5 * (d - b);
    return (2 * (b - c) + a + d) * g + (-3 * (b - c) - 2 * a - d) * f + a * e + b
};
THREE.Animation.prototype.getNextKeyWith = function(a, b, c) {
    for (var d = this.data.hierarchy[b].keys, c = this.interpolationType === THREE.AnimationHandler.CATMULLROM || this.interpolationType === THREE.AnimationHandler.CATMULLROM_FORWARD ? c < d.length - 1 ? c : d.length - 1 : c % d.length; c < d.length; c++)
        if (void 0 !== d[c][a])
            return d[c];
    return this.data.hierarchy[b].keys[0]
};
THREE.Animation.prototype.getPrevKeyWith = function(a, b, c) {
    for (var d = this.data.hierarchy[b].keys, c = this.interpolationType === THREE.AnimationHandler.CATMULLROM || this.interpolationType === THREE.AnimationHandler.CATMULLROM_FORWARD ? 0 < c ? c : 0 : 0 <= c ? c : c + d.length; 0 <= c; c--)
        if (void 0 !== d[c][a])
            return d[c];
    return this.data.hierarchy[b].keys[d.length - 1]
};
THREE.KeyFrameAnimation = function(a, b, c) {
    this.root = a;
    this.data = THREE.AnimationHandler.get(b);
    this.hierarchy = THREE.AnimationHandler.parse(a);
    this.currentTime = 0;
    this.timeScale = 0.0010;
    this.isPlaying = !1;
    this.loop = this.isPaused = !0;
    this.JITCompile = void 0 !== c ? c : !0;
    a = 0;
    for (b = this.hierarchy.length; a < b; a++) {
        var c = this.data.hierarchy[a].sids, d = this.hierarchy[a];
        if (this.data.hierarchy[a].keys.length && c) {
            for (var e = 0; e < c.length; e++) {
                var f = c[e], g = this.getNextKeyWith(f, a, 0);
                g && g.apply(f)
            }
            d.matrixAutoUpdate = !1;
            this.data.hierarchy[a].node.updateMatrix();
            d.matrixWorldNeedsUpdate = !0
        }
    }
};
THREE.KeyFrameAnimation.prototype.play = function(a, b) {
    if (!this.isPlaying) {
        this.isPlaying = !0;
        this.loop = void 0 !== a ? a : !0;
        this.currentTime = void 0 !== b ? b : 0;
        this.startTimeMs = b;
        this.startTime = 1E7;
        this.endTime = -this.startTime;
        var c, d = this.hierarchy.length, e, f;
        for (c = 0; c < d; c++)
            if (e = this.hierarchy[c], f = this.data.hierarchy[c], e.useQuaternion = !0, void 0 === f.animationCache && (f.animationCache = {}, f.animationCache.prevKey = null, f.animationCache.nextKey = null, f.animationCache.originalMatrix = e instanceof THREE.Bone ? e.skinMatrix : 
            e.matrix), e = this.data.hierarchy[c].keys, e.length)
                f.animationCache.prevKey = e[0], f.animationCache.nextKey = e[1], this.startTime = Math.min(e[0].time, this.startTime), this.endTime = Math.max(e[e.length - 1].time, this.endTime);
        this.update(0)
    }
    this.isPaused = !1;
    THREE.AnimationHandler.addToUpdate(this)
};
THREE.KeyFrameAnimation.prototype.pause = function() {
    this.isPaused ? THREE.AnimationHandler.addToUpdate(this) : THREE.AnimationHandler.removeFromUpdate(this);
    this.isPaused = !this.isPaused
};
THREE.KeyFrameAnimation.prototype.stop = function() {
    this.isPaused = this.isPlaying = !1;
    THREE.AnimationHandler.removeFromUpdate(this);
    for (var a = 0; a < this.data.hierarchy.length; a++) {
        var b = this.hierarchy[a], c = this.data.hierarchy[a];
        if (void 0 !== c.animationCache) {
            var d = c.animationCache.originalMatrix;
            b instanceof THREE.Bone ? (d.copy(b.skinMatrix), b.skinMatrix = d) : (d.copy(b.matrix), b.matrix = d);
            delete c.animationCache
        }
    }
};
THREE.KeyFrameAnimation.prototype.update = function(a) {
    if (this.isPlaying) {
        var b, c, d, e, f = this.data.JIT.hierarchy, g, h, i;
        h = this.currentTime += a * this.timeScale;
        g = this.currentTime %= this.data.length;
        g < this.startTimeMs && (g = this.currentTime = this.startTimeMs + g);
        e = parseInt(Math.min(g * this.data.fps, this.data.length * this.data.fps), 10);
        if ((i = g < h) && !this.loop) {
            for (var a = 0, j = this.hierarchy.length; a < j; a++) {
                var l = this.data.hierarchy[a].keys, f = this.data.hierarchy[a].sids;
                d = l.length - 1;
                e = this.hierarchy[a];
                if (l.length) {
                    for (l = 
                    0; l < f.length; l++)
                        g = f[l], (h = this.getPrevKeyWith(g, a, d)) && h.apply(g);
                    this.data.hierarchy[a].node.updateMatrix();
                    e.matrixWorldNeedsUpdate = !0
                }
            }
            this.stop()
        } else if (!(g < this.startTime)) {
            a = 0;
            for (j = this.hierarchy.length; a < j; a++) {
                d = this.hierarchy[a];
                b = this.data.hierarchy[a];
                var l = b.keys, n = b.animationCache;
                if (this.JITCompile && void 0 !== f[a][e])
                    d instanceof THREE.Bone ? (d.skinMatrix = f[a][e], d.matrixWorldNeedsUpdate = !1) : (d.matrix = f[a][e], d.matrixWorldNeedsUpdate = !0);
                else if (l.length) {
                    this.JITCompile && n && (d instanceof 
                    THREE.Bone ? d.skinMatrix = n.originalMatrix : d.matrix = n.originalMatrix);
                    b = n.prevKey;
                    c = n.nextKey;
                    if (b && c) {
                        if (c.time <= h) {
                            if (i && this.loop) {
                                b = l[0];
                                for (c = l[1]; c.time < g; )
                                    b = c, c = l[b.index + 1]
                            } else if (!i)
                                for (var m = l.length - 1; c.time < g && c.index !== m; )
                                    b = c, c = l[b.index + 1];
                            n.prevKey = b;
                            n.nextKey = c
                        }
                        c.time >= g ? b.interpolate(c, g) : b.interpolate(c, c.time)
                    }
                    this.data.hierarchy[a].node.updateMatrix();
                    d.matrixWorldNeedsUpdate = !0
                }
            }
            if (this.JITCompile && void 0 === f[0][e]) {
                this.hierarchy[0].updateMatrixWorld(!0);
                for (a = 0; a < this.hierarchy.length; a++)
                    f[a][e] = 
                    this.hierarchy[a] instanceof THREE.Bone ? this.hierarchy[a].skinMatrix.clone() : this.hierarchy[a].matrix.clone()
            }
        }
    }
};
THREE.KeyFrameAnimation.prototype.getNextKeyWith = function(a, b, c) {
    b = this.data.hierarchy[b].keys;
    for (c %= b.length; c < b.length; c++)
        if (b[c].hasTarget(a))
            return b[c];
    return b[0]
};
THREE.KeyFrameAnimation.prototype.getPrevKeyWith = function(a, b, c) {
    b = this.data.hierarchy[b].keys;
    for (c = 0 <= c ? c : c + b.length; 0 <= c; c--)
        if (b[c].hasTarget(a))
            return b[c];
    return b[b.length - 1]
};
THREE.CubeCamera = function(a, b, c) {
    THREE.Object3D.call(this);
    var d = new THREE.PerspectiveCamera(90, 1, a, b);
    d.up.set(0, -1, 0);
    d.lookAt(new THREE.Vector3(1, 0, 0));
    this.add(d);
    var e = new THREE.PerspectiveCamera(90, 1, a, b);
    e.up.set(0, -1, 0);
    e.lookAt(new THREE.Vector3(-1, 0, 0));
    this.add(e);
    var f = new THREE.PerspectiveCamera(90, 1, a, b);
    f.up.set(0, 0, 1);
    f.lookAt(new THREE.Vector3(0, 1, 0));
    this.add(f);
    var g = new THREE.PerspectiveCamera(90, 1, a, b);
    g.up.set(0, 0, -1);
    g.lookAt(new THREE.Vector3(0, -1, 0));
    this.add(g);
    var h = new THREE.PerspectiveCamera(90, 
    1, a, b);
    h.up.set(0, -1, 0);
    h.lookAt(new THREE.Vector3(0, 0, 1));
    this.add(h);
    var i = new THREE.PerspectiveCamera(90, 1, a, b);
    i.up.set(0, -1, 0);
    i.lookAt(new THREE.Vector3(0, 0, -1));
    this.add(i);
    this.renderTarget = new THREE.WebGLRenderTargetCube(c, c, {format: THREE.RGBFormat,magFilter: THREE.LinearFilter,minFilter: THREE.LinearFilter});
    this.updateCubeMap = function(a, b) {
        var c = this.renderTarget, m = c.generateMipmaps;
        c.generateMipmaps = !1;
        c.activeCubeFace = 0;
        a.render(b, d, c);
        c.activeCubeFace = 1;
        a.render(b, e, c);
        c.activeCubeFace = 
        2;
        a.render(b, f, c);
        c.activeCubeFace = 3;
        a.render(b, g, c);
        c.activeCubeFace = 4;
        a.render(b, h, c);
        c.generateMipmaps = m;
        c.activeCubeFace = 5;
        a.render(b, i, c)
    }
};
THREE.CubeCamera.prototype = Object.create(THREE.Object3D.prototype);
THREE.CombinedCamera = function(a, b, c, d, e, f, g) {
    THREE.Camera.call(this);
    this.fov = c;
    this.left = -a / 2;
    this.right = a / 2;
    this.top = b / 2;
    this.bottom = -b / 2;
    this.cameraO = new THREE.OrthographicCamera(a / -2, a / 2, b / 2, b / -2, f, g);
    this.cameraP = new THREE.PerspectiveCamera(c, a / b, d, e);
    this.zoom = 1;
    this.toPerspective()
};
THREE.CombinedCamera.prototype = Object.create(THREE.Camera.prototype);
THREE.CombinedCamera.prototype.toPerspective = function() {
    this.near = this.cameraP.near;
    this.far = this.cameraP.far;
    this.cameraP.fov = this.fov / this.zoom;
    this.cameraP.updateProjectionMatrix();
    this.projectionMatrix = this.cameraP.projectionMatrix;
    this.inPerspectiveMode = !0;
    this.inOrthographicMode = !1
};
THREE.CombinedCamera.prototype.toOrthographic = function() {
    var a = this.cameraP.aspect, b = (this.cameraP.near + this.cameraP.far) / 2, b = Math.tan(this.fov / 2) * b, a = 2 * b * a / 2, b = b / this.zoom, a = a / this.zoom;
    this.cameraO.left = -a;
    this.cameraO.right = a;
    this.cameraO.top = b;
    this.cameraO.bottom = -b;
    this.cameraO.updateProjectionMatrix();
    this.near = this.cameraO.near;
    this.far = this.cameraO.far;
    this.projectionMatrix = this.cameraO.projectionMatrix;
    this.inPerspectiveMode = !1;
    this.inOrthographicMode = !0
};
THREE.CombinedCamera.prototype.setSize = function(a, b) {
    this.cameraP.aspect = a / b;
    this.left = -a / 2;
    this.right = a / 2;
    this.top = b / 2;
    this.bottom = -b / 2
};
THREE.CombinedCamera.prototype.setFov = function(a) {
    this.fov = a;
    this.inPerspectiveMode ? this.toPerspective() : this.toOrthographic()
};
THREE.CombinedCamera.prototype.updateProjectionMatrix = function() {
    this.inPerspectiveMode ? this.toPerspective() : (this.toPerspective(), this.toOrthographic())
};
THREE.CombinedCamera.prototype.setLens = function(a, b) {
    void 0 === b && (b = 24);
    var c = 2 * Math.atan(b / (2 * a)) * (180 / Math.PI);
    this.setFov(c);
    return c
};
THREE.CombinedCamera.prototype.setZoom = function(a) {
    this.zoom = a;
    this.inPerspectiveMode ? this.toPerspective() : this.toOrthographic()
};
THREE.CombinedCamera.prototype.toFrontView = function() {
    this.rotation.x = 0;
    this.rotation.y = 0;
    this.rotation.z = 0;
    this.rotationAutoUpdate = !1
};
THREE.CombinedCamera.prototype.toBackView = function() {
    this.rotation.x = 0;
    this.rotation.y = Math.PI;
    this.rotation.z = 0;
    this.rotationAutoUpdate = !1
};
THREE.CombinedCamera.prototype.toLeftView = function() {
    this.rotation.x = 0;
    this.rotation.y = -Math.PI / 2;
    this.rotation.z = 0;
    this.rotationAutoUpdate = !1
};
THREE.CombinedCamera.prototype.toRightView = function() {
    this.rotation.x = 0;
    this.rotation.y = Math.PI / 2;
    this.rotation.z = 0;
    this.rotationAutoUpdate = !1
};
THREE.CombinedCamera.prototype.toTopView = function() {
    this.rotation.x = -Math.PI / 2;
    this.rotation.y = 0;
    this.rotation.z = 0;
    this.rotationAutoUpdate = !1
};
THREE.CombinedCamera.prototype.toBottomView = function() {
    this.rotation.x = Math.PI / 2;
    this.rotation.y = 0;
    this.rotation.z = 0;
    this.rotationAutoUpdate = !1
};
THREE.FirstPersonControls = function(a, b) {
    function c(a, b) {
        return function() {
            b.apply(a, arguments)
        }
    }
    this.object = a;
    this.target = new THREE.Vector3(0, 0, 0);
    this.domElement = void 0 !== b ? b : document;
    this.movementSpeed = 1;
    this.lookSpeed = 0.0050;
    this.lookVertical = !0;
    this.autoForward = !1;
    this.activeLook = !0;
    this.heightSpeed = !1;
    this.heightCoef = 1;
    this.heightMin = 0;
    this.heightMax = 1;
    this.constrainVertical = !1;
    this.verticalMin = 0;
    this.verticalMax = Math.PI;
    this.theta = this.phi = this.lon = this.lat = this.mouseY = this.mouseX = this.autoSpeedFactor = 
    0;
    this.mouseDragOn = this.freeze = this.moveRight = this.moveLeft = this.moveBackward = this.moveForward = !1;
    this.viewHalfY = this.viewHalfX = 0;
    this.domElement !== document && this.domElement.setAttribute("tabindex", -1);
    this.handleResize = function() {
        this.domElement === document ? (this.viewHalfX = window.innerWidth / 2, this.viewHalfY = window.innerHeight / 2) : (this.viewHalfX = this.domElement.offsetWidth / 2, this.viewHalfY = this.domElement.offsetHeight / 2)
    };
    this.onMouseDown = function(a) {
        this.domElement !== document && this.domElement.focus();
        a.preventDefault();
        a.stopPropagation();
        if (this.activeLook)
            switch (a.button) {
                case 0:
                    this.moveForward = !0;
                    break;
                case 2:
                    this.moveBackward = !0
            }
        this.mouseDragOn = !0
    };
    this.onMouseUp = function(a) {
        a.preventDefault();
        a.stopPropagation();
        if (this.activeLook)
            switch (a.button) {
                case 0:
                    this.moveForward = !1;
                    break;
                case 2:
                    this.moveBackward = !1
            }
        this.mouseDragOn = !1
    };
    this.onMouseMove = function(a) {
        this.domElement === document ? (this.mouseX = a.pageX - this.viewHalfX, this.mouseY = a.pageY - this.viewHalfY) : (this.mouseX = a.pageX - this.domElement.offsetLeft - 
        this.viewHalfX, this.mouseY = a.pageY - this.domElement.offsetTop - this.viewHalfY)
    };
    this.onKeyDown = function(a) {
        switch (a.keyCode) {
            case 38:
            case 87:
                this.moveForward = !0;
                break;
            case 37:
            case 65:
                this.moveLeft = !0;
                break;
            case 40:
            case 83:
                this.moveBackward = !0;
                break;
            case 39:
            case 68:
                this.moveRight = !0;
                break;
            case 82:
                this.moveUp = !0;
                break;
            case 70:
                this.moveDown = !0;
                break;
            case 81:
                this.freeze = !this.freeze
        }
    };
    this.onKeyUp = function(a) {
        switch (a.keyCode) {
            case 38:
            case 87:
                this.moveForward = !1;
                break;
            case 37:
            case 65:
                this.moveLeft = !1;
                break;
            case 40:
            case 83:
                this.moveBackward = !1;
                break;
            case 39:
            case 68:
                this.moveRight = !1;
                break;
            case 82:
                this.moveUp = !1;
                break;
            case 70:
                this.moveDown = !1
        }
    };
    this.update = function(a) {
        var b = 0;
        if (!this.freeze) {
            this.heightSpeed ? (b = THREE.Math.clamp(this.object.position.y, this.heightMin, this.heightMax) - this.heightMin, this.autoSpeedFactor = a * b * this.heightCoef) : this.autoSpeedFactor = 0;
            b = a * this.movementSpeed;
            (this.moveForward || this.autoForward && !this.moveBackward) && this.object.translateZ(-(b + this.autoSpeedFactor));
            this.moveBackward && 
            this.object.translateZ(b);
            this.moveLeft && this.object.translateX(-b);
            this.moveRight && this.object.translateX(b);
            this.moveUp && this.object.translateY(b);
            this.moveDown && this.object.translateY(-b);
            a *= this.lookSpeed;
            this.activeLook || (a = 0);
            this.lon += this.mouseX * a;
            this.lookVertical && (this.lat -= this.mouseY * a);
            this.lat = Math.max(-85, Math.min(85, this.lat));
            this.phi = (90 - this.lat) * Math.PI / 180;
            this.theta = this.lon * Math.PI / 180;
            var b = this.target, c = this.object.position;
            b.x = c.x + 100 * Math.sin(this.phi) * Math.cos(this.theta);
            b.y = c.y + 100 * Math.cos(this.phi);
            b.z = c.z + 100 * Math.sin(this.phi) * Math.sin(this.theta);
            b = 1;
            this.constrainVertical && (b = Math.PI / (this.verticalMax - this.verticalMin));
            this.lon += this.mouseX * a;
            this.lookVertical && (this.lat -= this.mouseY * a * b);
            this.lat = Math.max(-85, Math.min(85, this.lat));
            this.phi = (90 - this.lat) * Math.PI / 180;
            this.theta = this.lon * Math.PI / 180;
            this.constrainVertical && (this.phi = THREE.Math.mapLinear(this.phi, 0, Math.PI, this.verticalMin, this.verticalMax));
            b = this.target;
            c = this.object.position;
            b.x = c.x + 100 * 
            Math.sin(this.phi) * Math.cos(this.theta);
            b.y = c.y + 100 * Math.cos(this.phi);
            b.z = c.z + 100 * Math.sin(this.phi) * Math.sin(this.theta);
            this.object.lookAt(b)
        }
    };
    this.domElement.addEventListener("contextmenu", function(a) {
        a.preventDefault()
    }, !1);
    this.domElement.addEventListener("mousemove", c(this, this.onMouseMove), !1);
    this.domElement.addEventListener("mousedown", c(this, this.onMouseDown), !1);
    this.domElement.addEventListener("mouseup", c(this, this.onMouseUp), !1);
    this.domElement.addEventListener("keydown", c(this, this.onKeyDown), 
    !1);
    this.domElement.addEventListener("keyup", c(this, this.onKeyUp), !1);
    this.handleResize()
};
THREE.PathControls = function(a, b) {
    function c(a) {
        return 1 > (a *= 2) ? 0.5 * a * a : -0.5 * (--a * (a - 2) - 1)
    }
    function d(a, b) {
        return function() {
            b.apply(a, arguments)
        }
    }
    function e(a, b, c, d) {
        var e = {name: c,fps: 0.6,length: d,hierarchy: []}, f, g = b.getControlPointsArray(), h = b.getLength(), r = g.length, t = 0;
        f = r - 1;
        b = {parent: -1,keys: []};
        b.keys[0] = {time: 0,pos: g[0],rot: [0, 0, 0, 1],scl: [1, 1, 1]};
        b.keys[f] = {time: d,pos: g[f],rot: [0, 0, 0, 1],scl: [1, 1, 1]};
        for (f = 1; f < r - 1; f++)
            t = d * h.chunks[f] / h.total, b.keys[f] = {time: t,pos: g[f]};
        e.hierarchy[0] = b;
        THREE.AnimationHandler.add(e);
        return new THREE.Animation(a, c, THREE.AnimationHandler.CATMULLROM_FORWARD, !1)
    }
    function f(a, b) {
        var c, d, e = new THREE.Geometry;
        for (c = 0; c < a.points.length * b; c++)
            d = c / (a.points.length * b), d = a.getPoint(d), e.vertices[c] = new THREE.Vector3(d.x, d.y, d.z);
        return e
    }
    this.object = a;
    this.domElement = void 0 !== b ? b : document;
    this.id = "PathControls" + THREE.PathControlsIdCounter++;
    this.duration = 1E4;
    this.waypoints = [];
    this.useConstantSpeed = !0;
    this.resamplingCoef = 50;
    this.debugPath = new THREE.Object3D;
    this.debugDummy = new THREE.Object3D;
    this.animationParent = new THREE.Object3D;
    this.lookSpeed = 0.0050;
    this.lookHorizontal = this.lookVertical = !0;
    this.verticalAngleMap = {srcRange: [0, 2 * Math.PI],dstRange: [0, 2 * Math.PI]};
    this.horizontalAngleMap = {srcRange: [0, 2 * Math.PI],dstRange: [0, 2 * Math.PI]};
    this.target = new THREE.Object3D;
    this.theta = this.phi = this.lon = this.lat = this.mouseY = this.mouseX = 0;
    var g = 2 * Math.PI, h = Math.PI / 180;
    this.viewHalfY = this.viewHalfX = 0;
    this.domElement !== document && this.domElement.setAttribute("tabindex", -1);
    this.handleResize = function() {
        this.domElement === 
        document ? (this.viewHalfX = window.innerWidth / 2, this.viewHalfY = window.innerHeight / 2) : (this.viewHalfX = this.domElement.offsetWidth / 2, this.viewHalfY = this.domElement.offsetHeight / 2)
    };
    this.update = function(a) {
        var b;
        this.lookHorizontal && (this.lon += this.mouseX * this.lookSpeed * a);
        this.lookVertical && (this.lat -= this.mouseY * this.lookSpeed * a);
        this.lon = Math.max(0, Math.min(360, this.lon));
        this.lat = Math.max(-85, Math.min(85, this.lat));
        this.phi = (90 - this.lat) * h;
        this.theta = this.lon * h;
        a = this.phi % g;
        this.phi = 0 <= a ? a : a + g;
        b = this.verticalAngleMap.srcRange;
        a = this.verticalAngleMap.dstRange;
        b = THREE.Math.mapLinear(this.phi, b[0], b[1], a[0], a[1]);
        var d = a[1] - a[0];
        this.phi = c((b - a[0]) / d) * d + a[0];
        b = this.horizontalAngleMap.srcRange;
        a = this.horizontalAngleMap.dstRange;
        b = THREE.Math.mapLinear(this.theta, b[0], b[1], a[0], a[1]);
        d = a[1] - a[0];
        this.theta = c((b - a[0]) / d) * d + a[0];
        a = this.target.position;
        a.x = 100 * Math.sin(this.phi) * Math.cos(this.theta);
        a.y = 100 * Math.cos(this.phi);
        a.z = 100 * Math.sin(this.phi) * Math.sin(this.theta);
        this.object.lookAt(this.target.position)
    };
    this.onMouseMove = 
    function(a) {
        this.domElement === document ? (this.mouseX = a.pageX - this.viewHalfX, this.mouseY = a.pageY - this.viewHalfY) : (this.mouseX = a.pageX - this.domElement.offsetLeft - this.viewHalfX, this.mouseY = a.pageY - this.domElement.offsetTop - this.viewHalfY)
    };
    this.init = function() {
        this.spline = new THREE.Spline;
        this.spline.initFromArray(this.waypoints);
        this.useConstantSpeed && this.spline.reparametrizeByArcLength(this.resamplingCoef);
        if (this.createDebugDummy) {
            var a = new THREE.MeshLambertMaterial({color: 30719}), b = new THREE.MeshLambertMaterial({color: 65280}), 
            c = new THREE.CubeGeometry(10, 10, 20), g = new THREE.CubeGeometry(2, 2, 10);
            this.animationParent = new THREE.Mesh(c, a);
            a = new THREE.Mesh(g, b);
            a.position.set(0, 10, 0);
            this.animation = e(this.animationParent, this.spline, this.id, this.duration);
            this.animationParent.add(this.object);
            this.animationParent.add(this.target);
            this.animationParent.add(a)
        } else
            this.animation = e(this.animationParent, this.spline, this.id, this.duration), this.animationParent.add(this.target), this.animationParent.add(this.object);
        if (this.createDebugPath) {
            var a = 
            this.debugPath, b = this.spline, g = f(b, 10), c = f(b, 10), h = new THREE.LineBasicMaterial({color: 16711680,linewidth: 3}), g = new THREE.Line(g, h), c = new THREE.ParticleSystem(c, new THREE.ParticleBasicMaterial({color: 16755200,size: 3}));
            g.scale.set(1, 1, 1);
            a.add(g);
            c.scale.set(1, 1, 1);
            a.add(c);
            for (var g = new THREE.SphereGeometry(1, 16, 8), h = new THREE.MeshBasicMaterial({color: 65280}), q = 0; q < b.points.length; q++)
                c = new THREE.Mesh(g, h), c.position.copy(b.points[q]), a.add(c)
        }
        this.domElement.addEventListener("mousemove", d(this, this.onMouseMove), 
        !1)
    };
    this.handleResize()
};
THREE.PathControlsIdCounter = 0;
THREE.FlyControls = function(a, b) {
    function c(a, b) {
        return function() {
            b.apply(a, arguments)
        }
    }
    this.object = a;
    this.domElement = void 0 !== b ? b : document;
    b && this.domElement.setAttribute("tabindex", -1);
    this.movementSpeed = 1;
    this.rollSpeed = 0.0050;
    this.autoForward = this.dragToLook = !1;
    this.object.useQuaternion = !0;
    this.tmpQuaternion = new THREE.Quaternion;
    this.mouseStatus = 0;
    this.moveState = {up: 0,down: 0,left: 0,right: 0,forward: 0,back: 0,pitchUp: 0,pitchDown: 0,yawLeft: 0,yawRight: 0,rollLeft: 0,rollRight: 0};
    this.moveVector = new THREE.Vector3(0, 
    0, 0);
    this.rotationVector = new THREE.Vector3(0, 0, 0);
    this.handleEvent = function(a) {
        if ("function" == typeof this[a.type])
            this[a.type](a)
    };
    this.keydown = function(a) {
        if (!a.altKey) {
            switch (a.keyCode) {
                case 16:
                    this.movementSpeedMultiplier = 0.1;
                    break;
                case 87:
                    this.moveState.forward = 1;
                    break;
                case 83:
                    this.moveState.back = 1;
                    break;
                case 65:
                    this.moveState.left = 1;
                    break;
                case 68:
                    this.moveState.right = 1;
                    break;
                case 82:
                    this.moveState.up = 1;
                    break;
                case 70:
                    this.moveState.down = 1;
                    break;
                case 38:
                    this.moveState.pitchUp = 1;
                    break;
                case 40:
                    this.moveState.pitchDown = 
                    1;
                    break;
                case 37:
                    this.moveState.yawLeft = 1;
                    break;
                case 39:
                    this.moveState.yawRight = 1;
                    break;
                case 81:
                    this.moveState.rollLeft = 1;
                    break;
                case 69:
                    this.moveState.rollRight = 1
            }
            this.updateMovementVector();
            this.updateRotationVector()
        }
    };
    this.keyup = function(a) {
        switch (a.keyCode) {
            case 16:
                this.movementSpeedMultiplier = 1;
                break;
            case 87:
                this.moveState.forward = 0;
                break;
            case 83:
                this.moveState.back = 0;
                break;
            case 65:
                this.moveState.left = 0;
                break;
            case 68:
                this.moveState.right = 0;
                break;
            case 82:
                this.moveState.up = 0;
                break;
            case 70:
                this.moveState.down = 
                0;
                break;
            case 38:
                this.moveState.pitchUp = 0;
                break;
            case 40:
                this.moveState.pitchDown = 0;
                break;
            case 37:
                this.moveState.yawLeft = 0;
                break;
            case 39:
                this.moveState.yawRight = 0;
                break;
            case 81:
                this.moveState.rollLeft = 0;
                break;
            case 69:
                this.moveState.rollRight = 0
        }
        this.updateMovementVector();
        this.updateRotationVector()
    };
    this.mousedown = function(a) {
        this.domElement !== document && this.domElement.focus();
        a.preventDefault();
        a.stopPropagation();
        if (this.dragToLook)
            this.mouseStatus++;
        else
            switch (a.button) {
                case 0:
                    this.object.moveForward = 
                    !0;
                    break;
                case 2:
                    this.object.moveBackward = !0
            }
    };
    this.mousemove = function(a) {
        if (!this.dragToLook || 0 < this.mouseStatus) {
            var b = this.getContainerDimensions(), c = b.size[0] / 2, g = b.size[1] / 2;
            this.moveState.yawLeft = -(a.pageX - b.offset[0] - c) / c;
            this.moveState.pitchDown = (a.pageY - b.offset[1] - g) / g;
            this.updateRotationVector()
        }
    };
    this.mouseup = function(a) {
        a.preventDefault();
        a.stopPropagation();
        if (this.dragToLook)
            this.mouseStatus--, this.moveState.yawLeft = this.moveState.pitchDown = 0;
        else
            switch (a.button) {
                case 0:
                    this.moveForward = 
                    !1;
                    break;
                case 2:
                    this.moveBackward = !1
            }
        this.updateRotationVector()
    };
    this.update = function(a) {
        var b = a * this.movementSpeed, a = a * this.rollSpeed;
        this.object.translateX(this.moveVector.x * b);
        this.object.translateY(this.moveVector.y * b);
        this.object.translateZ(this.moveVector.z * b);
        this.tmpQuaternion.set(this.rotationVector.x * a, this.rotationVector.y * a, this.rotationVector.z * a, 1).normalize();
        this.object.quaternion.multiplySelf(this.tmpQuaternion);
        this.object.matrix.setPosition(this.object.position);
        this.object.matrix.setRotationFromQuaternion(this.object.quaternion);
        this.object.matrixWorldNeedsUpdate = !0
    };
    this.updateMovementVector = function() {
        var a = this.moveState.forward || this.autoForward && !this.moveState.back ? 1 : 0;
        this.moveVector.x = -this.moveState.left + this.moveState.right;
        this.moveVector.y = -this.moveState.down + this.moveState.up;
        this.moveVector.z = -a + this.moveState.back
    };
    this.updateRotationVector = function() {
        this.rotationVector.x = -this.moveState.pitchDown + this.moveState.pitchUp;
        this.rotationVector.y = -this.moveState.yawRight + this.moveState.yawLeft;
        this.rotationVector.z = 
        -this.moveState.rollRight + this.moveState.rollLeft
    };
    this.getContainerDimensions = function() {
        return this.domElement != document ? {size: [this.domElement.offsetWidth, this.domElement.offsetHeight],offset: [this.domElement.offsetLeft, this.domElement.offsetTop]} : {size: [window.innerWidth, window.innerHeight],offset: [0, 0]}
    };
    this.domElement.addEventListener("mousemove", c(this, this.mousemove), !1);
    this.domElement.addEventListener("mousedown", c(this, this.mousedown), !1);
    this.domElement.addEventListener("mouseup", c(this, 
    this.mouseup), !1);
    this.domElement.addEventListener("keydown", c(this, this.keydown), !1);
    this.domElement.addEventListener("keyup", c(this, this.keyup), !1);
    this.updateMovementVector();
    this.updateRotationVector()
};
THREE.RollControls = function(a, b) {
    this.object = a;
    this.domElement = void 0 !== b ? b : document;
    this.mouseLook = !0;
    this.autoForward = !1;
    this.rollSpeed = this.movementSpeed = this.lookSpeed = 1;
    this.constrainVertical = [-0.9, 0.9];
    this.object.matrixAutoUpdate = !1;
    this.forward = new THREE.Vector3(0, 0, 1);
    this.roll = 0;
    var c = new THREE.Vector3, d = new THREE.Vector3, e = new THREE.Vector3, f = new THREE.Matrix4, g = !1, h = 1, i = 0, j = 0, l = 0, n = 0, m = 0, q = 0, p = 0;
    this.handleResize = function() {
        q = window.innerWidth / 2;
        p = window.innerHeight / 2
    };
    this.update = function(a) {
        if (this.mouseLook) {
            var b = 
            a * this.lookSpeed;
            this.rotateHorizontally(b * n);
            this.rotateVertically(b * m)
        }
        b = a * this.movementSpeed;
        this.object.translateZ(-b * (0 < i || this.autoForward && !(0 > i) ? 1 : i));
        this.object.translateX(b * j);
        this.object.translateY(b * l);
        g && (this.roll += this.rollSpeed * a * h);
        this.forward.y > this.constrainVertical[1] ? (this.forward.y = this.constrainVertical[1], this.forward.normalize()) : this.forward.y < this.constrainVertical[0] && (this.forward.y = this.constrainVertical[0], this.forward.normalize());
        e.copy(this.forward);
        d.set(0, 1, 0);
        c.cross(d, e).normalize();
        d.cross(e, c).normalize();
        this.object.matrix.elements[0] = c.x;
        this.object.matrix.elements[4] = d.x;
        this.object.matrix.elements[8] = e.x;
        this.object.matrix.elements[1] = c.y;
        this.object.matrix.elements[5] = d.y;
        this.object.matrix.elements[9] = e.y;
        this.object.matrix.elements[2] = c.z;
        this.object.matrix.elements[6] = d.z;
        this.object.matrix.elements[10] = e.z;
        f.identity();
        f.elements[0] = Math.cos(this.roll);
        f.elements[4] = -Math.sin(this.roll);
        f.elements[1] = Math.sin(this.roll);
        f.elements[5] = Math.cos(this.roll);
        this.object.matrix.multiplySelf(f);
        this.object.matrixWorldNeedsUpdate = !0;
        this.object.matrix.elements[12] = this.object.position.x;
        this.object.matrix.elements[13] = this.object.position.y;
        this.object.matrix.elements[14] = this.object.position.z
    };
    this.translateX = function(a) {
        this.object.position.x += this.object.matrix.elements[0] * a;
        this.object.position.y += this.object.matrix.elements[1] * a;
        this.object.position.z += this.object.matrix.elements[2] * a
    };
    this.translateY = function(a) {
        this.object.position.x += this.object.matrix.elements[4] * 
        a;
        this.object.position.y += this.object.matrix.elements[5] * a;
        this.object.position.z += this.object.matrix.elements[6] * a
    };
    this.translateZ = function(a) {
        this.object.position.x -= this.object.matrix.elements[8] * a;
        this.object.position.y -= this.object.matrix.elements[9] * a;
        this.object.position.z -= this.object.matrix.elements[10] * a
    };
    this.rotateHorizontally = function(a) {
        c.set(this.object.matrix.elements[0], this.object.matrix.elements[1], this.object.matrix.elements[2]);
        c.multiplyScalar(a);
        this.forward.subSelf(c);
        this.forward.normalize()
    };
    this.rotateVertically = function(a) {
        d.set(this.object.matrix.elements[4], this.object.matrix.elements[5], this.object.matrix.elements[6]);
        d.multiplyScalar(a);
        this.forward.addSelf(d);
        this.forward.normalize()
    };
    this.domElement.addEventListener("contextmenu", function(a) {
        a.preventDefault()
    }, !1);
    this.domElement.addEventListener("mousemove", function(a) {
        n = (a.clientX - q) / window.innerWidth;
        m = (a.clientY - p) / window.innerHeight
    }, !1);
    this.domElement.addEventListener("mousedown", function(a) {
        a.preventDefault();
        a.stopPropagation();
        switch (a.button) {
            case 0:
                i = 1;
                break;
            case 2:
                i = -1
        }
    }, !1);
    this.domElement.addEventListener("mouseup", function(a) {
        a.preventDefault();
        a.stopPropagation();
        switch (a.button) {
            case 0:
                i = 0;
                break;
            case 2:
                i = 0
        }
    }, !1);
    this.domElement.addEventListener("keydown", function(a) {
        switch (a.keyCode) {
            case 38:
            case 87:
                i = 1;
                break;
            case 37:
            case 65:
                j = -1;
                break;
            case 40:
            case 83:
                i = -1;
                break;
            case 39:
            case 68:
                j = 1;
                break;
            case 81:
                g = !0;
                h = 1;
                break;
            case 69:
                g = !0;
                h = -1;
                break;
            case 82:
                l = 1;
                break;
            case 70:
                l = -1
        }
    }, !1);
    this.domElement.addEventListener("keyup", 
    function(a) {
        switch (a.keyCode) {
            case 38:
            case 87:
                i = 0;
                break;
            case 37:
            case 65:
                j = 0;
                break;
            case 40:
            case 83:
                i = 0;
                break;
            case 39:
            case 68:
                j = 0;
                break;
            case 81:
                g = !1;
                break;
            case 69:
                g = !1;
                break;
            case 82:
                l = 0;
                break;
            case 70:
                l = 0
        }
    }, !1);
    this.handleResize()
};
THREE.TrackballControls = function(a, b) {
    function c(a) {
        if (d.enabled) {
            a.preventDefault();
            a.stopPropagation();
            var b = 0;
            a.wheelDelta ? b = a.wheelDelta / 40 : a.detail && (b = -a.detail / 3);
            l.y += 0.05 * (1 / b)
        }
    }
    THREE.EventTarget.call(this);
    var d = this;
    this.object = a;
    this.domElement = void 0 !== b ? b : document;
    this.enabled = !0;
    this.screen = {width: 0,height: 0,offsetLeft: 0,offsetTop: 0};
    this.radius = (this.screen.width + this.screen.height) / 4;
    this.rotateSpeed = 1;
    this.zoomSpeed = 1.2;
    this.panSpeed = 0.3;
    this.staticMoving = this.noPan = this.noZoom = 
    this.noRotate = !1;
    this.dynamicDampingFactor = 0.2;
    this.minDistance = 0;
    this.maxDistance = Infinity;
    this.keys = [65, 83, 68];
    this.target = new THREE.Vector3;
    var e = new THREE.Vector3, f = !1, g = -1, h = new THREE.Vector3, i = new THREE.Vector3, j = new THREE.Vector3, l = new THREE.Vector2, n = new THREE.Vector2, m = new THREE.Vector2, q = new THREE.Vector2, p = {type: "change"};
    this.handleResize = function() {
        this.screen.width = window.innerWidth;
        this.screen.height = window.innerHeight;
        this.screen.offsetLeft = 0;
        this.screen.offsetTop = 0;
        this.radius = (this.screen.width + 
        this.screen.height) / 4
    };
    this.handleEvent = function(a) {
        if ("function" == typeof this[a.type])
            this[a.type](a)
    };
    this.getMouseOnScreen = function(a, b) {
        return new THREE.Vector2(0.5 * ((a - d.screen.offsetLeft) / d.radius), 0.5 * ((b - d.screen.offsetTop) / d.radius))
    };
    this.getMouseProjectionOnBall = function(a, b) {
        var c = new THREE.Vector3((a - 0.5 * d.screen.width - d.screen.offsetLeft) / d.radius, (0.5 * d.screen.height + d.screen.offsetTop - b) / d.radius, 0), e = c.length();
        1 < e ? c.normalize() : c.z = Math.sqrt(1 - e * e);
        h.copy(d.object.position).subSelf(d.target);
        e = d.object.up.clone().setLength(c.y);
        e.addSelf(d.object.up.clone().crossSelf(h).setLength(c.x));
        e.addSelf(h.setLength(c.z));
        return e
    };
    this.rotateCamera = function() {
        var a = Math.acos(i.dot(j) / i.length() / j.length());
        if (a) {
            var b = (new THREE.Vector3).cross(i, j).normalize(), c = new THREE.Quaternion, a = a * d.rotateSpeed;
            c.setFromAxisAngle(b, -a);
            c.multiplyVector3(h);
            c.multiplyVector3(d.object.up);
            c.multiplyVector3(j);
            d.staticMoving ? i.copy(j) : (c.setFromAxisAngle(b, a * (d.dynamicDampingFactor - 1)), c.multiplyVector3(i))
        }
    };
    this.zoomCamera = function() {
        var a = 1 + (n.y - l.y) * d.zoomSpeed;
        1 !== a && 0 < a && (h.multiplyScalar(a), d.staticMoving ? l.copy(n) : l.y += (n.y - l.y) * this.dynamicDampingFactor)
    };
    this.panCamera = function() {
        var a = q.clone().subSelf(m);
        if (a.lengthSq()) {
            a.multiplyScalar(h.length() * d.panSpeed);
            var b = h.clone().crossSelf(d.object.up).setLength(a.x);
            b.addSelf(d.object.up.clone().setLength(a.y));
            d.object.position.addSelf(b);
            d.target.addSelf(b);
            d.staticMoving ? m = q : m.addSelf(a.sub(q, m).multiplyScalar(d.dynamicDampingFactor))
        }
    };
    this.checkDistances = 
    function() {
        if (!d.noZoom || !d.noPan)
            d.object.position.lengthSq() > d.maxDistance * d.maxDistance && d.object.position.setLength(d.maxDistance), h.lengthSq() < d.minDistance * d.minDistance && d.object.position.add(d.target, h.setLength(d.minDistance))
    };
    this.update = function() {
        h.copy(d.object.position).subSelf(d.target);
        d.noRotate || d.rotateCamera();
        d.noZoom || d.zoomCamera();
        d.noPan || d.panCamera();
        d.object.position.add(d.target, h);
        d.checkDistances();
        d.object.lookAt(d.target);
        0 < e.distanceToSquared(d.object.position) && 
        (d.dispatchEvent(p), e.copy(d.object.position))
    };
    this.domElement.addEventListener("contextmenu", function(a) {
        a.preventDefault()
    }, !1);
    this.domElement.addEventListener("mousemove", function(a) {
        d.enabled && (f && (i = j = d.getMouseProjectionOnBall(a.clientX, a.clientY), l = n = d.getMouseOnScreen(a.clientX, a.clientY), m = q = d.getMouseOnScreen(a.clientX, a.clientY), f = !1), -1 !== g && (0 === g && !d.noRotate ? j = d.getMouseProjectionOnBall(a.clientX, a.clientY) : 1 === g && !d.noZoom ? n = d.getMouseOnScreen(a.clientX, a.clientY) : 2 === g && !d.noPan && 
        (q = d.getMouseOnScreen(a.clientX, a.clientY))))
    }, !1);
    this.domElement.addEventListener("mousedown", function(a) {
        d.enabled && (a.preventDefault(), a.stopPropagation(), -1 === g && (g = a.button, 0 === g && !d.noRotate ? i = j = d.getMouseProjectionOnBall(a.clientX, a.clientY) : 1 === g && !d.noZoom ? l = n = d.getMouseOnScreen(a.clientX, a.clientY) : this.noPan || (m = q = d.getMouseOnScreen(a.clientX, a.clientY))))
    }, !1);
    this.domElement.addEventListener("mouseup", function(a) {
        d.enabled && (a.preventDefault(), a.stopPropagation(), g = -1)
    }, !1);
    this.domElement.addEventListener("DOMMouseScroll", 
    c, !1);
    this.domElement.addEventListener("mousewheel", c, !1);
    window.addEventListener("keydown", function(a) {
        d.enabled && -1 === g && (a.keyCode === d.keys[0] && !d.noRotate ? g = 0 : a.keyCode === d.keys[1] && !d.noZoom ? g = 1 : a.keyCode === d.keys[2] && !d.noPan && (g = 2), -1 !== g && (f = !0))
    }, !1);
    window.addEventListener("keyup", function() {
        d.enabled && -1 !== g && (g = -1)
    }, !1);
    this.handleResize()
};
THREE.OrbitControls = function(a, b) {
    function c() {
        return 2 * Math.PI / 60 / 60 * f.autoRotateSpeed
    }
    function d(a) {
        a.preventDefault();
        u === t.ROTATE ? (i.set(a.clientX, a.clientY), j.sub(i, h), f.rotateLeft(2 * Math.PI * j.x / g * f.userRotateSpeed), f.rotateUp(2 * Math.PI * j.y / g * f.userRotateSpeed), h.copy(i)) : u === t.ZOOM && (n.set(a.clientX, a.clientY), m.sub(n, l), 0 < m.y ? f.zoomIn() : f.zoomOut(), l.copy(n))
    }
    function e() {
        f.userRotate && (document.removeEventListener("mousemove", d, !1), document.removeEventListener("mouseup", e, !1), u = t.NONE)
    }
    THREE.EventTarget.call(this);
    this.object = a;
    this.domElement = void 0 !== b ? b : document;
    this.center = new THREE.Vector3;
    this.userZoom = !0;
    this.userZoomSpeed = 1;
    this.userRotate = !0;
    this.userRotateSpeed = 1;
    this.autoRotate = !1;
    this.autoRotateSpeed = 2;
    var f = this, g = 1800, h = new THREE.Vector2, i = new THREE.Vector2, j = new THREE.Vector2, l = new THREE.Vector2, n = new THREE.Vector2, m = new THREE.Vector2, q = 0, p = 0, o = 1, r = new THREE.Vector3, t = {NONE: -1,ROTATE: 0,ZOOM: 1}, u = t.NONE, w = {type: "change"};
    this.rotateLeft = function(a) {
        void 0 === a && (a = c());
        p -= a
    };
    this.rotateRight = function(a) {
        void 0 === 
        a && (a = c());
        p += a
    };
    this.rotateUp = function(a) {
        void 0 === a && (a = c());
        q -= a
    };
    this.rotateDown = function(a) {
        void 0 === a && (a = c());
        q += a
    };
    this.zoomIn = function(a) {
        void 0 === a && (a = Math.pow(0.95, f.userZoomSpeed));
        o /= a
    };
    this.zoomOut = function(a) {
        void 0 === a && (a = Math.pow(0.95, f.userZoomSpeed));
        o *= a
    };
    this.update = function() {
        var a = this.object.position, b = a.clone().subSelf(this.center), d = Math.atan2(b.x, b.z), e = Math.atan2(Math.sqrt(b.x * b.x + b.z * b.z), b.y);
        this.autoRotate && this.rotateLeft(c());
        var d = d + p, e = e + q, e = Math.max(1E-6, Math.min(Math.PI - 
        1E-6, e)), f = b.length();
        b.x = f * Math.sin(e) * Math.sin(d);
        b.y = f * Math.cos(e);
        b.z = f * Math.sin(e) * Math.cos(d);
        b.multiplyScalar(o);
        a.copy(this.center).addSelf(b);
        this.object.lookAt(this.center);
        q = p = 0;
        o = 1;
        0 < r.distanceTo(this.object.position) && (this.dispatchEvent(w), r.copy(this.object.position))
    };
    this.domElement.addEventListener("contextmenu", function(a) {
        a.preventDefault()
    }, !1);
    this.domElement.addEventListener("mousedown", function(a) {
        f.userRotate && (a.preventDefault(), 0 === a.button || 2 === a.button ? (u = t.ROTATE, h.set(a.clientX, 
        a.clientY)) : 1 === a.button && (u = t.ZOOM, l.set(a.clientX, a.clientY)), document.addEventListener("mousemove", d, !1), document.addEventListener("mouseup", e, !1))
    }, !1);
    this.domElement.addEventListener("mousewheel", function(a) {
        f.userZoom && (0 < a.wheelDelta ? f.zoomOut() : f.zoomIn())
    }, !1)
};
THREE.CircleGeometry = function(a, b, c, d) {
    THREE.Geometry.call(this);
    var a = a || 50, c = void 0 !== c ? c : 0, d = void 0 !== d ? d : 2 * Math.PI, b = void 0 !== b ? Math.max(3, b) : 8, e, f = [];
    e = new THREE.Vector3;
    var g = new THREE.UV(0.5, 0.5);
    this.vertices.push(e);
    f.push(g);
    for (e = 0; e <= b; e++) {
        var h = new THREE.Vector3;
        h.x = a * Math.cos(c + e / b * d);
        h.y = a * Math.sin(c + e / b * d);
        this.vertices.push(h);
        f.push(new THREE.UV((h.x / a + 1) / 2, -(h.y / a + 1) / 2 + 1))
    }
    c = new THREE.Vector3(0, 0, -1);
    for (e = 1; e <= b; e++)
        this.faces.push(new THREE.Face3(e, e + 1, 0, [c, c, c])), this.faceVertexUvs[0].push([f[e], 
            f[e + 1], g]);
    this.computeCentroids();
    this.computeFaceNormals();
    this.boundingSphere = {radius: a}
};
THREE.CircleGeometry.prototype = Object.create(THREE.Geometry.prototype);
THREE.CubeGeometry = function(a, b, c, d, e, f, g, h) {
    function i(a, b, c, g, h, i, l, m) {
        var n, o = d || 1, p = e || 1, q = h / 2, r = i / 2, t = j.vertices.length;
        if ("x" === a && "y" === b || "y" === a && "x" === b)
            n = "z";
        else if ("x" === a && "z" === b || "z" === a && "x" === b)
            n = "y", p = f || 1;
        else if ("z" === a && "y" === b || "y" === a && "z" === b)
            n = "x", o = f || 1;
        var u = o + 1, w = p + 1, X = h / o, Z = i / p, I = new THREE.Vector3;
        I[n] = 0 < l ? 1 : -1;
        for (h = 0; h < w; h++)
            for (i = 0; i < u; i++) {
                var Y = new THREE.Vector3;
                Y[a] = (i * X - q) * c;
                Y[b] = (h * Z - r) * g;
                Y[n] = l;
                j.vertices.push(Y)
            }
        for (h = 0; h < p; h++)
            for (i = 0; i < o; i++)
                a = new THREE.Face4(i + 
                u * h + t, i + u * (h + 1) + t, i + 1 + u * (h + 1) + t, i + 1 + u * h + t), a.normal.copy(I), a.vertexNormals.push(I.clone(), I.clone(), I.clone(), I.clone()), a.materialIndex = m, j.faces.push(a), j.faceVertexUvs[0].push([new THREE.UV(i / o, 1 - h / p), new THREE.UV(i / o, 1 - (h + 1) / p), new THREE.UV((i + 1) / o, 1 - (h + 1) / p), new THREE.UV((i + 1) / o, 1 - h / p)])
    }
    THREE.Geometry.call(this);
    var j = this, l = a / 2, n = b / 2, m = c / 2, q, p, o, r, t, u;
    if (void 0 !== g) {
        if (g instanceof Array)
            this.materials = g;
        else {
            this.materials = [];
            for (q = 0; 6 > q; q++)
                this.materials.push(g)
        }
        q = 0;
        r = 1;
        p = 2;
        t = 3;
        o = 4;
        u = 5
    } else
        this.materials = 
        [];
    this.sides = {px: !0,nx: !0,py: !0,ny: !0,pz: !0,nz: !0};
    if (void 0 != h)
        for (var w in h)
            void 0 !== this.sides[w] && (this.sides[w] = h[w]);
    this.sides.px && i("z", "y", -1, -1, c, b, l, q);
    this.sides.nx && i("z", "y", 1, -1, c, b, -l, r);
    this.sides.py && i("x", "z", 1, 1, a, c, n, p);
    this.sides.ny && i("x", "z", 1, -1, a, c, -n, t);
    this.sides.pz && i("x", "y", 1, -1, a, b, m, o);
    this.sides.nz && i("x", "y", -1, -1, a, b, -m, u);
    this.computeCentroids();
    this.mergeVertices()
};
THREE.CubeGeometry.prototype = Object.create(THREE.Geometry.prototype);
THREE.CylinderGeometry = function(a, b, c, d, e, f) {
    THREE.Geometry.call(this);
    var a = void 0 !== a ? a : 20, b = void 0 !== b ? b : 20, c = void 0 !== c ? c : 100, g = c / 2, d = d || 8, e = e || 1, h, i, j = [], l = [];
    for (i = 0; i <= e; i++) {
        var n = [], m = [], q = i / e, p = q * (b - a) + a;
        for (h = 0; h <= d; h++) {
            var o = h / d, r = new THREE.Vector3;
            r.x = p * Math.sin(2 * o * Math.PI);
            r.y = -q * c + g;
            r.z = p * Math.cos(2 * o * Math.PI);
            this.vertices.push(r);
            n.push(this.vertices.length - 1);
            m.push(new THREE.UV(o, 1 - q))
        }
        j.push(n);
        l.push(m)
    }
    c = (b - a) / c;
    for (h = 0; h < d; h++) {
        0 !== a ? (n = this.vertices[j[0][h]].clone(), m = this.vertices[j[0][h + 
        1]].clone()) : (n = this.vertices[j[1][h]].clone(), m = this.vertices[j[1][h + 1]].clone());
        n.setY(Math.sqrt(n.x * n.x + n.z * n.z) * c).normalize();
        m.setY(Math.sqrt(m.x * m.x + m.z * m.z) * c).normalize();
        for (i = 0; i < e; i++) {
            var q = j[i][h], p = j[i + 1][h], o = j[i + 1][h + 1], r = j[i][h + 1], t = n.clone(), u = n.clone(), w = m.clone(), s = m.clone(), B = l[i][h].clone(), v = l[i + 1][h].clone(), A = l[i + 1][h + 1].clone(), E = l[i][h + 1].clone();
            this.faces.push(new THREE.Face4(q, p, o, r, [t, u, w, s]));
            this.faceVertexUvs[0].push([B, v, A, E])
        }
    }
    if (!f && 0 < a) {
        this.vertices.push(new THREE.Vector3(0, 
        g, 0));
        for (h = 0; h < d; h++)
            q = j[0][h], p = j[0][h + 1], o = this.vertices.length - 1, t = new THREE.Vector3(0, 1, 0), u = new THREE.Vector3(0, 1, 0), w = new THREE.Vector3(0, 1, 0), B = l[0][h].clone(), v = l[0][h + 1].clone(), A = new THREE.UV(v.u, 0), this.faces.push(new THREE.Face3(q, p, o, [t, u, w])), this.faceVertexUvs[0].push([B, v, A])
    }
    if (!f && 0 < b) {
        this.vertices.push(new THREE.Vector3(0, -g, 0));
        for (h = 0; h < d; h++)
            q = j[i][h + 1], p = j[i][h], o = this.vertices.length - 1, t = new THREE.Vector3(0, -1, 0), u = new THREE.Vector3(0, -1, 0), w = new THREE.Vector3(0, -1, 0), B = 
            l[i][h + 1].clone(), v = l[i][h].clone(), A = new THREE.UV(v.u, 1), this.faces.push(new THREE.Face3(q, p, o, [t, u, w])), this.faceVertexUvs[0].push([B, v, A])
    }
    this.computeCentroids();
    this.computeFaceNormals()
};
THREE.CylinderGeometry.prototype = Object.create(THREE.Geometry.prototype);
THREE.ExtrudeGeometry = function(a, b) {
    "undefined" !== typeof a && (THREE.Geometry.call(this), a = a instanceof Array ? a : [a], this.shapebb = a[a.length - 1].getBoundingBox(), this.addShapeList(a, b), this.computeCentroids(), this.computeFaceNormals())
};
THREE.ExtrudeGeometry.prototype = Object.create(THREE.Geometry.prototype);
THREE.ExtrudeGeometry.prototype.addShapeList = function(a, b) {
    for (var c = a.length, d = 0; d < c; d++)
        this.addShape(a[d], b)
};
THREE.ExtrudeGeometry.prototype.addShape = function(a, b) {
    function c(a, b, c) {
        b || console.log("die");
        return b.clone().multiplyScalar(c).addSelf(a)
    }
    function d(a, b, c) {
        var d = THREE.ExtrudeGeometry.__v1, e = THREE.ExtrudeGeometry.__v2, f = THREE.ExtrudeGeometry.__v3, g = THREE.ExtrudeGeometry.__v4, h = THREE.ExtrudeGeometry.__v5, i = THREE.ExtrudeGeometry.__v6;
        d.set(a.x - b.x, a.y - b.y);
        e.set(a.x - c.x, a.y - c.y);
        d = d.normalize();
        e = e.normalize();
        f.set(-d.y, d.x);
        g.set(e.y, -e.x);
        h.copy(a).addSelf(f);
        i.copy(a).addSelf(g);
        if (h.equals(i))
            return g.clone();
        h.copy(b).addSelf(f);
        i.copy(c).addSelf(g);
        f = d.dot(g);
        g = i.subSelf(h).dot(g);
        0 === f && (console.log("Either infinite or no solutions!"), 0 === g ? console.log("Its finite solutions.") : console.log("Too bad, no solutions."));
        g /= f;
        return 0 > g ? (b = Math.atan2(b.y - a.y, b.x - a.x), a = Math.atan2(c.y - a.y, c.x - a.x), b > a && (a += 2 * Math.PI), c = (b + a) / 2, a = -Math.cos(c), c = -Math.sin(c), new THREE.Vector2(a, c)) : d.multiplyScalar(g).addSelf(h).subSelf(a).clone()
    }
    function e(c, d) {
        var e, f;
        for (I = c.length; 0 <= --I; ) {
            e = I;
            f = I - 1;
            0 > f && (f = c.length - 1);
            for (var g = 0, h = m + 2 * l, g = 0; g < h; g++) {
                var i = S * g, j = S * (g + 1), n = d + e + i, i = d + f + i, o = d + f + j, j = d + e + j, p = c, q = g, r = h, s = e, v = f, n = n + D, i = i + D, o = o + D, j = j + D;
                L.faces.push(new THREE.Face4(n, i, o, j, null, null, t));
                n = u.generateSideWallUV(L, a, p, b, n, i, o, j, q, r, s, v);
                L.faceVertexUvs[0].push(n)
            }
        }
    }
    function f(a, b, c) {
        L.vertices.push(new THREE.Vector3(a, b, c))
    }
    function g(c, d, e, f) {
        c += D;
        d += D;
        e += D;
        L.faces.push(new THREE.Face3(c, d, e, null, null, r));
        c = f ? u.generateBottomUV(L, a, b, c, d, e) : u.generateTopUV(L, a, b, c, d, e);
        L.faceVertexUvs[0].push(c)
    }
    var h = void 0 !== 
    b.amount ? b.amount : 100, i = void 0 !== b.bevelThickness ? b.bevelThickness : 6, j = void 0 !== b.bevelSize ? b.bevelSize : i - 2, l = void 0 !== b.bevelSegments ? b.bevelSegments : 3, n = void 0 !== b.bevelEnabled ? b.bevelEnabled : !0, m = void 0 !== b.steps ? b.steps : 1, q = b.extrudePath, p, o = !1, r = b.material, t = b.extrudeMaterial, u = void 0 !== b.UVGenerator ? b.UVGenerator : THREE.ExtrudeGeometry.WorldUVGenerator, w, s, B, v;
    q && (p = q.getSpacedPoints(m), o = !0, n = !1, w = void 0 !== b.frames ? b.frames : new THREE.TubeGeometry.FrenetFrames(q, m, !1), s = new THREE.Vector3, B = new THREE.Vector3, 
    v = new THREE.Vector3);
    n || (j = i = l = 0);
    var A, E, x, L = this, D = this.vertices.length, q = a.extractPoints(), G = q.shape, q = q.holes, C = !THREE.Shape.Utils.isClockWise(G);
    if (C) {
        G = G.reverse();
        E = 0;
        for (x = q.length; E < x; E++)
            A = q[E], THREE.Shape.Utils.isClockWise(A) && (q[E] = A.reverse());
        C = !1
    }
    var N = THREE.Shape.Utils.triangulateShape(G, q), C = G;
    E = 0;
    for (x = q.length; E < x; E++)
        A = q[E], G = G.concat(A);
    var J, M, K, H, S = G.length, X = N.length, Z = [], I = 0, Y = C.length;
    J = Y - 1;
    for (M = I + 1; I < Y; I++, J++, M++)
        J === Y && (J = 0), M === Y && (M = 0), Z[I] = d(C[I], C[J], C[M]);
    var O = 
    [], na, qa = Z.concat();
    E = 0;
    for (x = q.length; E < x; E++) {
        A = q[E];
        na = [];
        I = 0;
        Y = A.length;
        J = Y - 1;
        for (M = I + 1; I < Y; I++, J++, M++)
            J === Y && (J = 0), M === Y && (M = 0), na[I] = d(A[I], A[J], A[M]);
        O.push(na);
        qa = qa.concat(na)
    }
    for (J = 0; J < l; J++) {
        A = J / l;
        K = i * (1 - A);
        M = j * Math.sin(A * Math.PI / 2);
        I = 0;
        for (Y = C.length; I < Y; I++)
            H = c(C[I], Z[I], M), f(H.x, H.y, -K);
        E = 0;
        for (x = q.length; E < x; E++) {
            A = q[E];
            na = O[E];
            I = 0;
            for (Y = A.length; I < Y; I++)
                H = c(A[I], na[I], M), f(H.x, H.y, -K)
        }
    }
    M = j;
    for (I = 0; I < S; I++)
        H = n ? c(G[I], qa[I], M) : G[I], o ? (B.copy(w.normals[0]).multiplyScalar(H.x), s.copy(w.binormals[0]).multiplyScalar(H.y), 
        v.copy(p[0]).addSelf(B).addSelf(s), f(v.x, v.y, v.z)) : f(H.x, H.y, 0);
    for (A = 1; A <= m; A++)
        for (I = 0; I < S; I++)
            H = n ? c(G[I], qa[I], M) : G[I], o ? (B.copy(w.normals[A]).multiplyScalar(H.x), s.copy(w.binormals[A]).multiplyScalar(H.y), v.copy(p[A]).addSelf(B).addSelf(s), f(v.x, v.y, v.z)) : f(H.x, H.y, h / m * A);
    for (J = l - 1; 0 <= J; J--) {
        A = J / l;
        K = i * (1 - A);
        M = j * Math.sin(A * Math.PI / 2);
        I = 0;
        for (Y = C.length; I < Y; I++)
            H = c(C[I], Z[I], M), f(H.x, H.y, h + K);
        E = 0;
        for (x = q.length; E < x; E++) {
            A = q[E];
            na = O[E];
            I = 0;
            for (Y = A.length; I < Y; I++)
                H = c(A[I], na[I], M), o ? f(H.x, H.y + p[m - 
                1].y, p[m - 1].x + K) : f(H.x, H.y, h + K)
        }
    }
    if (n) {
        i = 0 * S;
        for (I = 0; I < X; I++)
            h = N[I], g(h[2] + i, h[1] + i, h[0] + i, !0);
        i = S * (m + 2 * l);
        for (I = 0; I < X; I++)
            h = N[I], g(h[0] + i, h[1] + i, h[2] + i, !1)
    } else {
        for (I = 0; I < X; I++)
            h = N[I], g(h[2], h[1], h[0], !0);
        for (I = 0; I < X; I++)
            h = N[I], g(h[0] + S * m, h[1] + S * m, h[2] + S * m, !1)
    }
    h = 0;
    e(C, h);
    h += C.length;
    E = 0;
    for (x = q.length; E < x; E++)
        A = q[E], e(A, h), h += A.length
};
THREE.ExtrudeGeometry.WorldUVGenerator = {generateTopUV: function(a, b, c, d, e, f) {
        b = a.vertices[e].x;
        e = a.vertices[e].y;
        c = a.vertices[f].x;
        f = a.vertices[f].y;
        return [new THREE.UV(a.vertices[d].x, a.vertices[d].y), new THREE.UV(b, e), new THREE.UV(c, f)]
    },generateBottomUV: function(a, b, c, d, e, f) {
        return this.generateTopUV(a, b, c, d, e, f)
    },generateSideWallUV: function(a, b, c, d, e, f, g, h) {
        var b = a.vertices[e].x, c = a.vertices[e].y, e = a.vertices[e].z, d = a.vertices[f].x, i = a.vertices[f].y, f = a.vertices[f].z, j = a.vertices[g].x, l = a.vertices[g].y, 
        g = a.vertices[g].z, n = a.vertices[h].x, m = a.vertices[h].y, a = a.vertices[h].z;
        return 0.01 > Math.abs(c - i) ? [new THREE.UV(b, 1 - e), new THREE.UV(d, 1 - f), new THREE.UV(j, 1 - g), new THREE.UV(n, 1 - a)] : [new THREE.UV(c, 1 - e), new THREE.UV(i, 1 - f), new THREE.UV(l, 1 - g), new THREE.UV(m, 1 - a)]
    }};
THREE.ExtrudeGeometry.__v1 = new THREE.Vector2;
THREE.ExtrudeGeometry.__v2 = new THREE.Vector2;
THREE.ExtrudeGeometry.__v3 = new THREE.Vector2;
THREE.ExtrudeGeometry.__v4 = new THREE.Vector2;
THREE.ExtrudeGeometry.__v5 = new THREE.Vector2;
THREE.ExtrudeGeometry.__v6 = new THREE.Vector2;
THREE.ShapeGeometry = function(a, b) {
    THREE.Geometry.call(this);
    !1 === a instanceof Array && (a = [a]);
    this.shapebb = a[a.length - 1].getBoundingBox();
    this.addShapeList(a, b);
    this.computeCentroids();
    this.computeFaceNormals()
};
THREE.ShapeGeometry.prototype = Object.create(THREE.Geometry.prototype);
THREE.ShapeGeometry.prototype.addShapeList = function(a, b) {
    for (var c = 0, d = a.length; c < d; c++)
        this.addShape(a[c], b);
    return this
};
THREE.ShapeGeometry.prototype.addShape = function(a, b) {
    void 0 === b && (b = {});
    var c = b.material, d = void 0 === b.UVGenerator ? THREE.ExtrudeGeometry.WorldUVGenerator : b.UVGenerator, e, f, g, h = this.vertices.length;
    e = a.extractPoints();
    var i = e.shape, j = e.holes;
    if (!THREE.Shape.Utils.isClockWise(i)) {
        i = i.reverse();
        e = 0;
        for (f = j.length; e < f; e++)
            g = j[e], THREE.Shape.Utils.isClockWise(g) && (j[e] = g.reverse())
    }
    var l = THREE.Shape.Utils.triangulateShape(i, j);
    e = 0;
    for (f = j.length; e < f; e++)
        g = j[e], i = i.concat(g);
    j = i.length;
    f = l.length;
    for (e = 
    0; e < j; e++)
        g = i[e], this.vertices.push(new THREE.Vector3(g.x, g.y, 0));
    for (e = 0; e < f; e++)
        j = l[e], i = j[2] + h, g = j[1] + h, j = j[0] + h, this.faces.push(new THREE.Face3(i, g, j, null, null, c)), this.faceVertexUvs[0].push(d.generateBottomUV(this, a, b, i, g, j))
};
THREE.LatheGeometry = function(a, b, c) {
    THREE.Geometry.call(this);
    for (var b = b || 12, c = c || 2 * Math.PI, d = [], e = (new THREE.Matrix4).makeRotationZ(c / b), f = 0; f < a.length; f++)
        d[f] = a[f].clone(), this.vertices.push(d[f]);
    for (var g = b + 1, c = 0; c < g; c++)
        for (f = 0; f < d.length; f++)
            d[f] = e.multiplyVector3(d[f].clone()), this.vertices.push(d[f]);
    for (c = 0; c < b; c++) {
        d = 0;
        for (e = a.length; d < e - 1; d++)
            this.faces.push(new THREE.Face4(c * e + d, (c + 1) % g * e + d, (c + 1) % g * e + (d + 1) % e, c * e + (d + 1) % e)), this.faceVertexUvs[0].push([new THREE.UV(1 - c / b, d / e), new THREE.UV(1 - 
                (c + 1) / b, d / e), new THREE.UV(1 - (c + 1) / b, (d + 1) / e), new THREE.UV(1 - c / b, (d + 1) / e)])
    }
    this.computeCentroids();
    this.computeFaceNormals();
    this.computeVertexNormals()
};
THREE.LatheGeometry.prototype = Object.create(THREE.Geometry.prototype);
THREE.PlaneGeometry = function(a, b, c, d) {
    THREE.Geometry.call(this);
    for (var e = a / 2, f = b / 2, c = c || 1, d = d || 1, g = c + 1, h = d + 1, i = a / c, j = b / d, l = new THREE.Vector3(0, 0, 1), a = 0; a < h; a++)
        for (b = 0; b < g; b++)
            this.vertices.push(new THREE.Vector3(b * i - e, -(a * j - f), 0));
    for (a = 0; a < d; a++)
        for (b = 0; b < c; b++)
            e = new THREE.Face4(b + g * a, b + g * (a + 1), b + 1 + g * (a + 1), b + 1 + g * a), e.normal.copy(l), e.vertexNormals.push(l.clone(), l.clone(), l.clone(), l.clone()), this.faces.push(e), this.faceVertexUvs[0].push([new THREE.UV(b / c, 1 - a / d), new THREE.UV(b / c, 1 - (a + 1) / d), new THREE.UV((b + 
                1) / c, 1 - (a + 1) / d), new THREE.UV((b + 1) / c, 1 - a / d)]);
    this.computeCentroids()
};
THREE.PlaneGeometry.prototype = Object.create(THREE.Geometry.prototype);
THREE.SphereGeometry = function(a, b, c, d, e, f, g) {
    THREE.Geometry.call(this);
    var a = a || 50, d = void 0 !== d ? d : 0, e = void 0 !== e ? e : 2 * Math.PI, f = void 0 !== f ? f : 0, g = void 0 !== g ? g : Math.PI, b = Math.max(3, Math.floor(b) || 8), c = Math.max(2, Math.floor(c) || 6), h, i, j = [], l = [];
    for (i = 0; i <= c; i++) {
        var n = [], m = [];
        for (h = 0; h <= b; h++) {
            var q = h / b, p = i / c, o = new THREE.Vector3;
            o.x = -a * Math.cos(d + q * e) * Math.sin(f + p * g);
            o.y = a * Math.cos(f + p * g);
            o.z = a * Math.sin(d + q * e) * Math.sin(f + p * g);
            this.vertices.push(o);
            n.push(this.vertices.length - 1);
            m.push(new THREE.UV(q, 
            1 - p))
        }
        j.push(n);
        l.push(m)
    }
    for (i = 0; i < c; i++)
        for (h = 0; h < b; h++) {
            var d = j[i][h + 1], e = j[i][h], f = j[i + 1][h], g = j[i + 1][h + 1], n = this.vertices[d].clone().normalize(), m = this.vertices[e].clone().normalize(), q = this.vertices[f].clone().normalize(), p = this.vertices[g].clone().normalize(), o = l[i][h + 1].clone(), r = l[i][h].clone(), t = l[i + 1][h].clone(), u = l[i + 1][h + 1].clone();
            Math.abs(this.vertices[d].y) == a ? (this.faces.push(new THREE.Face3(d, f, g, [n, q, p])), this.faceVertexUvs[0].push([o, t, u])) : Math.abs(this.vertices[f].y) == a ? (this.faces.push(new THREE.Face3(d, 
            e, f, [n, m, q])), this.faceVertexUvs[0].push([o, r, t])) : (this.faces.push(new THREE.Face4(d, e, f, g, [n, m, q, p])), this.faceVertexUvs[0].push([o, r, t, u]))
        }
    this.computeCentroids();
    this.computeFaceNormals();
    this.boundingSphere = {radius: a}
};
THREE.SphereGeometry.prototype = Object.create(THREE.Geometry.prototype);
THREE.TextGeometry = function(a, b) {
    var c = THREE.FontUtils.generateShapes(a, b);
    b.amount = void 0 !== b.height ? b.height : 50;
    void 0 === b.bevelThickness && (b.bevelThickness = 10);
    void 0 === b.bevelSize && (b.bevelSize = 8);
    void 0 === b.bevelEnabled && (b.bevelEnabled = !1);
    THREE.ExtrudeGeometry.call(this, c, b)
};
THREE.TextGeometry.prototype = Object.create(THREE.ExtrudeGeometry.prototype);
THREE.TorusGeometry = function(a, b, c, d, e) {
    THREE.Geometry.call(this);
    this.radius = a || 100;
    this.tube = b || 40;
    this.segmentsR = c || 8;
    this.segmentsT = d || 6;
    this.arc = e || 2 * Math.PI;
    e = new THREE.Vector3;
    a = [];
    b = [];
    for (c = 0; c <= this.segmentsR; c++)
        for (d = 0; d <= this.segmentsT; d++) {
            var f = d / this.segmentsT * this.arc, g = 2 * c / this.segmentsR * Math.PI;
            e.x = this.radius * Math.cos(f);
            e.y = this.radius * Math.sin(f);
            var h = new THREE.Vector3;
            h.x = (this.radius + this.tube * Math.cos(g)) * Math.cos(f);
            h.y = (this.radius + this.tube * Math.cos(g)) * Math.sin(f);
            h.z = 
            this.tube * Math.sin(g);
            this.vertices.push(h);
            a.push(new THREE.UV(d / this.segmentsT, c / this.segmentsR));
            b.push(h.clone().subSelf(e).normalize())
        }
    for (c = 1; c <= this.segmentsR; c++)
        for (d = 1; d <= this.segmentsT; d++) {
            var e = (this.segmentsT + 1) * c + d - 1, f = (this.segmentsT + 1) * (c - 1) + d - 1, g = (this.segmentsT + 1) * (c - 1) + d, h = (this.segmentsT + 1) * c + d, i = new THREE.Face4(e, f, g, h, [b[e], b[f], b[g], b[h]]);
            i.normal.addSelf(b[e]);
            i.normal.addSelf(b[f]);
            i.normal.addSelf(b[g]);
            i.normal.addSelf(b[h]);
            i.normal.normalize();
            this.faces.push(i);
            this.faceVertexUvs[0].push([a[e].clone(), 
                a[f].clone(), a[g].clone(), a[h].clone()])
        }
    this.computeCentroids()
};
THREE.TorusGeometry.prototype = Object.create(THREE.Geometry.prototype);
THREE.TorusKnotGeometry = function(a, b, c, d, e, f, g) {
    function h(a, b, c, d, e, f) {
        var g = Math.cos(a);
        Math.cos(b);
        b = Math.sin(a);
        a *= c / d;
        c = Math.cos(a);
        g *= 0.5 * e * (2 + c);
        b = 0.5 * e * (2 + c) * b;
        e = 0.5 * f * e * Math.sin(a);
        return new THREE.Vector3(g, b, e)
    }
    THREE.Geometry.call(this);
    this.radius = a || 200;
    this.tube = b || 40;
    this.segmentsR = c || 64;
    this.segmentsT = d || 8;
    this.p = e || 2;
    this.q = f || 3;
    this.heightScale = g || 1;
    this.grid = Array(this.segmentsR);
    c = new THREE.Vector3;
    d = new THREE.Vector3;
    e = new THREE.Vector3;
    for (a = 0; a < this.segmentsR; ++a) {
        this.grid[a] = 
        Array(this.segmentsT);
        for (b = 0; b < this.segmentsT; ++b) {
            var i = 2 * (a / this.segmentsR) * this.p * Math.PI, g = 2 * (b / this.segmentsT) * Math.PI, f = h(i, g, this.q, this.p, this.radius, this.heightScale), i = h(i + 0.01, g, this.q, this.p, this.radius, this.heightScale);
            c.sub(i, f);
            d.add(i, f);
            e.cross(c, d);
            d.cross(e, c);
            e.normalize();
            d.normalize();
            i = -this.tube * Math.cos(g);
            g = this.tube * Math.sin(g);
            f.x += i * d.x + g * e.x;
            f.y += i * d.y + g * e.y;
            f.z += i * d.z + g * e.z;
            this.grid[a][b] = this.vertices.push(new THREE.Vector3(f.x, f.y, f.z)) - 1
        }
    }
    for (a = 0; a < this.segmentsR; ++a)
        for (b = 
        0; b < this.segmentsT; ++b) {
            var e = (a + 1) % this.segmentsR, f = (b + 1) % this.segmentsT, c = this.grid[a][b], d = this.grid[e][b], e = this.grid[e][f], f = this.grid[a][f], g = new THREE.UV(a / this.segmentsR, b / this.segmentsT), i = new THREE.UV((a + 1) / this.segmentsR, b / this.segmentsT), j = new THREE.UV((a + 1) / this.segmentsR, (b + 1) / this.segmentsT), l = new THREE.UV(a / this.segmentsR, (b + 1) / this.segmentsT);
            this.faces.push(new THREE.Face4(c, d, e, f));
            this.faceVertexUvs[0].push([g, i, j, l])
        }
    this.computeCentroids();
    this.computeFaceNormals();
    this.computeVertexNormals()
};
THREE.TorusKnotGeometry.prototype = Object.create(THREE.Geometry.prototype);
THREE.TubeGeometry = function(a, b, c, d, e, f) {
    THREE.Geometry.call(this);
    this.path = a;
    this.segments = b || 64;
    this.radius = c || 1;
    this.segmentsRadius = d || 8;
    this.closed = e || !1;
    f && (this.debug = new THREE.Object3D);
    this.grid = [];
    var g, h, f = this.segments + 1, i, j, l, n = new THREE.Vector3, m, q, p, b = new THREE.TubeGeometry.FrenetFrames(a, b, e);
    m = b.tangents;
    q = b.normals;
    p = b.binormals;
    this.tangents = m;
    this.normals = q;
    this.binormals = p;
    for (b = 0; b < f; b++) {
        this.grid[b] = [];
        d = b / (f - 1);
        l = a.getPointAt(d);
        d = m[b];
        g = q[b];
        h = p[b];
        this.debug && (this.debug.add(new THREE.ArrowHelper(d, 
        l, c, 255)), this.debug.add(new THREE.ArrowHelper(g, l, c, 16711680)), this.debug.add(new THREE.ArrowHelper(h, l, c, 65280)));
        for (d = 0; d < this.segmentsRadius; d++)
            i = 2 * (d / this.segmentsRadius) * Math.PI, j = -this.radius * Math.cos(i), i = this.radius * Math.sin(i), n.copy(l), n.x += j * g.x + i * h.x, n.y += j * g.y + i * h.y, n.z += j * g.z + i * h.z, this.grid[b][d] = this.vertices.push(new THREE.Vector3(n.x, n.y, n.z)) - 1
    }
    for (b = 0; b < this.segments; b++)
        for (d = 0; d < this.segmentsRadius; d++)
            f = e ? (b + 1) % this.segments : b + 1, n = (d + 1) % this.segmentsRadius, a = this.grid[b][d], 
            c = this.grid[f][d], f = this.grid[f][n], n = this.grid[b][n], m = new THREE.UV(b / this.segments, d / this.segmentsRadius), q = new THREE.UV((b + 1) / this.segments, d / this.segmentsRadius), p = new THREE.UV((b + 1) / this.segments, (d + 1) / this.segmentsRadius), g = new THREE.UV(b / this.segments, (d + 1) / this.segmentsRadius), this.faces.push(new THREE.Face4(a, c, f, n)), this.faceVertexUvs[0].push([m, q, p, g]);
    this.computeCentroids();
    this.computeFaceNormals();
    this.computeVertexNormals()
};
THREE.TubeGeometry.prototype = Object.create(THREE.Geometry.prototype);
THREE.TubeGeometry.FrenetFrames = function(a, b, c) {
    new THREE.Vector3;
    var d = new THREE.Vector3;
    new THREE.Vector3;
    var e = [], f = [], g = [], h = new THREE.Vector3, i = new THREE.Matrix4, b = b + 1, j, l, n;
    this.tangents = e;
    this.normals = f;
    this.binormals = g;
    for (j = 0; j < b; j++)
        l = j / (b - 1), e[j] = a.getTangentAt(l), e[j].normalize();
    f[0] = new THREE.Vector3;
    g[0] = new THREE.Vector3;
    a = Number.MAX_VALUE;
    j = Math.abs(e[0].x);
    l = Math.abs(e[0].y);
    n = Math.abs(e[0].z);
    j <= a && (a = j, d.set(1, 0, 0));
    l <= a && (a = l, d.set(0, 1, 0));
    n <= a && d.set(0, 0, 1);
    h.cross(e[0], d).normalize();
    f[0].cross(e[0], h);
    g[0].cross(e[0], f[0]);
    for (j = 1; j < b; j++)
        f[j] = f[j - 1].clone(), g[j] = g[j - 1].clone(), h.cross(e[j - 1], e[j]), 1E-4 < h.length() && (h.normalize(), d = Math.acos(e[j - 1].dot(e[j])), i.makeRotationAxis(h, d).multiplyVector3(f[j])), g[j].cross(e[j], f[j]);
    if (c) {
        d = Math.acos(f[0].dot(f[b - 1]));
        d /= b - 1;
        0 < e[0].dot(h.cross(f[0], f[b - 1])) && (d = -d);
        for (j = 1; j < b; j++)
            i.makeRotationAxis(e[j], d * j).multiplyVector3(f[j]), g[j].cross(e[j], f[j])
    }
};
THREE.PolyhedronGeometry = function(a, b, c, d) {
    function e(a) {
        var b = a.normalize().clone();
        b.index = i.vertices.push(b) - 1;
        var c = Math.atan2(a.z, -a.x) / 2 / Math.PI + 0.5, a = Math.atan2(-a.y, Math.sqrt(a.x * a.x + a.z * a.z)) / Math.PI + 0.5;
        b.uv = new THREE.UV(c, 1 - a);
        return b
    }
    function f(a, b, c, d) {
        1 > d ? (d = new THREE.Face3(a.index, b.index, c.index, [a.clone(), b.clone(), c.clone()]), d.centroid.addSelf(a).addSelf(b).addSelf(c).divideScalar(3), d.normal = d.centroid.clone().normalize(), i.faces.push(d), d = Math.atan2(d.centroid.z, -d.centroid.x), 
        i.faceVertexUvs[0].push([h(a.uv, a, d), h(b.uv, b, d), h(c.uv, c, d)])) : (d -= 1, f(a, g(a, b), g(a, c), d), f(g(a, b), b, g(b, c), d), f(g(a, c), g(b, c), c, d), f(g(a, b), g(b, c), g(a, c), d))
    }
    function g(a, b) {
        n[a.index] || (n[a.index] = []);
        n[b.index] || (n[b.index] = []);
        var c = n[a.index][b.index];
        void 0 === c && (n[a.index][b.index] = n[b.index][a.index] = c = e((new THREE.Vector3).add(a, b).divideScalar(2)));
        return c
    }
    function h(a, b, c) {
        0 > c && 1 === a.u && (a = new THREE.UV(a.u - 1, a.v));
        0 === b.x && 0 === b.z && (a = new THREE.UV(c / 2 / Math.PI + 0.5, a.v));
        return a
    }
    THREE.Geometry.call(this);
    for (var c = c || 1, d = d || 0, i = this, j = 0, l = a.length; j < l; j++)
        e(new THREE.Vector3(a[j][0], a[j][1], a[j][2]));
    for (var n = [], a = this.vertices, j = 0, l = b.length; j < l; j++)
        f(a[b[j][0]], a[b[j][1]], a[b[j][2]], d);
    this.mergeVertices();
    j = 0;
    for (l = this.vertices.length; j < l; j++)
        this.vertices[j].multiplyScalar(c);
    this.computeCentroids();
    this.boundingSphere = {radius: c}
};
THREE.PolyhedronGeometry.prototype = Object.create(THREE.Geometry.prototype);
THREE.IcosahedronGeometry = function(a, b) {
    var c = (1 + Math.sqrt(5)) / 2;
    THREE.PolyhedronGeometry.call(this, [[-1, c, 0], [1, c, 0], [-1, -c, 0], [1, -c, 0], [0, -1, c], [0, 1, c], [0, -1, -c], [0, 1, -c], [c, 0, -1], [c, 0, 1], [-c, 0, -1], [-c, 0, 1]], [[0, 11, 5], [0, 5, 1], [0, 1, 7], [0, 7, 10], [0, 10, 11], [1, 5, 9], [5, 11, 4], [11, 10, 2], [10, 7, 6], [7, 1, 8], [3, 9, 4], [3, 4, 2], [3, 2, 6], [3, 6, 8], [3, 8, 9], [4, 9, 5], [2, 4, 11], [6, 2, 10], [8, 6, 7], [9, 8, 1]], a, b)
};
THREE.IcosahedronGeometry.prototype = Object.create(THREE.Geometry.prototype);
THREE.OctahedronGeometry = function(a, b) {
    THREE.PolyhedronGeometry.call(this, [[1, 0, 0], [-1, 0, 0], [0, 1, 0], [0, -1, 0], [0, 0, 1], [0, 0, -1]], [[0, 2, 4], [0, 4, 3], [0, 3, 5], [0, 5, 2], [1, 2, 5], [1, 5, 3], [1, 3, 4], [1, 4, 2]], a, b)
};
THREE.OctahedronGeometry.prototype = Object.create(THREE.Geometry.prototype);
THREE.TetrahedronGeometry = function(a, b) {
    THREE.PolyhedronGeometry.call(this, [[1, 1, 1], [-1, -1, 1], [-1, 1, -1], [1, -1, -1]], [[2, 1, 0], [0, 3, 2], [1, 3, 0], [2, 3, 1]], a, b)
};
THREE.TetrahedronGeometry.prototype = Object.create(THREE.Geometry.prototype);
THREE.ParametricGeometry = function(a, b, c, d) {
    THREE.Geometry.call(this);
    var e = this.vertices, f = this.faces, g = this.faceVertexUvs[0], d = void 0 === d ? !1 : d, h, i, j, l, n = b + 1;
    for (h = 0; h <= c; h++) {
        l = h / c;
        for (i = 0; i <= b; i++)
            j = i / b, j = a(j, l), e.push(j)
    }
    var m, q, p, o;
    for (h = 0; h < c; h++)
        for (i = 0; i < b; i++)
            a = h * n + i, e = h * n + i + 1, l = (h + 1) * n + i, j = (h + 1) * n + i + 1, m = new THREE.UV(i / b, h / c), q = new THREE.UV((i + 1) / b, h / c), p = new THREE.UV(i / b, (h + 1) / c), o = new THREE.UV((i + 1) / b, (h + 1) / c), d ? (f.push(new THREE.Face3(a, e, l)), f.push(new THREE.Face3(e, j, l)), g.push([m, q, 
                p]), g.push([q, o, p])) : (f.push(new THREE.Face4(a, e, j, l)), g.push([m, q, o, p]));
    this.computeCentroids();
    this.computeFaceNormals();
    this.computeVertexNormals()
};
THREE.ParametricGeometry.prototype = Object.create(THREE.Geometry.prototype);
THREE.ConvexGeometry = function(a) {
    function b(a) {
        var b = a.length();
        return new THREE.UV(a.x / b, a.y / b)
    }
    THREE.Geometry.call(this);
    for (var c = [[0, 1, 2], [0, 2, 1]], d = 3; d < a.length; d++) {
        var e = d, f = a[e].clone(), g = f.length();
        f.x += 2E-6 * g * (Math.random() - 0.5);
        f.y += 2E-6 * g * (Math.random() - 0.5);
        f.z += 2E-6 * g * (Math.random() - 0.5);
        for (var g = [], h = 0; h < c.length; ) {
            var i = c[h], j = f, l = a[i[0]], n;
            n = l;
            var m = a[i[1]], q = a[i[2]], p = new THREE.Vector3, o = new THREE.Vector3;
            p.sub(q, m);
            o.sub(n, m);
            p.crossSelf(o);
            p.isZero() || p.normalize();
            n = p;
            l = n.dot(l);
            if (n.dot(j) >= l) {
                for (j = 0; 3 > j; j++) {
                    l = [i[j], i[(j + 1) % 3]];
                    n = !0;
                    for (m = 0; m < g.length; m++)
                        if (g[m][0] === l[1] && g[m][1] === l[0]) {
                            g[m] = g[g.length - 1];
                            g.pop();
                            n = !1;
                            break
                        }
                    n && g.push(l)
                }
                c[h] = c[c.length - 1];
                c.pop()
            } else
                h++
        }
        for (m = 0; m < g.length; m++)
            c.push([g[m][0], g[m][1], e])
    }
    e = 0;
    f = Array(a.length);
    for (d = 0; d < c.length; d++) {
        g = c[d];
        for (h = 0; 3 > h; h++)
            void 0 === f[g[h]] && (f[g[h]] = e++, this.vertices.push(a[g[h]])), g[h] = f[g[h]]
    }
    for (d = 0; d < c.length; d++)
        this.faces.push(new THREE.Face3(c[d][0], c[d][1], c[d][2]));
    for (d = 0; d < this.faces.length; d++)
        g = 
        this.faces[d], this.faceVertexUvs[0].push([b(this.vertices[g.a]), b(this.vertices[g.b]), b(this.vertices[g.c])]);
    this.computeCentroids();
    this.computeFaceNormals();
    this.computeVertexNormals()
};
THREE.ConvexGeometry.prototype = Object.create(THREE.Geometry.prototype);
THREE.AxisHelper = function() {
    THREE.Object3D.call(this);
    var a = new THREE.Geometry;
    a.vertices.push(new THREE.Vector3);
    a.vertices.push(new THREE.Vector3(0, 100, 0));
    var b = new THREE.CylinderGeometry(0, 5, 25, 5, 1), c;
    c = new THREE.Line(a, new THREE.LineBasicMaterial({color: 16711680}));
    c.rotation.z = -Math.PI / 2;
    this.add(c);
    c = new THREE.Mesh(b, new THREE.MeshBasicMaterial({color: 16711680}));
    c.position.x = 100;
    c.rotation.z = -Math.PI / 2;
    this.add(c);
    c = new THREE.Line(a, new THREE.LineBasicMaterial({color: 65280}));
    this.add(c);
    c = new THREE.Mesh(b, new THREE.MeshBasicMaterial({color: 65280}));
    c.position.y = 100;
    this.add(c);
    c = new THREE.Line(a, new THREE.LineBasicMaterial({color: 255}));
    c.rotation.x = Math.PI / 2;
    this.add(c);
    c = new THREE.Mesh(b, new THREE.MeshBasicMaterial({color: 255}));
    c.position.z = 100;
    c.rotation.x = Math.PI / 2;
    this.add(c)
};
THREE.AxisHelper.prototype = Object.create(THREE.Object3D.prototype);
THREE.ArrowHelper = function(a, b, c, d) {
    THREE.Object3D.call(this);
    void 0 === d && (d = 16776960);
    void 0 === c && (c = 20);
    var e = new THREE.Geometry;
    e.vertices.push(new THREE.Vector3(0, 0, 0));
    e.vertices.push(new THREE.Vector3(0, 1, 0));
    this.line = new THREE.Line(e, new THREE.LineBasicMaterial({color: d}));
    this.add(this.line);
    e = new THREE.CylinderGeometry(0, 0.05, 0.25, 5, 1);
    this.cone = new THREE.Mesh(e, new THREE.MeshBasicMaterial({color: d}));
    this.cone.position.set(0, 1, 0);
    this.add(this.cone);
    b instanceof THREE.Vector3 && (this.position = 
    b);
    this.setDirection(a);
    this.setLength(c)
};
THREE.ArrowHelper.prototype = Object.create(THREE.Object3D.prototype);
THREE.ArrowHelper.prototype.setDirection = function(a) {
    var b = (new THREE.Vector3(0, 1, 0)).crossSelf(a), a = Math.acos((new THREE.Vector3(0, 1, 0)).dot(a.clone().normalize()));
    this.matrix = (new THREE.Matrix4).makeRotationAxis(b.normalize(), a);
    this.rotation.setEulerFromRotationMatrix(this.matrix, this.eulerOrder)
};
THREE.ArrowHelper.prototype.setLength = function(a) {
    this.scale.set(a, a, a)
};
THREE.ArrowHelper.prototype.setColor = function(a) {
    this.line.material.color.setHex(a);
    this.cone.material.color.setHex(a)
};
THREE.CameraHelper = function(a) {
    function b(a, b, d) {
        c(a, d);
        c(b, d)
    }
    function c(a, b) {
        d.geometry.vertices.push(new THREE.Vector3);
        d.geometry.colors.push(new THREE.Color(b));
        void 0 === d.pointMap[a] && (d.pointMap[a] = []);
        d.pointMap[a].push(d.geometry.vertices.length - 1)
    }
    THREE.Line.call(this);
    var d = this;
    this.geometry = new THREE.Geometry;
    this.material = new THREE.LineBasicMaterial({color: 16777215,vertexColors: THREE.FaceColors});
    this.type = THREE.LinePieces;
    this.matrixWorld = a.matrixWorld;
    this.matrixAutoUpdate = !1;
    this.pointMap = 
    {};
    b("n1", "n2", 16755200);
    b("n2", "n4", 16755200);
    b("n4", "n3", 16755200);
    b("n3", "n1", 16755200);
    b("f1", "f2", 16755200);
    b("f2", "f4", 16755200);
    b("f4", "f3", 16755200);
    b("f3", "f1", 16755200);
    b("n1", "f1", 16755200);
    b("n2", "f2", 16755200);
    b("n3", "f3", 16755200);
    b("n4", "f4", 16755200);
    b("p", "n1", 16711680);
    b("p", "n2", 16711680);
    b("p", "n3", 16711680);
    b("p", "n4", 16711680);
    b("u1", "u2", 43775);
    b("u2", "u3", 43775);
    b("u3", "u1", 43775);
    b("c", "t", 16777215);
    b("p", "c", 3355443);
    b("cn1", "cn2", 3355443);
    b("cn3", "cn4", 3355443);
    b("cf1", 
    "cf2", 3355443);
    b("cf3", "cf4", 3355443);
    this.camera = a;
    this.update(a)
};
THREE.CameraHelper.prototype = Object.create(THREE.Line.prototype);
THREE.CameraHelper.prototype.update = function() {
    function a(a, d, e, f) {
        THREE.CameraHelper.__v.set(d, e, f);
        THREE.CameraHelper.__projector.unprojectVector(THREE.CameraHelper.__v, THREE.CameraHelper.__c);
        a = b.pointMap[a];
        if (void 0 !== a) {
            d = 0;
            for (e = a.length; d < e; d++)
                b.geometry.vertices[a[d]].copy(THREE.CameraHelper.__v)
        }
    }
    var b = this;
    THREE.CameraHelper.__c.projectionMatrix.copy(this.camera.projectionMatrix);
    a("c", 0, 0, -1);
    a("t", 0, 0, 1);
    a("n1", -1, -1, -1);
    a("n2", 1, -1, -1);
    a("n3", -1, 1, -1);
    a("n4", 1, 1, -1);
    a("f1", -1, -1, 1);
    a("f2", 1, -1, 1);
    a("f3", -1, 1, 1);
    a("f4", 1, 1, 1);
    a("u1", 0.7, 1.1, -1);
    a("u2", -0.7, 1.1, -1);
    a("u3", 0, 2, -1);
    a("cf1", -1, 0, 1);
    a("cf2", 1, 0, 1);
    a("cf3", 0, -1, 1);
    a("cf4", 0, 1, 1);
    a("cn1", -1, 0, -1);
    a("cn2", 1, 0, -1);
    a("cn3", 0, -1, -1);
    a("cn4", 0, 1, -1);
    this.geometry.verticesNeedUpdate = !0
};
THREE.CameraHelper.__projector = new THREE.Projector;
THREE.CameraHelper.__v = new THREE.Vector3;
THREE.CameraHelper.__c = new THREE.Camera;
THREE.SubdivisionModifier = function(a) {
    this.subdivisions = void 0 === a ? 1 : a;
    this.useOldVertexColors = !1;
    this.supportUVs = !0;
    this.debug = !1
};
THREE.SubdivisionModifier.prototype.modify = function(a) {
    for (var b = this.subdivisions; 0 < b--; )
        this.smooth(a)
};
THREE.SubdivisionModifier.prototype.smooth = function(a) {
    function b() {
        l.debug && console.log.apply(console, arguments)
    }
    function c() {
        console && console.log.apply(console, arguments)
    }
    function d(a, c, d, e, g, h, m) {
        var n = new THREE.Face4(a, c, d, e, null, g.color, g.materialIndex);
        if (l.useOldVertexColors) {
            n.vertexColors = [];
            for (var o, p, q, r = 0; 4 > r; r++) {
                q = h[r];
                o = new THREE.Color;
                o.setRGB(0, 0, 0);
                for (var s = 0; s < q.length; s++)
                    p = g.vertexColors[q[s] - 1], o.r += p.r, o.g += p.g, o.b += p.b;
                o.r /= q.length;
                o.g /= q.length;
                o.b /= q.length;
                n.vertexColors[r] = 
                o
            }
        }
        i.push(n);
        l.supportUVs && (g = [f(a, ""), f(c, m), f(d, m), f(e, m)], g[0] ? g[1] ? g[2] ? g[3] ? j.push(g) : b("d :( ", e + ":" + m) : b("c :( ", d + ":" + m) : b("b :( ", c + ":" + m) : b("a :( ", a + ":" + m))
    }
    function e(a, b) {
        return Math.min(a, b) + "_" + Math.max(a, b)
    }
    function f(a, d) {
        var e = a + ":" + d, f = r[e];
        return !f ? (a >= t && a < t + m.length ? b("face pt") : b("edge pt"), c("warning, UV not found for", e), null) : f
    }
    function g(a, b, d) {
        var e = a + ":" + b;
        e in r ? c("dup vertexNo", a, "oldFaceNo", b, "value", d, "key", e, r[e]) : r[e] = d
    }
    var h = [], i = [], j = [], l = this, n = a.vertices, m = a.faces, 
    h = n.concat(), q = [], p = {}, o = {}, r = {}, t = n.length, u, w, s, B, v, A = a.faceVertexUvs[0];
    b("originalFaces, uvs, originalVerticesLength", m.length, A.length, t);
    if (l.supportUVs) {
        u = 0;
        for (w = A.length; u < w; u++) {
            s = 0;
            for (B = A[u].length; s < B; s++)
                v = m[u]["abcd".charAt(s)], g(v, u, A[u][s])
        }
    }
    0 == A.length && (l.supportUVs = !1);
    u = 0;
    for (var E in r)
        u++;
    u || (l.supportUVs = !1, b("no uvs"));
    b("-- Original Faces + Vertices UVs completed", r, "vs", A.length);
    var x;
    u = 0;
    for (w = m.length; u < w; u++)
        v = m[u], q.push(v.centroid), h.push(v.centroid), l.supportUVs && 
        (x = new THREE.UV, v instanceof THREE.Face3 ? (x.u = f(v.a, u).u + f(v.b, u).u + f(v.c, u).u, x.v = f(v.a, u).v + f(v.b, u).v + f(v.c, u).v, x.u /= 3, x.v /= 3) : v instanceof THREE.Face4 && (x.u = f(v.a, u).u + f(v.b, u).u + f(v.c, u).u + f(v.d, u).u, x.v = f(v.a, u).v + f(v.b, u).v + f(v.c, u).v + f(v.d, u).v, x.u /= 4, x.v /= 4), g(t + u, "", x));
    b("-- added UVs for new Faces", r);
    E = function(a, b) {
        L[a] === void 0 && (L[a] = []);
        L[a].push(b)
    };
    var L = {}, A = 0;
    for (w = a.faces.length; A < w; A++)
        v = a.faces[A], v instanceof THREE.Face3 ? (x = e(v.a, v.b), E(x, A), x = e(v.b, v.c), E(x, A), x = e(v.c, v.a), 
        E(x, A)) : v instanceof THREE.Face4 && (x = e(v.a, v.b), E(x, A), x = e(v.b, v.c), E(x, A), x = e(v.c, v.d), E(x, A), x = e(v.d, v.a), E(x, A));
    w = L;
    var D = 0, G, C;
    E = {};
    A = {};
    for (u in w) {
        x = w[u];
        G = u.split("_");
        C = G[0];
        G = G[1];
        s = C;
        v = [C, G];
        void 0 === E[s] && (E[s] = []);
        E[s].push(v);
        s = G;
        v = [C, G];
        void 0 === E[s] && (E[s] = []);
        E[s].push(v);
        s = 0;
        for (B = x.length; s < B; s++) {
            v = x[s];
            var N = C, J = v, M = u;
            void 0 === A[N] && (A[N] = {});
            A[N][J] = M;
            N = G;
            J = u;
            void 0 === A[N] && (A[N] = {});
            A[N][v] = J
        }
        2 > x.length && (o[u] = !0)
    }
    b("vertexEdgeMap", E, "vertexFaceMap", A);
    for (u in w)
        if (x = w[u], 
        v = x[0], B = x[1], G = u.split("_"), C = G[0], G = G[1], x = new THREE.Vector3, o[u] ? (x.addSelf(n[C]), x.addSelf(n[G]), x.multiplyScalar(0.5)) : (x.addSelf(q[v]), x.addSelf(q[B]), x.addSelf(n[C]), x.addSelf(n[G]), x.multiplyScalar(0.25)), p[u] = t + m.length + D, h.push(x), D++, l.supportUVs)
            x = new THREE.UV, x.u = f(C, v).u + f(G, v).u, x.v = f(C, v).v + f(G, v).v, x.u /= 2, x.v /= 2, g(p[u], v, x), o[u] || (x = new THREE.UV, x.u = f(C, B).u + f(G, B).u, x.v = f(C, B).v + f(G, B).v, x.u /= 2, x.v /= 2, g(p[u], B, x));
    b("-- Step 2 done");
    var K, H;
    G = ["123", "12", "2", "23"];
    B = ["123", "23", 
        "3", "31"];
    var N = ["123", "31", "1", "12"], J = ["1234", "12", "2", "23"], M = ["1234", "23", "3", "34"], S = ["1234", "34", "4", "41"], X = ["1234", "41", "1", "12"];
    u = 0;
    for (w = q.length; u < w; u++)
        v = m[u], x = t + u, v instanceof THREE.Face3 ? (D = e(v.a, v.b), C = e(v.b, v.c), K = e(v.c, v.a), d(x, p[D], v.b, p[C], v, G, u), d(x, p[C], v.c, p[K], v, B, u), d(x, p[K], v.a, p[D], v, N, u)) : v instanceof THREE.Face4 ? (D = e(v.a, v.b), C = e(v.b, v.c), K = e(v.c, v.d), H = e(v.d, v.a), d(x, p[D], v.b, p[C], v, J, u), d(x, p[C], v.c, p[K], v, M, u), d(x, p[K], v.d, p[H], v, S, u), d(x, p[H], v.a, p[D], v, X, u)) : b("face should be a face!", 
        v);
    p = new THREE.Vector3;
    v = new THREE.Vector3;
    u = 0;
    for (w = n.length; u < w; u++)
        if (void 0 !== E[u]) {
            p.set(0, 0, 0);
            v.set(0, 0, 0);
            C = new THREE.Vector3(0, 0, 0);
            x = 0;
            for (s in A[u])
                p.addSelf(q[s]), x++;
            G = 0;
            D = E[u].length;
            for (s = 0; s < D; s++)
                o[e(E[u][s][0], E[u][s][1])] && G++;
            if (2 != G) {
                p.divideScalar(x);
                for (s = 0; s < D; s++)
                    x = E[u][s], x = n[x[0]].clone().addSelf(n[x[1]]).divideScalar(2), v.addSelf(x);
                v.divideScalar(D);
                C.addSelf(n[u]);
                C.multiplyScalar(D - 3);
                C.addSelf(p);
                C.addSelf(v.multiplyScalar(2));
                C.divideScalar(D);
                h[u] = C
            }
        }
    a.vertices = h;
    a.faces = i;
    a.faceVertexUvs[0] = j;
    delete a.__tmpVertices;
    a.computeCentroids();
    a.computeFaceNormals();
    a.computeVertexNormals()
};
THREE.ImmediateRenderObject = function() {
    THREE.Object3D.call(this);
    this.render = function() {
    }
};
THREE.ImmediateRenderObject.prototype = Object.create(THREE.Object3D.prototype);
THREE.LensFlare = function(a, b, c, d, e) {
    THREE.Object3D.call(this);
    this.lensFlares = [];
    this.positionScreen = new THREE.Vector3;
    this.customUpdateCallback = void 0;
    void 0 !== a && this.add(a, b, c, d, e)
};
THREE.LensFlare.prototype = Object.create(THREE.Object3D.prototype);
THREE.LensFlare.prototype.add = function(a, b, c, d, e, f) {
    void 0 === b && (b = -1);
    void 0 === c && (c = 0);
    void 0 === f && (f = 1);
    void 0 === e && (e = new THREE.Color(16777215));
    void 0 === d && (d = THREE.NormalBlending);
    c = Math.min(c, Math.max(0, c));
    this.lensFlares.push({texture: a,size: b,distance: c,x: 0,y: 0,z: 0,scale: 1,rotation: 1,opacity: f,color: e,blending: d})
};
THREE.LensFlare.prototype.updateLensFlares = function() {
    var a, b = this.lensFlares.length, c, d = 2 * -this.positionScreen.x, e = 2 * -this.positionScreen.y;
    for (a = 0; a < b; a++)
        c = this.lensFlares[a], c.x = this.positionScreen.x + d * c.distance, c.y = this.positionScreen.y + e * c.distance, c.wantedRotation = 0.25 * c.x * Math.PI, c.rotation += 0.25 * (c.wantedRotation - c.rotation)
};
THREE.MorphBlendMesh = function(a, b) {
    THREE.Mesh.call(this, a, b);
    this.animationsMap = {};
    this.animationsList = [];
    var c = this.geometry.morphTargets.length;
    this.createAnimation("__default", 0, c - 1, c / 1);
    this.setAnimationWeight("__default", 1)
};
THREE.MorphBlendMesh.prototype = Object.create(THREE.Mesh.prototype);
THREE.MorphBlendMesh.prototype.createAnimation = function(a, b, c, d) {
    b = {startFrame: b,endFrame: c,length: c - b + 1,fps: d,duration: (c - b) / d,lastFrame: 0,currentFrame: 0,active: !1,time: 0,direction: 1,weight: 1,directionBackwards: !1,mirroredLoop: !1};
    this.animationsMap[a] = b;
    this.animationsList.push(b)
};
THREE.MorphBlendMesh.prototype.autoCreateAnimations = function(a) {
    for (var b = /([a-z]+)(\d+)/, c, d = {}, e = this.geometry, f = 0, g = e.morphTargets.length; f < g; f++) {
        var h = e.morphTargets[f].name.match(b);
        if (h && 1 < h.length) {
            var i = h[1];
            d[i] || (d[i] = {start: Infinity,end: -Infinity});
            h = d[i];
            f < h.start && (h.start = f);
            f > h.end && (h.end = f);
            c || (c = i)
        }
    }
    for (i in d)
        h = d[i], this.createAnimation(i, h.start, h.end, a);
    this.firstAnimation = c
};
THREE.MorphBlendMesh.prototype.setAnimationDirectionForward = function(a) {
    if (a = this.animationsMap[a])
        a.direction = 1, a.directionBackwards = !1
};
THREE.MorphBlendMesh.prototype.setAnimationDirectionBackward = function(a) {
    if (a = this.animationsMap[a])
        a.direction = -1, a.directionBackwards = !0
};
THREE.MorphBlendMesh.prototype.setAnimationFPS = function(a, b) {
    var c = this.animationsMap[a];
    c && (c.fps = b, c.duration = (c.end - c.start) / c.fps)
};
THREE.MorphBlendMesh.prototype.setAnimationDuration = function(a, b) {
    var c = this.animationsMap[a];
    c && (c.duration = b, c.fps = (c.end - c.start) / c.duration)
};
THREE.MorphBlendMesh.prototype.setAnimationWeight = function(a, b) {
    var c = this.animationsMap[a];
    c && (c.weight = b)
};
THREE.MorphBlendMesh.prototype.setAnimationTime = function(a, b) {
    var c = this.animationsMap[a];
    c && (c.time = b)
};
THREE.MorphBlendMesh.prototype.getAnimationTime = function(a) {
    var b = 0;
    if (a = this.animationsMap[a])
        b = a.time;
    return b
};
THREE.MorphBlendMesh.prototype.getAnimationDuration = function(a) {
    var b = -1;
    if (a = this.animationsMap[a])
        b = a.duration;
    return b
};
THREE.MorphBlendMesh.prototype.playAnimation = function(a) {
    var b = this.animationsMap[a];
    b ? (b.time = 0, b.active = !0) : console.warn("animation[" + a + "] undefined")
};
THREE.MorphBlendMesh.prototype.stopAnimation = function(a) {
    if (a = this.animationsMap[a])
        a.active = !1
};
THREE.MorphBlendMesh.prototype.update = function(a) {
    for (var b = 0, c = this.animationsList.length; b < c; b++) {
        var d = this.animationsList[b];
        if (d.active) {
            var e = d.duration / d.length;
            d.time += d.direction * a;
            if (d.mirroredLoop) {
                if (d.time > d.duration || 0 > d.time)
                    if (d.direction *= -1, d.time > d.duration && (d.time = d.duration, d.directionBackwards = !0), 0 > d.time)
                        d.time = 0, d.directionBackwards = !1
            } else
                d.time %= d.duration, 0 > d.time && (d.time += d.duration);
            var f = d.startFrame + THREE.Math.clamp(Math.floor(d.time / e), 0, d.length - 1), g = d.weight;
            f !== d.currentFrame && (this.morphTargetInfluences[d.lastFrame] = 0, this.morphTargetInfluences[d.currentFrame] = 1 * g, this.morphTargetInfluences[f] = 0, d.lastFrame = d.currentFrame, d.currentFrame = f);
            e = d.time % e / e;
            d.directionBackwards && (e = 1 - e);
            this.morphTargetInfluences[d.currentFrame] = e * g;
            this.morphTargetInfluences[d.lastFrame] = (1 - e) * g
        }
    }
};
THREE.LensFlarePlugin = function() {
    function a(a) {
        var c = b.createProgram(), d = b.createShader(b.FRAGMENT_SHADER), e = b.createShader(b.VERTEX_SHADER);
        b.shaderSource(d, a.fragmentShader);
        b.shaderSource(e, a.vertexShader);
        b.compileShader(d);
        b.compileShader(e);
        b.attachShader(c, d);
        b.attachShader(c, e);
        b.linkProgram(c);
        return c
    }
    var b, c, d, e, f, g, h, i, j, l, n, m, q;
    this.init = function(p) {
        b = p.context;
        c = p;
        d = new Float32Array(16);
        e = new Uint16Array(6);
        p = 0;
        d[p++] = -1;
        d[p++] = -1;
        d[p++] = 0;
        d[p++] = 0;
        d[p++] = 1;
        d[p++] = -1;
        d[p++] = 1;
        d[p++] = 
        0;
        d[p++] = 1;
        d[p++] = 1;
        d[p++] = 1;
        d[p++] = 1;
        d[p++] = -1;
        d[p++] = 1;
        d[p++] = 0;
        d[p++] = 1;
        p = 0;
        e[p++] = 0;
        e[p++] = 1;
        e[p++] = 2;
        e[p++] = 0;
        e[p++] = 2;
        e[p++] = 3;
        f = b.createBuffer();
        g = b.createBuffer();
        b.bindBuffer(b.ARRAY_BUFFER, f);
        b.bufferData(b.ARRAY_BUFFER, d, b.STATIC_DRAW);
        b.bindBuffer(b.ELEMENT_ARRAY_BUFFER, g);
        b.bufferData(b.ELEMENT_ARRAY_BUFFER, e, b.STATIC_DRAW);
        h = b.createTexture();
        i = b.createTexture();
        b.bindTexture(b.TEXTURE_2D, h);
        b.texImage2D(b.TEXTURE_2D, 0, b.RGB, 16, 16, 0, b.RGB, b.UNSIGNED_BYTE, null);
        b.texParameteri(b.TEXTURE_2D, 
        b.TEXTURE_WRAP_S, b.CLAMP_TO_EDGE);
        b.texParameteri(b.TEXTURE_2D, b.TEXTURE_WRAP_T, b.CLAMP_TO_EDGE);
        b.texParameteri(b.TEXTURE_2D, b.TEXTURE_MAG_FILTER, b.NEAREST);
        b.texParameteri(b.TEXTURE_2D, b.TEXTURE_MIN_FILTER, b.NEAREST);
        b.bindTexture(b.TEXTURE_2D, i);
        b.texImage2D(b.TEXTURE_2D, 0, b.RGBA, 16, 16, 0, b.RGBA, b.UNSIGNED_BYTE, null);
        b.texParameteri(b.TEXTURE_2D, b.TEXTURE_WRAP_S, b.CLAMP_TO_EDGE);
        b.texParameteri(b.TEXTURE_2D, b.TEXTURE_WRAP_T, b.CLAMP_TO_EDGE);
        b.texParameteri(b.TEXTURE_2D, b.TEXTURE_MAG_FILTER, b.NEAREST);
        b.texParameteri(b.TEXTURE_2D, b.TEXTURE_MIN_FILTER, b.NEAREST);
        0 >= b.getParameter(b.MAX_VERTEX_TEXTURE_IMAGE_UNITS) ? (j = !1, l = a(THREE.ShaderFlares.lensFlare)) : (j = !0, l = a(THREE.ShaderFlares.lensFlareVertexTexture));
        n = {};
        m = {};
        n.vertex = b.getAttribLocation(l, "position");
        n.uv = b.getAttribLocation(l, "uv");
        m.renderType = b.getUniformLocation(l, "renderType");
        m.map = b.getUniformLocation(l, "map");
        m.occlusionMap = b.getUniformLocation(l, "occlusionMap");
        m.opacity = b.getUniformLocation(l, "opacity");
        m.color = b.getUniformLocation(l, 
        "color");
        m.scale = b.getUniformLocation(l, "scale");
        m.rotation = b.getUniformLocation(l, "rotation");
        m.screenPosition = b.getUniformLocation(l, "screenPosition");
        q = !1
    };
    this.render = function(a, d, e, t) {
        var a = a.__webglFlares, u = a.length;
        if (u) {
            var w = new THREE.Vector3, s = t / e, B = 0.5 * e, v = 0.5 * t, A = 16 / t, E = new THREE.Vector2(A * s, A), x = new THREE.Vector3(1, 1, 0), L = new THREE.Vector2(1, 1), D = m, A = n;
            b.useProgram(l);
            q || (b.enableVertexAttribArray(n.vertex), b.enableVertexAttribArray(n.uv), q = !0);
            b.uniform1i(D.occlusionMap, 0);
            b.uniform1i(D.map, 
            1);
            b.bindBuffer(b.ARRAY_BUFFER, f);
            b.vertexAttribPointer(A.vertex, 2, b.FLOAT, !1, 16, 0);
            b.vertexAttribPointer(A.uv, 2, b.FLOAT, !1, 16, 8);
            b.bindBuffer(b.ELEMENT_ARRAY_BUFFER, g);
            b.disable(b.CULL_FACE);
            b.depthMask(!1);
            var G, C, N, J, M;
            for (G = 0; G < u; G++)
                if (A = 16 / t, E.set(A * s, A), J = a[G], w.set(J.matrixWorld.elements[12], J.matrixWorld.elements[13], J.matrixWorld.elements[14]), d.matrixWorldInverse.multiplyVector3(w), d.projectionMatrix.multiplyVector3(w), x.copy(w), L.x = x.x * B + B, L.y = x.y * v + v, j || 0 < L.x && L.x < e && 0 < L.y && L.y < t) {
                    b.activeTexture(b.TEXTURE1);
                    b.bindTexture(b.TEXTURE_2D, h);
                    b.copyTexImage2D(b.TEXTURE_2D, 0, b.RGB, L.x - 8, L.y - 8, 16, 16, 0);
                    b.uniform1i(D.renderType, 0);
                    b.uniform2f(D.scale, E.x, E.y);
                    b.uniform3f(D.screenPosition, x.x, x.y, x.z);
                    b.disable(b.BLEND);
                    b.enable(b.DEPTH_TEST);
                    b.drawElements(b.TRIANGLES, 6, b.UNSIGNED_SHORT, 0);
                    b.activeTexture(b.TEXTURE0);
                    b.bindTexture(b.TEXTURE_2D, i);
                    b.copyTexImage2D(b.TEXTURE_2D, 0, b.RGBA, L.x - 8, L.y - 8, 16, 16, 0);
                    b.uniform1i(D.renderType, 1);
                    b.disable(b.DEPTH_TEST);
                    b.activeTexture(b.TEXTURE1);
                    b.bindTexture(b.TEXTURE_2D, 
                    h);
                    b.drawElements(b.TRIANGLES, 6, b.UNSIGNED_SHORT, 0);
                    J.positionScreen.copy(x);
                    J.customUpdateCallback ? J.customUpdateCallback(J) : J.updateLensFlares();
                    b.uniform1i(D.renderType, 2);
                    b.enable(b.BLEND);
                    C = 0;
                    for (N = J.lensFlares.length; C < N; C++)
                        M = J.lensFlares[C], 0.0010 < M.opacity && 0.0010 < M.scale && (x.x = M.x, x.y = M.y, x.z = M.z, A = M.size * M.scale / t, E.x = A * s, E.y = A, b.uniform3f(D.screenPosition, x.x, x.y, x.z), b.uniform2f(D.scale, E.x, E.y), b.uniform1f(D.rotation, M.rotation), b.uniform1f(D.opacity, M.opacity), b.uniform3f(D.color, M.color.r, 
                        M.color.g, M.color.b), c.setBlending(M.blending, M.blendEquation, M.blendSrc, M.blendDst), c.setTexture(M.texture, 1), b.drawElements(b.TRIANGLES, 6, b.UNSIGNED_SHORT, 0))
                }
            b.enable(b.CULL_FACE);
            b.enable(b.DEPTH_TEST);
            b.depthMask(!0)
        }
    }
};
THREE.ShadowMapPlugin = function() {
    var a, b, c, d, e, f, g = new THREE.Frustum, h = new THREE.Matrix4, i = new THREE.Vector3, j = new THREE.Vector3;
    this.init = function(g) {
        a = g.context;
        b = g;
        var g = THREE.ShaderLib.depthRGBA, h = THREE.UniformsUtils.clone(g.uniforms);
        c = new THREE.ShaderMaterial({fragmentShader: g.fragmentShader,vertexShader: g.vertexShader,uniforms: h});
        d = new THREE.ShaderMaterial({fragmentShader: g.fragmentShader,vertexShader: g.vertexShader,uniforms: h,morphTargets: !0});
        e = new THREE.ShaderMaterial({fragmentShader: g.fragmentShader,
            vertexShader: g.vertexShader,uniforms: h,skinning: !0});
        f = new THREE.ShaderMaterial({fragmentShader: g.fragmentShader,vertexShader: g.vertexShader,uniforms: h,morphTargets: !0,skinning: !0});
        c._shadowPass = !0;
        d._shadowPass = !0;
        e._shadowPass = !0;
        f._shadowPass = !0
    };
    this.render = function(a, c) {
        b.shadowMapEnabled && b.shadowMapAutoUpdate && this.update(a, c)
    };
    this.update = function(l, n) {
        var m, q, p, o, r, t, u, w, s, B = [];
        o = 0;
        a.clearColor(1, 1, 1, 1);
        a.disable(a.BLEND);
        a.enable(a.CULL_FACE);
        a.frontFace(a.CCW);
        b.shadowMapCullFrontFaces ? 
        a.cullFace(a.FRONT) : a.cullFace(a.BACK);
        b.setDepthTest(!0);
        m = 0;
        for (q = l.__lights.length; m < q; m++)
            if (p = l.__lights[m], p.castShadow)
                if (p instanceof THREE.DirectionalLight && p.shadowCascade)
                    for (r = 0; r < p.shadowCascadeCount; r++) {
                        var v;
                        if (p.shadowCascadeArray[r])
                            v = p.shadowCascadeArray[r];
                        else {
                            s = p;
                            u = r;
                            v = new THREE.DirectionalLight;
                            v.isVirtual = !0;
                            v.onlyShadow = !0;
                            v.castShadow = !0;
                            v.shadowCameraNear = s.shadowCameraNear;
                            v.shadowCameraFar = s.shadowCameraFar;
                            v.shadowCameraLeft = s.shadowCameraLeft;
                            v.shadowCameraRight = s.shadowCameraRight;
                            v.shadowCameraBottom = s.shadowCameraBottom;
                            v.shadowCameraTop = s.shadowCameraTop;
                            v.shadowCameraVisible = s.shadowCameraVisible;
                            v.shadowDarkness = s.shadowDarkness;
                            v.shadowBias = s.shadowCascadeBias[u];
                            v.shadowMapWidth = s.shadowCascadeWidth[u];
                            v.shadowMapHeight = s.shadowCascadeHeight[u];
                            v.pointsWorld = [];
                            v.pointsFrustum = [];
                            w = v.pointsWorld;
                            t = v.pointsFrustum;
                            for (var A = 0; 8 > A; A++)
                                w[A] = new THREE.Vector3, t[A] = new THREE.Vector3;
                            w = s.shadowCascadeNearZ[u];
                            s = s.shadowCascadeFarZ[u];
                            t[0].set(-1, -1, w);
                            t[1].set(1, -1, w);
                            t[2].set(-1, 
                            1, w);
                            t[3].set(1, 1, w);
                            t[4].set(-1, -1, s);
                            t[5].set(1, -1, s);
                            t[6].set(-1, 1, s);
                            t[7].set(1, 1, s);
                            v.originalCamera = n;
                            t = new THREE.Gyroscope;
                            t.position = p.shadowCascadeOffset;
                            t.add(v);
                            t.add(v.target);
                            n.add(t);
                            p.shadowCascadeArray[r] = v;
                            console.log("Created virtualLight", v)
                        }
                        u = p;
                        w = r;
                        s = u.shadowCascadeArray[w];
                        s.position.copy(u.position);
                        s.target.position.copy(u.target.position);
                        s.lookAt(s.target);
                        s.shadowCameraVisible = u.shadowCameraVisible;
                        s.shadowDarkness = u.shadowDarkness;
                        s.shadowBias = u.shadowCascadeBias[w];
                        t = u.shadowCascadeNearZ[w];
                        u = u.shadowCascadeFarZ[w];
                        s = s.pointsFrustum;
                        s[0].z = t;
                        s[1].z = t;
                        s[2].z = t;
                        s[3].z = t;
                        s[4].z = u;
                        s[5].z = u;
                        s[6].z = u;
                        s[7].z = u;
                        B[o] = v;
                        o++
                    }
                else
                    B[o] = p, o++;
        m = 0;
        for (q = B.length; m < q; m++) {
            p = B[m];
            p.shadowMap || (p.shadowMap = new THREE.WebGLRenderTarget(p.shadowMapWidth, p.shadowMapHeight, {minFilter: THREE.LinearFilter,magFilter: THREE.LinearFilter,format: THREE.RGBAFormat}), p.shadowMapSize = new THREE.Vector2(p.shadowMapWidth, p.shadowMapHeight), p.shadowMatrix = new THREE.Matrix4);
            if (!p.shadowCamera) {
                if (p instanceof THREE.SpotLight)
                    p.shadowCamera = 
                    new THREE.PerspectiveCamera(p.shadowCameraFov, p.shadowMapWidth / p.shadowMapHeight, p.shadowCameraNear, p.shadowCameraFar);
                else if (p instanceof THREE.DirectionalLight)
                    p.shadowCamera = new THREE.OrthographicCamera(p.shadowCameraLeft, p.shadowCameraRight, p.shadowCameraTop, p.shadowCameraBottom, p.shadowCameraNear, p.shadowCameraFar);
                else {
                    console.error("Unsupported light type for shadow");
                    continue
                }
                l.add(p.shadowCamera);
                b.autoUpdateScene && l.updateMatrixWorld()
            }
            p.shadowCameraVisible && !p.cameraHelper && (p.cameraHelper = 
            new THREE.CameraHelper(p.shadowCamera), p.shadowCamera.add(p.cameraHelper));
            if (p.isVirtual && v.originalCamera == n) {
                r = n;
                o = p.shadowCamera;
                t = p.pointsFrustum;
                s = p.pointsWorld;
                i.set(Infinity, Infinity, Infinity);
                j.set(-Infinity, -Infinity, -Infinity);
                for (u = 0; 8 > u; u++)
                    if (w = s[u], w.copy(t[u]), THREE.ShadowMapPlugin.__projector.unprojectVector(w, r), o.matrixWorldInverse.multiplyVector3(w), w.x < i.x && (i.x = w.x), w.x > j.x && (j.x = w.x), w.y < i.y && (i.y = w.y), w.y > j.y && (j.y = w.y), w.z < i.z && (i.z = w.z), w.z > j.z)
                        j.z = w.z;
                o.left = i.x;
                o.right = 
                j.x;
                o.top = j.y;
                o.bottom = i.y;
                o.updateProjectionMatrix()
            }
            o = p.shadowMap;
            t = p.shadowMatrix;
            r = p.shadowCamera;
            r.position.copy(p.matrixWorld.getPosition());
            r.lookAt(p.target.matrixWorld.getPosition());
            r.updateMatrixWorld();
            r.matrixWorldInverse.getInverse(r.matrixWorld);
            p.cameraHelper && (p.cameraHelper.visible = p.shadowCameraVisible);
            p.shadowCameraVisible && p.cameraHelper.update();
            t.set(0.5, 0, 0, 0.5, 0, 0.5, 0, 0.5, 0, 0, 0.5, 0.5, 0, 0, 0, 1);
            t.multiplySelf(r.projectionMatrix);
            t.multiplySelf(r.matrixWorldInverse);
            r._viewMatrixArray || 
            (r._viewMatrixArray = new Float32Array(16));
            r._projectionMatrixArray || (r._projectionMatrixArray = new Float32Array(16));
            r.matrixWorldInverse.flattenToArray(r._viewMatrixArray);
            r.projectionMatrix.flattenToArray(r._projectionMatrixArray);
            h.multiply(r.projectionMatrix, r.matrixWorldInverse);
            g.setFromMatrix(h);
            b.setRenderTarget(o);
            b.clear();
            s = l.__webglObjects;
            p = 0;
            for (o = s.length; p < o; p++)
                if (u = s[p], t = u.object, u.render = !1, t.visible && t.castShadow && (!(t instanceof THREE.Mesh) || !t.frustumCulled || g.contains(t)))
                    t._modelViewMatrix.multiply(r.matrixWorldInverse, 
                    t.matrixWorld), u.render = !0;
            p = 0;
            for (o = s.length; p < o; p++)
                u = s[p], u.render && (t = u.object, u = u.buffer, w = t.customDepthMaterial ? t.customDepthMaterial : t instanceof THREE.SkinnedMesh ? t.geometry.morphTargets.length ? f : e : t.geometry.morphTargets.length ? d : c, u instanceof THREE.BufferGeometry ? b.renderBufferDirect(r, l.__lights, null, w, u, t) : b.renderBuffer(r, l.__lights, null, w, u, t));
            s = l.__webglObjectsImmediate;
            p = 0;
            for (o = s.length; p < o; p++)
                u = s[p], t = u.object, t.visible && t.castShadow && (t._modelViewMatrix.multiply(r.matrixWorldInverse, 
                t.matrixWorld), b.renderImmediateObject(r, l.__lights, null, c, t))
        }
        m = b.getClearColor();
        q = b.getClearAlpha();
        a.clearColor(m.r, m.g, m.b, q);
        a.enable(a.BLEND);
        b.shadowMapCullFrontFaces && a.cullFace(a.BACK)
    }
};
THREE.ShadowMapPlugin.__projector = new THREE.Projector;
THREE.SpritePlugin = function() {
    function a(a, b) {
        return b.z - a.z
    }
    var b, c, d, e, f, g, h, i, j, l;
    this.init = function(a) {
        b = a.context;
        c = a;
        d = new Float32Array(16);
        e = new Uint16Array(6);
        a = 0;
        d[a++] = -1;
        d[a++] = -1;
        d[a++] = 0;
        d[a++] = 0;
        d[a++] = 1;
        d[a++] = -1;
        d[a++] = 1;
        d[a++] = 0;
        d[a++] = 1;
        d[a++] = 1;
        d[a++] = 1;
        d[a++] = 1;
        d[a++] = -1;
        d[a++] = 1;
        d[a++] = 0;
        d[a++] = 1;
        a = 0;
        e[a++] = 0;
        e[a++] = 1;
        e[a++] = 2;
        e[a++] = 0;
        e[a++] = 2;
        e[a++] = 3;
        f = b.createBuffer();
        g = b.createBuffer();
        b.bindBuffer(b.ARRAY_BUFFER, f);
        b.bufferData(b.ARRAY_BUFFER, d, b.STATIC_DRAW);
        b.bindBuffer(b.ELEMENT_ARRAY_BUFFER, 
        g);
        b.bufferData(b.ELEMENT_ARRAY_BUFFER, e, b.STATIC_DRAW);
        var a = THREE.ShaderSprite.sprite, m = b.createProgram(), q = b.createShader(b.FRAGMENT_SHADER), p = b.createShader(b.VERTEX_SHADER);
        b.shaderSource(q, a.fragmentShader);
        b.shaderSource(p, a.vertexShader);
        b.compileShader(q);
        b.compileShader(p);
        b.attachShader(m, q);
        b.attachShader(m, p);
        b.linkProgram(m);
        h = m;
        i = {};
        j = {};
        i.position = b.getAttribLocation(h, "position");
        i.uv = b.getAttribLocation(h, "uv");
        j.uvOffset = b.getUniformLocation(h, "uvOffset");
        j.uvScale = b.getUniformLocation(h, 
        "uvScale");
        j.rotation = b.getUniformLocation(h, "rotation");
        j.scale = b.getUniformLocation(h, "scale");
        j.alignment = b.getUniformLocation(h, "alignment");
        j.color = b.getUniformLocation(h, "color");
        j.map = b.getUniformLocation(h, "map");
        j.opacity = b.getUniformLocation(h, "opacity");
        j.useScreenCoordinates = b.getUniformLocation(h, "useScreenCoordinates");
        j.affectedByDistance = b.getUniformLocation(h, "affectedByDistance");
        j.screenPosition = b.getUniformLocation(h, "screenPosition");
        j.modelViewMatrix = b.getUniformLocation(h, "modelViewMatrix");
        j.projectionMatrix = b.getUniformLocation(h, "projectionMatrix");
        l = !1
    };
    this.render = function(d, e, q, p) {
        var d = d.__webglSprites, o = d.length;
        if (o) {
            var r = i, t = j, u = p / q, q = 0.5 * q, w = 0.5 * p, s = !0;
            b.useProgram(h);
            l || (b.enableVertexAttribArray(r.position), b.enableVertexAttribArray(r.uv), l = !0);
            b.disable(b.CULL_FACE);
            b.enable(b.BLEND);
            b.depthMask(!0);
            b.bindBuffer(b.ARRAY_BUFFER, f);
            b.vertexAttribPointer(r.position, 2, b.FLOAT, !1, 16, 0);
            b.vertexAttribPointer(r.uv, 2, b.FLOAT, !1, 16, 8);
            b.bindBuffer(b.ELEMENT_ARRAY_BUFFER, g);
            b.uniformMatrix4fv(t.projectionMatrix, 
            !1, e._projectionMatrixArray);
            b.activeTexture(b.TEXTURE0);
            b.uniform1i(t.map, 0);
            for (var B, v = [], r = 0; r < o; r++)
                B = d[r], B.visible && 0 !== B.opacity && (B.useScreenCoordinates ? B.z = -B.position.z : (B._modelViewMatrix.multiply(e.matrixWorldInverse, B.matrixWorld), B.z = -B._modelViewMatrix.elements[14]));
            d.sort(a);
            for (r = 0; r < o; r++)
                if (B = d[r], B.visible && 0 !== B.opacity && B.map && B.map.image && B.map.image.width)
                    B.useScreenCoordinates ? (b.uniform1i(t.useScreenCoordinates, 1), b.uniform3f(t.screenPosition, (B.position.x - q) / q, (w - B.position.y) / 
                    w, Math.max(0, Math.min(1, B.position.z)))) : (b.uniform1i(t.useScreenCoordinates, 0), b.uniform1i(t.affectedByDistance, B.affectedByDistance ? 1 : 0), b.uniformMatrix4fv(t.modelViewMatrix, !1, B._modelViewMatrix.elements)), e = B.map.image.width / (B.scaleByViewport ? p : 1), v[0] = e * u * B.scale.x, v[1] = e * B.scale.y, b.uniform2f(t.uvScale, B.uvScale.x, B.uvScale.y), b.uniform2f(t.uvOffset, B.uvOffset.x, B.uvOffset.y), b.uniform2f(t.alignment, B.alignment.x, B.alignment.y), b.uniform1f(t.opacity, B.opacity), b.uniform3f(t.color, B.color.r, 
                    B.color.g, B.color.b), b.uniform1f(t.rotation, B.rotation), b.uniform2fv(t.scale, v), B.mergeWith3D && !s ? (b.enable(b.DEPTH_TEST), s = !0) : !B.mergeWith3D && s && (b.disable(b.DEPTH_TEST), s = !1), c.setBlending(B.blending, B.blendEquation, B.blendSrc, B.blendDst), c.setTexture(B.map, 0), b.drawElements(b.TRIANGLES, 6, b.UNSIGNED_SHORT, 0);
            b.enable(b.CULL_FACE);
            b.enable(b.DEPTH_TEST);
            b.depthMask(!0)
        }
    }
};
THREE.DepthPassPlugin = function() {
    this.enabled = !1;
    this.renderTarget = null;
    var a, b, c, d, e = new THREE.Frustum, f = new THREE.Matrix4;
    this.init = function(e) {
        a = e.context;
        b = e;
        var e = THREE.ShaderLib.depthRGBA, f = THREE.UniformsUtils.clone(e.uniforms);
        c = new THREE.ShaderMaterial({fragmentShader: e.fragmentShader,vertexShader: e.vertexShader,uniforms: f});
        d = new THREE.ShaderMaterial({fragmentShader: e.fragmentShader,vertexShader: e.vertexShader,uniforms: f,morphTargets: !0});
        c._shadowPass = !0;
        d._shadowPass = !0
    };
    this.render = function(a, 
    b) {
        this.enabled && this.update(a, b)
    };
    this.update = function(g, h) {
        var i, j, l, n, m, q;
        a.clearColor(1, 1, 1, 1);
        a.disable(a.BLEND);
        b.setDepthTest(!0);
        b.autoUpdateScene && g.updateMatrixWorld();
        h._viewMatrixArray || (h._viewMatrixArray = new Float32Array(16));
        h._projectionMatrixArray || (h._projectionMatrixArray = new Float32Array(16));
        h.matrixWorldInverse.getInverse(h.matrixWorld);
        h.matrixWorldInverse.flattenToArray(h._viewMatrixArray);
        h.projectionMatrix.flattenToArray(h._projectionMatrixArray);
        f.multiply(h.projectionMatrix, 
        h.matrixWorldInverse);
        e.setFromMatrix(f);
        b.setRenderTarget(this.renderTarget);
        b.clear();
        q = g.__webglObjects;
        i = 0;
        for (j = q.length; i < j; i++)
            if (l = q[i], m = l.object, l.render = !1, m.visible && (!(m instanceof THREE.Mesh) || !m.frustumCulled || e.contains(m)))
                m._modelViewMatrix.multiply(h.matrixWorldInverse, m.matrixWorld), l.render = !0;
        i = 0;
        for (j = q.length; i < j; i++)
            l = q[i], l.render && (m = l.object, l = l.buffer, m.material && b.setMaterialFaces(m.material), n = m.customDepthMaterial ? m.customDepthMaterial : m.geometry.morphTargets.length ? 
            d : c, l instanceof THREE.BufferGeometry ? b.renderBufferDirect(h, g.__lights, null, n, l, m) : b.renderBuffer(h, g.__lights, null, n, l, m));
        q = g.__webglObjectsImmediate;
        i = 0;
        for (j = q.length; i < j; i++)
            l = q[i], m = l.object, m.visible && m.castShadow && (m._modelViewMatrix.multiply(h.matrixWorldInverse, m.matrixWorld), b.renderImmediateObject(h, g.__lights, null, c, m));
        i = b.getClearColor();
        j = b.getClearAlpha();
        a.clearColor(i.r, i.g, i.b, j);
        a.enable(a.BLEND)
    }
};
THREE.ShaderFlares = {lensFlareVertexTexture: {vertexShader: "uniform vec3 screenPosition;\nuniform vec2 scale;\nuniform float rotation;\nuniform int renderType;\nuniform sampler2D occlusionMap;\nattribute vec2 position;\nattribute vec2 uv;\nvarying vec2 vUV;\nvarying float vVisibility;\nvoid main() {\nvUV = uv;\nvec2 pos = position;\nif( renderType == 2 ) {\nvec4 visibility = texture2D( occlusionMap, vec2( 0.1, 0.1 ) ) +\ntexture2D( occlusionMap, vec2( 0.5, 0.1 ) ) +\ntexture2D( occlusionMap, vec2( 0.9, 0.1 ) ) +\ntexture2D( occlusionMap, vec2( 0.9, 0.5 ) ) +\ntexture2D( occlusionMap, vec2( 0.9, 0.9 ) ) +\ntexture2D( occlusionMap, vec2( 0.5, 0.9 ) ) +\ntexture2D( occlusionMap, vec2( 0.1, 0.9 ) ) +\ntexture2D( occlusionMap, vec2( 0.1, 0.5 ) ) +\ntexture2D( occlusionMap, vec2( 0.5, 0.5 ) );\nvVisibility = (       visibility.r / 9.0 ) *\n( 1.0 - visibility.g / 9.0 ) *\n(       visibility.b / 9.0 ) *\n( 1.0 - visibility.a / 9.0 );\npos.x = cos( rotation ) * position.x - sin( rotation ) * position.y;\npos.y = sin( rotation ) * position.x + cos( rotation ) * position.y;\n}\ngl_Position = vec4( ( pos * scale + screenPosition.xy ).xy, screenPosition.z, 1.0 );\n}",fragmentShader: "precision mediump float;\nuniform sampler2D map;\nuniform float opacity;\nuniform int renderType;\nuniform vec3 color;\nvarying vec2 vUV;\nvarying float vVisibility;\nvoid main() {\nif( renderType == 0 ) {\ngl_FragColor = vec4( 1.0, 0.0, 1.0, 0.0 );\n} else if( renderType == 1 ) {\ngl_FragColor = texture2D( map, vUV );\n} else {\nvec4 texture = texture2D( map, vUV );\ntexture.a *= opacity * vVisibility;\ngl_FragColor = texture;\ngl_FragColor.rgb *= color;\n}\n}"},
    lensFlare: {vertexShader: "uniform vec3 screenPosition;\nuniform vec2 scale;\nuniform float rotation;\nuniform int renderType;\nattribute vec2 position;\nattribute vec2 uv;\nvarying vec2 vUV;\nvoid main() {\nvUV = uv;\nvec2 pos = position;\nif( renderType == 2 ) {\npos.x = cos( rotation ) * position.x - sin( rotation ) * position.y;\npos.y = sin( rotation ) * position.x + cos( rotation ) * position.y;\n}\ngl_Position = vec4( ( pos * scale + screenPosition.xy ).xy, screenPosition.z, 1.0 );\n}",fragmentShader: "precision mediump float;\nuniform sampler2D map;\nuniform sampler2D occlusionMap;\nuniform float opacity;\nuniform int renderType;\nuniform vec3 color;\nvarying vec2 vUV;\nvoid main() {\nif( renderType == 0 ) {\ngl_FragColor = vec4( texture2D( map, vUV ).rgb, 0.0 );\n} else if( renderType == 1 ) {\ngl_FragColor = texture2D( map, vUV );\n} else {\nfloat visibility = texture2D( occlusionMap, vec2( 0.5, 0.1 ) ).a +\ntexture2D( occlusionMap, vec2( 0.9, 0.5 ) ).a +\ntexture2D( occlusionMap, vec2( 0.5, 0.9 ) ).a +\ntexture2D( occlusionMap, vec2( 0.1, 0.5 ) ).a;\nvisibility = ( 1.0 - visibility / 4.0 );\nvec4 texture = texture2D( map, vUV );\ntexture.a *= opacity * visibility;\ngl_FragColor = texture;\ngl_FragColor.rgb *= color;\n}\n}"}};
THREE.ShaderSprite = {sprite: {vertexShader: "uniform int useScreenCoordinates;\nuniform int affectedByDistance;\nuniform vec3 screenPosition;\nuniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\nuniform float rotation;\nuniform vec2 scale;\nuniform vec2 alignment;\nuniform vec2 uvOffset;\nuniform vec2 uvScale;\nattribute vec2 position;\nattribute vec2 uv;\nvarying vec2 vUV;\nvoid main() {\nvUV = uvOffset + uv * uvScale;\nvec2 alignedPosition = position + alignment;\nvec2 rotatedPosition;\nrotatedPosition.x = ( cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y ) * scale.x;\nrotatedPosition.y = ( sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y ) * scale.y;\nvec4 finalPosition;\nif( useScreenCoordinates != 0 ) {\nfinalPosition = vec4( screenPosition.xy + rotatedPosition, screenPosition.z, 1.0 );\n} else {\nfinalPosition = projectionMatrix * modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );\nfinalPosition.xy += rotatedPosition * ( affectedByDistance == 1 ? 1.0 : finalPosition.z );\n}\ngl_Position = finalPosition;\n}",
        fragmentShader: "precision mediump float;\nuniform vec3 color;\nuniform sampler2D map;\nuniform float opacity;\nvarying vec2 vUV;\nvoid main() {\nvec4 texture = texture2D( map, vUV );\ngl_FragColor = vec4( color * texture.xyz, texture.a * opacity );\n}"}};
var THREEx = THREEx || {};
THREEx.WindowResize = function(a, b) {
    var c = function() {
        a.setSize(window.innerWidth, window.innerHeight);
        b.aspect = window.innerWidth / window.innerHeight;
        b.updateProjectionMatrix()
    };
    window.addEventListener("resize", c, !1);
    return {stop: function() {
            window.removeEventListener("resize", c)
        }}
};
THREE.ShaderExtras = {screen: {uniforms: {tDiffuse: {type: "t",value: null},opacity: {type: "f",value: 1}},vertexShader: "varying vec2 vUv;\nvoid main() {\nvUv = uv;\ngl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}",fragmentShader: "uniform float opacity;\nuniform sampler2D tDiffuse;\nvarying vec2 vUv;\nvoid main() {\nvec4 texel = texture2D( tDiffuse, vUv );\ngl_FragColor = opacity * texel;\n}"},convolution: {uniforms: {tDiffuse: {type: "t",value: null},uImageIncrement: {type: "v2",value: new THREE.Vector2(0.001953125, 
                0)},cKernel: {type: "fv1",value: []}},vertexShader: "uniform vec2 uImageIncrement;\nvarying vec2 vUv;\nvoid main() {\nvUv = uv - ( ( KERNEL_SIZE - 1.0 ) / 2.0 ) * uImageIncrement;\ngl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}",fragmentShader: "uniform float cKernel[ KERNEL_SIZE ];\nuniform sampler2D tDiffuse;\nuniform vec2 uImageIncrement;\nvarying vec2 vUv;\nvoid main() {\nvec2 imageCoord = vUv;\nvec4 sum = vec4( 0.0, 0.0, 0.0, 0.0 );\nfor( int i = 0; i < KERNEL_SIZE; i ++ ) {\nsum += texture2D( tDiffuse, imageCoord ) * cKernel[ i ];\nimageCoord += uImageIncrement;\n}\ngl_FragColor = sum;\n}"},
    film: {uniforms: {tDiffuse: {type: "t",value: null},time: {type: "f",value: 0},nIntensity: {type: "f",value: 0.5},sIntensity: {type: "f",value: 0.05},sCount: {type: "f",value: 4096},grayscale: {type: "i",value: 1}},vertexShader: "varying vec2 vUv;\nvoid main() {\nvUv = uv;\ngl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}",fragmentShader: "uniform float time;\nuniform bool grayscale;\nuniform float nIntensity;\nuniform float sIntensity;\nuniform float sCount;\nuniform sampler2D tDiffuse;\nvarying vec2 vUv;\nvoid main() {\nvec4 cTextureScreen = texture2D( tDiffuse, vUv );\nfloat x = vUv.x * vUv.y * time *  1000.0;\nx = mod( x, 13.0 ) * mod( x, 123.0 );\nfloat dx = mod( x, 0.01 );\nvec3 cResult = cTextureScreen.rgb + cTextureScreen.rgb * clamp( 0.1 + dx * 100.0, 0.0, 1.0 );\nvec2 sc = vec2( sin( vUv.y * sCount ), cos( vUv.y * sCount ) );\ncResult += cTextureScreen.rgb * vec3( sc.x, sc.y, sc.x ) * sIntensity;\ncResult = cTextureScreen.rgb + clamp( nIntensity, 0.0,1.0 ) * ( cResult - cTextureScreen.rgb );\nif( grayscale ) {\ncResult = vec3( cResult.r * 0.3 + cResult.g * 0.59 + cResult.b * 0.11 );\n}\ngl_FragColor =  vec4( cResult, cTextureScreen.a );\n}"},
    bokeh: {uniforms: {tColor: {type: "t",value: null},tDepth: {type: "t",value: null},focus: {type: "f",value: 1},aspect: {type: "f",value: 1},aperture: {type: "f",value: 0.025},maxblur: {type: "f",value: 1}},vertexShader: "varying vec2 vUv;\nvoid main() {\nvUv = uv;\ngl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}",fragmentShader: "varying vec2 vUv;\nuniform sampler2D tColor;\nuniform sampler2D tDepth;\nuniform float maxblur;\nuniform float aperture;\nuniform float focus;\nuniform float aspect;\nvoid main() {\nvec2 aspectcorrect = vec2( 1.0, aspect );\nvec4 depth1 = texture2D( tDepth, vUv );\nfloat factor = depth1.x - focus;\nvec2 dofblur = vec2 ( clamp( factor * aperture, -maxblur, maxblur ) );\nvec2 dofblur9 = dofblur * 0.9;\nvec2 dofblur7 = dofblur * 0.7;\nvec2 dofblur4 = dofblur * 0.4;\nvec4 col = vec4( 0.0 );\ncol += texture2D( tColor, vUv.xy );\ncol += texture2D( tColor, vUv.xy + ( vec2(  0.0,   0.4  ) * aspectcorrect ) * dofblur );\ncol += texture2D( tColor, vUv.xy + ( vec2(  0.15,  0.37 ) * aspectcorrect ) * dofblur );\ncol += texture2D( tColor, vUv.xy + ( vec2(  0.29,  0.29 ) * aspectcorrect ) * dofblur );\ncol += texture2D( tColor, vUv.xy + ( vec2( -0.37,  0.15 ) * aspectcorrect ) * dofblur );\ncol += texture2D( tColor, vUv.xy + ( vec2(  0.40,  0.0  ) * aspectcorrect ) * dofblur );\ncol += texture2D( tColor, vUv.xy + ( vec2(  0.37, -0.15 ) * aspectcorrect ) * dofblur );\ncol += texture2D( tColor, vUv.xy + ( vec2(  0.29, -0.29 ) * aspectcorrect ) * dofblur );\ncol += texture2D( tColor, vUv.xy + ( vec2( -0.15, -0.37 ) * aspectcorrect ) * dofblur );\ncol += texture2D( tColor, vUv.xy + ( vec2(  0.0,  -0.4  ) * aspectcorrect ) * dofblur );\ncol += texture2D( tColor, vUv.xy + ( vec2( -0.15,  0.37 ) * aspectcorrect ) * dofblur );\ncol += texture2D( tColor, vUv.xy + ( vec2( -0.29,  0.29 ) * aspectcorrect ) * dofblur );\ncol += texture2D( tColor, vUv.xy + ( vec2(  0.37,  0.15 ) * aspectcorrect ) * dofblur );\ncol += texture2D( tColor, vUv.xy + ( vec2( -0.4,   0.0  ) * aspectcorrect ) * dofblur );\ncol += texture2D( tColor, vUv.xy + ( vec2( -0.37, -0.15 ) * aspectcorrect ) * dofblur );\ncol += texture2D( tColor, vUv.xy + ( vec2( -0.29, -0.29 ) * aspectcorrect ) * dofblur );\ncol += texture2D( tColor, vUv.xy + ( vec2(  0.15, -0.37 ) * aspectcorrect ) * dofblur );\ncol += texture2D( tColor, vUv.xy + ( vec2(  0.15,  0.37 ) * aspectcorrect ) * dofblur9 );\ncol += texture2D( tColor, vUv.xy + ( vec2( -0.37,  0.15 ) * aspectcorrect ) * dofblur9 );\ncol += texture2D( tColor, vUv.xy + ( vec2(  0.37, -0.15 ) * aspectcorrect ) * dofblur9 );\ncol += texture2D( tColor, vUv.xy + ( vec2( -0.15, -0.37 ) * aspectcorrect ) * dofblur9 );\ncol += texture2D( tColor, vUv.xy + ( vec2( -0.15,  0.37 ) * aspectcorrect ) * dofblur9 );\ncol += texture2D( tColor, vUv.xy + ( vec2(  0.37,  0.15 ) * aspectcorrect ) * dofblur9 );\ncol += texture2D( tColor, vUv.xy + ( vec2( -0.37, -0.15 ) * aspectcorrect ) * dofblur9 );\ncol += texture2D( tColor, vUv.xy + ( vec2(  0.15, -0.37 ) * aspectcorrect ) * dofblur9 );\ncol += texture2D( tColor, vUv.xy + ( vec2(  0.29,  0.29 ) * aspectcorrect ) * dofblur7 );\ncol += texture2D( tColor, vUv.xy + ( vec2(  0.40,  0.0  ) * aspectcorrect ) * dofblur7 );\ncol += texture2D( tColor, vUv.xy + ( vec2(  0.29, -0.29 ) * aspectcorrect ) * dofblur7 );\ncol += texture2D( tColor, vUv.xy + ( vec2(  0.0,  -0.4  ) * aspectcorrect ) * dofblur7 );\ncol += texture2D( tColor, vUv.xy + ( vec2( -0.29,  0.29 ) * aspectcorrect ) * dofblur7 );\ncol += texture2D( tColor, vUv.xy + ( vec2( -0.4,   0.0  ) * aspectcorrect ) * dofblur7 );\ncol += texture2D( tColor, vUv.xy + ( vec2( -0.29, -0.29 ) * aspectcorrect ) * dofblur7 );\ncol += texture2D( tColor, vUv.xy + ( vec2(  0.0,   0.4  ) * aspectcorrect ) * dofblur7 );\ncol += texture2D( tColor, vUv.xy + ( vec2(  0.29,  0.29 ) * aspectcorrect ) * dofblur4 );\ncol += texture2D( tColor, vUv.xy + ( vec2(  0.4,   0.0  ) * aspectcorrect ) * dofblur4 );\ncol += texture2D( tColor, vUv.xy + ( vec2(  0.29, -0.29 ) * aspectcorrect ) * dofblur4 );\ncol += texture2D( tColor, vUv.xy + ( vec2(  0.0,  -0.4  ) * aspectcorrect ) * dofblur4 );\ncol += texture2D( tColor, vUv.xy + ( vec2( -0.29,  0.29 ) * aspectcorrect ) * dofblur4 );\ncol += texture2D( tColor, vUv.xy + ( vec2( -0.4,   0.0  ) * aspectcorrect ) * dofblur4 );\ncol += texture2D( tColor, vUv.xy + ( vec2( -0.29, -0.29 ) * aspectcorrect ) * dofblur4 );\ncol += texture2D( tColor, vUv.xy + ( vec2(  0.0,   0.4  ) * aspectcorrect ) * dofblur4 );\ngl_FragColor = col / 41.0;\ngl_FragColor.a = 1.0;\n}"},
    dofmipmap: {uniforms: {tColor: {type: "t",value: null},tDepth: {type: "t",value: null},focus: {type: "f",value: 1},maxblur: {type: "f",value: 1}},vertexShader: "varying vec2 vUv;\nvoid main() {\nvUv = uv;\ngl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}",fragmentShader: "uniform float focus;\nuniform float maxblur;\nuniform sampler2D tColor;\nuniform sampler2D tDepth;\nvarying vec2 vUv;\nvoid main() {\nvec4 depth = texture2D( tDepth, vUv );\nfloat factor = depth.x - focus;\nvec4 col = texture2D( tColor, vUv, 2.0 * maxblur * abs( focus - depth.x ) );\ngl_FragColor = col;\ngl_FragColor.a = 1.0;\n}"},
    sepia: {uniforms: {tDiffuse: {type: "t",value: null},amount: {type: "f",value: 1}},vertexShader: "varying vec2 vUv;\nvoid main() {\nvUv = uv;\ngl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}",fragmentShader: "uniform float amount;\nuniform sampler2D tDiffuse;\nvarying vec2 vUv;\nvoid main() {\nvec4 color = texture2D( tDiffuse, vUv );\nvec3 c = color.rgb;\ncolor.r = dot( c, vec3( 1.0 - 0.607 * amount, 0.769 * amount, 0.189 * amount ) );\ncolor.g = dot( c, vec3( 0.349 * amount, 1.0 - 0.314 * amount, 0.168 * amount ) );\ncolor.b = dot( c, vec3( 0.272 * amount, 0.534 * amount, 1.0 - 0.869 * amount ) );\ngl_FragColor = vec4( min( vec3( 1.0 ), color.rgb ), color.a );\n}"},
    dotscreen: {uniforms: {tDiffuse: {type: "t",value: null},tSize: {type: "v2",value: new THREE.Vector2(256, 256)},center: {type: "v2",value: new THREE.Vector2(0.5, 0.5)},angle: {type: "f",value: 1.57},scale: {type: "f",value: 1}},vertexShader: "varying vec2 vUv;\nvoid main() {\nvUv = uv;\ngl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}",fragmentShader: "uniform vec2 center;\nuniform float angle;\nuniform float scale;\nuniform vec2 tSize;\nuniform sampler2D tDiffuse;\nvarying vec2 vUv;\nfloat pattern() {\nfloat s = sin( angle ), c = cos( angle );\nvec2 tex = vUv * tSize - center;\nvec2 point = vec2( c * tex.x - s * tex.y, s * tex.x + c * tex.y ) * scale;\nreturn ( sin( point.x ) * sin( point.y ) ) * 4.0;\n}\nvoid main() {\nvec4 color = texture2D( tDiffuse, vUv );\nfloat average = ( color.r + color.g + color.b ) / 3.0;\ngl_FragColor = vec4( vec3( average * 10.0 - 5.0 + pattern() ), color.a );\n}"},
    vignette: {uniforms: {tDiffuse: {type: "t",value: null},offset: {type: "f",value: 1},darkness: {type: "f",value: 1}},vertexShader: "varying vec2 vUv;\nvoid main() {\nvUv = uv;\ngl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}",fragmentShader: "uniform float offset;\nuniform float darkness;\nuniform sampler2D tDiffuse;\nvarying vec2 vUv;\nvoid main() {\nvec4 texel = texture2D( tDiffuse, vUv );\nvec2 uv = ( vUv - vec2( 0.5 ) ) * vec2( offset );\ngl_FragColor = vec4( mix( texel.rgb, vec3( 1.0 - darkness ), dot( uv, uv ) ), texel.a );\n}"},
    bleachbypass: {uniforms: {tDiffuse: {type: "t",value: null},opacity: {type: "f",value: 1}},vertexShader: "varying vec2 vUv;\nvoid main() {\nvUv = uv;\ngl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}",fragmentShader: "uniform float opacity;\nuniform sampler2D tDiffuse;\nvarying vec2 vUv;\nvoid main() {\nvec4 base = texture2D( tDiffuse, vUv );\nvec3 lumCoeff = vec3( 0.25, 0.65, 0.1 );\nfloat lum = dot( lumCoeff, base.rgb );\nvec3 blend = vec3( lum );\nfloat L = min( 1.0, max( 0.0, 10.0 * ( lum - 0.45 ) ) );\nvec3 result1 = 2.0 * base.rgb * blend;\nvec3 result2 = 1.0 - 2.0 * ( 1.0 - blend ) * ( 1.0 - base.rgb );\nvec3 newColor = mix( result1, result2, L );\nfloat A2 = opacity * base.a;\nvec3 mixRGB = A2 * newColor.rgb;\nmixRGB += ( ( 1.0 - A2 ) * base.rgb );\ngl_FragColor = vec4( mixRGB, base.a );\n}"},
    focus: {uniforms: {tDiffuse: {type: "t",value: null},screenWidth: {type: "f",value: 1024},screenHeight: {type: "f",value: 1024},sampleDistance: {type: "f",value: 0.94},waveFactor: {type: "f",value: 0.00125}},vertexShader: "varying vec2 vUv;\nvoid main() {\nvUv = uv;\ngl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}",fragmentShader: "uniform float screenWidth;\nuniform float screenHeight;\nuniform float sampleDistance;\nuniform float waveFactor;\nuniform sampler2D tDiffuse;\nvarying vec2 vUv;\nvoid main() {\nvec4 color, org, tmp, add;\nfloat sample_dist, f;\nvec2 vin;\nvec2 uv = vUv;\nadd = color = org = texture2D( tDiffuse, uv );\nvin = ( uv - vec2( 0.5 ) ) * vec2( 1.4 );\nsample_dist = dot( vin, vin ) * 2.0;\nf = ( waveFactor * 100.0 + sample_dist ) * sampleDistance * 4.0;\nvec2 sampleSize = vec2(  1.0 / screenWidth, 1.0 / screenHeight ) * vec2( f );\nadd += tmp = texture2D( tDiffuse, uv + vec2( 0.111964, 0.993712 ) * sampleSize );\nif( tmp.b < color.b ) color = tmp;\nadd += tmp = texture2D( tDiffuse, uv + vec2( 0.846724, 0.532032 ) * sampleSize );\nif( tmp.b < color.b ) color = tmp;\nadd += tmp = texture2D( tDiffuse, uv + vec2( 0.943883, -0.330279 ) * sampleSize );\nif( tmp.b < color.b ) color = tmp;\nadd += tmp = texture2D( tDiffuse, uv + vec2( 0.330279, -0.943883 ) * sampleSize );\nif( tmp.b < color.b ) color = tmp;\nadd += tmp = texture2D( tDiffuse, uv + vec2( -0.532032, -0.846724 ) * sampleSize );\nif( tmp.b < color.b ) color = tmp;\nadd += tmp = texture2D( tDiffuse, uv + vec2( -0.993712, -0.111964 ) * sampleSize );\nif( tmp.b < color.b ) color = tmp;\nadd += tmp = texture2D( tDiffuse, uv + vec2( -0.707107, 0.707107 ) * sampleSize );\nif( tmp.b < color.b ) color = tmp;\ncolor = color * vec4( 2.0 ) - ( add / vec4( 8.0 ) );\ncolor = color + ( add / vec4( 8.0 ) - color ) * ( vec4( 1.0 ) - vec4( sample_dist * 0.5 ) );\ngl_FragColor = vec4( color.rgb * color.rgb * vec3( 0.95 ) + color.rgb, 1.0 );\n}"},
    triangleBlur: {uniforms: {texture: {type: "t",value: null},delta: {type: "v2",value: new THREE.Vector2(1, 1)}},vertexShader: "varying vec2 vUv;\nvoid main() {\nvUv = uv;\ngl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}",fragmentShader: "#define ITERATIONS 10.0\nuniform sampler2D texture;\nuniform vec2 delta;\nvarying vec2 vUv;\nfloat random( vec3 scale, float seed ) {\nreturn fract( sin( dot( gl_FragCoord.xyz + seed, scale ) ) * 43758.5453 + seed );\n}\nvoid main() {\nvec4 color = vec4( 0.0 );\nfloat total = 0.0;\nfloat offset = random( vec3( 12.9898, 78.233, 151.7182 ), 0.0 );\nfor ( float t = -ITERATIONS; t <= ITERATIONS; t ++ ) {\nfloat percent = ( t + offset - 0.5 ) / ITERATIONS;\nfloat weight = 1.0 - abs( percent );\ncolor += texture2D( texture, vUv + delta * percent ) * weight;\ntotal += weight;\n}\ngl_FragColor = color / total;\n}"},
    basic: {uniforms: {},vertexShader: "void main() {\ngl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}",fragmentShader: "void main() {\ngl_FragColor = vec4( 1.0, 0.0, 0.0, 0.5 );\n}"},horizontalBlur: {uniforms: {tDiffuse: {type: "t",value: null},h: {type: "f",value: 1 / 512}},vertexShader: "varying vec2 vUv;\nvoid main() {\nvUv = uv;\ngl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}",fragmentShader: "uniform sampler2D tDiffuse;\nuniform float h;\nvarying vec2 vUv;\nvoid main() {\nvec4 sum = vec4( 0.0 );\nsum += texture2D( tDiffuse, vec2( vUv.x - 4.0 * h, vUv.y ) ) * 0.051;\nsum += texture2D( tDiffuse, vec2( vUv.x - 3.0 * h, vUv.y ) ) * 0.0918;\nsum += texture2D( tDiffuse, vec2( vUv.x - 2.0 * h, vUv.y ) ) * 0.12245;\nsum += texture2D( tDiffuse, vec2( vUv.x - 1.0 * h, vUv.y ) ) * 0.1531;\nsum += texture2D( tDiffuse, vec2( vUv.x, \t\t  \tvUv.y ) ) * 0.1633;\nsum += texture2D( tDiffuse, vec2( vUv.x + 1.0 * h, vUv.y ) ) * 0.1531;\nsum += texture2D( tDiffuse, vec2( vUv.x + 2.0 * h, vUv.y ) ) * 0.12245;\nsum += texture2D( tDiffuse, vec2( vUv.x + 3.0 * h, vUv.y ) ) * 0.0918;\nsum += texture2D( tDiffuse, vec2( vUv.x + 4.0 * h, vUv.y ) ) * 0.051;\ngl_FragColor = sum;\n}"},
    verticalBlur: {uniforms: {tDiffuse: {type: "t",value: null},v: {type: "f",value: 1 / 512}},vertexShader: "varying vec2 vUv;\nvoid main() {\nvUv = uv;\ngl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}",fragmentShader: "uniform sampler2D tDiffuse;\nuniform float v;\nvarying vec2 vUv;\nvoid main() {\nvec4 sum = vec4( 0.0 );\nsum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 4.0 * v ) ) * 0.051;\nsum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 3.0 * v ) ) * 0.0918;\nsum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 2.0 * v ) ) * 0.12245;\nsum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 1.0 * v ) ) * 0.1531;\nsum += texture2D( tDiffuse, vec2( vUv.x, vUv.y\t\t\t  ) ) * 0.1633;\nsum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 1.0 * v ) ) * 0.1531;\nsum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 2.0 * v ) ) * 0.12245;\nsum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 3.0 * v ) ) * 0.0918;\nsum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 4.0 * v ) ) * 0.051;\ngl_FragColor = sum;\n}"},
    horizontalTiltShift: {uniforms: {tDiffuse: {type: "t",value: null},h: {type: "f",value: 1 / 512},r: {type: "f",value: 0.35}},vertexShader: "varying vec2 vUv;\nvoid main() {\nvUv = uv;\ngl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}",fragmentShader: "uniform sampler2D tDiffuse;\nuniform float h;\nuniform float r;\nvarying vec2 vUv;\nvoid main() {\nvec4 sum = vec4( 0.0 );\nfloat hh = h * abs( r - vUv.y );\nsum += texture2D( tDiffuse, vec2( vUv.x - 4.0 * hh, vUv.y ) ) * 0.051;\nsum += texture2D( tDiffuse, vec2( vUv.x - 3.0 * hh, vUv.y ) ) * 0.0918;\nsum += texture2D( tDiffuse, vec2( vUv.x - 2.0 * hh, vUv.y ) ) * 0.12245;\nsum += texture2D( tDiffuse, vec2( vUv.x - 1.0 * hh, vUv.y ) ) * 0.1531;\nsum += texture2D( tDiffuse, vec2( vUv.x, \t\t  \t vUv.y ) ) * 0.1633;\nsum += texture2D( tDiffuse, vec2( vUv.x + 1.0 * hh, vUv.y ) ) * 0.1531;\nsum += texture2D( tDiffuse, vec2( vUv.x + 2.0 * hh, vUv.y ) ) * 0.12245;\nsum += texture2D( tDiffuse, vec2( vUv.x + 3.0 * hh, vUv.y ) ) * 0.0918;\nsum += texture2D( tDiffuse, vec2( vUv.x + 4.0 * hh, vUv.y ) ) * 0.051;\ngl_FragColor = sum;\n}"},
    verticalTiltShift: {uniforms: {tDiffuse: {type: "t",value: null},v: {type: "f",value: 1 / 512},r: {type: "f",value: 0.35}},vertexShader: "varying vec2 vUv;\nvoid main() {\nvUv = uv;\ngl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}",fragmentShader: "uniform sampler2D tDiffuse;\nuniform float v;\nuniform float r;\nvarying vec2 vUv;\nvoid main() {\nvec4 sum = vec4( 0.0 );\nfloat vv = v * abs( r - vUv.y );\nsum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 4.0 * vv ) ) * 0.051;\nsum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 3.0 * vv ) ) * 0.0918;\nsum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 2.0 * vv ) ) * 0.12245;\nsum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 1.0 * vv ) ) * 0.1531;\nsum += texture2D( tDiffuse, vec2( vUv.x, vUv.y\t\t\t   ) ) * 0.1633;\nsum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 1.0 * vv ) ) * 0.1531;\nsum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 2.0 * vv ) ) * 0.12245;\nsum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 3.0 * vv ) ) * 0.0918;\nsum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 4.0 * vv ) ) * 0.051;\ngl_FragColor = sum;\n}"},
    blend: {uniforms: {tDiffuse1: {type: "t",value: null},tDiffuse2: {type: "t",value: null},mixRatio: {type: "f",value: 0.5},opacity: {type: "f",value: 1}},vertexShader: "varying vec2 vUv;\nvoid main() {\nvUv = uv;\ngl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}",fragmentShader: "uniform float opacity;\nuniform float mixRatio;\nuniform sampler2D tDiffuse1;\nuniform sampler2D tDiffuse2;\nvarying vec2 vUv;\nvoid main() {\nvec4 texel1 = texture2D( tDiffuse1, vUv );\nvec4 texel2 = texture2D( tDiffuse2, vUv );\ngl_FragColor = opacity * mix( texel1, texel2, mixRatio );\n}"},
    fxaa: {uniforms: {tDiffuse: {type: "t",value: null},resolution: {type: "v2",value: new THREE.Vector2(1 / 1024, 1 / 512)}},vertexShader: "varying vec2 vUv;\nvoid main() {\nvUv = uv;\ngl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}",fragmentShader: "uniform sampler2D tDiffuse;\nuniform vec2 resolution;\nvarying vec2 vUv;\n#define FXAA_REDUCE_MIN   (1.0/128.0)\n#define FXAA_REDUCE_MUL   (1.0/8.0)\n#define FXAA_SPAN_MAX     8.0\nvoid main() {\nvec3 rgbNW = texture2D( tDiffuse, ( gl_FragCoord.xy + vec2( -1.0, -1.0 ) ) * resolution ).xyz;\nvec3 rgbNE = texture2D( tDiffuse, ( gl_FragCoord.xy + vec2( 1.0, -1.0 ) ) * resolution ).xyz;\nvec3 rgbSW = texture2D( tDiffuse, ( gl_FragCoord.xy + vec2( -1.0, 1.0 ) ) * resolution ).xyz;\nvec3 rgbSE = texture2D( tDiffuse, ( gl_FragCoord.xy + vec2( 1.0, 1.0 ) ) * resolution ).xyz;\nvec4 rgbaM  = texture2D( tDiffuse,  gl_FragCoord.xy  * resolution );\nvec3 rgbM  = rgbaM.xyz;\nfloat opacity  = rgbaM.w;\nvec3 luma = vec3( 0.299, 0.587, 0.114 );\nfloat lumaNW = dot( rgbNW, luma );\nfloat lumaNE = dot( rgbNE, luma );\nfloat lumaSW = dot( rgbSW, luma );\nfloat lumaSE = dot( rgbSE, luma );\nfloat lumaM  = dot( rgbM,  luma );\nfloat lumaMin = min( lumaM, min( min( lumaNW, lumaNE ), min( lumaSW, lumaSE ) ) );\nfloat lumaMax = max( lumaM, max( max( lumaNW, lumaNE) , max( lumaSW, lumaSE ) ) );\nvec2 dir;\ndir.x = -((lumaNW + lumaNE) - (lumaSW + lumaSE));\ndir.y =  ((lumaNW + lumaSW) - (lumaNE + lumaSE));\nfloat dirReduce = max( ( lumaNW + lumaNE + lumaSW + lumaSE ) * ( 0.25 * FXAA_REDUCE_MUL ), FXAA_REDUCE_MIN );\nfloat rcpDirMin = 1.0 / ( min( abs( dir.x ), abs( dir.y ) ) + dirReduce );\ndir = min( vec2( FXAA_SPAN_MAX,  FXAA_SPAN_MAX),\nmax( vec2(-FXAA_SPAN_MAX, -FXAA_SPAN_MAX),\ndir * rcpDirMin)) * resolution;\nvec3 rgbA = 0.5 * (\ntexture2D( tDiffuse, gl_FragCoord.xy  * resolution + dir * ( 1.0 / 3.0 - 0.5 ) ).xyz +\ntexture2D( tDiffuse, gl_FragCoord.xy  * resolution + dir * ( 2.0 / 3.0 - 0.5 ) ).xyz );\nvec3 rgbB = rgbA * 0.5 + 0.25 * (\ntexture2D( tDiffuse, gl_FragCoord.xy  * resolution + dir * -0.5 ).xyz +\ntexture2D( tDiffuse, gl_FragCoord.xy  * resolution + dir * 0.5 ).xyz );\nfloat lumaB = dot( rgbB, luma );\nif ( ( lumaB < lumaMin ) || ( lumaB > lumaMax ) ) {\ngl_FragColor = vec4( rgbA, opacity );\n} else {\ngl_FragColor = vec4( rgbB, opacity );\n}\n}"},
    luminosity: {uniforms: {tDiffuse: {type: "t",value: null}},vertexShader: "varying vec2 vUv;\nvoid main() {\nvUv = uv;\ngl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}",fragmentShader: "uniform sampler2D tDiffuse;\nvarying vec2 vUv;\nvoid main() {\nvec4 texel = texture2D( tDiffuse, vUv );\nvec3 luma = vec3( 0.299, 0.587, 0.114 );\nfloat v = dot( texel.xyz, luma );\ngl_FragColor = vec4( v, v, v, texel.w );\n}"},colorCorrection: {uniforms: {tDiffuse: {type: "t",value: null},powRGB: {type: "v3",
                value: new THREE.Vector3(2, 2, 2)},mulRGB: {type: "v3",value: new THREE.Vector3(1, 1, 1)}},vertexShader: "varying vec2 vUv;\nvoid main() {\nvUv = uv;\ngl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}",fragmentShader: "uniform sampler2D tDiffuse;\nuniform vec3 powRGB;\nuniform vec3 mulRGB;\nvarying vec2 vUv;\nvoid main() {\ngl_FragColor = texture2D( tDiffuse, vUv );\ngl_FragColor.rgb = mulRGB * pow( gl_FragColor.rgb, powRGB );\n}"},normalmap: {uniforms: {heightMap: {type: "t",value: null},
            resolution: {type: "v2",value: new THREE.Vector2(512, 512)},scale: {type: "v2",value: new THREE.Vector2(1, 1)},height: {type: "f",value: 0.05}},vertexShader: "varying vec2 vUv;\nvoid main() {\nvUv = uv;\ngl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}",fragmentShader: "uniform float height;\nuniform vec2 resolution;\nuniform sampler2D heightMap;\nvarying vec2 vUv;\nvoid main() {\nfloat val = texture2D( heightMap, vUv ).x;\nfloat valU = texture2D( heightMap, vUv + vec2( 1.0 / resolution.x, 0.0 ) ).x;\nfloat valV = texture2D( heightMap, vUv + vec2( 0.0, 1.0 / resolution.y ) ).x;\ngl_FragColor = vec4( ( 0.5 * normalize( vec3( val - valU, val - valV, height  ) ) + 0.5 ), 1.0 );\n}"},
    ssao: {uniforms: {tDiffuse: {type: "t",value: null},tDepth: {type: "t",value: null},size: {type: "v2",value: new THREE.Vector2(512, 512)},cameraNear: {type: "f",value: 1},cameraFar: {type: "f",value: 100},fogNear: {type: "f",value: 5},fogFar: {type: "f",value: 100},fogEnabled: {type: "i",value: 0},onlyAO: {type: "i",value: 0},aoClamp: {type: "f",value: 0.3},lumInfluence: {type: "f",value: 0.9}},vertexShader: "varying vec2 vUv;\nvoid main() {\nvUv = uv;\ngl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}",fragmentShader: "uniform float cameraNear;\nuniform float cameraFar;\nuniform float fogNear;\nuniform float fogFar;\nuniform bool fogEnabled;\nuniform bool onlyAO;\nuniform vec2 size;\nuniform float aoClamp;\nuniform float lumInfluence;\nuniform sampler2D tDiffuse;\nuniform sampler2D tDepth;\nvarying vec2 vUv;\n#define DL 2.399963229728653\n#define EULER 2.718281828459045\nfloat width = size.x;\nfloat height = size.y;\nfloat cameraFarPlusNear = cameraFar + cameraNear;\nfloat cameraFarMinusNear = cameraFar - cameraNear;\nfloat cameraCoef = 2.0 * cameraNear;\nconst int samples = 8;\nconst float radius = 5.0;\nconst bool useNoise = false;\nconst float noiseAmount = 0.0003;\nconst float diffArea = 0.4;\nconst float gDisplace = 0.4;\nconst vec3 onlyAOColor = vec3( 1.0, 0.7, 0.5 );\nfloat unpackDepth( const in vec4 rgba_depth ) {\nconst vec4 bit_shift = vec4( 1.0 / ( 256.0 * 256.0 * 256.0 ), 1.0 / ( 256.0 * 256.0 ), 1.0 / 256.0, 1.0 );\nfloat depth = dot( rgba_depth, bit_shift );\nreturn depth;\n}\nvec2 rand( const vec2 coord ) {\nvec2 noise;\nif ( useNoise ) {\nfloat nx = dot ( coord, vec2( 12.9898, 78.233 ) );\nfloat ny = dot ( coord, vec2( 12.9898, 78.233 ) * 2.0 );\nnoise = clamp( fract ( 43758.5453 * sin( vec2( nx, ny ) ) ), 0.0, 1.0 );\n} else {\nfloat ff = fract( 1.0 - coord.s * ( width / 2.0 ) );\nfloat gg = fract( coord.t * ( height / 2.0 ) );\nnoise = vec2( 0.25, 0.75 ) * vec2( ff ) + vec2( 0.75, 0.25 ) * gg;\n}\nreturn ( noise * 2.0  - 1.0 ) * noiseAmount;\n}\nfloat doFog() {\nfloat zdepth = unpackDepth( texture2D( tDepth, vUv ) );\nfloat depth = -cameraFar * cameraNear / ( zdepth * cameraFarMinusNear - cameraFar );\nreturn smoothstep( fogNear, fogFar, depth );\n}\nfloat readDepth( const in vec2 coord ) {\nreturn cameraCoef / ( cameraFarPlusNear - unpackDepth( texture2D( tDepth, coord ) ) * cameraFarMinusNear );\n}\nfloat compareDepths( const in float depth1, const in float depth2, inout int far ) {\nfloat garea = 2.0;\nfloat diff = ( depth1 - depth2 ) * 100.0;\nif ( diff < gDisplace ) {\ngarea = diffArea;\n} else {\nfar = 1;\n}\nfloat dd = diff - gDisplace;\nfloat gauss = pow( EULER, -2.0 * dd * dd / ( garea * garea ) );\nreturn gauss;\n}\nfloat calcAO( float depth, float dw, float dh ) {\nfloat dd = radius - depth * radius;\nvec2 vv = vec2( dw, dh );\nvec2 coord1 = vUv + dd * vv;\nvec2 coord2 = vUv - dd * vv;\nfloat temp1 = 0.0;\nfloat temp2 = 0.0;\nint far = 0;\ntemp1 = compareDepths( depth, readDepth( coord1 ), far );\nif ( far > 0 ) {\ntemp2 = compareDepths( readDepth( coord2 ), depth, far );\ntemp1 += ( 1.0 - temp1 ) * temp2;\n}\nreturn temp1;\n}\nvoid main() {\nvec2 noise = rand( vUv );\nfloat depth = readDepth( vUv );\nfloat tt = clamp( depth, aoClamp, 1.0 );\nfloat w = ( 1.0 / width )  / tt + ( noise.x * ( 1.0 - noise.x ) );\nfloat h = ( 1.0 / height ) / tt + ( noise.y * ( 1.0 - noise.y ) );\nfloat pw;\nfloat ph;\nfloat ao;\nfloat dz = 1.0 / float( samples );\nfloat z = 1.0 - dz / 2.0;\nfloat l = 0.0;\nfor ( int i = 0; i <= samples; i ++ ) {\nfloat r = sqrt( 1.0 - z );\npw = cos( l ) * r;\nph = sin( l ) * r;\nao += calcAO( depth, pw * w, ph * h );\nz = z - dz;\nl = l + DL;\n}\nao /= float( samples );\nao = 1.0 - ao;\nif ( fogEnabled ) {\nao = mix( ao, 1.0, doFog() );\n}\nvec3 color = texture2D( tDiffuse, vUv ).rgb;\nvec3 lumcoeff = vec3( 0.299, 0.587, 0.114 );\nfloat lum = dot( color.rgb, lumcoeff );\nvec3 luminance = vec3( lum );\nvec3 final = vec3( color * mix( vec3( ao ), vec3( 1.0 ), luminance * lumInfluence ) );\nif ( onlyAO ) {\nfinal = onlyAOColor * vec3( mix( vec3( ao ), vec3( 1.0 ), luminance * lumInfluence ) );\n}\ngl_FragColor = vec4( final, 1.0 );\n}"},
    colorify: {uniforms: {tDiffuse: {type: "t",value: null},color: {type: "c",value: new THREE.Color(16777215)}},vertexShader: "varying vec2 vUv;\nvoid main() {\nvUv = uv;\ngl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}",fragmentShader: "uniform vec3 color;\nuniform sampler2D tDiffuse;\nvarying vec2 vUv;\nvoid main() {\nvec4 texel = texture2D( tDiffuse, vUv );\nvec3 luma = vec3( 0.299, 0.587, 0.114 );\nfloat v = dot( texel.xyz, luma );\ngl_FragColor = vec4( v * color, texel.w );\n}"},
    unpackDepthRGBA: {uniforms: {tDiffuse: {type: "t",value: null},opacity: {type: "f",value: 1}},vertexShader: "varying vec2 vUv;\nvoid main() {\nvUv = uv;\ngl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}",fragmentShader: "uniform float opacity;\nuniform sampler2D tDiffuse;\nvarying vec2 vUv;\nfloat unpackDepth( const in vec4 rgba_depth ) {\nconst vec4 bit_shift = vec4( 1.0 / ( 256.0 * 256.0 * 256.0 ), 1.0 / ( 256.0 * 256.0 ), 1.0 / 256.0, 1.0 );\nfloat depth = dot( rgba_depth, bit_shift );\nreturn depth;\n}\nvoid main() {\nfloat depth = 1.0 - unpackDepth( texture2D( tDiffuse, vUv ) );\ngl_FragColor = opacity * vec4( vec3( depth ), 1.0 );\n}"},
    mask: {uniforms: {tDiffuse: {type: "t",value: null},tMask: {type: "t",value: null},opacity: {type: "f",value: 1}},vertexShader: "varying vec2 vUv;\nvoid main() {\nvUv = uv;\ngl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n}",fragmentShader: "uniform sampler2D tDiffuse;\nuniform sampler2D tMask;\nuniform float opacity;\nvarying vec2 vUv;\nvoid main() {\nvec4 color = texture2D(tDiffuse, vUv);\nvec4 mask = texture2D(tMask, vUv);\ncolor.a = mask.a;\ngl_FragColor = color;\n}"},noisefog: {uniforms: {tNoise: {type: "t",
                value: null},diffuse: {type: "v3",value: new THREE.Vector3(0, 0, 0)},fogColor: {type: "v3",value: new THREE.Vector3(1, 1, 1)},fogDensity: {type: "f",value: 0.055},camSrc: {type: "v3",value: new THREE.Vector3(0, 0, 0)},camDir: {type: "v3",value: new THREE.Vector3(0, 0, 0)},time: {type: "f",value: 0}},vertexShader: "varying vec2 vUv;\nvoid main() {\nvUv = uv;\ngl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n}",fragmentShader: "uniform sampler2D tNoise;\nuniform vec3 diffuse;\nuniform vec3 fogColor;\nuniform float fogDensity;\nuniform vec3 camSrc;\nuniform vec3 camDir;\nuniform float time;\nvarying vec2 vUv;\nfloat getNoise(float offx, float offy, float scale, float t, vec3 rayDir) {\nfloat rx = 1.0;\nfloat ry = 1.0 / 3.14159;\nfloat d = 1.0 / scale;\nfloat phi = atan(rayDir.z, rayDir.x) / 3.14159;\nfloat the = rayDir.y;\nfloat nx = offx * d + phi * rx + sin(t * 0.34) * 0.023;\nfloat ny = offy * d + the * ry + cos(t * 0.24) * 0.008;\nfloat f = (sin(nx * 32.0) * 0.5 + 0.5) * 0.32 + (cos(ny * 43.0) * 0.5 + 0.5) * 0.27;\nreturn 1.0 - texture2D(tNoise, vec2(nx + sin(t * 0.18) * 0.13, ny + cos(t * 0.11) * 0.3)).x * f;\n}\nvec4 applyFog(in vec4 rgb, in vec3 raySrc, in vec3 rayDir, in float distance) {\nfloat noise = getNoise(gl_FragCoord.x, gl_FragCoord.y, 4096.0, time, rayDir);\nfloat fogAmount = noise * exp((-raySrc.y)*fogDensity) * (1.0-exp(-distance*rayDir.y*fogDensity)) / (rayDir.y);\nreturn mix(rgb, vec4(fogColor, rgb.a), fogAmount);\n}\nvoid main() {\nvec3 raySrc = camSrc;\nvec3 rayDir = normalize(camDir);\nvec4 val = vec4(diffuse, 1);\nvec4 res = applyFog(val, raySrc, rayDir, gl_FragCoord.z / gl_FragCoord.w);\ngl_FragColor = res;\n}"},
    noisefogmorph: {uniforms: {tDiffuse: {type: "t",value: null},tNoise: {type: "t",value: null},diffuse: {type: "v3",value: new THREE.Vector3(0, 0, 0)},fogColor: {type: "v3",value: new THREE.Vector3(1, 1, 1)},fogDensity: {type: "f",value: 0.055},camSrc: {type: "v3",value: new THREE.Vector3(0, 0, 0)},camDir: {type: "v3",value: new THREE.Vector3(0, 0, 0)},time: {type: "f",value: 0},morphTargetInfluences: {type: "f",value: 0}},vertexShader: "varying vec2 vUv;\nuniform float morphTargetInfluences[ 4 ];\nvoid main() {\nvUv = uv;\nvec3 morphed = vec3( 0.0 );\nmorphed += ( morphTarget0 - position ) * morphTargetInfluences[ 0 ];\nmorphed += ( morphTarget1 - position ) * morphTargetInfluences[ 1 ];\nmorphed += ( morphTarget2 - position ) * morphTargetInfluences[ 2 ];\nmorphed += ( morphTarget3 - position ) * morphTargetInfluences[ 3 ];\nmorphed += position;\ngl_Position = projectionMatrix * modelViewMatrix * vec4(morphed, 1.0);\n}",
        fragmentShader: "uniform sampler2D tDiffuse;\nuniform sampler2D tNoise;\nuniform vec3 diffuse;\nuniform vec3 fogColor;\nuniform float fogDensity;\nuniform vec3 camSrc;\nuniform vec3 camDir;\nuniform float time;\nvarying vec2 vUv;\nfloat getNoise(float offx, float offy, float scale, float t, vec3 rayDir) {\nfloat rx = 1.0;\nfloat ry = 1.0 / 3.14159;\nfloat d = 1.0 / scale;\nfloat phi = atan(rayDir.z, rayDir.x) / 3.14159;\nfloat the = rayDir.y;\nfloat nx = offx * d + phi * rx + sin(t * 0.34) * 0.023;\nfloat ny = offy * d + the * ry + cos(t * 0.24) * 0.008;\nfloat f = (sin(nx * 32.0) * 0.5 + 0.5) * 0.32 + (cos(ny * 43.0) * 0.5 + 0.5) * 0.27;\nreturn 1.0 - texture2D(tNoise, vec2(nx + sin(t * 0.18) * 0.13, ny + cos(t * 0.11) * 0.3)).x * f;\n}\nvec4 applyFog(in vec4 rgb, in vec3 raySrc, in vec3 rayDir, in float distance) {\nfloat noise = getNoise(gl_FragCoord.x, gl_FragCoord.y, 4096.0, time, rayDir);\nfloat fogAmount = noise * exp((-raySrc.y)*fogDensity) * (1.0-exp(-distance*rayDir.y*fogDensity)) / rayDir.y;\nreturn mix(rgb, vec4(fogColor, rgb.a), fogAmount);\n}\nvoid main() {\nvec3 raySrc = camSrc;\nvec3 rayDir = normalize(camDir);\nvec4 val = texture2D(tDiffuse, vUv);\nvec4 res = applyFog(val, raySrc, rayDir, gl_FragCoord.z / gl_FragCoord.w);\ngl_FragColor = res;\n}"},
    noisefogtex: {uniforms: {tDiffuse: {type: "t",value: null},tNoise: {type: "t",value: null},fogColor: {type: "v3",value: new THREE.Vector3(1, 1, 1)},fogDensity: {type: "f",value: 0.055},camSrc: {type: "v3",value: new THREE.Vector3(0, 0, 0)},camDir: {type: "v3",value: new THREE.Vector3(0, 0, 0)},time: {type: "f",value: 0}},vertexShader: "varying vec2 vUv;\nvoid main() {\nvUv = uv;\ngl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n}",fragmentShader: "uniform sampler2D tDiffuse;\nuniform sampler2D tNoise;\nuniform vec3 diffuse;\nuniform vec3 fogColor;\nuniform float fogDensity;\nuniform vec3 camSrc;\nuniform vec3 camDir;\nuniform float time;\nvarying vec2 vUv;\nfloat getNoise(float offx, float offy, float scale, float t, vec3 rayDir) {\nfloat rx = 1.0;\nfloat ry = 1.0 / 3.14159;\nfloat d = 1.0 / scale;\nfloat phi = atan(rayDir.z, rayDir.x) / 3.14159;\nfloat the = rayDir.y;\nfloat nx = offx * d + phi * rx + sin(t * 0.34) * 0.023;\nfloat ny = offy * d + the * ry + cos(t * 0.24) * 0.008;\nfloat f = (sin(nx * 32.0) * 0.5 + 0.5) * 0.32 + (cos(ny * 43.0) * 0.5 + 0.5) * 0.27;\nreturn 1.0 - texture2D(tNoise, vec2(nx + sin(t * 0.18) * 0.13, ny + cos(t * 0.11) * 0.3)).x * f;\n}\nvec4 applyFog(in vec4 rgb, in vec3 raySrc, in vec3 rayDir, in float distance) {\nfloat noise = getNoise(gl_FragCoord.x, gl_FragCoord.y, 4096.0, time, rayDir);\nfloat fogAmount = noise * exp((-raySrc.y)*fogDensity) * (1.0-exp(-distance*rayDir.y*fogDensity)) / (rayDir.y);\nreturn mix(rgb, vec4(fogColor, rgb.a), fogAmount);\n}\nvoid main() {\nvec3 raySrc = camSrc;\nvec3 rayDir = normalize(camDir);\nvec4 val = texture2D(tDiffuse, vUv);\nvec4 res = applyFog(val, raySrc, rayDir, gl_FragCoord.z / gl_FragCoord.w);\ngl_FragColor = res;\n}"},
    buildKernel: function(a) {
        var b, c, d, e, f = 2 * Math.ceil(3 * a) + 1;
        25 < f && (f = 25);
        e = 0.5 * (f - 1);
        c = Array(f);
        for (b = d = 0; b < f; ++b)
            c[b] = Math.exp(-((b - e) * (b - e)) / (2 * a * a)), d += c[b];
        for (b = 0; b < f; ++b)
            c[b] /= d;
        return c
    }};
THREE.EffectComposer = function(a, b) {
    this.renderer = a;
    this.renderTarget1 = b;
    if (void 0 === this.renderTarget1) {
        var c = window.innerWidth || 1, d = window.innerHeight || 1;
        this.renderTargetParameters = {minFilter: THREE.LinearFilter,magFilter: THREE.LinearFilter,format: THREE.RGBFormat,stencilBuffer: !1};
        this.renderTarget1 = new THREE.WebGLRenderTarget(c, d, this.renderTargetParameters)
    }
    this.renderTarget2 = this.renderTarget1.clone();
    this.writeBuffer = this.renderTarget1;
    this.readBuffer = this.renderTarget2;
    this.passes = [];
    this.copyPass = 
    new THREE.ShaderPass(THREE.ShaderExtras.screen)
};
THREE.EffectComposer.prototype = {swapBuffers: function() {
        var a = this.readBuffer;
        this.readBuffer = this.writeBuffer;
        this.writeBuffer = a
    },addPass: function(a) {
        this.passes.push(a)
    },render: function(a) {
        this.writeBuffer = this.renderTarget1;
        this.readBuffer = this.renderTarget2;
        var b = !1, c, d, e = this.passes.length;
        for (d = 0; d < e; d++)
            if (c = this.passes[d], c.enabled) {
                c.render(this.renderer, this.writeBuffer, this.readBuffer, a, b);
                if (c.needsSwap) {
                    if (b) {
                        var f = this.renderer.context;
                        f.stencilFunc(f.NOTEQUAL, 1, 4294967295);
                        this.copyPass.render(this.renderer, 
                        this.writeBuffer, this.readBuffer, a);
                        f.stencilFunc(f.EQUAL, 1, 4294967295)
                    }
                    this.swapBuffers()
                }
                c instanceof THREE.MaskPass ? b = !0 : c instanceof THREE.ClearMaskPass && (b = !1)
            }
    },reset: function(a) {
        this.renderTarget1 = a;
        void 0 === this.renderTarget1 && (this.renderTarget1 = new THREE.WebGLRenderTarget(window.innerWidth, window.innerHeight, this.renderTargetParameters));
        this.renderTarget2 = this.renderTarget1.clone();
        this.writeBuffer = this.renderTarget1;
        this.readBuffer = this.renderTarget2
    }};
THREE.EffectComposer.camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
THREE.EffectComposer.quad = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), null);
THREE.EffectComposer.scene = new THREE.Scene;
THREE.EffectComposer.scene.add(THREE.EffectComposer.quad);
THREE.ShaderPass = function(a, b) {
    this.textureID = void 0 !== b ? b : "tDiffuse";
    this.uniforms = THREE.UniformsUtils.clone(a.uniforms);
    this.material = new THREE.ShaderMaterial({uniforms: this.uniforms,vertexShader: a.vertexShader,fragmentShader: a.fragmentShader});
    this.renderToScreen = !1;
    this.needsSwap = this.enabled = !0;
    this.clear = !1
};
THREE.ShaderPass.prototype = {render: function(a, b, c) {
        this.uniforms[this.textureID] && (this.uniforms[this.textureID].value = c);
        THREE.EffectComposer.quad.material = this.material;
        this.renderToScreen ? a.render(THREE.EffectComposer.scene, THREE.EffectComposer.camera) : a.render(THREE.EffectComposer.scene, THREE.EffectComposer.camera, b, this.clear)
    }};
THREE.MaskPass = function(a, b) {
    this.scene = a;
    this.camera = b;
    this.clear = this.enabled = !0;
    this.inverse = this.needsSwap = !1
};
THREE.MaskPass.prototype = {render: function(a, b, c) {
        var d = a.context;
        d.colorMask(!1, !1, !1, !1);
        d.depthMask(!1);
        var e, f;
        this.inverse ? (e = 0, f = 1) : (e = 1, f = 0);
        d.enable(d.STENCIL_TEST);
        d.stencilOp(d.REPLACE, d.REPLACE, d.REPLACE);
        d.stencilFunc(d.ALWAYS, e, 4294967295);
        d.clearStencil(f);
        a.render(this.scene, this.camera, c, this.clear);
        a.render(this.scene, this.camera, b, this.clear);
        d.colorMask(!0, !0, !0, !0);
        d.depthMask(!0);
        d.stencilFunc(d.EQUAL, 1, 4294967295);
        d.stencilOp(d.KEEP, d.KEEP, d.KEEP)
    }};
THREE.ClearMaskPass = function() {
    this.enabled = !0
};
THREE.ClearMaskPass.prototype = {render: function(a) {
        a = a.context;
        a.disable(a.STENCIL_TEST)
    }};
THREE.RenderPass = function(a, b, c, d, e) {
    this.scene = a;
    this.camera = b;
    this.overrideMaterial = c;
    this.clearColor = d;
    this.clearAlpha = void 0 !== e ? e : 1;
    this.oldClearColor = new THREE.Color;
    this.oldClearAlpha = 1;
    this.clear = this.enabled = !0;
    this.needsSwap = !1
};
THREE.RenderPass.prototype = {render: function(a, b, c) {
        this.scene.overrideMaterial = this.overrideMaterial;
        this.clearColor && (this.oldClearColor.copy(a.getClearColor()), this.oldClearAlpha = a.getClearAlpha(), a.setClearColor(this.clearColor, this.clearAlpha));
        a.render(this.scene, this.camera, c, this.clear);
        this.clearColor && a.setClearColor(this.oldClearColor, this.oldClearAlpha);
        this.scene.overrideMaterial = null
    }};
THREE.BloomPass = function(a, b, c, d) {
    var a = void 0 !== a ? a : 1, b = void 0 !== b ? b : 25, c = void 0 !== c ? c : 4, d = void 0 !== d ? d : 256, e = {minFilter: THREE.LinearFilter,magFilter: THREE.LinearFilter,format: THREE.RGBFormat};
    this.renderTargetX = new THREE.WebGLRenderTarget(d, d, e);
    this.renderTargetY = new THREE.WebGLRenderTarget(d, d, e);
    d = THREE.ShaderExtras.screen;
    this.screenUniforms = THREE.UniformsUtils.clone(d.uniforms);
    this.screenUniforms.opacity.value = a;
    this.materialScreen = new THREE.ShaderMaterial({uniforms: this.screenUniforms,vertexShader: d.vertexShader,
        fragmentShader: d.fragmentShader,blending: THREE.AdditiveBlending,transparent: !0});
    a = THREE.ShaderExtras.convolution;
    this.convolutionUniforms = THREE.UniformsUtils.clone(a.uniforms);
    this.convolutionUniforms.uImageIncrement.value = THREE.BloomPass.blurx;
    this.convolutionUniforms.cKernel.value = THREE.ShaderExtras.buildKernel(c);
    this.materialConvolution = new THREE.ShaderMaterial({uniforms: this.convolutionUniforms,vertexShader: "#define KERNEL_SIZE " + b + ".0\n" + a.vertexShader,fragmentShader: "#define KERNEL_SIZE " + 
        b + "\n" + a.fragmentShader});
    this.enabled = !0;
    this.clear = this.needsSwap = !1
};
THREE.BloomPass.prototype = {render: function(a, b, c, d, e) {
        e && a.context.disable(a.context.STENCIL_TEST);
        THREE.EffectComposer.quad.material = this.materialConvolution;
        this.convolutionUniforms.tDiffuse.value = c;
        this.convolutionUniforms.uImageIncrement.value = THREE.BloomPass.blurX;
        a.render(THREE.EffectComposer.scene, THREE.EffectComposer.camera, this.renderTargetX, !0);
        this.convolutionUniforms.tDiffuse.value = this.renderTargetX;
        this.convolutionUniforms.uImageIncrement.value = THREE.BloomPass.blurY;
        a.render(THREE.EffectComposer.scene, 
        THREE.EffectComposer.camera, this.renderTargetY, !0);
        THREE.EffectComposer.quad.material = this.materialScreen;
        this.screenUniforms.tDiffuse.value = this.renderTargetY;
        e && a.context.enable(a.context.STENCIL_TEST);
        a.render(THREE.EffectComposer.scene, THREE.EffectComposer.camera, c, this.clear)
    }};
THREE.BloomPass.blurX = new THREE.Vector2(0.001953125, 0);
THREE.BloomPass.blurY = new THREE.Vector2(0, 0.001953125);
/**
 * @author alteredq / http://alteredqualia.com/
 * @authod mrdoob / http://mrdoob.com/
 * @authod arodic / http://aleksandarrodic.com/
 */

THREE.StereoEffect = function ( renderer ) {

  // API

  this.separation = 3;

  // internals

  var _width, _height;

  var _position = new THREE.Vector3();
  var _quaternion = new THREE.Quaternion();
  var _scale = new THREE.Vector3();

  var _cameraL = new THREE.PerspectiveCamera();
  var _cameraR = new THREE.PerspectiveCamera();

  // initialization

  renderer.autoClear = false;

  this.setSize = function ( width, height ) {

    _width = width / 2;
    _height = height;

    renderer.setSize( width, height );

  };

  this.render = function ( scene, camera ) {

    scene.updateMatrixWorld();

    if ( camera.parent === undefined ) camera.updateMatrixWorld();
  
    camera.matrixWorld.decompose( _position, _quaternion, _scale );

    // left

    _cameraL.fov = camera.fov;
    _cameraL.aspect = 0.5 * camera.aspect;
    _cameraL.near = camera.near;
    _cameraL.far = camera.far;
    _cameraL.updateProjectionMatrix();

    _cameraL.position.copy( _position );
    _cameraL.quaternion.copy( _quaternion );
    _cameraL.translateX( - this.separation );
    _cameraL.updateMatrixWorld();

    // right

    _cameraR.near = camera.near;
    _cameraR.far = camera.far;
    _cameraR.projectionMatrix = _cameraL.projectionMatrix;

    _cameraR.position.copy( _position );
    _cameraR.quaternion.copy( _quaternion );
    _cameraR.translateX( this.separation );
    _cameraR.updateMatrixWorld();

    //

    renderer.setViewport( 0, 0, _width * 2, _height );
    renderer.clear();

    renderer.setViewport( 0, 0, _width, _height );
    renderer.render( scene, _cameraL );

    renderer.setViewport( _width, 0, _width, _height );
    renderer.render( scene, _cameraR );

  };

};

GroundGeometry = function(a, b, c, d) {
    THREE.Geometry.call(this);
    for (var e = a / 2, f = b / 2, c = c || 1, d = d || 1, g = c + 1, h = d + 1, i = a / c, j = b / d, l = new THREE.Vector3(0, 0, 1), a = 0; a < h; a++)
        for (b = 0; b < g; b++)
            this.vertices.push(new THREE.Vector3(b * i - e, 0, a * j - f));
    for (a = 0; a < d; a++)
        for (b = 0; b < c; b++)
            e = new THREE.Face4(b + g * a, b + g * (a + 1), b + 1 + g * (a + 1), b + 1 + g * a), e.normal.copy(l), e.vertexNormals.push(l.clone(), l.clone(), l.clone(), l.clone()), this.faces.push(e), this.faceVertexUvs[0].push([new THREE.UV(b / c, a / d), new THREE.UV(b / c, (a + 1) / d), new THREE.UV((b + 
                1) / c, (a + 1) / d), new THREE.UV((b + 1) / c, a / d)]);
    this.computeCentroids()
};
GroundGeometry.prototype = new THREE.Geometry;
GroundGeometry.prototype.constructor = GroundGeometry;
GLHud = function(a, b, c, d, e) {
    this.renderer = a;
    this.w = b;
    this.h = c;
    this.flipx = d;
    this.flipy = e;
    this.renderTarget = null;
    this.defaultMaterial = new THREE.MeshBasicMaterial({color: 16777215});
    this.plane = new THREE.PlaneGeometry(1, 1);
    this.quad = new THREE.Mesh(this.plane, this.defaultMaterial);
    this.quad.doubleSided = !0;
    this.camera = new THREE.OrthographicCamera(0, b, 0, -c, -1E3, 1E3);
    this.scene = new THREE.Scene;
    this.scene.add(this.quad);
    this.scene.add(this.camera)
};
GLHud.prototype.resize = function(a, b) {
    this.w = a;
    this.h = b;
    this.camera.projectionMatrix = THREE.Matrix4.makeOrtho(0, a, 0, -b, -1E3, 1E3)
};
GLHud.prototype.render = function(a, b, c, d, e, f) {
    this.setQuad(b, c, d, e, f);
    this.quad.material = this.defaultMaterial;
    this.defaultMaterial.map = a;
    this.renderer.render(this.scene, this.camera, this.renderTarget, !1)
};
GLHud.prototype.renderMaterial = function(a, b, c, d, e, f) {
    this.setQuad(b, c, d, e, f);
    this.quad.material = a;
    this.renderer.render(this.scene, this.camera, this.renderTarget, !1)
};
GLHud.prototype.setQuad = function(a, b, c, d, e) {
    xt = a + 0.5 * c;
    yt = -b - 0.5 * d;
    roty = rotx = 0;
    !0 == this.flipx && (xt = this.w - xt, roty = deg2rad(180));
    !0 == this.flipy && (yt = -this.h - yt, rotx = deg2rad(180));
    this.quad.rotation.set(rotx, roty, e);
    this.quad.position.set(xt, yt, 1);
    this.quad.scale.set(c, d, 1)
};
GLHud.prototype.setRenderTarget = function(a) {
    this.renderTarget = a
};
function RandomF(a, b) {
    return Math.random() * (b - a) + a
}
function RandomI(a, b) {
    return Math.round(Math.random() * (b - a) + a)
}
function SinR(a, b, c) {
    return (0.5 * Math.sin(a) + 0.5) * (c - b) + b
}
function Lerp(a, b, c) {
    return (c - b) * a + b
}
function Time01(a, b, c) {
    return 0 < c ? a > b ? (dt = a - b, dt > c && (dt = c), dt / c) : 0 : 1
}
function deg2rad(a) {
    return Math.PI * a / 180
}
function rad2deg(a) {
    return 180 * a / Math.PI
}
function vector2rotate(a, b) {
    var c = {x: 0,y: 0}, d = Math.cos(b), e = Math.sin(b);
    c.x = a.x * d - a.y * e;
    c.y = a.x * e + a.y * d;
    return c
}
;
var FOG_DENSITY = 0.03, MAX_ZOMBIES_INI = 2, MAX_ZOMBIES_TOTAL = 30, MAX_ZOMBIES_RATIO = 1 / 7, MAX_BATS = 6, MAP_SIZE = 172, MAP_VIEW_DIST = 65, MAP_GROUND_SCALE = 2, BAT_ADD_DIST = 70, ZOMBIE_SPEED = 2.5, ZOMBIE_LOOK_SPEED = 1.5, ZOMBIE_ANIM_LEN = 1.4, ZOMBIE_SIZE = 3, ZOMBIE_MESH_SCALE = 0.45, ZOMBIE_TIME_ADD = 1, ZOMBIE_ADD_DIST = 50, ZOMBIE_CLOSE_DIST = 70, ZOMBIE_TIME_TARGET = 1, PLAYER_LIFE = 3, PLAYER_SPEED = 5, PLAYER_LOOK_SPEED = 0.09, PLAYER_SLOPE_STEPS = 10, PLAYER_BLOOD_LEN = 0.8, PLAYER_HIT_LEN = 1, PLAYER_DIE_LEN = 1.5, WALL_WIDTH = 1.35 * MAP_SIZE, WALL_HEIGHT = 
1.35 * MAP_SIZE / 8.4, WALL_DIST_TREE1 = 5, WALL_DIST_TREE2 = 16, WALL_DIST = 25, SND_TIME_BASS = 75, SND_TIME_CHORD = 25, SND_TIME_ZOMBIE_F = 9, SND_TIME_ZOMBIE_C = 5, SND_DIST_ZOMBIE_F = 35, SND_DIST_ZOMBIE_C = 15;
function PixelMap(a) {
    this.map = a;
    this.width = a.width;
    this.height = a.height;
    this.getValue = function(a, c) {
        return this.map.data[4 * (this.map.width * c + a)]
    };
    this.getColor = function(a, c) {
        var d = 4 * (this.map.width * c + a);
        return {r: this.map.data[d],g: this.map.data[d + 1],b: this.map.data[d + 2],a: this.map.data[d + 3]}
    }
}
function LoadImageDataPixelMap(a, b) {
    var c = new Image;
    c.onload = function() {
        var a = document.createElement("canvas");
        a.width = c.width;
        a.height = c.height;
        var e = a.getContext("2d");
        e.drawImage(c, 0, 0);
        a = e.getImageData(0, 0, a.width, a.height);
        b && b(new PixelMap(a))
    };
    c.src = a
}
Resources = function() {
};
Resources.prototype.load = function(a) {
    var b = this, c = 0, d = new THREE.JSONLoader;
    c++;
    d.load("data/graveyard.js", function(c) {
        b.graveyard = c;
        a()
    });
    c++;
    d.load("data/ground.js", function(c) {
        b.ground = c;
        a()
    });
    c++;
    d.load("data/terrain.js", function(c) {
        b.terrain = c;
        a()
    });
    c++;
    d.load("data/zombie.js", function(c) {
        b.zombie = c;
        a()
    });
    c++;
    this.mapzombie = THREE.ImageUtils.loadTexture("data/zombie.png", null, a);
    c++;
    d.load("data/bat.js", function(c) {
        b.bat = c;
        a()
    });
    c++;
    this.mapbat = THREE.ImageUtils.loadTexture("data/black.png", null, 
    a);
    this.trees = [];
    c += 8;
    d.load("data/SingleTree01.js", function(c) {
        b.trees[0] = c;
        a()
    });
    d.load("data/SingleTree02.js", function(c) {
        b.trees[1] = c;
        a()
    });
    d.load("data/SingleTree03.js", function(c) {
        b.trees[2] = c;
        a()
    });
    d.load("data/SingleTree04.js", function(c) {
        b.trees[3] = c;
        a()
    });
    d.load("data/Wall_tree01.js", function(c) {
        b.trees[4] = c;
        a()
    });
    d.load("data/Wall_tree02.js", function(c) {
        b.trees[5] = c;
        a()
    });
    d.load("data/Wall_tree03.js", function(c) {
        b.trees[6] = c;
        a()
    });
    d.load("data/Wall_tree04.js", function(c) {
        b.trees[7] = c;
        a()
    });
    c++;
    LoadImageDataPixelMap("data/map.png", function(c) {
        b.pixelmap = c;
        a()
    });
    c++;
    LoadImageDataPixelMap("data/pathmap.png", function(c) {
        b.pathmap = c;
        a()
    });
    c++;
    this.maptexture = THREE.ImageUtils.loadTexture("data/map.png", null, a);
    c++;
    this.particle = THREE.ImageUtils.loadTexture("data/particle.png", null, a);
    c++;
    this.mapnoise = THREE.ImageUtils.loadTexture("data/noise.jpg", null, a);
    c++;
    this.texblack = THREE.ImageUtils.loadTexture("data/black.png", null, a);
    c++;
    this.vignette = THREE.ImageUtils.loadTexture("data/reunion_vignette.png", 
    null, a);
    c++;
    this.blood = THREE.ImageUtils.loadTexture("data/blood.png", null, a);
    this.wall = new THREE.PlaneGeometry(WALL_WIDTH, WALL_HEIGHT, 1, 1);
    c++;
    this.mapwalls = THREE.ImageUtils.loadTexture("data/walls.png", null, a);
    d = THREE.ShaderExtras.noisefog;
    this.materialScene = new THREE.ShaderMaterial({uniforms: THREE.UniformsUtils.clone(d.uniforms),vertexShader: d.vertexShader,fragmentShader: d.fragmentShader});
    this.materialScene.uniforms.tNoise.value = this.mapnoise;
    this.materialGround = this.materialScene;
    d = THREE.ShaderExtras.noisefogmorph;
    this.materialZombie = new THREE.ShaderMaterial({uniforms: THREE.UniformsUtils.clone(d.uniforms),vertexShader: d.vertexShader,fragmentShader: d.fragmentShader,morphTargets: !0});
    this.materialZombie.uniforms.tDiffuse.value = this.mapzombie;
    this.materialZombie.uniforms.tNoise.value = this.mapnoise;
    d = THREE.ShaderExtras.noisefogmorph;
    this.materialBat = new THREE.ShaderMaterial({uniforms: THREE.UniformsUtils.clone(d.uniforms),vertexShader: d.vertexShader,fragmentShader: d.fragmentShader,morphTargets: !0});
    this.materialBat.uniforms.tDiffuse.value = 
    this.mapbat;
    this.materialBat.uniforms.tNoise.value = this.mapnoise;
    d = THREE.ShaderExtras.noisefogtex;
    this.materialWalls = new THREE.ShaderMaterial({uniforms: THREE.UniformsUtils.clone(d.uniforms),vertexShader: d.vertexShader,fragmentShader: d.fragmentShader,transparent: !0});
    this.materialWalls.uniforms.tDiffuse.value = this.mapwalls;
    this.materialWalls.uniforms.tNoise.value = this.mapnoise;
    c++;
    this.music = SoundLoad("data/audio/game_music", !0, a);
    c++;
    this.sndWind = SoundLoad("data/audio/wind_loop", !0, a);
    c += 2;
    this.sndBass = 
    [];
    this.sndBass.push(SoundLoad("data/audio/bass_note_1", !1, a));
    this.sndBass.push(SoundLoad("data/audio/bass_note_2", !1, a));
    c += 5;
    this.sndChord = [];
    this.sndChord.push(SoundLoad("data/audio/chord_1", !1, a));
    this.sndChord.push(SoundLoad("data/audio/chord_2", !1, a));
    this.sndChord.push(SoundLoad("data/audio/chord_3", !1, a));
    this.sndChord.push(SoundLoad("data/audio/chord_4", !1, a));
    this.sndChord.push(SoundLoad("data/audio/chord_5", !1, a));
    c++;
    this.sndSteps = SoundLoad("data/audio/footsteps", !1, a);
    c += 9;
    this.sndZombieF = 
    [];
    for (d = 1; 9 >= d; d++)
        this.sndZombieF.push(SoundLoad("data/audio/far_" + d, !1, a));
    c += 11;
    this.sndZombieC = [];
    for (d = 1; 11 >= d; d++)
        this.sndZombieC.push(SoundLoad("data/audio/close_" + d, !1, a));
    c += 8;
    this.sndZombieAttack = [];
    for (d = 1; 8 >= d; d++)
        this.sndZombieAttack.push(SoundLoad("data/audio/attack_" + d, !1, a));
    c++;
    this.sndDie = SoundLoad("data/audio/kill_sound", !1, a);
    return c
};
Resources.prototype.init = function() {
    this.mapnoise.wrapS = THREE.RepeatWrapping;
    this.mapnoise.wrapT = THREE.RepeatWrapping;
    this.maptexture.minFilter = THREE.NearestFilter;
    this.maptexture.magFilter = THREE.NearestFilter
};
MeshMorph = function(a, b) {
    this.mesh = a;
    this.duration = b;
    this.keyframes = this.mesh.morphTargetInfluences.length;
    this.interpolation = this.duration / this.keyframes;
    this.currentKeyframe = this.lastKeyframe = 0
};
MeshMorph.prototype.update = function(a) {
    var a = a % this.duration, b = Math.floor(a / this.interpolation);
    b != this.currentKeyframe && (this.mesh.morphTargetInfluences[this.lastKeyframe] = 0, this.mesh.morphTargetInfluences[this.currentKeyframe] = 1, this.mesh.morphTargetInfluences[b] = 0, this.lastKeyframe = this.currentKeyframe, this.currentKeyframe = b);
    this.mesh.morphTargetInfluences[b] = a % this.interpolation / this.interpolation;
    this.mesh.morphTargetInfluences[this.lastKeyframe] = 1 - this.mesh.morphTargetInfluences[b]
};
var SoundLoad = function(a, b, c) {
    var a = document.createElement("audio").canPlayType("audio/ogg") ? a + ".ogg" : a + ".mp3", d = new Audio(a);
    d.loop = b;
    d.addEventListener("loadeddata", function() {
        c()
    }, !1);
    d.addEventListener("ended", function() {
        d.loop && (d.currentTime = 0, d.play())
    }, !1);
    d.soundPlay = function(a) {
        a && (d.currentTime = 0);
        d.play()
    };
    d.soundPause = function() {
        d.pause()
    };
    d.soundRestart = function() {
        d.currentTime = 0
    };
    d.soundStop = function() {
        d.pause();
        d.currentTime = 0
    };
    return d
};
PathFollow = function(a, b, c, d) {
    this.path = a;
    this.pos = b;
    this.speed = c;
    this.transform = d;
    this.dir = new THREE.Vector2(0, 0);
    this.setTarget(1)
};
PathFollow.prototype.update = function(a, b) {
    for (var c = b * this.speed; 0 < c && !this.finished(); ) {
        var d = this.pos.distanceTo(this.next);
        c < d ? (this.pos.x += this.dir.x * c, this.pos.y += this.dir.y * c, c = 0) : (c -= d, this.pos.x = this.next.x, this.pos.y = this.next.y, this.setTarget(this.target + 1))
    }
};
PathFollow.prototype.setTarget = function(a) {
    this.target = a;
    this.finished() || (this.next = this.transform(this.path[this.target]), this.dir.x = this.next.x - this.pos.x, this.dir.y = this.next.y - this.pos.y, this.dir.normalize(), this.angle = Math.atan2(-this.dir.y, this.dir.x))
};
PathFollow.prototype.finished = function() {
    return this.target >= this.path.length
};
var GGame;
Game = function(a) {
    GGame = this;
    this.settings = a;
    this.started = this.loaded = !1;
    this.sound = !0;
    this.w = a.w;
    this.h = a.h;
    this.scene = new THREE.Scene;
    this.scene.fog = new THREE.FogExp2(16777215, FOG_DENSITY);
    this.renderer = new THREE.WebGLRenderer({scene: this.scene});
    this.renderer.setSize(this.w, this.h);
    this.renderer.setClearColorHex(16777215, 255);
    a.container.appendChild(this.renderer.domElement);
    this.camera = new THREE.PerspectiveCamera(50, this.w / this.h, 0.1, 1E4);
    this.scene.add(this.camera);
    this.windowResize = THREEx.WindowResize(this.renderer, 
    this.camera);
    this.hud = new GLHud(this.renderer, this.w, this.h, !1, !1);
    var b = 0, c = 0;
    this.resources = new Resources;
    this.onload = function() {
        a.onprogress((c - b + 1) / c);
        b--;
        b || (this.init(), a.onload())
    };
    c = b += this.resources.load(function() {
        GGame.onload()
    })
};
Game.prototype.init = function() {
    this.resources.init();
    this.map = new Map(this.scene, this.camera);
    this.player = new Player(this.camera);
    this.zombies = [];
    this.bats = [];
    this.loaded = !0
};
Game.prototype.start = function() {
    for (var a = 0; a < this.zombies.length; a++)
        this.zombies[a].die();
    this.zombies = [];
    for (a = 0; a < this.bats.length; a++)
        this.bats[a].die();
    this.bats = [];
    for (a = 0; a < MAX_BATS; a++)
        this.bats[a] = new Bat(this.scene, this.resources.bat, this.resources.materialBat), this.bats[a].random(this.player.position, BAT_ADD_DIST);
    this.maxZombies = MAX_ZOMBIES_INI;
    this.score = this.delta = this.time = 0;
    this.fadeStart = 1;
    this.paused = !1;
    this.player.start();
    this.timeSndBass = RandomF(0.2 * SND_TIME_BASS, 0.4 * SND_TIME_BASS);
    this.timeSndChord = RandomF(0.2 * SND_TIME_CHORD, 0.4 * SND_TIME_CHORD);
    this.timeSndZombieC = this.timeSndZombieF = 0;
    this.sndZombieC = this.sndZombieF = this.sndChord = this.sndBass = null;
    this.started = this.startMusic = !0
};
Game.prototype.stop = function() {
    this.stopSound(!0, !0, !0);
    this.started = !1
};
Game.prototype.update = function(a, b) {
    if (this.loaded && this.started && !this.paused) {
        this.time += b;
        this.delta = b;
        this.player.update(this.time, this.delta);
        this.map.update(this.time, this.delta);
        this.maxZombies += MAX_ZOMBIES_RATIO * this.delta;
        this.maxZombies > MAX_ZOMBIES_TOTAL && (this.maxZombies = MAX_ZOMBIES_TOTAL);
        this.zombies.length < Math.floor(this.maxZombies) && this.addZombie(ZOMBIE_ADD_DIST);
        for (var c = MAP_SIZE, d = 0; d < this.zombies.length; d)
            if (this.zombies[d].update(this.time, this.delta), this.zombies[d].canDie(this.player.position))
                this.zombies[d].die(), 
                this.zombies.splice(d, 1);
            else {
                var e = this.zombies[d].dist(this.player.position);
                e < c && (c = e);
                d++
            }
        for (d = 0; d < this.bats.length; d++)
            this.bats[d].update(this.time, this.delta), this.bats[d].gone(this.player.position) && this.bats[d].random(this.player.position, BAT_ADD_DIST);
        if (!this.player.died && (this.score += b, this.time > this.timeSndBass && (this.timeSndBass = this.time + RandomF(0.8 * SND_TIME_BASS, 1.2 * SND_TIME_BASS), RandomI(0, GGame.resources.sndBass.length - 1), this.sndBass = GGame.resources.sndBass[RandomI(0, GGame.resources.sndBass.length - 
        1)], this.sound && this.sndBass.soundPlay(!0)), this.time > this.timeSndChord && (d = RandomI(0, GGame.resources.sndChord.length - 1), this.timeSndChord = this.time + RandomF(0.8 * SND_TIME_CHORD, 1.2 * SND_TIME_CHORD) + (0 == d ? 10 : 0), this.sndChord = GGame.resources.sndChord[d], this.sound && this.sndChord.soundPlay(!0)), c < SND_DIST_ZOMBIE_F && c > SND_DIST_ZOMBIE_C && this.time > this.timeSndZombieF && (this.timeSndZombieF = this.time + RandomF(0.8 * SND_TIME_ZOMBIE_F, 1.2 * SND_TIME_ZOMBIE_F), this.sndZombieF = GGame.resources.sndZombieF[RandomI(0, 
        GGame.resources.sndZombieF.length - 1)], this.sound && this.sndZombieF.play()), c < SND_DIST_ZOMBIE_C && c > ZOMBIE_SIZE && this.time > this.timeSndZombieC))
            this.timeSndZombieC = this.time + RandomF(0.8 * SND_TIME_ZOMBIE_C, 1.2 * SND_TIME_ZOMBIE_C), this.sndZombieC = GGame.resources.sndZombieC[RandomI(0, GGame.resources.sndZombieC.length - 1)], this.sound && this.sndZombieC.play();
        this.renderer.autoClear = !0;
        this.renderer.render(this.scene, this.camera);
        this.renderer.autoClear = !1;
        this.player.postDraw();
        this.hud.render(this.resources.vignette, 
        0, 0, this.w, this.h, 0);
        this.fadeStart -= 1 / 60;
        0 < this.fadeStart && (this.hud.defaultMaterial.opacity = this.fadeStart, this.hud.render(this.resources.texblack, 0, 0, this.w, this.h, 0), this.hud.defaultMaterial.opacity = 1);
        this.startMusic && (this.sound && this.startSound(!0, !0, !0), this.startMusic = !1)
    }
};
Game.prototype.addZombie = function(a) {
    var b = new Zombie(this.scene, this.resources.zombie, this.resources.materialZombie);
    b.random(this.player.position, a) && (this.scene.add(b.mesh), this.zombies.push(b))
};
Game.prototype.zombieCollision = function(a, b) {
    var c = !0;
    new THREE.Vector2(a.x, a.y);
    for (var d = 0; d < this.zombies.length; d++) {
        var e = this.zombies[d];
        if (e != b) {
            if (c && e.isHit(a))
                return !0
        } else
            c = !1
    }
    return !1
};
Game.prototype.pause = function() {
    this.paused = !this.paused;
    this.sound && (this.paused ? this.stopSound(!1, !0, !0) : this.startSound(!0, !0, !1));
    this.player.pause(this.paused)
};
Game.prototype.resume = function() {
    this.paused && this.pause()
};
Game.prototype.enableSound = function(a) {
    this.sound = a;
    this.started && (a ? this.startSound(!0, !this.paused, !this.paused) : this.stopSound(!0, !0, !0))
};
Game.prototype.startSound = function(a, b, c) {
    a && (this.resources.music.soundPlay(c), this.resources.sndWind.soundPlay(c), this.sndBass && this.sndBass.soundPlay(), this.sndChord && this.sndChord.soundPlay());
    b && (this.sndZombieF && this.sndZombieF.soundPlay(), this.sndZombieC && this.sndZombieC.soundPlay())
};
Game.prototype.stopSound = function(a, b, c) {
    a && (this.resources.music.soundPause(), this.resources.sndWind.soundPause(), this.sndBass && this.sndBass.soundPause(), this.sndChord && this.sndChord.soundPause());
    b && (this.sndZombieF && this.sndZombieF.soundPause(), this.sndZombieC && this.sndZombieC.soundPause());
    c && this.player.stopSound()
};
Game.prototype.die = function() {
    this.settings.ondie && setTimeout(function() {
        GGame.settings.ondie()
    }, 1E3 * (PLAYER_DIE_LEN + 0.5))
};
Game.prototype.getScore = function() {
    return this.score
};
Player = function(a) {
    this.maxlife = PLAYER_LIFE;
    this.position = new THREE.Vector2(0, 0);
    this.camera = a
};
Player.prototype.start = function() {
    this.position.x = 0;
    this.position.y = 4;
    this.camera.position.x = this.position.x;
    this.camera.position.z = this.position.y;
    this.camera.position.y = 3;
    this.camera.up.x = 0;
    this.camera.up.y = 1;
    this.camera.up.z = 0;
    this.controls = new THREE.FirstPersonControls(this.camera);
    this.controls.movementSpeed = PLAYER_SPEED;
    this.controls.lookSpeed = PLAYER_LOOK_SPEED;
    this.controls.autoForward = !1;
    this.controls.constrainVertical = !0;
    this.controls.verticalMin = 1;
    this.controls.verticalMax = 2;
    this.controls.lat = 
    0;
    this.controls.lon = -90;
    this.timeDie = this.timeHit = this.timeFoot = this.timeWalk = 0;
    this.sndDie = this.sndHit = null;
    this.life = this.maxlife;
    this.died = !1;
    this.stopSound()
};
Player.prototype.update = function(a, b) {
    if (this.died) {
        var c = Time01(GGame.time, this.timeDie, 2.5);
        this.camera.position.y = 3 - 2.9 * c;
        var d = new THREE.Vector3(0, 0, 0);
        d.x = this.camera.position.x + 100 * Math.sin(this.controls.phi) * Math.cos(this.controls.theta);
        d.y = this.camera.position.y + 100 * Math.cos(this.controls.phi);
        d.z = this.camera.position.z + 100 * Math.sin(this.controls.phi) * Math.sin(this.controls.theta);
        d.y = Lerp(c, d.y, 150);
        d.x = Lerp(c, d.x, -d.x);
        this.camera.lookAt(d);
        this.camera.up.y = 1 - c;
        this.camera.up.x = c
    } else
        this.controls.update(b), 
        this.controls.moveForward || this.controls.moveBackward ? (GGame.sound && GGame.resources.sndSteps.soundPlay(), this.timeWalk += b, c = this.nextPos(this.camera.position.x, this.camera.position.z), this.position.x = c.x, this.position.y = c.y, this.camera.position.x = this.position.x, this.camera.position.z = this.position.y) : GGame.resources.sndSteps.pause(), this.camera.position.y = 3 + SinR(8 * this.timeWalk, 0, -0.3), GGame.zombieCollision(this.position) && this.hit()
};
Player.prototype.postDraw = function() {
    var a = 1 - Time01(GGame.time, this.timeHit, PLAYER_BLOOD_LEN);
    0 < a && (GGame.hud.defaultMaterial.opacity = 0.5 * a, GGame.hud.render(GGame.resources.blood, 0, 0, GGame.w, GGame.h, 0), GGame.hud.defaultMaterial.opacity = 1);
    this.died && (a = Time01(GGame.time, this.timeDie, PLAYER_DIE_LEN), GGame.hud.defaultMaterial.opacity = 0.5 * a, GGame.hud.render(GGame.resources.blood, 0, 0, GGame.w, GGame.h, 0), GGame.hud.defaultMaterial.opacity = 1)
};
Player.prototype.dirTarget = function() {
    return this.controls.target
};
Player.prototype.nextPos = function(a, b) {
    for (var c = 2 * Math.PI / PLAYER_SLOPE_STEPS, d = new THREE.Vector2(a - this.position.x, b - this.position.y), e, f, g = 0; g < PLAYER_SLOPE_STEPS; g++) {
        var h = (PLAYER_SLOPE_STEPS - g) / PLAYER_SLOPE_STEPS;
        f = g * c;
        e = vector2rotate(d, -f);
        e.x = this.position.x + e.x * h;
        e.y = this.position.y + e.y * h;
        if (GGame.map.walkable(e.x, e.y) && !GGame.zombieCollision(e))
            return e;
        e = vector2rotate(d, +f);
        e.x = this.position.x + e.x * h;
        e.y = this.position.y + e.y * h;
        if (GGame.map.walkable(e.x, e.y) && !GGame.zombieCollision(e))
            return e
    }
    return this.position
};
Player.prototype.hit = function() {
    GGame.time - this.timeHit > PLAYER_HIT_LEN && (this.timeHit = GGame.time, this.life--, this.life ? (this.sndHit = GGame.resources.sndZombieAttack[RandomI(0, GGame.resources.sndZombieAttack.length - 1)], GGame.sound && this.sndHit.soundPlay(!0)) : this.die())
};
Player.prototype.die = function() {
    this.died = !0;
    this.timeDie = GGame.time;
    this.sndDie = GGame.resources.sndDie;
    GGame.sound && this.sndDie.soundPlay(!0);
    GGame.die()
};
Player.prototype.pause = function(a) {
    a ? (this.sndHit && this.sndHit.soundPause(), this.sndDie && this.sndDie.soundPause()) : (this.sndHit && this.sndHit.soundPlay(!1), this.sndDie && this.sndDie.soundPlay(!1))
};
Player.prototype.stopSound = function() {
    this.sndHit && this.sndHit.soundPause();
    this.sndDie && this.sndDie.soundPause();
    GGame.resources.sndSteps.soundPause()
};
Zombie = function(a, b, c) {
    this.scene = a;
    this.radius = 1;
    this.speed = ZOMBIE_SPEED;
    this.position = new THREE.Vector2(0, 0);
    this.mesh = new THREE.Mesh(b, c);
    this.mesh.scale.x *= ZOMBIE_MESH_SCALE;
    this.mesh.scale.y *= ZOMBIE_MESH_SCALE;
    this.mesh.scale.z *= ZOMBIE_MESH_SCALE;
    this.meshmorph = new MeshMorph(this.mesh, ZOMBIE_ANIM_LEN);
    this.timeAnim = RandomF(0, 10);
    this.time = this.timeClose = this.timePath = 0
};
Zombie.prototype.random = function(a, b) {
    for (var c = Math.PI, d = Math.atan2(a.y - this.position.y, a.x - this.position.x) + RandomF(-c, c), e = 0; e < c; e += c / 100) {
        var f = d + e, g = vector2rotate({x: b,y: 0}, f);
        this.position.x = a.x - g.x;
        this.position.y = a.y - g.y;
        this.angle = -f;
        if (GGame.map.pathWalkable(this.position) && this.goTo(a))
            return !0
    }
    return !1
};
Zombie.prototype.update = function(a, b) {
    this.time = a;
    this.meshmorph.update(this.time + this.timeAnim, b);
    this.isClose(GGame.player.position) ? (this.timeClose = this.time, this.pathFollow && (GGame.zombieCollision(this.position, this) ? this.time - this.timePath > ZOMBIE_TIME_TARGET && this.goTo(GGame.player.position) : (this.pathFollow.update(a, b), this.pathFollow.finished() ? this.goTo(GGame.player.position) : (this.updateAngle(this.pathFollow.angle, b), this.position.x = this.pathFollow.pos.x, this.position.y = this.pathFollow.pos.y, 
    this.time - this.timePath > ZOMBIE_TIME_TARGET && this.goTo(GGame.player.position, !0)))), this.isHit(GGame.player.position) && (this.angle = Math.atan2(GGame.player.position.y - this.position.y, GGame.player.position.x - this.position.x)), this.mesh.position.x = this.position.x, this.mesh.position.z = this.position.y, this.mesh.rotation.y = this.angle, this.mesh.visible = !0) : this.mesh.visible = !1
};
Zombie.prototype.goTo = function(a) {
    this.timePath = GGame.time;
    return GGame.map.createPath(this.position, a, this.speed) ? (this.pathFollow = GGame.map.createPath(this.position, a, this.speed), !0) : !1
};
Zombie.prototype.updateAngle = function(a, b) {
    for (var c = 2 * Math.PI; a < c; )
        a += c;
    for (; a - this.angle > Math.PI; )
        this.angle += c;
    for (; this.angle - a > Math.PI; )
        this.angle -= c;
    this.angle += (0 > a - this.angle ? -ZOMBIE_LOOK_SPEED : ZOMBIE_LOOK_SPEED) * b;
    Math.abs(this.angle - a) < Math.PI / 20 && (this.angle = a)
};
Zombie.prototype.dist = function(a) {
    return this.position.distanceTo(a)
};
Zombie.prototype.isClose = function(a) {
    return this.dist(a) < ZOMBIE_CLOSE_DIST
};
Zombie.prototype.isHit = function(a) {
    return this.dist(a) < 1.5 * ZOMBIE_SIZE
};
Zombie.prototype.canDie = function() {
    return 10 < GGame.time - this.timeClose
};
Zombie.prototype.die = function() {
    this.scene.remove(this.mesh)
};
Bat = function(a, b, c) {
    this.scene = a;
    this.radius = 1;
    this.speed = RandomF(7, 10);
    this.y = RandomF(8, 10);
    this.position = new THREE.Vector2(0, 0);
    this.dir = new THREE.Vector2(0, 0);
    this.mesh = new THREE.Mesh(b, c);
    this.meshmorph = new MeshMorph(this.mesh, 0.4);
    this.time = RandomF(0, 0.4);
    a.add(this.mesh)
};
Bat.prototype.random = function(a) {
    var b = MAP_VIEW_DIST, c = RandomF(0, 2 * Math.PI), d = vector2rotate({x: b,y: 0}, -c);
    this.dir.x = d.x / b;
    this.dir.y = d.y / b;
    this.position.x = a.x - d.x;
    this.position.y = a.y - d.y;
    this.angle = c
};
Bat.prototype.update = function(a, b) {
    this.position.x += this.dir.x * b * this.speed;
    this.position.y += this.dir.y * b * this.speed;
    this.mesh.position.x = this.position.x;
    this.mesh.position.y = this.y + SinR(6 * a, -0.5, 0.5);
    this.mesh.position.z = this.position.y;
    this.mesh.rotation.y = this.angle + Math.PI / 2;
    this.meshmorph.update(a + this.time, b)
};
Bat.prototype.gone = function(a) {
    return this.position.distanceTo(a) > MAP_VIEW_DIST + 10
};
Bat.prototype.die = function() {
    this.scene.remove(this.mesh)
};
Map = function(a, b) {
    this.scene = a;
    this.camera = b;
    this.size = MAP_SIZE;
    this.pathMap = GGame.resources.pathmap;
    this.pixelMap = GGame.resources.pixelmap;
    this.light = new THREE.PointLight(4294967295, 2, 60);
    this.scene.add(this.light);
    this.ground = new THREE.Mesh(GGame.resources.ground, GGame.resources.materialGround);
    this.ground.scale.x *= MAP_GROUND_SCALE;
    this.ground.scale.z *= MAP_GROUND_SCALE;
    this.ground.position.z += MAP_GROUND_SCALE;
    this.scene.add(this.ground);
    this.terrain = new THREE.Mesh(GGame.resources.terrain, GGame.resources.materialScene);
    this.scene.add(this.terrain);
    this.graveyard = new THREE.Mesh(GGame.resources.graveyard, GGame.resources.materialScene);
    this.scene.add(this.graveyard);
    this.AddTree = function(a, b) {
        var c = b ? RandomI(4, 7) : RandomI(0, 3), c = new THREE.Mesh(GGame.resources.trees[c], GGame.resources.materialScene);
        c.rotation.y = RandomF(0, 2 * Math.PI);
        c.position.x = g.x;
        c.position.z = g.y;
        this.trees.push(c);
        this.scene.add(c)
    };
    this.trees = [];
    for (var c = 0; c < this.pixelMap.height; c++)
        for (var d = 0; d < this.pixelMap.width; d++) {
            var e = this.pixelMap.getColor(c, 
            d), f = 0;
            64 < e.r && 192 > e.r && f++;
            64 < e.g && 192 > e.g && f++;
            64 < e.b && 192 > e.b && f++;
            64 < e.a && 192 > e.a && f++;
            if (1 == f || 2 == f) {
                var g = this.pixelToReal(c, d);
                this.AddTree(g, !1)
            }
        }
    e = MAP_SIZE / 15;
    g = new THREE.Vector2(0, 0);
    for (c = 0; 15 >= c; c++)
        g.x = RandomF(-2, 2) + (c - 7.5) * e, g.y = RandomF(-2, 2) - MAP_SIZE / 2 - WALL_DIST_TREE1, this.AddTree(g, !0), g.x = RandomF(-3, 3) + 1.2 * (c - 7.5) * e, g.y = RandomF(-2, 2) - MAP_SIZE / 2 - WALL_DIST_TREE2, this.AddTree(g, !0);
    for (c = 0; 15 >= c; c++)
        g.x = RandomF(-2, 2) + (c - 7.5) * e, g.y = RandomF(-2, 2) + MAP_SIZE / 2 + WALL_DIST_TREE1, this.AddTree(g, 
        !0), g.x = RandomF(-3, 3) + 1.2 * (c - 7.5) * e, g.y = RandomF(-2, 2) + MAP_SIZE / 2 + WALL_DIST_TREE2, this.AddTree(g, !0);
    for (c = 0; 15 >= c; c++)
        g.y = RandomF(-2, 2) + (c - 7.5) * e, g.x = RandomF(-2, 2) - MAP_SIZE / 2 - WALL_DIST_TREE1, this.AddTree(g, !0), g.y = RandomF(-3, 3) + 1.2 * (c - 7.5) * e, g.x = RandomF(-2, 2) - MAP_SIZE / 2 - WALL_DIST_TREE2, this.AddTree(g, !0);
    for (c = 0; 15 >= c; c++)
        g.y = RandomF(-2, 2) + (c - 7.5) * e, g.x = RandomF(-2, 2) + MAP_SIZE / 2 + WALL_DIST_TREE1, this.AddTree(g, !0), g.y = RandomF(-3, 3) + 1.2 * (c - 7.5) * e, g.x = RandomF(-2, 2) + MAP_SIZE / 2 + WALL_DIST_TREE2, this.AddTree(g, 
        !0);
    this.walls = [];
    this.walls[0] = new THREE.Mesh(GGame.resources.wall, GGame.resources.materialWalls);
    this.walls[0].position.y = WALL_HEIGHT / 2 - 1;
    this.walls[0].position.x = 0;
    this.walls[0].position.z = -MAP_SIZE / 2 - WALL_DIST;
    this.scene.add(this.walls[0]);
    this.walls[1] = new THREE.Mesh(GGame.resources.wall, GGame.resources.materialWalls);
    this.walls[1].position.y = WALL_HEIGHT / 2 - 1;
    this.walls[1].position.x = 0;
    this.walls[1].position.z = MAP_SIZE / 2 + WALL_DIST;
    this.walls[1].rotation.y = Math.PI;
    this.scene.add(this.walls[1]);
    this.walls[2] = new THREE.Mesh(GGame.resources.wall, GGame.resources.materialWalls);
    this.walls[2].position.y = WALL_HEIGHT / 2 - 1;
    this.walls[2].position.x = -MAP_SIZE / 2 - WALL_DIST;
    this.walls[2].position.z = 0;
    this.walls[2].rotation.y = Math.PI / 2;
    this.scene.add(this.walls[2]);
    this.walls[3] = new THREE.Mesh(GGame.resources.wall, GGame.resources.materialWalls);
    this.walls[3].position.y = WALL_HEIGHT / 2 - 1;
    this.walls[3].position.x = MAP_SIZE / 2 + WALL_DIST;
    this.walls[3].position.z = 0;
    this.walls[3].rotation.y = -Math.PI / 2;
    this.scene.add(this.walls[3]);
    d = [[0.55, 0.15, 0.8], [0.55, 0.2, 0.7], [0.55, 0.05, 0.6], [0.55, 0.1, 0.8]];
    this.gparticles = new THREE.Geometry;
    for (c = 0; 4E3 > c; c++)
        g = new THREE.Vector3(RandomF(-MAP_VIEW_DIST, MAP_VIEW_DIST), RandomF(0, 10), RandomF(-MAP_VIEW_DIST, MAP_VIEW_DIST)), g.sx = g.x, g.sy = g.y, g.sz = g.z, this.gparticles.vertices.push(g);
    for (c = 0; c < d.length; c++)
        e = d[c], f = new THREE.ParticleBasicMaterial({size: 0.15,opacity: 0.15,map: GGame.resources.particle,blending: THREE.AdditiveBlending,depthTest: !0,depthWrite: !1,transparent: !0,fog: !1}), f.color.setHSV(e[0], 
        e[1], e[2]), this.scene.add(new THREE.ParticleSystem(this.gparticles, f));
    f = Array(this.pathMap.height);
    for (c = 0; c < this.pathMap.height; c++) {
        f[c] = Array(this.pathMap.width);
        for (d = 0; d < this.pathMap.width; d++)
            e = this.pathMap.getColor(c, d), f[c][d] = 255 == e.r && 255 == e.g && 255 == e.b ? 1 : 0
    }
    this.pathGrid = new Graph(f);
    this.first = !0
};
Map.prototype.update = function(a) {
    for (c = 0; c < this.gparticles.vertices.length; c++) {
        var b = this.gparticles.vertices[c];
        b.sx < this.camera.position.x - MAP_VIEW_DIST && (b.sx += 2 * MAP_VIEW_DIST);
        b.sx > this.camera.position.x + MAP_VIEW_DIST && (b.sx -= 2 * MAP_VIEW_DIST);
        b.sz < this.camera.position.z - MAP_VIEW_DIST && (b.sz += 2 * MAP_VIEW_DIST);
        b.sz > this.camera.position.z + MAP_VIEW_DIST && (b.sz -= 2 * MAP_VIEW_DIST);
        b.x = b.sx + 0.97 * Math.sin(0.27 * a + 42 * b.sz);
        b.y = b.sy + 0.77 * Math.sin(0.32 * a + 23 * b.sx);
        b.z = b.sz + 0.54 * Math.sin(0.15 * a + 16 * b.sz)
    }
    this.gparticles.dynamic = 
    !0;
    this.gparticles.__dirtyVertices = !0;
    this.gparticles.verticesNeedUpdate = !0;
    this.light.position.set(this.camera.position.x, this.camera.position.y, this.camera.position.z);
    c = GGame.player.dirTarget();
    GGame.resources.materialScene.uniforms.camSrc.value = this.camera.position;
    GGame.resources.materialScene.uniforms.camDir.value = c;
    GGame.resources.materialScene.uniforms.fogDensity.value = FOG_DENSITY;
    GGame.resources.materialScene.uniforms.time.value = a;
    GGame.resources.materialZombie.uniforms.camSrc.value = this.camera.position;
    GGame.resources.materialZombie.uniforms.camDir.value = c;
    GGame.resources.materialZombie.uniforms.fogDensity.value = FOG_DENSITY;
    GGame.resources.materialZombie.uniforms.time.value = a;
    GGame.resources.materialBat.uniforms.camSrc.value = this.camera.position;
    GGame.resources.materialBat.uniforms.camDir.value = c;
    GGame.resources.materialBat.uniforms.fogDensity.value = FOG_DENSITY;
    GGame.resources.materialBat.uniforms.time.value = a;
    GGame.resources.materialWalls.uniforms.camSrc.value = this.camera.position;
    GGame.resources.materialWalls.uniforms.camDir.value = 
    c;
    GGame.resources.materialWalls.uniforms.fogDensity.value = FOG_DENSITY;
    GGame.resources.materialWalls.uniforms.time.value = a;
    if (this.first)
        this.first = !1;
    else {
        for (var c = 0; c < this.trees.length; c++)
            a = this.trees[c], b = a.position.distanceTo(GGame.camera.position), a.visible = b < MAP_VIEW_DIST;
        this.walls[0].visible = GGame.camera.position.z < this.walls[0].position.z + MAP_VIEW_DIST;
        this.walls[1].visible = GGame.camera.position.z > this.walls[1].position.z - MAP_VIEW_DIST;
        this.walls[2].visible = GGame.camera.position.x < this.walls[2].position.x + 
        MAP_VIEW_DIST;
        this.walls[3].visible = GGame.camera.position.x > this.walls[3].position.x - MAP_VIEW_DIST
    }
};
Map.prototype.walkable = function(a, b) {
    var c = this.pixelMap.width, d = this.pixelMap.height;
    return 128 < this.pixelMap.getValue(Math.floor(a * c / MAP_SIZE) + c / 2, d / 2 - Math.floor(b * d / MAP_SIZE))
};
Map.prototype.pixelToReal = function(a, b) {
    return new THREE.Vector2(a * MAP_SIZE / this.pixelMap.width - MAP_SIZE / 2, MAP_SIZE / 2 - b * MAP_SIZE / this.pixelMap.height)
};
Map.prototype.pathToReal = function(a) {
    return new THREE.Vector2(a.x * MAP_SIZE / this.pathMap.width - MAP_SIZE / 2, MAP_SIZE / 2 - a.y * MAP_SIZE / this.pathMap.height)
};
Map.prototype.realToPath = function(a) {
    var b = this.pathMap.width, c = this.pathMap.height, d = Math.floor(a.x * b / MAP_SIZE) + b / 2, a = c / 2 - Math.floor(a.y * c / MAP_SIZE);
    0 > d && (d = 0);
    d >= b && (d = b - 1);
    0 > a && (a = 0);
    a >= c && (a = c - 1);
    return this.pathGrid.nodes[d][a]
};
Map.prototype.pathWalkable = function(a) {
    var b = this.pathMap.width, c = this.pathMap.height, d = Math.floor(a.x * b / MAP_SIZE) + b / 2, a = c / 2 - Math.floor(a.y * c / MAP_SIZE);
    return 0 > d || d >= b || 0 > a || a >= c ? !1 : 128 < this.pathMap.getValue(d, a)
};
Map.prototype.createPath = function(a, b, c) {
    var d = this.realToPath(a), b = this.realToPath(b), d = astar.search(this.pathGrid.nodes, d, b);
    return 1 < d.length ? new PathFollow(d, a, c, function(a) {
        return GGame.map.pathToReal(a)
    }) : null
};

