(function () {
  var root = document.getElementById("vis-main");
  if (!root) return;
  function section(t){ var s=document.createElement("section"); s.className="vis-panel"; var h=document.createElement("h2"); h.textContent=t; s.appendChild(h); root.appendChild(s); return s; }
  var s = section("Pigeonhole boxes");
  var p=document.createElement("input"); p.type="number"; p.value=7; p.min=1; p.max=30;
  var h=document.createElement("input"); h.type="number"; h.value=5; h.min=1; h.max=20;
  var out=document.createElement("p");
  s.appendChild(p); s.appendChild(h); s.appendChild(out);
  function calc(){ var pp=+p.value,hh=+h.value; if(pp>30||hh>20){out.textContent="capped";return;} out.textContent="Some box has at least "+(Math.floor((pp-1)/hh)+1)+" objects."; }
  p.addEventListener("input",calc); h.addEventListener("input",calc); calc();
  var cap=document.createElement("p"); cap.className="vis-caption"; cap.innerHTML="<strong>What to notice:</strong> nk+1 forces k+1 in one box. <strong>Try this:</strong> set p=6,h=5.";
  s.appendChild(cap);
})();
