import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import LoginContainer from './pages/LoginContainer'
import NotFound from './pages/400'
import ProductoContainer from './pages/Productos/ProductoContainer'
import MesaContainer from './pages/Mesas/MesaContainer'
import PedidoContainer from './pages/Pedidos/PedidoContainer'
import PedidoNewContainer from './pages/Pedidos/PedidoNewContainer'

const App = () => (
  <BrowserRouter>
      <Switch>
          <Route exact path="/login" component={LoginContainer} />
          <Route exact path="/productos" component={ProductoContainer} />
          <Route exact path="/mesas" component={MesaContainer}/>
          <Route exact path="/pedidos" component={PedidoContainer}/>
          <Route exact path="/new/pedido" component={PedidoNewContainer}/>
          <Route component={NotFound}/>
      </Switch>
  </BrowserRouter>
)


export default App
