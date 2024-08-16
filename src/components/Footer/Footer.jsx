import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLeaf } from "react-icons/fa";
import { motion } from "framer-motion";

function Footer() {
  return (
    <footer className="bg-orange-50">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="max-w-7xl mx-8 md:mx-auto flex flex-col md:flex-row items-center space-y-8 justify-between py-12"
      >
        {/* logo */}
        <div>
          <div className="uppercase text-2xl font-bold font-poppins flex gap-2">
            <p className="text-red-500">fruit</p>
            <p className="text-amber-500">store</p>
            <div className="text-green-500">
              <FaLeaf />
            </div>
          </div>
        </div>
        {/* social icons */}
        <div className="flex flex-col md:flex-row justify-between gap-5 text-3xl text-stone-500">
          <FaFacebook />
          <FaTwitter />
          <FaInstagram />
        </div>
      </motion.div>
    </footer>
  );
}

export default Footer;
