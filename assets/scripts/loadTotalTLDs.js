'use strict';
function loadTotalTLDS() {
    var a = sessionStorage.getItem("tldCount");
    null !== a ? showTLDCountOnUI(a) : (a = new XMLHttpRequest,
    a.onreadystatechange = function() {
        if (4 === this.readyState && 200 === this.status) {
            var b = this.responseText;
            sessionStorage.setItem("tldCount", b);
            showTLDCountOnUI(b)
        }
    }
    ,
    a.open("GET", "https://billing.whoisfreaks.com/db_type/get-total-count-zone", !0),
    a.send())
}
function showTLDCountOnUI(a) {
    if (null !== document.getElementsByClassName("totalTLDs")) {
        var b = document.querySelectorAll(".totalTLDs");
        if ("/" == window.location.pathname) {
            var g = a / 400;
            b.forEach(function(d) {
                var f = function() {
                    var e = parseInt(d.innerHTML);
                    e < +a ? (d.innerHTML = parseInt(e + g) + "+",
                    setTimeout(f, 1)) : d.innerHTML = a + "+"
                };
                f()
            })
        } else {
            var c;
            for (c = 0; c < b.length; c++)
                b[c].innerHTML = a + "+"
        }
    }
    loadDataSinceYear()
}
;