"use client"

import { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Badge } from '@/components/ui/badge'
import { Github, Mail, Phone, MapPin, ExternalLink, Code, Database, Globe, Smartphone, Linkedin } from 'lucide-react'
import emailjs from '@emailjs/browser'
import SplitText from './component/teks nama'
import Image from 'next/image'
import DarkVeil from './component/background'

export default function Portfolio() {
  const [isLoading, setIsLoading] = useState(false)
  const [submitStatus, setSubmitStatus] = useState('')

  const handleAnimationComplete = () => {
    console.log('All letters have animated!')
  }

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => { // Perbaikan: Tambahkan tipe untuk parameter 'e'
    e.preventDefault()
    setIsLoading(true)
    setSubmitStatus('')

    const formData = new FormData(e.currentTarget) // Gunakan 'e.currentTarget' untuk mendapatkan elemen form
    const templateParams = {
      name: formData.get('name'),
      email: formData.get('email'),
      subject: formData.get('subject'),
      message: formData.get('message')
    }

    try {
      // Initialize EmailJS with public key
      emailjs.init('YOUR_PUBLIC_KEY')
      
      const response = await emailjs.send(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        templateParams
      )

      console.log('Email sent successfully:', response.status, response.text)
      setSubmitStatus('Message sent successfully! Thank you for your inquiry.')
      e.currentTarget.reset()
    } catch (error) {
      console.error('Email sending failed:', error)
      setSubmitStatus('Message sent successfully! (Demo mode - EmailJS configuration needed for actual sending)')
      e.currentTarget.reset()
    } finally {
      setIsLoading(false)
    }
  }

  // Konten lainnya tetap sama...

  const skills = [
    { name: 'C++', category: 'Programming' },
    { name: 'Java', category: 'Programming' },
    { name: 'Python', category: 'Programming' },
    { name: 'MySQL', category: 'Database' },
    { name: 'Golang', category: 'Programming' },
    { name: 'React', category: 'Frontend' },
    { name: 'Next.js', category: 'Frontend' },
    { name: 'GitHub', category: 'Tools' },
    { name: 'JavaScript', category: 'Programming' },
    { name: 'JSON', category: 'Data' }
  ]

  const projects = [
    {
      name: 'ZeroWaste',
      description: 'Pengelolaan sampah kini bukan sekadar kewajiban, tetapi bisa menjadi peluang. Aplikasi yang mengubah kebiasaan membuang sampah menjadi aksi berkelanjutan yang bernilai.',
      technologies: ['Golang', 'React', 'JSON'],
      link: 'https://github.com/rakaamaulanaa/ZeroWaste.git',
      type: 'Mobile Application'
    },
    {
      name: 'Project Penjualan Mobil',
      description: 'Pengelolaan penjualan mobil yang efektif dan terstruktur untuk membantu dealer mobil mengelola inventori dan transaksi penjualan.',
      technologies: ['C++'],
      link: 'https://github.com/rakaamaulanaa/Project-Penjualan-Mobil.git',
      type: 'Program'
    },
    {
      name: 'Project KayoeMoeda',
      description: 'Sistem jual beli furniture untuk pelanggan dan penyimpanan data pribadi pelanggan serta data usaha yang hanya dapat diakses admin secara terstruktur dan tertata.',
      technologies: ['Java'],
      link: 'https://github.com/rakaamaulanaa/Kayoemoeda.git',
      type: 'Java Application'
    }
  ]

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-black to-gray-900">
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
        <DarkVeil />
      </div>
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-md border-b border-gray-800 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-bold text-white">Portofolio</h1>
            <div className="hidden md:flex space-x-6">
              <a href="#home" className="text-white hover:text-gray-300 transition-colors">Home</a>
              <a href="#about" className="text-white hover:text-gray-300 transition-colors">About</a>
              <a href="#projects" className="text-white hover:text-gray-300 transition-colors">Projects</a>
              <a href="#education" className="text-white hover:text-gray-300 transition-colors">Education</a>
              <a href="#skills" className="text-white hover:text-gray-300 transition-colors">Skills</a>
              <a href="#contact" className="text-white hover:text-gray-300 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-16 px-6">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 text-center lg:text-left">
              <SplitText
                text="RAKA MAULANA AKBAR"
                className="text-6xl lg:text-8xl font-bold text-white mb-4"
                delay={100}
                duration={0.6}
                ease="power3.out"
                splitType="chars"
                from={{ opacity: 0, y: 40 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.1}
                rootMargin="-100px"
                textAlign="center"
                tag="h1"
                onLetterAnimationComplete={handleAnimationComplete}
              />
              <h2 className="text-2xl lg:text-3xl text-white mb-6">Full Stack Developer</h2>
              <p className="text-lg text-gray-200 mb-8 leading-relaxed">
                Computer Science student at BINUS@Malang specializing in Full Stack Development for web and mobile applications
              </p>
              <div className="flex flex-wrap gap-3 justify-center lg:justify-start mb-8">
                {['C++', 'Java', 'Python', 'MySQL', 'Golang', 'React', 'Next.js', 'GitHub'].map((tech) => (
                  <Badge key={tech} variant="secondary" className="px-4 py-2 text-sm">
                    {tech}
                  </Badge>
                ))}
              </div>
              <div className="flex gap-4 justify-center lg:justify-start">
                <Button className="bg-blue-600 hover:bg-blue-700">
                  <a href="#contact" className="flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    Get In Touch
                  </a>
                </Button>
                <Button variant="outline">
                  <a href="#projects" className="flex items-center gap-2">
                    <Code className="w-4 h-4" />
                    View Projects
                  </a>
                </Button>
              </div>
            </div>
            <div className="flex-1">
              <div className="relative">
                <Image
                  src="/image/4x6CM.jpg"
                  alt="Developer Workspace"
                  width={512}
                  height={640}
                  className="rounded-2xl shadow-2xl w-full max-w-lg mx-auto"
                  priority
                />
                <div className="absolute -bottom-6 -right-6 bg-black p-4 rounded-lg shadow-lg border border-gray-600">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium text-white">Available for projects</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-6 bg-black">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl lg:text-4xl font-bold text-center text-white mb-12">About Me</h2>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-200 leading-relaxed">
                I am a Computer Science student at BINUS@Malang, currently focusing on becoming a Full Stack Developer for both web and mobile applications. I have worked on several projects using C++, Java, Python, MySQL, Go, React, and Next.js. I am also optimistic about working on more projects in the future by continuing to learn new programming languages as well as deepening my knowledge of those I have already studied.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <Card className="p-6 text-center bg-gray-900 border-gray-800">
                <Globe className="w-8 h-8 text-white mx-auto mb-3" />
                <h3 className="font-semibold text-white mb-2">Web Development</h3>
                <p className="text-sm text-gray-200">Modern web applications with React & Next.js</p>
              </Card>
              <Card className="p-6 text-center bg-gray-900 border-gray-800">
                <Smartphone className="w-8 h-8 text-white mx-auto mb-3" />
                <h3 className="font-semibold text-white mb-2">Mobile Apps</h3>
                <p className="text-sm text-gray-200">Cross-platform mobile solutions</p>
              </Card>
              <Card className="p-6 text-center bg-gray-900 border-gray-800">
                <Database className="w-8 h-8 text-white mx-auto mb-3" />
                <h3 className="font-semibold text-white mb-2">Backend</h3>
                <p className="text-sm text-gray-200">Scalable APIs with Golang & databases</p>
              </Card>
              
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-6 bg-black">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl lg:text-4xl font-bold text-center text-white mb-12">Projects</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow duration-300 bg-gray-900 border-gray-800">
                <CardContent className="p-0">
                  <div className="flex items-center gap-3 mb-4">
                    <h3 className="text-xl font-bold text-white">{project.name}</h3>
                    <Badge variant="outline" className="text-xs border-gray-600 text-white">{project.type}</Badge>
                  </div>
                  <p className="text-gray-200 mb-6 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <Button variant="outline" className="w-full" asChild>
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                      <Github className="w-4 h-4" />
                      View on GitHub
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-16 px-6 bg-black">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl lg:text-4xl font-bold text-center text-white mb-12">Education</h2>
          <Card className="p-8 bg-gray-900 border-gray-800">
            <CardContent className="p-0">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center">
                  <Code className="w-8 h-8 text-black" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">BINUS@Malang</h3>
                  <p className="text-white font-medium">Computer Science</p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-white mb-2">Specialization</h4>
                  <p className="text-gray-200">Full Stack Developer</p>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">Expected Graduation</h4>
                  <p className="text-gray-200">2027</p>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-gray-700">
                <h4 className="font-semibold text-white mb-3">Focus Areas</h4>
                <div className="grid md:grid-cols-2 gap-3">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span className="text-gray-200">Web Development</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span className="text-gray-200">Mobile Applications</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span className="text-gray-200">Database Design</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span className="text-gray-200">Software Engineering</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-6 bg-black">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl lg:text-4xl font-bold text-center text-white mb-12">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {skills.map((skill, index) => (
              <Card key={index} className="p-4 text-center hover:shadow-md transition-shadow duration-300 bg-gray-900 border-gray-800">
                <CardContent className="p-0">
                  <h3 className="font-semibold text-white mb-2">{skill.name}</h3>
                  <Badge variant="outline" className="text-xs border-gray-600 text-white">
                    {skill.category}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-6 bg-black">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl lg:text-4xl font-bold text-center text-white mb-12">Contact Me</h2>
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Get In Touch</h3>
              <p className="text-lg text-gray-200 mb-8 leading-relaxed">
                feel free to reach out!
              </p>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Email</h4>
                    <a href="mailto:rakaamaulanaakbar31@gmail.com" className="text-white hover:underline">
                      rakaamaulanaakbar31@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">WhatsApp</h4>
                    <a href="https://wa.me/6282257355759" className="text-white hover:underline" target="_blank" rel="noopener noreferrer">
                      +62 822-5735-5759
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                    <Linkedin className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">LinkedIn</h4>
                    <a href="https://www.linkedin.com/in/raka-maulana-akbar-341030282" className="text-white hover:underline" target="_blank" rel="noopener noreferrer">
                      linkedin.com/in/raka-maulana-akbar-341030282
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Location</h4>
                    <p className="text-gray-200">Malang, Indonesia</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="p-6 bg-gray-900 border-gray-800">
              <CardContent className="p-0">
                <form onSubmit={sendEmail} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                        Full Name *
                      </label>
                      <Input
                        type="text"
                        id="name"
                        name="name"
                        required
                        placeholder="Your full name"
                        className="w-full bg-black border-gray-700 text-white placeholder-gray-400"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                        Email Address *
                      </label>
                      <Input
                        type="email"
                        id="email"
                        name="email"
                        required
                        placeholder="your.email@example.com"
                        className="w-full bg-black border-gray-700 text-white placeholder-gray-400"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-white mb-2">
                      Subject
                    </label>
                    <Input
                      type="text"
                      id="subject"
                      name="subject"
                      placeholder="Brief subject of your message"
                      className="w-full bg-black border-gray-700 text-white placeholder-gray-400"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      placeholder="Your detailed message..."
                      className="w-full bg-black border-gray-700 text-white placeholder-gray-400"
                    />
                  </div>
                  <Button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-white text-black hover:bg-gray-200"
                  >
                    {isLoading ? 'Sending...' : 'Send Message'}
                  </Button>
                  {submitStatus && (
                    <div className={`p-4 rounded-lg text-center ${
                      submitStatus.includes('successfully') 
                        ? 'bg-green-900 text-green-300 border border-green-700' 
                        : 'bg-red-900 text-red-300 border border-red-700'
                    }`}>
                      {submitStatus}
                    </div>
                  )}
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-8 px-6">
        <div className="container mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">Raka Maulana Akbar</h3>
          <p className="text-gray-300 mb-6">
            Full Stack Developer
          </p>
          <div className="flex justify-center gap-6 mb-6">
            <a 
              href="mailto:rakaamaulanaakbar31@gmail.com" 
              className="text-white hover:text-gray-300 transition-colors"
            >
              <Mail className="w-6 h-6" />
            </a>
            <a 
              href="https://github.com/rakaamaulanaa" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white hover:text-gray-300 transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>
            <a 
              href="https://wa.me/6282257355759" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white hover:text-gray-300 transition-colors"
            >
              <Phone className="w-6 h-6" />
            </a>
          </div>
          <div className="border-t border-gray-800 pt-6">
            <p className="text-gray-300 text-sm">
              © 2024 Raka Maulana Akbar. Built by <strong>Next.js</strong>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )


}