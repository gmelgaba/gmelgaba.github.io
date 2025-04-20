import { FaLink } from "react-icons/fa";
import { resolutions } from "../../utils/devices";
import styled from "styled-components";
import { useState } from "react";

const Container = styled.div`
  ${resolutions.mobile} {
    position: initial;
  }
`;

const IconButton = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.primaryColor};
  font-size: 18px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 6px;
  transition: color 0.3s ease;
  width: 100%;
  padding: 0;
  margin-bottom: 20px;
  text-align: left;
  font-weight: 400;

  ${resolutions.mobile} {
    display: block;
    span {
      margin-left: 8px;
      line-height: 20px;
      font-weight: 400;
    }
  }
`;

const Tooltip = styled.span`
  font-size: 15px;
  color: ${({ theme }) => theme.navText};
`;

interface Props {
  username: string;
  playerCount: string;
  durationFilter: string;
  gameCategoryFilter: string;
  sortOption: string;
  sortDirection: "asc" | "desc";
}

const ShareButton: React.FC<Props> = ({
  username,
  playerCount,
  durationFilter,
  gameCategoryFilter,
  sortOption,
  sortDirection,
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const params = new URLSearchParams();
    if (username) params.set("username", username);
    if (playerCount) params.set("players", playerCount);
    if (durationFilter) params.set("duration", durationFilter);
    if (gameCategoryFilter) params.set("gameCategory", gameCategoryFilter);
    if (sortOption && sortDirection)
      params.set("sorting", `${sortOption}${sortDirection}`);
    const url = `${window.location.origin}/boardgame-app?${params.toString()}`;
    navigator.clipboard.writeText(url).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 4000);
    });
  };

  return (
    <Container>
      <IconButton onClick={handleCopy} title="Share Search Results">
        <FaLink />
        {copied ? (
          <Tooltip>Link Copied ✓</Tooltip>
        ) : (
          <Tooltip>Share Search Results</Tooltip>
        )}
      </IconButton>
    </Container>
  );
};

export default ShareButton;
