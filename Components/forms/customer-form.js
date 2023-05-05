export class CustomerForm extends HTMLElement{
    constructor(){
        super();
        this.render();
    }
    render(){
        this.innerHTML = /* html */ `
            <div class="card">
            <h5 class="card-header">Registro de clientes</h5>
                <div class="card-body">
                <div class="container">
                    <div class="row g-3">
                        <div class="col-12">
                            <form id = "frmData">
                                <div class="row g-3">
                                    <div class="col-4">
                                    <label for="createdAt" class="form-label">Fecha registro</label>
                                    <input type="date" class="form-control" id="createdAt" name="createdAt">                  
                                </div>
                                    <div class="col-4">
                                        <label for="nombres" class="form-label">Nombre del Cliente</label>
                                        <input type="text" class="form-control" id="nombres" name="nombres">
                                    </div>
                                    <div class="col-4">
                                        <label for="apellidos" class="form-label">Apellidos</label>
                                        <input type="text" class="form-control" id="apellidos" name="apellidos">                  
                                    </div>
                                </div>
                                <div class="row g-3">
                                    <div class="col-4">
                                        <label for="email" class="form-label">Email cliente</label>
                                        <input type="email" class="form-control" id="email" name="email">
                                    </div>
                                    <div class="col-4">
                                        <label for="nroMovil" class="form-label">Nro Movil</label>
                                        <input type="text" class="form-control" id="nroMovil" name="nroMovil">                  
                                    </div>
                                    <div class="col-4">
                                    <label for="fechaNacimiento" class="form-label">Fecha Nacimiento</label>
                                    <input type="date" class="form-control" id="fechaNacimiento" name="fechaNacimiento">                  
                                </div>
                                </div>
                            </form>                         
                        </div>
                    </div>
                </div>
                <div class="container mt-4 text-center">
                    <a href="#" class="btn btn-primary"  id="btnNuevo">Nuevo cliente</a>
                    <a href="#" class="btn btn-danger" id="btnCancelar">Cancelar registro</a>
                    <a href="#" class="btn btn-success" id="btnGuardar">Guardar cliente</a>
                    <a href="#" class="btn btn-warning" id="btnEditar">Editar cliente</a>
                    <a href="#" class="btn btn-danger" id="btnEliminar">Eliminar cliente</a>
                </div>
                </div>
        </div>
        `
    }
}
customElements.define("customer-form",CustomerForm);