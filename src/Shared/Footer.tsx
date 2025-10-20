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
    <footer className="bg-[#E7F9DE] lg:m-8 m-4 rounded-[24px] md:px-8 px-4 pt-8 lg:pb-26 pb-12">
      <div style={{
        backgroundImage: `url(${FooterBackground.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        borderRadius: "20px"
      }}>
        <div className="mg:px-12 px-6 md:py-20 py-10 text-center">
          <div className="mb-6 flex justify-center items-center">
            <Image className="md:w-[219px] w-[100px] h-full" src={WhiteLogo} alt="Logo img" width={219} height={160}/>
          </div>

          <h2 className="text-3xl md:text-[36px] lg:text-[48px] font-semibold text-[#FFF]">
            Ready to take your business to the next level?
          </h2>

          <p className="text-[#B0C5C1] md:text-xl font-medium mt-6 mb-8">
            Sign up for  My Tax Braker today and start exploring the full potential of your data.
          </p>

          <div className="flex gap-4 justify-center">
            <button className="md:p-4 p-2 bg-[#A7EB94] hover:bg-[#FAFAFA] text-[#004D3F] hover:text-[#111827] font-medium text-lg rounded-2xl transition-colors cursor-pointer">
              Sign Up Now
            </button>
            <button className="md:py-4 md:px-10 py-2 px-4 bg-[#FAFAFA] hover:bg-[#A7EB94] text-[#111827] hover:text-[#004D3F] font-medium  text-lg rounded-2xl transition-colors cursor-pointer">
              Contact
            </button>
          </div>
        </div>
      </div>

      <div>
        <div className="md:mt-[75px] mt-[30px]">
          <div className="xl:flex justify-between gap-8">
            {/* Logo and Description */}
            <div className="lg:col-span-1">
              <Image src={BlackLogo} alt="Logo" width={219} height={160} />
              <p className="text-lg text-[#161C24] leading-relaxed mt-8 xl:w-1/2">
                The management of revenues the conduct or transaction of money matters generally, especially those affecting the public.
              </p>
            </div>


            <div className="flex md:flex-row flex-col md:gap-22 gap-4 xl:mt-0 mt-6">
              {Object.entries(footerNav).map(([section, links]) => (
                <div key={section}>
                  <h3 className="font-semibold text-[#161C24] lg:text-2xl text-xl md:mb-6 mb-3 capitalize">{section}</h3>
                  <ul className="space-y-3 md:text-lg tex-sm">
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
          <div className="md:mt-12 mt-6 md:pt-8 pt-4 border-t border-[#161C24] flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-600">
              Copyright &copy;  <span className="font-semibold text-[#161C24]">2025 My Tax Braker</span> ® All Rights Reserved
            </p>

            <div className="flex gap-3">
              <a href="#" className="xl:w-14 lg:w-12 w-10 xl:h-14 lg:h-12 h-10 rounded-full text-[#004D3F] border-2 border-[#004D3F] flex items-center justify-center hover:bg-[#004D3F] hover:text-white transition-all">
                <FaFacebookF className="lg:w-7 w-4 lg:h-7 h-4" />
              </a>
              <a href="#" className="xl:w-14 lg:w-12 w-10 xl:h-14 lg:h-12 h-10 rounded-full text-[#004D3F] border-2 border-[#004D3F] flex items-center justify-center hover:bg-[#004D3F] hover:text-white transition-all">
                <BsInstagram className="lg:w-7 w-4 lg:h-7 h-4" />
              </a>
              <a href="#" className="xl:w-14 lg:w-12 w-10 xl:h-14 lg:h-12 h-10 rounded-full  text-[#004D3F] border-2 border-[#004D3F] flex items-center justify-center hover:bg-[#004D3F] hover:text-white transition-all">
                <FaLinkedinIn className="lg:w-7 w-4 lg:h-7 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer >
  )
}

export default Footer