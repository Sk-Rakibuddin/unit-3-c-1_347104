//store the products array in localstorage as "products"

function Products(t,d,p,i){
    this.type=t
    this.desc=d
    this.price=p
    this.image=i

}
function addtolocal(){
    event.preventDefault()
    let form=document.getElementById("products")
    let type=form.type.value
    let desc=form.desc.value
    let price=form.price.value
    let image=form.image.value
    // console.log(type,des,price,image)
let p1=new Products(type,desc,price,image)
let data=JSON.parse(localStorage.getItem("products"))||[]
data.push(p1)
localStorage.setItem("products",JSON.stringify(data))

}