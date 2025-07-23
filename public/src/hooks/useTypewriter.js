import { useState, useEffect } from 'react';

/**
 * useTypewriter - A hook for typewriter effect on text.
 * @param {string[]} words - Array of words/phrases to type out.
 * @param {number} speed - Typing speed in ms per character.
 * @param {number} delay - Delay between words in ms.
 * @returns {string} The current text to display.
 */
export default function useTypewriter(words = [], speed = 80, delay = 1500) {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [forward, setForward] = useState(true);
  const [display, setDisplay] = useState('');

  useEffect(() => {
    if (!words.length) return;
    if (forward && subIndex === words[index].length) {
      setTimeout(() => setForward(false), delay);
      return;
    }
    if (!forward && subIndex === 0) {
      setForward(true);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }
    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (forward ? 1 : -1));
    }, forward ? speed : speed / 2);
    return () => clearTimeout(timeout);
  }, [subIndex, index, forward, words, speed, delay]);

  useEffect(() => {
    if (!words.length) return;
    setDisplay(words[index].substring(0, subIndex));
  }, [subIndex, index, words]);

  return display;
}
