# Discrete Mathematics-I — Exam Prep Site Plan

Scope: 15 static topic pages + shared UI, all offline, no CDN, no external images.

## Topic pages (in order)

| # | File | Title | Lecture sources used | Practice questions covered |
|---|------|-------|----------------------|---------------------------|
| 01 | `01-sets-relations.html` | Sets, relations, equivalence relations, partitions, functions, sequences | `lec1.pdf`, `lec2.pdf`, `lec2 (1).pdf` (pp.1–12), `Lec 1 & 2 Overview.md`, `Lec 2 & 3 Overview.md` §§1–5 | 1, 2, 3, 11, 25 |
| 02 | `02-basic-counting.html` | Basic counting: sum/product rule, permutations, combinations, repetition, stars and bars | `lec2 (1).pdf`, `Lec 2 & 3 Overview.md` §§8–12, `Lec 4.md` §§2, `Lec 5.md` §4, `lec5.pdf` | 5, 21 |
| 03 | `03-occupancy-stirling.html` | Occupancy problem, Stirling numbers of the 2nd kind, surjections | `lec3.pdf`, `Lec 2 & 3 Overview.md` §§11,19–20, `Lec 4.md` §1, `Lec 5.md` §2, `lec5.pdf` | 7 |
| 04 | `04-inclusion-exclusion.html` | Inclusion–exclusion (proof, derangements, surjections, Euler phi, primes ≤200, forbidden strings) | `lec3.pdf`, `Lec 2 & 3 Overview.md` §§12–15,18, `Lec 4.md`, `lec2 (1).pdf` | 8, 9, 15, 17, 18, 19, 23, 24, 27, 28 |
| 05 | `05-recurrences.html` | Recurrence relations (linear homogeneous, non-homogeneous, particular solutions, Hanoi, ladder/Fibonacci) | `lec2 (1).pdf`, `Lec 2 & 3 Overview.md` §§6–7, `Lec 5.md` §7, `lec5.pdf` | 4, 6, 14, 20, 29 |
| 06 | `06-generating-functions.html` | Generating functions | `lec3.pdf`, `Lec 2 & 3 Overview.md` §§21–22, `Lec 4.md` §3, `Lec 5.md` §3, `lec5.pdf` | 13 |
| 07 | `07-integer-partitions.html` | Integer partitions (Ferrers diagrams, P(n,k), self-conjugate, odd = distinct, generating functions) | `Lec 2 & 3 Overview.md` §23, `Lec 4.md` §§4–8, `Lec 5.md` §1, `lec5.pdf` | 10, 12, 22, 30 |
| 08 | `08-catalan-lattice-paths.html` | Catalan numbers and lattice paths (reflection principle) | `Lec 5.md` §5, `lec5.pdf` | 26 |
| 09 | `09-pigeonhole.html` | Pigeonhole principle | `Lec 5.md` §6, `lec5.pdf` | 16 |
| 10 | `10-logic-proofs-induction.html` | Logic, proof techniques, induction (and the fallacy examples) | `lec3.pdf`, `DM-lec6.pdf`, `Lec 6.md`, `Lec 2 & 3 Overview.md` §§16–18 | — |
| 11 | `11-graph-basics.html` | Graph basics (definitions, isomorphism, Petersen graph, walks/trails/paths, components) | `gt1.pdf`, `Graph Theory detailed.md` §§1–11,15–19, `Lec 7 (Graph Theory).md` §§1–9 | 31, 32, 33, 38, 39 |
| 12 | `12-bipartite-euler-digraphs.html` | Bipartite graphs, Eulerian circuits, degrees, digraphs, tournaments and kings, degree sequences | `gt1.pdf`, `gt2.pdf`, `Graph Theory detailed.md`, `Lec 7 (Graph Theory).md` | 34, 37, 42, 43 |
| 13 | `13-trees-prufer-mst.html` | Trees, Prüfer codes, spanning trees, Kruskal, Prim, Dijkstra, rooted and binary trees | `gt3.pdf`, `Graph Theory detailed.md`, `Lec 7 (Graph Theory).md` | 35, 36, 40, 41, 44 |
| 14 | `14-matchings.html` | Matchings (Hall's theorem, stable marriage / Gale–Shapley) | `gt3.pdf`, `Graph Theory detailed.md`, `Lec 7 (Graph Theory).md` | — |
| 15 | `15-planar-colouring-connectivity.html` | Planar graphs, Euler's formula, 5- and 6-colour theorems, colouring, connectivity | `gt4.pdf`, `gt5.pdf`, `Graph Theory detailed.md`, `Lec 7 (Graph Theory).md` | 45, 46 |

Every practice question 1–46 appears in exactly one row above.

## Planned interactive widget per page

1. `01`: equivalence-class partitioner for a small set + SVG Venn diagram.
2. `02`: animated stars-and-bars counter and permutation/combination calculator.
3. `03`: occupancy table explorer with Stirling-number triangle.
4. `04`: three-set Venn diagram with inclusion–exclusion totals and derangement calculator.
5. `05`: recurrence stepper (Hanoi move count, ladder count) with closed-form check.
6. `06`: generating-function coefficient extractor for a typed recurrence.
7. `07`: Ferrers diagram drawer with conjugation animation and partition counter.
8. `08`: lattice-path grid showing reflection principle.
9. `09`: pigeonhole occupancy animation and birthday-collision approximation.
10. `10`: truth-table generator and induction base/step checker.
11. `11`: small graph editor with adjacency matrix and isomorphism invariants.
12. `12`: Euler-circuit tracer and tournament king finder.
13. `13`: Prüfer encode/decode widget and Prim/Kruskal MST stepper.
14. `14`: Hall-condition checker and Gale–Shapley step animation.
15. `15`: Euler-formula face counter, planarity/colouring demo, connectivity example.

All diagrams use inline SVG/Canvas/CSS/JS only. No external images or CDN dependencies.

## Topics marked "Not in slides — standard result"

- Q16 birthday/hash-collision approximation (page 09).
- Q42 Havel–Hakimi theorem (page 12).
- Q45 vertex/edge connectivity κ, κ′ (page 15).
- Q46 colour-critical graphs (page 15).

## Slide errors to be corrected silently in the guide

- Induction written as "for all k>1" (should be k≥1).
- Strong induction written as "1<t<k" (should be 1≤t<k).
- AM–GM stated for "distinct reals" (requires a,b≥0).
- Q9(a) in `questions.pdf` says x_i>1; guide uses x_i≥1 (markdown version).
- Quantifier slide uses a biconditional where an implication is meant.

## Shared files created in this step

- `style.css`: light/dark, readable, print-friendly.
- `nav.js`: sidebar navigation injected into every page.
- `index.html`: table of contents.
- Added `17-practice-questions.html` (60 new questions, no answers) and `18-answer-key.html` (answers); answer key intentionally not in sidebar.
