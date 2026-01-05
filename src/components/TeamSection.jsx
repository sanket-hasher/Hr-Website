const TeamSection = () => {
  return (
    <section className="bg-[#7A0F2A] text-white py-16 px-6 md:px-20 max-w-7xl mx-auto mb-8">
      <h2 className="text-4xl font-semibold mb-8 text-center">Meet Our Team</h2>
      <div className="flex flex-col md:flex-row items-center gap-12">
        
        {/* Image */}
        <div className="flex-shrink-0 w-full md:w-1/3 rounded-lg overflow-hidden shadow-lg">
          <img
            src="https://plus.unsplash.com/premium_photo-1661767467261-4a4bed92a507?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="HR Souk Team"
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Text content */}
        <div className="md:w-2/3 space-y-6 text-gray-300">
          <p>
            At HR Souk, our team is the backbone of everything we do. We are a diverse group of HR professionals, talent acquisition specialists, and workforce strategists who share a common vision — to simplify hiring and empower businesses with the right talent at the right time.
          </p>
          <p>
            Each member of our team brings deep domain expertise across industries such as IT, Engineering, Aviation, Healthcare, Finance, and other sector recruitment in the GCC region. With a blend of experience, precision, and people-first approach, we work closely with clients to understand their needs and deliver solutions that truly fit.
          </p>
          <p>
            What sets the HR Souk team apart is our commitment to integrity, transparency, and long-term partnerships. We believe in nurturing relationships, not transactions. Whether it’s a challenging niche role, large-scale hiring, or strategic HR advisory, our team works with passion, agility, and attention to detail.
          </p>
          <p>
            Together, we make HR Souk more than a recruitment service — we are your dedicated talent partners, helping your organization grow stronger every day.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
