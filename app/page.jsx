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
  { id: 8, title: "Química" },
  { id: 9, title: "Editor de Texto" },
  { id: 10, title: "Laberinto" },
  { id: 11, title: "Editar Gráfico" },
  { id: 12, title: "ChatBot" },
  { id: 13, title: "Texturizador" },
  { id: 14, title: "Galería dinámica" },
  { id: 15, title: "Lector de arhivos" },
  { id: 16, title: "Zombie 2D" },
  { id: 17, title: "Convertidor"},
  { id: 18, title: "Bucle Host http" },
  { id: 19, title: "Eficiencia lectora" },
  { id: 20, title: "Live.io" },
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
