# 🏓 Ping Pong Game (p5.js)

A simple yet fun 2-player Ping Pong (Pong) game built using [p5.js](https://p5js.org/). The game features realistic puck physics, paddle collision mechanics, and score tracking. Perfect as a beginner-friendly p5.js project or for learning the basics of game development.

## 🎮 How to Play
- MAKE SURE CAPSLOCK IS ON!!
- Player 1 controls the **left paddle** using `A` (up) and `Z` (down).
- Player 2 controls the **right paddle** using the `J` and `M` arrow keys.
- The puck bounces off the top and bottom edges.
- When a player misses the puck, the opponent gets a point.
- First to reach the desired score wins!

## 🚀 Features

- Realistic paddle collision with angle-based reflection
- Randomized puck serve direction after each point
- Sound feedback on scoring
- Score tracking for both players
- Prevents paddles from moving off-screen

## 🧩 Code Overview

### `Puck` Class

Handles all puck-related logic:
- Position and movement (`update`)
- Collision with paddles (`checkPaddleLeft`, `checkPaddleRight`)
- Scoring and wall collisions (`edges`)
- Resetting after a score (`reset`)
- Visual rendering (`show`)

### `Paddle` Class

Manages player paddles:
- Initialization on left or right side
- Movement (`move`, `update`)
- Boundary restriction (`constrain`)
- Drawing the paddle on screen (`show`)



