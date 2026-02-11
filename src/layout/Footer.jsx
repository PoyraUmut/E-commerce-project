import {
  Facebook,
  Instagram,
  Twitter,
  Phone,
  MapPin,
  Mail,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#252B42] text-white px-6 py-20">
      <div className="max-w-7xl mx-auto flex flex-col gap-16">

        {/* TOP */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h2 className="text-2xl font-bold">
              Consulting Agency For Your Business
            </h2>
            <p className="text-sm mt-2">
              the quick fox jumps over the lazy dog
            </p>
          </div>

          <button className="bg-[#23A6F0] text-white px-8 py-3 rounded-md text-sm font-semibold">
            Contact Us
          </button>
        </div>

        {/* LINKS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-10 text-sm">
          {[
            {
              title: "Company Info",
              items: ["About Us", "Carrier", "We are hiring", "Blog"],
            },
            {
              title: "Legal",
              items: ["About Us", "Carrier", "We are hiring", "Blog"],
            },
            {
              title: "Features",
              items: [
                "Business Marketing",
                "User Analytic",
                "Live Chat",
                "Unlimited Support",
              ],
            },
            {
              title: "Resources",
              items: ["IOS & Android", "Watch a Demo", "Customers", "API"],
            },
          ].map((col, i) => (
            <div key={i}>
              <h4 className="font-semibold mb-4">
                {col.title}
              </h4>
              <ul className="flex flex-col gap-3">
                {col.items.map((item, idx) => (
                  <li
                    key={idx}
                    className="cursor-pointer hover:opacity-80 transition"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* GET IN TOUCH */}
          <div>
            <h4 className="font-semibold mb-4">
              Get In Touch
            </h4>
            <ul className="flex flex-col gap-4">
              <li className="flex items-center gap-3">
                <Phone size={16} />
                (480) 555-0103
              </li>
              <li className="flex items-center gap-3">
                <MapPin size={16} />
                4517 Washington Ave.
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} />
                debra.holt@example.com
              </li>
            </ul>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs">
            Made With Love By Finland All Right Reserved
          </p>

          <div className="flex gap-5 text-[#23A6F0]">
            <Facebook size={20} />
            <Instagram size={20} />
            <Twitter size={20} />
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
