'use strict';
function loadDataSinceYear() {
    var a = document.querySelector(".historicalDataYear")
      , b = +a.getAttribute("data-target")
      , e = b / 400
      , d = function() {
        var c = +a.innerText;
        c < b ? (a.innerText = parseInt(c + e),
        setTimeout(d, 1)) : a.innerText = parseInt(b)
    };
    d()

}
;