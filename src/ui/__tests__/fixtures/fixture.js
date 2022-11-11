export default `<div class="container-fluid">
<div class="row fondo-transparente">
    <div class="col-12 py-2">
        <img class="imagen-cabecera" src="./img/pokedex.png" alt=""  />
    </div>
</div>

<div class="row pt-4">
    <div class="col-md-7" id="panelLateral">
        <div class="row">
            <div class="col-md-12" id="cuerpoPanelLateral">
                <div class="grid-container">
                    <div class="grid-item" id="item1"></div>
                    <div class="grid-item" id="item2"></div>
                    <div class="grid-item" id="item3"></div>
                    <div class="grid-item" id="item4"></div>
                    <div class="grid-item" id="item5"></div>
                    <div class="grid-item" id="item6"></div>
                    <div class="grid-item" id="item7"></div>
                    <div class="grid-item" id="item8"></div>
                    <div class="grid-item" id="item9"></div>
                    <div class="grid-item" id="item10"></div>
                    <div class="grid-item" id="item11"></div>
                    <div class="grid-item" id="item12"></div>
                    <div class="grid-item" id="item13"></div>
                    <div class="grid-item" id="item14"></div>
                    <div class="grid-item" id="item15"></div>
                    <div class="grid-item" id="item16"></div>
                    <div class="grid-item" id="item17"></div>
                    <div class="grid-item" id="item18"></div>
                    <div class="grid-item" id="item19"></div>
                    <div class="grid-item" id="item20"></div>                        
                </div>
            </div>
        </div>
        <div class="row">
            <div class="d-flex justify-content-center pt-4" id="botonesAnteriorSiguiente">
                <button class="btn btn-outline-success btn-lg me-4" id="botonAnterior">Anterior</button><button class="btn btn-outline-success btn-lg ms-4" id="botonSiguiente">Siguiente</button>
            </div>
        </div>
        <div class="row">
            <div class="col-md-1"></div>
            <div class="col-md-10 text-center" id="piePanelLateral"></div>
            <div class="col-md-1"></div>
        </div>
    </div>
    <div class="col-md-5" id="panelCentral">
        <div class="row">
            <div class="col-md-2"></div>
            <div class="col-md-8 py-2" id="cuerpoPanelCentral">
                <div class="card container" id="tarjetaGrande">
                        <img src="#" alt="" class="img-fluid d-block my-auto py-auto p-3" id="fotoGrandePokemon">
                </div>
                <div class="cardBody">
                        <h4 class="card-title" id="nombrePokemonPanelCentral" style="background:#198754;color:#FDF9AE;"></h4>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item" id="cardPeso"> </li>
                            <li class="list-group-item" id="cardAltura"> </li>
                            <li class="list-group-item" id="cardTipo"> </li>
                        </ul>
                </div>
            </div>
            <div class="col-md-2"></div>
        </div>
        <div class="row">
            <div class="col-md-2"></div>
            <div class="col-md-8 text-center fondo-transparente" id="piePanelCentral" style="padding-top: 2rem; ">
                <form class="inline-form size-form" method="post" id="from">
                    <div class="input mb-3" id="formularioDeBusqueda">
                        <input type="text" id="nombreONumeroPokemon" class="form-control" placeholder="Encuentra por numero o nómbre" minlength="1" required><br>
                        <button class="btn btn-outline-secondary form-control" for="nombreONumeroPokemon" type="button" id="buttonBuscar">Buscar Pokemon</button><br>
                        <label for="nombreONumeroPokemon" class="text-danger" id="mensajeError"></label>
                    </div>
                </form>
            </div>
            <div class="col-md-2"></div>
        </div>
    </div>
</div>
</div>`