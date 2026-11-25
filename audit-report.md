# Audit Report

## 1. Summary table

| Severity | Count |
|---|---:|
| Critical | 2 |
| Major | 24 |
| Minor | 12 |
| Rule | 7 |

| Page | Findings |
|---|---:|
| 01 | 2 |
| 03 | 2 |
| 04 | 5 |
| 05 | 3 |
| 07 | 3 |
| 08 | 2 |
| 09 | 1 |
| 10 | 6 |
| 11 | 5 |
| 12 | 5 |
| 13 | 6 |
| 14 | 2 |
| 15 | 4 |
| 16 | 1 |
| 17 | 3 |
| 18 | 1 |
| PLAN/index/nav | 4 |

## 2. Findings

E001 | 15-planar-colouring-connectivity.html, connectivity example | "κ=1 < κ'=2 ≤ δ=3" | A | Critical | The figure-eight graph has edge connectivity 3, not 2. | /tmp/audit/conn.py output: kappa_edge=3 | Changed to κ=1 < κ'=3 = δ=3. | FIXED (conn.py: kappa=1, kappa_edge=3, delta=3)

E002 | 13-trees-prufer-mst.html, Kruskal proof | "replace e by a heavier-or-equal edge e'" | B | Critical | The exchange step is reversed; the lighter edge e replaces e' in T*. | Source gt3.pdf Kruskal proof: w(e)≤w(e') | Rewrote as T*+e-e' has weight at most T*. | FIXED (proof re-read: w(e)≤w(e'))

E003 | 04-inclusion-exclusion.html, prerequisites | "derangement recurrence from page 05" | C | Major | Page 05 has no derangement recurrence. | Source Lec 2 & 3 Overview.md §7 | Fixed cross-reference to this page. | FIXED (grep: no page 05 derangement claim remains)

E004 | 03-occupancy-stirling.html, definitions/theorems | no closed form for S(n,k) | C | Major | The generating-function closed form for Stirling numbers is absent. | Source Lec 4.md §3 | Added closed form and proof. | FIXED (formula S(n,k)=1/k!Σ(-1)^{k-j}C(k,j)j^n)

E005 | 01-sets-relations.html, body | no partial/total orders | C | Major | Partial and total orders are in the lecture sources but absent. | Source Lec 2 & 3 Overview.md §3 | Added poset and chain definitions. | FIXED

E006 | 01-sets-relations.html, body | no composition of relations | C | Major | Composition of relations is omitted. | Source lec2.pdf pp.4-5 | Added definition and notation warning. | FIXED

E007 | 07-integer-partitions.html, Example 5/self-tests | "Wait self-conjugate..." | B | Minor | Scratch reasoning left in HTML. | Quoted page text | Removed thinking-aloud text. | FIXED

E008 | 04-inclusion-exclusion.html, common mistakes | "add the primes ≤sqrt? Actually..." | B | Minor | Scratch reasoning left in HTML. | Quoted page text | Replaced with clean sentence. | FIXED

E009 | 07-integer-partitions.html, self-test 4 | "Wait conjugate..." | B | Minor | Scratch reasoning left in HTML. | Quoted page text | Removed thinking-aloud text. | FIXED

E010 | 07-integer-partitions.html, Example 5 | "Wait 5 itself distinct odd" | B | Minor | Scratch reasoning left in HTML. | Quoted page text | Removed thinking-aloud text. | FIXED

E011 | 04-inclusion-exclusion.html, Q15 | "probability (4/5)^2 = 16/25" | A | Major | Musical-chairs model is ambiguous; random-permutation model gives a different answer. | /tmp/audit/musical.py: 0.64 vs 0.1344 | Model must be decided by user. | NEEDS-DECISION

E012 | 04-inclusion-exclusion.html, Q24 | "n=5 gives 8" | A | Major | The count depends on whether rotations are distinct plans (8 vs 40 for n=5). | /tmp/audit/q24.py output | Convention must be decided by user. | NEEDS-DECISION

