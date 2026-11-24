(function () {
  var root = document.getElementById("vis-main");
  if (!root) return;
  function section(t){ var s=document.createElement("section"); s.className="vis-panel"; var h=document.createElement("h2"); h.textContent=t; s.appendChild(h); root.appendChild(s); return s; }
  var s = section("Ladder recurrence");
  var n=document.createElement("input"); n.type="number"; n.value=11; n.min=1; n.max=20;
  var out=document.createElement("p");
  s.appendChild(n); s.appendChild(out);
  function calc(){ var nn=+n.value; if(nn>20){out.textContent="capped";return;} var a=1,b=2; if(nn===1){out.textContent="1";return;} if(nn===2){out.textContent="2";return;} for(var i=3;i<=nn;i++){var c=a+b;a=b;b=c;} out.textContent="a_"+nn+" = "+b; }
  n.addEventListener("input",calc); calc();
  var c=document.createElement("p"); c.className="vis-caption"; c.innerHTML="<strong>What to notice:</strong> each term sums two previous terms. <strong>Try this:</strong> set n=1.";
  s.appendChild(c);
})();
EOF
node --check vis-05.js && echo ok