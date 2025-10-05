import { motion } from "framer-motion";

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="bg-[white] max-h-100vh py-16 mb-12 px-4 sm:px-6 lg:px-8"
    >
      <h2 className="text-5xl font-semibold text-center mb-12 mt-8">
        My Experience
      </h2>
      <div className="grid grid-cols-1 gap-8 max-w-6xl mx-auto">
        {/* Experience Block 1 */}
        <motion.div
          /* sliding animation */
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
        >
          <motion.div
            className="bg-[white] p-6 rounded-md border border-[#000000] shadow-md "
            whileHover={{ scale: 1.05 }}
          >
            <div className="flex justify-between items-center mb-4 text-black">
              <p className="text-2xl font-semibold">
                SWE Intern @ Company
              </p>
              <p className="text-lg font-semibold">March 2023–September 2023</p>
            </div>
            <ul className="text-lg list-disc list-outside pl-4 ">
              <li>
                Built internal dashboard tools using React and Flask for data monitoring.
              </li>
              <li>
                Improved backend performance by 30% by refactoring API calls and caching results.
              </li>
              <li>
               Collaborated in an agile team of 5 engineers to ship features on a bi-weekly sprint.
              </li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Experience Block 2 */}
        <motion.div
          /* sliding animation */
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
        >
          <motion.div
            className="bg-[white] p-6 rounded-md border border-[#000000] shadow-md "
            whileHover={{ scale: 1.05 }}
          >
            <div className="flex justify-between items-center mb-4 text-black">
              <p className="text-2xl font-semibold">
                SWE Intern @ Company
              </p>
              <p className="text-lg font-semibold">March 2023–September 2023</p>
            </div>
            <ul className="text-lg list-disc list-outside pl-4 ">
              <li>
                Built internal dashboard tools using React and Flask for data monitoring.
              </li>
              <li>
                Improved backend performance by 30% by refactoring API calls and caching results.
              </li>
              <li>
               Collaborated in an agile team of 5 engineers to ship features on a bi-weekly sprint.
              </li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Experience Block 3 */}
        <motion.div
          /* sliding animation */
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
        >
          <motion.div
            className="bg-[white] p-6 rounded-md border border-[#000000] shadow-md"
            whileHover={{ scale: 1.05 }}
          >
            <div className="flex justify-between items-center mb-4 text-black">
              <p className="text-2xl font-bold">
                SWE Intern @ Company
              </p>
              <p className="text-lg font-bold">SOctober 2024–Present</p>
            </div>
            <ul className="text-lg list-disc list-outside pl-4">
              <li>
                Built internal dashboard tools using React and Flask for data monitoring.
              </li>
              <li>
                Improved backend performance by 30% by refactoring API calls and caching results.
              </li>
              <li>
               Collaborated in an agile team of 5 engineers to ship features on a bi-weekly sprint.
              </li>
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
