import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
// category icons
import { FaServer } from "react-icons/fa";
import { PiBracketsCurlyBold } from "react-icons/pi";
import { MdUnfoldMore } from "react-icons/md";
// frontend icons
import { FaHtml5, FaCss3Alt, FaReact, FaWordpressSimple } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTailwindcss } from "react-icons/si";
//backend icons
import { FaNodeJs } from "react-icons/fa";
import { SiDjango, SiMysql, SiMongodb, SiExpress, SiTypescript } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";

const Skills = () => {
  const content = [
    {
      category: "Frontend",
      icon: <PiBracketsCurlyBold className="text-2xl" />,
      skills: [
        { icon: <FaHtml5 className="text-4xl" />, skill: "HTML" },
        { icon: <FaCss3Alt className="text-4xl" />, skill: "CSS" },
        { icon: <IoLogoJavascript className="text-4xl" />, skill: "JavaScript" },
        { icon: <SiTypescript className="text-4xl" />, skill: "TypeScript" },
        { icon: <FaReact className="text-4xl" />, skill: "ReactJS" },
        { icon: <SiTailwindcss className="text-4xl" />, skill: "TailwindCSS" },
      ],
    },
    {
      category: "Backend",
      icon: <FaServer className="text-xl" />,
      skills: [
        { icon: <SiExpress className="text-4xl" />, skill: "ExpressJs" },
        { icon: <SiDjango className="text-4xl" />, skill: "Django" },
        { icon: <SiMysql className="text-4xl" />, skill: "MySQL" },
        { icon: <BiLogoPostgresql className="text-4xl" />, skill: "PostgreSQL" },
        { icon: <SiMongodb className="text-4xl" />, skill: "MongoDB" },
      ],
    },
    {
      category: "Other",
      icon: <MdUnfoldMore className="text-2xl" />,
      skills: [
        { icon: <FaWordpressSimple className="text-4xl"/>, skill: "Wordpress" },
      ],
    },
  ];
  return (
    <div className="my-28 w-[100%] flex justify-center">
      <div className="md:text-center grid gap-5 w-[100%]">
        <h1 className="text-2xl md:text-3xl text-primary mb-5 md:mb-10" data-aos="fade-up" data-aos-delay="300">
          SKILLS
        </h1>
        <div className="w-[100%]">
          <Accordion
            type="single"
            collapsible
            className="md:w-[60%] mx-auto"
            data-aos="fade-up" data-aos-delay="500"
          >
            {content.map((item, index) => (
              <AccordionItem 
                value={`item-${index}`} 
                key={index} 
                className=""
              >
                <AccordionTrigger className="px-5 font-bold uppercase text-lg md:text-xl">
                  <div className="flex gap-2">
                    <span className="my-auto">{item.icon}</span>
                    {item.category}
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  {item.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="flex pl-10 gap-5 my-2 text-primary hover:bg-primary/20 rounded-md py-2">
                      <span className="rotate-z-360">{skill.icon}</span>
                      <p className="my-auto">{skill.skill}</p>
                    </div>
                  ))}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default Skills;
