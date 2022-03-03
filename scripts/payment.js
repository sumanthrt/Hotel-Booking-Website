pay();
function pay() {
    if (localStorage.isLogin === "true") {
        document.querySelector("#bookButton").removeAttribute("disabled");
    }
    else {
        document.querySelector("#bookButton").setAttribute("disabled",0);
    }
}