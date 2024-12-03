document.addEventListener('DOMContentLoaded', () => {
	const timerElement = document.querySelector('.timer__time')

	function updateTimer() {
		const nextYear = new Date().getFullYear() + 1
		const newYearDate = new Date(`January 1, ${nextYear} 00:00:00`).getTime()
		const currentTime = new Date().getTime()

		const timeDifference = newYearDate - currentTime

		const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24))
		const hours = Math.floor(
			(timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
		)
		const minutes = Math.floor(
			(timeDifference % (1000 * 60 * 60)) / (1000 * 60)
		)
		const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000)

		timerElement.textContent = `${days} днів, ${hours} год, ${minutes} хв, ${seconds} сек`

		if (timeDifference <= 0) {
			clearInterval(timerInterval)
			timerElement.textContent = 'З Новим Роком!'
		}
	}

	const timerInterval = setInterval(updateTimer, 1000)
})
