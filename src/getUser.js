import decodeJWT from "jwt-decode";

export default () => {
  let token;
  if (localStorage.getItem("token")) {
    token = decodeJWT(localStorage.getItem("token"));
  }
  return token ? token : null;
};

// nithil was here long live shifty g
