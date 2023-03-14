import LinksItem from './linksitem/linksitem'
import style from './linksnavegacao.module.scss'

export default function CriandoLinksNavegacao(){
    const opcao = [
        {
            opcaonome: 'Home' 
        },
        {
            opcaonome: 'Sobre Nos'
        },
        {
            opcaonome: 'Servicos'
        },
        {
            opcaonome: 'Contato'
        }
    ];

    return <>{
        <nav id='navmenu' className={style.boxlinks}>
            {
                opcao.map((opcao, index) => (
                    <LinksItem
                        key={index}
                        opcao={opcao.opcaonome}
                    />
                ))
            }
        </nav>
    }</>
}