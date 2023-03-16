import style from './logopagina.module.scss'
import containerstyle from '../../container.module.scss'

export default function criandoLogo(){
    return(
        <div className={style.boxlogo}>
            <div className={style.boxsimbolopagina}>
                    <span>''</span>
                </div>
            <div className={style.boxnomeempresa}>
                    <span>Lorem Ipsum</span>
            </div>
        </div>
    )
}