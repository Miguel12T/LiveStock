<template>
<div class="container" id="label">
         
        <ol class="breadcrumb">
            <li class="breadcrumb-item active">Sección de Partos</li>
        </ol>

       <!--Boton para abrir el modal de ingresar nuevo registro-->
     <button @click="modificar=false; abrirModal();" id="btnRaza" type="button" class="btn btn-outline-primary mb-3">
        Agregar Partos
        </button>

        <!--Modal para ingresar nuevo registro-->
        <div class="modal" :class=" {mostrar:modal} ">
        <div class="modal-dialog">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">{{tituloModal}}</h5>
                <button @click="cerrarModal();" type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                 <div class="mb-3">
                    <label for="idVaca">Identificacion De la Vaca</label>
                    <select v-model="idVacaSeleccionada" class="form-select" id="idVaca" placeholder="Selecione una Raza" required>
                         <option v-for="vaca in vacas.data" :key="vaca.id" :value="vaca.id">
                            {{ vaca.nombre }} 
                         </option>    
                  </select>
                </div>
                 <div class="mb-3">
                    <label for="idBecerro">Identificacion Del Becerro(a)</label>
                    <select v-model="idBecerroSeleccionado" class="form-select" id="idBecerro" placeholder="Selecione un Genero">
                        <option v-for="becerro in becerros.data" :key="becerro.id" :value="becerro.id">
                            {{ becerro.nombre }}
                        </option>
                    </select>
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
                <th scope="col" class="text-center">Imagen Vaca</th>
                <th scope="col" class="text-center">Raza Vaca</th>
                <th scope="col" class="text-center">Id Vaca</th>
                <th scope="col" class="text-center">Imagen Becerro</th>
                <th scope="col" class="text-center">Raza Becerro</th>
                <th scope="col" class="text-center">Id Becerro</th>
                <th scope="col" class="text-center">Genero</th>
                <th scope="col" class="text-center">Fecha de Nacimiento</th>
                <th scope="col" class="text-center">Acciones</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(parto, item) in partos.data" :key="parto.id">
                    <th class="text-center" scope="row">{{item += 1}}</th>
                    <td id="centrador" class="text-center">
                        <img id="imagenR" :src="'/imagen/'+ parto.vaca_img" class="img-responsive">
                    </td>
                    <td class="text-center">{{parto.raVaca}}</td>
                    <td class="text-center">{{parto.vaca_id}}</td>
                    <td id="centrador" class="text-center">
                        <img id="imagenR" :src="'/imagen/'+ parto.becerro_img" class="img-responsive">
                    </td>
                    <td class="text-center">{{parto.raBecerro}}</td>
                    <td class="text-center">{{parto.becerro_id}}</td>
                    <td class="text-center">{{parto.becerro_genero}}</td>
                    <td class="text-center">{{parto.fecha_nacimiento}}</td>
                    <td class="text-center">
                        <button @click="modificar=true; abrirModal(parto);" class="btn btn-outline-warning"><i class="fas fa-edit"></i></button>
                    </td>
                </tr>
            </tbody>
        </table>
        </div>
         <div class="card-body">
            <div class="col-7 md-2" id="mensajeRegistros">
             Mostrando registros del {{partos.from}} al {{partos.to}} de un total de {{partos.total}} registros
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
                    <li class="page-item" :class=" {disabled:pagination.page==partos.last_page} ">
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
            parto:{
                idBecerro:'',
                idVaca:'',
                imgBecerro:'',
                imgVaca:'',
                razaBecerro:'',
                razaVaca:'',
                fecha:'',
                generoBecerro:''
            },
            partos:[],
            idBecerroSeleccionado:{},
            becerros:[],
            idVacaSeleccionada:{},
            vacas:[],
            id:0,
            modal:0,
            tituloModal:'',
            modificar:true,
            pagination:{
                page:1,
                per_page:3,
            },
            paginas:[],
        }
    },
    methods:{
        async listar(){
            const res = await axios.get('/api/partos', {params: this.pagination});
            this.partos = res.data;
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
            if (fin>this.partos.last_page) {
                fin = this.partos.last_page
            }
            for (let i = ini; i <= fin; i++){
                arrayN.push(i);
            }
            this.paginas = arrayN
        },
        async guardar(){
            try {
                if (this.modificar) {
                    var datos = new  FormData();
                    datos.append('idBecerro', this.idBecerroSeleccionado);
                    datos.append('imgBecerro', this.idBecerroSeleccionado);
                    datos.append('razaBecerro',this.idBecerroSeleccionado);
                    datos.append('generoBecerro', this.idBecerroSeleccionado)
                    datos.append('fecha', this.idBecerroSeleccionado);
                    datos.append('razaVaca', this.idVacaSeleccionada);
                    datos.append('idVaca', this.idVacaSeleccionada);
                    datos.append('imgVaca', this.idVacaSeleccionada);
                    datos.append('_method', 'PUT');
                    axios.defaults.withCredentials = true;
                    axios.post('/api/partos/'+ this.id, datos)
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
                        title: "Actualizando parto...",
                    })
                        this.cerrarModal(); 
                        this.listar();
                    })
                    .catch(error=>{
                        this.$swal({icon:'warning', title:'¡Advertencia!', text:'Ya hay un registro existente'})
                    });
                }else{
                    var datos = new FormData();
                    datos.append('idBecerro', this.idBecerroSeleccionado);
                    datos.append('imgBecerro', this.idBecerroSeleccionado);
                    datos.append('razaBecerro',this.idBecerroSeleccionado);
                    datos.append('generoBecerro', this.idBecerroSeleccionado)
                    datos.append('fecha', this.idBecerroSeleccionado);
                    datos.append('razaVaca', this.idVacaSeleccionada);
                    datos.append('idVaca', this.idVacaSeleccionada);
                    datos.append('imgVaca', this.idVacaSeleccionada);
                    axios.defaults.withCredentials = true;
                    axios({
                        method: 'post',
                        url: '/api/partos/',
                        data: datos
                    })
                    .then(response=>{ 
                        this.$swal({icon:'success', title:'Exito!', text:'Se agrego correctamente el parto'})
                        this.cerrarModal();
                        this.listar();
                    })
                    .catch(error=>{
                        this.$swal({icon:'warning', title:'¡Advertencia!', text:'Ya hay un registro existente'})
                    });
                   
                }
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
                this.tituloModal = 'Actualizar Parto';
                this.idBecerroSeleccionado = data.idBecerro;
                this.idVacaSeleccionada = data.idVaca;
                this.parto.idBecerro = data.idBecerro;
                this.parto.idVaca = data.idVaca;
            }else{
                this.id = 0;
                this.tituloModal = 'Insertar Parto'
                this.parto.idBecerro = this.idBecerroSeleccionado;
                this.parto.idVaca = this.idVacaSeleccionada;
            }
        },
        cerrarModal(){
            this.modal = 0;
        },
        async traerIdbecerro(){
            const res = await axios.get('/api/becerros');
            this.becerros = res.data;
        },
        async traerIdvaca(){
            const res = await axios.get('/api/vacas');
            this.vacas = res.data;
        },

    },
    created() {
        this.listar(); 
    },
    mounted() {
      this.traerIdbecerro();
      this.traerIdvaca();
    },
   /*  computed:{
         vistaImagen(){
            return this.imagenMiniatura;
        }
    } */
 
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