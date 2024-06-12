# script to list all categories
import json
import os

# Load the sounds
f = open("sounds_dev.json", "r")
xx = json.load(f)

c = []  # List to hold unique categories

# Iterate through the JSON data and collect unique categories
for i in xx:
    if xx[i]["category"] in c:
        continue
    c.append(xx[i]["category"])

# Print each unique category
for i in c:
    print(i)


# Categories to be listed and checked
# - [ ] twink
# - [ ] noise
# - [ ] rain
# - [ ] day
# - [ ] kitty
# - [ ] sand
# - [ ] forest
# - [ ] night
# - [ ] Xylophone
# - [ ] thunder
# - [ ] cermony
# - [ ] cars
# - [ ] tv
# - [ ] piano
# - [ ] fire
# - [ ] owl
# - [ ] sea
# - [ ] train
# - [ ] water
# - [ ] fan
# - [ ] music
# - [ ] flute
# - [ ] street
# - [ ] river
# - [ ] ding
# - [ ] trees
# - [ ] cafe
# - [ ] birds
# - [ ] clock
# - [ ] frog
# - [ ] ocean
# - [ ] wind
# - [ ] clap
# - [ ] snow
# - [ ] vaccum
