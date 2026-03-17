import sqlite3

# Conectar a la base de datos (se creará si no existe)
conn = sqlite3.connect('SimuPsychologist.db')
cursor = conn.cursor()

# Crear tabla usuarios
cursor.execute('''
CREATE TABLE IF NOT EXISTS usuarios (
    idusuarios INTEGER PRIMARY KEY AUTOINCREMENT,
    correo TEXT NOT NULL DEFAULT '',
    clave TEXT NOT NULL DEFAULT '',
    nombre TEXT NOT NULL DEFAULT ''
)
''')


# Guardar los cambios y cerrar la conexión
conn.commit()
conn.close()

print("Base de datos y tablas creadas exitosamente.")

def ver_usuarios():
    print("Usuarios registrados:")
    conn = sqlite3.connect('SimuPsychologist.db')
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM usuarios")
    usuarios = cursor.fetchall()
    for usuario in usuarios:
        print(usuario)

ver_usuarios()