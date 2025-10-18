"use client"
import Logo from "@/assets/images/logo.png";
import { GlobIcon, UserICon } from "@/Components/SvgContainer/SvgContainer";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";


const navLinks = [
  { path: "/", name: "Home" },
  { path: "/about", name: "About Us" },
  { path: "/services", name: "Services" },
  { path: "/pricing", name: "Pricing" },
  { path: "/blog", name: "Blog" },
  { path: "/faq", name: "FAQ" },
  { path: "/contact", name: "Contact" },
  { path: "/dashboard", name: "Dashboard" },
];

const Navbar = () => {
  const pathname = usePathname();
  return (
    <div className="bg-[#FFF]/95  border-b border-[#E3E8EF] shadow-[0_4px_16px_0_rgba(0,0,0,0.06)] sticky top-0 z-50">
      <div className="section-padding-x flex items-center justify-between py-4 gap-8">
        <div>
          <Link href="/">
            <Image src={Logo} alt="Logo" width={140} height={72} />
          </Link>
        </div>
        <div className="flex items-center gap-[38px]">
          {navLinks.map((nav) => (
            <Link
              key={nav.path}
              href={nav.path}
              className={`font-medium ${pathname === nav.path ? "text-[#085441] text-[18px] font-semibold" : "text-[#595959] "
                } hover:text-[#085441]`}
            >
              {nav.name}
            </Link>
          ))}
        </div>
        <div className="flex justify-center items-center gap-[18px]">
          <Link href={'/auth/stepers'} className="bg-[#ECF4E9] hover:bg-[#085441] text-[#085441] transition-all duration-300 hover:text-white w-[50px] h-[50px] rounded-full flex items-center justify-center cursor-pointer"><UserICon /> </Link>
          <button className="bg-[#ECF4E9] hover:bg-[#085441] text-[#085441] transition-all duration-300 hover:text-white rounded-full px-4 py-3 flex justify-center items-center gap-[6px] cursor-pointer"><GlobIcon /> <span>EN</span></button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;