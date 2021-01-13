import { useFish } from './fish/FishDataProvider.js'
import { FishList } from './fish/FishList.js'
import { LocationList } from './locations/LocationList.js'
import { QuoteList } from './quotes/QuoteList.js'

const allTheFish = useFish()

for (const fish of allTheFish) {
    console.log(fish)
}

FishList()
LocationList()
QuoteList()