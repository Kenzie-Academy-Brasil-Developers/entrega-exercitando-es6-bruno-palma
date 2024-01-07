import { tasks } from "./database.js";

// Função retorna um novo array com apenas as descrições das tarefas
const getTasksDescriptions = (tasksList) => {
  const tasksDescriptions = tasksList.map((currentTask) => currentTask.description);

  return tasksDescriptions;
};

// Função para filtrar tarefas por prioridade
const filterTasksByPriority = (tasksList, priority) => {
  const highPriorityTasks = tasksList.filter((currentTask) => currentTask.priority === priority);

  return highPriorityTasks;
};

// Função para obter uma task pelo seu id
const findTaskById = (tasksList, id) => {
  const taskById = tasksList.find((task) => task.id === id);

  return taskById;
};

const removeTask = (tasksList, id) => {
  const taskIndex = tasksList.findIndex((task) => task.id === id);

  if (taskIndex < 0) {
    return "Tarefa não encontrada.";
  } else {
    tasksList.splice(taskIndex, 1);
    return tasksList;
  }
};
