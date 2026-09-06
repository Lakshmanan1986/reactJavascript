const API_URL = "https://localhost:7104/api";

export const login = async (userName, password) => {
    const response = await fetch(`${API_URL}/Auth/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            userName,
            password
        })
    });

    if (!response.ok) {
        let errorMessage = "Login failed";

        try {
            const error = await response.json();
            errorMessage = error.message || errorMessage;
        } catch {
            // Response was not JSON
        }

        throw new Error(errorMessage);
    }

    const data = await response.json();

    localStorage.setItem("token", data.token);

    localStorage.setItem(
        "user",
        JSON.stringify({
            userId: data.userId,
            userName: data.userName,
            fullName: data.fullName,
            role: data.role
        })
    );

    return data;
};

export const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    window.location.href = "/login";
};

export const getToken = () => {
    return localStorage.getItem("token");
};

export const getUser = () => {
    const user = localStorage.getItem("user");

    return user ? JSON.parse(user) : null;
};

export const isAuthenticated = () => {
    return !!localStorage.getItem("token");
};

//const API_URL = "https://localhost:7104/api";

//export const login = async (userName, password) => {
//    const response = await fetch(`${API_URL}/auth/login`, {
//        method: "POST",
//        headers: {
//            "Content-Type": "application/json"
//        },
//        body: JSON.stringify({
//            userName,
//            password
//        })
//    });

//    if (!response.ok) {
//        const error = await response.json();

//        throw new Error(
//            error.message || "Login failed"
//        );
//    }

//    const data = await response.json();

//    localStorage.setItem("token", data.token);
//    localStorage.setItem("user", JSON.stringify({
//        userId: data.userId,
//        userName: data.userName,
//        fullName: data.fullName,
//        role: data.role
//    }));

//    return data;
//};

//export const logout = () => {
//    localStorage.removeItem("token");
//    localStorage.removeItem("user");

//    window.location.href = "/login";
//};

//export const getToken = () => {
//    return localStorage.getItem("token");
//};

//export const getUser = () => {
//    const user = localStorage.getItem("user");

//    return user ? JSON.parse(user) : null;
//};

//export const isAuthenticated = () => {
//    return !!localStorage.getItem("token");
//};