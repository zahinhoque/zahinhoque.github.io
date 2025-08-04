import React from 'react';

function App() {
  return (
    <div className="antialiased bg-white text-gray-800 w-screen min-h-screen">
      <Header />
      <Introduction />
      <div className="container mx-auto px-4 pb-4 max-w-4xl"> {/* Changed py-4 to pb-4 */}
        <hr className="my-6 border-gray-200" />
        <RecentNews />
      </div>
      <Footer />
    </div>
  );
}

const Header = () => {
  return (
    <header className="bg-gray-50 shadow-sm py-4 fixed w-full z-10 font-sans border-b border-gray-200">
      <nav className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <a href="#introduction" className="text-xl font-bold text-gray-800 hover:text-blue-700 transition duration-300">Zahin Noor Hoque</a>
        </div>
        <div className="space-x-6 hidden md:flex">
          <a href="#introduction" className="text-gray-600 hover:text-blue-700 font-medium transition duration-300">About</a>
          <a href="#recent-news" className="text-gray-600 hover:text-blue-700 font-medium transition duration-300">News</a>
          <a href="#footer" className="text-gray-600 hover:text-blue-700 font-medium transition duration-300">Connect</a>
          <a href="/ZahinHoquePublicCV.pdf" target="_blank" className="text-gray-600 hover:text-blue-700 font-medium transition duration-300">CV</a>
        </div>
        <div className="md:hidden">
          <i className="fas fa-bars text-xl text-gray-600"></i>
        </div>
      </nav>
    </header>
  );
};

const Introduction = () => {
  return (
    <section id="introduction" className="relative w-full bg-white py-16 md:py-24 pt-24 pb-0 flex flex-col items-center justify-center text-center"> {/* Changed pb-8 to pb-0 */}
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="mb-8">
          <img src="/images/zahin_hoque_profile.png" alt="Zahin Hoque Professional Photo" className="w-44 h-44 rounded-full mx-auto object-cover border-4 border-blue-700 shadow-lg" />
        </div>

        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-2 text-gray-900 mt-8">Zahin Noor Hoque</h1>
        <p className="text-xl md:text-2xl font-light mb-8 max-w-2xl mx-auto">
          <span className="font-semibold text-blue-700">Linguistics</span> and <span className="font-semibold text-blue-700">Computer Science</span>
          <span> Undergraduate Student at the University of Georgia Morehead Honors College</span>
        </p>

        <div className="prose lg:prose-lg mx-auto text-gray-700 leading-relaxed text-base px-4 mt-8 text-left">
          <p className="mb-4">
          I am an undergraduate student at the University of Georgia, pursuing a dual degree in Linguistics and Computer Science with an emphasis in Artificial Intelligence. My academic background includes a minor in Arabic, a minor in Cognitive Science, and a Certificate in Applied Data Science. I have completed graduate coursework in South Asian linguistics, experimental methods, sociolinguistics, language documentation/field methods, and Arabic, alongside coursework in phonetics/phonology, generative syntax, and quantitative methods. I currently serve as President of the UGA Linguistics Club and formerly served as President of the Muslim Student Association.
          </p>
          <p className="mb-4">
          My linguistic interests span South Asian linguistics, with a specific focus on Eastern Bengali, including phonetics/phonology (with special interest in claims of tonogenesis), sociolinguistics, and documentation/field methods. My current research involves Eastern Bengali morphosyntax, specifically investigating ergativity-like phenomena under Professor Pilar Chamorro. Previously, I conducted neurolinguistics research on Urdu as a member of the FALCoN lab at UGA under Professor Dustin A. Chacón, now at UCSC. I also hold interests in historical linguistics and language contact.
          </p>
          <p className="mb-0">
          In Computer Science, my coursework includes Java software development, discrete mathematics, data structures, algorithms, theory of computation, systems programming, computer architecture, data science, and cognitive science. I have also completed elective coursework in software engineering and computer networks, along with graduate courses in artificial intelligence and human-computer interaction. My academic foundation is further strengthened by significant coursework in statistics.
          </p>
        </div>
      </div>
    </section>
  );
};

