import React from 'react';
import { Github, Linkedin, Facebook, Instagram, Mail, Heart, Code, Database, Terminal, Rocket } from 'lucide-react';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import ProjectCard from './components/ProjectCard';
import SkillSection from './components/SkillSection';
import AnimatedSection from './components/AnimatedSection';
import ParticleBackground from './components/ParticleBackground';
import Navbar from './components/Navbar';
import ContactForm from './components/ContactForm';
import { useLikes } from './hooks/useLikes';
import Abd from './photos/photos/abd.jpg';
import AutoCare from './photos/photos/logo.png';
import cafe from './photos/photos/cafe.png';
import expense from './photos/photos/expense.png';
import capsule from './photos/photos/capsule.png';

function App() {
  const { likes, handleLike } = useLikes();

  return (
    <div className="min-h-screen bg-black text-gray-100">
      <Navbar />
      
      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
    <ParticleBackground />
    <div className="absolute inset-0 bg-gradient-to-br from-black via-black/20 to-black"></div>

    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-center gap-10 relative z-10"
    >
        
        {/* Image Section - Set to show above text on small screens */}
        <motion.img
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            src={Abd}
            alt="M.N Abdullah"
            className="w-48 h-48 sm:w-56 sm:h-56 md:w-96 md:h-96 rounded-full mb-8 md:mb-0 border-4 border-gold-500 shadow-lg order-1 md:order-2"
        />

        {/* Text Section - Set to show below the image on small screens */}
        <div className="text-center md:text-left order-2 md:order-1">
        <motion.h1
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.2 }}
    className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gold-300 to-gold-500"
>
    M.N Abdullah
</motion.h1>

            <TypeAnimation
                sequence={[
                    'Full Stack Developer',
                    2000,
                    'DevOps Enthusiast',
                    2000,
                    'Ui / Ux Designer',
                    2000,
                ]}
                wrapper="div"
                speed={50}
                className="text-2xl text-gold-400 mb-8"
                repeat={Infinity}
            />
            
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="flex justify-center md:justify-start gap-6 mb-8"
            >
                {[
                    { icon: Github, href: "https://github.com/Abdullah0928" },
                    { icon: Linkedin, href: "https://www.linkedin.com/in/m-n-abdullah/" },
                    { icon: Facebook, href: "https://www.facebook.com/mnabdullah0928/" },
                    { icon: Instagram, href: "https://www.instagram.com/a_b_de0210/" },
                    { icon: Mail, href: "mailto:mnabdullah0928@gmail.com" },
                ].map((item, index) => (
                    <motion.a 
                        key={index}
                        href={item.href}
                        whileHover={{ scale: 1.2, rotate: 5 }}
                        whileTap={{ scale: 0.9 }}
                        className="hover:text-gold-400 transition-colors"
                    >
                        <item.icon size={24} />
                    </motion.a>
                ))}
                <motion.button
                    onClick={handleLike}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    className="flex items-center gap-2 hover:text-gold-400 transition-colors"
                >
                    <Heart
                        size={24}
                        className={`transition-colors ${likes > 0 ? 'fill-gold-500 text-gold-500' : ''}`}
                    />
                    <span>{likes}</span>
                </motion.button>
            </motion.div>

            <div className="flex flex-col md:flex-row gap-4">
            <div className="flex flex-col md:flex-row gap-4">
    <motion.a
        href="resume/Abdullah_cv.pdf"
        download
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-gradient-to-r from-gold-600 to-gold-500 text-black font-medium py-1 px-2 text-xs md:py-2 md:px-4 rounded transition-colors hover:from-gold-700 hover:to-gold-600 text-center"
    >
        Download CV
    </motion.a>

    <motion.a
        href="https://wa.me/94754999700" // Replace with your WhatsApp number
        target="_blank" // Opens the link in a new tab
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-gradient-to-r from-gold-600 to-gold-500 text-black font-medium py-1 px-2 text-xs md:py-2 md:px-4 rounded transition-colors hover:from-gold-700 hover:to-gold-600 text-center"
    >
        Hire Me
    </motion.a>
</div>


            </div>
        </div>
    </motion.div>   
