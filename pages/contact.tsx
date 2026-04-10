import type { GetServerSideProps } from "next";
import PublicLayout from "../components/PublicLayout";
import { getT, renderMultiline } from "../lib/translations";

export default function ContactPage({
  locale,
}: {
  locale: string;
}) {
  const t = getT(locale);

  return (
    <PublicLayout locale={locale} pageTitle="Contact">
      <main className="content-wrapper contact-page">
        <section className="contact-frame">
          <div className="container">
            <div className="contact-grid">
            <div className="contact-header-box">
              <h1 className="contact-title">{renderMultiline(t.contact.title)}</h1>
              <p className="contact-description">
                {renderMultiline(t.contact.description)}
              </p>
            </div>

            <form name="contact" className="contact-form-box">
              <input type="hidden" name="form-name" value="contact" />

              <div className="form-row-top">
                <div className="input-group half">
                  <label>{t.contact.form.name}</label>
                  <input type="text" name="name" required />
                </div>
                <div className="input-group half">
                  <label>{t.contact.form.company}</label>
                  <input type="text" name="company" />
                </div>
              </div>

              <div className="input-group full">
                <label>{t.contact.form.email}</label>
                <input type="email" name="email" required />
              </div>

              <div className="input-group full">
                <label>{t.contact.form.message}</label>
                <textarea name="message" required />
              </div>

              <div className="button-container">
                <button type="submit" id="submit-btn" className="send-btn">
                  {t.contact.form.send}
                </button>
                <span
                  id="sent-message"
                  className="sent-text"
                  style={{ display: "none" }}
                >
                  {t.contact.form.sent}
                </span>
              </div>
            </form>
            </div>
          </div>
        </section>
      </main>
    </PublicLayout>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const locale = ctx.locale ?? "pt";
  return { props: { locale } };
};

