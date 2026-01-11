---
caption: #what displays in the portfolio grid:
  title: Graphics Project
  subtitle: click image for more
  content: C++/OpenGL showcase of meshes, curves, and shadows.
  thumbnail: assets/img/Graphics.png
  
#what displays when the item is clicked:
title: Graphics Project
subtitle: C++/OpenGL
video: https://github.com/sangbeom-kim/sangbeom-kim.github.io/releases/download/Video/Graphics.mp4
alt: GraphicsProject

---
{:.list-inline} 
  - Date: March 2022 ~ June 2022
  - Team: 2 Programmers
  - Role: Graphics Programmer

  Download the project [here](/assets/file/GraphicsProject.zip).  

  {:.title}
  Description  

  {:.content}
  A C++/OpenGL sandbox showcasing core graphics features through five scenes: Mesh, Noise, Curve, Shadow, and Final. Each scene is interactive with ImGui controls for live tweaking and debugging, ending with a combined roller-coaster demo.  
    
  {:.title}
  Contribution  

  {:.content}    
 Mesh Scene: Implemented procedural 3D primitives and the mesh buffering pipeline (VAO VBO IBO).
Added shader-based rendering options and live toggles for common render states and visual styles.  
  
  {:.content}    
  Noise Scene: Implemented 2D noise generation and variations, with controls for frequency, octaves, and animation offsets. Rendered the generated noise as a texture mapped onto geometry for real-time preview.  

  {:.content}   
Curve Scene: Built an interactive spline curve editor with draggable control points and adjustable sampling.
Visualized curves and controls with lightweight debug drawing for clear iteration.  

  {:.content}   
  Shadow Scene: Implemented shadow mapping with a depth pass from a light camera and a main shading pass using the depth map. Added UI controls and debug views to tune bias and inspect shadow results.  

  {:.content}   
Final Scene: Combined terrain generation, spline-based track motion, and shadows into a single showcase scene. Implemented a roller-coaster style demo with editable track parameters and a follow camera for presentation.