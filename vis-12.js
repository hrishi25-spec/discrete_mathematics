(function () {
  var root = document.getElementById("vis-main");
  if (!root) return;
  function section(t){ var s=document.createElement("section"); s.className="vis-panel"; var h=document.createElement("h2"); h.textContent=t; s.appendChild(h); root.appendChild(s); return s; }
  var s = section("Havel-Hakimi stepper");
  var inp=document.createElement("input"); inp.value="8,7,6,6,5,3,2,2,2,1";
  var out=document.createElement("p");
  s.appendChild(inp); s.appendChild(out);
  function run(){ var seq=inp.value.split(",").map(function(x){return parseInt(x.trim(),10);}).filter(function(x){return !isNaN(x);}); seq.sort(function(a,b){return b-a;}); var steps=[]; if(seq.every(function(x){return x===0;})){ steps.push("all zeros"); } else { while(seq.some(function(x){return x>0;})){ seq=seq.filter(function(x){return x>0;}); if(seq.length===0){steps.push("all zeros");break;} var d=seq.shift(); if(d>seq.length){steps.push("FAIL d="+d);break;} for(var i=0;i<d;i++) seq[i]-=1; seq.sort(function(a,b){return b-a;}); steps.push("d="+d+" -> "+seq.join(",")); } } out.textContent=steps.join(" ; "); }
  inp.addEventListener("input",run); run();
  var cap=document.createElement("p"); cap.className="vis-caption"; cap.innerHTML="<strong>What to notice:</strong> failure occurs when d exceeds remaining length. <strong>Try this:</strong> use 3,3,2,2,1,1.";
  s.appendChild(cap);
})();
EOF
node --check vis-12.js && echo ok