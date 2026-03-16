export default function PrivacyPage() {
  return (
    <div className="container mx-auto px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <h1 className="mb-8 text-4xl font-bold tracking-tight">Privacy Policy</h1>

        <div className="prose prose-slate dark:prose-invert max-w-none space-y-6 text-muted-foreground">
          <section>
            <h2 className="text-2xl font-semibold text-foreground">Our Commitment to Privacy</h2>
            <p>
              At Annota, your privacy is our foundational principle. We believe that your thoughts, notes, and tasks should belong to you and only you. That's why we built Annota with a local-first architecture and true end-to-end encryption.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground">Data Ownership</h2>
            <p>
              All your data is stored locally on your device by default. When you choose to sync across devices, your data is encrypted on your device before it ever leaves. We do not have the keys to decrypt your data, and we cannot access it even if we wanted to.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground">Information We Collect</h2>
            <p>
              We collect minimal information required to provide our services and ensure application stability:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Account information (email address) for subscription and sync management.</li>
              <li>Subscription status to provide premium features.</li>
              <li>Stability and performance data (via Sentry) to help us identify and fix bugs. This includes technical information such as your device type, operating system, and crash reports.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground">Stability & Security</h2>
            <p>
              Annota does not use third-party tracking pixels or sell your data to advertisers. We use Sentry to monitor application health and performance. This data is used solely for debugging and improving the service, and does not include your encrypted note content.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground">Payment Processing</h2>
            <p>We use trusted third-party payment processors (Revenue Cat) to handle transactions. We do not store or process your payment details directly.</p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-foreground">Data & Account Deletion</h2>
            <p>
              Since Annota will be available on mobile platforms, keep in mind that both Apple and Google strictly require an explicit explanation of how users can delete their accounts and data.
              You can permanently delete your account and all associated data at any time through the app settings. Upon deletion, your data is immediately removed from our active servers.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground">Changes to this Policy</h2>
            <p>
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
            </p>
          </section>

          <div className="pt-8 border-t text-sm">
            <p>Last Updated: March 16, 2026</p>
            <p className="mt-2">If you have any questions about this Privacy Policy, please contact us at <a href="mailto:support@annota.online" className="text-primary hover:underline">support@annota.online</a>.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
