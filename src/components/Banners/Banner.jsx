import splash from "../../assets/fruits-splash.png";
import { motion } from "framer-motion";

function Banner() {
  return (
    <section className="my-20 bg-orange-50">
      <div className=" max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 py-20">
        {/* image */}
        <div className="flex items-center justify-center">
          <motion.img
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, delay: 0.7 }}
            className="h-[450px] drop-shadow-lg"
            src={splash}
          ></motion.img>
        </div>

        {/* description */}
        <div className="flex flex-col text-center md:text-left justify-center items-center md:items-start px-10 md:px-0 ">
          <motion.h1
            initial={{ opacity: 0, y: 200 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-3xl md:text-6xl font-bold uppercase my-2"
          >
            Brand Info
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 200 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="tracking-wide md:max-w-md my-2"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            iusto minima ad ut id eos accusantium aut, aperiam quis incidunt!
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 200 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="tracking-wide md:max-w-md my-2"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            iusto minima ad ut id eos accusantium aut, aperiam quis incidunt!
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 200 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="bg-red-500 px-2 py-2 rounded-2xl w-40 text-white capitalize font-semibold text-lg my-5 shadow-xl shadow-gray-400 hover:!scale-110 duration-500"
          >
            learn more
          </motion.button>
        </div>
      </div>
    </section>
  );
}

export default Banner;
