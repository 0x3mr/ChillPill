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
  const [showVolumeControls, setShowVolumeControls] = useState(!!Object.values(playin).length); // Initial state based on playing sounds

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
      if (Object.keys(playin).length < 2){
      setShowVolumeControls(false);
      }


      console.log("Stopped", soundPath, soundNameMapping);
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
    setSoundNameMapping((prevMapping) => ({
      ...prevMapping,
      [soundPath]: soundName,
    }));
    setShowVolumeControls(true);
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

  const stopPlayingSounds = () => {
    if (Object.values(playin).length > 0) {
      Object.values(playin).forEach((sound) => sound?.stop());
      setPlayin({});
      setActiveButtons((prevState) =>
        Object.fromEntries(
          Object.entries(prevState).map(([key, value]) => [key, false])
        )
      );

      setShowVolumeControls(false);
      console.log("Stopped all playing sounds");
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center Bottompaddin">
      <div className="flex justify-center items-center">
        <img src={logo} className='logo'/>
      </div>
      <div className="flex bg-cover">
        <div style={{ minHeight: '716px' }} 
        className={`w-64 absolute sm:relative bg-transparent-800 shadow md:h-full flex-col flex ${
          showVolumeControls ? '' : 'hidden'
        }`}
        >
          <h2 className="text-xl text-center p-15 font-bold text-white mb-4">Volume Controls</h2>
          <button id="stop-button"
                  className="text-white bg-red-700 hover:bg-red-800 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                  onClick={() => {
                    stopPlayingSounds();
                    setShowVolumeControls(false);
                  }}
            >Stop All Sounds</button>
          {Object.keys(playin).map((soundPath) => (
            playin[soundPath] && (
              <div key={soundPath} className="text-center mb-4">
                <p>{soundNameMapping[soundPath]}</p>
                <input
                  type="range"
                  min="0.05"
                  max="1"
                  step="0.01"
                  value={volumes[soundPath] || 1}
                  onChange={(e) => changeVolume(soundPath, parseFloat(e.target.value))}
                />
              </div>
            )
          ))}
        </div>
        <div className="container mx-auto py-10 h-full w-full px-6">
          <div className="w-full h-full rounded">
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
  );
}
