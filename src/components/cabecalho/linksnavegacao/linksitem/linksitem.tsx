import style from './link.module.scss'

export default function CriandoLinks({opcao} : {opcao:string}){
    return(
        <a className={style.link} href="">{opcao}</a>
    )
}