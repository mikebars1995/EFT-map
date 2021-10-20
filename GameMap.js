class GameMap extends Component {
    constructor() {
        super()
        this.onDrag = this.onDrag.bind(this)
        this.onZoom = this.onZoom.bind(this)
    }
    setEventListener() {
        this.element.addEventListener('mousedown', this.onDrag)
        this.element.addEventListener('mousewheel', this.onZoom)
    }

    get template() {
        return `<img src="mapShoreline.jpg" width="auto" height="auto" id="mapCoast" onclick="return false" class="draggable map" >`
    }

    set onDragFn(fn) {
        this.onDrag = fn
    }

    set onZoomFn(fn) {
        this.onZoom = fn
    }

    onZoom(event) {
        event.preventDefault()
        return typeof this.onZoom === `function` && this.onZoom(event)
    }

    onDrag(event) {
        event.preventDefault()
        return typeof this.onDrag === `function` && this.onDrag(event)
    }
}