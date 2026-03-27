import { useState } from 'react';

function About() {
    const [showMore, setShowMore] = useState(false);

    function HandleMoreClick() {
        setShowMore(!showMore);
    }
    return(
        <>
            <article id="about-me" className="bg-[#EAEFEF] p-2 space-y-4 text text-[#25343F] leading-[1.6] p-[1em]">
                <div className="max-w-7xl mx-auto">
                    <h2 className="pb-1 text-2xl">About me</h2>
                    <p>My name is Lesley Reynolds. I studied for two years at the Amsterdam University of Applied Sciences, where I earned my Front-End Associate Degree.</p>
                    
                    {showMore && (
                        <div>
                        <p>During my first year, I learned HTML, CSS, and JavaScript. I had the opportunity to work with real clients such as Funda and OBA. During these projects, I gained experience with briefing and debriefing clients, working in Scrum teams with classmates, managing work through GitHub, creating designs, participating in code and design reviews, presenting products to clients, and continuing development based on client feedback by creating and managing issues in GitHub.
                        Once we became more comfortable with JavaScript in the second half of the first year, I was introduced to EJS (Embedded JavaScript), which works with Node.js. It is a templating engine that allows you to create dynamic websites using HTML, CSS, and plain JavaScript.
                        In my final year, I was introduced to frameworks. At my school we worked with SvelteKit, where I learned about server-side rendering. We used the CMS Directus to collect data and build webpages. During this time, I also learned to make code accessible for everyone by following WCAG guidelines, building mobile-first and responsive websites, applying progressive enhancement, writing clean and semantic HTML, and validating my code. I also tested components and webpages with users to improve usability.
                        I graduated in September and have continued learning since then. I started exploring WordPress, React, and Tailwind. Now I’m ready to take the next step and start working as a Front-End Developer.
                        Feel free to take a look at my work and don’t hesitate to contact me.</p> 
                        </div>
                    )}
                    <button className="font-bold
    " onClick={HandleMoreClick}>
                        {showMore ? 'Hide' : 'Show more'} text ▼
                        </button> 
                </div>
            </article>
        </>
    )
}

export default About