"use client"
import React, { use, useState } from 'react'
import Link from 'next/link'
import useUserContext from '@/context/UserContext';


const steps = [
    {
        title: "Choose Funding Type",
        description: "Select the type of funding you need.",
        options: ["Crowdfunding", "Angel Investment", "Venture Capital", "Grant"],
        color: "#FFB347",
    },
    {
        title: "Enter Project Details",
        description: "Tell us about your project.",
        fields: [
            { label: "Project Name", type: "text" },
            { label: "Funding Goal ($)", type: "number" },
            { label: "Description", type: "textarea" },
        ],
        color: "#77DD77",
    },
    {
        title: "Upload Documents",
        description: "Attach relevant documents for verification.",
        fields: [{ label: "Business Plan", type: "file" }],
        color: "#AEC6CF",
    },
    {
        title: "Review & Submit",
        description: "Check your details and submit your funding request.",
        color: "#CBAACB",
    },
];

const FundingPage = () => {
    const [step, setStep] = useState(0);
    const [form, setForm] = useState({
        type: "",
        name: "",
        goal: "",
        description: "",
        file: null,
    });

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setForm((prev) => ({
            ...prev,
            [name]: files ? files[0] : value,
        }));
    };

    const handleOptionSelect = (option) => {
        setForm((prev) => ({ ...prev, type: option }));
        setStep(step + 1);
    };

    const handleNext = () => setStep(step + 1);
    const handleBack = () => setStep(step - 1);

    return (
        <div
            style={{
                minHeight: "100vh",
                background: "linear-gradient(135deg, #FFB347 0%, #77DD77 100%)",
                padding: "40px 0",
                fontFamily: "Segoe UI, sans-serif",
            }}
        >
            <div
                style={{
                    maxWidth: 500,
                    margin: "0 auto",
                    background: "#fff",
                    borderRadius: 24,
                    boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
                    padding: 32,
                }}
            >
                <div style={{ textAlign: "center", marginBottom: 32 }}>
                    <h1
                        style={{
                            background: `linear-gradient(90deg, #FFB347, #AEC6CF, #CBAACB)`,
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            fontWeight: 800,
                            fontSize: 36,
                            margin: 0,
                        }}
                    >
                        Funding Process
                    </h1>
                    <p style={{ color: "#555", fontSize: 18 }}>
                        Secure funding for your project in four easy steps!
                    </p>
                </div>
                <div>
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                            marginBottom: 24,
                        }}
                    >
                        {steps.map((s, i) => (
                            <div
                                key={s.title}
                                style={{
                                    flex: 1,
                                    textAlign: "center",
                                    color: step === i ? "#fff" : "#444",
                                    background: step === i ? s.color : "#eee",
                                    borderRadius: 12,
                                    padding: "8px 0",
                                    margin: "0 4px",
                                    fontWeight: step === i ? 700 : 500,
                                    transition: "background 0.3s",
                                }}
                            >
                                {i + 1}
                            </div>
                        ))}
                    </div>
                    <div>
                        <h2 style={{ color: steps[step].color }}>{steps[step].title}</h2>
                        <p style={{ color: "#666" }}>{steps[step].description}</p>
                        {step === 0 && (
                            <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 16 }}>
                                {steps[0].options.map((option) => (
                                    <button
                                        key={option}
                                        onClick={() => handleOptionSelect(option)}
                                        style={{
                                            background: "linear-gradient(90deg, #AEC6CF, #CBAACB)",
                                            color: "#fff",
                                            border: "none",
                                            borderRadius: 8,
                                            padding: "12px 24px",
                                            fontWeight: 600,
                                            cursor: "pointer",
                                            boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                                        }}
                                    >
                                        {option}
                                    </button>
                                ))}
                            </div>
                        )}
                        {step === 1 && (
                            <form
                                onSubmit={(e) => {
                                    e.preventDefault();
                                    handleNext();
                                }}
                                style={{ marginTop: 16 }}
                            >
                                {steps[1].fields.map((field) => (
                                    <div key={field.label} style={{ marginBottom: 16 }}>
                                        <label style={{ fontWeight: 600, color: "#333" }}>
                                            {field.label}
                                        </label>
                                        {field.type === "textarea" ? (
                                            <textarea
                                                name="description"
                                                value={form.description}
                                                onChange={handleChange}
                                                required
                                                style={{
                                                    width: "100%",
                                                    padding: 8,
                                                    borderRadius: 6,
                                                    border: "1px solid #ccc",
                                                    marginTop: 6,
                                                }}
                                            />
                                        ) : (
                                            <input
                                                type={field.type}
                                                name={field.label === "Project Name" ? "name" : "goal"}
                                                value={field.label === "Project Name" ? form.name : form.goal}
                                                onChange={handleChange}
                                                required
                                                style={{
                                                    width: "100%",
                                                    padding: 8,
                                                    borderRadius: 6,
                                                    border: "1px solid #ccc",
                                                    marginTop: 6,
                                                }}
                                            />
                                        )}
                                    </div>
                                ))}
                                <div style={{ display: "flex", justifyContent: "space-between" }}>
                                    <button
                                        type="button"
                                        onClick={handleBack}
                                        style={{
                                            background: "#eee",
                                            color: "#333",
                                            border: "none",
                                            borderRadius: 8,
                                            padding: "10px 24px",
                                            fontWeight: 600,
                                            cursor: "pointer",
                                        }}
                                    >
                                        Back
                                    </button>
                                    <button
                                        type="submit"
                                        style={{
                                            background: "linear-gradient(90deg, #77DD77, #FFB347)",
                                            color: "#fff",
                                            border: "none",
                                            borderRadius: 8,
                                            padding: "10px 24px",
                                            fontWeight: 600,
                                            cursor: "pointer",
                                        }}
                                    >
                                        Next
                                    </button>
                                </div>
                            </form>
                        )}
                        {step === 2 && (
                            <form
                                onSubmit={(e) => {
                                    e.preventDefault();
                                    handleNext();
                                }}
                                style={{ marginTop: 16 }}
                            >
                                <div style={{ marginBottom: 16 }}>
                                    <label style={{ fontWeight: 600, color: "#333" }}>
                                        {steps[2].fields[0].label}
                                    </label>
                                    <input
                                        type="file"
                                        name="file"
                                        onChange={handleChange}
                                        required
                                        style={{
                                            width: "100%",
                                            padding: 8,
                                            borderRadius: 6,
                                            border: "1px solid #ccc",
                                            marginTop: 6,
                                        }}
                                    />
                                </div>
                                <div style={{ display: "flex", justifyContent: "space-between" }}>
                                    <button
                                        type="button"
                                        onClick={handleBack}
                                        style={{
                                            background: "#eee",
                                            color: "#333",
                                            border: "none",
                                            borderRadius: 8,
                                            padding: "10px 24px",
                                            fontWeight: 600,
                                            cursor: "pointer",
                                        }}
                                    >
                                        Back
                                    </button>
                                    <button
                                        type="submit"
                                        style={{
                                            background: "linear-gradient(90deg, #AEC6CF, #CBAACB)",
                                            color: "#fff",
                                            border: "none",
                                            borderRadius: 8,
                                            padding: "10px 24px",
                                            fontWeight: 600,
                                            cursor: "pointer",
                                        }}
                                    >
                                        Next
                                    </button>
                                </div>
                            </form>
                        )}
                        {step === 3 && (
                            <div style={{ marginTop: 16 }}>
                                <div
                                    style={{
                                        background: "#f7f7f7",
                                        borderRadius: 12,
                                        padding: 16,
                                        marginBottom: 16,
                                    }}
                                >
                                    <h3 style={{ color: "#77DD77" }}>Review Details</h3>
                                    <p>
                                        <strong>Funding Type:</strong> {form.type}
                                    </p>
                                    <p>
                                        <strong>Project Name:</strong> {form.name}
                                    </p>
                                    <p>
                                        <strong>Funding Goal:</strong> ${form.goal}
                                    </p>
                                    <p>
                                        <strong>Description:</strong> {form.description}
                                    </p>
                                    <p>
                                        <strong>Business Plan:</strong>{" "}
                                        {form.file ? form.file.name : "Not uploaded"}
                                    </p>
                                </div>
                                <div style={{ display: "flex", justifyContent: "space-between" }}>
                                    <button
                                        type="button"
                                        onClick={handleBack}
                                        style={{
                                            background: "#eee",
                                            color: "#333",
                                            border: "none",
                                            borderRadius: 8,
                                            padding: "10px 24px",
                                            fontWeight: 600,
                                            cursor: "pointer",
                                        }}
                                    >
                                        Back
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => alert("Funding request submitted!")}
                                        style={{
                                            background: "linear-gradient(90deg, #FFB347, #77DD77)",
                                            color: "#fff",
                                            border: "none",
                                            borderRadius: 8,
                                            padding: "10px 24px",
                                            fontWeight: 600,
                                            cursor: "pointer",
                                        }}
                                    >
                                        Submit
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <div style={{ textAlign: "center", marginTop: 32, color: "#fff", fontWeight: 600 }}>
                <span>Make a good relation with us🚀</span>
            </div>
        </div>
    );
};

export default FundingPage;