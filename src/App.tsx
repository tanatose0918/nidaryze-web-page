import React, { useState } from 'react';
import {
  ShieldCheck,
  Cpu,
  Activity,
  ArrowRight,
  Lock,
  BarChart3,
  FileSpreadsheet,
  AlertTriangle,
  CheckCircle2,
  Zap,
  Boxes,
  Users,
  Terminal,
  Code2,
  Cloud,
  Send,
  Clock,
  MapPin,
  Mail,
  Menu,
  X,
  Workflow,
  GitBranch,
  ShieldAlert,
  ArrowDown
} from 'lucide-react';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Form State
  const [formData, setFormData] = useState({
    contactName: '',
    businessType: '',
    teamSize: '6-20',
    bottleneck: '',
    contactChannel: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  // Interactive Iceberg Toggle / Inspection
  const [activeTab, setActiveTab] = useState<'saas' | 'bespoke'>('bespoke');

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate high-reliability API dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 900);
  };

  return (
    <div className="min-h-screen bg-[#0B192C] text-slate-100 cyber-grid-bg relative selection:bg-[#00E5FF] selection:text-black font-sans">
      {/* Background Ambient Glow Gradients */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[550px] bg-gradient-to-b from-[#00E5FF]/10 via-[#1E3E62]/10 to-transparent blur-[140px]" />
        <div className="absolute top-[40%] right-[-100px] w-[600px] h-[600px] bg-[#00E5FF]/5 blur-[160px]" />
        <div className="absolute bottom-[-50px] left-[-100px] w-[600px] h-[600px] bg-[#1E3E62]/15 blur-[160px]" />
      </div>

      {/* 1. HEADER (Navbar) */}
      <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-[#0B192C]/85 border-b border-[#00E5FF]/15 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Logo */}
          <div 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-10 h-10 border border-[#00E5FF] bg-[#00E5FF]/10 flex items-center justify-center relative shadow-[0_0_15px_rgba(0,229,255,0.25)] group-hover:shadow-[0_0_25px_rgba(0,229,255,0.5)] transition-all">
              <Cpu className="w-5 h-5 text-[#00E5FF]" />
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-[#00E5FF]" />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-extrabold tracking-wider text-[#00E5FF] glow-text-cyan font-mono">
                Nidaryze
              </span>
              <span className="text-[10px] tracking-[0.22em] text-slate-400 uppercase -mt-1 font-mono">
                System Architect
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('iceberg-trap')}
              className="text-sm font-medium text-slate-300 hover:text-[#00E5FF] transition-colors relative py-1 group"
            >
              The Iceberg Trap
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#00E5FF] transition-all duration-300 group-hover:w-full" />
            </button>
            <button
              onClick={() => scrollToSection('solutions')}
              className="text-sm font-medium text-slate-300 hover:text-[#00E5FF] transition-colors relative py-1 group"
            >
              Solutions
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#00E5FF] transition-all duration-300 group-hover:w-full" />
            </button>
            <button
              onClick={() => scrollToSection('architecture')}
              className="text-sm font-medium text-slate-300 hover:text-[#00E5FF] transition-colors relative py-1 group"
            >
              Architecture
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#00E5FF] transition-all duration-300 group-hover:w-full" />
            </button>
          </nav>

          {/* Header CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <div className="hidden lg:flex items-center gap-2 text-xs font-mono text-emerald-400 bg-emerald-950/40 border border-emerald-500/30 px-2.5 py-1">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Q4 Capacity: 2 Slots Left
            </div>
            <button
              onClick={() => scrollToSection('audit-form')}
              className="px-5 py-2.5 bg-[#00E5FF] text-black font-semibold text-sm tracking-wide transition-all duration-200 hover:bg-[#33ebff] hover:shadow-[0_0_20px_rgba(0,229,255,0.7)] active:translate-y-[1px] flex items-center gap-2 border border-[#00E5FF]"
            >
              <Zap className="w-4 h-4 fill-black" />
              <span>จองสิทธิ์ Audit</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-300 hover:text-[#00E5FF] border border-slate-700 hover:border-[#00E5FF]/50 bg-[#0B192C]"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#071322] border-b border-[#00E5FF]/20 px-6 py-6 space-y-4 shadow-2xl">
            <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 bg-emerald-950/40 border border-emerald-500/30 px-3 py-1.5 w-fit">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Q4 Capacity: รับเพียง 3-5 ธุรกิจ
            </div>
            <div className="flex flex-col space-y-3 pt-2">
              <button
                onClick={() => scrollToSection('iceberg-trap')}
                className="text-left text-base font-medium text-slate-200 hover:text-[#00E5FF] py-2 border-b border-slate-800"
              >
                The Iceberg Trap
              </button>
              <button
                onClick={() => scrollToSection('solutions')}
                className="text-left text-base font-medium text-slate-200 hover:text-[#00E5FF] py-2 border-b border-slate-800"
              >
                Solutions
              </button>
              <button
                onClick={() => scrollToSection('architecture')}
                className="text-left text-base font-medium text-slate-200 hover:text-[#00E5FF] py-2 border-b border-slate-800"
              >
                Architecture
              </button>
            </div>
            <button
              onClick={() => scrollToSection('audit-form')}
              className="w-full mt-4 py-3 bg-[#00E5FF] text-black font-bold text-center tracking-wide shadow-[0_0_15px_rgba(0,229,255,0.4)] flex items-center justify-center gap-2"
            >
              <span>จองสิทธิ์ Audit ทันที</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </header>

      {/* 2. HERO SECTION */}
      <section className="relative z-10 pt-16 pb-24 md:pt-24 md:pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-8">
          
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#00E5FF]/10 border border-[#00E5FF]/30 text-[#00E5FF] text-xs md:text-sm font-mono tracking-wider shadow-[0_0_15px_rgba(0,229,255,0.15)]">
            <Terminal className="w-3.5 h-3.5" />
            <span>ENTERPRISE BACKOFFICE ARCHITECTURE &amp; DATA PIPELINES</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.12]">
            อย่าปล่อยให้ธุรกิจ 10 ล้าน <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-400">
              พังเพราะ
            </span>{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-rose-300 to-amber-300 underline decoration-red-500/60 decoration-wavy decoration-2">
              ไฟล์ Excel
            </span>
          </h1>

          {/* Sub-headline */}
          <p className="text-lg sm:text-xl md:text-2xl text-slate-300 font-normal leading-relaxed max-w-3xl">
            <strong className="text-[#00E5FF] font-semibold">Nidaryze</strong> สถาปนิกระบบหลังบ้านเฉพาะทาง (Bespoke System Architect){' '}
            เปลี่ยนข้อมูลที่กระจัดกระจายให้เป็น <span className="text-white border-b border-[#00E5FF]/60 pb-0.5 font-medium">Single Source of Truth</span>{' '}
            <span className="inline-block">ป้องกันคิวชน</span> <span className="inline-block">สต็อกเพี้ยน 100%</span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto pt-4">
            <button
              onClick={() => scrollToSection('audit-form')}
              className="w-full sm:w-auto px-8 py-4 bg-[#00E5FF] text-black font-bold text-base md:text-lg tracking-wide transition-all duration-300 hover:bg-[#33ebff] shadow-[0_0_30px_rgba(0,229,255,0.5)] hover:shadow-[0_0_45px_rgba(0,229,255,0.75)] hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-3 border border-[#00E5FF]"
            >
              <span>รับสิทธิ์ System Architecture Audit 45 นาที ฟรี</span>
              <ArrowRight className="w-5 h-5 text-black" />
            </button>

            <button
              onClick={() => scrollToSection('solutions')}
              className="w-full sm:w-auto px-8 py-4 bg-transparent text-[#00E5FF] font-semibold text-base md:text-lg border border-[#00E5FF]/60 hover:border-[#00E5FF] hover:bg-[#00E5FF]/10 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <span>ดูการทำงานของระบบ</span>
              <ArrowDown className="w-4 h-4 text-[#00E5FF]" />
            </button>
          </div>

          {/* Social Proof & Metrics Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full pt-12 border-t border-slate-800/80">
            <div className="p-4 bg-[#071322]/80 border border-slate-800/80 text-left">
              <div className="text-2xl font-bold font-mono text-[#00E5FF]">0%</div>
              <div className="text-xs text-slate-400 mt-1">คิวชน &amp; Double-Booking</div>
            </div>
            <div className="p-4 bg-[#071322]/80 border border-slate-800/80 text-left">
              <div className="text-2xl font-bold font-mono text-[#00E5FF]">100%</div>
              <div className="text-xs text-slate-400 mt-1">FIFO Inventory Precision</div>
            </div>
            <div className="p-4 bg-[#071322]/80 border border-slate-800/80 text-left">
              <div className="text-2xl font-bold font-mono text-[#00E5FF]">0 THB</div>
              <div className="text-xs text-slate-400 mt-1">ค่าหัวรายเดือน (No Per-Seat)</div>
            </div>
            <div className="p-4 bg-[#071322]/80 border border-slate-800/80 text-left">
              <div className="text-2xl font-bold font-mono text-[#00E5FF]">&lt; 50ms</div>
              <div className="text-xs text-slate-400 mt-1">Concurrency Lock Latency</div>
            </div>
          </div>

        </div>
      </section>

      {/* 3. THE PROBLEM SECTION (The Iceberg Trap) */}
      <section id="iceberg-trap" className="relative z-10 py-24 bg-[#071220]/90 border-y border-[#00E5FF]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-950/40 border border-red-500/30 text-red-400 text-xs font-mono uppercase tracking-widest mb-3">
              <AlertTriangle className="w-3.5 h-3.5 text-red-400" />
              <span>THE ROOT CAUSE OF EXPENSIVE SYSTEM FAILS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              The Iceberg Trap: กับดักซอฟต์แวร์สำเร็จรูป
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-300">
              ทำไมคลินิก โรงงาน หรือธุรกิจระดับ 10-100 ล้าน ยิ่งซื้อ SaaS สำเร็จรูปมาใช้... หน้างานกลับยิ่งวุ่นวายจนต้องหนีกลับไปลง Excel?
            </p>
          </div>

          {/* Iceberg Visualization Model */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Visual Diagram Panel (5 Cols) */}
            <div className="lg:col-span-5 bg-[#0B192C] border border-[#00E5FF]/20 p-6 flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#00E5FF]/5 blur-3xl pointer-events-none" />
              
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                  <span className="text-xs font-mono text-[#00E5FF] tracking-wider uppercase">ARCHITECTURAL REALITY</span>
                  <span className="text-xs font-mono text-slate-400">DEPTH: -100%</span>
                </div>

                {/* 10% Surface Layer */}
                <div className="mt-6 p-4 bg-slate-800/40 border border-amber-500/30 relative">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-amber-400 font-bold text-xs uppercase tracking-wider flex items-center gap-1.5">
                      <FileSpreadsheet className="w-4 h-4 text-amber-400" />
                      10% ผิวน้ำ: สิ่งที่ SaaS ขายคุณ
                    </span>
                    <span className="text-[10px] font-mono text-amber-300/80 bg-amber-950/50 px-2 py-0.5">SURFACE UI</span>
                  </div>
                  <p className="text-xs text-slate-300 mt-2">
                    UI สวยหรู, ตารางปฏิทินสำเร็จรูป, ฟอร์มกรอกทั่วไปที่สร้างใน 5 นาที แต่ไม่มี Business Logic ของกิจการคุณเลย
                  </p>
                </div>

                {/* Water Line Divider */}
                <div className="my-4 flex items-center gap-2">
                  <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#00E5FF] to-transparent" />
                  <span className="text-[11px] font-mono text-[#00E5FF] px-2 py-0.5 bg-[#00E5FF]/10 border border-[#00E5FF]/40">
                    WATER LEVEL / จุดวิกฤติที่ SaaS เจ๊ง
                  </span>
                  <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#00E5FF] to-transparent" />
                </div>

                {/* 90% Underwater Layer */}
                <div className="p-5 bg-[#06101D] border-2 border-[#00E5FF]/40 space-y-3 shadow-[0_0_20px_rgba(0,229,255,0.1)]">
                  <div className="flex items-center justify-between">
                    <span className="text-[#00E5FF] font-bold text-sm tracking-wide flex items-center gap-1.5">
                      <Lock className="w-4 h-4 text-[#00E5FF]" />
                      90% ใต้น้ำ: งานวิศวกรรมเฉพาะทาง (Bespoke)
                    </span>
                    <span className="text-[10px] font-mono text-[#00E5FF] bg-[#00E5FF]/20 px-2 py-0.5">HIGH CRITICALITY</span>
                  </div>
                  
                  <div className="space-y-2 text-xs">
                    <div className="p-2.5 bg-[#0B192C] border-l-2 border-red-500 text-slate-300 flex items-start gap-2">
                      <ShieldAlert className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-white block font-medium">3-Way Collision Resolution:</strong>
                        ล็อกห้องหัตถการ + ล็อกแพทย์ + ล็อกคิวลูกค้า พร้อมกันในระดับมิลลิวินาที ห้าม Overbook เด็ดขาด
                      </div>
                    </div>

                    <div className="p-2.5 bg-[#0B192C] border-l-2 border-amber-500 text-slate-300 flex items-start gap-2">
                      <Boxes className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-white block font-medium">Strict FIFO Batch Inventory:</strong>
                        ตัดสต็อกยา/วัตถุดิบตาม Lot Expire จริง ไม่ใช่ค่าเฉลี่ยกลมๆ ที่ทำให้ของหมดอายุคลัง
                      </div>
                    </div>

                    <div className="p-2.5 bg-[#0B192C] border-l-2 border-[#00E5FF] text-slate-300 flex items-start gap-2">
                      <GitBranch className="w-4 h-4 text-[#00E5FF] shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-white block font-medium">Custom State Invariants:</strong>
                        โครงสร้างเงื่อนไขเฉพาะของธุรกิจคุณ เช่น กฎคอมมิชชั่นซับซ้อน และการตรวจรับสินค้าหลายขั้นตอน
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
                <span>VERDICT: GENERIC SAAS FAILS HERE</span>
                <span className="text-emerald-400">NIDARYZE COVERS 100%</span>
              </div>
            </div>

            {/* Comparison Grid (7 Cols) */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-4">
              
              {/* Tab Selector */}
              <div className="flex border border-slate-800 bg-[#0B192C] p-1">
                <button
                  onClick={() => setActiveTab('bespoke')}
                  className={`flex-1 py-3 text-sm font-bold tracking-wide transition-all flex items-center justify-center gap-2 ${
                    activeTab === 'bespoke'
                      ? 'bg-[#00E5FF] text-black shadow-[0_0_15px_rgba(0,229,255,0.4)]'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <ShieldCheck className="w-4 h-4" />
                  สถาปัตยกรรม Nidaryze Bespoke Engine
                </button>
                <button
                  onClick={() => setActiveTab('saas')}
                  className={`flex-1 py-3 text-sm font-semibold tracking-wide transition-all flex items-center justify-center gap-2 ${
                    activeTab === 'saas'
                      ? 'bg-red-500/20 text-red-400 border border-red-500/40'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <AlertTriangle className="w-4 h-4" />
                  ซอฟต์แวร์สำเร็จรูป (Generic SaaS)
                </button>
              </div>

              {/* Dynamic Comparison Panel */}
              {activeTab === 'bespoke' ? (
                <div className="bg-[#0B192C] border border-[#00E5FF]/40 p-6 md:p-8 flex-1 space-y-6">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white flex items-center gap-2">
                        <Cpu className="w-5 h-5 text-[#00E5FF]" />
                        สร้างระบบตาม Business Logic ของคุณ 100%
                      </h3>
                      <p className="text-xs text-[#00E5FF] font-mono mt-0.5">ENGINEERED FOR SCALE, CONCURRENCY &amp; ZERO DRIFT</p>
                    </div>
                    <span className="text-xs bg-emerald-950/70 text-emerald-400 border border-emerald-500/40 px-2 py-1 font-mono">
                      RECOMMENDED
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 bg-[#071322] border border-slate-800">
                      <div className="flex items-center gap-2 text-white font-semibold text-sm mb-1.5">
                        <CheckCircle2 className="w-4 h-4 text-[#00E5FF]" />
                        Data Invariants &amp; Concurrency Lock
                      </div>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        ใช้ระบบ Row-level Locking ป้องกันเคสพนักงาน 2 สาขากดจองห้องเดียวกันในวินาทีเดียวกัน ข้อมูลตรงกันทั้งบริษัทแบบ Real-time
                      </p>
                    </div>

                    <div className="p-4 bg-[#071322] border border-slate-800">
                      <div className="flex items-center gap-2 text-white font-semibold text-sm mb-1.5">
                        <CheckCircle2 className="w-4 h-4 text-[#00E5FF]" />
                        Exact FIFO Batching
                      </div>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        ระบบคำนวณและตัดสต็อกสินค้าตามลำดับวันนำเข้าและวันหมดอายุจริง ไม่ให้มีของค้างโกดังหรือยาหมดอายุโดยไม่รู้ตัว
                      </p>
                    </div>

                    <div className="p-4 bg-[#071322] border border-slate-800">
                      <div className="flex items-center gap-2 text-white font-semibold text-sm mb-1.5">
                        <CheckCircle2 className="w-4 h-4 text-[#00E5FF]" />
                        Clean Telemetry for Cockpit
                      </div>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        สร้าง Data Pipeline ที่สะอาดบริสุทธิ์ ส่งตรงเข้า Power BI โดยไม่ต้องมาเสียเวลาจ้างคนจัดระเบียบตารางทุกสิ้นเดือน
                      </p>
                    </div>

                    <div className="p-4 bg-[#071322] border border-slate-800">
                      <div className="flex items-center gap-2 text-white font-semibold text-sm mb-1.5">
                        <CheckCircle2 className="w-4 h-4 text-[#00E5FF]" />
                        Zero Per-Seat License
                      </div>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        จะขยายทีมจาก 5 คนเป็น 100 คน ก็ไม่มีการบวกค่าหัวรายเดือนเพิ่ม โฮสต์บน Cloud ของคุณเองแบบเบ็ดเสร็จ
                      </p>
                    </div>
                  </div>

                  <div className="p-3 bg-[#00E5FF]/5 border border-[#00E5FF]/20 text-xs text-slate-300 flex items-center justify-between">
                    <span>💡 ผลลัพธ์: ทีมงานหน้างานทำงานง่าย ไม่ต้องสลับจอ Excel ผู้บริหารเปิดดูยอด Real-time ได้ทันที</span>
                    <button
                      onClick={() => scrollToSection('audit-form')}
                      className="text-[#00E5FF] hover:underline font-mono text-xs flex items-center gap-1 shrink-0 ml-2"
                    >
                      ปรึกษาสถาปนิก &rarr;
                    </button>
                  </div>
                </div>
              ) : (
                <div className="bg-[#0B192C] border border-red-500/30 p-6 md:p-8 flex-1 space-y-6">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                    <div>
                      <h3 className="text-xl font-bold text-red-300 flex items-center gap-2">
                        <AlertTriangle className="w-5 h-5 text-red-400" />
                        ความจริงที่คุณต้องเจอเมื่อใช้ซอฟต์แวร์สำเร็จรูป
                      </h3>
                      <p className="text-xs text-red-400 font-mono mt-0.5">THE UNSEEN COST OF ONE-SIZE-FITS-ALL</p>
                    </div>
                    <span className="text-xs bg-red-950/70 text-red-400 border border-red-500/40 px-2 py-1 font-mono">
                      HIGH RISK
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 bg-[#140b12] border border-red-900/40">
                      <div className="text-red-400 font-semibold text-sm mb-1.5 flex items-center gap-1.5">
                        <span className="text-red-500 font-mono font-bold">✕</span> คิวชน คิวมั่ว (Race Conditions)
                      </div>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        SaaS ทั่วไปไม่มี Logic การเช็กทรัพยากร 3 มิติ (ห้อง-หมอ-ลูกค้า) พร้อมกัน ทำให้เกิดเหตุลูกค้า 2 คนมาถึงพร้อมกันแต่มีห้องเดียว
                      </p>
                    </div>

                    <div className="p-4 bg-[#140b12] border border-red-900/40">
                      <div className="text-red-400 font-semibold text-sm mb-1.5 flex items-center gap-1.5">
                        <span className="text-red-500 font-mono font-bold">✕</span> สต็อกเพี้ยน ข้อมูลหลอน
                      </div>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        สต็อกตัดไม่ทัน ตัดเป็นตัวเลขรวม ไม่บอก Lot ไม่บอก Expiry สุดท้ายพนักงานแอบเปิด Excel คุมสต็อกคู่ขนานอยู่ดี
                      </p>
                    </div>

                    <div className="p-4 bg-[#140b12] border border-red-900/40">
                      <div className="text-red-400 font-semibold text-sm mb-1.5 flex items-center gap-1.5">
                        <span className="text-red-500 font-mono font-bold">✕</span> ค่าหัวรายเดือนขูดรีด (Per-Seat)
                      </div>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        จ่ายเริ่มต้นเดือนละหลักพัน พอพนักงานเพิ่ม ค่าบริการพุ่งเป็นหลักหมื่น-หลักแสนต่อเดือน แต่แก้โค้ดอะไรไม่ได้สักจุด
                      </p>
                    </div>

                    <div className="p-4 bg-[#140b12] border border-red-900/40">
                      <div className="text-red-400 font-semibold text-sm mb-1.5 flex items-center gap-1.5">
                        <span className="text-red-500 font-mono font-bold">✕</span> ข้อมูลติดคุก (Data Vendor Lock-in)
                      </div>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        จะเอาข้อมูลมาต่อ BI ทำยากมาก ได้แค่ไฟล์ CSV เละๆ ที่หัวตารางเปลี่ยนเรื่อยๆ จนระบบวิเคราะห์ของบอร์ดพัง
                      </p>
                    </div>
                  </div>

                  <div className="p-3 bg-red-950/40 border border-red-500/20 text-xs text-red-200">
                    ⚠️ หากคุณกำลังแก้ปัญหาด้วยการให้พนักงาน &quot;ลงในระบบด้วย แล้วกรอก Excel อีกรอบ&quot; นั่นคือสัญญาณเตือนขั้นวิกฤติ
                  </div>
                </div>
              )}

            </div>

          </div>

        </div>
      </section>

      {/* 4. THE SOLUTION SECTION (Synergy: Engine + Cockpit) */}
      <section id="solutions" className="relative z-10 py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-[#00E5FF]/10 border border-[#00E5FF]/30 text-[#00E5FF] text-xs font-mono uppercase tracking-wider mb-3">
            <Workflow className="w-3.5 h-3.5" />
            <span>DUAL-CORE ARCHITECTURE PARADIGM</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            ผสานเครื่องยนต์หลังบ้าน เข้ากับหน้าปัดกลยุทธ์
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            สถาปัตยกรรมระบบ 2 ชั้นที่ออกแบบมาให้สอดรับกันอย่างไร้รอยต่อ: หน้างานบันทึกง่ายไม่ผิดพลาด &rarr; ฝ่ายบริหารตัดสินใจด้วยข้อมูลแม่นยำ 100%
          </p>
        </div>

        {/* Visual Flow Connector */}
        <div className="relative">
          
          {/* Middle Connection Badge (Desktop) */}
          <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex-col items-center">
            <div className="bg-[#0B192C] border-2 border-[#00E5FF] text-[#00E5FF] px-4 py-2 font-mono text-xs tracking-wider shadow-[0_0_20px_rgba(0,229,255,0.4)] whitespace-nowrap flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#00E5FF] animate-ping" />
              <span>Clean Data IN &rarr; Sharp Insights OUT</span>
            </div>
            <div className="w-0.5 h-8 bg-gradient-to-b from-[#00E5FF] to-transparent mt-2" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">
            
            {/* Card 1: Operational Backoffice (The Engine) */}
            <div className="bg-[#0B192C] border border-[#00E5FF]/30 p-8 relative flex flex-col justify-between shadow-[0_0_30px_rgba(11,25,44,0.8)] group hover:border-[#00E5FF] transition-all duration-300">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#00E5FF]/5 -z-0" />
              
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 bg-[#00E5FF]/10 border border-[#00E5FF] flex items-center justify-center text-[#00E5FF]">
                    <Cpu className="w-6 h-6" />
                  </div>
                  <span className="font-mono text-xs text-[#00E5FF] tracking-widest px-2.5 py-1 bg-[#00E5FF]/10 border border-[#00E5FF]/30">
                    CORE 01 // THE ENGINE
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white tracking-tight">
                  Operational Backoffice
                </h3>
                <p className="text-slate-400 text-sm mt-1 font-mono">
                  เครื่องยนต์ขับเคลื่อนปฏิบัติการหน้างาน (Custom Workflow)
                </p>

                <p className="mt-4 text-sm text-slate-300 leading-relaxed">
                  ระบบหลังบ้านที่สร้างขึ้นเฉพาะเจาะจงสำหรับทีมหน้างานของคุณ จัดการเรื่องความถูกต้องของข้อมูลตั้งแต่จังหวะแรกที่คีย์เข้า ปิดโอกาส Human Error
                </p>

                <div className="mt-8 space-y-4">
                  <div className="p-3.5 bg-[#071322] border-l-2 border-[#00E5FF] text-xs">
                    <span className="text-white font-bold block mb-1">1. Data Invariants Enforced</span>
                    <span className="text-slate-300">
                      บังคับใช้กฎเหล็กทางธุรกิจในระดับ Database Schema เช่น ไม่สามารถบันทึกหัตถการหากแพทย์ยังไม่ว่าง
                    </span>
                  </div>

                  <div className="p-3.5 bg-[#071322] border-l-2 border-[#00E5FF] text-xs">
                    <span className="text-white font-bold block mb-1">2. Real-Time Resource Locking</span>
                    <span className="text-slate-300">
                      เทคโนโลยี Concurrency Lock ล็อกสต็อกและห้องในระดับมิลลิวินาที ป้องกันการตัดของซ้อน
                    </span>
                  </div>

                  <div className="p-3.5 bg-[#071322] border-l-2 border-[#00E5FF] text-xs">
                    <span className="text-white font-bold block mb-1">3. Automated Clean Data Pipeline</span>
                    <span className="text-slate-300">
                      แปลงข้อมูลการใช้งานหน้างานให้มีโครงสร้างเป็นระเบียบ (Normalized Data) อัตโนมัติในทุก Transaction
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-800 flex items-center justify-between text-xs font-mono text-slate-400">
                <span>FRONT-DESK, WAREHOUSE &amp; OPS</span>
                <span className="text-emerald-400">ZERO DATA CORRUPTION</span>
              </div>
            </div>

            {/* Mobile Flow Indicator */}
            <div className="lg:hidden flex justify-center -my-6 z-10">
              <div className="bg-[#0B192C] border border-[#00E5FF] text-[#00E5FF] px-4 py-2 font-mono text-xs shadow-lg flex items-center gap-2">
                <span>Clean Data IN &rarr; Sharp Insights OUT</span>
              </div>
            </div>

            {/* Card 2: Power BI / Executive Dashboard (The Cockpit) */}
            <div className="bg-[#0B192C] border border-[#00E5FF]/30 p-8 relative flex flex-col justify-between shadow-[0_0_30px_rgba(11,25,44,0.8)] group hover:border-[#00E5FF] transition-all duration-300">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#00E5FF]/5 -z-0" />
              
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 bg-[#00E5FF]/10 border border-[#00E5FF] flex items-center justify-center text-[#00E5FF]">
                    <BarChart3 className="w-6 h-6" />
                  </div>
                  <span className="font-mono text-xs text-[#00E5FF] tracking-widest px-2.5 py-1 bg-[#00E5FF]/10 border border-[#00E5FF]/30">
                    CORE 02 // THE COCKPIT
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white tracking-tight">
                  Power BI &amp; Executive Cockpit
                </h3>
                <p className="text-slate-400 text-sm mt-1 font-mono">
                  หน้าปัดควบคุมกลยุทธ์ระดับบริหาร (Real-Time Intelligence)
                </p>

                <p className="mt-4 text-sm text-slate-300 leading-relaxed">
                  แดชบอร์ดที่ไม่ใช่แค่กราฟสวยๆ แต่คือเข็มทิศธุรกิจที่ดึงข้อมูลสดจาก Engine หลังบ้าน ข้อมูลไม่เคยเพี้ยน ไม่ต้องรอสรุปสิ้นเดือน
                </p>

                <div className="mt-8 space-y-4">
                  <div className="p-3.5 bg-[#071322] border-l-2 border-[#00E5FF] text-xs">
                    <span className="text-white font-bold block mb-1">1. Cross-Branch Performance</span>
                    <span className="text-slate-300">
                      เปรียบเทียบ Utilization Rate ของห้อง อุปกรณ์ และทีมแพทย์ข้ามสาขาได้แบบวินาทีต่อวินาที
                    </span>
                  </div>

                  <div className="p-3.5 bg-[#071322] border-l-2 border-[#00E5FF] text-xs">
                    <span className="text-white font-bold block mb-1">2. Cohort &amp; Customer Lifetime Value (LTV)</span>
                    <span className="text-slate-300">
                      วิเคราะห์พฤติกรรมการซื้อซ้ำของลูกค้าอย่างแท้จริง ช่วยให้จัดสรรงบยิงแอดได้แม่นยำ ไม่ตำน้ำพริกละลายแม่น้ำ
                    </span>
                  </div>

                  <div className="p-3.5 bg-[#071322] border-l-2 border-[#00E5FF] text-xs">
                    <span className="text-white font-bold block mb-1">3. Inventory Burn Rate &amp; Predictive Restock</span>
                    <span className="text-slate-300">
                      เตือนสต็อกจุดสั่งซื้อซ้ำล่วงหน้า พร้อมคำนวณเงินสดจมในคลังสินค้าเพื่อบริหาร Working Capital
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-800 flex items-center justify-between text-xs font-mono text-slate-400">
                <span>CEO, FOUNDER &amp; CFO SUITE</span>
                <span className="text-[#00E5FF]">SUB-SECOND REFRESH</span>
              </div>
            </div>

          </div>
        </div>

        {/* Live Architecture Interactive Simulation Strip */}
        <div className="mt-16 bg-[#071322] border border-[#00E5FF]/20 p-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 border-b border-slate-800 pb-4">
            <div className="flex items-center gap-3">
              <Activity className="w-5 h-5 text-[#00E5FF] animate-pulse" />
              <span className="text-sm font-bold text-white uppercase font-mono tracking-wider">
                Nidaryze Real-Time Transaction Pipeline
              </span>
            </div>
            <div className="flex items-center gap-4 text-xs font-mono">
              <span className="text-slate-400">STATUS: <strong className="text-emerald-400">ONLINE (ACID)</strong></span>
              <span className="text-slate-400">ISOLATION: <strong className="text-[#00E5FF]">SERIALIZABLE</strong></span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6 text-xs">
            <div className="bg-[#0B192C] p-4 border border-slate-800">
              <div className="text-[#00E5FF] font-mono font-bold mb-1">STEP 1: INGESTION</div>
              <p className="text-slate-300">รับคำขอจอง / เบิกสต็อกหน้างานผ่าน UI แบบเบาแรง เข้าสู่ Verification Gate</p>
            </div>
            <div className="bg-[#0B192C] p-4 border border-[#00E5FF]/30 shadow-[0_0_15px_rgba(0,229,255,0.1)]">
              <div className="text-[#00E5FF] font-mono font-bold mb-1">STEP 2: ATOMIC LOCKING</div>
              <p className="text-slate-300">ระบบตรวจสอบ 3 ทรัพยากรพร้อมกัน (Room-Doctor-Client) หากผ่าน ทำการตัด FIFO ทันที</p>
            </div>
            <div className="bg-[#0B192C] p-4 border border-slate-800">
              <div className="text-[#00E5FF] font-mono font-bold mb-1">STEP 3: TELEMETRY STREAM</div>
              <p className="text-slate-300">สรุปผลยอดขายและต้นทุนเข้าสู่ Executive Dashboard อัปเดตทันทีไม่ต้องรอคนทำสรุป</p>
            </div>
          </div>
        </div>

      </section>

      {/* 5. VALUE PROPOSITION (First Principles) */}
      <section id="architecture" className="relative z-10 py-24 bg-[#071220]/90 border-t border-[#00E5FF]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#00E5FF]/10 border border-[#00E5FF]/30 text-[#00E5FF] text-xs font-mono uppercase tracking-widest mb-3">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>OUR FIRST PRINCIPLES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              สถาปัตยกรรมที่ยึดผลประโยชน์ธุรกิจเป็นหลัก
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-300">
              เราไม่ผูกขาด ไม่กินค่าหัว และให้คุณเป็นเจ้าของสินทรัพย์ทางดิจิทัล 100%
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Value 1 */}
            <div className="bg-[#0B192C] border border-slate-800 p-8 relative hover:border-[#00E5FF]/60 transition-all duration-300 group">
              <div className="w-14 h-14 bg-[#00E5FF]/10 border border-[#00E5FF]/40 flex items-center justify-center text-[#00E5FF] mb-6 group-hover:shadow-[0_0_20px_rgba(0,229,255,0.3)] transition-all">
                <Users className="w-7 h-7 text-[#00E5FF]" />
              </div>

              <div className="text-xs font-mono text-[#00E5FF] mb-2">PRINCIPLE 01</div>
              <h3 className="text-xl font-bold text-white mb-3">
                No Per-Seat Trap
              </h3>
              <p className="text-sm font-medium text-slate-200 mb-3">
                ไม่มีค่าหัวรายเดือนผูกขาด
              </p>
              <p className="text-xs text-slate-400 leading-relaxed">
                ทำไมธุรกิจต้องถูกลงโทษเมื่อขยายสาขาหรือรับพนักงานเพิ่ม? สถาปัตยกรรมของ Nidaryze ติดตั้งให้คุณใช้งานแบบไม่จำกัด User ไม่คิดค่ารายเดือนต่อคน ช่วยประหยัดต้นทุนคงที่ไปได้หลักล้านในระยะยาว
              </p>

              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center gap-2 text-[11px] font-mono text-emerald-400">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>UNLIMITED USERS / UNLIMITED BRANCHES</span>
              </div>
            </div>

            {/* Value 2 */}
            <div className="bg-[#0B192C] border border-slate-800 p-8 relative hover:border-[#00E5FF]/60 transition-all duration-300 group">
              <div className="w-14 h-14 bg-[#00E5FF]/10 border border-[#00E5FF]/40 flex items-center justify-center text-[#00E5FF] mb-6 group-hover:shadow-[0_0_20px_rgba(0,229,255,0.3)] transition-all">
                <Cloud className="w-7 h-7 text-[#00E5FF]" />
              </div>

              <div className="text-xs font-mono text-[#00E5FF] mb-2">PRINCIPLE 02</div>
              <h3 className="text-xl font-bold text-white mb-3">
                Data Sovereignty
              </h3>
              <p className="text-sm font-medium text-slate-200 mb-3">
                ลูกค้าถือครอง Source Code &amp; Cloud 100%
              </p>
              <p className="text-xs text-slate-400 leading-relaxed">
                ข้อมูลลูกค้าและฐานข้อมูลของคุณเป็นสมบัติที่มีมูลค่ามหาศาล ระบบจะถูกติดตั้งบน Cloud Account ของคุณเอง (AWS / GCP / Cloudflare) คุณถือ Source Code และ Database แบบสมบูรณ์ ไม่มีใครสามารถเอาข้อมูลคุณเป็นตัวประกัน
              </p>

              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center gap-2 text-[11px] font-mono text-emerald-400">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>FULL IP OWNERSHIP &amp; PRIVATE DATABASE</span>
              </div>
            </div>

            {/* Value 3 */}
            <div className="bg-[#0B192C] border border-slate-800 p-8 relative hover:border-[#00E5FF]/60 transition-all duration-300 group">
              <div className="w-14 h-14 bg-[#00E5FF]/10 border border-[#00E5FF]/40 flex items-center justify-center text-[#00E5FF] mb-6 group-hover:shadow-[0_0_20px_rgba(0,229,255,0.3)] transition-all">
                <Code2 className="w-7 h-7 text-[#00E5FF]" />
              </div>

              <div className="text-xs font-mono text-[#00E5FF] mb-2">PRINCIPLE 03</div>
              <h3 className="text-xl font-bold text-white mb-3">
                Logic First
              </h3>
              <p className="text-sm font-medium text-slate-200 mb-3">
                สกัด Business Rules ก่อนเขียนโค้ดเสมอ
              </p>
              <p className="text-xs text-slate-400 leading-relaxed">
                เราไม่เริ่มจากหน้าจอ แต่เริ่มจากการผ่าตัดกระบวนการทำงานหน้างาน (Workflow Audit) เพื่อค้นหา Invariant และจุดที่เกิดคอขวด แล้วจึงดีไซน์ Data Model ที่ไม่มีวันเพี้ยน ก่อนจะเขียนโค้ดแม้แต่บรรทัดเดียว
              </p>

              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center gap-2 text-[11px] font-mono text-emerald-400">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>MECHATRONICS-GRADE RIGOROUS AUDIT</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 6. LEAD QUALIFICATION FORM (The CTA Section) */}
      <section id="audit-form" className="relative z-10 py-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="bg-[#0B192C] border-2 border-[#00E5FF]/40 p-8 sm:p-12 shadow-[0_0_50px_rgba(0,229,255,0.15)] relative overflow-hidden">
          
          {/* Subtle Cyber Corner Badges */}
          <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-[#00E5FF]" />
          <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-[#00E5FF]" />
          <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-[#00E5FF]" />
          <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-[#00E5FF]" />

          {/* Form Header */}
          <div className="text-center space-y-3 mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#00E5FF]/10 border border-[#00E5FF]/40 text-[#00E5FF] text-xs font-mono uppercase tracking-widest">
              <Clock className="w-3.5 h-3.5" />
              <span>LIMITED CAPACITY EVALUATION</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              ปรึกษาสถาปนิกระบบวันนี้
            </h2>
            
            <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto">
              จำกัดคิววิเคราะห์ระบบเพียง <span className="text-[#00E5FF] font-semibold">3-5 ธุรกิจต่อเดือน</span> เพื่อคุณภาพงานวิศวกรรมระดับลึก{' '}
              <span className="block mt-1 text-slate-400 font-mono text-xs">
                (สำหรับธุรกิจในจังหวัดเชียงใหม่ มีบริการ On-site Discovery ถึงหน้างาน)
              </span>
            </p>
          </div>

          {isSubmitted ? (
            <div className="bg-[#071322] border border-[#00E5FF] p-8 text-center space-y-4 animate-fadeIn">
              <div className="w-16 h-16 bg-[#00E5FF]/10 border-2 border-[#00E5FF] rounded-none mx-auto flex items-center justify-center text-[#00E5FF] shadow-[0_0_20px_rgba(0,229,255,0.4)]">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-white">รับข้อมูลการประเมินสิทธิ์เรียบร้อยแล้ว</h3>
              <p className="text-sm text-slate-300 max-w-md mx-auto">
                วิศวกรสถาปัตยกรรมระบบของ Nidaryze กำลังทำการตรวจสอบคอขวดและประเภทธุรกิจของคุณ และจะติดต่อกลับผ่านช่องทางที่คุณระบุภายใน 24 ชั่วโมง
              </p>
              <div className="pt-4 border-t border-slate-800 text-xs font-mono text-[#00E5FF]">
                PRIORITY TICKET DISPATCHED // NIDARYZE ARCHITECTURE LAB
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Field 1: Contact Name */}
              <div>
                <label className="block text-xs font-mono uppercase text-slate-300 mb-2 tracking-wider">
                  ชื่อผู้ติดต่อ / ตำแหน่ง <span className="text-[#00E5FF]">*</span>
                </label>
                <div className="relative">
                  <input
                    type="text"
                    required
                    value={formData.contactName}
                    onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                    placeholder="เช่น คุณธนภัทร (ผู้จัดการทั่วไป / เจ้าของกิจการ)"
                    className="w-full bg-[#071322] border border-slate-700 rounded-none px-4 py-3.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#00E5FF] focus:ring-1 focus:ring-[#00E5FF] transition-all"
                  />
                </div>
              </div>

              {/* Field 2: Business Type */}
              <div>
                <label className="block text-xs font-mono uppercase text-slate-300 mb-2 tracking-wider">
                  ประเภทธุรกิจ / คลินิก / โรงงาน <span className="text-[#00E5FF]">*</span>
                </label>
                <div className="relative">
                  <input
                    type="text"
                    required
                    value={formData.businessType}
                    onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                    placeholder="เช่น คลินิกทันตกรรม 3 สาขา, โรงงานแปรรูปอาหาร, คลินิกเสริมความงาม"
                    className="w-full bg-[#071322] border border-slate-700 rounded-none px-4 py-3.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#00E5FF] focus:ring-1 focus:ring-[#00E5FF] transition-all"
                  />
                </div>
              </div>

              {/* Field 3: Team Size Select */}
              <div>
                <label className="block text-xs font-mono uppercase text-slate-300 mb-2 tracking-wider">
                  จำนวนทีมงานหน้างาน (Operations Team) <span className="text-[#00E5FF]">*</span>
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {['1-5 คน', '6-20 คน', '20+ คน'].map((size) => {
                    const isSelected = formData.teamSize === size;
                    return (
                      <button
                        type="button"
                        key={size}
                        onClick={() => setFormData({ ...formData, teamSize: size })}
                        className={`py-3 px-4 text-xs sm:text-sm font-semibold tracking-wide border transition-all text-center ${
                          isSelected
                            ? 'bg-[#00E5FF]/20 border-[#00E5FF] text-[#00E5FF] shadow-[0_0_15px_rgba(0,229,255,0.2)]'
                            : 'bg-[#071322] border-slate-700 text-slate-300 hover:border-slate-500'
                        }`}
                      >
                        {size}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Field 4: Bottlenecks (Textarea) */}
              <div>
                <label className="block text-xs font-mono uppercase text-slate-300 mb-2 tracking-wider">
                  คอขวดที่ทำให้ธุรกิจสะดุดที่สุดตอนนี้ <span className="text-[#00E5FF]">*</span>
                </label>
                <textarea
                  rows={4}
                  required
                  value={formData.bottleneck}
                  onChange={(e) => setFormData({ ...formData, bottleneck: e.target.value })}
                  placeholder="เช่น คิวชนบ่อยตอนช่วงพีค, พนักงานตัดสต็อกยาไม่ตรงจนของขาด, ยอดขายแต่ละสาขาต้องรอทำรายงาน Excel 5 วัน"
                  className="w-full bg-[#071322] border border-slate-700 rounded-none px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#00E5FF] focus:ring-1 focus:ring-[#00E5FF] transition-all resize-none"
                />
              </div>

              {/* Contact Info (Phone / Line ID / Email) */}
              <div>
                <label className="block text-xs font-mono uppercase text-slate-300 mb-2 tracking-wider">
                  เบอร์โทรศัพท์ / LINE ID หรือ Email ติดต่อกลับ <span className="text-[#00E5FF]">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.contactChannel}
                  onChange={(e) => setFormData({ ...formData, contactChannel: e.target.value })}
                  placeholder="เช่น 081-xxx-xxxx หรือ Line ID: yourname"
                  className="w-full bg-[#071322] border border-slate-700 rounded-none px-4 py-3.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#00E5FF] focus:ring-1 focus:ring-[#00E5FF] transition-all"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-[#00E5FF] text-black font-extrabold text-base tracking-wider hover:bg-[#33ebff] transition-all duration-300 shadow-[0_0_25px_rgba(0,229,255,0.5)] hover:shadow-[0_0_35px_rgba(0,229,255,0.7)] active:translate-y-[1px] disabled:opacity-50 flex items-center justify-center gap-3 border border-[#00E5FF]"
              >
                {isSubmitting ? (
                  <>
                    <Activity className="w-5 h-5 animate-spin" />
                    <span>กำลังเชื่อมต่อสถาปัตยกรรมระบบ...</span>
                  </>
                ) : (
                  <>
                    <span>ส่งข้อมูลเพื่อประเมินสิทธิ์ Audit</span>
                    <Send className="w-4 h-4 fill-black" />
                  </>
                )}
              </button>

              <div className="flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-slate-400 pt-2 border-t border-slate-800 gap-2">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  ข้อมูลของคุณถูกเก็บรักษาอย่างเป็นความลับ 100%
                </span>
                <span>45-MIN SYSTEM ARCHITECTURE AUDIT</span>
              </div>

            </form>
          )}

        </div>
      </section>

      {/* 7. FOOTER */}
      <footer className="relative z-10 bg-[#06101D] border-t border-[#00E5FF]/20 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          
          {/* Brand Info */}
          <div className="flex flex-col items-center md:items-start gap-1">
            <div className="flex items-center gap-2">
              <Cpu className="w-5 h-5 text-[#00E5FF]" />
              <span className="text-xl font-extrabold tracking-wider text-[#00E5FF] font-mono">
                Nidaryze
              </span>
            </div>
            <p className="text-xs text-slate-400">
              Bespoke System Architecture &amp; Custom Backoffice Engineering
            </p>
          </div>

          {/* Contact Details */}
          <div className="flex flex-col sm:flex-row items-center gap-4 text-xs text-slate-300 font-mono">
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-[#00E5FF]" />
              <a href="mailto:contact@nidaryze.com" className="hover:text-[#00E5FF] transition-colors">
                contact@nidaryze.com
              </a>
            </div>
            <div className="hidden sm:inline text-slate-700">|</div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#00E5FF]" />
              <span>Chiang Mai &amp; Bangkok, Thailand</span>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-xs text-slate-400 font-mono">
            &copy; {new Date().getFullYear()} Nidaryze. All rights reserved.
          </div>

        </div>
      </footer>
    </div>
  );
}
