<template>
     <div class="container" id="label">
         
        <ol class="breadcrumb">
            <li class="breadcrumb-item active">Sección de Fallecidos</li>
        </ol>

        <div class="col-2 md-1" id="listarTablas">
            <select class="form-select" v-model="listarTablas" placeholder="3 Filas">
                <option value="1">Becerros</option>
                <option value="2">Novillas</option>
                <option value="3">Vacas</option>
            </select>
        </div>

   <div class="card" v-if="this.listarTablas==1">
        <div class="col-2 md-1" id="filas">
            <select class="form-select" v-model="pagination.per_page" @change="listarBecerros();"  placeholder="3 Filas">
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
                        <th scope="col" class="text-center">Identificación</th>
                        <th scope="col" class="text-center">Fecha de Nacimiento</th>
                        <th scope="col" class="text-center">Tipo</th>
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
                    <a class="page-link" tabindex="-1" aria-disabled="true" @click="pagination.page--; listarBecerros()">Anterior</a>
                    </li>
                    <li class="page-item" v-for="n in paginas" :key="n" :class=" {active:pagination.page==n} ">
                    <a class="page-link" @click="pagination.page=n; listarBecerros()">{{n}}</a>
                    </li>
                    <li class="page-item" :class=" {disabled:pagination.page==becerros.last_page} ">
                    <a class="page-link" @click="pagination.page++; listarBecerros()">Siguiente</a>
                    </li>
                </ul>
            </nav>
        </div>  

        <div class="card" v-if="this.listarTablas==2">
            <div class="col-2 md-1" id="filas">
                <select class="form-select" v-model="pagination.per_page" @change="listarNovillas();"  placeholder="3 Filas">
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
                        <th scope="col" class="text-center">Identificación</th>
                        <th scope="col" class="text-center">Tipo</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(novilla, item) in novillas.data" :key="novilla.id">
                        <th class="text-center" scope="row">{{item += 1}}</th>
                        <td id="centrador" class="text-center">
                            <img id="imagenR" :src="'/imagen/'+ novilla.imagen" class="img-responsive">
                        </td>
                        <td class="text-center">{{novilla.raza}}</td>
                        <td class="text-center">{{novilla.genero}}</td>
                        <td class="text-center">{{novilla.nombre}}</td>
                        <td class="text-center">{{novilla.tipo}}</td>
                    </tr>
                </tbody>
            </table>
        </div> 
        <div class="card-body">
            <div class="col-7 md-2" id="mensajeRegistros">
             Mostrando registros del {{novillas.from}} al {{novillas.to}} de un total de {{novillas.total}} registros
            </div>
        </div>
           <nav id="paginador">
                <ul class="pagination">
                    <li class="page-item" :class=" {disabled:pagination.page==1} ">
                    <a class="page-link" tabindex="-1" aria-disabled="true" @click="pagination.page--; listarNovillas()">Anterior</a>
                    </li>
                    <li class="page-item" v-for="n in paginas" :key="n" :class=" {active:pagination.page==n} ">
                    <a class="page-link" @click="pagination.page=n; listarNovillas()">{{n}}</a>
                    </li>
                    <li class="page-item" :class=" {disabled:pagination.page==novillas.last_page} ">
                    <a class="page-link" @click="pagination.page++; listarNovillas()">Siguiente</a>
                    </li>
                </ul>
            </nav>
        </div>    
        <div class="card" v-if="this.listarTablas==3">
            <div class="col-2 md-1" id="filas">
                <select class="form-select" v-model="pagination.per_page" @change="listarVacas();"  placeholder="3 Filas">
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
                        <th scope="col" class="text-center">Identificación</th>
                        <th scope="col" class="text-center">Tipo</th>
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
                    <a class="page-link" tabindex="-1" aria-disabled="true" @click="pagination.page--; listarVacas()">Anterior</a>
                    </li>
                    <li class="page-item" v-for="n in paginas" :key="n" :class=" {active:pagination.page==n} ">
                    <a class="page-link" @click="pagination.page=n; listarVacas()">{{n}}</a>
                    </li>
                    <li class="page-item" :class=" {disabled:pagination.page==vacas.last_page} ">
                    <a class="page-link" @click="pagination.page++; listarVacas()">Siguiente</a>
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
            becerros:[],
            novillas:[],
            vacas:[],
            listarTablas:1,
            pagination:{
                page:1,
                per_page:3,
            },
            paginas:[],
        } 
    },

        methods:{
            async listarBecerros(){
                const res = await axios.get('/api/fallecidas',{params: this.pagination});
                this.becerros = res.data[0];
                this.listarPaginasBecerros();
            },
            async listarNovillas(){
                const res = await axios.get('api/fallecidas');
                this.novillas = res.data[1];
                this.listarPaginasNovillas();
            },
            async listarVacas(){
                const res = await axios.get('api/fallecidas');
                this.vacas = res.data[2];
                this.listarPaginasVacas();
            },
            listarPaginasBecerros(){
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
        listarPaginasNovillas(){
                const n = 2
                let arrayN=[]
                let ini = this.pagination.page - 2
                if (ini<1) {
                    ini = 1
                }
                let fin = this.pagination.page + 2
                if (fin>this.novillas.last_page) {
                    fin = this.novillas.last_page
                }
                for (let i = ini; i <= fin; i++){
                    arrayN.push(i);
                }
                this.paginas = arrayN
        },
        listarPaginasVacas(){
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
        },
        created() {
        this.listarBecerros();
        this.listarNovillas();
        this.listarVacas();
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
#listarTablas{
    margin-top: 1.3em;
    margin-left: 49px;
    width: 230px;
    height: 45px;
    font-size: 16px;
}
#mensajeRegistros{
    margin-top: -2em;
}
#paginador{
    margin-left: 780px;
    margin-top: -3.5em;
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
</style>