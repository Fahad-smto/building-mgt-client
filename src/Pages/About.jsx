 
const About = () => {
  return (
    <section className="bg-white py-20 px-4 md:px-10 lg:px-20 font-urbanist">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-blue-800 mb-6">
          About TowerTrack
        </h2>
        <p className="text-gray-600 text-lg md:text-xl max-w-4xl mx-auto mb-12 leading-relaxed">
          <strong>TowerTrack</strong> is an innovative Building Management System tailored to modern-day apartment living. 
          It empowers owners, admins, members, and users to manage everything — from apartment agreements and rent payments to announcements and role-based dashboards — all in one sleek and secure platform.
        </p>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 text-left">
          <div className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition">
            <div className="text-3xl text-green-600 mb-3">🏢</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Centralized Management</h3>
            <p className="text-gray-600">
              A unified platform to manage residents, payments, announcements, and agreements with role-based access.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition">
            <div className="text-3xl text-green-600 mb-3">🔐</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Secure Authentication</h3>
            <p className="text-gray-600">
              Google or email/password login ensures only authorized access. Dashboard routing is protected via roles.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition">
            <div className="text-3xl text-green-600 mb-3">📜</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Digital Agreements</h3>
            <p className="text-gray-600">
              Residents can apply for apartments online. Admins can approve or reject with real-time status updates.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition">
            <div className="text-3xl text-green-600 mb-3">💰</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Rent Payment + Coupons</h3>
            <p className="text-gray-600">
              Members can pay monthly rent via the platform and apply discount coupons issued by the admin.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition">
            <div className="text-3xl text-green-600 mb-3">📣</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Real-Time Announcements</h3>
            <p className="text-gray-600">
              Admins can send important updates instantly to members and users through the dashboard.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition">
            <div className="text-3xl text-green-600 mb-3">📊</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Insights & Dashboard</h3>
            <p className="text-gray-600">
              Admin dashboard shows building stats like total apartments, filled/empty ratio, users, and members.
            </p>
          </div>
        </div>

        <div className="mt-16 text-center">
          <h4 className="text-2xl font-semibold text-blue-700 mb-3">Why Choose TowerTrack?</h4>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Whether you're a building owner or a tenant, TowerTrack simplifies building management like never before.
            Designed with security, speed, and convenience in mind — it’s the smarter way to manage modern living.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
