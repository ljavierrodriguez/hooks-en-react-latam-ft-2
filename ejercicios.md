# Ejercicios React Hooks

### **useState**
1. **Contador con incremento y decremento:**
   - Crea un contador que se incremente y decremente al hacer clic en botones.
   - Añade un botón para reiniciar el contador a 0.

2. **Formulario controlado:**
   - Diseña un formulario con campos de nombre, email y contraseña.
   - Muestra en tiempo real los valores ingresados debajo del formulario.

3. **Cambiar color de fondo:**
   - Crea una lista de colores (por ejemplo: rojo, azul, verde).
   - Cambia el color de fondo de un `div` según el color seleccionado en un menú desplegable.

4. **Mostrar/Ocultar texto:**
   - Usa un botón para alternar entre mostrar y ocultar un texto.

5. **Carrito de compras:**
   - Añade productos a un carrito y muestra el total de productos seleccionados. (opcional)

---

### **useEffect**
1. **Contador con tiempo:**
   - Incrementa un contador automáticamente cada segundo al montar el componente.

2. **Fetch de datos:**
   - Realiza una llamada a una API al montar el componente y muestra los datos obtenidos. (optional)

3. **Título dinámico:**
   - Cambia el título de la pestaña del navegador según el estado de un contador.

4. **Eventos del teclado:**
   - Escucha y registra las teclas presionadas por el usuario.

5. **Limpiar efectos:**
   - Crea un cronómetro que empiece a contar al montar el componente y se detenga al desmontarlo. (opcional)


### **useCallback**
1. **Lista con filtrado:**
   - Filtra una lista de elementos mediante un input de búsqueda. Usa `useCallback` para memorizar la función de filtrado.

2. **Botón optimizado:**
   - Crea un contador con botones para incrementar y decrementar. Usa `useCallback` para evitar la recreación de funciones.

3. **Llamadas a API:**
   - Realiza un llamado a una API al presionar un botón y usa `useCallback` para memorizar la función que realiza el fetch. (opcional)

4. **Evitar renders innecesarios:**
   - Usa `useCallback` para evitar que un componente hijo se renderice cuando no es necesario.

5. **Sumar números:**
   - Implementa una función de suma de dos números y usa `useCallback` para optimizarla.

---

### **useReducer**
1. **Contador avanzado:**
   - Crea un contador que soporte acciones de incremento, decremento y reinicio.

2. **To-do List:**
   - Implementa una lista de tareas con acciones para añadir, eliminar y marcar como completadas.

3. **Carrito de compras avanzado:**
   - Añade y elimina productos del carrito, y calcula el total de la compra.

4. **Formulario con validación:**
   - Implementa un formulario donde el estado de los campos sea gestionado por `useReducer`.

5. **Cambiar tema:**
   - Alterna entre un tema oscuro y claro en una aplicación.

