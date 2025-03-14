a = int(input())
b = int(input())

while a >= b:
    if a % 2 == 0 and (a / 2) >= b:
        a = a / 2
        print(':2')
    elif (a % 2 != 0 or (a / 2) < b) and a > b:
        a = a - 1
        print(-1)
    else:
        break