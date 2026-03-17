from flask import Flask, render_template,request
import conexion as c

import mimetypes
mimetypes.init()
mimetypes.add_type('application/javascript', '.js')
mimetypes.add_type('text/css', '.css')


app = Flask(__name__)


@app.route("/")
def index():
    return render_template("index.html")

#Enpoint para registrar un nuevo usuario (el frontend)
@app.route("/registrar")
def registrar():
    return render_template("registrar.html")
    



#Enpoint para registrar un nuevo usuario (el backend)
@app.route("/registrar_usuario", methods=["POST"])
def registrar_usuario():
    nombre=request.form["nombre"]
    correo=request.form["correo"]
    clave=request.form["clave"]
    resultado = c.registrar_usuario(nombre, correo, clave)
    if resultado == "ok":
        return login()
    return resultado

#Enpoint para iniciar sesión (el frontend)
@app.route("/login")
def login():
    return render_template("login.html")
#Enpoint para iniciar sesión (el backend)
@app.route("/iniciar_sesion", methods=["POST"])
def iniciar_sesion():
    correo=request.form["correo"]
    clave=request.form["clave"]

    resultado = c.iniciar_sesion(correo, clave)
    print(resultado["respuesta"])  
    if resultado["respuesta"] == "ok":
        return render_template("agent.html", resultado=resultado["usuario"])
    return render_template("login.html", error=resultado["respuesta"])



if __name__ == "__main__":
    app.run(debug=True,threaded=True,port=5000)