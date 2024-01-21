// benchmark functions
function benchmark(arr, type) {
  const x = arr[0];
  const y = arr[1];

  switch (type) {
    // Sphere Function
    case 'Sphere':
      return x ** 2 + y ** 2;
    // Rosenbrock function
    case 'Rosenbrock':
      return 100 * (y - x ** 2) ** 2 + (1 - x) ** 2;
    // Step 2 Function
    case 'Step2':
      return (x + 0.5) ** 2 + (y + 0.5) ** 2;
    // Quartic Function
    case 'Quartic':
      return (
        Math.pow(x, 4) +
        randomValue(0, 1) +
        2 * Math.pow(y, 4) +
        randomValue(0, 1)
      );
    // Schwefel 2.21 Function
    case 'Schwefel221':
      return Math.max(Math.abs(x), Math.abs(y));
    // Schwefel 2.22 Function
    case 'Schwefel222':
      return Math.abs(x) + Math.abs(y) + Math.abs(x) * Math.abs(y);
    // Six-hump camel back Function
    case 'Camel6':
      const term1 = 4 * x ** 2 - 2.1 * x ** 4 + x ** 6 / 3;
      const term2 = x * y;
      const term3 = 4 * y ** 2 + 4 * y ** 4;
      return term1 + term2 + term3;
    // Levi Function N.13
    case 'Levi':
      const Levi1 = Math.sin(Math.PI * 3 * x) ** 2;
      const Levi2 = (x - 1) ** 2 * Math.sin(Math.PI * 3 * y) ** 2;
      const Levi3 = (y - 1) ** 2 * (1 + Math.sin(3 * Math.PI * y) ** 2);
      return Levi1 + Levi2 + Levi3;
    // Rastrigin Function
    case 'Rastrigin':
      const Rastrigin1 = x ** 2 - 10 * Math.cos(2 * Math.PI * x) + 10;
      const Rastrigin2 = y ** 2 - 10 * Math.cos(2 * Math.PI * y) + 10;
      return Rastrigin1 + Rastrigin2;
    // Griewank Function
    case 'Griewank':
      const Griewank1 = (x ** 2 + y ** 2) / 4000;
      const Griewank2 = Math.cos(x / Math.sqrt(1)) * Math.cos(y / Math.sqrt(2));
      return Griewank1 - Griewank2 + 1;
    // Ackley 1 Function
    case 'Ackley':
      const Ackley1 = -20 * Math.exp(-0.2 * Math.sqrt((x ** 2 + y ** 2) / 2));
      const Ackley2 = Math.exp(
        (Math.cos(2 * Math.PI * x) + Math.cos(2 * Math.PI * y)) / 2
      );
      return Ackley1 - Ackley2 + 20 + Math.exp(1);
    // Branin RCOS Function
    case 'Branin':
      const Branin1 =
        (y - (5.1 * x ** 2) / (4 * Math.PI ** 2) + (5 * x) / Math.PI - 6) ** 2;
      const Branin2 = 10 * (1 - 1 / (8 * Math.PI)) * Math.cos(x);
      return Branin1 + Branin2 + 10;
    // Goldstein Price Function
    case 'Goldstein':
      const Goldstein1 =
        1 +
        (x + y + 1) ** 2 *
          (19 - 14 * x + 3 * x ** 2 - 14 * y + 6 * x * y + 3 * y ** 2);
      const Goldstein2 =
        30 +
        (2 * x - 3 * y) ** 2 *
          (18 - 32 * x + 12 * x ** 2 + 48 * y - 36 * x * y + 27 * y ** 2);
      return Goldstein1 * Goldstein2;
    // Rotated Hyper Ellipsoid Function
    case 'Ellipsoid':
      return 2 * x ** 2 + y ** 2;
    //  Alpine Function No.01
    case 'Alpine':
      const Alpine1 = Math.abs(x + Math.sin(x) + 0.1 * x);
      const Alpine2 = Math.abs(y + Math.sin(x) + 0.1 * y);
      return Alpine1 + Alpine2;
    default:
      return 0;
  }
}
