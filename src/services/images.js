export const getRandomImage = async (fact) => {
    const firstword = fact.split(' ')[0]
    const res = await fetch(`https://cataas.com/cat/says/${firstword}?json=true&width=500&height=500`)
    const data = await res.json()
    const { url } = data
    return url
}