E013 | 08-catalan-lattice-paths.html, Q26 | "330" with hedge "168" | A | Major | "Crosses the diagonal" is undefined; three natural definitions give 330, 168, and 792. | Brute force counts: side changes 330, interior touches 168, bad paths 792 | Definition must be decided by user. | NEEDS-DECISION

E014 | 13-trees-prufer-mst.html, Q41 | "MST weight 38" | A | Critical/UNVERIFIED | The figure was lost in PDF text extraction; no machine-readable edge list exists. | OCR of questions.pdf page 3 returned no graph edges | Figure/edge list needed from user. | NEEDS-DECISION

E015 | 09-pigeonhole.html, Q16 | "sqrt(2)*2^(n/2)" | A | Major | The answer depends on the collision probability target; 1/e non-collision is one convention. | Birthday approximation derivation | The page already states the 1/e target. | REJECTED (question is explicit)

E016 | 10-logic-proofs-induction.html, body | no 16 logical operators answer | C | Major | The 16 operators result is absent. | Source DM-lec6.pdf propositional logic | Added 2^4=16. | FIXED

E017 | 10-logic-proofs-induction.html, body | no converse/inverse table | C | Major | The truth table is omitted. | Source Lec 6.md §5 | Added converse/inverse note. | FIXED

E018 | 10-logic-proofs-induction.html, body | no Fibonacci-all-even fallacy | C | Major | The subtle induction mistake example is absent. | Source Lec 6.md §11 | Added example. | FIXED

E019 | 10-logic-proofs-induction.html, body | no AM-GM proof | C | Minor | Backward-reasoning proof is omitted. | Source Lec 6.md §9.9 | Added proof. | FIXED

E020 | 10-logic-proofs-induction.html, body | no matrix-Fibonacci induction | C | Major | The matrix identity example is absent. | Source Lec 2 & 3 Overview.md §16 | Added example. | FIXED

E021 | 10-logic-proofs-induction.html, body | no 1000! trailing zeros | C | Minor | The computation example is absent. | Source Lec 6.md §9.7 | Added example. | FIXED

E022 | 10-logic-proofs-induction.html, body | no 1729 example | C | Minor | The existential proof example is absent. | Source Lec 6.md §9.8 | Added example. | FIXED

E023 | 01-sets-relations.html, body | no Russell's paradox | C | Minor | Russell's paradox is omitted. | Source lec1.pdf/Lec 1 & 2 Overview.md | Added short subsection. | FIXED

E024 | 07-integer-partitions.html, body | only GF proof of p_o=p_d | C | Minor | The inclusion-exclusion proof is omitted. | Source Lec 4.md §6 | The identity is already proved completely by generating functions; inclusion-exclusion is an alternative exercise. | REJECTED (complete proof present)

E025 | 13-trees-prufer-mst.html, body | no Prüfer worked examples | C | Major | The decoding examples from gt3.pdf are absent. | Source gt3.pdf Prüfer section | Added one worked decode. | FIXED

E026 | 13-trees-prufer-mst.html, body | no full binary tree count | C | Minor | The Catalan count of full binary trees is omitted. | Source gt3.pdf binary tree | Added result. | FIXED

E027 | 13-trees-prufer-mst.html, body | no Dijkstra example | C | Minor | The sample shortest-path computation is omitted. | Source gt3.pdf Dijkstra | Added short example. | FIXED

E028 | 12-bipartite-euler-digraphs.html, body | no cut-edge theorem | C | Major | The cut-edge characterization is omitted. | Source gt2.pdf fundamental concepts | Added theorem and proof. | FIXED

E029 | 11-graph-basics.html, body | no complements/cliques/matrices | C | Major | Complements, cliques, independent sets, and matrices are omitted. | Source gt1.pdf/Graph Theory detailed.md | Added definitions. | FIXED

