import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer className="py-20 bg-[#1F2937] text-neutral-content">
        <div className="w-[85%] mx-auto place-items-center footer">
          <aside>
            <h6 className="font-bold text-xl">Contact US</h6>
            <p className="mt-4">
              123 ABS Street, Uni 21, Bangladesh <br /> +88 123456789 <br /> Mon
              - Fri: 08:00 - 22:00 <br /> Sat - Sun: 10:00 - 23:00
            </p>
          </aside>
          <nav>
            <h6 className="font-bold text-xl">Follow US</h6>
            <div className="flex mt-5 justify-center items-center gap-4">
              <FaFacebook size={30} />
              <FaInstagram size={30} />
              <FaTwitter size={30} />
            </div>
          </nav>
        </div>
      </footer>
      <footer className="footer footer-center p-4 bg-[#111827] text-white">
        <aside>
          <p>Copyright © CulinaryCloud. All rights reserved.</p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
