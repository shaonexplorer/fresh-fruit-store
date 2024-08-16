import HeroPng from "../../assets/fruit-plate.png";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="container max-w-7xl mx-auto my-20">
      <div className="grid grid-cols-1 md:grid-cols-2 space-y-10">
        {/* description */}
        <div className="flex flex-col justify-center items-center md:items-start text-center md:text-left ">
          <motion.h1
            initial={{
              opacity: 0,
              x: -200,
              transition: { duration: 1.5, delay: 0.6 },
            }}
            animate={{
              opacity: 1,
              x: 0,
              transition: { duration: 1.5, delay: 0.6 },
            }}
            className="font-averia text-6xl leading-relaxed "
          >
            Healthy
            <br />
            Fresh <span className="text-amber-500"> Fruits!</span>
          </motion.h1>
          <motion.h2
            initial={{
              opacity: 0,
              x: -200,
              transition: { duration: 1.5, delay: 0.9 },
            }}
            animate={{
              opacity: 1,
              x: 0,
              transition: { duration: 1.5, delay: 0.9 },
            }}
            className="text-2xl my-5 tracking-wider"
          >
            Order Now For Fresh Healthy Life
          </motion.h2>
          <motion.p
            initial={{
              opacity: 0,
              x: -200,
              transition: { duration: 1.5, delay: 1.0 },
            }}
            animate={{
              opacity: 1,
              x: 0,
              transition: { duration: 1.5, delay: 1.0 },
            }}
            className="text-base text-gray-400 max-w-md tracking-wide"
          >
            Healthy and yummy food for fresh morning breakfast. Eat Daily for
            good health and mind Order now and get 20% off on your first order
          </motion.p>
          <motion.button
            initial={{
              opacity: 0,
              x: -200,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{ duration: 1.5, delay: 1.2 }}
            className="bg-red-500 px-2 py-2 rounded-2xl w-40 text-white capitalize font-semibold text-lg my-5 shadow-xl shadow-gray-400 hover:!scale-110 duration-500"
          >
            order now
          </motion.button>
        </div>
        {/* image */}
        <div className="flex justify-center items-center">
          <motion.img
            initial={{ opacity: 0, x: 200, rotate: 75 }}
            animate={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ duration: 1.5, delay: 0.2 }}
            src={HeroPng}
            className="w-[350px] md:w-[550px] drop-shadow-xl"
          ></motion.img>
        </div>
      </div>
    </section>
  );
}

export default Hero;
