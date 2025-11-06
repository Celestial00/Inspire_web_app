import { useEffect, useState } from "react";
import Loader from "./Loader";

interface QuoteIem {
  author: string;
  category: string[];
  quote: string;
}

type Quotes = QuoteIem[];

export default function Quote() {
  const [Quote, setQuote] = useState<Quotes>([]);
  const [loading, setLoading] = useState(false);

  const getQuote = async () => {
    try {
      setLoading(true);

      const response = await fetch(
        "https://api.api-ninjas.com/v2/randomquotes?categories=success,wisdom",
        {
          method: "GET",
          headers: {
            "X-Api-Key": import.meta.env.VITE_API_KEY,
          },
        }
      );

      const data = await response.json();
      setQuote(data);

      setLoading(false);
    } catch (err) {
      if (err instanceof Error) {
        alert("Error: " + err.message);
      }
    }
  };

  useEffect(() => {
    getQuote();
  }, []);

  const getNewQuote = () => {
    getQuote();
  };

  return (
    <div className=" w-full flex flex-col justify-center text-center items-center">
      {Quote.length > 0 && loading !== true ? (
        <div>
          <h1 className=" text-3xl mx-10 md:text-[60px] poppins font-semibold m-2 dark:text-white animate-fade-in-up ">
            {Quote[0].quote}
          </h1>
          <p className="poppins text-gray-600 dark:text-gray-400 animate-fade-in-up  ">
            {" "}
            - {Quote[0].author}.
          </p>
        </div>
      ) : (
        <Loader />
      )}

      <div className="">
        <button
          className="flex items-center rounded-md border poppins cursor-pointer border-slate-300 py-2 px-10 md:py-4 md:px-14 text-center text-sm transition-all shadow-sm hover:shadow-lg  text-slate-600 mt-20 hover:text-white hover:bg-slate-800 hover:border-slate-800 dark:text-black dark:bg-white dark:border-slate-200 "
          onClick={getNewQuote}
        >
          Inspire Me
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-4 h-4 ml-1.5"
          >
            <path
              fillRule="evenodd"
              d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
