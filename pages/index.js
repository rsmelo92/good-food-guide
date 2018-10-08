import Layout from "../components/Layout";
import FoodCard from "../components/foodCard";

const diseases = [
  {
    title: 'Viral Fever',
    text: 'Coriander Tea, Bland Diet, Gargle With Salt Water, Eat Raw Garlic & Onion, "Honey, Lemon and Ginger Juice", Tulsi ( Basil) Leaves',
    action: 'Learn More',
  },
  {
    title: 'Diarrhea',
    text: 'Banana, Hot Cereals, Applesauce, Bread, Toast, Boiled Potatoes, Plain White Rice',
    action: 'Learn More',
  },
]

const Index = props => (
  <Layout>
    {diseases.map(item => (
      <FoodCard
        title={item.title}
        text={item.text}
        action={item.action}
      />
    ))}
  </Layout>
);

Index.getInitialProps = async function(context) {
  return {};
};

export default Index;
