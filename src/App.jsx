import { useState } from 'react';
import { Calendar, FileText, User, Award, Clock, MapPin, Globe, Menu, X, ChevronRight, Mail, Phone, Download, ExternalLink, Users, Presentation, BookOpen, Heart, Music, FileDown, Eye } from 'lucide-react';
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
  { href: '#documents', label: 'เอกสาร' },
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
    task: 'วันจัดงานประชุมวิชาการ (Online)',
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
    description: 'บทความที่สะท้อนแนวคิด "Deep Listening" ได้ดีเยี่ยม',
    details: 'จำนวนรางวัลขึ้นอยู่กับคุณภาพของบทความ',
    gradient: 'from-indigo-400 via-purple-500 to-pink-600',
    certificate: true,
    special: true
  }
];

const DOCUMENTS = [
  {
    title: 'ลำดับการนำเสนอ',
    subtitle: 'การประชุมวิชาการระดับชาติ',
    description: 'รายชื่อและลำดับการนำเสนอผลงานของผู้เข้าร่วมทุกท่าน',
    file: '/ลำดับการนำเสนอการประชุมวิชาการระดับชาติ.pdf',
    icon: Presentation,
    color: 'from-blue-600 to-blue-800',
    badge: 'ลำดับการนำเสนอ',
  },
  {
    title: 'กำหนดการ',
    subtitle: 'การประชุมวิชาการระดับชาติ',
    description: 'ตารางกำหนดการและรายละเอียดกิจกรรมตลอดงานประชุมวิชาการ',
    file: '/กำหนดการประชุมวิชาการระดับชาติ.pdf',
    icon: Calendar,
    color: 'from-laterite to-gold',
    badge: 'กำหนดการ',
  },
];

