const chatContainer = document.getElementById("chat-container");
const texto = document.getElementById("texto");
let conversationHistory = [];

function textoareaUsuario(texto) {
    let burbuja = ` <div class="flex items-start gap-4 justify-end">
                    <div class="flex flex-col gap-1.5 items-end">
                        <p class="text-[12px] font-semibold text-slate-500 dark:text-[#a09cc7] mr-1">Tú</p>
                        <div
                            class="bg-primary text-white p-4 rounded-2xl rounded-tr-none shadow-md shadow-primary/10 leading-relaxed max-w-lg">
                            ${texto}
                        </div>
                        
                    </div>
                    <div class="w-10 h-10 flex-shrink-0 rounded-full bg-center bg-cover mt-1 bg-white border border-slate-100 dark:border-none"
                        data-alt="Imagen de usuario" style="background-image: url('/static/user_avatar.png');">
                    </div>
                </div>`;
    return burbuja;
}

function textoareaJem(texto) {
    let burbuja = `    <div class="flex items-start gap-4 max-w-3xl">
                    <div class="w-10 h-10 flex-shrink-0 rounded-full bg-center bg-no-repeat mt-1 bg-white border border-slate-100 dark:border-none"
                        data-alt="Simu JEM"
                        style="background-image: url('/static/simu_jem_avatar.jpg'); background-size: 110%;">
                    </div>
                    <div class="flex flex-col gap-1.5">
                        <p class="text-[12px] font-semibold text-slate-500 dark:text-[#a09cc7] ml-1">Simu JEM</p>
                        <div
                            class="bg-white dark:bg-[#232136] text-slate-800 dark:text-slate-100 p-4 rounded-2xl rounded-tl-none shadow-sm border border-slate-100 dark:border-[#2d264a] leading-relaxed max-w-lg">
                            ${texto}
                        </div>
                        
                    </div>
                </div>`;
    return burbuja;
}

function textoareaCarga() {
    let burbuja = `    <div id="loading-bubble" class="flex items-start gap-4 max-w-3xl">
                    <div class="w-10 h-10 flex-shrink-0 rounded-full bg-center bg-no-repeat mt-1 bg-white border border-slate-100 dark:border-none"
                        data-alt="Simu JEM"
                        style="background-image: url('/static/simu_jem_avatar.jpg'); background-size: 110%;">
                    </div>
                    <div class="flex flex-col gap-1.5">
                        <p class="text-[12px] font-semibold text-slate-500 dark:text-[#a09cc7] ml-1">Simu JEM</p>
                        <div
                            class="bg-white dark:bg-[#232136] text-slate-800 dark:text-slate-100 p-4 rounded-2xl rounded-tl-none shadow-sm border border-slate-100 dark:border-[#2d264a] leading-relaxed max-w-lg flex items-center gap-1.5">
                            <div class="typing-dot"></div>
                            <div class="typing-dot"></div>
                            <div class="typing-dot"></div>
                        </div>
                        
                    </div>
                </div>`;
    return burbuja;
}




document.getElementById("enviarMensaje").addEventListener("click", async () => {
    document.getElementById("enviarMensaje").disabled = true;
    let mensaje = texto.value;

    // Add user message to history
    conversationHistory.push({ role: "user", content: mensaje });

    let burbuja = textoareaUsuario(mensaje);
    chatContainer.innerHTML += burbuja;
    texto.value = "";

    // Mostrar carga
    let carga = textoareaCarga();
    chatContainer.insertAdjacentHTML('beforeend', carga);
    chatContainer.scrollTop = chatContainer.scrollHeight;

    //peticion al n8n
    try {
        respuesta = await peticion(mensaje);
    } catch (e) {
        console.error(e);
        respuesta = "Lo siento, hubo un error al procesar tu mensaje.";
    }

    // Add assistant response to history
    if (respuesta) {
        conversationHistory.push({ role: "assistant", content: respuesta });
    }

    // Eliminar carga
    const loadingBubble = document.getElementById("loading-bubble");
    if (loadingBubble) {
        loadingBubble.remove();
    }

    let burbujaJem = textoareaJem(respuesta);
    chatContainer.innerHTML += burbujaJem;
    chatContainer.scrollTop = chatContainer.scrollHeight;

    document.getElementById("enviarMensaje").disabled = false;
})





const usuario = document.getElementById("usuario").innerText;
const sessionId = self.crypto.randomUUID();

async function peticion(mensaje) {
    peti = await fetch("https://tqjtb0g8-5678.use2.devtunnels.ms/webhook/b11c40e2-1bf8-4c46-b854-4e4ff79fc2be", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "id_usuario": sessionId,
            "Usuario": usuario,
            "mensaje": mensaje,
            "historial": conversationHistory
        })
    })
    datos = await peti.json()

    return (datos.output)

}