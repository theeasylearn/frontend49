import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
//arrow function
const usingHooks = (WrappedComponent) => {
  return function WrapperComponent(props) {
   
    const params = useParams();
    const navigate = useNavigate();
    const [cookies, setCookie, removeCookie] = useCookies();

    //  {...props} return all the received properties as it is 
    return(
      <WrappedComponent
        {...props}
        params={params}
        navigate={navigate}
        cookies={cookies}
        setCookie={setCookie}
        removeCookie={removeCookie}
      />
    );
  };
};

export default usingHooks;