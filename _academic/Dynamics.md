---
caption: #what displays in the portfolio grid:
  title: Motion Dynamics Project
  subtitle: click image for more
  content: C++/OpenGL demo combining animation, path motion, IK, and physics simulation.
  thumbnail: assets/img/MotionDynamics.png
  
#what displays when the item is clicked:
title: Motion Dynamics Project
subtitle: C++/OpenGL
video: https://drive.google.com/file/d/1BAlpoJQNeDkVbM3jk9n5lPZ41jVsJy6O/preview
alt: MotionDynamicsProject

---
{:.list-inline} 
  - Date: March 2022 ~ June 2022
  - Team: Solo
  - Role: Engine / Graphics Programmer

  Download the project [here](/assets/file/MotionDynamicsProject.zip).  

  {:.title}
  Description  

  {:.content}
  An interactive C++/OpenGL sandbox that brings together multiple graphics and animation simulating systems. The demo includes a skeletal animation player, a spline-based motion path with speed control, an inverse kinematics reach animation, and a spring-based physics simulator. The demo uses ImGui panels to switch modes, tweak parameters live, and visualize motion paths, IK targets, and simulation states.  
    
  {:.title}
  Contribution  

  {:.content}    
  Animation Player: Built an FBX animation playback pipeline that samples per-joint transforms over time. Supported clip selection, time scaling, and splitting one source animation into reusable sub-clips, with stable interpolation for smooth motion.  
  
   {:.content}    
  Motion Path and Speed Control: Implemented Catmull-Rom spline motion with arc-length reparameterization so movement stays consistent along curves. Added ease-in/ease-out distance-time control and a motion-based animation speed scale to keep the run cycle visually matched to travel speed.  

   {:.content}    
   Inverse Kinematics Animation: Implemented a CCD IK solver to drive the end effector toward a target. Added per-joint max rotation step and priority weighting, plus joint constraints (cone/twist and hinge limits) with UI sliders and a full reset to restore default limits.  

   {:.content}    
   Spring Physics Simulator: Implemented a mass-spring simulator (chain and cloth) with damping and RK4 integration using sub-stepping for stability. Added pinning options, sphere collision, and real-time parameter tuning with debug rendering (springs, particles, and shaded cloth).