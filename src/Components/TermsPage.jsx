// src/pages/TermsPage.jsx
import { useEffect } from "react";

const sections = [
    { id: "acceptance", title: "1. Acceptance of Terms" },
    { id: "eligibility", title: "2. Eligibility" },
    { id: "accounts", title: "3. Accounts & Security" },
    { id: "payments", title: "4. Payments, Fees & Billing" },
    { id: "agreements", title: "5. Apartment Agreements & Availability" },
    { id: "maintenance", title: "6. Maintenance, Repairs & Access" },
    { id: "conduct", title: "7. Prohibited Conduct" },
    { id: "content", title: "8. User Content & Reviews" },
    { id: "privacy", title: "9. Privacy & Data" },
    { id: "thirdparty", title: "10. Third-Party Services" },
    { id: "visits", title: "11. Scheduling Visits" },
    { id: "cancellations", title: "12. Cancellations & Refunds" },
    { id: "damages", title: "13. Damages & Liability for Loss" },
    { id: "rules", title: "14. Building Rules" },
    { id: "notices", title: "15. Notices & Communications" },
    { id: "termination", title: "16. Suspension & Termination" },
    { id: "disclaimer", title: "17. Disclaimers" },
    { id: "limitation", title: "18. Limitation of Liability" },
    { id: "indemnity", title: "19. Indemnification" },
    { id: "law", title: "20. Governing Law & Disputes" },
    { id: "changes", title: "21. Changes to These Terms" },
    { id: "contact", title: "22. Contact Us" },
];

