import LinksNavegacao from './linksnavegacao/linksnavegacao';
import CriandoLogo from './logopagina/logopagina';
import BotaoMenu from './botaomenu/botaomenu';
import style from './cabecalho.module.scss';
import container from '../../components/container.module.scss';

export default function CriandoCabecalho(){
    return(
        <header>
            <div className={container.container}>
                <div className={style.cabecalho}>
                    <CriandoLogo/>
                    <LinksNavegacao/>
                    <BotaoMenu/>
                </div>
            </div>
            <div id='imagemfundo' className={style.imagemfundo}>

            </div>
        </header>
    )
}