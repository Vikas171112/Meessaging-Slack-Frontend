import { motion } from "framer-motion";

export default function Features() {
  return (
    <div className="min-h-screen flex flex-col">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="flex-grow p-10"
      >
        <h1 className="text-4xl font-bold mb-6">Features</h1>
        <p className="text-lg max-w-2xl">
          Explore powerful features that make your team collaboration seamless.
        </p>
      </motion.div>
    </div>
  );
}
