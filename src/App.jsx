import React from 'react';

const HomePage = ({ onNavigate }) => {
  return (
    <>
      <Introduction />
      <div className="container mx-auto px-4 pb-4 max-w-4xl">
        <hr className="my-6 border-gray-200" />
        <RecentNews onNavigate={onNavigate} />
      </div>
    </>
  );
};

function App() {
  const [currentPage, setCurrentPage] = React.useState('home');
  const handleNavigation = (pageId) => {
    setCurrentPage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <div className="antialiased bg-white text-gray-800 w-screen min-h-screen">
      <Header onNavigate={handleNavigation} />
      {currentPage === 'home' && <HomePage onNavigate={handleNavigation} />}
      {currentPage === 'interests' && <Interests />}
      {currentPage === 'allUpdates' && <AllUpdatesPage onNavigate={handleNavigation} />}
      <Footer />
    </div>
  );
}

const Header = ({ onNavigate }) => {
  const handleInternalScroll = (pageId, sectionId) => {
    onNavigate(pageId);
    setTimeout(() => {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };
  return (
    <header className="bg-gray-50 shadow-sm py-4 fixed w-full z-10 font-sans border-b border-gray-200">
      <nav className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <a href="#introduction" onClick={() => handleInternalScroll('home', 'introduction')} className="text-xl font-bold text-gray-800 hover:text-blue-700 transition duration-300">Zahin Noor Hoque</a>
        </div>
        <div className="space-x-6 hidden md:flex">
          <a href="#introduction" onClick={() => handleInternalScroll('home', 'introduction')} className="text-gray-600 hover:text-blue-700 font-medium transition duration-300">About</a>
          <a href="#all-updates" onClick={() => onNavigate('allUpdates')} className="text-gray-600 hover:text-blue-700 font-medium transition duration-300">News</a>
          <a href="#interests" onClick={() => onNavigate('interests')} className="text-gray-600 hover:text-blue-700 font-medium transition duration-300">Interests</a>
          <a href="#footer" onClick={() => handleInternalScroll('home', 'footer')} className="text-gray-600 hover:text-blue-700 font-medium transition duration-300">Connect</a>
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
          I am an undergraduate student at the University of Georgia, pursuing a dual degree in Linguistics and Computer Science with an emphasis in Artificial Intelligence. My academic background further includes a minor in Arabic, a minor in Cognitive Science, and a Certificate in Applied Data Science. I have completed graduate coursework in South Asian linguistics, experimental methods, sociolinguistics, language documentation/field methods, and Arabic, alongside coursework in phonetics/phonology, generative syntax, and quantitative methods. I currently serve as President of the UGA Linguistics Club, Advanced Class Officer of the Guftugu Urdu Language Club, a Logistics and Community Engagement Organizer at UGAHacks, and a Georgia Ambassador at Charity Week USA.
          </p>
          <p className="mb-4">
          My linguistic interests span South Asian linguistics with a specific focus on Eastern Bengali, including phonetics/phonology (with special interest in claims of tonogenesis), sociolinguistics, and documentation/field methods. My current research involves Eastern Bengali morphosyntax, specifically investigating ergativity-like phenomena under Professor Pilar Chamorro. I previously conducted neurolinguistics research on Urdu as a member of the FALCoN lab at UGA under Professor Dustin A. Chacón, now at UCSC. I also hold interests in historical linguistics and language contact.
          </p>
          <p className="mb-0">
          In Computer Science, my coursework includes Java software development, discrete mathematics, data structures, algorithms, theory of computation, systems programming, and computer architecture. I have also completed elective coursework in software engineering, computer networks, data science, and cognitive science, along with graduate courses in artificial intelligence and human-computer interaction. My academic foundation is further strengthened by significant coursework in statistics.
          </p>
        </div>
      </div>
    </section>
  );
};

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

const RecentNews = ({ onNavigate }) => {
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
          <button
            onClick={() => onNavigate('allUpdates')}
            className="inline-block bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-blue-800 transition duration-300 ease-in-out transform hover:-translate-y-1"
          >
            See All Updates &rarr;
          </button>
        </div>
      </div>
    </section>
  );
};

const AllUpdatesPage = ({ onNavigate }) => {
  return (
    <section id="all-updates" className="py-16 md:py-24 pt-24 w-full bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">📰 All Updates & News 📰</h2>
        <p className="text-center text-gray-600 mb-8">
          A complete chronological list of my recent activities and achievements.
        </p>
        <ul className="space-y-8">
          {newsItems.map(item => (
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
          <button
            onClick={() => onNavigate('home')}
            className="inline-block text-blue-700 font-semibold py-3 px-6 rounded-lg border border-blue-700 hover:bg-blue-100 transition duration-300 ease-in-out transform hover:-translate-y-1"
          >
            &larr; Back to Home
          </button>
        </div>
      </div>
    </section>
  );
};

const Interests = () => {
  const interestsData = [
    {
      id: 'linguistics',
      title: 'Linguistics Research',
      summary: 'My primary linguistic interests revolve around South Asian languages, particularly Eastern Bengali, with a focus on phonetics, phonology, and morphosyntax. I also have a strong background in neurolinguistics and language documentation.',
      content: `
        <p class="mb-4">My current research investigates ergativity-like phenomena in Eastern Bengali dialects under Dr. Pilar Chamorro Fernández. This involves qualitative analysis of syntactic environments to challenge traditional nominative-accusative classifications and explore the interplay of unergative vs. unaccusative verbs and animacy hierarchies.</p>
        <p class="mb-4">Previously, I conducted neurolinguistics research on Urdu as a member of the FALCoN lab at UGA under Professor Dustin A. Chacón. This project specifically examined EEG responses to varied forms of the Arabic script, contributing to our understanding of visual word form processing.</p>
        <p class="mb-0">Beyond these projects, I am deeply interested in historical linguistics, language contact, and the sociolinguistic aspects of language variation and change. My coursework has provided a robust foundation in generative syntax, phonetics/phonology, and quantitative methods, complementing my field methods experience.</p>
      `,
      media: [
        {
          type: 'image',
          src: '/images/linguistics_research.jpg',
          alt: 'Linguistics research diagram',
          caption: 'An illustrative diagram representing linguistic analysis.'
        },
        {
          type: 'image',
          src: '/images/urdu_eeg.jpg',
          alt: 'EEG brain activity for Urdu study',
          caption: 'Sample EEG data showing brain responses during Urdu language processing.'
        }
      ]
    },
    {
      id: 'computer-science',
      title: 'Computer Science & AI',
      summary: 'My computer science pursuits are heavily focused on Artificial Intelligence, data science, and full-stack web development, with a strong foundation in core CS principles.',
      content: `
        <p class="mb-4">My academic journey in Computer Science emphasizes Artificial Intelligence, evidenced by graduate coursework in AI and human-computer interaction. I have a solid understanding of data structures, algorithms, theory of computation, and systems programming, built through rigorous coursework in Java software development.</p>
        <p class="mb-4">I actively engage in practical application through hackathons and team projects. A notable project includes collaborating on a full-stack AI-powered tutoring chatbot using React, Vite, Tailwind CSS, NodeJS, Express, and MongoDB, integrating OpenAI's GPT for dynamic learning assistance.</p>
        <p class="mb-0">My interests extend to data science, where I've completed a certificate, and web development, contributing to projects like a full-stack cinema ticket booking platform. This blend of theoretical knowledge and practical experience allows me to approach complex problems with a comprehensive skill set.</p>
      `,
      media: [
        {
          type: 'image',
          src: '/images/ai_chatbot.jpg',
          alt: 'AI Chatbot interface',
          caption: 'Conceptual design of an AI-powered tutoring chatbot.'
        },
        {
          type: 'image',
          src: '/images/full_stack_dev.jpg',
          alt: 'Full-stack development illustration',
          caption: 'An illustration representing different layers of full-stack development.'
        }
      ]
    },
    {
      id: 'cultural-studies',
      title: 'Cultural & Language Studies',
      summary: 'Beyond my primary fields, I engage deeply with cultural and language studies, particularly through my minor in Arabic and leadership roles in student organizations.',
      content: `
        <p class="mb-4">My minor in Arabic has provided me with a deep appreciation for language acquisition and cultural understanding. This academic pursuit complements my linguistic research by offering insights into language structure and its societal implications.</p>
        <p class="mb-4">As the President of the UGA Linguistics Club, I regularly organize and lead discussions and activities that engage members with diverse linguistic topics, fostering a vibrant academic community. My previous role as President of the Muslim Student Association further honed my leadership and organizational skills, allowing me to provide consistent weekly meetings and engage a large student body.</p>
        <p class="mb-0">These experiences highlight my commitment to interdisciplinary learning and my ability to connect with diverse groups, enriching my academic and personal development.</p>
      `,
      media: [
        {
          type: 'image',
          src: '/images/arabic_script.jpg',
          alt: 'Arabic script calligraphy',
          caption: 'Example of beautiful Arabic calligraphy.'
        },
        {
          type: 'image',
          src: '/images/linguistics_club.jpg',
          alt: 'UGA Linguistics Club meeting',
          caption: 'A typical UGA Linguistics Club meeting in progress.'
        }
      ]
    }
  ];

  const [selectedInterest, setSelectedInterest] = React.useState(interestsData[0]);

  return (
    <section id="interests" className="py-8 md:py-12 w-full bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">💡 My Interests & Insights 💡</h2>
        <p className="text-center text-gray-600 mb-8">
          Dive deeper into my academic and research interests.
        </p>

        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/3 p-4 bg-gray-50 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Explore Topics</h3>
            <ul className="space-y-3">
              {interestsData.map(interest => (
                <li key={interest.id}>
                  <button
                    onClick={() => setSelectedInterest(interest)}
                    className={`block w-full text-left p-3 rounded-md transition duration-300 ${
                      selectedInterest.id === interest.id
                        ? 'bg-blue-700 text-white shadow-lg'
                        : 'bg-white text-gray-700 hover:bg-blue-100 hover:text-blue-800'
                    }`}
                  >
                    <span className="font-medium">{interest.title}</span>
                    <p className="text-sm mt-1 opacity-90">{interest.summary.substring(0, 70)}...</p>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:w-2/3 p-6 bg-white rounded-lg shadow-md border border-gray-200">
            {selectedInterest ? (
              <>
                <h3 className="text-2xl font-bold text-blue-700 mb-4">{selectedInterest.title}</h3>
                <div
                  className="prose lg:prose-lg text-gray-700 leading-relaxed text-base"
                  dangerouslySetInnerHTML={{ __html: selectedInterest.content }}
                />

                {selectedInterest.media && selectedInterest.media.length > 0 && (
                  <div className="mt-8 space-y-6">
                    {selectedInterest.media.map((mediaItem, index) => (
                      mediaItem.type === 'image' && (
                        <div key={index} className="flex flex-col items-center">
                          <img
                            src={mediaItem.src}
                            alt={mediaItem.alt}
                            className="max-w-full h-auto rounded-lg shadow-md border border-gray-200"
                            style={{ maxWidth: '80%' }}
                          />
                          {mediaItem.caption && (
                            <p className="text-center text-sm text-gray-600 mt-2 italic">
                              {mediaItem.caption}
                            </p>
                          )}
                        </div>
                      )
                    ))}
                  </div>
                )}
              </>
            ) : (
              <p className="text-gray-600">Select an interest from the left to view details.</p>
            )}
          </div>
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