# Rock Paper Scissors Game 🎮

A modern online version of the classic Rock, Paper, Scissors game, developed with React and TypeScript.

## 📋 Overview

This project is a web implementation of the Rock, Paper, Scissors game, where players can play against the computer that makes random choices. The project is available online and doesn't require local installation to play.

### ✨ Features

- Modern and responsive user interface
- Single-player mode against computer
- Smooth animations and visual gameplay feedback
- Score system
- Minimalist and intuitive design

### 🛠️ Core Technologies

- React
- TypeScript
- Vite
- TailwindCSS
- Radix UI (for accessible components)

## 🎯 Demo

The game is available online at: [Vercel](https://lcs-franco-jo-ken-po.vercel.app/game)

## 🏗️ Project Structure

```
rock-paper-scissors-game/
├── src/
│   ├── app/
│   │   ├── contexts/     # React contexts, including game state
│   │   ├── hooks/        # Custom hooks
│   │   ├── routes/       # Route configuration
│   │   └── utils/        # Utility functions
│   ├── ui/
│   │   ├── components/   # Reusable components
│   │   ├── pages/        # Application pages
│   │   └── style/        # Styles and themes
│   ├── app.tsx          # Main component
│   └── main.tsx         # Application entry point
```

## 🎮 How to Play

1. Access the game through the demo link
2. Choose your move by clicking one of the three buttons (Rock, Paper, or Scissors)
3. The computer will automatically make its choice
4. The result will be displayed on screen
5. The score is automatically updated
6. Click "Play again" to start a new round

## 🚀 Next Steps

- [ ] Multiplayer mode implementation using WebSocket
- [ ] Integration with local storage to store scores

## 💻 Local Development

If you want to run the project locally or contribute to development:

1. Clone the repository

```bash
git clone https://github.com/your-username/rock-paper-scissors-game.git
```

2. Install dependencies

```bash
yarn
```

3. Start the development server

```bash
yarn dev
```

## 📝 License

This project is under the MIT license. See the [LICENSE](LICENSE) file for more details.
