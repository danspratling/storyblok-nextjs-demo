import { useState } from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { Input, TextArea, Select, Checkbox } from "../Form";
import { TrackGoal } from "../../utils/trackGoal";

export const ContactForm = () => {
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null },
  });

  const { register, getValues, handleSubmit } = useForm();

  // Newsletter configuration
  const subscribe = async ({ first_name, email }) => {
    await fetch(`/api/subscribe?first_name=${first_name}&email=${email}`);
  };
  const { mutate } = useMutation((data) => subscribe(data));

  const handleFormSubmission = async (data) => {
    setStatus({
      submitted: false,
      submitting: true,
    });

    // Splits full name into first and last name
    const formattedData = {
      first_name: data.full_name.split(" ")[0],
      last_name:
        data.full_name.split(" ")[data.full_name.split(" ").length - 1],
      ...data,
    };

    // Handles newsletter subscription
    if (data.newsletter) {
      mutate({
        first_name: formattedData.first_name,
        email: formattedData.email,
      });
    }

    // handles Form submission
    fetch(`https://formspree.io/f/mzbwprnl`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formattedData),
    }).then((response) => {
      response
        .json()
        .then(() => {
          setStatus({
            submitted: true,
            submitting: false,
          });
        })
        .catch((error) => {
          setStatus({
            submitted: false,
            submitting: false,
            info: { error, msg: null },
          });
        });
    });
  };

  return (
    <form
      className="mx-auto my-6 max-w-3xl"
      onSubmit={handleSubmit(handleFormSubmission)}
      name="contact"
      method="POST"
      id="contactForm"
    >
      {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
      <input
        type="hidden"
        name="_subject"
        value={`Enquiry: ${getValues("first_name")} ${getValues("last_name")}`}
      />

      <div className="grid gap-8 md:grid-cols-2">
        <Input
          name="full_name"
          label="Full Name"
          type="text"
          required
          placeholder="Your full name"
          register={register}
          autoComplete="name"
        />

        <Input
          name="email"
          label="Email Address"
          type="email"
          required
          placeholder="hello@skyward.digital"
          register={register}
          autoComplete="email"
        />
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <Input
          name="company"
          label="Company name"
          type="text"
          required
          placeholder="Skyward"
          register={register}
          autoComplete="name"
        />

        <Select
          name="referral"
          label="Let us know how you heard about us"
          options={[
            { value: "Blog", label: "Blog" },
            { value: "Colleague", label: "Colleague" },
            { value: "Client", label: "I'm a former Client" },
            { value: "Newsletter", label: "Newsletter" },
            { value: "Podcast", label: "Podcast" },
            { value: "Google", label: "Google/Search Engines" },
            { value: "LinkedIn", label: "LinkedIn" },
            { value: "Twitter", label: "Twitter" },
            // { value: "YouTube", label: "YouTube" },
          ]}
          showOther
          required
          register={register}
          autoComplete="name"
        />
      </div>

      <TextArea
        name="message"
        label="How can we help?"
        required
        placeholder="Tell us about your project"
        register={register}
      />

      <Checkbox
        name="newsletter"
        label="Keep me up to date with Skyward news"
        register={register}
      />

      <div className="mt-4 flex flex-wrap items-center justify-center md:justify-start">
        {status.submitted ? (
          <div className="text-center lg:text-left">
            <TrackGoal goal="Contact" />
            <p className="text-3xl font-extrabold text-gray-800">
              Thanks for enquiring
            </p>
            <p className="text-gray-800">We&apos;ll be in touch soon</p>
          </div>
        ) : (
          <>
            <button type="submit" className="btn btn-primary btn-xl">
              Send
            </button>
            {/* <p className="w-full mt-4 ml-4 text-sm text-left text-center text-gray-600 lg:w-auto">
              We'll get back to you within 48 hours
            </p> */}
          </>
        )}
      </div>
    </form>
  );
};
