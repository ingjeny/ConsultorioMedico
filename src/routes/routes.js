import PageCalendario from '../views/pages/PageCalendario'; // Importa el componente PartidosCreados
import Colors from '../views/theme/colors/Colors'; // Importa el componente Colors
import Accordion from '../views/base/accordion/Accordion'; // Importa el componente Accordion
import AgregarUsuario from '../components/Calendario/agregarusuarios';

const routes = [
  { path: '/PageCalendario', name: 'Calendario', element: PageCalendario },
  { path: '/theme/colors', name: 'Colors', element: Colors },
  { path: '/base/accordion', name: 'Accordion', element: Accordion },
  { path: '/AgregarUsuario', name: 'AgregarUsuario', element: AgregarUsuario }
];

export default routes;