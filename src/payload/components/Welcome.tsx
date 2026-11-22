/* The greeting at the top of the admin dashboard: what this place is and the
   three things editors actually do here, in plain language. */

const CARDS = [
  {
    title: 'Edit a page',
    body: 'Open any page under “Pages”: Home, About, Services and the rest. Each one is split into clearly labelled tabs. Press Save and the change is live.',
  },
  {
    title: 'Manage people',
    body: '“Team Members” are the profile cards; “Staff Photos” are the group shots in the carousel. Use “Display Order” to arrange them.',
  },
  {
    title: 'Record donors',
    body: 'Add a “Donor Year” and list the names. The Donors page builds itself from these each year.',
  },
];

export function Welcome() {
  return (
    <section className='eku-welcome'>
      <h1>Welcome to the Ekuphumuleni website editor</h1>
      <p className='eku-welcome__lede'>
        This is where you change everything on ekuphumuleni.ngo. Pick a page, change its text or
        photos, and press <strong>Save</strong>. Your changes appear on the site straight away.
      </p>
      <div className='eku-welcome__cards'>
        {CARDS.map((c) => (
          <div key={c.title} className='eku-welcome__card'>
            <h3>{c.title}</h3>
            <p>{c.body}</p>
          </div>
        ))}
      </div>
      <ul className='eku-welcome__notes'>
        <li>
          Made a mistake? Every page keeps its last 10 saves under <strong>Versions</strong>, and
          any of them can be restored.
        </li>
        <li>
          When you add a photo, drag the focus point onto the most important part (usually a face)
          so it stays in frame on phones.
        </li>
        <li>
          The “SEO” tab controls how a page looks in Google and when shared on WhatsApp or
          Facebook. It does not appear on the page itself.
        </li>
      </ul>
      <p className='eku-welcome__motto'>Place of rest, place of restoration.</p>
    </section>
  );
}
