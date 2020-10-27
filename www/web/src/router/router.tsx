import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Landing } from '../views/Landing'
import { OrphangesMap } from '../views/OrphangesMap'
import { CreateOrphanage } from '../views/CreateOrphanage'
import { Orphanage } from '../views/Orphanage'

export const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Landing} />
        <Route path='/app' component={OrphangesMap} />
        <Route path='/orphanages/create' component={CreateOrphanage} />
        <Route path='/orphanages/:id' component={Orphanage} />
      </Switch>
    </BrowserRouter>
  )
}
