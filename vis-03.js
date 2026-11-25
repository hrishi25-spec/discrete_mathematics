(function () {
  var root = document.getElementById("vis-main");
  if (!root) return;
  function section(t){ var s=document.createElement("section"); s.className="vis-panel"; var h=document.createElement("h2"); h.textContent=t; s.appendChild(h); root.appendChild(s); return s; }
  var s = section("Stirling recurrence arrows");
  var n=document.createElement("input"); n.type="number"; n.value=5; n.min=1; n.max=8;
  var out=document.createElement("p");
  s.appendChild(n); s.appendChild(out);
  function S(n,k,memo){ if(n==0&&k==0) return 1; if(n==0||k==0||k>n) return 0; var key=n+","+k; if(memo[key]!==undefined) return memo[key]; memo[key]=k*S(n-1,k,memo)+S(n-1,k-1,memo); return memo[key]; }
  function calc(){ var nn=+n.value; if(nn>8){out.textContent="capped";return;} var vals=[]; for(var k=1;k<=nn;k++) vals.push("S("+nn+","+k+")="+S(nn,k,{})); out.textContent=vals.join(", "); }
  n.addEventListener("input",calc); calc();
  var c=document.createElement("p"); c.className="vis-caption"; c.innerHTML="<strong>What to notice:</strong> S(n,k)=kS(n-1,k)+S(n-1,k-1). <strong>Try this:</strong> increase n.";
  s.appendChild(c);
})();
