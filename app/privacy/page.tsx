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
              We collect minimal information required to provide our services:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Account profile (name, email address, avatar) purely for authentication and account management.</li>
              <li>Subscription status to provide premium features.</li>
              <li>Absolutely zero data is collected for users who choose to use Annota in "Offline (Guest)" mode.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground">Stability & Security</h2>
            <p>
              Annota does not use third-party tracking pixels or sell your data to advertisers. We do not use any third-party crash reporting tools that collect telemetry. All technical issues are addressed solely through local logs and direct user reports if you choose to provide them.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground">Payment Processing</h2>
            <p>
              We use RevenueCat to manage subscriptions and handle transactions. RevenueCat collects certain information such as your country, device platform, and last-seen activity timestamps to facilitate subscription management and service usage. We do not store or process your payment details directly.
            </p>
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
            <p>Last Updated: March 24, 2026</p>
            <p className="mt-2">If you have any questions about this Privacy Policy, please contact us at <a href="mailto:support@annota.online" className="text-primary hover:underline">support@annota.online</a>.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
