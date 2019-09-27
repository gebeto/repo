import json

from datetime import datetime

now = datetime.now()
now_str = now.strftime("%A, %d %h %Y, %X")

class Packages(object):
	def __init__(self, path):
		self.raw = open(path).read()
		self.packages = []

	def generate_package(self, raw):
		lines = raw.split("\n")
		dictionary = {}
		for l in lines:
			if not l: continue
			splitted = l.split(": ")
			dictionary[splitted[0]] = splitted[1] if len(splitted) == 2 else ": ".join(splitted[1:])
		return dictionary
		
	def __iter__(self):
		return (self.generate_package(package) for package in self.raw.split("\n\n") if package)

packages = Packages("Packages")


if __name__ == "__main__":
	json.dump(
		{
			# "update": now_str,
			"update": str(now),
			"update_info": {
				"str_time": now.strftime("%H:%M"),
				"time": {
					"hour": now.hour,
					"minute": now.minute,
					"second": now.second,
				},
				"str_date": now.strftime("%d/%m/%Y"),
				"date": {
					"month": now.month,
					"day": now.day,
					"year": now.year,
				},
			},
			"packages": list(packages),
		},
		open("_data/Packages.json", "w"),
		indent=4
	)
