import GrupoDeTitulos from "./grupodetitulos/grupodetitulos";
import CriandoBlocoDeTexto from "./blocodetexto/blocodetexto";
import CriandoImagemConteudo from "./imagemconteudo/imagemconteudo";
import container from '../../components/container.module.scss';

export default function criandoBlocoDeConteudo({sectionsolicitada} : {sectionsolicitada:number}){

    return(
        <section>
            <div className={container.container}>
                <GrupoDeTitulos
                    sectionsolicitada={sectionsolicitada}
                />
                <CriandoBlocoDeTexto
                    blocodetextosolicitado={sectionsolicitada}
                />
            </div>
            <div className={container.container}>
                <CriandoImagemConteudo
                    imagemsolicitada={sectionsolicitada}
                />
            </div>
        </section>
    )
}