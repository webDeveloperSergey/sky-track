export function getDataFromLS(key: string): string[] {
	const dataLS = localStorage.getItem(key)

	if (!dataLS) return []

	return JSON.parse(dataLS)
}

export function setDataToLS(key: string, data: string[]): boolean {
	if (!key || !data) {
		console.error('Invalid key or data for Local Storage')
		return false
	}

	try {
		localStorage.setItem(key, JSON.stringify(data))
		return true
	} catch (error) {
		console.error('Failed to save to Local Storage:', error)

		if (error instanceof DOMException && error.name === 'QuotaExceededError')
			console.error('Storage quota exceeded')

		return false
	}
}
