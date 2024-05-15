'use client';

import React from 'react';
import Button from './components/Button';
import sound from '../sounds_dev.json';

export default function Home() {
  const sounds = Object.values(sound);

  // Function to play sound
  const playSound = (soundPath) => {
    const audio = new Audio(soundPath);
    audio.play();
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Chill Pill
        </p>
      </div>

      <div className="relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-pink-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:pink:to-pink-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
      </div>

      <div className="flex flex-grow items-center justify-center w-full">
        <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
          <div>
            <p>Click anything to play</p>
            {sounds.length > 0 ? (
              sounds.map((soundItem) => (
                <Button
                  key={soundItem.name}
                  onClick={() => playSound(soundItem.path)}
                >
                  {soundItem.name}
                </Button>
              ))
            ) : (
              <p>No sounds available</p>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
