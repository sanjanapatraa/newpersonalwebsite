import './App.css';

function App() {
  return (
    <>
      <header>
        <h1>Sanjana's Portfolio</h1>
        <p>Exploring, Learning & Growing Every Day</p>
      </header>

      <nav>
        <ul>
          <li><a href="#personal-info">Personal Info</a></li>
          <li><a href="#about-me">About Me</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#certificates">Certificates</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#hobbies">Hobbies</a></li>
        </ul>
      </nav>

      <section id="personal-info">
        <h2>Personal Info</h2>
        <img src="\Photo.jpg" alt="My Picture" className="profile-pic" />
        <p><strong>Name:</strong> Sanjana Patra</p>
        <p><strong>Email:</strong> sanjana.patra23@pcu.edu.in</p>
        <p><strong>Phone:</strong> +91 7972301708</p>
      </section>

      <section id="about-me">
        <h2>About Me</h2>
        <p>
          I am a curious and passionate learner who loves diving into new things with energy and excitement.
          My interests span across teamwork, communication, problem-solving, and discovering unique ways to see and tackle everyday challenges.
        </p>
      </section>

      <section id="education">
        <h2>Education</h2>
        <table>
          <tr>
            <th>Degree/Class</th>
            <th>Institution</th>
            <th>Year</th>
          </tr>
          <tr>
            <td>B.Tech in Computer Science</td>
            <td>Pimpri Chinchwad University</td>
            <td>2023 – 2027</td>
          </tr>
          <tr>
            <td>12th Grade</td>
            <td>Pratibha International School</td>
            <td>2021 – 2023</td>
          </tr>
          <tr>
            <td>10th Grade</td>
            <td>Darshan Academy</td>
            <td>2018 – 2021</td>
          </tr>
        </table>
      </section>

      <section id="certificates">
        <h2>Certificates</h2>
        <ul>
          <li>Blockchain Specialization – Coursera</li>
          <li>Programming in Java EE – Red Hat</li>
          <li>Django Web Framework – Coursera</li>
          <li>Cloud Computing Basics – AWS Academy</li>
          <li>Software Engineering – Coursera</li>
        </ul>
      </section>

      <section id="projects">
        <h2>Projects</h2>
        <ul>
          <li><strong>Railway Management System (4th Sem)</strong> – A DBMS project with Python connectivity</li>
          <li><strong>Portfolio Website (5th Sem)</strong> – Designed my own responsive personal site</li>
          <li><strong>IoT Smart Drip Irrigation (4th Sem)</strong> – Built a prototype with sensors & automation</li>
          <li><strong>Bridging the Gap (2nd Sem)</strong> – Enhanced Communication through Spell Check & Autocorrect</li>
          <li><strong>MediMapper (Hackathon)</strong> – Built a Website for healthcare services in rural areas</li>
        </ul>
      </section>

      <section id="hobbies">
        <h2>Hobbies</h2>
        <p>Reading novels, listening to podcasts, spending time with animals, exploring new tech, traveling, and photography.</p>
      </section>

      <a href="https://github.com/sanjanapatraa" className="github-link" target="_blank">
        Visit My GitHub
      </a>
    </>
  );
}

export default App;
