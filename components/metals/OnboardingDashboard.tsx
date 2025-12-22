"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import styles from "./OnboardingDashboard.module.css";

type StepId = 1 | 2 | 3 | 4;

type FormState = {
  // Step 1
  email: string;
  password: string;
  country: string;

  // Step 2
  employmentStatus: string;
  annualIncome: string;
  sourceOfFunds: string;

  // Step 3
  docType: string;
  docNumber: string;
  otp: string;

  // Step 4
  depositAmount: string;
  depositMethod: string;
};

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

/**
 * Typewriter effect into any field setter.
 */
async function typeValue(
  value: string,
  set: (v: string) => void,
  signal: AbortSignal,
  speedMs = 22
) {
  set("");
  for (let i = 0; i < value.length; i++) {
    if (signal.aborted) return;
    set(value.slice(0, i + 1));
    // eslint-disable-next-line no-await-in-loop
    await sleep(speedMs);
  }
}

function Icon({
  name,
  className,
}: {
  name:
    | "phone"
    | "mail"
    | "inbox"
    | "callback"
    | "chevDown"
    | "menu"
    | "check"
    | "lock"
    | "upload"
    | "wallet";
  className?: string;
}) {
  const common = {
    className: `${styles.icon} ${className ?? ""}`,
    "aria-hidden": true,
    focusable: false,
  };

  switch (name) {
    case "menu":
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <path
            d="M4 7h16M4 12h16M4 17h16"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      );
    case "phone":
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <path
            d="M6.5 3.5h3l1.2 5-2 1.2c1.1 2.2 2.9 4 5.1 5.1l1.2-2 5 1.2v3c0 1.1-.9 2-2 2C10.8 22 2 13.2 2 2c0-1.1.9-2 2-2h2.5Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "mail":
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <path
            d="M4 6h16v12H4V6Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
          />
          <path
            d="m4 7 8 6 8-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
          />
        </svg>
      );
    case "inbox":
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <path
            d="M4 4h16v11H4V4Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
          />
          <path
            d="M4 15l3 5h10l3-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
          <path
            d="M9 12h6"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      );
    case "callback":
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <path
            d="M12 6V3l-4 4 4 4V8a6 6 0 1 1-6 6H4a8 8 0 1 0 8-8Z"
            fill="currentColor"
          />
        </svg>
      );
    case "chevDown":
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <path
            d="M6 9l6 6 6-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "check":
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <path
            d="M20 6 9 17l-5-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "lock":
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <path
            d="M7 11V8a5 5 0 0 1 10 0v3"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
          />
          <path
            d="M6 11h12v10H6V11Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
          />
        </svg>
      );
    case "upload":
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <path
            d="M12 3v12"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M7 8l5-5 5 5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M4 21h16"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      );
    case "wallet":
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <path
            d="M4 7h16v12H4V7Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
          />
          <path
            d="M4 7V6a2 2 0 0 1 2-2h12v3"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
          />
          <path
            d="M16 13h4v4h-4a2 2 0 0 1 0-4Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
          />
        </svg>
      );
    default:
      return null;
  }
}

export default function OnboardingDashboard() {
  const steps = useMemo(
    () => [
      {
        id: 1 as const,
        title: "Register",
       
      },
      {
        id: 2 as const,
        title: "Answer",
        
      },
      {
        id: 3 as const,
        title: "Verify",
       
      },
      {
        id: 4 as const,
        title: "Fund",
        
      },
    ],
    []
  );

  const [activeStep, setActiveStep] = useState<StepId>(1);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showFinishPopup, setShowFinishPopup] = useState(false);


  const [form, setForm] = useState<FormState>({
    email: "",
    password: "",
    country: "",

    employmentStatus: "",
    annualIncome: "",
    sourceOfFunds: "",

    docType: "",
    docNumber: "",
    otp: "",

    depositAmount: "",
    depositMethod: "",
  });

  // Cancel typing if component unmounts or demo restarts
  const abortRef = useRef<AbortController | null>(null);
  useEffect(() => {
    return () => abortRef.current?.abort();
  }, []);

  useEffect(() => {
  // Only auto-close when leaving step 4
  if (activeStep !== 4) setShowFinishPopup(false);
}, [activeStep]);


  const setField = (key: keyof FormState, value: string) => {
    setForm((p) => ({ ...p, [key]: value }));
  };

  const canNext = useMemo(() => {
    if (activeStep === 1) return !!(form.email.trim() && form.password.trim() && form.country.trim());
    if (activeStep === 2) return !!(form.employmentStatus.trim() && form.annualIncome.trim() && form.sourceOfFunds.trim());
    if (activeStep === 3) return !!(form.docType.trim() && form.docNumber.trim() && form.otp.trim());
    if (activeStep === 4) return !!(form.depositAmount.trim() && form.depositMethod.trim());
    return false;
  }, [activeStep, form]);

