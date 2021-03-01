
import React, {useState} from 'react';
import axios from 'axios';
const AddUsuarioModal = ({onSuccess,setUsers}) => {
    const [validData, setValidData] = useState(false)
    const handleSubmit = async (e) => {
        const fields = [];
        e.preventDefault();
        const nombre  = e.target.name.value;
        const apellidos = e.target.lastName.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const confirmPassword = e.target.confirmPassword.value;

        if(isNaN(nombre) && nombre){
            fields.push(true)
        }else{
            fields.push(false);
        }

        if(isNaN(apellidos) && apellidos){
            fields.push(true)
        }else{
            fields.push(false);
        }

        if(isNaN(email) && email){
            fields.push(true)
        }else{
            fields.push(false);
        }

        if(password.length >= 8){
            fields.push(true)
        }else{
            fields.push(false);
        }

        if(confirmPassword >= 8 && confirmPassword===password){
            fields.push(true)
        }else{
            fields.push(false);
        }


        const todosCorrectos = fields.every((field) => field===true);


        if(todosCorrectos){
            setUsers(null);
            const alias = nombre.split(" ")[0] + " " + apellidos.split(" ")[0];
            try{
                const response = await axios.post('/api/usuarios', {
                    name: nombre,
                    alias,
                    lastName: apellidos,
                    email,
                    password,
                    role:'ADMIN_ROLE'
                });

                if(response){
                    document.querySelector('#addEmpleadoModal').style.display = 'none';
                    document.getElementsByClassName('modal-backdrop')[0].remove();
                }
            }
            catch (error){
                console.log(error)
            }
        }

    }
    return(
        <div className="modal fade" id="addEmpleadoModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel"
             aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Agregar empleado</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <div className="row">
                            <div className="col-md-12">
                                <form className="forms-sample" onSubmit={handleSubmit}>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputUsername1">Nombre</label>
                                        <input type="text" className="form-control" id="name"
                                               autoComplete="off" placeholder="Nombre" name="name"/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputPassword1">Apellidos</label>
                                        <input type="text" className="form-control" id="lastName"
                                               autoComplete="off" placeholder="Apellidos" name="lastName"/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputEmail1">Correo</label>
                                        <input type="email" className="form-control" id="email" name="email"
                                               placeholder="Correo"/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputPassword1">Contraseña</label>
                                        <input type="password" className="form-control" id="password"
                                               autoComplete="off" placeholder="Contraseña" name="password"/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputPassword1">Confirmar contraseña</label>
                                        <input type="password" className="form-control" id="confirmPassword"
                                               autoComplete="off" placeholder="Contraseña" name="confirmPassword"/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputPassword1">Imagen</label>
                                        <input type="file" name="image" id="image" className={"form-control"}/>
                                    </div>
                                    <button type="submit" className="btn btn-primary mr-2">Aceptar</button>
                                    <button className="btn btn-light" data-dismiss="modal" aria-label="Close">Cancelar</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddUsuarioModal;