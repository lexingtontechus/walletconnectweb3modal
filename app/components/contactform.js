import { useForm, ValidationError } from "@formspree/react";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("xdoveojp");
  //https://formspree.io/f/xdoveojp
  if (state.succeeded) {
    return (
      <div className="block mb-2">
        Thanks for joining our Web3Inbox Waitlist. This feature is currently in
        Alpha mode and we will be in touch with you soon!
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="relative mb-2 ">
        <label
          htmlFor="full-name"
          className="block uppercase text-xs font-bold mb-2"
        >
          Full Name
        </label>
        <input
          className="mt-2 block w-full"
          type="text"
          name="name"
          id="full-name"
          placeholder="First and Last"
          required=""
        />

        <label
          htmlFor="email"
          className="block uppercase text-xs font-bold my-2"
        >
          Email address
        </label>
        <input
          className="mt-2 block w-full"
          id="email"
          type="email"
          name="email"
          placeholder="Your email address"
        />
        <ValidationError
          prefix="Email"
          field="email"
          errors={state.errors}
          className="border-0 px-3 py-3 placeholder-neutral bg-secondary rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
          placeholder="Email"
        />

        <button
          type="submit"
          disabled={state.submitting}
          className="btn btn-secondary text-slate-50 hover:text-slate-900 font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 my-2 w-full ease-linear transition-all duration-150"
        >
          Join
        </button>
      </div>
    </form>
  );
}
