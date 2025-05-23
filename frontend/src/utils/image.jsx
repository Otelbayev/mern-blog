const Image = ({ src, style }) => {
  return (
    <img
      style={{ objectFit: "cover", ...style }}
      src={`${import.meta.env.VITE_IMG_URL}${src}`}
      alt=""
    />
  );
};

export default Image;
