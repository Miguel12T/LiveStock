<template>
    <div class="container" id="label">
         
        <ol class="breadcrumb">
            <li class="breadcrumb-item active">Sección de Vacas</li>
        </ol>

       <!--Boton para abrir el modal de ingresar nuevo registro-->
        <button @click="modificar=false; abrirModal(); showDialog(false);" id="btnRaza" type="button" class="btn btn-outline-primary mb-3">
        Agregar Vacas
        </button>

        <!--Modal para ingresar nuevo registro-->
        <div class="modal" :class=" {mostrar:modal} ">
        <div class="modal-dialog modal-dialog-scrollable">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">{{tituloModal}}</h5>
                <button @click="cerrarModal();" type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
            <form enctype="multipart/form-data">
        
                <div class="mb-3">
                    <label for="stock">Nombre</label>
                    <input v-model="vaca.nombre" type="number" min="1" max="9999" class="form-control" id="nombre" placeholder="Nombre">
                </div>
                 <div class="mb-3">
                    <label for="id_raza">Razas</label>
                    <select v-model="razaSeleccionada" class="form-select" id="id_raza" placeholder="Selecione una Raza" required>
                         <option v-for="raza in razas.data" :key="raza.id" :value="raza.id">
                            {{ raza.raza }} 
                         </option>    
                  </select>
                </div>
                 <div class="mb-3">
                    <label for="idgenero">Genero</label>
                    <select v-model="gerneoSeleccionado" class="form-select" id="idgenero" placeholder="Selecione un Genero">
                        <option v-for="genero in generos" :key="genero.id" :value="genero.id">
                            {{ genero.genero }}
                        </option>
                    </select>
                </div>
                <div class="mb-3">
                    <label for="idtipo">Tipo</label>
                    <select v-model="tipoSeleccionado" class="form-select" id="idgenero" placeholder="Selecione un Genero">
                        <option v-for="tipo in tipos" :key="tipo.id" :value="tipo.id">
                            {{ tipo.tipo }}
                        </option>
                    </select>
                </div>
                <div class="mb-3">
                <h6 class="text-modal">Selecione foto</h6>
                    <div  v-show="see" id="imgprev">
                        <img :src="vistaImagen" alt="" :srcset="'/imagen/'+ vaca.imagen" id="icono">
                    </div>
                        <input  type="file"  class="form-control-file" @change="imagen" name="imagen" id="btnimagen" @click="showDialog(true)" >
                        <!-- <input type="button" value="Archivo"  class="btn btn-outline-primary" id="btnArchivo" @click="showDialog(true)">  -->
                    </div>
                    </form>
            </div>
            <div class="modal-footer">
                <button @click="cerrarModal();" type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                <button @click="guardar();" type="button" class="btn btn-primary">Guardar</button>
            </div>
            </div>
        </div>

   </div>

