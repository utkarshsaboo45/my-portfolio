import Header from "../components/Header";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center px-6 py-12 space-y-20 font-sans bg-white text-gray-800 dark:bg-gray-900 dark:text-gray-100">
      <Header />
      {/* ===== HERO / ABOUT ===== */}
      <section id="about" className="
            group
            max-w-5xl scroll-mt-24 mx-auto
            border rounded-2xl p-6
            bg-white dark:bg-gray-800
            transition-all duration-300
            hover:shadow-xl
            hover:-translate-y-2
            hover:border-blue-500
            hover:bg-gradient-to-br
            hover:from-blue-50 hover:to-white
            dark:hover:from-gray-800 dark:hover:to-gray-900
            "
          >
        <h1 className="
            text-4xl font-bold mb-4 text-center
            group-hover:text-gray-650 dark:group-hover:text-white
            ">
              Utkarsh Saboo 👋
        </h1>
        <p className="
            text-gray-600 dark:text-gray-300 mb-6 text-justify leading-relaxed
            group-hover:text-gray-900 dark:group-hover:text-gray-200
            "
        >
          I’m someone who genuinely loves figuring out how things work — especially when it comes to intelligence, language, and the hidden patterns inside data. Over the past few years, I’ve gone from being curious about AI to actually building systems that solve real problems and make life easier for the people who use them. I enjoy roles where I can take ownership, move fast, and turn complex ideas into something simple and useful.
        </p>
        <p className="
            text-gray-600 dark:text-gray-300 mb-6 text-justify leading-relaxed
            group-hover:text-gray-900 dark:group-hover:text-gray-200
            "
        >
          I thrive in environments where learning never stops, where I’m pushed to think creatively, and where I get to collaborate with people who care about what they’re building. Outside of work, I’m learning Japanese and French, exploring new cultures, and connecting with all kinds of communities — anything that keeps me curious and growing.
        </p>
        <p className="
            text-gray-600 dark:text-gray-300 mb-6 text-justify leading-relaxed
            group-hover:text-gray-900 dark:group-hover:text-gray-200
            "
        >
          If you’re working on something exciting or just want to chat, I’d love to connect.
        </p>
        {/* <div className="space-x-4">
          <a href="#contact" className="text-blue-600 hover:underline">Contact</a>
          <a href="#projects" className="text-blue-600 hover:underline">Projects</a>
          <a href="#publications" className="text-blue-600 hover:underline">Publications</a>
        </div> */}
        <div className="flex justify-center gap-4">
          <a
            href="#contact"
            className="
              px-5 py-2 rounded-md border
              hover:bg-blue-400
              transition
              text-sm font-medium
            "
          >
            Contact
          </a>

          <a
            href="/projects"
            className="
              px-5 py-2 rounded-md border
              hover:bg-blue-400
              transition
              text-sm font-medium
            "
          >
            Projects
          </a>

          <a
            href="#publications"
            className="
              px-5 py-2 rounded-md border
              hover:bg-blue-400
              transition
              text-sm font-medium
            "
          >
            Publications
          </a>
        </div>
      </section>


            {/* ===== SKILLS ===== */}
      <section id="skills" className="w-full max-w-4xl mx-auto text-center scroll-mt-24">
        <h2 className="text-3xl font-semibold mb-10">Skills</h2>

        {/* LANGUAGES & TOOLS */}
        <div className="mb-10">
          <h3 className="text-xl font-semibold mb-4">Languages & Tools</h3>
          <div className="flex flex-wrap justify-center gap-3 text-sm">
            {[
              "Python", "R", "Java", "Git", "GitHub", "Docker", "SQL",
              "Kanban", "PySpark", "OpenSearch", "Redis"
            ].map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 border rounded-full
                bg-gray-100 dark:bg-gray-800 
                text-gray-700 dark:text-gray-300
                transition-all duration-200
                hover:bg-blue-100 dark:hover:bg-blue-900
                hover:text-blue-700 dark:hover:text-blue-300
                hover:shadow-md
                hover:-translate-y-1"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* TECHNICAL SKILLS */}
        <div className="mb-10">
          <h3 className="text-xl font-semibold mb-4">Technical Skills</h3>
          <div className="flex flex-wrap justify-center gap-3 text-sm">
            {[
              "AI", "Deep Learning", "Machine Learning", "NLP", "LLM",
              "ETL Pipelines", "CI/CD Pipelines", "Supervised Learning",
              "Unsupervised Learning", "Reinforcement Learning", "GenAI",
              "Transfer Learning", "GNN", "LSTM", "Vector Databases",
              "EDA", "Orchestration"
            ].map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 border rounded-full
                bg-gray-100 dark:bg-gray-800 
                text-gray-700 dark:text-gray-300
                transition-all duration-200
                hover:bg-blue-100 dark:hover:bg-blue-900
                hover:text-blue-700 dark:hover:text-blue-300
                hover:shadow-md
                hover:-translate-y-1"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* FRAMEWORKS & LIBRARIES */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Frameworks & Libraries</h3>
          <div className="flex flex-wrap justify-center gap-3 text-sm">
            {[
              "Neural Networks", "Huggingface Transformers", "LangChain",
              "LangGraph", "smolagents", "LlamaIndex", "Agents", "OpenAI API",
              "GPT", "Llama", "AWS", "PyTorch", "TensorFlow", "Keras",
              "scikit-learn", "NumPy", "Pandas", "Kafka", "FastAPI"
            ].map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 border rounded-full
                bg-gray-100 dark:bg-gray-800 
                text-gray-700 dark:text-gray-300
                transition-all duration-200
                hover:bg-blue-100 dark:hover:bg-blue-900
                hover:text-blue-700 dark:hover:text-blue-300
                hover:shadow-md
                hover:-translate-y-1"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ===== EXPERIENCE ===== */}
      <section id="experience" className="w-full max-w-4xl scroll-mt-24">
        <h2 className="text-3xl font-semibold mb-8 text-center">Experience</h2>
        <div className="space-y-6">
          <div
            className="
            border rounded-2xl p-6
            bg-white dark:bg-gray-800
            shadow-sm transition-all duration-300

            hover:shadow-xl
            hover:-translate-y-2
            hover:border-blue-500
            hover:bg-gradient-to-br
            hover:from-blue-50 hover:to-white
            dark:hover:from-gray-800 dark:hover:to-gray-900
            "
          >
            <h3 className="text-xl font-medium">Machine Learning Engineer – SS&C Technologies</h3>
            <p className="text-sm text-gray-500">Aug 2022 – Present · Vancouver, Canada</p>
            <ul className="list-disc list-inside mt-2 text-gray-700">
              <li>Identified and rectified anomalies in fund P&L using advanced data analysis techniques to ensure accuracy and reliability in financial reporting.</li>
              <li>Designed and implemented RAG (Retrieval-Augmented Generation) pipelines using the OpenAI API and LLMs like GPT, LLaMA, Falcon, and Vicuna to provide contextual explanations of price movements, boosting the team’s analytical depth and aiding business teams in evaluating fund performance.</li>
              <li>Orchestrated dockerized ML and ETL pipelinestriggered via Kafka streams and FastAPI endpoints to fetch raw data, preprocess it, engineer features, and apply anomaly detection models.</li>
              <li>Utilized OpenSearch, ArgoCD, Rancher, and Grafana to deploy, monitor, and manage containerized applications in production, ensuring high availability and observability.</li>
              <li>Refined the trade verification process by implementing automation and using GitHub for version control and collaborative development, maintaining clean, auditable CI/CD workflows that reduced operational risk and enhanced organizational resilience.</li>
            </ul>
          </div>

          <div
            className="
            border rounded-2xl p-6
            bg-white dark:bg-gray-800
            shadow-sm transition-all duration-300

            hover:shadow-xl
            hover:-translate-y-2
            hover:border-blue-500
            hover:bg-gradient-to-br
            hover:from-blue-50 hover:to-white
            dark:hover:from-gray-800 dark:hover:to-gray-900
            "
          >
            <h3 className="text-xl font-medium">NLP Engineer - SAP</h3>
            <p className="text-sm text-gray-500">May 2022 - Jun 2022</p>
            <ul className="list-disc list-inside mt-2 text-gray-700">
              <li>Built a Text Summarizer to summarize Licenses from <a href="https://clearlydefined.io/about" className="text-blue-600 hover:underline">ClearlyDefined</a>—an Open Source Initiative, using custom TextRank and T5.</li>
              <li>Used Multi-task BERT model and Doc2Vec to classify term labels; deployed model on <a href="https://huggingface.co/spaces/nihaldsouza1/clearlydefined_license_summarizer" className="text-blue-600 hover:underline">HuggingFace Spaces.</a></li>
            </ul>
          </div>

          <div
            className="
            border rounded-2xl p-6
            bg-white dark:bg-gray-800
            shadow-sm transition-all duration-300

            hover:shadow-xl
            hover:-translate-y-2
            hover:border-blue-500
            hover:bg-gradient-to-br
            hover:from-blue-50 hover:to-white
            dark:hover:from-gray-800 dark:hover:to-gray-900
            "
          >
            <h3 className="text-xl font-medium">Machine Learning Engineer - FindMind Analytics</h3>
            <p className="text-sm text-gray-500">Dec 2019 - Jul 2020</p>
            <ul className="list-disc list-inside mt-2 text-gray-700">
              <li>Led a team of junior interns; worked on LegalMind, a research and collaboration platform to analyse legal terms of a judgment and summarize it, thus helping Lawyers save time; monitored end-to-end project.</li>
              <li>Built scrapers and pre-processed text. Trained Named Entity Recognition (NER) modelsto extract entities.</li>
            </ul>
          </div>

        </div>
      </section>

      {/* ===== EDUCATION ===== */}
      <section id="education" className="w-full max-w-4xl scroll-mt-24">
        <h2 className="text-3xl font-semibold mb-8 text-center">Education</h2>
        <div className="space-y-4">
          <div
            className="
            border rounded-2xl p-6
            bg-white dark:bg-gray-800
            shadow-sm transition-all duration-300

            hover:shadow-xl
            hover:-translate-y-2
            hover:border-blue-500
            hover:bg-gradient-to-br
            hover:from-blue-50 hover:to-white
            dark:hover:from-gray-800 dark:hover:to-gray-900
            "
          >
            <h3 className="text-xl font-medium">Master of Data Science – Computational Linguistics</h3>
            <p className="text-sm text-gray-500"><i>Accelerated Cohort</i></p>
            <p className="text-sm text-gray-500">GPA: 4.0 / 4.0</p>
            <p className="text-sm text-gray-500">University of British Columbia · 2021 – 2022</p>
          </div>
          <div
            className="
            border rounded-2xl p-6
            bg-white dark:bg-gray-800
            shadow-sm transition-all duration-300

            hover:shadow-xl
            hover:-translate-y-2
            hover:border-blue-500
            hover:bg-gradient-to-br
            hover:from-blue-50 hover:to-white
            dark:hover:from-gray-800 dark:hover:to-gray-900
            "
          >
            <h3 className="text-xl font-medium">Bachelor of Engineering in Computer Science</h3>
            <p className="text-sm text-gray-500"><i>Top 5% of the Engineering class</i></p>
            <p className="text-sm text-gray-500">CGPA: 9.31</p>
            <p className="text-sm text-gray-500">Vellore Institute of Technology · 2016 – 2020</p>
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

      {/* ===== PUBLICATIONS ===== */}
      <section id="publications" className="w-full max-w-4xl scroll-mt-24">
        <h2 className="text-3xl font-semibold mb-8 text-center">Publications</h2>
        <ul className="space-y-4">
          <li
            className="
            border rounded-2xl p-6
            bg-white dark:bg-gray-800
            shadow-sm transition-all duration-300

            hover:shadow-xl
            hover:-translate-y-2
            hover:border-blue-500
            hover:bg-gradient-to-br
            hover:from-blue-50 hover:to-white
            dark:hover:from-gray-800 dark:hover:to-gray-900
            "
          >
            <p className="font-medium">
              <a href="https://aclanthology.org/2022.mrl-1.11/" className="text-blue-600 hover:underline">“Impact of Sequence Length and Copying on Clause-Level Inflection</a>” — <span className="text-gray-500">Multi-lingual Representation Learning (MRL), 2022</span>
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
