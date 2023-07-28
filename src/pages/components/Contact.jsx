import React from "react";
import { BiLogoGmail, BiLogoInstagramAlt } from "react-icons/bi";
import { PiBehanceLogoBold } from "react-icons/pi";
import { FaLinkedinIn, FaFacebookF, FaStar } from "react-icons/fa";
import Link from "next/link";

const Contact = () => {
  const contacts = [
    {
      icon: BiLogoGmail,
      iconName: "Mail",
      value: "anhthutr237@gmail.com",
      ref: "mailto: anhthutr237@gmail.com",
    },
    {
      icon: PiBehanceLogoBold,
      iconName: "Behance",
      value: "anhthutr237",
      ref: "https://www.behance.net/anhthutr2307",
    },
    {
      icon: FaLinkedinIn,
      iconName: "LinkedIn",
      value: "Trần Thư",
      ref: "https://www.linkedin.com/in/tr%E1%BA%A7n-th%C6%B0-96551a254/",
    },
    {
      icon: FaFacebookF,
      iconName: "Facebook",
      value: "Óp La",
      ref: "https://www.facebook.com/banh.tiu.map.dittt",
    },
    {
      icon: BiLogoInstagramAlt,
      iconName: "Instagram",
      value: "mikumio_",
      ref: "https://www.instagram.com/mikumio_/",
    },
  ];

  return (
    <div className="flex flex-col py-20 items-center relative">
      <div id="contacts" className="absolute h-5 w-full -top-[5rem]"></div>
      <h1 className="self-center text-5xl font-semibold">FIND ME AT</h1>
      <div className="w-[60%] mt-16 flex gap-10">
        {contacts.map((contact) => (
          <div className="flex gap-3 flex-1" key={contact.iconName}>
            <Link
              href={contact.ref}
              className="h-[4.5rem] aspect-square rounded-full flex items-center justify-center shadow-[0_8px_30px_rgb(0,0,0,0.12)]"
            >
              <contact.icon className="w-[45%] h-auto" />
            </Link>
            <div className="flex flex-col justify-center text-lg">
              <h1 className="font-bold">{contact.iconName}</h1>
              <p>{contact.value}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-24 flex flex-col items-center gap-4">
        <FaStar className="text-[2rem]" />
        <p className="text-2xl font-medium">THANK YOU {"<"}3</p>
      </div>
    </div>
  );
};

export default Contact;
