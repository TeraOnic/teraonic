const ContactUs = () => {
  return (
    <article className="mx-80 my-20 text-center">
      <h1 className="text-lg">Contact Us</h1>
      <p className="text-sm mb-4">
        We'd love to hear from you. Get in touch with our team through any of
        the channels below.
      </p>
      <form className="flex flex-col gap-3 text-left border p-8 rounded-4xl text-[1rem]" action="https://formsubmit.co/teraonic.info@gmail.com" method="POST">
        <div className="flex gap-3">
        <div className="w-full">
          <p>First Name</p>
          <input className="border w-full px-1.5 py-2.5" name="First Name" type="text" placeholder="Enter your First Name" required/>
        </div>
        <div className="w-full">
          <p>Second Name</p>
          <input className="border w-full px-1.5 py-2.5" name="Last Name" type="text" placeholder="Enter your Last Name" required/>
        </div>
        </div>
        <div className="w-full">
            <p>Email Address</p>
            <input className="border w-full px-1.5 py-2.5" name="Email" type="email" placeholder="Enter your email address" required/>
        </div>
        <div className="w-full">
            <p>Message</p>
            <textarea className="border w-full px-1.5 py-2.5 h-28" name="Message" type="text" placeholder="Please type your message here" required/>
        </div>
        <div className="flex justify-end px-1.5 py-2.5">
        <button type="submit" className="bg-secondary text-white p-4 rounded-[0.5rem] w-44 text-sm font-poppins hover:bg-primary transition-all duration-300">Send Message</button>
        </div>
      </form>
    </article>
  );
};

export default ContactUs;
