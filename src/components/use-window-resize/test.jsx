import useWindowResize from ".";

export default function UseWindowResizeTest() {
  const { width, height } = useWindowResize();
  return (
    <div>
      <h1>This is a custom hook for window resize</h1>
      <p>Width is {width}</p>
      <p>Height is {height}</p>
    </div>
  );
}
