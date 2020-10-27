import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import mapMarkerImg from './../assets/images/Map-Mark.svg'
import { FiPlus, FiArrowRight } from 'react-icons/fi'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import './../styles/pages/orphanage-map.css'
import { mapIcon } from '../utils/mapIcon'
import { api } from '../services/api'
import { Orphanage } from '../models/Orphanage'


export const OrphangesMap = () => {
  const [orphanages, setOrphanages] = useState<Orphanage[]>([])
  
  useEffect(() => {
    api.get('orphanages').then(result => setOrphanages(result.data))
  }, [])

  return (
    <div id='page-map'>
      <aside>
        <header>
          <img src={mapMarkerImg} alt='Happy' />

          <h2>Escolha um orfanato</h2>
          <p>Muitas crianças estão esperando a sua visita :)</p>
        </header>

        <footer>
          <strong>Paulista</strong>
          <span>Pernambuco</span>
        </footer>
      </aside>

      <Map
        center={[-8.054599, -34.889779]}
        zoom={15}
        style={{
          width: '100%',
          height: '100%'
        }}
      >
        <TileLayer url='http://a.tile.openstreetmap.org/{z}/{x}/{y}.png' />

        {orphanages.map((x: Orphanage) => {
          return (
            <Marker
              key={x.id}
              icon={mapIcon}
              position={[x.latitude, x.longitude]}
            >
              <Popup
                closeButton={false}
                minWidth={240}
                maxWidth={240}
                className='map-popup'
              >
                {x.name}
                <Link to={`orphanages/${x.id}`}>
                  <FiArrowRight size={20} color='#FFF' />
                </Link>
              </Popup>
            </Marker>
          )
        })}
      </Map>

      <Link to='/orphanages/create' className='create-orphanage'>
        <FiPlus size={32} color='#FFF' />
      </Link>
    </div>
  )
}