const RecentNews = () => {
  const newsItems = [
    {
      id: 1,
      title: "Joined UGAHacks Team",
      date: "Jun 2025",
      description: "Became part of the UGAHacks Logistics and Community Engagement team.",
      link: "#",
      tags: ["Leadership"] // Removed "UGAHacks"
    },
    {
      id: 2,
      title: "SPARK Award in Linguistics",
      date: "Apr 2025",
      description: "Received an award to conduct research on ergativity in Eastern Bengali dialects.",
      link: "#",
      tags: ["Linguistics", "Research", "Award"]
    },
    {
      id: 3,
      title: "UGAHacks X Hackathon",
      date: "Mar 2025",
      description: "Participated in the annual UGAHacks event.",
      link: "#",
      tags: ["CS"] // Removed "Hackathon"
    },
    {
      id: 4,
      title: "MSA President Elected",
      date: "May 2024",
      description: "Elected President of the Muslim Student Association.",
      link: "#",
      tags: ["Leadership", "Community"]
    },
    {
      id: 5,
      title: "CURO Fall Research Award",
      date: "Aug 2023",
      description: "Received award for Urdu neurolinguistics project.",
      link: "#",
      tags: ["Linguistics", "Research", "Award"]
    },
    {
      id: 6,
      title: "Linguistics Dept. Student Assistant",
      date: "Aug 2023",
      description: "Officially became a student assistant for the Linguistics Department.",
      link: "#",
      tags: ["Work Experience", "Linguistics"]
    },
    {
      id: 7,
      title: "UGA Linguistics Club President",
      date: "May 2023",
      description: "Elected President of the UGA Linguistics Club.",
      link: "#",
      tags: ["Leadership", "Linguistics"]
    },
    {
      id: 8,
      title: "SPARK Award for Neurolinguistics",
      date: "Mar 2023",
      description: "Received an award for the Urdu neurolinguistics project.",
      link: "#",
      tags: ["Linguistics", "Research", "Award"]
    },
  ];

  // Display only the X most recent updates (e.g., 3)
  const displayedNewsItems = newsItems.slice(0, 3);

  return (
    <section id="recent-news" className="py-8 md:py-12 w-full">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">Recent Updates & News</h2>
        <p className="text-center text-gray-600 mb-8">
          Here's what I've been working on and learning recently.
        </p>
        <ul className="space-y-8">
          {displayedNewsItems.map(item => (
            <li key={item.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 transform hover:-translate-y-1">
              <h3 className="text-xl font-semibold text-blue-700 mb-2">
                <a href={item.link} className="hover:underline">{item.title}</a>
              </h3>
              <p className="text-sm text-gray-500 mb-3">Posted on {item.date}</p>
              <p className="text-gray-700 mb-4">{item.description}</p>
              <div className="flex flex-wrap gap-2">
                {item.tags.map(tag => (
                  <span key={tag} className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </li>
          ))}
        </ul>
        <div className="text-center mt-12">
          <p className="text-gray-600 text-lg">
            More updates coming soon!
          </p>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer id="footer" className="bg-gray-800 text-white py-8 text-center font-sans w-full">
      <div className="container mx-auto px-4">
        <ul className="mb-6 flex justify-center space-x-6">
          {/*
          <li>
            <a href="mailto:hoquezahinn@gmail.com" title="Email me" className="social-icon text-white hover:text-blue-400 transition duration-300">
              <i className="fas fa-envelope text-2xl"></i>
              <span className="sr-only">Email me</span>
            </a>
          </li>
          */}
          <li>
            <a href="https://github.com/zahinhoque" target="_blank" title="GitHub" className="social-icon text-white hover:text-blue-400 transition duration-300">
              <i className="fab fa-github text-2xl"></i>
              <span className="sr-only">GitHub</span>
            </a>
          </li>
          <li>
            <a href="https://linkedin.com/in/zahin-hoque" target="_blank" title="LinkedIn" className="social-icon text-white hover:text-blue-400 transition duration-300">
              <i className="fab fa-linkedin-in text-2xl"></i>
              <span className="sr-only">LinkedIn</span>
            </a>
          </li>
          <li>
            <a href="https://instagram.com/znhoque" target="_blank" title="Instagram" className="social-icon text-white hover:text-blue-400 transition duration-300">
              <i className="fab fa-instagram text-2xl"></i>
              <span className="sr-only">Instagram</span>
            </a>
          </li>
          <li>
            <a href="https://twitter.com/zahinhoque" target="_blank" title="Twitter" className="social-icon text-white hover:text-blue-400 transition duration-300">
              <i className="fab fa-twitter text-2xl"></i>
              <span className="sr-only">Twitter</span>
            </a>
          </li>
        </ul>

        <p className="copyright text-muted text-sm">
          &copy; 2025 Zahin Noor Hoque. All rights reserved.
          <span className="mx-2">&bull;</span>
          <a href="https://zahinhoque.github.io/" className="hover:underline">zahinhoque.github.io</a>
        </p>
        <p className="theme-by text-muted text-xs mt-2">
          Built with React and Tailwind CSS.
        </p>
      </div>
    </footer>
  );
};

export default App;