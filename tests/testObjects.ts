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

export abstract class AbstractWeatherService {
  abstract readonly currentWeather$: BehaviorSubject<ICurrentWeather>

  abstract get color(): string

  constructor(public a: string, public b: string) {}
}

export class WeatherService extends AbstractWeatherService {
  readonly currentWeather$ = new BehaviorSubject<ICurrentWeather>(defaultWeather)

  get color() {
    return 'red'
  }
}
