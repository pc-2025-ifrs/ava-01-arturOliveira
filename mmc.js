// MMC
function mmc(x, y) {
  let mmc;
  if (typeof x !== "number" || typeof y !== "number") return null;
  if (x < 0) x *= -1;
  if (y < 0) y *= -1;
  if (x % 1 != 0) x = Math.round(x);
  if (y % 1 != 0) y = Math.round(y);
  for (let i = y; i <= x * y; i++) {
    if (i % x == 0 && i % y == 0) {
      mmc = i;
      break;
    }
  }
  return mmc;
}

// Testes
console.log(mmc(3, 4));
console.log(mmc(18, 131));
console.log(mmc(-3, -4));
console.log(mmc(-5, 16));

console.log(mmc(3.5, 4));
console.log(mmc(3, 4.1));
console.log(mmc(3.8, 4.1));

console.log(mmc("3", "4"));
console.log(mmc("a", "b"));
console.log(mmc([3, 4]));

console.log(mmc(3));
console.log(mmc());
console.log(mmc(3, 4, 5));
console.log(mmc(3, 4, 5, 6));

// MDC
function mdc(x, y) {
  let mdc;
  if (typeof x !== "number" || typeof y !== "number") return null;
  if (x < 0) x *= -1;
  if (y < 0) y *= -1;
  if (x % 1 != 0) x = Math.round(x);
  if (y % 1 != 0) y = Math.round(y);
  n = Math.max(x, y);
  for (i = 2; i <= n; i++) {
    if (x % i == 0 && y % i == 0) {
      mdc = i;
      break;
    }
  }
  if (mdc == undefined) return null;
  return mdc;
}

// Testes
console.log(mdc(3, 4));
console.log(mdc(18, 131));
console.log(mdc(-3, -4));
console.log(mdc(-5, 16));

console.log(mdc(3.5, 4));
console.log(mdc(3, 4.1));
console.log(mdc(3.8, 4.1));

console.log(mdc("3", "4"));
console.log(mdc("a", "b"));
console.log(mdc([3, 4]));

console.log(mdc(3));
console.log(mdc());
console.log(mdc(3, 4, 5));
console.log(mdc(3, 4, 5, 6));
