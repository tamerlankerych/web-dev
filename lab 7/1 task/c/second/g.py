x = int(input())
y = int(input())
p = int(input())
ans = 0;
while x <= y:
    ans += 1
    x = int(x + p * x / 100)
print(ans)