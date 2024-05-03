import '../../../../css/jobCard.css';

export default function JobCard() {
  return (
    <div className="job_card">
      <span className="post_details">Posted 14 days ago</span>
      <header className="job_card_header">
        <img src="https://storage.googleapis.com/weekday-assets/airtableAttachment_1713598325603_7ico7.jpg" />
        <div className="job_title">
          <h3>Fampay</h3>
          <h2>Backend Engineer</h2>
          <p>Bangalore</p>
        </div>
      </header>
      <section className="job_salary">
        <p>Estimated Salary: 18 - 35 LPA</p>
      </section>
      <section className="job_description">
        <strong>About Compnay:</strong>
        <div>
          <strong>About us</strong>
        </div>
        <div className="job_info">
          <p>
            This is a sample job and you must have displayed it to understand
            that its not just some random lorem ipsum text but something which
            was manually written. Oh well, if random text is what you were
            looking for then here it is: Lorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type
            specimen book. It has survived not only five centuries, but also the
            leap into electronic typesetting, remaining essentially unchanged.
            It was popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages and now in this assignment.
          </p>
        </div>
        <div className="transparent_bar"></div>
        <div className="job_link">
          <p>View Job</p>
        </div>
      </section>
      <footer>
        <div className="job_experience">
          <p>Minimmum Experience</p>
          <p>2 years</p>
        </div>
        <button>Easy Apply</button>
        <button>Unlock Referral Asks</button>
      </footer>
    </div>
  );
}
