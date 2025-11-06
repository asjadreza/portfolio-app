import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";

const Services = () => {
  return (
    <section id="services">
      <h5>What I know</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Generative AI</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Built custom AI agents using LangChain, LangGraph, and LangSmith
                for task automation.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Automated workflows with third-party API integrations like
                Slack, Notion, and HubSpot.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Developed conversational AI dashboards using Next.js, Redux, and
                Python backends.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Created RAG-based data agents with vector search using Pinecone
                and FAISS.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Deployed AI-powered SaaS prototypes combining Next.js frontend
                and LangChain backend.
              </p>
            </li>
          </ul>
        </article>

        {/* End of UI/UX Design */}

        <article className="service">
          <div className="service__head">
            <h3>Frontend Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Build responsive, high-performance web apps using Next.js,
                React.js, and Redux.
              </p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Design dynamic UIs with smooth interactions and optimized user
                experiences.
              </p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Upgrade and migrate existing applications, improving
                performance, maintainability, and UI consistency.
              </p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Integrate REST APIs and manage state efficiently using Redux and
                TypeScript.
              </p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Develop SEO-friendly, cross-browser compatible, and fully
                responsive front-end solutions.
              </p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Implement custom components and animations to enhance engagement
                and user retention.
              </p>
            </li>
          </ul>
        </article>

        {/* End Web Development */}

        <article className="service">
          <div className="service__head">
            <h3>Backend Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Develop and deploy scalable RESTful APIs using Node.js, Express,
                PostgreSQL and Prisma.
              </p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Implement secure user authentication and authorization with JWT,
                bcrypt and protected routes.
              </p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Build file upload and storage solutions using Multer, Cloudinary
                and efficient file handling.
              </p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Design and manage relational database schemas and migrations
                with PostgreSQL and Prisma ORM.
              </p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Create full backend systems for media management: upload,
                browse, like/unlike, CRUD operations.
              </p>
            </li>
          </ul>
        </article>

        {/* End of Android Development */}
      </div>
    </section>
  );
};

export default Services;
