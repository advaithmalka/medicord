import decodeJWT from "jwt-decode";

export default () => {
  let token;
  if (localStorage.getItem("medicord-token")) {
    token = decodeJWT(localStorage.getItem("medicord-token"));
  }
  return token ? token : null;
};

// nithil was here long live shifty g
