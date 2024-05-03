import '../../css/page.css';
import JobCard from './components/Cards/jobCard';

export default function Home() {
  return (
    <main>
      <section className="jobs_section">
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
      </section>
    </main>
  );
}
