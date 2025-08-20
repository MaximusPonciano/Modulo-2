import type { InstanceOptions, IOContext } from '@vtex/api'
import { ExternalClient } from '@vtex/api'
import type { Pokemon } from './pokemon'

export default class PokeClient extends ExternalClient {
  constructor(context: IOContext, options?: InstanceOptions) {
    super('https://pokeapi.co/api/v2/pokemon', context, options)
  }

  public async getPokeById(id: number): Promise<Pokemon> {
  return this.http.get(`/${id}`)
  }
}
