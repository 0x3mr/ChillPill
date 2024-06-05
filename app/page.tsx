'use client';

import React, { useState } from 'react';
import Button from './components/Button';
import sound from '../sounds_dev.json';
import { Howl, Howler } from 'howler';
import logo from './icons/ChillPill-Logo.svg';

interface Playin {
  [key: string]: Howl | undefined;
}
interface SoundNameMapping {
  [key: string]: string;
}

export default function Home() {
  const sounds = Object.values(sound);
  const [playin, setPlayin] = useState<{ [key: string]: Howl }>({});
  const [activeButtons, setActiveButtons] = useState<{ [key: string]: boolean }>({});
  const [volumes, setVolumes] = useState<{ [key: string]: number }>({});
  const [soundNameMapping, setSoundNameMapping] = useState<SoundNameMapping>({});

  // Function to play sound
  const playSound = (soundPath: string | undefined, soundName: string) => {
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
      setSoundNameMapping((prevMapping) => {
        const newMapping = { ...prevMapping };
        delete newMapping[soundPath];
        return newMapping;
      });
      console.log("Stopped", soundPath, soundNameMapping);
      return;
    }

    // // Stop any currently playing sound before playing a new one
    // if (Object.values(playin).length > 0) {
    //   Object.values(playin).forEach((sound) => sound?.stop());
    //   setPlayin({}); // Clear the playin state
    //   setActiveButtons((prevState) =>
    //     Object.fromEntries(
    //       Object.entries(prevState).map(([key, value]) => [key, false])
    //     )
    //   ); // Reset all active states
    //   console.log("Stopped all playing sounds");
    // }

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
    setSoundNameMapping((prevMapping) => ({
      ...prevMapping,
      [soundPath]: soundName,
    }));
    console.log("Playing", soundPath, playin, soundNameMapping);
  };

  const changeVolume = (soundPath: string, volume: number) => {
    if (playin[soundPath]) {
      playin[soundPath]?.volume(volume);
      setVolumes((prevVolumes) => ({
        ...prevVolumes,
        [soundPath]: volume,
      }));
    }
  };
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-center Bottompaddin">
      <div className="flex flex-no-wrap">
        <div style={{ minHeight: '716px' }} className="w-64 absolute sm:relative bg-trasparent-800 shadow md:h-full flex-col hidden sm:flex">
          <h2 className="text-xl p-12 font-bold mb-4">Volume Controls</h2>
          {Object.keys(playin).map((soundPath) => (
            playin[soundPath] && (
              <div key={soundPath} className="mb-4">
                <p>{soundNameMapping[soundPath]}</p>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.01"
                  value={volumes[soundPath] || 1}
                  onChange={(e) => changeVolume(soundPath, parseFloat(e.target.value))}
                />
              </div>
            )
          ))}
        </div>
        <div className="container mx-auto py-10 h-64 md:w-4/5 w-11/12 px-6">
          <div className="w-full h-full rounded">
            <div class="flex justify-center items-center">
              <img src={logo} className='logo'/>
            </div>
            <div className="flex flex-grow items-center justify-center w-full">
              <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
                {sounds.length > 0 ? (
                  sounds.map((soundItem) => (
                    <Button
                      key={soundItem.name}
                      onClick={() => playSound(soundItem.path, soundItem.name)}
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
          </div>
        </div>
      </div>
    </main>
//     <main className="flex min-h-screen flex-col items-center justify-center Bottompaddin">

// <div className="w-1/4 p-4 bg-gray-200">
//         <h2 className="text-xl font-bold mb-4">Volume Controls</h2>
//         {Object.keys(playin).map((soundPath) => (
//           playin[soundPath] && (
//             <div key={soundPath} className="mb-4">
//               <p>{soundNameMapping[soundPath]}</p>
//               <input
//                 type="range"
//                 min="0"
//                 max="1"
//                 step="0.01"
//                 value={volumes[soundPath] || 1}
//                 onChange={(e) => changeVolume(soundPath, parseFloat(e.target.value))}
//               />
//             </div>
//           )
//         ))}
//       </div>

//       <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex"> </div>
//       <img src={logo} className='logo'/>
//       <div className="relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-pink-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:pink:to-pink-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]"></div>

//       <div className="flex flex-grow items-center justify-center w-full">
//         <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
//             {sounds.length > 0 ? (
//               sounds.map((soundItem) => (
//                 <Button
//                   key={soundItem.name}
//                   onClick={() => playSound(soundItem.path, soundItem.name)}
//                   icc={soundItem.category}
//                   isActive={activeButtons[soundItem.path]}
//                 >
//                   {soundItem.name}
//                 </Button>
//               ))
//             ) : (
//               <p>No sounds available</p>
//             )}
//         </div>
//       </div>
//     </main>
  );
}
