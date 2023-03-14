import LinksNavegacao from './linksnavegacao/linksnavegacao';
import CriandoLogo from './logopagina/logopagina';
import BotaoMenu from './botaomenu/botaomenu';
import style from './cabecalho.module.scss';
import container from '../../components/container.module.scss';

export default function CriandoCabecalho(){
    return(
        <div className={container.container}>
            <header className={style.cabecalho}>
                <CriandoLogo/>
                <LinksNavegacao/>
                <BotaoMenu/>
            </header>
        </div>
    )
}