import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex justify-between items-center px-8 py-4 bg-white shadow-md sticky top-0 z-50"
    >
      <h1 className="text-2xl font-bold text-purple-600">SlackClone</h1>
      <div className="space-x-6">
        <a href="#features" className="hover:text-purple-600">
          Features
        </a>
        <a href="#pricing" className="hover:text-purple-600">
          Pricing
        </a>
        <a href="#contact" className="hover:text-purple-600">
          Contact
        </a>
      </div>
      <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700">
        Get Started
      </button>
    </motion.nav>
  );
}
