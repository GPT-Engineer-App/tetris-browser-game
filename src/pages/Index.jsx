import { Box, Container, Grid, GridItem, Text, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";

// Constants for the game
const GRID_WIDTH = 10;
const GRID_HEIGHT = 20;
const CELL_SIZE = "30px";

// Tetromino shapes
const TETROMINOS = {
  I: { shape: [[1, 1, 1, 1]], color: "cyan" },
  J: {
    shape: [
      [0, 1, 0],
      [0, 1, 0],
      [1, 1, 0],
    ],
    color: "blue",
  },
  L: {
    shape: [
      [0, 1, 0],
      [0, 1, 0],
      [0, 1, 1],
    ],
    color: "orange",
  },
  O: {
    shape: [
      [1, 1],
      [1, 1],
    ],
    color: "yellow",
  },
  S: {
    shape: [
      [0, 1, 1],
      [1, 1, 0],
    ],
    color: "green",
  },
  T: {
    shape: [
      [0, 1, 0],
      [1, 1, 1],
    ],
    color: "purple",
  },
  Z: {
    shape: [
      [1, 1, 0],
      [0, 1, 1],
    ],
    color: "red",
  },
};

// Initial game state
const createEmptyGrid = () => Array.from({ length: GRID_HEIGHT }, () => Array(GRID_WIDTH).fill(0));

const Index = () => {
  const [grid, setGrid] = useState(createEmptyGrid());
  const [score, setScore] = useState(0);
  const [level, setLevel] = useState(1);
  const [gameOver, setGameOver] = useState(false);

  // Game logic functions
  const handleKeyPress = (event) => {
    // Implement movement and rotation logic based on key presses
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  return (
    <Container maxW="container.md" p={4}>
      <VStack spacing={4}>
        <Text fontSize="2xl">Tetris Game</Text>
        <Grid templateColumns={`repeat(${GRID_WIDTH}, ${CELL_SIZE})`} gap={1}>
          {grid.map((row, rowIndex) => row.map((cell, cellIndex) => <GridItem key={`${rowIndex}-${cellIndex}`} w={CELL_SIZE} h={CELL_SIZE} bg={cell ? "blue.500" : "gray.200"} />))}
        </Grid>
        <Text>Score: {score}</Text>
        <Text>Level: {level}</Text>
        {gameOver && <Text>Game Over</Text>}
      </VStack>
    </Container>
  );
};

export default Index;
