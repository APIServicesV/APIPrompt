

let btn = document.getElementById("buttonUpload").addEventListener("click", enviarTexto);
let  api= "https://66557ed93c1d3b602939bbfd.mockapi.io/vr/prompt/1";
function enviarTexto() {


      const texto = document.getElementById("prompt").value;

      fetch(api, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ prompt: texto }) // Puedes cambiar "mensaje" por la clave que espera tu API
      })
      .then(response => {
        if (!response.ok) throw new Error("Error al enviar");
        return response.json();
      })
      .then(data => {
        console.log("Respuesta del servidor:", data);
        alert("Enviado con éxito");
      })
      .catch(error => {
        console.error("Error:", error);
        alert("Error al enviar");
      });
    }




      // ✅ Función para hacer GET y llenar el textarea al cargar
    function obtenerTexto() {
      fetch(api)
        .then(response => {
          if (!response.ok) throw new Error("Error al obtener datos");
          return response.json();
        })
        .then(data => {
          // Asegúrate de que la clave 'prompt' existe en el objeto devuelto
          document.getElementById("prompt").value = data.prompt || "";
        })
        .catch(error => {
          console.error("Error en GET:", error);
        });
    }

    // Ejecutar al cargar la página
    window.onload = obtenerTexto;