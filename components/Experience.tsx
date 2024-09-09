const experiences = [
    {
      title: "BE - IT",
      organization: "LDRP-ITR, Gandhinagar, Gujarat",
      description: "Pursuing bachelor's degree in IT engineering.",
      date: "2021-2025",
    },
    {
      title: "Full-Stack Developer",
      organization: "The Special Character, Ahmedabad, Gujarat",
      description:
        "I led a team of 6 in developing an e-commerce site to buy plants online, utilizing Next.js, HTML5, CSS3, and Tailwind CSS, securing third place in a web development competition.",
      date: "Dec 2023 - Jan 2024",
    },
    {
      title: "Frontend Lead",
      organization: "SSIP Hackathon",
      description:
        "I led the team and was responsible for developing the frontend of the GiftConnect project, ensuring a smooth and responsive user interface. My role involved utilizing modern web technologies to create an engaging user experience.",
      date: "Nov 2023",
    },
  {
      title: "Frontend Developer",
      organization: "Xenesis '24",
      description:
        "I built various components, including participants' tickets, event cards, and the team page for our college tech fest, contributing to a dynamic and user-friendly experience.",
      date: "Jan 2024",
    }
  ];

export default function Experience() {
  return (
    <section id="experience" className="mb-32 max-w-3xl mx-auto px-4">
      <h2 className="text-3xl font-bold md:text-4xl mb-12 text-center">Experience</h2>
      <div className="space-y-16">
        {experiences.map((exp, index) => (
          <div key={index} className="flex">
            <div className="mr-6 mt-1">
              <div className="w-4 h-4 rounded-full bg-primary"></div>
              {index !== experiences.length - 1 && (
                <div className="w-0.5 h-full bg-gray-200 dark:bg-gray-700 ml-2"></div>
              )}
            </div>
            <div>
              <h3 className="text-2xl font-semibold">{exp.title}</h3>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-2">
                {exp.organization}
              </p>
              <p className="text-lg mb-2">{exp.description}</p>
              <p className="text-base text-gray-500 dark:text-gray-400">
                {exp.date}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
