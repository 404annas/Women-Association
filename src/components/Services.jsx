import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import TherapyCards from "./TherapyCards";
import { TbDeviceVisionPro } from "react-icons/tb";
import { GiSupersonicArrow } from "react-icons/gi";
import { GoGoal } from "react-icons/go";

// Variants for container and items
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 80 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Services = () => {
  // heading animation
  const headingRef = useRef(null);
  const headingInView = useInView(headingRef, { once: true, amount: 0.3 });

  // cards animation
  const cardsRef = useRef(null);
  const cardsInView = useInView(cardsRef, { once: true, amount: 0.2 });

  return (
    <div
      id="services"
      className="min-h-screen bg-gradient-to-b from-emerald-100 to-cyan-50 pt-10 pb-2"
    >
      <div className="container mx-auto flex flex-col">
        {/* Cards Section */}
        <motion.div
          ref={cardsRef}
          variants={containerVariants}
          initial="hidden"
          animate={cardsInView ? "show" : "hidden"}
          className="container mx-auto py-20"
        >
          {/* First Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-10 gap-0">
            {[
              {
                cardImage: "https://www.apwa.org.au/images/event-3.jpg",
                // icon: <TbDeviceVisionPro />,
                title: "Our Vision",
                description:
                  "Our vision & dream is a world where every woman can thrive, leading with confidence and pursuing her passions without limitations. We envision a future where women are celebrated, empowered, and free to reach their fullest potential.",
              },
              {
                cardImage: "https://www.apwa.org.au/images/event-5.jpg",
                // icon: <GiSupersonicArrow />,
                title: "Our Mission",
                description:
                  "At APWA we are committed to empowering women to achieve their full potential through active engagement in business, employment, learning, and community activities. Through strategic initiatives, mentorship programs, and collaborative partnerships, we aim to dismantle barriers hindering their progress.",
              },
              {
                cardImage: "https://www.apwa.org.au/images/event-8.jpg",
                // icon: <GoGoal />,
                title: "Our Goal",
                description:
                  "Our goal is to build a strong foundation for women to grow, connect, and thrive. We are dedicated to fostering an environment where women can access the resources they need, gain confidence, and take control of their future, contributing positively to their communities and beyond.",
              },
            ].map((item, index) => (
              <motion.div key={index} variants={cardVariants}>
                <TherapyCards {...item} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Services;
