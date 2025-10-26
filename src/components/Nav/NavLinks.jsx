export const NavLinks = ({ links = [], className = "" }) => (
  <>
    {links.map(({ href, label }) => (
      <a
        key={href}
        href={href}
        className={`text-gray-300 hover:text-green-400 transition-colors ${className}`}
      >
        {label}
      </a>
    ))}
  </>
);
