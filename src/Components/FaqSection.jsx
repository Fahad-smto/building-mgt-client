const FaqSection = () => {
    return (
        <section className="max-w-3xl mx-auto p-6 mt-16 bg-white rounded-lg shadow-md">
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">Frequently Asked Questions</h2>

            <div className="space-y-3">
                <div className="collapse collapse-arrow bg-base-100 border border-base-300 rounded-lg">
                    <input type="radio" name="faq-accordion" defaultChecked />
                    <div className="collapse-title font-semibold">
                        How do I create an account?
                    </div>
                    <div className="collapse-content text-sm">
                        Click the "Sign Up" button in the top right corner and follow the registration process.
                    </div>
                </div>

                <div className="collapse collapse-arrow bg-base-100 border border-base-300 rounded-lg">
                    <input type="radio" name="faq-accordion" />
                    <div className="collapse-title font-semibold">
                        I forgot my password. What should I do?
                    </div>
                    <div className="collapse-content text-sm">
                        Click on "Forgot Password" on the login page and follow the instructions sent to your email.
                    </div>
                </div>

                <div className="collapse collapse-arrow bg-base-100 border border-base-300 rounded-lg">
                    <input type="radio" name="faq-accordion" />
                    <div className="collapse-title font-semibold">
                        How do I update my profile information?
                    </div>
                    <div className="collapse-content text-sm">
                        Go to "My Account" settings and select "Edit Profile" to make changes.
                    </div>
                </div>

                <div className="collapse collapse-arrow bg-base-100 border border-base-300 rounded-lg">
                    <input type="radio" name="faq-accordion" />
                    <div className="collapse-title font-semibold">
                        How do I pay my rent online?
                    </div>
                    <div className="collapse-content text-sm">
                        Navigate to the "Make Payment" section, select your apartment and payment month, then follow the prompts.
                    </div>
                </div>

                <div className="collapse collapse-arrow bg-base-100 border border-base-300 rounded-lg">
                    <input type="radio" name="faq-accordion" />
                    <div className="collapse-title font-semibold">
                        What if I have a maintenance issue?
                    </div>
                    <div className="collapse-content text-sm">
                        Submit a maintenance request from your dashboard. Our team will respond promptly.
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FaqSection;
