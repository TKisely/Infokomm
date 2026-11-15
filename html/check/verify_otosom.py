"""Független ellenőrzés az 5-ösöm példatárhoz. Futtatás: python3 -I check/verify_otosom.py"""
import math, itertools
lg = math.log10
ok = 0; bad = []
def chk(name, got, exp, tol=0.01):
    global ok
    if abs(got - exp) <= tol * max(1, abs(exp)): ok += 1
    else: bad.append(f'{name}: számolt {got!r}, a jegyzetben {exp!r}')
def eb(A, N):
    b = 1.0
    for n in range(1, N + 1): b = A * b / (n + A * b)
    return b
def amax(N, p):
    lo, hi = 0.0, 100.0
    for _ in range(80):
        m = (lo + hi) / 2
        lo, hi = (m, hi) if eb(m, N) <= p else (lo, m)
    return lo
def gf2(v, M): return [sum(a * b for a, b in zip(v, col)) % 2 for col in zip(*M)]
bits = lambda s: [int(c) for c in s]
def dmin(G): return min(sum(gf2(u, G)) for u in itertools.product([0, 1], repeat=len(G)) if any(u))
# 1
chk('1.1', math.hypot(3, 4), 5); chk('1.3 fD', 5 * 3 * math.pi / (2 * math.pi), 7.5); chk('1.3 B', 2 * (1.5 + 7.5), 18)
chk('1.4 Uv', 1.8 / 1.2, 1.5); chk('1.6 Phi', 8 * math.pi / 3, 8.38, 0.01); chk('1.6 B', 2 * (25 + 2.5), 55)
chk('1.7 C', 3 / math.sqrt(4 / 2 + 1 / 8 + 1 / 8), 2)
# 2
chk('2.1', 8 * 3 / 4 * 8 / 1.5, 32)
tol = lambda L: math.degrees(math.acos((L - 1) / (L * math.sqrt(2)))) - 45
chk('2.2 fázis', tol(5), 10.6, 0.01); chk('2.2 (5,1)', math.degrees(math.atan(1 / 5)), 11.3, 0.01); chk('2.2 d', math.degrees(math.atan(1 / 7)), 8.1, 0.01)
chk('2.3', 360 / 32, 11.25); chk('2.3 B', 500 / 4, 125)
# 3
chk('3.1', 1.15 - 3 * 0.25, 0.4); chk('3.3 v', 2 * 2, 4); chk('3.3 α', 0.2 / 1, 0.2)
# 4
fs = 10; comps = sorted({abs(n * fs + s * f) for f in (1, 3) for n in range(0, 3) for s in (1, -1)} - {0})
assert [c for c in comps if c < 11] == [1, 3, 7, 9]; ok += 1
a45 = 4 * 2 / (math.pi * 3); chk('4.2 4,5 kHz', a45, 0.85, 0.01)
chk('4.3', 8 - 4.45, 3.55)
# 5
chk('5.1', 20 - 85, -65); chk('5.1 W', 100 / 10 ** 8.5 * 1e7, 3.16, 0.01)
chk('5.2 a', 10 * lg(2000 / 40e-12), 137.0, 0.01); chk('5.2 GR', 10 * lg(4 * math.pi * math.pi * 0.25 / 0.03 ** 2), 40.4, 0.01)
chk('5.2 GT', 20 * lg(4 * math.pi * 350e3 / 0.03) - 40.4 - 137, -14.1, 0.02)
chk('5.3 hT', 1000 / 3 / (4 * 1.66), 50.2); chk('5.3 a', 20 * lg(15e3 ** 2 / (50 * 5 / 3)) - 16, 112.6)
chk('5.4', 10 * lg(math.sin(math.pi / 4) ** 2), -3.0, 0.01)
chk('5.5', 3 * 500 ** 2 / 12.5, 60000)
chk('5.6 a', 20 * lg(4 * math.pi * 2e7 / 0.2) - 16, 166, 0.01); chk('5.6 d', 2 * math.sqrt(10 ** 1.3 * 0.2 ** 2 / (4 * math.pi) / math.pi) * 1000, 284, 0.01)
# 6
G1 = [bits(x) for x in ['1000110', '0100101', '0010011', '0001111']]
HT1 = [bits(x) for x in ['110', '101', '011', '111', '100', '010', '001']]
assert gf2(bits('0110000'), HT1) == [1, 1, 0] and dmin(G1) == 3; ok += 1
G2 = [bits(x) for x in ['10001100', '01001010', '00100110', '00011111']]; assert dmin(G2) == 3; ok += 1
chk('6.2', 0.5 + 0.25 * 2 * 2, 1.5)
assert gf2(bits('01010'), [bits(x) for x in ['101', '110', '100', '010', '001']]) == [1, 0, 0]; ok += 1
assert gf2(bits('11101'), [bits(x) for x in ['101', '011', '100', '010', '001']]) == [0, 1, 1]; ok += 1
chk('6.5 H', math.log2(9), 3.17, 0.01); chk('6.5 L', 29 / 9, 3.22, 0.01)
chk('6.6', sum(2 ** -l for l in [2, 2, 3, 3, 3, 4, 4, 4, 4]), 18 / 16)
# 7
def rgb(Y, Cb, Cr): B = Cb + Y; R = Cr + Y; return R, (Y - 0.3 * R - 0.11 * B) / 0.59, B
for got, exp in [(rgb(0.22, -0.12, 0.28), (0.5, 0.1, 0.1)), (rgb(0.182, 0.118, 0.118), (0.3, 0.1, 0.3)), (rgb(0.3, 0.7, -0.3), (0, 0.32, 1))]:
    assert all(abs(a - b) < 0.01 for a, b in zip(got, exp)), got
    ok += 1
# 8
chk('8.3 B', 6818 / 896e-6 / 1e6, 7.61); chk('8.3 Rs', 6048 / (1.25 * 896e-6) / 1e6, 5.4); chk('8.3 net', 5.4 * 6 * 0.75 * 188 / 204, 22.4)
# 9
chk('9.1', 44 * 992, 43648)
# 10
chk('10.1', 16000 / 160, 100); chk('10.1 B', 86 * 8 * 100 / 1000, 68.8)
chk('10.2', 57 * 8 * 200 / 1000, 91.2); chk('10.2b', 67 * 8 * 100 / 1000, 53.6)
A = amax(21, 0.001); chk('10.3 A', A, 10.1, 0.01); chk('10.3 év', 0.05 * 3600 * 24 * 365 / 990e3, 1.59, 0.01)
chk('10.3 Pb17', eb(10, 17), 0.013, 0.01); chk('10.3 d', 0.05 * eb(10, 17) * 200, 0.13, 0.01)
chk('10.4', 0.6 / (1 - 0.002) * 10, 6.01, 0.01)
print(f'{ok} ellenőrzés rendben')
if bad: print('\n'.join(bad)); raise SystemExit(1)
print('MINDEN EGYEZIK')
