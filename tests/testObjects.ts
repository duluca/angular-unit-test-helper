import { BehaviorSubject } from 'rxjs'

export interface ICurrentWeather {
  city: string
  country: string
  date: number
  image: string
  temperature: number
  description: string
}

export const fakeWeather: ICurrentWeather = {
  city: 'Bethesda',
  country: 'US',
  date: 1485789600,
  image: '',
  temperature: 280.32,
  description: 'light intensity drizzle',
}

export const defaultWeather: ICurrentWeather = {
  city: '--',
  country: '--',
  date: Date.now(),
  image: '',
  temperature: 0,
  description: '',
}

export class WeatherService {
  readonly currentWeather$ = new BehaviorSubject<ICurrentWeather>(defaultWeather)

  constructor(a: string, b: string) {
    console.log(a + b)
  }
}
