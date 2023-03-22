import style from './grupodetitulos.module.scss';

export default function grupoDeTitulos({sectionsolicitada} : {sectionsolicitada:number}){
    
    const VALORH1 = 0;
    const VALORH3 = 1;
    const titulos = [
        ['A Lorem Ipsum', 'Sobre Nós'],
        ['Saiba mais sobre os serviços', 'A Lorem Ipsum']
    ]

    return(
        <hgroup className={style.grupodetitulos}>
            <h3>
                {
                    titulos[sectionsolicitada][VALORH1]
                }
            </h3>
            <h1>
                {
                    titulos[sectionsolicitada][VALORH3]
                }
            </h1>
        </hgroup>
    )
}