const goNext = async (fromDemo = false) => {
  if (isPlaying && !fromDemo) return;

  // If not allowed to go next, scroll to first missing field
  if (!canNext) {
    let target: HTMLElement | null = null;

    if (activeStep === 1) {
      target =
        (!form.email.trim() && emailRef.current) ||
        (!form.password.trim() && passwordRef.current) ||
        (!form.country.trim() && countryRef.current) ||
        null;
    }

    if (activeStep === 2) {
      target =
        (!form.employmentStatus.trim() && employmentRef.current) ||
        (!form.annualIncome.trim() && incomeRef.current) ||
        (!form.sourceOfFunds.trim() && sourceRef.current) ||
        null;
    }

    if (activeStep === 3) {
      target =
        (!form.docType.trim() && docTypeRef.current) ||
        (!form.docNumber.trim() && docNumberRef.current) ||
        (!form.otp.trim() && otpRef.current) ||
        null;
    }

    if (activeStep === 4) {
      target =
        (!form.depositAmount.trim() && depositAmountRef.current) ||
        (!form.depositMethod.trim() && depositMethodRef.current) ||
        null;
    }

    if (target) {
      await scrollIntoViewInContent(target);
      (target as HTMLInputElement | HTMLSelectElement).focus?.();
    }

    return;
  }

  // Finish action
  if (activeStep === 4) {
    setShowFinishPopup(true);
    return;
  }

  setActiveStep((s) => (Math.min(4, s + 1) as StepId));

  requestAnimationFrame(() => {
    scrollContentToTop();
  });
};


  const goBack = () => setActiveStep((s) => (Math.max(1, s - 1) as StepId));

const resetAll = () => {
  abortRef.current?.abort();
  setIsPlaying(false);
  setShowFinishPopup(false); 
  setActiveStep(1);
  setForm({
    email: "",
    password: "",
    country: "",
    employmentStatus: "",
    annualIncome: "",
    sourceOfFunds: "",
    docType: "",
    docNumber: "",
    otp: "",
    depositAmount: "",
    depositMethod: "",
  });
};





  // ====== DEMO CURSOR ======
  const [cursor, setCursor] = useState({
    x: 80,
    y: 80,
    visible: false,
    clicking: false,
  });

  const contentRef = useRef<HTMLDivElement | null>(null);

  // Sidebar refs
  const navQuestionnaireRef = useRef<HTMLButtonElement | null>(null);
  const navDocumentsRef = useRef<HTMLButtonElement | null>(null);
  const navDepositRef = useRef<HTMLButtonElement | null>(null);

  // Field refs
  const emailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const countryRef = useRef<HTMLSelectElement | null>(null);

  const employmentRef = useRef<HTMLSelectElement | null>(null);
  const incomeRef = useRef<HTMLSelectElement | null>(null);
  const sourceRef = useRef<HTMLSelectElement | null>(null);

  const docTypeRef = useRef<HTMLSelectElement | null>(null);
  const docNumberRef = useRef<HTMLInputElement | null>(null);
  const otpRef = useRef<HTMLInputElement | null>(null);

  const depositAmountRef = useRef<HTMLInputElement | null>(null);
  const depositMethodRef = useRef<HTMLSelectElement | null>(null);

  const nextBtnRef = useRef<HTMLButtonElement | null>(null);

  function getCenter(el: HTMLElement) {
    const r = el.getBoundingClientRect();
    return { x: r.left + r.width / 2, y: r.top + r.height / 2 };
  }

  async function moveCursorTo(el: HTMLElement, ms = 520) {
    const start = { x: cursor.x, y: cursor.y };
    const end = getCenter(el);

    setCursor((p) => ({ ...p, visible: true }));

    const t0 = performance.now();
    while (true) {
      const t = performance.now() - t0;
      const k = Math.min(1, t / ms);
      const eased = k < 0.5 ? 2 * k * k : 1 - Math.pow(-2 * k + 2, 2) / 2;

      const x = start.x + (end.x - start.x) * eased;
      const y = start.y + (end.y - start.y) * eased;

      setCursor((p) => ({ ...p, x, y }));

      if (k >= 1) break;
      // eslint-disable-next-line no-await-in-loop
      await sleep(16);
    }
  }

  async function clickCursor(ms = 160) {
    setCursor((p) => ({ ...p, clicking: true }));
    await sleep(ms);
    setCursor((p) => ({ ...p, clicking: false }));
  }

