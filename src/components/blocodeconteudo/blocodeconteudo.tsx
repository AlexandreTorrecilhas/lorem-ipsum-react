import GrupoDeTitulos from "./grupodetitulos/grupodetitulos";
import CriandoBlocoDeTexto from "./blocodetexto/blocodetexto";
import CriandoImagemConteudo from "./imagemconteudo/imagemconteudo";
import container from '../../components/container.module.scss';
import style from './blocodeconteudo.module.scss';

export default function criandoBlocoDeConteudo({sectionsolicitada} : {sectionsolicitada:number}){

    return(
        <div className={container.container}>
            <section className={style.blocodeconteudo}>
                <div className={style.blocodetexto}>
                   <GrupoDeTitulos
                        sectionsolicitada={sectionsolicitada}
                    />
                    <CriandoBlocoDeTexto
                        blocodetextosolicitado={sectionsolicitada}
                    />
                </div>
                <div className={style.blocodeimagem}>
                    <CriandoImagemConteudo
                        imagemsolicitada={sectionsolicitada}
                    />
                </div>
            </section>
        </div>
    )
}