<div class="card">
    <div class="col-2 md-1" id="filas">
        <select class="form-select" v-model="pagination.per_page" @change="listar();"  placeholder="3 Filas">
            <option value="3">3 Filas</option>
            <option value="5">5 Filas</option>
            <option value="10">10 Filas</option>
            <option value="25">25 Filas</option>
        </select>
        </div>
    <div class="card-body">
        <table class="table table-dark table-hover" id="razas">
            <thead> 
                <tr>
                <th scope="col" class="text-center">N°</th>
                <th scope="col" class="text-center">Imagen</th>
                <th scope="col" class="text-center">Raza</th>
                <th scope="col" class="text-center">Genero</th>
                <th scope="col" class="text-center">Nombre</th>
                <th scope="col" class="text-center">Tipo</th>
                <th scope="col" colspan="3" class="text-center">Acciones</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(vaca, item) in vacas.data" :key="vaca.id">
                    <th class="text-center" scope="row">{{item += 1}}</th>
                    <td id="centrador" class="text-center">
                        <img id="imagenR" :src="'/imagen/'+ vaca.imagen" class="img-responsive">
                    </td>
                    <td class="text-center">{{vaca.raza}}</td>
                    <td class="text-center">{{vaca.genero}}</td>
                    <td class="text-center">{{vaca.nombre}}</td>
                    <td class="text-center">{{vaca.tipo}}</td>
                    <td class="text-center">
                        <button @click="modificar=true; abrirModal(vaca); showDialog(true);" class="btn btn-outline-warning"><i class="fas fa-edit"></i></button>
                        <button @click="vender(vaca.id);" class="btn btn-outline-success"><i class="fa-solid fa-money-check-dollar"></i></button>
                        <button @click="fallecida(vaca.id);" class="btn btn-outline-light"><i class="fa-solid fa-skull"></i></button>
                    </td>
                </tr>
            </tbody>
        </table>
        </div>
        <div class="card-body">
            <div class="col-7 md-2" id="mensajeRegistros">
             Mostrando registros del {{vacas.from}} al {{vacas.to}} de un total de {{vacas.total}} registros
            </div>
        </div>
           <nav id="paginador">
                <ul class="pagination">
                    <li class="page-item" :class=" {disabled:pagination.page==1} ">
                    <a class="page-link" tabindex="-1" aria-disabled="true" @click="pagination.page--; listar()">Anterior</a>
                    </li>
                    <li class="page-item" v-for="n in paginas" :key="n" :class=" {active:pagination.page==n} ">
                    <a class="page-link" @click="pagination.page=n; listar()">{{n}}</a>
                    </li>
                    <li class="page-item" :class=" {disabled:pagination.page==vacas.last_page} ">
                    <a class="page-link" @click="pagination.page++; listar()">Siguiente</a>
                    </li>
                </ul>
            </nav>
      </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            vaca:{
                imagen:'',
                id_raza:'',
                nombre:'',
                fallecida:'',
                idgenero:'',
                vendido:'',
                idtipo:'',
                valor_Vendido:0,
            },
            file:'',
            see:false,
            razaSeleccionada: {},
            razas:[],
            gerneoSeleccionado:{},
            generos:[],
            tipoSeleccionado:{},
            tipos:[],
            id:0,
            modificar:true,
            modal:0,
            tituloModal:'',
            vacas:[], //aqui se guardan toda la listas de los articulos
            errores:{},
            pagination:{
                page:1,
                per_page:3,
            },
            paginas:[],
            imagenMiniatura:'',
        }
    },
    
       methods: {
        async listar(){   
            const res = await axios.get('/api/vacas', {params: this.pagination});
            this.vacas = res.data;
            this.listarPaginas();
        },
        listarPaginas(){
            const n = 2
            let arrayN=[]
            let ini = this.pagination.page - 2
            if (ini<1) {
                ini = 1
            }
            let fin = this.pagination.page + 2
            if (fin>this.vacas.last_page) {
                fin = this.vacas.last_page
            }
            for (let i = ini; i <= fin; i++){
                arrayN.push(i);
            }
            this.paginas = arrayN
        },
         async guardar(){
             try {
                    if (this.modificar) {
                        if (this.vaca.id_raza == '') {
                        this.$swal({icon:'warning', title:'¡Advertencia!', text:'Debe llenar los camposT'})
                    }else{
                        var datos = new  FormData();
                        datos.append('imagen', this.vaca.imagen);
                        datos.append('id_raza', this.razaSeleccionada);
                        datos.append('idgenero', this.gerneoSeleccionado);
                        datos.append('nombre', this.vaca.nombre);
                        datos.append('idtipo', this.tipoSeleccionado);
                        datos.append('_method', 'PUT');
                        axios.defaults.withCredentials = true;
                        axios.post('/api/vacas/'+ this.id, datos,
                        {
                            headers: {
                                'Content-Type': 'multipart/form-data'
                            },
                        })
                        .then(response=>{ 
                         const ToastSession = this.$swal.mixin({
                            toast: true,
                            position: "center",
                            showConfirmButton: false,
                            timer: 1000,
                            timerProgressBar: true,
                        });
                        ToastSession.fire({
                            icon: "success",
                            title: "Actualizando res...",
                        })
                            this.cerrarModal(); 
                            this.listar();
                        })
                        .catch(error=>{
                            this.$swal({icon:'warning', title:'¡Advertencia!', text:'Ya hay un registro existente'})
                        });
                        }
                }else{
                    if (this.vaca.nombre == ''||this.vaca.imagen == '') {
                        this.$swal({icon:'warning', title:'¡Advertencia!', text:'Debe llenar los campos'})
                    }else{
                        var datos = new  FormData();
                        datos.append('imagen', this.vaca.imagen);
                        datos.append('id_raza', this.razaSeleccionada);
                        datos.append('idgenero', this.gerneoSeleccionado);
                        datos.append('nombre', this.vaca.nombre);
                        datos.append('idtipo', this.tipoSeleccionado);
                        datos.append('valor_Vendido', this.vaca.valor_Vendido);
                        axios.defaults.withCredentials = true;
                        axios({
                            method: 'post',
                            headers: {
                                'Content-Type': 'multipart/form-data'
                            },
                            url: '/api/vacas/',
                            data: datos
                        })
                        .then(response=>{ 
                            this.$swal({icon:'success', title:'Exito!', text:'Se agrego correctamente la res'})
                            this.cerrarModal();
                            this.listar();
                        })
                        .catch(error=>{
                            this.$swal({icon:'warning', title:'¡Advertencia!', text:'Ya hay un registro existente'})
                        });
                    }
                }
                this.listar();
            } catch (error) {  
                this.$swal({
                    title: '¡Error!',
                    text: 'Error del sistema, contactese con soporte',
                    icon: 'error',
                    confirmButtonText: 'Ok'
                    })
            } 
    },
        vender(id){
            try {
                this.$swal({
                    title: '¡Vender!',
                    text: "¿Estas seguro de vender esta res?",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#00b347',
                    cancelButtonColor: '#d33',
                    confirmButtonText: '¡Si, Vender!'
                }).then((result) => {
                if (result.isConfirmed) {

                    this.$swal.fire({
                    title: '¡Ingrese valor!',
                    html: `<input type="number" id="valor" class="swal2-input" placeholder="Valor">`,
                    showCancelButton: true,
                    confirmButtonColor: '#00b347',
                    cancelButtonColor: '#d33',
                    confirmButtonText: '¡Si, Vender!',
                    preConfirm: () => {
                    const valor = this.$swal.getPopup().querySelector('#valor').value
    
                    if (!valor) {
                    this.$swal.showValidationMessage(`Por favor ingrese valor`)
                    }
                    return { valor: valor}
                    }
                }).then((result) => {

                    if (result.isConfirmed) {
                        let data = {
                        vendido: '2',
                        valor_Vendido: result.value.valor,
                    }
                        const res =  axios.put('/api/vacas/'+id, data);
                        this.listar();
                        this.$swal(
                        '¡Vendido!',
                        'El becerro(a) ha pasado a la vista de vendidos',
                        'success'
                        )

                    }
                })
       
            }

        })
            } catch (error) {
                this.$swal({
                    title: '¡Error!',
                    text: 'Error del sistema, contactese con soporte',
                    icon: 'error',
                    confirmButtonText: 'Ok'
                })
            }
        },
        fallecida(id){
            try {
                let data = {
                    fallecida:'2' 
                }
                this.$swal({
                    title: '¡Falleció!',
                    text: "¿Estas seguro de que las res ha muerto?",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#808080',
                    cancelButtonColor: '#d33',
                    confirmButtonText: '¡Si, Falleció!'
                }).then((result) => {
                if (result.isConfirmed) {
                    const res =  axios.put('/api/vacas/'+id, data);
                    this.listar();
                    this.$swal(
                    '¡Falleció!',
                    'La res ha pasado a la vista de fallecidos',
                    'success'
                    )}
                })
            } catch (error) {
                this.$swal({
                    title: '¡Error!',
                    text: 'Error del sistema, contactese con soporte',
                    icon: 'error',
                    confirmButtonText: 'Ok'
                })
            }
        },

        abrirModal(data={}){
            this.modal = 1;
            if (this.modificar) {
                this.id=data.id;
                this.razaSeleccionada=data.id_raza;
                this.gerneoSeleccionado=data.idgenero;
                this.selected=data.fallecida;
                this.tipoSeleccionado=data.idtipo;
                this.tituloModal="Modificar Vacas";
                this.vaca.id_raza = data.id_raza;
                this.vaca.imagen = data.imagen;
                this.vaca.idgenero = data.idgenero
                this.vaca.nombre = data.nombre;
                this.vaca.idtipo = data.idtipo;
                this.vaca.fallecida = data.fallecida;
                console.log(data.id);
            }else{
                this.id=0;
                this.tituloModal="Crear Vacas";
                this.vaca.id_raza = this.razaSeleccionada;
                this.vaca.imagen = '';
                this.vaca.nombre = '';
                this.vaca.idgenero = this.gerneoSeleccionado;
                this.vaca.idtipo = this.tipoSeleccionado;
            }
        },
        cerrarModal(){
            this.modal = 0;
        },
        async traerRazas(){
            const res = await axios.get('/api/razas');
            this.razas = res.data;
        },
        async traerGeneros(){
            const res = await axios.get('/api/generos');
            this.generos = res.data;
        },
        async traerTipos(){
            const res = await axios.get('/api/tipos');
            this.tipos = res.data;
        },
        showDialog(visible) {
        this.see = visible;
        },
        imagen(e){
            let file = e.target.files[0];
            this.vaca.imagen = file;
            this.cargarImagen(file);
        },
        cargarImagen(file){
            let reader = new FileReader();
            reader.onload = (e) => {
                this.imagenMiniatura = e.target.result;
            }
            reader.readAsDataURL(file);
        },
            
    },
    created() {
        this.listar();
    },
    mounted() {
      this.traerRazas();
      this.traerGeneros();
      this.traerTipos();
    },
    computed:{
         vistaImagen(){
            return this.imagenMiniatura;
        }
    }
    
}
       
