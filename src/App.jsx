import { useState } from 'react';
import { Calendar, FileText, User, Award, Clock, MapPin, Globe, Menu, X, ChevronRight, Mail, Phone, Download, ExternalLink, Users, Presentation, BookOpen, Heart, Music } from 'lucide-react';
import { motion } from 'framer-motion';
import logoImage from './assets/action4logo.png';
import speakerImage from './assets/johngarzoli.jpg';
import nuLogo from './assets/huso-nu.png';
import silpakornLogo from './assets/Faculty_of_Arts,_Silpakorn_University_Logo.png';
import kknLogo from './assets/Fine_and_Applied_Arts_KKU_Thai_Emblem.png';
import mupLogo from './assets/MUPA.png';
import bundLogo from './assets/Bunditpatanasilpa_Institute_Logo.png';
import bupaLogo from './assets/MUPA.png';
import songkhlaLogo from './assets/fa-sk.png';

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
    icon: User,
    title: 'การนำเสนอรายบุคคล (Individual Presentation)',
    description: 'การนำเสนอผลงานวิจัยหรือบทความโดยบุคคลเดียว',
    color: 'from-blue-500 to-indigo-600',
  },
  {
    icon: Users,
    title: 'การนำเสนออภิปรายเป็นกลุ่มคณะ 4 เรื่อง/กลุ่ม (Panel Presentation)',
    description: 'การนำเสนอแบบกลุ่มคณะ โดยแต่ละกลุ่มประกอบด้วย 4 เรื่องที่มีประเด็นหรือหัวข้อใกล้เคียงกัน',
    color: 'from-purple-500 to-pink-600',
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
    description: 'บทความที่สะท้อนแนวคิด "Deep Listerning" ได้ดีเยี่ยม',
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
      <nav className="sticky top-0 z-50 bg-white/98 backdrop-blur-lg border-b border-slate-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 lg:h-20">
            {/* Logo */}
            <motion.button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center group"
              whileHover={{ opacity: 0.8 }}
              transition={{ duration: 0.2 }}
            >
              <div className="relative">
                <img src={logoImage} alt="ACTION 4th" className="h-10 lg:h-12 w-auto transition-transform duration-300 group-hover:scale-105" />
              </div>
            </motion.button>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-12">
              {NAV.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium text-indigo/80 transition-all duration-300 relative group"
                >
                  <span className="relative inline-block">
                    {item.label}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo to-laterite group-hover:w-full transition-all duration-500"></span>
                  </span>
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden flex items-center justify-center w-10 h-10 rounded-lg hover:bg-slate-100 transition-colors duration-300"
              aria-label="Toggle menu"
              whileTap={{ scale: 0.95 }}
            >
              {isMenuOpen ? (
                <X size={20} className="text-indigo" />
              ) : (
                <Menu size={20} className="text-indigo" />
              )}
            </motion.button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <motion.div
              className="lg:hidden border-t border-slate-200/50 py-4 space-y-1"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              {NAV.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-4 py-2 text-sm font-medium text-indigo/80 hover:text-indigo hover:bg-indigo/5 rounded-lg transition-all duration-300"
                >
                  {item.label}
                </a>
              ))}
            </motion.div>
          )}
        </div>
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
              การประชุมวิชาการระดับชาติด้านดนตรี สำหรับนิสิตนักศึกษาระดับปริญญาตรี ครั้งที่ 4
            </motion.div>
            <motion.h1 
              className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-indigo mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              DEEP LISTERNING in MUSIC
            </motion.h1>
            <motion.p 
              className="text-lg md:text-xl text-indigo/70 mb-4 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h5 className="text-indigo">Humanity, Mind, Culture, and Education<br /></h5>
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
      <section id="about" className="py-24 md:py-40 bg-white relative overflow-hidden">
        {/* Dynamic Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo/8 via-transparent to-laterite/8"></div>
        
        {/* Animated Gradient Orbs */}
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-br from-indigo/20 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-gradient-to-tl from-laterite/15 to-transparent rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-gradient-to-br from-gold/10 to-transparent rounded-full blur-3xl" style={{animation: 'float 6s ease-in-out infinite'}}></div>

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-[0.015]" style={{backgroundImage: 'linear-gradient(0deg, #000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '50px 50px'}}></div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 40 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }} 
            viewport={{ once: true }} 
            className="text-center"
          >
            {/* Badge */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo/15 to-laterite/15 text-indigo font-semibold text-sm rounded-full border border-indigo/30 backdrop-blur-sm mb-8 hover:border-indigo/50 transition-all duration-300"
            >
              <span className="w-2.5 h-2.5 bg-gradient-to-r from-indigo to-laterite rounded-full animate-pulse"></span>
              <span>หัวข้อหลักของการประชุม</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl lg:text-5xl font-black mb-4 leading-tight bg-gradient-to-r from-indigo via-indigo/80 to-laterite bg-clip-text text-transparent"
            >
              การฟังดนตรีอย่างลึกซึ้ง:<br />
              <span className="bg-gradient-to-r from-indigo to-laterite bg-clip-text text-transparent">ความเป็นมนุษย์ จิตใจ วัฒนธรรม และการศึกษา</span>
            </motion.h2>

            {/* Main Content */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto mb-12"
            >
              <p className="text-base md:text-lg text-indigo/80 leading-relaxed mb-6">
                การฟังอย่างลึกซึ้ง มิได้เป็นเพียงการได้ยินเสียง หากแต่เป็นศักยภาพของมนุษย์ที่บูรณาการการรับรู้ อารมณ์ ความทรงจำ และความเข้าใจทางวัฒนธรรมเข้าด้วยกัน สำรวจบทบาทของการฟังที่หล่อหลอมประสบการณ์ทางดนตรีในบริบทหลากหลาย ทั้งในเชิงประเพณี ชุมชน และการเรียนรู้ในสภาพแวดล้อมทางการศึกษา โดยเน้นมิติที่เชื่อมโยงกันของความเป็นมนุษย์ จิตใจ และวัฒนธรรม
              </p>
              <p className="text-base md:text-lg text-indigo/80 leading-relaxed">
                การประชุมครั้งนี้มุ่งเปิดพื้นที่ให้เกิดมุมมองใหม่เกี่ยวกับวิธีที่ดนตรีส่งเสริมการตระหนักรู้ ความคิดสร้างสรรค์ ความเข้าอกเข้าใจ และการเรียนรู้อย่างมีความหมาย ผ่านกรอบคิดนี้ การฟังอย่างลึกซึ้งจึงกลายเป็นกระบวนการอันทรงพลังที่เกื้อหนุนการพัฒนามนุษย์และเสริมสร้างความลุ่มลึกในการเข้าถึงโลกแห่งเสียงดนตรี
              </p>
            </motion.div>

            {/* Philosophy Box */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
              className="relative max-w-4xl mx-auto"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo via-laterite to-gold opacity-20 rounded-3xl blur-xl"></div>
              <div className="relative p-10 md:p-14 bg-gradient-to-br from-indigo/5 to-laterite/5 rounded-3xl border border-indigo/30 backdrop-blur-sm hover:border-indigo/50 transition-all duration-300">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-indigo to-laterite mt-2 flex-shrink-0"></div>
                  <h3 className="text-2xl md:text-3xl font-bold text-indigo">Deep Listening in Music: Humanity, Mind, Culture, and Education</h3>
                </div>
                <p className="text-base md:text-lg text-indigo/80 leading-relaxed mb-4">
                  Deep listening represents far more than the act of hearing—it is a human capacity that integrates perception, emotion, memory, and cultural understanding. This conference aims to explore how listening shapes musical experience across traditions, communities, and educational spaces. By foregrounding the interconnected dimensions of humanity, mind, and culture, the conference encourages new insights into the ways music fosters awareness, creativity, empathy, and meaningful learning. Through this lens, deep listening becomes a transformative practice that enriches musical engagement and supports the development of the whole person.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        <style jsx>{`
          @keyframes float {
            0%, 100% { transform: translate(0, 0px); }
            50% { transform: translate(30px, -30px); }
          }
        `}</style>
      </section>

      {/* Collaborating Institutions Section */}
      <section id="collaboration" className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 40 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }} 
            viewport={{ once: true }} 
            className="text-center mb-20"
          >
            <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-indigo/10 text-indigo font-semibold text-sm rounded-full border border-indigo/30 mb-6">
              <Users size={16} className="text-indigo" />
              สถาบันความร่วมมือ
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-indigo mb-4">
              สถาบันการศึกษาที่เข้าร่วมความร่วมมือ
            </h2>
            <p className="text-lg text-indigo/70 max-w-3xl mx-auto leading-relaxed">
              การประชุมวิชาการครั้งนี้เป็นผลมาจากความร่วมมือของสถาบันการศึกษาที่มุ่งเสริมสร้างวิชาการด้านดนตรี
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: 'คณะมนุษยศาสตร์', university: 'มหาวิทยาลัยนเรศวร', logo: nuLogo },
              { name: 'คณะอักษรศาสตร์', university: 'มหาวิทยาลัยศิลปากร', logo: silpakornLogo },
              { name: 'คณะศิลปกรรมศาสตร์', university: 'มหาวิทยาลัยราชภัฏสงขลา', logo: songkhlaLogo },
              { name: 'คณะศิลปกรรมศาสตร์', university: 'มหาวิทยาลัยขอนแก่น', logo: kknLogo },
              { name: 'คณะดนตรีและการแสดง', university: 'มหาวิทยาลัยบูรพา', logo: bupaLogo },
              { name: 'วิทยาลัยนาฏศิลป', university: 'สถาบันบัณฑิตพัฒนศิลป์', logo: bundLogo },
            ].map((institution, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.08 }}
                viewport={{ once: true }}
                className="h-full"
              >
                <div className="h-full p-8 md:p-10 bg-white rounded-2xl border border-indigo/15 hover:border-indigo/35 transition-all duration-300 shadow-md hover:shadow-xl flex flex-col items-center justify-center group overflow-hidden relative">
                  {/* Background gradient on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo/3 to-laterite/3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                  
                  {/* Logo Container */}
                  <div className="mb-8 h-32 flex items-center justify-center w-full relative">
                    <div className="absolute inset-0 bg-indigo/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-lg"></div>
                    <img 
                      src={institution.logo} 
                      alt={institution.university}
                      className="h-full max-w-[90%] object-contain group-hover:scale-105 transition-transform duration-300 relative z-10"
                      loading="lazy"
                    />
                  </div>
                  
                  {/* Text Content */}
                  <div className="text-center w-full flex-1 flex flex-col justify-center">
                    <h3 className="text-base font-bold text-indigo mb-2 leading-snug group-hover:text-indigo/80 transition-colors duration-300">
                      {institution.name}
                    </h3>
                    <p className="text-sm text-indigo/60 leading-relaxed group-hover:text-indigo/70 transition-colors duration-300">
                      {institution.university}
                    </p>
                  </div>
                  
                  {/* Bottom accent line */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-indigo/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </motion.div>
            ))}
          </div>
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
            className="flex flex-col items-center"
          >
            <div className="relative overflow-hidden rounded-3xl shadow-2xl border border-indigo/10">
              <img 
                src={speakerImage} 
                alt="Dr. John Garzoli" 
                className="w-full max-w-md h-auto object-cover object-center"
              />
            </div>
            <div className="text-center mt-12">
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-black text-indigo mb-2 leading-tight">
                DR. JOHN
              </h3>
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-black text-laterite leading-tight">
                GARZOLI
              </h3>
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
              ประเภทการนำเสนอ
            </h2>
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
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Oral Presentation Groups */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-16"
          >
            <div className="mb-12">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-4 bg-gradient-to-br from-laterite to-gold rounded-xl text-white shadow-lg">
                  <Presentation size={32} />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-indigo">Oral Presentation</h3>
                  <p className="text-indigo/70 mt-2">การนำเสนอด้วยวาจา จัดเป็น 5 กลุ่มหลัก</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
                {[
                  { num: '1', title: 'ดนตรีศึกษา', icon: BookOpen, color: 'from-amber-600 to-amber-700', bgGrad: 'from-[#D9A441] to-[#C89339]' },
                  { num: '2', title: 'ดนตรีวิทยา', icon: Music, color: 'from-slate-700 to-slate-800', bgGrad: 'from-[#1A3C59] to-[#0f253a]' },
                  { num: '3', title: 'ดนตรีสร้างสรรค์', icon: Presentation, color: 'from-orange-600 to-orange-700', bgGrad: 'from-[#A73B24] to-[#8e321e]' },
                  { num: '4', title: 'ดนตรีเพื่อสุขภาพ\nwell being', icon: Heart, color: 'from-rose-600 to-rose-700', bgGrad: 'from-[#D65A7B] to-[#C74A6B]' },
                  { num: '5', title: 'เทคโนโลยีดนตรี', icon: Globe, color: 'from-cyan-600 to-cyan-700', bgGrad: 'from-[#2E8B9E] to-[#1F6B7E]' },
                ].map((group, idx) => {
                  const IconComp = group.icon;
                  return (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: idx * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="h-full p-6 bg-white rounded-xl border-2 border-indigo/10 hover:border-indigo/30 transition-all duration-300 shadow-md hover:shadow-lg flex flex-col items-center text-center group overflow-hidden relative">
                        {/* Background accent */}
                        <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${group.bgGrad} opacity-10 rounded-full -mr-8 -mt-8`}></div>
                        
                        <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${group.color} text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 mb-4 relative z-10`}>
                          <IconComp size={28} />
                        </div>
                        <span className="text-sm font-bold text-indigo/60 mb-2 relative z-10">กลุ่มที่ {group.num}</span>
                        <h4 className="text-base font-bold text-indigo leading-snug whitespace-pre-line relative z-10">
                          {group.title}
                        </h4>
                      </div>
                    </motion.div>
                  );
                })}
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
            {/* Submission Categories - กล่องดาวน์โหลด Template */}
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
                {/* กล่องที่ 1: Abstract */}
                <div className="group p-8 bg-white/5 rounded-3xl border border-white/10 backdrop-blur-sm hover:bg-white/10 transition">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold text-gold">1. บทคัดย่อ</h3>
                    <span className="text-xs bg-indigo shadow-inner px-3 py-1 rounded-full text-white/70 border border-white/10">Abstract Only</span>
                  </div>
                  <p className="text-white/70 mb-6">ความยาวไม่เกิน 300 คำ (ไทย/อังกฤษ)</p>
                  {/* ปุ่มดาวน์โหลดไฟล์ */}
                  <a href="/Template_of Abstract for_publication ACTION_4_KKU.docx" download className="inline-flex items-center gap-2 text-sm font-bold text-white bg-laterite hover:bg-[#8e321e] px-4 py-2 rounded-full transition shadow-lg">
                    <FileText size={16} /> ดาวน์โหลดแบบฟอร์ม (Word)
                  </a>
                </div>

                {/* กล่องที่ 2: Full Paper */}
                <div className="group p-8 bg-white/5 rounded-3xl border border-white/10 backdrop-blur-sm hover:bg-white/10 transition">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold text-gold">2. บทความฉบับเต็ม</h3>
                    <span className="text-xs bg-indigo shadow-inner px-3 py-1 rounded-full text-white/70 border border-white/10">Full Paper</span>
                  </div>
                  <p className="text-white/70 mb-6">ความยาวไม่เกิน 15 หน้า (ไทย/อังกฤษ)</p>
                  {/* ปุ่มดาวน์โหลดไฟล์ */}
                  <a href="/Template_of Full_paper for_publication ACTION_4_KKU.docx" download className="inline-flex items-center gap-2 text-sm font-bold text-white bg-laterite hover:bg-[#8e321e] px-4 py-2 rounded-full transition shadow-lg">
                    <FileText size={16} /> ดาวน์โหลดแบบฟอร์ม (Word)
                  </a>
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
                    <span className="text-2xl text-white/90">บาท / บทความ</span>
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
              </div>
            </motion.div>
          </div>

          {/* Awards Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="text-center mb-14">
              <h3 className="text-4xl md:text-5xl font-extrabold text-gold mb-3 tracking-tight drop-shadow-lg">รางวัลการนำเสนอ</h3>
              <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
                ยกย่องผลงานวิจัยและการนำเสนอที่โดดเด่น สะท้อนคุณภาพและความคิดสร้างสรรค์
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-10">
              {AWARDS.map((award, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.15 }}
                  viewport={{ once: true }}
                  className={`relative group p-10 rounded-3xl border-2 shadow-xl transition-all duration-300 overflow-hidden
                    ${award.special 
                      ? 'bg-gradient-to-br from-indigo/20 via-pink-200/10 to-white/10 border-pink-400/30 hover:border-pink-400/60' 
                      : 'bg-gradient-to-br from-white/10 to-indigo/10 border-white/20 hover:border-gold/40'}`}
                >
                  {/* Accent ring */}
                  <div className={`absolute -top-8 -right-8 w-32 h-32 rounded-full opacity-20 blur-2xl z-0
                    ${award.special ? 'bg-gradient-to-br from-pink-400 via-indigo-400 to-yellow-300' : 'bg-gradient-to-br from-gold via-indigo-200 to-white'}`}></div>
                  <div className="relative z-10 flex flex-col items-center text-center">
                    <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${award.gradient} flex items-center justify-center font-black text-4xl text-white shadow-lg mb-6 border-4 border-white/20 group-hover:scale-105 transition-transform duration-300`}>
                      {award.rank}
                    </div>
                    <h4 className="text-2xl font-bold text-gold mb-2 tracking-tight drop-shadow">{award.title}</h4>
                    <p className="text-white/90 text-base mb-4 leading-relaxed min-h-[48px]">{award.description}</p>
                    <div className="h-px bg-gradient-to-r from-gold/30 via-white/20 to-indigo/20 my-4 w-2/3 mx-auto"></div>
                    <p className="text-white/70 text-xs mb-4 leading-relaxed min-h-[40px]">{award.details}</p>
                    {award.certificate && (
                      <div className="flex items-center justify-center gap-2 text-gold text-sm mt-2">
                        <Award size={18} />
                        <span>รวมเกียรติบัตรอิเล็กทรอนิกส์</span>
                      </div>
                    )}
                  </div>
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