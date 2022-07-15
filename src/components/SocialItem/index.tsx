import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { MdMarkEmailUnread } from "react-icons/md";
import { SocialContent } from "./styles";

interface SocialItemProps {
  name:
    | "github"
    | "linkedin"
    | "instagram"
    | "twitter"
    | "facebook"
    | "twitch"
    | "email"
    | "phone"
    | "site";
  title: string;
  link: string;
}

export function SocialItem({ name, title, link }: SocialItemProps) {
  return (
    <SocialContent href={link} target={"_blank"}>
      {name === "github" && <FaGithub size={"1.8rem"} />}
      {name === "linkedin" && <FaLinkedin size={"1.8rem"} />}
      {name === "instagram" && <FaInstagram size={"1.8rem"} />}
      {name === "email" && <MdMarkEmailUnread size={"1.8rem"} />}
      <span>{title}</span>
    </SocialContent>
  );
}
