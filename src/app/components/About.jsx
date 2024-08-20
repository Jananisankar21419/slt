import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const About = () => {
  return (
    <section
      id="about"
      className="w-full h-screen p-8 grid grid-cols-1 md:grid-cols-2 items-center gap-8 max-w-6xl mr-auto relative lg:ml-16 lg:mt-9"
    >
      <ShuffleGrid />

      <div className="flex flex-col items-center justify-center text-center md:text-left md:items-center">
        <h3 className="text-4xl md:text-6xl font-semibold text-[#6482AD] whitespace-nowrap overflow-hidden text-clip lg:ml-72">
          WHO WE ARE
        </h3>
        <p className="text-lg md:text-lg text-gray-600 mt-8 md:mt-16 text-center md:text-left lg:ml-56 sm:leading-9">
          We are the people who make thoughtful design with fresh ideas. You can
          collaborate with our superlative team who are skilled and enthusiastic
          so you can get creative solutions.
        </p>
      </div>
    </section>
  );
};

const shuffle = (array) => {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

const squareData = [
  { id: 1, src: "/g1.jpg" },
  { id: 2, src: "/img2.jpg" },
  { id: 3, src: "/people.jpg" },
  { id: 4, src: "/ll.png" },
];

const generateSquares = () => {
  return shuffle(squareData).map((sq) => (
    <motion.div
      key={sq.id}
      layout
      transition={{ duration: 1, type: "spring" }}
      className="w-full h-full"
      style={{
        backgroundImage: `url(${sq.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      whileHover={{ scale: 1.1 }}
    />
  ));
};

const ShuffleGrid = () => {
  const timeoutRef = useRef(null);
  const [squares, setSquares] = useState(generateSquares());

  useEffect(() => {
    shuffleSquares();

    return () => clearTimeout(timeoutRef.current);
  }, []);

  const shuffleSquares = () => {
    setSquares(generateSquares());

    timeoutRef.current = setTimeout(shuffleSquares, 3000);
  };

  return (
    <div className="grid grid-cols-2 grid-rows-2 h-[450px] gap-1 rounded-lg overflow-hidden">
      {squares.map((sq) => sq)}
    </div>
  );
};

export default About;
