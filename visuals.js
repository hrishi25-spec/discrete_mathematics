// Shared visual helpers. No external dependencies.
(function () {
  "use strict";

  var palette = {
    node: "var(--vis-node)",
    edge: "var(--vis-edge)",
    good: "var(--vis-good)",
    bad: "var(--vis-bad)",
    warn: "var(--vis-warn)",
    neutral: "var(--vis-neutral)",
    text: "var(--text)"
  };

  function svg(tag, attrs) {
    var el = document.createElementNS("http://www.w3.org/2000/svg", tag);
    if (attrs) Object.keys(attrs).forEach(function (k) { el.setAttribute(k, attrs[k]); });
    return el;
  }

  function clear(node) {
    while (node.firstChild) node.removeChild(node.firstChild);
  }

  function text(parent, x, y, value, attrs) {
    var t = svg("text", Object.assign({ x: x, y: y, "text-anchor": "middle", "dominant-baseline": "middle", fill: palette.text, "font-size": 12 }, attrs || {}));
    t.textContent = value;
    parent.appendChild(t);
    return t;
  }

  function circle(parent, cx, cy, r, attrs) {
    var c = svg("circle", Object.assign({ cx: cx, cy: cy, r: r, fill: palette.node, stroke: palette.edge, "stroke-width": 1.5 }, attrs || {}));
    parent.appendChild(c);
    return c;
  }

  function line(parent, x1, y1, x2, y2, attrs) {
    var l = svg("line", Object.assign({ x1: x1, y1: y1, x2: x2, y2: y2, stroke: palette.edge, "stroke-width": 1.5 }, attrs || {}));
    parent.appendChild(l);
    return l;
  }

  function stepper(container, steps, renderStep) {
    var state = { i: 0, playing: false, timer: null, speed: 700 };
    var root = document.createElement("div");
    root.className = "vis-controls";
    function btn(label, fn, aria) {
      var b = document.createElement("button");
      b.textContent = label;
      b.setAttribute("aria-label", aria || label);
      b.addEventListener("click", fn);
      return b;
    }
    var playBtn = btn("Play", function () { togglePlay(); }, "Play animation");
    var backBtn = btn("<", function () { step(-1); }, "Step back");
    var fwdBtn = btn(">", function () { step(1); }, "Step forward");
    var resetBtn = btn("Reset", function () { reset(); }, "Reset animation");
    var status = document.createElement("span");
    status.className = "vis-stepper-status";
    root.appendChild(playBtn);
    root.appendChild(backBtn);
    root.appendChild(fwdBtn);
    root.appendChild(resetBtn);
    root.appendChild(status);
    container.appendChild(root);
    var reduced = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    function show() {
      renderStep(steps[state.i], state.i, steps.length);
      status.textContent = "Step " + (state.i + 1) + " / " + steps.length;
    }
    function step(delta) {
      state.i = Math.max(0, Math.min(steps.length - 1, state.i + delta));
      show();
    }
    function reset() { state.i = 0; stop(); show(); }
    function stop() { state.playing = false; playBtn.textContent = "Play"; if (state.timer) { clearInterval(state.timer); state.timer = null; } }
    function togglePlay() {
      if (state.playing) { stop(); return; }
      state.playing = true; playBtn.textContent = "Pause";
      if (reduced) { step(1); stop(); return; }
      state.timer = setInterval(function () { if (state.i >= steps.length - 1) { stop(); return; } step(1); }, state.speed);
    }
    show();
    return { step: step, reset: reset, stop: stop };
  }

  function tooltip(el, text) {
    el.setAttribute("aria-label", text);
    el.setAttribute("title", text);
  }

  function graph(container, nodes, edges, opts) {
    opts = opts || {};
    var width = opts.width || 320;
    var height = opts.height || 220;
    var r = opts.radius || 14;
    var svgEl = svg("svg", { viewBox: "0 0 " + width + " " + height, class: "vis-svg", role: "img", "aria-label": opts.ariaLabel || "Graph" });
    container.appendChild(svgEl);
    var pos = {};
    nodes.forEach(function (n, i) {
      var angle = (2 * Math.PI * i) / nodes.length;
      pos[n.id] = { x: width / 2 + (width / 3) * Math.cos(angle), y: height / 2 + (height / 3) * Math.sin(angle) };
    });
    function render() {
      while (svgEl.firstChild) svgEl.removeChild(svgEl.firstChild);
      edges.forEach(function (e) {
        var a = pos[e.from], b = pos[e.to];
        line(svgEl, a.x, a.y, b.x, b.y, { stroke: e.color || palette.edge });
        if (e.label) text(svgEl, (a.x + b.x) / 2, (a.y + b.y) / 2, e.label, { "font-size": 10 });
      });
      nodes.forEach(function (n) {
        circle(svgEl, pos[n.id].x, pos[n.id].y, r, { fill: n.color || palette.node });
        text(svgEl, pos[n.id].x, pos[n.id].y, n.label || n.id, { fill: "#fff", "font-size": 11 });
      });
    }
    render();
    return { render: render, pos: pos };
  }

  function staticFrame(container, renderFn) {
    var box = document.createElement("div");
    box.className = "vis-static";
    container.appendChild(box);
    renderFn(box);
  }

  window.Visuals = {
    palette: palette,
    svg: svg,
    clear: clear,
    text: text,
    circle: circle,
    line: line,
    stepper: stepper,
    tooltip: tooltip,
    graph: graph,
    staticFrame: staticFrame
  };
})();
EOF
node --check visuals.js && echo "visuals.js ok"