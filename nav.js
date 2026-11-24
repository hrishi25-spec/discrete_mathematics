(function () {
  "use strict";

  var pages = [
    { file: "index.html", title: "Contents" },
    { file: "01-sets-relations.html", title: "01 Sets, relations, partitions" },
    { file: "02-basic-counting.html", title: "02 Basic counting" },
    { file: "03-occupancy-stirling.html", title: "03 Occupancy, Stirling" },
    { file: "04-inclusion-exclusion.html", title: "04 Inclusion-exclusion" },
    { file: "05-recurrences.html", title: "05 Recurrences" },
    { file: "06-generating-functions.html", title: "06 Generating functions" },
    { file: "07-integer-partitions.html", title: "07 Integer partitions" },
    { file: "08-catalan-lattice-paths.html", title: "08 Catalan, lattice paths" },
    { file: "09-pigeonhole.html", title: "09 Pigeonhole" },
    { file: "10-logic-proofs-induction.html", title: "10 Logic, proofs, induction" },
    { file: "11-graph-basics.html", title: "11 Graph basics" },
    { file: "12-bipartite-euler-digraphs.html", title: "12 Bipartite, Euler, digraphs" },
    { file: "13-trees-prufer-mst.html", title: "13 Trees, Prufer, MST" },
    { file: "14-matchings.html", title: "14 Matchings" },
    { file: "15-planar-colouring-connectivity.html", title: "15 Planar, colouring" },
    { file: "16-exam-revision.html", title: "16 Exam revision" },
    { file: "17-practice-questions.html", title: "17 Practice questions" }
  ];

  function currentFile() {
    var path = window.location.pathname || "";
    var parts = path.split("/");
    var name = parts[parts.length - 1];
    return name || "index.html";
  }

  function ensureSidebar() {
    var existing = document.getElementById("sidebar");
    if (existing) return existing;
    var aside = document.createElement("aside");
    aside.id = "sidebar";
    var shell = document.querySelector(".site-shell");
    if (shell) {
      shell.insertBefore(aside, shell.firstChild);
    } else {
      document.body.insertBefore(aside, document.body.firstChild);
    }
    return aside;
  }

  function buildSidebar() {
    var aside = ensureSidebar();
    var now = currentFile();
    var h = document.createElement("h2");
    h.textContent = "Discrete Maths-I";
    aside.appendChild(h);

    var ul = document.createElement("ul");
    pages.forEach(function (p) {
      var li = document.createElement("li");
      var a = document.createElement("a");
      a.href = p.file;
      a.textContent = p.title;
      if (p.file === now) a.className = "current";
      li.appendChild(a);
      ul.appendChild(li);
    });
    aside.appendChild(ul);
  }

  function ensureShell() {
    if (document.querySelector(".site-shell")) return;
    var body = document.body;
    var sidebar = document.getElementById("sidebar");
    var main = document.querySelector("main");
    if (!main) {
      main = document.createElement("main");
      while (body.firstChild) main.appendChild(body.firstChild);
      body.appendChild(main);
    }
    var shell = document.createElement("div");
    shell.className = "site-shell";
    body.insertBefore(shell, body.firstChild);
    if (sidebar) shell.appendChild(sidebar);
    shell.appendChild(main);
  }

  function addMobileToggle() {
    if (document.querySelector(".mob-nav-toggle")) return;
    var btn = document.createElement("button");
    btn.className = "mob-nav-toggle";
    btn.textContent = "Menu";
    btn.addEventListener("click", function () {
      var s = document.getElementById("sidebar");
      if (s) s.classList.toggle("open");
    });
    document.body.appendChild(btn);
  }

  function init() {
    ensureShell();
    buildSidebar();
    addMobileToggle();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
