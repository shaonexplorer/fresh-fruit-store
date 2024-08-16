import { motion, AnimatePresence } from "framer-motion";

function NavItem({ open }) {
  return (
    <AnimatePresence mode="wait">
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.3 }}
          className="absolute top-20 left-0 z-20 w-full"
        >
          <div className="w-[90%] flex flex-col uppercase items-center gap-10 bg-red-500 rounded-3xl mx-auto text-white font-semibold text-xl py-7">
            <p className="hover:text-green-500 duration-500">home</p>
            <p className="hover:text-green-500 duration-500">about</p>
            <p className="hover:text-green-500 duration-500">services</p>
            <p className="hover:text-green-500 duration-500">contact</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default NavItem;
