import {
  BookAIcon,
  BookmarkIcon,
  HomeIcon,
  LucideIcon,
  NewspaperIcon,
  PencilIcon,
  UserIcon,
} from 'lucide-react';

export type NavItem = {
  name: string;
  href: string;
  popOut: boolean;
  Icon: LucideIcon;
};

export const navItems: NavItem[] = [
  { name: 'Home', href: '/', popOut: false, Icon: HomeIcon },
  { name: 'Writing', href: '/blog', popOut: false, Icon: PencilIcon },
  { name: 'About', href: '/about', popOut: false, Icon: UserIcon },
  {
    name: 'Newsletter',
    href: 'https://www.bit-by-bit.co/',
    popOut: true,
    Icon: NewspaperIcon,
  },
  { name: 'Books', href: '/books', popOut: false, Icon: BookAIcon },
  { name: 'Resources', href: '/resources', popOut: false, Icon: BookmarkIcon },
];
