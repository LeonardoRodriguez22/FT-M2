

const url = `http://localhost:5000/amigos`;
const [boton] = $("#boton");
const [lista] = $("#lista");
const [search] = $("#search");
const [deleteBtn] = $("#delete");

const listFriends = (response) => {
lista.innerText = "";
console.log(response);
    response.forEach(friend => {
        const newLi = document.createElement("li");
        newLi.innerHTML = friend.name;
        lista.appendChild(newLi);
    });
};

const showFriends = () => {
    $.get(url, listFriends)
};

const searchFriend = () => {
    const [input] = $("#input");
    const id = input.value;
    input.value = ""
    
    $.get(`${url}/${id}`, (response) =>{
        const [amigo] = $("#amigo");
        amigo.innerText = response.name
    } );
}


const deleteFriend = () => {
    const [inputDelete] = $("#inputDelete");
    const id = inputDelete.value;
    inputDelete.value = ""
    
    $.get(`${url}/${id}`, (response) =>{
        const [amigo] = $("#amigo1");
        amigo.innerText =  `borraste a tu amigo ${response.name}`})

    $.ajax({
        type: "DELETE",
        url: `${url}/${id}`,
        success: (response) => {listFriends(response)}
    }) 
}



boton.addEventListener("click", showFriends);
search.addEventListener("click", searchFriend);
deleteBtn.addEventListener("click", deleteFriend);