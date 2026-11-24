(function () {
  var root = document.getElementById("vis-main");
  if (!root) return;
  function section(t){ var s=document.createElement("section"); s.className="vis-panel"; var h=document.createElement("h2"); h.textContent=t; s.appendChild(h); root.appendChild(s); return s; }
  var s = section("Equivalence-class counter");
  var n=document.createElement("input"); n.type="number"; n.value=4; n.min=1; n.max=6;
  var k=document.createElement("input"); k.type="number"; k.value=2; k.min=1; k.max=6;
  var out=document.createElement("p");
  s.appendChild(n); s.appendChild(k); s.appendChild(out);
  function C(a,b){ if(b<0||b>a) return 0; var r=1; for(var i=1;i<=b;i++) r=r*(a-b+i)/i; return Math.round(r);}
  function S(n,k){ if(n==0&&k==0) return 1; if(n==0||k==0||k>n) return 0; return k*S(n-1,k)+S(n-1,k-1); }
  function bell(n){ var t=0; for(var i=1;i<=n;i++) t+=S(n,i); return t; }
  function calc(){ var nn=+n.value,kk=+k.value; if(nn>6||kk>nn){out.textContent="capped";return;} out.textContent="S("+nn+","+kk+")="+S(nn,kk)+" ; B_"+nn+"="+bell(nn); }
  n.addEventListener("input",calc); k.addEventListener("input",calc); calc();
  var c=document.createElement("p"); c.className="vis-caption"; c.innerHTML="<strong>What to notice:</strong> equivalence relations correspond to partitions. <strong>Try this:</strong> change n and k.";
  s.appendChild(c);
})();
EOF
node --check vis-01.js && echo ok