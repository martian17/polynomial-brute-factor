This is a brute force polynomial factorization program I made for my sister's homework

How to use
1. git clone https://github.com/martian17/polynomial-brute-factor.git
2. node main.js 1 2 1 where the numbers are from polynomial x^2+2x+1
3. see the result

Examples

```cobol
$ node main.js 1 5 5 -5 -6
calculating x^4+5x^3+5x^2-5x-6 ...
success
(x-1)(1x^3+6x^2+11x+6)
```

Example 2 (failute to find the solution)
```cobol
$ node main.js 1 3 2 4
calculating 1x^3+3x^2+2x+4 ...
no solution within +- 10
```
