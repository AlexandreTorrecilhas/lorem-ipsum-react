import style from './botaomenu.module.scss'
import ativaMenu from './ativamenu'

export default function botaoMenu(){
    return(
        <div id='botaomenu' className={style.botaomenu} onClick={ativaMenu}>
            <span>Menu</span>
        </div>
    )
}