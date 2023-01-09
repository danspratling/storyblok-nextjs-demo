import { ContactForm } from "../../components/ContactForm";

const Contact = () => {
  return (
    <section className="py-12 md:py-20">
      <div className="container">
        <div className="max-w-4xl px-6 mx-auto bg-gray-100 rounded-lg dark:bg-gray-800 md:px-10 md:py-4">
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;
