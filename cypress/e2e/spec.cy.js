describe('pruebas pokedex', () => {
  it('se asegura que exista el sitio', () => {
    cy.visit('http://192.168.0.2:8080')
  })

  it('se asegura que existan las 20 tarjetas del listado principal y sus componentes', () => {
    cy.get('.grid-item').should('have.length', 20).should('be.visible');

  })

  it('se asegura que exista la tarjeta central', () => {
    cy.get('#tarjetaGrande').should('be.visible');
  })

  it('se asegura que se muestre el formulario de busqueda', () =>{
    cy.get('#from').should('be.visible');
    cy.get('#nombreONumeroPokemon').should('be.visible');
    cy.get('#buttonBuscar').should('be.visible');
  })

  it('se asegura que funcione el formulario de busqueda', () =>{
    const nroBuscar = 13;
    cy.wait(200)
    cy.get('#nombreONumeroPokemon').clear().type(nroBuscar);
    cy.get('#buttonBuscar').click();
    cy.get('#nombrePokemonPanelCentral').contains(nroBuscar)
  })

  it('se asegura que el buscador falle con un numero no válido', () => {
    cy.get('#nombreONumeroPokemon').clear().type('-1');
    cy.get('#buttonBuscar').click();
    cy.get('#mensajeError').contains('Solo se aceptan letras o numeros')
  })

  it('se asegura que se muestra la advertencia al buscar un numero de pokemon no valido', () =>{
    cy.get('#nombreONumeroPokemon').clear().type('100000');
    cy.get('#buttonBuscar').click();
    cy.get('#mensajeError').contains('No pudimos encontrar ese Pokemon');
  })

  it('se asegura que se actualize el listado al dar click en siguiente pagina', () => {
    cy.get('#item1 > .card > .card-body > .nombre-pokemon-listado').then(($btn) => {
      const primerNombre = $btn[0].innerHTML;
      cy.get('#botonSiguiente').click();
      cy.wait(200)
      cy.get('#item1 > .card > .card-body > .nombre-pokemon-listado').then(($btn) => {
        expect(primerNombre).to.not.equal($btn[0].innerHTML);
      })
    })
  })

  it('se asegura que se actualize el listado al dar click en una pagina cualquiera', () => {
    cy.wait(500);
    const nroDePagina = 14;
    cy.get('#item1 > .card > .card-body > .nombre-pokemon-listado').then(($btn) => {
      const primerNombre = $btn[0].innerHTML;
      cy.get(`#anchor${nroDePagina}`).click();
      cy.wait(200)
      cy.get('#item1 > .card > .card-body > .nombre-pokemon-listado').then(($btn) => {
        expect(primerNombre).to.not.equal($btn[0].innerHTML);
      })
    })
  })
}) 