# CHILL PILL
![chill pill](images/Gemini_Generated_Image_4xusf04xusf04xus.jpg)
## File indexing and store
```py_stuff/index.py``` is indeed our indexing method to make and update our db stored in sound.json  
different sounds are in different categories like: Piano, Water, Rain  
```json
{
    "new_lullaby_003": {"name": "new_lullaby_003", "path": "sounds/new_lullaby_003.ogg", "desc": "piano", "category": "piano"}, 
    "whitenoise": {"name": "whitenoise", "path": "sounds/whitenoise.ogg", "desc": "plain noise", "category": "white"}, 
    "sound197": {"name": "sound197", "path": "sounds/sound197.ogg", "desc": "water drops", "category": "water"},
    "rain": {"name": "rain", "path": "sounds/rain.ogg", "desc": "rain", "category": "rain"}, 
    "sound194": {"name": "sound194", "path": "sounds/sound194.ogg", "desc": "rain on windows", "category": "rain"}, 
    "sound107": {"name": "sound107", "path": "sounds/sound107.ogg", "desc": "rain on car windows", "category": "rain"}
}
```
![db sample](images/mine.drawio.png)

## UI/UX
- Using tailwind css 
![ui mockup](<images/Screenshot 2024-05-11 200048.png>)

## Framwork and backend
- using node React Nextjs typescript
- Easier hot reloads
- fast compile times
- fast deploys
- modern enough to satisfy our dev needs like handling audio
