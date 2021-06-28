import Image from 'next/image';
import toolbox from 'public/static/images/toolbox.png';

export default function Construction() {
  return (
    <div className="m-auto max-w-2xl">
      <div className="text-xl mb-4">
        Sorry, still working on this! Coming soon™
      </div>
      <Image
        className="rounded-md"
        src={toolbox}
        alt="Toolbox with screwdriver, hammer and saw"
      />
    </div>
  );
}
