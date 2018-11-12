import { GiphySearchService } from "../giphy-search.service";

describe('giphy-search.service.spec.ts', () => {

    // no [] vai colocar os metódos que quer mockar
    // que o obj precisa responder caso seja chamado
    const httpMock = jasmine.createSpyObj('Http', ['get']);
    let service: GiphySearchService;
    beforeEach(() => {

        service: new GiphySearchService(null);
        // onde colocar inicializações que vão valer para todos os testes
        // que estiverem dentro do describe

        // para todos os each sempre vai criar uma instancia do objeto

    })

    // f na frente do it idica que quer que o
    //  teste automatizado seja apenas nele
    // ou f na frente do describe indica que todos os 
    //metodos it dentro do describe vão rodar
    // fit('2 deveria ser igual a 2', () => {
    //     // entrada
    //     let a = 0;

    //     // processamento

    //     a = 0 + 1;

    //     // saída
    //     expect(a).toBe(2);


    // });

    it('pesquisarGiphy', () => {
        service.pesquisarGiphy('1', 'happy');
        
        expect(httpMock.get).toHaveBeenCalled();

        
        });

    // testando o método pesquisarGiphy
    it('getUrl', () => {

        const url = service.getUrl('2', 'happy');

        expect(url)
        .toBe('https://api.giphy.com/v1/gifs/search?q=happy&api_key=dc6zaTOxFJmzC&limit=2');
    });

    
});