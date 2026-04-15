import { Instagram, Facebook, Twitter, Youtube, MapPin, Phone } from "lucide-react";
import logo from "@/assets/rmt-logo.jpeg";

const socialLinks: {
  icon: React.ElementType;
  url: string;
  color: string;
}[] = [
  {
    icon: Instagram,
    url: "https://www.instagram.com/rmt_fitness_and_fineart",
    color: "#E4405F",
  },
  {
    icon: Facebook,
    url: "https://www.facebook.com/your_page",
    color: "#1877F2",
  },
  {
    icon: Twitter,
    url: "https://twitter.com/your_handle",
    color: "#1DA1F2",
  },
  {
    icon: Youtube,
    url: "https://www.youtube.com/@your_channel",
    color: "#FF0000",
  },
];

const Footer = () => (
  <footer className="bg-[#060b18] border-t border-white/10 py-16 px-4">
    <div className="container mx-auto grid md:grid-cols-3 gap-16 items-start">

      {/* LEFT */}
      <div>
        {/* Circular Logo */}
        <div className="mb-6">
          <div className="w-14 h-14 rounded-full overflow-hidden shadow-lg border border-white/20 hover:scale-110 hover:shadow-blue-500/30 transition-all duration-300">
            <img
              src={logo}
              alt="RMT Fitness"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
          The Pride of Ahmednagar. Transform your body, build your confidence with us.
        </p>
      </div>

      {/* CENTER */}
      <div>
        <h4 className="text-blue-500 tracking-widest text-sm mb-5 font-semibold">
          QUICK LINKS
        </h4>

        <ul className="space-y-3">
          {["Home", "About", "Services", "Gallery", "Contact"].map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="
                  text-gray-300 
                  hover:text-blue-400 
                  transition-all duration-300 
                  relative group inline-block
                "
              >
                {link}

                {/* Underline */}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* RIGHT */}
      <div>
        <h4 className="text-blue-500 tracking-widest text-sm mb-5 font-semibold">
          CONTACT
        </h4>

        <div className="space-y-4 text-sm text-gray-400">

          <p className="flex items-start gap-3 hover:text-white transition">
            <MapPin size={18} className="text-blue-500 mt-0.5" />
            Thube Business Center, Link Rd, Ahmednagar
          </p>

          <p className="flex items-center gap-3 hover:text-white transition">
            <Phone size={18} className="text-blue-500" />
            <span>
              9075156599 <br />
              7208080815
            </span>
          </p>
        </div>

        {/* Social Icons */}
        <div className="flex gap-4 mt-6">
          {socialLinks.map((item, i) => {
            const Icon = item.icon;

            return (
              <a
                key={i}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  w-10 h-10 rounded-full 
                  border border-white/20 
                  flex items-center justify-center 
                  transition-all duration-300
                  hover:scale-110
                "
                style={{
                  color: item.color,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = item.color;
                  e.currentTarget.style.color = "#fff";
                  e.currentTarget.style.borderColor = item.color;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent";
                  e.currentTarget.style.color = item.color;
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)";
                }}
              >
                <Icon size={18} />
              </a>
            );
          })}
        </div>
      </div>

    </div>

    {/* Bottom Line */}
    <div className="container mx-auto mt-12 pt-6 border-t border-white/10 text-center">
      <p className="text-xs text-gray-500 tracking-wide">
        © 2026 RMT Fitness. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
