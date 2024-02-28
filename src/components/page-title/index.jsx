const TitlePage = ({ title = "page title", classes = '' }) => {
  return <div className={`text-2xl py-2 ${classes}`}>{title}</div>;
};

export default TitlePage