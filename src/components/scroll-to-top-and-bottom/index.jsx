import { useRef } from "react";
import useFetch from "../use-fetch";

export default function ScrollToTopAndBottom() {
  const dummyUrl = "https://dummyjson.com/products?limit=100";

  const { data, error, pending } = useFetch(dummyUrl, {});

  const bottomRef = useRef(null);

  function handleScrollTotop() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }

  function handleScrollToBottom() {
    bottomRef.current.scrollIntoView({ behavior: "smooth" });
  }

  if (error) {
    return <h1>An error has ocurred</h1>;
  }

  if (pending) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <h1>ScrollToTopAndBottom</h1>
      <h3>This is the top Section</h3>
      <button onClick={handleScrollToBottom}>Scroll to bottom</button>
      <ul>
        {data && data.products && data.products.length
          ? data.products.map((item) => <li key={item.id}>{item.title}</li>)
          : null}
      </ul>
      <h3>This is the Bottom Section</h3>
      <div ref={bottomRef}></div>
      <button onClick={handleScrollTotop}>Scroll to top</button>
    </div>
  );
}
