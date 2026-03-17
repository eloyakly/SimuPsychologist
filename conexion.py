import sqlite3

def registrar_usuario(nombre, correo, contraseña):
    try:
        
        conn = sqlite3.connect('SimuPsychologist.db')
        print("Registrando usuario:", nombre, correo, contraseña)  # Debugging line
        cursor = conn.cursor()
        cursor.execute("INSERT INTO usuarios (nombre, correo, clave) VALUES (?, ?, ?)", (nombre, correo, contraseña))
        conn.commit()
        return "ok"
    except Exception as e:
        return f"Error al registrar usuario: {e}"
    finally:
        conn.close()

def iniciar_sesion(correo, contraseña):
    try:
        conn = sqlite3.connect('SimuPsychologist.db')
        cursor = conn.cursor()
        cursor.execute("SELECT * FROM usuarios WHERE correo = ? AND clave = ?", (correo, contraseña))
        user = cursor.fetchone()
        if user:
            return {
                "respuesta": "ok",
                "usuario": user[3],
            }  # Devuelve el usuario encontrado
        else:
            return {
                "respuesta": "Credenciales incorrectas"
            }
    except Exception as e:
        return {"respuesta": f"Error al iniciar sesión: {e}"}
    finally:
        conn.close()