import RenderOnRole from './components/RenderOnRole'
import RenderOnAllRole from './components/RenderOnAllRole'

import UserService from './services/auth-service'
import Customers from './features/products/components/customers'

function App() {

  return (
    <>

      
      <p>Username: {UserService.getUsername()}</p>
      <p>Email: {UserService.getUserEmail()}</p>
    
      <button onClick={UserService.doLogout}>Logout</button>

      <RenderOnRole roles={['feature-a']}>
        <div>
          <h4>This will be shown only if user has access to feature a</h4>
        </div>
      </RenderOnRole>

      <RenderOnRole roles={['feature-b']}>
        <div>
          <h4>This will be shown only if user has access to feature b</h4>
        </div>
      </RenderOnRole>

      <RenderOnRole roles={['feature-a', 'feature-b']}>
        <div>
          <h4>This will be shown only if user has access to feature a OR b</h4>
        </div>
      </RenderOnRole>

      <RenderOnAllRole roles={['feature-a', 'feature-b']}>
        <div>
          <h4>This will be shown only if user has access to feature a AND b</h4>
        </div>
      </RenderOnAllRole>


      <Customers></Customers>
    </>
  )
}

export default App
