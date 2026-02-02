import { useState } from 'react';
import { Calendar, FileText, User, Award, Clock, MapPin, Globe, Menu, X, ChevronRight, Mail, Phone, Download, ExternalLink, Users, Presentation, BookOpen, Heart, Music } from 'lucide-react';
import { motion } from 'framer-motion';
import logoImage from './assets/action4logo.png';
import speakerImage from './assets/johngarzoli.jpg';

const NAV = [
  { href: '#about', label: 'เกี่ยวกับงาน' },
  { href: '#speaker', label: 'วิทยากร' },
  { href: '#categories', label: 'ประเภทบทความ' },
  { href: '#timeline', label: 'กำหนดการ' },
  { href: '#submission', label: 'ส่งบทความ' },
  { href: '#contact', label: 'ติดต่อ' },
];

const TIMELINE = [
  { 
    task: 'ประกาศรับบทความ', 
    date: 'กุมภาพันธ์ 2569', 
    description: 'เปิดรับบทความและบทคัดย่อผ่านเว็บไซต์',
    status: 'active' 
  },
  { 
    task: 'ปิดรับบทความ', 
    date: '30 มีนาคม 2569', 
    description: 'หมดเขตการส่งบทความและบทคัดย่อ',
    status: 'upcoming' 
  },
  { 
    task: 'ประกาศผลพิจารณา', 
    date: '15 เมษายน 2569', 
    description: 'แจ้งผลการพิจารณาจากผู้ทรงคุณวุฒิ',
    status: 'upcoming' 
  },
  { 
    task: 'ส่งฉบับแก้ไข', 
    date: '30 เมษายน 2569', 
    description: 'ส่งบทความฉบับแก้ไขตามข้อเสนอแนะ',
    status: 'upcoming' 
  },
  { 
    task: 'ประกาศรายชื่อผู้นำเสนอ', 
    date: '1 พฤษภาคม 2569', 
    description: 'ประกาศรายชื่อผู้นำเสนออย่างเป็นทางการ',
    status: 'upcoming' 
  },
  { 
    task: 'วันจัดงานประชุมวิชาการ', 
    date: '7 พฤษภาคม 2569', 
    description: 'วันจัดการประชุมวิชาการ ACTION 4th',
    status: 'upcoming',
    highlight: true
  },
];

const PRESENTATION_CATEGORIES = [
  {
    icon: BookOpen,
    title: 'ดนตรีศึกษา',
    description: 'การเรียนการสอนดนตรี หลักสูตร และนวัตกรรมการศึกษา',
    color: 'from-blue-500 to-indigo-600'
  },
  {
    icon: Music,
    title: 'ดนตรีวิทยา',
    description: 'ดนตรีไทย ดนตรีตะวันตก และดนตรีพื้นเมือง',
    color: 'from-purple-500 to-pink-600',
    subcategories: ['ดนตรีไทย', 'ดนตรีตะวันตก', 'ดนตรีพื้นเมือง']
  },
  {
    icon: Presentation,
    title: 'ดนตรีสร้างสรรค์',
    description: 'การแต่งเพลง การประพันธ์ และนวัตกรรมดนตรี',
    color: 'from-orange-500 to-red-600'
  },
  {
    icon: Heart,
    title: 'ดนตรีเพื่อสุขภาพ',
    description: 'ดนตรีบำบัด สุขภาวะ (Well-being) และสุขภาพจิต',
    color: 'from-green-500 to-teal-600'
  },
];

