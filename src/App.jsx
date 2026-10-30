
import { useMemo, useState, useEffect, useRef } from "react";
import carreras from "./carreras.json";
import "./index.css";

const intereses = [
  { id: "tecnologia", icono: "💻", titulo: "Tecnología", detalle: "Resolver problemas y programar" },
  { id: "creatividad", icono: "🎨", titulo: "Creatividad", detalle: "Diseñar e imaginar" },
  { id: "salud", icono: "🩺", titulo: "Salud y personas", detalle: "Ayudar a los demás" },
  { id: "negocios", icono: "📊", titulo: "Negocios", detalle: "Organizar y emprender" },
  { id: "ciencias", icono: "🏗️", titulo: "Ciencias y construcción", detalle: "Analizar y crear soluciones" },
  { id: "comunicacion", icono: "🎙️", titulo: "Comunicación", detalle: "Expresarte y contar historias" }
];

function App() {
  const [seleccionados, setSeleccionados] = useState([]);
  const [mostrarResultados, setMostrarResultados] = useState(false);
  const [busqueda, setBusqueda] = useState("");

  // Estado para controlar el modo oscuro (revisa si el usuario ya lo tenía guardado en su navegador)
  const [modoOscuro, setModoOscuro] = useState(() => {
    return localStorage.getItem("tema_vocacion") === "oscuro";
  });

  // Estado para mostrar confirmación visual cuando el usuario copia las recomendaciones
  const [copiado, setCopiado] = useState(false);

  // Referencia a la sección de resultados para hacer scroll automático suave
  const seccionResultadosRef = useRef(null);

  // Efecto que aplica o quita la clase 'dark' en la etiqueta raíz según el estado de modoOscuro
  useEffect(() => {
    if (modoOscuro) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [modoOscuro]);

  // Función para alternar entre modo claro y modo oscuro y guardarlo en el navegador
  function alternarModoOscuro() {
    setModoOscuro((modoActual) => {
      const nuevoModo = !modoActual;
      // Guarda la preferencia en localStorage para que se mantenga al recargar la página
      localStorage.setItem("tema_vocacion", nuevoModo ? "oscuro" : "claro");
      return nuevoModo;
    });
  }

  function alternarInteres(id) {
    setSeleccionados((actuales) =>
      actuales.includes(id)
        ? actuales.filter((interes) => interes !== id)
        : [...actuales, id]
    );

    setMostrarResultados(false);
  }

  const recomendaciones = useMemo(() => {
    return carreras
      .filter((carrera) => seleccionados.includes(carrera.area))
      .filter((carrera) =>
        carrera.nombre.toLowerCase().includes(busqueda.toLowerCase())
      );
  }, [seleccionados, busqueda]);

  function explorar() {
    setMostrarResultados(true);
    // Desplaza suavemente la pantalla hasta la sección de resultados
    setTimeout(() => {
      seccionResultadosRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }

  // Función interactiva para copiar la lista de recomendaciones al portapapeles
  function copiarRecomendaciones() {
    const listadoTexto = recomendaciones
      .map((c, index) => `${index + 1}. ${c.nombre} (${c.area}) - ${c.descripcion}`)
      .join("\n\n");

    const mensajeFinal = `🎓 Mis recomendaciones en VocaciónDO:\n\n${listadoTexto}`;

    navigator.clipboard.writeText(mensajeFinal).then(() => {
      setCopiado(true);
      // Quita el mensaje de '¡Copiado!' después de 2.5 segundos
      setTimeout(() => setCopiado(false), 2500);
    });
  }

  function reiniciar() {
    setSeleccionados([]);
    setBusqueda("");
    setMostrarResultados(false);
  }

  return (
    <main>
      <nav className="navbar">
        <a href="#inicio" className="logo">
          <span className="logo-icon">✦</span>
          Vocación<span className="logo-acento">DO</span>
        </a>

        <div className="nav-acciones">
          {/* Botón interactivo para cambiar el modo oscuro o claro */}
          <button
            type="button"
            className="boton-modo-oscuro"
            onClick={alternarModoOscuro}
            aria-label="Cambiar modo de color"
            title={modoOscuro ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
          >
            <span className="icono-tema">{modoOscuro ? "☀️" : "🌙"}</span>
            <span className="texto-tema">{modoOscuro ? "Modo Claro" : "Modo Oscuro"}</span>
          </button>

          <a className="nav-link" href="#orientacion">Explorar carreras ↗</a>
        </div>
      </nav>

      <section className="hero" id="inicio">
        <div className="hero-contenido">
          <span className="etiqueta">TU FUTURO COMIENZA AQUÍ</span>
          <h1>
            Tu talento tiene
            <br />
            <span>un camino.</span>
          </h1>
          <p>
            ¿Terminaste el bachillerato y todavía no sabes qué estudiar?
            ¡Tranquilo, que no hay que volverse loco! Descubre opciones
            profesionales según tus intereses y habilidades.
          </p>
          <a href="#orientacion" className="boton boton-principal">
            Encontrar mi vocación <span>→</span>
          </a>
          <div className="nota-hero">
            <span>🇩🇴</span>
            Hecho para impulsar el talento dominicano
          </div>
        </div>

        <div className="hero-visual" aria-label="Ilustración de estudiantes y educación">
          <div className="circulo circulo-grande"></div>
          <div className="circulo circulo-pequeno"></div>
          <div className="ilustracion">
            <span className="emoji-grande">🎓</span>
            <span className="emoji-flotante emoji-uno">💡</span>
            <span className="emoji-flotante emoji-dos">🚀</span>
            <span className="emoji-flotante emoji-tres">📚</span>
          </div>
          <div className="tarjeta-flotante">
            <span className="check">✓</span>
            <div>
              <strong>Tu futuro, tus decisiones</strong>
              <small>Explora lo que te apasiona</small>
            </div>
          </div>
        </div>
      </section>

      <section className="orientacion" id="orientacion">
        <div className="encabezado-seccion">
          <span className="etiqueta">VAMOS A DESCUBRIRLO</span>
          <h2>¿Qué es lo que más te gusta?</h2>
          <p>
            Elige una o varias áreas que te llamen la atención.
            No hay respuestas malas: estamos aquí para explorar.
          </p>
        </div>

        <div className="intereses-grid">
          {intereses.map((interes) => {
            const activo = seleccionados.includes(interes.id);

            return (
              <button
                type="button"
                key={interes.id}
                className={`interes-card ${activo ? "activo" : ""}`}
                onClick={() => alternarInteres(interes.id)}
                aria-pressed={activo}
              >
                <span className="interes-icono">{interes.icono}</span>
                <span className="interes-titulo">{interes.titulo}</span>
                <span className="interes-detalle">{interes.detalle}</span>
                <span className="interes-check">{activo ? "✓" : "+"}</span>
              </button>
            );
          })}
        </div>

        <div className="acciones">
          <p>
            {seleccionados.length === 0
              ? "Selecciona al menos un área para comenzar."
              : `${seleccionados.length} ${
                  seleccionados.length === 1 ? "área seleccionada" : "áreas seleccionadas"
                }`}
          </p>
          <button
            className="boton boton-principal"
            onClick={explorar}
            disabled={seleccionados.length === 0}
          >
            Ver mis recomendaciones →
          </button>
        </div>
      </section>

      {mostrarResultados && (
        <section className="resultados" id="resultados" ref={seccionResultadosRef} aria-live="polite">
          <div className="encabezado-resultados">
            <div>
              <span className="etiqueta">TUS POSIBILIDADES</span>
              <h2>¡Mira lo que puedes lograr!</h2>
              <p>Estas carreras coinciden con las áreas que elegiste.</p>
            </div>

            <div className="acciones-resultados">
              {/* Botón interactivo para copiar las recomendaciones al portapapeles */}
              {recomendaciones.length > 0 && (
                <button
                  type="button"
                  className="boton boton-copiar"
                  onClick={copiarRecomendaciones}
                  title="Copiar lista de carreras"
                >
                  {copiado ? "✓ ¡Copiado!" : "📋 Copiar lista"}
                </button>
              )}

              <button className="boton boton-secundario" onClick={reiniciar}>
                Volver a empezar ↻
              </button>
            </div>
          </div>

          {recomendaciones.length > 0 && (
            <input
              className="buscador"
              type="search"
              placeholder="Buscar una carrera por nombre..."
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
              aria-label="Buscar carrera por nombre"
            />
          )}

          {recomendaciones.length === 0 ? (
            <div className="sin-resultados">
              <span>🔎</span>
              <h3>No encontramos coincidencias</h3>
              <p>
                Prueba otra búsqueda o selecciona diferentes áreas de interés.
              </p>
            </div>
          ) : (
            <div className="carreras-grid">
              {recomendaciones.map((carrera) => (
                <article className="carrera-card" key={carrera.id}>
                  <div className="carrera-icono">{carrera.icono}</div>
                  <span className="carrera-area">
                    {intereses.find((i) => i.id === carrera.area)?.titulo}
                  </span>
                  <h3>{carrera.nombre}</h3>
                  <p>{carrera.descripcion}</p>

                  <h4>Habilidades que ayudan</h4>
                  <ul>
                    {carrera.habilidades.map((habilidad) => (
                      <li key={habilidad}>{habilidad}</li>
                    ))}
                  </ul>

                  <h4>Posibles salidas profesionales</h4>
                  <div className="etiquetas-salidas">
                    {carrera.salidas.map((salida) => (
                      <span key={salida}>{salida}</span>
                    ))}
                  </div>

                  <blockquote>“{carrera.mensaje}”</blockquote>
                </article>
              ))}
            </div>
          )}

          <p className="aviso">
            Estas recomendaciones son orientativas, no una evaluación
            psicométrica. Investiga los planes de estudio, los requisitos
            de ingreso y tus posibilidades antes de decidir.
          </p>
        </section>
      )}

      <footer>
        <a href="#inicio" className="logo">
          ✦ Vocación<span className="logo-acento">DO</span>
        </a>
        <p>Tu talento, tu futuro. ¡Dale pa' lante! 🇩🇴</p>
        <small>Proyecto educativo · Orientación vocacional digital</small>
      </footer>
    </main>
  );
}

export default App;
