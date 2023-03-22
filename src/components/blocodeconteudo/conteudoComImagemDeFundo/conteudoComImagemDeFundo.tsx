import CriandoBlocoDeTexto from "../blocodetexto/blocodetexto";
import GrupoDeTitulos from "../grupodetitulos/grupodetitulos";
import style from './conteudoComImagemDeFundo.module.scss';
import stylesection from '../blocodeconteudo.module.scss';
import containerstyle from '../../../components/container.module.scss';

export default function criandoConteudoComImagemDeFundo({sectionsolicitada} : {sectionsolicitada:number}){
    return(
        <div className={containerstyle.container}>
            <div className={style.blocoDeConteudo}>
                <section className={stylesection.blocodeconteudo}>
                    <div className={stylesection.blocodetexto}>
                        <GrupoDeTitulos
                            sectionsolicitada={sectionsolicitada}
                        />
                        <CriandoBlocoDeTexto
                            blocodetextosolicitado={sectionsolicitada}
                       />
                    </div>
                    <div className={stylesection.blocodeimagem}>

                    </div>
                </section>
            </div>
        </div>
    )
}