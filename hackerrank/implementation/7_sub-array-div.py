def birthday(s: list[int], d: int, m: int):
    ans = 0
    n = len(s)
    for i in range(n - m + 1):
        if sum(s[i : i + m]) == d:
            ans += 1
    print(ans)


# Contoh penggunaan fungsi dengan argumen yang diberikan
birthday([1, 2, 1, 3, 2], 3, 2)
