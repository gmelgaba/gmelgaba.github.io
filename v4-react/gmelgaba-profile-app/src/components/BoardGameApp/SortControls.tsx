import { resolutions } from "../../utils/devices";
import styled from "styled-components";

const ControlsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  gap: 20px;
  margin: 40px 0;

  ${resolutions.mobile} {
    flex-direction: column;
    align-items: stretch;
  }
`;

const FieldGroup = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-bottom: 10px;

  ${resolutions.mobile} {
    margin-bottom: 0;
  }
`;

const Label = styled.label`
  font-size: 13px;
  color: ${({ theme }) => theme.textGray};
  margin-bottom: 4px;
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

const SortWrapper = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.sectionOdd};
  color: ${({ theme }) => theme.text};
  height: 40px;
`;

interface Props {
  playerCount: string;
  onPlayerCountChange: (value: string) => void;
  sortOption: string;
  sortDirection: "asc" | "desc";
  onSortChange: (value: string) => void;
  onSortDirectionChange: (direction: "asc" | "desc") => void;
  durationFilter: string;
  onDurationFilterChange: (value: string) => void;
}

const MAX_NUMBER_OF_PLAYERS = 30;

export const SortControls: React.FC<Props> = ({
  playerCount,
  onPlayerCountChange,
  sortOption,
  sortDirection,
  onSortChange,
  onSortDirectionChange,
  durationFilter,
  onDurationFilterChange,
}) => (
  <ControlsContainer>
    <FieldGroup>
      <Label htmlFor="player-select">Players</Label>
      <SelectInput
        id="player-select"
        value={playerCount}
        onChange={(e) => onPlayerCountChange(e.target.value)}
      >
        <option value="">All players</option>
        {[...Array(MAX_NUMBER_OF_PLAYERS)].map((_, i) => (
          <option key={i + 1} value={i + 1}>
            {i + 1} player{i > 0 ? "s" : ""}
          </option>
        ))}
      </SelectInput>
    </FieldGroup>

    <FieldGroup>
      <Label htmlFor="duration-select">Duration</Label>
      <SelectInput
        id="duration-select"
        value={durationFilter}
        onChange={(e) => onDurationFilterChange(e.target.value)}
      >
        <option value="">All durations</option>
        <option value="very-short">Less than 20m</option>
        <option value="short">Less than 30m</option>
        <option value="medium">30m to 45m</option>
        <option value="long">45m to 1h</option>
        <option value="very-long">More than 1h</option>
      </SelectInput>
    </FieldGroup>

    <FieldGroup>
      <Label htmlFor="sort-select">Sort By</Label>
      <SortWrapper>
        <SelectInput
          id="sort-select"
          value={`${sortOption}${sortDirection}`}
          onChange={(e) => {
            const value = e.target.value;
            const match = value.match(
              /(name|minPlayers|maxPlayers|rating)(asc|desc)/i
            );
            if (match) {
              onSortChange(match[1]);
              onSortDirectionChange(match[2] as "asc" | "desc");
            }
          }}
        >
          <option value="nameasc">Name (A → Z)</option>
          <option value="namedesc">Name (Z → A)</option>
          <option value="ratingasc">Rating (High → Low)</option>
          <option value="ratingdesc">Rating (Low → High)</option>
          <option value="minPlayersasc">Min Players (Low → High)</option>
          <option value="minPlayersdesc">Min Players (High → Low)</option>
        </SelectInput>
      </SortWrapper>
    </FieldGroup>
  </ControlsContainer>
);
