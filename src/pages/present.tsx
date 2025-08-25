import { JetBrains_Mono } from "next/font/google";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { useState } from "react";
import Head from 'next/head';

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Present() {
  const router = useRouter();
  const [dislikeState, setDislikeState] = useState(0);

  const handleDislike = () => {
    if (dislikeState === 0) {
      setDislikeState(1);
    } else if (dislikeState === 1) {
      setDislikeState(2);
    } else if (dislikeState === 2) {
      setDislikeState(3);
    }
  };

  const handleLike = () => {
    router.push('/card');
  };

  const getDislikeButtonText = () => {
    switch (dislikeState) {
      // TODO: Change these text options based on your preferences
      case 0: return "i don't like it! 💔";
      case 1: return "whyyyyy 🥲";
      case 2: return "🙂";
      case 3: return "🙂";
      default: return "i don't like it! 💔";
    }
  };

  const getLikeButtonText = () => {
    switch (dislikeState) {
      // TODO: Change these text options based on your preferences
      case 0: return "i like it! 💝";
      case 1: return "choose meeee 🥹";
      case 2: return "i said choose meee 😤";
      case 3: return "u are left with me 😗";
      default: return "i like it! 💝";
    }
  };

  return (
    <div className={`${jetbrainsMono.className} min-h-screen bg-[#0a0a0a] flex items-center justify-center`}>
      <Head>
        {/* TODO: Change the title based on recipient's name */}
        <title>for_[name].io</title>
      </Head>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        {/* TODO: Change these text options based on your present */}
        <div className="text-8xl mb-8">🎁</div>
        <div className="text-[#9cdcfe] text-2xl font-bold font-mono mb-8">
          it&apos;s a [present]
        </div>

        <div className="flex gap-4 justify-center">
          <motion.button
            whileHover={dislikeState < 3 ? { scale: 1.05 } : {}}
            whileTap={dislikeState < 3 ? { scale: 0.95 } : {}}
            onClick={handleDislike}
            disabled={dislikeState === 3}
            className={`text-[#9cdcfe] text-sm font-bold px-4 py-2 rounded-md border border-[#569cd6] font-mono cursor-pointer transition-all duration-150 ease-in-out ${
              dislikeState < 3 
                ? 'hover:bg-[#569cd6] hover:text-[#1e1e1e] hover:shadow-[0_0_10px_rgba(86,156,214,0.3)]' 
                : 'opacity-50 cursor-not-allowed'
            }`}
          >
            {getDislikeButtonText()}
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleLike}
            className="text-[#9cdcfe] text-sm font-bold px-4 py-2 rounded-md border border-[#569cd6] font-mono cursor-pointer transition-all duration-150 ease-in-out hover:bg-[#569cd6] hover:text-[#1e1e1e] hover:shadow-[0_0_10px_rgba(86,156,214,0.3)]"
          >
            {getLikeButtonText()}
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
} 