import style from './blocodetexto.module.scss';

export default function criandoBlocoDeTexto({blocodetextosolicitado} : {blocodetextosolicitado:number}){
    const textodassection = [
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium quis illo sapiente quasi incidunt exercitationem quas facere quos accusamus nobis deleniti ut dignissimos, iste a nemo cupiditate temporibus enim ipsa!'
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