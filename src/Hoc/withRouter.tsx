import React from 'react';
import { useParams, useNavigate, useLocation, Params } from 'react-router-dom';

// Define WithRouterProps type
export type WithRouterProps = {
  params: Params<string>; // The URL params object from useParams
  navigate: (path: string) => void; // Function to navigate programmatically
  location: Location; // Current location object from useLocation
};

// Custom withRouter HOC
function withRouter<T>(Component: React.ComponentType<T>) {
  return function (props: Omit<T, keyof WithRouterProps>) {
    const params = useParams(); // Gets the route parameters
    const navigate = useNavigate(); // Allows navigation programmatically
    const location = useLocation(); // Gets the current location

    // Pass params, navigate, and location to the wrapped component
    return <Component {...(props as T)} params={params} navigate={navigate} location={location} />;
  };
}

export default withRouter;
