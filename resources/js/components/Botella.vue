<template>
 <div class="container" id="label">
         
        <ol class="breadcrumb">
            <li class="breadcrumb-item active">Sección de Botellas de Leche</li>
        </ol>

     <!--Boton para abrir el modal de ingresar nuevo registro-->
        <button @click="modificar=false; abrirModal();" id="btnRaza" type="button" class="btn btn-outline-primary mb-3">
        Agregar Botellas
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
                    <label for="stock">Cantidad de Botellas</label>
                    <input v-model="botella.bts_diarias" type="number" min="1" max="9999" class="form-control" id="bts_diarias" placeholder="Cantidad">
                </div>
                 <div class="mb-3">
                    <label for="stock">Precio</label>
                    <input v-model="botella.precio" type="number" min="1" max="9999" class="form-control" id="precio" placeholder="Precio">
                </div>
                 <div class="mb-3">
                    <label for="stock">Fecha</label>
                    <input v-model="botella.fecha" type="date" class="form-control" id="fecha">
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
        <select class="form-select" v-model="pagination.per_page" @change="listar();">
            <option value="3">3 Filas</option>
            <option value="5">5 Filas</option>
            <option value="10">10 Filas</option>
            <option value="25">25 Filas</option>
        </select>
    </div>
    <div class="col-2 md-1" id="filtroYear">
      <date-picker type="year" format="YYYY" :editable="false" value-type="YYYY" placeholder="Filtro Por Año" v-model="pagination.per_year" @change="listar()"></date-picker>
    </div>
    <div class="col-2 md-1" id="filtroMes">
        <date-picker type="month" format="M" value-type="M" :editable="false" panel-change="month" placeholder="Filtro Por Mes" v-model="pagination.per_mes" @change="listar()"></date-picker>
    </div>
     <div class="card-body">
        <table class="table table-dark table-hover" id="razas">
            <thead> 
                <tr>
                <th scope="col" class="text-center">N°</th>
                <th scope="col" class="text-center">Fecha</th>
                <th scope="col" class="text-center">Botellas Diarias</th>
                <th scope="col" class="text-center">Suma de Botellas</th>
                <th scope="col" class="text-center">Precio</th>
                <!-- <th scope="col" colspan="3" class="text-center">Acciones</th> -->
                </tr>
            </thead>
            <tbody>
                <tr v-for="(botella, item) in botellas.data" :key="botella.id">
                    <th class="text-center" scope="row">{{item += 1}}</th>
                    <td class="text-center">{{botella.fecha}}</td>
                    <td class="text-center">{{botella.bts_diarias}}</td>
                    <td class="text-center">{{botella.sum_botellas}}</td>
                    <td class="text-center">{{botella.precio}}</td>
                   <!--  <td class="text-center">
                       <button @click="modificar=true; abrirModal(botella);" class="btn btn-outline-warning"><i class="fas fa-edit"></i></button>
                    </td> -->
                </tr>
            </tbody>
        </table>
        </div>
        <div class="card-body">
            <div class="col-7 md-2" id="mensajeRegistros">
             Mostrando registros del {{botellas.from}} al {{botellas.to}} de un total de {{botellas.total}} registros
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
                <li class="page-item" :class=" {disabled:pagination.page==botellas.last_page} ">
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
            botella:{
                bts_diarias:'',
                precio:'',
                sum_botellas:'',
                fecha:''
            },
            botellas:[], 
            modificar:true,
            modal:0,
            tituloModal:'',
            id:0,
            suma:0,
            precio:0,
            errSuma:0,
            pagination:{
                page:1,
                per_page:3,
                per_mes: new Date().getMonth() + 1, //obtenemos el mes actual
                per_year: new Date().getFullYear(),
            },
            paginas:[],
           
        }
    },
        methods: {
            async listar(){
                const res = await axios.get('/api/botellas',{params: this.pagination});
                this.botellas = res.data;
                this.listarPaginas()
            },
            listarPaginas(){
                const n = 2
                let arrayN=[]
                let ini = this.pagination.page - 2
                if (ini<1) {
                    ini = 1
                }
                let fin = this.pagination.page + 2
                if (fin>this.botellas.last_page) {
                    fin = this.botellas.last_page
                }
                for (let i = ini; i <= fin; i++){
                    arrayN.push(i);
                }
                this.paginas = arrayN
            },
            async guardar(){
                try {
                    
                var sumBts = this.botellas.data;
                const primerDia = new Date(new Date().getFullYear(), new Date().getMonth() + 1).getDate(); //obtenemos el primer dia del mes
                /* const ultimoDia = new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0).getDate() */ // obtenermos el ultimo dia del mes
                const fecha = new Date();
                const hoy = fecha.getDate(); //obtenermos el dia actual
                const fechaHoy = fecha.getFullYear()+'-'+String(fecha.getMonth() + 1).padStart(2, '0')+'-'+String(fecha.getDate()).padStart(2, '0');
               
                if (Object.keys(sumBts).length < 1) { //valida si el objeto esta vacio
                    this.suma = (this.botella.bts_diarias-0) + (this.errSuma-0);
                    this.precio = (this.suma-0) * (this.botella.precio-0)
                }else if(primerDia===hoy){
                    this.suma = (this.botella.bts_diarias-0) + (this.errSuma-0);
                    this.precio = (this.suma-0) * (this.botella.precio-0)
                } else {
                    var sumBts = this.botellas.data.shift().sum_botellas;
                    this.suma = (this.botella.bts_diarias-0) + (sumBts-0);
                    this.precio = (this.suma-0) * (this.botella.precio-0)
                }

                if (this.modificar) {
                        var datos = new  FormData();
                        datos.append('bts_diarias', this.botella.bts_diarias);
                        datos.append('precio', this.precio);
                        datos.append('fecha', this.botella.fecha);
                        datos.append('sum_botellas', this.suma);
                        datos.append('_method', 'PUT');
                        axios.defaults.withCredentials = true;
                        axios.post('/api/botellas/'+ this.id, datos,
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
                            title: "Actualizando botellas",
                        })
                            this.cerrarModal(); 
                            this.listar();
                        })
                        .catch(error=>{
                            this.$swal({icon:'warning', title:'¡Advertencia!', text:'Ya hay un registro existente'})
                        }); 
                } else {
                    if (this.botella.bts_diarias==''||this.botella.precio==''||this.botella.fecha=='') {
                        this.$swal({icon:'warning', title:'¡Advertencia!', text:'Debe llenar los campos'})
                        this.listar();
                    }else if(fechaHoy != this.botella.fecha){
                        this.$swal({icon:'warning', title:'¡Advertencia!', text:'No se puede insertar debido a que no corresponde a la fecha de hoy'})
                        this.listar();
                    }else{  
                        var datos = new FormData();
                        datos.append('bts_diarias', this.botella.bts_diarias);
                        datos.append('precio', this.precio);
                        datos.append('fecha', this.botella.fecha);
                        datos.append('sum_botellas', this.suma);
                        axios.defaults.withCredentials = true;
                        axios({
                            method: 'post',
                            headers: {
                                'Content-Type': 'multipart/form-data'
                            },
                            url: '/api/botellas',
                            data: datos
                        })
                        .then(response=>{     
                            this.$swal({icon:'success', title:'Exito!', text:'Las botellas'})
                            this.cerrarModal();
                            this.listar();
                        })
                        .catch(error=>{
                            this.$swal({icon:'warning', title:'¡Advertencia!', text:'Ya hay un registro existente'})
                            this.listar();
                        });
                    }
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
            abrirModal(data = {}){
                this.modal = 1;
                if (this.modificar) {
                    this.tituloModal = 'Actualizar',
                    this.id = data.id,
                    this.botella.bts_diarias = data.bts_diarias,
                    this.botella.precio = data.precio,
                    this.botella.fecha = data.fecha,
                    this.botella.sum_botellas = data.sum_botellas
                } else {
                    this.id = 0,
                    this.tituloModal = 'Insertar',
                    this.botella.bts_diarias = '',
                    this.botella.precio = '',
                    this.botella.fecha = ''          
                }
            },
            cerrarModal(){
                this.modal = 0;
            },
        },
    created() {
        this.listar();
    },
    
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
#filtroYear{
    margin-top: -2.3em;
    margin-left: 218px;
}
#filtroMes{
    margin-top: -2.3em;
    margin-left: 440px;
}
.mx-input {
    display: inline-block;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    width: 100%;
    height: 34px;
    padding: 17.6px 30px;
    padding-left: 10px;
    font-size: 14px;
    line-height: 1.4;
    color: #555;
    background-color:#f8fafc;
    border: 1px solid #ccc;
    border-radius: 4px;
    -webkit-box-shadow: inset 0 1px 1px rgb(0 0 0 / 8%);
    box-shadow: inset 0 1px 1px rgb(0 0 0 / 8%);
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