<template>
    <div class="container" id="label">
         
        <ol class="breadcrumb">
            <li class="breadcrumb-item active">Sección de Novedades</li>
        </ol>  
           
                
        <button @click="abrirModal(); showDialog(true);" id="btnRaza" type="button" class="btn btn-outline-primary mb-3">
        Agregar Novedad
        </button>

        
        <div class="modal" :class=" {mostrar:modal} ">
        <div class="modal-dialog modal-dialog-scrollable modal-lg">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">{{tituloModal}}</h5>
                <button @click="cerrarModal();" type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
                <div class="modal-body">
                <div class="mb-3" id="listarCategoria">
                    <label for="categoria">Seleccione Categoria</label>
                    <select class="form-select" v-model="listarCategoria">
                        <option value="1">Becerros</option>
                        <option value="2">Novillas</option>
                        <option value="3">Vacas</option>
                    </select>
                </div>

            <div id="vacas" v-if="this.listarCategoria==3">
            
               
                <div class="row">
                    <div class="col-md-4">
                        <label for="nombre">Vacas</label>
                        <div class="custom-select" :tabindex="tabindex" @blur="open = false">
                            <div class="selected" :class="{open: open}" @click="open = !open">
                                {{ selected }}
                            </div >
                        <div class="items" :class="{selectHide: !open}">
                            <div
                                v-for="vaca in vacas.data" :key="vaca.id" :value="vaca.id"
                                @click="selected=vaca.nombre; open=false; $emit('input', vaca); capturaDatosVaca(vaca)">
                                {{ vaca.nombre }}
                            </div >
                        </div >
                        </div >
                        </div>
                
                    <div class="col-4 col-sm-4">
                        <label for="id_raza">Razas</label>
                        <input disabled v-model="vaca.raza" type="text" class="form-control" id="id_raza" placeholder="Fecha de Nacimiento">
                    </div>
                
                    <div class="col-4 col-sm-4">
                        <label for="idgenero">Genero</label>
                        <input disabled v-model="vaca.genero" type="text" class="form-control" id="idgenero" placeholder="Fecha de Nacimiento">
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-4">
                        <label for="idtipo">Tipo</label>
                        <input disabled v-model="vaca.tipo" type="text" class="form-control" id="idtipo" placeholder="Fecha de Nacimiento">
                    </div>
                
                    <div class="col-4 col-sm-4">
                        <label for="imagen">Imagen</label>
                        <div  v-show="see" id="imgprev">
                            <img :src="vistaImagen" alt="" :srcset="'/imagen/'+ vaca.imagen" id="icono">
                       </div>
                    </div>
                </div>
                <div class="mb-3">
                    <label for="novedas">Escrbir Novedad</label>
                    <div class="form-floating">
                        <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style="height: 100px"></textarea>
                        <label for="floatingTextarea2">Comments</label>
                    </div>
                </div>
                <div class="modal-footer">
                <button @click="cerrarModal();" type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                <button @click="guardar();" type="button" class="btn btn-primary">Guardar</button>
          </div>
            </div>

            <div id="novillas" v-if="this.listarCategoria==2">
                
                
                <div class="row">
                    <div class="col-md-4">
                        <label for="nombre">Novillas</label>
                        <div class="custom-select" :tabindex="tabindex" @blur="open = false">
                            <div class="selected" :class="{open: open}" @click="open = !open">
                                {{ selected }}
                            </div >
                        <div class="items" :class="{selectHide: !open}">
                            <div
                                v-for="novilla in novillas.data" :key="novilla.id" :value="novilla.id"
                                @click="selected=novilla.nombre; open=false; $emit('input', novilla); capturaDatosNovilla(novilla)">
                                {{ novilla.nombre }}
                            </div >
                        </div >
                        </div >
                        </div>
                
                    <div class="col-4 col-sm-4">
                        <label for="id_raza">Razas</label>
                        <input disabled v-model="novilla.raza" type="text" class="form-control" id="id_raza" placeholder="Fecha de Nacimiento">
                    </div>
                
                    <div class="col-4 col-sm-4">
                        <label for="idgenero">Genero</label>
                        <input disabled v-model="novilla.genero" type="text" class="form-control" id="idgenero" placeholder="Fecha de Nacimiento">
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-4">
                        <label for="idtipo">Tipo</label>
                        <input disabled v-model="novilla.tipo" type="text" class="form-control" id="idtipo" placeholder="Fecha de Nacimiento">
                    </div>
                
                    <div class="col-4 col-sm-4">
                        <label for="imagen">Imagen</label>
                        <div  v-show="see" id="imgprev">
                            <img :src="vistaImagen" alt="" :srcset="'/imagen/'+ novilla.imagen" id="icono">
                       </div>
                    </div>
                </div>
                <div class="mb-3">
                    <label for="novedas">Escrbir Novedad</label>
                    <div class="form-floating">
                        <textarea  v-model="novedad.novedad" class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style="height: 100px"></textarea>
                        <label for="floatingTextarea2">Comments</label>
                    </div>
                </div>
                <div class="modal-footer">
                <button @click="cerrarModal();" type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                <button @click="guardar();" type="button" class="btn btn-primary">Guardar</button>
          </div>
            </div>

            <div id="becerros" v-if="this.listarCategoria==1">
               
                <div class="row">
                    <div class="col-md-4">
                        <label for="nombre">Becerros</label>
                        <div class="custom-select" :tabindex="tabindex" @blur="open = false">
                            <div class="selected" :class="{open: open}" @click="open = !open">
                                {{ selected }}
                            </div >
                        <div class="items" :class="{selectHide: !open}">
                            <div
                                v-for="becerro in becerros.data" :key="becerro.id" :value="becerro.id"
                                @click="selected=becerro.nombre; open=false; $emit('input', becerro); capturaDatosBecerro(becerro)">
                                {{ becerro.nombre }}
                            </div >
                        </div >
                        </div >
                        </div>
                
                    <div class="col-4 col-sm-4">
                        <label for="id_raza">Razas</label>
                        <input disabled v-model="becerro.raza" type="text" class="form-control" id="id_raza" placeholder="Fecha de Nacimiento">
                    </div>
                
                    <div class="col-4 col-sm-4">
                        <label for="idgenero">Genero</label>
                        <input disabled v-model="becerro.genero" type="text" class="form-control" id="idgenero" placeholder="Fecha de Nacimiento">
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-4">
                        <label for="idtipo">Tipo</label>
                        <input disabled v-model="becerro.tipo" type="text" class="form-control" id="idtipo" placeholder="Fecha de Nacimiento">
                    </div>
                
                    <div class="col-4 col-sm-4">
                        <label for="imagen">Imagen</label>
                        <div  v-show="see" id="imgprev">
                            <img :src="vistaImagen" alt="" :srcset="'/imagen/'+ becerro.imagen" id="icono">
                       </div>
                    </div>
                </div>
                <div class="mb-3">
                    <label for="novedas">Escrbir Novedad</label>
                    <div class="form-floating">
                        <textarea v-model="novedad.novedad" class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style="height: 100px"></textarea>
                        <label for="floatingTextarea2">Comments</label>
                    </div>
                </div>
                <div class="modal-footer">
                <button @click="cerrarModal();" type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                <button @click="guardar();" type="button" class="btn btn-primary">Guardar</button>
          </div>
            </div>
            <!-- <div class="modal-footer">
                <button @click="cerrarModal();" type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
          </div> -->
         </div>
        </div>
       </div>
      </div>

      <div class="modal" :class=" {mostrar:modalActualizar} ">
            <div class="modal-dialog modal-dialog-scrollable modal-lg">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Actualizar Novedad</h5>
                    <button type="button" @click="cerrarModal();"  class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  <div class="row">
                    <div class="col-4 col-sm-4">
                        <label for="nombre">Nombre</label>
                        <input disabled v-model="novedad.nombre" type="text" class="form-control" id="id_raza" placeholder="Fecha de Nacimiento">
                    </div>
                    <div class="col-4 col-sm-4">
                        <label for="id_raza">Razas</label>
                        <input disabled v-model="novedad.raza" type="text" class="form-control" id="id_raza" placeholder="Fecha de Nacimiento">
                    </div>
                    <div class="col-4 col-sm-4">
                        <label for="idgenero">Genero</label>
                        <input disabled v-model="novedad.genero" type="text" class="form-control" id="idgenero" placeholder="Fecha de Nacimiento">
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-4">
                        <label for="idtipo">Tipo</label>
                        <input disabled v-model="novedad.tipo" type="text" class="form-control" id="idtipo" placeholder="Fecha de Nacimiento">
                    </div>
                
                    <div class="col-4 col-sm-4">
                        <label for="imagen">Imagen</label>
                        <div  v-show="see" id="imgprev">
                            <img :src="vistaImagen" alt="" :srcset="'/imagen/'+ novedad.foto" id="icono">
                       </div>
                    </div>
                </div>
                <div class="mb-3">
                    <label for="novedas">Escrbir Novedad</label>
                    <div class="form-floating">
                        <textarea v-model="novedad.novedad" class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style="height: 100px"></textarea>
                        <label for="floatingTextarea2">Comments</label>
                    </div>
                </div>
                </div>
                <div class="modal-footer">
                    <button type="button" @click="cerrarModal();"  class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                    <button @click="actualizar();" type="button" class="btn btn-primary">Actualizar</button>
                </div>
                </div>
            </div>
            </div>
      
        <table class="table table-dark table-hover" id="razas">
            <thead> 
                <tr>
                <th scope="col" class="text-center">N°</th>
                <th scope="col" class="text-center">Imagen</th>
                <th scope="col" class="text-center">Raza</th>
                <th scope="col" class="text-center">Genero</th>
                <th scope="col" class="text-center">Nombre</th>
                <th scope="col" class="text-center">Tipo</th>
                <th scope="col" class="text-center">Novedad</th>
                <th scope="col" colspan="3" class="text-center">Acciones</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(novedad, item) in novedads" :key="novedad.id">
                    <th class="text-center" scope="row">{{item += 1}}</th>
                    <td id="centrador" class="text-center">
                        <img id="imagenR" :src="'/imagen/'+ novedad.foto" class="img-responsive">
                    </td>
                    <td class="text-center">{{novedad.raza}}</td>
                    <td class="text-center">{{novedad.genero}}</td>
                    <td class="text-center">{{novedad.nombre}}</td>
                    <td class="text-center">{{novedad.tipo}}</td>
                    <td class="text-center">{{novedad.novedad}}</td>
                    <td class="text-center">
                        <button @click="abrirModalActualizar(novedad); showDialog(true);" class="btn btn-outline-warning"><i class="fas fa-edit"></i></button>
                        <!-- <button @click="modificarCrecimiento=true; abrirModalCrecimiento(novilla); showDialog(false);" class="btn btn-outline-info"><i class="fa-solid fa-arrows-rotate"></i></button>
                        <button @click="vender(novilla.id);" class="btn btn-outline-success"><i class="fa-solid fa-money-check-dollar"></i></button>
                        <button @click="fallecida(novilla.id);" class="btn btn-outline-light"><i class="fa-solid fa-skull"></i></button> -->
                    </td>
                </tr>
            </tbody>
        </table>
       
     </div>
