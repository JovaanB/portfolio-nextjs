import {
  SiVisualstudiocode,
  SiSublimetext,
  SiMicrosoftedge,
  SiGooglechrome,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiVercel,
  SiPrettier,
  SiPnpm,
  SiYarn,
  SiFigma,
  SiInsomnia,
  SiBitwarden,
  SiSpotify,
  SiObsstudio,
  SiGrammarly,
} from "react-icons/si";
import {
  BsFillPaletteFill,
  BsFillTerminalFill,
  BsWindows,
  BsGithub,
} from "react-icons/bs";
import { FaGitAlt, FaSearch } from "react-icons/fa";

import SVG from "@components/SVG";

const utilities = {
  title: "Utilities",
  description:
    "In case you are wondering What tech I use, Here's the list of what tech I'm currently using for coding on the daily basis. This list is always changing.",
  lastUpdate: "Oct 19, 2022",
  system: {
    title: "System",
    data: [
      {
        name: "VSCode",
        description: "Primary Code editor",
        Icon: SiVisualstudiocode,
        link: "https://code.visualstudio.com/download",
      },
      {
        name: "Sublime Text",
        description: "Text editor",
        Icon: SiSublimetext,
        link: "https://www.techspot.com/downloads/5546-sublime-text.html",
      },
      {
        name: "Oh-my-zsh",
        description: "Terminal Theme",
        Icon: BsFillTerminalFill,
        link: "https://ohmyz.sh/",
      },
      {
        name: "Chrome",
        description: "Secondary Browser",
        Icon: SiGooglechrome,
        link: "https://www.google.com/chrome",
      },
    ],
  },

  tools: {
    title: "Coding Tools",
    data: [
      {
        name: "React.js",
        description: "Primary Front-end library",
        Icon: SiReact,
        link: "https://reactjs.org/",
      },
      {
        name: "Next.js",
        description: "Primary Web Development Framework",
        Icon: SiNextdotjs,
        link: "https://nextjs.org/",
      },
      {
        name: "TailwindCSS",
        description: "For styling the fron-end",
        Icon: SiTailwindcss,
        link: "https://tailwindcss.com/",
      },
      {
        name: "Vercel",
        description: "Hosting for Projects",
        Icon: SiVercel,
        link: "http://vercel.com/",
      },
      {
        name: "Prettier",
        description: "For Code formatting",
        Icon: SiPrettier,
        link: "https://prettier.io/",
      },
      {
        name: "Git",
        description: "Version Control",
        Icon: FaGitAlt,
        link: "https://git-scm.com/downloads",
      },
      {
        name: "yarn",
        description: "Alternative Package Manager",
        Icon: SiYarn,
        link: "https://classic.yarnpkg.com/lang/en/docs/install/",
      },
      {
        name: "Figma",
        description: "Primary Design tool",
        Icon: SiFigma,
        link: "https://www.figma.com/downloads/",
      },
    ],
  },

  software: {
    title: "Software/Applications",
    data: [
      {
        name: "Bitwarden",
        description: "Password Manager to manage all the login",
        Icon: SiBitwarden,
        link: "https://bitwarden.com/",
      },
      {
        name: "Spotify",
        description: "To Listen Music",
        Icon: SiSpotify,
        link: "https://www.spotify.com/us/download/windows/",
      },
      {
        name: "Grammarly",
        description: "Typing assistant that reviews spelling, grammar, etc.",
        Icon: SiGrammarly,
        link: "https://www.grammarly.com/",
      },
      {
        name: "Everything Search",
        description: "For Quick searching in Windows",
        Icon: FaSearch,
        link: "https://www.voidtools.com/downloads/",
      },
      {
        name: "Raindrop.io",
        description: "Bookmark Manager",
        Icon: SVG.RainDrop,
        link: "https://raindrop.io/",
      },
    ],
  },
};

export default utilities;
