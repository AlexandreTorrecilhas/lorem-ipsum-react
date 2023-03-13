import style from './logo.module.scss'

export default function createLogo(){
    
    return(
        <div className={style.boxLogo}>
            <div className={style.simboloLogo}>
                <span>AA</span>
            </div>
            <div className={style.nomeEmpresa}>
                <span>Lorem Ipsum</span>
            </div>
        </div>
    )

}