(function () {
  var root = document.getElementById("vis-main");
  if (!root) return;
  function section(t){ var s=document.createElement("section"); s.className="vis-panel"; var h=document.createElement("h2"); h.textContent=t; s.appendChild(h); root.appendChild(s); return s; }
  var s = section("Euler formula");
  var n=document.createElement("input"); n.type="number"; n.value=10; n.min=1; n.max=20;
  var e=document.createElement("input"); e.type="number"; e.value=15; e.min=0; e.max=60;
  var out=document.createElement("p");
  s.appendChild(n); s.appendChild(e); s.appendChild(out);
  function calc(){ var nn=+n.value,ee=+e.value; if(nn>20||ee>60){out.textContent="capped";return;} out.textContent="f = 2 - n + e = "+(2-nn+ee)+"; max planar edges (n>=3) = "+(3*nn-6); }
  n.addEventListener("input",calc); e.addEventListener("input",calc); calc();
  var cap=document.createElement("p"); cap.className="vis-caption"; cap.innerHTML="<strong>What to notice:</strong> faces, vertices and edges are linked. <strong>Try this:</strong> set n=4,e=6.";
  s.appendChild(cap);
})();
EOF
node --check vis-15.js && echo ok