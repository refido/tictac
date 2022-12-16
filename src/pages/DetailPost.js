import styled from 'styled-components'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import Feed from '../components/Feed'
import Widget from '../components/Widget'
import Detail from '../components/Detail'

function DetailPage() {
  return (
    <AppWrapper>
      <Header />
      <div className="app__body">
        <Sidebar />
        <Detail />
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

const DetailPostWrapper = styled.div`
    flex: 1;
    padding: 30px 150px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export default DetailPage;