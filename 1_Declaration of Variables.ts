type Age = number;
type Name = String;
type Player = {
    name:string,
    age?:Age
}
const playerMarker = (name:string) : Player =>({name})
const grace = playerMarker("grace")
grace.age= 12
