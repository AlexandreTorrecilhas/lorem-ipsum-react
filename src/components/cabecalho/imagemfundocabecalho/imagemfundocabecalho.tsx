import cellbanner from '../../../img/cell-banner.png';
import style from './imagemfundo.module.scss';

export default function criandoImagemDeFundo({primeiroValor, segundoValor} : {primeiroValor:number, segundoValor:number}){

    const imagens = [
        cellbanner
        //['../../../img/banner-normal.png'], ['../../../img/cell-banner.png']
    ]

    return(
        <img className={style.imagemfundo} src={imagens[primeiroValor]} alt="" />
    )
}