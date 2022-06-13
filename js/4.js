 let def=true
      let custompic
        let ipt4=document.getElementById("ipt4")
        ipt4.onchange=()=>{
          if(ipt4.files.length==0){
            def=true
            document.getElementById("ipt4info").innerText="表图：默认"
            return
          }
          let src=URL.createObjectURL(ipt4.files[0])
          let img=new Image()
          img.src=src
          img.onload=()=>{
            URL.revokeObjectURL(src)
            let cvs=document.createElement("canvas")
            let ctx=cvs.getContext("2d")
            let w=img.width
            let h=img.height
            if(w*h>100000){
              let scale=Math.sqrt(w*h/100000)
              w=Math.round(w/scale)
              h=Math.round(h/scale)
            }
            cvs.width=w
            cvs.height=h
            ctx.drawImage(img,0,0,w,h)
            let img2=new Image()
            img2.src=cvs.toDataURL("image/png")
            img2.onload=()=>{
              custompic=img2
              def=false
              document.getElementById("ipt4info").innerText="表图：自定义"
            }
          }
        }
      function addtext(img,text){
        if(!text){
          return dataURLtoArray(img.src)
        }
        let cvs=document.createElement("canvas")
        let ctx=cvs.getContext("2d")
        let w=img.width
        let h=img.height
        cvs.width=w
        cvs.height=h
        ctx.drawImage(img,0,0,w,h)
        
        ctx.fillStyle="#000"
        ctx.strokeStyle="#fff"
        ctx.lineWidth=4
        ctx.font="20px sans-serif"
        ctx.textBaseline="middle"
        ctx.textAlign="right"
        ctx.strokeText(text,w-5,15)
        ctx.fillText(text,w-5,15)
        
        return dataURLtoArray(cvs.toDataURL("image/png"))
      }
      function genpngarr(big,text){
        text=text||document.getElementById("textipt").value
        if(def){
          if(big){
            return randompngarr2(text)
          }else{
            return randompngarr(text)
          }
        }else{
          return custompic["_text_"+text]||(custompic["_text_"+text]=addtext(custompic,text))
        }
      }