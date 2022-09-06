<template>
    <div class="container" id="label">
         
        <ol class="breadcrumb">
            <li class="breadcrumb-item active">Sección de Becerros</li>
        </ol>

        <!--Modal de crecimiento del becerro(a)-->
         <div class="modal" :class=" {mostrar:modalCrecimiento} ">
            <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">{{tituloModal}}</h5>
                    <button type="button" @click="cerrarModal();"  class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                     <div class="mb-3">
                    <label for="crecimiento"> <strong>Estado de la res</strong> </label>
                    <select v-model="selectedCrecimiento" class="form-select" id="crecimiento" placeholder="">
                        <option v-for="opcion in opciones" :key="opcion.value" :value="opcion.value">
                            {{ opcion.text }}
                        </option>
                    </select>
                </div>
                <div class="mb-3" v-if="this.selectedCrecimiento==2">
                <label><strong>Selecione una nueva foto para actualizar</strong></label>
                    <div v-show="see" id="imgprev">
                        <img :src="vistaImagen" alt="" id="icono">
                    </div>
                        <input  type="file"  class="form-control-file" @change="imagen" name="imagen" id="btnimagen" @click="showDialog(true)">
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" @click="cerrarModal();"  class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                    <button @click="guardar();" type="button" class="btn btn-primary">Guardar</button>
                </div>
                </div>
            </div>
            </div>

        <!--Boton para abrir el modal de ingresar nuevo registro-->
        <button @click="modificar=false; abrirModal(); showDialog(false); modificarCrecimiento=false;" id="btnRaza" type="button" class="btn btn-outline-primary mb-3">
        Agregar Becerro
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
                <div class="mb-3">
                    <label for="stock">Nombre</label>
                    <input v-model="becerro.nombre" type="number" min="1" max="9999" class="form-control" id="nombre" placeholder="Nombre">
                </div>
                 <div class="mb-3">
                    <label for="id_raza">Razas</label>
                    <select v-model="razaSeleccionada" class="form-select" id="id_raza" placeholder="Selecione una Raza">
                         <option disabled value="">Seleccione un elemento</option>
                         <option v-for="raza in razas.data" :key="raza.id" :value="raza.id">
                            {{ raza.raza }} 
                         </option>    
                  </select>
                </div>
                 <div class="mb-3">
                    <label for="stock">Fecha de Nacimiento</label>
                    <input v-model="becerro.fecha_nacimiento" type="date" class="form-control" id="fecha_nacimiento" placeholder="Fecha de Nacimiento">
                </div>
                 <div class="mb-3">
                    <label for="idgenero">Genero</label>
                    <select v-model="selectedGenero" class="form-select" id="idgenero" placeholder="Selecione un Genero">
                        <option v-for="genero in generos" :key="genero.id" :value="genero.id">
                            {{ genero.genero }}
                        </option>
                    </select>
                </div>
                <div class="mb-3">
                    <label for="idtipo">Tipo</label>
                    <select v-model="selectedTipo" class="form-select" id="idtipo" placeholder="Selecione">
                        <option v-for="tipo in tipos" :key="tipo.id" :value="tipo.id">
                            {{ tipo.tipo }}
                        </option>
                    </select>
                </div>
                <div class="mb-3">
                <h6 class="text-modal">Selecione foto</h6>
                    <div  v-show="see" id="imgprev">
                        <img :src="vistaImagen" alt="" :srcset="'/imagen/'+ becerro.imagen" id="icono">
                    </div>
                        <input  type="file"  class="form-control-file" @change="imagen" name="imagen" id="btnimagen" @click="showDialog(true)" >
                        <!-- <input type="button" value="Archivo"  class="btn btn-outline-primary" id="btnArchivo" @click="showDialog(true)">  -->
                    </div>
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
                <th scope="col" class="text-center">Fecha de Nacimiento</th>
                <th scope="col" class="text-center">Tipo</th>
                <th scope="col" colspan="3" class="text-center">Acciones</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(becerro, item) in becerros.data" :key="becerro.id">
                    <th class="text-center" scope="row">{{item += 1}}</th>
                    <td id="centrador" class="text-center">
                        <img id="imagenR" :src="'/imagen/'+ becerro.imagen" class="img-responsive">
                    </td>
                    <td class="text-center">{{becerro.raza}}</td>
                    <td class="text-center">{{becerro.genero}}</td>
                    <td class="text-center">{{becerro.nombre}}</td>
                    <td class="text-center">{{becerro.fecha_nacimiento}}</td>
                    <td class="text-center">{{becerro.tipo}}</td>
                    <td class="text-center">
                        <button @click="modificar=true; modificarCrecimiento=false; abrirModal(becerro); showDialog(true);" class="btn btn-outline-warning"><i class="fas fa-edit"></i></button>
                        <button @click="modificarCrecimiento=true; abrirModalCrecimiento(becerro); showDialog(false);" class="btn btn-outline-info"><i class="fa-solid fa-arrows-rotate"></i></button>
                        <button @click="vender(becerro.id);" class="btn btn-outline-success"><i class="fa-solid fa-money-check-dollar"></i></button>
                        <button @click="fallecida(becerro.id);" class="btn btn-outline-light"><i class="fa-solid fa-skull"></i></button>
                    </td>
                </tr>
            </tbody>
        </table>
        </div>
        <div class="card-body">
            <div class="col-7 md-2" id="mensajeRegistros">
             Mostrando registros del {{becerros.from}} al {{becerros.to}} de un total de {{becerros.total}} registros
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
                    <li class="page-item" :class=" {disabled:pagination.page==becerros.last_page} ">
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
            becerro:{
                imagen:'',
                id_raza:'',
                nombre:'',
                idgenero:'',
                fecha_nacimiento:'',
                fallecida:'',
                vendido:'',
                crecimiento:'',
                idtipo:'',
                valor_Vendido:0,
            },
            becerros:[],
            file:'',
            see:false,
            razaSeleccionada: {},
            razas:[],
            selectedGenero: {},
            generos: [],
            selectedTipo:{},
            tipos: [],
            selectedCrecimiento: '1',
            opciones: [
                { text: 'Becerro(a)', value: '1' },
                { text: 'Novillo(0)', value: '2' },
            ],
            id:0,
            modificar:true,
            modificarCrecimiento:true,
            modal:0,
            modalCrecimiento:0,
            tituloModal:'',
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
                const res = await axios.get('/api/becerros',{params: this.pagination});
                this.becerros = res.data;
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
            if (fin>this.becerros.last_page) {
                fin = this.becerros.last_page
            }
            for (let i = ini; i <= fin; i++){
                arrayN.push(i);
            }
            this.paginas = arrayN
        },
            
             async guardar(){
             try {
                
                    let data = {
                         crecimiento: this.selectedCrecimiento,
                    };
                    
                    if(this.modificarCrecimiento){
                        if (this.selectedCrecimiento == 1) {
                            const res = await axios.put('/api/becerros/'+ this.id, data);
                                this.$swal({icon:'success', title:'¡Exito!', text:'Se actualizo correctamente'})
                                this.cerrarModal();
                                this.listar(); 
                    }else if (this.selectedCrecimiento == 2) {
                            var datos = new  FormData();
                            datos.append('imagen', this.becerro.imagen);
                            datos.append('id_raza', this.razaSeleccionada);
                            datos.append('nombre', this.becerro.nombre);
                            datos.append('idgenero', this.selectedGenero);
                            datos.append('idtipo', this.selectedTipo);
                            datos.append('valor_Vendido', this.becerro.valor_Vendido);
                            axios.defaults.withCredentials = true;
                            axios({
                                method: 'post',
                                headers: {
                                    'Content-Type': 'multipart/form-data'
                                },
                                url: '/api/novillas',
                                data: datos
                            })
                            .then(response=>{ 
                                const res = axios.put('/api/becerros/'+ this.id, data);    
                                this.$swal({icon:'success', title:'Exito!', text:'El becerro(a) ha pasado a la vista de Novillas'})
                                this.cerrarModal();
                                this.listar();
                            })
                            .catch(error=>{
                                this.$swal({icon:'warning', title:'¡Advertencia!', text:'Ya hay un registro existente'})
                            });
                        } 
                    }
                        else if (this.modificar) {
                            if (this.becerro.nombre == ''|| this.becerro.fecha_nacimiento==''|| this.becerro.imagen=='') {
                            this.$swal({icon:'warning', title:'¡Advertencia!', text:'Debe llenar los campos'})
                        }else{
                            var datos = new  FormData();
                            datos.append('imagen', this.becerro.imagen);
                            datos.append('id_raza', this.razaSeleccionada);
                            datos.append('nombre', this.becerro.nombre);
                            datos.append('idgenero', this.selectedGenero);
                            datos.append('fecha_nacimiento', this.becerro.fecha_nacimiento);
                            datos.append('idtipo', this.selectedTipo);
                            datos.append('_method', 'PUT');
                            axios.defaults.withCredentials = true;
                            axios.post('/api/becerros/'+ this.id, datos,
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
                                title: "Actualizando becerro(a)",
                            })
                                this.cerrarModal(); 
                                this.listar();
                            })
                            .catch(error=>{
                                this.$swal({icon:'warning', title:'¡Advertencia!', text:'Ya hay un registro existente'})
                            });   
                            }
                    }else{
                        if (this.becerro.nombre == ''|| this.becerro.fecha_nacimiento==''|| this.becerro.imagen=='') {
                            this.$swal({icon:'warning', title:'¡Advertencia!', text:'Debe llenar los campos'})
                        }else{
                            var datos = new  FormData();
                            datos.append('imagen', this.becerro.imagen);
                            datos.append('id_raza', this.razaSeleccionada);
                            datos.append('nombre', this.becerro.nombre);
                            datos.append('idgenero', this.selectedGenero);
                            datos.append('fecha_nacimiento', this.becerro.fecha_nacimiento);
                            datos.append('idtipo', this.selectedTipo);
                            datos.append('valor_Vendido', this.becerro.valor_Vendido);
                            axios.defaults.withCredentials = true;
                            axios({
                                method: 'post',
                                headers: {
                                    'Content-Type': 'multipart/form-data'
                                },
                                url: '/api/becerros',
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
                this.$swal.fire({
                    title: '¡Vender!',
                    text: "¿Estas seguro de vender este becerro(a)?",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#00b347',
                    cancelButtonColor: '#d33',
                    confirmButtonText: '¡Si, Vender!',
                }).then((result) => {
               
                if (result.isConfirmed) {

                this.$swal.fire({
                    title: 'Ingese Valor de Venta',
                    html: `<input type="number" id="valor" class="swal2-input" placeholder="Valor">`,
                    showCancelButton: true,
                    confirmButtonColor: '#00b347',
                    cancelButtonColor: '#d33',
                    confirmButtonText: '<i class="fa fa-thumbs-up"></i> ¡Confirmar!',
                    cancelButtonText:  '<i class="fa fa-thumbs-down"></i> Cancelar',
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
                        const res =  axios.put('/api/becerros/'+id, data);
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
                    text: "¿Estas seguro de que el becerro(a) ha muerto?",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#808080',
                    cancelButtonColor: '#d33',
                    confirmButtonText: '¡Si, Falleció!'
                }).then((result) => {
                if (result.isConfirmed) {
                    const res =  axios.put('/api/becerros/'+id, data);
                    this.listar();
                    this.$swal(
                    '¡Falleció!',
                    'El becerro(a) ha pasado a la vista de fallecidos',
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
       
        abrirModalCrecimiento(data={}){
             this.modalCrecimiento = 1;
                if (this.modificarCrecimiento){
                this.id=data.id;
                this.tituloModal="Modificar";
                this.selectedCrecimiento=data.crecimiento;
                this.razaSeleccionada=data.id_raza;
                this.selectedGenero=data.idgenero;
                this.selectedTipo=data.idtipo;
                this.becerro.id_raza = data.id_raza;
                this.becerro.imagen = data.imagen;
                this.becerro.nombre = data.nombre;
                this.becerro.fecha_nacimiento = data.fecha_nacimiento;
                this.becerro.idtipo = data.idtipo;
                this.becerro.idgenero = data.idgenero;
                this.becerro.crecimiento = data.crecimiento; 
                }
        },
     
        abrirModal(data={}){
            this.modal = 1;
            if (this.modificar) {
                this.id=data.id;
                this.tituloModal="Modificar Becerros";
                this.razaSeleccionada=data.id_raza;
                this.selectedGenero=data.idgenero;
                this.selectedTipo=data.idtipo;
                this.becerro.id_raza = data.id_raza;
                this.becerro.imagen = data.imagen;
                this.becerro.nombre = data.nombre;
                this.becerro.fecha_nacimiento = data.fecha_nacimiento;
                this.becerro.idtipo = data.idtipo;
                this.becerro.idgenero = data.idgenero;
            }else{
                this.id=0;
                this.tituloModal="Agregar Becerros";
                this.becerro.id_raza = this.razaSeleccionada;
                this.becerro.imagen = '';
                this.becerro.nombre = '';
                this.becerro.idgenero = this.selectedGenero;
                this.becerro.idtipo = this.selectedTipo;
                this.becerro.fecha_nacimiento = '';
            }
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
            const res  =  await axios.get('/api/tipos');
            this.tipos = res.data;
        },
        cerrarModal(){
            this.modal = 0;
            this.modalCrecimiento = 0;
        },
       
        showDialog(visible) {
        this.see = visible;
        },

        imagen(e){
            let file = e.target.files[0];
            this.becerro.imagen = file;
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
