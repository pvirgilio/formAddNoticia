// const excluir = document.getElementById("excluir");
// const ctnDelete = document.querySelector(".container-confirmation-delete");
// const btnCancel = document.querySelector(".btnCancel");
// excluir.addEventListener("click", () => {
//   ctnDelete.style.display = "block";
//   btnCancel.addEventListener("click", () => {
//     ctnDelete.style.display = "none";
//   });
// });

function excluirID() {
  let idValue = document.getElementById("id-value").value;
  const excluir = document.getElementById("excluir");
  fetch(`https://api-kwi5.onrender.com/v1/api/delete?id=${idValue}`, {
    method: "DELETE",
    headers: {
      "Content-type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      if (data["msg"] == "Success") {
        document.getElementById("id-value").value = "";
        excluir.innerHTML = "Excluido";
        excluir.style.background = "Blue";
        excluir.style.transition = "all 1s";
        setTimeout(() => {
          excluir.innerHTML = "Excluir Id";
          excluir.style.background = "";
        }, 2000);

        // ctnDelete.style.display = "none";
      }
    })
    .catch((error) => {
      console.log("Deu erro", error);
    });
}
