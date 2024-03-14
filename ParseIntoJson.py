# Assuming the input text is formatted as provided by the user, and is stored in a string called `data`.

data = """
Gestational Age	Length (inches)	Weight (oz/lb)	Length (cm)	Mass (g)
8 weeks	0.63	0.04 oz	1.6	1
9 weeks	.9	0.07 oz	2.3	2
10 weeks	1.22	0.14 oz	3.1	4
11 weeks	1.61	0.25 oz	4.1	7
12 weeks	2.13	0.49 oz	5.4	14
13 weeks	2.19	0.81 oz	7.4	23
14 weeks	3.42	1.52 oz	8.7	43
15 weeks	3.98	2.47 oz	10.1	70
16 weeks	4.57	3.53 oz	11.6	100
17 weeks	5.12	4.94 oz	13	140
18 weeks	5.59	6.70 oz	14.2	190
19 weeks	6.02	8.47 oz	15.3	240
20 weeks	6.46	10.58 oz	16.4	300
21 weeks	10.51	12.70 oz	26.7	360
22 weeks	10.94	15.17 oz	27.8	430
23 weeks	11.38	1.10 lb	28.9	501
24 weeks	11.81	1.32 lb	30	600
25 weeks	13.62	1.46 lb	34.6	660
26 weeks	14.02	1.68 lb	35.6	760
27 weeks	14.41	1.93 lb	36.6	875
28 weeks	14.80	2.22 lb	37.6	1005
29 weeks	15.2	2.54 lb	38.6	1153
30 weeks	15.71	2.91 lb	39.9	1319
31 weeks	16.18	3.31 lb	41.1	1502
32 weeks	16.19	3.75 lb	42.4	1702
33 weeks	17.20	4.23 lb	43.7	1918
34 weeks	17.72	4.73 lb	45	2146
35 weeks	18.19	5.25 lb	46.2	2383
36 weeks	18.66	5.78 lb	47.4	2622
37 weeks	19.13	6.30 lb	48.6	2859
38 weeks	19.61	6.80 lb	49.8	3083
39 weeks	19.96	7.25 lb	50.7	3288
40 weeks	20.16	7.63 lb	51.2	3462
41 weeks	20.35	7.93 lb	51.7	3597
42 weeks	20.28	8.12 lb	51.5	3685
43 weeks	20.20	8.19 lb	51.3	3717
"""

# We will parse this data into the desired JSON format.
import json
import re

# Split the data into lines
# Split the data into lines and skip the header
lines = data.strip().split('\n')[1:]

# Initialize an empty dictionary to hold the data
pregnancy_data = {}

# Regex pattern to match the data lines
# This pattern assumes that the space between numbers can vary and that weight might be in oz or lb
line_pattern = re.compile(r'(\d+) weeks\s+([\d.]+)\s+([\d.]+) (oz|lb)\s+([\d.]+)\s+(\d+)')

for line in lines:
    match = line_pattern.search(line)
    if match:
        week, length_inches, weight, weight_unit, length_cm, mass_g = match.groups()
        week = int(week)  # Convert week to an integer
        length_inches = float(length_inches)
        weight = float(weight)
        length_cm = float(length_cm)
        mass_g = int(mass_g)
        # If weight is in pounds, convert it to ounces by multiplying by 16
        if weight_unit == 'oz':
            weight /= 16
        pregnancy_data[week] = {
            "gestationalAge": f"{week} weeks",
            "lengthInches": length_inches,
            "weightLb": weight,
            "lengthCm": length_cm,
            "massG": mass_g
        }

# Convert the dictionary to JSON
pregnancy_data_json = json.dumps(pregnancy_data, indent=2)
print(pregnancy_data_json)