import { Button, buttonVariants } from '@components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@components/ui/dialog';
import { cn } from '@lib/utils';
import {
  CalendarClock,
  Github,
  Linkedin,
  Mail,
  MailIcon,
  MessageCircle,
  Twitter,
} from 'lucide-react';
import { FC, useEffect, useState } from 'react';

interface ContactDialogProps {
  openWithSlash?: boolean;
}

export const ContactDialog: FC<ContactDialogProps> = ({
  openWithSlash = false,
}) => {
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    function openContactDialog(e: KeyboardEvent) {
      if (!openWithSlash) {
        return;
      }

      // Prevents interfering with browser shortcuts.
      if (e.metaKey || e.ctrlKey) {
        return;
      }

      if (e.key === '/') {
        e.preventDefault();
        setOpen(true);
      }
    }

    document.addEventListener('keydown', openContactDialog);

    return () => {
      document.removeEventListener('keydown', openContactDialog);
    };
  }, []);

  return (
    <Dialog open={open} onOpenChange={(open) => setOpen(open)}>
      <DialogTrigger asChild>
        <div className='cursor-pointer p-2 rounded hover:bg-zinc-200/80 hover:shadow dark:hover:bg-zinc-800/80'>
          <div className='flex justify-between'>
            <div className='flex gap-2 items-center'>
              <MessageCircle className='p-0 w-6 h-6 sm:w-4 sm:h-4' />
              <span className='hidden sm:block'>Contact</span>
            </div>
            <span className='hidden sm:flex md:items-center md:justify-center text-xs h-4 w-4 p-2.5 text-zinc-400 bg-zinc-300/30 dark:bg-zinc-700'>
              /
            </span>
          </div>
        </div>
      </DialogTrigger>
      <DialogContent className='sm:max-w-[425px]'>
        <DialogHeader>
          <DialogTitle>Contact</DialogTitle>
          <DialogDescription>Reach out anytime.</DialogDescription>
        </DialogHeader>
        <div className='flex flex-col gap-4 py-4'>
          <div className='flex justify-between items-end'>
            <div>
              <div className='text-muted-foreground text-sm'>Email</div>
              <div>david.m.neuman@gmail.com</div>
            </div>
            <a
              href='mailto:david.m.neuman@gmail.com'
              className={cn(buttonVariants({ variant: 'outline' }))}
            >
              <Mail className='h-4 w-4' />
            </a>
          </div>
          <div className='flex justify-between items-end'>
            <div>
              <div className='text-muted-foreground text-sm'>Meet</div>
              <div>Let's chat</div>
            </div>
            <a
              href='https://cal.com/davidneuman'
              target='_blank'
              className={cn(buttonVariants({ variant: 'outline' }))}
            >
              <CalendarClock className='h-4 w-4' />
            </a>
          </div>
          <div className='flex justify-between items-end'>
            <div>
              <div className='text-muted-foreground text-sm'>Email</div>
              <div>Social</div>
            </div>
            <div className='space-x-2'>
              <a
                href='https://github.com/Neumand'
                target='_blank'
                className={buttonVariants({ variant: 'outline' })}
              >
                <Github className='h-4 w-4' />
              </a>
              <a
                href='https://linkedin.com/in/neumand'
                target='_blank'
                className={buttonVariants({ variant: 'outline' })}
              >
                <Linkedin className='h-4 w-4' />
              </a>
              <a
                href='https://twitter.com/DavidMNeuman'
                target='_blank'
                className={buttonVariants({ variant: 'outline' })}
              >
                <Twitter className='h-4 w-4' />
              </a>
            </div>
          </div>
        </div>
        <DialogFooter></DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
