"use client";
import axios from "axios";

const Contact = () => {
  async function sendMail(name: string, email: string, message: string) {
    const response = await axios.post(
      `${process.env.NEXT_SECRET_BACKEND_API}/send`,
      {
        name,
        email,
        message,
      }
    );
    const data = await response.data;
    if (data.sucess) {
    }
  }

  return <div>Contact</div>;
};
export default Contact;
