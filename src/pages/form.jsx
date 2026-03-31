function form() {
    return(
        <>
<form action="https://formspree.io/f/xvzvgqwg"
  method="POST" id="contact" className="p-4 bg-[#EAEFEF] text-[#25343F]  rounded-lg shadow-md">
      <fieldset className="flex flex-col gap-4 max-w-7xl mx-auto border-none">
        <legend className="text-2xl font-semibold mb-2">Contact Me</legend>

        <div className="flex flex-col">
          <label htmlFor="firstname" className="mb-1">First Name:</label>
          <input className="form-custom p-2" type="text" id="firstname" required />
        </div>

        <div className="flex flex-col">
          <label htmlFor="lastname" className="mb-1">Last Name:</label>
          <input className="form-custom p-2" type="text" id="lastname" required />
        </div>

        <div className="flex flex-col">
          <label htmlFor="email" className="mb-1">Email:</label>
          <input className="form-custom p-2" type="email" id="email" required />
        </div>

        <div className="flex flex-col">
          <label htmlFor="phone" className="mb-1">
            Phone Number:
            <small className="block text-sm text-gray-500">Format: 0612345678 or 0201234567</small>
          </label>
          <input className="form-custom p-2" type="tel" id="phone" name="phone" pattern="[0-9]{10}" />
        </div>

        <div className="flex flex-col">
          <label htmlFor="message" className="mb-1">Write a message:</label>
          <textarea
            className="form-custom p-2"
            name="message"
            id="message"
            rows={4}
            placeholder="Write here"
          ></textarea>
        </div>
        <button
          type="submit"
          className="form-custom p-2 mt-4 w-auto bg-[#BFC9D1] hover:text-[#FF9B51] transition-colors"
        >
        Send
        </button>
      </fieldset>
    </form>
    </>
    ) 
}

export default form