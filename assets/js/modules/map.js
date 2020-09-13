import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

export default class Map {

    static init () {
        let map = document.querySelector('#map')
        if (map === null) {
            return
        }
        let icon = L.icon({
            iconUrl: '/images/marker-icon.png',
        })
        let center = [map.dataset.lat, map.dataset.lng]
        map = L.map('map').setView(center, 13)
        let token = 'pk.eyJ1Ijoic2hpa3NoaWsiLCJhIjoiY2tmMHQwYnpiMGVkdzJzbWpobzQ2aHFkYyJ9.bPrZOySbTyRk5XW9N97J3A'
        L.tileLayer(`https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png?access_token=${token}`, {
            maxZoom: 18,
            minZoom: 12,
            attribution: '© <a href="https://www.mapbox.com/feedback/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(map)
        L.marker(center, {icon: icon}).addTo(map)
    }
}
