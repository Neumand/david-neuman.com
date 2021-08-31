import { format, parseISO } from 'date-fns';

export const formatReadingTime = (minutes) => {
  const timeToRead = minutes > 0 ? minutes : 1;
  return `${timeToRead} minute read`;
};

export const formatDate = (date) => format(parseISO(date), 'MMMM do, yyyy');
