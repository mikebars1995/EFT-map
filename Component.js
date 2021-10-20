class Component {
	constructor() {
		if (new.target === Component) {
			throw new Error(`Can't instantiate Component, only concrete one.`);
		}
	}

	get template() {
		throw new Error(`You have to define template.`);
	}

	static createElement(template) {
		const createNewTag = document.createElement(`div`);
		createNewTag.innerHTML = template;
		return createNewTag.firstChild;
	}

	render() {
		this.element = Component.createElement(this.template);
		this.setEventListener();
		return this.element;
	}
	removeItem() {
		this.removeEventListener();
		this.element.remove();
		this.element = null;
		
	}

	setEventListener() {}
	removeEventListener() {}

}
