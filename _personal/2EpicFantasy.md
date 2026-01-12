---
caption: #what displays in the portfolio grid:
  title: Epic Fantasy
  subtitle: click image for more
  content: Game prototype with better 2D Platformer collision.
  thumbnail: assets/img/EpicFantasy.png
  
#what displays when the item is clicked:
title: Epic Fantasy
subtitle: Unity
video: https://github.com/sangbeom-kim/sangbeom-kim.github.io/releases/download/Video/EpicFantasy.mp4
alt: EpicFantasy

---
{:.list-inline} 
  - Date: February 2023 ~ June 2023
  - Team: 3 Programmers
  - Role: Physics Programmer, Gameplay Programmer

  {:.title}
  Description  

  {:.content}
  Epic Fantasy is a Unity 2D platformer prototype featuring a unique, raycast-based physics/collision system. Player movement and camera behavior were tuned to keep controls stable and responsive, especially during fast movement and combat.

  {:.title}
  Contribution  

  {:.content}
Built a raycast-based collision and movement controller to replace Unity’s Rigidbody-based behavior. This prevented slope sliding and eliminated high-speed tunneling also with stable ground/slope handling.  


{:.content}
Implemented a pixel-perfect camera that follows specified targets while preserving pixel alignment. With multiple targets, the camera computes a weighted center and adjusts framing so all targets remain visible on screen.  


{:.content}
Created breakable objects that shatter into multiple random fragments when hit by the player’s attack. A barycentric-inspired method generates fragment pieces, then applies directional force to scatter them.