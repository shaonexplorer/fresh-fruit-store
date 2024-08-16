import { motion } from "framer-motion";

function Banner2() {
  return (
    <section className="md:max-w-7xl md:mx-auto mx-5 rounded-3xl bg-[url('/src/assets/banner-bg.jpg')] bg-no-repeat bg-cover bg-center my-20">
      <div className="flex flex-col justify-center items-center md:items-end py-20">
        <div className="flex flex-col justify-center items-center md:items-start md:mr-20">
          <motion.h1
            initial={{ opacity: 0, x: 200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-3xl md:text-6xl text-center md:text-left max-w-sm font-bold my-2 uppercase"
          >
            Get Fresh Fruits Today
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, x: 200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="tracking-wide text-center md:text-left md:max-w-md my-2"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            iusto minima ad ut id eos accusantium aut, aperiam quis incidunt!
          </motion.p>
          <motion.button
            initial={{ opacity: 0, x: 200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, delay: 0.7 }}
            className="bg-red-500 px-2 py-2 rounded-2xl w-40 text-white capitalize font-semibold text-lg my-5 shadow-xl shadow-gray-400 hover:!scale-110 duration-500"
          >
            order now
          </motion.button>
        </div>
      </div>
    </section>
  );
}

export default Banner2;
