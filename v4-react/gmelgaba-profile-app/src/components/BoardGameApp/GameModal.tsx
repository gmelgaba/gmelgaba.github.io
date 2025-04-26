import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import styled, { keyframes } from "styled-components";
import { useEffect, useRef } from "react";

import { BggXmlGameDetails } from "../../interfaces/ExtendedGameDetails";
import { Game } from "../../interfaces/Game";
import { fadeSlideIn } from "../../styles/global";
import { getRatingColor } from "../../utils/boardgames";
import { resolutions } from "../../utils/devices";

interface Props {
  game: Game;
  details?: BggXmlGameDetails;
  loading: boolean;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const Loader = styled.div`
  border: 4px solid ${({ theme }) => theme.sectionEven};
  border-top: 4px solid ${({ theme }) => theme.primaryColor};
  border-radius: 50%;
  width: 36px;
  height: 36px;
  animation: ${spin} 0.5s linear infinite;
  margin: 40px auto;
`;

const Overlay = styled.div<{ open: boolean }>`
  display: ${(props) => (props.open ? "block" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 2000;
`;

const Dialog = styled.div<{ open: boolean }>`
  position: fixed;
  top: 3dvh;
  left: 0;
  right: 0;
  opacity: ${(props) => (props.open ? 1 : 0)};
  background-color: white;
  padding: 50px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 2000;
  max-width: 1300px;
  width: 75vw;
  overflow: hidden;
  transition: opacity 0.25s ease, transform 0.25s ease;
  border-radius: 12px;
  animation: ${fadeSlideIn} 0.3s ease;

  ${resolutions.mobile} {
    margin-top: 0;
    height: 80vh;
  }
`;

const DialogArrow = styled.button<{ position: "left" | "right" }>`
  position: fixed;
  top: 50%;
  z-index: 2001;
  ${({ position }) => position}: 10px;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.8);
  border: none;
  border-radius: 25px;
  width: 50px;
  height: 50px;
  font-size: 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s ease;

  svg {
    color: ${({ theme }) => theme.primaryColor};
  }

  ${resolutions.mobile} {
    background-color: ${({ theme }) => theme.primaryColor};
    width: 50px;

    svg {
      color: ${({ theme }) => theme.textLight};
      position: fixed;
    }
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media (min-width: 768px) {
    flex-direction: row;
  }

  color: ${({ theme }) => theme.text};
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: flex-start;

  img {
    max-width: 100%;
    max-height: 400px;
    object-fit: contain;
    border-radius: 8px;
  }

  ${resolutions.mobile} {
    display: none;
  }
`;

const Right = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  gap: 16px;
  overflow-y: auto;
  max-height: 400px;

  ${resolutions.tabletAndGreater} {
    img {
      display: none;
    }
  }

  ${resolutions.mobile} {
    max-height: 75vh;
    padding: 0 20px;
  }

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.sectionEven};
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.primaryColor};
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: ${({ theme }) => theme.text};
  }
`;

const InfoSubtitle = styled.strong`
  font-size: 20px;
  color: ${({ theme }) => theme.primaryColor};
`;

const Description = styled.p`
  font-size: 14.5px;
  line-height: 1.6;
  white-space: pre-wrap;
  margin: 0;
  width: 90%;
