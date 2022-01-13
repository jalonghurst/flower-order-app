import Card from '../UI/Card';
import FlowerItem from './FlowerItem/FlowerItem';
import classes from './AvailableFlowers.module.css';

const DUMMY_FLOWERS = [
  {
    id: 'm1',
    name: 'Roses',
    description: 'Finest freshly picked red roses',
    price: 4.99,
  },
  {
    id: 'm2',
    name: 'Geraniums',
    description: 'Mixed colours and locally sourced',
    price: 2.50,
  },
  {
    id: 'm3',
    name: 'Tulips',
    description: 'The highest quality in light pink and deep orange',
    price: 1.99,
  },
  {
    id: 'm4',
    name: 'Daffodils',
    description: 'Add a fresh spring flower to your bouquet, the highest quality',
    price: 2.99,
  },
];

const AvailableFlowers = () => {
  const flowersList = DUMMY_FLOWERS.map((flower) => (
    <FlowerItem
      key={flower.id}
      id={flower.id}
      name={flower.name}
      description={flower.description}
      price={flower.price}
    />
  ));

  return (
    <section className={classes.flowers}>
      <Card>
        <ul>{flowersList}</ul>
      </Card>
    </section>
  );
};

export default AvailableFlowers;
