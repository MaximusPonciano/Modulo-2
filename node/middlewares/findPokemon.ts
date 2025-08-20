
export async function findPokemon(ctx: Context) {
  const {
    clients: { pokemon: pokeClient },
    vtex: { route },
  } = ctx

  const id = route.params.id

  if (!id) {
    ctx.status = 400
    ctx.body = 'Por favor, informe o ID do Pokemon.'
    return
  }

  const height = Number(route.params.height)

  if (height >= 15) {
    ctx.status = 400
    ctx.body = 'O pokemon é muito grande.'
    return
  }

  const response = await pokeClient.getPokeById(Number(id))

  ctx.body = response
}
