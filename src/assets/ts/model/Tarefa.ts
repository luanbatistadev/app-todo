class Tarefa{

  private _descricao: string;
  private _concluida: boolean;
  private _data: Date;

  constructor(descricao: string, concluida: boolean, data: Date){
    this._descricao = descricao;
    this._concluida = concluida;
    this._data = data;
  }

  get descricao(){
    return this._descricao;
  }

  get data(){
    return this._data;
  }
  
  get concluida(){
    return this._concluida;
  }
}
