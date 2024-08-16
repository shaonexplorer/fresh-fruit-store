import apple from "../../assets/fruits/apple.png";
import avocado from "../../assets/fruits/avocado.png";
import cherry from "../../assets/fruits/cherry.png";
import orange from "../../assets/fruits/orange.png";

import { motion } from "framer-motion";

const menus = [
  {
    id: 1,
    title: "Fresh Red Apples",
    link: "/",
    price: "$2.00",
    image: apple,
    delay: 0.3,
  },
  {
    id: 2,
    title: "Fresh Oranges",
    link: "/",
    price: "$3.99",
    image: orange,
    delay: 0.4,
  },
  {
    id: 3,
    title: "Fresh Avocadoes",
    link: "/",
    price: "$7.48",
    image: avocado,
    delay: 0.5,
  },
  {
    id: 4,
    title: "Fresh Cherries",
    link: "/",
    price: "$5.99",
    image: cherry,
    delay: 0.6,
  },
];

function Menu() {
  return (
    <section className="container max-w-7xl mx-auto">
      <motion.h1
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5, delay: 0.3 }}
        className="pl-16 md:pl-0 my-14 uppercase text-2xl font-semibold"
      >
        our menu
      </motion.h1>
      <div className="flex flex-col gap-8 md:gap-0 items-center md:flex-row  md:justify-between md:items-center">
        {menus.map((item) => (
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: item.delay }}
            key={item.id}
            className="pr-10 md:pr-5 hover:!scale-110 duration-500 relative flex flex-col justify-between items-end px-6 py-4 rounded-3xl shadow-2xl shadow-stone-400 w-[80%] md:w-[23%]"
          >
            <img
              src={item.image}
              className="absolute -top-6 left-20 md:left-4 w-[15%] md:w-[25%] scale-110"
            ></img>
            <p className="text-xl font-semibold">{item.title}</p>
            <span className="text-xl font-semibold text-amber-500">
              {item.price}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Menu;
