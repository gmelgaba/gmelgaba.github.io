import {
  FaGithub,
  FaLinkedin,
  FaSpotify,
  FaStackOverflow,
  FaYoutube,
} from "react-icons/fa";

const socialLinks = [
  {
    url: "https://stackoverflow.com/users/12064160/gonzalo?tab=profile",
    icon: <FaStackOverflow />,
    label: "StackOverflow",
  },
  {
    url: "https://www.linkedin.com/in/gmelgaba/",
    icon: <FaLinkedin />,
    label: "LinkedIn",
  },
  {
    url: "https://github.com/gmelgaba",
    icon: <FaGithub />,
    label: "GitHub",
  },
  {
    url: "https://open.spotify.com/user/0ny35jaa9ga0azi1smsg5h15s?si=WI9AQHRfS0usJCWcv1bENQ",
    icon: <FaSpotify />,
    label: "Spotify",
  },
  {
    url: "https://www.youtube.com/@gmelgaba/shorts",
    icon: <FaYoutube />,
    label: "YouTube",
  },
];

export default socialLinks;
