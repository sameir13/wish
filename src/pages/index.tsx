import { JetBrains_Mono } from "next/font/google";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { useRouter } from "next/router";
import Head from 'next/head';

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Home() {
  const [showMessage, setShowMessage] = useState(false);
  const [showPresents, setShowPresents] = useState(false);
  const router = useRouter();

  const handleClick = () => {
    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
      setShowPresents(true);
      // TODO: Change the time it takes to show the presents based on the number of messages below
    }, 11000);
  };

  const handlePresentClick = () => {
    router.push('/present');
  };

 return (
    <div className={`${jetbrainsMono.className} min-h-screen bg-[#0a0a0a] flex items-center justify-center`}>
      <Head>
        {/* TODO: Change the title based on recipient's name */}
        <title>for_[name].io</title>
      </Head>
      <div className="text-center">
        <AnimatePresence mode="wait">
          {!showMessage && !showPresents ? (
            <motion.button
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleClick}
              className="text-[#9cdcfe] text-sm font-bold px-4 py-2 rounded-md border border-[#569cd6] font-mono cursor-pointer transition-all duration-150 ease-in-out hover:bg-[#569cd6] hover:text-[#1e1e1e] hover:shadow-[0_0_10px_rgba(86,156,214,0.3)]"
            >
              click me
            </motion.button>
          ) : showMessage ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-[#9cdcfe] text-2xl font-bold font-mono"
            >
              <TypeAnimation
                sequence={[
                  // TODO: Change the messages based on your preferences (add more messages if needed)
                    "Hey My Little Girl👋🏻",
                    2000,
                    "Hope you know how much I love you <3",
                    2000,
                    "[Wising my baby the happiest birthday yayayaa👀]",
                    2000,
                    "choose one of them 😗",
                    2000,
                  ]}
                wrapper="div"
                speed={50}
                deletionSpeed={99}
                cursor={true}
                repeat={0}
              />
            </motion.div>
          ) : (
            <div className="mt-8 flex justify-center">
              <div className="flex gap-12 justify-center">
                <button
                  onClick={handlePresentClick}
                  className="text-6xl cursor-pointer transition-all duration-500 ease-out hover:scale-125 hover:rotate-5 hover:text-shadow-[0_0_15px_rgba(255,255,255,0.5)]"
                  style={{
                    animation: 'float 0.8s ease-out forwards',
                    opacity: 0
                  }}
                >
                  🎁
                </button>
                <button
                  onClick={handlePresentClick}
                  className="text-6xl cursor-pointer transition-all duration-500 ease-out hover:scale-125 hover:-rotate-5 hover:text-shadow-[0_0_15px_rgba(255,255,255,0.5)]"
                  style={{
                    animation: 'float 0.8s ease-out 0.2s forwards',
                    opacity: 0
                  }}
                >
                  🎀
                </button>
                <button
                  onClick={handlePresentClick}
                  className="text-6xl cursor-pointer transition-all duration-500 ease-out hover:scale-125 hover:rotate-5 hover:text-shadow-[0_0_15px_rgba(255,255,255,0.5)]"
                  style={{
                    animation: 'float 0.8s ease-out 0.4s forwards',
                    opacity: 0
                  }}
                >
                  🎈
                </button>
              </div>
            </div>
          )}
        </AnimatePresence>
      </div>
      <style jsx>{`
        @keyframes float {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}