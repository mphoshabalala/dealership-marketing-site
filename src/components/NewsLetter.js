import { useNewsletter } from "../contexts/NewsletterContext";

export default function NewsLetter() {
  const {
    isNewsletterClosed,
    handleNewsletterPopUp,
    handleFormSubmit,
    handleInputChange,
    form,
  } = useNewsletter();
  return (
    <div
      className={`fixed bottom-5 left-5 z-50  bg-red-800 p-4 rounded-lg font-semibold bg-opacity-90 text-white ${
        isNewsletterClosed ? "hidden" : ""
      }`}
    >
      <div className="flex w-full justify-end">
        <p
          className="border border-white rounded-3xl px-2 hover:bg-white hover:text-black  cursor-pointer"
          onClick={() => handleNewsletterPopUp()}
        >
          X
        </p>
      </div>
      <h1>SUBSCRIBE TO OUR NEWSLETTER</h1>
      <p className="pb-4">Get more specialized content based on your search</p>
      <form onSubmit={handleFormSubmit}>
        <input
          type="email"
          className="rounded-l-sm p-2 w-2/3 text-black outline-none"
          placeholder="user123@gmail.com"
          name="email"
          value={form.email}
          required
          onChange={handleInputChange}
        ></input>
        <button className="bg-black rounded-r-sm py-2 px-4 w-1/3 hover:bg-opacity-90">
          Subscribe
        </button>
      </form>
    </div>
  );
}
