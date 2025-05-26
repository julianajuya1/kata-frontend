# Dispersión de Fondos - Frontend (React)
Este es el frontend para la kata dispersión de fondos a clientes, desarrollado con React y desplegado en Netlify. Esta interfaz permite visualizar gráficamente los totales dispersados por cliente, el cliente con mayor monto y la lista de transacciones.

El proyecto esta estruturado de manera modular para garantizar mantenibilidad, escalabilidad y reutilización de componentes. 

## Tecnologías 
React -> Framework de interfaz principal. 

Axios -> Llamadas HTTP del backend. 

Recharts -> Librería usada para el grafico de pastel interactivo. 

react-confetti -> visual atractivo para destacar cliente con mayor monto disersado. 

## Diseño 
Separaciòn de componentes para separar la lógica (los fetch de datos y manejos de estado) del la parte visual. 

Creación de cada componente en carpetas aprte para organización de codigo y estructura. 

Creación del servicio de api.js para centralizar el llamado a la API. 

## Funcionalidad

Visualización del cliente con mayor monto dispersado (con confetti celebratorio).

Gráfico tipo pastel que muestra el total dispersado por cliente.

Tabla de transacciones detalladas.

Estilos responsivos.

## Despliegue 
Se realiza el despliegue en Netlify ya que permmite su uso gratuitamente y la conexión con el repositorio y la sincronización dinámica con la rama 'main' de este. 