const AWARDS = [
  {
    rank: '1',
    title: 'รางวัลนำเสนอดีเด่น',
    description: 'มอบให้แก่การนำเสนอที่โดดเด่น ห้องละ 3 รางวัล',
    details: 'พิจารณาจากคุณภาพเนื้อหา การนำเสนอ และการตอบคำถาม',
    gradient: 'from-yellow-400 via-yellow-500 to-yellow-600',
    certificate: true
  },
  {
    rank: '2',
    title: 'รางวัลบทความดีเด่น',
    description: 'คัดเลือกตามคุณภาพทางวิชาการและความเป็นต้นฉบับ',
    details: 'จำนวนรางวัลขึ้นอยู่กับคุณภาพของบทความ',
    gradient: 'from-orange-400 via-orange-500 to-orange-600',
    certificate: true
  },
  {
    rank: '★',
    title: 'รางวัลบทความที่สอดคล้องกับ Theme',
    description: 'บทความที่สะท้อนแนวคิด "การฟังดนตรีอย่างลึกซึ้ง" ได้ดีเยี่ยม',
    details: 'จำนวนรางวัลขึ้นอยู่กับคุณภาพของบทความ',
    gradient: 'from-indigo-400 via-purple-500 to-pink-600',
    certificate: true,
    special: true
  }
];

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <div className="min-h-screen font-sans text-indigo bg-cotton">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white/98 backdrop-blur-xl border-b border-indigo/10 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <motion.img 
              src={logoImage} 
              alt="ACTION 4th" 
              className="h-12 md:h-14 w-auto cursor-pointer"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            />
            <div className="hidden lg:flex gap-1 items-center">
              {NAV.map((item) => (
                <a 
                  key={item.href} 
                  href={item.href} 
                  className="px-4 py-2.5 text-indigo font-medium hover:text-laterite transition-all duration-300 rounded-lg hover:bg-indigo/5 relative group text-sm"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-laterite transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </div>
            <div className="lg:hidden">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)} 
                className="text-indigo p-2 hover:bg-indigo/5 rounded-lg transition-all duration-300"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
        {isMenuOpen && (
          <motion.div 
            className="lg:hidden bg-white border-t border-indigo/10 shadow-lg"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <div className="px-4 py-4 space-y-1">
              {NAV.map((item) => (
                <a 
                  key={item.href} 
                  href={item.href} 
                  className="block px-4 py-3 text-indigo font-medium hover:bg-indigo/5 rounded-lg transition-all duration-300" 
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <header className="relative py-20 md:py-32 lg:py-40 bg-white overflow-hidden">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-indigo/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-laterite/5 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl"></div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <motion.img 
              src={logoImage} 
              alt="ACTION 4th" 
              className="h-48 md:h-64 lg:h-72 w-auto mx-auto mb-8 drop-shadow-2xl" 
              initial={{ opacity: 0, scale: 0.8 }} 
              animate={{ opacity: 1, scale: 1 }} 
              transition={{ duration: 0.8, ease: "easeOut" }} 
            />
            <motion.div 
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-laterite/10 text-laterite font-semibold text-sm rounded-full border border-laterite/30 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="w-2 h-2 bg-laterite rounded-full animate-pulse"></span>
              การประชุมวิชาการระดับชาติด้านดนตรี ครั้งที่ 4
            </motion.div>
            <motion.h1 
              className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-indigo mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              มนุษยธรรม จิตสำนึก<br />วัฒนธรรม และการศึกษา
            </motion.h1>
            <motion.p 
              className="text-lg md:text-xl text-indigo/70 mb-4 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <strong className="text-indigo">การฟังดนตรีอย่างลึกซึ้งในการศึกษา:</strong><br />
              แนวทางสู่การพัฒนามนุษย์อย่างยั่งยืน
            </motion.p>
            <motion.p 
              className="text-base text-indigo/60 mb-10 max-w-2xl mx-auto italic"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
            >
              Deep Listening in Music: Humanity, Mind, Culture, and Education
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row justify-center gap-4 mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <div className="flex items-center gap-4 bg-white border-2 border-indigo/20 text-indigo px-8 py-5 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:border-indigo/40">
                <Calendar size={24} className="text-gold" />
                <div className="text-left">
                  <p className="text-xs text-indigo/60 font-medium uppercase tracking-wide">วันที่</p>
                  <span className="font-bold text-lg">7 พฤษภาคม 2569</span>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-white border-2 border-indigo/20 text-indigo px-8 py-5 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:border-indigo/40">
                <MapPin size={24} className="text-laterite" />
                <div className="text-left">
                  <p className="text-xs text-indigo/60 font-medium uppercase tracking-wide">สถานที่</p>
                  <span className="font-bold text-lg">มหาวิทยาลัยขอนแก่น</span>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <a 
                href="#submission" 
                className="inline-flex items-center gap-3 mt-4 bg-gradient-to-r from-laterite to-gold text-white px-10 py-4 rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                <FileText size={20} />
                ส่งบทความเข้าร่วม
              </a>
            </motion.div>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="py-24 md:py-32 bg-gradient-to-br from-indigo via-[#1a3c59] to-[#0f253a] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-64 h-64 border border-white rounded-full"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 border border-white rounded-full"></div>
        </div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 40 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }} 
            viewport={{ once: true }} 
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 text-gold font-semibold text-sm rounded-full border border-white/30 backdrop-blur-sm mb-8">
              <span className="w-2 h-2 bg-gold rounded-full"></span>
              หัวข้อหลักของการประชุม
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              การฟังดนตรีอย่างลึกซึ้งในการศึกษา
            </h2>
            <div className="max-w-4xl mx-auto mb-12">
              <p className="text-lg md:text-xl text-white/90 mb-6 leading-relaxed">
                การฟังอย่างลึกซึ้งมิได้เป็นเพียงการได้ยินเสียง หากแต่เป็นศักยภาพของมนุษย์ที่บูรณาการการรับรู้ อารมณ์ ความทรงจำ และความเข้าใจทางวัฒนธรรมเข้าด้วยกัน
              </p>
              <p className="text-base md:text-lg text-white/80 leading-relaxed">
                สำรวจบทบาทของการฟังที่หล่อหลอมประสบการณ์ทางดนตรีในบริบทหลากหลาย ทั้งในเชิงประเพณี ชุมชน และการเรียนรู้ในสภาพแวดล้อมทางการศึกษา โดยเน้นมิติที่เชื่อมโยงกันของความเป็นมนุษย์ จิตใจ และวัฒนธรรม
              </p>
            </div>
            
            {/* Core Values */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <motion.div 
                className="p-8 bg-white/10 rounded-2xl border border-white/20 hover:border-gold/50 hover:bg-white/15 transition-all duration-300 backdrop-blur-sm group"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <Award className="text-gold mb-6 mx-auto group-hover:scale-110 transition-transform duration-300" size={48} />
                <h3 className="font-bold text-xl mb-4">ความเป็นเลิศ</h3>
                <p className="text-white/80 leading-relaxed">
                  ส่งเสริมการวิจัยและการมีส่วนร่วมทางวิชาการคุณภาพสูง
                </p>
              </motion.div>
              <motion.div 
                className="p-8 bg-white/10 rounded-2xl border border-white/20 hover:border-gold/50 hover:bg-white/15 transition-all duration-300 backdrop-blur-sm group"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Globe className="text-gold mb-6 mx-auto group-hover:scale-110 transition-transform duration-300" size={48} />
                <h3 className="font-bold text-xl mb-4">ความร่วมมือ</h3>
                <p className="text-white/80 leading-relaxed">
                  ความร่วมมือทางวิชาการระหว่างประเทศและการแบ่งปันความรู้
                </p>
              </motion.div>
              <motion.div 
                className="p-8 bg-white/10 rounded-2xl border border-white/20 hover:border-gold/50 hover:bg-white/15 transition-all duration-300 backdrop-blur-sm group"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <FileText className="text-gold mb-6 mx-auto group-hover:scale-110 transition-transform duration-300" size={48} />
                <h3 className="font-bold text-xl mb-4">นวัตกรรม</h3>
                <p className="text-white/80 leading-relaxed">
                  การสำรวจมุมมองใหม่ในด้านดนตรีและการศึกษา
                </p>
              </motion.div>
            </div>

            {/* Deep Listening Philosophy */}
            <div className="bg-white/5 rounded-2xl p-10 border border-white/10 backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-6 text-gold">แนวคิดการฟังอย่างลึกซึ้ง</h3>
              <p className="text-white/90 leading-relaxed text-lg mb-6">
                การฟังอย่างลึกซึ้งจึงกลายเป็นกระบวนการอันทรงพลังที่ก้าวหนุนการพัฒนามนุษย์และเสริมสร้างความลุ่มลึกในการเข้าถึงโลกแห่งเสียงดนตรี
              </p>
              <p className="text-white/70 leading-relaxed italic">
                "Deep listening becomes a transformative practice that enriches musical engagement and supports the development of the whole person."
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Speaker Section */}
      <section id="speaker" className="py-24 md:py-32 bg-cotton">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 40 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }} 
            viewport={{ once: true }} 
            className="text-center mb-16"
          >
            <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-laterite/10 text-laterite font-semibold text-sm rounded-full border border-laterite/30 mb-6">
              <span className="w-2 h-2 bg-laterite rounded-full"></span>
              Keynote Speaker
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-indigo">วิทยากรบรรยายหลัก</h2>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 40 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, delay: 0.2 }} 
            viewport={{ once: true }} 
            className="bg-white rounded-3xl overflow-hidden shadow-2xl border border-indigo/10 hover:shadow-3xl transition-all duration-500"
          >
            <div className="flex flex-col lg:flex-row">
              {/* Speaker Image */}
              <div className="lg:w-5/12 relative overflow-hidden bg-gradient-to-br from-indigo to-[#0f253a]">
                <div className="absolute inset-0 bg-gradient-to-t from-indigo/90 to-transparent z-10"></div>
                <img 
                  src={speakerImage} 
                  alt="Dr. John Garzoli" 
                  className="w-full h-full object-cover object-center min-h-[450px] lg:min-h-[650px]"
                />
                <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold/20 text-gold font-bold text-xs rounded-full border border-gold/30 backdrop-blur-sm mb-3">
                    <Award size={14} />
                    KEYNOTE SPEAKER
                  </div>
                  <p className="text-white/80 text-sm leading-relaxed">
                    ผู้เชี่ยวชาญด้านดนตรีชาติพันธุ์ระดับนานาชาติ
                  </p>
                </div>
              </div>
              
              {/* Speaker Info */}
              <div className="lg:w-7/12 p-10 md:p-16 flex flex-col justify-center">
                <div className="mb-8">
                  <h3 className="text-4xl md:text-5xl lg:text-6xl font-black text-indigo mb-2 leading-tight">
                    DR. JOHN
                  </h3>
                  <h3 className="text-4xl md:text-5xl lg:text-6xl font-black text-laterite mb-6 leading-tight">
                    GARZOLI
                  </h3>
                  <div className="h-1 w-24 bg-gradient-to-r from-gold to-laterite rounded-full"></div>
                </div>

                <div className="space-y-8">
                  {/* Affiliation */}
                  <div className="p-6 bg-indigo/5 rounded-xl border-l-4 border-gold">
                    <div className="flex items-start gap-4">
                      <Globe size={24} className="text-gold flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold text-indigo text-xl mb-1">
                          University of Adelaide
                        </h4>
                        <p className="text-indigo/70 text-lg">ศาสตราจารย์ดนตรีชาติพันธุ์</p>
                        <p className="text-indigo/60 text-sm mt-1">ประเทศออสเตรเลีย</p>
                      </div>
                    </div>
                  </div>

                  <div className="h-px bg-indigo/10"></div>

                  {/* Credentials */}
                  <div>
                    <h4 className="font-bold text-indigo text-xl mb-6 flex items-center gap-3">
                      <Award size={24} className="text-gold" />
                      ประวัติการศึกษาและผลงาน
                    </h4>
                    <ul className="space-y-4">
                      <li className="flex gap-4 items-start group">
                        <span className="mt-2 w-2 h-2 rounded-full bg-gold flex-shrink-0 group-hover:scale-125 transition-transform duration-300"></span>
                        <span className="text-indigo/80 leading-relaxed">
                          ปรัชญาดุษฎีบัณฑิต (ดนตรีชาติพันธุ์) มหาวิทยาลัยโมแนช ประเทศออสเตรเลีย
                        </span>
                      </li>
                      <li className="flex gap-4 items-start group">
                        <span className="mt-2 w-2 h-2 rounded-full bg-gold flex-shrink-0 group-hover:scale-125 transition-transform duration-300"></span>
                        <span className="text-indigo/80 leading-relaxed">
                          นักวิจัยรับเชิญ มหาวิทยาลัยขอนแก่น ประเทศไทย
                        </span>
                      </li>
                      <li className="flex gap-4 items-start group">
                        <span className="mt-2 w-2 h-2 rounded-full bg-gold flex-shrink-0 group-hover:scale-125 transition-transform duration-300"></span>
                        <span className="text-indigo/80 leading-relaxed">
                          บรรณาธิการ วารสารวิจัยวัฒนธรรมเมือง (Urban Culture Research Journal)
                        </span>
                      </li>
                      <li className="flex gap-4 items-start group">
                        <span className="mt-2 w-2 h-2 rounded-full bg-gold flex-shrink-0 group-hover:scale-125 transition-transform duration-300"></span>
                        <span className="text-indigo/80 leading-relaxed">
                          ผู้เขียนบทความวิจัยที่ได้รับการตีพิมพ์ในวารสารระดับนานาชาติมากกว่า 50 เรื่อง
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Presentation Categories Section */}
      <section id="categories" className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 40 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }} 
            viewport={{ once: true }} 
            className="text-center mb-16"
          >
            <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-indigo/10 text-indigo font-semibold text-sm rounded-full border border-indigo/30 mb-6">
              <Users size={16} className="text-indigo" />
              ประเภทการนำเสนอ
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-indigo mb-4">
              กลุ่มการนำเสนอแบบ Oral Presentation
            </h2>
            <p className="text-lg text-indigo/70 max-w-3xl mx-auto">
              การนำเสนอด้วยวาจา จัดเป็น 4 กลุ่มหลัก (จำนวนกลุ่มอาจปรับเปลี่ยนตามจำนวนบทความและประเด็น)
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {PRESENTATION_CATEGORIES.map((category, idx) => {
              const Icon = category.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="h-full p-8 bg-white rounded-2xl border-2 border-indigo/10 hover:border-indigo/30 transition-all duration-300 shadow-lg hover:shadow-xl">
                    <div className="flex items-start gap-5 mb-6">
                      <div className={`p-4 rounded-xl bg-gradient-to-br ${category.color} text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <Icon size={32} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-indigo mb-2">{category.title}</h3>
                        <p className="text-indigo/70 leading-relaxed">{category.description}</p>
                      </div>
                    </div>
                    
                    {category.subcategories && (
                      <div className="mt-6 pt-6 border-t border-indigo/10">
                        <p className="text-sm font-semibold text-indigo/60 mb-3">อาจแยกเป็นกลุ่มย่อย:</p>
                        <div className="flex flex-wrap gap-2">
                          {category.subcategories.map((sub, subIdx) => (
                            <span 
                              key={subIdx}
                              className="px-3 py-1.5 bg-indigo/5 text-indigo text-sm rounded-full border border-indigo/20"
                            >
                              {sub}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Panel Presentation Info */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-12"
          >
            <div className="p-8 bg-gradient-to-br from-laterite/5 to-gold/5 rounded-2xl border-2 border-laterite/20">
              <div className="flex items-start gap-5">
                <div className="p-4 bg-laterite rounded-xl text-white shadow-lg">
                  <Users size={32} />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-indigo mb-3">Panel Presentation</h3>
                  <p className="text-indigo/80 leading-relaxed mb-4">
                    เปิดรับ Panel สำหรับสถาบันหรือกลุ่มนักศึกษา Panel ละ 4-5 เรื่อง สำหรับการนำเสนอในประเด็นที่เกี่ยวข้องกันหรือโครงการวิจัยร่วม
                  </p>
                  <div className="flex items-center gap-2 text-laterite font-semibold">
                    <ChevronRight size={20} />
                    <span>เหมาะสำหรับการนำเสนอเชิงบูรณาการ</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section id="timeline" className="py-24 md:py-32 bg-cotton">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 40 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }} 
            viewport={{ once: true }} 
            className="text-center mb-16"
          >
            <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-laterite/10 text-laterite font-semibold text-sm rounded-full border border-laterite/30 mb-6">
              <Clock size={16} className="text-laterite" />
              กรอบเวลาการดำเนินงาน
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-indigo mb-4">ตารางเวลาการประชุม</h2>
            <p className="text-lg text-indigo/70">กำหนดการและวันสำคัญที่ควรจดจำ</p>
          </motion.div>
          
          <div className="space-y-6">
            {TIMELINE.map((item, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, x: -30 }} 
                whileInView={{ opacity: 1, x: 0 }} 
                transition={{ duration: 0.5, delay: idx * 0.1 }} 
                viewport={{ once: true }} 
                className="relative pl-12 pb-6"
              >
                {/* Timeline line */}
                {idx !== TIMELINE.length - 1 && (
                  <div className="absolute left-4 top-8 bottom-0 w-0.5 bg-gradient-to-b from-indigo/30 to-transparent"></div>
                )}
                
                {/* Timeline dot */}
                <div className={`absolute left-0 top-2 w-8 h-8 rounded-full border-4 border-white shadow-lg flex items-center justify-center
                  ${item.highlight ? 'bg-gradient-to-br from-laterite to-gold' : item.status === 'active' ? 'bg-laterite' : 'bg-indigo/40'}`}>
                  {item.status === 'active' && !item.highlight && (
                    <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                  )}
                  {item.highlight && (
                    <span className="text-white text-xs font-bold">★</span>
                  )}
                </div>
                
                {/* Content card */}
                <div className={`p-6 rounded-xl border-2 transition-all duration-300 hover:shadow-lg
                  ${item.highlight 
                    ? 'bg-gradient-to-br from-laterite/5 to-gold/5 border-laterite/40 hover:border-laterite/60' 
                    : item.status === 'active' 
                      ? 'bg-laterite/5 border-laterite/30 hover:border-laterite/50' 
                      : 'bg-white border-indigo/20 hover:border-indigo/40'}`}>
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-3 mb-2">
                    <h3 className={`font-bold text-xl ${item.highlight ? 'text-laterite' : 'text-indigo'}`}>
                      {item.task}
                    </h3>
                    <span className={`font-semibold text-sm whitespace-nowrap px-4 py-1.5 rounded-full
                      ${item.highlight 
                        ? 'bg-laterite/20 text-laterite' 
                        : item.status === 'active' 
                          ? 'bg-laterite/20 text-laterite' 
                          : 'bg-indigo/20 text-indigo'}`}>
                      {item.date}
                    </span>
                  </div>
                  <p className="text-indigo/70 leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Submission Section */}
      <section id="submission" className="py-24 md:py-32 bg-gradient-to-br from-indigo via-[#1a3c59] to-[#0f253a] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-40 left-40 w-80 h-80 border border-white rounded-full"></div>
          <div className="absolute bottom-40 right-40 w-96 h-96 border border-white rounded-full"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 40 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }} 
            viewport={{ once: true }} 
            className="text-center mb-20"
          >
            <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 text-gold font-semibold text-sm rounded-full border border-white/30 backdrop-blur-sm mb-6">
              <FileText size={16} className="text-gold" />
              รายละเอียดการส่งบทความ
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">การส่งบทความและรางวัล</h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              เข้าร่วมเป็นส่วนหนึ่งของการประชุมวิชาการระดับชาติ
            </p>
          </motion.div>
          
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Submission Categories */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.8 }} 
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold mb-8 flex items-center gap-4">
                <div className="p-3 bg-laterite rounded-xl shadow-lg">
                  <FileText size={28} />
                </div>
                รูปแบบการส่งบทความ
              </h3>
              <div className="space-y-6">
                <div className="p-8 bg-white/10 rounded-2xl border border-white/20 backdrop-blur-sm hover:bg-white/15 transition-all duration-300">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-gold flex items-center justify-center font-black text-2xl text-indigo flex-shrink-0">1</div>
                    <div>
                      <h4 className="text-2xl font-bold text-gold mb-3">บทคัดย่อ (Abstract)</h4>
                      <p className="text-white/80 mb-4 leading-relaxed">
                        ความยาวไม่เกิน 300 คำ สามารถเขียนเป็นภาษาไทยหรืออังกฤษ
                      </p>
                      <div className="flex items-center gap-2 text-sm text-gold/90">
                        <ChevronRight size={16} /> 
                        พิจารณาโดยคณะผู้ทรงคุณวุฒิผ่านที่ประชุม
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="p-8 bg-white/10 rounded-2xl border border-white/20 backdrop-blur-sm hover:bg-white/15 transition-all duration-300">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-gold flex items-center justify-center font-black text-2xl text-indigo flex-shrink-0">2</div>
                    <div>
                      <h4 className="text-2xl font-bold text-gold mb-3">บทความฉบับเต็ม (Full Paper)</h4>
                      <p className="text-white/80 mb-4 leading-relaxed">
                        ความยาวไม่เกิน 15 หน้า สามารถเขียนเป็นภาษาไทยหรืออังกฤษ
                      </p>
                      <div className="flex items-center gap-2 text-sm text-gold/90 mb-2">
                        <ChevronRight size={16} /> 
                        พิจารณาโดยผู้ทรงคุณวุฒิ 2 ท่านต่อเรื่อง
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gold/90">
                        <ChevronRight size={16} /> 
                        ผู้ทรงคุณวุฒิจากทั้งภายในและภายนอกเครือข่าย
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Fees and Registration */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.8, delay: 0.2 }} 
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold mb-8 flex items-center gap-4">
                <div className="p-3 bg-gold rounded-xl shadow-lg text-indigo">
                  <Award size={28} />
                </div>
                ค่าธรรมเนียม
              </h3>
              
              <div className="space-y-6">
                {/* Main Fee Card */}
                <div className="p-10 bg-gradient-to-br from-laterite via-[#a03825] to-[#8e321e] rounded-2xl border-2 border-laterite/50 shadow-2xl">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-white/20 rounded-lg">
                      <FileText size={24} className="text-white" />
                    </div>
                    <p className="text-gold/90 font-bold text-sm uppercase tracking-wider">
                      ค่าธรรมเนียมการส่งบทความ
                    </p>
                  </div>
                  <div className="flex items-baseline gap-3 mb-6">
                    <span className="text-6xl font-black text-white">500</span>
                    <span className="text-2xl text-white/90">บาท / เรื่อง</span>
                  </div>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex items-start gap-3 text-white/90">
                      <ChevronRight size={20} className="flex-shrink-0 mt-0.5 text-gold" />
                      <span className="text-sm leading-relaxed">
                        <strong>สถาบันภายนอกเครือข่าย:</strong> 500 บาทต่อเรื่อง
                      </span>
                    </div>
                    <div className="flex items-start gap-3 text-white/90">
                      <ChevronRight size={20} className="flex-shrink-0 mt-0.5 text-gold" />
                      <span className="text-sm leading-relaxed">
                        <strong>สถาบันภายในเครือข่าย:</strong> ส่งได้ฟรี 10 เรื่อง หากเกินเรื่องที่ 11 เป็นต้นไป เรื่องละ 500 บาท
                      </span>
                    </div>
                  </div>
                  
                  <div className="h-px bg-white/20 my-6"></div>
                  <a 
                    href="https://docs.google.com/forms/d/e/1FAIpQLSc0f0skMyo7zi4AAOScsCfDongIx1vEpfh953aBbP5di9ym1Q/viewform?usp=header" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center justify-center gap-3 w-full bg-white text-laterite px-8 py-4 rounded-xl font-bold text-lg hover:bg-gold hover:text-indigo transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    <ExternalLink size={20} />
                    ลงทะเบียนส่งบทความ
                  </a>
                </div>

                {/* Website Info */}
                <div className="p-6 bg-white/10 rounded-xl border border-white/20 backdrop-blur-sm">
                  <div className="flex items-start gap-4">
                    <Globe size={24} className="text-gold flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-white text-lg mb-2">การส่งบทความผ่านเว็บไซต์</h4>
                      <p className="text-white/80 text-sm leading-relaxed">
                        ระบบการส่งบทความออนไลน์กำลังอยู่ระหว่างการพัฒนา จะเปิดให้บริการเร็วๆ นี้
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Awards Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">รางวัลการนำเสนอ</h3>
              <p className="text-xl text-white/80">
                ยกย่องเชิดชูผลงานวิจัยและการนำเสนอที่โดดเด่น
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {AWARDS.map((award, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.15 }}
                  viewport={{ once: true }}
                  className={`p-8 rounded-2xl border backdrop-blur-sm transition-all duration-300
                    ${award.special 
                      ? 'bg-white/15 border-white/30 hover:bg-white/20' 
                      : 'bg-white/10 border-white/20 hover:bg-white/15'}`}
                >
                  <div className="flex items-start gap-5 mb-6">
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${award.gradient} flex items-center justify-center font-black text-3xl text-white shadow-lg flex-shrink-0`}>
                      {award.rank}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-white mb-2">{award.title}</h4>
                    </div>
                  </div>
                  
                  <p className="text-white/90 text-sm mb-4 leading-relaxed">
                    {award.description}
                  </p>
                  
                  <div className="h-px bg-white/20 my-4"></div>
                  
                  <p className="text-white/70 text-xs mb-4 leading-relaxed">
                    {award.details}
                  </p>
                  
                  {award.certificate && (
                    <div className="flex items-center gap-2 text-gold text-sm">
                      <Award size={16} />
                      <span>รวมเกียรติบัตรอิเล็กทรอนิกส์</span>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 md:py-32 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 40 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }} 
            viewport={{ once: true }} 
            className="text-center mb-16"
          >
            <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-indigo/10 text-indigo font-semibold text-sm rounded-full border border-indigo/30 mb-6">
              <Mail size={16} className="text-indigo" />
              ติดต่อเรา
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-indigo mb-4">ข้อมูลการติดต่อ</h2>
            <p className="text-lg text-indigo/70">หากมีข้อสงสัยหรือต้องการข้อมูลเพิ่มเติม</p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 40 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, delay: 0.2 }} 
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8"
          >
            <div className="p-8 bg-indigo/5 rounded-2xl border-2 border-indigo/20 hover:border-indigo/40 transition-all duration-300">
              <div className="flex items-start gap-5">
                <div className="p-4 bg-gold rounded-xl text-white shadow-lg">
                  <Mail size={28} />
                </div>
                <div>
                  <h3 className="font-bold text-xl text-indigo mb-2">อีเมล</h3>
                  <a href="mailto:action4@kku.ac.th" className="text-indigo/70 hover:text-laterite transition-colors duration-300 text-lg">
                    action4@kku.ac.th
                  </a>
                </div>
              </div>
            </div>
            
            <div className="p-8 bg-indigo/5 rounded-2xl border-2 border-indigo/20 hover:border-indigo/40 transition-all duration-300">
              <div className="flex items-start gap-5">
                <div className="p-4 bg-laterite rounded-xl text-white shadow-lg">
                  <Phone size={28} />
                </div>
                <div>
                  <h3 className="font-bold text-xl text-indigo mb-2">โทรศัพท์</h3>
                  <a href="tel:+6643202804" className="text-indigo/70 hover:text-laterite transition-colors duration-300 text-lg">
                    +66 (0)43-202-804
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Organizer Info */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-12"
          >
            <div className="p-8 bg-gradient-to-br from-indigo/5 to-laterite/5 rounded-2xl border-2 border-indigo/20">
              <div className="text-center">
                <h3 className="font-bold text-2xl text-indigo mb-3">คณะศิลปกรรมศาสตร์</h3>
                <p className="text-indigo/70 text-lg mb-2">มหาวิทยาลัยขอนแก่น</p>
                <p className="text-indigo/60">จังหวัดขอนแก่น ประเทศไทย</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0a1f2e] text-white/60 py-16 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <h4 className="text-white font-bold text-lg mb-5">การประชุม</h4>
              <ul className="space-y-3 text-sm">
                <li><a href="#about" className="hover:text-gold transition-colors duration-300 flex items-center gap-2"><ChevronRight size={14} /> เกี่ยวกับ</a></li>
                <li><a href="#speaker" className="hover:text-gold transition-colors duration-300 flex items-center gap-2"><ChevronRight size={14} /> วิทยากร</a></li>
                <li><a href="#categories" className="hover:text-gold transition-colors duration-300 flex items-center gap-2"><ChevronRight size={14} /> ประเภทบทความ</a></li>
                <li><a href="#timeline" className="hover:text-gold transition-colors duration-300 flex items-center gap-2"><ChevronRight size={14} /> กำหนดการ</a></li>
                <li><a href="#submission" className="hover:text-gold transition-colors duration-300 flex items-center gap-2"><ChevronRight size={14} /> ส่งบทความ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold text-lg mb-5">ข้อมูล</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-3">
                  <MapPin size={16} className="text-gold flex-shrink-0 mt-0.5" /> 
                  <span>คณะศิลปกรรมศาสตร์<br />มหาวิทยาลัยขอนแก่น<br />จังหวัดขอนแก่น ประเทศไทย</span>
                </li>
                <li className="flex items-center gap-3">
                  <Calendar size={16} className="text-gold flex-shrink-0" /> 
                  <span>7 พฤษภาคม 2569</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold text-lg mb-5">ติดต่อ</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-3">
                  <Mail size={16} className="text-gold flex-shrink-0" /> 
                  <a href="mailto:action4@kku.ac.th" className="hover:text-gold transition-colors duration-300">
                    action4@kku.ac.th
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Phone size={16} className="text-gold flex-shrink-0" /> 
                  <a href="tel:+6643202804" className="hover:text-gold transition-colors duration-300">
                    +66 (0)43-202-804
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold text-lg mb-5">ติดตามเรา</h4>
              <div className="flex gap-4">
                <button 
                  className="p-3 bg-white/10 rounded-lg hover:bg-gold/20 hover:text-gold transition-all duration-300 hover:scale-110"
                  aria-label="Website"
                >
                  <Globe size={20} />
                </button>
              </div>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
              <p className="text-white font-semibold">
                Action 4th National Music Academic Conference
              </p>
              <p className="text-white/50">
                © 2026 คณะศิลปกรรมศาสตร์ มหาวิทยาลัยขอนแก่น • สงวนลิขสิทธิ์
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;