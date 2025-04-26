import { FaTimes } from "react-icons/fa";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: center;
  justify-content: flex-start;
`;

const FilterChip = styled.button`
  display: flex;
  align-items: center;
  gap: 6px;
  background-color: ${({ theme }) => theme.sectionEven};
  border: 1px solid ${({ theme }) => theme.primaryColor};
  color: ${({ theme }) => theme.primaryColor};
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 13px;
  cursor: pointer;
  transition: 0.2s ease;

  svg {
    font-size: 10px;
  }

  &:hover {
    background-color: ${({ theme }) => theme.primaryColor};
    color: ${({ theme }) => theme.textLight};

    svg {
      color: ${({ theme }) => theme.textLight};
    }
  }
`;

const ClearAll = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.textGray};
  font-size: 13px;
  cursor: pointer;
  padding-left: 0 !important;

  &:hover {
    text-decoration: underline;
  }
`;

interface Props {
  playerCount: string;
  durationFilter: string;
  gameCategory: string[];
  onClearFilter: (
    type: "players" | "duration" | "category" | "all",
    value?: string
  ) => void;
}

export const AppliedFilters: React.FC<Props> = ({
  playerCount,
  durationFilter,
  gameCategory,
  onClearFilter,
}) => {
  const hasFilters =
    !!playerCount || !!durationFilter || gameCategory.length > 0;

  if (!hasFilters) return <Wrapper />;

  return (
    <Wrapper>
      <ClearAll onClick={() => onClearFilter("all")}>
        Clear all filters
      </ClearAll>
      {playerCount && (
        <FilterChip onClick={() => onClearFilter("players")}>
          Players: {playerCount} <FaTimes />
        </FilterChip>
      )}

      {durationFilter && (
        <FilterChip onClick={() => onClearFilter("duration")}>
          Duration: {durationFilter.replace("-", "–")} <FaTimes />
        </FilterChip>
      )}

      {gameCategory.map((cat) => (
        <FilterChip key={cat} onClick={() => onClearFilter("category", cat)}>
          {cat} <FaTimes />
        </FilterChip>
      ))}
    </Wrapper>
  );
};
