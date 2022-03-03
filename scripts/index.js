function viewMore() {
    let refToViewMore = document.getElementById('viewMoreBtn');
    console.log('inside');
    if(refToViewMore.innerText === 'View More'){
        const moreElements = document.querySelectorAll('.more');
        moreElements.forEach(element => {
            element.style.display = 'flex';
        })
        refToViewMore.innerText = 'View Less';
    }
    else {
        const moreElements = document.querySelectorAll('.more');
        moreElements.forEach(element => {
            element.style.display = 'none';
        })
        refToViewMore.innerText = 'View More';
    }
}