`;

const ExtraInfo = styled.div`
  font-size: 14px;
  display: flex;
  flex-direction: column;
  gap: 6px;

  ul {
    padding-left: 20px;
    margin: 4px 0 0;
  }

  li {
    margin-bottom: 4px;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 12px;
  right: 12px;
  background: transparent;
  border: none;
  font-size: 22px;
  color: #888;
  cursor: pointer;
  z-index: 2002;
  transition: color 0.2s ease;

  &:hover {
    color: #000;
  }
`;

const HeaderRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 24px;
  margin-top: -35px;
`;

const ModalTitle = styled.h3`
  margin: 0;
  padding: 0;
  font-size: 44px;
  font-weight: bold;
  text-align: center;
  text-transform: uppercase;

  ${resolutions.mobile} {
    font-size: 20px;
    margin-top: 10px;
  }
`;

const Rating = styled.div`
  font-weight: bold;
  font-size: 40px;
  border: dashed 1px;
  padding: 20px 20px;
  width: 186px;
  margin-top: -32px;
  line-height: 74px;
  max-height: 74px;
  text-align: center;

  ${resolutions.mobile} {
    margin-top: 16px;
    font-size: 25px;
    margin-right: 20px;
    line-height: 20px;
    padding: 20px 0;
    max-width: 130px;
    height: 20px;
  }
`;

const BasicInfoContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  ${resolutions.mobile} {
    grid-template-columns: 1fr;
  }
`;

export const GameModal: React.FC<Props> = ({
  game,
  details,
  loading,
  onClose,
  onNext,
  onPrev,
}) => {
  const rightPanelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (rightPanelRef.current) {
      rightPanelRef.current.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [game.id]);

  return (
    <>
      <Overlay open={!!game} onClick={onClose} />
      <DialogArrow position="left" onClick={onPrev}>
        <FaArrowLeft />
      </DialogArrow>
      <DialogArrow position="right" onClick={onNext}>
        <FaArrowRight />
      </DialogArrow>

      <Dialog open={!!game}>
        <HeaderRow>
          <ModalTitle>{game.name}</ModalTitle>
          <CloseButton onClick={onClose} aria-label="Close modal">
            ×
          </CloseButton>
        </HeaderRow>
        <Content>
          <Left>
            <img src={game.image} alt={game.name} />
          </Left>
          <Right ref={rightPanelRef}>
            <img src={game.image} alt={game.name} />
            <ExtraInfo>
              {loading ? (
                <Loader />
              ) : (
                <>
                  <InfoSubtitle>Basic info</InfoSubtitle>
                  <BasicInfoContainer>
                    <div>
                      <div>
                        <strong>Players:</strong> {game.minPlayers} -{" "}
                        {game.maxPlayers}
                      </div>
                      {details?.age && (
                        <div>
                          <strong>Suggested Age:</strong> {details.age._text}+
                        </div>
                      )}
                      {details?.playingtime && (
                        <div>
                          <strong>Playing Time:</strong>{" "}
                          {details.playingtime._text} minutes
                        </div>
                      )}
                      {details?.boardgamesubdomain && (
                        <div>
                          <strong>Genre: </strong>
                          {(Array.isArray(details?.boardgamecategory)
                            ? details?.boardgamecategory
                            : [details?.boardgamecategory]
                          ).map((cat, index) => (
                            <span key={cat?._attributes?.objectid}>
                              {index !== 0 && ", "}
                              {cat?._text}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                    <Rating style={{ color: getRatingColor(game.rating) }}>
                      {game.rating === "No rating"
                        ? game.rating
                        : `${game.rating} / 10`}
                    </Rating>
                  </BasicInfoContainer>
                  <br />
                  {details?.description && (
                    <>
                      <InfoSubtitle>Description</InfoSubtitle>
                      <Description
                        dangerouslySetInnerHTML={{
                          __html: details.description._text,
                        }}
                      />
                    </>
                  )}
                  {details?.boardgameexpansion && (
                    <>
                      <InfoSubtitle>Expansions</InfoSubtitle>
                      <ul>
                        {(Array.isArray(details.boardgameexpansion)
                          ? details.boardgameexpansion
                          : [details.boardgameexpansion]
                        ).map((exp) => (
                          <li key={exp._attributes?.objectid}>{exp._text}</li>
                        ))}
                      </ul>
                    </>
                  )}
                  {details?.["poll-summary"] && (
                    <>
                      <InfoSubtitle>
                        {details["poll-summary"]._attributes?.title}
                      </InfoSubtitle>
                      <ul>
                        {details["poll-summary"].result?.map((res) => (
                          <li key={res._attributes?.name}>
                            {res._attributes?.value}
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                </>
              )}
            </ExtraInfo>
          </Right>
        </Content>
      </Dialog>
    </>
  );
};
