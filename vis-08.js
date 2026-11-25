(function () {
  var root = document.getElementById("vis-main");
  if (!root) return;
  function section(t){ var s=document.createElement("section"); s.className="vis-panel"; var h=document.createElement("h2"); h.textContent=t; s.appendChild(h); root.appendChild(s); return s; }
  var s = section("Lattice path counter");
  var a=document.createElement("input"); a.type="number"; a.value=6; a.min=0; a.max=8;
  var b=document.createElement("input"); b.type="number"; b.value=6; b.min=0; b.max=8;
  var out=document.createElement("p");
  s.appendChild(a); s.appendChild(b); s.appendChild(out);
  function C(n,r){ if(r<0||r>n) return 0; var x=1; for(var i=1;i<=r;i++) x=x*(n-r+i)/i; return Math.round(x); }
  function calc(){ var aa=+a.value,bb=+b.value; if(aa>8||bb>8){out.textContent="capped";return;} out.textContent="Paths from (0,0) to ("+aa+","+bb+") = C("+(aa+bb)+","+aa+") = "+C(aa+bb,aa); }
  a.addEventListener("input",calc); b.addEventListener("input",calc); calc();
  var cap=document.createElement("p"); cap.className="vis-caption"; cap.innerHTML="<strong>What to notice:</strong> total paths are binomial. <strong>Try this:</strong> set a=0.";
  s.appendChild(cap);
})();
