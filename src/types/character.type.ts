export interface ICharacter {
    id: number,
    name: string,
    status: string,
    species: string,
    gender: string,
    origin: {
        name: string,
        url: string,
    },
    image: string,
    episode: string[],
    favourite?: boolean
}