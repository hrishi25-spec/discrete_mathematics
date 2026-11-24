(function () {
  var root = document.getElementById("vis-main");
  if (!root) return;
  var s = document.createElement("section"); s.className = "vis-panel";
  var h = document.createElement("h2"); h.textContent = "Progress"; s.appendChild(h);
  var p = document.createElement("p"); p.id = "vis17-progress"; s.appendChild(p);
  root.appendChild(s);
  try {
    var n = 0;
    for (var i = 1; i <= 60; i++) if (localStorage.getItem("done-q" + i) === "1") n++;
    p.textContent = "Completed " + n + " of 60 questions.";
  } catch (e) { p.textContent = "Progress unavailable."; }
})();
EOF
node --check vis-17.js && echo ok