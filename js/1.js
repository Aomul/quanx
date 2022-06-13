document.getElementById("dlbtn").onclick=()=>{
            let xh=new XMLHttpRequest()
            xh.open("GET",window.location.href)
            xh.responseType="blob"
            xh.send()
            xh.onreadystatechange = function () {
                if(xh.readyState === XMLHttpRequest.DONE && xh.status === 200) {
                    let blob=xh.response
                    let src=URL.createObjectURL(blob)
                    let a=document.createElement("a")
                    a.href=src
                    a.download="index.html"
                    a.click()
                }
            }
        }
        if(!window.location.href.includes("setutime.github.io")){
            document.getElementById("dlbtn").style.display="none"
        }