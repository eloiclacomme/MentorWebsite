import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <img src="/logo.png" alt="logo" id='logo'></img>
        <h1>Welcome to NEXUS OF FUTURE MATERIALS LTD</h1>
        <h2>Inspiring Innovation in Material Science</h2>
        <p>
          At NEXUS OF FUTURE MATERIALS LTD, we are dedicated to pushing the boundaries of materials science, 
          connecting researchers and industries to foster advancements that shape the future. Our flagship publication, 
          the Nexus of Future Materials, showcases cutting-edge research and insights from leading experts around the globe.
          </p>
      </header>

      {/* About Us Section */}
      <section className="About">
        <h2>About Us</h2>
        <p>
          At NEXUS OF FUTURE MATERIALS LTD, we take pride in our pivotal role as the publisher of the nexus of future materials, 
          a leading journal in the field of material science. Our journal is more than a publication—it is a dynamic platform where the 
          brightest minds in material science converge to share their innovative research and groundbreaking discoveries.
        </p>
        <h3>Empowering Research and Innovation</h3>
        <p>
          Our mission extends beyond publication; we are committed to facilitating the global dissemination of 
          significant scientific advancements. Through Nexus of Future Materials, we provide researchers around the 
          world with the opportunity to broadcast their findings to a broad, engaged audience, including fellow scientists, industry experts, and academia.
        </p>
          <h3>Fostering Collaboration and Advancement</h3>
          <p>
          As part of our commitment to advancing the field of material science, we 
          actively promote collaboration among researchers, institutions, and industries. 
          We believe that by fostering an environment of cooperation and open exchange, we can help 
          accelerate the development of new materials and technologies that will define the future.
          </p>

          <h3>Driving Forward the Frontier of Science</h3>
          <p>
          Our dedication to excellence and innovation is reflected in the quality of 
          research we publish. Each article undergoes a rigorous peer review process, ensuring that 
          only the most robust and impactful science reaches our readers. By maintaining high standards, 
          we contribute to the integrity and continual progression of the scientific community.
          </p>
      </section>

      <section className="journal-section">
        <h2>Journal</h2>
        <p>
          We are proud to be the publishers of the esteemed journal, Nexus of Future Materials, 
          dedicated to advancing the field of material science through cutting-edge research and innovation.
        </p>
        <p>
          <a href="https://nfmjournal.com" target="_blank" rel="noopener noreferrer">Visit Our Journal</a>
        </p>
      </section>

      <footer className="App-footer">
        <div className="footer-content">
          <p id="contact-us">Contact Us</p>
          <address>
          NEXUS OF FUTURE MATERIALS LTD
          </address>
          <p id="copyright">&copy; {new Date().getFullYear()} NEXUS OF FUTURE MATERIALS LTD</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