export default function TermsPage() {
    useEffect(() => {
        // Optional: scroll to hash on mount
        if (window.location.hash) {
            const el = document.querySelector(window.location.hash);
            if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    }, []);

    return (
        <main className="min-h-screen bg-base-100">
            {/* Header */}
            <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
                <div className="max-w-7xl mx-auto px-6 py-16">
                    <span className="inline-block text-xs tracking-widest uppercase opacity-70">
                        Legal
                    </span>
                    <h1 className="mt-3 text-4xl sm:text-5xl font-extrabold">
                        Terms & Conditions
                    </h1>
                    <p className="mt-4 max-w-3xl text-slate-200">
                        Please read these Terms & Conditions carefully. By accessing or
                        using our building management platform, you agree to be bound by the
                        following terms.
                    </p>
                    <p className="mt-2 text-sm opacity-80">
                        Last updated: <time dateTime="2025-08-18">August 18, 2025</time>
                    </p>
                </div>
            </section>

            {/* Body with sticky TOC */}
            <section className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* TOC */}
                <aside className="lg:col-span-3">
                    <div className="lg:sticky lg:top-6 bg-white border rounded-xl shadow-sm p-4">
                        <h3 className="text-sm font-semibold text-slate-700 mb-3">
                            Table of Contents
                        </h3>
                        <nav className="space-y-1 max-h-[65vh] overflow-auto pr-1">
                            {sections.map((s) => (
                                <a
                                    key={s.id}
                                    href={`#${s.id}`}
                                    className="block text-sm text-slate-600 hover:text-blue-600"
                                >
                                    {s.title}
                                </a>
                            ))}
                        </nav>
                    </div>
                </aside>

                {/* Content */}
                <article className="lg:col-span-9">
                    <div className="prose max-w-none prose-slate">
                        <Section id="acceptance" title="1. Acceptance of Terms">
                            By accessing or using the Building Management Platform (the
                            “Service”), you agree to these Terms & Conditions and our Privacy
                            Policy. If you do not agree, do not use the Service.
                        </Section>

                        <Section id="eligibility" title="2. Eligibility">
                            You must be at least 18 years old and have the legal authority to
                            enter into agreements. Use is limited to jurisdictions where the
                            Service is permitted by law.
                        </Section>

                        <Section id="accounts" title="3. Accounts & Security">
                            <ul>
                                <li>
                                    You are responsible for maintaining the confidentiality of
                                    your login credentials and for all activity under your
                                    account.
                                </li>
                                <li>
                                    Notify us immediately of any unauthorized access or suspected
                                    breach.
                                </li>
                                <li>
                                    We may require identity verification where fraud is suspected.
                                </li>
                            </ul>
                        </Section>

                        <Section id="payments" title="4. Payments, Fees & Billing">
                            <ul>
                                <li>
                                    Rent, deposits, and service fees are payable as displayed in
                                    your dashboard. Amounts may include taxes and processing fees.
                                </li>
                                <li>
                                    By submitting payment information, you authorize us or our
                                    payment processors to charge your selected method.
                                </li>
                                <li>
                                    Late or failed payments may incur penalties as stated in your
                                    agreement.
                                </li>
                            </ul>
                        </Section>

                        <Section
                            id="agreements"
                            title="5. Apartment Agreements & Availability"
                        >
                            Submitting an agreement request does not guarantee availability.
                            We may accept, waitlist, or decline requests at our discretion.
                            Final confirmation occurs only after execution of the rental
                            agreement and receipt of required payments.
                        </Section>

                        <Section id="maintenance" title="6. Maintenance, Repairs & Access">
                            We aim to address maintenance requests within reasonable time
                            frames. You consent to reasonable entry for inspections, repairs,
                            and emergencies, with notice where practicable.
                        </Section>

                        <Section id="conduct" title="7. Prohibited Conduct">
                            You agree not to:
                            <ul>
                                <li>
                                    Violate laws, building rules, or third-party rights (including
                                    noise, safety, and occupancy limits).
                                </li>
                                <li>Upload malware or attempt to disrupt the Service.</li>
                                <li>
                                    Engage in fraud, harassment, hate speech, or illegal activity.
                                </li>
                            </ul>
                        </Section>

                        <Section id="content" title="8. User Content & Reviews">
                            You retain rights to your content but grant us a worldwide,
                            non-exclusive, royalty-free license to host, display, and
                            distribute it for Service operation. Do not post content that is
                            unlawful, infringing, or deceptive. We may remove content that
                            violates these Terms.
                        </Section>

                        <Section id="privacy" title="9. Privacy & Data">
                            Our collection and use of personal data are described in our
                            Privacy Policy. By using the Service, you consent to those
                            practices, including use of third-party processors.
                        </Section>

                        <Section id="thirdparty" title="10. Third-Party Services">
                            The Service may link to third-party sites or tools. We do not
                            control and are not responsible for their content or practices.
                            Your use of third-party services is at your own risk.
                        </Section>

                        <Section id="visits" title="11. Scheduling Visits">
                            Visit scheduling is subject to availability and building access
                            policies. We may reschedule or cancel due to operational or safety
                            reasons. Bring a valid ID for entry.
                        </Section>

                        <Section id="cancellations" title="12. Cancellations & Refunds">
                            Where applicable, refunds follow the policy shown at checkout or
                            in your agreement. Processing times depend on your payment method
                            and bank.
                        </Section>

                        <Section id="damages" title="13. Damages & Liability for Loss">
                            You are responsible for damages caused by you or your guests to
                            units, common areas, or furnishings, subject to applicable law and
                            your agreement.
                        </Section>

                        <Section id="rules" title="14. Building Rules">
                            You must comply with posted building rules regarding safety,
                            security, quiet hours, smoking, pets, parking, and use of shared
                            amenities. Repeated violations may result in penalties or
                            termination.
                        </Section>

                        <Section id="notices" title="15. Notices & Communications">
                            We may contact you by email, in-app notifications, SMS, or mail.
                            You agree to keep your contact details current. Electronic
                            communications satisfy legal notice requirements.
                        </Section>

                        <Section id="termination" title="16. Suspension & Termination">
                            We may suspend or terminate access for any breach or suspected
                            misuse. Upon termination, your right to use the Service ceases,
                            but provisions that by nature should survive will survive.
                        </Section>

                        <Section id="disclaimer" title="17. Disclaimers">
                            THE SERVICE IS PROVIDED “AS IS” AND “AS AVAILABLE” WITHOUT
                            WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING
                            MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND
                            NON-INFRINGEMENT. We do not warrant uninterrupted or error-free
                            operation.
                        </Section>

                        <Section id="limitation" title="18. Limitation of Liability">
                            TO THE MAXIMUM EXTENT PERMITTED BY LAW, WE SHALL NOT BE LIABLE FOR
                            INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, EXEMPLARY, OR
                            PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS, DATA, OR GOODWILL.
                        </Section>

                        <Section id="indemnity" title="19. Indemnification">
                            You agree to defend, indemnify, and hold harmless the Company and
                            its affiliates from claims arising out of your use of the Service,
                            your content, or your violation of these Terms or applicable law.
                        </Section>

                        <Section id="law" title="20. Governing Law & Disputes">
                            These Terms are governed by the laws of your operating
                            jurisdiction (without regard to conflicts of laws). Disputes will
                            be resolved in the courts located in the same jurisdiction unless
                            otherwise required by law.
                        </Section>

                        <Section id="changes" title="21. Changes to These Terms">
                            We may update these Terms from time to time. Material changes will
                            be posted on this page with a new “Last updated” date. Continued
                            use after changes constitutes acceptance.
                        </Section>

                        <Section id="contact" title="22. Contact Us">
                            For questions about these Terms, contact:
                            <ul>
                                <li>Building Management Co.</li>
                                <li>123 Tower Track Ave, Suite 400</li>
                                <li>City, State, ZIP</li>
                                <li>Email: support@buildingmgt.example</li>
                            </ul>
                        </Section>

                        <div className="mt-12">
                            <a
                                href="#top"
                                onClick={(e) => {
                                    e.preventDefault();
                                    window.scrollTo({ top: 0, behavior: "smooth" });
                                }}
                                className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:underline"
                            >
                                ↑ Back to top
                            </a>
                        </div>
                    </div>
                </article>
            </section>
        </main>
    );
}

function Section({ id, title, children }) {
    return (
        <section id={id} className="scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">{title}</h2>
            <div className="mt-3 text-slate-700 leading-relaxed">{children}</div>
            <div className="mt-6">
                <a
                    href="#top"
                    onClick={(e) => {
                        e.preventDefault();
                        window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    className="text-xs text-slate-500 hover:text-blue-600"
                >
                    Back to top
                </a>
            </div>
            <hr className="my-8 border-slate-200" />
        </section>
    );
}
