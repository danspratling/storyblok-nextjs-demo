import clsx from "clsx";
import { useMutation } from "react-query";
import { useForm } from "react-hook-form";
import { Input } from "../Form";
import { TrackGoal } from "../../utils/trackGoal";

// Add additional functionality using the convertkit API: https://developers.convertkit.com/
export const NewsletterForm = ({
  className,
  placeholder,
  submitLabel,
  vertical,
}) => {
  const { register, handleSubmit } = useForm();

  const subscribe = async ({ email }) => {
    await fetch(`/api/subscribe?email=${email}`);
  };

  const {
    mutate,
    isSuccess,
    isLoading,
    // isError,
    // error,
    // reset
  } = useMutation((data) => subscribe(data));

  const onSubmit = (data) => mutate(data);

  if (isSuccess) {
    return (
      <div className="mb-8 text-xl">
        <TrackGoal goal="Newsletter" />
        <p>Thanks for signing up!</p>
      </div>
    );
  }

  return (
    <form
      className={clsx(
        "flex flex-wrap items-start justify-center gap-x-6 md:flex-nowrap",
        vertical && "flex-col",
        className
      )}
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className={`w-full min-w-min ${vertical ? "flex-1" : "md:w-1/2"}`}>
        <Input
          name="email"
          label="Email Address"
          hideLabel
          type="email"
          required
          placeholder={placeholder ?? "Enter your email"}
          register={register}
          autoComplete="email"
        />
      </div>

      <button
        className={`btn btn-primary btn-xl ${vertical ? "w-full" : ""}`}
        disabled={isLoading}
      >
        {isLoading ? "Just a moment" : submitLabel ?? "Subscribe"}
      </button>

      {/* <div className="mt-4 text-gray-700">
        Join {totalSubscribers} subscribers – {totalIssues} issues
      </div> */}

      {/* {isError && <ErrorMessage message={error} />} */}
    </form>
  );
};
