import { useLocation } from 'react-router-dom';

const NotFound = () => {
  // # The useLocation hook returns the location object that represents the current URL
  let location = useLocation();
  // console.log(location);

  return (
    <div className="page">
      <h2>404: Page '{location.pathname}' Not Found!</h2>
    </div>
  );
};

export default NotFound;
