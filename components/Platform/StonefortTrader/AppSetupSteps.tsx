import Image from "next/image";
import styles from "./AppSetupSteps.module.css";

type Step = {
  title: string;
  description: string;
};

type Props = {
  heading?: string;
  steps?: Step[];
  /** Put your image in /public/images/ and pass like "/images/app-steps-mockup.webp" */
  mockupSrc?: string;
  mockupAlt?: string;
};

const defaultSteps: Step[] = [
  {
    title: "Download and Install the App",
    description:
      "Download the Stonefort Trading App and follow the guided steps to install it on your device.",
  },
  {
    title: "Create Your Trading Account",
    description:
      "Open the app, register with your details, and complete the verification process to activate your account.",
  },
  {
    title: "Fund Your Account",
    description:
      "Deposit funds securely through the app and prepare to access live trading conditions.",
  },
  {
    title: "Explore Global Markets",
    description:
      "Trade across global markets with advanced tools, real-time insights, and a seamless trading experience all in one place.",
  },
];

export default function AppSetupSteps({
  heading = "Follow These Simple Steps to Get Started",
  steps = defaultSteps,
  mockupSrc = "/images/GetStartedImg.webp",
  mockupAlt = "Stonefort App Mockup",
}: Props) {
  return (
    <section className={`section ${styles.section}`}>
      <div className={`container ${styles.container}`}>
        <div className={styles.inner}>
          {/* LEFT */}
          <div className={styles.left}>
            <h2 className={`title ${styles.title}`}>{heading}</h2>

            <ol className={styles.list}>
              {steps.slice(0, 4).map((s, idx) => {
                const n = String(idx + 1).padStart(2, "0");
                return (
                  <li key={n} className={styles.item}>
                    <div className={styles.num} aria-hidden="true">
                      {n}
                    </div>
                    <div className={styles.body}>
                      <h3 className={styles.stepTitle}>{s.title}</h3>
                      <p className={`text ${styles.stepText}`}>{s.description}</p>
                    </div>
                  </li>
                );
              })}
            </ol>
          </div>

          {/* RIGHT (mockup) */}
          <div className={styles.right} aria-hidden="true">
            <div className={styles.mockupWrap}>
              <Image
                src={mockupSrc}
                alt={mockupAlt}
                fill
                priority
                className={styles.mockupImage}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
