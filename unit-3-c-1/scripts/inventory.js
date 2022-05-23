function append(){
    let data=JSON.parse(localStorage.getItem("products"))||[]

    let container=document.getElementById("all_products")
    container.innerHTML=null


    data.forEach(function(el,index) {
        let div=document.createElement("div")
        let h3=document.createElement("h3")
        h3.innerText=el.type
        let img=document.createElement("img")
        img.src =el.image
        let p=document.createElement("p")
        p.innerText=el.desc
        let b=document.createElement("b") 
        b.innerText=el.price
        let btn=document.createElement("button")
        btn.id="remove_product"
        btn.innerText="Remove"
        div.append(h3,img,p,b,btn)
        container.append(div)
        btn.addEventListener("click",function(){
            remove(index)
        })

    });

   
    
}
append()


function remove(index){

    let data=JSON.parse(localStorage.getItem('products')) || [];
    let newData=data.filter(function (el,i){
       if(i==index){

        let trash=JSON.parse(localStorage.getItem('trash')) || [];
        trash.push(el);
        localStorage.setItem("trash",JSON.stringify(trash));
}
       else{

              return i!==index;
 }
 })



localStorage.setItem("products",JSON.stringify(newData));
append()

}