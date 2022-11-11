const ScholarshipList = () => {
  return (
    <section className="scholarship-container">
      <div className="scholarship-header">
        <div className="scholarship-title">
          <h2>See Latest Scholarships</h2>
          <p>Fund your education with exclusive scholarships</p>
        </div>
        <input
          className="scholarship-search"
          type="text"
          placeholder="Search for Scholarships"
        />
      </div>
      <div className="scholarship-body">
        <div className="scholarships">{/* render scholarships here */}</div>
        <aside>{/* render ads & articles here */}</aside>
      </div>
    </section>
  );
};

export default ScholarshipList;