async function scrollIntoViewInContent(el: HTMLElement) {
  const scroller = contentRef.current;
  if (!scroller) return;

  const scRect = scroller.getBoundingClientRect();
  const elRect = el.getBoundingClientRect();

  const padding = 18;

  const elTopInScroller = elRect.top - scRect.top + scroller.scrollTop;
  const elBottomInScroller = elTopInScroller + elRect.height;

  const viewTop = scroller.scrollTop;
  const viewBottom = viewTop + scroller.clientHeight;

  const above = elTopInScroller < viewTop + padding;
  const below = elBottomInScroller > viewBottom - padding;

  if (above || below) {
    // keep it nice (not too center / not too aggressive)
    const targetTop = Math.max(0, elTopInScroller - padding);
    scroller.scrollTo({ top: targetTop, behavior: "smooth" });
    await sleep(520);
  }
}

async function scrollContentToTop() {
  const scroller = contentRef.current;
  if (!scroller) return;
  scroller.scrollTo({ top: 0, behavior: "smooth" });
  await sleep(420);
}


async function ensureNextVisible() {
  if (!nextBtnRef.current) return;
  await scrollIntoViewInContent(nextBtnRef.current);
}

function handleFieldFocus(e: { currentTarget: HTMLElement }) {
  const el = e.currentTarget;
  setTimeout(() => {
    scrollIntoViewInContent(el);
  }, 120);
}

  // ====== PLAY FULL GUIDED DEMO ======
  const playGuidedDemo = async () => {
    if (isPlaying) return;

    abortRef.current?.abort();
    const controller = new AbortController();
    abortRef.current = controller;

    setIsPlaying(true);
    setCursor((p) => ({ ...p, visible: true }));

    try {
      // ---- STEP 1: Register ----
      setActiveStep(1);
      await sleep(450);

      if (emailRef.current) {
        await scrollIntoViewInContent(emailRef.current);
        await moveCursorTo(emailRef.current);
        await clickCursor();
        await typeValue("test.umair@stonefort.com", (v) => setField("email", v), controller.signal);
        await sleep(140);
      }

      if (passwordRef.current) {
        await moveCursorTo(passwordRef.current);
        await clickCursor();
        await typeValue("Stonefort@12345", (v) => setField("password", v), controller.signal);
        await sleep(140);
        
      }

     

      if (countryRef.current) {
        await moveCursorTo(countryRef.current);
        await clickCursor();
        if (!controller.signal.aborted) setField("country", "United Arab Emirates");
        await sleep(220);
      }

      await ensureNextVisible();

      if (nextBtnRef.current) {
        await moveCursorTo(nextBtnRef.current);
        await clickCursor();
        await goNext();
        await sleep(520);
            }

      // ---- Sidebar click: Questionnaire ----
      if (navQuestionnaireRef.current) {
        await moveCursorTo(navQuestionnaireRef.current);
        await clickCursor();
        setActiveStep(2);
        await sleep(520);
      }

      // ---- STEP 2: Questionnaire ----
      if (employmentRef.current) {
        await scrollIntoViewInContent(employmentRef.current);
        await moveCursorTo(employmentRef.current);
        await clickCursor();
        if (!controller.signal.aborted) setField("employmentStatus", "Employed");
        await sleep(240);
      }

      if (incomeRef.current) {
        await moveCursorTo(incomeRef.current);
        await clickCursor();
        if (!controller.signal.aborted) setField("annualIncome", "$50,000 – $100,000");
        await sleep(240);
      }

      if (sourceRef.current) {
        await moveCursorTo(sourceRef.current);
        await clickCursor();
        if (!controller.signal.aborted) setField("sourceOfFunds", "Salary / Savings");
        await sleep(280);
      }
      await ensureNextVisible();

      if (nextBtnRef.current) {
        await moveCursorTo(nextBtnRef.current);
        await clickCursor();
        await goNext();
        await sleep(520);
      }

      // ---- Sidebar click: Documents ----
      if (navDocumentsRef.current) {
        await moveCursorTo(navDocumentsRef.current);
        await clickCursor();
        setActiveStep(3);
        await sleep(520);
      }

      // ---- STEP 3: Documents / Verify ----
      if (docTypeRef.current) {
        await scrollIntoViewInContent(docTypeRef.current);
        await moveCursorTo(docTypeRef.current);
        await clickCursor();
        if (!controller.signal.aborted) setField("docType", "Passport");
        await sleep(240);
      }

      if (docNumberRef.current) {
        await moveCursorTo(docNumberRef.current);
        await clickCursor();
        await typeValue("A12345678", (v) => setField("docNumber", v), controller.signal);
        await sleep(180);
      }

      if (otpRef.current) {
        await moveCursorTo(otpRef.current);
        await clickCursor();
        await typeValue("482913", (v) => setField("otp", v), controller.signal, 35);
        await sleep(240);
      }

      await ensureNextVisible();


      if (nextBtnRef.current) {
        await moveCursorTo(nextBtnRef.current);
        await clickCursor();
        await goNext();
        await sleep(520);
      }

      // ---- Sidebar click: Deposit ----
      if (navDepositRef.current) {
        await moveCursorTo(navDepositRef.current);
        await clickCursor();
        setActiveStep(4);
        await sleep(520);
      }

      // ---- STEP 4: Fund ----
      if (depositAmountRef.current) {
        await scrollIntoViewInContent(depositAmountRef.current);
        await moveCursorTo(depositAmountRef.current);
        await clickCursor();
        await typeValue("1000", (v) => setField("depositAmount", v), controller.signal);
        await sleep(180);
      }

      if (depositMethodRef.current) {
        await moveCursorTo(depositMethodRef.current);
        await clickCursor();
        if (!controller.signal.aborted) setField("depositMethod", "Bank Card");
        await sleep(240);
      }

      await ensureNextVisible();


      if (nextBtnRef.current) {
        await moveCursorTo(nextBtnRef.current);
        await clickCursor();
        await sleep(200); 
        await goNext(true);
        await sleep(500);
      }

      // End
      setCursor((p) => ({ ...p, visible: false }));
    } finally {
      setIsPlaying(false);
    }
  };

  return (
    <section className={`${styles.section} section`}>
      <div className="container">
        <div className={styles.wrapper}>
          {/* Laptop mockup + OVERLAY inside it */}
          <div className={styles.mockup}>
  {/* Laptop mockup (desktop/tablet) */}
  <div className={`${styles.mockupMedia} ${styles.laptopMedia}`}>
    <Image
      src="/images/laptop-mockup.png"
      alt="Laptop mockup"
      fill
      priority
      className={styles.mockupImg}
    />
  </div>

  {/* Phone mockup (mobile) */}
  <div className={`${styles.mockupMedia} ${styles.phoneMedia}`}>
    <Image
      src="/images/verify-mobile.png"  // <-- your phone mockup
      alt="Phone mockup"
      fill
      priority
      className={styles.mockupImg}
    />
  </div>

            {/* Dashboard overlay INSIDE mockup so % height works */}
            <div className={styles.dashboard}>
              {/* LEFT SIDEBAR */}
              <aside className={styles.sidebar} aria-label="Dashboard sidebar">
                <div className={styles.brand}>
                  <div className={styles.brandLogo}>
                    <Image
                      src="/images/sfs-logo.webp"
                      alt="Stonefort"
                      width={44}
                      height={44}
                      priority
                    />
                  </div>

                </div>

                <div className={styles.user}>
                <div className={styles.avatar}>
                    <Image
                    src="/images/user-demo.png"
                    alt="User avatar"
                    width={34}
                    height={34}
                    priority
                    />
                </div>


                </div>


                <nav className={styles.nav}>
                  <button className={styles.navItem} type="button" disabled={isPlaying}>
                    <span className={styles.navDot} />
                    Dashboard
                  </button>

                  <button ref={navDepositRef} className={styles.navItem} type="button" disabled={isPlaying}>
                    <span className={styles.navDot} />
                    Deposit
                  </button>

                  <button
                    ref={navQuestionnaireRef}
                    className={`${styles.navItem} ${styles.navActive}`}
                    type="button"
                    disabled={isPlaying}
                  >
                    <span className={styles.navDot} />
                    Questionnaire
                    <span className={styles.navBadge} title="Attention" aria-label="Attention">
                      !
                    </span>
                  </button>

                  <button className={styles.navItem} type="button" disabled={isPlaying}>
                    <span className={styles.navDot} />
                    Trading Info
                  </button>

                  <button className={styles.navItem} type="button" disabled={isPlaying}>
                    <span className={styles.navDot} />
                    Withdraw
                  </button>

                  <button ref={navDocumentsRef} className={styles.navItem} type="button" disabled={isPlaying}>
                    <span className={styles.navDot} />
                    Documents
                    <span className={styles.navBadge} title="Attention" aria-label="Attention">
                      !
                    </span>
                  </button>

                  <button className={styles.navItem} type="button" disabled={isPlaying}>
                    <span className={styles.navDot} />
                    Transactions History
                  </button>

                  <button className={styles.navItem} type="button" disabled={isPlaying}>
                    <span className={styles.navDot} />
                    Technical Analysis
                  </button>
                </nav>
              </aside>

              {/* MAIN */}
              <div className={styles.main}>
                <header className={styles.topbar}>
                  <div className={styles.topLeft}>
                    <button className={styles.menuBtn} type="button" aria-label="Menu" disabled={isPlaying}>
                      <Icon name="menu" />
                    </button>

                    <div className={styles.today}>
                      <div className={styles.todayDay}>Sunday 15:19</div>
                      <div className={styles.todayDate}>Dec 21, 2025</div>
                    </div>
                  </div>

                  <div className={styles.topActions}>

                    <a className={styles.topLink} href="#" onClick={(e) => e.preventDefault()}>
                      <Icon name="inbox" />
                      INBOX
                    </a>
                    <span className={styles.topSep} />
                    <a className={styles.topLink} href="#" onClick={(e) => e.preventDefault()}>
                      <Icon name="phone" />
                      +97143656600
                    </a>
                    <a className={styles.topLink} href="#" onClick={(e) => e.preventDefault()}>
                      <Icon name="mail" />
                      SUPPORT@STONEFORTSECURITIES.COM
                    </a>

                    <span className={styles.lang}>
                      <span className={styles.flag} aria-hidden="true" />
                      English
                      <Icon name="chevDown" className={styles.chev} />
                    </span>
                  </div>
                </header>

                {/* CONTENT */}
                <div ref={contentRef} className={styles.content}>

                    
                  {/* Stepper */}
                  <div className={styles.stepper}>
                    {steps.map((s) => {
                      const done = s.id < activeStep;
                      const active = s.id === activeStep;

                      return (
                        <button
                          key={s.id}
                          type="button"
                          className={`${styles.step} ${active ? styles.stepActive : ""}`}
                          onClick={() => !isPlaying && setActiveStep(s.id)}
                          aria-current={active ? "step" : undefined}
                          disabled={isPlaying}
                        >
                          <div className={styles.stepNum}>
                            {done ? <Icon name="check" /> : <span>{s.id}</span>}
                          </div>
                          <div className={styles.stepText}>
                            <div className={styles.stepTitle}>{s.title}</div>
                        
                          </div>
                        </button>
                      );
                    })}
                  </div>

                  <section className={styles.card} aria-label="Onboarding form">
                    <div className={styles.cardHeader}>
                      <div>
                        <div className={styles.cardKicker}>Client Questionnaire</div>
                        <div className={styles.cardTitle}>
                          Step {activeStep}: {steps[activeStep - 1].title}
                        </div>
                      </div>

                      <div className={styles.cardTools}>
                        <button
                          type="button"
                          className={`${styles.toolBtn} ${isPlaying ? styles.toolBtnBusy : ""}`}
                          onClick={playGuidedDemo}
                          disabled={isPlaying}
                        >
                          Play Guided Demo
                        </button>

                        <button type="button" className={styles.toolGhost} onClick={resetAll} disabled={isPlaying}>
                          Reset
                        </button>
                      </div>
                    </div>

                    {/* Step 1 */}
                    {activeStep === 1 && (
                      <div className={styles.formGrid}>
                        <div className={styles.field}>
                          <label className={styles.label}>
                            Email <span className={styles.req}>*</span>
                          </label>
                          <input
                            ref={emailRef}
                            onFocus={handleFieldFocus}
                            className={styles.input}
                            value={form.email}
                            onChange={(e) => setField("email", e.target.value)}
                            placeholder="name@example.com"
                            inputMode="email"
                            disabled={isPlaying}
                          />
                        </div>

                        <div className={styles.field}>
                          <label className={styles.label}>
                            Password <span className={styles.req}>*</span>
                          </label>
                          <input
                            ref={passwordRef}
                            onFocus={handleFieldFocus}
                            className={styles.input}
                            value={form.password}
                            onChange={(e) => setField("password", e.target.value)}
                            placeholder="Create a strong password"
                            type="password"
                            disabled={isPlaying}
                          />
                        </div>

                        <div className={styles.field}>
                          <label className={styles.label}>
                            Country <span className={styles.req}>*</span>
                          </label>
                          <div className={styles.selectWrap}>
                            <select
                              ref={countryRef}
                              onFocus={handleFieldFocus}
                              className={styles.select}
                              value={form.country}
                              onChange={(e) => setField("country", e.target.value)}
                              disabled={isPlaying}
                            >
                              <option value="">Select country</option>
                              <option>United Arab Emirates</option>
                              <option>United Kingdom</option>
                              <option>United States</option>
                              <option>Saudi Arabia</option>
                              <option>Pakistan</option>
                            </select>
                            <Icon name="chevDown" className={styles.selectChev} />
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Step 2 */}
                    {activeStep === 2 && (
                      <div className={styles.formGrid}>
                        <div className={styles.fieldFull}>
                          <label className={styles.label}>
                            Employment Status <span className={styles.req}>*</span>
                          </label>
                          <div className={styles.selectWrap}>
                            <select
                              ref={employmentRef}
                              onFocus={handleFieldFocus}
                              className={styles.select}
                              value={form.employmentStatus}
                              onChange={(e) => setField("employmentStatus", e.target.value)}
                              disabled={isPlaying}
                            >
                              <option value="">Select</option>
                              <option>Employed</option>
                              <option>Self-Employed</option>
                              <option>Student</option>
                              <option>Unemployed</option>
                              <option>Retired</option>
                            </select>
                            <Icon name="chevDown" className={styles.selectChev} />
                          </div>
                        </div>

                        <div className={styles.fieldFull}>
                          <label className={styles.label}>
                            Annual Income (Estimated in USD) <span className={styles.req}>*</span>
                          </label>
                          <div className={styles.selectWrap}>
                            <select
                              ref={incomeRef}
                              onFocus={handleFieldFocus}
                              className={styles.select}
                              value={form.annualIncome}
                              onChange={(e) => setField("annualIncome", e.target.value)}
                              disabled={isPlaying}
                            >
                              <option value="">Select</option>
                              <option>{"< $25,000"}</option>
                              <option>$25,000 – $50,000</option>
                              <option>$50,000 – $100,000</option>
                              <option>$100,000 – $250,000</option>
                              <option>{"> $250,000"}</option>
                            </select>
                            <Icon name="chevDown" className={styles.selectChev} />
                          </div>
                        </div>

                        <div className={styles.fieldFull}>
                          <label className={styles.label}>
                            Source of Funds <span className={styles.req}>*</span>
                          </label>
                          <div className={styles.selectWrap}>
                            <select
                              ref={sourceRef}
                              onFocus={handleFieldFocus}
                              className={styles.select}
                              value={form.sourceOfFunds}
                              onChange={(e) => setField("sourceOfFunds", e.target.value)}
                              disabled={isPlaying}
                            >
                              <option value="">Select</option>
                              <option>Salary / Savings</option>
                              <option>Investments</option>
                              <option>Business Income</option>
                              <option>Inheritance</option>
                              <option>Other</option>
                            </select>
                            <Icon name="chevDown" className={styles.selectChev} />
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Step 3 */}
                    {activeStep === 3 && (
                      <div className={styles.formGrid}>
                        <div className={styles.field}>
                          <label className={styles.label}>
                            Document Type <span className={styles.req}>*</span>
                          </label>
                          <div className={styles.selectWrap}>
                            <select
                              ref={docTypeRef}
                              onFocus={handleFieldFocus}
                              className={styles.select}
                              value={form.docType}
                              onChange={(e) => setField("docType", e.target.value)}
                              disabled={isPlaying}
                            >
                              <option value="">Select</option>
                              <option>Passport</option>
                              <option>National ID</option>
                              <option>Driving License</option>
                            </select>
                            <Icon name="chevDown" className={styles.selectChev} />
                          </div>
                        </div>

                        <div className={styles.field}>
                          <label className={styles.label}>
                            Document Number <span className={styles.req}>*</span>
                          </label>
                          <input
                            ref={docNumberRef}
                            onFocus={handleFieldFocus}
                            className={styles.input}
                            value={form.docNumber}
                            onChange={(e) => setField("docNumber", e.target.value)}
                            placeholder="e.g. A12345678"
                            disabled={isPlaying}
                          />
                        </div>

                        <div className={styles.fieldFull}>
                          <div className={styles.uploadRow}>
                            <div className={styles.uploadBox}>
                              <div className={styles.uploadIcon}>
                                <Icon name="upload" />
                              </div>
                              <div>
                                <div className={styles.uploadTitle}>Upload document</div>
                                <div className={styles.uploadHint}>
                                  (Dummy UI) In real CRM, this uploads your ID securely.
                                </div>
                              </div>
                            </div>

                            <div className={styles.secure}>
                              <Icon name="lock" className={styles.secureIcon} />
                              <div>
                                <div className={styles.secureTitle}>Secure verification</div>
                                <div className={styles.secureHint}>
                                  Your files are encrypted in transit & at rest.
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className={styles.field}>
                          <label className={styles.label}>
                            OTP Code <span className={styles.req}>*</span>
                          </label>
                          <input
                            ref={otpRef}
                            onFocus={handleFieldFocus}
                            className={styles.input}
                            value={form.otp}
                            onChange={(e) => setField("otp", e.target.value)}
                            placeholder="6-digit code"
                            inputMode="numeric"
                            disabled={isPlaying}
                          />
                        </div>
                      </div>
                    )}

                    {/* Step 4 */}
                    {activeStep === 4 && (
                      <div className={styles.formGrid}>
                        <div className={styles.field}>
                          <label className={styles.label}>
                            Deposit Amount (USD) <span className={styles.req}>*</span>
                          </label>
                          <input
                            ref={depositAmountRef}
                            onFocus={handleFieldFocus}
                            className={styles.input}
                            value={form.depositAmount}
                            onChange={(e) => setField("depositAmount", e.target.value)}
                            placeholder="e.g. 1000"
                            inputMode="numeric"
                            disabled={isPlaying}
                          />
                        </div>

                        <div className={styles.field}>
                          <label className={styles.label}>
                            Deposit Method <span className={styles.req}>*</span>
                          </label>
                          <div className={styles.selectWrap}>
                            <select
                              ref={depositMethodRef}
                              onFocus={handleFieldFocus}
                              className={styles.select}
                              value={form.depositMethod}
                              onChange={(e) => setField("depositMethod", e.target.value)}
                              disabled={isPlaying}
                            >
                              <option value="">Select</option>
                              <option>Bank Card</option>
                              <option>Bank Transfer</option>
                              <option>Crypto</option>
                            </select>
                            <Icon name="chevDown" className={styles.selectChev} />
                          </div>
                        </div>

                        <div className={styles.fieldFull}>

                        </div>
                      </div>
                    )}

                    {/* Footer controls */}
                    <div className={styles.footer}>
                      <button
                        type="button"
                        className={styles.back}
                        onClick={goBack}
                        disabled={activeStep === 1 || isPlaying}
                      >
                        Back
                      </button>

                      <div className={styles.footerRight}>
                        <div className={styles.progress} aria-label="Progress">
                          <div className={styles.progressBar}>
                            <div
                              className={styles.progressFill}
                              style={{ width: `${(activeStep / 4) * 100}%` }}
                            />
                          </div>
                          <div className={styles.progressText}>Step {activeStep} of 4</div>
                        </div>

                        <button
                        ref={nextBtnRef}
                        type="button"
                        className={styles.next}
                        onClick={() => goNext(false)}
                        disabled={!canNext || isPlaying}
                        >
                        {activeStep === 4 ? "Finish" : "Submit"}
                        </button>
                      </div>
                    </div>
                  </section>


                </div>
              </div>

                   
{showFinishPopup && (
  <div
    className={styles.modalOverlay}
    role="dialog"
    aria-modal="true"
    aria-label="Finish"
    onClick={() => setShowFinishPopup(false)}
  >
    <div
      className={styles.modal}
      onClick={(e) => e.stopPropagation()}
    >
      <div className={styles.modalHeader}>
        <div className={styles.modalTitle}>You’re ready to trade</div>
        <button
          type="button"
          className={styles.modalClose}
          onClick={() => setShowFinishPopup(false)}
          aria-label="Close"
        >
          ✕
        </button>
      </div>

      {/*  your same box content */}
      <div className={styles.fundNote}>
        <div className={styles.fundNoteIcon}>
          <Icon name="wallet" />
        </div>
        <div>
          <div className={styles.fundNoteTitle}>You’re ready to trade</div>
          <div className={styles.fundNoteText}>
            This is dummy guidance content. On live CRM, you’d be redirected to
            payment and then to your trading dashboard.
          </div>
        </div>
      </div>

      <div className={styles.modalActions}>
        <button
          type="button"
          className={styles.modalPrimary}
          onClick={() => setShowFinishPopup(false)}
        >
          Continue
        </button>
      </div>
    </div>
  </div>
)}

              {/* Demo cursor (fixed overlay) */}
              {cursor.visible && (
                <div
                  className={`${styles.demoCursor} ${cursor.clicking ? styles.demoCursorClick : ""}`}
                  style={{ left: cursor.x, top: cursor.y }}
                  aria-hidden="true"
                >
                  <span className={styles.cursorDot} />
                </div>
              )}
            </div>
          </div>

          {/* Shadow under mockup */}
          <div className={styles.baseShadow} aria-hidden="true" />
        </div>
      </div>
 
    </section>
  );
}
