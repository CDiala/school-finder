const ScholarshipList = () => {
  return (
    <section className="scholarship-container">
      <div className="scholarship-header">
        <div className="scholarship-title">
          <h2>See Latest Scholarships</h2>
          <p>Fund your education with exclusive scholarships</p>
        </div>
        <svg
          width="16"
          height="17"
          viewBox="0 0 16 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 8.2759C0 12.2957 3.27031 15.566 7.29006 15.566C9.02888 15.566 10.6272 14.9537 11.8816 13.9339L14.9335 16.9858L16 15.9193L12.948 12.8674C13.9679 11.6131 14.5802 10.0147 14.5802 8.27593C14.5802 4.25615 11.3098 0.98584 7.29006 0.98584C3.27031 0.98584 0 4.25615 0 8.2759ZM13.0718 8.2759C13.0718 11.464 10.4781 14.0577 7.29006 14.0577C4.102 14.0577 1.50828 11.464 1.50828 8.2759C1.50828 5.08781 4.102 2.49412 7.29006 2.49412C10.4781 2.49412 13.0718 5.08784 13.0718 8.2759Z"
            fill="white"
          />
        </svg>
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
