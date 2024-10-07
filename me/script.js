function showContent(category) {
    let content = document.getElementById("content");
    let buttons = document.querySelectorAll("#selection-bar button");
    buttons.forEach(button => {
        button.classList.remove("active");
    });
    document.querySelector(`#selection-bar button[data-category="${category}"]`).classList.add("active");

    if (category === "self-introduction") {
        content.innerHTML = `
            <h3>Self-Introduction</h3>
            <p>
                Hello! I'm HEW KANG YOU, a passionate Computer Science student currently pursuing my studies at Asia Pacific University of Technology and Innovation (APU). 
                I am enthusiastic about technology, artificial intelligence, and using my skills to create innovative solutions. 
                I enjoy working on projects that challenge me to learn and grow. Outside of academics, I have a passion for playing the 24 Festive Drums, which I've enjoyed since 2017.
            </p>`;
    } else if (category === "skills") {
        content.innerHTML = `
            <div class="skills-container">
                <div class="skills-section">
                    <h3>Programming Languages</h3>
                    <ul>
                        <li>C++</li>
                        <li>Java</li>
                        <li>Python</li>
                        <li>C</li>
                        <li>Assembly</li>
                        <li>R</li>
                        <li>SQL</li>
                    </ul>
                </div>
                <div class="skills-section">
                    <h3>Web Development</h3>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                    </ul>
                </div>
                <div class="skills-section">
                    <h3>Linux-based System Configuration</h3>
                    <ul>
                        <li>DNS & DHCP Server</li>
                        <li>Email Server (Postfix & Dovecot)</li>
                        <li>Web Server</li>
                        <li>SSL/TLS Encryption</li>
                        <li>SSH Server</li>
                        <li>NFS Server</li>
                    </ul>
                </div>
                <div class="skills-section">
                    <h3>Others</h3>
                    <ul>
                        <li>MySQL Database Management</li>
                        <li>Basic Concept of Networking (Cisco Packet Tracer)</li>
                        <li>Network Security</li>
                    </ul>
                </div>
            </div>`;
    } else if (category === "certificates") {
        content.innerHTML = `
            <h3>Certificates</h3>
            <ul>
                <li><a href="cert/Red Hat System Administration I (RH124).pdf" target="_blank">Red Hat System Administration I (RH124)</a></li>
                <li><a href="cert/Python_Essentials_1_Badge.pdf" target="_blank">Python Essentials 1</a></li>
                <li><a href="cert/Python_Essentials_2_Badge.pdf" target="_blank">Python Essentials 2</a></li>
                <li><a href="cert/networking.pdf" target="_blank">CCNAv7: Introduction to Networks</a></li>
                <li>SPM - 5A (including ENGLISH & ADDITIONAL MATHEMATICS)</li>
            </ul>`;
    } else if (category === "education") {
        content.innerHTML = `
            <h3>Education</h3>
            <ul>
                <li>Foon Yew High School Kulai</li>
                <ul>
                    <li>2017 - 2022</li>
                    <li>Science Class</li>
                    <li>Vice President of 24 Festive Drums Club</li>
                </ul>
                <li>Asia Pacific University of Technology and Innovation</li>
                <ul>
                    <li>Since March 2023</li>
                    <li>Computer Science</li>
                    <li>APU Red Hat Club member</li>
                </ul>
            </ul>`;
    } else if (category === "interests") {
        content.innerHTML = `
            <h3>Interests</h3>
            <ul>
                <li>Artificial Intelligence and Machine Learning</li>
                <li>Information Technology</li>
                <li>Game Development</li>
                <li>Playing 24 Festive Drums and online games</li>
            </ul>`;
    }
}

function viewResume() {
    window.open('cert/Resume.pdf', '_blank');
}