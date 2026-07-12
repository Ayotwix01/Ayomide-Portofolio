import emailjs from "@emailjs/browser";
import { useRef } from "react";

import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_1q6pesq",
        "template_tw47cd1",
        form.current,
        "J9xVGBoNHPQppAPlS",
      )
      .then(() => {
        alert("Message sent successfully!");
      })
      .catch(() => {
        alert("Something went wrong!");
      });
  };
  return (
    <section id="contact" className="px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-white text-center">
          Contact Me
        </h2>

        <p className="text-gray-400 text-center mt-4">
          Have a project or opportunity? Feel free to reach out.
        </p>

        <div className="grid grid-cols-2 max-md:grid-cols-1 gap-12 mt-12">
          {/* Contact Information */}

          <div>
            <h3 className="text-2xl font-semibold text-white">Let's Connect</h3>

            <p className="text-gray-400 mt-4 leading-relaxed">
              I'm open to frontend development opportunities, collaborations and
              interesting projects.
            </p>

            <div className="mt-8 space-y-5">
              <a
                href="mailto:your-email@gmail.com"
                className="flex items-center gap-4 text-gray-300 hover:text-white transition"
              >
                <FaEnvelope className="text-xl" />
                ayomideorokunle05@gmail.com
              </a>

              <a
                href="https://github.com/Ayotwix01"
                target="_blank"
                className="flex items-center gap-4 text-gray-300 hover:text-white transition"
              >
                <FaGithub className="text-xl" />
                GitHub
              </a>

              <a
                href="https://linkedin.com/in/orokunle-ayomide-b16ba6310"
                target="_blank"
                className="flex items-center gap-4 text-gray-300 hover:text-white transition"
              >
                <FaLinkedin className="text-xl" />
                LinkedIn
              </a>
            </div>
          </div>

          {/* Contact Form */}

          <form
            ref={form}
            onSubmit={sendEmail}
            className="bg-slate-900 p-6 rounded-xl border border-white/10 space-y-5"
          >
            <input
              name="from_name"
              type="text"
              placeholder="Your Name"
              className="
              w-full
              bg-slate-800
              text-white
              rounded-lg
              p-3
              outline-none
              border
              border-white/10
              focus:border-blue-500
              "
            />

            <input
              name="from_email"
              type="email"
              placeholder="Your Email"
              className="
              w-full
              bg-slate-800
              text-white
              rounded-lg
              p-3
              outline-none
              border
              border-white/10
              focus:border-blue-500
              "
            />

            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              className="
              w-full
              bg-slate-800
              text-white
              rounded-lg
              p-3
              outline-none
              border
              border-white/10
              focus:border-blue-500
              "
            />

            <button
              className="
              bg-blue-500
              hover:bg-blue-600
              text-white
              px-6
              py-3
              rounded-lg
              transition
              "
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
