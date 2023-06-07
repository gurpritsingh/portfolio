import Link from 'next/link';
import Image from 'next/image';
import { User } from 'lucide-react';

import profilePic from 'public/me.jpeg';

const Header = () => {
  return (
    <header className="flex gap-x-8">
      <Link href="/">
        <Image
          src={profilePic}
          width="110"
          height="110"
          alt="profile picture"
          className="rounded-full"
        />
      </Link>
      <div>
        <Link
          className='text-3xl font-semibold uppercase after:content-[""] after:block after:rounded-md after:bg-accent	after:w-9 after:h-1.5 after:mt-2'
          href="/">
          Gurprit Singh
        </Link>
        <nav className="uppercase flex gap-x-8 mt-5 font-bold text-muted tracking-wider	">
          <Link href="/work">work</Link>
          <Link href="/projects">projects</Link>
          <Link href="/articles">articles</Link>
          <Link href="#">contact</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
