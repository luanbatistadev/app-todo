class TarefasLista {
  private _tarefas: Tarefa[];

  constructor() {
    this._tarefas = [];
  }

  adiciona(tarefa: Tarefa) {
    this._tarefas.push(tarefa);
  }

  get tarefas() {
    return this._tarefas;
  }
}

const lista = new TarefasLista();
lista.adiciona(new Tarefa("Estudar TypeScript", false, new Date(2022,10,1)));
lista.adiciona(new Tarefa("Estudar JavaScript", false, new Date(2022,10,2)));
lista.adiciona(new Tarefa("Estudar Angular", false, new Date(2022,10,3)));
lista.tarefas.map(tarefa => console.log(tarefa.descricao));
console.log(lista.tarefas);
