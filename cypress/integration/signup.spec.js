import signup from '../pages/SignupPage'
import signupFactory from '../factories/SignupFactory' 

describe('Signup', () => {

// beforeEach(()=> {
//     cy.fixture('deliver').then(function (d) {
//         this.deliver = d
//     })
// })

    // before(function(){
    //     cy.log("Tudo aqui é executado uma única vez ANTES de TODOS os casos de testes")
    // })

    // beforeEach(function() {
    //     cy.log("Tudo aqui é executado sempre ANTES de CADA os caso de teste")
    // })

    // after(function(){
    //     cy.log("Tudo aqui é executado uma única vez DEPOIS de TODOS os casos de testes")
    // })

    // afterEach(function() {
    //     cy.log("Tudo aqui é executado sempre DEPOIS de CADA os caso de teste")
    // })

    it('User should be deliver', function (){

        var deliver = signupFactory.deliver()

        signup.go()
        signup.fillForm(deliver)
        signup.submit()
        
        const expectedMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'
        signup.modalContentShouldBe(expectedMessage)
           })

    it('Incorrect document', function (){

        var deliver = signupFactory.deliver()

        deliver.cpf = '000000000AA'

        signup.go()
        signup.fillForm(deliver)
        signup.submit()
        signup.alertMessageShouldBe('Oops! CPF inválido')
    })

    it('Incorrect email', function (){

        var deliver = signupFactory.deliver()
        
        deliver.email = 'wil.com.br'

        signup.go()
        signup.fillForm(deliver)
        signup.submit()
        signup.alertMessageShouldBe('Oops! Email com formato inválido.')
    })
})