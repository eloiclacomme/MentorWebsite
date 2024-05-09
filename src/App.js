import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to NEXTECH MATERIALS INNOVATIONS LTD</h1>
        <h2>Inspiring Innovation in Material Science</h2>
        <p>
          At NEXTECH MATERIALS INNOVATIONS LTD, we are dedicated to pushing the boundaries of materials science, 
          connecting researchers and industries to foster advancements that shape the future. Our flagship publication, 
          the Nexus of Future Materials, showcases cutting-edge research and insights from leading experts around the globe.
          </p>
      </header>

      {/* About Us Section */}
      <section className="About">
        <h2>About Us</h2>
        <p>
          At NEXTECH MATERIALS INNOVATIONS LTD, we take pride in our pivotal role as the publisher of the nexus of future materials, 
          a leading journal in the field of material science. Our journal is more than a publication—it is a dynamic platform where the 
          brightest minds in material science converge to share their innovative research and groundbreaking discoveries.
        </p>
        <h3>Empowering Research and Innovation</h3>
        <p>
          Our mission extends beyond publication; we are committed to facilitating the global dissemination of 
          significant scientific advancements. Through nexus of future materials, we provide researchers around the 
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

      {/* Featured Research Section */}
      <section className="Journal">
        <h2>Journal</h2>
        <div>
          <p>
          We are proud to be the publishers of the esteemed journal, Nexus of Future Materials, 
          dedicated to advancing the field of material science through cutting-edge research and innovation.
          
          Journal website: <a href="https://nfmjournal.com">Visit Our Journal</a>
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="Contact">
        <h2>Contact Us</h2>
        <address>
          NEXTECH MATERIALS INNOVATIONS LTD<br />
          71-75 Shelton Street, Covent Garden, London, WC2H 9JQ, United Kingdom
        </address>
      </section>

      {/* Footer */}
      <footer className="App-footer">
        <p>&copy; {new Date().getFullYear()} NEXTECH MATERIALS INNOVATIONS LTD</p>

      </footer>
    </div>
  );
}

export default App;
