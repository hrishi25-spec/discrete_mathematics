(function () {
  var root = document.getElementById("vis-main");
  if (!root) return;
  function section(t){ var s=document.createElement("section"); s.className="vis-panel"; var h=document.createElement("h2"); h.textContent=t; s.appendChild(h); root.appendChild(s); return s; }
  var s = section("Truth table");
  var op=document.createElement("select");
  ["AND","OR","IMPLICATION","IFF"].forEach(function(x){var o=document.createElement("option");o.textContent=x;o.value=x;op.appendChild(o);});
  var out=document.createElement("div");
  s.appendChild(op); s.appendChild(out);
  function calc(){ var o=op.value; var rows=[[1,1],[1,0],[0,1],[0,0]]; var html="<table><tr><th>P</th><th>Q</th><th>R</th></tr>"; for(var i=0;i<rows.length;i++){var p=rows[i][0],q=rows[i][1],r; if(o==="AND") r=p&&q; if(o==="OR") r=p||q; if(o==="IMPLICATION") r=(!p)||q; if(o==="IFF") r=(p===q); html+="<tr><td>"+p+"</td><td>"+q+"</td><td>"+(r?1:0)+"</td></tr>";} html+="</table>"; out.innerHTML=html; }
  op.addEventListener("change",calc); calc();
  var cap=document.createElement("p"); cap.className="vis-caption"; cap.innerHTML="<strong>What to notice:</strong> implication is false only P true, Q false. <strong>Try this:</strong> switch operators.";
  s.appendChild(cap);
})();
EOF
node --check vis-10.js && echo ok