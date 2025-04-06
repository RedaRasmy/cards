# 🎴 Cards Game

A fast-paced, strategic card game where players compete against **scripted bots** with **easy, medium, and hard difficulty levels**. Play solo against **1, 2, or 3 opponents** for an engaging experience.

## 🚀 Features
- **bots**: Rule-based bot opponents with **different difficulty tiers**.
- **Multiple Player Configurations**: Play against **1, 2, or 3 bots**.
- **UI**: Built with **React**, **Next.js**, and **TailwindCSS** for a seamless experience.
- **State Management**: Efficiently handled using **Redux Toolkit & React Redux**.

## 🎮 Game Logic
This card game draws inspiration from **UNO**.

### 🔹 How Cards Can Be Played
- Players take turns placing a card on the pile.
- A card can be played **only if it matches** one of the following:
  - **Same number** as the previous card.
  - **Same color** as the previous card.
- If a player does not have a valid move, they must **draw a card**.

### ⏳ Timer Mechanic
- Each player has a **time limit** to make a move.
- If the timer **runs out**, the player **automatically draws a card**.
- This prevents slow gameplay and adds **strategic pressure**, encouraging quick decision-making.




## 🛠 Tech Stack
| Frontend |
|----------|
| ✅ Next.js 15 |
| ✅ React 19 |
| ✅ TailwindCSS |
| ✅ Redux Toolkit |

## 🖌 UI Libraries
- **shadcn/ui** (includes Radix UI components for accessibility and modern UI)
- **DaisyUI** for additional Tailwind-based UI enhancements.

## 📌 Roadmap
- [ ] Improving bots
- [ ] Add animations for smoother gameplay ( with motion or gsap )
- [ ] Backend : online with socket.io , manage players data (profiles)

