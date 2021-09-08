import { useState } from 'react';

const Subscribe = () => {
  const [userInput, setUserInput] = useState({
    name: '',
    email: '',
  });

  const handleSubscribe = (e) => {
    e.preventDefault();
    // TODO: Connect to Revue
    // TODO: Call API endpoint /api/subscribe.js
  };

  return (
    <div className="flex flex-col text-center max-w-3xl rounded p-8 space-y-4 justify-center items-center m-auto bg-cool-gray-100 dark:bg-gray-800">
      <header className="text-4xl font-header">
        Subscribe to Dave's Dives
      </header>
      <div>
        Sign up to receive curated articles on web development, creativity,
        productivity and self-development.
      </div>
      <form
        className="flex flex-col justify-center items-center space-y-3 md:flex-row md:space-x-4 md:space-y-0"
        onSubmit={handleSubscribe}
      >
        <input
          className="input"
          placeholder="First name"
          type="text"
          value={userInput.name}
          onChange={(e) =>
            setUserInput((state) => ({ ...state, name: e.target.value }))
          }
        />
        <input
          className="input"
          placeholder="Email"
          type="email"
          value={userInput.email}
          onChange={(e) =>
            setUserInput((state) => ({ ...state, email: e.target.value }))
          }
        />
        <button
          type="submit"
          className="font-bold bg-cool-gray-800 text-white rounded-full py-2 px-4 self-center dark:bg-blue-900"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default Subscribe;
