import React from "react";

export default function DatenschutzPage() {
  return (
    <section className="min-h-screen bg-[#070b1c] px-6 py-40 text-white">
      <div className="mx-auto max-w-4xl">
        <p className="mb-4 text-cyan-300">
          Rechtliches
        </p>

        <h1 className="text-5xl font-light md:text-7xl">
          Datenschutz
        </h1>

        <p className="mt-5 text-sm text-white/35">
          Stand: 28. Juli 2026
        </p>

        <div className="mt-14 space-y-10 rounded-[2rem] border border-cyan-300/15 bg-white/[0.035] p-8 shadow-2xl shadow-cyan-950/20 md:p-10">
          <div>
            <h2 className="mb-4 text-2xl font-semibold text-cyan-200">
              Verantwortliche Stelle
            </h2>

            <div className="space-y-2 leading-relaxed text-white/70">
              <p>Thom &amp; Co. GmbH</p>
              <p>Voixero</p>
              <p>Scherzingerstrasse 16</p>
              <p>8598 Bottighofen</p>
              <p>Schweiz</p>

              <p className="pt-2">
                E-Mail:{" "}
                <a
                  href="mailto:thomas.wittkopf@voixero.com"
                  className="text-cyan-300 hover:underline"
                >
                  thomas.wittkopf@voixero.com
                </a>
              </p>
            </div>
          </div>

          <div>
            <h2 className="mb-4 text-2xl font-semibold text-cyan-200">
              Bearbeitung personenbezogener Daten
            </h2>

            <p className="leading-relaxed text-white/70">
              Wir bearbeiten Personendaten, soweit dies für den
              Betrieb unserer Website, die Bereitstellung unserer
              Angebote, die Bearbeitung von Anfragen und die
              Vereinbarung von Terminen erforderlich ist.
            </p>
          </div>

          <div>
            <h2 className="mb-4 text-2xl font-semibold text-cyan-200">
              Technische Zugriffsdaten
            </h2>

            <p className="leading-relaxed text-white/70">
              Beim Besuch dieser Website können technische Daten
              wie IP-Adresse, Zeitpunkt des Zugriffs,
              Browsertyp, Betriebssystem, aufgerufene Seiten und
              weitere technische Informationen verarbeitet
              werden. Diese Daten dienen insbesondere dem
              sicheren und zuverlässigen Betrieb der Website.
            </p>
          </div>

          <div>
            <h2 className="mb-4 text-2xl font-semibold text-cyan-200">
              Hosting über Vercel
            </h2>

            <p className="leading-relaxed text-white/70">
              Unsere Website wird über Vercel bereitgestellt.
              Beim Aufruf der Website können deshalb technische
              Zugriffsdaten durch Vercel verarbeitet werden.
              Daten können dabei auch ausserhalb der Schweiz
              bearbeitet werden.
            </p>

            <a
              href="https://vercel.com/legal/privacy-notice"
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-block text-sm text-cyan-300 hover:underline"
            >
              Datenschutzhinweise von Vercel →
            </a>
          </div>

          <div>
            <h2 className="mb-4 text-2xl font-semibold text-cyan-200">
              Terminvereinbarung über Calendly
            </h2>

            <p className="leading-relaxed text-white/70">
              Für die Online-Terminvereinbarung nutzen wir
              Calendly. Bei einer Terminbuchung werden die von
              Ihnen eingegebenen Angaben wie Name,
              E-Mail-Adresse, gewünschter Termin und weitere
              freiwillig übermittelte Informationen verarbeitet,
              um den Termin zu organisieren und durchzuführen.
            </p>

            <a
              href="https://calendly.com/legal/privacy-notice"
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-block text-sm text-cyan-300 hover:underline"
            >
              Datenschutzhinweise von Calendly →
            </a>
          </div>

          <div>
            <h2 className="mb-4 text-2xl font-semibold text-cyan-200">
              Kontaktaufnahme
            </h2>

            <p className="leading-relaxed text-white/70">
              Wenn Sie uns per E-Mail oder auf anderem Weg
              kontaktieren, bearbeiten wir die von Ihnen
              übermittelten Informationen zur Bearbeitung Ihrer
              Anfrage und für die damit verbundene
              Kommunikation.
            </p>
          </div>

          <div>
            <h2 className="mb-4 text-2xl font-semibold text-cyan-200">
              Weitergabe und Bearbeitung im Ausland
            </h2>

            <p className="leading-relaxed text-white/70">
              Für den Betrieb unserer digitalen Angebote setzen
              wir externe Dienstleister ein. Dabei können
              Personendaten auch durch Anbieter ausserhalb der
              Schweiz bearbeitet werden. Wir berücksichtigen
              dabei die jeweils anwendbaren gesetzlichen
              Anforderungen an die Bekanntgabe von
              Personendaten ins Ausland.
            </p>
          </div>

          <div>
            <h2 className="mb-4 text-2xl font-semibold text-cyan-200">
              Aufbewahrung
            </h2>

            <p className="leading-relaxed text-white/70">
              Wir bewahren Personendaten nur so lange auf, wie
              dies für den jeweiligen Bearbeitungszweck
              erforderlich ist oder gesetzliche
              Aufbewahrungspflichten bestehen.
            </p>
          </div>

          <div>
            <h2 className="mb-4 text-2xl font-semibold text-cyan-200">
              Ihre Rechte
            </h2>

            <p className="leading-relaxed text-white/70">
              Im Rahmen des anwendbaren Datenschutzrechts können
              Sie insbesondere Auskunft über die Bearbeitung
              Ihrer Personendaten sowie deren Berichtigung oder
              Löschung verlangen. Je nach Situation können
              weitere Rechte bestehen, beispielsweise die
              Einschränkung einer Bearbeitung oder die
              Herausgabe bestimmter Daten.
            </p>

            <p className="mt-4 leading-relaxed text-white/70">
              Zur Ausübung Ihrer Rechte können Sie uns unter{" "}
              <a
                href="mailto:thomas.wittkopf@voixero.com"
                className="text-cyan-300 hover:underline"
              >
                thomas.wittkopf@voixero.com
              </a>{" "}
              kontaktieren.
            </p>
          </div>

          <div>
            <h2 className="mb-4 text-2xl font-semibold text-cyan-200">
              Änderungen
            </h2>

            <p className="leading-relaxed text-white/70">
              Wir können diese Datenschutzerklärung anpassen,
              wenn sich unsere Website, eingesetzte Dienste oder
              rechtliche Anforderungen ändern. Es gilt die
              jeweils auf dieser Website veröffentlichte
              Version.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}