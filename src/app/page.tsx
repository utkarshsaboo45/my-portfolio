import Header from "../components/Header";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center px-6 py-12 space-y-20 font-sans bg-white text-gray-800 dark:bg-gray-900 dark:text-gray-100">
      <Header />
      {/* ===== HERO / ABOUT ===== */}
      <section id="about" className="text-center max-w-3xl scroll-mt-24">
        <h1 className="text-5xl font-bold mb-4">Utkarsh Saboo 👋</h1>
        <p className="text-gray-600 mb-6">
          Machine Learning Engineer passionate about building scalable AI systems that bridge finance, data, and insight.
        </p>
        <div className="space-x-4">
          <a href="#contact" className="text-blue-600 hover:underline">Contact</a>
          <a href="#projects" className="text-blue-600 hover:underline">Projects</a>
          <a href="#publications" className="text-blue-600 hover:underline">Publications</a>
        </div>
      </section>

      {/* ===== EXPERIENCE ===== */}
      <section id="experience" className="w-full max-w-4xl scroll-mt-24">
        <h2 className="text-3xl font-semibold mb-8 text-center">Experience</h2>
        <div className="space-y-6">
          <div className="border rounded-2xl p-6 shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-medium">Machine Learning Engineer – SS&C Technologies</h3>
            <p className="text-sm text-gray-500">2020 – Present · Vancouver, Canada</p>
            <ul className="list-disc list-inside mt-2 text-gray-700">
              <li>Designed and deployed ML pipelines for anomaly detection in trade data using OpenSearch.</li>
              <li>Developed RAG-based LLM chatbot to explain P&L anomalies using contextual data.</li>
              <li>Built FastAPI + Kafka ETL systems for real-time portfolio analytics.</li>
            </ul>
          </div>

          <div className="border rounded-2xl p-6 shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-medium">Data Science Intern – XYZ Finance</h3>
            <p className="text-sm text-gray-500">2019 – 2020</p>
            <ul className="list-disc list-inside mt-2 text-gray-700">
              <li>Created feature engineering pipelines improving model accuracy by 15%.</li>
              <li>Automated P&L reconciliation workflows using Python and SQL.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ===== EDUCATION ===== */}
      <section id="education" className="w-full max-w-4xl scroll-mt-24">
        <h2 className="text-3xl font-semibold mb-8 text-center">Education</h2>
        <div className="space-y-4">
          <div className="border rounded-2xl p-6 shadow-sm">
            <h3 className="text-xl font-medium">Master’s in Data Science (Computational Linguistics)</h3>
            <p className="text-sm text-gray-500">University of British Columbia · 2018 – 2020</p>
          </div>
          <div className="border rounded-2xl p-6 shadow-sm">
            <h3 className="text-xl font-medium">Bachelor of Engineering in Computer Science</h3>
            <p className="text-sm text-gray-500">Mumbai University · 2014 – 2018</p>
          </div>
        </div>
      </section>

      {/* ===== PROJECTS ===== */}
      {/*
      <section id="projects" className="w-full max-w-4xl scroll-mt-24">
        <h2 className="text-3xl font-semibold mb-8 text-center">Projects</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {[
            {
              title: "Trade Anomaly Detection",
              desc: "Built OpenSearch-based anomaly detection for financial trades, adjusting for weekday and time-of-day patterns.",
            },
            {
              title: "RAG Chatbot for P&L Insights",
              desc: "Deployed an in-house LLM chatbot that explains daily P&L movements using structured ETL data.",
            },
            {
              title: "Async Logging System",
              desc: "Developed a high-throughput async logging system using QueueHandler + QueueListener for Dockerized APIs.",
            },
            {
              title: "Portfolio Dashboard",
              desc: "Created a Grafana-based visualization pipeline for trade metrics and anomaly trends.",
            },
          ].map((proj) => (
            <div key={proj.title} className="p-6 border rounded-2xl hover:shadow-md transition">
              <h3 className="text-xl font-medium mb-2">{proj.title}</h3>
              <p className="text-gray-600 text-sm">{proj.desc}</p>
            </div>
          ))}
        </div>
      </section>
      */}

      {/* ===== SKILLS ===== */}
      <section id="skills" className="w-full max-w-3xl text-center scroll-mt-24">
        <h2 className="text-3xl font-semibold mb-6">Skills</h2>
        <div className="flex flex-wrap justify-center gap-3 text-sm">
          {[
            "Python", "FastAPI", "Kafka", "Docker", "Kubernetes", "Pandas", 
            "OpenSearch", "LangChain", "LlamaIndex", "SQL", 
            "Machine Learning", "Anomaly Detection", "LLM Integration", 
            "Data Engineering", "ETL Pipelines", "TailwindCSS", "Next.js"
          ].map((skill) => (
            <span key={skill} className="px-3 py-1 bg-gray-100 rounded-full border text-gray-700">
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* ===== PUBLICATIONS ===== */}
      <section id="publications" className="w-full max-w-4xl scroll-mt-24">
        <h2 className="text-3xl font-semibold mb-8 text-center">Publications</h2>
        <ul className="space-y-4">
          <li className="border rounded-2xl p-6 shadow-sm">
            <p className="font-medium">
              “Automating P&L Anomaly Explanations using LLMs and Contextual Retrieval” — <span className="text-gray-500">TradeML Journal, 2024</span>
            </p>
          </li>
          <li className="border rounded-2xl p-6 shadow-sm">
            <p className="font-medium">
              “High-throughput Async Logging with QueueListener in Microservices” — <span className="text-gray-500">PyData Conference, 2023</span>
            </p>
          </li>
        </ul>
      </section>

      {/* ===== CONTACT ===== */}
      <section id="contact" className="text-center w-full max-w-2xl pb-10 scroll-mt-24">
        <h2 className="text-3xl font-semibold mb-4">Get in Touch</h2>
        <p className="text-gray-600 mb-6">
          Always open to collaborations, conversations, or opportunities in ML and Data Engineering.
        </p>
        <a
          href="mailto:utkarsh@example.com"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Say Hello
        </a>
      </section>
    </main>
  );
}
