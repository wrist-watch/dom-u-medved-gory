$(document).ready(function () {
  $(".plyr").on("webkitfullscreenchange", function () {
    if (/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
      alert(1);
    }
  });
  $(".plyr").on("fullscreenchange", function () {
    if (/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
      alert(2);
    }
  });
});
("use strict");
$(document).ready(function () {
  function r(r) {
    return /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(
      r
    );
  }
  function n(r) {
    return /^([A-Za-zА-Яа-яЁё]+(\s+[A-Za-zА-Яа-яЁё]+)?){2,}/i.test(r);
  }
  function e(r) {
    return (
      r.split("").filter(function (r) {
        return !Number.isNaN(Number.parseInt(r));
      }).length >= 10
    );
  }
  function t(r) {
    return /^([A-Za-zА-Яа-яЁё]+(\s+[A-Za-zА-Яа-яЁё]+)?){2,}/i.test(r);
  }
  var s = $('input[name="user_name"]'),
    a = $('input[name="user_email"]'),
    o = $('input[name="user_phone"]'),
    u = $('textarea[name="user_text"]'),
    i = function (r, n) {
      return n(r.val())
        ? (r.css("box-shadow", "0 0 0 .2rem rgba(0,255,0,.5)"),
          r.css("border", "1px solid rgba(0,255,0,.5)"),
          !0)
        : (r.css("box-shadow", "0 0 0 .2rem rgba(255,0,0,.5)"),
          r.css("border", "1px solid rgba(255,0,0,.5)"),
          !1);
    },
    c = function (r, n) {
      r.on("keyup", function () {
        i(r, n, !0) &&
          0 === r.val().length &&
          (r.css("box-shadow", "0 0 0 .2rem transparent"),
          r.css("border", "1px solid transparent"));
      }),
        r.on("blur", function () {
          i(r, n),
            0 === r.val().length &&
              (r.css("box-shadow", "0 0 0 .2rem transparent"),
              r.css("border", "1px solid transparent"));
        });
    };
  c(s, n), c(a, r), c(o, e), c(u, t);
}),
  $(document).ready(function () {
    $("body").css({ opacity: "1" });
    Array.from(document.querySelectorAll(".js-player")).map(function (r) {
      return new Plyr(r);
    });
    $("*").on("dragstart", function (r) {
      r.preventDefault();
    }),
      $(".lazy").Lazy({ threshold: 750 });
  });
