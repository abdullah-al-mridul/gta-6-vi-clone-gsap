import React from 'react';

const Home = async () => {
    const res = await fetch('https://dummyjson.com/products').then((res) => res.json());

    console.log(res);
    return (
        <div>
            {res.products.map((product: any) => {
                return <div key={product.id}>{product.title}</div>;
            })}
        </div>
    );
};

export default Home;
