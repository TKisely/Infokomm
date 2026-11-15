"""Független ellenőrzés az ALL-IN példatárhoz. A feladatok adataiból számol, nem a jegyzet szövegéből.
Futtatás: python3 -I check/verify_allin.py"""
import math, itertools
lg = math.log10
ok = 0; bad = []
def chk(name, got, exp, tol=0.01):
    global ok
    good = abs(got - exp) <= tol * max(1, abs(exp))
    if good: ok += 1
    else: bad.append(f'{name}: számolt {got!r}, a jegyzetben {exp!r}')
def eb(A, N):
    b = 1.0
    for n in range(1, N + 1): b = A * b / (n + A * b)
    return b
def amax(N, p):
    lo, hi = 0.0, 300.0
    for _ in range(80):
        m = (lo + hi) / 2
        lo, hi = (m, hi) if eb(m, N) <= p else (lo, m)
    return lo
def bpf(fl, fh):
    B = fh - fl
    return [(k, 2 * fh / k, (math.inf if k == 1 else 2 * fl / (k - 1))) for k in range(1, int(fh // B) + 1) if 2 * fh / k <= (math.inf if k == 1 else 2 * fl / (k - 1))]
def gf2(v, M): return [sum(a * b for a, b in zip(v, col)) % 2 for col in zip(*M)]
def bits(s): return [int(c) for c in s]
def dmin(G):
    k = len(G); ws = []
    for u in itertools.product([0, 1], repeat=k):
        if any(u): ws.append(sum(gf2(u, G)))
    return min(ws)
# 1. Jelek
chk('1.1 csúcs', math.hypot(3, 4), 5); chk('1.1 C', 5 / math.sqrt(12.5), math.sqrt(2))
chk('1.3 s(42/f0)', 4 * math.sin(84 * math.pi) - 3 * math.cos(84 * math.pi), -3)
# 2. Mintavétel
assert [(k, round(a, 3), round(b, 3)) for k, a, b in bpf(45, 75)] == [(1, 150, math.inf), (2, 75, 90)]; ok += 1
assert [(k, round(a, 3), round(b, 3)) for k, a, b in bpf(60, 108)] == [(1, 216, math.inf), (2, 108, 120)]; ok += 1
assert [(k, round(a, 2), round(b, 2)) for k, a, b in bpf(70, 100)] == [(1, 200, math.inf), (2, 100, 140), (3, 66.67, 70)]; ok += 1
assert [(k, round(a, 2), round(b, 2)) for k, a, b in bpf(19, 25)] == [(1, 50, math.inf), (2, 25, 38), (3, 16.67, 19), (4, 12.5, 12.67)]; ok += 1
assert [(k, round(a, 2), round(b, 2)) for k, a, b in bpf(40, 70)] == [(1, 140, math.inf), (2, 70, 80)]; ok += 1
chk('2.4a n', math.ceil((70 - 10 * lg(108 / 96)) / (20 * lg(2))), 12)
chk('2.4b n', math.ceil((70 - 1.76) / (20 * lg(2))), 12)
chk('2.4b 216', math.ceil((70 - 1.76 - 10 * lg(216 / 96)) / (20 * lg(2))), 11)
chk('2.4c n', math.ceil(math.log(1e6 / (0.5 * 432 / 96), 4)), 10)
chk('2.8', 2 * 0.02 * 0.01 * 1000, 0.4)
chk('2.9 dB', 6 * 20 * lg(2), 36.1); chk('2.9 x', 10 ** 2.6, 398, 0.01)
chk('2.12 n', math.ceil((64 - 1.76) / (20 * lg(2))), 11)
# 3. Rádió
chk('3.1', 20 * lg(1e4 ** 2 / 100) - 8, 112)
lam = 3e8 / 83.3e6; chk('3.2 zóna', 4 * 40 * 1 / lam, 44.4); chk('3.2 a', 20 * lg(650 ** 2 / 40) - 30, 50.5)
chk('3.3 hT', 1000 * (1 / 3) / (2 * 1.66), 100.4); chk('3.3 a', 20 * lg(15e3 ** 2 / (100 * 1.66)) - 13, 109.6)
chk('3.4 r', 4 * 50 * 1.5 / (2 / 3), 450); chk('3.4 a', 20 * lg(4 * math.pi * 450 / (2 / 3)) - 12, 66.57)
chk('3.6 G', 10 * lg(4 * math.pi ** 2 / 0.2 ** 2), 30, 0.02)
# 4. Kódolás
G1 = [bits('10101'), bits('01110')]; HT1 = [bits(x) for x in ['101', '110', '100', '010', '001']]
assert gf2(bits('01010'), HT1) == [1, 0, 0] and dmin(G1) == 3; ok += 1
HT2 = [bits(x) for x in ['101', '101', '100', '010', '001']]
assert gf2(bits('11001'), HT2) == [0, 0, 1] and dmin([bits('10101'), bits('01101')]) == 2; ok += 1
G3 = [bits(x) for x in ['1000110', '0100101', '0010011', '0001111']]; HT3 = [bits(x) for x in ['110', '101', '011', '111', '100', '010', '001']]
assert gf2(bits('0000111'), HT3) == [1, 1, 1] and dmin(G3) == 3; ok += 1
G4 = [bits(x) for x in ['1000011', '0100110', '0010101', '0001111']]; HT4 = [bits(x) for x in ['011', '110', '101', '111', '100', '010', '001']]
assert gf2(bits('1100001'), HT4) == [1, 0, 0] and dmin(G4) == 3; ok += 1
assert dmin([bits('10111'), bits('01011')]) == 3; ok += 1
assert dmin([bits('1101101'), bits('0110110'), bits('0101011')]) == 3; ok += 1
assert gf2(bits('10101'), [bits(x) for x in ['011', '110', '100', '010', '001']]) == [1, 1, 0]; ok += 1
assert gf2(bits('11101'), [bits(x) for x in ['101', '011', '100', '010', '001']]) == [0, 1, 1]; ok += 1
chk('4.10', sum(2 ** -l for l in [2, 2, 3, 3, 3, 4, 4, 4, 4]), 9 / 8); chk('4.10b', sum(2 ** -l for l in [2, 2, 3, 3, 3, 5, 5, 5, 5]), 1)
p = [1/16, 1/16, 1/8, 1/2, 1/8, 1/16, 1/16]; chk('4.12 H', sum(x * math.log2(1 / x) for x in p), 2.25)
chk('4.13 H', 0.9 * math.log2(1 / 0.9) + 0.1 * math.log2(10), 0.469); chk('4.13 L', (0.81 * 1 + 0.09 * 2 + 0.09 * 3 + 0.01 * 3) / 2, 0.645)
# 5. Analóg moduláció
chk('5.1 P', 4 ** 2 / 2 + 2 * 1 / 2, 9); chk('5.3 P', 2 + 0.25, 2.25)
chk('5.5 U', 10 ** (3 / 20) * math.sqrt(2), 2.0); chk('5.5 Um/2', 10 ** (-9 / 20) * math.sqrt(2), 0.5); chk('5.5 arány', 0.25 / 2.25, 1 / 9)
chk('5.7 RMS', math.sqrt(2 + 0.25), 1.5)
xs = [0.1 * math.sin(2 * math.pi * t / 1e4) + math.cos(4 * math.pi * t / 1e4) for t in range(10000)]
chk('5.9 max', max(xs), 1.00125, 0.0005); chk('5.9 min', min(xs), -1.1, 0.0005)
chk('5.9 arány', 50.5 / 450.5 * 100, 11.21); chk('5.9 Pmax', (200 + 100.125) ** 2 / 50, 1801.5)
chk('5.11 fD', 40 / 2 - 8, 12); chk('5.13 B', 2 * (22 + 5.5), 55)
# 6. PAM
chk('6.4 h', math.cos(0.05 * math.pi) ** 2, 0.9755, 0.001); chk('6.4 8', 0.9755 - 7 * 0.0245, 0.804)
chk('6.6', 10 ** (-3 / 20), 0.71, 0.01)
# 7. Digitális moduláció
def phase_tol(L):
    return min(math.degrees(math.acos((L - 1) / (L * math.sqrt(2)))) - 45, 999)
chk('7.8 64QAM', phase_tol(7), 7.7, 0.01); chk('7.9 36QAM', phase_tol(5), 10.6, 0.01)
chk('7.6 Pb', (2 * 1 + 2 * 4 + 4 * 8) / 8, 5.25)
obs = [((-0.20, 2.99), (0, 3)), ((-0.94, -1.07), (-1, -1)), ((-1.08, 0.93), (-1, 1)), ((-2.98, -0.21), (-3, 0))]
for o, e in obs:
    d = (math.degrees(math.atan2(o[1], o[0]) - math.atan2(e[1], e[0])) + 180) % 360 - 180
    assert 3 < d < 5, d
ok += 1
chk('7.12', 20 / 2 * 4 * 100 / 160, 25); chk('7.13 α', 72 / 50 - 1, 0.44)
# 9. Műsorszórás, DVB
chk('9.3 tükör', abs(25.5 - 36), 10.5); chk('9.7 sep', 20 * lg(3), 9.5, 0.01)
chk('9.8', 8 * 8 * 3 / 4, 48); chk('9.9', 6 * 8 / 1.15 * 188 / 204, 38.47)
chk('9.11', 125 / 32, 3.906)
# 10. GSM
chk('10.2', 85 / 12 * 124 * 8, 7025, 0.01)
# 11. Forgalom
A = 60000 / 3600 * 10
assert eb(A, 197) > 0.002 >= eb(A, 198); ok += 1
chk('11.2 Pb', eb(6, 2), 0.72); chk('11.2 haszon', 2 * 0.84 * 100 - 120, 48)
assert eb(15, 27) > 0.001 >= eb(15, 28); ok += 1
chk('11.3 e^-2', math.exp(-2), 0.135, 0.01)
chk('11.4 A83', amax(83, 0.01), 68.2, 0.01); chk('11.4 A80', amax(80, 0.01), 65.4, 0.01)
chk('11.5', (160 + 47) * 8 * 50 / 1000, 82.8)
print(f'{ok} ellenőrzés rendben')
if bad: print('\n'.join(bad)); raise SystemExit(1)
print('MINDEN EGYEZIK')
