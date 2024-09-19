import { renderCategories } from "./src/services/categories.js";
/*import "./style.css"*/

renderCategories();

/* ===========product================== */
const buttonAdd=document.getElementById("buttonAddElement")
buttonAdd.addEventListener('click',()=>{
    openModal()
})
/*===========POPUP============ */

const cancelButton=document.getElementById("cancelButton")
cancelButton.addEventListener('click',()=>{
    handleCancelButton()
})
const handleCancelButton=()=>{
    closeModal()
}
//FUNCIONES ABRIR - CERRAR MODAL
const openModal=()=>{
    const modal=document.getElementById("modalPopUp")
    modal.style.display='flex'
}
const closeModal=()=>{
    const modal=document.getElementById("modalPopUp")
    modal.style.display='none'
}

//GUARDAR O MODIFICAR ELEMENTOS
const acceptButton=document.getElementById("acceptButton")
acceptButton.addEventListener('click',()=>{
    handleSaveOrModifyElement()
})
const handleSaveOrModifyElement=()=>{
    const name=document.getElementById("nombre").value,
        img=document.getElementById("img").value,
        price=document.getElementById("precio").value,
        categories=document.getElementById("categoria").value;
    console.log({
        name,
        img,
        price,
        categories
    });
    closeModal()
}