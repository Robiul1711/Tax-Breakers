import { BsInstagram } from "react-icons/bs"
import { FaFacebook, FaFacebookF, FaLinkedinIn } from "react-icons/fa"
import FooterBackground from "@/assets/images/footer_background.png"
import BlackLogo from "@/assets/images/logo.png"
import WhiteLogo from "@/assets/images/white_logo.png"
import Image from "next/image"
import Link from "next/link"

const footerNav = {
  company: [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Blog", path: "/blog" },
    { name: "FAQ", path: "/faq" },
  ],
  resources: [
    { name: "Features", path: "/features" },
    { name: "Pricing", path: "/pricing" },
    { name: "Log in", path: "/login" },
    { name: "Sign up", path: "/signup" },
  ],
  legal: [
    { name: "Terms of use", path: "/terms-of-use" },
    { name: "Terms & Conditions", path: "/terms-and-conditions" },
    { name: "Privacy Policy", path: "/privacy-policy" },
    { name: "Legal Notice", path: "/legal-notice" },
  ],
};


const Footer = () => {
  return (
    <footer className="bg-[#E7F9DE] lg:m-8 m-4 rounded-[24px] px-8 pt-8 pb-26">
      <div style={{
        backgroundImage: `url(${FooterBackground.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        borderRadius: "20px"
      }}>
        <div className="px-12 py-20 text-center">
          <div className="mb-6 flex justify-center items-center">
            <Image src={WhiteLogo} alt="Logo img" width={219} height={160}/>
          </div>

          <h2 className="text-[48px] font-semibold text-[#FFF]">
            Ready to take your business to the next level?
          </h2>

          <p className="text-[#B0C5C1] text-xl font-medium mt-6 mb-8">
            Sign up for  My Tax Braker today and start exploring the full potential of your data.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <button className="p-4 bg-[#A7EB94] text-[#004D3F] font-medium text-lg rounded-2xl transition-colors cursor-pointer">
              Sign Up Now
            </button>
            <button className="py-4 px-10 bg-[#FAFAFA] text-[#111827] font-medium  text-lg rounded-2xl transition-colors cursor-pointer">
              Contact
            </button>
          </div>
        </div>
      </div>

      <div>
        <div className="mt-[75px]">
          <div className="flex justify-between gap-8">
            {/* Logo and Description */}
            <div className="md:col-span-1">
              <Image src={BlackLogo} alt="Logo" width={219} height={160} />
              <p className="text-lg text-[#161C24] leading-relaxed mt-8 w-1/2">
                The management of revenues the conduct or transaction of money matters generally, especially those affecting the public.
              </p>
            </div>


            <div className="flex gap-22">
              {Object.entries(footerNav).map(([section, links]) => (
                <div key={section}>
                  <h3 className="font-semibold text-[#161C24] text-2xl mb-6 capitalize">{section}</h3>
                  <ul className="space-y-3 text-lg">
                    {links.map((item, index) => (
                      <li key={index}>
                        <Link
                          href={item.path}
                          className="text-[#161C24]/70 hover:text-[#085441] hover:underline transition-colors"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-12 pt-8 border-t border-[#161C24] flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-600">
              Copyright &copy;  <span className="font-semibold text-[#161C24]">2025 My Tax Braker</span> ® All Rights Reserved
            </p>

            <div className="flex gap-3">
              <a href="#" className="w-14 h-14 rounded-full text-[#004D3F] border-2 border-[#004D3F] flex items-center justify-center hover:bg-teal-700 hover:text-white transition-all">
                <FaFacebookF className="w-7 h-7" />
              </a>
              <a href="#" className="w-14 h-14 rounded-full text-[#004D3F] border-2 border-[#004D3F] flex items-center justify-center hover:bg-teal-700 hover:text-white transition-all">
                <BsInstagram className="w-7 h-7" />
              </a>
              <a href="#" className="w-14 h-14 rounded-full  text-[#004D3F] border-2 border-[#004D3F] flex items-center justify-center hover:bg-teal-700 hover:text-white transition-all">
                <FaLinkedinIn className="w-7 h-7" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer >
  )
}

export default Footer