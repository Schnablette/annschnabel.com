import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import Logo from "./assets/logo.svg";
import { NavLink } from "./components";
import { DefaultPage, WatchlistPage } from "./pages";

export const GumroadDemo = () => {
  const path = usePathname();

  const linksA: string[] = [
    "Home",
    "Products",
    "Collaborators",
    "Checkout",
    "Emails",
    "Workflows",
    "Sales",
    "Analytics",
    "Payouts",
  ];
  const linksB = ["Discover", "Library", "Watchlists"];
  const linksC = ["Start Selling", "Help", "Products"];

  const links = [linksA, linksB, linksC];

  return (
    <>
      <div className="bg-black max-w-[200px] h-100vh flex flex-col justify-start gap-5">
        <div className="border-t border-gray-500">
          <Link href="/">
            <Image className="px-6 mt-16 mb-10" src={Logo} alt="logo" />
          </Link>
        </div>
        {links.map((sublinks) => (
          <div className="border-t border-gray-500 mb-9">
            {sublinks.map((titles) => {
              return <NavLink linkTitle={titles} />;
            })}
          </div>
        ))}
      </div>
      {path.includes("watchlists") ? <WatchlistPage /> : <DefaultPage />}
    </>
  );
};
