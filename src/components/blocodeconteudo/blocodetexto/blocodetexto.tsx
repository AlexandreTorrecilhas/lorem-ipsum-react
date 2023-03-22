import style from './blocodetexto.module.scss';

export default function criandoBlocoDeTexto({blocodetextosolicitado} : {blocodetextosolicitado:number}){
    const textodassection = [
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium quis illo sapiente quasi incidunt exercitationem quas facere quos accusamus nobis deleniti ut dignissimos, iste a nemo cupiditate temporibus enim ipsa!',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi natus nesciunt iusto temporibus hic amet! Et quibusdam laudantium sequi alias veritatis hic, temporibus incidunt sapiente dolor illo consequuntur itaque dolorem.'
    ]

    return(
        <div>
            <p className={style.blocodetexto}>
                {
                    textodassection[blocodetextosolicitado]
                }
            </p>
        </div>
    )

}