</script>

<style>
.mostrar{
    display: list-item;
    opacity: 1;
    background: rgba(75, 56, 143, 0.705);
}

#label{
    padding-top: 20px;
}
body{
    font-family: Monaco, Courier New, Courier, monospace;
    font-size: 16px;
}
#btnRaza{
    margin-top: 1.3em;
    margin-left: 49px;
    width: 230px;
    height: 45px;
    font-size: 16px;
}
ol{
    width: 1000px;
    float: center;
    margin-left: 50px;
}
.breadcrumb {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    padding: 0.75rem 1rem;
    margin-bottom: 1rem;
    list-style: none;
    background-color: #e9ecef;
    border-radius: 0.25rem;
}
#filas{
    margin-top: 1.3em;
    margin-left: 19px;
}
#mensajeRegistros{
    margin-top: -2em;
}
#paginador{
    margin-left: 780px;
    margin-top: -3.5em;
}
#imgprev{
    width: 130px;
    height: 100px;
    background-image: repeating-linear-gradient(-35deg, #333333, #333333 7.56px, transparent 12px, transparent 30.9px, #333333 42px), repeating-linear-gradient(55deg, #333333, #333333 7.56px, transparent 12px, transparent 30.9px, #333333 42px), repeating-linear-gradient(145deg, #333333, #333333 7.56px, transparent 12px, transparent 30.9px, #333333 42px), repeating-linear-gradient(235deg, #333333, #333333 7.56px, transparent 12px, transparent 30.9px, #333333 42px);
    background-size: 2px calc(100% + 51.27px), calc(100% + 51.27px) 2px, 2px calc(100% + 51.27px) , calc(100% + 51.27px) 2px;
    background-position: 0 0, 0 0, 100% 0, 0 100%;
    background-repeat: no-repeat;
    animation: borderAnimation 1s infinite linear;
    }
    
    @keyframes borderAnimation {
    from { background-position: 0 0, -51.27px 0, 100% -51.27px, 0 100%; }
    to { background-position: 0 -51.27px, 0 0, 100% 0, -51.27px 100%; }
    }
#btnArchivo{
    margin-top: 8px;
    display: block;
    padding: 3px 9px;
    border: none;
    color: #fff;
    font-size: 13px;
    background-color: #1090fc;
    border-radius: 5px;
    cursor: pointer;
    text-align: center;
}
img{
    padding-top: 9px;
    width: 100px;
    height: 90px;
    margin: 15px;
    display: block;   
}
#centrador{
    width: 180px;
    height: 50px;
    padding: 0px;
}
#imagenR{
    width: 50px;
    height: 50px;
    padding: 0px;
    margin: 2%;
    display: block;
    margin-left: auto;
    margin-right: auto;
}
#centrador img{
    transition: all 300ms;
    position: relative;
}
#centrador #imagenR:hover{
    transform: scale(5.5);
}
#imagenR:hover{
    border-radius:50%;
    -webkit-border-radius:50%;
    box-shadow: 0px 0px 30px 5px #1a1817;
}
/* #foto{
    display: none;
} */
#btnimagen{
     padding-top: 11px;
}
/* #icono {
    content: url("/imagen/image-regular.svg");
    width: 100px; 
    height: 100px; 
    margin: 2%;
    padding: 7%;
    display: block;
    margin-left: 12%;
    margin-right: auto;
} */
</style>