"""Független ellenőrzés a fő példatár 6. fejezetéhez (Kódolástechnika). Futtatás: python3 -I check/verify_ch06.py"""
import math, itertools
ok = 0; bad = []
def chk(name, got, exp, tol=0.005):
    global ok
    if abs(got - exp) <= tol * max(1, abs(exp)): ok += 1
    else: bad.append(f'{name}: számolt {got!r}, a jegyzetben {exp!r}')
def check(name, cond):
    global ok
    if cond: ok += 1
    else: bad.append(name)

# 6.1 fix hosszú kód
check('6.1 L1', math.ceil(math.log2(32)) == 5); check('6.1 L2', math.ceil(math.log2(33)) == 6)
chk('6.1 log2 33', math.log2(33), 5.044, 0.001); chk('6.1 romlás', (6 - math.log2(33)) / math.log2(33), 0.189, 0.01)
# 6.2 párok
check('6.2 1089', 33 ** 2 == 1089 and math.ceil(math.log2(1089)) == 11)
chk('6.2 romlás', (5.5 - math.log2(33)) / math.log2(33), 0.090, 0.01); chk('6.2 felső', 0.5 + math.log2(33), 5.544, 0.001)
# 6.3 McMillan és a felbontások száma
chk('6.3 összeg', 2 ** -1 + 2 ** -2 + 2 ** -1, 1.25)
def parses(s, code):
    if not s: return 1
    return sum(parses(s[len(w):], code) for w in code.values() if s.startswith(w))
check('6.3 16 felbontás', parses('10101010', {'a': '1', 'b': '10', 'c': '0'}) == 16)
# 6.4 egyértelmű dekódolás
def decodes(s, code, pre=''):
    if not s: return [pre]
    return [r for k, w in code.items() if s.startswith(w) for r in decodes(s[len(w):], code, pre + k)]
check('6.4 egyetlen felbontás', decodes('1011110000001', {'a': '1', 'b': '10', 'c': '00'}) == ['baaaaccca'])
# 6.5 párok entrópiája
p = [0.5, 0.25, 0.125, 0.125]
H = sum(x * math.log2(1 / x) for x in p); H2 = sum(a * b * math.log2(1 / (a * b)) for a in p for b in p)
chk('6.5 H', H, 1.75); chk('6.5 H2', H2, 3.5)
# 6.6 binomiális
n, q = 1000, 1e-4
P = lambda k: math.comb(n, k) * q ** k * (1 - q) ** (n - k)
chk('6.6 P0', P(0), 0.9048, 0.001); chk('6.6 P1', P(1), 0.0905, 0.002); chk('6.6 P2', P(2), 0.0045, 0.01)
chk('6.6 P≥1', 1 - P(0), 0.0952, 0.002); chk('6.6 E', n * q, 0.1)
# 6.7 és 6.8 a C(5,2) kód
G = ['10110', '01011']
xor = lambda a, b: ''.join(str(int(x) ^ int(y)) for x, y in zip(a, b))
code = {''.join(map(str, u)): (xor(G[0], G[1]) if u == (1, 1) else G[0] if u == (1, 0) else G[1] if u == (0, 1) else '00000') for u in itertools.product([0, 1], repeat=2)}
check('6.7 kódszavak', sorted(code.values()) == ['00000', '01011', '10110', '11101'])
dmin = min(sum(x != y for x, y in zip(a, b)) for a, b in itertools.combinations(code.values(), 2))
check('6.7 dmin', dmin == 3)
HT = ['110', '011', '100', '010', '001']
synd = lambda v: format(sum(int(HT[i], 2) * 0 for i in range(5)) ^ eval('^'.join(['0'] + [str(int(HT[i], 2)) for i in range(5) if v[i] == '1'])), '03b')
check('6.8 s', synd('11001') == '100')
check('6.8 javítás', xor('11001', '00100') == '11101' and synd('11101') == '000')
check('6.8 egybites szindrómák különbözők', len({synd(format(1 << (4 - i), '05b')) for i in range(5)}) == 5)
print(f'{ok} ellenőrzés rendben')
if bad: print('\n'.join(bad)); raise SystemExit(1)
print('MINDEN EGYEZIK')
