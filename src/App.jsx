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
          <SectionWrapper key="preparacion" title="Paso 1: Antes de Volar">
            
            <Card 
              title="📑 Checklist Documental (Semáforo)" 
              icon={<FileText className="w-6 h-6" />} 
              type="info"
            >
              <p className="mb-6 text-slate-300">Para evitar que tus documentos venzan antes de presentarlos a extranjería, sigue este semáforo:</p>
              
              <div className="space-y-5">
                <div className="flex gap-5 items-start bg-emerald-950/40 p-6 rounded-2xl border border-emerald-500/20">
                  <div className="w-4 h-4 mt-1.5 rounded-full bg-emerald-400 shadow-[0_0_15px_rgba(52,211,153,0.8)]"></div>
                  <div>
                    <span className="font-bold text-emerald-300 text-lg">Ya puedes ir haciéndolo:</span>
                    <p className="text-slate-300 mt-2 text-base">Acopio de <strong className="text-slate-100">Notas y Actas de Grado</strong> universitarias para futura convalidación.</p>
                  </div>
                </div>

                <div className="flex gap-5 items-start bg-amber-950/40 p-6 rounded-2xl border border-amber-500/20">
                  <div className="w-4 h-4 mt-1.5 rounded-full bg-amber-400 shadow-[0_0_15px_rgba(251,191,36,0.8)]"></div>
                  <div>
                    <span className="font-bold text-amber-300 text-lg">Espera (10-15 días antes del viaje):</span>
                    <p className="text-slate-300 mt-2 text-base">Expedir y apostillar los <strong className="text-slate-100">Antecedentes Policiales</strong> y el <strong className="text-slate-100">Registro Civil</strong>. Recuerda que no queremos que "se venzan" mientras estamos resolviendo los plazos de legalización.</p>
                  </div>
                </div>
              </div>
            </Card>

            <Card title="⭐ Tarea Pendiente: Confirmación Seguros" icon={<ShieldCheck className="w-6 h-6 text-amber-400" />} type="warning" badge="Dani">
              <p className="mb-4 font-medium text-amber-200">Responsabilidad en proceso:</p>
              <ul className="list-disc ml-6 space-y-3 text-slate-300">
                <li>Cotizar y adquirir seguro de viaje para la entrada a Europa válido ante migración.</li>
                <li>Investigar si el segundo seguro para vinculación como estudiante (ej. Sanitas) se puede comprar con pasaporte o requiere empadronamiento previo en España.</li>
              </ul>
            </Card>

            <Card title="📑 Documentación Legal (Apostillas)" icon={<FileText className="w-6 h-6 text-cyan-400" />} type="info">
              <p className="mb-5 text-cyan-200 font-medium">Una vez Dani confirme la fecha, Sorany debe finalizar estos papeles:</p>
              <ul className="space-y-5">
                <li className="flex flex-col gap-2">
                  <span className="font-bold flex items-center gap-3 text-slate-100 text-lg"><Gavel className="w-5 h-5 text-indigo-400" /> Antecedentes Penales:</span>
                  <span className="text-slate-400 ml-8 leading-relaxed">Sácalos solo cuando Dani tenga la fecha del tiquete (Vigencia de 90 días).</span>
                </li>
                <li className="flex flex-col gap-2">
                  <span className="font-bold flex items-center gap-3 text-slate-100 text-lg"><GraduationCap className="w-5 h-5 text-indigo-400" /> Notas y Títulos:</span>
                  <span className="text-slate-400 ml-8 leading-relaxed">Deben estar listos para que la universidad en Madrid evalúe qué materias convalidar.</span>
                </li>
              </ul>
            </Card>

            <Card title="🏠 Notaría (Aguadas)" icon={<Home className="w-6 h-6" />}>
              <ul className="list-disc ml-6 space-y-3 text-slate-300">
                <li className="pl-2">Autenticar la Carta de Responsabilidad (si aplica).</li>
                <li className="pl-2">Hacer un poder firmado por si queda algún trámite bancario pendiente.</li>
              </ul>
            </Card>
          </SectionWrapper>
        )}

        {activeTab === 'frontera' && (
          <SectionWrapper key="frontera" title="Paso 2: Viaje y Vuelos">
            
            <Card title="✈️ ITINERARIO OFICIAL (Trip.com)" type="success" icon={<Plane className="w-6 h-6 text-emerald-400" />}>
              <div className="mb-8 bg-emerald-950/40 p-6 rounded-2xl border border-emerald-500/20 backdrop-blur-sm">
                <p className="text-sm font-bold text-emerald-400/80 mb-2 uppercase tracking-widest">Código de Localizador</p>
                <div className="flex items-center gap-4">
                   <p className="text-4xl font-extrabold text-emerald-300 tracking-widest drop-shadow-[0_0_10px_rgba(52,211,153,0.3)]">CB5ES3</p>
                   <div className="h-8 w-px bg-emerald-500/20 mx-2"></div>
                   <p className="text-sm text-emerald-200/60 font-mono">Billete Nro: <br/>996-9479316990</p>
                </div>
              </div>

              <div className="space-y-8">
                <div className="border-l-4 border-cyan-500/50 pl-6 relative">
                  <div className="absolute -left-2.5 top-1 bg-slate-900 border-2 border-cyan-500 w-4 h-4 rounded-full"></div>
                  <h4 className="font-extrabold text-slate-100 text-lg mb-3">Ida: Jueves, 7 de mayo (2026)</h4>
                  <ul className="space-y-3 text-slate-300">
                    <li className="flex items-start gap-3">
                       <span className="text-cyan-400 font-bold min-w-24">06:35 am</span>
                       <span><strong>PEI a BOG</strong> (Avianca AV9443) <br/><span className="text-sm text-slate-500">Localizador Interno: ATQINS</span></span>
                    </li>
                    <li className="flex items-start gap-3 mt-4">
                       <span className="text-cyan-400 font-bold min-w-24">Vuelo Intl.</span>
                       <span><strong>BOG a MAD</strong> (Air Europa) <br/><span className="text-sm text-emerald-400">Puedes hacer check-in desde el 5 de mayo.</span></span>
                    </li>
                  </ul>
                </div>

                <div className="border-l-4 border-purple-500/50 pl-6 relative">
                  <div className="absolute -left-2.5 top-1 bg-slate-900 border-2 border-purple-500 w-4 h-4 rounded-full"></div>
                  <h4 className="font-extrabold text-slate-100 text-lg mb-2">Regreso: Viernes, 15 de mayo (2026)</h4>
                  <p className="text-slate-400">MAD a BOG (Air Europa)</p>
                </div>
              </div>
            </Card>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
              <Card title="🎒 Mochila Personal" icon={<Backpack className="w-6 h-6" />}>
                <ul className="space-y-4 text-slate-300">
                  <li className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xs">✓</div> 
                    Documentos (Pasaporte y Carta)
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xs">✓</div> 
                    Efectivo para Migración
                  </li>
                </ul>
              </Card>

              <Card title="🧳 Maleta de Cabina (10kg)" icon={<Briefcase className="w-6 h-6" />}>
                <ul className="space-y-4 text-slate-300 relative">
                  <li className="flex items-start gap-3">
                    <span className="text-xl">👕</span> 
                    <span><strong className="text-cyan-300 font-semibold">Regla de Oro:</strong> Que no pase los 10 Kilos.</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-xl">🧴</span> 
                    Líquidos en bolsa transparente (máx 100ml).
                  </li>
                </ul>
                <div className="mt-6 p-5 bg-indigo-950/30 border border-indigo-500/20 rounded-2xl text-sm italic text-indigo-300 leading-relaxed relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-1 h-full bg-indigo-500/50"></div>
                  "No te preocupes por marcas de moda ni redes sociales. Una económica pero recia servirá genial, como hizo el doctor del consultorio."
                </div>
              </Card>
            </div>
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