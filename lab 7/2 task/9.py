n = int(input())
arr = map(int, input().split())
list=[]
for a in arr:
    list.append(a)
    list.sort(reverse=True)
for i in range(1,n):
    if(list[0]!=list[i]):
        print(list[i])
        break