</section>


      {/* About Section */}
      <section id="about" className="py-20 bg-zinc-900/50 backdrop-blur-sm">
        <AnimatedSection className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-gold-300 to-gold-500">
            About Me
          </h2>
          <div className="max-w-4xl mx-auto text-gray-300">
            <p className="mb-4">
            Driven and dependable individual with a strong passion for software engineering, actively pursuing opportunities to enhance technical skills and industry knowledge. Highly motivated to take on challenges, committed to continuous learning, and focused on delivering quality solutions. Eager to contribute effectively within a team environment, take on responsibilities, and grow into a qualified professional in the dynamic field of software engineering. Seeking a position where I can leverage my skills, dedication, and enthusiasm to add value and gain hands-on experience in the industry.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
              {[
                { icon: Code, text: "Clean Code" },
                { icon: Database, text: "Databases" },
                { icon: Terminal, text: "DevOps" },
                { icon: Rocket, text: "Deployment" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="text-center p-4 bg-zinc-800/50 backdrop-blur-sm rounded-lg border border-gold-500/20"
                >
                  <item.icon className="mx-auto mb-2 text-gold-400" />
                  <p>{item.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* Skills Section */}
      <section id="skills">
        <SkillSection />
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-black">
        <AnimatedSection className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-gold-300 to-gold-500">
            Featured Projects
          </h2>
          <div className="space-y-8">  
              <div className="grid md:grid-cols-2 gap-8">
                <ProjectCard
                  title="AutoCare-Web-Application"
                  description="Revolutionizing vehicle care by streamlining service centers through an innovative automated web application with cutting-edge technology features."
                  techStack={['React.js', 'Node.js', 'MongoDB', 'Express']}
                  image={AutoCare}
                  demoLink="#"
                  githubLink="https://github.com/Abdullah0928/project_Gems"
                />
                <ProjectCard
                  title="Cafeshila-Web-Application"
                  description="This e-commerce website is tailored for a café, allowing users to create accounts, log in, and browse a selection of items. Customers can add products to their cart and proceed with secure checkout and purchase options. The site provides a seamless shopping experience, combining an intuitive interface with easy-to-navigate features for a satisfying user experience."
                  techStack={['HTML', 'CSS', 'Javascript', 'MySql']}
                  image={cafe}
                  demoLink="#"
                  githubLink="https://github.com/Abdullah0928/Cafe-Shila"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <ProjectCard
                  title="Expense-Tracker-Web-Application"
                  description="This expense-tracking web application allows users to log daily expenses, providing a monthly summary for easy budgeting and financial overview. Users can create accounts, sign up, and manage their spending with clear, organized records. Designed for convenience, it simplifies tracking personal finances over time."
                  techStack={['React.js', 'Node.js', 'MongoDB', 'Express']}
                  image={expense}
                  demoLink="#"
                  githubLink="https://github.com/Risindu/Expense-Tracker-Web-Application"
                />
                <ProjectCard
                  title="MediReminder-Web-Application"
                  description="A brief description of another project showcasing different features and technology."
                  techStack={['React.js', 'Node.js', 'MongoDB', 'Express']}
                  image={capsule}  // You can use a different image if needed
                  demoLink="#"
                  githubLink="https://github.com/Abdullah0928/Cafe-Shila"
                />
              </div>
              
            </div>


        </AnimatedSection>
        
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-zinc-900/50 backdrop-blur-sm">
  <AnimatedSection className="container mx-auto px-4">
    <h2 className="text-3xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-gold-300 to-gold-500">
      Get In Touch
    </h2>
    
    {/* Flex Container for Contact Form and Map */}
    <div className="flex flex-col md:flex-row gap-8">
      {/* Contact Form Section */}
      <div className="w-full max-w-lg mx-auto">
        <ContactForm />
      </div>

      {/* Map Section */}
      <div className="w-full max-w-lg mx-auto">
        <h2 className="text-3xl font-bold mb-4 text-center bg-clip-text text-transparent bg-gradient-to-r from-gold-300 to-gold-500">
        </h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31613.30065970184!2d81.02240501412503!3d7.930265243971488!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3afb4460de1a203d%3A0xc2024a1eb5cd38c!2sKaduruwela%2C%20Polonnaruwa!5e0!3m2!1sen!2slk!4v1729886044776!5m2!1sen!2slk" // Replace with your Google Maps embed link
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          title="Location Map"
        ></iframe>
      </div>
    </div>
  </AnimatedSection>
</section>


      <footer className="bg-black py-8">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p>© 2024 M.N Abdullah. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

// print

export default App;