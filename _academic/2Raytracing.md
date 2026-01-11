---
caption: #what displays in the portfolio grid:
  title: Vulkan Ray Tracing Project
  subtitle: click image for more
  content: C++/Vulkan real-time ray tracing render demo.
  thumbnail: assets/img/Raytracing.png
  
#what displays when the item is clicked:
title: Vulkan Ray Tracing Project
subtitle: C++/Vulkan
video: https://github.com/sangbeom-kim/sangbeom-kim.github.io/releases/download/Video/RayTrace.mp4
alt: VulkanRayTracingProject

---
{:.list-inline} 
  - Date: September 2025 ~ December 2025
  - Team: Solo
  - Role: Engine / Graphics Programmer

  Download the project [here](/assets/file/VulkanRayTracingProject.zip).  

  {:.title}
  Description  

  {:.content}
  A real-time ray tracing renderer built in C++ using the Vulkan API and VK_KHR_ray_tracing_pipeline. The renderer supports progressive sampling with temporal accumulation, optional history reprojection to keep stable results when the camera moves, and a compute-shader denoiser to reduce Monte Carlo noise in real time. It also includes a lightweight post-process pass for presentation (gamma/tonemap) and an ImGui control panel to toggle features and tune rendering parameters live.  
    
  {:.title}
  Contribution  

  {:.content}    
  Path Tracing Core: Implemented a Monte Carlo path tracing loop with BRDF sampling and PDF evaluation, throughput accumulation, emissive hit handling, and optional explicit light connection (NEE-style direct lighting) to improve convergence.  
  
   {:.content}    
  Temporal Accumulation and Reprojection: Maintained per-pixel history buffers (current/previous color accumulation plus auxiliary buffers such as normal+depth and albedo) to avoid ghosting.  

   {:.content}    
   Compute Denoising: Implemented an albedo-demodulate/remodulate denoiser in a compute shader. Performed a 5x5 Gaussian-weighted filter with edge stopping using depth and normal similarity to preserve silhouettes and hard edges.  

   {:.content}    
   Post Process and UI: Added a full-screen presentation pass and an ImGui panel for common runtime controls to support fast debugging and parameter iteration.