import { resolutions } from "../utils/devices";
import styled from "styled-components";

const ToolsContainer = styled.div`
  margin: 0 auto;
  padding: 32px 0;
  font-size: 1.1rem;
`;

const ToolsTitle = styled.h2``;

const ToolsSubtitle = styled.p`
  max-width: 70%;
  margin: 0 auto 40px;
  text-align: center;
`;

const ToolList = styled.div`
  ${resolutions.mobile} {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 32px;
  }
  ${resolutions.tabletAndGreater} {
    grid-template-columns: repeat(5, 1fr);
    gap: 20px;
    overflow-x: auto;
    padding: 10px 20px;
    perspective: 1000px;
    display: grid;
  }
`;

const ToolCard = styled.div`
  display: flex;
  cursor: pointer;
  flex-direction: column;
  align-items: center;
  padding: 24px;
  border-radius: 15px;
  background-color: ${({ theme }) => theme.sectionEven};
  transition: transform 0.3s ease-in-out;
  min-width: 180px;
  text-align: center;
  will-change: transform;
  ${resolutions.mobile} {
    width: 70%;
    margin: 0 auto;
  }

  &:hover {
    transform: scale(1.05);
    z-index: 10;
  }
`;

const ToolImage = styled.img`
  ${resolutions.mobile} {
    width: 100px;
  }
  width: 80px;
  height: auto;
`;

const ToolName = styled.h3`
  font-size: 1.3rem;
  font-weight: bold;
  margin-bottom: 8px;
  margin-top: 16px;
  color: ${({ theme }) => theme.primaryColor};
`;

const ToolDescription = styled.p`
  margin: 0;
  font-size: 12px;
  font-weight: normal;

  ${resolutions.mobile} {
    font-size: 15px;
  }
`;

const toolsContent = [
  {
    url: "https://code.visualstudio.com/",
    imagePath: "/images/tools/vscode.png",
    name: "VS Code",
    description:
      "I've been jumping a lot between editors and for me, VS Code is the best choice out there. It's a great editor with a great community and tons of useful extensions to add.",
  },
  {
    url: "https://www.warp.dev/",
    imagePath: "/images/tools/warp.png",
    name: "Warp",
    description:
      "This is by far the best terminal option out there. Warp is a fully native, GPU-accelerated, Rust-based terminal, it's currently in beta and only has support for Mac, but you should try it if able.",
  },
  {
    url: "https://www.gitkraken.com/",
    imagePath: "/images/tools/gitkraken.png",
    name: "GitKraken",
    description:
      "I used to live in the terminal for Git tasks, but GitKraken made me rethink that. It's clean, powerful, and great for visualizing branches when things start to get wild. Now I reach for it whenever I need clarity during chaotic merges.",
  },
  {
    url: "https://dbeaver.io/",
    imagePath: "/images/tools/dbeaver.png",
    name: "DBeaver",
    description:
      "When it comes to databases, DBeaver is my go-to. It's lightweight, supports pretty much every DB under the sun, and has saved me countless hours when digging through messy data or writing quick queries.",
  },
  {
    url: "https://www.postman.com/",
    imagePath: "/images/tools/postman.png",
    name: "Postman",
    description:
      "Postman has been my API wingman for years. Whether I'm poking a new endpoint or debugging weird edge cases, it's the fastest way to test and document APIs.",
  },
];

const Tools: React.FC = () => {
  const handleCardClick = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <ToolsContainer>
      <ToolsTitle className="section-title">Developer Tools</ToolsTitle>
      <ToolsSubtitle>
        Over the years I've been trying different dev tools in order to make my
        life easier/prettier while working. Here is a list of the Developer
        tools I like the most.
      </ToolsSubtitle>
      <ToolList>
        {toolsContent.map((tool) => (
          <ToolCard key={tool.name} onClick={() => handleCardClick(tool.url)}>
            <ToolImage src={tool.imagePath} alt={tool.name} />
            <ToolName>{tool.name}</ToolName>
            <ToolDescription>{tool.description}</ToolDescription>
          </ToolCard>
        ))}
      </ToolList>
    </ToolsContainer>
  );
};

export default Tools;
