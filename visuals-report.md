# Visuals Report

## Per page

01: vis-01 equivalence-class counter. Tests: node script OK. No rejected visuals.
02: vis-02 stars-and-bars calculator. Tests: node script OK.
03: vis-03 Stirling recurrence calculator. Tests: node script OK.
04: vis-04 Venn calculator, multiplicity proof, sieve grid, derangement counter, elevator surjection, forbidden-string note. Tests: node script OK.
05: vis-05 ladder recurrence calculator. Tests: node script OK.
06: vis-06 coefficient extractor. Tests: node script OK.
07: vis-07 Ferrers conjugate. Tests: node script OK.
08: vis-08 lattice path counter. Tests: node script OK.
09: vis-09 pigeonhole calculator. Tests: node script OK.
10: vis-10 truth table. Tests: node script OK.
11: vis-11 degree-sum checker. Tests: node script OK.
12: vis-12 Havel-Hakimi stepper; fixed all-zero crash. Tests: node script OK.
13: vis-13 labeled tree count. Tests: node script OK.
14: vis-14 Hall checker. Tests: node script OK.
15: vis-15 Euler formula. Tests: node script OK.
16: vis-16 concept map note. Tests: node script OK.
17: vis-17 progress panel. Tests: node script OK.
18: vis-18 answer-key controls. Tests: node script OK.

## Rejected visuals

None added then deleted; several planned step-through visuals were not implemented because the minimal calculators cover the core computation. Q41-dependent visual skipped (NEEDS-DECISION).

## Tests run

- node --check on visuals.js and all vis-*.js: passed.
- DOM-stub execution of every page script: passed.
- Offline grep: no external requests.
- Well-formedness check: passed.

## Text errors discovered

- Page 11 Q32 solution cleaned.
- Page 13 Example 4 cleaned.
- Page 15 self-test 1 cleaned.
EOF
echo done