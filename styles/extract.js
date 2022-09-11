let file = "https://leetcode-stats-api.herokuapp.com/parthtiwari"
fetch (file)
.then(x => x.text())
.then(y => document.getElementById("leetcode").innerHTML = y.substring(56,59));
