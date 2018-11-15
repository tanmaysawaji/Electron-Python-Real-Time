import sys
count = 0

while True:
	flag = str(sys.stdin.readline())
	if flag == True:
		# print("Succes")
		sys.stdout.write("Success")
		# sys.stdout.flush()
	else:
		# print("Failed")
		count += 1
		sys.stdout.write("Failed")
		# sys.stdout.flush()
	if count >= 5:
		break

sys.stdout.flush()