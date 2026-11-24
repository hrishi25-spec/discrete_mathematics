(function () {
  var root = document.getElementById("vis-main");
  if (!root) return;

  function section(title) {
    var s = document.createElement("section");
    s.className = "vis-panel";
    var h = document.createElement("h2"); h.textContent = title; s.appendChild(h);
    root.appendChild(s);
    return s;
  }

  // 3-set Venn calculator
  var v = section("Interactive Venn calculator");
  var form = document.createElement("div"); form.className = "vis-controls";
  ["a","b","c","ab","ac","bc","abc"].forEach(function (name) {
    var lab = document.createElement("label");
    lab.textContent = name + " ";
    var inp = document.createElement("input"); inp.type = "number"; inp.id = "vis4-" + name; inp.value = name === "a" ? 40 : name === "b" ? 35 : name === "c" ? 30 : name === "ab" ? 12 : name === "ac" ? 8 : name === "bc" ? 7 : 3; inp.style.width = "4rem";
    lab.appendChild(inp); form.appendChild(lab);
  });
  var out = document.createElement("p"); out.id = "vis4-union";
  v.appendChild(form); v.appendChild(out);
  function calcUnion() {
    var a=+document.getElementById("vis4-a").value, b=+document.getElementById("vis4-b").value, c=+document.getElementById("vis4-c").value;
    var ab=+document.getElementById("vis4-ab").value, ac=+document.getElementById("vis4-ac").value, bc=+document.getElementById("vis4-bc").value, abc=+document.getElementById("vis4-abc").value;
    out.textContent = "|A∪B∪C| = " + (a+b+c-ab-ac-bc+abc);
  }
  form.addEventListener("input", calcUnion); calcUnion();
  var cap = document.createElement("p"); cap.className = "vis-caption"; cap.innerHTML = "<strong>What to notice:</strong> pairwise terms are subtracted and the triple term is added back. <strong>Try this:</strong> set all intersections to 0 and check the sum.";
  v.appendChild(cap);

  // Multiplicity proof
  var m = section("Multiplicity proof");
  var tSel = document.createElement("select"); tSel.id = "vis4-t";
  for (var t = 1; t <= 8; t++) { var o = document.createElement("option"); o.value = t; o.textContent = t; tSel.appendChild(o); }
  tSel.value = 3;
  var mOut = document.createElement("p"); mOut.id = "vis4-mult";
  m.appendChild(tSel); m.appendChild(mOut);
  function binom(n,r){ if(r<0||r>n) return 0; var res=1; for(var i=1;i<=r;i++) res=res*(n-r+i)/i; return Math.round(res); }
  function calcMult() {
    var t = +tSel.value;
    var total = 0, terms = [];
    for (var r = 1; r <= t; r++) {
      var term = (r % 2 === 1 ? 1 : -1) * binom(t, r);
      total += term;
      terms.push((r % 2 === 1 ? "+" : "-") + "C(" + t + "," + r + ")");
    }
    mOut.textContent = terms.join(" ") + " = " + total;
  }
  tSel.addEventListener("change", calcMult); calcMult();
  var cap2 = document.createElement("p"); cap2.className = "vis-caption"; cap2.innerHTML = "<strong>What to notice:</strong> the alternating sum equals 1. <strong>Try this:</strong> change t and watch the total stay 1.";
  m.appendChild(cap2);

  // Sieve grid
  var s = section("Sieve grid 1..200");
  var grid = document.createElement("div");
  grid.style.display = "grid"; grid.style.gridTemplateColumns = "repeat(20, 1fr)"; grid.style.gap = "2px";
  var primes = [2,3,5,7,11,13];
  for (var i = 1; i <= 200; i++) {
    var cell = document.createElement("div");
    cell.textContent = i;
    cell.style.fontSize = "9px"; cell.style.textAlign = "center"; cell.style.padding = "1px";
    var color = "#e6edf3";
    for (var p of primes) { if (i > 1 && i % p === 0) { color = "#f85149"; break; } }
    if (i === 1) color = "#8c959f";
    cell.style.background = color;
    grid.appendChild(cell);
  }
  s.appendChild(grid);
  var cap3 = document.createElement("p"); cap3.className = "vis-caption"; cap3.innerHTML = "<strong>What to notice:</strong> numbers divisible by 2,3,5,7,11,13 are marked; the rest are primes. <strong>Try this:</strong> count the unmarked numbers above 13.";
  s.appendChild(cap3);

  // Derangement diagram
  var d = section("Derangement counter");
  var dn = document.createElement("input"); dn.type = "number"; dn.value = 4; dn.min = 1; dn.max = 8;
  var dOut = document.createElement("p");
  d.appendChild(dn); d.appendChild(dOut);
  function factorial(x){ var r=1; for(var i=2;i<=x;i++) r*=i; return r; }
  function derange(n){ var s=0; for(var i=0;i<=n;i++) s += (i%2===0?1:-1)/factorial(i); return Math.round(factorial(n)*s); }
  function calcD(){ var n=+dn.value; if(n>8){dOut.textContent="n capped at 8";return;} dOut.textContent="D_"+n+" = "+derange(n); }
  dn.addEventListener("input", calcD); calcD();
  var cap4 = document.createElement("p"); cap4.className = "vis-caption"; cap4.innerHTML = "<strong>What to notice:</strong> D_n counts permutations with no fixed point. <strong>Try this:</strong> compare D_n/n! to 1/e.";
  d.appendChild(cap4);

  // Elevator surjection
  var e = section("Elevator surjection");
  var ePeople = document.createElement("input"); ePeople.type="number"; ePeople.value=8; ePeople.min=1; ePeople.max=10;
  var eFloors = document.createElement("input"); eFloors.type="number"; eFloors.value=5; eFloors.min=1; eFloors.max=8;
  var eOut = document.createElement("p");
  e.appendChild(ePeople); e.appendChild(eFloors); e.appendChild(eOut);
  function surj(n,k){ var s=0; for(var i=0;i<=k;i++) s += (i%2===0?1:-1)*Math.round(factorial(k)/ (factorial(i)*factorial(k-i))) * Math.pow(k-i,n); return s; }
  function calcE(){ var n=+ePeople.value,k=+eFloors.value; if(n>10||k>8){eOut.textContent="inputs capped";return;} eOut.textContent="Sur("+n+","+k+") = "+surj(n,k); }
  ePeople.addEventListener("input",calcE); eFloors.addEventListener("input",calcE); calcE();
  var cap5 = document.createElement("p"); cap5.className = "vis-caption"; cap5.innerHTML = "<strong>What to notice:</strong> every floor must be nonempty. <strong>Try this:</strong> set floors=1.";
  e.appendChild(cap5);

  // Forbidden strings
  var f = section("Forbidden-string block merging");
  var fOut = document.createElement("p");
  fOut.textContent = "fish and rat have disjoint letters, so both can be blocks: 26! - 2*23! - 24! + 21!. fish and bird share i, so they cannot both occur.";
  f.appendChild(fOut);
  var cap6 = document.createElement("p"); cap6.className = "vis-caption"; cap6.innerHTML = "<strong>What to notice:</strong> shared letters make events impossible. <strong>Try this:</strong> identify which pairs share letters.";
  f.appendChild(cap6);
})();
EOF
node --check vis-04.js && echo "vis-04 ok"