
//porfolio
let filtersList = document.querySelectorAll('.button button');
console.log(filtersList)
filtersList.forEach(function(filterItem){
    filterItem.addEventListener('click', function(){
        document.querySelector('.button .active').classList.remove('active')
        this.classList.add('active')
    let active = document.querySelector('.button .active');
    let filterId = document.querySelectorAll('.filtre')
    filterId.forEach(function(filterIds){
        console.log('oeee')
        console.log(filterIds.id)
        console.log(filterIds)
        if(filterIds.id == active.id){
            console.log('iddddd')
            filterIds.classList.remove('none')
        }else{
            filterIds.classList.add('none')
        }
    })
    })
})

