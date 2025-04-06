import { FaArrowDown, FaArrowUp } from "react-icons/fa";

import { resolutions } from "../../utils/devices";
import styled from "styled-components";

const ControlsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 12px;
  margin: 40px 0;

  ${resolutions.mobile} {
    flex-direction: column;
    align-items: stretch;
    gap: 16px;
  }
`;

const MobileOnly = styled.div`
  display: none;
  ${resolutions.mobile} {
    display: block;
    width: 100%;
  }
`;

const DesktopOnly = styled.div`
  display: block;
  ${resolutions.mobile} {
    display: none;
  }
`;

const SelectInput = styled.select`
  height: 40px;
  padding: 0 12px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.sectionOdd};
  color: ${({ theme }) => theme.text};
  width: 100%;

  &:focus {
    outline: none;
  }
`;

const LeftControls = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  ${resolutions.mobile} {
    flex-direction: column;
    align-items: stretch;
    width: 100%;
  }
`;

const RightControls = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;

  ${resolutions.mobile} {
    width: 100%;
    justify-content: flex-start;
  }
`;

const Input = styled.input`
  height: 40px;
  padding: 0 12px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.sectionOdd};
  color: ${({ theme }) => theme.text};

  ${resolutions.mobile} {
    font-size: 16px;
    width: 100%;
  }
`;

const Button = styled.button`
  height: 40px;
  padding: 0 24px;
  font-size: 14px;
  border-radius: 20px;
  border: none;
  background: ${({ theme }) => theme.gradient};
  color: white;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.gradientInverse};
  }

  ${resolutions.mobile} {
    width: 100%;
  }
`;

const SortWrapper = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.sectionOdd};
  color: ${({ theme }) => theme.text};
  height: 40px;

  ${resolutions.mobile} {
    width: 100%;
  }
`;

const Select = styled.select`
  font-size: 14px;
  padding: 8px 12px;
  border: none;
  background: transparent;
  color: inherit;
  height: 100%;
  appearance: none;
  cursor: pointer;

  &:focus {
    outline: none;
  }

  ${resolutions.mobile} {
    width: 100%;
  }
`;

const IconButton = styled.button`
  background: none;
  border: none;
  padding: 0 10px;
  font-size: 16px;
  color: ${({ theme }) => theme.primaryColor};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  height: 100%;
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.text};
  }
`;

interface Props {
  playerCount: string;
  onPlayerCountChange: (value: string) => void;
  onFilter: () => void;
  sortOption: string;
  sortDirection: "asc" | "desc";
  onSortChange: (value: string) => void;
  onToggleDirection: () => void;
}

const MAX_NUMBER_OF_PLAYERS = 30;

export const SortControls: React.FC<Props> = ({
  playerCount,
  onPlayerCountChange,
  onFilter,
  sortOption,
  sortDirection,
  onSortChange,
  onToggleDirection,
}) => (
  <ControlsContainer>
    <LeftControls>
      <DesktopOnly>
        <Input
          type="number"
          placeholder="Number of players"
          value={playerCount}
          onChange={(e) => {
            const val = parseInt(e.target.value, 10);
            if (val >= 0 || e.target.value === "") {
              onPlayerCountChange(e.target.value);
            }
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") onFilter();
          }}
          min={1}
        />
      </DesktopOnly>

      <MobileOnly>
        <SelectInput
          value={playerCount}
          onChange={(e) => onPlayerCountChange(e.target.value)}
        >
          <option value="">Select players</option>
          {[...Array(MAX_NUMBER_OF_PLAYERS)].map((_, i) => (
            <option key={i + 1} value={i + 1}>
              {i + 1} player{i > 0 ? "s" : ""}
            </option>
          ))}
        </SelectInput>
      </MobileOnly>

      <Button onClick={onFilter}>Filter Games</Button>
    </LeftControls>

    <RightControls>
      <SortWrapper>
        <Select
          value={sortOption}
          onChange={(e) => onSortChange(e.target.value)}
        >
          <option value="name">Name</option>
          <option value="minPlayers">Min Players</option>
          <option value="maxPlayers">Max Players</option>
          <option value="rating">Rating</option>
        </Select>
        <IconButton
          onClick={onToggleDirection}
          aria-label="Toggle sort direction"
        >
          {sortDirection === "asc" ? <FaArrowUp /> : <FaArrowDown />}
        </IconButton>
      </SortWrapper>
    </RightControls>
  </ControlsContainer>
);
