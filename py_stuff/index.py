import os, json

sounds = {}

if os.path.basename(os.getcwd()) == "py_stuff":
    print("Please run from project root to detect sounds Using: python3 py_stuff/index.py")
    exit(1)

def load_sounds():
    base_name = "sound"
    extension = ".json"
    file_name = base_name + extension
    if not file_name in os.listdir(os.getcwd()): return

    counter = 0
    while file_name in os.listdir(os.getcwd()):
        counter += 1
        file_name = f"{base_name}_{counter}{extension}"

    if counter != 0: 
        n = counter - 1
        file_name = f"{base_name}_{counter - 1}{extension}" if n > 0 else base_name + extension

    f = open(file_name, "r")
    global sounds
    sounds = json.load(f)



def get_sounds():
    l = os.listdir(os.getcwd() + "/public/sounds")
    for x in l:
        n = x.split(".")[0]
        if n in sounds: continue
        sounds[n] = {"name": n, "path": "sounds/" + x, "desc": "unknown", "category": "sound"}


def check_save_name():
    base_name = "sound"
    extension = ".json"
    file_name = base_name + extension

    counter = 0
    while file_name in os.listdir(os.getcwd()):
        counter += 1
        file_name = f"{base_name}_{counter}{extension}"

    return file_name

load_sounds()
get_sounds()
file = check_save_name()

f = open(file, "w")
s = json.dump(sounds, f)
f.close()

print("Save file : ", file)