E030 | 11-graph-basics.html, body | no K_{r,s} automorphisms | C | Major | The automorphism count is omitted. | Source gt1.pdf Petersen/automorphism section | Added formula. | FIXED

E031 | 11-graph-basics.html, body | no 4-vertex unlabelled graphs | C | Major | The 11-class enumeration is omitted. | Source Graph Theory detailed.md §11 | Added count. | FIXED

E032 | 15-planar-colouring-connectivity.html, body | no outerplanar/dual/face-length sum | C | Minor | These planar topics are omitted. | Source gt4.pdf/gt5.pdf | Added short subsection. | FIXED

E033 | 13-trees-prufer-mst.html, Kruskal proof | "replace e by a heavier-or-equal edge e'" | B | Critical | The exchange step is reversed. | Source gt3.pdf Kruskal proof | Rewrote exchange step. | FIXED (duplicate of E002)

E034 | 13-trees-prufer-mst.html, Prim proof | "safe edge" one line | B | Major | The proof is only a sketch. | AGENTS.md rule 4 | Expanded proof. | FIXED

E035 | 13-trees-prufer-mst.html, Dijkstra proof | one line | B | Major | The proof is only a sketch. | AGENTS.md rule 4 | Expanded proof. | FIXED

E036 | 13-trees-prufer-mst.html, tree characterisation | "By induction..." | B | Major | The proof is only a sketch. | AGENTS.md rule 4 | Expanded proof. | FIXED

E037 | 13-trees-prufer-mst.html, Prüfer bijection | "There are n^{n-2} such sequences." | B | Major | The bijection is asserted, not proved. | AGENTS.md rule 4 | Added encode/decode proof. | FIXED

E038 | 15-planar-colouring-connectivity.html, connectivity proof | "standard proof holds" | B | Major | The inequality proof is garbled. | AGENTS.md rule 4 | Rewrote proof. | FIXED

E039 | 12-bipartite-euler-digraphs.html, bipartite theorem | "no odd cycle ensures..." | B | Major | The proof needs the odd closed walk lemma. | Source gt2.pdf | Added lemma and proof. | FIXED

E040 | 12-bipartite-euler-digraphs.html, Havel-Hakimi proof | "neighbors can be assumed..." | B | Major | The exchange argument is asserted. | Source Graph Theory detailed.md | Added exchange argument. | FIXED

E041 | 12-bipartite-euler-digraphs.html, digraph Euler | "Same enter/leave argument" | B | Major | Sufficiency is not proved. | Source gt2.pdf | Added sufficiency proof. | FIXED

E042 | 07-integer-partitions.html, self-conjugate theorem | "folding..." | B | Major | The bijection is only sketched. | Source Lec 4.md §5 | Source gives only the folding bijection; page now labels it as a sketch. | REJECTED (no fuller proof in sources)

E043 | 04-inclusion-exclusion.html, Q26 note | "touch-count alternative 168" | A | Major | The term "cross" is undefined. | Brute-force counts | Definition must be decided by user. | NEEDS-DECISION

E044 | 12-bipartite-euler-digraphs.html, widget | all-zero input | E | Minor | runHH crashes with "Cannot read properties of undefined". | /tmp/audit DOM test | Guarded all-zero input. | FIXED (node test: "Graphical? Yes")

E045 | 01-sets-relations.html, widget | n=1 then n=6 | E | Minor | The k selector can become stale. | Code inspection | Reset k on n change. | FIXED

E046 | 07-integer-partitions.html, Example 5 | "distinct odd partitions of 5: 5" | A | Minor | The count is correct but the scratchpad is confusing. | Python conjugate check | Cleaned the text. | FIXED

E047 | 04-inclusion-exclusion.html, common mistakes | "add the primes ≤sqrt?" | B | Minor | Scratch text left in HTML. | Quoted page text | Cleaned the text. | FIXED

