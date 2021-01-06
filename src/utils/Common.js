export const setUserSession = (user) =>{
    sessionStorage.setItem("token", user);
};

export const getUser = () =>{
    const userStr = sessionStorage.getItem("token");
    if(userStr) return userStr;
    else return "";
}

export const removeSession = () =>{
    sessionStorage.removeItem("token");
}