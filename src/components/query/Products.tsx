import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
// import useProducts from '../../hooks/useProducts';

type Products = {
  name: string;
  price: string;
  id?: string
}[]

export default function Products() {
  const [checked, setChecked] = useState(false);
  const { data: products, isLoading, error } = useQuery({
    queryKey: ['products'],
    queryFn: async (): Promise<Products> => {
      const res = (await fetch('data/products.json')).json();
      return res;
    },
  });

  // const { loading, error, products } = useProducts({ salesOnly: checked });
  const handleChange = () => setChecked((prev) => !prev);

  if (isLoading) return <p>Loading...</p>;

  if (error) return <p>{error.toString()}</p>;

  return (
    <>
      <label>
        <input type="checkbox" checked={checked} onChange={handleChange} />
        Show Only 🔥 Sale
      </label>
      <ul>
        {products?.map((product) => (
          <li key={product.id}>
            <article>
              <h3>{product.name}</h3>
              <p>{product.price}</p>
            </article>
          </li>
        ))}
      </ul>
    </>
  );
}
