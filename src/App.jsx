import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Plane, FileText, MapPin, ShieldCheck, Backpack, 
  Search, CheckCircle, ArrowRight, Info, Clock, 
  Home, AlertTriangle, Menu, X, GraduationCap, 
  Gavel, Leaf, Users, Briefcase, Calendar, 
  DollarSign, UserCheck, Heart, Sparkles, Headphones
} from 'lucide-react';

const App = () => {
  const [activeTab, setActiveTab] = useState('preparacion');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const steps = [
    { id: 'preparacion', title: '1. Previos en Colombia', icon: <FileText className="w-6 h-6" /> },
    { id: 'frontera', title: '2. Vuelos y Maletas', icon: <Briefcase className="w-6 h-6" /> },
    { id: 'transicion', title: '3. Legal y Finanzas', icon: <ShieldCheck className="w-6 h-6" /> },
    { id: 'logistica', title: '4. Madrid', icon: <MapPin className="w-6 h-6" /> },
    { id: 'refugio', title: '5. Espacio Seguro', icon: <Heart className="w-6 h-6" /> },
  ];

  const SectionWrapper = ({ children, title }) => (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="max-w-5xl mx-auto"
    >
      <h2 className="text-4xl font-extrabold text-slate-100 mb-10 flex items-center gap-4 tracking-tight">
        {title}
      </h2>
      <div className="space-y-8">
        {children}
      </div>
    </motion.div>
  );

  const Card = ({ title, icon, children, type = "default", badge }) => {
    const styles = {
      default: "glass-card hover:-translate-y-1.5",
      warning: "bg-amber-950/20 border-amber-500/20 backdrop-blur-md shadow-lg shadow-amber-900/5 hover:shadow-amber-500/10 hover:border-amber-500/40 transition-all duration-300 hover:-translate-y-1.5 hover:bg-amber-900/20",
      info: "bg-cyan-950/20 border-cyan-500/20 backdrop-blur-md shadow-lg shadow-cyan-900/5 hover:shadow-cyan-500/10 hover:border-cyan-500/40 transition-all duration-300 hover:-translate-y-1.5 hover:bg-cyan-900/20",
      success: "bg-emerald-950/20 border-emerald-500/20 backdrop-blur-md shadow-lg shadow-emerald-900/5 hover:shadow-emerald-500/10 hover:border-emerald-500/40 transition-all duration-300 hover:-translate-y-1.5 hover:bg-emerald-900/20"
    };
    
    return (
      <div className={`p-8 rounded-3xl border ${styles[type]}`}>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
          {title && (
            <h3 className="font-bold text-slate-100 flex items-center gap-3 text-xl tracking-wide">
              {icon && <span className={`${type === 'default' ? 'text-cyan-400' : ''}`}>{icon}</span>}
              {title}
            </h3>
          )}
          {badge && (
            <span className="bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-sm px-4 py-2 rounded-full font-bold uppercase tracking-widest flex items-center gap-2 backdrop-blur-lg shadow-[0_0_15px_rgba(34,211,238,0.1)]">
              <UserCheck className="w-4 h-4" /> {badge}
            </span>
          )}
        </div>
        <div className="text-slate-300 text-base lg:text-lg leading-loose">{children}</div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-slate-950 bg-gradient-premium flex flex-col md:flex-row font-outfit selection:bg-cyan-500/30 text-slate-200">
      {/* Sidebar / Navigation */}
      <nav className={`fixed inset-y-0 left-0 z-50 w-80 glass border-r border-white/5 flex flex-col transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 transition-transform duration-500 ease-out`}>
        <div className="p-10">
          <h1 className="text-3xl font-extrabold flex items-center gap-3 text-slate-100 tracking-tight">
            <Plane className="w-10 h-10 text-cyan-400" /> <span className="text-gradient">Ruta Madrid</span>
          </h1>
          <p className="text-slate-400 text-sm mt-3 font-medium uppercase tracking-widest">Panel Logístico Sorany</p>
        </div>
        
        <div className="mt-6 px-6 flex-1 space-y-2">
          {steps.map((step) => (
            <button
              key={step.id}
              onClick={() => { setActiveTab(step.id); setIsMenuOpen(false); }}
              className={`w-full flex items-center gap-4 px-6 py-5 rounded-2xl text-base font-semibold transition-all duration-300 ${
                activeTab === step.id 
                  ? 'bg-cyan-500/10 border border-cyan-500/30 shadow-[0_0_20px_rgba(34,211,238,0.15)] text-cyan-300 translate-x-2' 
                  : 'text-slate-500 hover:bg-white/5 hover:text-slate-200 border border-transparent'
              }`}
            >
              <div className={`${activeTab === step.id ? 'text-cyan-400' : 'text-slate-600'}`}>
                {step.icon}
              </div>
              {step.title}
            </button>
          ))}
        </div>

        <div className="p-6 m-6 bg-slate-900/60 rounded-2xl border border-white/5 backdrop-blur-md">
          <div className="space-y-3 text-sm font-medium text-slate-400 tracking-wide">
            <p className="flex items-center gap-3"><MapPin className="w-4 h-4 text-cyan-500/80"/> Origen: Aguadas, Caldas</p>
            <p className="flex items-center gap-3"><Plane className="w-4 h-4 text-cyan-500/80"/> Destino: Madrid T4</p>
          </div>
        </div>
      </nav>

      {/* Mobile Header */}
      <div className="md:hidden glass p-5 flex justify-between items-center sticky top-0 z-[40]">
        <h1 className="font-bold text-slate-100 flex items-center gap-2 text-xl"><Plane className="w-6 h-6 text-cyan-400"/> Ruta Madrid</h1>
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2.5 bg-slate-800/80 rounded-xl border border-white/10 text-slate-200">
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Main Content */}
      <main className="flex-1 p-6 md:p-14 md:pl-[22rem] relative overflow-hidden">
        {/* Background blobs for Premium Dark Mode */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] rounded-full bg-cyan-900/20 blur-[120px] pointer-events-none mix-blend-screen"></div>
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] rounded-full bg-purple-900/20 blur-[100px] pointer-events-none mix-blend-screen"></div>

        <AnimatePresence mode="wait">
        {activeTab === 'preparacion' && (
          <SectionWrapper key="preparacion" title="Paso 1: Preparativos del Viaje">
            
            <Card title="🚕 Transporte Interno (Aguadas ➔ Pereira)" icon={<MapPin className="w-6 h-6 text-amber-400" />} type="warning">
              <div className="mb-4 text-slate-300 text-lg">
                Tu vuelo a Bogotá sale desde Pereira a las <strong className="text-cyan-400">06:35 AM</strong>. Eso significa que debes estar parada en el counter del Aeropuerto Matecaña a las <strong className="text-amber-400 bg-amber-900/30 px-2 rounded">04:30 AM</strong> en punto.
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-slate-950/50 p-5 rounded-xl border border-red-500/20 opacity-80">
                  <h4 className="font-bold text-red-400 mb-2 flex items-center gap-2"><X className="w-5 h-5"/> Opción: Riesgo y Cansancio</h4>
                  <p className="text-slate-400 text-sm">Bajar de noche directo (peajes, carretera) o dormir en las sillas del aeropuerto. <strong>Mala idea</strong>: Te destruirás la espalda justo antes de volar 10 horas rumbo a Europa.</p>
                </div>
                <div className="bg-emerald-950/30 p-5 rounded-xl border border-emerald-500/40 transform hover:-translate-y-1 transition-all shadow-lg shadow-emerald-900/20">
                  <h4 className="font-bold text-emerald-400 mb-2 flex items-center gap-2"><CheckCircle className="w-5 h-5"/> Opción Recomendada (Hotel)</h4>
                  <p className="text-slate-300 text-sm">Viajar Aguadas ➔ Manizales ➔ Pereira <strong className="text-white">¡este mismo miércoles 6 de mayo en la tarde!</strong> Bajas tranquila, te quedas en un alojamiento económico (Ej. hostal en Nacederos o la Villa) pegado al aeropuerto. Duermes bien, y a las 04:15 AM tomas el taxi que toma 5 minutos.</p>
                </div>
              </div>
            </Card>

            <Card title="🛡️ Seguro Schengen (OBLIGATORIO)" icon={<ShieldCheck className="w-6 h-6 text-cyan-400" />} type="info" badge="ACCIÓN REQUERIDA">
              <div className="mb-5 bg-cyan-950/50 p-4 rounded-2xl border border-cyan-500/30">
                <p className="text-cyan-200 text-base leading-relaxed">El seguro de viaje Schengen es <strong className="text-white">obligatorio</strong> para entrar a España. Para evitar problemas con la dirección física, <strong className="text-white">Sorany realizará la compra directa</strong> siguiendo estos pasos:</p>
              </div>
              
              <div className="space-y-4 mb-6">
                <div className="bg-slate-900/80 p-5 rounded-2xl border border-white/5 hover:border-cyan-500/30 transition-all">
                  <h4 className="font-bold text-slate-100 mb-3 flex items-center gap-2">
                    <span className="bg-cyan-500 text-slate-950 w-6 h-6 rounded-full flex items-center justify-center text-xs">1</span>
                    Seguro IATI (Paso a Paso)
                  </h4>
                  <ul className="text-slate-300 text-sm space-y-2 ml-8 list-disc">
                    <li>Entrar a <a href="https://www.iatiseguros.com/" target="_blank" className="text-cyan-400 underline font-bold">iatiseguros.com</a></li>
                    <li>Origen: <strong>Colombia</strong> / Destino: <strong>España</strong></li>
                    <li>Fechas: <strong>07/05/2026 al 15/05/2026</strong></li>
                    <li>Elegir plan: <strong className="text-white underline">IATI Básico</strong> (aprox. 96k COP)</li>
                    <li>Pagar y descargar el PDF de la póliza.</li>
                  </ul>
                </div>

                <div className="bg-slate-900/80 p-5 rounded-2xl border border-white/5 hover:border-emerald-500/30 transition-all">
                  <h4 className="font-bold text-slate-100 mb-3 flex items-center gap-2">
                    <span className="bg-emerald-500 text-slate-950 w-6 h-6 rounded-full flex items-center justify-center text-xs">2</span>
                    Reserva Hostal (Booking)
                  </h4>
                  <ul className="text-slate-300 text-sm space-y-2 ml-8 list-disc">
                    <li>Entrar a <a href="https://www.booking.com/" target="_blank" className="text-emerald-400 underline font-bold">booking.com</a></li>
                    <li>Destino: <strong>Madrid</strong> / Fechas: <strong>08/05 al 15/05</strong></li>
                    <li>Filtros obligatorios: <strong className="text-white">Cancelación gratuita</strong> y <strong className="text-white">Sin pago por adelantado</strong></li>
                    <li>Descargar confirmación en PDF para migración.</li>
                  </ul>
                </div>
              </div>

              <div className="bg-emerald-950/30 p-4 rounded-xl border border-emerald-500/30 flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-emerald-400 flex-shrink-0" />
                <p className="text-emerald-200 text-sm lg:text-base"><strong>Importante:</strong> Una vez tengas ambos PDFs, envíalos a Dani. Él se encargará de guardarlos y cancelar la reserva de Booking en el momento oportuno.</p>
              </div>
            </Card>

            <Card title="⏳ Checklist Definitivo (Semana de Vuelo)" icon={<Clock className="w-6 h-6 text-cyan-400" />} type="info">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-cyan-950/40 p-5 rounded-xl border border-cyan-500/20">
                  <h4 className="font-bold text-cyan-300 mb-3 text-lg border-b border-cyan-500/20 pb-2">Logística Europea (Resuelta):</h4>
                  <ul className="text-slate-300 text-base space-y-3">
                    <li className="flex items-center gap-2">
                      <div className="bg-cyan-500/20 p-1 rounded-full"><Clock className="w-4 h-4 text-cyan-400" /></div>
                      <span>Contratar Seguro Schengen.</span>
                      <strong className="text-cyan-400 text-sm ml-2 bg-cyan-900/30 px-2 py-0.5 rounded border border-cyan-500/20">Acción Sorany</strong>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="bg-cyan-500/20 p-1 rounded-full"><Clock className="w-4 h-4 text-cyan-400" /></div>
                      <span>Reserva de hotel en Madrid.</span>
                      <strong className="text-cyan-400 text-sm ml-2 bg-cyan-900/30 px-2 py-0.5 rounded border border-cyan-500/20">Acción Sorany</strong>
                    </li>
                    <li className="flex items-center gap-2 text-slate-300"><div className="w-2 h-2 rounded-full bg-cyan-400 flex-shrink-0"></div> Planificar compras locales (adaptador enchufe redondo europeo).</li>
                  </ul>
                </div>
                <div className="bg-amber-950/40 p-5 rounded-xl border border-amber-500/20">
                  <h4 className="font-bold text-amber-400 mb-3 text-lg border-b border-amber-500/20 pb-2">Documentos Personales (¡Casi listos!):</h4>
                  <ul className="text-slate-300 text-base space-y-3">
                    <li className="flex items-center gap-2">
                      <div className="bg-emerald-500/20 p-1 rounded-full"><CheckCircle className="w-4 h-4 text-emerald-400" /></div>
                      <span className="line-through opacity-50 text-emerald-200">Certificación de Registro Civil.</span>
                    </li>
                    <li className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-amber-400 flex-shrink-0"></div> Seguimiento a Apostilla de <strong className="text-amber-200">Antecedentes Penales</strong>.</li>
                    <li className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-amber-400 flex-shrink-0"></div> Dejar cerrado el Poder familiar en Notaría de Aguadas.</li>
                  </ul>
                </div>
              </div>
            </Card>

            <Card title="🧳 Estrategia de Equipaje (Tour 8 Días)" icon={<Briefcase className="w-6 h-6 text-emerald-400" />} type="default">
               <div className="mb-5 text-slate-300 leading-relaxed text-lg bg-slate-900/50 p-4 rounded-xl border border-white/5">
                  <strong className="text-cyan-400">¡Noticia Excelente!</strong> Tu excursión real documentada en España dura exactamente <strong>1 semana (del 8 al 15)</strong>. El clima es un calor agradable. ¡No necesitas llevar la casa entera! 
                  <br/><strong className="text-emerald-400 text-xl block mt-2">💎 Las armas: Solo 1 Maleta de Cabina (10 KG) + 1 Mochila Personal.</strong>
               </div>
               
               <div className="grid md:grid-cols-2 gap-6 mt-6">
                 <div className="bg-slate-900 border border-slate-700/50 p-6 rounded-2xl hover:border-purple-500/30 transition-colors">
                   <h4 className="font-bold text-slate-100 flex items-center gap-2 mb-4 text-lg"><Backpack className="w-5 h-5 text-purple-400"/> Tu Mochila Personal</h4>
                   <p className="text-sm text-slate-400 mb-4 bg-slate-950 p-2 rounded-lg">(Va debajo del asiento). Es intocable, tu resguardo.</p>
                   <ul className="text-base text-slate-300 space-y-3">
                     <li className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-purple-400"></div> Pasaporte original (+ Copia a color).</li>
                     <li className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-purple-400"></div> Reserva de Hotel e Itinerario impreso.</li>
                     <li className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-purple-400"></div> Dinero en Efectivo (A la mano para migración).</li>
                     <li className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-purple-400"></div> Cargador del móvil y cepillo de dientes.</li>
                   </ul>
                 </div>
                 
                 <div className="bg-slate-900 border border-slate-700/50 p-6 rounded-2xl hover:border-cyan-500/30 transition-colors">
                   <h4 className="font-bold text-slate-100 flex items-center gap-2 mb-4 text-lg"><Briefcase className="w-5 h-5 text-cyan-400"/> Maleta de Cabina (10 Kg)</h4>
                   <p className="text-sm text-slate-400 mb-4 bg-slate-950 p-2 rounded-lg">(Para 1 mísera semana). Evita las ruedas de bodega:</p>
                   <ul className="text-base text-slate-300 space-y-3">
                     <li className="flex items-start gap-2">👕 <span><strong>Método Rollito:</strong> Enrollar ropa ahorra un montonazo.</span></li>
                     <li className="flex items-start gap-2">👖 <span><strong>Básicos minimalistas:</strong> Solo 2-3 pantalones, blusas ligeras. Nada grande. Lencería 8 días.</span></li>
                     <li className="flex items-start gap-2">🧥 <span><strong>Abrigo:</strong> Solo 1 y llevalo <em>puesto</em> como prenda de vestir, no estorbes la maleta.</span></li>
                     <li className="flex items-start gap-2">🧴 <span><strong>Líquidos:</strong> Bolsa Ziploc botellitas mini de menos de 100ml.</span></li>
                   </ul>
                 </div>
               </div>
            </Card>
          </SectionWrapper>
        )}

        {activeTab === 'frontera' && (
          <SectionWrapper key="frontera" title="Paso 2: Itinerario y Frontera">
            
            <Card title="✈️ VUELOS Y HORARIOS CONVERSOS" type="success" icon={<Plane className="w-6 h-6 text-emerald-400" />}>
              <div className="mb-8 bg-emerald-950/40 p-6 rounded-2xl border border-emerald-500/20 flex flex-col sm:flex-row gap-6 items-center">
                 <div className="text-center bg-emerald-900/60 p-4 rounded-xl border border-emerald-500/30 min-w-40">
                    <p className="text-sm text-emerald-400/80 font-bold uppercase mb-2 tracking-widest">Localizador</p>
                    <p className="text-4xl font-extrabold text-emerald-100 tracking-widest drop-shadow-[0_0_10px_rgba(52,211,153,0.3)]">CB5ES3</p>
                 </div>
                 <div className="text-lg text-emerald-200/90 leading-relaxed border-l-2 border-emerald-500/20 pl-6">
                   ⚠️ <strong className="text-emerald-400">Atención a los Horarios:</strong> El reloj mundial es clave para no asustar a la familia.<br/>
                   En primavera, <strong className="text-white">Madrid está 7 horas adelante</strong> de Colombia. Cuando sea el mediodía allá, en Colombia apenas son las 5 AM.
                 </div>
              </div>

              <div className="space-y-8">
                <div className="border-l-4 border-cyan-500/50 pl-6 relative">
                  <div className="absolute -left-2.5 top-1 bg-slate-900 border-2 border-cyan-500 w-4 h-4 rounded-full"></div>
                  <h4 className="font-extrabold text-slate-100 text-2xl mb-1">Tramo 1: Pereira (PEI) ➔ Bogotá (BOG)</h4>
                  <p className="text-cyan-400 font-bold text-base mb-4 tracking-wide">Jueves, 7 de mayo de 2026 · Avianca AV9443 · Localizador: ATQINS</p>
                  
                  <div className="bg-slate-900/50 border border-slate-700/50 p-6 rounded-2xl flex flex-col md:flex-row gap-8 items-center">
                     <div className="flex-1">
                       <p className="text-sm text-slate-500 font-bold uppercase mb-1 flex items-center gap-2"><Plane className="w-4 h-4 text-cyan-500 rotate-45"/> Despegue PEI</p>
                       <p className="text-3xl font-bold text-slate-100">06:35 <span className="text-base font-normal text-slate-400 bg-slate-800 px-2 py-1 rounded ml-2">Hora COL 🇨🇴</span></p>
                     </div>
                     <div className="flex-1">
                       <p className="text-sm text-slate-500 font-bold uppercase mb-1 flex items-center gap-2"><Plane className="w-4 h-4 text-cyan-500 md:rotate-90"/> Aterrizaje BOG</p>
                       <p className="text-3xl font-bold text-slate-100">07:30 <span className="text-base font-normal text-slate-400 bg-slate-800 px-2 py-1 rounded ml-2">Hora COL 🇨🇴</span></p>
                     </div>
                  </div>
                  <div className="mt-4 grid sm:grid-cols-3 gap-3">
                    <div className="bg-cyan-950/30 p-3 rounded-xl border border-cyan-500/20 flex items-center gap-2">
                      <span className="text-cyan-400 font-bold text-sm">🪑 Asiento</span>
                      <span className="text-slate-100 font-extrabold text-lg">17K</span>
                      <span className="text-slate-400 text-xs">Grupo E</span>
                    </div>
                    <div className="bg-amber-950/20 p-3 rounded-xl border border-amber-500/20 flex items-center gap-2">
                      <AlertTriangle className="w-4 h-4 text-amber-500 flex-shrink-0" />
                      <span className="text-amber-200 text-sm">Presentarse en sala: <strong className="text-amber-400">05:35</strong></span>
                    </div>
                    <div className="bg-emerald-950/20 p-3 rounded-xl border border-emerald-500/20 flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                      <span className="text-emerald-200 text-sm">Bodega: <strong>1×23kg</strong> incluida</span>
                    </div>
                  </div>
                </div>

                  <div className="mt-4 mb-8 bg-indigo-950/20 p-4 rounded-xl border border-indigo-500/20 inline-flex items-center gap-3">
                     <Clock className="w-5 h-5 text-indigo-400" />
                     <p className="text-indigo-200 text-sm">Escala (Tiempo libre en Aeropuerto El Dorado): <strong className="text-indigo-400 text-base">~12 horas y 45 mins</strong></p>
                  </div>

                  <div className="border-l-4 border-purple-500/50 pl-6 relative">
                    <div className="absolute -left-2.5 top-1 bg-slate-900 border-2 border-purple-500 w-4 h-4 rounded-full"></div>
                    <h4 className="font-extrabold text-slate-100 text-2xl mb-1">Tramo 2: Bogotá (BOG) ➔ Madrid (MAD)</h4>
                    <p className="text-purple-400 font-bold text-base mb-4 tracking-wide">Air Europa UX 194 · Boeing 787-8 · Localizador: CB5ES3</p>

                    <div className="mb-4 flex items-center gap-3 bg-emerald-900/30 border border-emerald-500/40 px-5 py-3 rounded-xl">
                      <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                      <span className="text-emerald-200 font-bold text-base">✈️ CHECK-IN REALIZADO · Sello <span className="text-emerald-300 bg-emerald-900/50 px-2 py-0.5 rounded border border-emerald-500/30">SKYCLEARED</span> — Ve directo a la puerta de embarque</span>
                    </div>
                    
                    <div className="bg-slate-900/50 border border-slate-700/50 p-6 rounded-2xl space-y-6">
                       <div className="flex flex-col md:flex-row gap-8 border-b border-slate-700/50 pb-6">
                         <div className="flex-1">
                           <p className="text-sm text-slate-500 font-bold uppercase mb-1 flex items-center gap-2"><Plane className="w-4 h-4 text-purple-500 rotate-45"/> Despegue BOG</p>
                           <p className="text-3xl font-bold text-slate-100">20:15 <span className="text-base font-normal text-slate-400 bg-slate-800 px-2 py-1 rounded ml-2">Hora COL 🇨🇴</span></p>
                           <p className="text-sm text-slate-500 mt-2">Jueves, 7 de mayo · El Dorado T1</p>
                         </div>
                         <div className="flex-1">
                           <p className="text-sm text-slate-500 font-bold uppercase mb-1 flex items-center gap-2"><Plane className="w-4 h-4 text-amber-500 md:rotate-90"/> Aterrizaje Barajas (MAD)</p>
                           <p className="text-3xl font-bold text-slate-100">13:00 <span className="text-base font-normal text-amber-500 bg-amber-950/50 border border-amber-500/20 px-2 py-1 rounded ml-2">Hora MAD 🇪🇸</span></p>
                           <p className="text-sm text-slate-500 mt-2">Viernes, 8 de mayo · Adolfo Suárez T1</p>
                         </div>
                       </div>
                       <div className="grid sm:grid-cols-3 gap-3">
                         <div className="bg-cyan-950/30 p-3 rounded-xl border border-cyan-500/20 flex items-center gap-2">
                           <span className="text-cyan-400 font-bold text-sm">🪑 Asiento</span>
                           <span className="text-slate-100 font-extrabold text-lg">29A</span>
                           <span className="text-slate-400 text-xs">Zona 4</span>
                         </div>
                         <div className="bg-amber-950/20 p-3 rounded-xl border border-amber-500/20 flex items-center gap-2">
                           <Clock className="w-4 h-4 text-amber-400 flex-shrink-0" />
                           <span className="text-amber-200 text-sm">Embarque: <strong className="text-amber-400">19:15</strong> máximo</span>
                         </div>
                         <div className="bg-purple-950/20 p-3 rounded-xl border border-purple-500/20 flex items-center gap-2">
                           <span className="text-purple-300 text-sm">9h 45min · Sin escalas</span>
                         </div>
                       </div>
                       <div className="bg-purple-900/20 p-5 rounded-xl border border-purple-500/20 flex gap-4 items-start">
                         <Info className="w-6 h-6 text-purple-400 flex-shrink-0" />
                         <div>
                           <p className="text-base text-purple-300 font-bold mb-2">Tu familia en Colombia (Cero Ansiedad):</p>
                           <p className="text-base text-slate-300 leading-relaxed text-justify">
                             Aterrizarás a las <strong>13:00</strong> (hora de España). ¡Pero tranquila! En ese instante exacto, en Aguadas-Caldas son apenas las <strong className="text-cyan-300 bg-cyan-900/30 px-2 py-1 rounded">06:00 AM</strong>.
                             <br/><br/><strong className="text-purple-400">La regla:</strong> Tu familia apenas se estará levantando y preparando café, así que si durante tus trámites de migración no contestas rápido, diles con anticipación que para ellos todavía es de madrugada y no tienen por qué preocuparse.
                           </p>
                         </div>
                       </div>
                    </div>
                  </div>
               </div>
            </Card>

            <Card title="🇪🇸 Migración en Madrid (El Guion Oficial)" icon={<ShieldCheck className="w-6 h-6 text-cyan-400" />} type="info">
               <div className="mb-6 bg-emerald-950/30 p-4 rounded-2xl border border-emerald-500/30 flex items-start gap-3">
                 <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                 <div>
                   <p className="text-emerald-200 text-sm font-bold mb-1">Documentos listos que Dani te enviará antes de volar:</p>
                   <p className="text-emerald-100/80 text-sm">✅ Póliza de Seguro Schengen (PDF) &nbsp;·&nbsp; ✅ Confirmación de Reserva de Hotel (PDF imprimible)</p>
                 </div>
               </div>
               <div className="text-slate-300 space-y-4 leading-relaxed text-lg mb-8">
                  <p>Frente a Inmigración y <strong>"Control de Pasaportes"</strong> tu actitud debe ser 100% transparente y segura, eres una turista legítima con 1 semana por delante.</p>
                  <ul className="bg-cyan-950/30 p-6 rounded-2xl border border-cyan-500/20 space-y-5 mt-4">
                     <li className="flex flex-col sm:flex-row gap-3 items-start border-b border-cyan-500/10 pb-4">
                       <strong className="text-cyan-400 min-w-48 text-base">👮‍♂️ "¿A qué viene?"</strong> 
                       <span className="text-slate-200">"Vengo de turismo a conocer Madrid. Son unas vacaciones cortas de 8 días, acá tengo el vuelo de retorno para el día 15."</span>
                     </li>
                     <li className="flex flex-col sm:flex-row gap-3 items-start border-b border-cyan-500/10 pb-4">
                       <strong className="text-cyan-400 min-w-48 text-base">👮‍♂️ "¿Dónde se aloja?"</strong> 
                       <span className="text-slate-200">(Entregas en mano la hoja impresa con la <em>Reserva de Hotel en Madrid</em>, del 8 al 15 de mayo). El agente ve el nombre del hotel, tu nombre y las fechas.</span>
                     </li>
                     <li className="flex flex-col sm:flex-row gap-3 items-start border-b border-cyan-500/10 pb-4">
                       <strong className="text-cyan-400 min-w-48 text-base">👮‍♂️ "¿Tiene seguro?"</strong> 
                       <span className="text-slate-200">(Entregas la póliza del Seguro Schengen). "Sí, tengo seguro de viaje con cobertura de 30.000€ válido durante toda mi estancia."</span>
                     </li>
                     <li className="flex flex-col sm:flex-row gap-3 items-start">
                       <strong className="text-cyan-400 min-w-48 text-base">👮‍♂️ "¿Dinero para su estadía?"</strong> 
                       <span className="text-slate-200">"El mínimo son 113€ al día. Estoy 8 días, traigo <strong className="text-emerald-400 bg-emerald-900/30 px-2 rounded">1,000€</strong> para cubrirlo de sobra." (Y los muestras).</span>
                     </li>
                  </ul>
               </div>

               <h4 className="font-extrabold text-slate-100 text-xl flex items-center gap-3 mb-4 border-b border-white/5 pb-4"><MapPin className="w-5 h-5 text-purple-400"/> Tu Itinerario (Imprímelo y memorízalo)</h4>
               <p className="text-slate-400 text-base mb-6">Si te llegan a preguntar *¿Qué viene a visitar?*, no puedes dudar. Respondes con este plan y pasas sobrada:</p>
               
               <div className="grid md:grid-cols-2 gap-3 text-base">
                 <div className="bg-slate-900 border-l-2 border-purple-500 rounded p-4">
                   <div className="text-purple-300 font-bold text-sm mb-1 uppercase tracking-wider">Día 1: Viernes 8</div>
                   <strong className="text-slate-200 block mb-1">Aterrizaje y Gran Vía</strong>
                   <span className="text-slate-400 text-sm">Registro en hotel, dormir y caminar por la calle céntrica comercial de la Gran Vía en la tarde.</span>
                 </div>
                 <div className="bg-slate-900 border-l-2 border-cyan-500 rounded p-4">
                   <div className="text-cyan-300 font-bold text-sm mb-1 uppercase tracking-wider">Día 2: Sábado 9</div>
                   <strong className="text-slate-200 block mb-1">Centro Histórico</strong>
                   <span className="text-slate-400 text-sm">Turismo caminando: Puerta del Sol, degustar tapas en Plaza Mayor, y ver el Palacio Real por fuera.</span>
                 </div>
                 <div className="bg-slate-900 border-l-2 border-cyan-500 rounded p-4">
                   <div className="text-cyan-300 font-bold text-sm mb-1 uppercase tracking-wider">Día 3: Domingo 10</div>
                   <strong className="text-slate-200 block mb-1">Día de Arte e Historia</strong>
                   <span className="text-slate-400 text-sm">Comprar boletos en el Museo del Prado y hacer picnic/ver atardecer en el Parque de El Retiro.</span>
                 </div>
                 <div className="bg-slate-900 border-l-2 border-amber-500 rounded p-4">
                   <div className="text-amber-300 font-bold text-sm mb-1 uppercase tracking-wider">Día 4: Lunes 11</div>
                   <strong className="text-slate-200 block mb-1">Excursión a Toledo</strong>
                   <span className="text-slate-400 text-sm">Paseo de 1 día saliendo en el tren. Conocer la antigua ciudad amurallada.</span>
                 </div>
                 <div className="bg-slate-900 border-l-2 border-amber-500 rounded p-4">
                   <div className="text-amber-300 font-bold text-sm mb-1 uppercase tracking-wider">Día 5: Martes 12</div>
                   <strong className="text-slate-200 block mb-1">Estadio Santiago Bernabéu</strong>
                   <span className="text-slate-400 text-sm">Tour por la mañana en el estadio del Real Madrid y caminar por el exclusivo Barrio Salamanca.</span>
                 </div>
                 <div className="bg-slate-900 border-l-2 border-amber-500 rounded p-4">
                   <div className="text-amber-300 font-bold text-sm mb-1 uppercase tracking-wider">Día 6: Miércoles 13</div>
                   <strong className="text-slate-200 block mb-1">Tren a Segovia</strong>
                   <span className="text-slate-400 text-sm">Otra excursión cercana para ver el gigantesco Acueducto romano y el Alcázar (castillo).</span>
                 </div>
                 <div className="bg-slate-900 border-l-2 border-emerald-500 rounded p-4">
                   <div className="text-emerald-300 font-bold text-sm mb-1 uppercase tracking-wider">Día 7: Jueves 14</div>
                   <strong className="text-slate-200 block mb-1">Compras de Última Hora</strong>
                   <span className="text-slate-400 text-sm">Templo de Debod temprano, compras sueltas de souvenirs, y organizar las maletas.</span>
                 </div>
                 <div className="bg-slate-900 border-l-2 border-emerald-500 rounded p-4">
                   <div className="text-emerald-300 font-bold text-sm mb-1 uppercase tracking-wider">Día 8: Viernes 15</div>
                   <strong className="text-slate-200 block mb-1">Fin del Turismo y Vuelo</strong>
                   <span className="text-slate-400 text-sm">Dirigirse a la T4 del Aeropuerto de Barajas a las 11:30 AM para vuelo de retorno a Bogotá.</span>
                 </div>
               </div>
            </Card>
          </SectionWrapper>
        )}

        {activeTab === 'transicion' && (
          <SectionWrapper key="transicion" title="Paso 3: Transición (A futuro)">
            
            <Card title="💴 Estrategia Logística Económica" icon={<DollarSign className="w-6 h-6 text-cyan-400" />} type="info">
               <p className="mb-6 text-cyan-200">Reafirmando la norma de los 1,000€. Mejor ir seguros y sobrados.</p>
               <div className="bg-cyan-950/40 p-6 or rounded-2xl border border-cyan-500/20">
                  <h4 className="font-extrabold text-cyan-400 text-lg mb-3">Tu salvoconducto Europeo:</h4>
                  <p className="text-slate-300 leading-loose">
                    Se exige demostrar legalmente <strong className="text-cyan-300 text-xl mx-1 bg-cyan-900/50 px-2 py-1 rounded">113€ diarios</strong>. Como son 8 días justos de vuelo, el mínimo del Estado son 904€. Redondea a los 1,000€. Presentar tarjeta de crédito es perfectamente lícito (idealmente pedir extracto bancario reciente).
                  </p>
               </div>
            </Card>

            <div className="mt-8 overflow-hidden rounded-3xl glass-card p-8">
              <h3 className="font-extrabold text-slate-100 text-2xl mb-6 flex items-center gap-3">
                <GraduationCap className="w-8 h-8 text-purple-400" /> Estatus Estudiantil (Después que Aterrices)
              </h3>
              <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                Una vez hayas entrado en calidad de turismo (¡que esa era tu finalidad fronteriza!), entonces ya como persona libre en territorio español en una segunda fase buscaremos radicar documentos. Hay 90 días disponibles:
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                 <div className="p-6 bg-indigo-950/40 rounded-2xl border border-indigo-500/20 hover:-translate-y-1 transition-transform cursor-default">
                    <strong className="text-indigo-300 text-xl mb-2 block">1. Formación Profesional Superior</strong>
                    <p className="text-indigo-200/70 leading-relaxed mt-2">Buscar convalidaciones con tu universidad colombiana para matricularte como estudiante (Homologación).</p>
                 </div>
                 <div className="p-6 bg-purple-950/40 rounded-2xl border border-purple-500/20 hover:-translate-y-1 transition-transform cursor-default">
                    <strong className="text-purple-300 text-xl mb-2 block">2. Cursos Cortos Oficiales</strong>
                    <p className="text-purple-200/70 leading-relaxed mt-2">Cursos de formación rápida (Paisajismo/Marketing) que justifiquen una larga estadía, permitiendo trabajo medio tiempo.</p>
                 </div>
              </div>
            </div>
          </SectionWrapper>
        )}

        {activeTab === 'logistica' && (
          <SectionWrapper key="logistica" title="Paso 4: Logística en Madrid">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card title="🏠 Tu Alojamiento Seguro" icon={<MapPin className="w-6 h-6 text-emerald-400" />} type="success">
                <div className="flex items-center gap-3 mb-5 inline-flex bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 px-4 py-1.5 rounded-full">
                  <CheckCircle className="w-4 h-4" />
                  <span className="font-bold text-sm tracking-widest uppercase">Llegas a mi casa</span>
                </div>
                <p className="text-emerald-100/80 leading-relaxed text-lg">
                  <strong className="text-white">Cero estrés:</strong> Como te dije por WhatsApp, vas a llegar directamente a mi casa para estar cómoda y tranquila. Sin embargo, <strong className="text-emerald-300">para efectos de migración</strong>, te enviaré un papel oficial con una "Reserva de Hotel" de 8 días. A migración le muestras ese papel del hotel, pero tú y yo sabemos que vas directo a mi casa. Tu única misión ahora es venir a España tranquilamente.
                </p>
              </Card>
              
              <Card title="💳 Transporte y Trámites" icon={<CheckCircle className="w-6 h-6 text-cyan-400" />}>
                 <ul className="space-y-6">
                   <li className="flex gap-4 items-start">
                     <div className="bg-cyan-500/20 p-2 rounded-lg text-cyan-400 mt-1"><CheckCircle className="w-5 h-5"/></div>
                     <div>
                       <strong className="text-slate-100 block mb-1">Abono Joven (20€)</strong>
                       <span className="text-slate-400">Pase de transporte mensual ilimitado para moverte por todo Madrid sin restricción. Es económico y esencial.</span>
                     </div>
                   </li>
                   <li className="flex gap-4 items-start">
                     <div className="bg-purple-500/20 p-2 rounded-lg text-purple-400 mt-1"><FileText className="w-5 h-5"/></div>
                     <div>
                       <strong className="text-slate-100 block mb-1">Empadronamiento</strong>
                       <span className="text-slate-400">Trámite vital en el Ayuntamiento. Se agendará inmediatamente una vez quede sellado el alojamiento. Abre puertas a salud y banco.</span>
                     </div>
                   </li>
                 </ul>
              </Card>
            </div>
          </SectionWrapper>
        )}

        {activeTab === 'refugio' && (
          <SectionWrapper key="refugio" title="Refugio: Tu Espacio de Anclaje">
            <div className="space-y-6">
              
              <div className="bg-indigo-950/20 border border-indigo-500/20 backdrop-blur-md rounded-3xl p-8 hover:bg-indigo-900/30 transition-all duration-300">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
                  <h3 className="font-bold text-slate-100 flex items-center gap-3 text-xl tracking-wide">
                    <Heart className="w-6 h-6 text-indigo-400" />
                    El Anclaje (Cero Fricción)
                  </h3>
                </div>
                <p className="text-indigo-100/90 text-lg leading-relaxed">
                  Es normal sentir que estás entre la espada y la pared. La ansiedad que sientes no es que algo vaya a salir mal, es tu cuerpo procesando un cambio gigante. De la logística pesada, las apostillas y los cálculos nos encargamos nosotros. Tu única misión es respirar, empacar ligero y subirte al avión.
                </p>
              </div>

              <div className="bg-purple-950/20 border border-purple-500/20 backdrop-blur-md rounded-3xl p-8 hover:bg-purple-900/30 transition-all duration-300">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
                  <h3 className="font-bold text-slate-100 flex items-center gap-3 text-xl tracking-wide">
                    <Sparkles className="w-6 h-6 text-purple-400" />
                    Los Superpoderes y la Aventura
                  </h3>
                </div>
                <p className="text-purple-100/90 text-lg leading-relaxed">
                  Esa sensación de 'potencialidad infinita' que alguna vez te asustó o te hizo perderte, ahora tiene un marco seguro. No estás sola esta vez. España no es solo un destino, es el lienzo donde vas a aprender a manejar esos superpoderes a tu propio ritmo.
                </p>
              </div>

              <div className="bg-emerald-950/20 border border-emerald-500/20 backdrop-blur-md rounded-3xl p-8 hover:bg-emerald-900/30 transition-all duration-300">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
                  <h3 className="font-bold text-slate-100 flex items-center gap-3 text-xl tracking-wide">
                    <Headphones className="w-6 h-6 text-emerald-400" />
                    Protocolo de Aterrizaje Suave
                  </h3>
                </div>
                <p className="text-emerald-100/90 text-lg leading-relaxed mb-4">
                  Al llegar a Barajas (Madrid), el objetivo principal no es hablar ni tramitar nada. Es bajar las revoluciones y descompresionar. Sigue este protocolo:
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="bg-emerald-500/20 p-1.5 rounded-lg text-emerald-400 mt-0.5"><CheckCircle className="w-4 h-4"/></div>
                    <span className="text-emerald-50 text-base"><strong>Música y Aislamiento:</strong> Si hay ruido o sobreestimulación en el aeropuerto, usa tus auriculares.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-emerald-500/20 p-1.5 rounded-lg text-emerald-400 mt-0.5"><CheckCircle className="w-4 h-4"/></div>
                    <span className="text-emerald-50 text-base"><strong>Viaje en Silencio:</strong> El trayecto desde el aeropuerto hasta el piso puede ser en completo silencio si lo deseas. Nadie te exigirá estar comunicativa.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-emerald-500/20 p-1.5 rounded-lg text-emerald-400 mt-0.5"><CheckCircle className="w-4 h-4"/></div>
                    <span className="text-emerald-50 text-base"><strong>Descanso Prioritario:</strong> Al llegar al piso, el tiempo será exclusivo para dormir y estabilizar tu ciclo. Cero trámites el primer día.</span>
                  </li>
                </ul>
              </div>

            </div>
          </SectionWrapper>
        )}
        </AnimatePresence>
      </main>
    </div>
  );
};

export default App;