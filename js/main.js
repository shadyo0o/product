var productName=document.getElementById("productName");
var productPrice=document.getElementById("productPrice");
var productCategory=document.getElementById("productCategory");
var productdesc=document.getElementById("productDesc");
var productImage=document.getElementById("productImage");
var add=document.getElementById("add");
var update=document.getElementById("update");
var productContainer=[]

if (localStorage.getItem("product")!=null){
    // productContainer=[];
    productContainer=JSON.parse(localStorage.getItem("product"));
    display(productContainer)
}
// else{
    
// }



function addProduct(){
    var product={
        name:productName.value,
        price:productPrice.value,
        category:productCategory.value,
        desc:productdesc.value,
        image:`images/${productImage.files[0]?.name}`,
    }
    productContainer.push(product);
    display(productContainer)
    
localStorage.setItem("product",JSON.stringify(productContainer))

clear()
}


function display(){
    cartona=``;
    for(var i=0;i<productContainer.length;i++){
        cartona+=`
              <div class="col-4 ">
        <div class="inner p-2 border border-warning rounded text-center">
          <img class="w-100" src="${productContainer[i].image}" alt="product image">
          <h5>product name: ${productContainer[i].name}</h5>
          <h5>product price: ${productContainer[i].price}</h5>
          <h5>product category: ${productContainer[i].category}</h5>
          <h5>product desc ${productContainer[i].desc}</h5>
          <button onclick="getUpdate(${i})" class="btn btn-warning">Update</button>
          <button onclick="deleteProduct(${i})" class="btn btn-danger">Delete</button>

        </div>


    </div>

    `

    }
    document.getElementById("rowData").innerHTML=cartona
}

function clear(){
    productName.value=null;
    productPrice.value=null;
    productCategory.value=null;
    productdesc.value=null;
    productImage.value=null

}

function deleteProduct(index){
    productContainer.splice(index,1);
    display(productContainer)
    localStorage.setItem("product",JSON.stringify(productContainer))

}



var currentIndex;
function getUpdate(index){
    currentIndex=index;
    productName.value=productContainer[index].name
    productPrice.value=productContainer[index].price;
    productCategory.value=productContainer[index].category
    productdesc.value=productContainer[index].desc
    add.classList.add("d-none")
    update.classList.remove("d-none")
}


function Update(){

    productContainer[currentIndex].name=productName.value;
    productContainer[currentIndex].price=productPrice.value;
    productContainer[currentIndex].category=productCategory.value;
    productContainer[currentIndex].desc=productdesc.value;
    display(productContainer)
    localStorage.setItem("product",JSON.stringify(productContainer))
clear()
    add.classList.remove("d-none")
    update.classList.add("d-none")

// **************** or *****************
    // productContainer[currentIndex]={
    //     name:productName.value,
    //     price:productPrice.value,
    //     category:productCategory.value,
    //     desc:productdesc.value
    // }
}

var searchInput=document.getElementById("search")
var term=searchInput.value
function searchProduct(){
    var term=searchInput.value
   
    
    cartona=``;
    for(var i=0;i<productContainer.length;i++){
        if(productContainer[i].name.includes(term))
            {
                cartona+=`
                <div class="col-4 ">
        <div class="inner p-2 border border-warning rounded text-center">
        <img class="w-100" src="${productContainer[i].image}" alt="">
        <h5>product name: ${productContainer[i].name}</h5>
        <h5>product price: ${productContainer[i].price}</h5>
        <h5>product category: ${productContainer[i].category}</h5>
        <h5>product desc ${productContainer[i].desc}</h5>
        <button onclick="getUpdate(${i})" class="btn btn-warning">Update</button>
        <button onclick="deleteProduct(${i})" class="btn btn-danger">Delete</button>

        </div>


    </div>
                `
            }
            }
            document.getElementById("rowData").innerHTML=cartona

}

function validate(element){
    var regex={
        productName:/^[a-z]{2,8}$/i,
        productPrice:/^[0-9]{1,4}$/,
        productCategory:/^(tv|screens|laptop|mobile|others)$/i,
        productDesc:/^.{3,25}$/,
    }
    if(regex[element.id].test(element.value)){
        element.classList.add("is-valid")
        element.classList.remove("is-invalid")

    }else{
        element.classList.add("is-invalid")
        element.classList.remove("is-valid")

    }

}





