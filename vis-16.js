(function () {
  var root = document.getElementById("vis-main");
  if (!root) return;
  var s = document.createElement("section"); s.className = "vis-panel";
  var h = document.createElement("h2"); h.textContent = "Concept map"; s.appendChild(h);
  var p = document.createElement("p"); p.textContent = "Open a topic page from the sidebar; this panel keeps the revision page lightweight."; s.appendChild(p);
  root.appendChild(s);
})();
EOF
node --check vis-16.js && echo ok