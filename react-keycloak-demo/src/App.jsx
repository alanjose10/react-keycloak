
import './App.css'

import RenderOnRole from './components/RenderOnRole'
import RenderOnAllRole from './components/RenderOnAllRole'

import UserService from './services/auth-service'

function App() {

  return (
    <>

      
      <p>Username: {UserService.getUsername()}</p>
      <p>Email: {UserService.getUserEmail()}</p>
    
      <button onClick={UserService.doLogout}>Logout</button>

      <RenderOnRole roles={['write']}>
        <div>
          <h4>Write role content</h4>
        </div>
      </RenderOnRole>

      <RenderOnRole roles={['read']}>
        <div>
          <h4>Read role content</h4>
        </div>
      </RenderOnRole>

      <RenderOnRole roles={['read', 'test']}>
        <div>
          <h4>Read or Read role content</h4>
        </div>
      </RenderOnRole>

      <RenderOnAllRole roles={['write', 'read']}>
        <div>
          <h4>Read and Write role content</h4>
        </div>
      </RenderOnAllRole>
    </>
  )
}

export default App
