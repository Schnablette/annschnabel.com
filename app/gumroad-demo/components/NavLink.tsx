type NavLinkProps = {
  href?: string;
  linkTitle: string;
  // icon?: React.ReactNode;
};

export const NavLink: React.FC<NavLinkProps> = ({
  href = "/",
  linkTitle = "",
}: NavLinkProps) => {
  return (
    <a
      href={linkTitle === "Watchlists" ? "/watchlists" : href}
      className="flex justify-start items-center gap-4 text-white pl-6 pr-10 py-4 border-b border-gray-500 hover:text-fuchsia-300"
    >
      <svg className="w-4 h-4">
        <circle cx="12" cy="12" r="12" fill="currentColor" />
      </svg>
      {linkTitle}
    </a>
  );
};
