import React from "react";
import zaid from "../assets/videos/zaid.mp4";
import dev from "../assets/videos/dev.mp4";
import saharanpurclub from "../assets/videos/saharanpurclub.mp4";
import devansh from "../assets/videos/devansh.mp4";
import rohit from "../assets/videos/rohit.mp4";
import zaids from "../assets/videos/zaids.mp4";
import "../assets/styles/Project.scss";

function Project() {
  return (
    <div className="projects-container" id="projects">
      <h1>Live Projects</h1>
      <div className="projects-grid">
        <div className="project">
          <video src={zaid} className="zoom" width="100%" controls></video>
            <h2>Zaid Siddique</h2>
          <p>
           Edited and enhanced engaging video content for **Zaid Siddique** using **Adobe After Effects**. Created smooth motion graphics, cinematic transitions, visual effects, and polished animations to deliver high-quality, audience-focused content. Optimized pacing, visual storytelling, and overall production quality for social media and digital platforms.
          </p>
        </div>
        <div className="project">
          <video src={dev} className="zoom" width="100%" controls></video>

          <a href="https://zoftware.io/" target="_blank" rel="noreferrer">
            <h2>Dev</h2>
          </a>
          <p>
            Produced visually compelling video edits for **Dev** using **CapCut**, combining precise timing, creative effects, motion-based transitions, and audio synchronization to create polished content optimized for maximum viewer engagement across social media platforms.
          </p>
        </div>
        <div className="project">
          <video
            src={saharanpurclub}
            className="zoom"
            width="100%"
            controls
          ></video>

          <a href="https://sportshygiene.com/" target="_blank" rel="noreferrer">
            <h2>Saharanpur Club</h2>
          </a>
          <p>
            Created promotional video content for **Saharanpur Club** using **Adobe After Effects**. Designed visually engaging motion graphics, cinematic transitions, and custom animations to showcase club events and activities. Enhanced the overall visual presentation with color grading, typography, and dynamic effects, delivering polished content optimized for digital and social media platforms.
          </p>
        </div>
        <div className="project">
          <video src={devansh} className="zoom" width="100%" controls></video>

          <a
            href="https://www.peer-sphere.com/"
            target="_blank"
            rel="noreferrer"
          >
            <h2>Dev</h2>
          </a>
          <p>
            Crafted a creative video edit for **Dev** in **Adobe After Effects**, combining dynamic animations, smooth compositing, visual effects, and color enhancement to deliver engaging content with a strong visual identity and professional production quality.
          </p>
        </div>
        <div className="project">
          <video src={rohit} className="zoom" width="100%" controls></video>

          <a href="https://nooceptin.com/" target="_blank" rel="noreferrer">
            <h2>Rohit</h2>
          </a>
          <p>
           Developed a visually engaging video for **Rohit** using **Adobe After Effects**. Utilized motion graphics, advanced compositing, dynamic transitions, and cinematic effects to create high-quality content with a polished and professional visual style for digital platforms.
          </p>
        </div>
        <div className="project">
          <video src={zaids} className="zoom" width="100%" controls></video>

          <a
            href="https://peru-vulture-870890.hostingersite.com/"
            target="_blank"
            rel="noreferrer"
          >
            <h2>Zaid Siddique</h2>
          </a>
          <p>
            Produced a creative video edit for **Zaid Siddique** using **Adobe After Effects**. Combined advanced motion design, visual compositing, animated typography, and cinematic transitions to craft an engaging, high-quality video optimized for social media and digital audiences.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Project;
