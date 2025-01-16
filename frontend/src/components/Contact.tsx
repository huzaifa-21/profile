"use client";
import axios from "axios";
import SectionHead from "./SectionHead";
import { InputHTMLAttributes, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import AnimatedSection from "@/utils/AnimatedSection";
import { Form } from "@/types/form";

const Contact = () => {
  const [form, setForm] = useState<Form>({
    name: "",
    email: "",
    message: "",
  });

  const [sent, setSent] = useState(false);

  const hanldeChange = (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const value: string = e.target.value;
    const name: string = e.target.name;

    setForm({
      ...form,
      [name]: value,
    });
  };

  async function sendMail(name: string, email: string, message: string) {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_BACKEND_API}/send`,
      {
        name,
        email,
        message,
      }
    );
    const data = await response.data;
    if (data.success) {
      setSent(true);
      setTimeout(() => {
        setSent(false);
      }, 3000);

    }
  }
  // sendMail({name:"hello",email:"laskjdf",message:"a;lskdf;lkajsdf"})

  return (
    <section id="contact" className="bg-wave bg-cover bg-center py-24">
      <SectionHead text="Contact " />
      <AnimatedSection>

      <div className="contact-holder container mx-auto mt-16 flex gap-10 flex-col md:flex-row">
        <div className="contact-message flex-1 flex flex-col justify-center">
          <h2 className="text-7xl font-semibold font-header ">
            Get In Touch!!
          </h2>
          <p className="text-paragrahColor text-lg mt-3 text-left leading-relaxed max-w-[480px]">
            Hey there! Want to chat, collaborate, or share a laugh? Drop me a
            line and let's make some magic happen! Whether you've got a question
            burning a hole in your brain or just want to say hi, I'm all ears
            (figuratively speaking, of course). Can't wait to hear from you!
          </p>
        </div>
        <form
          className=" p-8 rounded-lg flex  flex-col  gap-5 bg-[#16192680] backdrop-blur-sm  flex-1"
          onSubmit={(e) => {
            e.preventDefault();
            sendMail(form.name, form.email, form.message);
          }}
        >
          <input
            required
            onChange={hanldeChange}
            type="text"
            name="name"
            id=""
            className="main-input"
            placeholder="Name"
          />
          <input
            required
            onChange={hanldeChange}
            type="email"
            name="email"
            id=""
            className="main-input"
            placeholder="Email"
          />
          <textarea
            required
            onChange={hanldeChange}
            name="message"
            id=""
            className="min-h-[200px] main-input resize-none"
            placeholder="Hi, I think we need a design system for our products at Company X. How soon can you hop on to discuss this?"
          ></textarea>
          <button type="submit" className="btn-primary w-fit">
            Send Message
            <FontAwesomeIcon icon={faPaperPlane} className="text-sm ms-5" />
          </button>
          {sent && (
            <span className="animate-pulse">Thanks for your message</span>
          )}
        </form>
      </div>
      </AnimatedSection>
    </section>
  );
};
export default Contact;
