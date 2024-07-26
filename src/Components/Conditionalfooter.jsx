import { useLocation } from 'react-router-dom';
import Footer from './Footer';

function ConditionalFooter() {
  const location = useLocation();
  const hideFooter = location.pathname === '/help';
  return !hideFooter ? <Footer /> : null;
}

export default ConditionalFooter;
