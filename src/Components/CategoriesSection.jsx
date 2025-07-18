import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Data from "../data";
import { useEffect, useState } from "react";

function CategoriesSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  const badgeVariants = {
    initial: { scale: 0.8, opacity: 0 },
    animate: {
      scale: 1,
      opacity: 1,
      transition: { type: "spring", stiffness: 200 },
    },
  };

  const buttonHover = {
    scale: 1.05,
    transition: { type: "spring", stiffness: 400 },
  };

  const [products, setProducts] = useState(Data.products);

  useEffect(() => {
    const randomisedProducts = (productsArr) => {
      for (let i = productsArr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [productsArr[i], productsArr[j]] = [productsArr[j], productsArr[i]];
      }

      return productsArr;
    };

    const randProducts = randomisedProducts(products);

    setProducts(randProducts.slice(0, 3));
  }, []);

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50 overflow-x-hidden">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-24 text-4xl md:text-5xl font-bold text-gray-900 text-center tracking-tight"
        >
          Explore Our Collections
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-wrap -mx-3 mb-20"
        >
          <div className="w-full lg:w-1/2 px-3 mb-6 lg:mb-0">
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="relative mb-6 h-64 w-full bg-cover bg-center bg-no-repeat rounded-xl object-cover shadow-lg overflow-hidden"
              style={{ backgroundImage: `url(${products[0].image})` }}
            >
              <Link
                className="absolute inset-0 flex items-end"
                to={`/product/${products[0].slug}`}
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="pl-8 pb-8 w-full bg-gradient-to-t from-black/70 to-transparent"
                >
                  <h3 className="text-3xl font-bold text-white">
                    {products[0].name}
                  </h3>
                  <p className="text-xl text-white font-bold">
                    <span>
                      {products[0].categories[0].name} |{" "}
                      {products[0].categories[0].subcategories[0].name}
                    </span>
                  </p>
                </motion.div>
              </Link>
            </motion.div>

            <motion.div
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="relative h-64 w-full bg-cover bg-center bg-no-repeat rounded-xl object-cover shadow-lg overflow-hidden"
              style={{ backgroundImage: `url(${products[1].image})` }}
            >
              <Link
                className="absolute inset-0 flex items-end"
                to={`/product/${products[1].slug}`}
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="pl-8 pb-8 w-full bg-gradient-to-t from-black/70 to-transparent"
                >
                  <h3 className="text-3xl font-bold text-white">
                    {products[1].name}
                  </h3>
                  <p className="text-xl text-white font-bold">
                    <span>
                      {products[1].categories[0].name} |{" "}
                      {products[1].categories[0].subcategories[0].name}
                    </span>
                  </p>
                </motion.div>
              </Link>
            </motion.div>
          </div>

          <div className="w-full lg:w-1/2 px-3">
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="relative inline-block mb-6 h-96 lg:h-full w-full bg-no-repeat bg-cover rounded-xl object-cover shadow-lg overflow-hidden"
              style={{ backgroundImage: `url(${products[2].image})` }}
            >
              <motion.span
                variants={badgeVariants}
                initial="initial"
                animate="animate"
                className="inline-block px-3 py-1 ml-4 mt-4 text-xs font-semibold border-2 border-blue-500 rounded-full text-blue-500 bg-white shadow-sm uppercase"
              >
                New
              </motion.span>
              <div className="absolute bottom-0 left-0 pb-12 pl-8 w-full bg-gradient-to-t from-black/80 to-transparent">
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-xl text-amber-400 font-semibold"
                >
                  Excellent Value
                </motion.span>
                <motion.h3
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                  className="mt-3 mb-2 text-3xl font-bold text-white"
                >
                  {products[2].name}
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 }}
                  className="mb-8 font-bold text-white"
                >
                  {products[2].categories[0].name} |{" "}
                  {products[2].categories[0].subcategories[0].name}
                </motion.p>
                <motion.div whileHover={buttonHover} whileTap={{ scale: 0.95 }}>
                  <Link
                    className="inline-block bg-gradient-to-r from-amber-400 to-amber-500 text-white font-semibold py-3 px-8 rounded-full uppercase transition-all shadow-md hover:shadow-lg"
                    to="/quote"
                  >
                    Get a Quote
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="text-center"
        >
          <motion.div
            whileHover={buttonHover}
            whileTap={{ scale: 0.95 }}
            className="inline-block"
          >
            <Link
              className="bg-gradient-to-r from-indigo-600 to-indigo-700 text-white font-semibold py-4 px-10 rounded-full uppercase shadow-md hover:shadow-lg transition-all"
              to="/products"
            >
              View All Products
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default CategoriesSection;
