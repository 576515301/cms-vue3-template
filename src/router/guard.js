const beforeEach = (to, from) => {
    const isToLogin = to.path === "/login";
    const token = localStorage.getItem('token');

    if (token) {
        if (isToLogin) {
            if (from.path === "/") return { path: "/home" };
            else return false;
        }
    } else {
        if (isToLogin) return true;
        else return { path: "/login" };
    }
}

export default beforeEach