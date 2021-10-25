import { useRef, useState } from 'react';
import Link from 'next/link';
import LoadingSpinner from 'components/LoadingSpinner';

const Subscribe = () => {
  const nameInputRef = useRef(null);
  const emailInputRef = useRef(null);

  const [form, setForm] = useState({
    status: '',
    message: '',
  });
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    setForm({ status: 'LOADING' });

    const res = await fetch('/api/subscribe', {
      method: 'POST',
      body: JSON.stringify({
        name: nameInputRef.current.value,
        email: emailInputRef.current.value,
      }),
    });

    const { error } = await res.json();
    if (error) {
      setForm({ status: 'ERROR', message: error });
      return;
    }

    setIsSubscribed(true);
  };

  return (
    <div className="flex flex-col text-center max-w-3xl rounded p-8 space-y-4 justify-center items-center m-auto bg-cool-gray-100 dark:bg-gray-800">
      <header className="text-4xl font-header">
        {!isSubscribed ? "Subscribe to Dave's Dives" : 'Thank You!'}
      </header>
      <div>
        {!isSubscribed ? (
          <span>
            Sign up to receive curated articles on web development, creativity,
            productivity and self-development.
          </span>
        ) : (
          <span>
            Welcome to <strong>Dave's Dives!</strong> Keep an eye out for the
            next issue, or check out past issues{' '}
            <Link href="/newsletter">
              <a className="text-blue-900 bg-blue-50 dark:text-blue-500 dark:bg-cool-gray-900">
                here
              </a>
            </Link>
            .
          </span>
        )}
      </div>
      {!isSubscribed && (
        <form
          className="flex flex-col justify-center items-center space-y-3 md:flex-row md:space-x-4 md:space-y-0"
          onSubmit={handleSubscribe}
        >
          <input
            ref={nameInputRef}
            className="input"
            placeholder="First name"
            type="text"
            disabled={form.status === 'LOADING'}
          />
          <input
            ref={emailInputRef}
            className="input"
            placeholder="Email"
            type="email"
            disabled={form.status === 'LOADING'}
          />
          <button
            type="submit"
            className="flex items-center justify-center w-28 font-bold bg-cool-gray-800 text-white rounded-full py-2 px-4 self-center focus:outline-none dark:bg-blue-900"
          >
            {form.status === 'LOADING' ? <LoadingSpinner /> : 'Subscribe'}
          </button>
        </form>
      )}
      {form.status === 'ERROR' && (
        <div className="font-bold text-red-accent-400 dark:text-red-600">
          {form.message}
        </div>
      )}
    </div>
  );
};

export default Subscribe;
