import React from "react";
import {BsInfoSquare,BsBuilding} from "react-icons/bs"
import {MdOutlineEmojiEvents,MdOutlineEventAvailable} from 'react-icons/md'
import {IoTelescopeSharp} from 'react-icons/io5'
import {IoMdCall} from 'react-icons/io'
import {TfiGallery} from 'react-icons/tfi'
import {VscFeedback} from 'react-icons/vsc'
import {GoMail} from 'react-icons/go'



const sublinks = [
  {
    page: "about us",
    links: [
      { label: "About", icon: <BsInfoSquare />, url: "about" },
      { label: "Vision & Mission", icon: <IoTelescopeSharp />, url: "vision" },
      { label: "Achivements", icon: <MdOutlineEmojiEvents />, url: "achivements" },
    ],
  },
  {
    page: "gallery",
    links: [
      { label: "Events", icon: <MdOutlineEventAvailable/>, url: "events" },
      { label: "Infrastructure", icon: <BsBuilding />, url: "infra" },
      { label: "Image Gallery", icon: <TfiGallery />, url: "gallery" },
      { label: "Testinomials", icon: <VscFeedback />, url: "testinomials" },
    ],
  },
  {
    page: "contact us",
    links: [
      { label: "contact form", icon: <GoMail />, url: "contact_form" },
      { label: "contact details", icon: <IoMdCall/>, url: "contact-detailsss" },
    ],
  },
];

export default sublinks;
