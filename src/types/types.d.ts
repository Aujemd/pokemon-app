export type PokemonListResponse = {
  count?: number
  next?: string
  previous?: null
  results?: Result[]
}

export type Result = {
  name?: string
  url?: string
}

export type PokemonResponse = {
  height?: number
  id?: number
  name?: string
  sprites?: Sprites
  stats?: Stat[]
  types?: Type[]
}

export type Sprites = {
  'front_default'?: string
  other?: Other
}

export type OfficialArtwork = {
  front_default?: string
}

export type Species = {
  name?: string
  url?: string
}

export type Other = {
  'official-artwork'?: OfficialArtwork
}

export type Stat = {
  base_stat?: number
  effort?: number
  stat?: Species
}

export type Type = {
  slot?: number
  type?: Species
}
