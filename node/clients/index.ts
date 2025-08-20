import { IOClients } from '@vtex/api'

import PokeClient from './PokeClient'


export class Clients extends IOClients {
  public get pokemon() {
    return this.getOrSet('pokemon', PokeClient)
  }
}