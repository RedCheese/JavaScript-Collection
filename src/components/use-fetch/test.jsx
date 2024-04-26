import useFetch from ".";

export default function UseFetchHookTest() {
  const dummyUrl = "https://dummyjson.com/products";

  const { data, error, pending } = useFetch(dummyUrl, {});

  console.log(data, error, pending);

  return (
    <div>
      <h1>Use Fetch Hook</h1>
      {pending ? <h3>Data Pending, Please Wait</h3> : null}
      {error ? <h3>{error}</h3> : null}
      {data && data.products && data.products.length
        ? data.products.map((productItem) => (
            <p key={productItem.id}>{productItem.title}</p>
          ))
        : null}
    </div>
  );
}
