import { motion, AnimatePresence } from "framer-motion";

interface LoadingScreenProps {
  isLoading: boolean;
}

/**
 * LoadingScreen: A cinematic intro animation displayed while the site loads.
 * Features a name reveal with a horizontal line expansion, then the entire
 * overlay slides away. Uses AnimatePresence for smooth exit transitions.
 */
const LoadingScreen = ({ isLoading }: LoadingScreenProps) => {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-background"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.65, 0, 0.35, 1] }}
        >
          <div className="flex flex-col items-center gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-serif text-3xl md:text-5xl tracking-tight text-foreground"
            >
              <span className="text-gradient">REEL</span>
              <span className="text-muted-foreground font-light ml-1">Studio</span>
            </motion.div>

            {/* Expanding line indicator */}
            <motion.div
              className="h-px bg-primary origin-left"
              initial={{ width: 0 }}
              animate={{ width: 120 }}
              transition={{ duration: 1.2, delay: 0.5, ease: [0.65, 0, 0.35, 1] }}
            />

            <motion.p
              className="text-sm tracking-[0.3em] uppercase text-muted-foreground"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              Creative Developer
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
