"use client";

import { useState } from "react";
import { concernTypes, siteConfig } from "@/data/site";
import SectionHeader from "./SectionHeader";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = {
      parentName: formData.get("parentName")?.toString() || "",
      phone: formData.get("phone")?.toString() || "",
      email: formData.get("email")?.toString() || "",
      childName: formData.get("childName")?.toString() || "",
      childAge: formData.get("childAge")?.toString() || "",
      gender: formData.get("gender")?.toString() || "",
      concernType: formData.get("concernType")?.toString() || "",
      preferredDate: formData.get("preferredDate")?.toString() || "",
      message: formData.get("message")?.toString() || "",
    };

    const whatsappMessage = `Hello Sanjeevani Rehabilitation Centre,

I would like to book an appointment.

Parent Name: ${payload.parentName}
Phone: ${payload.phone}
Email: ${payload.email || "Not provided"}

Child Name: ${payload.childName}
Age: ${payload.childAge}
Gender: ${payload.gender}

Concern Type: ${payload.concernType}
Preferred Date: ${payload.preferredDate || "Not selected"}

Message:
${payload.message || "No message provided"}

Thank you.`;

    try {
      const res = await fetch("/api/inquiries", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        throw new Error("Failed to submit inquiry");
      }

      setSuccess(true);
      form.reset();

      const whatsappUrl = `${siteConfig.whatsappHref.split("?")[0]}?text=${encodeURIComponent(
        whatsappMessage
      )}`;

      window.open(whatsappUrl, "_blank");
    } catch {
      alert("Something went wrong. Please try again or contact us on WhatsApp.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="contact" className="section-padding bg-slate-50">
      <div className="container-page">
        <SectionHeader
          eyebrow="Appointment"
          title="Book Your Child's Assessment"
          description="Share your details and our clinic will contact you shortly to schedule the right therapy consultation."
        />

        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[2rem] bg-white p-5 shadow-soft sm:p-7">
            <h3 className="text-2xl font-black text-brand-ink">
              Talk to Sanjeevani
            </h3>

            <p className="mt-3 leading-7 text-slate-600">
              For faster response, call or WhatsApp the clinic directly.
            </p>

            <div className="mt-6 flex flex-col gap-4 sm:flex-row">
              <a
                href={siteConfig.phoneHref}
                className="inline-flex items-center justify-center rounded-full bg-green-700 px-6 py-3 font-bold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-green-800"
              >
                📞 Call Now
              </a>

              <a
                href={siteConfig.whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-green-500 px-6 py-3 font-bold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-green-600"
              >
                WhatsApp
              </a>
            </div>

            <div className="mt-8 rounded-3xl bg-brand-softGreen p-5">
              <p className="font-bold text-brand-ink">Clinic Address</p>
              <p className="mt-2 text-slate-600">{siteConfig.address}</p>
              <p className="mt-2 font-bold text-brand-green">
                {siteConfig.phone}
              </p>
            </div>

            <iframe
              title="Clinic location map"
              src={siteConfig.mapEmbed}
              className="mt-6 h-72 w-full rounded-3xl border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-[2rem] bg-white p-5 shadow-soft sm:p-7"
          >
            {success && (
              <div className="mb-6 rounded-3xl border border-green-200 bg-green-50 p-4 text-green-800">
                <p className="font-black">Thank you!</p>
                <p className="mt-1 text-sm">
                  Your appointment request has been received. Our clinic will
                  contact you shortly.
                </p>
              </div>
            )}

            <h3 className="text-2xl font-black text-brand-ink">
              Appointment Request Form
            </h3>

            <p className="mt-2 text-sm text-slate-500">
              Fields marked with * are required.
            </p>

            <div className="mt-6 space-y-6">
              <div>
                <h4 className="mb-4 text-lg font-black text-brand-green">
                  Parent Details
                </h4>

                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="grid gap-2">
                    <span className="font-semibold text-brand-ink">
                      Parent Name *
                    </span>
                    <input
                      name="parentName"
                      required
                      className="focus-ring rounded-2xl border border-slate-200 px-4 py-3"
                      placeholder="Parent name"
                    />
                  </label>

                  <label className="grid gap-2">
                    <span className="font-semibold text-brand-ink">
                      Phone Number *
                    </span>
                    <input
                      name="phone"
                      required
                      type="tel"
                      className="focus-ring rounded-2xl border border-slate-200 px-4 py-3"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </label>

                  <label className="grid gap-2 sm:col-span-2">
                    <span className="font-semibold text-brand-ink">
                      Email Address
                    </span>
                    <input
                      name="email"
                      type="email"
                      className="focus-ring rounded-2xl border border-slate-200 px-4 py-3"
                      placeholder="Optional"
                    />
                  </label>
                </div>
              </div>

              <div>
                <h4 className="mb-4 text-lg font-black text-brand-green">
                  Child Details
                </h4>

                <div className="grid gap-4 sm:grid-cols-3">
                  <label className="grid gap-2 sm:col-span-2">
                    <span className="font-semibold text-brand-ink">
                      Child Name *
                    </span>
                    <input
                      name="childName"
                      required
                      className="focus-ring rounded-2xl border border-slate-200 px-4 py-3"
                      placeholder="Child name"
                    />
                  </label>

                  <label className="grid gap-2">
                    <span className="font-semibold text-brand-ink">Age *</span>
                    <input
                      name="childAge"
                      required
                      className="focus-ring rounded-2xl border border-slate-200 px-4 py-3"
                      placeholder="5 years"
                    />
                  </label>

                  <label className="grid gap-2 sm:col-span-3">
                    <span className="font-semibold text-brand-ink">
                      Gender *
                    </span>
                    <select
                      name="gender"
                      required
                      defaultValue=""
                      className="focus-ring rounded-2xl border border-slate-200 px-4 py-3"
                    >
                      <option value="" disabled>
                        Select gender
                      </option>
                      <option>Male</option>
                      <option>Female</option>
                      <option>Other</option>
                    </select>
                  </label>
                </div>
              </div>

              <div>
                <h4 className="mb-4 text-lg font-black text-brand-green">
                  Therapy Details
                </h4>

                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="grid gap-2">
                    <span className="font-semibold text-brand-ink">
                      Concern Type *
                    </span>
                    <select
                      name="concernType"
                      required
                      defaultValue=""
                      className="focus-ring rounded-2xl border border-slate-200 px-4 py-3"
                    >
                      <option value="" disabled>
                        Select concern
                      </option>
                      {concernTypes.map((concern) => (
                        <option key={concern}>{concern}</option>
                      ))}
                    </select>
                  </label>

                  <label className="grid gap-2">
                    <span className="font-semibold text-brand-ink">
                      Preferred Date
                    </span>
                    <input
                      name="preferredDate"
                      type="date"
                      className="focus-ring rounded-2xl border border-slate-200 px-4 py-3"
                    />
                  </label>

                  <label className="grid gap-2 sm:col-span-2">
                    <span className="font-semibold text-brand-ink">
                      Message
                    </span>
                    <textarea
                      name="message"
                      className="focus-ring min-h-28 rounded-2xl border border-slate-200 px-4 py-3"
                      placeholder="Tell us briefly about your child's concern"
                    />
                  </label>
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="mt-2 w-full rounded-full bg-green-700 px-6 py-4 text-lg font-black text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-green-800 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {loading ? "Submitting..." : "Submit Appointment Request"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}