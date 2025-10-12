import { useState } from "react";

const ContactUs = () => {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/teraonic.info@gmail.com",
        {
          method: "POST",
          body: formData,
        }
      );

      if (response.ok) {
        setStatus("Message sent successfully!");
        e.target.reset();
      } else {
        setStatus("Something went wrong. Try again later.");
      }
    } catch (error) {
      console.error(error);
      setStatus("Error submitting form.");
    }
  };

  return (
    <article className="mx-80 my-20 text-center">
      <h1 className="text-lg">Contact Us</h1>
      <p className="text-sm mb-4">
        We'd love to hear from you. Get in touch with our team through any of
        the channels below.
      </p>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-3 text-left border p-8 rounded-4xl text-[1rem]"
      >
        <input type="hidden" name="Type" value="Contact Us" />
        <div className="flex gap-3">
          <div className="w-full">
            <p>First Name</p>
            <input
              className="border w-full px-1.5 py-2.5"
              name="First Name"
              required
            />
          </div>
          <div className="w-full">
            <p>Last Name</p>
            <input
              className="border w-full px-1.5 py-2.5"
              name="Last Name"
              required
            />
          </div>
        </div>
        <div className="w-full">
          <p>Email Address</p>
          <input
            className="border w-full px-1.5 py-2.5"
            name="Email"
            type="email"
            required
          />
        </div>
        <div className="w-full">
          <p>Message</p>
          <textarea
            className="border w-full px-1.5 py-2.5 h-28"
            name="Message"
            required
          />
        </div>
        <div className="flex justify-end px-1.5 py-2.5">
          <button
            type="submit"
            className="bg-secondary text-white p-4 rounded-[0.5rem] w-44 text-sm font-poppins hover:bg-primary transition-all duration-300"
          >
            Send Message
          </button>
        </div>
      </form>

      {status && <p className="mt-4 text-sm text-green-700">{status}</p>}
    </article>
  );
};

export default ContactUs;
