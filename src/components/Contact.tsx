const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 md:px-12">
      <div className="max-w-3xl mx-auto text-center">
        <p className="font-mono text-portfolio-accent mb-4">
          04. What's Next?
        </p>
        
        <h2 className="text-4xl md:text-5xl font-bold text-portfolio-lightest-slate mb-6">
          Get In Touch
        </h2>
        
        <p className="text-portfolio-slate mb-12 text-lg">
          I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>
        
        <form
          action="https://formspree.io/f/xrgvjkzj"
          method="post"
          className="contact-form flex flex-col items-center space-y-4 text-black"
        >
          <input
            className="contact-input border border-portfolio-accent px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-portfolio-accent w-3/5"
            type="text"
            name="contact-name"
            placeholder="Full name"
            required
          />
          <input
            className="contact-input border border-portfolio-accent px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-portfolio-accent w-3/5"
            type="email"
            name="contact-email"
            placeholder="Email address"
            required
          />
          <textarea
            className="contact-message border border-portfolio-accent text-black px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-portfolio-accent w-3/5"
            name="contact-message"
            cols={10}
            rows={10}
            placeholder="Write me something..."
            maxLength={500}
            required
          ></textarea>
          <input
            type="submit"
            value="Get in touch"
            className="submit-btn btn btn-inline-block bg-portfolio-accent text-white px-8 py-4 mt-8 rounded cursor-pointer hover:bg-opacity-90 transition-all"
            id="submitt"
          />
        </form>

      </div>
    </section>
  );
};

export default Contact;
