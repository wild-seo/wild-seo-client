// @ts-ignore
export function checkSEO(node) {
	if (node.checked) {
		node.parentNode.classList.add('checkedBgSEO');
	} else {
		node.parentNode.classList.add('standardBg');
	}

	function handleChange() {
		if (node.checked) {
			node.parentNode.classList.add('checkedBgSEO');
			node.parentNode.classList.remove('standardBg');
		} else {
			node.parentNode.classList.remove('checkedBgSEO');
			node.parentNode.classList.add('standardBg');
		}
	}

	node.addEventListener('change', handleChange);

	return {
		destroy() {
			node.removeEventListener('change', handleChange);
		}
	};
}

// @ts-ignore
export function checkMetric(node) {
	if (node.checked) {
		node.parentNode.classList.add('checkedBgMetric');
	} else {
		node.parentNode.classList.add('standardBg');
	}

	function handleChange() {
		if (node.checked) {
			node.parentNode.classList.add('checkedBgMetric');
			node.parentNode.classList.remove('standardBg');
		} else {
			node.parentNode.classList.remove('checkedBgMetric');
			node.parentNode.classList.add('standardBg');
		}
	}

	node.addEventListener('change', handleChange);

	return {
		destroy() {
			node.removeEventListener('change', handleChange);
		}
	};
}

// @ts-ignore
export function checkSitePurpose(node) {
	if (node.checked) {
		node.parentNode.classList.add('checkedBgSitePurpose');
	} else {
		node.parentNode.classList.add('standardBg');
	}

	function handleChange() {
		console.log('IN CHANGE');
		console.log(node.checked);
		if (node.checked) {
			node.parentNode.classList.add('checkedBgSitePurpose');
			node.parentNode.classList.remove('standardBg');
		} else {
			node.parentNode.classList.remove('checkedBgSitePurpose');
			node.parentNode.classList.add('standardBg');
		}
	}

	setInterval(handleChange, 1000);

	node.addEventListener('change', handleChange);

	return {
		destroy() {
			node.removeEventListener('change', handleChange);
		}
	};
}
