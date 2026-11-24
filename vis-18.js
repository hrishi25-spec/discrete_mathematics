(function () {
  var root = document.getElementById("vis-main");
  if (!root) return;
  var s = document.createElement("section"); s.className = "vis-panel";
  var h = document.createElement("h2"); h.textContent = "Answer key controls"; s.appendChild(h);
  var p = document.createElement("p"); p.textContent = "Use the buttons above to expand or collapse all answers."; s.appendChild(p);
  root.appendChild(s);
})();
EOF
node --check vis-18.js && echo ok