import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

function TrailingSlashRedirect() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const { pathname } = location;
    if (!pathname.endsWith('/')) {
      navigate(`${pathname}/`, { replace: true });
    }
  }, [location, navigate]);

  return null;
}

export default TrailingSlashRedirect;
