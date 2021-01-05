export const setUserSession = (user) =>{
    sessionStorage.setItem("usuario", user);
};

export const getUser = () =>{
    const userStr = sessionStorage.getItem("usuario");
    if(userStr) return userStr;
    else return "";
}

export const removeSession = () =>{
    sessionStorage.removeItem("usuario");
}