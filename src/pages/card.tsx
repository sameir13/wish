import { JetBrains_Mono } from "next/font/google";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Confetti from 'react-confetti';
import Head from 'next/head';

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Present() {
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });

    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className={`${jetbrainsMono.className} min-h-screen bg-[#0a0a0a] flex items-center justify-center`}>
      <Head>
        {/* TODO: Change the title based on recipient's name */}
        <title>for_[name].io</title>
      </Head>
      <Confetti
        width={windowSize.width}
        height={windowSize.height}
        numberOfPieces={200}
        recycle={true}
        // TODO: Change the duration of the confetti animation based on your preferences
        tweenDuration={10000}
        colors={['#FFD700', '#FF69B4', '#87CEEB', '#98FB98', '#DDA0DD']}
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
          <div className="text-orange-300 text-xs font-bold font-mono">
          <p className="mb-4">🕯️🕯️</p>
        </div>
        <div className="text-orange-300 text-xs font-bold font-mono">
          <p>Wishing Minahil The happiest Birthday</p>
        </div>
        <div className="text-[#9cdcfe] text-8xl font-bold font-mono mb-4">
          happiyayayayaya
        </div>
        <div className="text-[#9cdcfe] text-8xl font-bold font-mono mb-4">
          birthdae!!!
        </div>
        <div className="text-orange-300 text-xs font-bold font-mono">
          {/* A heartfelt message for the recipient */}
          <p className="mb-4">Hope you keep this smile on your face</p>
        </div>
      </motion.div>
    </div>
  );
} 