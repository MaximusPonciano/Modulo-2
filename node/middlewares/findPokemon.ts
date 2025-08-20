import { json } from 'co-body'

export async function findPokemon(ctx: Context) {
  const {
    clients: { pokemon: pokeClient },
  } = ctx

  const body = await json(ctx.req)


  if (!body || !body.id) {
    ctx.status = 400
    ctx.body = 'Por favor, informe o ID do Pokémon'
    return
  }

  const id = body.id

  try {
    const response = await pokeClient.getPokeById(Number(id))

    if (response.height >= 15) {
      ctx.status = 400
      ctx.body = 'O Pokémon é muito grande.'
      return
    }

    ctx.status = 200
    ctx.body = response
  } catch (error) {
    console.error('Erro ao buscar Pokémon:', error)
    ctx.status = 500
    ctx.body = 'Erro ao buscar o Pokémon.'
  }
}
