import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Plane, 
  FileText, 
  MapPin, 
  ShieldCheck, 
  Backpack, 
  Search, 
  CheckCircle, 
  ArrowRight,
  Info,
  Clock,
  Home,
  AlertTriangle,
  Menu,
  X,
  GraduationCap,
  Gavel,
  Leaf,
  Users,
  Briefcase,
  Calendar,
  DollarSign,
  UserCheck
} from 'lucide-react';

const App = () => {
  const [activeTab, setActiveTab] = useState('preparacion');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const steps = [
    { id: 'preparacion', title: '1. Previos en Colombia', icon: <FileText className="w-5 h-5" /> },
    { id: 'frontera', title: '2. Vuelos y Maletas', icon: <Briefcase className="w-5 h-5" /> },
    { id: 'transicion', title: '3. Legal y Finanzas', icon: <ShieldCheck className="w-5 h-5" /> },
    { id: 'logistica', title: '4. Madrid', icon: <MapPin className="w-5 h-5" /> },
  ];

  const SectionWrapper = ({ children, title }) => (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4 }}
      className="max-w-4xl mx-auto"
    >
      <h2 className="text-3xl font-bold text-slate-800 mb-8 flex items-center gap-3">
        {title}
      </h2>
      <div className="space-y-6">
        {children}
      </div>
    </motion.div>
  );

  const Card = ({ title, icon, children, type = "default", badge }) => {
    const styles = {
      default: "glass-card hover:-translate-y-1",
      warning: "bg-amber-50/80 backdrop-blur-sm border-amber-200/50 shadow-sm hover:shadow-md transition-all hover:-translate-y-1",
      info: "bg-blue-50/80 backdrop-blur-sm border-blue-200/50 shadow-sm hover:shadow-md transition-all hover:-translate-y-1",
      success: "bg-emerald-50/80 backdrop-blur-sm border-emerald-200/50 shadow-sm hover:shadow-md transition-all hover:-translate-y-1"
    };
    return (
      <div className={`p-6 rounded-2xl border ${styles[type]}`}>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-3">
          {title && (
            <h3 className="font-bold text-slate-800 flex items-center gap-2 text-lg">
              {icon && <span className={`${type === 'default' ? 'text-indigo-500' : ''}`}>{icon}</span>}
              {title}
            </h3>
          )}
          {badge && (
            <span className="bg-indigo-100/80 text-indigo-700 text-xs px-3 py-1.5 rounded-full font-bold uppercase tracking-wider flex items-center gap-1 backdrop-blur-md">
              <UserCheck className="w-3 h-3" /> {badge}
            </span>
          )}
        </div>
        <div className="text-slate-600 text-sm leading-relaxed">{children}</div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-slate-50 bg-gradient-pastel flex flex-col md:flex-row font-outfit selection:bg-indigo-200">
      {/* Sidebar / Navigation */}
      <nav className={`fixed inset-y-0 left-0 z-50 w-72 glass shadow-2xl transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 transition-transform duration-500 ease-out border-r border-white/40 flex flex-col`}>
        <div className="p-8">
          <h1 className="text-2xl font-bold flex items-center gap-3 text-slate-800">
            <Plane className="w-8 h-8 text-indigo-500" /> <span className="text-gradient">Ruta Madrid</span>
          </h1>
          <p className="text-slate-500 text-sm mt-2 font-medium">Panel Logístico Sorany</p>
        </div>
        
        <div className="mt-4 px-4 flex-1">
          {steps.map((step) => (
            <button
              key={step.id}
              onClick={() => { setActiveTab(step.id); setIsMenuOpen(false); }}
              className={`w-full flex items-center gap-4 px-5 py-4 rounded-xl mb-3 text-sm font-semibold transition-all duration-300 ${
                activeTab === step.id 
                  ? 'bg-indigo-600 shadow-lg shadow-indigo-200 text-white translate-x-2' 
                  : 'text-slate-600 hover:bg-white/60 hover:text-indigo-600'
              }`}
            >
              <div className={`${activeTab === step.id ? 'text-white' : 'text-slate-400'}`}>
                {step.icon}
              </div>
              {step.title}
            </button>
          ))}
        </div>

        <div className="p-6 m-4 bg-white/50 rounded-2xl border border-white/60 backdrop-blur-md">
          <div className="space-y-2 text-xs font-medium text-slate-600">
            <p className="flex items-center gap-2"><MapPin className="w-3 h-3 text-indigo-400"/> Origen: Aguadas, Caldas</p>
            <p className="flex items-center gap-2"><Plane className="w-3 h-3 text-indigo-400"/> Destino: Madrid T4</p>
          </div>
        </div>
      </nav>

      {/* Mobile Header */}
      <div className="md:hidden glass p-4 flex justify-between items-center sticky top-0 z-[40]">
        <h1 className="font-bold text-slate-800 flex items-center gap-2"><Plane className="w-5 h-5 text-indigo-500"/> Ruta Madrid</h1>
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 bg-white/50 rounded-lg">
          {isMenuOpen ? <X className="text-slate-800" /> : <Menu className="text-slate-800" />}
        </button>
      </div>

      {/* Main Content */}
      <main className="flex-1 p-6 md:p-12 md:pl-80 relative overflow-hidden">
        {/* Background blobs */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-indigo-300/20 blur-3xl mix-blend-multiply pointer-events-none"></div>
        <div className="absolute bottom-0 left-1/4 w-80 h-80 rounded-full bg-pink-300/20 blur-3xl mix-blend-multiply pointer-events-none"></div>

        <AnimatePresence mode="wait">
        {activeTab === 'preparacion' && (
          <SectionWrapper key="preparacion" title="Paso 1: Antes de Volar">
            
            <Card 
              title="📑 Checklist Documental (Semáforo)" 
              icon={<FileText className="w-5 h-5" />} 
              type="info"
            >
              <p className="mb-4">Para evitar que tus documentos venzan antes de presentarlos a extranjería, sigue este semáforo:</p>
              
              <div className="space-y-4">
                <div className="flex gap-4 items-start bg-emerald-50/50 p-4 rounded-xl border border-emerald-100">
                  <div className="w-3 h-3 mt-1.5 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]"></div>
                  <div>
                    <span className="font-bold text-slate-800">Ya puedes ir haciéndolo:</span>
                    <p className="text-xs text-slate-600 mt-1">Acopio de <strong>Notas y Actas de Grado</strong> universitarias para futura convalidación.</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start bg-amber-50/50 p-4 rounded-xl border border-amber-100">
                  <div className="w-3 h-3 mt-1.5 rounded-full bg-amber-500 shadow-[0_0_10px_rgba(245,158,11,0.5)]"></div>
                  <div>
                    <span className="font-bold text-slate-800">Espera (10-15 días antes del viaje):</span>
                    <p className="text-xs text-slate-600 mt-1">Expedir y apostillar los <strong>Antecedentes Policiales</strong> y el <strong>Registro Civil</strong>. Recuerda que no queremos que "se venzan" mientras estamos resolviendo los plazos de legalización.</p>
                  </div>
                </div>
              </div>
            </Card>

            <Card title="⭐ Tarea Pendiente: Confirmación Seguros" icon={<ShieldCheck className="w-5 h-5" />} type="warning" badge="Dani">
              <p className="mb-2 font-medium text-slate-700">Responsabilidad en proceso:</p>
              <ul className="list-disc ml-5 space-y-2 text-sm text-slate-600">
                <li>Cotizar y adquirir seguro de viaje para la entrada a Europa válido ante migración.</li>
                <li>Investigar si el segundo seguro para vinculación como estudiante (ej. Sanitas) se puede comprar con pasaporte o requiere empadronamiento previo en España.</li>
              </ul>
            </Card>

            <Card title="📑 Documentación Legal (Apostillas)" icon={<FileText className="w-5 h-5" />} type="info">
              <p className="mb-3">Una vez Dani confirme la fecha, Sorany debe finalizar estos papeles:</p>
              <ul className="space-y-3">
                <li className="flex flex-col gap-1">
                  <span className="font-bold flex items-center gap-2"><Gavel className="w-4 h-4" /> Antecedentes Penales:</span>
                  <span className="italic">Sácalos solo cuando Dani tenga la fecha del tiquete (Vigencia de 90 días).</span>
                </li>
                <li className="flex flex-col gap-1">
                  <span className="font-bold flex items-center gap-2"><GraduationCap className="w-4 h-4" /> Notas y Títulos:</span>
                  <span className="italic">Deben estar listos para que la universidad en Madrid evalúe qué materias convalidar.</span>
                </li>
              </ul>
            </Card>

            <Card title="🏠 Notaría (Aguadas)" icon={<Home className="w-5 h-5" />}>
              <ul className="list-disc ml-5 space-y-1 text-sm">
                <li>Autenticar la Carta de Responsabilidad (si aplica).</li>
                <li>Hacer un poder firmado por si queda algún trámite bancario pendiente.</li>
              </ul>
            </Card>
          </SectionWrapper>
        )}

        {activeTab === 'frontera' && (
          <SectionWrapper key="frontera" title="Paso 2: Viaje y Vuelos">
            
            <Card title="✈️ ITINERARIO OFICIAL (Trip.com)" type="success" icon={<Plane className="w-5 h-5" />}>
              <div className="mb-4 bg-white/60 p-4 rounded-xl border border-emerald-100">
                <p className="text-sm font-bold text-emerald-800 mb-1">LOCALIZADOR: <span className="text-xl tracking-widest ml-2">CB5ES3</span></p>
                <p className="text-xs text-emerald-600">Billete Nro: 996-9479316990</p>
              </div>

              <div className="space-y-4">
                <div className="border-l-2 border-indigo-200 pl-4">
                  <h4 className="font-bold text-slate-800 text-sm">Ida: Jueves, 7 de mayo (2026)</h4>
                  <p className="text-xs text-slate-600 mt-1">
                    <strong>PEI a BOG (Avianca AV9443):</strong> 06:35am - 07:30am (Localizador: ATQINS)<br/>
                    <strong>BOG a MAD (Air Europa):</strong> Puedes hacer check-in desde el 5 de mayo.
                  </p>
                </div>
                <div className="border-l-2 border-pink-200 pl-4">
                  <h4 className="font-bold text-slate-800 text-sm">Regreso: Viernes, 15 de mayo (2026)</h4>
                  <p className="text-xs text-slate-600 mt-1">MAD a BOG (Air Europa)</p>
                </div>
              </div>
            </Card>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
              <Card title="🎒 Mochila Personal" icon={<Backpack className="w-5 h-5" />}>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-center gap-2">✅ Documentos (Pasaporte y Carta)</li>
                  <li className="flex items-start gap-2">✅ Efectivo para Migración.</li>
                </ul>
              </Card>

              <Card title="🧳 Maleta de Cabina (10kg)" icon={<Briefcase className="w-5 h-5" />}>
                <ul className="space-y-2 text-sm text-slate-600 relative">
                  <li className="flex items-center gap-2">👕 **Regla de Oro:** Que no pase los 10 Kilos.</li>
                  <li className="flex items-center gap-2">🧴 Líquidos en bolsa de 100ml.</li>
                  <div className="mt-3 p-3 bg-indigo-50/50 rounded-lg text-xs italic text-indigo-700">
                    "No te preocupes por marcas de moda ni redes sociales. Una económica pero recia servirá genial, como hizo el doctor del consultorio."
                  </div>
                </ul>
              </Card>
            </div>
          </SectionWrapper>
        )}

        {activeTab === 'transicion' && (
          <SectionWrapper key="transicion" title="Paso 3: Transición (Demostración y Estancia)">
            
            <Card title="💶 Medios Económicos en el Aeropuerto" icon={<DollarSign className="w-5 h-5" />} type="info">
               <p className="mb-3 text-sm text-slate-700">Olvídate de la "Carta de Invitación" improvisada, no da buena imagen.</p>
               <div className="bg-blue-100/50 p-4 rounded-xl border border-blue-200">
                  <h4 className="font-bold text-blue-900 text-sm mb-1">La regla oficial de capital:</h4>
                  <p className="text-sm text-blue-800">
                    Se exige demostrar aproximadamente <strong>100€ diarios</strong> para el tiempo que dure tu viaje turístico (aprox. 500,000 COP/día). Esto será lo que respondas con total seguridad a inmigración para que te vean perfilada y profesional.
                  </p>
               </div>
            </Card>

            <div className="mb-6 overflow-hidden rounded-2xl glass-card border border-white p-6">
              <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-indigo-500" /> Vía Libre (30 Días)
              </h3>
              <p className="text-sm text-slate-600 mb-4">
                La solicitud de prórroga de estancia debe enviarse antes de los 30 días de llegada. Alternativas sugeridas:
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                 <div className="p-4 bg-indigo-50/50 rounded-xl border border-indigo-100">
                    <strong className="text-indigo-900">Antropología</strong>
                    <p className="text-xs text-indigo-700 mt-1">Convalidación de materias universitarias que ya cursaste.</p>
                 </div>
                 <div className="p-4 bg-pink-50/50 rounded-xl border border-pink-100">
                    <strong className="text-pink-900">Jardinería</strong>
                    <p className="text-xs text-pink-700 mt-1">Certificados profesionales (Muy prácticos e inmersivos).</p>
                 </div>
              </div>
            </div>
          </SectionWrapper>
        )}

        {activeTab === 'logistica' && (
          <SectionWrapper key="logistica" title="Paso 4: Logística en Madrid">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card title="🏠 El Piso (Alojamiento)" icon={<MapPin className="w-5 h-5" />} type="warning">
                <p className="text-sm font-bold text-amber-800 mb-2">Estado: En negociaciones ⏳</p>
                <p className="text-sm text-amber-900/80">
                  Sabemos que esto te genera preocupación, pero tu única misión ahora es venir a España tranquilamente. La confirmación del piso la tendrás, a más tardar, la primera semana de Mayo.
                </p>
              </Card>
              <Card title="💳 Transporte y Extras" icon={<CheckCircle className="w-4 h-4" />}>
                 <ul className="space-y-3 text-sm">
                   <li><strong>Abono Joven (20€):</strong> Para moverte sin restricción.</li>
                   <li><strong>Empadronamiento:</strong> Clave una vez quede sellado el alojamiento.</li>
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