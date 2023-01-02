const beforeEach = (to, from) => {
    const isToLogin = to.path === "/login";
    const users = JSON.parse(localStorage.getItem('users'));

    if (users && users.token) {
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