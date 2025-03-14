x = int(input())
d = int(input())
x_str = str(x)
count = 0
for i in x_str:
    if int(i) == d:
        count += 1
        print(count)