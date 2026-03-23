export default function TermsOfServicePage() {
  return (
    <div className="container mx-auto px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <h1 className="mb-8 text-4xl font-bold tracking-tight">Terms of Service</h1>

        <div className="prose prose-slate dark:prose-invert max-w-none space-y-6 text-muted-foreground">
          <section>
            <p>Last Updated: March 19, 2026</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground">1. Acceptance of Terms</h2>
            <p>
              By downloading, accessing, or using Annota, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use the application. These terms constitute a legally binding agreement between you and Annota (developed by Liran).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground">2. Description of Service</h2>
            <p>
              Annota is a cross-platform, local-first note-taking and annotation application. The service includes local storage of notes, end-to-end encrypted synchronization, and premium features accessible via a paid subscription. We prioritize your privacy and do not use third-party performance or tracking tools.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground">3. Subscriptions and Billing</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium text-foreground">Payments</h3>
                <p>Premium features require a paid subscription (monthly or annual). Payments are processed through our third-party payment providers.</p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-foreground">Auto-Renewal</h3>
                <p>Subscriptions automatically renew unless canceled at least 24 hours before the end of the current billing period.</p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-foreground">Cancellations</h3>
                <p>You may cancel your subscription at any time through your account settings or the respective app store (Apple App Store, Google Play Store). Your premium access will continue until the end of your current billing cycle.</p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-foreground">Price Changes</h3>
                <p>We reserve the right to modify our pricing at any time. Active subscribers will be notified in advance of any price changes affecting their recurring billing.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground">4. Data Ownership and Security</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium text-foreground">Your Data</h3>
                <p>You retain full ownership of all text, images, and annotations created within Annota.</p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-foreground">End-to-End Encryption</h3>
                <p>We utilize end-to-end encryption for data synchronization. We do not have access to your decryption keys and cannot read or recover your encrypted data.</p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-foreground">Data Loss</h3>
                <p>Because you are the sole holder of your encryption keys, Annota cannot recover lost data if you lose access to your account credentials or keys.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground">5. Acceptable Use</h2>
            <p>You agree not to use Annota to create, store, synchronize, or distribute any content that:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><span className="font-medium">Violates the law:</span> Infringes on any applicable local, national, or international laws or regulations.</li>
              <li><span className="font-medium">Exploits minors:</span> Contains, promotes, or relates to child sexual abuse material (CSAM) or the exploitation of children in any way.</li>
              <li><span className="font-medium">Promotes violence or terrorism:</span> Encourages, incites, or threatens violence, terrorism, self-harm, or illegal acts.</li>
              <li><span className="font-medium">Abuses the infrastructure:</span> Attempts to reverse engineer, decompile, hack, or artificially burden the application or our synchronization servers.</li>
            </ul>
            <p className="font-semibold text-foreground">Enforcement in a Zero-Knowledge Environment:</p>
            Annota utilizes true end-to-end encryption. We do not have the ability to read, scan, or monitor your notes, images, or data. However, if we become aware that an account is being used to store or transmit explicitly prohibited or illegal content (e.g., via user admission, visual evidence provided during a support request, or lawful order from authorities), we reserve the right to immediately suspend or permanently terminate the account and delete the associated encrypted data without notice or refund.
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground">6. Disclaimer of Warranties</h2>
            <p>
              Annota is provided on an "AS IS" and "AS AVAILABLE" basis. We make no warranties, expressed or implied, regarding the availability, reliability, or accuracy of the service. While we strive to provide a secure and stable application, we do not guarantee that the service will be entirely free from bugs, interruptions, or errors.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground">7. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, Annota and its developer shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, or other intangible losses, resulting from your access to or use of, or inability to access or use, the service. In no event shall our total liability to you exceed the amount you paid for the service in the past twelve (12) months.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground">8. Governing Law</h2>
            <p>
              These Terms shall be governed and construed in accordance with the laws of the State of Israel, without regard to its conflict of law provisions. Any legal action or proceeding arising under these Terms will be brought exclusively in the courts located in Israel.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground">9. Changes to Terms</h2>
            <p>
              We reserve the right to modify or replace these Terms at any time. We will provide notice of significant changes by updating the date at the top of these Terms or by providing a notification within the app. Your continued use of the service after such changes constitutes your acceptance of the new Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground">10. Contact Us</h2>
            <p>
              If you have any questions about these Terms, please contact us at: <a href="mailto:support@annota.online" className="text-primary hover:underline">support@annota.online</a>
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
