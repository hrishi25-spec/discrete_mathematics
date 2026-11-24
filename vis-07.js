(function () {
  var root = document.getElementById("vis-main");
  if (!root) return;
  function section(t){ var s=document.createElement("section"); s.className="vis-panel"; var h=document.createElement("h2"); h.textContent=t; s.appendChild(h); root.appendChild(s); return s; }
  var s = section("Ferrers conjugate");
  var inp=document.createElement("input"); inp.value="4,2,1";
  var out=document.createElement("div");
  s.appendChild(inp); s.appendChild(out);
  function conj(parts){ parts=parts.slice().sort(function(a,b){return b-a;}); var m=parts.length?parts[0]:0; var res=[]; for(var c=1;c<=m;c++){var cnt=0; for(var i=0;i<parts.length;i++) if(parts[i]>=c) cnt++; if(cnt>0) res.push(cnt);} return res; }
  function draw(){ var parts=inp.value.split(",").map(function(x){return parseInt(x.trim(),10);}).filter(function(x){return x>0;}); var c=conj(parts); out.innerHTML="<p>Partition: "+parts.join("+")+" ; conjugate: "+c.join("+")+"</p>"; }
  inp.addEventListener("input",draw); draw();
  var cap=document.createElement("p"); cap.className="vis-caption"; cap.innerHTML="<strong>What to notice:</strong> rows become columns. <strong>Try this:</strong> enter 5,3,1.";
  s.appendChild(cap);
})();
EOF
node --check vis-07.js && echo ok