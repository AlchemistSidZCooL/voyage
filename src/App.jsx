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
  const [activeTab, setActiveTab] = useState('transicion');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const steps = [
    { id: 'transicion', title: '1. Tarea Actual: Legal y Finanzas', icon: <ShieldCheck className="w-6 h-6" /> },
    { id: 'logistica', title: '2. Logística en Madrid', icon: <MapPin className="w-6 h-6" /> },
    { id: 'refugio', title: '3. Espacio Seguro', icon: <Heart className="w-6 h-6" /> },
    { id: 'preparacion', title: '✓ Previos en Colombia', icon: <CheckCircle className="w-6 h-6" />, archived: true },
    { id: 'frontera', title: '✓ Vuelos y Maletas', icon: <CheckCircle className="w-6 h-6" />, archived: true },
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
        
        <div className="mt-6 px-6 flex-1 space-y-2 overflow-y-auto">
          {/* Tareas Actuales */}
          <div className="mb-2">
            <p className="text-cyan-500 text-xs font-black uppercase tracking-widest pl-2 mb-3">En Progreso</p>
            <div className="space-y-2">
              {steps.filter(s => !s.archived).map((step) => (
                <button
                  key={step.id}
                  onClick={() => { setActiveTab(step.id); setIsMenuOpen(false); }}
                  className={`w-full flex items-center gap-4 px-6 py-5 rounded-2xl text-base font-semibold transition-all duration-300 ${
                    activeTab === step.id 
                      ? 'bg-cyan-500/10 border border-cyan-500/30 shadow-[0_0_20px_rgba(34,211,238,0.15)] text-cyan-300 translate-x-2' 
                      : 'text-slate-400 hover:bg-white/5 hover:text-slate-200 border border-transparent'
                  }`}
                >
                  <div className={`${activeTab === step.id ? 'text-cyan-400' : 'text-slate-500'}`}>
                    {step.icon}
                  </div>
                  {step.title}
                </button>
              ))}
            </div>
          </div>

          {/* Archivo de completados */}
          <div className="mt-8">
            <p className="text-emerald-500/60 text-xs font-bold uppercase tracking-widest pl-2 mb-3">Pasos Ya Realizados</p>
            <div className="space-y-2">
              {steps.filter(s => s.archived).map((step) => (
                <button
                  key={step.id}
                  onClick={() => { setActiveTab(step.id); setIsMenuOpen(false); }}
                  className={`w-full flex items-center gap-4 px-6 py-4 rounded-2xl text-sm font-medium transition-all duration-300 ${
                    activeTab === step.id 
                      ? 'bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 translate-x-2' 
                      : 'text-slate-600 hover:bg-white/5 hover:text-slate-400 border border-transparent'
                  }`}
                >
                  <div className={`${activeTab === step.id ? 'text-emerald-400' : 'text-emerald-500/50'}`}>
                    {step.icon}
                  </div>
                  <span className="line-through opacity-70">{step.title.replace('✓ ', '')}</span>
                </button>
              ))}
            </div>
          </div>
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
          <SectionWrapper key="preparacion" title="Paso 3: Preparativos del Viaje">
            
            <Card title="🚕 Transporte Interno (Aguadas ➔ Pereira)" icon={<MapPin className="w-6 h-6 text-amber-400" />} type="warning">
              <div className="mb-4 text-slate-300 text-lg">
                Tu vuelo a Bogotá sale desde Pereira a las <strong className="text-cyan-400">06:35 AM 🇨🇴 (13:35 🇪🇸)</strong>. Eso significa que debes estar parada en el counter del Aeropuerto Matecaña a las <strong className="text-amber-400 bg-amber-900/30 px-2 rounded">04:30 AM 🇨🇴 (11:30 🇪🇸)</strong> en punto.
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-slate-950/50 p-5 rounded-xl border border-red-500/20 opacity-80">
                  <h4 className="font-bold text-red-400 mb-2 flex items-center gap-2"><X className="w-5 h-5"/> Opción: Riesgo y Cansancio</h4>
                  <p className="text-slate-400 text-sm">Bajar de noche directo (peajes, carretera) o dormir en las sillas del aeropuerto. <strong>Mala idea</strong>: Te destruirás la espalda justo antes de volar 10 horas rumbo a Europa.</p>
                </div>
                <div className="bg-emerald-950/30 p-5 rounded-xl border border-emerald-500/40 transform hover:-translate-y-1 transition-all shadow-lg shadow-emerald-900/20">
                  <h4 className="font-bold text-emerald-400 mb-2 flex items-center gap-2"><CheckCircle className="w-5 h-5"/> Opción Recomendada (Hotel)</h4>
                  <p className="text-slate-300 text-sm">Viajar Aguadas ➔ Manizales ➔ Pereira <strong className="text-white">¡este mismo miércoles 6 de mayo en la tarde!</strong> Bajas tranquila, te quedas en un alojamiento económico (Ej. hostal en Nacederos o la Villa) pegado al aeropuerto. Duermes bien, y a las <strong className="text-emerald-300 font-bold">04:15 AM 🇨🇴 (11:15 🇪🇸)</strong> tomas el taxi que toma 5 minutos.</p>
                </div>
              </div>
            </Card>

            <Card title="🛡️ Seguro y Alojamiento Schengen" icon={<ShieldCheck className="w-6 h-6 text-emerald-400" />} type="success" badge="COMPLETADO">
              <div className="mb-5 bg-emerald-950/30 p-4 rounded-2xl border border-emerald-500/30 flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-emerald-400 flex-shrink-0" />
                <p className="text-emerald-200 text-base leading-relaxed">¡Requisitos migratorios blindados! Tanto la póliza de seguro de viaje como la reserva oficial de alojamiento han sido contratadas, corregidas y verificadas de forma exitosa.</p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-slate-900/80 p-5 rounded-2xl border border-emerald-500/20 hover:border-emerald-500/40 transition-all">
                  <h4 className="font-bold text-slate-100 mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-emerald-400" />
                    Póliza Médica Schengen
                  </h4>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    <strong>Compañía:</strong> IATI Seguros<br/>
                    <strong>Producto:</strong> IATI Básico (Cobertura de urgencias médicas completa)<br/>
                    <strong>Estado:</strong> ✅ EMITIDA (Datos de fecha corregidos manualmente para migración).
                  </p>
                </div>

                <div className="bg-slate-900/80 p-5 rounded-2xl border border-emerald-500/20 hover:border-emerald-500/40 transition-all">
                  <h4 className="font-bold text-slate-100 mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-emerald-400" />
                    Reserva de Alojamiento
                  </h4>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    <strong>Plataforma:</strong> Booking.com<br/>
                    <strong>Tipo:</strong> Habitación Familiar (Cancelable)<br/>
                    <strong>Estado:</strong> ✅ RESERVADA (Confirmación oficial en PDF lista para imprimir).
                  </p>
                </div>
              </div>

              <div className="bg-cyan-950/30 p-4 rounded-xl border border-cyan-500/30 flex items-center gap-3">
                <Info className="w-6 h-6 text-cyan-400 flex-shrink-0" />
                <p className="text-cyan-200 text-sm"><strong>Paso final:</strong> Dani te enviará los PDFs oficiales de ambos documentos antes de que vueles. Solo debes llevarlos guardados en tu móvil (y una copia impresa en tu mochila de mano para total tranquilidad).</p>
              </div>
            </Card>

            <Card title="📋 Carpeta Física: Documentos que DEBES llevar Impresos" icon={<FileText className="w-6 h-6 text-cyan-400" />} type="info" badge="OBLIGATORIO">
              <div className="mb-5 bg-cyan-950/40 p-5 rounded-2xl border border-cyan-500/30">
                <p className="text-cyan-200 text-base leading-relaxed">
                  <strong className="text-white">Regla de oro de migración:</strong> Aunque lleves todo en el celular, <strong className="text-white">DEBES llevar estos papeles impresos físicamente en tu mochila de mano</strong>. Si te quedas sin batería, sin señal o el oficial te los pide, los sacas de tu carpeta en 3 segundos. ¡Eso demuestra orden y seguridad absoluta!
                </p>
              </div>

              <div className="space-y-4">
                <div className="bg-slate-900/80 p-4 rounded-xl border border-white/5 flex gap-3 items-start">
                  <div className="text-2xl mt-0.5">✈️</div>
                  <div>
                    <h5 className="font-bold text-slate-100 text-base">Pasabordos / Tiquetes de Avión</h5>
                    <p className="text-slate-400 text-sm mt-1">Imprime tanto el tiquete de Pereira ➔ Bogotá (Avianca) como el de Bogotá ➔ Madrid (Air Europa). Y muy importante: ¡lleva también impreso el de regreso (Madrid ➔ Bogotá)!</p>
                  </div>
                </div>

                <div className="bg-slate-900/80 p-4 rounded-xl border border-white/5 flex gap-3 items-start">
                  <div className="text-2xl mt-0.5">🛡️</div>
                  <div>
                    <h5 className="font-bold text-slate-100 text-base">Póliza del Seguro de Viaje Schengen</h5>
                    <p className="text-slate-400 text-sm mt-1">La hoja de IATI Seguros donde sale tu nombre completo, fechas de cobertura y la certificación de que cubre el mínimo de 30.000€ exigido.</p>
                  </div>
                </div>

                <div className="bg-slate-900/80 p-4 rounded-xl border border-white/5 flex gap-3 items-start">
                  <div className="text-2xl mt-0.5">🏨</div>
                  <div>
                    <h5 className="font-bold text-slate-100 text-base">Confirmación de Reserva de Hotel</h5>
                    <p className="text-slate-400 text-sm mt-1">La hoja de confirmación del alojamiento en Madrid (del 8 al 15 de mayo). Es el documento principal que te pedirá el oficial para justificar dónde vas a dormir.</p>
                  </div>
                </div>


              </div>

              <div className="mt-5 bg-amber-950/30 p-4 rounded-xl border border-amber-500/30 flex items-center gap-3">
                <AlertTriangle className="w-5 h-5 text-amber-500 flex-shrink-0" />
                <p className="text-amber-200 text-sm"><strong>Consejo de seguridad:</strong> Guarda todos estos folios en una carpetica de plástico transparente y métela en tu bolso o mochila de mano (que vaya siempre contigo). ¡No la vayas a guardar en la maleta que metes arriba o facturas!</p>
              </div>
            </Card>

            <Card title="⏳ Checklist Definitivo (Semana de Vuelo)" icon={<Clock className="w-6 h-6 text-cyan-400" />} type="info">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-cyan-950/40 p-5 rounded-xl border border-cyan-500/20">
                  <h4 className="font-bold text-cyan-300 mb-3 text-lg border-b border-cyan-500/20 pb-2">Logística Europea (Resuelta):</h4>
                  <ul className="text-slate-300 text-base space-y-3">
                    <li className="flex items-center gap-2">
                      <div className="bg-emerald-500/20 p-1 rounded-full"><CheckCircle className="w-4 h-4 text-emerald-400" /></div>
                      <span className="line-through opacity-50 text-emerald-200">Contratar Seguro Schengen.</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="bg-emerald-500/20 p-1 rounded-full"><CheckCircle className="w-4 h-4 text-emerald-400" /></div>
                      <span className="line-through opacity-50 text-emerald-200">Reserva de hotel en Madrid.</span>
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

            <Card title="🧳 Estrategia de Equipaje: Maleta de Cabina (10 KG)" icon={<Briefcase className="w-6 h-6 text-emerald-400" />} type="success">
               <div className="mb-8 text-slate-300 leading-relaxed text-lg bg-slate-900/50 p-6 rounded-2xl border border-white/5 flex flex-col lg:flex-row gap-6 items-center">
                  <div className="flex-1">
                    <strong className="text-cyan-400 text-xl block mb-2">🚀 ¡Viaja Ligera, Viaja Libre!</strong>
                    <p className="text-slate-300 leading-relaxed">
                      Tu excursión real documentada en España dura exactamente <strong className="text-white">1 semana (del 8 al 15)</strong>. El clima de primavera en Madrid es cálido y sumamente agradable. 
                      Al llevar <strong className="text-emerald-400">únicamente equipaje de cabina (10 KG)</strong>, desbloqueas el <strong className="text-emerald-300">Sello SKYCLEARED</strong> para evitar facturación y largas filas. ¡Todo son ventajas!
                    </p>
                  </div>
                  <div className="flex gap-6 items-end justify-center bg-slate-950/60 p-6 rounded-3xl border border-cyan-500/20 shadow-[0_0_25px_rgba(34,211,238,0.05)] w-full lg:w-auto">
                    {/* Visual de Mochila */}
                    <div className="flex flex-col items-center gap-3">
                      <div className="relative w-20 h-24 bg-gradient-to-b from-purple-500/90 to-indigo-600/90 rounded-2xl shadow-lg shadow-purple-500/10 flex flex-col items-center justify-between p-3 border border-purple-300/20 group hover:border-purple-400/40 transition-all duration-300">
                        {/* Backpack Loop */}
                        <div className="absolute -top-2 w-7 h-3 border-t-4 border-x-4 border-slate-400 rounded-t-md"></div>
                        {/* Backpack pocket */}
                        <div className="w-full h-8 bg-purple-950/50 rounded-lg border border-purple-400/20 flex items-center justify-center text-[10px] font-bold text-purple-300/80">DOCS</div>
                        <span className="text-[10px] font-bold text-white tracking-widest uppercase">MOCHILA</span>
                        <div className="w-full h-1 bg-purple-400/30 rounded"></div>
                      </div>
                      <span className="text-xs font-semibold text-purple-400">Bajo el Asiento</span>
                    </div>

                    {/* Visual de Maleta */}
                    <div className="flex flex-col items-center gap-3">
                      <div className="relative w-28 h-36 bg-gradient-to-b from-cyan-500/90 to-blue-600/90 rounded-3xl shadow-xl shadow-cyan-500/20 flex flex-col items-center justify-between p-4 border border-cyan-300/30 group hover:border-cyan-400/40 transition-all duration-300 transform hover:scale-105">
                        {/* Suitcase Handle */}
                        <div className="absolute -top-5 w-12 h-5 border-t-4 border-x-4 border-slate-400 rounded-t-lg flex justify-center">
                          <div className="w-8 h-1 bg-slate-400 rounded-full mt-1"></div>
                        </div>
                        {/* Suitcase Wheels */}
                        <div className="absolute -bottom-2.5 flex justify-between w-20 px-2">
                          <div className="w-4 h-4 bg-slate-900 rounded-full border-2 border-slate-600"></div>
                          <div className="w-4 h-4 bg-slate-900 rounded-full border-2 border-slate-600"></div>
                        </div>
                        {/* Suitcase horizontal stripes */}
                        <div className="w-full h-1.5 bg-cyan-300/40 rounded-full"></div>
                        
                        {/* Weight Display Badge */}
                        <div className="bg-slate-950/80 px-3 py-1.5 rounded-2xl border border-cyan-400/30 text-center flex flex-col items-center justify-center min-w-[70px] shadow-inner shadow-cyan-500/10">
                          <span className="text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 leading-none">10</span>
                          <span className="text-[9px] font-black text-cyan-300 tracking-widest mt-0.5 leading-none">KILOS</span>
                        </div>
                        
                        <div className="w-full h-1.5 bg-cyan-300/40 rounded-full"></div>
                      </div>
                      <span className="text-xs font-bold text-cyan-400 flex items-center gap-1">Cabina <CheckCircle className="w-3.5 h-3.5 text-emerald-400"/></span>
                    </div>
                  </div>
               </div>
               
               <div className="grid md:grid-cols-2 gap-6 mt-6">
                 <div className="bg-slate-900 border border-slate-700/30 p-6 rounded-3xl hover:border-purple-500/20 transition-all shadow-md hover:bg-slate-900/80">
                   <h4 className="font-bold text-slate-100 flex items-center gap-3 mb-4 text-lg">
                     <div className="bg-purple-500/10 p-2 rounded-xl border border-purple-500/20"><Backpack className="w-5 h-5 text-purple-400"/></div>
                     Tu Mochila Personal (Bolso de Mano)
                   </h4>
                   <p className="text-sm text-purple-300 mb-4 bg-purple-950/20 border border-purple-500/10 px-3 py-1.5 rounded-xl font-medium flex items-center gap-2">
                     <Info className="w-4 h-4"/> Va debajo de tu asiento delantero. Siempre contigo.
                   </p>
                   <ul className="text-base text-slate-300 space-y-3">
                     <li className="flex items-center gap-3">
                       <div className="w-1.5 h-1.5 rounded-full bg-purple-400 flex-shrink-0"></div>
                       <span><strong>Pasaporte original</strong> (+ Copia impresa a color).</span>
                     </li>
                     <li className="flex items-center gap-3">
                       <div className="w-1.5 h-1.5 rounded-full bg-purple-400 flex-shrink-0"></div>
                       <span><strong>Carpeta de Migración</strong> con los folios impresos.</span>
                     </li>
                     <li className="flex items-center gap-3">
                       <div className="w-1.5 h-1.5 rounded-full bg-purple-400 flex-shrink-0"></div>
                       <span><strong>Dinero en Efectivo</strong> (Fácil acceso si te lo piden).</span>
                     </li>
                     <li className="flex items-center gap-3">
                       <div className="w-1.5 h-1.5 rounded-full bg-purple-400 flex-shrink-0"></div>
                       <span>Cargador de móvil, auriculares y cepillo de dientes.</span>
                     </li>
                   </ul>
                 </div>
                 
                 <div className="bg-slate-900 border border-slate-700/30 p-6 rounded-3xl hover:border-cyan-500/20 transition-all shadow-md hover:bg-slate-900/80">
                   <h4 className="font-bold text-slate-100 flex items-center gap-3 mb-4 text-lg">
                     <div className="bg-cyan-500/10 p-2 rounded-xl border border-cyan-500/20"><Briefcase className="w-5 h-5 text-cyan-400"/></div>
                     Maleta de Cabina de 10 KG
                   </h4>
                   <p className="text-sm text-cyan-300 mb-4 bg-cyan-950/20 border border-cyan-500/10 px-3 py-1.5 rounded-xl font-medium flex items-center gap-2">
                     <Info className="w-4 h-4"/> Va en los compartimentos superiores. No se factura en bodega.
                   </p>
                   <ul className="text-base text-slate-300 space-y-3">
                     <li className="flex items-start gap-3">
                       <span className="text-lg leading-none mt-0.5">👕</span>
                       <span><strong>Método Rollito:</strong> Enrollar cada prenda maximiza espacio y reduce arrugas.</span>
                     </li>
                     <li className="flex items-start gap-3">
                       <span className="text-lg leading-none mt-0.5">👖</span>
                       <span><strong>Básicos minimalistas:</strong> 2-3 pantalones cómodos, blusas/camisetas ligeras.</span>
                     </li>
                     <li className="flex items-start gap-3">
                       <span className="text-lg leading-none mt-0.5">🧥</span>
                       <span><strong>Abrigo/Chaqueta:</strong> Lleva el más pesado puesto contigo en el avión.</span>
                     </li>
                     <li className="flex items-start gap-3">
                       <span className="text-lg leading-none mt-0.5">🧴</span>
                       <span><strong>Líquidos (&lt;100ml):</strong> En bolsa transparente con cierre (Ziploc).</span>
                     </li>
                   </ul>
                 </div>
               </div>
            </Card>
          </SectionWrapper>
        )}

        {activeTab === 'frontera' && (
          <SectionWrapper key="frontera" title="Paso 4: Itinerario y Frontera">
            
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
                       <div className="flex flex-col gap-1">
                         <p className="text-3xl font-bold text-slate-100">06:35 <span className="text-base font-normal text-slate-400 bg-slate-800 px-2 py-0.5 rounded ml-2">COL 🇨🇴</span></p>
                         <p className="text-sm text-slate-400">13:35 <span className="text-xs text-amber-500 bg-amber-950/40 px-1.5 py-0.5 rounded">MAD 🇪🇸</span></p>
                       </div>
                     </div>
                     <div className="flex-1">
                       <p className="text-sm text-slate-500 font-bold uppercase mb-1 flex items-center gap-2"><Plane className="w-4 h-4 text-cyan-500 md:rotate-90"/> Aterrizaje BOG</p>
                       <div className="flex flex-col gap-1">
                         <p className="text-3xl font-bold text-slate-100">07:30 <span className="text-base font-normal text-slate-400 bg-slate-800 px-2 py-0.5 rounded ml-2">COL 🇨🇴</span></p>
                         <p className="text-sm text-slate-400">14:30 <span className="text-xs text-amber-500 bg-amber-950/40 px-1.5 py-0.5 rounded">MAD 🇪🇸</span></p>
                       </div>
                     </div>
                  </div>
                  <div className="mt-4 grid sm:grid-cols-3 gap-3">
                    <div className="bg-cyan-950/30 p-3 rounded-xl border border-cyan-500/20 flex items-center gap-2">
                      <span className="text-cyan-400 font-bold text-sm">🪑 Silla</span>
                      <span className="text-slate-100 font-extrabold text-lg">17K</span>
                      <span className="text-slate-400 text-xs">Grupo E</span>
                    </div>
                    <div className="bg-amber-950/20 p-3 rounded-xl border border-amber-500/20 flex flex-col gap-1 justify-center">
                      <div className="flex items-center gap-2">
                        <AlertTriangle className="w-4 h-4 text-amber-500 flex-shrink-0" />
                        <span className="text-amber-200 text-sm">Presentarse en sala:</span>
                      </div>
                      <div className="text-slate-300 text-sm pl-6">
                        <strong>05:35</strong> <span className="text-xs text-slate-400 bg-slate-800 px-1 py-0.5 rounded">COL 🇨🇴</span>
                        <span className="mx-1">·</span>
                        <strong>12:35</strong> <span className="text-xs text-amber-500 bg-amber-950/30 px-1 py-0.5 rounded">MAD 🇪🇸</span>
                      </div>
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

                    <div className="mb-6 bg-emerald-950/40 border-2 border-emerald-500/50 p-5 rounded-2xl space-y-3">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                        <div className="flex items-center gap-2">
                          <CheckCircle className="w-6 h-6 text-emerald-400 flex-shrink-0" />
                          <span className="text-emerald-200 font-extrabold text-lg uppercase tracking-wide">
                            🚀 ¡Check-In Confirmado!
                          </span>
                        </div>
                        <span className="bg-emerald-500 text-slate-950 font-black text-xs px-3 py-1 rounded-full uppercase tracking-widest border border-emerald-300/30 self-start sm:self-auto">
                          Sello SKYCLEARED
                        </span>
                      </div>
                      <p className="text-slate-300 text-sm leading-relaxed text-justify">
                        <strong className="text-emerald-300">¿Qué significa esto para ti?</strong> Al viajar con equipaje de mano y mochila de cabina sin facturar en bodega, <strong className="text-white font-bold">no necesitas hacer las largas filas de los mostradores de Air Europa</strong> para registrar maletas. Al llegar al Aeropuerto El Dorado en Bogotá, puedes pasar <strong className="text-emerald-300 font-bold">directamente al filtro de seguridad/migración</strong> y luego a tu puerta de embarque con tu pasabordo digital en el móvil. ¡Cero filas de facturación, cero demoras y cero estrés! ✈️✨
                      </p>
                    </div>
                    
                    <div className="bg-slate-900/50 border border-slate-700/50 p-6 rounded-2xl space-y-6">
                       <div className="flex flex-col md:flex-row gap-8 border-b border-slate-700/50 pb-6">
                         <div className="flex-1">
                           <p className="text-sm text-slate-500 font-bold uppercase mb-1 flex items-center gap-2"><Plane className="w-4 h-4 text-purple-500 rotate-45"/> Despegue BOG</p>
                           <p className="text-3xl font-bold text-slate-100">20:15 <span className="text-base font-normal text-slate-400 bg-slate-800 px-2 py-0.5 rounded ml-2">COL 🇨🇴</span></p>
                            <p className="text-sm text-slate-400">03:15 <span className="text-xs text-amber-500 bg-amber-950/40 px-1.5 py-0.5 rounded">MAD (Vie 8) 🇪🇸</span></p>
                           <p className="text-sm text-slate-500 mt-2">Jueves, 7 de mayo · El Dorado T1</p>
                         </div>
                         <div className="flex-1">
                           <p className="text-sm text-slate-500 font-bold uppercase mb-1 flex items-center gap-2"><Plane className="w-4 h-4 text-amber-500 md:rotate-90"/> Aterrizaje Barajas (MAD)</p>
                           <p className="text-3xl font-bold text-slate-100">13:00 <span className="text-base font-normal text-amber-500 bg-amber-950/50 border border-amber-500/20 px-2 py-0.5 rounded ml-2">MAD 🇪🇸</span></p>
                            <p className="text-sm text-slate-400">06:00 <span className="text-xs text-slate-400 bg-slate-800 px-1.5 py-0.5 rounded">COL 🇨🇴</span></p>
                           <p className="text-sm text-slate-500 mt-2">Viernes, 8 de mayo · Adolfo Suárez T1</p>
                         </div>
                       </div>
                       <div className="grid sm:grid-cols-3 gap-3">
                         <div className="bg-cyan-950/30 p-3 rounded-xl border border-cyan-500/20 flex items-center gap-2">
                           <span className="text-cyan-400 font-bold text-sm">🪑 Silla</span>
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
                   <span className="text-slate-400 text-sm">Dirigirse a la T4 del Aeropuerto de Barajas a las 11:30 AM 🇪🇸 (04:30 AM 🇨🇴) para vuelo de retorno a Bogotá.</span>
                 </div>
               </div>
            </Card>
          </SectionWrapper>
        )}

        {activeTab === 'transicion' && (
          <SectionWrapper key="transicion" title="Paso 1: Trámite Estancia por Estudios">
            <Card title="🎯 Proceso de Cambio: Turista a Estudiante" icon={<GraduationCap className="w-6 h-6 text-purple-400" />} type="info">
              <p className="text-slate-300 text-lg mb-6 leading-relaxed">
                El objetivo inmediato es tramitar tu <strong>Autorización de Estancia por Estudios</strong> estando ya en España. Para que el expediente sea exitoso, debemos cumplir con los requisitos que exige Extranjería antes de que caduquen tus 90 días de turismo (idealmente presentar la solicitud antes del día 60).
              </p>
              
              <h4 className="font-bold text-cyan-300 text-xl mb-4 border-b border-cyan-500/20 pb-2 flex items-center gap-2"><FileText className="w-5 h-5"/> Requisitos Clave (Fase Actual):</h4>
              <ul className="space-y-4 mb-8">
                <li className="flex gap-4 items-start">
                  <div className="bg-cyan-500/20 p-2 rounded-lg text-cyan-400 mt-0.5"><CheckCircle className="w-5 h-5"/></div>
                  <div>
                    <strong className="text-slate-100 block mb-1">1. Matrícula en Centro Autorizado</strong>
                    <span className="text-slate-400">Inscripción real en un curso a tiempo completo (mínimo 20 hrs/semana) que conduzca a la obtención de un título o certificado en un centro autorizado de Madrid.</span>
                  </div>
                </li>
                <li className="flex gap-4 items-start">
                  <div className="bg-emerald-500/20 p-2 rounded-lg text-emerald-400 mt-0.5"><CheckCircle className="w-5 h-5"/></div>
                  <div>
                    <strong className="text-slate-100 block mb-1">2. Demostración Económica (Dos Opciones a Evaluar)</strong>
                    <span className="text-slate-400">Se exige demostrar el 100% del IPREM (~600€/mes). <strong>Opción A:</strong> El servicio de préstamo de MigraEmpleo (se debe solicitar explicación exacta de cómo lo estructuran legalmente ante Extranjería). <strong>Opción B:</strong> Respaldo económico de Dani mediante acta notarial.</span>
                  </div>
                </li>
                <li className="flex gap-4 items-start">
                  <div className="bg-purple-500/20 p-2 rounded-lg text-purple-400 mt-0.5"><CheckCircle className="w-5 h-5"/></div>
                  <div>
                    <strong className="text-slate-100 block mb-1">3. Seguro Médico Privado (Sanitas International Students)</strong>
                    <span className="text-slate-400">Extranjería exige pólizas sin copagos, sin carencias y con repatriación incluida. <strong>Sanitas</strong> tiene un producto específico ("International Students") que está diseñado estrictamente para cumplir al 100% con estas normativas de extranjería, por lo que es perfecto para este trámite.</span>
                  </div>
                </li>
                <li className="flex gap-4 items-start">
                  <div className="bg-amber-500/20 p-2 rounded-lg text-amber-400 mt-0.5"><CheckCircle className="w-5 h-5"/></div>
                  <div>
                    <strong className="text-slate-100 block mb-1">4. Antecedentes Penales y Certificado Médico</strong>
                    <span className="text-slate-400">Solo si el curso dura más de 6 meses. Los antecedentes colombianos apostillados (ya los estás procesando) y un certificado médico oficial expedido en España.</span>
                  </div>
                </li>
              </ul>
            </Card>

            <div className="mt-8 p-8 bg-emerald-950/40 rounded-3xl border border-emerald-500/40 shadow-[0_0_25px_rgba(16,185,129,0.15)] transform hover:-translate-y-1 transition-all duration-300">
              <h4 className="font-extrabold text-emerald-400 text-2xl mb-4 flex items-center gap-3">
                <Users className="w-8 h-8" /> Contacto Inmediato: MigraEmpleo
              </h4>
              <p className="text-emerald-100/90 text-lg leading-relaxed mb-3">
                Para garantizar que no haya errores, tu <strong>acción inmediata</strong> es contactar a estos expertos (vinculados a la Univ. Rey Juan Carlos) y consultarles exactamente estos 4 puntos:
              </p>
              
              <ul className="list-disc pl-6 space-y-2 text-emerald-200/90 text-lg mb-8 font-medium">
                <li>El proceso detallado de <strong>Estancia por Estudios</strong> estando ya como turista.</li>
                <li>Los <strong>tiempos y plazos exactos</strong> que tienes disponibles para tramitarlo.</li>
                <li>Validar que los centros de estudio ofrecidos estén <strong className="text-rose-300">oficialmente homologados</strong> (Comunidad de Madrid / SEPE).</li>
                <li>Preguntar <strong>cómo estructuran legalmente el préstamo de manutención</strong> y qué documentación exacta entregan para evitar rechazos en Extranjería.</li>
              </ul>
              
              <div className="bg-emerald-900/40 p-5 rounded-2xl border border-emerald-500/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <strong className="block text-emerald-300 text-lg mb-1">Portal Oficial y Contacto:</strong>
                  <a href="https://migraempleo.com/" target="_blank" rel="noopener noreferrer" className="text-2xl font-black text-white hover:text-cyan-300 transition-colors flex items-center gap-2">
                    migraempleo.com <ArrowRight className="w-6 h-6 text-emerald-400" />
                  </a>
                </div>
                <div className="bg-emerald-950 px-5 py-3 rounded-xl border border-emerald-500/40 text-emerald-400 font-bold tracking-widest text-sm uppercase shadow-[0_0_15px_rgba(16,185,129,0.2)]">
                  Acción Requerida
                </div>
              </div>
            </div>

            <Card title="💰 Registro de Control Financiero y Préstamos" icon={<DollarSign className="w-6 h-6 text-emerald-400" />} type="success">
              <p className="text-slate-300 text-lg mb-6 leading-relaxed">
                Control y seguimiento formal de los importes abonados y planificados por parte de <strong>Dani</strong> para financiar la matrícula, estudios y manutención de <strong>Sorany</strong> en esta Fase 2.
              </p>

              {/* Tarjetas de Resumen */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                <div className="bg-slate-950/60 p-4 rounded-2xl border border-white/5 flex flex-col justify-between shadow-inner">
                  <span className="text-slate-400 text-sm font-bold uppercase tracking-wider">Total Presupuestado</span>
                  <span className="text-3xl font-black text-slate-100 mt-2">2.888 €</span>
                </div>
                <div className="bg-emerald-950/30 p-4 rounded-2xl border border-emerald-500/20 flex flex-col justify-between shadow-inner">
                  <span className="text-emerald-400 text-sm font-bold uppercase tracking-wider flex items-center gap-1.5">
                    <CheckCircle className="w-4 h-4 text-emerald-400" /> Ya Desembolsado
                  </span>
                  <span className="text-3xl font-black text-emerald-300 mt-2">368 €</span>
                </div>
                <div className="bg-amber-950/20 p-4 rounded-2xl border border-amber-500/20 flex flex-col justify-between shadow-inner">
                  <span className="text-amber-400 text-sm font-bold uppercase tracking-wider flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-amber-400" /> Pendiente
                  </span>
                  <span className="text-3xl font-black text-amber-300 mt-2">2.520 €</span>
                </div>
              </div>

              {/* Lista de Conceptos Principales */}
              <div className="space-y-4 mb-6">
                <div className="bg-slate-900/60 p-4 rounded-xl border border-white/5 flex justify-between items-center">
                  <div>
                    <h5 className="font-bold text-slate-100 text-base">Inscripción / Matrícula Estudios</h5>
                    <p className="text-slate-400 text-sm mt-0.5">Curso "Especialista Administrativo" en CIESA (Migraempleo)</p>
                  </div>
                  <div className="text-right">
                    <span className="text-emerald-400 bg-emerald-950/40 border border-emerald-500/30 px-3 py-1 rounded-full text-xs font-black uppercase tracking-widest flex items-center gap-1.5 shadow-[0_0_10px_rgba(16,185,129,0.1)]">
                      340 € <CheckCircle className="w-3.5 h-3.5" />
                    </span>
                    <p className="text-[10px] text-slate-500 mt-1">22-05-2026 (Efectivo)</p>
                  </div>
                </div>

                <div className="bg-slate-900/60 p-4 rounded-xl border border-white/5 flex justify-between items-center">
                  <div>
                    <h5 className="font-bold text-slate-100 text-base">Certificado Médico Oficial</h5>
                    <p className="text-slate-400 text-sm mt-0.5">Obtenido en España para el expediente de extranjería</p>
                  </div>
                  <div className="text-right">
                    <span className="text-emerald-400 bg-emerald-950/40 border border-emerald-500/30 px-3 py-1 rounded-full text-xs font-black uppercase tracking-widest flex items-center gap-1.5 shadow-[0_0_10px_rgba(16,185,129,0.1)]">
                      28 € <CheckCircle className="w-3.5 h-3.5" />
                    </span>
                    <p className="text-[10px] text-slate-500 mt-1">22-05-2026</p>
                  </div>
                </div>

                <div className="bg-slate-900/40 p-4 rounded-xl border border-white/5 flex justify-between items-center">
                  <div>
                    <h5 className="font-bold text-slate-200 text-base">Alquiler de Habitación (3 Meses)</h5>
                    <p className="text-slate-400 text-sm mt-0.5">3 mensualidades de 420 € cada una (Habitación 3)</p>
                  </div>
                  <div className="text-right">
                    <span className="text-amber-400 bg-amber-950/20 border border-amber-500/20 px-3 py-1 rounded-full text-xs font-black uppercase tracking-widest flex items-center gap-1.5 shadow-[0_0_10px_rgba(245,158,11,0.05)]">
                      1.260 € <Clock className="w-3.5 h-3.5" />
                    </span>
                    <p className="text-[10px] text-slate-500 mt-1">Planificado (Jun-Ago)</p>
                  </div>
                </div>

                <div className="bg-slate-900/40 p-4 rounded-xl border border-white/5 flex justify-between items-center">
                  <div>
                    <h5 className="font-bold text-slate-200 text-base">Cuotas Mensuales Estudios CIESA</h5>
                    <p className="text-slate-400 text-sm mt-0.5">4 cuotas de 315 € cada una (Bloque 6)</p>
                  </div>
                  <div className="text-right">
                    <span className="text-amber-400 bg-amber-950/20 border border-amber-500/20 px-3 py-1 rounded-full text-xs font-black uppercase tracking-widest flex items-center gap-1.5 shadow-[0_0_10px_rgba(245,158,11,0.05)]">
                      1.260 € <Clock className="w-3.5 h-3.5" />
                    </span>
                    <p className="text-[10px] text-slate-500 mt-1">Planificado (Jun-Sep)</p>
                  </div>
                </div>
              </div>

              {/* Calendario de Vencimientos Planificados */}
              <div className="bg-slate-950/40 p-5 rounded-2xl border border-white/5">
                <h4 className="font-bold text-slate-200 text-base mb-4 flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-cyan-400" /> Cronograma y Proyección de Pagos
                </h4>
                <div className="space-y-3">
                  <div className="bg-slate-900/30 p-3 rounded-lg border-l-2 border-cyan-500/50 flex justify-between text-sm">
                    <span className="text-slate-300 font-semibold">📅 29 de Junio de 2026</span>
                    <span className="text-slate-200 font-black">735 € <span className="text-xs text-slate-500 font-medium">(420€ Alquiler + 315€ Estudios)</span></span>
                  </div>
                  <div className="bg-slate-900/30 p-3 rounded-lg border-l-2 border-cyan-500/50 flex justify-between text-sm">
                    <span className="text-slate-300 font-semibold">📅 04 de Julio de 2026</span>
                    <span className="text-slate-200 font-black">735 € <span className="text-xs text-slate-500 font-medium">(420€ Alquiler + 315€ Estudios)</span></span>
                  </div>
                  <div className="bg-slate-900/30 p-3 rounded-lg border-l-2 border-cyan-500/50 flex justify-between text-sm">
                    <span className="text-slate-300 font-semibold">📅 Agosto de 2026</span>
                    <span className="text-slate-200 font-black">735 € <span className="text-xs text-slate-500 font-medium">(420€ Alquiler + 315€ Estudios)</span></span>
                  </div>
                  <div className="bg-slate-900/30 p-3 rounded-lg border-l-2 border-purple-500/50 flex justify-between text-sm">
                    <span className="text-slate-300 font-semibold">📅 04 de Septiembre de 2026</span>
                    <span className="text-slate-200 font-black">315 € <span className="text-xs text-slate-500 font-medium">(315€ Estudios)</span></span>
                  </div>
                </div>
              </div>
            </Card>
          </SectionWrapper>
        )}

        {activeTab === 'logistica' && (
          <SectionWrapper key="logistica" title="Paso 2: Logística en Madrid">
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

             <div className="mt-10">
               <Card title="🗺️ Protocolo de Reencuentro en la Terminal 1 (Paso a Paso)" icon={<Users className="w-7 h-7 text-cyan-400" />} type="info">
                 <div className="mb-6 bg-cyan-950/40 p-5 rounded-2xl border border-cyan-500/30">
                   <p className="text-cyan-200 text-base leading-relaxed text-center font-medium">
                     Este es el plan de acción sincronizado para que Dani y Sorany se encuentren en el hall público de la **Terminal 1 de Barajas (MAD)** sin retrasos, confusiones ni agobios.
                   </p>
                 </div>

                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                   {/* DANI */}
                   <div className="bg-slate-900 border border-slate-700/30 p-6 rounded-3xl relative hover:border-cyan-500/20 transition-all shadow-md">
                     <div className="absolute top-4 right-4 bg-cyan-500/10 text-cyan-400 px-3 py-1 rounded-full text-xs font-black uppercase tracking-widest border border-cyan-500/20">Dani</div>
                     <h4 className="font-bold text-slate-100 flex items-center gap-3 mb-6 text-xl border-b border-white/5 pb-4">
                       <div className="bg-cyan-500/10 p-2 rounded-xl text-cyan-400"><UserCheck className="w-5 h-5"/></div>
                       🙋‍♂️ Tu Ruta de Recogida
                     </h4>
                     
                     <div className="space-y-6 relative before:absolute before:left-[19px] before:top-2 before:bottom-2 before:w-0.5 before:bg-cyan-500/20">
                       <div className="flex gap-4 items-start relative z-10">
                         <div className="bg-slate-950 border-2 border-cyan-500 text-cyan-400 w-10 h-10 rounded-full flex items-center justify-center font-black text-sm flex-shrink-0 shadow-[0_0_10px_rgba(34,211,238,0.3)]">1</div>
                         <div>
                           <strong className="text-slate-100 block text-base font-semibold mb-1">12:15 PM · Salida de Casa 🚶‍♂️</strong>
                           <span className="text-slate-400 text-sm block">Sal de Calle de Andrés Mellado 31 y camina hacia el **Metro de Moncloa** (~6 minutos a pie).</span>
                         </div>
                       </div>

                       <div className="flex gap-4 items-start relative z-10">
                         <div className="bg-slate-950 border-2 border-cyan-500 text-cyan-400 w-10 h-10 rounded-full flex items-center justify-center font-black text-sm flex-shrink-0 shadow-[0_0_10px_rgba(34,211,238,0.3)]">2</div>
                         <div>
                           <strong className="text-slate-100 block text-base font-semibold mb-1">12:21 PM · Línea 6 (Gris) 🚇</strong>
                           <span className="text-slate-400 text-sm block">Súbete al metro dirección *Cuatro Caminos / Nuevos Ministerios*. Viaja **5 paradas** y bájate en **Nuevos Ministerios** (~10 mins).</span>
                         </div>
                       </div>

                       <div className="flex gap-4 items-start relative z-10">
                         <div className="bg-slate-950 border-2 border-cyan-500 text-cyan-400 w-10 h-10 rounded-full flex items-center justify-center font-black text-sm flex-shrink-0 shadow-[0_0_10px_rgba(34,211,238,0.3)]">3</div>
                         <div>
                           <strong className="text-slate-100 block text-base font-semibold mb-1">12:35 PM · Transbordo Línea 8 🏃‍♂️</strong>
                           <span className="text-slate-400 text-sm block">Sigue los carteles de color rosa de la **Línea 8**. Camina el túnel de conexión y toma el tren dirección *Aeropuerto T4* (~6 mins).</span>
                         </div>
                       </div>

                       <div className="flex gap-4 items-start relative z-10">
                         <div className="bg-slate-950 border-2 border-cyan-500 text-cyan-400 w-10 h-10 rounded-full flex items-center justify-center font-black text-sm flex-shrink-0 shadow-[0_0_10px_rgba(34,211,238,0.3)]">4</div>
                         <div>
                           <strong className="text-slate-100 block text-base font-semibold mb-1">12:55 PM · Llegada a Estación MAD 🚇</strong>
                           <span className="text-slate-400 text-sm block">Viaja **5 paradas** y bájate en **Aeropuerto T1-T2-T3** (~15 mins). No olvides validar con abono o pagar el suplemento.</span>
                         </div>
                       </div>

                       <div className="flex gap-4 items-start relative z-10">
                         <div className="bg-slate-950 border-2 border-cyan-500 text-cyan-400 w-10 h-10 rounded-full flex items-center justify-center font-black text-sm flex-shrink-0 shadow-[0_0_10px_rgba(34,211,238,0.3)]">5</div>
                         <div>
                           <strong className="text-slate-100 block text-base font-semibold mb-1">13:05 PM · Conexión Interna a la T1 🚶‍♂️</strong>
                           <span className="text-slate-400 text-sm block">Sigue los carteles hacia la **Terminal T1 Llegadas**. Pasarás por un pasillo interior con cintas mecánicas (~8-10 mins).</span>
                         </div>
                       </div>

                       <div className="flex gap-4 items-start relative z-10">
                         <div className="bg-slate-950 border-2 border-cyan-500 text-cyan-400 w-10 h-10 rounded-full flex items-center justify-center font-black text-sm flex-shrink-0 shadow-[0_0_10px_rgba(34,211,238,0.3)]">6</div>
                         <div>
                           <strong className="text-slate-100 block text-base font-semibold mb-1">13:15 PM · Espera Cómoda en T1 Llegadas 📍</strong>
                           <span className="text-slate-400 text-sm block">Párate en el vestíbulo principal de llegadas internacionales de la **Terminal 1**. Busca un café cerca, quédate tranquilo y mantente atento a la salida de pasajeros.</span>
                         </div>
                       </div>
                     </div>
                   </div>

                   {/* SORANY */}
                   <div className="bg-slate-900 border border-slate-700/30 p-6 rounded-3xl relative hover:border-purple-500/20 transition-all shadow-md">
                     <div className="absolute top-4 right-4 bg-purple-500/10 text-purple-400 px-3 py-1 rounded-full text-xs font-black uppercase tracking-widest border border-purple-500/20">Sorany</div>
                     <h4 className="font-bold text-slate-100 flex items-center gap-3 mb-6 text-xl border-b border-white/5 pb-4">
                       <div className="bg-purple-500/10 p-2 rounded-xl text-purple-400"><Heart className="w-5 h-5"/></div>
                       ✈️ Tu Ruta de Salida en Barajas
                     </h4>

                     <div className="space-y-6 relative before:absolute before:left-[19px] before:top-2 before:bottom-2 before:w-0.5 before:bg-purple-500/20">
                       <div className="flex gap-4 items-start relative z-10">
                         <div className="bg-slate-950 border-2 border-purple-500 text-purple-400 w-10 h-10 rounded-full flex items-center justify-center font-black text-sm flex-shrink-0 shadow-[0_0_10px_rgba(168,85,247,0.3)]">1</div>
                         <div>
                           <strong className="text-slate-100 block text-base font-semibold mb-1">13:00 PM · Aterrizaje y Desembarque 🛬</strong>
                           <span className="text-slate-400 text-sm block">El avión aterriza en la T1. Toma tu mochila personal y tu maleta de cabina de los compartimentos superiores.</span>
                         </div>
                       </div>

                       <div className="flex gap-4 items-start relative z-10">
                         <div className="bg-slate-950 border-2 border-purple-500 text-purple-400 w-10 h-10 rounded-full flex items-center justify-center font-black text-sm flex-shrink-0 shadow-[0_0_10px_rgba(168,85,247,0.3)]">2</div>
                         <div className="bg-purple-950/20 p-4 rounded-2xl border border-purple-500/20 w-full">
                           <strong className="text-purple-300 block text-base font-extrabold mb-2">🔍 El Dilema de la Maleta de 10 KG</strong>
                           <p className="text-slate-300 text-sm leading-relaxed mb-3">
                             ¿Dónde viaja tu maleta de cabina de 10 KG al final? Esto define tu ruta:
                           </p>
                           <div className="space-y-2 text-xs">
                             <div className="bg-emerald-950/30 p-2.5 rounded-xl border border-emerald-500/20">
                               <strong className="text-emerald-400 block mb-1">Caso A: Viajó en Cabina contigo (Normal)</strong>
                               <span className="text-slate-300">¡Excelente! Sales con ella en la mano. **No vayas a las cintas de equipaje**. Camina directo al control de pasaportes.</span>
                             </div>
                             <div className="bg-amber-950/30 p-2.5 rounded-xl border border-amber-500/20">
                               <strong className="text-amber-400 block mb-1">Caso B: Se la bajaron a Bodega en la puerta (Saturación)</strong>
                               <span className="text-slate-300">Si por espacio la bajaron a bodega en la puerta de Bogotá, te habrán dado una tirilla. Al desembarcar, **sigue los carteles de "Equipajes" de la T1**, busca la cinta del vuelo UX 194 y espérala antes de salir.</span>
                             </div>
                           </div>
                         </div>
                       </div>

                       <div className="flex gap-4 items-start relative z-10">
                         <div className="bg-slate-950 border-2 border-purple-500 text-purple-400 w-10 h-10 rounded-full flex items-center justify-center font-black text-sm flex-shrink-0 shadow-[0_0_10px_rgba(168,85,247,0.3)]">3</div>
                         <div>
                           <strong className="text-slate-100 block text-base font-semibold mb-1">👮‍♂️ Control de Pasaportes / Inmigración</strong>
                           <span className="text-slate-400 text-sm block">Sigue las señales hacia el control migratorio. Haz la fila de **"No Comunitarios / All Passports"**. Saca de tu mochila de mano la carpeta con tus papeles impresos y muéstralos tranquila.</span>
                         </div>
                       </div>

                       <div className="flex gap-4 items-start relative z-10">
                         <div className="bg-slate-950 border-2 border-purple-500 text-purple-400 w-10 h-10 rounded-full flex items-center justify-center font-black text-sm flex-shrink-0 shadow-[0_0_10px_rgba(168,85,247,0.3)]">4</div>
                         <div>
                           <strong className="text-slate-100 block text-base font-semibold mb-1">🟢 Aduana (Nada que Declarar)</strong>
                           <span className="text-slate-400 text-sm block">Tras el control de pasaportes (y tras recoger la maleta si aplicaba el Caso B), sigue la salida cruzando por el pasillo verde de aduanas que dice *"Nada que declarar"*.</span>
                         </div>
                       </div>

                       <div className="flex gap-4 items-start relative z-10">
                         <div className="bg-slate-950 border-2 border-purple-500 text-purple-400 w-10 h-10 rounded-full flex items-center justify-center font-black text-sm flex-shrink-0 shadow-[0_0_10px_rgba(168,85,247,0.3)]">5</div>
                         <div>
                           <strong className="text-slate-100 block text-base font-semibold mb-1">🚪 Cruzar las Puertas de Salida 📍</strong>
                           <span className="text-slate-400 text-sm block">Cruza las puertas automáticas de cristal que dan al vestíbulo público de la T1. ¡Por fin libre! Dani estará allí mismo de pie esperándote para darte un abrazo inmenso.</span>
                         </div>
                       </div>
                     </div>
                   </div>
                 </div>
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