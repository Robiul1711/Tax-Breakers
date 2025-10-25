"use client";
import { useState } from "react";
import Logo from "@/assets/images/logo.png";
import { GlobIcon, UserICon } from "@/Components/SvgContainer/SvgContainer";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";



const languages = [
  { code: "en", label: "English" },
  { code: "bn", label: "বাংলা" },
  { code: "es", label: "Español" },
  { code: "fr", label: "Français" },
  { code: "de", label: "Deutsch" },
];

const navLinks = [
  { path: "/", name: "Home" },
  { path: "/about", name: "About Us" },
  { path: "/services", name: "Services" },
  { path: "/pricing", name: "Pricing" },
  { path: "/blogs", name: "Blog" },
  { path: "/faq", name: "FAQ" },
  { path: "/contact", name: "Contact" },
  { path: "/dashboard", name: "Dashboard" },
];

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("en");
  const closeDrawer = () => setIsOpen(false);

  return (
    <>
      <div className="bg-[#FFF]/95 border-b border-[#E3E8EF] shadow-[0_4px_16px_0_rgba(0,0,0,0.06)] sticky top-0 z-50">
        <div className="section-padding-x flex items-center justify-between py-4 gap-8">
          <Link href="/">
            <Image className="lg:w-[140px] w-[100px]" src={Logo} alt="Logo" width={140} height={72} />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-[38px]">
            {navLinks.map((nav) => (
              <Link
                key={nav.path}
                href={nav.path}
                className={`font-medium transition-all duration-300 ${pathname === nav.path
                  ? "text-[#085441] text-[18px] font-semibold"
                  : "text-[#595959]"
                  } hover:text-[#085441]`}
              >
                {nav.name}
              </Link>
            ))}
          </div>

          {/* Desktop Right */}
          <div className="hidden lg:flex justify-center items-center gap-[18px]">
            <Link
              href={"/auth/login"}
              className="bg-[#ECF4E9] hover:bg-[#085441] text-[#085441] transition-all duration-300 hover:text-white w-[50px] h-[50px] rounded-full flex items-center justify-center"
            >
              <UserICon />
            </Link>


            <div className="relative inline-block">
              {/* Select Trigger */}
              <motion.button
                whileTap={{ scale: 0.97 }}
                onClick={() => setOpen(!open)}
                className="bg-[#ECF4E9] hover:bg-[#085441] text-[#085441] hover:text-white transition-all duration-300 rounded-full px-4 py-3 flex items-center gap-2 shadow-md"
              >
                <GlobIcon />
                <span className="font-medium uppercase">{selected}</span>
              </motion.button>

              {/* Dropdown */}
              <AnimatePresence>
                {open && (
                  <motion.ul
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute mt-3 right-0 bg-white/80 backdrop-blur-lg shadow-xl rounded-2xl overflow-hidden border border-white/40 w-40 z-50"
                  >
                    {languages.map((lang) => (
                      <motion.li
                        key={lang.code}
                        whileHover={{ backgroundColor: "#085441", color: "#fff" }}
                        onClick={() => {
                          setSelected(lang.code);
                          setOpen(false);
                        }}
                        className="px-4 py-2 text-sm text-[#085441] cursor-pointer transition-all"
                      >
                        {lang.label}
                      </motion.li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </div>


          </div>

          {/* Mobile Menu Button */}
          <button
            className="block lg:hidden text-[#085441] text-2xl"
            onClick={() => setIsOpen(true)}
          >
            <FiMenu />
          </button>
        </div>
      </div>

      {/* ✅ Dark Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={closeDrawer}
        ></div>
      )}

      {/* ✅ Mobile Drawer Working */}
      <div
        className={`fixed top-0 right-0 h-full w-[260px] bg-[#f8fdf4] shadow-lg z-50 transition-transform duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div className="flex justify-between items-center p-4 pt-12 border-b">
          <FiX className="text-xl cursor-pointer" onClick={closeDrawer} />
        </div>

        <div className="flex flex-col p-6 gap-5">
          {navLinks.map((nav) => (
            <Link
              key={nav.path}
              href={nav.path}
              onClick={closeDrawer}
              className={`font-medium text-lg ${pathname === nav.path ? "text-[#085441] font-semibold" : "text-[#595959]"
                } hover:text-[#085441] transition-all duration-300`}
            >
              {nav.name}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;