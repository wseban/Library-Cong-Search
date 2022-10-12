let center = [4, 44.4]
const map = tt.map({
    key: 'IGkKkr9lTGqbUJAvV4QPUVTyT1ACs4XG',
    container: 'map',
    center: center,
    zoom: 10
})
map.on('load', () =>  {
    new tt.Marker().setLngLat(center).addTo(map)
})      