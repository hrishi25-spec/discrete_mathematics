(function () {
  var root = document.getElementById("vis-main");
  if (!root) return;
  function section(t){ var s=document.createElement("section"); s.className="vis-panel"; var h=document.createElement("h2"); h.textContent=t; s.appendChild(h); root.appendChild(s); return s; }
  var s = section("Coefficient extractor");
  var n=document.createElement("input"); n.type="number"; n.value=4; n.min=1; n.max=12;
  var r=document.createElement("input"); r.type="number"; r.value=7; r.min=0; r.max=20;
  var out=document.createElement("p");
  s.appendChild(n); s.appendChild(r); s.appendChild(out);
  function C(a,b){ if(b<0||b>a) return 0; var x=1; for(var i=1;i<=b;i++) x=x*(a-b+i)/i; return Math.round(x); }
  function calc(){ var nn=+n.value,rr=+r.value; if(nn>12||rr>20){out.textContent="capped";return;} out.textContent="[x^"+rr+"](1-x)^(-"+nn+") = C("+ (nn+rr-1)+","+rr+")="+C(nn+rr-1,rr); }
  n.addEventListener("input",calc); r.addEventListener("input",calc); calc();
  var c=document.createElement("p"); c.className="vis-caption"; c.innerHTML="<strong>What to notice:</strong> coefficient extraction reads the count. <strong>Try this:</strong> set r=0.";
  s.appendChild(c);
})();
EOF
node --check vis-06.js && echo ok