;((doc, storage) => {
    const ipt = document.querySelector("#username")
    const btn = document.querySelector("#btn")
    const init = () => {
        bindEvent("click")
    }
    init()
    
    function bindEvent(event) {
        btn.addEventListener(event, handler, false)
    }
    
    function handler() {
        const username = ipt.value.trim()
        if (username.length < 6) {
            alert("用户名小于六位")
            return
        }
        else{
            storage.setItem("username", username)
            location.href="index.html"
        }
    }
})(document, localStorage);
