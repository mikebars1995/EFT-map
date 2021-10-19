class MapGame extends Component {
    constructor() {
        super()
        // this.onDrag = this.onDrag.bind(this)
    }

    get template() {
        return `<img src="mapCoast.jpeg" width="auto" height="auto" id="mapCoast" onclick="return false" class="draggable map" >`
    }

    onZoom() {
        document.addEventListener('mousewheel', function (event) {
            // event.preventDefault()

            const zoomElement = event.target.closest('.draggable')
            const width = zoomElement.clientWidth
            if (event.deltaY < 0) {
                zoomElement.style.width = `${zoomElement.clientWidth + 75}px`
                zoomElement.style.height = `${zoomElement.clientHeight + 50}px`
            } else {
                zoomElement.style.width = `${zoomElement.clientWidth - 75}px`
                zoomElement.style.height = `${zoomElement.clientHeight - 50}px`
            }
            console.log(width)
            console.log(event.deltaY)
            // if (!zoomElement) return
        })

    
    }

    onDrag() {
        let isDragging = false;

        document.addEventListener('mousedown', function (event) {

            const dragElement = event.target.closest('.draggable');

            if (!dragElement) return;

            event.preventDefault();

            dragElement.ondragstart = function () {
                return false;
            };

            let coords, shiftX, shiftY;

            startDrag(dragElement, event.pageX, event.pageY);

            function onMouseUp(event) {
                finishDrag();
            };
            function onMouseOut(event) {
                finishDrag();
            };

            function onMouseMove(event) {
                moveAt(event.pageX, event.pageY);
            }

            // в начале перемещения элемента:
            //   запоминаем место клика по элементу (shiftX, shiftY),
            //   переключаем позиционирование элемента (position:fixed) и двигаем элемент
            function startDrag(element, pageX, pageY) {
                if (isDragging) {
                    return;
                }

                isDragging = true;

                document.addEventListener('mousemove', onMouseMove);
                element.addEventListener('mouseup', onMouseUp);
                element.addEventListener('mouseout', onMouseOut);

                shiftX = pageX - element.getBoundingClientRect().left;
                shiftY = pageY - element.getBoundingClientRect().top;

                element.style.position = 'fixed';

                moveAt(pageX, pageY);


            };

            // переключаемся обратно на абсолютные координаты
            // чтобы закрепить элемент относительно документа
            function finishDrag() {
                if (!isDragging) {
                    return;
                }

                isDragging = false;

                dragElement.style.top = `${parseInt(dragElement.style.top)}px`;
                dragElement.style.position = 'absolute';

                document.removeEventListener('mousemove', onMouseMove);
                dragElement.removeEventListener('mouseup', onMouseUp);
                dragElement.removeEventListener('mouseout', onMouseOut);
            }

            function moveAt(pageX, pageY) {
                const newX = pageX - shiftX;
                const newY = pageY - shiftY;
                dragElement.style.left = newX + 'px';
                dragElement.style.top = newY + 'px';
            }

        });
    }
}