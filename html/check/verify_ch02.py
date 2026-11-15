"""Független ellenőrzés a 2. fejezethez (mintavételezés, kvantálás).

A számítás a feladatok adataiból indul, nem a jegyzet szövegéből.
A várt értékek (EXPECT) azok, amelyek az oldalon az Eredmény dobozban szerepelnek.
Futtatás: python3 -I check/verify_ch02.py
"""
import math

def H_trapez(f):
    f = abs(f)
    if f <= 3: return 1.0
    if f <= 5: return 2.5 - f / 2
    if f <= 10: return 0.01
    return 0.0

def images(f, fs, nmax=4):
    out = set()
    for n in range(0, nmax + 1):
        for s in (+1, -1):
            v = abs(n * fs + s * f)
            out.add(round(v, 6))
    return sorted(out)

def bpf_ranges(fl, fh):
    B = fh - fl
    res = []
    for k in range(1, int(fh // B) + 1):
        lo = 2 * fh / k
        hi = math.inf if k == 1 else 2 * fl / (k - 1)
        if lo <= hi + 1e-12:
            res.append((k, lo, hi))
    return res

def bits(snr_db, C, fs_over_2B=1.0):
    need = (snr_db - 10 * math.log10(3 / C**2) - 10 * math.log10(fs_over_2B)) / (20 * math.log10(2))
    return math.ceil(need - 1e-12), need

def snr_db(n, C, fs_over_2B=1.0):
    return 10 * math.log10(3 / C**2 * fs_over_2B * 2 ** (2 * n))

R = {}
# 2.1
out = {}
for f in images(1, 8):
    if f == 0: continue
    a = 2 * H_trapez(1) * H_trapez(f)
    if a > 0: out[f] = a
R['2.1a'] = out
x = 2 * H_trapez(4.5)
R['2.1b'] = {4.5: x * H_trapez(4.5), 3.5: x * H_trapez(8 - 4.5)}
# 2.2
R['2.2a'] = 2 * 10 ** (-40 / 20)
R['2.2c'] = sorted({round(abs(n * 8 - k * 3.6), 3) for n in (1, 2) for k in range(1, 6) if abs(n * 8 - k * 3.6) < 3.4})
# 2.3
s0 = 0.2e-3 / (2 * 4e3)          # W/Hz
R['2.3'] = (s0 * 1e3 * 1e6, s0 * 50)   # µW/kHz, V²/Hz
ok = [fs / 10 for fs in range(80, 200) if
      all(not (7 < v < 8 or 0 <= v < 3) for v in [x for n in (1, 2, 3) for b in ((0, 3), (7, 8)) for s in (1, -1)
                                               for x in [abs(n * fs / 10 + s * b[0]), abs(n * fs / 10 + s * b[1])]]
          if True)]
# egyszerűbb, közvetlen feltételek a 2.3-hoz
lo, hi = 3 + 8, 7 + 7
R['2.3fs'] = (lo, hi)
# 2.4 - 2.6, 2.9 sáváteresztő tartományok
R['2.4'] = bpf_ranges(45, 75)
R['2.5'] = (bpf_ranges(40, 70), bits(64, math.sqrt(2)))
R['2.6'] = (bpf_ranges(60, 108), bits(70, math.sqrt(3)))
R['2.9'] = (bpf_ranges(19, 25)[-1], 10 * math.log10(50 / (2 * 19 / 3)), 10 * math.log10(50 / 12.5))
# 2.7: melyik fs adja pontosan {1,3,7,9}-et, ha 3<fAA<5 és 9<fR<11
cands = []
for fs in range(4, 21):
    comps = set()
    for f in (1, 3):
        for v in images(f, fs, 3):
            if 0 < v < 10.5:
                comps.add(v)
    if comps == {1, 3, 7, 9}:
        cands.append(fs)
R['2.7'] = cands
# 2.8
M = 1.0
R['2.8'] = (2 * 10, 20 / 3, M / 20 * 20, (3 / 20) * M * 6, M / 20 * 6)
# 2.10
R['2.10'] = (snr_db(16, math.sqrt(2), 44 / 30), snr_db(16, math.sqrt(2), 4 * 44 / 30), 44 - 15, 4 * 44 - 15)
# 2.11
R['2.11'] = (6 * 20 * math.log10(2), 2 ** 12, 10 ** 2.6)
# 2.12
R['2.12'] = sorted({round(abs(n * 8 - (2 * k + 1) * 1.5), 3) for n in range(0, 4) for k in range(0, 12)
                    if abs(n * 8 - (2 * k + 1) * 1.5) < 4})

EXPECT = {
    '2.1a': {1: 2.0, 7: 0.02, 9: 0.02},
    '2.1b': {4.5: 0.125, 3.5: 0.375},
    '2.2a': 0.02,
    '2.2c': [0.8, 1.6, 2.0, 2.8],
    '2.3': (25.0, 1.25e-6),
    '2.3fs': (11, 14),
    '2.7': [10],
}

def close(a, b, tol=1e-6):
    if isinstance(a, dict):
        return a.keys() == b.keys() and all(close(a[k], b[k], tol) for k in a)
    if isinstance(a, (list, tuple)):
        return len(a) == len(b) and all(close(x, y, tol) for x, y in zip(a, b))
    return abs(a - b) <= tol * max(1, abs(b))

fails = 0
for k, v in EXPECT.items():
    good = close(R[k], v, 1e-3)
    fails += not good
    print(('OK   ' if good else 'HIBA ') + k, R[k])

print('2.4 ', R['2.4'], '-> várt: k=1: 150…, k=2: 75…90')
assert R['2.4'] == [(1, 150, math.inf), (2, 75, 90)]
print('2.5 ', R['2.5'])
assert R['2.5'][0] == [(1, 140, math.inf), (2, 70, 80)] and R['2.5'][1][0] == 11
print('2.6 ', R['2.6'])
assert R['2.6'][0] == [(1, 216, math.inf), (2, 108, 120)] and R['2.6'][1][0] == 12
print('2.8 ', R['2.8'])
assert close(list(R['2.8']), [20, 20 / 3, 1.0, 0.9, 0.3])
print('2.9 ', R['2.9'])
assert close(R['2.9'][0][1], 12.5) and close(R['2.9'][0][2], 38 / 3) and abs(R['2.9'][2] - 6.02) < 0.01
print('2.10', [round(x, 1) for x in R['2.10']])
assert abs(R['2.10'][0] - 99.8) < 0.05 and abs(R['2.10'][1] - 105.8) < 0.05 and R['2.10'][2:] == (29, 161)
print('2.11', [round(x, 2) for x in R['2.11']])
assert abs(R['2.11'][0] - 36.12) < 0.01 and R['2.11'][1] == 4096 and abs(R['2.11'][2] - 398.1) < 0.1
print('2.12', R['2.12'])
assert R['2.12'] == [0.5, 1.5, 2.5, 3.5]
print('\n' + ('MINDEN EGYEZIK' if fails == 0 else f'{fails} ELTÉRÉS'))