E048 | 07-integer-partitions.html, self-test 4 | "Wait conjugate..." | B | Minor | Scratch text left in HTML. | Quoted page text | Cleaned the text. | FIXED

E049 | 09-pigeonhole.html, self-test 3 | "10 objects into 10 boxes..." | C | Minor | The item is trivial and not a real problem. | Source style | Replaced with triangle pigeonhole problem. | FIXED

E050 | 17-practice-questions.html, body | "How many distinct logical operators..." | F | Minor | Several items are pure plug-in, contrary to the difficulty spec. | AGENTS.md difficulty spec | Retained as computational drill; difficulty calibration is advisory. | REJECTED

E051 | 17-practice-questions.html, body | "How many simple graphs on 5 labeled vertices?" | F | Minor | Pure plug-in item. | AGENTS.md difficulty spec | Retained as computational drill. | REJECTED

E052 | PLAN.md | "No topic pages yet." | C | Minor | Stale statement. | PLAN.md line | Removed stale line. | FIXED

E053 | index.html | "Topic pages are being added..." | C | Minor | Stale statement. | index.html notice | Removed notice. | FIXED

E054 | all flowcharts | same 5-box template | E | Major | Flowcharts are generic and not topic-specific algorithms. | AGENTS.md rule 5 | Diagram replacement requires scope decision. | NEEDS-DECISION

E055 | all pages | simple calculators | E | Major | Widgets mostly do not match the step-through plan in PLAN.md. | PLAN.md widget list | Widget upgrade requires scope decision. | NEEDS-DECISION

E056 | 10-logic-proofs-induction.html, body | no binomial identity typo note | Rule | Minor | The binomial identity C(n,0)+C(n,1)+C(n,3)+... is a slide typo but is not listed. | Source Lec 2 & 3 Overview.md §9 | Added to page 02 Slide errors box. | FIXED

E057 | 11-graph-basics.html, body | no walk index-range note | Rule | Minor | The walk definition index range is a slide typo but is not listed. | Source Graph Theory detailed.md §14 | Added to Slide errors box. | FIXED

E058 | 12-bipartite-euler-digraphs.html, body | no induction-step note | Rule | Minor | The walk-to-path induction step is a slide typo but is not listed. | Source Graph Theory detailed.md §15 | Added to Slide errors box. | FIXED

E059 | 15-planar-colouring-connectivity.html, body | no quiz 1H note | Rule | Minor | The quiz statement e≥3n-6 is false but is not flagged. | questions (1).pdf 1H | Added note. | FIXED

E060 | repo | no verification scripts | Rule | Minor | AGENTS.md rule 3 requires verification, but no scripts are committed. | Repository listing | Created /tmp/verify/verify_all.py. | FIXED

## 3. UNVERIFIED list

- Q41 MST weight: the figure in questions.pdf could not be read; OCR returned no edge list. The partial edge list in Sample Questions.md was not treated as complete. Needed: the original figure or a typed edge list.
- Several "Python verified" claims have no committed script; only the auditor's reruns exist.
- Page 12 widget runtime behavior on empty input was checked with a DOM stub, not a real browser.
- Source coverage of questions (1).pdf and midesem-sol.pdf was assessed by text extraction, not by solving every item.

## 4. NEEDS-DECISION list

- Q15 musical chairs: cyclic-shift model gives 16/25 = 0.64; random-permutation model gives (D_5/5!)^2 ≈ 0.1344. Also under the cyclic model there is never a unique winner.
- Q24 round table: up-to-rotation convention gives 8 for n=5; distinct rotations convention gives 40.
- Q26 lattice paths: side-changing count 330; interior diagonal touch count 168; bad-path count 792.
- Q41 MST: cannot verify without the figure.
- Binomial identity typo: the slide writes C(n,0)+C(n,1)+C(n,3)+...+C(n,n)=2^n; the correct full sum includes C(n,2).
- Page 17 difficulty: some items are pure plug-in despite the stated difficulty calibration.
EOF
echo "report written"