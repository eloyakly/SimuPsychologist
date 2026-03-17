# 🚀 SimuPsychologist

> Simulador inteligente de atención psicológica que simula la cita con un psicologo mediante n8n.

[![Status](https://img.shields.io/badge/Status-En%20Desarrollo-green)]()
[![n8n](https://img.shields.io/badge/Automation-n8n-FF6D5B?logo=n8n&logoColor=white)]()

## 📌 Descripción

**SimuPsychologist** es una plataforma diseñada para replicar la experiencia de una consulta inicial de un consultorio psicológico.

El sistema permite a los usuarios interactuar con una interfaz moderna donde pueden probar el flujo de una cita simulada. Mientras el **Frontend** captura la interacción, el **Backend en Flask** gestiona el registro de usuarios y la persistencia de datos, y el **Bot de n8n** se encarga de procesar las solicitudes de manera asíncrona y eficiente.

## 🛠️ Tecnologías Utilizadas

| Capa               | Tecnología                                                                                                                                                                                               |
| ------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Backend**        | ![Flask](https://img.shields.io/badge/Flask-000?logo=flask&logoColor=white) ![Python](https://img.shields.io/badge/Python-3776AB?logo=python&logoColor=white)                                            |
| **Frontend**       | ![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5) ![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3) ![JS](https://img.shields.io/badge/JS-F7DF1E?logo=javascript&logoColor=black) |
| **Automatización** | ![n8n](https://img.shields.io/badge/n8n-FF6D5B?logo=n8n&logoColor=white)                                                                                                                                 |

## 🤖 El Bot (n8n)

El núcleo de la lógica de negocio reside en un flujo de trabajo automatizado:

- ✅ **Escucha Activa:** Utiliza nodos de **Webhook** para recibir peticiones inmediatas desde el frontend.
- ✅ **Lógica de Simulación:** Procesa los datos de la "cita" y valida la disponibilidad o el tipo de consulta.
- ✅ **Integración:** Capacidad de enviar confirmaciones y conectar con servicios externos en tiempo real.
- ✅ **Respuesta:** Devuelve un estado de éxito o error al servidor Flask para actualizar la UI del usuario.

## ⚙️ Requisitos de Automatización

Este proyecto utiliza **n8n** para la orquestación de eventos.

1. Instala n8n (vía Desktop, Docker o Cloud).
2. Importa el archivo `Psicologo n8n.json` (ubicado en la carpeta `/psicolog`) en tu instancia de n8n.
3. Asegúrate de configurar las URL de Webhook en tu archivo `.env` o directamente en el código de Flask para que apunten a tu instancia activa de n8n.

## 🚀 Instalación y Uso

1. **Clona el repositorio:**
   ```bash
   git clone [https://github.com/eloyakly/SimuPsychologist.git](https://github.com/eloyakly/SimuPsychologist.git)
   cd SimuPsychologist
   ```

python -m venv venv
source venv/bin/activate # En Windows: venv\Scripts\activate
pip install -r requirements.txt

python app.py
