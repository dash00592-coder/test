import React, { useState, useEffect } from 'react';
import { 
  MessageSquare, 
  Sparkles, 
  Zap, 
  Shield, 
  Check, 
  Menu, 
  X, 
  ArrowRight, 
  Bot, 
  Cpu, 
  Globe,
  Search,
  Code,
  Terminal,
  User,
  Github,
  Twitter,
  Linkedin
} from 'lucide-react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Define gold color palette for reuse
  const gold = {
    primary: '#D4AF37',
    light: '#F9DF8A',
    dark: '#AA8C2C',
    gradient: 'from-[#D4AF37] to-[#F9DF8A]'
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-[#D4AF37] selection:text-black overflow-x-hidden">
      
      {/* Background Gradients - Gold */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-[#D4AF37]/10 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-[#AA8C2C]/10 blur-[120px]" />
      </div>

      {/* Navigation */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-black/90 backdrop-blur-md border-b border-[#D4AF37]/30 py-4' : 'bg-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <img src="image_5b07f8.png" alt="Asknue Logo" className="w-10 h-10 rounded-xl shadow-lg shadow-[#D4AF37]/20" />
            <div className="flex flex-col leading-none">
              <span className="text-2xl font-bold tracking-tight text-white">Asknue</span>
              <span className="text-[10px] text-[#D4AF37] font-medium tracking-wider uppercase">Ask + Knew</span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
            <button onClick={() => scrollToSection('features')} className="hover:text-[#D4AF37] transition-colors">Platform</button>
            <button onClick={() => scrollToSection('api-docs')} className="hover:text-[#D4AF37] transition-colors">API Docs</button>
            <button onClick={() => scrollToSection('developer')} className="hover:text-[#D4AF37] transition-colors">Developer</button>
            <button onClick={() => scrollToSection('pricing')} className="hover:text-[#D4AF37] transition-colors">Pricing</button>
            <button className={`bg-gradient-to-r ${gold.gradient} text-black px-6 py-2.5 rounded-full hover:shadow-lg hover:shadow-[#D4AF37]/30 transition-all font-bold`}>
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-gray-300" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-black border-b border-[#D4AF37]/30 p-6 md:hidden flex flex-col gap-4 shadow-xl">
            <button onClick={() => scrollToSection('features')} className="text-left text-gray-300 hover:text-[#D4AF37] py-2">Platform</button>
            <button onClick={() => scrollToSection('api-docs')} className="text-left text-gray-300 hover:text-[#D4AF37] py-2">API Docs</button>
            <button onClick={() => scrollToSection('developer')} className="text-left text-gray-300 hover:text-[#D4AF37] py-2">Developer</button>
            <button onClick={() => scrollToSection('pricing')} className="text-left text-gray-300 hover:text-[#D4AF37] py-2">Pricing</button>
            <button className={`bg-gradient-to-r ${gold.gradient} text-black w-full py-3 rounded-lg font-semibold`}>Get Started</button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 pt-32 pb-20 lg:pt-48 lg:pb-32 container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Hero Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#111111] border border-[#D4AF37]/50 text-[#D4AF37] text-xs font-semibold tracking-wide uppercase mb-8 animate-fade-in-up hover:border-[#D4AF37] transition-colors cursor-default">
              <Sparkles className="w-3 h-3" />
              <span>Powered by FastAPI & Transformer Architecture</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-8">
              <span className="text-white">Ask anything.</span><br />
              <span className={`text-transparent bg-clip-text bg-gradient-to-r ${gold.gradient} animate-gradient`}>We already knew.</span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Experience the next evolution of AI. Asknue ChatNLP connects you to a high-performance FastAPI backend trained on real-world conversations.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button className={`w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r ${gold.gradient} text-black font-semibold hover:shadow-lg hover:shadow-[#D4AF37]/30 transition-all flex items-center justify-center gap-2`}>
                Start Conversing <ArrowRight className="w-4 h-4" />
              </button>
              <button className="w-full sm:w-auto px-8 py-4 rounded-full bg-transparent border border-[#D4AF37]/50 text-white font-semibold hover:bg-[#111111] hover:border-[#D4AF37] transition-all">
                Read API Docs
              </button>
            </div>
            
            <div className="mt-12 flex items-center justify-center lg:justify-start gap-8 text-gray-400 text-sm font-medium">
              <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]"/> FastAPI Backend</span>
              <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]"/> 99.9% Uptime</span>
              <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]"/> &lt; 50ms Latency</span>
            </div>
          </div>

          {/* Hero Visual / Mockup */}
          <div className="flex-1 w-full max-w-lg lg:max-w-xl relative">
            <div className="absolute inset-0 bg-[#D4AF37]/20 blur-[80px] rounded-full opacity-50" />
            
            {/* Main Chat Interface */}
            <div className="relative bg-[#0a0a0a] border border-[#D4AF37]/30 rounded-2xl p-1 shadow-2xl ring-1 ring-[#D4AF37]/10">
              <div className="bg-[#111111] rounded-xl overflow-hidden">
                {/* Header */}
                <div className="flex items-center justify-between px-4 py-3 border-b border-[#D4AF37]/20 bg-[#0a0a0a]">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-red-500/80" />
                    <div className="w-2 h-2 rounded-full bg-yellow-500/80" />
                    <div className="w-2 h-2 rounded-full bg-green-500/80" />
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-400 font-mono">
                    <Shield className="w-3 h-3 text-[#D4AF37]" /> Asknue Secure
                  </div>
                </div>

                {/* Chat Area */}
                <div className="p-6 space-y-6 min-h-[300px]">
                  {/* User Message */}
                  <div className="flex justify-end">
                    <div className={`bg-gradient-to-r ${gold.gradient} text-black px-4 py-2.5 rounded-2xl rounded-tr-sm max-w-[85%] text-sm shadow-md`}>
                      Generate a Python FastAPI endpoint for this chat.
                    </div>
                  </div>

                  {/* Bot Message */}
                  <div className="flex justify-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#0a0a0a] border border-[#D4AF37]/30 flex-shrink-0 flex items-center justify-center shadow-lg">
                       <img src="image_5b07f8.png" alt="Asknue Bot" className="w-5 h-5" />
                    </div>
                    <div className="bg-[#1a1a1a] border border-[#D4AF37]/20 text-gray-200 px-5 py-4 rounded-2xl rounded-tl-none max-w-[90%] text-sm shadow-sm backdrop-blur-sm">
                      <p className="mb-3">Here is a simple example using <code>FastAPI</code>:</p>
                      <pre className="bg-black/50 p-3 rounded-lg text-xs font-mono text-[#F9DF8A] overflow-x-auto border border-[#D4AF37]/10">
                        {`@app.post("/v1/chat")
async def chat(msg: Message):
    return {"response": "Hello!"}`}
                      </pre>
                      <div className="flex gap-2 mt-3">
                         <span className="text-[10px] bg-[#111111] border border-[#D4AF37]/30 px-2 py-1 rounded text-gray-400">Python 3.10+</span>
                         <span className="text-[10px] bg-[#111111] border border-[#D4AF37]/30 px-2 py-1 rounded text-gray-400">FastAPI</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Input Area */}
                <div className="p-4 border-t border-[#D4AF37]/20 bg-[#0a0a0a]">
                  <div className="relative">
                    <input 
                      type="text" 
                      placeholder="Ask anything..." 
                      className="w-full bg-[#111111] border border-[#D4AF37]/30 rounded-lg py-3 pl-4 pr-12 text-gray-300 placeholder:text-gray-600 focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all text-sm"
                    />
                    <button className={`absolute right-2 top-2 p-1.5 bg-gradient-to-r ${gold.gradient} rounded-md hover:shadow-sm transition-colors`}>
                      <ArrowRight className="w-3.5 h-3.5 text-black" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 relative z-10 container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Built on Modern Stacks</h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            We leverage the speed of FastAPI and the power of Transformer models to deliver unparalleled conversational experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: <Zap className="w-5 h-5 text-[#D4AF37]" />,
              title: "FastAPI Backend",
              desc: "Built on Starlette and Pydantic for high performance, ease of use, and automatic data validation."
            },
            {
              icon: <Search className="w-5 h-5 text-[#D4AF37]" />,
              title: "Semantic Search",
              desc: "Don't just match keywords. Asknue retrieves information based on the intent of the query."
            },
            {
              icon: <Globe className="w-5 h-5 text-[#D4AF37]" />,
              title: "Global Native",
              desc: "Trained on native datasets across 40 languages, understanding local idioms and culture."
            }
          ].map((feature, idx) => (
            <div key={idx} className="group p-8 rounded-3xl bg-[#111111] border border-[#D4AF37]/20 hover:border-[#D4AF37]/50 hover:bg-[#1a1a1a] transition-all duration-300">
              <div className="w-10 h-10 rounded-lg bg-[#0a0a0a] border border-[#D4AF37]/30 group-hover:border-[#D4AF37] group-hover:bg-[#D4AF37]/10 flex items-center justify-center mb-6 transition-all">
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold mb-3 text-white">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed text-sm">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* API Documentation / Workflow Section */}
      <section id="api-docs" className="py-32 bg-[#0a0a0a] border-y border-[#D4AF37]/20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-20">
            <div className="flex-1 space-y-8">
               <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4AF37]/10 text-[#D4AF37] text-xs font-mono mb-2">
                  <Terminal className="w-3 h-3" />
                  <span>pip install asknue-sdk</span>
               </div>
               <h2 className="text-3xl md:text-5xl font-bold">
                 Developers love<br/>
                 <span className="text-[#D4AF37]">FastAPI Integration.</span>
               </h2>
               <p className="text-gray-400 text-lg">
                 Our API is designed to be intuitive. Connect to our FastAPI backend using standard HTTP requests or our Python SDK.
               </p>
               
               <div className="space-y-6 pt-4">
                 {[
                   { step: "01", title: "Async Support", text: "Fully asynchronous endpoints for high concurrency." },
                   { step: "02", title: "OpenAPI Schema", text: "Automatic interactive API documentation (Swagger UI)." },
                   { step: "03", title: "Type Safety", text: "End-to-end type safety with Pydantic models." }
                 ].map((item, i) => (
                   <div key={i} className="flex gap-5 group">
                     <div className={`w-10 h-10 flex-shrink-0 rounded-full bg-[#111111] border border-[#D4AF37]/50 flex items-center justify-center font-bold text-[#D4AF37] group-hover:bg-gradient-to-r ${gold.gradient} group-hover:text-black group-hover:border-transparent transition-all`}>
                       {i + 1}
                     </div>
                     <div>
                       <h4 className="text-lg font-bold text-gray-200 mb-1">{item.title}</h4>
                       <p className="text-gray-500 font-mono text-sm">{item.text}</p>
                     </div>
                   </div>
                 ))}
               </div>
            </div>
            
            <div className="flex-1 w-full relative">
              <div className="absolute inset-0 bg-[#D4AF37]/10 blur-[60px] rounded-full" />
              <div className="relative rounded-xl overflow-hidden shadow-2xl border border-[#D4AF37]/30 bg-[#0a0a0a]">
                <div className="flex items-center justify-between px-4 py-3 bg-black border-b border-[#D4AF37]/20">
                  <span className="text-xs text-gray-500 font-mono">backend/main.py</span>
                  <div className="flex gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#D4AF37]/20 hover:bg-[#D4AF37] transition-colors"/>
                    <div className="w-2.5 h-2.5 rounded-full bg-[#D4AF37]/20 hover:bg-[#D4AF37] transition-colors"/>
                  </div>
                </div>
                <div className="p-8 overflow-x-auto bg-[#111111]">
                  <pre className="font-mono text-sm leading-relaxed">
                    <code>
<span className="text-[#F9DF8A]">from</span> fastapi <span className="text-[#F9DF8A]">import</span> FastAPI
<span className="text-[#F9DF8A]">from</span> pydantic <span className="text-[#F9DF8A]">import</span> BaseModel

app = FastAPI()

<span className="text-gray-500"># Define your data model</span>
<span className="text-[#F9DF8A]">class</span> <span className="text-white">Query</span>(BaseModel):
    prompt: <span className="text-[#D4AF37]">str</span>
    model: <span className="text-[#D4AF37]">str</span> = <span className="text-[#D4AF37]">"asknue-v1"</span>

<span className="text-gray-500"># Create the endpoint</span>
<span className="text-[#D4AF37]">@app.post</span>(<span className="text-[#D4AF37]">'/generate'</span>)
<span className="text-[#F9DF8A]">async def</span> <span className="text-white">generate_response</span>(query: Query):
    <span className="text-gray-500"># Call Asknue engine</span>
    response = engine.predict(query.prompt)
    <span className="text-[#F9DF8A]">return</span> {`{`}
        <span className="text-[#D4AF37]">"text"</span>: response,
        <span className="text-[#D4AF37]">"confidence"</span>: <span className="text-[#D4AF37]">0.98</span>
    {`}`}
                    </code>
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MEET THE DEVELOPER SECTION */}
      <section id="developer" className="py-24 container mx-auto px-6 relative z-10 border-b border-[#D4AF37]/20">
         <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-12 bg-[#111111] border border-[#D4AF37]/30 rounded-[2rem] p-8 md:p-12 shadow-2xl relative overflow-hidden">
               
               {/* Decorative background element */}
               <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4AF37]/10 blur-[80px] rounded-full pointer-events-none"></div>

               {/* Photo */}
               <div className="relative group flex-shrink-0">
                  <div className="absolute -inset-1 bg-gradient-to-r from-[#D4AF37] to-[#AA8C2C] rounded-full blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                  <img 
                    src="image_5aab11.png" 
                    alt="Lead Developer" 
                    className="relative w-48 h-48 md:w-56 md:h-56 rounded-full object-cover border-4 border-black shadow-2xl"
                  />
                  <div className="absolute bottom-2 right-2 bg-black border border-[#D4AF37] p-2 rounded-full">
                    <Code className="w-5 h-5 text-[#D4AF37]" />
                  </div>
               </div>

               {/* Content */}
               <div className="text-center md:text-left">
                  <div className="inline-block px-3 py-1 mb-4 border border-[#D4AF37]/30 rounded-full bg-[#D4AF37]/10 text-[#D4AF37] text-xs font-bold tracking-widest uppercase">
                    Lead Architect
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Meet the Creator</h2>
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    Building the bridge between human curiosity and artificial intelligence. With a passion for <strong>FastAPI</strong> and scalable backend architecture, I designed Asknue to be robust, secure, and incredibly fast.
                  </p>
                  
                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-8">
                     {['FastAPI', 'Python', 'React', 'TensorFlow', 'PostgreSQL'].map((tech) => (
                        <span key={tech} className="px-3 py-1 bg-black border border-[#D4AF37]/20 rounded-md text-xs text-gray-300">
                           {tech}
                        </span>
                     ))}
                  </div>

                  <div className="flex items-center justify-center md:justify-start gap-4">
                     <button className="p-2 rounded-full bg-[#1a1a1a] hover:bg-[#D4AF37] hover:text-black transition-all border border-[#D4AF37]/20">
                        <Github className="w-5 h-5" />
                     </button>
                     <button className="p-2 rounded-full bg-[#1a1a1a] hover:bg-[#D4AF37] hover:text-black transition-all border border-[#D4AF37]/20">
                        <Twitter className="w-5 h-5" />
                     </button>
                     <button className="p-2 rounded-full bg-[#1a1a1a] hover:bg-[#D4AF37] hover:text-black transition-all border border-[#D4AF37]/20">
                        <Linkedin className="w-5 h-5" />
                     </button>
                     <button className={`ml-4 px-6 py-2 rounded-full bg-gradient-to-r ${gold.gradient} text-black font-bold text-sm hover:shadow-lg transition-all`}>
                        Contact Me
                     </button>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-32 container mx-auto px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Simple pricing</h2>
          <p className="text-gray-400">Choose the plan that fits your knowledge needs.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Starter */}
          <div className="p-10 rounded-3xl bg-[#111111] border border-[#D4AF37]/20 flex flex-col hover:border-[#D4AF37]/50 transition-all">
            <h3 className="text-lg font-semibold text-gray-300 mb-2">Developer</h3>
            <div className="text-4xl font-bold mb-6 text-white">$0<span className="text-lg font-normal text-gray-500">/mo</span></div>
            <p className="text-gray-400 mb-8 text-sm leading-relaxed">For hobbyists experimenting with conversational AI.</p>
            <ul className="space-y-4 mb-8 flex-1">
              {['5,000 tokens/mo', 'Community Support', '1 Knowledge Base', 'Standard Latency'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-300 text-sm">
                  <Check className="w-4 h-4 text-[#D4AF37]" /> {item}
                </li>
              ))}
            </ul>
            <button className="w-full py-4 rounded-xl border border-[#D4AF37]/50 text-white font-semibold hover:bg-[#1a1a1a] hover:border-[#D4AF37] transition-colors">
              Start Building
            </button>
          </div>

          {/* Pro */}
          <div className="p-10 rounded-3xl bg-[#0a0a0a] border-2 border-[#D4AF37] relative flex flex-col shadow-2xl shadow-[#D4AF37]/20 transform md:-translate-y-4">
            <div className={`absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r ${gold.gradient} text-black text-[10px] font-bold px-3 py-1 rounded-full tracking-widest uppercase`}>
              Recommended
            </div>
            <h3 className="text-lg font-semibold text-[#D4AF37] mb-2">Business</h3>
            <div className="text-4xl font-bold mb-6 text-white">$49<span className="text-lg font-normal text-gray-500">/mo</span></div>
            <p className="text-gray-300 mb-8 text-sm leading-relaxed">For startups scaling their AI integration.</p>
            <ul className="space-y-4 mb-8 flex-1">
              {['1M tokens/mo', 'Priority Support', 'Unlimited Knowledge Bases', 'Fine-tuning Access', 'Analytics Dashboard'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-white text-sm">
                  <div className="bg-[#D4AF37]/20 rounded-full p-0.5"><Check className="w-3 h-3 text-[#D4AF37]" /></div> {item}
                </li>
              ))}
            </ul>
            <button className={`w-full py-4 rounded-xl bg-gradient-to-r ${gold.gradient} text-black font-semibold hover:shadow-lg hover:shadow-[#D4AF37]/30 transition-colors`}>
              Get Started
            </button>
          </div>

          {/* Enterprise */}
          <div className="p-10 rounded-3xl bg-[#111111] border border-[#D4AF37]/20 flex flex-col hover:border-[#D4AF37]/50 transition-all">
            <h3 className="text-lg font-semibold text-gray-300 mb-2">Enterprise</h3>
            <div className="text-4xl font-bold mb-6 text-white">Custom</div>
            <p className="text-gray-400 mb-8 text-sm leading-relaxed">For large scale production workloads.</p>
            <ul className="space-y-4 mb-8 flex-1">
              {['Unlimited Volume', 'Dedicated GPU Clusters', 'SLA & 99.99% Uptime', '24/7 Dedicated Support', 'Custom Model Training'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-300 text-sm">
                  <Check className="w-4 h-4 text-[#D4AF37]" /> {item}
                </li>
              ))}
            </ul>
            <button className="w-full py-4 rounded-xl border border-[#D4AF37]/50 text-white font-semibold hover:bg-[#1a1a1a] hover:border-[#D4AF37] transition-colors">
              Contact Sales
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-[#D4AF37]/20 pt-20 pb-10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
            <div className="col-span-2 md:col-span-1">
               <div className="flex items-center gap-2 mb-6">
                <img src="image_5b07f8.png" alt="Asknue Logo" className="w-8 h-8 rounded-lg shadow-sm shadow-[#D4AF37]/20" />
                <span className="text-xl font-bold text-white">Asknue</span>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed pr-4">
                Asknue is a research lab and technology company building reliable, safe, and steerable AI systems.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold text-white mb-6">Product</h4>
              <ul className="space-y-4 text-sm text-gray-500">
                <li><a href="#" className="hover:text-[#D4AF37] transition-colors">Research</a></li>
                <li><a href="#" className="hover:text-[#D4AF37] transition-colors">ChatNLP</a></li>
                <li><a href="#" className="hover:text-[#D4AF37] transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-[#D4AF37] transition-colors">Changelog</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-white mb-6">Resources</h4>
              <ul className="space-y-4 text-sm text-gray-500">
                <li><a href="#" className="hover:text-[#D4AF37] transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-[#D4AF37] transition-colors">API Reference</a></li>
                <li><a href="#" className="hover:text-[#D4AF37] transition-colors">Community</a></li>
                <li><a href="#" className="hover:text-[#D4AF37] transition-colors">Help Center</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-white mb-6">Company</h4>
              <ul className="space-y-4 text-sm text-gray-500">
                <li><a href="#" className="hover:text-[#D4AF37] transition-colors">About Asknue</a></li>
                <li><a href="#" className="hover:text-[#D4AF37] transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-[#D4AF37] transition-colors">Legal</a></li>
                <li><a href="#" className="hover:text-[#D4AF37] transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-[#D4AF37]/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600">
            <p>&copy; {new Date().getFullYear()} Asknue Inc. All rights reserved.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-[#D4AF37] transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-[#D4AF37] transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-[#D4AF37] transition-colors">Security</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
