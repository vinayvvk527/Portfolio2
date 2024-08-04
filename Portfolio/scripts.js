
document.querySelector('.cross').style.display='none';
document.querySelector('.hamb').addEventListener('click',()=>{
    document.querySelector('.sidebar').classList.toggle('.sidebar');

    if (document.querySelector('.sidebar').classList.contains('.sidebar')){
        document.querySelector('.ham').style.display='inline';
        document.querySelector('.cross').style.display='none';

    }
    else{
        document.querySelector('.cross').style.display='inline';
        document.querySelector('.ham').style.display='none';

    }

});
