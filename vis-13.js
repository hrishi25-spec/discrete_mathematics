(function () {
  var root = document.getElementById("vis-main");
  if (!root) return;
  function section(t){ var s=document.createElement("section"); s.className="vis-panel"; var h=document.createElement("h2"); h.textContent=t; s.appendChild(h); root.appendChild(s); return s; }
  var s = section("Labeled tree count");
  var n=document.createElement("input"); n.type="number"; n.value=7; n.min=1; n.max=8;
  var out=document.createElement("p");
  s.appendChild(n); s.appendChild(out);
  function calc(){ var nn=+n.value; if(nn>8){out.textContent="capped";return;} out.textContent="n^(n-2) = "+Math.pow(nn,Math.max(0,nn-2))+" for "+nn+" vertices."; }
  n.addEventListener("input",calc); calc();
  var cap=document.createElement("p"); cap.className="vis-caption"; cap.innerHTML="<strong>What to notice:</strong> Prüfer codes count labeled trees. <strong>Try this:</strong> set n=4.";
  s.appendChild(cap);
})();
EOF
node --check vis-13.js && echo ok