(function () {
  var root = document.getElementById("vis-main");
  if (!root) return;
  function section(t){ var s=document.createElement("section"); s.className="vis-panel"; var h=document.createElement("h2"); h.textContent=t; s.appendChild(h); root.appendChild(s); return s; }
  var s = section("Degree sum checker");
  var inp=document.createElement("input"); inp.value="2,3,3,2,1,1";
  var out=document.createElement("p");
  s.appendChild(inp); s.appendChild(out);
  function calc(){ var deg=inp.value.split(",").map(function(x){return parseInt(x.trim(),10);}).filter(function(x){return !isNaN(x);}); var sum=deg.reduce(function(a,b){return a+b;},0); out.textContent="Degree sum = "+sum+" ; even? "+(sum%2===0)+" ; simple graphs on n="+deg.length+" vertices: 2^C(n,2)="+Math.pow(2,deg.length*(deg.length-1)/2); }
  inp.addEventListener("input",calc); calc();
  var cap=document.createElement("p"); cap.className="vis-caption"; cap.innerHTML="<strong>What to notice:</strong> handshake sum must be even. <strong>Try this:</strong> change one degree.";
  s.appendChild(cap);
})();
