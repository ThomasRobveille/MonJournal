const data = [1,2,3,4,5]

for(i=0; i < data.length; i++){
    const container = document.getElementById('caroussel')
    const li = document.createElement('li')

    li.className = "projet"
    container.appendChild(li)
}