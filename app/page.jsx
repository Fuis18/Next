import Main from "./components/Main";
import Project from "./components/Main/Project";

const pages = [
  { id: 1, title: "Conversion" },
  { id: 2, title: "Funciones" },
  { id: 3, title: "Repetidor" },
  { id: 4, title: "Calculadora" },
  { id: 5, title: "Fisica y Cicuitos" },
  { id: 6, title: "Relog" },
  { id: 7, title: "IA Text & Background" },
  { id: 8, title: "Juego Quimica" },
  { id: 9, title: "Editor de Texto" },
  { id: 10, title: "Juego 2" },
  { id: 11, title: "Editar fotos" },
  { id: 12, title: "ChatBot" },
  { id: 13, title: "Texturizador" },
  { id: 14, title: "Galería dinámica" },
  { id: 15, title: "Lector de arhivos" },
  { id: 16, title: "Juego 3" },
  { id: 17, title: "Lazy Load" },
  { id: 18, title: "Bucle Host http" },
  { id: 19, title: "Eficiencia lectora" },
  { id: 20, title: "Web Paint" },
  { id: 21, title: "Geometría" },
  { id: 22, title: "Horario" },
];

export default function Home() {
  return (
    <Main title="Todos los Proyectos" className="cont__flex">
      {pages.map((page) => (
        <Project key={page.id} id={page.id} title={page.title} />
      ))}
    </Main>
  );
}
