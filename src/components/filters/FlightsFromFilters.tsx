import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue
} from '@/components/ui/select'
import { FLIGHTS } from '../FlightsList/flights.data'

interface Props {
	fromCountry: string | null
	setFromCountry: (country: string | null) => void
}

const fromCountries: string[] = [
	...new Set(FLIGHTS.map(flight => flight.from.country))
]

export function FlightsFromFilters({ fromCountry, setFromCountry }: Props) {
	return (
		<Select
			onValueChange={value => setFromCountry(value === 'all' ? null : value)}
			defaultValue={fromCountry || undefined}
		>
			<SelectTrigger className="w-full">
				<SelectValue placeholder="Choose Country From" />
			</SelectTrigger>
			<SelectContent>
				<SelectItem value="all">All</SelectItem>
				{fromCountries.map(country => (
					<SelectItem
						key={country}
						value={country}
					>
						{country}
					</SelectItem>
				))}
			</SelectContent>
		</Select>
	)
}
