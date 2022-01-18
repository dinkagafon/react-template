import Car from 'images/car.jpg';
import TestComponent from './components/TestComponent';
import s from './style.scss';

function App() {
  return (
    <div className={s.block}>
      <div className={s.element}>
        <img src={Car} alt='Картинка' />
      </div>
      <TestComponent>
        <p>Заголовок</p>
      </TestComponent>
    </div>
  );
}

export default App;
