'use client'
import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import './style.css';
import { IoPlayOutline, IoPauseOutline } from "react-icons/io5";
import { GoUnmute, GoMute } from "react-icons/go";

const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState('0:00');
  const [duration, setDuration] = useState('0:00');
  const [seekValue, setSeekValue] = useState(0);
  const [volumeValue, setVolumeValue] = useState(100);

  const audioRef = useRef(null);
  const seekSliderRef = useRef(null);
  const volumeSliderRef = useRef(null);
  const animationRef = useRef(null);

  const calculateTime = (secs) => {
    const minutes = Math.floor(secs / 60);
    const seconds = Math.floor(secs % 60);
    const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${minutes}:${returnedSeconds}`;
  };

  const whilePlaying = () => {
    if (audioRef.current.paused) return;
    const current = Math.floor(audioRef.current.currentTime);
    seekSliderRef.current.value = current;
    setCurrentTime(calculateTime(current));

    updateSeekSlider(); // Update seek slider color dynamically

    animationRef.current = requestAnimationFrame(whilePlaying);
  };

  const updateSeekSlider = () => {
    const seekValuePercent = (seekSliderRef.current.value / seekSliderRef.current.max) * 100;
    seekSliderRef.current.style.background = `linear-gradient(to right, var(--cyan) ${seekValuePercent}%, rgba(1, 56, 82, 0.6) ${seekValuePercent}%)`;
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const updateVolumeSlider = () => {
    const volumeValuePercent = volumeValue;
    volumeSliderRef.current.style.background = `linear-gradient(to right, var(--cyan) ${volumeValuePercent}%, rgba(1, 56, 82, 0.6) ${volumeValuePercent}%)`;
  };

  useEffect(() => {
    const audio = audioRef.current;

    const setAudioData = () => {
      setDuration(calculateTime(audio.duration));
      seekSliderRef.current.max = Math.floor(audio.duration);
    };

    const handleTimeUpdate = () => {
      setCurrentTime(calculateTime(audio.currentTime));
      setSeekValue(Math.floor(audio.currentTime));
    };

    audio.addEventListener('loadedmetadata', setAudioData);
    audio.addEventListener('timeupdate', handleTimeUpdate);

    return () => {
      audio.removeEventListener('loadedmetadata', setAudioData);
      audio.removeEventListener('timeupdate', handleTimeUpdate);
      cancelAnimationFrame(animationRef.current);
    };
  }, []);

  const togglePlayPause = () => {
    const audio = audioRef.current;

    if (!isPlaying) {
      audio.play().then(() => {
        setIsPlaying(true);
        animationRef.current = requestAnimationFrame(whilePlaying);
      }).catch(error => console.error("Error playing audio:", error));
    } else {
      audio.pause();
      setIsPlaying(false);
      cancelAnimationFrame(animationRef.current);
    }
  };

  const toggleMute = () => {
    const audio = audioRef.current;
    audio.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleSeekChange = (e) => {
    const audio = audioRef.current;
    audio.currentTime = e.target.value;
    setSeekValue(e.target.value);
    setCurrentTime(calculateTime(e.target.value));

    updateSeekSlider(); // Update slider color on manual change
  };

  const handleVolumeChange = (e) => {
    const audio = audioRef.current;
    const value = e.target.value;
    setVolumeValue(value);
    audio.volume = value / 100;

    updateVolumeSlider(); // Update volume slider color on manual change
  };

  // Framer Motion variants for play/pause button
  const playButtonVariants = {
    play: { scale: 1 },
    pause: { scale: 0.9 }
  };

  // Framer Motion variants for mute/unmute button
  const muteButtonVariants = {
    unmute: { scale: 1 },
    mute: { scale: 0.8 }
  };

  useEffect(() => {
    updateSeekSlider();
    updateVolumeSlider();
  }, [seekValue, updateVolumeSlider, volumeValue]);

  return (
    <div id="audio-player-container">
      <audio ref={audioRef} src="https://assets.codepen.io/296057/fem-bombshell.mp3" preload="metadata" />
      <div className="name-play">
        <p>Bombshell Looks 22</p>
        <motion.button
          id="play-icon"
          onClick={togglePlayPause}
          animate={isPlaying ? 'pause' : 'play'}
          variants={playButtonVariants}
          transition={{ duration: 0.1 }}
        >
          {isPlaying ? <IoPauseOutline size={44}/> : <IoPlayOutline size={44}/>}
        </motion.button>
        <p>Track 7</p>
      </div>
      <div className="controls">
        <div className="play-slider">
          <span id="current-time" className="time">{currentTime}</span>
          <input
            type="range"
            id="seek-slider"
            ref={seekSliderRef}
            max="100"
            value={seekValue}
            onChange={handleSeekChange}
          />
          <span id="duration" className="time">{duration}</span>
        </div>
        <div className="volume">
          <output id="volume-output">{volumeValue}</output>
          <input
            type="range"
            id="volume-slider"
            ref={volumeSliderRef}
            max="100"
            value={volumeValue}
            onChange={handleVolumeChange}
          />
          <motion.button
            id="mute-icon"
            onClick={toggleMute}
            animate={isMuted ? 'mute' : 'unmute'}
            variants={muteButtonVariants}
            transition={{ duration: 0.1 }}
          >
            {isMuted ? <GoMute /> : <GoUnmute />}
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default AudioPlayer;
