import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="flex flex-col items-center text-center py-20 px-6 bg-gradient-to-r from-purple-100 to-purple-50">
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-5xl font-bold mb-6"
      >
        Slack makes it <span className="text-purple-600">easier</span> to work
        together
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.7 }}
        className="text-lg text-gray-600 max-w-xl mb-8"
      >
        A single platform for your team communication, file sharing and
        productivity.
      </motion.p>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-purple-600 text-white px-6 py-3 rounded-lg shadow-lg"
      >
        Try for Free
      </motion.button>
    </section>
  );
}
