export interface Task {
  id?: number; // El signo de interrogación significa que es opcional (al crear una tarea nueva, aún no tiene ID)
  name: string;
  content: string;
}
