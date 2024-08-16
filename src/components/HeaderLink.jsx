export default function HeaderLink({ href, title, setOpen }) {
  return (
    <li>
      <a
        className="block px-1 py-2 font-medium opacity-80 transition-opacity duration-200 ease-in-out hover:opacity-100  text-lg"
        href={href}
        title={title}
        onClick={() => setOpen(false)}
      >
        {title}
      </a>
    </li>
  );
}
