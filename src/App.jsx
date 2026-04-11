import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Plane, FileText, MapPin, ShieldCheck, Backpack, 
  Search, CheckCircle, ArrowRight, Info, Clock, 
  Home, AlertTriangle, Menu, X, GraduationCap, 
  Gavel, Leaf, Users, Briefcase, Calendar, 
  DollarSign, UserCheck
} from 'lucide-react';

const App = () => {
  const [activeTab, setActiveTab] = useState('preparacion');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const steps = [
    { id: 'preparacion', title: '1. Previos en Colombia', icon: <FileText className="w-6 h-6" /> },
    { id: 'frontera', title: '2. Vuelos y Maletas', icon: <Briefcase className="w-6 h-6" /> },
    { id: 'transicion', title: '3. Legal y Finanzas', icon: <ShieldCheck className="w-6 h-6" /> },
    { id: 'logistica', title: '4. Madrid', icon: <MapPin className="w-6 h-6" /> },
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
            
            <Card title="⏳ Cuenta Regresiva y Tareas Inmediatas" icon={<Clock className="w-6 h-6 text-cyan-400" />} type="info">
              <p className="mb-4 text-cyan-200">Enfoque total en lo que necesitas para subirte al avión sin estrés.</p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-cyan-950/40 p-5 rounded-xl border border-cyan-500/20">
                  <h4 className="font-bold text-cyan-300 mb-3 text-lg border-b border-cyan-500/20 pb-2">A 30 días del vuelo:</h4>
                  <ul className="text-slate-300 text-base space-y-3 list-disc ml-4">
                    <li>Confirmar fecha final del tiquete de avión.</li>
                    <li>Cotizar seguro de viaje obligatorio (válido para espacio Schengen).</li>
                    <li>Planificar compras locales (ropa básica, adaptadores de enchufe europeo).</li>
                  </ul>
                </div>
                <div className="bg-amber-950/40 p-5 rounded-xl border border-amber-500/20">
                  <h4 className="font-bold text-amber-400 mb-3 text-lg border-b border-amber-500/20 pb-2">A 15 días del vuelo:</h4>
                  <ul className="text-slate-300 text-base space-y-3 list-disc ml-4">
                    <li>Sacar Apostilla de <strong className="text-amber-200">Antecedentes Penales</strong> (tienen vigencia de 90 días).</li>
                    <li>Sacar certificación de <strong className="text-amber-200">Registro Civil</strong> reciente.</li>
                    <li>Cita en Notaría: Poder familiar en Aguadas y/o Carta de Responsabilidad.</li>
                  </ul>
                </div>
              </div>
            </Card>

            <Card title="🧳 Estrategia de Equipaje (1 Mes de Turismo)" icon={<Briefcase className="w-6 h-6 text-emerald-400" />} type="default">
               <div className="mb-5 text-slate-300 leading-relaxed text-lg bg-slate-900/50 p-4 rounded-xl border border-white/5">
                  Llegarás a España a mediados de Mayo de 2026. Estaremos en <strong>Primavera tardía</strong> (clima agradable y cálido durante el día, refresca de noche). 
                  <br/><strong className="text-emerald-400 text-xl block mt-2">💎 Regla de Oro: Viajas solo con 1 Maleta de Cabina (10 KG) + 1 Mochila Personal.</strong>
               </div>
               
               <div className="grid md:grid-cols-2 gap-6 mt-6">
                 <div className="bg-slate-900 border border-slate-700/50 p-6 rounded-2xl hover:border-purple-500/30 transition-colors">
                   <h4 className="font-bold text-slate-100 flex items-center gap-2 mb-4 text-lg"><Backpack className="w-5 h-5 text-purple-400"/> Tu Mochila Personal</h4>
                   <p className="text-sm text-slate-400 mb-4 bg-slate-950 p-2 rounded-lg">(Va debajo del asiento). Es tu chaleco salvavidas.</p>
                   <ul className="text-base text-slate-300 space-y-3">
                     <li className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-purple-400"></div> Pasaporte original (+ Copia a color).</li>
                     <li className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-purple-400"></div> Billetes de avión impresos y Carta de reserva.</li>
                     <li className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-purple-400"></div> Dinero en Efectivo (A la mano para migración).</li>
                     <li className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-purple-400"></div> Cargador del móvil y cepillo de dientes.</li>
                   </ul>
                 </div>
                 
                 <div className="bg-slate-900 border border-slate-700/50 p-6 rounded-2xl hover:border-cyan-500/30 transition-colors">
                   <h4 className="font-bold text-slate-100 flex items-center gap-2 mb-4 text-lg"><Briefcase className="w-5 h-5 text-cyan-400"/> Maleta de Cabina (10 Kg)</h4>
                   <p className="text-sm text-slate-400 mb-4 bg-slate-950 p-2 rounded-lg">(55x40x20 cm máximo). Técnica para empacar:</p>
                   <ul className="text-base text-slate-300 space-y-3">
                     <li className="flex items-start gap-2">👕 <span><strong>Método Rollito:</strong> Enrolla la ropa fuertemente. Ahorra 30% de espacio y no se arruga.</span></li>
                     <li className="flex items-start gap-2">👖 <span><strong>Básicos (Lavarás allá):</strong> Solo 3 pantalones, 5-6 camisetas, lencería para 10 días útiles.</span></li>
                     <li className="flex items-start gap-2">🧥 <span><strong>Abrigo:</strong> Solo 1 chaqueta ligera, y llévala <em>puesta</em> en el avión para no pesar la maleta.</span></li>
                     <li className="flex items-start gap-2">🧴 <span><strong>Líquidos:</strong> Todos en 1 sola bolsa tipo Ziploc transparente. Botellitas que no pasen de 100ml.</span></li>
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
                  <p className="text-cyan-400 font-bold text-base mb-4 tracking-wide">Jueves, 7 de mayo de 2026 (Avianca AV9443)</p>
                  
                  <div className="bg-slate-900/50 border border-slate-700/50 p-6 rounded-2xl flex flex-col md:flex-row gap-8 items-center">
                     <div className="flex-1">
                       <p className="text-sm text-slate-500 font-bold uppercase mb-1 flex items-center gap-2"><Plane className="w-4 h-4 text-cyan-500 rotate-45"/> Despegue PEI</p>
                       <p className="text-3xl font-bold text-slate-100">06:35 AM <span className="text-base font-normal text-slate-400 bg-slate-800 px-2 py-1 rounded ml-2">Hora COL 🇨🇴</span></p>
                     </div>
                     <div className="flex-1">
                       <p className="text-sm text-slate-500 font-bold uppercase mb-1 flex items-center gap-2"><Plane className="w-4 h-4 text-cyan-500 md:rotate-90"/> Aterrizaje BOG</p>
                       <p className="text-3xl font-bold text-slate-100">07:30 AM <span className="text-base font-normal text-slate-400 bg-slate-800 px-2 py-1 rounded ml-2">Hora COL 🇨🇴</span></p>
                     </div>
                  </div>
                  <div className="mt-4 bg-amber-950/20 p-4 rounded-xl border border-amber-500/20 inline-flex items-center gap-3">
                     <AlertTriangle className="w-5 h-5 text-amber-500" />
                     <p className="text-amber-200 text-sm">Regla de oro de aeropuertos: Debes estar en el Aeropuerto Matecaña a las <strong className="text-amber-400 text-base">04:30 AM</strong>.</p>
                  </div>
                </div>

                  <div className="mt-4 mb-8 bg-indigo-950/20 p-4 rounded-xl border border-indigo-500/20 inline-flex items-center gap-3">
                     <Clock className="w-5 h-5 text-indigo-400" />
                     <p className="text-indigo-200 text-sm">Escala (Tiempo libre en Aeropuerto El Dorado): <strong className="text-indigo-400 text-base">~12 horas y 45 mins</strong></p>
                  </div>

                  <div className="border-l-4 border-purple-500/50 pl-6 relative">
                    <div className="absolute -left-2.5 top-1 bg-slate-900 border-2 border-purple-500 w-4 h-4 rounded-full"></div>
                    <h4 className="font-extrabold text-slate-100 text-2xl mb-1">Tramo 2: Bogotá (BOG) ➔ Madrid (MAD)</h4>
                    <p className="text-purple-400 font-bold text-base mb-4 tracking-wide">Vuelo Internacional (Air Europa)</p>
                    
                    <div className="bg-slate-900/50 border border-slate-700/50 p-6 rounded-2xl space-y-6">
                       <div className="flex flex-col md:flex-row gap-8 border-b border-slate-700/50 pb-6">
                         <div className="flex-1">
                           <p className="text-sm text-slate-500 font-bold uppercase mb-1 flex items-center gap-2"><Plane className="w-4 h-4 text-purple-500 rotate-45"/> Despegue BOG</p>
                           <p className="text-3xl font-bold text-slate-100">08:15 PM <span className="text-base font-normal text-slate-400 bg-slate-800 px-2 py-1 rounded ml-2">Hora COL 🇨🇴</span></p>
                           <p className="text-sm text-slate-500 mt-2">Jueves, 7 de mayo (20:15)</p>
                         </div>
                         <div className="flex-1">
                           <p className="text-sm text-slate-500 font-bold uppercase mb-1 flex items-center gap-2"><Plane className="w-4 h-4 text-amber-500 md:rotate-90"/> Aterrizaje Barajas (MAD)</p>
                           <p className="text-3xl font-bold text-slate-100">01:15 PM <span className="text-base font-normal text-amber-500 bg-amber-950/50 border border-amber-500/20 px-2 py-1 rounded ml-2">Hora MAD 🇪🇸</span></p>
                           <p className="text-sm text-slate-500 mt-2">Viernes, 8 de mayo (13:15)</p>
                         </div>
                       </div>
                       <div className="bg-purple-900/20 p-5 rounded-xl border border-purple-500/20 flex gap-4 items-start">
                         <Info className="w-6 h-6 text-purple-400 flex-shrink-0" />
                         <div>
                           <p className="text-base text-purple-300 font-bold mb-2">Tu familia en Colombia (Cero Ansiedad):</p>
                           <p className="text-base text-slate-300 leading-relaxed text-justify">
                             Aterrizarás a la gloriosa hora de las <strong>01:15 PM</strong> (hora de España). ¡Pero tranquila! En ese instante exacto, en Aguadas-Caldas son apenas las <strong className="text-cyan-300 bg-cyan-900/30 px-2 py-1 rounded">06:15 AM</strong>.
                             <br/><br/><strong className="text-purple-400">La regla:</strong> Tu familia apenas se estará levantando y preparando café, así que si durante tus trámites de migración no contestas rápido, diles con anticipación que para ellos allá todavía es de madrugada y no tienen por qué preocuparse.
                           </p>
                         </div>
                       </div>
                    </div>
                  </div>
              </div>
            </Card>

            <Card title="🇪🇸 Migración en Madrid (Frontera)" icon={<ShieldCheck className="w-6 h-6 text-cyan-400" />} type="info">
               <div className="text-slate-300 space-y-4 leading-relaxed text-lg">
                  <p>Al salir del avión, seguirás a todo el mundo hacia el cartel de <strong>"Control de Pasaportes"</strong>. Eres turista, tu actitud debe ser 100% tranquila, transparente y segura.</p>
                  <ul className="bg-cyan-950/30 p-6 rounded-2xl border border-cyan-500/20 space-y-4 mt-4">
                     <li className="flex gap-3 items-start">
                       <strong className="text-cyan-400 min-w-32">¿A qué viene?</strong> 
                       <span>"Vengo a hacer turismo. Tengo planeado recorrer Madrid por mis vacaciones de 30 días."</span>
                     </li>
                     <li className="flex gap-3 items-start">
                       <strong className="text-cyan-400 min-w-32">¿Dónde se aloja?</strong> 
                       <span>(Entregas el papel de tu Reserva de Hotel impresa y clara).</span>
                     </li>
                     <li className="flex gap-3 items-start">
                       <strong className="text-cyan-400 min-w-32">¿Dinero?</strong> 
                       <span>"Cuento con euros en efectivo acá y respaldo en tarjetas de crédito por valor de más de 3500€ para mi estadía." (Enséñalos sin dudar si te los piden).</span>
                     </li>
                  </ul>
               </div>
            </Card>
          </SectionWrapper>
        )}

        {activeTab === 'transicion' && (
          <SectionWrapper key="transicion" title="Paso 3: Transición (Demostración y Estancia)">
            
            <Card title="💶 Medios Económicos en el Aeropuerto" icon={<DollarSign className="w-6 h-6 text-cyan-400" />} type="info">
               <p className="mb-6 text-cyan-200">Olvídate de la "Carta de Invitación" improvisada, no da buena imagen.</p>
               <div className="bg-cyan-950/40 p-6 or rounded-2xl border border-cyan-500/20">
                  <h4 className="font-extrabold text-cyan-400 text-lg mb-3">La regla oficial de capital:</h4>
                  <p className="text-slate-300 leading-loose">
                    Se exige demostrar aproximadamente <strong className="text-cyan-300 text-xl mx-1 bg-cyan-900/50 px-2 py-1 rounded">100€ diarios</strong> para el tiempo que dure tu viaje turístico (aprox. 500,000 COP/día). Esto será lo que respondas con total seguridad a inmigración para que te vean perfilada y profesional.
                  </p>
               </div>
            </Card>

            <div className="mt-8 overflow-hidden rounded-3xl glass-card p-8">
              <h3 className="font-extrabold text-slate-100 text-2xl mb-6 flex items-center gap-3">
                <GraduationCap className="w-8 h-8 text-purple-400" /> Vía Libre (Primeros 30 Días)
              </h3>
              <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                La solicitud de prórroga de estancia como estudiante debe enviarse idealmente antes de los 30 días de llegada. Alternativas sugeridas para la matriculación:
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                 <div className="p-6 bg-indigo-950/40 rounded-2xl border border-indigo-500/20 hover:-translate-y-1 transition-transform cursor-default">
                    <strong className="text-indigo-300 text-xl mb-2 block">1. Antropología Social</strong>
                    <p className="text-indigo-200/70 leading-relaxed mt-2">Convalidación estratégica de materias universitarias que ya cursaste en Colombia para acceso rápido.</p>
                 </div>
                 <div className="p-6 bg-purple-950/40 rounded-2xl border border-purple-500/20 hover:-translate-y-1 transition-transform cursor-default">
                    <strong className="text-purple-300 text-xl mb-2 block">2. Jardinería / Paisajismo</strong>
                    <p className="text-purple-200/70 leading-relaxed mt-2">Certificados de profesionalidad. Son altamente prácticos, inmersivos y con rápida vinculación al mercado laboral español.</p>
                 </div>
              </div>
            </div>
          </SectionWrapper>
        )}

        {activeTab === 'logistica' && (
          <SectionWrapper key="logistica" title="Paso 4: Logística en Madrid">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card title="🏠 El Piso (Alojamiento)" icon={<MapPin className="w-6 h-6 text-amber-400" />} type="warning">
                <div className="flex items-center gap-3 mb-5 inline-flex bg-amber-500/10 border border-amber-500/30 text-amber-400 px-4 py-1.5 rounded-full">
                  <Clock className="w-4 h-4 animate-pulse" />
                  <span className="font-bold text-sm tracking-widest uppercase">En negociaciones</span>
                </div>
                <p className="text-amber-100/80 leading-relaxed text-lg">
                  Sabemos que esto te genera preocupación, pero <strong className="text-amber-300">tu única misión ahora es venir a España tranquilamente</strong>. La confirmación del piso y la dirección oficial la tendrás a más tardar la primera semana de Mayo.
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
        </AnimatePresence>
      </main>
    </div>
  );
};

export default App;