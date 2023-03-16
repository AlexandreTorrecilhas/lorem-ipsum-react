import LinksNavegacao from './linksnavegacao/linksnavegacao';
import CriandoLogo from './logopagina/logopagina';
import BotaoMenu from './botaomenu/botaomenu';
import CriandoImagemDeFundo from './imagemfundocabecalho/imagemfundocabecalho';
import style from './cabecalho.module.scss';
import container from '../../components/container.module.scss';

export default function CriandoCabecalho({primeiroValor, segundoValor} : {primeiroValor:number, segundoValor:number}){
    return(
        <header>
            <div className={container.container}>
                <div className={style.cabecalho}>
                    <CriandoLogo/>
                    <LinksNavegacao/>
                    <BotaoMenu/>
                </div>
            </div>
            <div className={style.imagemfundo}>
                <CriandoImagemDeFundo
                    primeiroValor={primeiroValor}
                    segundoValor={segundoValor}
                />
            </div>
        </header>
    )
}