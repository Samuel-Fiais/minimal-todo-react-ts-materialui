# minimal-todo-react-ts-materialui
- Aplicativo simples de lista de tarefas

- O projeto "To-Do List" consiste nos seguintes componentes:

## Componentes

- **Alert:** Um componente responsável por exibir alertas gerais na aplicação.

- **CardInfo:** Um componente que exibe informações simples em um card, incluindo um título e um valor. O título e o valor são passados por meio do componente App.tsx.

- **Form:** Um formulário simples que permite ao usuário inserir uma descrição e uma tag para adicionar uma nova tarefa. Ele também possui um botão para adicionar a tarefa. O Form recebe uma função onClick para lidar com a adição de tarefas, bem como a lista de tarefas (tasks) passada pelo componente App.tsx.

- **Resume:** Um componente que exibe um resumo das tarefas usando três instâncias do componente CardInfo. O componente App.tsx passa os números a serem exibidos em cada CardInfo.

- **TaskEditModal:** Um modal que permite ao usuário editar a descrição de uma tarefa. Ele recebe funções para fechar o modal e controlar o estado do modal. Essas funções são passadas pelo componente TaskItem.

- **TaskItem:** Um componente que representa uma tarefa individual. Ele contém uma caixa de seleção, descrição, tag e um botão para excluir a tarefa. O componente TaskItem recebe as seguintes funções do componente TaskList: changeStatusTask, deleteTask e editTask. Ele também recebe a função editTask do componente TaskEditModal para permitir a edição da descrição da tarefa.

- **TaskList:** Um componente que exibe todas as tarefas em forma de cards. Ele recebe a lista de tarefas (tasks) do componente App.tsx e passa as funções changeStatusTask, deleteTask e editTask para cada instância do componente TaskItem.

## Funções

- No componente App.tsx, todas as funções relacionadas às tarefas são gerenciadas, juntamente com a variável tasks e a função setTasks fornecida pelo hook useState. O componente App.tsx também passa os números necessários para os componentes CardInfo dentro do componente Resume.

- A função onClick para adicionar tarefas é passada para o componente Form, juntamente com a lista de tarefas. O Form valida os dados inseridos pelo usuário e adiciona a tarefa à lista quando o botão é clicado.

- O componente TaskList recebe a lista de tarefas (tasks) e as funções changeStatusTask, deleteTask e editTask. Ele repassa essas funções para cada instância do componente TaskItem. No TaskItem, a função changeStatusTask é usada para atualizar o status da tarefa, a função deleteTask é usada para excluir a tarefa e a função editTask é usada para permitir a edição da descrição da tarefa.

- A função editTask também é passada para o componente TaskEditModal, juntamente com outras funções responsáveis pelo controle do modal.

- Essa arquitetura de fluxo permite a interação e comunicação eficiente entre os componentes do seu projeto "To-Do List". O App.tsx atua como o componente principal, gerenciando o estado das tarefas e passando dados e funções relevantes para os componentes filhos.

- O componente Form é responsável por permitir que o usuário adicione novas tarefas, validando os dados inseridos e chamando a função onClick fornecida pelo App.tsx para adicionar a nova tarefa à lista.

- O TaskList exibe todas as tarefas presentes na lista, passando as funções changeStatusTask, deleteTask e editTask para cada instância do TaskItem. Isso permite que o usuário marque as tarefas como concluídas, exclua tarefas ou edite a descrição das tarefas.

- O TaskItem representa uma tarefa individual, exibindo sua descrição, tag e status de conclusão. Ele usa a função changeStatusTask para atualizar o status da tarefa, a função deleteTask para excluir a tarefa e a função editTask para abrir o TaskEditModal e permitir a edição da descrição da tarefa.

- O TaskEditModal é um modal que exibe um formulário para editar a descrição de uma tarefa. Ele recebe a função editTask do TaskItem para atualizar a descrição da tarefa e também possui funções para controlar o estado do modal, como fechar o modal quando a edição é concluída.

- Em resumo, o fluxo de dados e a interação entre os componentes ocorrem da seguinte forma: o App.tsx possui o estado e as funções relacionadas às tarefas, passando dados e funções relevantes para os componentes filhos. Os componentes filhos, por sua vez, utilizam esses dados e funções para exibir as tarefas, permitir a interação do usuário e atualizar o estado das tarefas conforme necessário.