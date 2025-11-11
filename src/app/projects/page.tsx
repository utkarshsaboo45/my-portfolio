"use client";
import Header from "../../components/Header";

export default function ProjectsPage() {
  const projects = [
    {
      title: "Trade Anomaly Detection",
      description:
        "Built an OpenSearch-based anomaly detection system for trade logs, adjusting for weekday and time-of-day patterns.",
      tech: ["Python", "OpenSearch", "FastAPI", "Kafka"],
      link: "#",
    },
    {
      title: "RAG Chatbot for P&L Insights",
      description:
        "Developed an in-house LLM chatbot using LangChain to explain daily P&L movements using contextual data.",
      tech: ["LangChain", "FastAPI", "OpenAI", "ETL"],
      link: "#",
    },
    {
      title: "Async Logging System",
      description:
        "Created a high-throughput async logging framework with QueueHandler + QueueListener for Dockerized APIs.",
      tech: ["Python", "Logging", "Docker", "Uvicorn"],
      link: "#",
    },
  ];

  return (
    <main className="min-h-screen bg-white text-gray-800 dark:bg-gray-900 dark:text-gray-100">
      <Header />

      <div className="px-6 py-28 max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-12 text-center">Projects</h1>
        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((proj) => (
            <div
              key={proj.title}
              className="p-6 border rounded-2xl hover:shadow-lg transition bg-white dark:bg-gray-800"
            >
              <h2 className="text-2xl font-semibold mb-2">{proj.title}</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-3">
                {proj.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {proj.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2 py-1 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <a
                href={proj.link}
                className="text-blue-600 dark:text-blue-400 text-sm font-medium hover:underline"
              >
                View Details →
              </a>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
