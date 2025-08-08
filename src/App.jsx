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
  const [currentPage, setCurrentPage] = React.useState(() => {
    const savedPage = localStorage.getItem('currentPage');
    return savedPage ? savedPage : 'home';
  });
  React.useEffect(() => {
    localStorage.setItem('currentPage', currentPage);
  }, [currentPage]);
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

const Header = ({ onNavigate, currentPage }) => {
  const handleInternalScroll = (pageId, sectionId) => {
    onNavigate(pageId);
    setTimeout(() => {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const handleConnectClick = () => {
    const footer = document.getElementById('footer');
    if (footer) {
      footer.scrollIntoView({ behavior: 'smooth' });
    }
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
          <a href="#footer" onClick={handleConnectClick} className="text-gray-600 hover:text-blue-700 font-medium transition duration-300">Connect</a>
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
      </div>
    </section>
  );
};

const Interests = () => {
  const interestsData = [
    {
      id: 'ergativity',
      title: 'Investigating Ergativity in Eastern Indo-Aryan',
      summary: 'My current research investigates ergativity-like phenomena in Eastern Bengali dialects and other Eastern Indo-Aryan languages, a topic that challenges traditional linguistic classifications.',
      content: `
        <p class="mb-4">My current research focuses on ergativity-like phenomena within the Eastern Indo-Aryan language subbranch, particularly in Vanga (Eastern Bengali) dialects. While Eastern Indo-Aryan languages are traditionally considered non-ergative, my work and existing scholarship on Assamese suggest that the topic may be more complex than is historically documented. I am actively investigating how the distribution of certain morphological markers in these languages may warrant a re-evaluation of this sweeping assumption.</p>
        <p class="mb-4">My current methodology heavily involves fieldwork, but I am open to extending it to corpus-based analysis in the future as well. By collecting data from speakers of various Eastern Bengali dialects (and potentially related languages like Chakma and Bishnupriya Manipuri), I aim to closely examine case marking, verb agreement, and other grammatical features that might exhibit properties similar to ergativity, where the subject of a transitive verb is marked differently from the subject of an intransitive verb.</p>
        <p class="mb-0">My findings could challenge existing typological classifications and shed light on the historical development of these languages, particularly Bengali and Assamese. More coming soon on this topic!</p>
      `,
      media: [
        {
          type: 'image',
          src: 'https://upload.wikimedia.org/wikipedia/commons/d/da/Bengali-Assamese_subbranches.png',
          alt: 'A diagram showing the subbranches of the Bengali-Assamese language family (Credit: Wikimedia Commons)',
          caption: 'A visual representation of the subbranches within the Bengali-Assamese language family.'
        }
      ]
    },
    {
      id: 'neurolinguistics',
      title: 'Neurolinguistic Processing of Urdu Scripts',
      summary: 'A look into my previous neurolinguistics research on how the human brain processes different calligraphic styles of the Urdu script.',
      content: `
        <p class="mb-4">My previous neurolinguistics research with the FALCoN lab at the University of Georgia, under the guidance of PI Professor Dustin A. Chacón (now at the University of California, Santa Cruz), investigated how the brain processes different writing styles in Urdu. We examined the neural responses of Urdu readers to two distinct script variants: Naskh and Nastaʿlīq.</p>
        <p class="mb-4">Naskh and Nastaʿlīq are calligraphic styles of the Arabic script. Nastaʿlīq is a highly cursive, diagonal style with overlapping characters that complicates text recognition, while Naskh is more structured and block-like. Urdu readers have historically preferred the Nastaʿlīq style, and its complex nature presents challenges for digital text recognition, a problem that has led to a preference for the simpler Naskh style in many digital contexts, not without backlash from the Urdu speech community.</p>
        <p class="mb-4">Our study focused on the M/N170, a visual word-specific brain response that typically localizes to the left fusiform gyrus (also known as the "visual word-form area"), designing an experiment based on that of Tarkiainen et al. (1999). The N170 is an electrophysiological signal that appears approximately 170ms after a word is presented, and it indicates that the brain is distinguishing between words and non-linguistic visual stimuli. Our main hypothesis was that the brain of an Urdu reader would process these two script styles differently. We predicted that due to its holistic nature, Nastaʿlīq would elicit brain responses in the right fusiform gyrus, similar to what is seen in readers of logographic languages like Mandarin Chinese, while Naskh would be processed in the left fusiform gyrus, similar to readers of alphabetic languages like English.</p>
        <p class="mb-0">Our findings, however, did not fully align with our initial hypothesis. While all languages in our study (Urdu, English, and Mandarin Chinese) distinguished between words and symbols, the Urdu scripts showed a different pattern. Specifically, both Naskh and Nastaʿlīq showed word-specific effects in the left fusiform gyrus, similar to English. However, Naskh showed a greater neural signal in the right anterior temporal lobe, while Nastaʿlīq elicited a greater response in Wernicke's Area and the left posterior temporal lobe. These results suggest that the neural basis of word recognition is not a simple left- or right-hemisphere dichotomy based on script type, but rather a more complex interaction between the psychophysical properties of the writing system and the language network.</p>
      `,
      media: [
        {
          type: 'image',
          src: 'https://upload.wikimedia.org/wikipedia/commons/9/9f/Naskh-nasta%27liq-comparison.png',
          alt: 'A comparison of Naskh and Nastaʿlīq scripts, showing the different styles.',
          caption: 'Comparison of the Naskh and Nastaʿlīq scripts (Credit: Wikimedia Commons)'
        }
      ]
    },
    {
      id: 'sociolinguistics',
      title: 'Sociolinguistics of Urban Bengali',
      summary: 'My interests include the sociolinguistics of urban Bengali, with a focus on the dynamic interaction between different varieties within urban spaces.',
      content: `
        <p class="mb-4">My research interests also include the sociolinguistics of urban Bengali, particularly the dynamic interaction between Standard Colloquial Bengali (chalitabhasha), regional dialects, and mixed urban varieties. I am especially interested in the urban "koine" variety that has emerged in Dhaka, but my work could extend to other major cities like Chittagong. I draw inspiration from scholars like Singh (1986), who accurately predicted a shift in the Bengali diglossic situation, where the literary sadhubhasha variety would decline, and a new, distinct Bangladeshi colloquial variety would emerge from a mix of chalitabhasha and local dialects.</p>
        <p class="mb-4">In my work, I aim to build upon earlier documentation, such as Rafiqul Islam's "Introduction to an East Pakistani Dialect," by conducting in-depth analyses of the modern urban variety. I would focus not on geographic variation across Bengal, but on the high and low varieties within a single urban space and even within the speech of individual speakers. I have already explored this through a project in a graduate sociolinguistics course, where I performed a variationist analysis on a self-proclaimed "standard speaker." I found that they used the Eastern Bengali dialectal pronunciation of /s/ instead of the standard /tɕʰ/ specifically in verbal endings of high-frequency verbs, revealing a subtle but systematic pattern of dialectal features within an otherwise standard-speaking individual.</p>
        <p class="mb-0">This research aims to further explore the unique patterns of this intralingual contact variety. By investigating the subtle ways in which speakers navigate and blend different registers, from the prestige Standard Colloquial Bengali to local and regional dialects, my work would shed light on the sociolinguistic forces at play in a modern, rapidly changing urban environment. This approach provides a nuanced understanding of how language change and identity are negotiated at the level of the individual speaker, offering a fresh perspective on the evolution of urban vernaculars.</p>
      `,
      media: [
        {
          type: 'image',
          src: 'https://upload.wikimedia.org/wikipedia/commons/3/31/Dhaka_Skyline.jpg',
          alt: 'The skyline of Dhaka, Bangladesh.',
          caption: 'The modern skyline of Dhaka, a key urban center for Bengali sociolinguistics (Credit: Wikimedia Commons)'
        }
      ]
    },
    {
      id: 'tonogenesis',
      title: 'Tonogenesis and Aspiration in Eastern Bengali',
      summary: 'My research interests include the phonological process of tonogenesis in Eastern Bengali varieties and its relationship with the historical loss of aspiration.',
      content: `
        <p class="mb-4">I am deeply fascinated by claims of tonogenesis, or the development of lexical tone, in Eastern Bengali varieties. Recent work on Sylheti has documented the emergence of tone from the historical loss of aspiration. However, claims of this process occurring in a wider range of Eastern Bengali dialects, including those from the historical Dhaka district, date back to the mid-20th century. I aim to revisit these earlier claims using modern acoustic methods to show whether the phonological changes documented in Sylheti are part of a broader areal feature of Eastern Bengal.</p>
        <p class="mb-4">A significant gap in the existing literature is its focus on speakers from India, overlooking the linguistic landscape of Bangladesh, which I seek to remedy. This approach will not only provide a more comprehensive dataset but also allow for a direct comparison against previous findings. I am mindful of (and perhaps even a little worried about) the potential for dialect leveling to have occurred over the past century, but even observing such changes would itself give us insights into the dynamics of Bengali varieties spoken in Bangladesh.</p>
        <p class="mb-0">Expanding the scope of inquiry beyond a single dialect could challenge the notion that tonogenesis is an isolated feature of Sylheti and that similar phonological developments may have occurred across a wider dialect continuum. If findings turn out to reflect what has been documented historically, they would both be of typological significance and recontextualize the relationship between varieties of Bengali.</p>
      `,
      media: [
        {
          type: 'image',
          src: 'https://upload.wikimedia.org/wikipedia/commons/8/80/Praat_spectogram_standard_settings.jpg',
          alt: 'A spectrogram of speech, visualizing sound frequencies over time.',
          caption: 'Example of a spectrogram used in acoustic analysis (Credit: Wikimedia Commons)'
        }
      ]
    },
    {
      id: 'bengali-scripts',
      title: 'Exploring Historical Bengali Scripts & Oral Traditions',
      summary: 'A look into my general interests in documenting historical alternative orthographies and oral traditions of Eastern Bengali, and their potential for computational linguistic analysis.',
      content: `
        <p class="mb-4">My linguistic interests extend to the rich, often-overlooked, literary traditions of Eastern Bengali. I am fascinated by historical alternative orthographies like Sylhet Nagari and Arabic-script Bengali (as well as oral traditions like those found in the Mymensingh Gitika and Purbabanga Gitika compilations). The more phonetic nature of the orthographies, in particular, can reveal historical sound changes that are not always captured in the Bengali script. Analyzing these traditions can provide a timeline for processes like deaspiration (which may have led to tonogenesis), spirantization, and other phonological and non-phonological shifts.</p>
        <p class="mb-4">I would be interested in using computational methods to analyze these historical documents. For the written texts, my goal is to use Optical Character Recognition (OCR) to build a digital corpus of rare documents written in Sylhet Nagari and Arabic-script Bengali. This dataset would then be used for analysis, including stylometry to measure the textual similarities of these works to other Middle Bengali literature. Though I personally can already read these scripts, such research could make these forgotten regional texts accessible to an entire new generation and challenge the common misconception that Sylhet Nagari texts contain something alien and unintelligible.</p>
        <p class="mb-0">Beyond linguistic analysis, I am also interested in the broader historical context these traditions provide. These alternative scripts and folk ballads are central to understanding the spread of Islam and contextualizing the development of a distinct Bengali Muslim identity. By studying these sources, I aim to shed light on a crucial and often misrepresented aspect of the literary history of Bengali.</p>
      `,
      media: [
        {
          type: 'image',
          src: 'https://upload.wikimedia.org/wikipedia/commons/d/d0/Halot-un-nabi-page1.gif',
          alt: 'An example of the Sylhet Nagari script.',
          caption: 'Example of the Sylhet Nagari script (Credit: Wikimedia Commons)'
        },
        {
          type: 'image',
          src: 'https://via.placeholder.com/600x400/C0C0C0/000000?text=Historical+Arabic-script+Bengali+Text',
          alt: 'An example of Arabic-script Bengali from a historical manuscript.',
          caption: 'A historical Bengali text written in the Arabic script (Credit: Bangla Academy)'
        }
      ]
    },
    {
      id: 'contact-linguistics',
      title: 'Interlingual Language Contact in Bengal',
      summary: 'Exploring the rich landscape of language contact in Bengal, with a focus on varieties influenced by Hindi-Urdu and the documentation of understudied linguistic communities.',
      content: `
        <p class="mb-4">My research interests also include the fascinating and complex landscape of language contact in Bengal, particularly focusing on varieties spoken in Dhaka that have been influenced by Hindi-Urdu. This includes Dhakaiya Urdu, Puran Dhakaiya (or Old Dhakaiya Bengali), and the Hindi and Urdu varieties spoken by specific marginalized communities, such as the stranded Pakistanis (Biharis) and Hindu sweepers. I also want to investigate the contact phenomena that have occurred between Bengali and (now-)Indo-Aryan-speaking tribal communities in Bangladesh, like the Chakma, Bishnupriya Manipuri, and Hajong. I am also interested in documenting the Rohingya, which I have vaguely heard exhibits some Chakma-like features, though otherwise close to Chittagonian Bengali. The goal is to document these understudied linguistic varieties before they potentially undergo further leveling or extinction.</p>
        <p class="mb-4">I am interested in drawing parallels between these Dhaka-based varieties and other contact languages in the region. I would look at Kolkata Hindi, which, despite potential leveling, may provide insights into similar contact phenomena. I would also examine Surjapuri and the dialect of the Shershabadia community in northeastern Bihar and northern West Bengal, which may have undergone significant mixing with Urdu post-partition. Furthermore, I would be interested in the Bengali-influenced Urdu spoken in Karachi, as this would provide another data point for comparative analysis.</p>
        <p class="mb-0">A key aspect of this research is a typological comparison between Urdu-influenced Bengali and Bengali-influenced Urdu. I would investigate if contact with Bengali has led to significant typological shifts in the phonology, morphology, and syntax of the Urdu or Hindi spoken in Dhaka and Kolkata. Beyond the purely linguistic aspects, this work is deeply rooted in the social dimensions of language. I believe it is crucial to explore the experiences of these marginalized communities. By documenting their language, I aim to honor their stories and shed light on a vital part of Bengal's linguistic and cultural history.</p>
      `,
      media: [
        {
          type: 'image',
          src: 'https://upload.wikimedia.org/wikipedia/commons/1/1f/Tara_Masjid_Old_Dhaka_Bangladesh_-_panoramio.jpg',
          alt: 'Tara Masjid in Old Dhaka, an architectural landmark of the city.',
          caption: 'Tara Masjid in Old Dhaka, a historic area with rich linguistic contact (Credit: Wikimedia Commons)'
        }
      ]
    },
    {
      id: 'dialects',
      title: 'Documenting and Compiling Bengali Dialects',
      summary: 'A broad interest in the documentation and compilation of understudied Bengali dialects, continuing the work of foundational linguistic figures with modern methods.',
      content: `
        <p class="mb-4">My general research interests include the documentation of Bengali dialects, with a particular focus on the understudied Eastern (Vanga) and Northern (Varendra & Kamarupa) varieties spoken in Bangladesh. This work is important not only for language preservation but also for comparative Eastern Bengali dialectology, as documented language varieties are a valuable resource for tracking words and sound changes across a greater area. In my first year of undergraduate studies, I took the graduate-level course "Introduction to South Asian Linguistics," where my foundational contribution to this interest was the compilation of a mini-grammar of Eastern Bengali dialects as a literature review, which also included a preliminary investigation for my ergativity research.</p>
        <p class="mb-4">I see this endeavor as a 21st-century revival of the documentation efforts of foundational figures like Grierson, Shahidullah, and Abdul Hai. My methodology will involve extensive fieldwork to create a modern and comprehensive record of these nonstandard dialects as well as the digitization of older resources, valuable yet inaccessible, like the Bangla Academy Lexicon of East Pakistani [Bangladeshi] Dialects by Shahidullah. This approach is not limited to Bengali, as I am interested in applying this same methodology to other large nonstandard dialect clusters of interest across South Asia, such as Deccani Urdu.</p>
        <p class="mb-0">This type of large-scale documentation and preservation effort is foundational to all my other research, providing the necessary data to investigate specific phenomena like tonogenesis and language contact in a comprehensive way.</p>
      `,
      media: [
        {
          type: 'image',
          src: 'https://upload.wikimedia.org/wikipedia/commons/9/99/Gopalhaldareastbengalidialects.png',
          alt: 'A map of Bengali dialect boundaries in the Bengal region.',
          caption: 'A map showing the boundaries of Eastern Bengali dialects'
        }
      ]
    }
  ];

  const [selectedInterest, setSelectedInterest] = React.useState(interestsData[0]);
  return (
    <section id="interests" className="py-16 md:py-24 pt-24 w-full bg-white">
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
                    {/* <span className="font-medium">{interest.title}</span> */}
                    {/* <p className="text-sm mt-1 opacity-90">{interest.summary}</p> */}
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