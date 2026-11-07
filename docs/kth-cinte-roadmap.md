# KTH CINTE preparation · November 2026–August 2027

This is a self-directed preparation plan for KTH's five-year Information and Communication Technology programme. Use one primary project at a time and move dates when a milestone needs more practice.

## Course alignment

The [HT2027 programme syllabus](https://www.kth.se/student/kurser/program/CINTE/20272/arskurs1) is the cohort reference. The detailed course mapping below uses the [published HT2026 first-year table](https://www.kth.se/student/kurser/program/CINTE/20262/arskurs1) as a planning baseline. Check the HT2027 course table before treating the mapping as a schedule. These projects are independent exercises. Discuss credit transfer separately with KTH.

| Project | Skills to build | Course themes |
| --- | --- | --- |
| IT Ticket Tracker | State, modular design, HTTP contracts, persistence and automated testing | ID1022 programming practice and preparation for later software projects |
| Route Engine | Graph modeling, shortest paths, complexity and reproducible experiments | ID1021 algorithms and data structures, SF1698 discrete mathematics |
| Computer Systems Lab | Boolean logic, sequential state, instruction execution and peripheral simulation | IE1204 digital design, IE1206 embedded electronics |

The starting point is prior programming, algorithms, discrete math, parallel programming, HCI and engineering writing. Use them to design experiments, justify trade-offs, review the keyboard flow and write short technical reports.

## Sequence and exit criteria

| Window | Focus | Evidence to move on |
| --- | --- | --- |
| Nov–Dec | Tracker browser release | Creating a ticket and changing any status survives reload. Empty title gets a visible error. Playwright exercises both persistence paths from a clean browser context. |
| Jan–Feb | Tracker service release | Express API supports create/list/read/status update. SQLite preserves data across restart. Automated API tests cover invalid input and unknown IDs. A clean clone can run the demo. |
| Mar–Apr | Route Engine | Directed weighted graph, BFS and Dijkstra, deterministic fixtures, unreachable and zero-weight cases. Benchmark a simple baseline against a priority queue on seeded graphs. Write a one-page report explaining observed scaling. |
| May–Jun | Computer Systems Lab | Truth-table tests, clocked registers, fetch/decode/execute, bounded program execution, memory access and one simulated peripheral. Trace a sample program by hand and compare against a recorded trace. |
| Jul–Aug | Review and buffer | Rebuild one algorithm and one state machine from a blank file. Reproduce each release from a clean checkout and write a short report on one bug, one trade-off and one open question per project. |

## Start with one Tracker PR

On main, public/app.js reads localStorage and writes at startup. Creation, the status dropdown and the completion button mutate the in-memory array without saving it.

1. Reproduce each case on the same local HTTP origin using an isolated browser profile. Record what remains after reload.
2. On feat/persist-ticket-changes, add a shared save function and call it after creation and both status changes. Remove the startup write. Explain how saved data is loaded.
3. Check a fresh start, create → reload, dropdown change → reload and completion button → reload. Commit as `fix: persist ticket mutations` and open a PR with observed results. Add the automated regression in a follow-up PR if setup needs its own review.

## Weekly routine

Pick at most two implementation tasks and one verification task. Start each block by writing the expected behavior and a small test case. Use a short-lived branch and PR with reproduction steps, test output and a note on what you could now explain without notes. Log focused sessions and how quickly you can resume after a break. In a lighter week, complete one test or a small bug fix and carry the rest forward.
