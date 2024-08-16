// src/App.jsx

import React from 'react';
import Layout from './components/Layout';
import './index.css';

const App = () => {
    return (
        <Layout>
            <section id="hero" className="bg-darkCard text-center py-20 w-full">
                <div className="content">
                    <h2 className="text-4xl font-bold mb-4">Hi, I’m Melk</h2>
                    <p className="text-lg mb-8">A Student and Video Editor from Europe with 4 years of freelance
                        experience. I specialize in YouTube editing using Adobe Premiere Pro & After Effects.</p>
                    <a href="#contact" className="bg-primary text-white py-2 px-6 rounded hover:bg-blue-600">Get in
                        Touch</a>
                </div>
            </section>


            <section id="about" className="py-16 px-8 w-full">
                <h2 className="text-3xl font-bold text-center mb-8">About Me</h2>
                <p className="text-lg max-w-3xl mx-auto">
                    I have worked with clients boasting over 150k followers and am skilled in creating engaging content,
                    from gaming and commentary to essays and live content. I usually charge per running minute of the
                    final video, but pricing can vary based on style and genre.
                </p>
            </section>

            <section id="clients" className="py-20">
                <h2 className="text-3xl font-bold text-center mb-8">Current Clients</h2>
                <div className="clients-container">
                    <div className="client-card">
                        <h3 className="text-2xl font-semibold mb-2">Frankystrings</h3>
                        <p>Creator of “I’m Diamond One” and more. I edit only the fully-edited videos for this
                            channel.</p>
                        <a href="https://www.youtube.com/@frankystrings" className="visit-channel">Visit Channel</a>
                    </div>
                    <div className="client-card">
                        <h3 className="text-2xl font-semibold mb-2">Koaluh</h3>
                        <p>Pop Culture Haven and Yapper Enthusiast. All uploads on this channel, except for the
                            ‘VeggieTales’ and ‘Dating’ videos, are edited by me.</p>
                        <a href="https://www.youtube.com/@imKoaluh" className="visit-channel">Visit Channel</a>
                    </div>
                </div>
            </section>


            <section id="portfolio" className="py-16 px-8 w-full">
                <h2 className="text-3xl font-bold text-center mb-8">Portfolio</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    <div className="bg-darkBg p-4 rounded-lg shadow-md">
                        <img src="https://via.placeholder.com/400x300" alt="Project 1"
                             className="w-full h-auto rounded-lg"/>
                        <h3 className="text-lg font-semibold mt-4">Project Title 1</h3>
                        <p className="text-gray-400">Description of the project or video.</p>
                    </div>
                    <div className="bg-darkBg p-4 rounded-lg shadow-md">
                        <img src="https://via.placeholder.com/400x300" alt="Project 2"
                             className="w-full h-auto rounded-lg"/>
                        <h3 className="text-lg font-semibold mt-4">Project Title 2</h3>
                        <p className="text-gray-400">Description of the project or video.</p>
                    </div>
                    <div className="bg-darkBg p-4 rounded-lg shadow-md">
                        <img src="https://via.placeholder.com/400x300" alt="Project 3" className="w-full h-auto rounded-lg"/>
                        <h3 className="text-lg font-semibold mt-4">Project Title 3</h3>
                        <p className="text-gray-400">Description of the project or video.</p>
                    </div>
                </div>
            </section>

            <section id="contact" className="bg-darkCard py-16 px-8 text-center w-full">
                <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
                <p className="mb-4">Interested in collaborating? I’d love to hear from you!</p>
                <a href="mailto:melkediting@gmail.com" className="bg-primary text-white py-2 px-6 rounded hover:bg-blue-600">Email Me</a>
                <p className="mt-4">Feel free to connect with me on Instagram, Discord, or Twitter as well.</p>
            </section>
        </Layout>
    );
};

export default App;
