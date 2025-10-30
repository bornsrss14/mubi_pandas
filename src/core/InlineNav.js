export const InlineNav = ({ arrayTabs, setActiveTab, activeTab }) => {
  return (
    <>
      <div className="wrapp-main">
        <div
          style={{
            width: "95%",
            height: "2rem",
            display: "flex",
            flexDirection: "row",
            margin: "0 auto",
          }}
        >
          {arrayTabs.map((tab, key) => (
            <div
              onClick={() => setActiveTab(tab.idTab)}
              key={tab.idTab}
              className={`tab-inline-nav  ${
                activeTab === tab.idTab
                  ? "estiloBotonActivo"
                  : "estiloBotonNormal"
              } `}
            >
              <p style={{ fontSize: "1.2rem" }}>
                {tab.targetTab.toUpperCase()}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default InlineNav;
