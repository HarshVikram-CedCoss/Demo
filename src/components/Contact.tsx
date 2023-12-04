const Contact = () => {
  return (
    <div>
      <h1 className="font-bold text-3xl p-4 m-4">Contact Us Page</h1>
      <form>
        <input
          placeholder="Enter Name"
          type="text"
          className="border border-solid border- yellow"
        />
        <input
          placeholder="Enter Message"
          type="text"
          className="border border-solid border- yellow"
        />
        <button className="px-2 py-2 bg-yellow-100 m-3 rounded-lg">
          Submit
        </button>

        <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
          <div className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full">
            45%
          </div>
        </div>
      </form>
    </div>
  );
};
export default Contact;
