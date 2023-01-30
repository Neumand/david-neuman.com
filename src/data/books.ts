export interface Book {
  title: string;
  author: string;
  imageUrl: string;
  genre: string;
  summary?: string;
  slug?: string;
  hasReview?: boolean;
}

enum Genres {
  FANTASY_SCI_FI = 'Fantasy/Sci-Fi',
  PERSONAL_DEVELOPMENT = 'Personal Development',
  BUSINESS_FINANCE = 'Business & Finance',
  PSYCHOLOGY = 'Psychology',
  MEMOIR = 'Memoir',
}

const books: Book[] = [
  {
    title: 'The Powder Mage Trilogy',
    author: 'Brian McClellan',
    genre: Genres.FANTASY_SCI_FI,
    imageUrl: 'https://m.media-amazon.com/images/I/515anQpgFCL._SY346_.jpg',
    slug: 'the-powder-mage-trilogy',
    hasReview: true,
    summary:
      'An awesome, fast-paced fantasy series with a unique and interesting magic system.',
  },
  {
    title: 'Range',
    author: 'David Epstein',
    genre: Genres.PERSONAL_DEVELOPMENT,
    imageUrl:
      'https://images-na.ssl-images-amazon.com/images/I/71tET8K-+yL.jpg',
  },
  {
    title: 'Red Rising',
    author: 'Pierce Brown',
    genre: Genres.FANTASY_SCI_FI,
    imageUrl:
      'https://images-na.ssl-images-amazon.com/images/I/719nDAsdKtL.jpg',
  },
  {
    title: 'Atomic Habits',
    author: 'James Clear',
    genre: Genres.PERSONAL_DEVELOPMENT,
    imageUrl:
      'https://images-na.ssl-images-amazon.com/images/I/713mzPe9SwS.jpg',
  },
  {
    title: 'The Shadow of What Was Lost',
    author: 'James Islington',
    genre: Genres.FANTASY_SCI_FI,
    imageUrl:
      'https://images-na.ssl-images-amazon.com/images/I/51oul60C3fL.jpg',
  },
  {
    title: 'The Psychology of Money',
    author: 'Morgan Housel',
    genre: Genres.BUSINESS_FINANCE,
    imageUrl:
      'https://images-na.ssl-images-amazon.com/images/I/81Lb75rUhLL.jpg',
  },
  {
    title: 'Stolen Focus',
    author: 'Johann Hari',
    genre: Genres.PERSONAL_DEVELOPMENT,
    imageUrl:
      'https://images-na.ssl-images-amazon.com/images/I/41JkN0wefOL._SX327_BO1,204,203,200_.jpg',
  },
  {
    title: 'Shadow of the Gods',
    author: 'John Gwynne',
    genre: Genres.FANTASY_SCI_FI,
    imageUrl: 'https://m.media-amazon.com/images/I/91OAaFVVK-L.jpg',
  },
  {
    title: 'The Way of Kings',
    author: 'Brandon Sanderson',
    genre: Genres.FANTASY_SCI_FI,
    imageUrl: 'https://m.media-amazon.com/images/I/51ZX3mqLFzL.jpg',
  },
  {
    title: 'Name of the Wind',
    author: 'Patrick Rothfuss',
    genre: Genres.FANTASY_SCI_FI,
    imageUrl: 'https://m.media-amazon.com/images/I/51FTWmg+WQL._SY346_.jpg',
  },
];

export const getBooks = () => books;
