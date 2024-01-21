## PSO

### Info

- As we don't draw all the results in this project, I decided to code it without classes, and store only the values that we need for further decisions or calculation.
- Final result is shown on the page, details are in the browser console.

### Usage

- Modify line 10 to change the benchmark functions
- Modify line 13 and 14 for search range (see below)

### Benchmark functions list

| Name                             | Name in this code | Range                 |
| -------------------------------- | ----------------- | --------------------- |
| Sphere Function                  | Sphere            | -100 ≤ xi ≤ 100       |
| Rosenbrock Function              | Rosenbrock        | -2.048 ≤ xi ≤ 2.048   |
| Step 2 Function                  | Step2             | -10 ≤ xi ≤ 10         |
| Quartic Function                 | Quartic           | -2.56 ≤ xi ≤ 2.56     |
| Schwefel 2.21 Function           | Schwefel221       | -100 ≤ xi ≤ 100       |
| Schwefel 2.22 Function           | Schwefel222       | -10 ≤ xi ≤ 10         |
| Six-hump camel back Function     | Camel6            | -5 ≤ xi ≤ 5           |
| Levi Function N.13               | Levi              | -50 ≤ xi ≤ 50         |
| Rastrigin Function               | Rastrigin         | -5.12 ≤ xi ≤ 5.12     |
| Griewank Function                | Griewank          | -600 ≤ xi ≤ 600       |
| Ackley 1 Function                | Ackley            | -32 ≤ xi ≤ 32         |
| Branin RCOS Function             | Branin            | -5 ≤ xi ≤ 5           |
| Goldstein Price Function         | Goldstein         | -2 ≤ xi ≤ 2           |
| Rotated Hyper Ellipsoid Function | Ellipsoid         | -65.536 ≤ xi ≤ 65.536 |
| Alpine Function No.01            | Alpine            | -10 ≤ xi ≤ 10         |

### Reference

- [PyBenchFCN ](https://github.com/Y1fanHE/PyBenchFCN)
- [Optimization Test Functions and Datasets](https://www.sfu.ca/~ssurjano/optimization.html)
- [Benchmark Functions - A Python Library](https://gitlab.com/luca.baronti/python_benchmark_functions)
- [Test functions for optimization](https://en.wikipedia.org/wiki/Test_functions_for_optimization)
- [Alroomi Website - n-Dimensions](https://al-roomi.org/benchmarks/unconstrained/n-dimensions/)
- [Rotated Hyper-Ellipsoid Function](https://www.indusmic.com/post/rotated-hyper-ellipsoid-function)
- [Learn Particle Swarm Optimization (PSO) in 20 minutes](https://youtu.be/JhgDMAm-imI?si=ZkTSoseY6u6Sz3vJ)
