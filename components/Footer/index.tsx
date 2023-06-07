import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="flex justify-between pb-4">
      <div>© 2023 Gurprit Singh.</div>
      <div>
        Built with <Link href="https://nextjs.org/">Next js</Link>
      </div>
    </footer>
  );
};

export default Footer;
