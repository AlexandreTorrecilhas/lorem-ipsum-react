import CreateItem from './itemLink/itemlink';
import style from './link.module.scss';

export default function createLinksNavegacao(){
    const opcoesLink = [
        {
            opcao: 'Home'
        },
        {
            opcao: 'Sobre nós'
        },
        {
            opcao: 'Servicos'
        },
        {
            opcao: 'Contato'
        }
    ];

    return(
        <nav id='navMenu' className={style.boxNav}>
            {
                opcoesLink.map((opcoesLink, index) => (
                    <div>
                        <CreateItem
                            opcao={opcoesLink.opcao}
                        />    
                    </div>
                ))
            }
        </nav>
    )
}