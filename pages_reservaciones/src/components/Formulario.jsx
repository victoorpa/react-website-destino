import React, { useState } from 'react';

const Formulario = () => {
    const [nombre, setNombre] = useState('');
    const [apellidos, setApellidos] = useState('');
    const [celular, setCelular] = useState('');
    const [dni, setDni] = useState('');
    const [correo, setCorreo] = useState('');
    const [fecha, setFecha] = useState('');
    const [adultos, setAdultos] = useState(1);
    const [ninos, setNinos] = useState(0);
    const [destino, setDestino] = useState('');
    const [paquete, setPaquete] = useState('');
    const [aceptar, setAceptar] = useState(false);
    const [errors, setErrors] = useState({});

    const regexTexto = /^[a-zA-ZÁÉÍÓÚñ\s]+$/;
    const regexNumero = /^[0-9]{1,9}$/;
    const regexCorreo = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,6}$/;
    const regexFecha = /^(0[1-9]|[12][0-9]|3[01])[-\/](0[1-9]|1[0-2])[-\/](\d{4})$|^(\d{4})[-\/](0[1-9]|1[0-2])[-\/](0[1-9]|[12][0-9]|3[01])$/;

    const realizarEnvio = (e) => {
        e.preventDefault();

        // Validaciones
        const nuevosErrores = {};

        if (!nombre || !regexTexto.test(nombre)) {
            nuevosErrores.nombre = 'Nombre inválido';
        }

        if (!apellidos || !regexTexto.test(apellidos)) {
            nuevosErrores.apellidos = 'Apellidos inválidos';
        }

        if (!celular || !regexNumero.test(celular)) {
            nuevosErrores.celular = 'Número de celular inválido';
        }

        if (!dni || !regexNumero.test(dni)) {
            nuevosErrores.dni = 'DNI/Pasaporte inválido';
        }

        if (!correo || !regexCorreo.test(correo)) {
            nuevosErrores.correo = 'Correo electrónico inválido';
        }

        if (!fecha || !regexFecha.test(fecha)) {
            nuevosErrores.fecha = 'Fecha inválida';
        }

        if (!destino) {
            nuevosErrores.destino = 'Debe seleccionar un destino';
        }

        if (!paquete) {
            nuevosErrores.paquete = 'Debe seleccionar un paquete';
        }

        if (!aceptar) {
            nuevosErrores.aceptar = 'Debe aceptar los términos y condiciones';
        }

        setErrors(nuevosErrores);

        if (Object.keys(nuevosErrores).length === 0) {
            alert('Se ha reservado correctamente con sus datos ingresados');
            console.log(`Datos ingresados: { ${nombre}, ${apellidos}, ${celular}, ${dni}, ${correo}, ${fecha}, ${adultos} adultos, ${ninos} niños, ${destino}, ${paquete}, Aceptado: ${aceptar} }`);
        } else {
            alert('No se ha ingresado datos válidos');
        }
    };

    return (
        <>
            <section>
                <div className="fondo">
                    <div className="contenedor-form login">
                        <h2>Venta de paquetes turísticos</h2>
                        <form id="reservation-form" onSubmit={realizarEnvio}>
                            <div className="form-group">
                                <input
                                    id="name"
                                    type="text"
                                    placeholder="Nombre"
                                    required
                                    value={nombre}
                                    onChange={(e) => setNombre(e.target.value)}
                                />
                                {errors.nombre && <p>{errors.nombre}</p>}
                            </div>

                            <div className="form-group">
                                <input
                                    type="text"
                                    placeholder="Apellido"
                                    required
                                    value={apellidos}
                                    onChange={(e) => setApellidos(e.target.value)}
                                />
                                {errors.apellidos && <p>{errors.apellidos}</p>}
                            </div>

                            <div className="form-group">
                                <input
                                    type="text"
                                    placeholder="Dni/Pasaporte"
                                    required
                                    value={dni}
                                    onChange={(e) => setDni(e.target.value)}
                                />
                                {errors.dni && <p>{errors.dni}</p>}
                            </div>

                            <div className="form-group">
                                <input
                                    type="text"
                                    placeholder="Correo electrónico"
                                    required
                                    value={correo}
                                    onChange={(e) => setCorreo(e.target.value)}
                                />
                                {errors.correo && <p>{errors.correo}</p>}
                            </div>

                            <div className="form-group">
                                <input
                                    type="text"
                                    placeholder="Número de celular"
                                    required
                                    value={celular}
                                    onChange={(e) => setCelular(e.target.value)}
                                />
                                {errors.celular && <p>{errors.celular}</p>}
                            </div>

                            <div className="form-group">
                                <input
                                    type="date"
                                    className="input"
                                    required
                                    value={fecha}
                                    onChange={(e) => setFecha(e.target.value)}
                                />
                                {errors.fecha && <p>{errors.fecha}</p>}
                            </div>

                            <div className="form-group">
                            <button type="button" id="mostrarPersonas">Cantidad de personas</button>
                            <div id="detallesPersonas">
                                <label htmlFor="adultos">Adultos:</label>
                                <input
                                    type="number"
                                    id="adultos"
                                    name="adultos"
                                    min="0"
                                    value={adultos}
                                    onChange={(e) => setAdultos(e.target.value)}
                                />
                                <label htmlFor="ninos">Niños:</label>
                                <input
                                    type="number"
                                    id="ninos"
                                    name="ninos"
                                    min="0"
                                    value={ninos}
                                    onChange={(e) => setNinos(e.target.value)}
                                />
                            </div>
                            </div>

                            <div className="form-group">
                                <select
                                    id="destino"
                                    name="destino"
                                    required
                                    value={destino}
                                    onChange={(e) => setDestino(e.target.value)}
                                >
                                    <option value="">Destino</option>
                                    <option value="paracas">Líneas de Paracas</option>
                                    <option value="nazca">Líneas de Nazca - Ica</option>
                                    <option value="machu_picchu">Machu Picchu - Cuzco</option>
                                    <option value="chan_chan">Chan Chan - Trujillo</option>
                                    <option value="montaña_7_colores">La montaña de 7 colores - Cuzco</option>
                                    <option value="cañon_colca">Cañón del Colca - Arequipa</option>
                                    <option value="lima_tour">Lima Tour - Lima</option>
                                    <option value="lago_titicaca">Lago Titicaca - Puno</option>
                                </select>
                                {errors.destino && <p>{errors.destino}</p>}
                            </div>

                            <div className="form-group">
                                <select
                                    name="paquete"
                                    required
                                    value={paquete}
                                    onChange={(e) => setPaquete(e.target.value)}
                                >
                                    <option value="">Paquete</option>
                                    <option value="basico">Paquete Básico S/ 250</option>
                                    <option value="estandar">Paquete Estándar S/ 450</option>
                                    <option value="premium">Paquete Premium S/ 850</option>
                                </select>
                                {errors.paquete && <p>{errors.paquete}</p>}
                            </div>

                            <div className="form-group">
                                <label>
                                    <input
                                        type="checkbox"
                                        checked={aceptar}
                                        onChange={(e) => setAceptar(e.target.checked)}
                                    />
                                    Acepto los términos y condiciones
                                </label>
                                {errors.aceptar && <p>{errors.aceptar}</p>}
                            </div>

                            <button type="submit" className="btn">
                                Reservar
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Formulario;