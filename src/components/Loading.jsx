import ReactLoading from "react-loading";

const Loading = () => {
  const type = "spinningBubbles";
  const color = "#757575";
  const height = 128;
  const width = 128;

  return (
    <div id="loadingBusca">
      <ReactLoading type={type} color={color} height={height} width={width} />
    </div>
  );
};

export default Loading;
