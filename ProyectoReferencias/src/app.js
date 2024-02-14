// app.js
let neverasData; // Variable para almacenar los datos originales de la lista de referencias

async function cargarNeveras() {
    try {
        const response = await fetch('neveras.json');
        neverasData = await response.json();
        actualizarListaReferencias(neverasData);
    } catch (error) {
        console.error('Error al cargar las neveras:', error);
    }
}

function buscarNeveras() {
    const referencia = document.getElementById('drawer').value.toLowerCase();

    const neveraEncontrada = neverasData.find(nevera =>
        nevera.referencia.toLowerCase() === referencia
    );

    actualizarInterfaz(neveraEncontrada);
}

function buscarNeverasEnTiempoReal() {
    const referencia = document.getElementById('drawer').value.toLowerCase();

    const referenciasFiltradas = neverasData.filter(nevera =>
        nevera.referencia.toLowerCase().startsWith(referencia)
    );

    actualizarListaReferencias(referenciasFiltradas);
}

function actualizarInterfaz(nevera) {
    const modal = document.getElementById('modal');
    const modalContent = document.getElementById('modal-content');
    const popup = document.getElementById('popup');

    if (nevera) {
        // Muestra los datos de la nevera en el modal
        modalContent.innerHTML = `
            <h2>¡Nevera Encontrada!</h2>
            <div class="column">
                <div class="card">
                    <div class="card-content">
                        <strong>País:</strong> <p>${nevera.pais}</p>
                    </div>
                </div>
                <div class="card">
                    <div class="card-content">
                        <strong>Referencia:</strong> <p>${nevera.referencia}</p>
                    </div>
                </div>
                <div class="card">
                    <div class="card-content">
                        <strong>Marca:</strong> <p>${nevera.marca}</p>
                    </div>
                </div>
                <div class="card">
                    <div class="card-content">
                        <strong>Capacidad Comercial:</strong> <p>${nevera.capacidad_comercial.join(', ')}</p>
                    </div>
                </div>
                <div class="card">
                    <div class="card-content">
                        <strong>Tipo de Refrigerador:</strong> <p>${nevera.tipo_refrigerador}</p>
                    </div>
                </div>
                <div class="card">
                    <div class="card-content">
                        <strong>Equipamiento:</strong> <p>${nevera.equipamiento}</p>
                    </div>
                </div>
                <div class="card">
                    <div class="card-content">
                        <strong>Color de Puerta:</strong> <p>${nevera.color_puerta}</p>
                    </div>
                </div>
                <div class="card">
                    <div class="card-content">
                        <strong>EAN:</strong> <p>${nevera.ean}</p>
                    </div>
                </div>
                <div class="card">
                    <div class="card-content">
                        <strong>Unidades por Contenedor:</strong> <p>${nevera.unidades_por_contenedor}</p>
                    </div>
                </div>
                <div class="card">
                    <div class="card-content">
                        <strong>Capacidad Neta:</strong> <p>${nevera.capacidad_neta.join(', ')}</p>
                    </div>
                </div>
                <div class="card">
                    <div class="card-content">
                        <strong>Especificaciones(1):</strong> <p>${nevera.especificaciones_uno.join(', ')}</p>
                    </div>
                </div>
                <div class="card">
                    <div class="card-content">
                        <strong>Especificaciones(2):</strong> <p>${nevera.especificaciones_dos.join(', ')}</p>
                    </div>
                </div>
                <div class="card">
                    <div class="card-content">
                        <strong>Compresor:</strong> <p>${nevera.compresor}</p>
                    </div>
                </div>
                <div class="card">
                    <div class="card-content">
                        <strong>Condensador:</strong> <p>${nevera.condensador}</p>
                    </div>
                </div>
                <div class="card">
                    <div class="card-content">
                        <strong>Dimensiones con Empaque:</strong> <p>${nevera.dimension_con_empaque.join(', ')}</p>
                    </div>
                </div>
                <div class="card">
                    <div class="card-content">
                        <strong>Dimensiones sin Empaque:</strong> <p>${nevera.dimension_sin_empaque.join(', ')}</p>
                    </div>
                </div>
                <div class="card">
                    <div class="card-content">
                        <strong>Controles y Sistema de Enfriamiento:</strong> <p>${nevera.controles_sist_enfriamiento.join(', ')}</p>
                    </div>
                </div>
                <div class="card">
                    <div class="card-content">
                        <strong>Exterior(1):</strong> <p>${nevera.exterior_uno.join(', ')}</p>
                    </div>
                </div>
                <div class="card">
                    <div class="card-content">
                        <strong>Exterior(2):</strong> <p>${nevera.exterior_dos.join(', ')}</p>
                    </div>
                </div>
                <div class="card">
                    <div class="card-content">
                        <strong>Despachador de Agua:</strong> <p>${nevera.despachador_agua.join(', ')}</p>
                    </div>
                </div>
                <div class="card">
                    <div class="card-content">
                        <strong>Relleno del Congelador (Puerta):</strong> <p>${nevera.relleno_congelador_puerta.join(', ')}</p>
                    </div>
                </div>
                <div class="card">
                    <div class="card-content">
                        <strong>Relleno del Congelador (Gabinete):</strong> <p>${nevera.relleno_congelador_gabinete.join(', ')}</p>
                    </div>
                </div>
                <div class="card">
                    <div class="card-content">
                        <strong>Relleno del Refrigerador (Puerta):</strong> <p>${nevera.relleno_refrigerador_puerta.join(', ')}</p>
                    </div>
                </div>
                <div class="card">
                    <div class="card-content">
                        <strong>Relleno del Refrigerador (Gabinete):</strong> <p>${nevera.relleno_refrigerador_gabinete.join(', ')}</p>
                    </div>
                </div>
                <div class="card">
                    <div class="card-content">
                        <strong>Accesorios:</strong> <p>${nevera.accesorios.join(', ')}</p>
                    </div>
                </div>
                <div class="card">
                    <div class="card-content">
                        <strong>Gráficos y Serígrafias:</strong> <p>${nevera.graficos_y_serigrafias.join(', ')}</p>
                    </div>
                </div>
                <div class="card">
                    <div class="card-content">
                        <strong>Etiquetas y Manual(1):</strong> <p>${nevera.etiquetas_y_manual_uno.join(', ')}</p>
                    </div>
                </div>
                <div class="card">
                    <div class="card-content">
                        <strong>Etiquetas y Manual(2):</strong> <p>${nevera.etiquetas_y_manual_dos.join(', ')}</p>
                    </div>
                </div>
                <div class="card">
                    <div class="card-content">
                        <strong>Paises de Venta:</strong> <p>${nevera.paises_de_venta.join(', ')}</p>
                    </div>
                </div>
                <div class="card">
                    <div class="card-content">
                        <strong>Cantidad de Gas Refrigerante (Gramos):</strong> <p>${nevera.cantidad_r600}</p>
                    </div>
                </div>           
            </div>
            <h2>Imágenes de la Referencia</h2>
            <div class="column">
                <div class="card">
                    <strong>Imágen del modelo:</strong><img src="${nevera.imagen}" alt="Imagen de la nevera">
                </div>
                <div class="card">
                    <strong>Imágen de la garantía:</strong><img src="${nevera.garantia}" alt="Imágen Garantía">
                </div>
                <div class="card">
                    <strong>Imágen del consumo energético:</strong><img src="${nevera.consumo_energetico}" alt="Consumo Energético">
                </div>
                <div class="card">
                    <strong>Imágen del diagrama eléctrico:</strong><img src="${nevera.diagrama_electrico}" alt="Diagrama Eléctrico">
                </div>
                <div class="card">
                    <strong>Imágen de la etiqueta ICONTEC:</strong><img src="${nevera.etiqueta_icontec}" alt="Etiqueta ICONTEC">
                </div>
                <div class="card">
                    <strong>Imágen de la etiqueta litraje:</strong><img src="${nevera.etiqueta_litraje}" alt="Etiqueta Litraje">
                </div>
                <div class="card">
                    <strong>Imágen del rotulado:</strong><img src="${nevera.etiqueta_rotulado}" alt="Etiqueta Rotulado">
                </div>
            </div>
            <button id="btn-modal" onclick="cerrarModal()">Listo</button>
        `;

        // Muestra el modal
        modal.style.display = 'block';

        // Oculta la ventana emergente si estaba visible
        popup.style.display = 'none';
    } else {
        // Muestra una ventana emergente si la referencia no fue encontrada
        const errorMessage = 'Referencia no encontrada';

        // Configura el contenido y muestra la ventana emergente
        popup.innerHTML = `
            <p>${errorMessage}</p>
            <button onclick="cerrarPopup()">Listo</button>
        `;
        popup.style.display = 'block';
    }
}


// Función para cerrar la ventana emergente
function cerrarPopup() {
    const popup = document.getElementById('popup');
    popup.style.display = 'none';
}

function actualizarListaReferencias(referencias) {
    const referencesList = document.getElementById('references');

    // Limpiar la lista existente
    referencesList.innerHTML = '';

    if (referencias.length > 0) {
        // Crear botones para cada referencia y agregarlos a la lista
        referencias.forEach(referencia => {
            const button = document.createElement('button');
            button.textContent = referencia.referencia;
            button.onclick = () => {
                document.getElementById('drawer').value = referencia.referencia;
                buscarNeverasEnTiempoReal(); // Realizar la búsqueda al hacer clic en una referencia
            };
            referencesList.appendChild(button);
        });
    } else {
        // Mostrar un mensaje si no hay referencias encontradas
        referencesList.innerHTML = '<p class="noreferencias">No se encontraron referencias.</p>';
    }
}

// Función para cerrar el modal
function cerrarModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
}

// Cargar las neveras al cargar la página
cargarNeveras();

// Agregar evento input al cuadro de búsqueda para buscar en tiempo real
document.getElementById('drawer').addEventListener('input', buscarNeverasEnTiempoReal);
