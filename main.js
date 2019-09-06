var modalBtn = document.getElementById('modalbtn');

var modal = document.getElementById('modal');

var modalContent = document.getElementById('modalContent');

var closeBtn = document.getElementsByClassName('closebtn')[0];

modalBtn.addEventListener('click', openModal);

function openModal(){
    modal.style.display='block';
}

closeBtn.addEventListener('click', closeModal);

function closeModal(){
    modal.style.display='none';
}

window.addEventListener('click',outsideModal )

function outsideModal(e){
    if(e.target == modal){
        modal.style.display='none';
    } 
}