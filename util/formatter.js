import { format, parseISO } from 'date-fns';

/**
 * A simple function for calculating reading time.
 * @param {string} html HTML string
 * @returns Time to read in minutes
 */
export const calculateReadingTime = (html) => {
  const wordsPerMin = 225;
  const words = html.trim().split(/\s+/).length;
  return Math.ceil(words / wordsPerMin);
};

export const formatReadingTime = (minutes) => {
  const timeToRead = minutes > 0 ? minutes : 1;
  return `${timeToRead} minute read`;
};

export const formatDate = (date) => format(parseISO(date), 'MMMM do, yyyy');
