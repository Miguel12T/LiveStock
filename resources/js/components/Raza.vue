<template>
    <div class="container" id="label">
         
        <ol class="breadcrumb">
            <li class="breadcrumb-item active">Sección de Razas</li>
        </ol>
       <!-- Button trigger modal -->
        <button @click="modificar=false; abrirModal();" id="btnRaza" type="button" class="btn btn-outline-primary mb-3">
        Agregar Razas
        </button>

        <!-- Modal -->
        <div class="modal" :class=" {mostrar:modal} ">
        <div class="modal-dialog">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">{{tituloModal}}</h5>
                <button @click="cerrarModal();" type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <div class="mb-3">
                    <label for="stock">Raza</label>
                    <input v-model="raza.raza" type="text" class="form-control" id="raza" placeholder="Raza">
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
                <th scope="col" class="text-center">Raza</th>
                <th scope="col" colspan="2" class="text-center">Acciones</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="raza in razas.data" :key="raza.id">
                <th class="text-center" scope="row">{{raza.id}}</th>
                <td class="text-center">{{raza.raza}}</td>
                <td class="text-end">
                    <button @click="modificar=true; abrirModal(raza);" class="btn btn-outline-warning"><i class="fas fa-edit"></i></button>
                </td>
                <td>
                    <button @click="eliminar(raza.id)" class="btn btn-outline-danger"><i class="fas fa-trash-alt"></i></button>
                </td>
                </tr>
            </tbody>
        </table>
        </div>
        <div class="card-body">
            <div class="col-7 md-2" id="mensajeRegistros">
             Mostrando registros del {{razas.from}} al {{razas.to}} de un total de {{razas.total}} registros
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
                    <li class="page-item" :class=" {disabled:pagination.page==razas.last_page} ">
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
            raza:{
                raza:'',
            },
            id:0,
            contador:0,
            modificar:true,
            modal:0,
            tituloModal:'',
            razas:[], //aqui se guardan toda la listas de los articulos
            errores:{},
            pagination:{
                page:1,
                per_page:3,
            },
            paginas:[],
        }
    },
    
      methods: {
        async listar(){
            const res = await axios.get('/api/razas', {params: this.pagination});
            this.razas = res.data;
            this.listarPaginas();
        },
        listarPaginas(){
            const n = 1
            let arrayN=[]
            let ini = this.pagination.page - 1
            if (ini<1) {
                ini = 1
            }
            let fin = this.pagination.page + 1
            if (fin>this.razas.last_page) {
                fin = this.razas.last_page
            }
            for (let i = ini; i <= fin; i++){
                arrayN.push(i);
            }
            this.paginas = arrayN
        },
         eliminar(id){
            this.$swal({
                title: '¡Eliminar!',
                text: "¿Estas seguro de eliminar este registro?",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: '¡Si, Eliminar!'
            }).then((result) => {
            if (result.isConfirmed) {
                const res =  axios.delete('/api/razas/'+id);
                this.listar();
                this.$swal(
                'Eliminado!',
                'Su archivo ha sido eliminado',
                'success'
                )
            }
            })
        },
         async guardar(){
             try {
                 let data = {
                         raza: this.raza.raza
                     };
                 if (this.modificar) {
                     if (this.raza.raza == '') {
                         this.$swal({icon:'warning', title:'¡Advertencia!', text:'Debe llenar los campos'})
                     }else{
                         const res = await axios.put('/api/razas/'+ this.id, this.raza);
                            this.$swal({icon:'success', title:'Exito!', text:'Se actualizo correctamente la raza'})
                            this.cerrarModal(); 
                        }
                 }else{
                     if (this.raza.raza == '') {
                           this.$swal({icon:'warning', title:'¡Advertencia!', text:'Debe llenar los campos'})
                     }else{
                        const res = await axios.post('/api/razas/', data)
                        .then(response=>{ 
                            this.$swal({icon:'success', title:'Exito!', text:'Se agrego correctamente la raza'})
                            this.cerrarModal();
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
        abrirModal(data={raza}){
            this.modal = 1;
            if (this.modificar) {
                this.id=data.id;
                this.tituloModal="Modificar Razas";
                this.raza.raza = data.raza;
            }else{
                this.id=0;
                this.tituloModal="Crear Raza";
                this.raza.raza = '';
            }
        },
        cerrarModal(){
            this.modal = 0;
        },
    },
    created() {
        this.listar();
    },
    mounted() {
      
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
#mensajeRegistros{
    margin-top: -2em;
}
#paginador{
    margin-left: 780px;
    margin-top: -3.5em;
}
</style>