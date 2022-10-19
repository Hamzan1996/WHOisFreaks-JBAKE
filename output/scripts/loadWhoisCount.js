'use strict';
function loadWhoisCount() {
    var a = sessionStorage.getItem("whoisCount");
    null !== a ? showWhoisCountOnUI(JSON.parse(a)) : (a = new XMLHttpRequest,
    a.onreadystatechange = function() {
        if (4 === this.readyState && 200 === this.status) {
            var b = this.responseText;
            sessionStorage.setItem("whoisCount", b);
            showWhoisCountOnUI(JSON.parse(b))
        }
    }
    ,
    a.open("GET", "https://billing.whoisfreaks.com/db_type/getdomain-whois-table-stat", !0),
    a.send())
}
function showWhoisCountOnUI(a) {
    if (null !== document.getElementById("totalDomains_no")) {
        var b = document.getElementById("totalDomains_no");
        if ("/" == window.location.pathname) {
            var d = +a[0].totalDomains_no
              , k = d / 400
              , g = function() {
                var c = parseInt(b.innerHTML);
                c < d ? (b.innerHTML = parseInt(c + k) + "M+",
                setTimeout(g, 1)) : b.innerHTML = d + "M+"
            };
            g()
        } else
            document.getElementById("totalDomains_no").innerHTML = a[0].totalDomains_no + "M+"
    }
    if (null !== document.getElementById("totalWhoisNo")) {
        var e = document.getElementById("totalWhoisNo");
        if ("/" == window.location.pathname) {
            var f = +a[0].totalWhoisNo
              , l = f / 400
              , h = function() {
                var c = parseInt(e.innerHTML);
                c < f ? (e.innerHTML = parseInt(c + l) + "M+",
                setTimeout(h, 1)) : e.innerHTML = f + "M+"
            };
            h()
        } else
            document.getElementById("totalWhoisNo").innerHTML = a[0].totalWhoisNo + "M+"
    }
}
;