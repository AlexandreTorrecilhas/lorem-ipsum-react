import React from 'react';
import imagemsobrenos from '../../../img/sobrenos.jpg';
import style from './imagemconteudo.module.scss';

export default function criandoImagemConteudo({imagemsolicitada} : {imagemsolicitada:number}){
    let imagens = [
        imagemsobrenos
    ]

return(
    <div>
        <img className={style.imagem} src={imagens[imagemsolicitada]} alt="" />
    </div>
)
}