// PDF Viewer Component
const PdfViewer = ({ file, title }) => {
  const [showEmbed, setShowEmbed] = useState(false);

  return (
    <div className="mt-5">
      {!showEmbed ? (
        <button
          onClick={() => setShowEmbed(true)}
          className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-indigo/5 hover:bg-indigo/10 border border-indigo/20 hover:border-indigo/40 rounded-xl text-indigo/70 hover:text-indigo font-medium text-sm transition-all duration-200 group"
        >
          <Eye size={16} className="group-hover:scale-110 transition-transform duration-200" />
          ดูเอกสารในหน้านี้
        </button>
      ) : (
        <div className="rounded-xl overflow-hidden border border-indigo/20 shadow-inner bg-indigo/5">
          <div className="flex items-center justify-between px-4 py-2.5 bg-indigo/10 border-b border-indigo/15">
            <span className="text-xs font-semibold text-indigo/70 truncate">{title}</span>
            <button
              onClick={() => setShowEmbed(false)}
              className="text-indigo/50 hover:text-indigo transition-colors duration-200 ml-3 flex-shrink-0"
              aria-label="ปิด"
            >
              <X size={16} />
            </button>
          </div>
          <iframe
            src={`${file}#toolbar=0&navpanes=0&scrollbar=1`}
            title={title}
            className="w-full"
            style={{ height: '520px' }}
            loading="lazy"
          />
        </div>
      )}
    </div>
  );
};

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen font-sans text-indigo bg-cotton antialiased">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-xl border-b border-indigo/10 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <motion.button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center group focus:outline-none focus:ring-2 focus:ring-gold rounded-lg"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <img
                src={logoImage}
                alt="ACTION 4th Conference Logo"
                className="h-14 w-auto transition-transform duration-300 group-hover:scale-105"
              />
            </motion.button>

            <div className="hidden lg:flex items-center gap-1">
              {NAV.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="px-4 py-2 text-sm font-semibold text-indigo/80 hover:text-indigo transition-colors duration-200 relative group rounded-lg hover:bg-cotton"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-laterite to-gold group-hover:w-3/4 transition-all duration-300"></span>
                </a>
              ))}
            </div>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-cotton transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gold"
              aria-label="Toggle navigation menu"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? (
                <X size={24} className="text-indigo" />
              ) : (
                <Menu size={24} className="text-indigo" />
              )}
            </button>
          </div>

          {isMenuOpen && (
            <motion.div
              className="lg:hidden border-t border-indigo/10 py-4 space-y-1"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
            >
              {NAV.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-4 py-3 text-base font-medium text-indigo/80 hover:text-indigo hover:bg-cotton rounded-lg transition-colors duration-200"
                >
                  {item.label}
                </a>
              ))}
            </motion.div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative py-16 md:py-24 lg:py-32 bg-gradient-to-br from-white via-cotton to-indigo/5 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-indigo/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-laterite/10 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl"></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <motion.img
              src={logoImage}
              alt="ACTION 4th Conference"
              className="h-40 md:h-48 lg:h-56 w-auto mx-auto mb-8 drop-shadow-xl"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            />

            <motion.div
              className="inline-flex items-center gap-2 px-6 py-3 bg-laterite/10 text-laterite font-semibold text-sm rounded-full border border-laterite/30 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <span className="w-2 h-2 bg-laterite rounded-full animate-pulse"></span>
              การประชุมวิชาการระดับชาติด้านดนตรี สำหรับนิสิตนักศึกษาระดับปริญญาตรี ครั้งที่ 4
            </motion.div>

            <motion.h1
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-indigo mb-6 leading-tight px-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <span className="inline-block">
                <em className="not-italic bg-gradient-to-r from-indigo via-laterite to-gold bg-clip-text text-transparent">
                  Deep Listening in Music: Humanity, Mind, Culture, and Education
                </em>
              </span>
            </motion.h1>

            <motion.div
              className="flex flex-col sm:flex-row justify-center gap-4 mb-10 mt-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="flex items-center gap-4 bg-white border border-indigo/20 text-indigo px-6 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="p-2 bg-gold/10 rounded-lg">
                  <Calendar size={24} className="text-gold" />
                </div>
                <div className="text-left">
                  <p className="text-xs text-indigo/60 font-medium uppercase tracking-wide mb-1">วันที่</p>
                  <span className="font-bold text-base">7 พฤษภาคม 2569</span>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-white border border-indigo/20 text-indigo px-6 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="p-2 bg-laterite/10 rounded-lg">
                  <MapPin size={24} className="text-laterite" />
                </div>
                <div className="text-left">
                  <p className="text-xs text-indigo/60 font-medium uppercase tracking-wide mb-1">สถานที่</p>
                  <span className="font-bold text-base">คณะศิลปกรรมศาสตร์<br />มหาวิทยาลัยขอนแก่น</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <a
                href="#submission"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-laterite to-gold text-white px-8 py-4 rounded-xl font-bold text-base shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-laterite focus:ring-offset-2"
              >
                <FileText size={20} />
                ส่งบทความเข้าร่วม
              </a>
            </motion.div>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="py-20 md:py-32 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: 'radial-gradient(circle, #1A3C59 1px, transparent 1px)',
          backgroundSize: '24px 24px'
        }}></div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-indigo/10 text-indigo font-semibold text-sm rounded-full border border-indigo/30 mb-6">
              <span className="w-2 h-2 bg-indigo rounded-full"></span>
              หัวข้อหลักของการประชุม
            </div>

            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8 text-indigo max-w-4xl mx-auto leading-tight">
              การฟังดนตรีอย่างลึกซึ้ง: ความเป็นมนุษย์ จิตใจ วัฒนธรรม และการศึกษา
            </h2>

            <div className="max-w-3xl mx-auto mb-12 space-y-6">
              <p className="text-base md:text-lg text-indigo/80 leading-relaxed">
                การฟังอย่างลึกซึ้ง มิได้เป็นเพียงการได้ยินเสียง หากแต่เป็นศักยภาพของมนุษย์ที่บูรณาการการรับรู้ อารมณ์ ความทรงจำ และความเข้าใจทางวัฒนธรรมเข้าด้วยกัน สำรวจบทบาทของการฟังที่หล่อหลอมประสบการณ์ทางดนตรีในบริบทหลากหลาย ทั้งในเชิงประเพณี ชุมชน และการเรียนรู้ในสภาพแวดล้อมทางการศึกษา
              </p>
              <p className="text-base md:text-lg text-indigo/80 leading-relaxed">
                การประชุมครั้งนี้มุ่งเปิดพื้นที่ให้เกิดมุมมองใหม่เกี่ยวกับวิธีที่ดนตรีส่งเสริมการตระหนักรู้ ความคิดสร้างสรรค์ ความเข้าอกเข้าใจ และการเรียนรู้อย่างมีความหมาย
              </p>
            </div>

            <div className="relative max-w-4xl mx-auto">
              <div className="p-8 md:p-10 bg-gradient-to-br from-cotton to-indigo/5 rounded-2xl border border-indigo/20 shadow-lg">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-1 h-6 bg-gradient-to-b from-indigo to-laterite rounded-full flex-shrink-0"></div>
                  <h3 className="text-xl md:text-2xl font-bold text-indigo text-left">
                    Deep Listening in Music: Humanity, Mind, Culture, and Education
                  </h3>
                </div>
                <p className="text-base text-indigo/80 leading-relaxed text-left">
                  Deep listening represents far more than the act of hearing—it is a human capacity that integrates perception, emotion, memory, and cultural understanding. This conference aims to explore how listening shapes musical experience across traditions, communities, and educational spaces. By foregrounding the interconnected dimensions of humanity, mind, and culture, the conference encourages new insights into the ways music fosters awareness, creativity, empathy, and meaningful learning. Through this lens, deep listening becomes a transformative practice that enriches musical engagement and supports the development of the whole person
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Collaborating Institutions */}
      <section id="collaboration" className="py-20 md:py-28 bg-cotton">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-indigo/10 text-indigo font-semibold text-sm rounded-full border border-indigo/30 mb-6">
              <Users size={16} />
              สถาบันความร่วมมือ
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-indigo mb-4">
              สถาบันการศึกษาที่เข้าร่วมความร่วมมือ
            </h2>
            <p className="text-lg text-indigo/70 max-w-3xl mx-auto">
              การประชุมวิชาการครั้งนี้เป็นผลมาจากความร่วมมือของสถาบันการศึกษาที่มุ่งเสริมสร้างวิชาการด้านดนตรี
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: 'คณะมนุษยศาสตร์', university: 'มหาวิทยาลัยนเรศวร', logo: nuLogo, url: 'https://huso.nu.ac.th/' },
              { name: 'คณะอักษรศาสตร์', university: 'มหาวิทยาลัยศิลปากร', logo: silpakornLogo, url: 'https://www.facebook.com/silpakornfacultyofarts/' },
              { name: 'คณะศิลปกรรมศาสตร์', university: 'มหาวิทยาลัยราชภัฏสงขลา', logo: songkhlaLogo, url: 'https://www.facebook.com/facultyofarts.srhu/' },
              { name: 'คณะศิลปกรรมศาสตร์', university: 'มหาวิทยาลัยขอนแก่น', logo: kknLogo, url: 'https://fa.kku.ac.th/' },
              { name: 'คณะดนตรีและการแสดง', university: 'มหาวิทยาลัยบูรพา', logo: bupaLogo, url: 'https://www.facebook.com/mupa.bu/' },
              { name: 'วิทยาลัยนาฏศิลป', university: 'สถาบันบัณฑิตพัฒนศิลป์', logo: bundLogo, url: 'https://cda.bpi.ac.th/' },
            ].map((institution, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                viewport={{ once: true, margin: "-50px" }}
              >
                <a
                  href={institution.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block h-full"
                >
                  <div className="h-full p-8 bg-white rounded-xl border border-indigo/15 hover:border-gold/50 hover:shadow-lg transition-all duration-300 flex flex-col items-center justify-center group cursor-pointer">
                    <div className="mb-6 h-28 flex items-center justify-center w-full">
                      <img
                        src={institution.logo}
                        alt={`${institution.university} logo`}
                        className="h-full max-w-[85%] object-contain group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                    </div>
                    <div className="text-center">
                      <h3 className="text-sm font-bold text-indigo mb-1 group-hover:text-laterite transition-colors duration-300">
                        {institution.name}
                      </h3>
                      <p className="text-sm text-indigo/60 group-hover:text-indigo transition-colors duration-300">
                        {institution.university}
                      </p>
                    </div>
                  </div>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Speaker Section */}
      <section id="speaker" className="py-20 md:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-laterite/10 text-laterite font-semibold text-sm rounded-full border border-laterite/30 mb-6">
              <span className="w-2 h-2 bg-laterite rounded-full"></span>
              Keynote Speaker
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-indigo">วิทยากรบรรยายหลัก</h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col items-center"
          >
            <div className="relative overflow-hidden rounded-2xl shadow-2xl border border-indigo/20 mb-10">
              <img
                src={speakerImage}
                alt="Dr. John Garzoli - Keynote Speaker"
                className="w-full max-w-md h-auto object-cover"
              />
            </div>
            <div className="text-center">
              <h3 className="text-4xl md:text-5xl font-black text-indigo mb-1">
                DR. JOHN
              </h3>
              <h3 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-laterite to-gold bg-clip-text text-transparent">
                GARZOLI
              </h3>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Presentation Categories */}
      <section id="categories" className="py-20 md:py-28 bg-cotton">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-indigo/10 text-indigo font-semibold text-sm rounded-full border border-indigo/30 mb-6">
              <Users size={16} />
              ประเภทการนำเสนอ
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-indigo">
              ประเภทการนำเสนอ
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {PRESENTATION_CATEGORIES.map((category, idx) => {
              const Icon = category.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true, margin: "-50px" }}
                >
                  <div className="h-full p-8 bg-white rounded-xl border border-indigo/15 hover:border-gold/50 hover:shadow-lg transition-all duration-300">
                    <div className="flex items-start gap-4 mb-4">
                      <div className={`p-3 rounded-xl bg-gradient-to-br ${category.color} text-white shadow-md`}>
                        <Icon size={28} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-indigo mb-2">{category.title}</h3>
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
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="flex items-center gap-4 mb-10">
              <div className="p-3 bg-gradient-to-br from-laterite to-gold rounded-xl text-white shadow-md">
                <Presentation size={28} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-indigo">Oral Presentation</h3>
                <p className="text-indigo/70">การนำเสนอด้วยวาจา จัดเป็น 5 กลุ่มหลัก</p>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {[
                { num: '1', title: 'ดนตรีศึกษา', icon: BookOpen, color: 'from-amber-500 to-amber-600' },
                { num: '2', title: 'ดนตรีวิทยา', icon: Music, color: 'from-slate-600 to-slate-700' },
                { num: '3', title: 'ดนตรีสร้างสรรค์', icon: Presentation, color: 'from-orange-500 to-orange-600' },
                { num: '4', title: 'ดนตรีเพื่อสุขภาพ', icon: Heart, color: 'from-rose-500 to-rose-600' },
                { num: '5', title: 'เทคโนโลยีดนตรี', icon: Globe, color: 'from-cyan-500 to-cyan-600' },
              ].map((group, idx) => {
                const IconComp = group.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: idx * 0.05 }}
                    viewport={{ once: true, margin: "-50px" }}
                  >
                    <div className="h-full p-6 bg-white rounded-xl border border-indigo/15 hover:border-gold/50 hover:shadow-md transition-all duration-300 flex flex-col items-center text-center">
                      <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${group.color} text-white flex items-center justify-center shadow-md mb-4`}>
                        <IconComp size={24} />
                      </div>
                      <span className="text-xs font-semibold text-indigo/60 mb-2">กลุ่มที่ {group.num}</span>
                      <h4 className="text-sm font-bold text-indigo">
                        {group.title}
                      </h4>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section id="timeline" className="py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-laterite/10 text-laterite font-semibold text-sm rounded-full border border-laterite/30 mb-6">
              <Clock size={16} />
              กรอบเวลาการดำเนินงาน
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-indigo mb-4">
              กำหนดการประชุมวิชาการ
            </h2>
            <p className="text-lg text-indigo/70">กำหนดการและวันสำคัญ</p>
          </motion.div>

          <div className="space-y-4">
            {TIMELINE.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                viewport={{ once: true, margin: "-50px" }}
                className="relative pl-10 pb-4"
              >
                {idx !== TIMELINE.length - 1 && (
                  <div className="absolute left-3.5 top-7 bottom-0 w-0.5 bg-indigo/20"></div>
                )}

                <div className={`absolute left-0 top-1.5 w-7 h-7 rounded-full border-3 border-white shadow-md flex items-center justify-center
                  ${item.highlight
                    ? 'bg-gradient-to-br from-laterite to-gold'
                    : item.status === 'active'
                      ? 'bg-laterite'
                      : 'bg-indigo/40'}`}>
                  {item.highlight && (
                    <span className="text-white text-xs font-bold">★</span>
                  )}
                </div>

                <div className={`p-6 rounded-xl border transition-all duration-300 hover:shadow-md
                  ${item.highlight
                    ? 'bg-gradient-to-br from-laterite/5 to-gold/5 border-laterite/30'
                    : item.status === 'active'
                      ? 'bg-laterite/5 border-laterite/30'
                      : 'bg-white border-indigo/20'}`}>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-2">
                    <h3 className={`font-bold text-lg ${item.highlight ? 'text-laterite' : 'text-indigo'}`}>
                      {item.task}
                    </h3>
                    <span className={`text-sm font-semibold whitespace-nowrap px-3 py-1 rounded-full
                      ${item.highlight
                        ? 'bg-laterite/20 text-laterite'
                        : item.status === 'active'
                          ? 'bg-laterite/20 text-laterite'
                          : 'bg-indigo/20 text-indigo'}`}>
                      {item.date}
                    </span>
                  </div>
                  <p className="text-indigo/70 text-sm leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== DOCUMENTS SECTION ===== */}
      <section id="documents" className="py-20 md:py-28 bg-cotton">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-indigo/10 text-indigo font-semibold text-sm rounded-full border border-indigo/30 mb-6">
              <FileDown size={16} />
              เอกสารประกอบการประชุม
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-indigo mb-4">
              เอกสารสำคัญ
            </h2>
            <p className="text-lg text-indigo/70 max-w-2xl mx-auto">
              ดาวน์โหลดหรือดูเอกสารประกอบการประชุมวิชาการ ACTION ครั้งที่ 4 ได้ที่นี่
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {DOCUMENTS.map((doc, idx) => {
              const Icon = doc.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true, margin: "-50px" }}
                >
                  <div className="bg-white rounded-2xl border border-indigo/15 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
                    {/* Card Header */}
                    <div className={`p-6 bg-gradient-to-br ${doc.color} text-white relative overflow-hidden`}>
                      {/* Background decoration */}
                      <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full translate-x-1/2 -translate-y-1/2"></div>
                      <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full -translate-x-1/2 translate-y-1/2"></div>

                      <div className="relative z-10 flex items-start gap-4">
                        <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm shadow-md flex-shrink-0">
                          <Icon size={28} />
                        </div>
                        <div>
                          <span className="text-xs font-bold uppercase tracking-widest text-white/70 mb-1 block">
                            {doc.badge}
                          </span>
                          <h3 className="text-xl font-black leading-tight">{doc.title}</h3>
                          <p className="text-white/80 text-sm font-medium mt-0.5">{doc.subtitle}</p>
                        </div>
                      </div>
                    </div>

                    {/* Card Body */}
                    <div className="p-6">
                      <p className="text-indigo/70 text-sm leading-relaxed mb-5">
                        {doc.description}
                      </p>

                      {/* Download Button */}
                      <a
                        href={doc.file}
                        download
                        className={`w-full flex items-center justify-center gap-2.5 py-3 px-5 bg-gradient-to-r ${doc.color} text-white font-bold text-sm rounded-xl shadow-md hover:shadow-lg hover:scale-[1.02] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2`}
                      >
                        <Download size={17} />
                        ดาวน์โหลด PDF
                      </a>

                      {/* Inline PDF Viewer */}
                      <PdfViewer file={doc.file} title={`${doc.title} ${doc.subtitle}`} />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Info note */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true, margin: "-50px" }}
            className="mt-8 p-5 bg-indigo/5 rounded-xl border border-indigo/15 flex items-start gap-3"
          >
            <div className="w-5 h-5 rounded-full bg-indigo/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-indigo text-xs font-black">i</span>
            </div>
            <p className="text-indigo/70 text-sm leading-relaxed">
              หากไม่สามารถดูเอกสารได้ กรุณาดาวน์โหลดไฟล์ PDF และเปิดด้วยโปรแกรม PDF Reader
              หรือติดต่อเราที่ <a href="mailto:action.4@gmail.com" className="text-laterite font-semibold hover:underline">action.4@gmail.com</a>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Submission Section */}
      <section id="submission" className="py-20 md:py-28 bg-gradient-to-br from-indigo via-indigo/95 to-laterite text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-96 h-96 border border-white rounded-full"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 border border-white rounded-full"></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 text-gold font-semibold text-sm rounded-full border border-white/20 backdrop-blur-sm mb-6">
              <FileText size={16} />
              รายละเอียดการส่งบทความ
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">การส่งบทความและรางวัล</h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              เข้าร่วมเป็นส่วนหนึ่งของการประชุมวิชาการระดับชาติ
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-10 mb-16">
            {/* Submission Templates */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                <div className="p-2.5 bg-laterite rounded-lg shadow-lg">
                  <FileText size={24} />
                </div>
                รูปแบบการส่งบทความ
              </h3>
              <div className="space-y-5">
                <div className="p-6 bg-white/5 rounded-xl border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="text-xl font-bold text-gold">1. บทคัดย่อ</h4>
                    <span className="text-xs bg-indigo/80 px-3 py-1 rounded-full text-white/70 border border-white/10">
                      Abstract Only
                    </span>
                  </div>
                  <p className="text-white/70 mb-5 text-sm">ความยาวไม่เกิน 300 คำ (ไทย/อังกฤษ)</p>
                  <a
                    href="/Template_of Abstract for_publication ACTION_4_KKU.docx"
                    download
                    className="inline-flex items-center gap-2 text-sm font-bold text-white bg-laterite hover:bg-laterite/80 px-5 py-2.5 rounded-lg transition-colors duration-200 shadow-md"
                  >
                    <Download size={16} />
                    ดาวน์โหลดแบบฟอร์ม (Word)
                  </a>
                </div>

                <div className="p-6 bg-white/5 rounded-xl border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="text-xl font-bold text-gold">2. บทความฉบับเต็ม</h4>
                    <span className="text-xs bg-indigo/80 px-3 py-1 rounded-full text-white/70 border border-white/10">
                      Full Paper
                    </span>
                  </div>
                  <p className="text-white/70 mb-5 text-sm">ความยาวไม่เกิน 15 หน้า (ไทย/อังกฤษ)</p>
                  <a
                    href="/Template_of Full_paper for_publication ACTION_4_KKU.docx"
                    download
                    className="inline-flex items-center gap-2 text-sm font-bold text-white bg-laterite hover:bg-laterite/80 px-5 py-2.5 rounded-lg transition-colors duration-200 shadow-md"
                  >
                    <Download size={16} />
                    ดาวน์โหลดแบบฟอร์ม (Word)
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Fees */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                <div className="p-2.5 bg-gold rounded-lg shadow-lg text-indigo">
                  <Award size={24} />
                </div>
                ค่าธรรมเนียม
              </h3>

              <div className="p-8 bg-gradient-to-br from-laterite via-laterite/95 to-gold/80 rounded-xl border border-laterite/50 shadow-2xl">
                <div className="flex items-center gap-3 mb-5">
                  <div className="p-2 bg-white/20 rounded-lg">
                    <FileText size={20} />
                  </div>
                  <p className="text-gold/90 font-bold text-sm uppercase tracking-wider">
                    ค่าธรรมเนียมการส่งบทความ
                  </p>
                </div>
                <div className="flex items-baseline gap-2 mb-6">
                  <span className="text-5xl font-black">500</span>
                  <span className="text-xl">บาท / บทความ</span>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-2 text-white/95 text-sm">
                    <ChevronRight size={18} className="flex-shrink-0 mt-0.5 text-gold" />
                    <span>
                      <strong>สถาบันภายนอกเครือข่าย:</strong> 500 บาทต่อเรื่อง
                    </span>
                  </div>
                  <div className="flex items-start gap-2 text-white/95 text-sm">
                    <ChevronRight size={18} className="flex-shrink-0 mt-0.5 text-gold" />
                    <span>
                      <strong>สถาบันภายในเครือข่าย:</strong> ส่งได้ฟรี 10 เรื่อง หากเกินเรื่องที่ 11 เป็นต้นไป เรื่องละ 500 บาท
                    </span>
                  </div>
                </div>

                <div className="h-px bg-white/20 my-6"></div>
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSc0f0skMyo7zi4AAOScsCfDongIx1vEpfh953aBbP5di9ym1Q/viewform?usp=header"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full bg-white text-laterite px-6 py-3.5 rounded-lg font-bold hover:bg-cotton transition-colors duration-300 shadow-lg"
                >
                  <ExternalLink size={20} />
                  ลงทะเบียนส่งบทความ
                </a>
              </div>
            </motion.div>
          </div>

          {/* Awards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold text-gold mb-3">รางวัลการนำเสนอ</h3>
              <p className="text-lg text-white/80 max-w-2xl mx-auto">
                ยกย่องผลงานวิจัยและการนำเสนอที่โดดเด่น สะท้อนคุณภาพและความคิดสร้างสรรค์
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {AWARDS.map((award, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  className={`p-8 rounded-xl border transition-all duration-300 hover:shadow-xl
                    ${award.special
                      ? 'bg-gradient-to-br from-indigo/30 via-laterite/20 to-gold/20 border-gold/30'
                      : 'bg-white/5 border-white/10'}`}
                >
                  <div className="flex flex-col items-center text-center">
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${award.gradient} flex items-center justify-center font-black text-3xl text-white shadow-lg mb-5 border-3 border-white/20`}>
                      {award.rank}
                    </div>
                    <h4 className="text-xl font-bold text-gold mb-2">{award.title}</h4>
                    <p className="text-white/90 text-sm mb-3">{award.description}</p>
                    <div className="h-px bg-white/20 my-3 w-2/3"></div>
                    <p className="text-white/70 text-xs mb-3">{award.details}</p>
                    {award.certificate && (
                      <div className="flex items-center gap-2 text-gold text-xs">
                        <Award size={16} />
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
      <section id="contact" className="py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-indigo/10 text-indigo font-semibold text-sm rounded-full border border-indigo/30 mb-6">
              <Mail size={16} />
              ติดต่อเรา
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-indigo mb-4">
              ข้อมูลการติดต่อ
            </h2>
            <p className="text-lg text-indigo/70">หากมีข้อสงสัยหรือต้องการข้อมูลเพิ่มเติม</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-2 gap-6 mb-10"
          >
            <div className="p-6 bg-cotton rounded-xl border border-indigo/20 hover:border-gold/50 hover:shadow-md transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gold rounded-lg text-white shadow-md">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-indigo mb-2">อีเมล</h3>
                  <a
                    href="mailto:action.4@gmail.com"
                    className="text-indigo/70 hover:text-laterite transition-colors duration-200"
                  >
                    action.4@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="p-6 bg-cotton rounded-xl border border-indigo/20 hover:border-gold/50 hover:shadow-md transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-laterite rounded-lg text-white shadow-md">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-indigo mb-2">โทรศัพท์</h3>
                  <a
                    href="tel:+66043202396"
                    className="text-indigo/70 hover:text-laterite transition-colors duration-200"
                  >
                    043-202396
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Organizer */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="p-8 bg-gradient-to-br from-cotton to-indigo/5 rounded-xl border border-indigo/20">
              <div className="text-center">
                <h3 className="font-bold text-xl text-indigo mb-2">คณะศิลปกรรมศาสตร์</h3>
                <p className="text-indigo/70 text-lg mb-1">มหาวิทยาลัยขอนแก่น</p>
                <p className="text-indigo/60">จังหวัดขอนแก่น ประเทศไทย</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-indigo text-white/60 py-14 border-t border-indigo/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-10 mb-10">
            <div>
              <h4 className="text-white font-bold text-base mb-4">การประชุม</h4>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <a href="#about" className="hover:text-gold transition-colors duration-200 flex items-center gap-2">
                    <ChevronRight size={14} /> เกี่ยวกับ
                  </a>
                </li>
                <li>
                  <a href="#speaker" className="hover:text-gold transition-colors duration-200 flex items-center gap-2">
                    <ChevronRight size={14} /> วิทยากร
                  </a>
                </li>
                <li>
                  <a href="#categories" className="hover:text-gold transition-colors duration-200 flex items-center gap-2">
                    <ChevronRight size={14} /> ประเภทบทความ
                  </a>
                </li>
                <li>
                  <a href="#timeline" className="hover:text-gold transition-colors duration-200 flex items-center gap-2">
                    <ChevronRight size={14} /> กำหนดการ
                  </a>
                </li>
                <li>
                  <a href="#documents" className="hover:text-gold transition-colors duration-200 flex items-center gap-2">
                    <ChevronRight size={14} /> เอกสาร
                  </a>
                </li>
                <li>
                  <a href="#submission" className="hover:text-gold transition-colors duration-200 flex items-center gap-2">
                    <ChevronRight size={14} /> ส่งบทความ
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold text-base mb-4">ข้อมูล</h4>
              <ul className="space-y-2.5 text-sm">
                <li className="flex items-start gap-2">
                  <MapPin size={16} className="text-gold flex-shrink-0 mt-0.5" />
                  <span>คณะศิลปกรรมศาสตร์<br />มหาวิทยาลัยขอนแก่น</span>
                </li>
                <li className="flex items-center gap-2">
                  <Calendar size={16} className="text-gold flex-shrink-0" />
                  <span>7 พฤษภาคม 2569</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold text-base mb-4">ติดต่อ</h4>
              <ul className="space-y-2.5 text-sm">
                <li className="flex items-center gap-2">
                  <Mail size={16} className="text-gold flex-shrink-0" />
                  <a href="mailto:action.4@gmail.com" className="hover:text-gold transition-colors duration-200">
                    action.4@gmail.com
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Phone size={16} className="text-gold flex-shrink-0" />
                  <a href="tel:+66043202396" className="hover:text-gold transition-colors duration-200">
                    043-202396
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold text-base mb-4">ติดตามเรา</h4>
              <button
                className="p-2.5 bg-white/10 rounded-lg hover:bg-gold/20 hover:text-gold transition-all duration-300"
                aria-label="Visit website"
              >
                <Globe size={20} />
              </button>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-3 text-sm">
              <p className="text-white font-semibold">
                Action 4th National Music Academic Conference
              </p>
              <p className="text-white/50">
                © 2026 คณะศิลปกรรมศาสตร์ มหาวิทยาลัยขอนแก่น
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
