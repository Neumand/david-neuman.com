const Pill = ({ children }) => (
  <div className="cursor-pointer w-max text-xs rounded-full bg-blue-50 px-3 py-1 uppercase font-semibold transition-all transform ease-in-out hover:bg-blue-100 dark:bg-blue-900 dark:hover:bg-blue-800">
    {children}
  </div>
);

export default Pill;
