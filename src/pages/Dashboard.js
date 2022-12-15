import styled from 'styled-components'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import Feed from '../components/Feed'
import Widget from '../components/Widget'

function Dashboard() {
  return (
    <AppWrapper>
      <Header />
      <div className="app__body">
        <Sidebar />
        <Feed />
        <Widget />
      </div>
    </AppWrapper >
  );
}
const AppWrapper = styled.div`
  background-color: #f1f2f5;
  .app__body {
    display: flex;
  }
`

export default Dashboard;