document.addEventListener('DOMContentLoaded', () => {
	document.querySelector('.burgerNav').addEventListener('click', () => {
		document.querySelector('.burgerNav').classList.toggle('open')
		document.querySelector('.nav ul').classList.toggle('visible')
	})

	document.querySelector('.footerBody p span').innerHTML =
		new Date().getFullYear()
})
