window.onload = function () {
            var k = window.Cropper;
            var i = window.URL || window.webkitURL;
            var d = document.querySelector(".img-container");
            var e = d.getElementsByTagName("img").item(0);
            var b = document.getElementById("download");
            var g = document.getElementById("actions");
            var l = {
                aspectRatio: tyle,
                viewMode: vmode,
                preview: ".img-preview",
                autoCrop: true,
                strict: true,
                background: true,
                autoCropArea: 1
            };
            var c = new k(e, l);
            var f = e.src;
            var a = "image/jpeg";
            var h;
            if (!document.createElement("canvas").getContext) {
                $('button[data-method="getCroppedCanvas"]').prop("disabled", true)
            }
            if (typeof document.createElement("cropper").style.transition === "undefined") {
                $('button[data-method="rotate"]').prop("disabled", true);
                $('button[data-method="scale"]').prop("disabled", true)
            }
            g.querySelector(".docs-buttons").onclick = function (o) {
                var s = o || window.event;
                var r = s.target || s.srcElement;
                var q;
                var m;
                var n;
                var p;
                if (!c) {
                    return
                }
                while (r !== this) {
                    if (r.getAttribute("data-method")) {
                        break
                    }
                    r = r.parentNode
                }
                if (r === this || r.disabled || r.className.indexOf("disabled") > -1) {
                    return
                }
                p = {
                    method: r.getAttribute("data-method"),
                    target: r.getAttribute("data-target"),
                    option: r.getAttribute("data-option") || undefined,
                    secondOption: r.getAttribute("data-second-option") || undefined
                };
                q = c.cropped;
                if (p.method) {
                    if (typeof p.target !== "undefined") {
                        n = document.querySelector(p.target);
                        if (!r.hasAttribute("data-option") && p.target && n) {
                            try {
                                p.option = JSON.parse(n.value)
                            } catch (s) {
                                console.log(s.message)
                            }
                        }
                    }
                    switch (p.method) {
                        case "rotate":
                            if (q) {
                                c.clear()
                            }
                            break;
                        case "getCroppedCanvas":
                            try {
                                p.option = JSON.parse(p.option)
                            } catch (s) {
                                console.log(s.message)
                            }
                            if (a === "image/jpeg") {
                                if (!p.option) {
                                    p.option = {}
                                }
                                p.option.fillColor = "#fff"
                            }
                            break
                    }
                    m = c[p.method](p.option, p.secondOption);
                    switch (p.method) {
                        case "rotate":
                            if (q) {
                                c.crop()
                            }
                            break;
                        case "scaleX":
                        case "scaleY":
                            r.setAttribute("data-option", -p.option);
                            break;
                        case "getCroppedCanvas":
                            if (m) {
                                m.toBlob(function (t) {
                                    var u = i.createObjectURL(t);
                                    $("#Cimg").attr("src", u)
                                    Clogo = document.getElementById("Cimg").src
                                }, "image/png", 1);
                                $("#zheard-taouser").removeClass("disabled");
                                if (!b.disabled) {
                                    b.href = m.toDataURL(a)
                                }
                            }
                            break;
                        case "destroy":
                            c = null;
                            if (h) {
                                i.revokeObjectURL(h);
                                h = "";
                                e.src = f
                            }
                            break
                    }
                    if (typeof m === "object" && m !== c && n) {
                        try {
                            n.value = JSON.stringify(m)
                        } catch (s) {
                            console.log(s.message)
                        }
                    }
                }
            };
            document.body.onkeydown = function (m) {
                var n = m || window.event;
                if (!c || this.scrollTop > 300) {
                    return
                }
                switch (n.keyCode) {
                    case 37:
                        n.preventDefault();
                        c.move(-1, 0);
                        break;
                    case 38:
                        n.preventDefault();
                        c.move(0, -1);
                        break;
                    case 39:
                        n.preventDefault();
                        c.move(1, 0);
                        break;
                    case 40:
                        n.preventDefault();
                        c.move(0, 1);
                        break
                }
            };
            $(".cropanh-container").hide();
            var j = document.getElementById("inputImage");
            if (i) {
                j.onchange = function () {
                    var n = this.files;
                    var m;
                    if (c && n && n.length) {
                        m = n[0];
                        if (/^image\/\w+/.test(m.type)) {
                            a = m.type;
                            if (h) {
                                i.revokeObjectURL(h)
                            }
                            e.src = h = i.createObjectURL(m);
                            c.destroy();
                            c = new k(e, l);
                            j.value = null;
                            $(".cropanh-container").show();
                            $(".btn-upanh span,.btn-chonanh").html("<i class='fas fa-upload'></i> Elige otra foto")
                        } else {
                            window.alert("Elige un archivo de imagen.")
                        }
                    }
                }
            } else {
                j.disabled = true;
                j.parentNode.className += " disabled"
            }
        };