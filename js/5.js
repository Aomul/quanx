 let srclist=[]
      let display=document.getElementById("display")
      function clear(){
        display.innerHTML=""
        srclist.map(x=>URL.revokeObjectURL(x))
        srclist=[]
      }
      function createdisplay(b){
        let src=URL.createObjectURL(b)
        srclist.push(b)
        
        let div=document.createElement("div")
        div.style.paddingTop="0.5rem"
        
        let div2=document.createElement("div")
        div2.style.wordBreak="break-all"
        div.appendChild(div2)
        

        
        if(b.type.indexOf("image")>-1){
          let img=document.createElement("img")
          img.style.maxWidth="100%"
          img.src=src
          div.appendChild(img)
        }
        
        if(b.type.indexOf("video")>-1){
          let img=document.createElement("video")
          img.controls=true
          img.style.maxWidth="100%"
          img.src=src
          div.appendChild(img)
        }
        
        return div
      }
      
      




      
      
        let ipt3=document.getElementById("ipt3")
        ipt3.onchange=()=>{
          clear()
          let div=document.createElement("div")
          display.appendChild(div)
          let div2=document.createElement("div")
          display.appendChild(div2)
          let count=0
          Array.from(ipt3.files).map(f=>{
            decode(f,code,r=>{
              if(r){
                r.map(x=>{
                  display.appendChild(createdisplay(x))
                })
              }else{
                div.innerText="图片读取失败，请保存二维码内的图片。"
                let img=document.createElement("img")
                img.style.maxWidth="100px"
                img.style.maxHeight="100px"
                let src=URL.createObjectURL(f)
                srclist.push(src)
                img.src=src
                div2.appendChild(img)
                div2.style.paddingBottom="0.5rem"
                div2.style.borderBottom="1px solid #ccc"
              }
            })
          })
        }