const characters = [
    {
        name: 'Frodo',
        hasRing: false
    },
    {
        name: 'Bilbo',
        hasRing: false
    }
]

function stealRing(characters, owner) { 
    return characters.map((item) => {
        if (item.name == owner) {
            return {
                name: item.name,
                hasRing: true,
            };
        } else {
            return {
                name: item.name,
                hasRing: false,
            }
        }
    });
};

module.exports = {characters, stealRing}