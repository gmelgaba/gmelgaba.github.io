import { resolutions } from "../../utils/devices";
import styled from "styled-components";

const SortWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Label = styled.label`
  font-size: 14px;
  color: ${({ theme }) => theme.textGray};

  ${resolutions.mobile} {
    display: none;
  }
`;

const Select = styled.select`
  height: 36px;
  padding: 0 10px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.sectionOdd};
  color: ${({ theme }) => theme.text};

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.primaryColor};
  }
`;

interface Props {
  sortOption: string;
  sortDirection: "asc" | "desc";
  onSortChange: (value: string) => void;
  onSortDirectionChange: (value: "asc" | "desc") => void;
}

export const SortDropdown: React.FC<Props> = ({
  sortOption,
  sortDirection,
  onSortChange,
  onSortDirectionChange,
}) => {
  return (
    <SortWrapper>
      <Label htmlFor="sort-select">Sort By:</Label>
      <Select
        id="sort-select"
        value={`${sortOption}${sortDirection}`}
        onChange={(e) => {
          const match = /(name|minPlayers|maxPlayers|rating)(asc|desc)/i.exec(
            e.target.value
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
      </Select>
    </SortWrapper>
  );
};
