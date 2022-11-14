import Cookies from "js-cookie";

function setCookies(accesstoken, refreshtoken, role) {
    Cookies.set("accesstoken", accesstoken, {
        expires: new Date(new Date().getTime() + 1000 * 60 * 3), // 3 minutes (this is the same time backend accesstoken expires))
        secure: true,
        sameSite: 'strict'
    })
    Cookies.set("refreshtoken", refreshtoken, {
        expires: 28, // 28 days (this is the same time backend refreshtoken expires)
        secure: true,
        sameSite: 'strict'
    })
    Cookies.set("role", role, {
        expires: 28, // 28 days (this is the same time backend role expires))
        secure: true,
        sameSite: 'strict'
    });
}

export default setCookies;