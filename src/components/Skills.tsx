import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuysellads, faProductHunt, faDailymotion, } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';
import { faBoltLightning, faScissors, faVideo } from "@fortawesome/free-solid-svg-icons";

const labelsFirst = [
    "React",
    "TypeScript",
    "JavaScript",
    "HTML5",
    "CSS3",
    "SASS",
    "Flask",
    "Python",
    "SQL",
    "PostgreSQL",
    "Postman"
];

const labelsSecond = [
    "Git",
    "GitHub Actions",
    "Docker",
    "AWS",
    "Azure",
    "Linux",
    "Snowflake",
    "Pandas",
    "Selenium",
];

const labelsThird = [
    "OpenAI",
    "Groq",
    "LangChain",
    "Qdrant",
    "Hugging Face",
    "LlamaIndex",
    "Streamlit",
];

function Skills() {
    return (
    <div className="container" id="skills">
        <div className="skills-container">
            <h1>Skills</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faBuysellads} size="3x"/>
                    <h3>After Effect</h3>
                    <p>I use Adobe After Effects to create smooth, engaging animations and motion graphics that enhance user experience. From animated icons and logo reveals to UI animations and Lottie-ready assets, I focus on creating visually appealing, performance-optimized animations that bring websites and digital products to life.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faProductHunt} size="3x"/>
                    <h3>Premiar Pro</h3>
                    <p>I use Adobe Premiere Pro to edit and produce high-quality videos with a focus on storytelling, smooth transitions, and polished visuals. From promotional videos and social media content to tutorials and presentations, I create engaging edits with color correction, audio enhancement, motion graphics integration, and optimized exports for multiple platforms.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faBoltLightning} size="3x"/>
                    <h3>Lightroom Photoshop</h3>
                    <p>I use Adobe Lightroom to enhance and optimize photos with professional color correction, exposure adjustments, and detailed retouching. I focus on creating clean, consistent, and visually appealing images that are optimized for web, social media, and digital marketing.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                 <div className="skill">
                    <FontAwesomeIcon icon={faScissors} size="3x"/>
                    <h3>CapCut</h3>
                    <p>I use CapCut to create engaging and visually appealing video content with smooth editing, transitions, effects, and audio enhancements. From social media reels and short-form videos to promotional content, I focus on creating high-quality edits optimized for modern digital platforms.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                 <div className="skill">
                    <FontAwesomeIcon icon={faDailymotion} size="3x"/>
                    <h3>DaVinci Resolve</h3>
                    <p>I use DaVinci Resolve to create professional-quality video edits with advanced color grading, visual effects, audio enhancement, and smooth post-production workflows. From cinematic videos and promotional content to social media edits, I focus on delivering polished visuals with precise editing and optimized output for different platforms.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faVideo} size="3x"/>
                    <h3>AI video</h3>
                    <p>I use AI video tools to create engaging and innovative video content with the help of artificial intelligence. From AI-generated visuals and automated editing to creative effects, voice enhancements, and video optimization, I leverage modern AI workflows to produce high-quality content efficiently and effectively.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>


            </div>
        </div>
    </div>
    );
}

export default Skills;