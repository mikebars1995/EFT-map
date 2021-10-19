window.onload = () => {
    const map = new MapGame()
    const mapElement = new MapElement()
    const mapRender = () => {
        mapForm = document.getElementById('mapForm')
        mapForm.appendChild(map.render())
        map.onDrag()
        map.onZoom()
    }
    mapRender()

    const mapElementRender = () => {
        mapGame = document.getElementsByClassName('.map')
        mapForm.appendChild(mapElement.render())
    }
    mapElementRender()
    // imageZoom("map", "myresult")

    function getCoords(elem) {
        let box = elem.getBoundingClientRect();

        return {
            top: box.top + pageYOffset,
            left: box.left + pageXOffset
        };
    }
    const mapCoast = document.getElementById('mapCoast')
    mapForm.style.left = mapCoast.getBoundingClientRect().left + 'px'
    mapForm.style.top = mapCoast.getBoundingClientRect().top + 'px'
    const anchorCoords = getCoords(mapCoast)
    console.log(anchorCoords)
    const mapElem = document.getElementById('mapElem')
    document.addEventListener('mousedown', () => {

        mapElem.style.left = `${anchorCoords.left}px`
        mapElem.style.top = `${anchorCoords.top}px`
    })








}