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
                    <div>
                        <CriandoLogo/>
                    </div>
                    <LinksNavegacao/>
                    <BotaoMenu/>
                </div>
            </div>
            <div className={style.imagemfundo}>
                <div className={container.container}>
                    <hgroup>
                        <h1>Somos a Lorem Ipsum</h1>
                        <h3>
                            Olá, somos a lorem Ipsum. Nosso trabalho é desenvolver textos de marcação
                        </h3>
                    </hgroup>
                </div>
            </div>
        </header>
    )
}