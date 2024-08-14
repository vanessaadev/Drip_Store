import './CadUser.css'
import { HeaderInicio } from '../HeaderInicio/HeaderInicio.jsx'
import { Footer } from '../Footer/Footer.jsx'
import { ButtonRosa } from '../ButtonRosa/ButtonRosa.jsx'

export function CadUser() {
    return (        
        <>
        <HeaderInicio/>
        <div className='container-CadUser'>
        <h2>Criar Conta</h2>
            <div className='containerDateOne'>
            <h3>Informações Pessoais</h3>
            <label htmlFor='nome'>* Nome Completo:</label>
            <input type="text" id='nome' name='nome' placeholder='Insira seu nome' required/>

            <label htmlFor='cpf'>* CPF:</label>
            <input type="text" id='cpf' name='cpf' placeholder='Insira seu CPF' required />

            <label htmlFor="email">* E-mail:</label>
            <input type="text" id='email' name='email' placeholder='Insira seu e-mail' required/>

            <label htmlFor="telefone">* Celular:</label>
            <input type="text" id='telefone' name='telefone' placeholder='Insira seu celular' required/>
            </div>

            <div className='containerDateOne'>
            <h3>Informações de Entrega</h3>
            <label htmlFor='endereco'>* Endereço:</label>
            <input type="text" id='endereco' name='endereco' placeholder='Insira seu endereço' required/>

            <label htmlFor='bairro'>* Bairro:</label>
            <input type="text" id='bairro' name='bairro' placeholder='Insira seu bairro' required />

            <label htmlFor="cidade">* Cidade:</label>
            <input type="text" id='cidade' name='cidade' placeholder='Insira seu e-mail' required/>

            <label htmlFor="cep">* CEP:</label>
            <input type="text" id='cep' name='cep' placeholder='Insira seu CEP' required/>

            <label htmlFor="complemento">Complemento:</label>
            <input type="text" id='complemento' name='complemento' placeholder='Insira complemento' required/>
            </div>

            <div className='containerCheck'>
                <input type="checkbox" />
                <p>Quero receber por e-mail, ofertas e novidades das lojas da Digital Store. A frequência de envios pode variar de acordo com a interação do cliente.</p>
            </div>

            <div className='buttonCadastro'>
                <button>Criar Conta</button>
            </div>
            
        </div> 
        <Footer/>
        </>
               
    )
}