</template>
<script>

import vueCustomSelect from 'vue-custom-select/src/CustomSelect.vue';

export default {
    components: {
    vueCustomSelect,
  },
    props: {
        default: {
            type: String,
            required: false,
            default: null,
        },
        tabindex: {
            type: Number,
            required: false,
            default: 0,
        },
    },
    data() {
        return {
            vacaSeleccionada:{},
            vacas:[],
            vaca:{
                nombre:'',
                raza:'',
                imagen:'',
                tipo:'',
                genero:'',
            },
            novillaSeleccionada:{},
            novillas:[],
            novilla:{
                nombre:'',
                raza:'',
                imagen:'',
                tipo:'',
                genero:'',
            },
            becerroSeleccionado:{},
            becerros:[],
            becerro:{
                nombre:'',
                raza:'',
                imagen:'',
                tipo:'',
                genero:'',
            },
            novedad:{
                foto:'',
                nombre:'',
                raza:'',
                genero:'',
                tipo:'',
                novedad:'',
            },
            novedads:[],
            id:0,
            modal:0,
            modalActualizar:0,
            see:true,
            selected:'Seleccione una res',
            open : false,
            listarCategoria : 0,
            tituloModal:''
        };
    },
    methods: {
        async listar(){
            const res = await axios.get('/api/novedades');
            this.novedads = res.data; 
        },
        async actualizar(){
            try {
                
                if(this.novedad.novedad ==""){
                    this.$swal({icon:'warning', title:'¡Advertencia!', text:'Debe llenar los campos'})
                }else{
                    var datos = new  FormData();
                    datos.append('foto', this.novedad.foto);
                    datos.append('nombre', this.novedad.nombre);
                    datos.append('raza', this.novedad.raza);
                    datos.append('genero', this.novedad.genero);
                    datos.append('tipo', this.novedad.tipo);
                    datos.append('novedad', this.novedad.novedad);
                    datos.append('_method', 'PUT');
                    axios.defaults.withCredentials = true;
                    axios.post('/api/novedades/'+ this.id, datos)
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
                        title: "Actualizando novedad",
                    })
                        this.cerrarModal(); 
                        this.listar();
                     })
                    .catch(error=>{
                        this.$swal({icon:'warning', title:'¡Advertencia!', text:'Ya hay un registro existente'})
                    });   
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
        async guardar(){
            try {
                if(this.listarCategoria == 1){
                 if(this.novedad.novedad ==""){
                    this.$swal({icon:'warning', title:'¡Advertencia!', text:'Debe llenar los campos'})
                }else{
                    var datos = new  FormData();
                    datos.append('foto', this.becerro.imagen );
                    datos.append('nombre', this.becerro.nombre );
                    datos.append('raza', this.becerro.raza);
                    datos.append('genero', this.becerro.genero);
                    datos.append('tipo', this.becerro.tipo);
                    datos.append('novedad', this.novedad.novedad);
                    axios.defaults.withCredentials = true;
                    axios({
                        method: 'post',
                        headers: {
                            'Content-Type': 'multipart/form-data'
                        },
                        url: '/api/novedades',
                        data: datos
                    })
                    .then(response=>{ 
                        this.$swal({icon:'success', title:'Exito!', text:'Se agrego correctamente la novedad'})
                        this.cerrarModal();
                        this.listar();
                    })
                    .catch(error=>{
                        this.$swal({icon:'warning', title:'¡Advertencia!', text:'Ya hay un registro existente'})
                    });
                  }
                }else if(this.listarCategoria == 2){
                  if(this.novedad.novedad ==""){
                    this.$swal({icon:'warning', title:'¡Advertencia!', text:'Debe llenar los campos'})
                   }else{
                    var datos = new  FormData();
                    datos.append('foto', this.novilla.imagen);
                    datos.append('nombre', this.novilla.nombre);
                    datos.append('raza', this.novilla.raza);
                    datos.append('genero', this.novilla.genero);
                    datos.append('tipo', this.novilla.tipo);
                    datos.append('novedad', this.novedad.novedad);
                    axios.defaults.withCredentials = true;
                    axios({
                        method: 'post',
                        headers: {
                            'Content-Type': 'multipart/form-data'
                        },
                        url: '/api/novedades',
                        data: datos
                    })
                    .then(response=>{ 
                        this.$swal({icon:'success', title:'Exito!', text:'Se agrego correctamente la novedad'})
                        this.cerrarModal();
                        this.listar();
                    })
                    .catch(error=>{
                        this.$swal({icon:'warning', title:'¡Advertencia!', text:'Ya hay un registro existente'})
                    });
                  } 
                }else if(this.listarCategoria == 3){
                  if(this.novedad.novedad ==""){
                    this.$swal({icon:'warning', title:'¡Advertencia!', text:'Debe llenar los campos'})
                }else{
                    var datos = new  FormData();
                    datos.append('foto', this.vaca.imagen);
                    datos.append('nombre', this.vaca.nombre);
                    datos.append('raza', this.vaca.raza);
                    datos.append('genero', this.vaca.genero);
                    datos.append('tipo', this.vaca.tipo);
                    datos.append('novedad', this.novedad.novedad);
                    axios.defaults.withCredentials = true;
                    axios({
                        method: 'post',
                        headers: {
                            'Content-Type': 'multipart/form-data'
                        },
                        url: '/api/novedades',
                        data: datos
                    })
                    .then(response=>{ 
                        this.$swal({icon:'success', title:'Exito!', text:'Se agrego correctamente la novedad'})
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
        abrirModalActualizar(data={}){
            this.modalActualizar = 1;
            this.id=data.id;
            this.novedad.raza = data.raza;
            this.novedad.foto = data.foto;
            this.novedad.nombre = data.nombre;
            this.novedad.tipo = data.tipo;
            this.novedad.genero = data.genero;
            this.novedad.novedad = data.novedad;
        },
        abrirModal(data={}){
            this.modal = 1;
            
            this.id = 0;
            this.tituloModal = "Agregar Novedad";
            this.novedad.nombre = "";
            this.novedad.foto = "";
            this.novedad.raza = "";
            this.novedad.tipo = "";
            this.novedad.genero = "";
            this.novedad.novedad = '';
             
        },
        capturaDatosVaca(data={}){
                this.vacaSeleccionada = data.id;
                this.id = data.id;
               // this.vacaSeleccionada = data.nombre;
                this.vaca.nombre = data.nombre;
                this.vaca.raza = data.raza;
                this.vaca.imagen = data.imagen;
                this.vaca.tipo = data.tipo;
                this.vaca.genero = data.genero;
                console.log(data.id);
            },
        capturaDatosNovilla(data={}){
                this.novillaSeleccionada = data.id;
                this.id = data.id;
               // this.vacaSeleccionada = data.nombre;
                this.novilla.nombre = data.nombre;
                this.novilla.raza = data.raza;
                this.novilla.imagen = data.imagen;
                this.novilla.tipo = data.tipo;
                this.novilla.genero = data.genero;
                console.log(data.id);
            },
        capturaDatosBecerro(data={}){
                this.becerroSeleccionado = data.id;
                this.id = data.id;
               // this.vacaSeleccionada = data.nombre;
                this.becerro.nombre = data.nombre;
                this.becerro.raza = data.raza;
                this.becerro.imagen = data.imagen;
                this.becerro.tipo = data.tipo;
                this.becerro.genero = data.genero;
                console.log(data.id);
            },
           
        async listarVacas(){
            const res = await axios.get('/api/vacas');
            this.vacas = res.data;
        },
        async listarNovillas(){
            const res = await axios.get('/api/novillas');
            this.novillas = res.data;
        },
        async listarBecerros(){
            const res = await axios.get('/api/becerros');
            this.becerros = res.data;
        },
        cerrarModal(){
            this.modal=0;
            this.modalActualizar = 0;
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
        this.listarVacas();
        this.listarNovillas();
        this.listarBecerros();
        this.$emit("input", this.selected);
        
        /* this.captura(); */
    },
    computed:{
         vistaImagen(){
            return this.imagenMiniatura;
        },
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
.custom-select {
  position: relative;
  width: 100%;
  text-align: left;
  outline: none;
  height: 47px;
  line-height: 35px;
}

.custom-select .selected {
  background-color: #f8fafc;
  border-radius: 0.25rem;
  border: 1px solid #c4ced9;
  color: #1a1817;
  padding-left: 1em;
  cursor: pointer;
  user-select: none;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M2 5l6 6 6-6'/%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right 0.75rem center;
  background-size: 16px 12px;
}

.custom-select .selected.open {
  border: 1px solid #c4ced9;
  border-radius: 6px 6px 0px 0px;
}

.custom-select .selected:after {
  position: absolute;
  content: "";
  top: 22px;
  right: 1em;
  width: 0;
  height: 0;
  border: 5px solid transparent;
  border-color: #fff transparent transparent transparent;
}

.custom-select .items {
  color: #fff;
  border-radius: 0px 0px 6px 6px;
  overflow: hidden;
  border-right: 1px solid #c4ced9;
  border-left: 1px solid #c4ced9;
  border-bottom: 1px solid #c4ced9;
  position: absolute;
  background-color: #fff;
  left: 0;
  right: 0;
  z-index: 1;
}

.custom-select .items div {
  color: #1a1817;
  padding-left: 1em;
  cursor: pointer;
  user-select: none;
}

.custom-select .items div:hover {
  background-color: #77736b;
  color: #f7f7f7 !important;
}

.selectHide {
  display: none;
}
</style>