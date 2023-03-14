let menustatus = false;

export default function ativaMenu(){
    if(menustatus == false){
        document.getElementById('navmenu').style.transform = 'translateY(0%)';
        document.getElementById('navmenu').style.transition = '1s';
        document.getElementById('botaomenu').innerText = 'Fechar';
        document.getElementById('botaomenu').style.backgroundColor = 'red';
        document.getElementById('botaomenu').style.border = 'none';
        document.getElementById('botaomenu').style.transition = '0.5s';
        menustatus = true;
    }
    else{
        document.getElementById('navmenu').style.transform = 'translateY(-110%)';
        document.getElementById('navmenu').style.transition = '1s';
        document.getElementById('botaomenu').innerText = 'Menu';
        document.getElementById('botaomenu').style.backgroundColor = 'purple';
        document.getElementById('botaomenu').style.transition = '0.5s';
        menustatus = false;
    }
}