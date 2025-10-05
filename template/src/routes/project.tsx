// src/routes/project.tsx
import { motion } from "framer-motion";
export default function ProjectsSection() {
  const projects = [
    {
      id: 1,
      title: "Project1",
      description: "description1",
      image: "/codeLogo.png",
      link: "https://www.instagram.com/umasscodecollab/",
    },
    {
      id: 2,
      title: "Project2",
      description: "description2",
      image: "/codeLogo.png",
      link: "https://www.instagram.com/umasscodecollab/",
    },
    {
      id: 3,
      title: "Project3",
      description: "description3",
      image: "/codeLogo.png",
      link: "https://www.instagram.com/umasscodecollab/",
    },
    {
      id: 4,
      title: "Project4",
      description: "description4",
      image: "/codeLogo.png",
      link: "https://www.instagram.com/umasscodecollab/",
    },
  ];

  return (
    <div
      id="projects"
      className="bg-transparent min-h-screen py-12 px-4 sm:px-6 lg:px-8"
    >
      <h2 className="text-3xl sm:text-4xl font-bold text-center mx-auto mb-12 text-[#2d2d2d]">
        Personal Projects
      </h2>
      <div className="space-y-12 gap-8 max-w-4xl mx-auto">
        {projects.map((project, index) => {
          //maps through each project to display and calculated odd indices for alternate display

          const isOdd = index % 2 === 0;

          return (
            <motion.div
              key={project.id}
              className="flex flex-col md:flex-row bg-[#f9fafb] rounded-2xl shadow-sm overflow-hidden"
              /* appearing animation */
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              {/* image section */}
              <div
                className={`md:w-1/2 p-4 ${isOdd ? "md:order-1" : "md:order-2"}`}
              >
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover rounded-lg"
                    /* transition for a bubbly hover */
                    whileHover={{ scale: 1.02 }}
                    transition={{
                      type: "spring",
                      stiffness: 500,
                      damping: 10,
                    }}
                  />
                </a>
              </div>

              {/* description section */}
              <div
                className={`md:w-1/2 p-8 flex flex-col justify-center ${isOdd ? "md:order-2" : "md:order-1"}`}
              >
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <span className="text-blue-500 hover:text-blue-700 font-medium">
                    View Project →
                  </span>
                </a>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}