import { FaChevronRight } from "react-icons/fa";
import styled from "styled-components";
import { useState } from "react";

const SliderRow = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 12px 16px;
  background-color: ${({ theme }) => theme.sectionEven};
`;

const InlineSlider = styled.input`
  flex: 1;
  appearance: none;
  height: 4px;
  background: ${({ theme }) => theme.primaryColor}55;
  border-radius: 2px;
  outline: none;
  cursor: pointer;

  &::-webkit-slider-thumb {
    appearance: none;
    width: 16px;
    height: 16px;
    background: ${({ theme }) => theme.primaryColor};
    border-radius: 50%;
    border: none;
  }
`;

const InlineInput = styled.input`
  width: 60px;
  background-color: ${({ theme }) => theme.sectionOdd};
  color: ${({ theme }) => theme.text};
  padding: 6px 8px;
  font-size: 14px;
  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.textGray};
  text-align: center;
`;

const Section = styled.div`
  margin-bottom: 16px;
  background-color: ${({ theme }) => theme.sectionOdd};
  border-radius: 6px;
  overflow: hidden;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 16px;
  font-weight: bold;
  font-size: 14px;
  color: ${({ theme }) => theme.text};
  cursor: pointer;
  user-select: none;
`;

const ChevronIcon = styled(FaChevronRight)<{ open: boolean }>`
  margin-right: 8px;
  transition: transform 0.3s ease;
  transform: rotate(${(props) => (props.open ? "90deg" : "0deg")});
  color: ${({ theme }) => theme.primaryColor};
`;

const Collapsible = styled.div<{ open: boolean }>`
  overflow: hidden;
  transition: max-height 0.3s ease;
  max-height: ${({ open }) => (open ? "1000px" : "0")};
`;

const ChipList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  padding: 12px 16px;
  background-color: ${({ theme }) => theme.sectionEven};
`;

const Chip = styled.button<{ selected: boolean }>`
  padding: 6px 14px;
  border-radius: 20px;
  font-size: 13px;
  border: 1px solid
    ${({ selected, theme }) => (selected ? theme.primaryColor : theme.textGray)};
  background-color: ${({ selected, theme }) =>
    selected ? theme.primaryColor : "transparent"};
  color: ${({ selected, theme }) => (selected ? theme.textLight : theme.text)};
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: ${({ selected, theme }) =>
      selected ? theme.primaryColor : theme.sectionOdd};
  }
`;

interface Props {
  playerCount: string;
  onPlayerCountChange: (value: string) => void;
  durationFilter: string;
  onDurationFilterChange: (value: string) => void;
  gameCategory: string[];
  onGameCategoryChange: (value: string[]) => void;
  availableGameCategories: string[];
}

export const FilterSidebar: React.FC<Props> = ({
  playerCount,
  onPlayerCountChange,
  durationFilter,
  onDurationFilterChange,
  gameCategory,
  onGameCategoryChange,
  availableGameCategories,
}) => {
  const [collapsedSections, setCollapsedSections] = useState<
    Record<string, boolean>
  >({
    players: false,
    duration: false,
    category: false,
  });

  const toggleSection = (key: string) => {
    setCollapsedSections((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <>
      <Section>
        <Header onClick={() => toggleSection("players")}>
          <ChevronIcon open={!collapsedSections.players} />
          Players
        </Header>
        <Collapsible open={!collapsedSections.players}>
          <SliderRow>
            <InlineSlider
              type="range"
              min="1"
              max="10"
              value={playerCount || 1}
              onChange={(e) => onPlayerCountChange(e.target.value)}
            />
            <InlineInput
              type="number"
              min="1"
              max="40"
              value={playerCount || ""}
              onChange={(e) => {
                const val = parseInt(e.target.value, 10);
                if (!isNaN(val) && val >= 1 && val <= 40) {
                  onPlayerCountChange(String(val));
                } else {
                  onPlayerCountChange("");
                }
              }}
            />
          </SliderRow>
        </Collapsible>
      </Section>

      {/* Duration */}
      <Section>
        <Header onClick={() => toggleSection("duration")}>
          <ChevronIcon open={!collapsedSections.duration} />
          Duration
        </Header>
        <Collapsible open={!collapsedSections.duration}>
          <ChipList>
            {[
              { value: "", label: "All durations" },
              { value: "very-short", label: "Less than 20m" },
              { value: "short", label: "20–30m" },
              { value: "medium", label: "30–45m" },
              { value: "long", label: "45m–1h" },
              { value: "very-long", label: "More than 1h" },
            ].map(({ value, label }) => (
              <Chip
                key={value}
                selected={durationFilter === value}
                onClick={() => {
                  const newValue = durationFilter === value ? "" : value;
                  onDurationFilterChange(newValue);
                }}
              >
                {label}
              </Chip>
            ))}
          </ChipList>
        </Collapsible>
      </Section>

      <Section>
        <Header onClick={() => toggleSection("category")}>
          <ChevronIcon open={!collapsedSections.category} />
          Category
        </Header>
        <Collapsible open={!collapsedSections.category}>
          <ChipList>
            <Chip
              selected={gameCategory.length === 0}
              onClick={() => onGameCategoryChange([])}
            >
              All categories
            </Chip>
            {availableGameCategories.map((cat) => {
              const isSelected = gameCategory.includes(cat);
              return (
                <Chip
                  key={cat}
                  selected={isSelected}
                  onClick={() => {
                    const newSelection = isSelected
                      ? gameCategory.filter((c) => c !== cat)
                      : [...gameCategory, cat];
                    onGameCategoryChange(newSelection);
                  }}
                >
                  {cat}
                </Chip>
              );
            })}
          </ChipList>
        </Collapsible>
      </Section>
    </>
  );
};
