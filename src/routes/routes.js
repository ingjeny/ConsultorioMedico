import PageCalendario from '../views/pages/PageCalendario'; // Importa el componente PartidosCreados
import Colors from '../views/theme/colors/Colors'; // Importa el componente Colors
import Accordion from '../views/base/accordion/Accordion'; // Importa el componente Accordion
import AgregarUsuario from '../components/Calendario/agregarusuarios';
import HistoriaClinicas from '../views/pages/Historias/HistoriasClinicas'; // Corregido aquí

const routes = [
  { path: '/PageCalendario', name: 'Calendario', element: PageCalendario },
  { path: '/theme/colors', name: 'Citas Diarias', element: Colors },
  { path: '/base/accordion', name: 'Usuarios Nuevos', element: Accordion },
  { path: '/AgregarUsuario', name: 'AgregarUsuario', element: AgregarUsuario },
  { path: '/HistoriasClinicas', name: 'Historia de Vida', element: HistoriaClinicas }, // Corregido aquí
];

export default routes;
