'use client';

import React, { useState } from 'react';
import Button from './components/Button';
import sound from '../sounds_dev.json';
import { Howl, Howler } from 'howler';
import logo from './icons/ChillPill-Logo.svg';

interface Playin {
  [key: string]: Howl | undefined;
}

export default function Home() {
  const sounds = Object.values(sound);
  const [playin, setPlayin] = useState<{ [key: string]: Howl }>({});
  const [activeButtons, setActiveButtons] = useState<{ [key: string]: boolean }>({});

  // Function to play sound
  const playSound = (soundPath: string | undefined) => {
    if (!soundPath) {
      console.error("Invalid soundPath:", soundPath);
      return;
    }

    
    // Pause the sound if it's already playing
    if (playin[soundPath]) {
      playin[soundPath]?.stop();
      setPlayin((prevPlayin) => {
        const newPlayin = { ...prevPlayin };
        delete newPlayin[soundPath];
        return newPlayin;
      });
      setActiveButtons((prevState) => ({
        ...prevState,
        [soundPath]: !prevState[soundPath],
      }));
      console.log("Stopped", soundPath);
      return;
    }

    // Create a new Howl instance for the sound
    const soundHowl = new Howl({
      src: [soundPath],
      loop: true
    });
    
    // Start playing the sound
    soundHowl.play();
    setPlayin((prevPlayin) => ({
      ...prevPlayin,
      [soundPath]: soundHowl,
    }));
    setActiveButtons((prevState) => ({
      ...prevState,
      [soundPath]: !prevState[soundPath],
    }));
    console.log("Playing", soundPath, playin);
  };
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">

      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex"> </div>
      <img src={logo} className='logo'/>
      <div className="relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-pink-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:pink:to-pink-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]"></div>

      <div className="flex flex-grow items-center justify-center w-full">
        <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
            {sounds.length > 0 ? (
              sounds.map((soundItem) => (
                <Button
                  key={soundItem.name}
                  onClick={() => playSound(soundItem.path)}
                  icc={soundItem.category}
                  isActive={activeButtons[soundItem.path]}
                >
                  {soundItem.name}
                </Button>
              ))
            ) : (
              <p>No sounds available</p>
            )}
        </div>
      </div>
    </main>
  );
}