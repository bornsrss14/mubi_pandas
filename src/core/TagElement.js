const TagElement = ({ txt, children }) => {
  return (
    <div className="subtitle-section">
      <p>{txt.toUpperCase()}</p>

      {children}
    </div>
  );
};

export default TagElement;
