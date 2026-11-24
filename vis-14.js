(function () {
  var root = document.getElementById("vis-main");
  if (!root) return;
  function section(t){ var s=document.createElement("section"); s.className="vis-panel"; var h=document.createElement("h2"); h.textContent=t; s.appendChild(h); root.appendChild(s); return s; }
  var s = section("Hall condition checker");
  var inp=document.createElement("input"); inp.value="0-0,0-1,1-1,1-2,2-2";
  var L=document.createElement("input"); L.type="number"; L.value=3; L.min=1; L.max=6;
  var R=document.createElement("input"); R.type="number"; R.value=3; R.min=1; R.max=6;
  var out=document.createElement("p");
  s.appendChild(L); s.appendChild(R); s.appendChild(inp); s.appendChild(out);
  function calc(){ var l=+L.value,r=+R.value; var edges=inp.value.split(",").map(function(x){var p=x.trim().split("-");return [parseInt(p[0],10),parseInt(p[1],10)];}).filter(function(e){return !isNaN(e[0])&&!isNaN(e[1]);}); var adj=[]; for(var i=0;i<l;i++) adj[i]=[]; for(var e of edges){ if(e[0]>=0&&e[0]<l&&e[1]>=0&&e[1]<r) adj[e[0]].push(e[1]); } var best=0; function rec(i,used){ if(i===l){ var cnt=0; for(var j=0;j<r;j++) if(used[j]) cnt++; best=Math.max(best,cnt); return; } rec(i+1,used.slice()); for(var k=0;k<adj[i].length;k++){ var v=adj[i][k]; if(!used[v]){ var u=used.slice(); u[v]=true; rec(i+1,u); } } } rec(0,new Array(r).fill(false)); out.textContent="Maximum matching size = "+best+" (needs "+l+" for saturation)."; }
  L.addEventListener("input",calc); R.addEventListener("input",calc); inp.addEventListener("input",calc); calc();
  var cap=document.createElement("p"); cap.className="vis-caption"; cap.innerHTML="<strong>What to notice:</strong> saturation requires maximum matching size L. <strong>Try this:</strong> remove an edge.";
  s.appendChild(cap);
})();
EOF
node --check vis-14.js && echo ok