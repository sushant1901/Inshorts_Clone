import Header from './cmponenets/Header';
import './App.css';
import InfoHeader from './cmponenets/InfoHeader';
import { Box, styled } from '@mui/material';
import Article from './cmponenets/Article';


const Container=styled(Box)`
    width: 60%;
    margin: 40px auto 0 auto;


`;
function App() {
  return (
    <div className="App">
      <Box>
        <Header />
        <Container>
          <InfoHeader />
          <Article/>
        </Container>
      </Box>

    </div>
  );
}

export default App;
