import { PhoneIcon, BellIcon, MapIcon } from "@heroicons/react/16/solid";

const Footer = () => {
  return (
    <div className="mt-8 bg-[#3680F2] pt-9">
      <div className="mx-auto w-full max-w-[1166px] px-4 xl:px-0">
        <div className="flex flex-col justify-between sm:px-[18px] md:flex-row md:px-10 ">
          <div className="md:w-[316px]">
            <h1 className="text-white font-extrabold">
              <span className="text-slate-700">DESA</span>DIGITAL
            </h1>
            <p className="mt-[18px] text-[15px] font-normal text-white/[80%]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos,
              fugit non.
            </p>
          </div>
          <div className="md:w-[316px]">
            <ContactInfo
              icon={PhoneIcon}
              text="+62 81234567890"
              subText="Support Number"
              link="tel:+6281234567890"
            />
            <ContactInfo
              icon={BellIcon}
              text="help@lorem.com"
              subText="Support Email"
              link="mailto:help@lorem.com"
            />
            <ContactInfo
              icon={MapIcon}
              text="Gorontalo, Indonesia"
              subText="Address"
            />
          </div>
          <div className="w-full md:w-1/2 p-4 flex justify-center">
            <div className="rounded-sm overflow-hidden w-full h-[15rem]">
              <iframe
                className="w-full h-full"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243647.3160407063!2d-74.25986568785095!3d40.697670063849574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQxJzUxLjYiTiA3NMKwMTUnMzUuNyJX!5e0!3m2!1sen!2sus!4v1652901957916"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps"></iframe>
            </div>
          </div>
        </div>

        <hr className="mt-[30px] text-white" />
        <div className="flex items-center justify-center pb-8 pt-[9px] md:py-8">
          <p className="text-[10px] font-normal text-white md:text-[12px]">
            © Copyright 2025, All Rights Reserved by AJD Studio
          </p>
        </div>
      </div>
    </div>
  );
};

const ContactInfo = ({ icon: Icon, text, subText, link }) => {
  return (
    <div className="mt-[23px] flex">
      <div className="flex h-[38px] w-[38px] items-center justify-center rounded-[75%]">
        <Icon className="h-10 w-10 text-white sm:h-8 sm:w-8" />
      </div>
      <div className="ml-[18px]">
        {link ? (
          <a
            href={link}
            className="font-Inter text-[14px] font-medium text-white">
            {text}
          </a>
        ) : (
          <span className="font-Inter text-[14px] font-medium text-white">
            {text}
          </span>
        )}
        <p className="font-Inter text-[12px] font-medium text-white">
          {subText}
        </p>
      </div>
    </div>
  );
};

export default Footer;
