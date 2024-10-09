import Header from './components/Header';
import Footer from './components/Footer';
import MainContent from './components/MainContent';
import RandomNumber from './components/RandomNumber';
import Article from './components/Article';

export default function App() {
  return (
    <>
      <Header />
      <Article/>
      <MainContent />
      <RandomNumber/>
      <Footer />
    </>
  );
}
