import { format, parseISO } from 'date-fns';

export const calculateReadingTime = (html: string) => {
  const wordsPerMin = 225;
  const words = html.trim().split(/\s+/).length;
  return Math.ceil(words / wordsPerMin);
};

export const formatReadingTime = (minutes: number) => {
  const timeToRead = minutes > 0 ? minutes : 1;
  return `${timeToRead} minute read`;
};

export const formatDate = (isoDate: Date | string) => {
  const date = isoDate instanceof Date ? isoDate : parseISO(isoDate);
  return format(date, 'MMMM d, yyyy');
};
