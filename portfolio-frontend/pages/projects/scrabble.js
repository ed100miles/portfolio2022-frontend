import { useState } from "react";
import { Typography, Box, styled, ButtonGroup, Button } from "@mui/material";
import Layout from "../../components/Layout";
import theme from "../../src/theme";
import { motion } from "framer-motion";

const SquareBox = styled(Box)({
  height: "4vmin",
  width: "4vmin",
  borderTop: `solid 1px ${theme.palette.blue.shadow.medium}`,
  borderRight: `solid 1px ${theme.palette.blue.shadow.medium}`,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  "&:hover": {
    cursor: "pointer",
    backgroundColor: theme.palette.blue.shadow.medium,
  },
});

const TileContainer = styled(Box)({
  width: "30vw",
  minWidth: "calc(6vmin*7)",
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-around",
  paddingTop: "3vh",
});

const StyledTile = styled(Box)({
  height: "6vmin",
  width: "6vmin",
  border: `solid 1px ${theme.palette.blue.shadow.medium}`,
  borderRadius: "1vmin",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  "&:hover": {
    cursor: "pointer",
    backgroundColor: theme.palette.blue.shadow.medium,
  },
});

const DirectionButton = ({ children, selected, btnDirection, setDirection }) => {
  return (
    <Button
      size="small"
      onClick={() => setDirection(btnDirection)}
      sx={{
        color: theme.palette.blue.light,
        borderColor: theme.palette.blue.light,
        backgroundColor: selected
          ? theme.palette.blue.shadow.dark
          : theme.palette.blue.dark,
        fontWeight: selected ? "bold" : "normal",
      }}
    >
      {children}
    </Button>
  );
};

export default function Index() {
  const [board, setBoard] = useState(Array(225).fill(""));
  const [onBoard, setOnBoard] = useState(false);
  const [selectedSquare, setSelectedSquare] = useState(112);
  const [tiles, setTiles] = useState(Array(7).fill(""));
  const [selectedTile, setSelectedTile] = useState(null);
  const [direction, setDirection] = useState("right");

  const handleTileClick = (e) => {
    setOnBoard(false);
    setSelectedTile(e.target.id);
    console.log(selectedTile);
  };

  const setDirectionHandler = (rule) => {
    if (rule === "moveLeft") {
      setSelectedSquare(selectedSquare - 1);
    } else if (rule === "moveRight") {
      setSelectedSquare(selectedSquare + 1);
    } else if (rule === "moveUp") {
      setSelectedSquare(selectedSquare - 15);
    } else if (rule === "moveDown") {
      setSelectedSquare(selectedSquare + 15);
    } else if (direction === "right" && (selectedSquare + 1) % 15 !== 0) {
      setSelectedSquare(selectedSquare + 1);
    } else if (direction === "down" && selectedSquare < 210) {
      setSelectedSquare(selectedSquare + 15);
    }
  };

  const boardKeyUpHandler = (e) => {
    const isLetter = e.key.match(/^[A-z]$/g) !== null;
    const newBoard = [...board];
    if (onBoard) {
      if (isLetter) {
        newBoard[selectedSquare] = e.key;
        setBoard(newBoard);
        setDirectionHandler();
      } else if (e.key === "Backspace") {
        newBoard[selectedSquare] = "";
        setBoard(newBoard);
        if (direction === "right" && selectedSquare % 15 !== 0) {
          setDirectionHandler("moveLeft");
        } else if (direction === "down" && selectedSquare > 14) {
          setDirectionHandler("moveUp");
        }
      }
      if (e.key === "ArrowLeft" && selectedSquare !== 0) {
        setDirectionHandler("moveLeft");
      }
      if (e.key === "ArrowRight" && selectedSquare !== 225) {
        setDirectionHandler("moveRight");
      }
      if (e.key === "ArrowDown" && selectedSquare < 210) {
        setDirectionHandler("moveDown");
      }
      if (e.key === "ArrowUp" && selectedSquare > 14) {
        setDirectionHandler("moveUp");
      }
    }
  };

  const tileKeyUpHandler = (e) => {
    const isLetter = e.key.match(/^[A-z]$/g) !== null;
    const newTiles = [...tiles];
    if (isLetter) {
      newTiles[selectedTile] = e.key;
      setTiles(newTiles);
      if (selectedTile < 6) {
        setSelectedTile(Number(selectedTile) + 1);
      }
    }
    if (e.key === "Backspace") {
      newTiles[selectedTile] = "";
      setTiles(newTiles);
      if (selectedTile > 0) {
        setSelectedTile(Number(selectedTile) - 1);
      }
    }
  };

  const Square = ({ index, letter, selected }) => {
    return (
      <SquareBox
        key={`squareBox-${index}`}
        sx={{
          borderLeft:
            index % 15 == 0 ? `solid 1px ${theme.palette.blue.shadow.medium}` : "",
          borderBottom:
            index > 209 ? `solid 1px ${theme.palette.blue.shadow.medium}` : "",
        }}
        component={motion.div}
        initial={selected ? { backgroundColor: theme.palette.blue.dark } : {}}
        animate={selected ? { backgroundColor: theme.palette.blue.medium } : {}}
        transition={{
          repeat: Infinity,
          repeatType: "reverse",
          duration: 1,
        }}
        onClick={() => setSelectedSquare(index)}
      >
        <Typography sx={{ color: theme.palette.blue.light }}>{letter}</Typography>
      </SquareBox>
    );
  };

  const Tile = ({ index, letter, selected }) => {
    return (
      <StyledTile
        id={index}
        onClick={handleTileClick}
        component={motion.div}
        initial={selected ? { backgroundColor: theme.palette.blue.dark } : {}}
        animate={selected ? { backgroundColor: theme.palette.blue.medium } : {}}
        transition={{
          repeat: Infinity,
          repeatType: "reverse",
          duration: 1,
        }}
      >
        {letter}
      </StyledTile>
    );
  };

  return (
    <Layout>
      <Typography variant="h2" component="h1" align="center" gutterBottom>
        Scrabble
      </Typography>
      <Box
        onKeyUp={(e) => boardKeyUpHandler(e)}
        sx={{
          display: "flex",
          justifyContent: "space-around",
          width: "100vw",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
            flexDirection: "column",
            "&[tabindex]": {
              outline: "none",
            },
          }}
          tabIndex="1"
        >
          <Box
            onClick={() => setOnBoard(true)}
            sx={{
              maxWidth: "61vmin",
              maxHeight: "60vmin",
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            {board.map((letter, index) => {
              return (
                <Square
                  index={index}
                  key={index}
                  letter={letter}
                  selected={onBoard && index === selectedSquare}
                />
              );
            })}
            <ButtonGroup sx={{ marginTop: "5px" }}>
              <DirectionButton
                selected={direction === "right"}
                btnDirection={"right"}
                setDirection={setDirection}
              >
                Type Across
              </DirectionButton>
              <DirectionButton
                selected={direction === "down"}
                btnDirection={"down"}
                setDirection={setDirection}
              >
                Type Down
              </DirectionButton>
            </ButtonGroup>
          </Box>
        </Box>
        <TileContainer
          onKeyUp={(e) => tileKeyUpHandler(e)}
          tabIndex="1"
          sx={{
            "&[tabindex]": {
              outline: "none",
            },
          }}
        >
          {tiles.map((_, index) => {
            return (
              <Tile
                index={index}
                selected={!onBoard && index == selectedTile}
                letter={tiles[index]}
              />
            );
          })}
        </TileContainer>
      </Box>
    </Layout>
  );
}
