
	function setSelector(val){
		return document.querySelector(val)
	}

	var prev = setSelector(".right-column");
	// console.log(prev);
	// console.log(prev.previousElementSibling)

	setSelector("span.fa-bars").addEventListener("click", function() {
		var slide = prev.previousElementSibling;
		// console.log(slide);
		if (slide.style.maxHeight) {
			slide.style.maxHeight = null;
		} else {
			slide.style.maxHeight = slide.scrollHeight + "px";
		}
	})